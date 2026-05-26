import type { CityGroup, SalesChannel } from "@/types/channels";
import { useState, type FC } from "react";
import ChannelItem from "./channel-item";
import ArrowsDown from "@/assets/icons/down-up-chevron.svg?react";
import ArrowsUp from "@/assets/icons/up-down-chevron.svg?react";

interface Props {
  group: CityGroup;
}

const initializeState = (group: CityGroup) => {
  if (group.name === "Алматы") {
    return true;
  } else {
    return false;
  }
};

const CityItem: FC<Props> = ({ group }) => {
  const [isOpen, setIsOpen] = useState<boolean>(() => initializeState(group));

  const toggle = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <button className="flex items-center" onClick={toggle}>
          {isOpen ? (
            <ArrowsDown className="text-Main h-5 w-5" />
          ) : (
            <ArrowsUp className="text-Main h-5 w-5" />
          )}
          <h1 className="font-medium text-base text-Main">{group.name}</h1>
        </button>
        <div className="text-Secondary text-xs">{group.channelsCount} кан.</div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-2 mb-3">
          {group.channels.map((channel: SalesChannel) => (
            <ChannelItem key={channel.id} channel={channel} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CityItem;
