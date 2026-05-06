import { Link } from 'react-router-dom';
import { Mail, Clock, ShieldCheck, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    { q: "How much do your services cost?", a: "Pricing is completely bespoke based on the complexity of the funnel and business size. Generally, our full-stack projects start at $5,000." },
    { q: "What is the typical delivery time?", a: "A standard high-performance funnel takes 4-6 weeks from discovery to launch." },
    { q: "Do you guarantee results?", a: "We guarantee the execution of a strategy built on proven psychological principles. While market conditions vary, our partners typically see a 30-150% boost in conversion efficiency." },
    { q: "How do we communicate?", a: "We primarily use Slack for daily updates and bi-weekly Zoom strategy sessions." },
    { q: "What if I need revisions?", a: "Our workflow includes two major revision phases to ensure absolute alignment with your brand vision." }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-bold font-serif mb-12 text-center">Frequently Asked <span className="luxury-text-gradient">Questions</span></h1>
        <div className="space-y-6">
           {faqs.map((faq, i) => (
             <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4 flex gap-3 text-primary">
                   <HelpCircle className="text-secondary shrink-0" size={24} /> {faq.q}
                </h3>
                <p className="text-textMuted leading-relaxed pl-9">{faq.a}</p>
             </div>
           ))}
        </div>
        <div className="mt-20 p-10 bg-primary text-white rounded-[2rem] text-center">
            <h3 className="text-2xl font-bold mb-4 italic">Still have questions?</h3>
            <p className="text-zinc-500 mb-8">I'm just one message away.</p>
            <Link to="/contact" className="btn-primary">Message AROWOLO TOBILOBA</Link>
        </div>
      </div>
    </div>
  );
}
