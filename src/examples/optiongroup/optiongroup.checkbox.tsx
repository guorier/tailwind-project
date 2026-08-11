"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Checkbox } from "@/components/Checkbox/Checkbox";
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
          <ColumnTitle>Small</ColumnTitle>
          <Row><Checkbox label="텍스트 내용" /></Row>
          <Row><Checkbox label="텍스트 내용" checked /></Row>
          <Row><Checkbox label="텍스트 내용" disabled /></Row>
          <Row><Checkbox label="텍스트 내용" disabled checked /></Row>
        </CompareColumn>

        <CompareColumn>
          <ColumnTitle>Large</ColumnTitle>
          <Row><Checkbox label="텍스트 내용" sizes="lg" /></Row>
          <Row><Checkbox label="텍스트 내용" sizes="lg" checked /></Row>
          <Row><Checkbox label="텍스트 내용" sizes="lg" disabled /></Row>
          <Row><Checkbox label="텍스트 내용" sizes="lg" disabled checked /></Row>
        </CompareColumn>

        <CompareColumn>
          <ColumnTitle>Round : Small</ColumnTitle>
          <Row><Checkbox label="텍스트 내용" borderRadius="round" /></Row>
          <Row><Checkbox label="텍스트 내용" borderRadius="round" checked /></Row>
          <Row><Checkbox label="텍스트 내용" borderRadius="round" disabled /></Row>
          <Row><Checkbox label="텍스트 내용" borderRadius="round" disabled checked /></Row>
        </CompareColumn>

        <CompareColumn>
          <ColumnTitle>Round : Large</ColumnTitle>
          <Row><Checkbox label="텍스트 내용" borderRadius="round" sizes="lg" /></Row>
          <Row><Checkbox label="텍스트 내용" borderRadius="round" sizes="lg" checked /></Row>
          <Row><Checkbox label="텍스트 내용" borderRadius="round" sizes="lg" disabled /></Row>
          <Row><Checkbox label="텍스트 내용" borderRadius="round" sizes="lg" disabled checked /></Row>
        </CompareColumn>
      </CompareColumns>
    </CompareGrid>
  );
}

const code = `import { Checkbox } from "@/components/Checkbox/Checkbox";

// 기본 (sizes 기본값 "sm")
<Checkbox label="텍스트 내용" />
<Checkbox label="텍스트 내용" checked />
<Checkbox label="텍스트 내용" disabled />

// 크기
<Checkbox label="텍스트 내용" sizes="lg" />

// 둥근 형태
<Checkbox label="텍스트 내용" borderRadius="round" />`;

export const checkbox: CodeData = {
  title: "체크박스",
  description:
    'sizes 로 크기(sm/lg), borderRadius 로 형태(default/round)를 지정합니다. 각 행은 기본·체크·비활성·비활성+체크 상태입니다.',
  type: "single",
  code: [{ fileName: "Checkbox.tsx", language: "tsx", code }],
  component: <Component />,
};
