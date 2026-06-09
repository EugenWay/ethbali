const DECK_MAILTO =
  'mailto:ethbaliteam@gmail.com' +
  '?subject=' + encodeURIComponent('Open Waters — Sponsor Deck Request') +
  '&body=' + encodeURIComponent(
    "Hi Open Waters team,\n\nWe'd like to receive the sponsorship deck for Open Waters (Bali, 19 August).\n\nCompany:\nWebsite:\nName:\n\nThanks!"
  );

function SponsorsSection() {
  return (
    <section id="sponsors" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b-2 border-slate-800 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(#FDE047 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <p className="font-syne font-medium text-sm uppercase tracking-tight text-yellow-300 mb-4">
          The Long Game
        </p>
        <h2 className="font-syne font-semibold text-4xl lg:text-6xl tracking-tighter text-white uppercase leading-none mb-6">
          Sponsor Open Waters.<br />Join ETHBali 2027 Early.
        </h2>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-6">
          Open Waters is more than a party — it is the first step toward ETHBali 2027.
          By sponsoring the 2026 beach gathering, partners become early supporters of the
          upcoming ETHBali conference and receive priority consideration for next year&apos;s
          full conference.
        </p>
        <p className="font-syne font-medium text-white text-lg sm:text-xl tracking-tight max-w-2xl mx-auto mb-10 border-l-2 border-yellow-300 pl-4 text-left">
          In 2026, we gather the right people on the beach. In 2027, we bring them to the stage.
        </p>

        <a
          href={DECK_MAILTO}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-300 border-2 border-slate-900 rounded-full font-syne font-semibold text-base uppercase tracking-tight text-slate-900 shadow-[4px_4px_0px_0px_rgba(253,224,71,0.35)] hover:bg-white transition-colors"
        >
          Request Sponsor Deck <span aria-hidden="true">→</span>
        </a>

        <p className="mt-6 text-xs text-slate-400 font-mono">
          We&apos;ll send the full deck to your inbox.
        </p>
      </div>
    </section>
  );
}

export default SponsorsSection;
