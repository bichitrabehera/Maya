import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SacredTexts() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade + brightness lift
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

      // Scroll bridge to transition into Modern Life (gold → blue)
const bridge = document.querySelector(".sacred-bridge");
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
      "linear-gradient(to bottom, rgba(150,110,40,0), rgba(50,40,100,0.7), rgba(0,10,25,1))",
    ease: "none",
  });
}

      // Moving aurora light behind text
      gsap.to(".divine-light", {
        backgroundPosition: "200% center",
        ease: "none",
        repeat: -1,
        duration: 18,
      });
    });
    return () => ctx.revert();
  }, []);

  const texts = [
    {
      title: "उपनिषद्",
      verse:
        "यथा स्वप्ने महाराज पश्यते भूतसंभवम्। तथैवैतत् जगत्सर्वं दृश्यते चेतनात्मना॥",
      meaning:
        "As in a dream one perceives a world, so too does consciousness project this universe.",
    },
    {
      title: "भगवद् गीता 7.14",
      verse: "दैवी ह्येषा गुणमयी मम माया दुरत्यया।",
      meaning:
        "This divine illusion of Mine, born of the Gunas, is hard to overcome; but those who surrender unto Me transcend it.",
    },
    {
      title: "योग वसिष्ठ",
      verse:
        "चित्रं जगत् देख्यतेऽनित्यं मायामात्रमिदं यथा।",
      meaning:
        "This universe appears wondrous, yet it is transient — a mirage painted by the mind.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 overflow-hidden
      bg-gradient-to-b from-[#0d0a0f] via-[#2e1f16] to-[#6b4821] text-[#f3e9d2]"
    >
      {/* Transition Blend from Philosophy */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-[radial-gradient(circle_at_bottom,#ffc8641a,transparent_80%)] animate-pulse-slow pointer-events-none"></div>

      {/* Divine Aurora Glow */}
<div className="absolute inset-0 bg-[linear-gradient(120deg,#ffc8641a,#ffe6a033,#ffc8641a)] bg-[length:200%_100%] divine-light pointer-events-none"></div>

{/* Ancient parchment texture overlay */}
<div className="absolute inset-0 bg-[url('/ancient-script.jpg')] bg-cover bg-center opacity-15 mix-blend-soft-light pointer-events-none"></div>


      {/* Star Dust Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-yellow-100/10 select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${6 + Math.random() * 10}px`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.span>
        ))}
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-4xl font-bold mb-14 text-yellow-200 drop-shadow-[0_0_15px_rgba(255,220,120,0.3)]"
      >
        {/* Sacred Texts - Whispers of the Eternal */}
      </motion.h2>

      {/* Verses */}
      <div className="space-y-20 max-w-3xl relative z-10">
        {texts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 1.2, ease: "easeOut" }}
          >
            <motion.p
              className="text-2xl text-amber-300 font-semibold font-devanagari mb-4 drop-shadow-[0_0_20px_rgba(255,200,100,0.4)]"
              animate={{
                opacity: [0.9, 1, 0.9],
                textShadow: [
                  "0 0 10px rgba(255,220,150,0.5)",
                  "0 0 20px rgba(255,240,180,0.6)",
                  "0 0 10px rgba(255,220,150,0.5)",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {item.title}
            </motion.p>

            <p className="text-lg md:text-xl text-yellow-50/90 mb-4 font-devanagari leading-relaxed">
              {item.verse}
            </p>

            <motion.p className="text-md md:text-lg text-yellow-100/90 italic leading-relaxed">
              {item.meaning}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Closing line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.4 }}
        className="mt-20 text-yellow-100/80 italic text-lg"
      >
        “In silence, the ancient words still echo — revealing truth beyond illusion.”
      </motion.p>

      {/* Bottom Blend */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-b from-transparent to-[#1c1209] opacity-0 pointer-events-none sacred-bridge"></div>
    </section>
  );
}
