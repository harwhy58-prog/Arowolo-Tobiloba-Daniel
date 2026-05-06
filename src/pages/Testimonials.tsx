import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { Link } from 'react-router-dom';

// Expand testimonials for the page to have 20+
const allTestimonials = [
  ...TESTIMONIALS,
  {
    id: 8,
    name: "Thomas Mayer",
    role: "Proprietor, Heritage Brands",
    content: "The level of detail AROWOLO TOBILOBA puts into user experience is unmatched. Our retention rates skyrocketed.",
    avatar: "https://i.pravatar.cc/150?u=8"
  },
  {
    id: 9,
    name: "Clara V.",
    role: "Founder, GreenSpace",
    content: "AROWOLO TOBILOBA didn't just build a site; they built a community hub. The SEO work was top-tier.",
    avatar: "https://i.pravatar.cc/150?u=9"
  },
  {
     id: 10,
     name: "Michael Brandt",
     role: "CMO, Fintech Solutions",
     content: "Strategic, fast, and results-oriented. AROWOLO TOBILOBA is a growth partner in every sense.",
     avatar: "https://i.pravatar.cc/150?u=10"
  },
  { id: 11, name: "Lucas P.", role: "Agency Owner", content: "Conversion-led design at its finest. AROWOLO TOBILOBA delivered 2 weeks early.", avatar: "https://i.pravatar.cc/150?u=11" },
  { id: 12, name: "Anna S.", role: "E-comm Founder", content: "Finally, a designer who understands ROAS and landing page performance.", avatar: "https://i.pravatar.cc/150?u=12" },
  { id: 13, name: "Kevin L.", role: "Coach", content: "AROWOLO TOBILOBA's funnel setup tripled my leads overnight. Pure magic.", avatar: "https://i.pravatar.cc/150?u=13" },
  { id: 14, name: "Julia W.", role: "Boutique Owner", content: "The brand authority AROWOLO TOBILOBA built for us is worth 10x what we paid.", avatar: "https://i.pravatar.cc/150?u=14" },
  { id: 15, name: "Derek H.", role: "Tech Recruiter", content: "Professional, precise, and perfectly executed. A+ service.", avatar: "https://i.pravatar.cc/150?u=15" },
  { id: 16, name: "Sarah M.", role: "Consultant", content: "The booking system AROWOLO TOBILOBA set up is seamless. My calendar stays full.", avatar: "https://i.pravatar.cc/150?u=16" },
  { id: 17, name: "Ben J.", role: "Dropshipper", content: "Fastest store design I've ever seen, without compromising quality.", avatar: "https://i.pravatar.cc/150?u=17" },
  { id: 18, name: "Lisa C.", role: "Artist", content: "AROWOLO TOBILOBA translated my abstract ideas into a high-converting portfolio.", avatar: "https://i.pravatar.cc/150?u=18" },
  { id: 19, name: "Mark R.", role: "Restaurateur", content: "Local SEO results from AROWOLO TOBILOBA changed my business. We are booked out.", avatar: "https://i.pravatar.cc/150?u=19" },
  { id: 20, name: "Natalie T.", role: "Influencer", content: "My landing page for my course was a mess until AROWOLO TOBILOBA fixed it. Sales are up 40%.", avatar: "https://i.pravatar.cc/150?u=20" },
  { id: 21, name: "Oliver G.", role: "Developer", content: "As a dev, I appreciate the clean code and design AROWOLO TOBILOBA provides.", avatar: "https://i.pravatar.cc/150?u=21" },
];

export default function Testimonials() {
  return (
    <div className="pt-32 pb-20 bg-accent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8 tracking-tighter">
              The <span className="luxury-text-gradient underline decoration-secondary decoration-4 underline-offset-8">Verdict</span>
            </h1>
            <p className="text-xl text-textMuted max-w-2xl mx-auto italic">
              "Authority is not claimed; it is granted by the success of your clients."
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-8 items-center opacity-60 grayscale scale-90">
               <ShieldCheck size={32} />
               <CheckCircle2 size={32} />
               <Star size={32} />
               <Star size={32} />
            </div>
          </motion.div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {allTestimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i % 3 * 0.1 }}
              className="break-inside-avoid mb-8 p-10 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="text-secondary mb-6 flex gap-1">
                {[1, 2, 3, 4, 5].map(j => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <Quote className="text-secondary/10 absolute top-[-10px] left-8 w-20 h-20 -z-10 group-hover:text-secondary/20 transition-colors" />
              <p className="text-lg leading-relaxed mb-8 italic text-primary/80 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-secondary/20" 
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-base">{testimonial.name}</h4>
                  <p className="text-textMuted text-xs uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <Link to="/booking" className="btn-primary !py-5 !px-16 text-lg">
                Join the Winners' Circle
            </Link>
        </div>
      </div>
    </div>
  );
}
