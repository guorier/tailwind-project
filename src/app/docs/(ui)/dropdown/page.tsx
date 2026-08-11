import { basic, checkbox } from "@/examples/dropdown";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, checkbox];

const structureProps: Parameter[] = [
  {
    parameter: "DropdownMenu",
    type: "open?, onOpenChange?",
    required: "Required",
    description: "전체를 감쌉니다.",
  },
  {
    parameter: "DropdownMenuTrigger",
    type: "asChild?: boolean",
    required: "Required",
    description:
      "메뉴를 여는 버튼입니다. asChild 를 주면 자식 요소가 트리거가 됩니다.",
  },
  {
    parameter: "DropdownMenuContent",
    type: 'align?: "start" | "center" | "end"',
    required: "Required",
    description: "메뉴 본문입니다. align 으로 트리거 기준 정렬을 정합니다.",
  },
  {
    parameter: "DropdownMenuItem",
    type: "onSelect?: () => void, disabled?: boolean",
    required: "Optional",
    description: "동작 하나를 나타냅니다. 누르면 메뉴가 닫힙니다.",
  },
  {
    parameter: "DropdownMenuCheckboxItem",
    type: "checked: boolean, onCheckedChange: (checked) => void",
    required: "Optional",
    description:
      "켜고 끌 수 있는 항목입니다. 상태는 직접 관리해야 합니다.",
  },
  {
    parameter: "DropdownMenuRadioGroup / RadioItem",
    type: "value, onValueChange / value",
    required: "Optional",
    description: "여러 개 중 하나만 고르는 항목 묶음입니다.",
  },
  {
    parameter: "DropdownMenuLabel / Separator",
    type: "children: ReactNode / -",
    required: "Optional",
    description: "항목 묶음의 제목과 구분선입니다.",
  },
  {
    parameter: "DropdownMenuSub / SubTrigger / SubContent",
    type: "children: ReactNode",
    required: "Optional",
    description: "하위 메뉴를 펼칠 때 사용합니다.",
  },
];

export default function DropdownDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">DropdownMenu</h3>
        <p className="mb-8 font-medium text-gray-700">
          동작을 모아 보여주는 메뉴입니다. 값을 고르는 SelectBox 와 달리 항목을
          누르면 동작이 실행됩니다. 더보기(⋯) 버튼이나 계정 메뉴에 씁니다.
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
