import { SERVICES } from '../constants';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Expertise</h4>
            <h1 className="text-5xl md:text-8xl font-bold font-serif mb-8 leading-none">
              High-Value <br /> <span className="luxury-text-gradient italic font-normal">Conversion</span> <br /> Architecture.
            </h1>
            <p className="text-textMuted text-xl max-w-2xl leading-relaxed">
              I specialize in complex digital systems designed to generate maximum ROI. Each service is a piece of a larger high-performance machine.
            </p>
          </motion.div>
        </div>

        <div className="space-y-12">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white p-8 md:p-16 rounded-[3rem] border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-1">
                   <span className="text-6xl font-serif text-secondary/20 group-hover:text-secondary/40 transition-colors">0{idx + 1}</span>
                </div>
                <div className="lg:col-span-5">
                   <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-secondary transition-colors underline decoration-transparent group-hover:decoration-secondary underline-offset-8">{service.title}</h2>
                   <p className="text-textMuted text-lg leading-relaxed mb-8">{service.description}</p>
                   <ul className="grid grid-cols-1 gap-3 mb-10">
                      {['Strategic Consult', 'Execution Plan', 'Performance Review'].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm font-medium">
                          <CheckCircle2 size={16} className="text-secondary" /> {item}
                        </li>
                      ))}
                   </ul>
                   <Link to="/booking" className="btn-primary !px-10">Inquire Service</Link>
                </div>
                <div className="lg:col-span-6 relative overflow-hidden rounded-3xl h-[400px]">
                   <img 
                    src={`https://images.unsplash.com/photo-${[
                      '1460925895917-afdab827c52f',
                      '1504868584819-f8eecf928540',
                      '1551288049-bebda4e38f71',
                      '1522202176988-66273c2fd55f',
                      '1516321318423-f06f85e504b3',
                      '1551434678-e076c223a692'
                    ][idx % 6]}?auto=format&fit=crop&q=80&w=800`}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
           <h2 className="text-4xl md:text-5xl font-bold mb-10">Not Sure Where to Start?</h2>
           <Link to="/booking" className="btn-outline !py-5 !px-16 text-lg group">
              Get a Free Growth Roadmap <ArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
           </Link>
        </div>
      </div>
    </div>
  );
}
