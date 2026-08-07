"use client";

import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { MultiSelect } from "@/components/SelectBox/MultipleSelect";
import { ColumnTitle, multiOptions } from "./parts";

function Component() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <ColumnTitle>MultiSelect</ColumnTitle>
      <MultiSelect options={multiOptions} value={values} onChange={setValues} />
      <p className="text-sm text-gray-600">
        선택된 값: {values.length > 0 ? values.join(", ") : "없음"}
      </p>

      <MultiSelect
        options={multiOptions}
        value={values}
        onChange={setValues}
        placeholder="항목을 선택하세요"
        disabled
      />
    </div>
  );
}

const code = `import { MultiSelect } from "@/components/SelectBox/MultipleSelect";
import { useState } from "react";

// value 가 배열이고, onChange 도 배열을 받습니다.
const [values, setValues] = useState<string[]>([]);

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
];

<MultiSelect options={options} value={values} onChange={setValues} />

// placeholder — 선택 전 표시 문구 (기본값 "Please select...")
<MultiSelect
  options={options}
  value={values}
  onChange={setValues}
  placeholder="항목을 선택하세요"
/>`;

export const multi: CodeData = {
  title: "다중 선택 (MultiSelect)",
  description:
    "여러 항목을 고를 수 있습니다. value 와 onChange 가 배열을 다루며, 목록 안에서 검색으로 항목을 걸러낼 수 있습니다. 선택한 항목은 태그로 표시됩니다.",
  type: "single",
  code: [{ fileName: "MultiSelect.tsx", language: "tsx", code }],
  component: <Component />,
};
