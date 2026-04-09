function TicketsSection() {
  return (
    <section id="tickets" className="py-24 px-4 sm:px-6 lg:px-8 bg-yellow-300 border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="font-syne font-semibold text-5xl lg:text-7xl tracking-tighter text-slate-900 uppercase leading-none">
            Tickets
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 bg-slate-900 text-yellow-300 font-syne font-medium uppercase tracking-tight px-6 py-3 rounded-full border-2 border-slate-900 text-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse" />
            Sales open soon — prices locked in now
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-3xl border-2 border-slate-900 bg-blue-600 text-white shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 transition-transform duration-300 animate-ticket-sweep">
            <div className="relative p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-syne font-medium text-sm uppercase tracking-tight text-blue-100">Wave 01</p>
                  <h3 className="font-syne font-semibold text-3xl tracking-tighter uppercase">Early Bird</h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full border-2 border-white/70 bg-white/10 font-syne text-xs uppercase tracking-tight">
                  Limited
                </span>
              </div>
              <div className="mt-6 flex items-end justify-between gap-6">
                <div>
                  <p className="font-syne font-semibold text-4xl tracking-tighter">$15</p>
                  <p className="text-xs text-blue-100 mt-1">First 200 tickets</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-blue-100 uppercase tracking-tight">Status</p>
                  <p className="font-syne font-medium uppercase tracking-tight text-yellow-300">Coming Soon</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-blue-100 border-t-2 border-white/20 pt-6">
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-900 bg-yellow-300 text-slate-900 flex items-center justify-center text-xs font-bold">+</span>
                  Entry + talks + merch drop
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-900 bg-yellow-300 text-slate-900 flex items-center justify-center text-xs font-bold">*</span>
                  Conference + sunset party access
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-900 bg-yellow-300 text-slate-900 flex items-center justify-center text-xs font-bold">~</span>
                  Food & drinks included
                </li>
              </ul>
              <button disabled className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 border-2 border-white/30 rounded-full font-syne font-medium text-sm uppercase tracking-tight text-white/50 cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border-2 border-slate-900 bg-emerald-400 text-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 transition-transform duration-300 animate-ticket-sweep">
            <div className="relative p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-syne font-medium text-sm uppercase tracking-tight text-slate-800">Wave 02</p>
                  <h3 className="font-syne font-semibold text-3xl tracking-tighter uppercase">Second Wave</h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full border-2 border-slate-900 bg-emerald-200 font-syne text-xs uppercase tracking-tight">
                  TFI
                </span>
              </div>
              <div className="mt-6 flex items-end justify-between gap-6">
                <div>
                  <p className="font-syne font-semibold text-4xl tracking-tighter">$20</p>
                  <p className="text-xs text-slate-800 mt-1">Available on TFI</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-800 uppercase tracking-tight">Status</p>
                  <p className="font-syne font-medium uppercase tracking-tight">Not live yet</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-800 border-t-2 border-slate-900/40 pt-6">
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-900 bg-blue-600 text-white flex items-center justify-center text-xs font-bold">N</span>
                  Community access + side events
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-900 bg-blue-600 text-white flex items-center justify-center text-xs font-bold">W</span>
                  Same access package as Early Bird
                </li>
              </ul>
              <button className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-slate-900 rounded-full font-syne font-medium text-sm uppercase tracking-tight text-slate-900 hover:bg-slate-900 hover:text-emerald-400 transition-colors">
                Notify Me
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border-2 border-slate-900 bg-slate-900 text-white shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 transition-transform duration-300 animate-ticket-sweep">
            <div className="relative p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-syne font-medium text-sm uppercase tracking-tight text-slate-300">Wave 03</p>
                  <h3 className="font-syne font-semibold text-3xl tracking-tighter uppercase">Final / Door</h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full border-2 border-slate-700 bg-slate-800 font-syne text-xs uppercase tracking-tight text-yellow-300">
                  Last
                </span>
              </div>
              <div className="mt-6 flex items-end justify-between gap-6">
                <div>
                  <p className="font-syne font-semibold text-4xl tracking-tighter">$30</p>
                  <p className="text-xs text-slate-300 mt-1">At the entrance only</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-300 uppercase tracking-tight">Status</p>
                  <p className="font-syne font-medium uppercase tracking-tight">Door only</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300 border-t-2 border-slate-700 pt-6">
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-700 bg-rose-500 text-white flex items-center justify-center text-xs font-bold">V</span>
                  No online purchase for this wave
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-700 bg-rose-500 text-white flex items-center justify-center text-xs font-bold">M</span>
                  Walk-in ticket at venue desk
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t-2 border-slate-900/30 pt-8">
          <p className="text-sm text-slate-800 max-w-3xl">
            Wave availability changes by time. If unavailable now, check back later.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TicketsSection;
