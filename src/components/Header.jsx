import WalletConnectButton from './WalletConnectButton';

function Header({ showSchedule = true, showSponsors = true }) {
  return (
    <nav className="fixed w-full z-50 bg-yellow-300 border-b-2 border-slate-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img
              src="/static/media/ethbali.png"
              alt="ETH Bali"
              className="h-12 w-auto object-contain"
            />
            <span className="font-syne font-semibold text-[1.7rem] tracking-tighter uppercase text-slate-900">
              ETH.BALI
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="font-syne text-base font-medium uppercase tracking-tight hover:text-blue-600 transition-colors">About</a>
            {showSchedule && (
              <a href="#schedule" className="font-syne text-base font-medium uppercase tracking-tight hover:text-blue-600 transition-colors">Schedule</a>
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
              <WalletConnectButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
