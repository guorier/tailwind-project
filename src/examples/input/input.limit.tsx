"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Limitinput } from "@/components/Input/LimitInput";
import { ColumnTitle } from "./parts";

function Component() {
  return (
    <div className="flex flex-col gap-4 max-w-[346px]">
      <ColumnTitle>Limitinput</ColumnTitle>
      <Limitinput maxLength={50} />
      <Limitinput maxLength={10} />
    </div>
  );
}

const code = `import { Limitinput } from "@/components/Input/LimitInput";

// maxLength 까지만 입력되고, 현재 글자 수가 함께 표시됩니다. (기본값 10)
<Limitinput maxLength={50} />`;

export const limit: CodeData = {
  title: "글자 수 제한 입력",
  description:
    "maxLength 를 넘는 입력은 무시되고, 입력한 글자 수와 최대 글자 수가 함께 표시됩니다.",
  type: "single",
  code: [{ fileName: "LimitInput.tsx", language: "tsx", code }],
  component: <Component />,
};
