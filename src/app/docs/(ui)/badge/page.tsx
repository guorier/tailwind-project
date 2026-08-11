import { basic, status } from "@/examples/badge";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, status];

const badgeProps: Parameter[] = [
  {
    parameter: "variant",
    type: '"default" | "secondary" | "destructive" | "outline" | "active" | "inactive" | "warning" | "error"',
    required: "Optional",
    description:
      "앞의 네 가지는 hover 시 색이 반전되어 클릭 가능한 태그에 적합하고, 뒤의 네 가지는 상태 표시 전용입니다. 기본값은 default 입니다.",
  },
  {
    parameter: "className",
    type: "string",
    required: "Optional",
    description: "추가 스타일을 덧붙입니다.",
  },
];

export default function BadgeDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Badge</h3>
        <p className="mb-8 font-medium text-gray-700">
          짧은 라벨을 표시하는 작은 표식입니다. 목록 항목의 상태를 알리거나
          분류를 나타낼 때 씁니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={badgeProps} />
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
