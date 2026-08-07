import { basic, width, multi, transfer } from "@/examples/selectbox";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, width, multi, transfer];

const selectBoxProps: Parameter[] = [
  {
    parameter: "options",
    type: "{ id: number; value: string; label: string }[]",
    required: "Required",
    description: "선택할 수 있는 항목 목록. label 이 화면에 표시됩니다.",
  },
  {
    parameter: "value",
    type: "string",
    required: "Required",
    description: "현재 선택된 값. 컴포넌트는 상태를 갖지 않습니다.",
  },
  {
    parameter: "onChange",
    type: "(value: string) => void",
    required: "Required",
    description: "항목을 선택했을 때 호출됩니다.",
  },
  {
    parameter: "borderRadius",
    type: '"default" | "round" | "underline"',
    required: "Optional",
    description: '모서리 형태. 기본값 "default".',
  },
  {
    parameter: "width",
    type: '"full" | "auto" | 테마 너비 키',
    required: "Optional",
    description: '선택 영역 너비. 기본값 "full".',
  },
  {
    parameter: "optionWidth",
    type: '"full" | "auto"',
    required: "Optional",
    description:
      '펼친 목록 너비. 기본값 "full"(선택 영역과 동일). "auto" 는 항목 내용에 맞춰 넓어집니다.',
  },
  {
    parameter: "disabled",
    type: "boolean",
    required: "Optional",
    description: "비활성화 여부. 기본값 false.",
  },
  {
    parameter: "initialOpen",
    type: "boolean",
    required: "Optional",
    description: "처음부터 목록을 펼친 상태로 시작합니다.",
  },
  {
    parameter: "theme",
    type: "DeepPartial<SelectboxStyle>",
    required: "Optional",
    description: "기본 테마에 병합할 부분 테마.",
  },
];

const multiSelectProps: Parameter[] = [
  {
    parameter: "options",
    type: "{ value: string; label: string }[]",
    required: "Required",
    description: "선택할 수 있는 항목 목록. SelectBox 와 달리 id 가 필요하지 않습니다.",
  },
  {
    parameter: "value",
    type: "string[]",
    required: "Required",
    description: "선택된 값 배열.",
  },
  {
    parameter: "onChange",
    type: "(value: string[]) => void",
    required: "Required",
    description: "선택이 바뀔 때 전체 배열을 넘겨 호출됩니다.",
  },
  {
    parameter: "placeholder",
    type: "string",
    required: "Optional",
    description: '선택 전 표시 문구. 기본값 "Please select...".',
  },
  {
    parameter: "disabled",
    type: "boolean",
    required: "Optional",
    description: "비활성화 여부.",
  },
];

const transferProps: Parameter[] = [
  {
    parameter: "initialItems",
    type: "{ value: string; label: string }[]",
    required: "Required",
    description:
      "왼쪽 목록의 초기 항목. 좌우 이동 상태는 컴포넌트 내부에서 관리합니다.",
  },
];

export default function SelectBoxDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">SelectBox</h3>
        <p className="mb-8 font-medium text-gray-700">
          선택 UI 입니다. 단일 선택(SelectBox), 다중 선택(MultiSelect), 좌우 이동
          방식(Transfer) 세 가지를 제공합니다. 기본 높이는 42px 로 Input 과 같습니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">SelectBox 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={selectBoxProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">MultiSelect 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={multiSelectProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Transfer 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={transferProps} />
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
