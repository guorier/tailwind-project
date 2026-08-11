"use client";

import React, { ReactNode } from "react";

/** 예제 미리보기에서 상태 라벨을 붙이는 좌측 컬럼. */
export const StateLabels = ({ items }: { items: string[] }) => (
  <div className="flex flex-col gap-4">
    {/* 예제 열의 ColumnTitle 과 같은 높이여야 이후 행들이 나란히 맞는다. */}
    <div className="flex h-6 w-full items-center">
      <div className="h-px w-full bg-silver-300" />
    </div>
    {items.map((item) => (
      <div key={item} className="flex h-[22px] items-center gap-2">
        <span className="flex-none whitespace-nowrap">{item}</span>
        <div className="h-px w-full bg-silver-300" />
      </div>
    ))}
  </div>
);

/**
 * 예제 미리보기에서 각 열 위에 올리는 구분선 있는 제목.
 * 제목이 열 폭을 넘으면 옆 열을 침범하므로 min-w-0 으로 열 안에 가둔다.
 */
export const ColumnTitle = ({ children }: { children: ReactNode }) => (
  <div className="flex w-full min-w-0 items-center justify-center gap-2">
    <div className="h-px min-w-2 flex-1 bg-silver-300" />
    <h6 className="min-w-0 whitespace-nowrap text-base">{children}</h6>
    <div className="h-px min-w-2 flex-1 bg-silver-300" />
  </div>
);

/**
 * 라벨 컬럼 + 예제 컬럼으로 구성된 비교 그리드.
 * 최소 폭은 CompareColumns 의 열 폭이 결정한다.
 */
export const CompareGrid = ({ children }: { children: ReactNode }) => (
  <div className="grid grid-cols-[136px_minmax(0,auto)] gap-6">{children}</div>
);

/**
 * 예제 열 묶음. 각 열에 고정 폭을 줘야 라벨이 접히지 않아
 * 좌측 상태 라벨과 행 높이가 어긋나지 않는다. 좁은 화면에서는
 * 압축되는 대신 미리보기 박스 안에서 가로 스크롤된다.
 */
export const CompareColumns = ({
  children,
  columnWidth = "150px",
}: {
  children: ReactNode;
  /** 열 하나의 고정 폭. 내용이 넓은 예제는 늘려서 쓴다. */
  columnWidth?: string;
}) => (
  <div
    className="grid auto-cols-[var(--col-w)] grid-flow-col items-start gap-4"
    style={{ "--col-w": columnWidth } as React.CSSProperties}
  >
    {children}
  </div>
);

/** 예제 한 열. 제목과 행들을 세로로 쌓는다. */
export const CompareColumn = ({ children }: { children: ReactNode }) => (
  <div className="flex min-w-0 flex-col items-center gap-4">{children}</div>
);

/**
 * 행 래퍼. sm/lg 어느 쪽이든 같은 높이를 유지해야
 * 좌측 상태 라벨과 가로줄이 맞는다.
 */
export const Row = ({ children }: { children: ReactNode }) => (
  <div className="flex h-[22px] items-center whitespace-nowrap">{children}</div>
);

/** 상태 4종(기본/체크/비활성/비활성+체크) 라벨. */
export const stateLabels = ["Default", "Checked", "Disabled", "Disabled Checked"];

/** 색상 6종 라벨. */
export const colorLabels = ["Base", "Primary", "Secondary", "Warning", "Valid", "Error"];
