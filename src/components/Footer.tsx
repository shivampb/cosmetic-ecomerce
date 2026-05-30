export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <div>
          <h2 className="text-2xl font-serif tracking-widest mb-6">A U R E L I A</h2>
          <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs">
            Elevating everyday routines into mindful rituals with pure, botanical skincare.
          </p>
        </div>
        
        <div>
          <h3 className="text-xs tracking-widest uppercase mb-6 text-white/90">Shop</h3>
          <ul className="space-y-4 text-sm font-light text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Skincare</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Body Care</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sets & Gifts</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest uppercase mb-6 text-white/90">About</h3>
          <ul className="space-y-4 text-sm font-light text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Ingredients</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-light text-white/40 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <p>&copy; 2026 Aurelia Kosmetics. All rights reserved.</p>
          <span className="hidden md:inline">•</span>
          <p>Created by Shivam Bhardwaj</p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
