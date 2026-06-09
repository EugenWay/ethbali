function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-400 border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-syne font-semibold text-5xl lg:text-7xl tracking-tighter text-slate-900 uppercase leading-none mb-8">
              One Epic <br />
              Night
            </h2>
            <p className="text-base sm:text-lg text-slate-800 mb-6">
              Before Coinfest kicks off, we&apos;re throwing the best party Bali has ever seen — one of the most beautiful beaches in the world, a stunning cliffside infinity pool, fire shows and Balinese dancers.
            </p>
            <p className="text-base sm:text-lg text-slate-800 mb-6">
              150+ people from the crypto world, all in one place, finally getting to know each other properly. Zero formality. All fun.
            </p>
            <ul className="space-y-3 font-syne text-base sm:text-lg tracking-tight uppercase border-t-2 border-slate-900 pt-6">
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full border-2 border-slate-900 flex items-center justify-center bg-yellow-300 text-[10px] font-bold">F&amp;B</span>
                Founders &amp; Builders
              </li>
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full border-2 border-slate-900 flex items-center justify-center bg-sky-300 text-[10px] font-bold">VC</span>
                Investors &amp; Funds
              </li>
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full border-2 border-slate-900 flex items-center justify-center bg-rose-300 text-[10px] font-bold">+</span>
                Influencers, Creators &amp; Crypto Expats
              </li>
            </ul>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-300 border-2 border-slate-900 rounded-3xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative bg-slate-900 border-2 border-slate-900 rounded-3xl p-8 lg:p-12 text-white overflow-hidden z-10">
              <h3 className="font-syne font-semibold text-3xl tracking-tighter uppercase mb-2 text-emerald-400">The Night</h3>
              <p className="text-sm text-slate-400 mb-8 font-mono">Bali at its most electric.</p>
              <div className="space-y-4">
                <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
                  <h4 className="font-syne font-medium tracking-tight uppercase text-yellow-300 text-lg">🌊 Melasti Beach</h4>
                  <p className="text-sm text-slate-300 mt-2">
                    One of Bali&apos;s most breathtaking beaches. White sand, turquoise water, golden hour that hits different.
                  </p>
                </div>
                <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
                  <h4 className="font-syne font-medium tracking-tight uppercase text-sky-300 text-lg">🏊 Infinity Pool</h4>
                  <p className="text-sm text-slate-300 mt-2">
                    Swim, sip, and soak it all in. The cliffside pool is the social heart of the night.
                  </p>
                </div>
                <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
                  <h4 className="font-syne font-medium tracking-tight uppercase text-rose-300 text-lg">🔥 Fire &amp; Dance Shows</h4>
                  <p className="text-sm text-slate-300 mt-2">
                    Live fire performers and traditional Balinese dancers, plus open bar, Nikkei canapés and coconut welcome drinks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
