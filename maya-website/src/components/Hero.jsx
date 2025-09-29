import LightRays from "./LightRays";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#8E4613] to-black text-yellow-100 px-6 overflow-hidden">
      
      {/* Background Light Rays */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#FFD700"   // golden color
          raysSpeed={1.2}
          lightSpread={0.9}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.02}
        />
      </div>

      {/* Foreground Text */}
      <div className="relative z-10">
        <h1 className="text-6xl font-bold text-yellow-300 drop-shadow-lg">
          माया – The Veil of Illusion
        </h1>
        <p className="mt-6 text-2xl italic text-yellow-200">
          “That which is not what it seems.”
        </p>
      </div>
    </section>
  );
}
