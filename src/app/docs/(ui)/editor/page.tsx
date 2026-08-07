import dynamic from "next/dynamic";
import { tiny } from "@/examples/editor";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [tiny];

const setupNotes: Parameter[] = [
  {
    parameter: "dynamic(..., { ssr: false })",
    type: "next/dynamic",
    required: "Required",
    description:
      "TinyMCE 는 window 에 의존합니다. SSR 을 끄지 않으면 서버 렌더링 중 오류가 발생합니다.",
  },
  {
    parameter: "tinymceScriptSrc",
    type: "string",
    required: "Optional",
    description:
      'self-host 스크립트 경로. 이 프로젝트는 public/tinymce 에 두고 "/tinymce/tinymce.min.js" 를 가리키도록 설정합니다.',
  },
  {
    parameter: "init.license_key",
    type: "string",
    required: "Optional",
    description: 'GPL 버전을 쓸 때는 "gpl" 을 지정합니다.',
  },
  {
    parameter: "onInit",
    type: "(evt, editor) => void",
    required: "Optional",
    description:
      "에디터 인스턴스를 ref 에 담아 두면 나중에 본문(getContent)을 꺼낼 수 있습니다.",
  },
];

export default function EditorDoc() {
  const DocPage = dynamic(() => import("@/components/DocPage"), {
    ssr: false,
  });

  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Editor</h3>
        <p className="mb-4 font-medium text-gray-700">
          TinyMCE 기반 리치 텍스트 에디터입니다. 클라이언트 전용이라 next/dynamic 으로
          불러와야 합니다.
        </p>
        <p className="mb-8 text-sm text-gray-600">
          현재 TinyEditor 컴포넌트는 init 설정이 주석 처리된 상태로, 툴바·플러그인·값
          연동이 적용되지 않습니다. 실제로 사용하려면 TinyEditor.tsx 의 설정을 먼저
          마무리해야 합니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">설정 시 확인할 항목</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={setupNotes} />
        </div>

        <div className="flex items-center gap-4">
          <h5 className="flex-none font-bold">예제</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
      </div>

      <DocPage root={examples} />
    </>
  );
}
