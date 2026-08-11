import { basic } from "@/examples/separator";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic];

const separatorProps: Parameter[] = [
  {
    parameter: "orientation",
    type: '"horizontal" | "vertical"',
    required: "Optional",
    description:
      '방향입니다. 기본값은 "horizontal" 이며, 세로선은 부모에 높이가 지정돼 있어야 보입니다.',
  },
  {
    parameter: "decorative",
    type: "boolean",
    required: "Optional",
    description:
      "기본값 true 는 장식으로 취급되어 낭독기에서 감춰집니다. 의미가 다른 두 묶음을 실제로 가르는 경우에만 false 를 주세요.",
  },
  {
    parameter: "className",
    type: "string",
    required: "Optional",
    description: "여백이나 색을 조정합니다.",
  },
];

export default function SeparatorDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Separator</h3>
        <p className="mb-8 font-medium text-gray-700">
          내용을 시각적으로 나누는 선입니다. 목록 항목 사이나 머리말과 본문
          사이처럼 묶음이 바뀌는 지점에 씁니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={separatorProps} />
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
