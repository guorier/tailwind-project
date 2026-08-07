"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Textinput } from "@/components/Input/TextInput";
import { ColumnTitle } from "./parts";

function Component() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col gap-4">
        <ColumnTitle>left</ColumnTitle>
        <Textinput placeholder="Please enter..." align="left" />
      </div>
      <div className="flex flex-col gap-4">
        <ColumnTitle>center</ColumnTitle>
        <Textinput placeholder="Please enter..." align="center" />
      </div>
      <div className="flex flex-col gap-4">
        <ColumnTitle>right</ColumnTitle>
        <Textinput placeholder="Please enter..." align="right" />
      </div>
    </div>
  );
}

const code = `import { Textinput } from "@/components/Input/TextInput";

<Textinput placeholder="Please enter..." align="left" />
<Textinput placeholder="Please enter..." align="center" />
<Textinput placeholder="Please enter..." align="right" />

// align 을 생략하고 type="number" 를 쓰면 자동으로 오른쪽 정렬됩니다.
<Textinput type="number" placeholder="0" />`;

export const align: CodeData = {
  title: "텍스트 정렬",
  description:
    "align 으로 입력값 정렬을 지정합니다. align 을 넘기지 않은 채 type=\"number\" 를 쓰면 오른쪽 정렬이 기본 적용됩니다.",
  type: "single",
  code: [{ fileName: "TextInput.tsx", language: "tsx", code }],
  component: <Component />,
};
