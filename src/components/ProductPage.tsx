import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export default function ProductPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <button 
          onClick={onBack}
          className="flex items-center text-xs tracking-widest uppercase text-neutral-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] bg-neutral-900 overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1713768704571-6aeb0d0e5105?q=80&w=1200&auto=format&fit=crop" 
                alt="Luminous Serum Set" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square bg-neutral-900 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1702475139570-b90434243af2?w=600&auto=format&fit=crop" 
                  alt="Detail 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-neutral-900 overflow-hidden">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1669735916387-24340468a65c?w=600&auto=format&fit=crop" 
                  alt="Detail 2" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">Skincare Set</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6">
                Luminous Serum Set
              </h1>
              <p className="text-2xl font-light mb-8">$185</p>

              <div className="prose prose-invert prose-neutral mb-12">
                <p className="font-light text-neutral-400 leading-relaxed">
                  A transformative daily ritual designed to restore your skin's natural vitality. 
                  This curated set features our award-winning botanical serum, a deeply hydrating essence, 
                  and a nourishing overnight oil. Formulated with wild-harvested ingredients to 
                  enhance radiance and deeply moisturize.
                </p>
              </div>

              {/* Add to Cart Section */}
              <div className="space-y-6">
                <button className="w-full bg-white text-black py-4 text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors duration-300">
                  Add to Cart
                </button>
                <div className="flex items-center justify-between border-t border-neutral-900 pt-6">
                  <span className="text-xs uppercase tracking-widest text-neutral-400">Shipping</span>
                  <span className="text-sm font-light">Complimentary on all orders</span>
                </div>
                <div className="flex items-center justify-between border-t border-neutral-900 pt-6">
                  <span className="text-xs uppercase tracking-widest text-neutral-400">Ingredients</span>
                  <button className="text-sm font-light hover:text-neutral-400 transition-colors">+</button>
                </div>
                <div className="flex items-center justify-between border-y border-neutral-900 py-6">
                  <span className="text-xs uppercase tracking-widest text-neutral-400">How to use</span>
                  <button className="text-sm font-light hover:text-neutral-400 transition-colors">+</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
