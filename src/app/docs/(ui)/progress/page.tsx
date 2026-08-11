import { bar, circle, readonly } from "@/examples/progress";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [bar, circle, readonly];

const progressProps: Parameter[] = [
  {
    parameter: "value",
    type: "number",
    required: "Optional",
    description: "현재 진행 값입니다. 지정하지 않으면 min 에서 시작합니다.",
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
    parameter: "size",
    type: "number",
    required: "Optional",
    description:
      "Progresscircle 전용. 원의 지름(px)이며 기본값이 0이라 반드시 지정해야 보입니다.",
  },
  {
    parameter: "none",
    type: "boolean",
    required: "Optional",
    description:
      "range 입력을 숨기고 진행 표시만 남깁니다. 사용자가 조작하지 않는 값에 씁니다.",
  },
  {
    parameter: "trackColor / fillColor",
    type: "string",
    required: "Optional",
    description:
      "배경과 채워진 부분의 색입니다. CSS 색상 문자열을 그대로 받습니다.",
  },
  {
    parameter: "width",
    type: "keyof ProgressStyle['width']",
    required: "Optional",
    description: "range 입력의 너비 토큰입니다. 기본값은 full 입니다.",
  },
];

export default function ProgressDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Progress</h3>
        <p className="mb-8 font-medium text-gray-700">
          진행 정도를 나타냅니다. 가로 막대(Progressbar)와 원형(Progresscircle)
          두 가지가 있으며, 둘 다 range 입력과 표시가 한 쌍으로 렌더됩니다.
          표시만 필요하면 none 을 주세요.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={progressProps} />
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
