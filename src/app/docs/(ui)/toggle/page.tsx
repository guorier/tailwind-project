import { basic, icon, switchDemo } from "@/examples/toggle";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, icon, switchDemo];

const toggleProps: Parameter[] = [
  {
    parameter: "type",
    type: '"default" | "sm" | "lg"',
    required: "Optional",
    description: '스위치 높이. 기본값 "default"(20px). sm·lg 는 얇은 바 형태입니다.',
  },
  {
    parameter: "displayStatus",
    type: "boolean",
    required: "Optional",
    description:
      "스위치 안에 ON/OFF 텍스트 표시. 기본값 false. 켤 때는 width 를 함께 늘려야 잘리지 않습니다.",
  },
  {
    parameter: "width",
    type: '"auto" | "full" | 테마 너비 키',
    required: "Optional",
    description: '너비. 기본값 "9.5"(38px). displayStatus 사용 시 "14" 정도가 적당합니다.',
  },
  {
    parameter: "checked",
    type: "boolean",
    required: "Optional",
    description: "켜짐 여부.",
  },
  {
    parameter: "disabled",
    type: "boolean",
    required: "Optional",
    description: "비활성화 여부.",
  },
  {
    parameter: "toggleId",
    type: "string",
    required: "Optional",
    description: "라벨 연결용 id. 넘기지 않으면 내부에서 자동 생성합니다.",
  },
  {
    parameter: "theme",
    type: "DeepPartial<ToggleStyle>",
    required: "Optional",
    description: "기본 테마에 병합할 부분 테마.",
  },
];

const iconToggleProps: Parameter[] = [
  {
    parameter: "iconType",
    type: '"switch" | "color"',
    required: "Optional",
    description:
      '기본값 "switch". switch 는 상태에 따라 아이콘을 교체하고, color 는 아이콘을 유지한 채 배경색만 바꿉니다.',
  },
  {
    parameter: "iconOn / iconOff",
    type: "string",
    required: "Optional",
    description: "각 상태에서 쓸 아이콘 이름. iconType=\"switch\" 일 때 둘 다 지정합니다.",
  },
  {
    parameter: "iconColorOn / iconColorOff",
    type: "string",
    required: "Optional",
    description:
      'iconType="color" 일 때의 배경색 클래스. 기본값은 bg-slate-700 / bg-slate-400.',
  },
  {
    parameter: "iconSize",
    type: "string",
    required: "Optional",
    description: '아이콘 크기 클래스. 예: "size-6".',
  },
];

export default function ToggleDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Toggle / Switch</h3>
        <p className="mb-8 font-medium text-gray-700">
          켜짐·꺼짐 두 상태를 전환하는 컴포넌트입니다. 기본 Toggle, 아이콘으로 상태를
          표현하는 IconToggle, shadcn 기반 Switch·Toggle 을 함께 제공합니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Toggle 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={toggleProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">IconToggle 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={iconToggleProps} />
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
