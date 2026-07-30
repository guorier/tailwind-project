'use client';

import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import type { DeepPartial } from '@/types/theme';
import Icons from '@/components/Icons';
import paginationTheme, { type PagingTheme } from '@styles/theme/paging.theme';

interface PaginationProps extends Omit<ComponentProps<'div'>, 'ref'> {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    /** 한 번에 노출할 페이지 번호 개수. */
    pageRangeDisplayed?: number;
    theme?: DeepPartial<PagingTheme>;
}

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
    (
        {
            currentPage,
            totalPages,
            onPageChange,
            pageRangeDisplayed = 5,
            theme: customTheme = {},
            className,
            ...props
        },
        ref,
    ) => {
        const theme = mergeDeep(paginationTheme, customTheme);

        // 현재 페이지를 가운데 두는 범위를 만들되, 양 끝에서는 범위를 안쪽으로 당긴다.
        const half = Math.floor(pageRangeDisplayed / 2);
        const startPage = Math.max(1, Math.min(currentPage - half, totalPages - pageRangeDisplayed + 1));
        const endPage = Math.min(totalPages, startPage + pageRangeDisplayed - 1);
        const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

        const goTo = (page: number) => onPageChange(Math.min(Math.max(page, 1), totalPages));

        const isFirst = currentPage <= 1;
        const isLast = currentPage >= totalPages;

        return (
            <div ref={ref} className={twMerge(theme.base, className)} {...props}>
                <button
                    type="button"
                    aria-label="첫 페이지"
                    className={theme.pages}
                    disabled={isFirst}
                    onClick={() => goTo(1)}
                >
                    <Icons iName="iconDoubleLeft" className="size-3" />
                </button>
                <button
                    type="button"
                    aria-label="이전 페이지"
                    className={theme.pages}
                    disabled={isFirst}
                    onClick={() => goTo(currentPage - 1)}
                >
                    <Icons iName="iconLeft" className="size-3" />
                </button>

                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        type="button"
                        aria-label={`${page} 페이지`}
                        aria-current={currentPage === page ? 'page' : undefined}
                        className={twMerge(theme.pages, currentPage === page && theme.selector)}
                        onClick={() => goTo(page)}
                    >
                        {page}
                    </button>
                ))}

                <button
                    type="button"
                    aria-label="다음 페이지"
                    className={theme.pages}
                    disabled={isLast}
                    onClick={() => goTo(currentPage + 1)}
                >
                    <Icons iName="iconRight" className="size-3" />
                </button>
                <button
                    type="button"
                    aria-label="마지막 페이지"
                    className={theme.pages}
                    disabled={isLast}
                    onClick={() => goTo(totalPages)}
                >
                    <Icons iName="iconDoubleRight" className="size-3" />
                </button>
            </div>
        );
    },
);

Pagination.displayName = 'Pagination';
