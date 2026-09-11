import express from "express";
import path from "path";
import dotenv from "dotenv";
import compression from "compression";

dotenv.config();

let metalCache = {
    data: null as any,
    timestamp: 0
};

let refreshPromise: Promise<any> | null = null;
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

// API Ninjas keys ordered by priority with automatic failover cascade
const API_NINJAS_KEYS = [
    process.env.API_NINJAS_KEY_1 || "F47ROzBXXV5Cex41ZAiVRdKa8UcGCHmwOE8kZuhs",
    process.env.API_NINJAS_KEY_2 || "0zlTurAS2Vl6qLMhdpsASNUz1vMV3E0NAWeNipj0",
    process.env.API_NINJAS_KEY_3 || "xvJH7zyrsazZM/kZE3YXGg==H5UTZuI8g0a85lRI"
];

// Helper to fetch commodity from API Ninjas with automatic key rotation and fallback
async function fetchNinjaCommodity(commodityName: string): Promise<number | null> {
    for (let i = 0; i < API_NINJAS_KEYS.length; i++) {
        const key = API_NINJAS_KEYS[i];
        if (!key) continue;
        try {
            const res = await fetch(`https://api.api-ninjas.com/v1/commodityprice?name=${encodeURIComponent(commodityName)}`, {
                headers: { "X-Api-Key": key }
            });

            if (res.ok) {
                const data = await res.json();
                if (typeof data?.price === 'number' && !isNaN(data.price)) {
                    return data.price;
                }
            } else if (res.status === 429 || res.status === 403 || res.status === 400) {
                const errData = await res.json().catch(() => ({}));
                console.warn(`[API Ninjas Key ${i + 1} Limit/Error]: Status ${res.status}`, errData?.error || "");
                // Cascade to next key in array
                continue;
            }
        } catch (err: any) {
            console.warn(`[API Ninjas Key ${i + 1} Network Error]:`, err?.message);
            // Cascade to next key in array
            continue;
        }
    }
    return null;
}

async function fetchMetalPrices() {
    try {
        const headers = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" };
        
        // Execute parallel requests for Gold, Silver, Platinum, and Palladium
        // Uses the 3-key cascading API Ninjas queries first, with live market feed fallbacks
        const [goldRes, silverRes, platinumRes, palladiumRes] = await Promise.allSettled([
            (async () => {
                const ninjaPrice = await fetchNinjaCommodity("micro_gold");
                if (ninjaPrice !== null) return { metal: 'XAU', price: ninjaPrice };
                const yf = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/GC=F", { headers });
                const yfd = await yf.json();
                return { metal: 'XAU', price: yfd?.chart?.result?.[0]?.meta?.regularMarketPrice };
            })(),
            (async () => {
                const ninjaPrice = await fetchNinjaCommodity("micro_silver");
                if (ninjaPrice !== null) return { metal: 'XAG', price: ninjaPrice };
                const yf = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/SI=F", { headers });
                const yfd = await yf.json();
                return { metal: 'XAG', price: yfd?.chart?.result?.[0]?.meta?.regularMarketPrice };
            })(),
            (async () => {
                const ninjaPrice = await fetchNinjaCommodity("micro_platinum");
                if (ninjaPrice !== null) return { metal: 'XPT', price: ninjaPrice };
                const yf = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/PL=F", { headers });
                const yfd = await yf.json();
                return { metal: 'XPT', price: yfd?.chart?.result?.[0]?.meta?.regularMarketPrice };
            })(),
            (async () => {
                const ninjaPrice = await fetchNinjaCommodity("micro_palladium");
                if (ninjaPrice !== null) return { metal: 'XPD', price: ninjaPrice };
                const yf = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/PA=F", { headers });
                const yfd = await yf.json();
                return { metal: 'XPD', price: yfd?.chart?.result?.[0]?.meta?.regularMarketPrice };
            })()
        ]);

        const results: { metal: string; price: number }[] = [];
        if (goldRes.status === 'fulfilled' && goldRes.value?.price) results.push(goldRes.value);
        if (silverRes.status === 'fulfilled' && silverRes.value?.price) results.push(silverRes.value);
        if (platinumRes.status === 'fulfilled' && platinumRes.value?.price) results.push(platinumRes.value);
        if (palladiumRes.status === 'fulfilled' && palladiumRes.value?.price) results.push(palladiumRes.value);

        return results;
    } catch (error) {
        console.warn("fetchMetalPrices error. Hiding prices.", error);
        return [];
    }
}

async function getMetalPrices() {
    const now = Date.now();

    if (
        metalCache.data &&
        now - metalCache.timestamp < CACHE_DURATION
    ) {
        return metalCache.data;
    }

    if (refreshPromise) {
        return refreshPromise;
    }

    refreshPromise = fetchMetalPrices()
        .then(mappedData => {
            metalCache = {
                data: mappedData,
                timestamp: Date.now()
            };
            return mappedData;
        })
        .finally(() => {
            refreshPromise = null;
        });

    return refreshPromise;
}

async function startServer() {
  // Pre-fetch metal prices and set up background interval
  getMetalPrices().catch(console.error);
  setInterval(() => {
      getMetalPrices().catch(console.error);
  }, CACHE_DURATION);

  const app = express();
  const PORT = process.env.PORT || 3000;

  // Compress all responses for speed optimization
  app.use(compression());
  app.use(express.json());

  // API routes FIRST
  app.get('/api/metal-prices', async (req, res) => {
    try {
        const prices = await getMetalPrices();
        res.json({
            success: true,
            data: prices,
            cachedAt: metalCache.timestamp
        });
    } catch (error: any) {
        console.error("Metal price error:", error);

        // If API fails but old cache exists, serve stale data
        if (metalCache.data) {
            return res.json({
                success: true,
                stale: true,
                data: metalCache.data,
                cachedAt: metalCache.timestamp
            });
        }

        res.status(503).json({
            success: false,
            error: "Metal prices temporarily unavailable"
        });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
