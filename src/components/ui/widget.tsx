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
    <div className="rounded-2xl bg-white w-full h-full flex flex-col overflow-hidden">
      <Tabs
        defaultValue={defaultTab ?? tabs[0]?.value}
        className="flex flex-col flex-1 min-h-0 gap-0"
      >
        <div className="flex items-center justify-between border-b px-4 pt-1 border-Border shrink-0">
          <TabsList variant="line" className="gap-6">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="px-0 text-Main py-4 text-sm font-normal after:bg-Brand after:h-px! after:-bottom-0.75!"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {actions}
        </div>
        <section className="px-4 py-3 overflow-auto flex-1 min-h-0 scrollbar-none">
          {children}
        </section>
      </Tabs>
    </div>
  );
};

export { Widget, TabsContent };
