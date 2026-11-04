import dynamic from "next/dynamic";

import ObjectParameter, { Parameter } from "../ObjectParameter";
import { tiptap } from "@/examples/editor";

const examples = [tiptap];

const setupNotes: Parameter[] = [
  {
    parameter: "initialContent",
    type: "string",
    required: "Optional",
    description: "에디터가 처음 표시될 때 사용할 HTML 콘텐츠입니다.",
  },
  {
    parameter: "onChange",
    type: "(html: string) => void",
    required: "Optional",
    description: "콘텐츠가 변경될 때 현재 HTML을 전달받습니다.",
  },
  {
    parameter: "placeholder",
    type: "string",
    required: "Optional",
    description: "비어 있는 에디터에 표시할 안내 문구입니다.",
  },
  {
    parameter: "무료 확장 기능",
    type: "StarterKit + Tiptap extensions",
    required: "Optional",
    description:
      "제목, 굵게, 기울임, 취소선, 인라인 코드, 밑줄, 하이라이트, 상·하첨자, 정렬, 목록, 체크리스트, 인용, 코드 블록, 표, 구분선을 제공합니다.",
  },
  {
    parameter: "이미지 입력",
    type: "file / paste / drop",
    required: "Optional",
    description:
      "Add 버튼, 이미지 붙여넣기, 드래그 앤 드롭으로 이미지를 삽입합니다. 데모에서는 브라우저 blob URL을 사용합니다.",
  },
  {
    parameter: "검색 및 바꾸기",
    type: "FindAndReplace",
    required: "Optional",
    description:
      "검색어·바꾸기, 이전/다음 결과, 모두 바꾸기, 대소문자·단어·정규식 옵션을 지원합니다.",
  },
  {
    parameter: "SSR 초기화",
    type: "immediatelyRender: false",
    required: "Optional",
    description:
      "Next.js hydration mismatch를 피하기 위해 내부 Tiptap 인스턴스에 false로 설정되어 있습니다.",
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
          Tiptap v3 기반 리치 텍스트 에디터입니다. 클라이언트에서 안전하게 초기화되며
          HTML 콘텐츠를 입력과 함께 관리할 수 있습니다.
        </p>
        <p className="mb-8 text-sm text-gray-600">
          공식 무료 Simple Editor에서 제공하는 서식, 체크리스트, 하이라이트, 링크,
          이미지, 표, 검색/바꾸기, 다크 모드를 포함합니다.
        </p>

        <div className="mb-4 flex items-center gap-4">
          <h5 className="flex-none font-bold">설정 및 속성</h5>
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
