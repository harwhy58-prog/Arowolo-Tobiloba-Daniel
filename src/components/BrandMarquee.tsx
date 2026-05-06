import { motion } from 'motion/react';

const BRANDS = [
  "TechFlow", "LuxeWare", "Zenith Agencies", "Bloom", "Artisan Goods",
  "Nordic Sol", "Elevate SaaS", "Vantage Media", "Prime Real Estate", "Global Finance"
];

export default function BrandMarquee() {
  return (
    <div className="bg-primary py-16 border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 mb-8">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary/50 text-center">
          Trusted by Market-Leading Brands
        </h3>
      </div>
      
      <div className="relative flex">
        <motion.div 
          className="flex whitespace-nowrap gap-20 py-4"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-3xl font-serif text-white/20 italic hover:text-secondary transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
