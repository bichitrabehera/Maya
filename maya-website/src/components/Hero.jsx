import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LightRays from "./LightRays";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const bgLayer = useRef(null);
  const midLayer = useRef(null);
  const fgLayer = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateY = useTransform(mouseX, [-200, 200], [10, -10]);
  const rotateX = useTransform(mouseY, [-200, 200], [-6, 6]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom 60%",
          scrub: true,
        },
      });

      tl.to(bgLayer.current, { y: "-6%", ease: "none" }, 0)
        .to(midLayer.current, { y: "-15%", ease: "none" }, 0)
        .to(fgLayer.current, { y: "-25%", ease: "none" }, 0);

      // light pulse
      gsap.to(".light-pulse", {
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // golden bridge transition
      gsap.to(".hero-bridge", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "bottom 90%",
          end: "bottom 10%",
          scrub: true,
        },
        opacity: 1,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden text-yellow-100"
    >
      {/* Background Gradient */}
      <div
        ref={bgLayer}
        className="absolute inset-0 bg-gradient-to-b from-[#150909] via-[#351f04] to-black"
      ></div>

      {/* Soft Aurora */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,210,100,0.1),transparent_70%)] animate-pulse-slow"></div>

      {/* Light Rays */}
      <div ref={midLayer} className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#FFD700"
          raysSpeed={1.2}
          lightSpread={0.9}
          rayLength={1.5}
          followMouse
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.02}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-yellow-300/20 select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 8}px`,
            }}
            animate={{ y: [0, -40, 0], opacity: [0.3, 0.7, 0.3] }}
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

      {/* Center Light Pulse */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-radial from-yellow-500/10 via-yellow-400/5 to-transparent blur-3xl light-pulse"></div>

      {/* Foreground Text */}
      <motion.div
        ref={fgLayer}
        className="relative z-10 max-w-3xl px-6"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - (rect.left + rect.width / 2));
          mouseY.set(e.clientY - (rect.top + rect.height / 2));
        }}
        style={{ rotateY, rotateX }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 1.5 }}
          className="font-devanagari text-xl md:text-2xl text-yellow-200 mb-6"
        >
          माया महागुणा सर्वं व्याप्यतेऽनित्यं।
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5 }}
          className="text-6xl md:text-7xl font-bold text-yellow-300 drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]"
        >
          माया – The Veil of Illusion
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-2xl italic text-yellow-200"
        >
          “That which is not what it seems.”
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 2 }}
          className="mt-10 text-lg text-yellow-100/80 leading-relaxed"
        >
          “The eyes see shadows, the mind calls them real.  
          But only when light pierces illusion, truth reveals itself.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9, y: [0, 10, 0] }}
          transition={{
            delay: 3,
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 -translate-x-1/2 bottom-10 text-yellow-300 text-xl"
        >
          ↓
        </motion.div>
      </motion.div>

      {/* Mandala Overlay */}
      <div className="absolute inset-0 bg-[url('/mandala.png')] bg-center bg-no-repeat bg-contain opacity-10 animate-spin-slow"></div>

      {/* Shimmer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-yellow-200/10 to-transparent animate-pulse opacity-20"></div>

      {/* Golden Scroll Bridge */}
      <div className="hero-bridge absolute bottom-0 left-0 right-0 h-64 opacity-0 bg-gradient-to-b from-transparent via-[#3b230d] to-[#a19374] pointer-events-none"></div>
    </section>
  );
}
