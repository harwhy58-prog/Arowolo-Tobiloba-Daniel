import { motion } from 'motion/react';
import { Shield, Target, Award, Briefcase, Mail, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-primary text-white">
      {/* 1. VISION & VALUE PROP */}
      <section className="pt-40 pb-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-secondary font-black tracking-[0.3em] uppercase text-[10px] mb-8 flex items-center gap-4">
                 <span className="w-12 h-[1px] bg-secondary"></span>
                 The Methodology
              </div>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.05] tracking-tight mb-10">
                I Build Digital <span className="luxury-text-gradient italic">Ecosystems</span> That Force Growth.
              </h1>
              <p className="text-xl text-white/60 mb-10 leading-relaxed font-medium">
                Designing a website is easy. Engineering a conversion machine is an art. I combine high-class aesthetics with aggressive marketing logic to transform standard portfolios into 24/7 revenue generators.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                 {[
                   "Data-Backed UI/UX Logic",
                   "Psychology-Driven Funnels",
                   "Premium Brand Authority",
                   "High-Velocity SEO Systems"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-secondary">
                      <Zap size={14} /> {item}
                   </div>
                 ))}
              </div>

              <Link to="/booking" className="bg-white text-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-secondary transition-all inline-block">
                 Let's Audit Your Strategy
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-secondary/10 -rotate-3 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000" 
                alt="Architecture" 
                className="w-full grayscale border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CORE PHILOSOPHY */}
      <section className="py-32 bg-dark-surface">
         <div className="max-w-7xl mx-auto px-10">
            <div className="max-w-3xl mb-24">
               <h2 className="text-4xl md:text-6xl font-serif mb-10 italic">We Sell Results, <br /> Not Just Designs.</h2>
               <p className="text-white/40 text-lg leading-relaxed">
                  Traditional designers focus on "looking good." Growth architects focus on "performing well." I bridge the gap by combining visceral visual appeal with clinical conversion optimization. Your website should be your hardest-working employee.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
               {[
                 { icon: Award, label: "Market Leaders Built", val: "50+" },
                 { icon: Shield, label: "Brand Integrity", val: "100%" },
                 { icon: Target, label: "Avg Conversion Lift", val: "140%" },
                 { icon: Briefcase, label: "Industries Served", val: "15+" }
               ].map((item, i) => (
                 <div key={i} className="border-l border-white/10 pl-8 py-4">
                    <p className="text-4xl font-serif text-secondary mb-2">{item.val}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{item.label}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. ABOUT THE FOUNDER: PERSONAL BRANDING */}
      <section className="py-32 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-[1fr_1.5fr] gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -bottom-10 -right-10 w-full h-full border border-secondary/20 -z-10"></div>
              {/* PORTRAIT IMAGE - FULL VISIBILITY */}
              <img 
                src="/portrait.png" 
                alt="AROWOLO TOBILOBA DANIEL" 
                className="w-full h-auto object-cover grayscale brightness-110 shadow-2xl transition-all duration-700 hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-10 left-10 bg-secondary text-primary px-4 py-2 font-black text-[9px] uppercase tracking-widest">
                 Founder & Lead Architect
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-black tracking-[0.3em] uppercase text-secondary mb-6">The Architect</h2>
              <h3 className="text-4xl md:text-6xl font-serif mb-10">Arowolo Tobiloba Daniel</h3>
              <div className="space-y-6 text-lg text-white/50 leading-relaxed font-medium mb-12">
                 <p>
                    With nearly a decade of experience across the intersection of psychology, marketing engineering, and high-end visual design, I've seen too many brilliant businesses fail because of a "pretty" but ineffective website.
                 </p>
                 <p>
                    My goal is simple: <strong>To build your revenue engine.</strong> I specialize in identifying the friction points in your client's journey and eliminating them through precision design.
                 </p>
                 <p>
                    I don't just build sites; I build authority. When we work together, we're not just creating a digital presence—we're creating a market-leading advantage that your competitors can't ignore.
                 </p>
              </div>

              <div className="flex flex-wrap gap-8 items-center">
                 <a 
                   href="mailto:example@gmail.com" 
                   className="bg-secondary text-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all inline-flex items-center gap-3"
                 >
                    Contact Me Directly <Mail size={14} />
                 </a>
                 <div className="flex gap-4">
                    {["Strategy", "Scale", "Success"].map(word => (
                      <span key={word} className="text-[9px] font-black uppercase tracking-[0.4em] opacity-30">{word}</span>
                    ))}
                 </div>
              </div>
            </motion.div>
        </div>
      </section>

      {/* 4. FINAL CTA PANE */}
      <section className="bg-secondary text-primary py-20 text-center">
         <div className="max-w-4xl mx-auto px-10">
            <h2 className="text-3xl md:text-5xl font-serif mb-8">Ready to Elevate Your Digital Architecture?</h2>
            <Link to="/booking" className="inline-flex items-center gap-3 border-b-2 border-primary pb-1 text-xs font-black uppercase tracking-[0.2em] hover:gap-6 transition-all">
               Apply for a Consultation <ArrowRight size={16} />
            </Link>
         </div>
      </section>
    </div>
  );
}
