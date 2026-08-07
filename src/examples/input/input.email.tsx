"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { EmailInput } from "@/components/Input/EmailInput";
import { Textinput } from "@/components/Input/TextInput";
import { ColumnTitle } from "./parts";

function Component() {
  return (
    <div className="flex flex-col gap-4 w-[346px]">
      <ColumnTitle>Email</ColumnTitle>
      <EmailInput placeholder="urban@urban.com" />
      <EmailInput placeholder="urban@urban.com" disabled />

      {/* 검증 결과 문구는 아래처럼 색상 prop 과 함께 직접 조합합니다. */}
      <div className="flex flex-col gap-2">
        <Textinput color="valid" defaultValue="urban@urban.com" />
        <span className="font-normal text-xs text-valid-100">
          사용할 수 있는 이메일 형식입니다.
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <Textinput color="error" defaultValue="urban@urban" />
        <span className="font-normal text-xs text-error-100">
          잘못된 이메일 형식입니다.
        </span>
      </div>
    </div>
  );
}

const code = `import { EmailInput } from "@/components/Input/EmailInput";
import { Textinput } from "@/components/Input/TextInput";

// EmailInput 은 입력값의 이메일 형식을 내부에서 검증합니다.
<EmailInput placeholder="urban@urban.com" />

// 검증 결과 문구를 직접 표시할 때는 color 와 안내 문구를 함께 조합합니다.
<div className="flex flex-col gap-2">
  <Textinput color="valid" defaultValue="urban@urban.com" />
  <span className="text-xs text-valid-100">사용할 수 있는 이메일 형식입니다.</span>
</div>

<div className="flex flex-col gap-2">
  <Textinput color="error" defaultValue="urban@urban" />
  <span className="text-xs text-error-100">잘못된 이메일 형식입니다.</span>
</div>`;

export const email: CodeData = {
  title: "이메일 입력 / 검증 표시",
  description:
    "EmailInput 은 형식 검증을 내장합니다. 검증 문구까지 직접 노출하려면 color=\"valid\" / \"error\" 와 안내 문구를 조합하세요.",
  type: "single",
  code: [{ fileName: "EmailInput.tsx", language: "tsx", code }],
  component: <Component />,
};
