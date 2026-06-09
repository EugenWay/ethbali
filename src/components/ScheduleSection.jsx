const scheduleItems = [
  {
    time: '17:00',
    title: 'Doors Open',
    label: 'Open',
    labelClass: 'text-slate-700',
    description: 'Laser-branded coconut welcome drink in hand. The infinity pool is calling.',
    defaultOpen: true,
  },
  {
    time: '17:30',
    title: 'Golden Hour + DJ Sets',
    label: 'Music',
    labelClass: 'text-sky-700',
    description: 'Golden hour begins. DJ sets kick off. Tropical house and deep beats fire up the vibes by the pool.',
  },
  {
    time: '18:00',
    title: 'Balinese Dance',
    label: 'Show',
    labelClass: 'text-emerald-700',
    description: 'Traditional Kecak dancers take the stage as the sun dips. Bali in its purest form.',
  },
  {
    time: '18:30',
    title: 'Sunset Toast',
    label: 'Toast',
    labelClass: 'text-amber-700',
    description: 'Raise a glass to Bali, to crypto, and to the people in the room.',
  },
  {
    time: '19:00',
    title: 'Fire Show on the Beach',
    label: 'Show',
    labelClass: 'text-rose-700',
    description: 'The main spectacle. Live fire performers light up the beach as the Arcana Hunt goes live across all seven zones.',
  },
  {
    time: '20:30',
    title: 'Arcana Hunt Finale',
    label: 'Finale',
    labelClass: 'text-emerald-700',
    description: 'Winners announced. A rare commemorative NFT is minted live on stage.',
  },
  {
    time: '21:00',
    title: 'Official Close',
    label: 'Close',
    labelClass: 'text-slate-700',
    description: 'The night spills into Bali. See you at Coinfest tomorrow.',
  },
];

function ScheduleSection() {
  return (
    <section id="schedule" className="py-24 px-4 sm:px-6 lg:px-8 bg-rose-500 border-b-2 border-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <h2 className="font-syne font-semibold text-5xl lg:text-7xl tracking-tighter text-white uppercase leading-none selection:bg-slate-900 selection:text-white hover:text-slate-900 transition-colors">
            The Night
          </h2>
          <a href="#tickets" className="self-start md:self-auto px-6 py-2 border-2 border-white text-white rounded-full font-syne text-sm uppercase tracking-tight hover:bg-white hover:text-rose-500 transition-colors">
            Get Tickets
          </a>
        </div>

        <div className="border-t-2 border-slate-900/20">
          {scheduleItems.map((item) => (
            <label key={item.time + item.title} className="block border-b-2 border-slate-900/20 cursor-pointer group">
              <input type="checkbox" className="schedule-toggle hidden" defaultChecked={item.defaultOpen} />
              <div className="py-6 px-2 hover:bg-rose-600/30 transition-colors">
                <div className="schedule-header flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 w-full">
                    <span className="font-syne font-semibold text-yellow-300 text-xl tracking-tight w-32 shrink-0">{item.time}</span>
                    <h3 className="font-syne font-medium text-2xl text-white uppercase tracking-tight selection:bg-slate-900 selection:text-white transition-colors group-hover:text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full bg-white/90 border border-white/40 text-xs uppercase tracking-tight ${item.labelClass}`}>
                      {item.label}
                    </span>
                    <span className="toggle-icon text-2xl text-white hidden sm:block">⌄</span>
                  </div>
                </div>
                <div className="schedule-content hidden mt-6 sm:pl-[10rem]">
                  <p className="text-rose-100 text-sm mb-4 max-w-2xl">{item.description}</p>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScheduleSection;
