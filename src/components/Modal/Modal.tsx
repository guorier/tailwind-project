'use client';

import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
} from '@floating-ui/react';
import type { ComponentPropsWithoutRef, MutableRefObject } from 'react';
import { forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import type { DeepPartial } from '@/types/theme';
import modalTheme, { type ModalTheme } from '@styles/theme/modal.theme';
import { ModalBody } from './ModalBody';
import { ModalContext } from './ModalContext';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';

type ModalPositions = ModalTheme['root']['positions'];
type ModalSizes = ModalTheme['root']['sizes'];

export interface ModalProps extends ComponentPropsWithoutRef<'div'> {
  onClose?: () => void;
  position?: keyof ModalPositions;
  popup?: boolean;
  root?: HTMLElement;
  show?: boolean;
  size?: keyof ModalSizes;
  dismissible?: boolean;
  theme?: DeepPartial<ModalTheme>;
  initialFocus?: number | MutableRefObject<HTMLElement | null>;
}

const ModalComponent = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      className,
      dismissible = false,
      onClose,
      popup,
      position = 'center',
      root,
      show,
      size = '2xl',
      theme: customTheme = {},
      initialFocus,
      ...props
    },
    theirRef,
  ) => {
    const [headerId, setHeaderId] = useState<string | undefined>(undefined);
    const theme = mergeDeep(modalTheme, customTheme);

    const { context } = useFloating({
      open: show,
      onOpenChange: () => onClose?.(),
    });

    const ref = useMergeRefs([context.refs.setFloating, theirRef]);

    const { getFloatingProps } = useInteractions([
      useClick(context),
      useDismiss(context, { outsidePressEvent: 'mousedown', enabled: dismissible }),
    ]);

    if (!show) {
      return null;
    }

    return (
      <ModalContext.Provider value={{ theme, popup, onClose, setHeaderId }}>
        <FloatingPortal root={root}>
          <FloatingOverlay
            lockScroll
            data-testid="modal-overlay"
            className={twMerge(
              theme.root.base,
              theme.root.positions[position],
              theme.root.show.on,
              className,
            )}
            {...props}
          >
            <FloatingFocusManager context={context} initialFocus={initialFocus}>
              <div
                ref={ref}
                {...getFloatingProps(props)}
                aria-labelledby={headerId}
                className={twMerge(theme.content.base, theme.root.sizes[size])}
              >
                <div className={theme.content.inner}>{children}</div>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      </ModalContext.Provider>
    );
  },
);

ModalComponent.displayName = 'Modal';
ModalHeader.displayName = 'Modal.Header';
ModalBody.displayName = 'Modal.Body';
ModalFooter.displayName = 'Modal.Footer';

export const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
