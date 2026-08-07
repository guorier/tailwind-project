"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import dynamic from "next/dynamic";

// TinyMCE 는 window 에 의존하므로 SSR 을 끄고 불러온다.
const TinyEditor = dynamic(() => import("@/components/Editor/TinyEditor"), {
  ssr: false,
});

function Component() {
  return <TinyEditor />;
}

const code = `import dynamic from "next/dynamic";

// TinyMCE 는 window 에 의존하므로 반드시 ssr: false 로 불러옵니다.
// 이 설정 없이 서버에서 렌더하면 오류가 발생합니다.
const TinyEditor = dynamic(() => import("@/components/Editor/TinyEditor"), {
  ssr: false,
});

<TinyEditor />`;

export const tiny: CodeData = {
  title: "TinyMCE 에디터",
  description:
    "TinyMCE 기반 리치 텍스트 에디터입니다. window 에 의존하므로 next/dynamic 의 ssr: false 로 불러와야 합니다. 현재 TinyEditor 컴포넌트는 init 설정이 주석 처리된 상태라 툴바·플러그인·값 연동이 적용되지 않습니다.",
  type: "single",
  code: [{ fileName: "TinyEditor.tsx", language: "tsx", code }],
  component: <Component />,
};
