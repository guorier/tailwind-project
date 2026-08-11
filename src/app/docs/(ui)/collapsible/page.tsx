import { basic, tree } from "@/examples/collapsible";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, tree];

const structureProps: Parameter[] = [
  {
    parameter: "Collapsible",
    type: "open?, onOpenChange?, defaultOpen?",
    required: "Required",
    description:
      "전체를 감쌉니다. 상태를 밖에서 제어하려면 open · onOpenChange 를, 비제어로 쓰려면 defaultOpen 을 넘깁니다.",
  },
  {
    parameter: "CollapsibleTrigger",
    type: "asChild?: boolean",
    required: "Required",
    description:
      "접고 펴는 버튼입니다. asChild 를 주면 자식 요소가 트리거가 됩니다.",
  },
  {
    parameter: "CollapsibleContent",
    type: "children: ReactNode",
    required: "Required",
    description: "접히는 내용입니다.",
  },
];

export default function CollapsibleDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Collapsible</h3>
        <p className="mb-8 font-medium text-gray-700">
          영역 하나를 접고 펴는 컴포넌트입니다. 여러 항목을 묶어 하나씩 여닫는
          것이 목적이면 Accordion 을 쓰고, Collapsible 은 독립된 한 덩어리를
          감출 때만 씁니다.
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
