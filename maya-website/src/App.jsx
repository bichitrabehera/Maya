import { useEffect } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import SacredTexts from "./components/SacredTexts";
import ModernLife from "./components/ModernLife";
import PathToTruth from "./components/PathToTruth";
import Reflection from "./components/Reflection";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const glow = document.getElementById("global-light");

    // Scroll-driven global light intensity
    gsap.fromTo(
      glow,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: "#philosophy-section",
          start: "top bottom", // starts glowing before Philosophy enters
          end: "top 40%",       // brightest point mid Philosophy
          scrub: true,
        },
        ease: "none",
      }
    );

    // Fade slightly as Philosophy scrolls out
    gsap.to(glow, {
      opacity: 0.15,
      scrollTrigger: {
        trigger: "#philosophy-section",
        start: "bottom 50%",
        end: "bottom top",
        scrub: true,
      },
      ease: "none",
    });

    // Subtle breathing pulse (ambient life effect)
    gsap.to(glow, {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 6,
      ease: "sine.inOut",
      transformOrigin: "center center",
    });
  }, []);

  return (
    <div className="font-sans overflow-x-hidden bg-black relative">
      {/* 🌠 Global Scroll-Reactive Light Overlay */}
      <div
        id="global-light"
        className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,225,120,0.1),transparent_80%)] opacity-0 z-[999]"
      ></div>

      <Hero />
      <Philosophy />
      <SacredTexts />
      <ModernLife />
      <PathToTruth />
      <Reflection />
    </div>
  );
}
