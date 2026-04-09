function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-sky-200 border-b-2 border-slate-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-syne font-semibold text-4xl lg:text-6xl tracking-tighter text-slate-900 uppercase mb-6">
          Contact
        </h2>
        <p className="text-slate-800 text-base sm:text-lg mb-10">
          Book a quick call with the team for partnerships and collabs.
        </p>

        <a
          href="https://calendly.com/ethbaliteam/eth-bali-sponsors-discovery-call?month=2026-04"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-slate-900 text-yellow-300 font-syne font-semibold uppercase tracking-tight px-8 py-4 rounded-full border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(253,224,71,1)] hover:-translate-y-1 transition-transform text-base"
        >
          Book a Call <span aria-hidden="true">→</span>
        </a>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-700">
          <a
            href="mailto:ethbaliteam@gmail.com"
            className="flex items-center gap-2 hover:text-slate-900 transition-colors font-mono text-sm"
          >
            <span>✉</span> ethbaliteam@gmail.com
          </a>
          <span className="hidden sm:block text-slate-400">·</span>
          <a
            href="https://x.com/ethbali2026"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-slate-900 transition-colors font-mono text-sm"
          >
            <span>𝕏</span> @ethbali2026
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
