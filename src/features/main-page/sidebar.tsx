import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  chevron?: boolean;
}

const Icon = ({ children }: { children: React.ReactNode }) => (
  <span className="w-4 h-4 shrink-0 flex items-center justify-center">
    {children}
  </span>
);

const NAV_ITEMS: NavItem[] = [
  {
    label: "Главная",
    icon: (
      <Icon>
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path d="M8.707 1.293a1 1 0 00-1.414 0l-6 6A1 1 0 002 9h1v5a1 1 0 001 1h3v-3h2v3h3a1 1 0 001-1V9h1a1 1 0 00.707-1.707l-6-6z" />
        </svg>
      </Icon>
    ),
  },
  {
    label: "CRM",
    icon: (
      <Icon>
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 8a3 3 0 100-6 3 3 0 000 6zM2 14s-1 0-1-1 1-4 7-4 7 3 7 4-1 1-1 1H2z" />
        </svg>
      </Icon>
    ),
  },
  {
    label: "Менеджер задач",
    icon: (
      <Icon>
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path d="M3 4.5A1.5 1.5 0 014.5 3h7A1.5 1.5 0 0113 4.5v7A1.5 1.5 0 0111.5 13h-7A1.5 1.5 0 013 11.5v-7zm2 1.5v1h6V6H5zm0 3v1h4V9H5z" />
        </svg>
      </Icon>
    ),
    chevron: true,
  },
  {
    label: "Склад",
    icon: (
      <Icon>
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1L1 5v1h14V5L8 1zM2 7v6h3V9h6v4h3V7H2zm4 6v-3h4v3H6z" />
        </svg>
      </Icon>
    ),
    chevron: true,
  },
  {
    label: "Организация",
    icon: (
      <Icon>
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path d="M1 2a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V2zm0 5a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1V7zm7 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1H9a1 1 0 01-1-1V7z" />
        </svg>
      </Icon>
    ),
  },
  {
    label: "Бухгалтерия",
    icon: (
      <Icon>
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path d="M4 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4zm1 3h6v1H5V4zm0 3h6v1H5V7zm0 3h4v1H5v-1z" />
        </svg>
      </Icon>
    ),
  },
  {
    label: "Аналитика",
    active: true,
    icon: (
      <Icon>
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path d="M2 11l3-4 3 2 3-5 3 3v4H2z" />
          <path d="M2 13h12v1H2z" />
        </svg>
      </Icon>
    ),
  },
  {
    label: "Отчеты",
    icon: (
      <Icon>
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path d="M5 1a1 1 0 000 2h6a1 1 0 000-2H5zM3 5a1 1 0 011-1h8a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V5zm2 1v1h6V6H5zm0 3v1h6V9H5zm0 3v1h4v-1H5z" />
        </svg>
      </Icon>
    ),
    chevron: true,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-60 shrink-0 bg-[#2E2E30] flex flex-col h-full">
      <nav className="flex flex-col gap-0.5 px-2 pt-4 flex-1">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex items-center gap-2.5 px-2 py-2 rounded-lg w-full text-left text-sm transition-colors",
              item.active
                ? "bg-white/10 text-white"
                : "text-white/50 hover:text-white/80 hover:bg-white/5",
            )}
          >
            {item.icon}
            <span className="flex-1 truncate">{item.label}</span>
            {item.chevron && (
              <svg
                className="w-3 h-3 shrink-0"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        ))}
      </nav>

      <div className="flex flex-col px-2 pb-3 gap-0.5">
        {["Справочник", "Настройки"].map((label) => (
          <button
            key={label}
            className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-white/50 hover:text-white/80 hover:bg-white/5 text-sm"
          >
            <span className="w-4 h-4 shrink-0">
              <svg viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 9a1 1 0 100-2 1 1 0 000 2zM3.07 6.93a5 5 0 1110.5 2.14l.93.93a1 1 0 01-1.41 1.41l-.93-.93A5 5 0 013.07 6.93z" />
              </svg>
            </span>
            {label}
          </button>
        ))}

        <div className="flex items-center gap-2.5 px-2 py-2 text-white/50 text-sm">
          <span className="w-4 h-4 shrink-0">
            <svg viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 2a5 5 0 010 10V3z" />
            </svg>
          </span>
          <span className="flex-1">Темная тема</span>
          <div className="w-8 h-4 rounded-full bg-white/20 relative">
            <div className="absolute left-0.5 top-0.5 w-3 h-3 rounded-full bg-white/50" />
          </div>
        </div>

        <div className="flex items-center gap-2 px-2 py-2 mt-1 rounded-lg hover:bg-white/5 cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-Brand flex items-center justify-center text-white text-xs font-bold shrink-0">
            Z
          </div>
          <span className="text-white text-xs flex-1 truncate">
            Zymyran Office
          </span>
          <svg
            className="w-3 h-3 text-white/50 shrink-0"
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
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
