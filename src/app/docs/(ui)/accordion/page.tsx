import { single, multiple } from "@/examples/accordion";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [single, multiple];

const accordionProps: Parameter[] = [
  {
    parameter: "type",
    type: '"single" | "multiple"',
    required: "Required",
    description:
      "single 은 한 번에 하나만, multiple 은 여러 항목을 동시에 펼칩니다.",
  },
  {
    parameter: "collapsible",
    type: "boolean",
    required: "Optional",
    description:
      'type="single" 에서만 의미가 있습니다. 열린 항목을 다시 눌러 닫을 수 있게 하며, 생략하면 최소 하나는 항상 열려 있습니다.',
  },
  {
    parameter: "defaultValue",
    type: "string | string[]",
    required: "Optional",
    description:
      '처음에 열어둘 항목의 value. type="multiple" 이면 배열로 넘깁니다.',
  },
  {
    parameter: "value / onValueChange",
    type: "string | string[] / (value) => void",
    required: "Optional",
    description: "열림 상태를 외부에서 제어할 때 사용합니다.",
  },
];

const structureProps: Parameter[] = [
  {
    parameter: "AccordionItem",
    type: "value: string",
    required: "Required",
    description:
      "항목 하나를 감쌉니다. value 는 항목을 구분하는 키로 defaultValue 와 연결됩니다.",
  },
  {
    parameter: "AccordionTrigger",
    type: "children: ReactNode",
    required: "Required",
    description:
      "펼치기 버튼. 화살표 아이콘이 내장돼 있고 열린 상태에서 180도 회전합니다.",
  },
  {
    parameter: "AccordionContent",
    type: "children: ReactNode",
    required: "Required",
    description: "펼쳐지는 본문. 열림·닫힘 애니메이션이 내장돼 있습니다.",
  },
];

export default function AccordionDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Accordion</h3>
        <p className="mb-8 font-medium text-gray-700">
          제목을 눌러 본문을 접고 펼치는 컴포넌트입니다. Radix UI 기반이며 각 항목을
          value 로 구분합니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Accordion 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={accordionProps} />
        </div>

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
