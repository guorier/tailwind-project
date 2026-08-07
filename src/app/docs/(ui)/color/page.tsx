import { palette, state } from "@/examples/color";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [palette, state];

const usageRules: Parameter[] = [
  {
    parameter: "text-{색상}-{단계}",
    type: "className",
    required: "Optional",
    description: "글자 색. 예: text-natural-900, text-error-100.",
  },
  {
    parameter: "bg-{색상}-{단계}",
    type: "className",
    required: "Optional",
    description: "배경색. 예: bg-primary-500, bg-line-100.",
  },
  {
    parameter: "border-{색상}-{단계}",
    type: "className",
    required: "Optional",
    description: "테두리 색. 예: border-line-200, border-gray-400.",
  },
  {
    parameter: "단계",
    type: "50 ~ 900",
    required: "Optional",
    description:
      "숫자가 클수록 어둡습니다. warning · valid · error 는 100 하나만 있습니다.",
  },
  {
    parameter: "colorsArray",
    type: "@styles/theme/color.theme",
    required: "Optional",
    description:
      "색상 값을 코드에서 직접 참조할 때 사용합니다. colorName 과 shades 를 가집니다.",
  },
];

export default function ColorDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Color</h3>
        <p className="mb-8 font-medium text-gray-700">
          프로젝트 색상 팔레트입니다. tailwind.config.ts 에 등록돼 있어 Tailwind 클래스로
          바로 쓸 수 있고, 값이 필요하면 color.theme 의 colorsArray 를 가져옵니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">사용 규칙</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={usageRules} />
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
