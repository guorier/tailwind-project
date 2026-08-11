import { basic } from "@/examples/empty";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic];

const structureProps: Parameter[] = [
  {
    parameter: "Empty",
    type: "children: ReactNode",
    required: "Required",
    description: "전체를 감싸며 가운데 정렬을 잡습니다.",
  },
  {
    parameter: "EmptyHeader",
    type: "children: ReactNode",
    required: "Optional",
    description: "아이콘·제목·설명을 묶는 영역입니다.",
  },
  {
    parameter: "EmptyMedia",
    type: 'variant?: "icon" | "default"',
    required: "Optional",
    description:
      ' 아이콘이나 일러스트를 담습니다. variant="icon" 이면 원형 배경이 붙습니다.',
  },
  {
    parameter: "EmptyTitle",
    type: "children: ReactNode",
    required: "Optional",
    description: "왜 비어 있는지 한 줄로 알려 줍니다.",
  },
  {
    parameter: "EmptyDescription",
    type: "children: ReactNode",
    required: "Optional",
    description: "보충 설명입니다.",
  },
  {
    parameter: "EmptyContent",
    type: "children: ReactNode",
    required: "Optional",
    description:
      "다음 행동을 유도하는 버튼이나 링크를 넣습니다. 사용자가 막히지 않도록 하나쯤 두는 것이 좋습니다.",
  },
];

export default function EmptyDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Empty</h3>
        <p className="mb-8 font-medium text-gray-700">
          목록이나 검색 결과가 비었을 때 보여주는 화면입니다. 빈 공간을 그냥
          두는 대신 이유를 설명하고 다음에 할 일을 안내합니다.
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
