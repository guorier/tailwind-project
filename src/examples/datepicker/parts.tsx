"use client";

import React, { ReactNode } from "react";

/** 예제 미리보기에서 상태 라벨을 붙이는 좌측 컬럼. */
export const StateLabels = ({ items }: { items: string[] }) => (
  <div className="flex flex-col gap-4">
    <div className="w-full h-7 flex items-center">
      <div className="w-full h-px bg-silver-300" />
    </div>
    {items.map((item) => (
      <div key={item} className="flex items-center gap-2 h-10.5">
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

/**
 * 라벨 컬럼 + 예제 컬럼으로 구성된 비교 그리드.
 * 좁은 화면에서 열이 짜부라지면 라벨이 세로로 쪼개지므로,
 * 최소 폭을 지켜 미리보기 박스 안에서 가로 스크롤되게 한다.
 */
export const CompareGrid = ({ children }: { children: ReactNode }) => (
  <div className="grid min-w-[560px] grid-cols-[136px_minmax(0,1fr)] gap-6">
    {children}
  </div>
);

/** 오늘 날짜를 YYYY-MM-DD 로 반환한다. */
export const todayString = () => new Date().toISOString().split("T")[0];
