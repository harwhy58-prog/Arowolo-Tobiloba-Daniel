import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Projects() {
  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-6">Proven Results</h4>
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8">Selected <span className="luxury-text-gradient italic font-normal">Works</span></h1>
            <p className="text-textMuted text-xl max-w-2xl mx-auto leading-relaxed">
              Explore 20+ case studies showcasing how AROWOLO TOBILOBA transforms struggling brands into market leaders.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx % 2 * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-2 gap-[1px] bg-gray-200">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.before} 
                      alt="Before" 
                      className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-red-500/90 text-white text-[10px] uppercase font-bold px-3 py-1 rounded backdrop-blur-sm">Legacy Design</div>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.after} 
                      alt="After" 
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute top-4 left-4 bg-green-500/90 text-white text-[10px] uppercase font-bold px-3 py-1 rounded backdrop-blur-sm">Optimized Funnel</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <PlayCircle size={32} />
                   </div>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div className="max-w-[80%]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-secondary/10 text-secondary px-3 py-1 rounded-full">{project.category}</span>
                    <span className="text-[10px] text-textMuted font-bold uppercase tracking-widest">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1} / 20</span>
                  </div>
                  <h3 className="text-3xl font-bold font-serif mb-4 group-hover:text-secondary transition-colors underline decoration-transparent group-hover:decoration-secondary underline-offset-8 decoration-2">
                    {project.title}
                  </h3>
                  <p className="text-textMuted leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <Link to="/booking" className="btn-outline !py-3 !px-8 text-sm group-hover:bg-secondary group-hover:text-white">
                    View Project Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA section in projects */}
        <div className="mt-32 p-16 rounded-[3rem] bg-accent/20 text-center border-2 border-dashed border-secondary/30">
           <h2 className="text-4xl font-bold mb-6">Want These Results for Your Business?</h2>
           <p className="text-textMuted text-lg mb-10 max-w-xl mx-auto">I've helped 20+ brands reach their peak potential. Your brand could be next.</p>
           <Link to="/booking" className="btn-primary !px-12">Claim Your Free Audit</Link>
        </div>
      </div>
    </div>
  );
}
