import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, Zap, ShieldCheck } from 'lucide-react';

export default function Projects() {
  return (
    <div className="bg-primary text-white pt-40 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
             <div className="text-secondary font-black tracking-[0.3em] uppercase text-[10px] mb-8">
               <span className="w-12 h-[1px] bg-secondary inline-block align-middle mr-4"></span>
               Performance Record
            </div>
            <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-[1.1]">Selected <br /> <span className="luxury-text-gradient italic">Results</span>.</h1>
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed font-medium">
              Case studies showcasing how AROWOLO TOBILOBA DANIEL transforms stagnant digital assets into market-dominating revenue engines.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx % 2 * 0.1 }}
              className="group"
            >
              <div className="relative border border-white/5 bg-dark-surface p-1 mb-10 overflow-hidden">
                <div className="grid grid-cols-2 gap-1 bg-white/5">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src={project.before} 
                      alt="Before" 
                      className="w-full h-full object-cover grayscale brightness-50 transition-all duration-1000 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 text-[8px] font-black uppercase tracking-[0.3em] bg-black/80 text-red-500 px-3 py-2 border border-red-500/20">
                       Inefficient Core
                    </div>
                  </div>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src={project.after} 
                      alt="After" 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute top-6 left-6 text-[8px] font-black uppercase tracking-[0.3em] bg-secondary text-primary px-3 py-2">
                       Growth Architecture
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                   <div className="w-16 h-16 border border-secondary rounded-full flex items-center justify-center text-secondary transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl shadow-secondary/20">
                      <Zap size={24} />
                   </div>
                </div>
              </div>
              
              <div className="px-4">
                 <div className="flex items-center gap-4 mb-6">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-secondary">{project.category}</span>
                    <span className="w-8 h-[1px] bg-white/10"></span>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">0{idx + 1} // CASE</span>
                 </div>
                 <h3 className="text-3xl font-serif mb-6 group-hover:text-secondary transition-colors leading-tight">
                    {project.title}
                 </h3>
                 <p className="text-white/40 text-sm leading-relaxed mb-8 font-medium">
                    {project.description}
                 </p>
                 <div className="flex items-center gap-8">
                    <Link to="/booking" className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 group-hover:gap-5 transition-all text-white hover:text-secondary">
                       View Strategic Breakdown <ArrowRight size={14} />
                    </Link>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* METRICS STRIP */}
        <section className="mt-40 border-y border-white/5 py-24">
           <div className="grid md:grid-cols-4 gap-12 text-center">
              {[
                { val: "240%", label: "AVG ROAS LIFT" },
                { val: "18k+", label: "LEADS GENERATED" },
                { val: "4.9/5", label: "CLIENT RATINGS" },
                { val: "22M", label: "REVENUE INFLUENCED" }
              ].map((m, i) => (
                <div key={i}>
                   <p className="text-4xl font-serif text-secondary mb-2">{m.val}</p>
                   <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">{m.label}</p>
                </div>
              ))}
           </div>
        </section>

        {/* CTA section in projects */}
        <div className="mt-40 bg-dark-surface border border-white/5 p-16 md:p-24 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-5">
              <ShieldCheck size={200} />
           </div>
           <h2 className="text-4xl md:text-6xl font-serif mb-10 italic">Your Brand Could <br /> Be the Next Result.</h2>
           <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto font-medium">Stop gambling with your digital presence. Leverage engineering-grade methodology to dominate your market.</p>
           <Link to="/booking" className="bg-white text-primary px-16 py-7 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-secondary transition-all inline-block">
              Apply for Strategy Audit
           </Link>
        </div>
      </div>
    </div>
  );
}
