import { basic, range, vertical, disabled } from "@/examples/slider";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, range, vertical, disabled];

const sliderProps: Parameter[] = [
  {
    parameter: "value / onValueChange",
    type: "number[] / (value: number[]) => void",
    required: "Optional",
    description:
      "값은 배열입니다. 원소가 두 개면 손잡이가 두 개인 구간 선택이 됩니다.",
  },
  {
    parameter: "defaultValue",
    type: "number[]",
    required: "Optional",
    description: "비제어로 쓸 때의 초기값입니다.",
  },
  {
    parameter: "min / max",
    type: "number",
    required: "Optional",
    description: "값의 범위입니다. 기본값은 0 과 100 입니다.",
  },
  {
    parameter: "step",
    type: "number",
    required: "Optional",
    description: "값이 변하는 단위입니다. 기본값은 1 입니다.",
  },
  {
    parameter: "orientation",
    type: '"horizontal" | "vertical"',
    required: "Optional",
    description:
      '방향입니다. 기본값은 "horizontal" 이며, 세로는 부모에 높이가 지정돼 있어야 보입니다.',
  },
  {
    parameter: "disabled",
    type: "boolean",
    required: "Optional",
    description: "조작을 막고 흐리게 표시합니다.",
  },
];

export default function SliderDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Slider</h3>
        <p className="mb-8 font-medium text-gray-700">
          범위 안에서 값을 고르는 입력입니다. 사용자가 조작하지 않는 진행률
          표시라면 Slider 대신 Progress 를 쓰세요.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={sliderProps} />
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
