import type { FC } from "react";
import Info from "@/assets/icons/info.svg?react";

interface Props {
  label: string;
  desc: string;
}

const Empty: FC<Props> = ({ label, desc }) => {
  return (
    <div className="flex gap-4 rounded-[8px] p-2 bg-Tertiary">
      <Info className="w-6 h-6 text-Secondary" />

      <div className="flex flex-col gap-1">
        <h1 className="text-Main font-medium">{label}</h1>
        <h2 className="text-Secondary text-xs">{desc}</h2>
      </div>
    </div>
  );
};

export default Empty;
