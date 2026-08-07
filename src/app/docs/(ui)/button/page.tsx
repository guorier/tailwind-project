import { basic, size, colors, icon } from "@/examples/button";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, size, colors, icon];

const buttonProps: Parameter[] = [
  {
    parameter: "children",
    type: "ReactNode",
    required: "Optional",
    description:
      "버튼 내용. 내부가 flex + gap-2 이므로 아이콘을 앞뒤에 두면 그 위치대로 배치됩니다.",
  },
  {
    parameter: "styleType",
    type: '"default" | "outline"',
    required: "Optional",
    description: '기본값 "default"(배경 채움). "outline" 은 테두리만 표시합니다.',
  },
  {
    parameter: "radius",
    type: '"default" | "round" | "pill"',
    required: "Optional",
    description: '모서리 형태. 기본값 "default"(각형).',
  },
  {
    parameter: "colors",
    type: '"base" | "primary" | "secondary" | "gray" | "warning" | "error" | "valid" | HEX 문자열',
    required: "Optional",
    description:
      '기본값 "base". HEX(#2b7fff)를 넘기면 styleType 에 따라 배경색 또는 테두리색으로 적용됩니다.',
  },
  {
    parameter: "height",
    type: '"24" | "28" | "32" | "36" | "40" | "42" | "44" | "48" | "56"',
    required: "Optional",
    description: '높이(px). 기본값 "40". 높이에 맞춰 글자 크기도 함께 바뀝니다.',
  },
  {
    parameter: "width",
    type: '"auto" | "full" | 테마 너비 키',
    required: "Optional",
    description: '너비. 기본값 "auto"(내용에 맞춤).',
  },
  {
    parameter: "disabled",
    type: "boolean",
    required: "Optional",
    description: "비활성화 여부. colors 와 무관하게 회색으로 표시됩니다.",
  },
  {
    parameter: "theme",
    type: "DeepPartial<ButtonStyle>",
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

export default function ButtonDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Button</h3>
        <p className="mb-8 font-medium text-gray-700">
          클릭 액션을 수행하는 기본 UI 요소입니다. 채움·테두리 두 가지 스타일과 모서리
          형태, 색상, 높이를 조합해 사용합니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Button 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={buttonProps} />
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
