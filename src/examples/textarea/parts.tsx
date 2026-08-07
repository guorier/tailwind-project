"use client";

import React, { ReactNode } from "react";

/** 예제 미리보기에서 상태 라벨을 붙이는 좌측 컬럼. */
export const StateLabels = ({
  items,
  rowClassName = "h-16",
}: {
  items: string[];
  rowClassName?: string;
}) => (
  <div className="flex flex-col gap-4">
    <div className="w-full h-7 flex items-center">
      <div className="w-full h-px bg-silver-300" />
    </div>
    {items.map((item) => (
      <div key={item} className={`flex items-center gap-2 ${rowClassName}`}>
        <span className="flex-none">{item}</span>
        <div className="w-full h-px bg-silver-300" />
      </div>
    ))}
  </div>
);

/** 예제 미리보기에서 각 열 위에 올리는 구분선 있는 제목. */
export const ColumnTitle = ({ children }: { children: ReactNode }) => (
  <div className="flex justify-center items-center gap-4 w-full">
    <div className="w-full h-px bg-silver-300" />
    <h6 className="flex-none">{children}</h6>
    <div className="w-full h-px bg-silver-300" />
  </div>
);

/** 라벨 컬럼 + 예제 컬럼으로 구성된 비교 그리드. */
export const CompareGrid = ({ children }: { children: ReactNode }) => (
  <div className="grid grid-cols-[136px_minmax(0,1fr)] items-center gap-6">
    {children}
  </div>
);
