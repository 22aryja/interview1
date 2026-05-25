import type { CityGroup, SalesChannel } from "@/types/channels";
import { type FC } from "react";
import ChannelItem from "./channel-item";

interface Props {
  group: CityGroup;
}

const CityItem: FC<Props> = ({ group }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div>
        <h1 className="font-medium text-base text-Main">{group.name}</h1>
      </div>
      <div className="flex flex-col gap-2">
        {group.channels.map((channel: SalesChannel) => (
          <ChannelItem key={channel.id} channel={channel} />
        ))}
      </div>
    </div>
  );
};

export default CityItem;
