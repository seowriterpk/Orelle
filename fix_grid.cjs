const fs = require('fs');
let content = fs.readFileSync('src/components/sections/LivePricesLocationSections.tsx', 'utf8');

// The tricky part is the JSX.
const matchStr = `{loading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="bg-[#0B0B0A] border border-[#222] rounded-xl p-8 flex flex-col items-center justify-center h-48 animate-pulse">
                <div className="w-16 h-4 bg-[#222] rounded mb-6"></div>
                <div className="w-24 h-8 bg-[#333] rounded"></div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-[#0B0B0A] border border-[#222] rounded-xl p-12 text-center">
              <div className="text-[#999] text-sm mb-2">Market data temporarily unavailable.</div>
              <div className="text-[#555] text-[10px] uppercase tracking-widest">[METALS API PROVIDER — CLIENT/DEV CONFIRMATION REQUIRED]</div>
            </div>
          ) : (
            prices?.map((item: any) => (`;

content = content.replace(matchStr, `prices?.map((item: any) => (`);
content = content.replace(`))
          )}`, `))
          }`);

fs.writeFileSync('src/components/sections/LivePricesLocationSections.tsx', content);
