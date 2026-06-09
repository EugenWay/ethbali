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
              UMA Beach House sits on a cliff above Melasti Beach — one of Bali&apos;s most iconic stretches of coastline. An infinity pool that pours into the Indian Ocean, open-air terraces and white sand below. One night before Coinfest.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 border-2 border-slate-900 rounded-2xl p-5 shadow-[4px_4px_0px_0px_rgba(253,224,71,1)] transition-transform hover:-translate-y-1 group">
                <p className="font-syne font-medium uppercase tracking-tight text-yellow-300 text-sm group-hover:text-white transition-colors">Location</p>
                <p className="text-white mt-2">UMA Beach House</p>
                <p className="text-xs text-slate-400 mt-1">Melasti Beach, Bali</p>
              </div>
              <div className="bg-slate-900 border-2 border-slate-900 rounded-2xl p-5 shadow-[4px_4px_0px_0px_rgba(253,224,71,1)] transition-transform hover:-translate-y-1 group">
                <p className="font-syne font-medium uppercase tracking-tight text-yellow-300 text-sm group-hover:text-white transition-colors">Guests</p>
                <p className="text-white mt-2">150+ Curated</p>
                <p className="text-xs text-slate-400 mt-1">Founders, builders, investors</p>
              </div>
              <div className="bg-slate-900 border-2 border-slate-900 rounded-2xl p-5 shadow-[4px_4px_0px_0px_rgba(253,224,71,1)] transition-transform hover:-translate-y-1 group">
                <p className="font-syne font-medium uppercase tracking-tight text-yellow-300 text-sm group-hover:text-white transition-colors">Hours</p>
                <p className="text-white mt-2">17:00 - 21:00</p>
                <p className="text-xs text-slate-400 mt-1">Golden window, peak sunset</p>
              </div>
              <div className="bg-slate-900 border-2 border-slate-900 rounded-2xl p-5 shadow-[4px_4px_0px_0px_rgba(253,224,71,1)] transition-transform hover:-translate-y-1 group">
                <p className="font-syne font-medium uppercase tracking-tight text-yellow-300 text-sm group-hover:text-white transition-colors">On Site</p>
                <p className="text-white mt-2">7 Venue Zones</p>
                <p className="text-xs text-slate-400 mt-1">Pool, beach, cabanas, stage &amp; more</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-yellow-300 border-2 border-slate-900 rounded-3xl translate-x-4 translate-y-4" />
            <div className="relative bg-slate-900 border-2 border-slate-900 rounded-3xl p-6 lg:p-8 overflow-hidden">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="font-syne font-semibold text-2xl tracking-tighter uppercase text-white">Gallery</h3>
                <span className="font-mono text-xs text-slate-400">UMA Beach House</span>
              </div>

              <div className="grid grid-cols-6 gap-3">
                <div className="col-span-6 sm:col-span-4 h-44 sm:h-56 rounded-2xl border border-slate-700 overflow-hidden relative">
                  <img src="/static/media/venue-pool.jpg" alt="Infinity Pool" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4">
                    <p className="font-syne font-medium uppercase tracking-tight text-white text-sm drop-shadow">Infinity Pool</p>
                    <p className="text-xs text-slate-200 drop-shadow">Cliffside</p>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-2 h-44 sm:h-56 rounded-2xl border border-slate-700 overflow-hidden relative">
                  <img src="/static/media/venue-cabanas.jpg" alt="Sunbeds & Cabanas" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4">
                    <p className="font-syne font-medium uppercase tracking-tight text-white text-sm drop-shadow">Sunbeds &amp; Cabanas</p>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-2 h-32 rounded-2xl border border-slate-700 overflow-hidden relative">
                  <img src="/static/media/venue-dining.jpg" alt="Ocean Dining" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-4">
                    <p className="font-syne font-medium uppercase tracking-tight text-white text-sm drop-shadow">Ocean Dining</p>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4 h-32 rounded-2xl border border-slate-700 overflow-hidden relative">
                  <img src="/static/media/venue-aerial.jpg" alt="Aerial View" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-4">
                    <p className="font-syne font-medium uppercase tracking-tight text-white text-sm drop-shadow">Aerial View</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="text-xs text-slate-400 font-mono">Melasti Beach, Bali</p>
                <a
                  href="https://www.google.com/maps/search/UMA+Beach+House+Melasti+Beach+Bali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-300 hover:text-white font-syne uppercase tracking-tight text-sm transition-colors border-b border-yellow-300 hover:border-white pb-1"
                >
                  View on Map <span aria-hidden="true">→</span>
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
