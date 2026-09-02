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
            First Wave is free — until June 21
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Wave — free drop */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-slate-900 bg-blue-600 text-white shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 transition-transform duration-300 animate-ticket-sweep">
            <div className="relative p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-syne font-medium text-sm uppercase tracking-tight text-blue-100">Wave 01</p>
                  <h3 className="font-syne font-semibold text-3xl tracking-tighter uppercase">First Wave</h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full border-2 border-slate-900 bg-yellow-300 text-slate-900 font-syne text-xs uppercase tracking-tight">
                  Free Drop
                </span>
              </div>
              <div className="mt-6 flex items-end justify-between gap-6">
                <div>
                  <p className="font-syne font-semibold text-4xl tracking-tighter">Free</p>
                  <p className="text-xs text-blue-100 mt-1">Until June 21 — limited</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-blue-100 uppercase tracking-tight">Status</p>
                  <p className="font-syne font-medium uppercase tracking-tight text-yellow-300">Live Now</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-blue-100 border-t-2 border-white/20 pt-6">
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-900 bg-yellow-300 text-slate-900 flex items-center justify-center text-xs font-bold">7</span>
                  Full access across all 7 zones
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-900 bg-yellow-300 text-slate-900 flex items-center justify-center text-xs font-bold">🔥</span>
                  All performances (fire, dance, DJ)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-900 bg-yellow-300 text-slate-900 flex items-center justify-center text-xs font-bold">🃏</span>
                  Arcana Hunt participation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-900 bg-yellow-300 text-slate-900 flex items-center justify-center text-xs font-bold">⏳</span>
                  Limited free allocation
                </li>
              </ul>
              <a
                href="https://luma.com/humblpzd"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-300 border-2 border-slate-900 rounded-full font-syne font-semibold text-sm uppercase tracking-tight text-slate-900 hover:bg-white transition-colors"
              >
                Claim Free Ticket →
              </a>
            </div>
          </div>

          {/* General Admission */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-slate-900 bg-emerald-400 text-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 transition-transform duration-300 animate-ticket-sweep">
            <div className="relative p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-syne font-medium text-sm uppercase tracking-tight text-slate-800">Wave 02</p>
                  <h3 className="font-syne font-semibold text-3xl tracking-tighter uppercase">General</h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full border-2 border-slate-900 bg-emerald-200 font-syne text-xs uppercase tracking-tight">
                  🎟️
                </span>
              </div>
              <div className="mt-6 flex items-end justify-between gap-6">
                <div>
                  <p className="font-syne font-semibold text-4xl tracking-tighter">$20</p>
                  <p className="text-xs text-slate-800 mt-1">The full ETH Bali 2027 experience</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-800 uppercase tracking-tight">Status</p>
                  <p className="font-syne font-medium uppercase tracking-tight">After June 21</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-800 border-t-2 border-slate-900/40 pt-6">
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-900 bg-blue-600 text-white flex items-center justify-center text-xs font-bold">7</span>
                  Full access across all 7 zones
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-900 bg-blue-600 text-white flex items-center justify-center text-xs font-bold">🍣</span>
                  Nikkei canapés + soft drinks
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-900 bg-blue-600 text-white flex items-center justify-center text-xs font-bold">🔥</span>
                  All live performances + Arcana Hunt
                </li>
              </ul>
              <button disabled className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900/10 border-2 border-slate-900/30 rounded-full font-syne font-medium text-sm uppercase tracking-tight text-slate-900/50 cursor-not-allowed">
                On Sale Soon
              </button>
            </div>
          </div>

          {/* VIP */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-slate-900 bg-slate-900 text-white shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 transition-transform duration-300 animate-ticket-sweep">
            <div className="relative p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-syne font-medium text-sm uppercase tracking-tight text-slate-300">Wave 03</p>
                  <h3 className="font-syne font-semibold text-3xl tracking-tighter uppercase">VIP</h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full border-2 border-slate-700 bg-slate-800 font-syne text-xs uppercase tracking-tight text-yellow-300">
                  👑
                </span>
              </div>
              <div className="mt-6 flex items-end justify-between gap-6">
                <div>
                  <p className="font-syne font-semibold text-4xl tracking-tighter">$80</p>
                  <p className="text-xs text-slate-300 mt-1">The best seat in the house</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-300 uppercase tracking-tight">Status</p>
                  <p className="font-syne font-medium uppercase tracking-tight text-yellow-300">After June 21</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300 border-t-2 border-slate-700 pt-6">
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-700 bg-yellow-300 text-slate-900 flex items-center justify-center text-xs font-bold">+</span>
                  Everything in General, dialled to max
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-700 bg-yellow-300 text-slate-900 flex items-center justify-center text-xs font-bold">🍸</span>
                  Premium open bar + VIP cabana access
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-slate-700 bg-yellow-300 text-slate-900 flex items-center justify-center text-xs font-bold">🌅</span>
                  Reserved sunset spot + fast-track entry
                </li>
              </ul>
              <button disabled className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border-2 border-slate-700 rounded-full font-syne font-medium text-sm uppercase tracking-tight text-white/40 cursor-not-allowed">
                On Sale Soon
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t-2 border-slate-900/30 pt-8">
          <p className="text-sm text-slate-800 max-w-3xl">
            First Wave tickets are free until June 21 — limited allocation. General and VIP go on sale right after.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TicketsSection;
