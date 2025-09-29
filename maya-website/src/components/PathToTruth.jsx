export default function PathToTruth() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#fff8dc] to-[#ffe4b5] flex flex-col justify-center items-center text-center px-8">
      <h2 className="text-4xl font-bold text-[#4a2c2a] mb-10">
        Path to Truth
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-2xl font-semibold text-[#4a2c2a]">Jnana Yoga</h3>
          <p className="text-[#5c3d31] mt-2">The path of knowledge.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-2xl font-semibold text-[#4a2c2a]">Bhakti Yoga</h3>
          <p className="text-[#5c3d31] mt-2">The path of devotion.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-2xl font-semibold text-[#4a2c2a]">Karma Yoga</h3>
          <p className="text-[#5c3d31] mt-2">The path of selfless action.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-2xl font-semibold text-[#4a2c2a]">Raja Yoga</h3>
          <p className="text-[#5c3d31] mt-2">The path of meditation.</p>
        </div>
      </div>
    </section>
  );
}
