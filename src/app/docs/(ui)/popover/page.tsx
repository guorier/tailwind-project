import { basic } from "@/examples/popover";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic];

const structureProps: Parameter[] = [
  {
    parameter: "Popover",
    type: "open?, onOpenChange?",
    required: "Required",
    description:
      "전체를 감쌉니다. 열림 상태를 밖에서 제어하려면 open · onOpenChange 를 넘깁니다.",
  },
  {
    parameter: "PopoverTrigger",
    type: "asChild?: boolean",
    required: "Required",
    description:
      "패널을 여는 요소입니다. asChild 를 주면 자식이 트리거가 됩니다.",
  },
  {
    parameter: "PopoverContent",
    type: 'align?: "start" | "center" | "end", sideOffset?: number',
    required: "Required",
    description:
      "떠오르는 본문입니다. align 으로 트리거 기준 정렬을, sideOffset 으로 간격을 정합니다.",
  },
];

export default function PopoverDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Popover</h3>
        <p className="mb-8 font-medium text-gray-700">
          클릭하면 떠오르는 작은 패널입니다. hover 로 열리고 짧은 설명만 담는
          Tooltip 과 달리, 내부에 버튼·입력 같은 조작 가능한 요소를 넣을 수
          있습니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">구성 요소</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={structureProps} />
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
