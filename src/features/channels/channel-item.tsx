import type { SalesChannel } from "@/types/channels";
import type { FC } from "react";
import ProgressBar from "./progress-bar";

interface Props {
  channel: SalesChannel;
}

const ChannelItem: FC<Props> = ({ channel }) => {
  return (
    <div className="w-full border border-soild border-Border rounded-xl pt-1 flex flex-col overflow-hidden">
      <section className="px-2 flex items-center justify-between">
        <h1 className="font-medium text-Main text-base py-1.25">
          {channel.name}
        </h1>
        <div className="flex items-center">
          <h1 className="text-Secondary text-xs px-1">Точки отгрузки</h1>
          <span className="bg-[#00000014] w-4 h-4 flex items-center justify-center text-Secondary rounded-full shrink-0 font-medium text-xs">
            {channel.shipmentPoints}
          </span>
        </div>
      </section>

      <section className="px-2 pt-2 grid grid-cols-3 gap-1">
        <div className="flex flex-col gap-1 px-2 py-1 bg-Tertiary rounded-[8px]">
          <h1 className="text-xs text-Secondary">
            Продано: {channel.sold.quantity} шт
          </h1>
          <h2 className="text-Palette-Green">{channel.sold.amount} ₸</h2>
        </div>

        <div className="flex flex-col gap-1 px-2 py-1 bg-Tertiary rounded-[8px]">
          <h1 className="text-xs text-Secondary">
            План:{" "}
            <span className="text-Palette-Green">
              {channel.plan.statusLabel}
            </span>
          </h1>
          <h2 className="text-Main">{channel.plan.amount} ₸</h2>
        </div>

        <div className="flex flex-col gap-1 px-2 py-1 bg-Tertiary rounded-[8px]">
          <h1 className="text-xs text-Secondary">
            Возвраты: {channel.returns.quantity} шт
          </h1>
          <h2 className="text-Palette-Red">{channel.returns.amount} ₸</h2>
        </div>
      </section>

      <section className="pt-5">
        <ProgressBar percent={channel.progressPercent} />
      </section>
    </div>
  );
};

export default ChannelItem;
