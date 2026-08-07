import {
  basic,
  align,
  colors,
  size,
  types,
  email,
  limit,
  progress,
} from "@/examples/input";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, align, colors, size, types, email, limit, progress];

const textInputProps: Parameter[] = [
  {
    parameter: "type",
    type: '"text" | "number" | "search"',
    required: "Optional",
    description: '입력 타입. 기본값 "text". "number" 는 스핀 버튼이 제거되고 오른쪽 정렬됩니다.',
  },
  {
    parameter: "color",
    type: '"base" | "primary" | "secondary" | "warning" | "error" | "valid"',
    required: "Optional",
    description: '테두리·포커스 색상. 기본값 "base".',
  },
  {
    parameter: "align",
    type: '"left" | "center" | "right" | "justify"',
    required: "Optional",
    description: '텍스트 정렬. 생략 시 type="number" 는 오른쪽, 그 외는 왼쪽 정렬됩니다.',
  },
  {
    parameter: "borderRadius",
    type: '"default" | "round" | "underline"',
    required: "Optional",
    description: '모서리 형태. 기본값 "default"(각형).',
  },
  {
    parameter: "height",
    type: '"24" | "28" | "32" | "36" | "40" | "42" | "44" | "48" | "56"',
    required: "Optional",
    description: '높이(px). 기본값 "42" 로 SelectBox 와 동일합니다. 높이에 맞춰 글자 크기도 조정됩니다.',
  },
  {
    parameter: "width",
    type: '"auto" | "full" | 테마 너비 키',
    required: "Optional",
    description: '너비. 기본값 "auto". 테마에 없는 값은 w-{값} 클래스로 처리됩니다.',
  },
  {
    parameter: "disabled",
    type: "boolean",
    required: "Optional",
    description: "비활성화 여부.",
  },
  {
    parameter: "theme",
    type: "DeepPartial<TextInputStyle>",
    required: "Optional",
    description: "기본 테마에 병합할 부분 테마. 지정한 키만 덮어씁니다.",
  },
  {
    parameter: "className",
    type: "string",
    required: "Optional",
    description: "외부 스타일. twMerge 로 병합되어 테마 클래스를 덮어씁니다.",
  },
];

const derivedProps: Parameter[] = [
  {
    parameter: "SearchBox",
    type: "width, theme, className",
    required: "Optional",
    description: "검색 버튼이 포함된 입력. 내부에서 래퍼로 감싸므로 type 을 받지 않습니다.",
  },
  {
    parameter: "PasswordInput",
    type: "width, theme, className",
    required: "Optional",
    description: "표시/숨김 토글 버튼이 내장된 비밀번호 입력.",
  },
  {
    parameter: "EmailInput",
    type: "color, align, borderRadius, width, theme, className",
    required: "Optional",
    description: "이메일 형식 검증을 내장한 입력.",
  },
  {
    parameter: "Limitinput",
    type: "maxLength, width, theme, className",
    required: "Optional",
    description: "maxLength 까지만 입력되고 현재 글자 수를 함께 표시합니다. 기본값 10.",
  },
  {
    parameter: "Progressbar / Progresscircle",
    type: "min, max, step, size, value, none, trackColor, fillColor",
    required: "Optional",
    description: "none 이면 value 를 읽기 전용으로 표시하고, 생략하면 드래그로 조작합니다.",
  },
];

export default function InputDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Input</h3>
        <p className="mb-8 font-medium text-gray-700">
          텍스트·숫자·검색 입력을 위한 기본 UI 요소입니다. 검색, 비밀번호, 이메일,
          글자 수 제한, 프로그레스 등 파생 컴포넌트를 함께 제공합니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Textinput 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={textInputProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">파생 컴포넌트</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={derivedProps} />
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
