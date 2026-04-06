function Footer() {
  return (
    <footer className="bg-blue-600 py-12 px-4 sm:px-6 lg:px-8 text-blue-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-yellow-300">◉</span>
          <span className="font-syne font-semibold text-xl tracking-tighter uppercase text-white">ETH.BALI</span>
        </div>
        <div className="text-xs text-blue-300 font-mono">
          &copy; 2026 ETH Bali
        </div>
      </div>
    </footer>
  );
}

export default Footer;
