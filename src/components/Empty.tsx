import clsx from "clsx";
import { Icon } from "@/components/Icons";

interface EmptyProps {
    className?: string
    children: React.ReactNode
}

export const Empty = ({ children, className }: EmptyProps) => {
    return (
        <div className={clsx("flex flex-col justify-center items-center", className)}>
            <Icon iName="iconEmpty2" className="size-15" />
            <div className="text-natural-300">
                {children}
            </div>
        </div>
    );
}
