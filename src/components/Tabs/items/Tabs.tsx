'use client';

import type {
  ComponentProps,
  ForwardedRef,
  KeyboardEvent,
  PropsWithChildren,
  ReactElement,
} from 'react';
import {
  Children,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import type { DeepPartial } from '@/types/theme';
import tabTheme, { type TabStyles, type TabsTheme } from '@styles/theme/tabs.theme';
import type { TabItemProps } from './TabItem';
import { TabItem } from './TabItem';

export interface TabsProps extends Omit<ComponentProps<'div'>, 'ref' | 'style'> {
  onActiveTabChange?: (activeTab: number) => void;
  style?: keyof TabStyles;
  theme?: DeepPartial<TabsTheme>;
  /** 탭 버튼에 포커스 링을 표시할지 여부. */
  ring?: boolean;
}

export interface TabsRef {
  setActiveTab: (activeTab: number) => void;
}

const TabsComponent = forwardRef<TabsRef, TabsProps>(
  (
    {
      children,
      className,
      onActiveTabChange,
      style = 'underline',
      theme: customTheme = {},
      ring = false,
      ...props
    },
    ref: ForwardedRef<TabsRef>,
  ) => {
    const theme = mergeDeep(tabTheme, customTheme);
    const id = useId();

    const tabs = useMemo(
      () =>
        Children.map(
          Children.toArray(children) as ReactElement<PropsWithChildren<TabItemProps>>[],
          ({ props }) => props,
        ),
      [children],
    );

    const tabRefs = useRef<HTMLButtonElement[]>([]);
    const [activeTab, setActiveTab] = useState(Math.max(0, tabs.findIndex((tab) => tab.active)));
    const [focusedTab, setFocusedTab] = useState(-1);

    const changeActiveTab = (index: number): void => {
      setActiveTab(index);
      onActiveTabChange?.(index);
    };

    const handleClick = (index: number): void => {
      changeActiveTab(index);
      setFocusedTab(index);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number): void => {
      switch (event.key) {
        case 'ArrowLeft':
          setFocusedTab(Math.max(0, focusedTab - 1));
          break;
        case 'ArrowRight':
          setFocusedTab(Math.min(tabs.length - 1, focusedTab + 1));
          break;
        case 'Enter':
          handleClick(index);
          break;
      }
    };

    useEffect(() => {
      tabRefs.current[focusedTab]?.focus();
    }, [focusedTab]);

    useImperativeHandle(ref, () => ({ setActiveTab: changeActiveTab }));

    const tabItemStyle = theme.tablist.tabitem.styles[style];
    const tabItemContainerStyle = theme.tabitemcontainer.styles[style];

    return (
      <div className={twMerge(theme.base, className)}>
        <div
          aria-label="Tabs"
          role="tablist"
          className={twMerge(theme.tablist.base, theme.tablist.styles[style], className)}
          {...props}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              id={`${id}-tab-${index}`}
              aria-controls={`${id}-tabpanel-${index}`}
              aria-selected={index === activeTab}
              disabled={tab.disabled}
              tabIndex={index === focusedTab ? 0 : -1}
              ref={(element) => {
                if (element) tabRefs.current[index] = element;
              }}
              className={twMerge(
                theme.tablist.tabitem.base,
                tabItemStyle.base,
                index === activeTab && tabItemStyle.active.on,
                index !== activeTab && !tab.disabled && tabItemStyle.active.off,
                !ring && 'focus:ring-0',
              )}
              style={{ zIndex: index === focusedTab ? 2 : 1 }}
              onClick={() => handleClick(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {tab.icon && <tab.icon className={theme.tablist.tabitem.icon} />}
              {tab.title}
            </button>
          ))}
        </div>

        <div className={twMerge(theme.tabitemcontainer.base, tabItemContainerStyle)}>
          {tabs.map((tab, index) => (
            <div
              key={index}
              role="tabpanel"
              tabIndex={0}
              id={`${id}-tabpanel-${index}`}
              aria-labelledby={`${id}-tab-${index}`}
              className={theme.tabpanel}
              hidden={index !== activeTab}
            >
              {tab.children}
            </div>
          ))}
        </div>
      </div>
    );
  },
);

TabsComponent.displayName = 'Tabs';

export const Tabs = Object.assign(TabsComponent, {
  Item: TabItem,
});
