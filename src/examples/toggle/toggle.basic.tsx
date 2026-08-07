"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Toggle } from "@/components/Toggle/Toggle";
import { CompareGrid, StateLabels, ColumnTitle, Row, stateLabels } from "./parts";

function Component() {
  return (
    <CompareGrid>
      <StateLabels items={stateLabels} />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center gap-4">
          <ColumnTitle>Default</ColumnTitle>
          <Row><Toggle toggleId="basic1" /></Row>
          <Row><Toggle toggleId="basic2" checked /></Row>
          <Row><Toggle toggleId="basic3" disabled /></Row>
          <Row><Toggle toggleId="basic4" disabled checked /></Row>
        </div>

        <div className="flex flex-col items-center gap-4">
          <ColumnTitle>ON / OFF 표시</ColumnTitle>
          <Row><Toggle displayStatus toggleId="status1" width="14" /></Row>
          <Row><Toggle displayStatus toggleId="status2" width="14" checked /></Row>
          <Row><Toggle displayStatus toggleId="status3" width="14" disabled /></Row>
          <Row><Toggle displayStatus toggleId="status4" width="14" disabled checked /></Row>
        </div>
      </div>
    </CompareGrid>
  );
}

const code = `import { Toggle } from "@/components/Toggle/Toggle";

// 기본
<Toggle />
<Toggle checked />
<Toggle disabled />

// displayStatus — 스위치 안에 ON/OFF 텍스트를 표시합니다.
// 텍스트가 들어가므로 width 를 함께 늘려 주세요.
<Toggle displayStatus width="14" />
<Toggle displayStatus width="14" checked />`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "displayStatus 를 주면 스위치 안에 ON/OFF 텍스트가 표시됩니다. 텍스트가 들어가는 만큼 width 를 함께 늘려야 잘리지 않습니다.",
  type: "single",
  code: [{ fileName: "Toggle.tsx", language: "tsx", code }],
  component: <Component />,
};
