import { cn, formatNumber } from "@/lib/utils";
import type { FilterMode } from "@/types/products";
import type { FC } from "react";

interface Props {
    color: "green" | "neutral" | "red";
    quantity: number;
    amount: number;
    mode: FilterMode;
}
const InfoCard: FC<Props> = ({ color, quantity, amount, mode }) => {
    const label = (color: Props["color"]) => {
        switch (color) {
            case "green":
                return { text: "Продано", color: "text-Palette-Green" };
            case "neutral":
                return { text: "Остаток", color: "text-Main" };
            case "red":
                return { text: "Возврат", color: "text-Palette-Red" };
            default:
                return { text: "", color: "" };
        }
    };

    return (
        <div className="bg-Tertiary py-1 px-2 rounded-[8px] flex flex-col">
            <h1 className="text-Secondary text-xs">{label(color).text}:</h1>
            <div className="flex items-center gap-1">
                <span className={cn("text-base", label(color).color)}>
                    {mode === "sum"
                        ? `${formatNumber(amount)}₸`
                        : `${quantity}шт`}
                </span>
                <span className="text-Main text-xs">
                    -{" "}
                    {mode === "sum"
                        ? `${quantity}шт`
                        : `${formatNumber(amount)}₸`}
                </span>
            </div>
        </div>
    );
};

export default InfoCard;
