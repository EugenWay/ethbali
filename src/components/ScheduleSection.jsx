const scheduleItems = [
  {
    time: '12:00',
    title: 'Doors Open + Networking',
    label: 'Open',
    labelClass: 'text-slate-700',
    description: 'Badge pickup, welcome drink and early intros with builders and partners.',
    defaultOpen: true,
    speaker: {
      name: 'Vitalik Nakamoto',
      role: 'Core Researcher',
      avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Vitalik&backgroundColor=transparent',
    },
  },
  {
    time: '12:20',
    title: 'Platinum Keynote I - 30 Min',
    label: 'Keynote',
    labelClass: 'text-amber-700',
    description: 'Platinum sponsor keynote. Topic: Ethereum beyond speculation and product utility.',
  },
  {
    time: '12:55',
    title: 'Sponsor Spotlight - 20 Min',
    label: 'Sponsor',
    labelClass: 'text-sky-700',
    description: 'Product demo + ecosystem update from a supporting sponsor partner.',
  },
  {
    time: '13:20',
    title: 'Panel: The Future Of Layer 2',
    label: 'Panel',
    labelClass: 'text-emerald-700',
    description: 'Rollups, data availability, sequencer models and user migration between L2 ecosystems.',
  },
  {
    time: '14:00',
    title: 'Coffee Break - 20 Min',
    label: 'Break',
    labelClass: 'text-slate-700',
    description: 'Coffee, snacks and quick networking.',
  },
  {
    time: '14:20',
    title: 'Platinum Keynote II - 30 Min',
    label: 'Keynote',
    labelClass: 'text-amber-700',
    description: 'Platinum sponsor keynote. Topic: Ethereum infra, security and scaling for the next cycle.',
  },
  {
    time: '14:55',
    title: 'Sponsor Lightning - 15 Min',
    label: 'Sponsor',
    labelClass: 'text-sky-700',
    description: 'Fast updates from supporting sponsors, tools and ecosystem infra teams.',
  },
  {
    time: '15:15',
    title: 'Panel: AI Agents On Ethereum',
    label: 'Panel',
    labelClass: 'text-emerald-700',
    description: 'Wallet actions, agents, automation flows and safe interaction with smart contracts.',
  },
  {
    time: '15:55',
    title: 'Lunch Break - 35 Min',
    label: 'Break',
    labelClass: 'text-slate-700',
    description: 'Buffet lunch, partner tables and side-meetings.',
  },
  {
    time: '16:30',
    title: 'Panel: RWA + Institutional Adoption',
    label: 'Panel',
    labelClass: 'text-emerald-700',
    description: 'Legal rails, tokenized assets, compliance and where Ethereum fits enterprise flows.',
  },
  {
    time: '17:10',
    title: 'Founder Debate + VC Insights',
    label: 'Panel',
    labelClass: 'text-emerald-700',
    description: 'What to build now, what to avoid, and where funding is moving next.',
  },
  {
    time: '17:40',
    title: 'Closing Remarks + Party Transition',
    label: 'Close',
    labelClass: 'text-slate-700',
    description: 'Final updates, sponsor thanks and transition to the 18:00 sunset party flow.',
  },
];

function ScheduleSection() {
  return (
    <section id="schedule" className="py-24 px-4 sm:px-6 lg:px-8 bg-rose-500 border-b-2 border-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <h2 className="font-syne font-semibold text-5xl lg:text-7xl tracking-tighter text-white uppercase leading-none selection:bg-slate-900 selection:text-white hover:text-slate-900 transition-colors">
            Agenda
          </h2>
          <button className="self-start md:self-auto px-6 py-2 border-2 border-white text-white rounded-full font-syne text-sm uppercase tracking-tight hover:bg-white hover:text-rose-500 transition-colors">
            Download PDF
          </button>
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
                  {item.speaker && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 overflow-hidden">
                        <img src={item.speaker.avatar} alt={item.speaker.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-syne font-medium text-white tracking-tight uppercase text-sm">{item.speaker.name}</p>
                        <p className="text-xs text-rose-200">{item.speaker.role}</p>
                      </div>
                    </div>
                  )}
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
