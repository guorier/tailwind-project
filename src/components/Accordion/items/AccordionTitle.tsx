import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial } from '@/types/theme';
import { mergeDeep } from '@/components/helpers/merge-deep';
import accordionConfig, { type AccordionStyle } from '@styles/theme/accordion.theme';
import Icons from '@/components/Icons';

interface AccordionTitleProps extends ComponentProps<'button'> {
    theme?: DeepPartial<AccordionStyle>;
    isOpen: boolean;
    setOpen: () => void;
}

export const AccordionTitle: FC<AccordionTitleProps> = ({
    children,
    className,
    theme: customTheme = {},
    isOpen,
    setOpen,
    ...props
}) => {
    const theme = mergeDeep(accordionConfig, customTheme);
    const state = isOpen ? 'on' : 'off';

    return (
        <button
            type="button"
            aria-expanded={isOpen}
            className={twMerge(theme.title.base, theme.title.open[state], className)}
            onClick={setOpen}
            {...props}
        >
            <div>{children}</div>
            <div className={twMerge(theme.title.arrow.base, theme.title.arrow.open[state])}>
                <Icons iName="iconAccodian" className="size-5" />
            </div>
        </button>
    );
};
