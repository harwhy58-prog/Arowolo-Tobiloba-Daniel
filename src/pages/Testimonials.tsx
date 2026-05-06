import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck, CheckCircle2, Award, Zap } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { Link } from 'react-router-dom';

// Expand testimonials for the page to have 20+
const allTestimonials = [
  ...TESTIMONIALS,
  {
    id: 8,
    name: "Thomas Mayer",
    role: "Proprietor, Heritage Brands",
    content: "The level of detail AROWOLO TOBILOBA DANIEL puts into user experience is unmatched. Our retention rates skyrocketed.",
    avatar: "https://i.pravatar.cc/150?u=8"
  },
  {
    id: 9,
    name: "Clara V.",
    role: "Founder, GreenSpace",
    content: "Daniel didn't just build a site; he built a community hub. The SEO work was top-tier and results-oriented.",
    avatar: "https://i.pravatar.cc/150?u=9"
  },
  {
    id: 10,
    name: "Michael Brandt",
    role: "CMO, Fintech Solutions",
    content: "Strategic, fast, and results-oriented. AROWOLO TOBILOBA DANIEL is a growth partner in every sense.",
    avatar: "https://i.pravatar.cc/150?u=10"
  },
  { id: 11, name: "Lucas P.", role: "Agency Owner", content: "Conversion-led design at its finest. Daniel delivered high-performance systems weeks ahead of schedule.", avatar: "https://i.pravatar.cc/150?u=11" },
  { id: 12, name: "Anna S.", role: "E-comm Founder", content: "Finally, an architect who understands ROAS and landing page performance. Highly recommend.", avatar: "https://i.pravatar.cc/150?u=12" },
  { id: 13, name: "Kevin L.", role: "Coach", content: "Daniel's funnel setup tripled my leads overnight. It's like having a 24/7 sales team.", avatar: "https://i.pravatar.cc/150?u=13" },
  { id: 14, name: "Julia W.", role: "Boutique Owner", content: "The brand authority AROWOLO TOBILOBA DANIEL built for us is worth 10x what we invested.", avatar: "https://i.pravatar.cc/150?u=14" },
  { id: 15, name: "Derek H.", role: "Tech Recruiter", content: "Professional, precise, and perfectly executed. A+ service in conversion architecture.", avatar: "https://i.pravatar.cc/150?u=15" },
  { id: 16, name: "Sarah M.", role: "Consultant", content: "The booking system Daniel set up is seamless. My calendar stays full with qualified leads.", avatar: "https://i.pravatar.cc/150?u=16" },
  { id: 17, name: "Ben J.", role: "Dropshipper", content: "Fastest ROI I've ever seen from a store design. Pure marketing genius.", avatar: "https://i.pravatar.cc/150?u=17" },
  { id: 18, name: "Lisa C.", role: "Artist", content: "Daniel translated my vision into a high-converting portfolio that actually lands commissions.", avatar: "https://i.pravatar.cc/150?u=18" },
  { id: 19, name: "Mark R.", role: "Restaurateur", content: "Local SEO results from Daniel changed my business. We are consistently booked out.", avatar: "https://i.pravatar.cc/150?u=19" },
  { id: 20, name: "Natalie T.", role: "Influencer", content: "My landing page was a mess until AROWOLO TOBILOBA DANIEL fixed it. Sales are up 45%.", avatar: "https://i.pravatar.cc/150?u=20" },
  { id: 21, name: "Oliver G.", role: "Developer", content: "As a dev, I appreciate the technical precision Daniel brings into his architecture.", avatar: "https://i.pravatar.cc/150?u=21" },
];

export default function Testimonials() {
  return (
    <div className="bg-primary text-white pt-40 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-secondary font-black tracking-[0.3em] uppercase text-[10px] mb-8">
               <span className="w-12 h-[1px] bg-secondary inline-block align-middle mr-4"></span>
               Social Proof
            </div>
            <h1 className="text-5xl md:text-8xl font-serif mb-10 leading-[1.1]">
              The <span className="luxury-text-gradient italic">Verdict</span>.
            </h1>
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed font-medium">
              "Authority is not claimed; it is granted by the success of your partners."
            </p>
            
            <div className="mt-12 flex items-center gap-10 opacity-20 filter grayscale">
               <ShieldCheck size={40} strokeWidth={1} />
               <CheckCircle2 size={40} strokeWidth={1} />
               <Award size={40} strokeWidth={1} />
               <Zap size={40} strokeWidth={1} />
            </div>
          </motion.div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-10">
          {allTestimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i % 3 * 0.1 }}
              className="break-inside-avoid mb-10 p-12 border border-white/5 bg-dark-surface hover:border-secondary/20 transition-all group relative"
            >
              <div className="text-secondary mb-8 flex gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                {[1, 2, 3, 4, 5].map(j => <Star key={j} size={10} fill="currentColor" />)}
              </div>
              <Quote className="text-white/5 absolute top-10 right-10 w-16 h-16 pointer-events-none group-hover:text-secondary/10 transition-colors" />
              <p className="text-lg leading-relaxed mb-10 font-medium text-white/60 group-hover:text-white transition-colors italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-10 h-10 border border-white/10 grayscale group-hover:grayscale-0 transition-all" 
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest">{testimonial.name}</h4>
                  <p className="text-white/20 text-[9px] uppercase tracking-[0.2em] mt-1">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
            <Link to="/booking" className="bg-secondary text-primary px-16 py-7 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all inline-block shadow-2xl shadow-secondary/10">
                Join the High-Growth Network
            </Link>
        </div>
      </div>
    </div>
  );
}
