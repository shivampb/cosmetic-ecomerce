import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-neutral-950">
      {/* Video Background without overlays */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source
            src="https://res.cloudinary.com/dts7dm26a/video/upload/v1780132850/6154044-uhd_4096_2160_25fps_svau5x.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Fade out effect at the bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Content Container positioned exactly at bottom-left */}
      <div className="absolute z-20 bottom-6 left-6 md:bottom-10 md:left-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
        >
          <h2 className="text-xs md:text-sm tracking-[0.25em] uppercase font-sans text-white/90">
            Timeless Radiance
          </h2>
        </motion.div>
      </div>

      {/* Content Container positioned exactly at bottom-right */}
      <div className="absolute z-20 bottom-6 right-6 md:bottom-10 md:right-12 flex flex-col items-end">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="text-right"
        >
          <p className="text-white/80 font-sans text-xs md:text-sm font-light mb-4 max-w-[200px] leading-relaxed">
            Discover the essence of natural purity.
          </p>
          <a
            href="#explore"
            className="group inline-flex items-center justify-center border-b border-white/40 pb-1 text-xs md:text-sm tracking-[0.2em] text-white uppercase hover:border-white transition-colors duration-500 ease-out"
          >
            Explore Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
