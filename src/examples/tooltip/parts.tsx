"use client";

import React, { ReactNode } from "react";

/** 예제 행 왼쪽에 붙이는 라벨. */
export const RowLabel = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-4 w-[100px]">
    <h6 className="flex-none">{children}</h6>
    <div className="w-full h-px bg-silver-300" />
  </div>
);
