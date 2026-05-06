import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Calendar, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
      // Simulate booking completion
      navigate('/thank-you');
    }
  };

  return (
    <div className="pt-32 pb-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-8">Secure Your <span className="luxury-text-gradient underline decoration-secondary decoration-2 underline-offset-8">Growth Audit</span>.</h1>
            <p className="text-textMuted text-xl mb-12 leading-relaxed">Before we talk design, we talk strategy. This 15-minute call will uncover exactly where your current system is leaking revenue.</p>
            <div className="space-y-8">
              {[
                { title: "Qualifying Your Business", desc: "We ensure our strategies align with your industry goals." },
                { title: "Deep-Dive Strategy", desc: "No pitch, just high-level strategic roadmap for your conversion." },
                { title: "Action Plan", desc: "Leave the call with 3 immediate steps you can take." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center shrink-0"><CheckCircle size={24} /></div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-textMuted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center"><Shield size={32} /></div>
              <div>
                <p className="font-bold text-lg italic">"Most productive 15 mins of my year."</p>
                <p className="text-textMuted text-sm">— Mark D., SaaS Tech Founder</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-gray-100 relative">
            <div className="absolute top-10 right-10 text-secondary"><Calendar size={40} opacity={0.2} /></div>
            <div className="mb-10 flex gap-4">
              <div className={`h-2 flex-grow rounded-full transition-all duration-500 ${step >= 1 ? 'bg-secondary' : 'bg-gray-100'}`}></div>
              <div className={`h-2 flex-grow rounded-full transition-all duration-500 ${step >= 2 ? 'bg-secondary' : 'bg-gray-100'}`}></div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {step === 1 ? (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-8">Step 1: Introduction</h3>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest mb-3">Full Name</label>
                    <input type="text" required placeholder="Jane Doe" className="w-full bg-accent/5 border border-gray-200 rounded-2xl p-4 focus:ring-2 focus:ring-secondary/5/ focus:border-secondary outline-none" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest mb-3">Work Email</label>
                    <input type="email" required placeholder="jane@company.com" className="w-full bg-accent/5 border border-gray-200 rounded-2xl p-4 focus:ring-2 focus:ring-secondary/5/ focus:border-secondary outline-none" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <button type="submit" className="btn-primary w-full !py-5 flex items-center justify-center gap-2">Next Step <ArrowRight size={18} /></button>
                </div>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-8">Step 2: Business Goals</h3>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest mb-3">What are you struggling with most?</label>
                    <select className="w-full bg-accent/5 border border-gray-200 rounded-2xl p-4 transition-all" value={formData.mainChallenge} onChange={(e) => setFormData({...formData, mainChallenge: e.target.value})}>
                      <option value="">Select Option</option>
                      <option value="leads">Low Lead Volume</option>
                      <option value="conversions">Low Conversion Rates</option>
                      <option value="seo">Poor Visibility (SEO)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest mb-3">Project Range (Budget)</label>
                    <div className="grid grid-cols-2 gap-4">
                       {['$2k-$5k', '$5k-$15k', '$15k-$50k', '$50k+'].map((budget) => (
                         <label key={budget} className={`border-2 rounded-2xl p-4 cursor-pointer text-center ${formData.budget === budget ? 'border-secondary bg-secondary/5 font-bold' : 'border-gray-100'}`}>
                           <input type="radio" name="budget" className="hidden" value={budget} onChange={(e) => setFormData({...formData, budget: e.target.value})} />
                           {budget}
                         </label>
                       ))}
                    </div>
                  </div>
                  <button type="submit" className="btn-primary w-full !py-5">Confirm Strategy Session</button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
