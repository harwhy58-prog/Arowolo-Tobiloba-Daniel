import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Zap } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-primary text-white min-h-screen pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="text-secondary font-black tracking-[0.3em] uppercase text-[10px] mb-8">
               <span className="w-12 h-[1px] bg-secondary inline-block align-middle mr-4"></span>
               Direct Inquiries
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1]">Let's Talk <br /> <span className="luxury-text-gradient italic">Results</span>.</h1>
            <p className="text-white/40 text-lg mb-12 font-medium leading-relaxed max-w-md">
              Have a high-level inquiry or want to discuss a specific project? Reach out directly and expect a strategic response within 24 hours.
            </p>
            
            <div className="space-y-10">
              <div className="group flex items-center gap-6 border-l border-white/5 pl-8 p-4 hover:border-secondary transition-all">
                <div className="text-white/20 group-hover:text-secondary transition-colors"><Mail size={24} strokeWidth={1.5} /></div>
                <div>
                   <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">Strategic Email</p>
                   <p className="text-lg font-serif">Daniel@DanielGrowth.com</p>
                </div>
              </div>
              <div className="group flex items-center gap-6 border-l border-white/5 pl-8 p-4 hover:border-secondary transition-all">
                <div className="text-white/20 group-hover:text-secondary transition-colors"><Phone size={24} strokeWidth={1.5} /></div>
                <div>
                   <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">Direct Line</p>
                   <p className="text-lg font-serif">+1 (555) 782-9011</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-surface border border-white/5 p-10 md:p-16 relative"
          >
             <div className="absolute top-10 right-10 opacity-5">
                <Zap size={100} />
             </div>
             <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                   <div className="relative">
                      <input 
                        type="text" 
                        required
                        className="w-full bg-transparent border-b border-white/10 py-4 text-[10px] font-black uppercase tracking-widest focus:border-secondary outline-none transition-colors placeholder:opacity-20" 
                        placeholder="FIRST NAME" 
                      />
                   </div>
                   <div className="relative">
                      <input 
                        type="text" 
                        required
                        className="w-full bg-transparent border-b border-white/10 py-4 text-[10px] font-black uppercase tracking-widest focus:border-secondary outline-none transition-colors placeholder:opacity-20" 
                        placeholder="LAST NAME" 
                      />
                   </div>
                </div>
                <div className="relative">
                   <input 
                    type="email" 
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 text-[10px] font-black uppercase tracking-widest focus:border-secondary outline-none transition-colors placeholder:opacity-20" 
                    placeholder="EMAIL ADDRESS" 
                   />
                </div>
                <div className="relative">
                   <textarea 
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 text-[10px] font-black uppercase tracking-widest focus:border-secondary outline-none transition-colors h-32 resize-none placeholder:opacity-20" 
                    placeholder="HOW CAN WE ELEVATE YOUR BRAND?"
                   ></textarea>
                </div>
                <button type="submit" className="w-full bg-secondary text-primary py-6 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all shadow-xl shadow-secondary/10 flex items-center justify-center gap-4">
                   Send Message <Send size={14} />
                </button>
             </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
