import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100 text-center"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
           <CheckCircle2 size={48} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Your Strategy Call <br /><span className="luxury-text-gradient">is Booked</span>.</h1>
        <p className="text-textMuted text-lg mb-10">We've received your information. Please check your email for the meeting invite and preparatory questions. We're excited to help you scale.</p>
        
        <div className="bg-accent/10 p-6 rounded-2xl mb-10 text-left">
           <p className="font-bold text-sm uppercase tracking-widest mb-2">Next Steps:</p>
           <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={16} className="text-secondary" /> Check your inbox/spam for the confirmation.</li>
              <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={16} className="text-secondary" /> Mark the time on your calendar.</li>
              <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={16} className="text-secondary" /> Research our common case studies for context.</li>
           </ul>
        </div>

        <Link to="/" className="btn-primary w-full">Return to HQ</Link>
      </motion.div>
    </div>
  );
}
