import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Calendar, Shield, Zap, Globe, Mail } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function Booking() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    mainChallenge: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      navigate('/thank-you');
    }
  };

  return (
    <div className="bg-primary text-white min-h-screen pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="text-secondary font-black tracking-[0.3em] uppercase text-[10px] mb-8">
               <span className="w-12 h-[1px] bg-secondary inline-block align-middle mr-4"></span>
               Onboarding Concierge
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-10">
              Secure Your <span className="luxury-text-gradient italic">Strategy audit</span>.
            </h1>
            <p className="text-xl text-white/50 mb-12 leading-relaxed font-medium">
              We don't talk design until we talk objective. This 15-minute high-level session will identify the exact leaks in your current conversion path.
            </p>
            
            <div className="space-y-10">
              {[
                { title: "Verification", desc: "We ensure our conversion frameworks align with your industry.", icon: Shield },
                { title: "Map Discovery", desc: "A clinical look at your current user journey and its failures.", icon: Zap },
                { title: "Revenue Roadmap", desc: "Leave with 3 immediate execution steps for growth.", icon: Globe }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 border-l border-white/5 pl-8 py-2">
                  <div className="text-secondary opacity-50"><item.icon size={28} strokeWidth={1} /></div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 flex items-center gap-6 opacity-30 grayscale filter">
               <img src="https://via.placeholder.com/80x30?text=BRAND+A" alt="Brand" />
               <img src="https://via.placeholder.com/80x30?text=BRAND+B" alt="Brand" />
               <img src="https://via.placeholder.com/80x30?text=BRAND+C" alt="Brand" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="bg-dark-surface border border-white/5 p-10 md:p-16 relative"
          >
            <div className="absolute -top-3 right-8 bg-secondary text-primary px-4 py-1 font-black text-[9px] uppercase tracking-widest">
              Growth Portal
            </div>
            
            <div className="mb-12 flex gap-4">
              <div className={`h-[2px] flex-grow transition-all duration-700 ${step >= 1 ? 'bg-secondary' : 'bg-white/10'}`}></div>
              <div className={`h-[2px] flex-grow transition-all duration-700 ${step >= 2 ? 'bg-secondary' : 'bg-white/10'}`}></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
               <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-10">01 / Identification</h3>
                    <div className="relative group">
                      <input 
                        type="text" 
                        required 
                        placeholder="FULL NAME" 
                        className="w-full bg-transparent border-b border-white/20 py-4 text-xs font-bold uppercase tracking-widest focus:border-secondary outline-none transition-colors placeholder:opacity-30" 
                        value={formData.name} 
                        onChange={(e) => setFormData({...formData, name: e.target.value})} 
                      />
                    </div>
                    <div className="relative group">
                      <input 
                        type="email" 
                        required 
                        placeholder="WORK EMAIL" 
                        className="w-full bg-transparent border-b border-white/20 py-4 text-xs font-bold uppercase tracking-widest focus:border-secondary outline-none transition-colors placeholder:opacity-30" 
                        value={formData.email} 
                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                      />
                    </div>
                    <button type="submit" className="w-full bg-white text-primary py-6 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-secondary transition-all flex items-center justify-center gap-4">
                      Next Step <ArrowRight size={14} />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-10">02 / Objectives</h3>
                    <div>
                      <select 
                        required
                        className="w-full bg-transparent border-b border-white/20 py-4 text-xs font-bold uppercase tracking-widest focus:border-secondary outline-none transition-colors appearance-none cursor-pointer" 
                        value={formData.mainChallenge} 
                        onChange={(e) => setFormData({...formData, mainChallenge: e.target.value})}
                      >
                        <option value="" className="bg-primary text-white">PRIMARY CHALLENGE</option>
                        <option value="leads" className="bg-primary text-white">LOW LEAD VOLUME</option>
                        <option value="conversions" className="bg-primary text-white">POOR CONVERSION RATES</option>
                        <option value="seo" className="bg-primary text-white">REVENUE PLATEAU (SEO)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/40 mb-6">Execution Budget Range</label>
                      <div className="grid grid-cols-2 gap-4">
                         {['$2k-$5k', '$5k-$15k', '$15k-$50k', 'Enterprise'].map((budget) => (
                           <label key={budget} className={`border border-white/10 py-5 transition-all text-center text-[10px] cursor-pointer font-black tracking-widest uppercase hover:border-secondary ${formData.budget === budget ? 'bg-secondary text-primary border-secondary' : 'bg-transparent text-white/60'}`}>
                             <input 
                                type="radio" 
                                name="budget" 
                                className="hidden" 
                                value={budget} 
                                onChange={(e) => setFormData({...formData, budget: e.target.value})} 
                             />
                             {budget}
                           </label>
                         ))}
                      </div>
                    </div>
                    <button type="submit" className="w-full bg-secondary text-primary py-6 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-secondary/10">
                      Confirm Session Initiation
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setStep(1)}
                      className="w-full text-[9px] font-black uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity"
                    >
                      Wait, return to info
                    </button>
                  </motion.div>
                )}
               </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
