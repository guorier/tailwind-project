"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Textinput } from "@/components/Input/TextInput";
import { CompareGrid, StateLabels, ColumnTitle } from "./parts";

const states = ["Default", "Focus", "Disabled"];

function Component() {
  return (
    <CompareGrid>
      <StateLabels items={states} />
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          <ColumnTitle>Default</ColumnTitle>
          <Textinput placeholder="Please enter..." />
          <Textinput placeholder="Please enter..." className="border-natural-900" />
          <Textinput placeholder="Please enter..." disabled />
        </div>
        <div className="flex flex-col gap-4">
          <ColumnTitle>Round</ColumnTitle>
          <Textinput placeholder="Please enter..." borderRadius="round" />
          <Textinput placeholder="Please enter..." borderRadius="round" className="border-natural-900" />
          <Textinput placeholder="Please enter..." borderRadius="round" disabled />
        </div>
        <div className="flex flex-col gap-4">
          <ColumnTitle>Underline</ColumnTitle>
          <Textinput placeholder="Please enter..." borderRadius="underline" />
          <Textinput placeholder="Please enter..." borderRadius="underline" className="border-natural-900" />
          <Textinput placeholder="Please enter..." borderRadius="underline" disabled />
        </div>
      </div>
    </CompareGrid>
  );
}

const code = `import { Textinput } from "@/components/Input/TextInput";

// 기본
<Textinput placeholder="Please enter..." />

// 모서리 형태
<Textinput placeholder="Please enter..." borderRadius="round" />
<Textinput placeholder="Please enter..." borderRadius="underline" />

// 비활성화
<Textinput placeholder="Please enter..." disabled />`;

export const basic: CodeData = {
  title: "기본 사용 / 모서리 형태",
  description:
    "borderRadius 로 default(각형), round(완전 둥근 형태), underline(밑줄만) 을 선택합니다. 각 행은 기본·포커스·비활성화 상태입니다.",
  type: "single",
  code: [{ fileName: "TextInput.tsx", language: "tsx", code }],
  component: <Component />,
};
