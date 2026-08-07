import { basic, position } from "@/examples/tooltip";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, position];

const contentProps: Parameter[] = [
  {
    parameter: "side",
    type: '"top" | "right" | "bottom" | "left"',
    required: "Optional",
    description:
      '트리거 기준 표시 방향. 기본값 "top". 화면 경계에 가까우면 자동으로 반대 방향으로 뒤집힙니다.',
  },
  {
    parameter: "align",
    type: '"start" | "center" | "end"',
    required: "Optional",
    description: '방향축 기준 정렬. 기본값 "center".',
  },
  {
    parameter: "sideOffset",
    type: "number",
    required: "Optional",
    description: "트리거와 툴팁 사이 간격(px). 기본값 6.",
  },
  {
    parameter: "className",
    type: "string",
    required: "Optional",
    description: "툴팁 본문 스타일 지정.",
  },
];

const structureProps: Parameter[] = [
  {
    parameter: "TooltipProvider",
    type: "delayDuration?: number",
    required: "Required",
    description:
      "툴팁을 쓰는 영역을 감싸는 컨텍스트. 보통 최상위 레이아웃에 한 번만 두면 개별 툴팁에서는 생략할 수 있습니다.",
  },
  {
    parameter: "Tooltip",
    type: "open?, defaultOpen?, onOpenChange?",
    required: "Required",
    description: "툴팁 하나의 루트. open 을 넘기면 제어 컴포넌트로 동작합니다.",
  },
  {
    parameter: "TooltipTrigger",
    type: "asChild?: boolean",
    required: "Required",
    description:
      "툴팁을 띄우는 요소. asChild 를 주면 별도 DOM 을 만들지 않고 자식 요소에 그대로 붙습니다.",
  },
  {
    parameter: "TooltipContent",
    type: "side?, align?, sideOffset?",
    required: "Required",
    description: "툴팁 본문. 표시 위치 관련 속성은 위 표를 참고하세요.",
  },
];

export default function TooltipDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Tooltip</h3>
        <p className="mb-8 font-medium text-gray-700">
          요소에 마우스를 올리거나 포커스했을 때 보조 설명을 띄우는 컴포넌트입니다.
          Radix UI 기반이며 여러 조각을 조합해 사용합니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">구성 요소</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={structureProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">TooltipContent 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={contentProps} />
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
