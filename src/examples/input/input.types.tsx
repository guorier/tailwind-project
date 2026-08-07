"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Textinput } from "@/components/Input/TextInput";
import { PasswordInput } from "@/components/Input/PasswordInput";
import { SearchBox } from "@/components/Input/SearchBox";
import { CompareGrid, StateLabels, ColumnTitle } from "./parts";

const states = ["Default", "Focus", "Disabled"];

function Component() {
  return (
    <CompareGrid>
      <StateLabels items={states} />
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          <ColumnTitle>Number</ColumnTitle>
          <Textinput type="number" placeholder="number" />
          <Textinput type="number" placeholder="number" className="border-natural-900" />
          <Textinput type="number" placeholder="number" disabled />
        </div>
        <div className="flex flex-col gap-4">
          <ColumnTitle>Search</ColumnTitle>
          <SearchBox />
          <SearchBox className="border-natural-900" />
          <SearchBox disabled />
        </div>
        <div className="flex flex-col gap-4">
          <ColumnTitle>Password</ColumnTitle>
          <PasswordInput placeholder="Password" />
          <PasswordInput placeholder="Password" className="border-natural-900" />
          <PasswordInput placeholder="Password" disabled />
        </div>
      </div>
    </CompareGrid>
  );
}

const code = `import { Textinput } from "@/components/Input/TextInput";
import { SearchBox } from "@/components/Input/SearchBox";
import { PasswordInput } from "@/components/Input/PasswordInput";

// 숫자 — 스핀 버튼이 제거되고 오른쪽 정렬됩니다.
<Textinput type="number" placeholder="number" />

// 검색 — 검색 버튼이 포함된 래퍼 컴포넌트입니다.
<SearchBox />

// 비밀번호 — 표시/숨김 토글 버튼이 내장돼 있습니다.
<PasswordInput placeholder="Password" />`;

export const types: CodeData = {
  title: "입력 타입별 컴포넌트",
  description:
    "숫자는 Textinput 의 type 으로, 검색과 비밀번호는 전용 컴포넌트를 사용합니다. SearchBox 와 PasswordInput 은 버튼을 포함하므로 내부에서 래퍼로 감쌉니다.",
  type: "single",
  code: [{ fileName: "InputTypes.tsx", language: "tsx", code }],
  component: <Component />,
};
