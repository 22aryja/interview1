import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TabsContent, Widget } from "@/components/ui/widget";
import Box from "@/assets/icons/box.svg?react";
import Moneys from "@/assets/icons/moneys.svg?react";
import Tick from "@/assets/icons/tick.svg?react";
import Arrows from "@/assets/icons/arrows-up-down.svg?react";
import { useState } from "react";
import type { FilterMode } from "@/types/products";
import { clientsWidgetMock } from "@/mocks/clients";
import type { TopCity, TopClient } from "@/types/clients";
import Card from "./card";

const ClientWidget = () => {
  const [filter, setFilter] = useState<FilterMode>("sum");
  return (
    <Popover>
      <Widget
        tabs={[
          { value: "clients", label: "Топ клиентов" },
          { value: "cities", label: "Топ городов" },
        ]}
        actions={
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="transition-colors rounded-[8px] w-6 h-6 p-1 hover:bg-[#0000000A]"
            >
              <Arrows />
            </Button>
          </PopoverTrigger>
        }
      >
        <TabsContent value="clients">
          <div className="flex flex-col gap-2">
            {clientsWidgetMock.cities.map((city: TopCity) => (
              <Card key={city.id} item={city} mode={filter} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="cities">
          <div className="flex flex-col gap-2">
            {clientsWidgetMock.clients.map((client: TopClient) => (
              <Card key={client.id} item={client} />
            ))}
          </div>
        </TabsContent>
      </Widget>
      <PopoverContent className="w-45.75 p-0 rounded-xl">
        <div className="flex flex-col">
          <Button
            variant="ghost"
            className="text-Main text-sm font-normal px-3 py-2 flex justify-start rounded-none"
            onClick={() => setFilter("sum")}
          >
            <Moneys />
            <h1>По сумме</h1>
            {filter === "sum" && <Tick className="ml-auto w-5! h-5!" />}
          </Button>
          <Button
            variant="ghost"
            className="text-Main text-sm font-normal px-3 py-2 flex justify-start rounded-none"
            onClick={() => setFilter("amount")}
          >
            <Box />
            <h1>По количеству</h1>
            {filter === "amount" && <Tick className="ml-auto w-5! h-5!" />}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ClientWidget;
