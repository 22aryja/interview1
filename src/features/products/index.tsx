import { Button } from "@/components/ui/button";
import { TabsContent, Widget } from "@/components/ui/widget";
import Arrows from "@/assets/icons/arrows-up-down.svg?react";
import { productsWidgetMock } from "@/mocks/products";
import type { FilterMode, TopProduct } from "@/types/products";
import Card from "./card";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import Box from "@/assets/icons/box.svg?react";
import Moneys from "@/assets/icons/moneys.svg?react";
import Tick from "@/assets/icons/tick.svg?react";
import { useState } from "react";

const ProductsWidget = () => {
    const [filter, setFilter] = useState<FilterMode>("sum");

    return (
        <Popover>
            <Widget
                tabs={[
                    { value: "products", label: "Топ товаров" },
                    { value: "categories", label: "Топ категорий" },
                    { value: "returns", label: "Топ возвратов" },
                ]}
                actions={
                    <PopoverTrigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-Secondary text-sm font-normal"
                        >
                            <Arrows />
                        </Button>
                    </PopoverTrigger>
                }
            >
                <TabsContent value="products" className="mt-4">
                    <div className="flex flex-col gap-2">
                        {productsWidgetMock.products.map(
                            (product: TopProduct) => (
                                <Card
                                    key={product.id}
                                    product={product}
                                    mode={filter}
                                />
                            ),
                        )}
                    </div>
                </TabsContent>
                <TabsContent value="categories" className="mt-4">
                    <div className="flex flex-col gap-2">
                        {productsWidgetMock.categories.map(
                            (product: TopProduct) => (
                                <Card
                                    key={product.id}
                                    product={product}
                                    mode={filter}
                                />
                            ),
                        )}
                    </div>
                </TabsContent>
                <TabsContent value="returns" className="mt-4">
                    <div className="flex flex-col gap-2">
                        {productsWidgetMock.returns.map(
                            (product: TopProduct) => (
                                <Card
                                    key={product.id}
                                    product={product}
                                    mode={filter}
                                />
                            ),
                        )}
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
                        {filter === "sum" && (
                            <Tick className="ml-auto w-5! h-5!" />
                        )}
                    </Button>
                    <Button
                        variant="ghost"
                        className="text-Main text-sm font-normal px-3 py-2 flex justify-start rounded-none"
                        onClick={() => setFilter("amount")}
                    >
                        <Box />
                        <h1>По количеству</h1>
                        {filter === "amount" && (
                            <Tick className="ml-auto w-5! h-5!" />
                        )}
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default ProductsWidget;
