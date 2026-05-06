import { SERVICES } from '../constants';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export default function Services() {
  return (
    <div className="bg-primary text-white pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-10">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-secondary font-black tracking-[0.3em] uppercase text-[10px] mb-8">
               <span className="w-12 h-[1px] bg-secondary inline-block align-middle mr-4"></span>
               Our Expertise
            </div>
            <h1 className="text-5xl md:text-8xl font-serif mb-10 leading-[1.1]">
              High-Value <br /> <span className="luxury-text-gradient italic">Conversion</span> <br /> Architecture.
            </h1>
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed font-medium">
              I specialize in complex digital systems designed to generate maximum ROI. Each service is a piece of a larger high-performance machine.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group border border-white/5 bg-dark-surface p-12 lg:p-20 hover:border-secondary/30 transition-all"
            >
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-1 border-r border-white/10 h-full flex items-center justify-center lg:justify-start">
                   <span className="text-6xl font-serif text-white/5 group-hover:text-secondary transition-colors">0{idx + 1}</span>
                </div>
                <div className="lg:col-span-5 lg:pl-10">
                   <h2 className="text-4xl font-serif mb-8 group-hover:text-secondary transition-colors">{service.title}</h2>
                   <p className="text-white/40 text-lg leading-relaxed mb-10 font-medium">{service.description}</p>
                   <ul className="grid grid-cols-1 gap-4 mb-12">
                      {['Strategic Consult', 'Execution Plan', 'Performance Review'].map((item) => (
                        <li key={item} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                          <CheckCircle2 size={16} className="text-secondary" /> {item}
                        </li>
                      ))}
                   </ul>
                   <Link to="/booking" className="bg-white text-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-secondary transition-all inline-block">
                      Inquire Directly
                   </Link>
                </div>
                  <div className="lg:col-span-6 relative aspect-video overflow-hidden border border-white/10">
                    <img 
                      src={`https://images.unsplash.com/photo-${[
                        '1460925895917-afdab827c52f',
                        '1551288049-bbbda4e38f71',
                        '1460925895917-afdab827c52f',
                        '1551434678-e076c223a692',
                        '1516321318423-f06f85e504b3',
                        '1522202176988-66273c2fd55f'
                      ][idx % 6]}?auto=format&fit=crop&q=80&w=1000`}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors"></div>
                   
                   <div className="absolute bottom-6 right-6">
                      <Zap className="text-secondary opacity-20 group-hover:opacity-100 transition-opacity" size={40} strokeWidth={1} />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 text-center">
           <h2 className="text-4xl md:text-6xl font-serif mb-12">Not Sure Where to Start?</h2>
           <Link to="/booking" className="bg-secondary text-primary px-16 py-7 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all flex items-center justify-center gap-4 mx-auto w-fit">
              Get Your Strategy Audit <ArrowRight size={18} />
           </Link>
        </div>
      </div>
    </div>
  );
}
