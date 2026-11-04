"use client";

import { CodeData } from "@/components/helpers/examples/code-demo";
import TiptapEditor from "@/components/Editor/TiptapEditor";

function Component() {
  return <TiptapEditor />;
}

const code = `import TiptapEditor from "@/components/Editor/TiptapEditor";

export default function Example() {
  return (
    <TiptapEditor
      initialContent="<p>안녕하세요, Tiptap!</p>"
      placeholder="내용을 입력해 주세요..."
      onChange={(html) => console.log(html)}
    />
  );
}`;

export const tiptap: CodeData = {
  title: "Tiptap v3 에디터",
  description:
    "공식 무료 Simple Editor 범위에 맞춘 Tiptap v3 에디터입니다. 제목, 서식, 체크리스트, 하이라이트, 링크, 이미지, 표, 검색/바꾸기, 다크 모드를 지원합니다.",
  type: "single",
  code: [{ fileName: "Example.tsx", language: "tsx", code }],
  component: <Component />,
};
