import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Facebook, ArrowRight } from 'lucide-react';

const footerLinks = {
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ],
  social: [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'TikTok', icon: () => <span className="text-xs font-bold">TikTok</span>, href: '#' },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-accent py-20 text-primary">
      {/* Thick gold divider as requested in theme */}
      <div className="h-[10px] bg-secondary w-full mb-20" />
      
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16 px-4">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative h-10 w-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-secondary flex items-center justify-center font-serif text-primary font-black text-xl rounded-none group-hover:scale-105 transition-transform shadow-lg">A</div>
              </div>
              <div className="text-xl font-black tracking-[0.2em] uppercase leading-none">
                <span className="font-serif">AROWOLO</span>
                <span className="font-serif opacity-70 group-hover:opacity-100 transition-opacity">TOBILOBA DANIEL</span>
              </div>
            </Link>
            <p className="opacity-70 max-w-sm mb-8 leading-relaxed text-sm font-medium">
              Transforming digital presences from portfolios into revenue engines using precision-engineered conversion architectures.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="w-10 h-10 rounded-none border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  aria-label={item.name}
                >
                  <item.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] mb-6 opacity-40">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] mb-6 opacity-40">Legal & Support</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] opacity-50">
          <p>© {new Date().getFullYear()} AROWOLO TOBILOBA DANIEL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
             <Link to="/privacy">Privacy</Link>
             <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
