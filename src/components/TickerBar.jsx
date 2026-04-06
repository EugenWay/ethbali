function TickerBar() {
  const tickerItems = ['Ethereum', 'Builders', 'Sunset Party', 'Beachfront', 'L2', 'ZK', 'DeFi'];

  return (
    <div className="bg-yellow-300 border-b-2 border-slate-900 py-4 overflow-hidden whitespace-nowrap relative">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-yellow-300 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-yellow-300 to-transparent z-10" />

      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="ticker-group font-syne font-semibold text-2xl tracking-tighter uppercase text-slate-900">
            {tickerItems.map((item) => (
              <span key={`${copy}-${item}`} className="inline-flex items-center gap-8">
                <span>{item}</span>
                <span aria-hidden="true">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TickerBar;
