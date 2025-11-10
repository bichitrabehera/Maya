import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PathToTruth() {
  const sectionRef = useRef(null);
  const lotusRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth reveal
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0.3, filter: "brightness(0.8)" },
        {
          opacity: 1,
          filter: "brightness(1.05)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      // Subtle lotus glow (static pulse, no movement)
      gsap.fromTo(
        lotusRef.current,
        { opacity: 0 },
        {
          opacity: 0.35,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      // Gentle glowing ambience (not rising)
      gsap.to(".truth-glow", {
        opacity: 0.4,
        repeat: -1,
        yoyo: true,
        duration: 8,
        ease: "sine.inOut",
      });

      // Transition bridge from ModernLife → PathToTruth
      const bridge = document.querySelector(".truth-bridge");
      if (bridge) {
        gsap.to(bridge, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
            end: "top 40%",
            scrub: true,
          },
          opacity: 1,
          background:
            "linear-gradient(to bottom, rgba(15,20,35,0.9), rgba(130,100,40,0.7), rgba(250,235,190,1))",
          ease: "none",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const yogas = [
    {
      title: "Jnana Yoga",
      desc: "The path of wisdom — seeing beyond illusion into the nature of reality.",
    },
    {
      title: "Bhakti Yoga",
      desc: "The path of love — dissolving the self through devotion to the Divine.",
    },
    {
      title: "Karma Yoga",
      desc: "The path of action — acting selflessly, free from the fruits of results.",
    },
    {
      title: "Raja Yoga",
      desc: "The path of meditation — mastering the mind to realize inner stillness.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 overflow-hidden 
      bg-gradient-to-b from-[#fff3c4] via-[#f9e7b4] to-[#f6e5bb] text-[#3e2b18]"
    >
      {/* Bridge from ModernLife */}
      <div className="absolute top-0 left-0 right-0 h-72 opacity-0 pointer-events-none truth-bridge"></div>

      {/* Ambient lotus pattern */}
<div
  ref={lotusRef}
  className="absolute top-3/4 left-1/2 -translate-x-1/3 -translate-y-1/2 w-[650px] h-[650px] bg-[url('/lotus.png')] bg-no-repeat bg-contain opacity-0 pointer-events-none"
></div>


      {/* Subtle center glow (very slow breathing) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,240,190,0.25),transparent_70%)] animate-pulse-slow pointer-events-none"></div>

      {/* Static ambient glow (not scrolling) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_bottom,rgba(255,255,210,0.45),transparent_70%)] blur-3xl opacity-30 truth-glow"></div>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-5xl font-bold mb-10 text-[#604020] drop-shadow-[0_0_25px_rgba(255,220,150,0.3)]"
      >
        Path to Truth
      </motion.h2>

      {/* Yoga Paths */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl relative z-10">
        {yogas.map((path, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 1 }}
            className="p-6 bg-[#fffef5]/90 rounded-xl shadow-lg border border-[#e7d7a3]/60 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(255,230,160,0.4)] transition-all"
          >
            <h3 className="text-2xl font-semibold text-[#4a2c2a] mb-2">
              {path.title}
            </h3>
            <p className="text-[#5c3d31] text-md">{path.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Closing Quote */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.4 }}
        className="mt-16 text-lg italic text-[#6b4c2a]/80 max-w-2xl"
      >
        “When illusion fades, only awareness remains — the quiet truth beneath all forms.”
      </motion.p>

      {/* Bottom gentle fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-b from-transparent via-[#fff6d9] to-[#fffdf5] pointer-events-none"></div>
    </section>
  );
}
