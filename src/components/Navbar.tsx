import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Testimonials', path: '/testimonials' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-accent shadow-lg py-4' : 'bg-accent py-5'
      } border-b border-primary/5 text-primary`}
    >
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-secondary flex items-center justify-center font-serif text-primary font-black text-xl rounded-none group-hover:scale-105 transition-transform shadow-lg">A</div>
          </div>
          <div className="text-lg md:text-xl font-black tracking-[0.2em] flex flex-col md:flex-row md:gap-2 leading-none">
            <span className="font-serif text-primary">AROWOLO</span>
            <span className="font-serif opacity-70 group-hover:opacity-100 transition-opacity">TOBILOBA DANIEL</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] font-bold tracking-widest uppercase transition-all border-b-2 py-1 ${
                location.pathname === link.path ? 'border-primary opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking" className="bg-primary text-white px-6 py-3 text-[10px] uppercase font-black tracking-widest hover:bg-secondary hover:text-primary transition-all">
            Secure Audit
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-accent border-t border-primary/10 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs font-black tracking-widest uppercase border-b border-primary/5 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/booking" className="bg-primary text-white py-5 text-center text-xs font-black tracking-widest uppercase">
                Secure Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
