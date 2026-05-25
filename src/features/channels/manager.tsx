import type { TopManager } from "@/types/channels";
import type { FC } from "react";
import dummyImg from "@/assets/images/dummy.png";
import ProgressBar from "./progress-bar";

interface Props {
  manager: TopManager;
}

const Manager: FC<Props> = ({ manager }) => {
  return (
    <div className="border border-soild border-Border overflow-hidden pt-2 rounded-xl">
      <section className="px-2 w-full flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            className="border border-solid border-Border rounded-[8px] w-13 h-13"
            src={dummyImg}
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-medium text-Main text-base">{manager.name}</h1>
            <h2 className="text-xs text-[#95A1AC]">{manager.company}</h2>
          </div>
        </div>
        <button>A</button>
      </section>

      <section className="px-2 grid grid-cols-2 gap-1 mt-2">
        <div className="bg-Tertiary rounded-[8px] py-1 px-8 flex flex-col">
          <h2 className="text-xs text-Quaternary">Продано:</h2>
          <div className="flex items-center gap-1">
            <span className="text-Palette-Green text-base">
              {manager.sold.amount} ₸
            </span>
            <span className="text-xs text-Main">
              - {manager.sold.quantity} шт
            </span>
          </div>
        </div>

        <div className="bg-Tertiary rounded-[8px] py-1 px-8 flex flex-col">
          <h2 className="text-xs text-Quaternary">Возврат:</h2>
          <div className="flex items-center gap-1">
            <span className="text-Palette-Red text-base">
              {manager.sold.amount} ₸
            </span>
            <span className="text-xs text-Main">
              - {manager.sold.quantity} шт
            </span>
          </div>
        </div>
      </section>

      <section className="pt-5">
        <ProgressBar percent={manager.progressPercent} />
      </section>
    </div>
  );
};

export default Manager;
