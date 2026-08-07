"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { Radio } from "@/components/Radio/Radio";
import { CompareGrid, StateLabels, ColumnTitle, Row, stateLabels } from "./parts";

function Component() {
  return (
    <CompareGrid>
      <StateLabels items={stateLabels} />
      <div className="grid grid-cols-4 items-center gap-4">
        <div className="flex flex-col items-center gap-4">
          <ColumnTitle>Checkbox : Small</ColumnTitle>
          <Row><Checkbox /></Row>
          <Row><Checkbox checked /></Row>
          <Row><Checkbox disabled /></Row>
          <Row><Checkbox disabled checked /></Row>
        </div>

        <div className="flex flex-col items-center gap-4">
          <ColumnTitle>Checkbox : Large</ColumnTitle>
          <Checkbox sizes="lg" />
          <Checkbox sizes="lg" checked />
          <Checkbox sizes="lg" disabled />
          <Checkbox sizes="lg" disabled checked />
        </div>

        <div className="flex flex-col items-center gap-4">
          <ColumnTitle>Radio Line : Small</ColumnTitle>
          <Row><Radio type="line" /></Row>
          <Row><Radio type="line" checked /></Row>
          <Row><Radio type="line" disabled /></Row>
          <Row><Radio type="line" disabled checked /></Row>
        </div>

        <div className="flex flex-col items-center gap-4">
          <ColumnTitle>Radio Line : Large</ColumnTitle>
          <Radio type="line" sizes="lg" />
          <Radio type="line" sizes="lg" checked />
          <Radio type="line" sizes="lg" disabled />
          <Radio type="line" sizes="lg" disabled checked />
        </div>
      </div>
    </CompareGrid>
  );
}

const code = `import { Checkbox } from "@/components/Checkbox/Checkbox";
import { Radio } from "@/components/Radio/Radio";

// label 을 생략하면 입력 요소만 렌더링됩니다.
// 표 안의 선택 열처럼 라벨이 필요 없는 곳에 사용합니다.
<Checkbox />
<Checkbox checked />

<Radio type="line" />
<Radio type="line" checked />`;

export const nolabel: CodeData = {
  title: "라벨 없이 사용",
  description:
    "label 을 넘기지 않으면 텍스트 없이 입력 요소만 렌더링됩니다. 테이블의 전체 선택 열처럼 라벨이 불필요한 위치에 사용합니다.",
  type: "single",
  code: [{ fileName: "NoLabel.tsx", language: "tsx", code }],
  component: <Component />,
};
