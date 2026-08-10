"use client";

import React, { ReactNode } from "react";

/** 폰트 속성 예시 카드. 한글·영문 표본을 같은 웨이트로 함께 보여준다. */
export const WeightCard = ({
  sample,
  body,
  weightClass,
  label,
}: {
  sample: string;
  body: string;
  weightClass: string;
  label: string;
}) => (
  <div className="flex flex-col justify-center items-center gap-4 px-10 py-5 bg-silver-200">
    <div className={`text-10xl ${weightClass}`}>{sample}</div>
    <div className={`text-base ${weightClass}`}>{body}</div>
    <div className={weightClass}>{label}</div>
  </div>
);

/** 타이포 스케일 표. 크기·행간 열을 가운데 정렬한다. */
export const ScaleTable = ({ children }: { children: ReactNode }) => (
  <table className="w-full border-t border-natural-400">
    <colgroup>
      <col className="w-[355px]" />
      <col className="w-auto" />
      <col className="w-[4%]" />
      <col className="w-[10%]" />
    </colgroup>
    <tbody>
      <tr className="border-b border-natural-300 px-2 bg-natural-50">
        <td className="py-8 pl-2 font-semibold">Hierarchy</td>
        <td className="py-8 font-semibold">Typeface</td>
        <td className="py-8 font-semibold text-center">크기</td>
        <td className="py-8 font-semibold text-center">행간</td>
      </tr>
      {children}
    </tbody>
  </table>
);

/** 스케일 표의 그룹 사이를 나누는 가로선 행. */
export const ScaleDivider = () => (
  <tr>
    <td className="h-10" colSpan={4}>
      <div className="h-px bg-natural-400" />
    </td>
  </tr>
);
