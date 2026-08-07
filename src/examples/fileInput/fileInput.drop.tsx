"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import FileDrop from "@/components/FileInput/FileDrop";

function Component() {
  return (
    <FileDrop
      onFiles={(files: File[]) => {
        console.log("업로드된 파일:", files);
      }}
    />
  );
}

const code = `import FileDrop from "@/components/FileInput/FileDrop";

// 드래그·선택된 파일 목록을 onFiles 로 올려보냅니다.
// 목록 표시와 개별 삭제는 컴포넌트 내부에서 처리합니다.
<FileDrop
  onFiles={(files: File[]) => {
    // 서버 업로드 등 실제 처리
    console.log("업로드된 파일:", files);
  }}
/>`;

export const drop: CodeData = {
  title: "드래그 앤 드롭 업로드 (FileDrop)",
  description:
    "영역에 파일을 끌어다 놓거나 클릭해 선택합니다. 선택된 목록과 개별·전체 삭제 UI 가 내장돼 있고, 파일 배열만 onFiles 로 전달됩니다.",
  type: "single",
  code: [{ fileName: "FileDrop.tsx", language: "tsx", code }],
  component: <Component />,
};
