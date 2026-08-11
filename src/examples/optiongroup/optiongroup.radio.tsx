"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Radio } from "@/components/Radio/Radio";
import {
  CompareColumn,
  CompareColumns,
  CompareGrid,
  ColumnTitle,
  Row,
  StateLabels,
  stateLabels,
} from "./parts";

function Component() {
  return (
    <CompareGrid>
      <StateLabels items={stateLabels} />
      <CompareColumns>
        <CompareColumn>
          <ColumnTitle>Default : Small</ColumnTitle>
          <Row><Radio label="텍스트 내용" /></Row>
          <Row><Radio label="텍스트 내용" checked /></Row>
          <Row><Radio label="텍스트 내용" disabled /></Row>
          <Row><Radio label="텍스트 내용" disabled checked /></Row>
        </CompareColumn>

        <CompareColumn>
          <ColumnTitle>Default : Large</ColumnTitle>
          <Row><Radio label="텍스트 내용" sizes="lg" /></Row>
          <Row><Radio label="텍스트 내용" sizes="lg" checked /></Row>
          <Row><Radio label="텍스트 내용" sizes="lg" disabled /></Row>
          <Row><Radio label="텍스트 내용" sizes="lg" disabled checked /></Row>
        </CompareColumn>

        <CompareColumn>
          <ColumnTitle>Line : Small</ColumnTitle>
          <Row><Radio type="line" label="텍스트 내용" /></Row>
          <Row><Radio type="line" label="텍스트 내용" checked /></Row>
          <Row><Radio type="line" label="텍스트 내용" disabled /></Row>
          <Row><Radio type="line" label="텍스트 내용" disabled checked /></Row>
        </CompareColumn>

        <CompareColumn>
          <ColumnTitle>Line : Large</ColumnTitle>
          <Row><Radio type="line" sizes="lg" label="텍스트 내용" /></Row>
          <Row><Radio type="line" sizes="lg" label="텍스트 내용" checked /></Row>
          <Row><Radio type="line" sizes="lg" label="텍스트 내용" disabled /></Row>
          <Row><Radio type="line" sizes="lg" label="텍스트 내용" disabled checked /></Row>
        </CompareColumn>
      </CompareColumns>
    </CompareGrid>
  );
}

const code = `import { Radio } from "@/components/Radio/Radio";

// 기본 — 선택 시 테두리가 두꺼워지는 형태
<Radio label="텍스트 내용" />
<Radio label="텍스트 내용" checked />
<Radio label="텍스트 내용" disabled />

// line — 선택 시 안쪽에 점이 채워지는 형태
<Radio type="line" label="텍스트 내용" checked />

// 크기
<Radio label="텍스트 내용" sizes="lg" />`;

export const radio: CodeData = {
  title: "라디오",
  description:
    'type 으로 형태를 고릅니다. default 는 선택 시 테두리가 두꺼워지고, line 은 안쪽에 점이 채워집니다. sizes 는 두 형태 모두 sm/lg 를 지원합니다.',
  type: "single",
  code: [{ fileName: "Radio.tsx", language: "tsx", code }],
  component: <Component />,
};
