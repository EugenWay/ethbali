function HeroSection() {
  return (
    <section
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-blue-600 border-b-2 border-slate-900 overflow-hidden min-h-[100vh] lg:min-h-[108vh] flex flex-col justify-end"
      style={{
        backgroundImage: "url('/static/media/background-image.6a6019af0c781f670cda.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 30px'
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          <h1 className="font-syne font-semibold text-6xl sm:text-7xl lg:text-8xl tracking-tighter text-white leading-[0.9] uppercase">
            ETH Bali <br />
            <span className="text-yellow-300">2026</span>
          </h1>

          <div className="mt-2 max-w-2xl bg-white border-2 border-slate-900 rounded-3xl px-5 py-4 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border-2 border-slate-900 bg-sky-200 font-syne text-xs uppercase tracking-tight text-slate-900">
              <span className="w-2 h-2 rounded-full bg-slate-900" />
              Premium Party • Aug 19, 2026
            </div>
            <p className="text-base sm:text-lg text-slate-900">
              Ethereum doesn&apos;t stop at mainnet. Join builders, founders and creators
              one day before CoinFest Asia.
            </p>
            <div className="mt-4">
              <a
                href="#tickets"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-300 border-2 border-slate-900 rounded-full font-syne font-semibold text-base uppercase tracking-tight text-slate-900 hover:bg-slate-900 hover:text-yellow-300 transition-colors duration-300 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
              >
                Buy Ticket
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
