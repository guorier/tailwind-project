"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { ScaleTable } from "./parts";
import { headlines, typefaceSample } from "./data";

function Component() {
  return (
    <ScaleTable>
      {headlines.map(({ tag, label, size, leading }) => {
        const Tag = tag as keyof JSX.IntrinsicElements;
        return (
          <tr key={tag}>
            <td>
              <Tag>{label}</Tag>
            </td>
            <td>
              <Tag>{typefaceSample}</Tag>
            </td>
            <td className="text-center">{size}</td>
            <td className="text-center">{leading}</td>
          </tr>
        );
      })}
    </ScaleTable>
  );
}

const code = `// 헤드라인은 태그를 그대로 쓰면 지정된 크기·행간이 적용됩니다.
<h1>Headline1</h1>  // 48 / 62
<h2>Headline2</h2>  // 40 / 52
<h3>Headline3</h3>  // 32 / 42
<h4>Headline4</h4>  // 28 / 38
<h5>Headline5</h5>  // 24 / 32
<h6>Headline6</h6>  // 20 / 28`;

export const hierarchy: CodeData = {
  title: "헤드라인 계층",
  description:
    "h1 ~ h6 태그에 크기와 행간이 미리 지정돼 있습니다. 별도 클래스 없이 태그만 써도 됩니다.",
  type: "single",
  code: [{ fileName: "Headline.tsx", language: "tsx", code }],
  component: <Component />,
};
