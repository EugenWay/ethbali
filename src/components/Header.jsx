import { useState } from 'react';

const DECK_MAILTO =
  'mailto:ethbaliteam@gmail.com' +
  '?subject=' + encodeURIComponent('Open Waters — Sponsor Deck Request') +
  '&body=' + encodeURIComponent(
    "Hi Open Waters team,\n\nWe'd like to receive the sponsorship deck for Open Waters (Bali, 19 August).\n\nCompany:\nWebsite:\nName:\n\nThanks!"
  );

function Header({ showSchedule = true, showSponsors = true }) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-yellow-300 border-b-2 border-slate-900 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img
                src="/static/media/ethbali.png"
                alt="Open Waters"
                className="h-12 w-auto object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="font-syne font-semibold text-[1.4rem] sm:text-[1.7rem] tracking-tighter uppercase text-slate-900">
                  Open Waters
                </span>
                <span className="font-syne font-medium text-[0.62rem] sm:text-xs tracking-tight uppercase text-slate-700">
                  by ETH Bali
                </span>
              </span>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="font-syne text-base font-medium uppercase tracking-tight hover:text-blue-600 transition-colors">About</a>
              {showSchedule && (
                <a href="#schedule" className="font-syne text-base font-medium uppercase tracking-tight hover:text-blue-600 transition-colors">The Night</a>
              )}
              {showSponsors && (
                <a href="#sponsors" className="font-syne text-base font-medium uppercase tracking-tight hover:text-blue-600 transition-colors">Sponsors</a>
              )}
              <a href="#venue" className="font-syne text-base font-medium uppercase tracking-tight hover:text-blue-600 transition-colors">Venue</a>
              <a href="#tickets" className="font-syne text-base font-medium uppercase tracking-tight hover:text-blue-600 transition-colors">Buy</a>
            </div>

            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-3">
                <a
                  href="https://calendly.com/ethbaliteam/eth-bali-sponsors-discovery-call?month=2026-04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-slate-900 rounded-full font-syne font-medium text-sm uppercase tracking-tight text-slate-900 bg-sky-200 hover:bg-slate-900 hover:text-sky-200 transition-all duration-300"
                >
                  Book a Call
                </a>
                <a
                  href={DECK_MAILTO}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-slate-900 rounded-full font-syne font-medium text-sm uppercase tracking-tight bg-slate-900 text-yellow-300 hover:bg-yellow-300 hover:text-slate-900 transition-all duration-300"
                >
                  Request Sponsor Deck
                </a>
              </div>
            </div>

            {/* Burger */}
            <button
              onClick={() => setOpen(o => !o)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] rounded-full border-2 border-slate-900 bg-white/40 hover:bg-white/70 transition-colors"
              aria-label="Menu"
            >
              <span className={`block w-5 h-0.5 bg-slate-900 transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-0.5 bg-slate-900 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-slate-900 transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-900/60" onClick={close} />
        <div className={`absolute top-20 left-0 right-0 bg-yellow-300 border-b-2 border-slate-900 transition-transform duration-300 ${open ? 'translate-y-0' : '-translate-y-4'}`}>
          <div className="flex flex-col px-6 py-6 gap-1">
            <a href="#about" onClick={close} className="font-syne font-semibold text-2xl uppercase tracking-tight text-slate-900 py-3 border-b border-slate-900/20 hover:text-blue-600 transition-colors">About</a>
            {showSchedule && (
              <a href="#schedule" onClick={close} className="font-syne font-semibold text-2xl uppercase tracking-tight text-slate-900 py-3 border-b border-slate-900/20 hover:text-blue-600 transition-colors">The Night</a>
            )}
            {showSponsors && (
              <a href="#sponsors" onClick={close} className="font-syne font-semibold text-2xl uppercase tracking-tight text-slate-900 py-3 border-b border-slate-900/20 hover:text-blue-600 transition-colors">Sponsors</a>
            )}
            <a href="#venue" onClick={close} className="font-syne font-semibold text-2xl uppercase tracking-tight text-slate-900 py-3 border-b border-slate-900/20 hover:text-blue-600 transition-colors">Venue</a>
            <a href="#tickets" onClick={close} className="font-syne font-semibold text-2xl uppercase tracking-tight text-slate-900 py-3 border-b border-slate-900/20 hover:text-blue-600 transition-colors">Tickets</a>
            <a href="#contact" onClick={close} className="font-syne font-semibold text-2xl uppercase tracking-tight text-slate-900 py-3 border-b border-slate-900/20 hover:text-blue-600 transition-colors">Contact</a>
            <a
              href="https://calendly.com/ethbaliteam/eth-bali-sponsors-discovery-call?month=2026-04"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-200 border-2 border-slate-900 rounded-full font-syne font-semibold text-base uppercase tracking-tight text-slate-900 hover:bg-slate-900 hover:text-sky-200 transition-colors"
            >
              Book a Call →
            </a>
            <a
              href={DECK_MAILTO}
              onClick={close}
              className="mt-3 inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 border-2 border-slate-900 rounded-full font-syne font-semibold text-base uppercase tracking-tight text-yellow-300 hover:bg-blue-600 transition-colors"
            >
              Request Sponsor Deck →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
