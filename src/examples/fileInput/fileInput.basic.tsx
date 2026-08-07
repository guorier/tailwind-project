"use client";

import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { FileInput } from "@/components/FileInput/FileInput";
import { FileDragAndDrop, type IFileTypes } from "@/components/FileInput/FileDragAndDrop";

const sizes = ["sm", "md", "lg"] as const;

function Component() {
  const [files, setFiles] = useState<IFileTypes[]>([]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h6 className="flex-none">FileInput — 크기</h6>
          <div className="w-full h-px bg-silver-300" />
        </div>
        {sizes.map((sizing) => (
          <div key={sizing} className="flex flex-col gap-1">
            <span className="text-xs text-gray-600">sizing=&quot;{sizing}&quot;</span>
            <FileInput sizing={sizing} />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h6 className="flex-none">FileDragAndDrop</h6>
          <div className="w-full h-px bg-silver-300" />
        </div>
        <FileDragAndDrop setFiles={setFiles} />
        <p className="text-sm text-gray-600">선택된 파일: {files.length}개</p>
      </div>
    </div>
  );
}

const code = `import { FileInput } from "@/components/FileInput/FileInput";
import {
  FileDragAndDrop,
  type IFileTypes,
} from "@/components/FileInput/FileDragAndDrop";
import { useState } from "react";

// FileInput — 네이티브 파일 선택 버튼
// sizing: "sm" | "md" | "lg" (기본값 "md")
// color: "gray" | "info" | "failure" | "warning" | "success" (기본값 "gray")
<FileInput sizing="md" />
<FileInput sizing="lg" color="info" multiple />

// maxFileCount — 첨부 가능한 최대 개수 제한
<FileInput multiple maxFileCount={3} />

// FileDragAndDrop — 선택된 목록을 setFiles 로 올려보냅니다.
const [files, setFiles] = useState<IFileTypes[]>([]);

<FileDragAndDrop setFiles={setFiles} />`;

export const basic: CodeData = {
  title: "기본 파일 선택",
  description:
    "FileInput 은 네이티브 파일 선택 버튼이고, FileDragAndDrop 은 끌어다 놓기를 지원합니다. FileDragAndDrop 은 파일 목록을 setFiles 로 올려보내므로 상태를 호출부에 둡니다.",
  type: "single",
  code: [{ fileName: "FileInput.tsx", language: "tsx", code }],
  component: <Component />,
};
