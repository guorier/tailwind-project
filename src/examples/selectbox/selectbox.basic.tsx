"use client";

import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { SelectBox } from "@/components/SelectBox/SelectBox";
import { CompareGrid, StateLabels, ColumnTitle, basicOptions } from "./parts";

const radiusOptions = [
  { value: "default", title: "Default" },
  { value: "round", title: "Round" },
  { value: "underline", title: "Underline" },
] as const;

function Component() {
  const [value, setValue] = useState(basicOptions[0].value);

  return (
    <CompareGrid>
      <StateLabels items={["Default", "Disabled"]} />
      <div className="grid grid-cols-3 gap-4">
        {radiusOptions.map(({ value: radius, title }) => (
          <div key={radius} className="flex flex-col items-center gap-4">
            <ColumnTitle>{title}</ColumnTitle>
            <SelectBox
              options={basicOptions}
              value={value}
              onChange={setValue}
              borderRadius={radius}
            />
            <SelectBox
              options={basicOptions}
              value={value}
              onChange={setValue}
              borderRadius={radius}
              disabled
            />
          </div>
        ))}
      </div>
    </CompareGrid>
  );
}

const code = `import { SelectBox } from "@/components/SelectBox/SelectBox";
import { useState } from "react";

// options 의 각 항목은 { id, value, label } 형태입니다.
const options = [
  { id: 0, value: "", label: "Select an option..." },
  { id: 1, value: "value1", label: "Option label1" },
  { id: 2, value: "value2", label: "Option label2" },
];

// 선택값은 호출부에서 관리합니다.
const [value, setValue] = useState(options[0].value);

<SelectBox options={options} value={value} onChange={setValue} />

// borderRadius — "default" | "round" | "underline"
<SelectBox options={options} value={value} onChange={setValue} borderRadius="round" />
<SelectBox options={options} value={value} onChange={setValue} borderRadius="underline" />`;

export const basic: CodeData = {
  title: "기본 사용 / 모서리 형태",
  description:
    "options · value · onChange 를 넘겨 사용합니다. 선택값은 호출부에서 관리하며, borderRadius 로 모서리 형태를 지정합니다. 기본 높이는 42px 로 Input 과 동일합니다.",
  type: "single",
  code: [{ fileName: "SelectBox.tsx", language: "tsx", code }],
  component: <Component />,
};
