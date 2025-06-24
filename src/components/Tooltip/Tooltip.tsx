import React, { useState, forwardRef, ComponentProps } from "react";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { twMerge } from "tailwind-merge";
import TipConfig, { TooltipStyle } from '@/styles/theme/tooltip.theme';

interface TooltipProps extends Omit<ComponentProps<"div">, "ref"> {
    theme?: DeepPartial<TooltipStyle>;
    content: string;
    children: React.ReactNode;
    borderRadius?: keyof TooltipStyle['border_radius'];
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
    ({
        className,
        theme: customTheme = {},
        content,
        children,
        borderRadius = "default"
    }, ref) => {
        const theme = mergeDeep(TipConfig, customTheme);
        const [visible, setVisible] = useState(false);

        return (
            <div className={twMerge(theme.wrap)}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                {children}
                {visible && (
                    <div className={twMerge(
                        theme.tip,
                        theme.border_radius[borderRadius],
                        className,
                    )}>
                        <div className={twMerge(theme.triangle)} />
                        {content}
                    </div>
                )}
            </div>
        );
    },
);

Tooltip.displayName = 'Tooltip';