import { motion } from 'motion/react';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex items-center justify-between pointer-events-auto"
    >
      {/* Left: Navigation Links (Desktop) */}
      <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest text-white/90">
        <a href="#" className="hover:text-white transition-colors duration-300">Shop</a>
        <a href="#" className="hover:text-white transition-colors duration-300">Skincare</a>
        <a href="#" className="hover:text-white transition-colors duration-300">Our Story</a>
      </div>

      {/* Left: Menu Icon (Mobile) */}
      <div className="md:hidden flex items-center text-white">
        <Menu className="w-6 h-6 stroke-[1.5]" />
      </div>

      {/* Center: Brand Logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <a href="/" className="text-2xl md:text-3xl font-serif tracking-widest text-white">
          A U R E L I A
        </a>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-6 text-white/90">
        <button className="hover:text-white transition-colors duration-300 hidden md:block">
          <Search className="w-5 h-5 stroke-[1.5]" />
        </button>
        <button className="hover:text-white transition-colors duration-300 hidden sm:block">
          <User className="w-5 h-5 stroke-[1.5]" />
        </button>
        <button className="hover:text-white transition-colors duration-300">
          <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
        </button>
      </div>
    </motion.nav>
  );
}
