"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { ScaleTable, ScaleDivider } from "./parts";
import { titleScale, bodyScale, labelScale, typefaceSample } from "./data";

/** TITLE · BODY · LABEL 세 그룹을 구분선으로 나눠 표시한다. */
const groups = [titleScale, bodyScale, labelScale];

function Component() {
  return (
    <ScaleTable>
      {groups.map((group, groupIndex) => (
        <React.Fragment key={groupIndex}>
          {groupIndex > 0 && <ScaleDivider />}
          {group.map(({ label, size, leading, css }) => (
            <tr key={label}>
              <td className={css}>{label}</td>
              <td className={css}>{typefaceSample}</td>
              <td className="text-center">{size}</td>
              <td className="text-center">{leading}</td>
            </tr>
          ))}
        </React.Fragment>
      ))}
    </ScaleTable>
  );
}

const code = `// TITLE — 화면·섹션 제목
<div className="text-4xl font-normal">TITLE/ R 32</div>
<div className="text-xl font-semibold">TITLE/ SB 20</div>

// BODY — 본문
<div className="text-2xl font-normal">BODY/ R 24</div>
<div className="text-base font-normal">BODY/ R 16</div>

// LABEL — 버튼·입력 라벨 등 보조 텍스트
<div className="text-sm font-semibold">LABEL/ M SB 14</div>
<div className="text-xs font-normal">LABEL/ S R 12</div>`;

export const scale: CodeData = {
  title: "타이포 스케일",
  description:
    "용도별 스케일입니다. TITLE 은 제목, BODY 는 본문, LABEL 은 버튼·입력 라벨 등 보조 텍스트에 씁니다. 이름의 SB·M·R 은 각각 Semibold·Medium·Regular 입니다.",
  type: "single",
  code: [{ fileName: "Scale.tsx", language: "tsx", code }],
  component: <Component />,
};
