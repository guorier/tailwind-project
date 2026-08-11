import { basic, action } from "@/examples/card";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, action];

const structureProps: Parameter[] = [
  {
    parameter: "Card",
    type: "children: ReactNode",
    required: "Required",
    description:
      "테두리·둥근 모서리·그림자를 가진 표면입니다. flex-col 이라 Footer 가 자동으로 아래에 붙습니다.",
  },
  {
    parameter: "CardHeader",
    type: "children: ReactNode",
    required: "Optional",
    description:
      "머리말 영역. 좌우 배치(justify-between)이므로 제목과 설명은 하나의 div 로 묶어 넘깁니다.",
  },
  {
    parameter: "CardTitle",
    type: "children: ReactNode",
    required: "Optional",
    description: "제목. h3 로 렌더됩니다.",
  },
  {
    parameter: "CardDescription",
    type: "children: ReactNode",
    required: "Optional",
    description: "제목 아래 보조 설명입니다.",
  },
  {
    parameter: "CardAction",
    type: "children: ReactNode",
    required: "Optional",
    description:
      "머리말 우측 영역. 상태 배지나 더보기 버튼을 배치할 때 씁니다.",
  },
  {
    parameter: "CardContent",
    type: "children: ReactNode",
    required: "Optional",
    description: "본문 영역입니다.",
  },
  {
    parameter: "CardFooter",
    type: "children: ReactNode",
    required: "Optional",
    description:
      "하단 영역. 위쪽 구분선을 가지며 카드 높이가 남으면 바닥에 붙습니다.",
  },
];

export default function CardDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Card</h3>
        <p className="mb-8 font-medium text-gray-700">
          내용 한 덩어리를 감싸는 컨테이너입니다. 페이지 폭을 잡는 Container 와
          달리, Card 는 그 안에서 개별 지표·목록을 담는 표면 역할을 합니다.
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
