import { basic, side } from "@/examples/sheet";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, side];

const structureProps: Parameter[] = [
  {
    parameter: "Sheet",
    type: "open?, onOpenChange?",
    required: "Required",
    description:
      "전체를 감쌉니다. 열림 상태를 밖에서 제어하려면 open · onOpenChange 를 넘깁니다.",
  },
  {
    parameter: "SheetTrigger",
    type: "asChild?: boolean",
    required: "Optional",
    description:
      "패널을 여는 버튼입니다. asChild 를 주면 자식 요소가 트리거가 됩니다.",
  },
  {
    parameter: "SheetContent",
    type: 'side?: "top" | "right" | "bottom" | "left"',
    required: "Required",
    description:
      '패널 본문입니다. side 로 열리는 방향을 정하며 기본값은 "right" 입니다. 닫기 버튼이 내장돼 있습니다.',
  },
  {
    parameter: "SheetHeader / SheetFooter",
    type: "children: ReactNode",
    required: "Optional",
    description: "머리말과 하단 영역입니다.",
  },
  {
    parameter: "SheetTitle / SheetDescription",
    type: "children: ReactNode",
    required: "Optional",
    description:
      "제목과 설명입니다. 화면 낭독기가 패널의 용도를 읽을 수 있도록 SheetTitle 은 넣어 주는 것이 좋습니다.",
  },
  {
    parameter: "SheetClose",
    type: "asChild?: boolean",
    required: "Optional",
    description: "패널을 닫는 버튼을 따로 둘 때 사용합니다.",
  },
];

export default function SheetDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Sheet</h3>
        <p className="mb-8 font-medium text-gray-700">
          화면 가장자리에서 밀려 들어오는 패널입니다. 화면 중앙을 덮는 Modal 과
          달리 배경이 계속 보이므로, 목록을 보면서 상세를 확인하는 흐름에
          적합합니다.
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
