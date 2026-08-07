"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Textinput } from "@/components/Input/TextInput";
import { StateLabels, ColumnTitle } from "./parts";

const colorList = ["Base", "Primary", "Secondary", "Warning", "Valid", "Error"];

function Component() {
  return (
    <div className="grid grid-cols-[136px_346px] gap-6">
      <StateLabels items={colorList} />
      <div className="flex flex-col gap-4">
        <ColumnTitle>Color</ColumnTitle>
        <Textinput placeholder="Please enter..." color="base" />
        <Textinput placeholder="Please enter..." color="primary" />
        <Textinput placeholder="Please enter..." color="secondary" />
        <Textinput placeholder="Please enter..." color="warning" />
        <Textinput placeholder="Please enter..." color="valid" />
        <Textinput placeholder="Please enter..." color="error" />
      </div>
    </div>
  );
}

const code = `import { Textinput } from "@/components/Input/TextInput";

<Textinput placeholder="Please enter..." color="base" />
<Textinput placeholder="Please enter..." color="primary" />
<Textinput placeholder="Please enter..." color="secondary" />
<Textinput placeholder="Please enter..." color="warning" />
<Textinput placeholder="Please enter..." color="valid" />
<Textinput placeholder="Please enter..." color="error" />`;

export const colors: CodeData = {
  title: "색상",
  description:
    "color 로 테두리와 포커스 색을 지정합니다. warning / valid / error 는 글자색까지 함께 변경됩니다.",
  type: "single",
  code: [{ fileName: "TextInput.tsx", language: "tsx", code }],
  component: <Component />,
};
