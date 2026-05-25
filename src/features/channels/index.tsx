import { Button } from "@/components/ui/button";
import { TabsContent, Widget } from "@/components/ui/widget";
import { topChannelsMock, topManagersMock } from "@/mocks/channels";
import type { CityGroup, TopManager } from "@/types/channels";
import CityItem from "./city-item";
import Manager from "./manager";

const ChannelsWidget = () => {
  return (
    <Widget
      tabs={[
        { value: "channels", label: "Топ каналов" },
        { value: "managers", label: "Топ менеджеров" },
      ]}
      actions={
        <Button
          variant="ghost"
          size="sm"
          className="text-Secondary text-sm font-normal"
        >
          Сбросить
        </Button>
      }
    >
      <TabsContent value="channels" className="mt-4">
        <div className="flex flex-col">
          {topChannelsMock.map((item: CityGroup) => (
            <CityItem key={item.id} group={item} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="managers" className="mt-4">
        <div className="flex flex-col gap-2">
          {topManagersMock.managers.map((manager: TopManager) => (
            <Manager key={manager.id} manager={manager} />
          ))}
        </div>
      </TabsContent>
    </Widget>
  );
};

export default ChannelsWidget;
