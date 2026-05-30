import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const products = [
  { id: 1, name: 'Luminous Serum Set', price: '$185', image: 'https://images.unsplash.com/photo-1713768704571-6aeb0d0e5105?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Complete Botanical Kit', price: '$245', image: 'https://images.unsplash.com/photo-1702475139570-b90434243af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D' },
  { id: 3, name: 'Restoration Ritual', price: '$320', image: 'https://plus.unsplash.com/premium_photo-1669735916387-24340468a65c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8' },
  { id: 4, name: 'Daily Essence Trio', price: '$155', image: 'https://plus.unsplash.com/premium_photo-1661454132288-2d61599196a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D' },
  { id: 5, name: 'Night Renewal Set', price: '$195', image: 'https://plus.unsplash.com/premium_photo-1762164049444-aea50646de06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8' },
  { id: 6, name: 'Purifying Clay Mask', price: '$85', image: 'https://plus.unsplash.com/premium_photo-1674739375729-d6bd4e6f67d9?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8' },
  { id: 7, name: 'Hydrating Mist', price: '$45', image: 'https://plus.unsplash.com/premium_photo-1661630971367-15853002aee8?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8' },
];

// Duplicate products to mimic a continuous looping feel
const loopedProducts = [...products, ...products];

export default function BestSellers({ onProductClick }: { onProductClick?: () => void }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const isAtLeft = el.scrollLeft <= 0;
      const isAtRight = Math.abs(el.scrollWidth - el.clientWidth - el.scrollLeft) <= 1;
      
      // Allow native horizontal scrolling (e.g. from trackpads)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      // Translate vertical scrolling to horizontal scrolling when over the container
      if ((!isAtLeft && e.deltaY < 0) || (!isAtRight && e.deltaY > 0)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  const onMouseDown = (e: any) => {
    setIsDragging(true);
    startX.current = e.pageX - scrollContainerRef.current!.offsetLeft;
    scrollLeft.current = scrollContainerRef.current!.scrollLeft;
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);
  
  const onMouseMove = (e: any) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current!.offsetLeft;
    const walk = (x - startX.current) * 2; // scroll speed
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  return (
    <section className="h-[100dvh] min-h-[600px] w-full flex flex-col justify-between pt-12 md:pt-16 pb-8 md:pb-10 bg-black uppercase overflow-hidden">
      {/* Left Aligned Content area */}
      <div className="px-6 md:px-12 mb-6 w-full max-w-7xl shrink-0">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-2 md:mb-4 text-left normal-case">
          Best Sellers
        </h2>
        <p className="text-neutral-400 font-light font-sans text-sm md:text-base max-w-sm text-left normal-case">
          Our most loved sets, hand-picked for your ultimate organic skincare ritual.
        </p>
      </div>

      {/* Smooth native horizontal scrolling track */}
      <div className="w-full relative flex-1 min-h-0">
        <div 
          ref={scrollContainerRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className={`flex overflow-x-auto gap-6 md:gap-8 px-6 md:px-12 h-full items-stretch no-scrollbar select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab snap-x snap-mandatory'}`} 
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          {loopedProducts.map((product, index) => (
            <motion.div
              key={`${product.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 7) * 0.1, ease: 'easeOut' }}
              onClick={onProductClick}
              className="group shrink-0 snap-center md:snap-start w-[70vw] sm:w-[40vw] md:w-[32vw] lg:w-[26vw] xl:w-[22vw] flex flex-col cursor-pointer h-full"
            >
              {/* Premium Image Container */}
              <div className="w-full flex-1 bg-neutral-900 mb-4 overflow-hidden relative shadow-sm border border-neutral-800/60">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  draggable={false}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500"></div>
                
                {/* Hover Add to Cart Action */}
                <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center">
                  <button className="bg-white/95 backdrop-blur-sm px-8 py-3 text-[10px] sm:text-xs tracking-widest uppercase text-neutral-900 focus:outline-none hover:bg-neutral-900 hover:text-white transition-colors w-full shadow-lg border border-white/20">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Centered Typography */}
              <div className="shrink-0 flex flex-col items-center">
                <h3 className="text-sm border-b border-transparent group-hover:border-white md:text-sm font-sans tracking-widest uppercase mb-1 text-white font-medium text-center transition-colors pb-1">
                  {product.name}
                </h3>
                <p className="text-sm font-light text-neutral-400 text-center normal-case">{product.price}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Visual Spacer to give breathing room at the end of the scroll */}
          <div className="shrink-0 w-[4vw] md:w-[8vw]"></div>
        </div>
      </div>
    </section>
  );
}
