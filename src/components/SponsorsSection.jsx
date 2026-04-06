import { useState } from 'react';

const sponsorsTier1 = [
  { name: 'Ethereum', slug: 'ethereum' },
  { name: 'Polygon', slug: 'polygon' },
];

const sponsorsTier2 = [
  { name: 'Arbitrum', slug: 'arbitrum' },
  { name: 'Optimism', slug: 'optimism' },
  { name: 'Chainlink', slug: 'chainlink' },
  { name: 'Aave', slug: 'aave' },
  { name: 'Uniswap', slug: 'uniswap' },
  { name: 'Alchemy', slug: 'alchemy' },
];

function SponsorCard({ sponsor, large = false }) {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <div
      className={`group cursor-pointer rounded-2xl border-2 border-slate-700 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:border-yellow-300 hover:bg-slate-800/80 ${
        large ? 'h-40' : 'h-28'
      }`}
    >
      <div className="h-full w-full flex flex-col items-center justify-center gap-3 px-4">
        {!hasImageError ? (
          <img
            src={`https://cdn.simpleicons.org/${sponsor.slug}/FFFFFF`}
            alt={sponsor.name}
            className={`${large ? 'h-12' : 'h-9'} w-auto opacity-90 group-hover:opacity-100 transition-opacity`}
            loading="lazy"
            onError={() => setHasImageError(true)}
          />
        ) : (
          <span
            className={`${large ? 'text-2xl' : 'text-lg'} font-syne font-semibold tracking-tight uppercase text-white`}
          >
            {sponsor.name.slice(0, 3)}
          </span>
        )}
        <span className="font-syne text-xs uppercase tracking-tight text-slate-300 group-hover:text-yellow-300 transition-colors">
          {sponsor.name}
        </span>
      </div>
    </div>
  );
}

function SponsorsSection() {
  return (
    <section id="sponsors" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b-2 border-slate-800 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(#FDE047 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-syne font-semibold text-4xl lg:text-5xl tracking-tighter text-white uppercase text-center mb-4">
          Backed By The Best
        </h2>
        <p className="text-center text-slate-300 text-sm uppercase tracking-tight mb-14">
          Placeholder Backers. Final Partner Logos Can Be Swapped In One Click.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {sponsorsTier1.map((sponsor) => (
            <SponsorCard key={sponsor.slug} sponsor={sponsor} large />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {sponsorsTier2.map((sponsor) => (
            <SponsorCard key={sponsor.slug} sponsor={sponsor} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-yellow-300 border-2 border-slate-900 rounded-full font-syne font-semibold text-sm uppercase tracking-tight text-slate-900 hover:bg-white transition-colors"
          >
            Become a sponsor <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SponsorsSection;
