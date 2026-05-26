import ChannelsWidget from "@/features/channels";
import ClientWidget from "@/features/clients";
import ProductsWidget from "@/features/products";
import { formatNumber } from "@/lib/utils";

const FilterButton = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <button className="flex items-center gap-1.5 border border-Border rounded-lg px-3 h-8 text-xs text-Main hover:bg-Tertiary transition-colors">
    {icon}
    {label}
    <svg
      className="w-3 h-3 text-Secondary ml-0.5"
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
);

const SalesCard = () => (
  <div className="bg-[#2E2E30] rounded-2xl p-4 flex flex-col gap-3 w-56 shrink-0">
    <p className="text-white/50 text-xs">Продажи за июль</p>
    <div>
      <p className="text-white text-2xl font-semibold leading-tight">
        {formatNumber(1629619)} ₸
      </p>
      <p className="text-red-400 text-xs mt-1">-66% от прошлого месяца</p>
    </div>
    <div className="flex items-center justify-between border-t border-white/10 pt-2">
      <div>
        <p className="text-white/40 text-[10px]">План:</p>
        <p className="text-white text-sm">0 ₸</p>
      </div>
      <span className="bg-white/10 text-white/60 text-[10px] px-2 py-0.5 rounded-full">
        0%
      </span>
    </div>
  </div>
);

const WarehouseCard = () => (
  <div className="bg-white rounded-2xl border border-Border p-4 w-56 shrink-0 flex flex-col gap-3">
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-Secondary text-xs">Склад обработка:</p>
          <p className="text-Main text-sm font-medium">0 ₸</p>
        </div>
        <p className="text-Secondary text-xs">0 документов</p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-Secondary text-xs">Склад готово:</p>
          <p className="text-Palette-Green text-sm font-medium">
            {formatNumber(1345222)} ₸
          </p>
        </div>
        <p className="text-Secondary text-xs">5 документов</p>
      </div>
    </div>
    <div className="flex gap-1">
      <button className="w-7 h-7 rounded-lg border border-Border flex items-center justify-center text-Secondary hover:bg-Tertiary">
        <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
          <path
            d="M7.5 3L4.5 6L7.5 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button className="w-7 h-7 rounded-lg border border-Border flex items-center justify-center text-Secondary hover:bg-Tertiary">
        <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
          <path
            d="M4.5 3L7.5 6L4.5 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
);

const LEGEND = [
  {
    color: "bg-blue-500",
    label: "Текущий месяц:",
    value: `${formatNumber(1711400)} ₸`,
    sub: "64 doc.",
  },
  {
    color: "bg-yellow-400",
    label: "Предыдущий месяц:",
    value: `${formatNumber(1000400)} ₸`,
    sub: "154 doc.",
  },
  {
    color: "bg-red-400",
    label: "Возвраты текущего месяца:",
    value: `${formatNumber(300000)} ₸`,
    sub: "3 doc.",
  },
];

const ChartSection = () => (
  <div className="flex-1 bg-white rounded-2xl border border-Border p-4 flex flex-col gap-4 min-w-0">
    <div className="flex items-center gap-6 flex-wrap">
      {LEGEND.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <span className={`w-6 h-0.5 rounded-full ${item.color} shrink-0`} />
          <div className="flex items-baseline gap-1">
            <span className="text-Secondary text-xs">{item.label}</span>
            <span className="text-Main text-sm font-semibold">
              {item.value}
            </span>
            <span className="text-Secondary text-xs">{item.sub}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="flex-1 rounded-xl bg-Tertiary min-h-48" />
  </div>
);

const PAGE_TABS = ["Топ продаж", "Для брендов", "Power BI"];

const AnalyticsPage = () => {
  return (
    <div className="flex flex-col gap-5 p-6 flex-1 overflow-y-auto w-full h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-Main text-2xl font-semibold">Аналитика</h1>
        <div className="flex items-center gap-2">
          <FilterButton
            icon={
              <svg
                viewBox="0 0 14 14"
                fill="none"
                className="w-3.5 h-3.5 text-Secondary"
              >
                <circle
                  cx="7"
                  cy="7"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
                <path
                  d="M4 7h6M5 4.5h4M6 9.5h2"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            }
            label="Город: Все"
          />
          <FilterButton
            icon={
              <svg
                viewBox="0 0 14 14"
                fill="none"
                className="w-3.5 h-3.5 text-Secondary"
              >
                <path
                  d="M2 4h10M4 7h6M6 10h2"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            }
            label="Канал: Все каналы"
          />
          <FilterButton
            icon={
              <svg
                viewBox="0 0 14 14"
                fill="none"
                className="w-3.5 h-3.5 text-Secondary"
              >
                <rect
                  x="1"
                  y="2.5"
                  width="12"
                  height="10"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
                <path
                  d="M1 6h12M4.5 1v3M9.5 1v3"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            }
            label="Дата: 07.01.25–07.31.25"
          />
        </div>
      </div>
      <div className="flex items-center gap-6 border-b border-Border">
        {PAGE_TABS.map((tab, i) => (
          <button
            key={tab}
            className={
              i === 0
                ? "pb-2 text-sm font-medium text-Main border-b-2 border-Brand -mb-px"
                : "pb-2 text-sm text-Secondary hover:text-Main"
            }
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex gap-4 w-full h-full">
        <div className="flex flex-col gap-3">
          <SalesCard />
          <WarehouseCard />
        </div>
        <ChartSection />
      </div>

      <div className="w-full grid grid-cols-3 gap-5 h-133">
        <ChannelsWidget />
        <ProductsWidget />
        <ClientWidget />
      </div>
    </div>
  );
};

export default AnalyticsPage;
