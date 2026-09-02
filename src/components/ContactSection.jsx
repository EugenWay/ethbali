import { useState, useEffect, useRef } from 'react';

const messages = [
  'see you on the beach 🌊',
  'sun, ocean & fire 🔥',
  'the people who move crypto 🫡',
  'sponsor it → book a call',
];

function ContactSection() {
  const [idx, setIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIdx(i => (i + 1) % messages.length);
      setAnimKey(k => k + 1);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-sky-200 border-b-2 border-slate-900 overflow-hidden relative">
      <style>{`
        @keyframes floatCat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        .float-cat {
          animation: floatCat 4s ease-in-out infinite;
          will-change: transform;
        }
        .msg-animate {
          animation: fadeSlideIn 0.35s ease-out forwards;
          will-change: opacity, transform;
        }
      `}</style>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="font-syne font-semibold text-4xl lg:text-6xl tracking-tighter text-slate-900 uppercase mb-12">
          Contact
        </h2>

        <div className="flex flex-col items-center float-cat">

          {/* Speech bubble */}
          <div className="relative mb-4">
            <div className="bg-white border-2 border-slate-900 rounded-2xl px-6 py-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] w-[320px]">
              <p
                key={animKey}
                className="msg-animate font-syne font-semibold text-slate-900 text-lg uppercase tracking-tight"
              >
                {messages[idx]}
              </p>
              <a
                href="https://calendly.com/ethbaliteam/eth-bali-sponsors-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center w-full gap-2 bg-slate-900 text-yellow-300 font-syne font-semibold uppercase tracking-tight px-5 py-2.5 rounded-full border-2 border-slate-900 hover:bg-yellow-300 hover:text-slate-900 transition-colors text-sm"
              >
                Book a Call →
              </a>
            </div>
            <div className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-0 h-0" style={{
              borderLeft: '9px solid transparent',
              borderRight: '9px solid transparent',
              borderTop: '11px solid #0f172a'
            }} />
          </div>

          <img
            src="/static/media/cat-image.4c8353b9dba8be96d064.png"
            alt="ETH Bali cat"
            className="h-56 w-auto object-contain drop-shadow-xl"
          />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-700">
          <a href="mailto:ethbaliteam@gmail.com" className="flex items-center gap-2 hover:text-slate-900 transition-colors font-mono text-sm">
            ✉ ethbaliteam@gmail.com
          </a>
          <span className="hidden sm:block text-slate-400">·</span>
          <a href="https://x.com/ethbali2027" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-slate-900 transition-colors font-mono text-sm">
            𝕏 @ethbali2027
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
