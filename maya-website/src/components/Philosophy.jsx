import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

export default function Philosophy() {
  const sectionRef = useRef(null);
  const ropePath = useRef(null);
  const snakePath = useRef(null);

 useEffect(() => {
  const ctx = gsap.context(() => {
    // Smooth fade/brightness reveal as user scrolls in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0.2, filter: "brightness(0.7)" },
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

    // Rope morph animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 2,
      },
    });

    tl.to(ropePath.current, {
      duration: 2,
      morphSVG: snakePath.current,
      ease: "sine.inOut",
    }).to(ropePath.current, {
      duration: 2,
      morphSVG: ropePath.current,
      ease: "sine.inOut",
    });

    // 🌅 Scroll bridge fade-out to Sacred Texts
    const bridge = document.querySelector(".philosophy-bridge");
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
          "linear-gradient(to bottom, rgba(233,210,150,0), rgba(150,100,50,0.8), #1e0f0aff)",
        ease: "none",
      });
    }
  });

  return () => ctx.revert();
}, []);


  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 overflow-hidden
      bg-gradient-to-b from-[#d9c8a1] via-[#e2d2a4] to-[#c8b998] text-[#3d2a1a] pt-0 mt-0"
    >
      {/* Seamless top blend from Hero */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#a19374] via-[#d9c8a1] to-transparent pointer-events-none"></div>

      {/* Paper texture overlay (ensure paper-texture.jpg in /public) */}
      <div className="absolute inset-0 bg-[url('/')] bg-cover bg-center opacity-30 mix-blend-multiply pointer-events-none"></div>

      {/* Soft vignette + glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_65%,rgba(0,0,0,0.06)_100%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,100,0.08),transparent_70%)] animate-pulse-slow pointer-events-none"></div>

      {/* Floating Dust Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-[#9b7a3b]/20 select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 8}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.4, 0.15],
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

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-[#5c3b1a] mb-8 drop-shadow-[0_0_10px_rgba(100,70,20,0.15)]"
      >
        What is Maya?
      </motion.h2>

      {/* Main Explanation */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2 }}
        className="text-lg md:text-xl max-w-2xl text-[#4a3219]/90 leading-relaxed"
      >
        Maya is <span className="font-semibold text-[#9b6c2f]">illusion</span> — 
        the sacred play where form veils formlessness.  
        Just as twilight confuses vision, so does perception weave stories,  
        mistaking shadows for the real.
      </motion.p>

      {/* SVG Morph Illustration */}
      <div className="relative w-72 h-36 mt-16 flex items-center justify-center">
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-72 h-36"
        >
          <path
            ref={ropePath}
            fill="none"
            stroke="#9b6c2f"
            strokeWidth="5"
            d="M10,100 Q100,90 200,110 T400,100 T590,90"
          />
          <path
            ref={snakePath}
            fill="none"
            stroke="#7a4d20"
            strokeWidth="5"
            opacity="0"
            d="M10,100 Q80,60 160,120 T320,80 Q420,160 590,90"
          />
        </svg>
        <p className="absolute -bottom-10 text-sm text-[#9b6c2f]/80 italic">
          Rope → Snake → Rope — illusion revealed
        </p>
      </div>

      {/* Sanskrit Verse */}
      <div className="mt-20">
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl font-semibold text-[#b17b30] font-devanagari drop-shadow-[0_0_8px_rgba(160,120,40,0.25)]"
        >
          ब्रह्म सत्यं जगन्मिथ्या
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="text-lg text-[#5c3d31] mt-3 italic"
        >
          “Brahman is real, the world is illusory.”
        </motion.p>
      </div>

      {/* Golden to Amber Scroll Transition Bridge */}
<div
  className="absolute bottom-0 left-0 right-0 h-72 opacity-0 pointer-events-none philosophy-bridge"
></div>

    </section>
  );
}
