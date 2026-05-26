const Topbar = () => {
  return (
    <header className="h-12 shrink-0 bg-[#2E2E30] flex items-center px-4 gap-4">
      <button className="w-8 h-8 flex flex-col items-center justify-center gap-1 text-white/70 hover:text-white shrink-0">
        <span className="w-4 h-px bg-current" />
        <span className="w-4 h-px bg-current" />
        <span className="w-4 h-px bg-current" />
      </button>

      <div className="flex-1 max-w-72 mx-auto">
        <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 h-8">
          <svg
            className="w-3.5 h-3.5 text-white/50 shrink-0"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle
              cx="6.5"
              cy="6.5"
              r="4.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M10 10l3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-white/40 text-sm">Поиск</span>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <button className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white">
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
            <path d="M2 3a1 1 0 011-1h10a1 1 0 011 1v7a1 1 0 01-1 1H9l-3 2v-2H3a1 1 0 01-1-1V3z" />
          </svg>
        </button>

        <button className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white">
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
            <path d="M8 1a5 5 0 00-5 5v2l-1.5 2H14.5L13 8V6a5 5 0 00-5-5zM6.5 13a1.5 1.5 0 003 0h-3z" />
          </svg>
        </button>

        <button className="flex items-center gap-2 hover:opacity-80">
          <img
            src="/avatar.png"
            alt="user"
            className="w-7 h-7 rounded-full bg-white/20 object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <svg
            className="w-3 h-3 text-white/50"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
