import { motion } from 'motion/react';
import { ArrowRight, Send, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTAAction() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 bg-accent/5">
      <div className="max-w-4xl w-full px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-10">
             <Send size={40} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8">One Decision Away <br /> From Your <span className="luxury-text-gradient">Peak Year</span>.</h1>
          <p className="text-xl text-textMuted mb-16 leading-relaxed max-w-2xl mx-auto">
            Our schedule fills up quickly. If you're serious about transforming your digital authority, take the first step now.
          </p>

          <div className="flex flex-col gap-6">
             <Link to="/booking" className="btn-primary !py-6 text-2xl group flex items-center justify-center gap-4">
                Schedule My Free Call <ArrowRight className="group-hover:translate-x-2 transition-all" />
             </Link>
             <p className="text-textMuted">OR</p>
             <Link to="/contact" className="text-primary font-bold text-xl hover:text-secondary transition-colors underline underline-offset-8">
                Ask a Question via Email
             </Link>
          </div>

          <div className="mt-24 p-8 border-t border-gray-200 grid md:grid-cols-3 gap-8 opacity-60">
             <div className="flex flex-col items-center">
                <Mail size={24} className="mb-2" />
                <p className="text-xs font-bold uppercase tracking-widest">Global Support</p>
             </div>
             <div className="flex flex-col items-center">
                <ArrowRight size={24} className="mb-2" />
                <p className="text-xs font-bold uppercase tracking-widest">Fast Onboarding</p>
             </div>
             <div className="flex flex-col items-center">
                <ArrowRight size={24} className="mb-2" />
                <p className="text-xs font-bold uppercase tracking-widest">Verified Results</p>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
