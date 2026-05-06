import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  ChevronDown, 
  AlertCircle, 
  MousePointerClick,
  BarChart3,
  Globe,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, PROJECTS, FAQS } from '../constants';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="bg-primary text-white overflow-x-hidden">
      {/* 1. HERO SECTION: PREMIUM ARCHITECTURE */}
      <section className="min-h-screen pt-28 pb-20 relative flex items-center">
        <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 text-secondary font-black tracking-[0.3em] uppercase text-[10px] mb-8">
              <span className="w-12 h-[1px] bg-secondary"></span>
              Growth Architect & Conversion Expert
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight mb-10">
              I Build <span className="luxury-text-gradient italic">High-Performance</span> Revenue Engines.
            </h1>
            <p className="text-xl text-white/60 max-w-xl mb-12 leading-relaxed font-medium">
              Stop collecting visits. Start collecting clients. I specialize in <strong>Conversion-Engineered Ecosystems</strong> that transform cold traffic into high-ticket partners consistently.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/booking" className="bg-secondary text-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all text-center">
                Get a Strategy Audit
              </Link>
              <Link to="/projects" className="border border-white/20 px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2">
                Proven Results <ArrowRight size={14} />
              </Link>
            </div>
            
            <div className="mt-16 flex items-center gap-6 opacity-40 grayscale">
               <p className="text-[10px] font-black uppercase tracking-widest">Industry Expertise</p>
               <div className="h-[1px] w-20 bg-white/20"></div>
               <div className="flex gap-4">
                  <Globe size={18} />
                  <Zap size={18} />
                  <TrendingUp size={18} />
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-secondary/20 -z-10 translate-x-4 translate-y-4"></div>
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1400" 
                 alt="Business Growth Dashboard" 
                 className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
               
               {/* Achievement Overlay */}
               <div className="absolute bottom-10 left-10 right-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8">
                  <div className="flex justify-between items-end">
                     <div>
                        <p className="text-secondary font-serif text-4xl mb-1">$2.4M+</p>
                        <p className="text-[9px] font-black tracking-widest uppercase opacity-60">Revenue Lift Generated</p>
                     </div>
                     <div className="text-right">
                        <BarChart3 className="text-secondary ml-auto mb-2" size={32} />
                        <p className="text-[9px] font-black tracking-widest uppercase opacity-60 text-secondary">Verified Strategy</p>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM IDENTIFICATION: THE LEAKY BUCKET */}
      <section className="py-32 bg-dark-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-10">
          <div className="max-w-3xl mb-20">
            <h2 className="text-xs font-black tracking-[0.3em] uppercase text-secondary mb-6 italic">The Reality Check</h2>
            <h3 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              Is Your Website a Tool or a <span className="text-white/40">Liability?</span>
            </h3>
            <p className="text-lg text-white/50 leading-relaxed font-medium">
              95% of businesses are losing money every single day because their digital presence isn't optimized for the human brain. If you're facing these challenges, you're leaving revenue on the table.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5 ring-1 ring-white/5">
            {[
              { 
                title: "Ghost Traffic", 
                desc: "Thousands of visitors, but zero qualified leads. You have eyes on you, but no one is taking action.",
                icon: MousePointerClick
              },
              { 
                title: "Low Trust Authority", 
                desc: "Your design looks 'dated' or unprofessional, causing potential high-ticket clients to bounce in seconds.",
                icon: ShieldCheck
              },
              { 
                title: "Leaky Funnels", 
                desc: "You're spending on ads, but your conversion path is broken. You're effectively burning your marketing budget.",
                icon: AlertCircle
              },
              { 
                title: "Weak Online Presence", 
                desc: "When clients search for your solution, they find your competitors because your SEO is non-existent.",
                icon: Globe
              },
              { 
                title: "Poor ROI on Ads", 
                desc: "Ineffective ad creatives and landing pages mean every lead costs 3x more than it should.",
                icon: BarChart3
              },
              { 
                title: "Scalability Ceiling", 
                desc: "You can't handle more clients because your onboarding and capture process is manual and slow.",
                icon: Zap
              }
            ].map((problem, i) => (
              <div key={i} className="bg-primary p-12 hover:bg-white/5 transition-colors group">
                <div className="text-secondary mb-8 group-hover:scale-110 transition-transform inline-block">
                  <problem.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif mb-4">{problem.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed font-medium">{problem.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <Link to="/booking" className="btn-secondary !px-12 !py-6 text-sm flex items-center justify-center gap-4 mx-auto w-fit">
                <span className="font-black uppercase tracking-[0.3em]">Fix My Funnel Now</span>
                <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION / SERVICES: THE GROWTH ENGINE */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col lg:flex-row gap-20 items-end mb-24">
            <div className="lg:w-2/3">
              <h2 className="text-xs font-black tracking-[0.3em] uppercase text-secondary mb-6">The Solution</h2>
              <h3 className="text-4xl md:text-6xl font-serif leading-tight">
                Conversion-First <br /> Digital Ecosystems
              </h3>
            </div>
            <div className="lg:w-1/3">
               <p className="text-white/50 text-sm leading-relaxed mb-8">
                 I don't just "design pages." I engineer systems that capture, qualify, and convert visitors into high-paying advocates, systematically.
               </p>
               <Link to="/services" className="text-[10px] font-black uppercase tracking-[0.2em] border-b border-secondary pb-2">Explore Methodology</Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {SERVICES.slice(0, 4).map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="group border border-white/10 p-12 hover:border-secondary/40 transition-all flex flex-col md:flex-row gap-10 items-start"
              >
                <div className="text-secondary opacity-30 group-hover:opacity-100 transition-opacity">
                  <span className="text-4xl font-serif tracking-tighter">0{i+1}</span>
                </div>
                <div>
                  <h4 className="text-2xl font-serif mb-6 group-hover:text-secondary transition-colors underline decoration-transparent group-hover:decoration-secondary underline-offset-8">{service.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md">{service.description}</p>
                  <ul className="space-y-3">
                    {["ROI Focused", "Custom UX", "Performance Tuned"].map(item => (
                      <li key={item} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest opacity-40">
                         <CheckCircle2 size={12} className="text-secondary" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS: BEFORE & AFTER TRANSFORMATIONS */}
      <section className="py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-24">
             <h2 className="text-xs font-black tracking-[0.3em] uppercase text-secondary mb-6">Proven Authority</h2>
             <h3 className="text-4xl md:text-6xl font-serif">Visual Transformations</h3>
          </div>

          <div className="space-y-32">
            {PROJECTS.slice(0, 3).map((project, i) => (
              <div key={project.id} className={`grid lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                 <div className="relative group">
                    <div className="absolute -inset-4 border border-secondary/10 -z-10"></div>
                    <div className="grid grid-cols-2 gap-1 bg-white/5 ring-1 ring-white/10 overflow-hidden aspect-video">
                       <div className="relative h-full">
                          <img 
                            src={project.before} 
                            alt="Before" 
                            className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" 
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-4 left-4 bg-red-900/90 text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1">Before</div>
                       </div>
                       <div className="relative h-full border-l border-white/10">
                          <img 
                            src={project.after} 
                            alt="After" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-4 left-4 bg-secondary text-primary text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1">After (Redesign)</div>
                       </div>
                    </div>
                 </div>
                 <div className={i % 2 !== 0 ? 'lg:order-first' : ''}>
                    <p className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-6">{project.category}</p>
                    <h4 className="text-4xl font-serif mb-8">{project.title}</h4>
                    <p className="text-white/50 mb-10 leading-relaxed">{project.description}</p>
                    <div className="flex gap-10 mb-12 border-y border-white/5 py-8">
                       <div>
                          <p className="text-2xl font-serif text-secondary">{project.results.split(' ')[0]}</p>
                          <p className="text-[9px] font-black uppercase tracking-widest opacity-40">Impact Measure</p>
                       </div>
                       <div>
                          <p className="text-2xl font-serif text-secondary">Verified</p>
                          <p className="text-[9px] font-black uppercase tracking-widest opacity-40">Result Status</p>
                       </div>
                    </div>
                    <Link to="/projects" className="bg-white text-primary px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-secondary transition-all">
                       View Case Study
                    </Link>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS: REVENUE IMPACT REPORTS */}
      <section className="py-32 bg-white text-primary">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-xs font-black tracking-[0.3em] uppercase text-secondary mb-6">Partner Success</h2>
              <h3 className="text-4xl md:text-6xl font-serif leading-tight">
                Active Client Relationships & <span className="text-primary/40 italic">Proven Revenue Lift.</span>
              </h3>
            </div>
            <Link to="/testimonials" className="bg-primary text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-secondary hover:text-primary transition-all">
              View All Reports
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                client: "Luxe Dynamics",
                service: "Omnichannel Growth Strategy",
                content: "AROWOLO TOBILOBA DANIEL is currently managing our full-stack digital growth. Since onboarding, our lead quality has seen a 3x improvement across all channels.",
                results: "+312% Lead Quality"
              },
              {
                client: "Zenith Agencies",
                service: "SEO & Content Authority",
                content: "The level of strategic depth AROWOLO TOBILOBA DANIEL brings to our SEO is unmatched. He doesn't just rank keywords; he builds topical authority that converts.",
                results: "12 Top-3 Rankings"
              },
              {
                client: "Bloom E-commerce",
                service: "Paid Media Optimization",
                content: "Currently overseeing our Google Ads budget. We've seen our CPA drop by 40% while maintaining the same scale. A true growth architect.",
                results: "-40% Acquisition Cost"
              }
            ].map((t, i) => (
              <div key={i} className="bg-accent/30 p-12 border border-primary/5 flex flex-col justify-between h-full group hover:bg-accent/50 transition-all">
                <div>
                  <div className="flex items-center gap-2 mb-8">
                    {[1, 2, 3, 4, 5].map(star => (
                      <div key={star} className="w-3 h-3 bg-secondary rounded-full" />
                    ))}
                  </div>
                  <p className="text-lg font-serif mb-10 leading-relaxed italic text-primary/80">"{t.content}"</p>
                </div>
                <div className="pt-10 border-t border-primary/10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-2">{t.service}</p>
                  <p className="text-xl font-serif mb-4">{t.client}</p>
                  <div className="bg-primary text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 inline-block">
                    {t.results}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION: TRANSPARENT INTEL */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-10">
          <div className="text-center mb-20">
             <h2 className="text-xs font-black tracking-[0.3em] uppercase text-secondary mb-6">Common Inquiries</h2>
             <h3 className="text-4xl md:text-5xl font-serif">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="border border-white/5 bg-dark-surface overflow-hidden group"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-8 flex justify-between items-center text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-serif text-lg md:text-xl">{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-secondary transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-white/50 text-sm leading-relaxed max-w-2xl font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA: THE ARCHITECTURE FOR REVENUE */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/5 -z-10"></div>
        <div className="max-w-5xl mx-auto px-10 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-[1.1]">
                Ready to Turn <span className="italic luxury-text-gradient">Potential</span> into Profit?
              </h2>
              <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto leading-relaxed">
                Stop guessing. Start growing. Schedule your $0 strategy audit today and let's map out your complete conversion ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link to="/booking" className="bg-secondary text-primary px-12 py-6 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-2xl shadow-secondary/20">
                    Secure My Strategy Call
                 </Link>
                 <Link to="/contact" className="border border-white/20 text-white px-12 py-6 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                    Inquire Personally
                 </Link>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Decorative footer bar */}
      <div className="h-[10px] bg-secondary w-full" />
    </div>
  );
}
