import type { FilterMode, TopProduct } from "@/types/products";
import type { FC } from "react";
import CardHeader from "./card-header";
import girl from "@/assets/images/dummy.png";
import { cn } from "@/lib/utils";
import InfoCard from "./info-card";

interface Props {
    product: TopProduct;
    mode: FilterMode;
}
const card: FC<Props> = ({ product, mode }) => {
    const isStock: boolean = !!product.stock;

    return (
        <div className="w-full border border-solid border-Border p-2 rounded-xl flex flex-col gap-2">
            <CardHeader
                url={girl}
                title={product.name}
                description={product.description}
            />
            <div
                className={cn(
                    "w-full grid gap-1",
                    isStock ? "grid-cols-3" : "grid-cols-2",
                )}
            >
                <InfoCard color="green" mode={mode} {...product.sold} />
                {isStock && (
                    <InfoCard color="neutral" mode={mode} {...product.stock!} />
                )}
                <InfoCard color="red" mode={mode} {...product.returns} />
            </div>
        </div>
    );
};

export default card;
