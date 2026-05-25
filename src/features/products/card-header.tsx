import type { FC } from "react";
import Arrow from "@/assets/icons/arrow-bold.svg?react";

interface Props {
    url: string;
    title: string;
    description: string;
}
const CardHeader: FC<Props> = ({ url, title, description }) => {
    return (
        <header className="w-full flex items-center">
            <section className="w-full flex items-center gap-2">
                <img
                    src={url}
                    className="border border-solid border-Border w-13 h-13 flex shrink-0 rounded-[8px]"
                    alt="image"
                />
                <div className="flex flex-col gap-1 w-full">
                    <h1 className="text-Main font-medium text-base max-w-4/5 text-ellipsis text-nowrap overflow-hidden">
                        {title}
                    </h1>
                    <h2 className="text-sm text-[#95A1AC]">{description}</h2>
                </div>
            </section>
            <section className="w-6 h-6 flex justify-center items-center shrink-0 bg-[#0000000A] rounded-[8px]">
                <Arrow className="text-[#808A93] w-4 h-4" />
            </section>
        </header>
    );
};

export default CardHeader;
