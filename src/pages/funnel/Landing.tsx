import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="pt-20 bg-white">
      {/* High-Impact Landing Hero */}
      <section className="section-padding flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl"
        >
          <span className="bg-secondary/10 text-secondary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-10 inline-block">Exclusive Performance Offer</span>
          <h1 className="text-5xl md:text-8xl font-bold font-serif mb-8 leading-tight">
            Double Your <span className="luxury-text-gradient italic">Qualified Leads</span> Without Increasing Ad Spend.
          </h1>
          <p className="text-xl text-textMuted mb-12 max-w-2xl mx-auto leading-relaxed">
            I've developed a unique Conversion Framework that turns "browsers" into "buyers" at twice the industry standard.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
             <Link to="/offer" className="btn-primary !py-6 !px-12 text-xl font-bold flex items-center gap-3">
                Reveal My Strategy <ArrowRight />
             </Link>
             <Link to="/projects" className="btn-outline !py-6 !px-12 text-xl font-bold flex items-center gap-3">
                See Proof <PlayCircle />
             </Link>
          </div>
        </motion.div>

        <div className="w-full max-w-6xl relative">
           <div className="absolute inset-x-0 -bottom-10 h-32 bg-linear-to-t from-white to-transparent z-10"></div>
           <img 
             src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
             className="w-full rounded-3xl shadow-2xl grayscale brightness-110" 
             alt="Data Driven Design"
             referrerPolicy="no-referrer"
           />
        </div>
      </section>

      {/* Trust & Proof */}
      <section className="section-padding bg-accent/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
           {[
             { val: "2.4x", label: "Better ROAS" },
             { val: "48%", label: "Lead Increase" },
             { val: "15min", label: "Time to Strategy" },
             { val: "7yrs", label: "Experience" }
           ].map((stat, i) => (
             <div key={i} className="bg-white p-10 rounded-2xl border border-gray-100 text-center">
                <p className="text-4xl font-bold text-secondary mb-2">{stat.val}</p>
                <p className="text-xs uppercase tracking-widest font-bold text-textMuted">{stat.label}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
