function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-400 border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-syne font-semibold text-5xl lg:text-7xl tracking-tighter text-slate-900 uppercase leading-none mb-8">
              Beyond <br />
              The Hype
            </h2>
            <p className="text-base sm:text-lg text-slate-800 mb-6">
              ETH Bali 2026 is a curated Ethereum-native conference happening one day before CoinFest Asia.
            </p>
            <p className="text-base sm:text-lg text-slate-800 mb-6">
              Day format: conference from 12:00 to 18:00, then sunset poolside party from 18:00 to 22:00.
            </p>
            <ul className="space-y-3 font-syne text-base sm:text-lg tracking-tight uppercase border-t-2 border-slate-900 pt-6">
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full border-2 border-slate-900 flex items-center justify-center bg-yellow-300 text-[10px] font-bold">ETH</span>
                Core Ethereum Contributors
              </li>
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full border-2 border-slate-900 flex items-center justify-center bg-sky-300 text-[10px] font-bold">L2</span>
                Layer 2 Founders + ZK Researchers
              </li>
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full border-2 border-slate-900 flex items-center justify-center bg-rose-300 text-[10px] font-bold">AI</span>
                DeFi, AI x Web3, Onchain Creators, Media, Funds
              </li>
            </ul>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-300 border-2 border-slate-900 rounded-3xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative bg-slate-900 border-2 border-slate-900 rounded-3xl p-8 lg:p-12 text-white overflow-hidden z-10">
              <h3 className="font-syne font-semibold text-3xl tracking-tighter uppercase mb-2 text-emerald-400">Format</h3>
              <p className="text-sm text-slate-400 mb-8 font-mono">No noise. No fluff. Just signal.</p>
              <div className="space-y-4">
                <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
                  <h4 className="font-syne font-medium tracking-tight uppercase text-yellow-300 text-lg">12:00 - 18:00 Conference</h4>
                  <p className="text-sm text-slate-300 mt-2">
                    Keynotes, lightning talks, professional panels, founder debates, VC insights and open networking.
                  </p>
                </div>
                <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
                  <h4 className="font-syne font-medium tracking-tight uppercase text-sky-300 text-lg">18:00 - 22:00 Sunset Party</h4>
                  <p className="text-sm text-slate-300 mt-2">
                    Pool, DJ, beachfront sunset, snacks, drinks and strong builder networking.
                  </p>
                </div>
                <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
                  <h4 className="font-syne font-medium tracking-tight uppercase text-rose-300 text-lg">Panel Topics</h4>
                  <p className="text-sm text-slate-300 mt-2">
                    The Future of Layer 2, AI Agents on Ethereum, RWA Adoption, Media and Onchain Culture.
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
