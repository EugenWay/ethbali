import { useEffect, useState } from 'react';

function NotFound() {
  const [floating, setFloating] = useState(true);

  return (
    <div className="bg-blue-600 min-h-screen flex flex-col items-center justify-center px-4 text-white relative overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        .float { animation: float 4s ease-in-out infinite; }
      `}</style>

      <div className="text-center">
        <div className="float mb-8">
          <img
            src="/static/media/cat-image.4c8353b9dba8be96d064.png"
            alt="cat"
            className="h-40 w-auto mx-auto drop-shadow-xl"
          />
        </div>

        <p className="font-syne font-semibold text-yellow-300 uppercase tracking-tight text-sm mb-2">Error 404</p>
        <h1 className="font-syne font-semibold text-6xl sm:text-8xl tracking-tighter uppercase leading-none mb-4">
          Lost at sea
        </h1>
        <p className="text-blue-200 text-base sm:text-lg mb-10 max-w-md mx-auto">
          This page doesn't exist. But Bali does — and it's waiting.
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2 bg-yellow-300 text-slate-900 font-syne font-semibold uppercase tracking-tight px-8 py-4 rounded-full border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-base"
        >
          Back to shore →
        </a>
      </div>

      <p className="absolute bottom-6 text-blue-400 font-mono text-xs">© 2026 ETH Bali</p>
    </div>
  );
}

export default NotFound;
