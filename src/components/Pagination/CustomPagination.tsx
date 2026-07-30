'use client';

import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import type { DeepPartial } from '@/types/theme';
import Icons from '@/components/Icons';
import paginationTheme, { type PagingTheme } from '@styles/theme/paging.theme';

const VISIBLE_PAGES = 5;
const ELLIPSIS = '...';

interface ModernPaginationProps extends Omit<ComponentProps<'div'>, 'ref'> {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    theme?: DeepPartial<PagingTheme>;
}

/**
 * 앞뒤에 첫/마지막 페이지와 생략 기호를 함께 노출하는 페이지네이션.
 */
export const ModernPagination = forwardRef<HTMLDivElement, ModernPaginationProps>(
    (
        { currentPage, totalPages, onPageChange, theme: customTheme = {}, className, ...props },
        ref,
    ) => {
        const theme = mergeDeep(paginationTheme, customTheme);

        const buildPageItems = (): (number | typeof ELLIPSIS)[] => {
            const half = Math.floor(VISIBLE_PAGES / 2);
            const startPage = Math.max(1, Math.min(currentPage - half, totalPages - VISIBLE_PAGES + 1));
            const endPage = Math.min(totalPages, startPage + VISIBLE_PAGES - 1);

            const items: (number | typeof ELLIPSIS)[] = [];

            if (startPage > 1) {
                items.push(1);
                if (startPage > 2) items.push(ELLIPSIS);
            }

            for (let page = startPage; page <= endPage; page++) {
                items.push(page);
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) items.push(ELLIPSIS);
                items.push(totalPages);
            }

            return items;
        };

        const goTo = (page: number) => onPageChange(Math.min(Math.max(page, 1), totalPages));

        return (
            <div ref={ref} className={twMerge(theme.base, className)} {...props}>
                <button
                    type="button"
                    aria-label="이전 페이지"
                    className={theme.pages}
                    disabled={currentPage <= 1}
                    onClick={() => goTo(currentPage - 1)}
                >
                    <Icons iName="iconLeft" className="size-3" />
                </button>

                {buildPageItems().map((item, index) =>
                    item === ELLIPSIS ? (
                        <span key={`ellipsis-${index}`} className={twMerge(theme.pages, 'cursor-default')}>
                            {ELLIPSIS}
                        </span>
                    ) : (
                        <button
                            key={item}
                            type="button"
                            aria-label={`${item} 페이지`}
                            aria-current={currentPage === item ? 'page' : undefined}
                            className={twMerge(theme.pages, currentPage === item && theme.selector)}
                            onClick={() => goTo(item)}
                        >
                            {item}
                        </button>
                    ),
                )}

                <button
                    type="button"
                    aria-label="다음 페이지"
                    className={theme.pages}
                    disabled={currentPage >= totalPages}
                    onClick={() => goTo(currentPage + 1)}
                >
                    <Icons iName="iconRight" className="size-3" />
                </button>
            </div>
        );
    },
);

ModernPagination.displayName = 'ModernPagination';
