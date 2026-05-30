const categories = [
  {
    id: 1,
    title: 'face',
    buttonText: 'shop face',
    image: 'https://images.unsplash.com/photo-1555820585-c5ae44394b79?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'beauty tools',
    buttonText: 'shop beauty tools',
    image: 'https://images.unsplash.com/photo-1600144559281-53d1dee79a99?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D'
  },
  {
    id: 3,
    title: 'body',
    buttonText: 'shop body',
    image: 'https://images.unsplash.com/photo-1716760976557-c2a7b81ea07a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8'
  }
];

export default function CategoryShowcase() {
  return (
    <section className="w-full flex flex-col md:flex-row h-auto md:h-screen">
      {categories.map((category) => (
        <div 
          key={category.id} 
          className="relative w-full md:w-1/3 h-[60vh] md:h-full group overflow-hidden border-b md:border-b-0 md:border-r border-black last:border-0"
        >
          {/* Background Image */}
          <img
            src={category.image}
            alt={category.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700"></div>

          {/* Vertical Text (Using writing-mode for clean native layout matching the reference) */}
          <div className="absolute top-8 left-6 md:top-12 md:left-10 pointer-events-none">
            <h2 
              style={{ writingMode: 'vertical-rl' }}
              className="text-white text-6xl md:text-7xl lg:text-8xl font-sans tracking-wide lowercase drop-shadow-md font-medium opacity-90"
            >
              {category.title}
            </h2>
          </div>

          {/* Pill Button Container mapped to bottom-left */}
          <div className="absolute bottom-8 left-6 md:bottom-12 md:left-10 z-10">
            <a 
              href={`#shop-${category.title.replace(' ', '-')}`} 
              className="bg-white text-neutral-900 px-6 py-2.5 rounded-full text-[10px] md:text-xs font-sans tracking-[0.15em] lowercase hover:bg-neutral-100 hover:scale-105 transition-all shadow-md inline-block whitespace-nowrap"
            >
              {category.buttonText}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
