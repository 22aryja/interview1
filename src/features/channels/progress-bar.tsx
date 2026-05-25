import type { FC } from "react";

interface Props {
  percent: number;
}

const ProgressBar: FC<Props> = ({ percent }) => {
  return (
    <div className="relative flex-1 h-1.5 rounded-full bg-Tertiary overflow-visible">
      <div
        className="h-full rounded-full bg-Brand"
        style={{ width: `${percent}%` }}
      />
      <span
        className="absolute -top-3 -translate-x-1/2 rounded-xs px-0.5 bg-Brand text-[8px] text-white leading-tight"
        style={{
          left: `clamp(1rem, ${percent}%, calc(100% - 1rem))`,
        }}
      >
        {percent}%
      </span>
      <svg
        className="absolute -top-3 text-Secondary/50 -translate-x-1/2"
        style={{ left: "70%" }}
        width="11"
        height="13"
        viewBox="0 0 11 13"
        fill="none"
      >
        <path
          d="M1 1v11M1 1h8L7 4.5 9 8H1"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
