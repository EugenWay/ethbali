function Footer() {
  return (
    <footer className="bg-blue-600 py-12 px-4 sm:px-6 lg:px-8 text-blue-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-yellow-300">🌊</span>
          <span className="font-syne font-semibold text-xl tracking-tighter uppercase text-white">ETH Bali 2027</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="mailto:ethbaliteam@gmail.com"
            className="text-blue-200 hover:text-white transition-colors text-sm font-mono"
          >
            ethbaliteam@gmail.com
          </a>
          <a
            href="https://x.com/ethbali2027"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-white transition-colors text-sm font-mono"
          >
            𝕏 @ethbali2027
          </a>
        </div>
        <div className="text-xs text-blue-300 font-mono flex flex-col sm:flex-row items-center gap-2">
          <span>&copy; 2027 ETH Bali</span>
          <span className="hidden sm:block">·</span>
          <span>Made by <a href="https://github.com/EugenWay" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors">@EugenWay</a></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
