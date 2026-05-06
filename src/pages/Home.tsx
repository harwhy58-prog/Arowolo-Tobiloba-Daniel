import { motion } from 'motion/react';
import { ArrowRight, Star, TrendingUp, Users, ShieldCheck, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, PROJECTS } from '../constants';

export default function Home() {
  return (
    <div className="pt-20 min-h-screen flex flex-col">
      {/* Main Editorial Container */}
      <div className="flex-grow grid lg:grid-cols-[1.4fr_1fr] bg-primary">
        
        {/* Content Pane */}
        <section className="section-padding flex flex-col justify-center pane-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-10 tracking-tight">
              I help stores & businesses get more <span className="luxury-text-gradient">qualified clients</span> consistently.
            </h1>
            <p className="text-lg text-white/70 max-w-xl mb-12 leading-relaxed font-medium">
              Transforming your digital presence from a standard portfolio into a high-conversion sales machine using 2026-standard UX logic.
            </p>
            <div className="flex flex-wrap gap-6 mb-16">
              <Link to="/booking" className="btn-primary">
                Secure Your Growth Strategy
              </Link>
            </div>
            
            {/* Service Grid with editorial borders */}
            <div className="grid md:grid-cols-2 gap-10 mt-12">
              {SERVICES.slice(0, 4).map((service, i) => (
                <div key={i} className="service-item-border">
                  <h3 className="text-xs font-black uppercase tracking-widest text-secondary mb-2">{service.title}</h3>
                  <p className="text-[11px] opacity-60 leading-relaxed font-bold uppercase tracking-wider">{service.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Funnel Pane */}
        <section className="bg-dark-surface section-padding flex flex-col gap-12 overflow-hidden relative">
          {/* Booking Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/10 p-10 relative"
          >
            <div className="absolute -top-3 right-6 bg-secondary text-primary px-3 py-1 font-black text-[9px] uppercase tracking-widest">
              Confirmed Results
            </div>
            
            <div className="flex gap-10 mb-10 pb-8 border-b border-white/10">
              <div>
                <p className="text-3xl font-serif text-secondary">$2.4M+</p>
                <p className="text-[9px] font-black uppercase tracking-widest opacity-40">Revenue Generated</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-secondary">184%</p>
                <p className="text-[9px] font-black uppercase tracking-widest opacity-40">Avg Conversion Lift</p>
              </div>
            </div>

            <div className="space-y-6">
               <input type="text" placeholder="FULL NAME" className="w-full bg-transparent border-b border-white/20 py-3 text-xs font-bold uppercase tracking-widest focus:border-secondary outline-none transition-colors" />
               <input type="email" placeholder="WORK EMAIL" className="w-full bg-transparent border-b border-white/20 py-3 text-xs font-bold uppercase tracking-widest focus:border-secondary outline-none transition-colors" />
               <input type="text" placeholder="MONTHLY REVENUE?" className="w-full bg-transparent border-b border-white/20 py-3 text-xs font-bold uppercase tracking-widest focus:border-secondary outline-none transition-colors" />
               <Link to="/booking" className="btn-primary w-full mt-4">Book Discovery Call</Link>
            </div>
          </motion.div>

          {/* Testimonial Snippet */}
          <div className="mt-8">
             <p className="text-lg font-serif italic text-white/80 leading-relaxed max-w-md">
                "AROWOLO TOBILOBA didn't just build a site; they built a revenue engine. Our leads increased by 300% in the first quarter post-launch."
             </p>
             <div className="mt-6 text-[10px] font-black tracking-[0.2em] uppercase text-secondary">
                — Marcus Thorne, CEO at Nexus Retail
             </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex gap-6 opacity-20 filter grayscale mt-auto">
             {[1, 2, 3].map(i => (
               <img key={i} src={`https://via.placeholder.com/100x40?text=BRAND+${i}`} alt="Brand" className="h-6" />
             ))}
          </div>
        </section>
      </div>

      {/* Decorative divider footer */}
      <div className="h-[10px] bg-secondary w-full" />
    </div>
  );
}
