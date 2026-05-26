import type { FC } from "react";
import Flag from "@/assets/icons/flag.svg?react";

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
      <Flag
        className="absolute -top-3 -translate-x-1/2 w-3 h-3 text-Secondary"
        style={{ left: "70%" }}
      />
    </div>
  );
};

export default ProgressBar;
