import { checkbox, radio, nolabel, colors } from "@/examples/optiongroup";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [checkbox, radio, nolabel, colors];

const sharedColors =
  '"base" | "primary" | "secondary" | "warning" | "error" | "valid"';

const checkboxProps: Parameter[] = [
  {
    parameter: "label",
    type: "string",
    required: "Optional",
    description: "입력 요소 옆 텍스트. 생략하면 입력 요소만 렌더링됩니다.",
  },
  {
    parameter: "sizes",
    type: '"sm" | "lg"',
    required: "Optional",
    description: '크기. 기본값 "sm"(18px). "lg" 는 22px 입니다.',
  },
  {
    parameter: "colors",
    type: sharedColors,
    required: "Optional",
    description: '선택 상태의 색상. 기본값 "base".',
  },
  {
    parameter: "borderRadius",
    type: '"default" | "round"',
    required: "Optional",
    description: '모서리 형태. 기본값 "default"(각형).',
  },
  {
    parameter: "checked",
    type: "boolean",
    required: "Optional",
    description: "선택 여부. 값을 넘기면 제어 컴포넌트로 동작합니다.",
  },
  {
    parameter: "disabled",
    type: "boolean",
    required: "Optional",
    description: "비활성화 여부. 라벨 텍스트도 함께 흐려집니다.",
  },
  {
    parameter: "theme",
    type: "DeepPartial<CheckboxStyle>",
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

const radioProps: Parameter[] = [
  {
    parameter: "type",
    type: '"default" | "line"',
    required: "Optional",
    description:
      '형태. 기본값 "default"(선택 시 테두리가 두꺼워짐). "line" 은 안쪽에 점이 채워집니다.',
  },
  {
    parameter: "label",
    type: "string",
    required: "Optional",
    description: "입력 요소 옆 텍스트. 생략하면 입력 요소만 렌더링됩니다.",
  },
  {
    parameter: "sizes",
    type: '"sm" | "lg"',
    required: "Optional",
    description: ' 크기. 기본값 "sm". default·line 두 형태 모두 지원합니다.',
  },
  {
    parameter: "colors",
    type: sharedColors,
    required: "Optional",
    description: '선택 상태의 색상. 기본값 "base".',
  },
  {
    parameter: "checked",
    type: "boolean",
    required: "Optional",
    description: "선택 여부. 값을 넘기면 제어 컴포넌트로 동작합니다.",
  },
  {
    parameter: "disabled",
    type: "boolean",
    required: "Optional",
    description: "비활성화 여부. 라벨 텍스트도 함께 흐려집니다.",
  },
  {
    parameter: "theme",
    type: "DeepPartial<RadioStyle>",
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

export default function OptionGroupDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Checkbox / Radio</h3>
        <p className="mb-8 font-medium text-gray-700">
          선택 입력을 위한 UI 요소입니다. 두 컴포넌트 모두 label 을 넘기면 텍스트가
          함께 렌더링되고, id 를 넘기지 않으면 내부에서 자동 생성해 라벨과 연결합니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Checkbox 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={checkboxProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Radio 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={radioProps} />
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
