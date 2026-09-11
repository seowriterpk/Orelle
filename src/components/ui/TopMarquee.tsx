import { motion } from 'motion/react';

export function TopMarquee() {
  const text = "☆ 45 West 47th Street Booth 5 ☆ Direct Diamond District Payouts ☆ Live Metal Spot Rates ☆ Licensed NYC Secondhand Dealer ☆ Immediate Cash & Wire Payments ";
  const repeatCount = 10;
  
  return (
    <div className="bg-[#D4AF37] text-black py-1.5 overflow-hidden flex whitespace-nowrap">
      <motion.div
        className="flex text-[9px] uppercase tracking-[0.2em] font-bold"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 120 
        }}
      >
        <span>{text.repeat(repeatCount)}</span>
      </motion.div>
    </div>
  );
}
