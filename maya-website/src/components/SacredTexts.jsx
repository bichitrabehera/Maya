export default function SacredTexts() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#ff9933] to-[#ffd966] flex flex-col justify-center items-center text-center px-8">
      <h2 className="text-4xl font-bold text-[#4a2c2a] mb-10">Sacred Texts</h2>

      <div className="space-y-10 max-w-3xl">
        <div>
          <p className="text-2xl text-yellow-600 font-semibold">उपनिषद्</p>
          <p className="text-[#4a2c2a]">
            The world is like a dream — vivid but fleeting.
          </p>
        </div>

        <div>
          <p className="text-2xl text-yellow-600 font-semibold">भगवद् गीता 7.14</p>
          <p className="text-[#4a2c2a]">
            Maya is divine and hard to overcome, yet through devotion it can be
            transcended.
          </p>
        </div>

        <div>
          <p className="text-2xl text-yellow-600 font-semibold">योग वसिष्ठ</p>
          <p className="text-[#4a2c2a]">
            The world is like a painting — an image of reality, not reality
            itself.
          </p>
        </div>
      </div>
    </section>
  );
}
