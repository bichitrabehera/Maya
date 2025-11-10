import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ModernLife() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade reveal
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0.3, filter: "brightness(0.8)" },
        {
          opacity: 1,
          filter: "brightness(1)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      // Smooth bridge transition (deep blue → soft gold)
      const bridge = document.querySelector(".modern-bridge");
      if (bridge) {
        gsap.to(bridge, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "bottom 80%",
            end: "bottom 10%",
            scrub: true,
          },
          opacity: 1,
          background:
            "linear-gradient(to bottom, rgba(10,15,30,0), rgba(40,35,20,0.6), rgba(250,230,170,1))",
          ease: "none",
        });
      }

      // Subtle aurora drift
      gsap.to(".neon-flow", {
        backgroundPosition: "200% center",
        ease: "none",
        repeat: -1,
        duration: 25,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 overflow-hidden 
      bg-gradient-to-b from-[#0b0d16] via-[#151933] to-[#000000] text-[#d8e6ff]"
    >
      {/* Blend from SacredTexts */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#1c1209] via-[#0b0d16] to-transparent pointer-events-none"></div>

      {/* Flowing aurora */}
<div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,180,255,0.07)_0%,rgba(180,60,255,0.07)_50%,rgba(0,180,255,0.07)_100%)] bg-[length:200%_100%] neon-flow pointer-events-none"></div>

{/* Digital grid texture overlay */}
<div className="absolute inset-0 bg-[url('/digital-grid.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>


      {/* Floating dust */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-cyan-300/10 select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 6}px`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.span>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-5xl font-bold text-cyan-300 mb-8 drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]"
      >
        Digital Mirage
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="text-lg md:text-xl text-blue-100/90 max-w-2xl leading-relaxed"
      >
        The modern mind drifts through pixels — chasing light that blinds
        instead of reveals. In this endless scroll, truth becomes a whisper
        beneath the noise.
      </motion.p>

      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.5 }}
        className="mt-12 text-2xl text-cyan-100 font-light italic max-w-2xl tracking-wide"
        animate={{
          opacity: [0.9, 1, 0.9],
          textShadow: [
            "0 0 10px rgba(0,200,255,0.5)",
            "0 0 20px rgba(180,60,255,0.6)",
            "0 0 10px rgba(0,200,255,0.5)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        “We scroll through shadows and forget the light.”
      </motion.blockquote>

      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.06] mix-blend-overlay pointer-events-none"></div>

      {/* Bottom bridge */}
      <div className="absolute bottom-0 left-0 right-0 h-80 opacity-0 pointer-events-none modern-bridge"></div>
    </section>
  );
}
