'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import type { DeepPartial } from '@/types/theme';
import type { ModalTheme } from '@styles/theme/modal.theme';
import { useModalContext } from './ModalContext';

export interface ModalBodyProps extends ComponentProps<'div'> {
  theme?: DeepPartial<ModalTheme['body']>;
}

export const ModalBody: FC<ModalBodyProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, popup } = useModalContext();
  const theme = mergeDeep(rootTheme.body, customTheme);

  return (
    <div className={twMerge(theme.base, popup && theme.popup, className)} {...props}>
      {children}
    </div>
  );
};
