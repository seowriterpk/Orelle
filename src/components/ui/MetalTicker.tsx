import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function MetalTicker() {
  const [prices, setPrices] = useState<any[]>([]);

  useEffect(() => {
    let isMounted = true;
    
    const fetchPrices = async () => {
      try {
        const response = await fetch('/api/metal-prices');
        const contentType = response.headers.get("content-type");
        if (!response.ok || !contentType || !contentType.includes("application/json")) {
            throw new Error('Failed to fetch valid prices');
        }
        const data = await response.json();
        
        if (isMounted) {
          if (Array.isArray(data)) {
            setPrices(data);
          } else if (data && data.success && Array.isArray(data.data)) {
            setPrices(data.data);
          }
        }
      } catch (error) {
        if (isMounted) {
          console.error("Failed to fetch live prices", error);
        }
      }
    };

    fetchPrices();
    
    // Refresh every 5 minutes (300000 ms)
    const interval = setInterval(fetchPrices, 300000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  if (!prices || prices.length === 0) {
    return null;
  }

  const formatMetal = (code: string) => {
    switch(code) {
      case 'XAU': return 'Gold';
      case 'XAG': return 'Silver';
      case 'XPT': return 'Platinum';
      case 'XPD': return 'Palladium';
      default: return code;
    }
  };

  // Create enough items to fill ultrawide screens
  const baseItems = Array(20).fill(prices).flat();

  return (
    <div className="bg-[#111] text-[#E5E5E5] py-2 overflow-hidden flex whitespace-nowrap border-b border-[#222]">
      <motion.div
        className="flex shrink-0 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 150 
        }}
      >
        {/* First block */}
        <div className="flex gap-12 pr-12 text-[10px] uppercase tracking-wider font-mono font-medium">
          {baseItems.map((item, index) => (
            <div key={`block1-${item.metal}-${index}`} className="flex items-center gap-2">
              <span className="text-[#999]">{formatMetal(item.metal)}</span>
              <span className="text-[#D4AF37]">
                ${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          ))}
        </div>
        {/* Second identical block for seamless looping */}
        <div className="flex gap-12 pr-12 text-[10px] uppercase tracking-wider font-mono font-medium">
          {baseItems.map((item, index) => (
            <div key={`block2-${item.metal}-${index}`} className="flex items-center gap-2">
              <span className="text-[#999]">{formatMetal(item.metal)}</span>
              <span className="text-[#D4AF37]">
                ${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
