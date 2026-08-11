import { basic, horizontal } from "@/examples/scrollarea";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, horizontal];

const structureProps: Parameter[] = [
  {
    parameter: "ScrollArea",
    type: "children: ReactNode",
    required: "Required",
    description:
      "스크롤 영역입니다. className 으로 높이를 제한해야 스크롤이 생깁니다.",
  },
  {
    parameter: "ScrollBar",
    type: 'orientation?: "vertical" | "horizontal"',
    required: "Optional",
    description:
      "세로 스크롤바는 기본으로 포함돼 있습니다. 가로 스크롤이 필요하면 orientation=\"horizontal\" 로 하나 더 넣습니다.",
  },
];

export default function ScrollAreaDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">ScrollArea</h3>
        <p className="mb-8 font-medium text-gray-700">
          브라우저 기본 스크롤바 대신 일관된 모양의 스크롤바를 쓰는 영역입니다.
          OS 마다 다른 스크롤바 모양을 통일하고 싶을 때 사용합니다.
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
