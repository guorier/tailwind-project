"use client";

import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { SelectBox } from "@/components/SelectBox/SelectBox";
import { ColumnTitle } from "./parts";

const longOptions = [
  { id: 0, value: "", label: "Select an option..." },
  { id: 1, value: "option1", label: "글자수 10자 글자" },
  { id: 2, value: "option2", label: "글자수 20자 글자수 20자 글자수2" },
  { id: 3, value: "option3", label: "글자수 30자 글자수 30자 글자수 30자 글자수 30" },
  {
    id: 4,
    value: "option4",
    label: "글자수 50자 글자수 50자 글자수 50자 글자수 50자 글자수 50자 글자수 50자 글자",
  },
];

function Component() {
  const [value, setValue] = useState(longOptions[0].value);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <ColumnTitle>optionWidth=&quot;auto&quot;</ColumnTitle>
        <SelectBox
          width="50"
          optionWidth="auto"
          options={longOptions}
          value={value}
          onChange={setValue}
        />
        <p className="text-xs text-gray-600">
          선택 영역은 좁게 두고, 펼친 목록만 내용에 맞춰 넓어집니다.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ColumnTitle>optionWidth=&quot;full&quot; (기본값)</ColumnTitle>
        <SelectBox
          width="50"
          optionWidth="full"
          options={longOptions}
          value={value}
          onChange={setValue}
        />
        <p className="text-xs text-gray-600">
          목록 너비가 선택 영역과 같아 긴 항목은 잘립니다.
        </p>
      </div>
    </div>
  );
}

const code = `import { SelectBox } from "@/components/SelectBox/SelectBox";

// width — 선택 영역 너비
// optionWidth — 펼친 목록 너비 ("full" 기본값 | "auto")
//
// 항목이 길어 잘리는 게 문제라면 optionWidth="auto" 를 쓰면
// 선택 영역은 좁게 유지하면서 목록만 내용에 맞춰 넓어집니다.
<SelectBox
  width="50"
  optionWidth="auto"
  options={options}
  value={value}
  onChange={setValue}
/>`;

export const width: CodeData = {
  title: "너비 (width / optionWidth)",
  description:
    'width 는 선택 영역, optionWidth 는 펼친 목록의 너비입니다. 기본값 "full" 은 목록을 선택 영역과 같은 너비로 맞추고, "auto" 는 항목 내용에 맞춰 넓힙니다.',
  type: "single",
  code: [{ fileName: "SelectBoxWidth.tsx", language: "tsx", code }],
  component: <Component />,
};
