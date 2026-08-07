import { resize, colors, size } from "@/examples/textarea";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [resize, colors, size];

const textareaProps: Parameter[] = [
  {
    parameter: "resize",
    type: '"none" | "resize" | "x-axis" | "y-axis"',
    required: "Optional",
    description:
      '사용자가 드래그해 크기를 조절할 수 있는 방향. 기본값 "resize"(가로·세로 모두).',
  },
  {
    parameter: "color",
    type: '"base" | "primary" | "secondary" | "warning" | "error" | "valid"',
    required: "Optional",
    description:
      '테두리·포커스 색상. 기본값 "base". warning·error·valid 는 글자색도 함께 변경됩니다.',
  },
  {
    parameter: "height",
    type: "테마 높이 키",
    required: "Optional",
    description:
      '높이. 기본값 "auto". 테마에 없는 값은 h-{값} 클래스로 처리됩니다.',
  },
  {
    parameter: "width",
    type: '"auto" | "full" | 테마 너비 키',
    required: "Optional",
    description: '너비. 기본값 "auto".',
  },
  {
    parameter: "disabled",
    type: "boolean",
    required: "Optional",
    description: "비활성화 여부.",
  },
  {
    parameter: "theme",
    type: "DeepPartial<TextareaStyle>",
    required: "Optional",
    description: "기본 테마에 병합할 부분 테마.",
  },
  {
    parameter: "className",
    type: "string",
    required: "Optional",
    description: "외부 스타일. twMerge 로 병합되어 테마 클래스를 덮어씁니다.",
  },
];

export default function TextareaDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Textarea</h3>
        <p className="mb-8 font-medium text-gray-700">
          여러 줄 텍스트 입력을 위한 컴포넌트입니다. 네이티브 textarea 속성을 그대로
          받으며, 크기 조절 방향과 색상을 테마로 관리합니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Textarea 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={textareaProps} />
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
