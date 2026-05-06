import { motion } from 'motion/react';
import { Shield, Target, Award, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* About Brand */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Strategic Authority</h4>
              <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8 leading-tight">
                Crafting <span className="luxury-text-gradient italic font-normal">Digital Engines</span> for Ambitious Brands.
              </h1>
              <p className="text-textMuted text-xl mb-8 leading-relaxed">
                AROWOLO TOBILOBA isn't about pixels; it's about profits. We bridge the gap between creative elegance and hardcore business engineering. My mission is to ensure that your digital presence is your hardest-working employee.
              </p>
              <div className="space-y-4">
                {[
                  "Result-Driven Philosophy",
                  "Obsession with User Psychology",
                  "24/7 Digital Conversion Focused",
                  "Premium Luxury Aesthetic Standards"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-primary font-bold italic">
                    <Target size={20} className="text-secondary" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" 
                alt="Studio" 
                className="rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Business Results Focus */}
        <section className="mb-32 p-16 md:p-24 bg-primary text-white rounded-[4rem] relative overflow-hidden">
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2"></div>
           <div className="max-w-3xl relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-10 italic">We Sell Results, <br /> Not Just Designs.</h2>
              <p className="text-zinc-500 text-xl mb-12 leading-relaxed">
                 Traditional design focuses on "looking good." Strategy focuses on "performing well." AROWOLO TOBILOBA combines both to create a lethal competitive advantage for our partners.
              </p>
              <div className="grid md:grid-cols-2 gap-12">
                 {[
                   { icon: Award, label: "Market Leaders Built", val: "22+" },
                   { icon: Shield, label: "Brand Integrity Preservation", val: "100%" },
                   { icon: Target, label: "Conversion Rate AVG Increase", val: "45%" },
                   { icon: Briefcase, label: "Business Sector Expertise", val: "12+" }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="text-secondary"><item.icon size={28} /></div>
                      <div>
                         <p className="text-3xl font-bold mb-1">{item.val}</p>
                         <p className="text-sm text-zinc-600 uppercase tracking-widest font-bold">{item.label}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* About Me Mini */}
        <section className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" 
                alt="AROWOLO TOBILOBA portrait" 
                className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-secondary object-cover"
                referrerPolicy="no-referrer"
              />
              <h2 className="text-3xl font-bold mb-4 font-serif italic text-secondary">Arowolo Tobiloba</h2>
              <p className="text-textMuted uppercase tracking-[0.3em] font-bold text-xs mb-8">Founder & Lead Architect</p>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                 With over 7 years in digital marketing and UI/UX engineering, I realized that most "designers" don't understand sales. I built this brand to fill that gap. I'm not here to win design awards; I'm here to grow your business.
              </p>
            </div>
            <a href="mailto:example@gmail.com" className="btn-primary">Connect Personally</a>
        </section>
      </div>
    </div>
  );
}
