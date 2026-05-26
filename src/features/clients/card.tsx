import { cn, formatNumber } from "@/lib/utils";
import type { TopCity, TopClient } from "@/types/clients";
import type { FilterMode } from "@/types/products";
import type { FC } from "react";

interface Props {
  item: TopCity | TopClient;
  mode?: FilterMode;
}

const isCity = (item: Props["item"]): item is TopCity => {
  return "buyersCount" in item;
};

const Card: FC<Props> = ({ item, mode }) => {
  const primary = isCity(item)
    ? mode === "sum"
      ? `${formatNumber(item.purchased.amount)}₸`
      : `${item.purchased.quantity}шт`
    : `${item.purchasedAmount}₸`;

  const secondary = isCity(item)
    ? mode === "sum"
      ? `${item.purchased.quantity}шт`
      : `${formatNumber(item.purchased.amount)}₸`
    : null;

  return (
    <div className="p-2 border border-solid border-Border rounded-xl w-full flex justify-between items-center">
      <section className="flex flex-col gap-1">
        <h1 className="text-Main text-base font-medium">{item.name}</h1>
        <h2
          className={cn(
            "text-sx",
            isCity(item) ? "text-Secondary" : "text-Main",
          )}
        >
          {isCity(item)
            ? `Покупателей: ${formatNumber(item.buyersCount)}`
            : item.phone}
        </h2>
      </section>
      <section className="flex flex-col items-end gap-1">
        <h1 className="text-Quaternary text-xs">Куплено на:</h1>
        <div className="flex items-center gap-1">
          <span className="text-base text-Palette-Green">{primary}</span>
          {secondary && (
            <span className="text-Main text-xs">- {secondary}</span>
          )}
        </div>
      </section>
    </div>
  );
};

export default Card;
