import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Tab {
  value: string;
  label: string;
}

interface WidgetProps {
  tabs: Tab[];
  defaultTab?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

const Widget = ({ tabs, defaultTab, actions, children }: WidgetProps) => {
  return (
    <div className="rounded-2xl bg-white w-[531px] h-[533px] flex flex-col">
      <Tabs defaultValue={defaultTab ?? tabs[0]?.value}>
        <div className="flex items-center justify-between border-b px-4 pt-1 border-Border">
          <TabsList variant="line" className="gap-6">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="px-0 text-Main py-4 text-sm font-normal after:bg-Brand after:h-px!"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {actions}
        </div>
        <section className="px-4 overflow-auto">{children}</section>
      </Tabs>
    </div>
  );
};

export { Widget, TabsContent };
