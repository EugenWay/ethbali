function VenueSection() {
  return (
    <section id="venue" className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-600 border-b-2 border-slate-900 overflow-hidden relative">
      <div className="absolute top-14 left-10 opacity-15 -rotate-12 animate-floaty">
        <div className="w-24 h-24 rounded-full border border-white/30" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-15 rotate-12 animate-floaty [animation-delay:.8s]">
        <div className="w-20 h-20 rounded-full border border-white/30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="font-syne font-semibold text-5xl lg:text-7xl tracking-tighter text-white uppercase leading-none">
              Venue
            </h2>
            <p className="text-blue-100 mt-6 text-base sm:text-lg border-l-2 border-yellow-300 pl-4 max-w-xl">
              Bintang Resort Bali, beachfront location with direct ocean access and sunset views. One day before CoinFest Asia.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 border-2 border-slate-900 rounded-2xl p-5 shadow-[4px_4px_0px_0px_rgba(253,224,71,1)] transition-transform hover:-translate-y-1 group">
                <p className="font-syne font-medium uppercase tracking-tight text-yellow-300 text-sm group-hover:text-white transition-colors">Location</p>
                <p className="text-white mt-2">Bintang Resort Bali</p>
                <p className="text-xs text-slate-400 mt-1">Beachfront, Bali</p>
              </div>
              <div className="bg-slate-900 border-2 border-slate-900 rounded-2xl p-5 shadow-[4px_4px_0px_0px_rgba(253,224,71,1)] transition-transform hover:-translate-y-1 group">
                <p className="font-syne font-medium uppercase tracking-tight text-yellow-300 text-sm group-hover:text-white transition-colors">Format</p>
                <p className="text-white mt-2">Conference + Party</p>
                <p className="text-xs text-slate-400 mt-1">Builder networking</p>
              </div>
              <div className="bg-slate-900 border-2 border-slate-900 rounded-2xl p-5 shadow-[4px_4px_0px_0px_rgba(253,224,71,1)] transition-transform hover:-translate-y-1 group">
                <p className="font-syne font-medium uppercase tracking-tight text-yellow-300 text-sm group-hover:text-white transition-colors">Hours</p>
                <p className="text-white mt-2">12:00 - 22:00</p>
                <p className="text-xs text-slate-400 mt-1">Conference then sunset party</p>
              </div>
              <div className="bg-slate-900 border-2 border-slate-900 rounded-2xl p-5 shadow-[4px_4px_0px_0px_rgba(253,224,71,1)] transition-transform hover:-translate-y-1 group">
                <p className="font-syne font-medium uppercase tracking-tight text-yellow-300 text-sm group-hover:text-white transition-colors">On Site</p>
                <p className="text-white mt-2">Pool + Beach + DJ</p>
                <p className="text-xs text-slate-400 mt-1">Snacks and merch drop</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-yellow-300 border-2 border-slate-900 rounded-3xl translate-x-4 translate-y-4" />
            <div className="relative bg-slate-900 border-2 border-slate-900 rounded-3xl p-6 lg:p-8 overflow-hidden">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="font-syne font-semibold text-2xl tracking-tighter uppercase text-white">Gallery</h3>
                <span className="font-mono text-xs text-slate-400">Bintang Resort Bali</span>
              </div>

              <div className="grid grid-cols-6 gap-3">
                <div className="col-span-6 sm:col-span-4 h-44 sm:h-56 rounded-2xl border border-slate-700 overflow-hidden relative">
                  <img src="/static/media/venue-pool.jpg" alt="Pool" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4">
                    <p className="font-syne font-medium uppercase tracking-tight text-white text-sm drop-shadow">Pool</p>
                    <p className="text-xs text-slate-200 drop-shadow">Beachfront</p>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-2 h-44 sm:h-56 rounded-2xl border border-slate-700 overflow-hidden relative">
                  <img src="/static/media/venue-lounge.jpg" alt="Lounge" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4">
                    <p className="font-syne font-medium uppercase tracking-tight text-white text-sm drop-shadow">Lounge</p>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-2 h-32 rounded-2xl border border-slate-700 overflow-hidden relative">
                  <img src="/static/media/venue-beach.jpg" alt="Beach" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-4">
                    <p className="font-syne font-medium uppercase tracking-tight text-white text-sm drop-shadow">Beach</p>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4 h-32 rounded-2xl border border-slate-700 overflow-hidden relative">
                  <img src="/static/media/venue-stage.jpg" alt="Exhibition Area" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-4">
                    <p className="font-syne font-medium uppercase tracking-tight text-white text-sm drop-shadow">Exhibition Area</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="text-xs text-slate-400 font-mono">Bintang Resort Bali</p>
                <a
                  href="https://bintang-bali-hotel.com/gallery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-300 hover:text-white font-syne uppercase tracking-tight text-sm transition-colors border-b border-yellow-300 hover:border-white pb-1"
                >
                  Full Gallery <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VenueSection;
