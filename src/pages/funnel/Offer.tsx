import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Offer() {
  return (
    <div className="pt-32 pb-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8"><span className="text-secondary italic">Unlock</span> The Conversion <br /> Vault Package.</h1>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-16">
            A comprehensive overhaul of your digital sales system. We don't just fix pages; we optimize your entire business unit for performance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20 text-left">
           {[
             { title: "Funnel Engineering", price: "$4,999", features: ["Market Research", "Copywriting", "LP Design", "Email integration"] },
             { title: "Store Evolution", price: "$7,999", features: ["Product page optimization", "Checkout flow fix", "Speed optimization", "SEO baseline"] },
             { title: "Authority Engine", price: "$12,999", features: ["Content strategy", "Backlink building", "Brand voice guide", "Ads management"] }
           ].map((pkg, i) => (
             <div key={i} className={`p-12 rounded-[3rem] border-2 transition-all ${i === 1 ? 'border-secondary bg-secondary/5' : 'border-zinc-800 bg-zinc-900/50'}`}>
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-3xl font-serif text-secondary mb-8">{pkg.price}</p>
                <ul className="space-y-4 mb-10">
                   {pkg.features.map(f => (
                     <li key={f} className="flex items-center gap-3 text-zinc-500">
                        <CheckCircle2 size={18} className="text-secondary" /> {f}
                     </li>
                   ))}
                </ul>
                <Link to="/booking" className="btn-primary w-full shadow-lg shadow-secondary/20">Book Strategy Session</Link>
             </div>
           ))}
        </div>

        <div className="max-w-xl mx-auto bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex items-center gap-6">
           <div className="text-secondary"><Lock size={40} /></div>
           <p className="text-zinc-500 text-sm italic">
             "Pricing is indicative. Every solution is custom-tailored to your specific profit margins and market positioning."
           </p>
        </div>
      </div>
    </div>
  );
}
