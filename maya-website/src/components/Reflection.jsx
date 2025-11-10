import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Reflection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in brightness as user scrolls
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0.5, filter: "brightness(0.9)" },
        {
          opacity: 1,
          filter: "brightness(1.1)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      // Soft pulsing background light
      gsap.to(".reflection-glow", {
        opacity: 0.25,
        repeat: -1,
        yoyo: true,
        duration: 8,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 overflow-hidden 
      bg-gradient-to-b from-[#fffdf4] via-[#fffaf0] to-[#ffffff] text-[#3a2815]"
    >
      {/* Gentle top fade from PathToTruth */}
      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-[#faf3d0] via-[#fff8dc] to-transparent pointer-events-none"></div>

      {/* Subtle radiant background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,235,190,0.25),transparent_70%)] reflection-glow pointer-events-none"></div>

      {/* Floating golden dust (very faint) */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-yellow-400/10 select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${10 + Math.random() * 10}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.span>
        ))}
      </div>

      {/* Main Message */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-5xl font-bold mb-6 text-[#4a2c2a] leading-snug max-w-3xl drop-shadow-[0_0_25px_rgba(255,230,150,0.25)]"
      >
        Awaken. Look beyond illusion.  
        Realize the <span className="text-yellow-600">Truth</span> within you.
      </motion.h2>

      {/* Subtle line of closure */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1.4 }}
        className="text-lg text-[#5c3d31]/80 max-w-xl mt-4 italic"
      >
        “All that was seen dissolves into light — and the seer remains.”
      </motion.p>

      {/* Spiritual CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,220,100,0.5)" }}
        whileTap={{ scale: 0.97 }}
        className="mt-12 px-8 py-3 bg-gradient-to-r from-[#f4d36b] to-[#ffd87b] text-[#3d2a1a] font-semibold rounded-full shadow-md hover:shadow-[0_0_30px_rgba(255,220,120,0.5)] transition-all"
      >
        Begin Your Inner Journey
      </motion.button>

      {/* Bottom fade-out to white void */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-[#fffef8] to-[#ffffff] pointer-events-none"></div>
    </section>
  );
}
