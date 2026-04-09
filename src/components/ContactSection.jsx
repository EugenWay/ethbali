import { useState, useEffect } from 'react';

const messages = [
  'gm builders 👋',
  'wagmi frens 🫡',
  'ship it to Bali 🌴',
  'move on → book a call',
];

function ContactSection() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % messages.length);
        setVisible(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-sky-200 border-b-2 border-slate-900 overflow-hidden relative">
      <style>{`
        @keyframes floatCat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
      `}</style>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="font-syne font-semibold text-4xl lg:text-6xl tracking-tighter text-slate-900 uppercase mb-12">
          Contact
        </h2>

        {/* Cat + bubble */}
        <div className="flex flex-col items-center" style={{ animation: 'floatCat 4s ease-in-out infinite' }}>

          {/* Speech bubble */}
          <div className="relative mb-4">
            <div className="bg-white border-2 border-slate-900 rounded-2xl px-6 py-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] min-w-[260px]">
              <p
                className="font-syne font-semibold text-slate-900 text-lg uppercase tracking-tight transition-opacity duration-300"
                style={{ opacity: visible ? 1 : 0 }}
              >
                {messages[idx]}
              </p>
              <a
                href="https://calendly.com/ethbaliteam/eth-bali-sponsors-discovery-call?month=2026-04"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center w-full gap-2 bg-slate-900 text-yellow-300 font-syne font-semibold uppercase tracking-tight px-5 py-2.5 rounded-full border-2 border-slate-900 hover:bg-blue-600 transition-colors text-sm"
              >
                Book a Call →
              </a>
            </div>
            {/* Tail */}
            <div className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-0 h-0" style={{
              borderLeft: '9px solid transparent',
              borderRight: '9px solid transparent',
              borderTop: '11px solid #0f172a'
            }} />
            <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-0 h-0" style={{
              borderLeft: '7px solid transparent',
              borderRight: '7px solid transparent',
              borderTop: '9px solid white'
            }} />
          </div>

          {/* Cat */}
          <img
            src="/static/media/cat-image.4c8353b9dba8be96d064.png"
            alt="ETH Bali cat"
            className="h-56 w-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* Links */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-700">
          <a
            href="mailto:ethbaliteam@gmail.com"
            className="flex items-center gap-2 hover:text-slate-900 transition-colors font-mono text-sm"
          >
            ✉ ethbaliteam@gmail.com
          </a>
          <span className="hidden sm:block text-slate-400">·</span>
          <a
            href="https://x.com/ethbali2026"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-slate-900 transition-colors font-mono text-sm"
          >
            𝕏 @ethbali2026
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
