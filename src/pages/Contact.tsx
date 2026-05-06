import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-bold font-serif mb-8">Let's Talk <span className="luxury-text-gradient italic">Results</span>.</h1>
            <p className="text-textMuted text-lg mb-12">Have a quick question? Or want to discuss a specific project? Reach out below and I'll get back to you within 24 hours.</p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center"><Mail size={24} /></div>
                <div>
                   <p className="text-xs font-bold uppercase tracking-widest text-textMuted">Email</p>
                   <p className="text-lg font-bold">example@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center"><Phone size={24} /></div>
                <div>
                   <p className="text-xs font-bold uppercase tracking-widest text-textMuted">Support</p>
                   <p className="text-lg font-bold">+1 (555) 000-0000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100">
             <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2">First Name</label>
                      <input type="text" className="w-full bg-accent/5 border border-gray-200 rounded-xl p-4 outline-none focus:border-secondary" placeholder="John" />
                   </div>
                   <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2">Last Name</label>
                      <input type="text" className="w-full bg-accent/5 border border-gray-200 rounded-xl p-4 outline-none focus:border-secondary" placeholder="Doe" />
                   </div>
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase tracking-widest mb-2">Email Address</label>
                   <input type="email" className="w-full bg-accent/5 border border-gray-200 rounded-xl p-4 outline-none focus:border-secondary" placeholder="john@example.com" />
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase tracking-widest mb-2">Message</label>
                   <textarea className="w-full bg-accent/5 border border-gray-200 rounded-xl p-4 h-32 outline-none focus:border-secondary resize-none" placeholder="How can I help you?"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                   Send Message <Send size={18} />
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}
