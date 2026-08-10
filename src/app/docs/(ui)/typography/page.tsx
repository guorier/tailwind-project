import { weightStyles, hierarchy, scale } from "@/examples/typography";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [weightStyles, hierarchy, scale];

const usageRules: Parameter[] = [
  {
    parameter: "font-semibold / font-normal / font-light",
    type: "className",
    required: "Optional",
    description:
      "폰트 웨이트. 이 3가지만 사용합니다. BODY/ M 16 처럼 Medium 이 지정된 스케일에서만 font-medium 을 씁니다.",
  },
  {
    parameter: "h1 ~ h6",
    type: "tag",
    required: "Optional",
    description:
      "헤드라인 계층. 태그에 크기·행간이 지정돼 있어 별도 클래스 없이 태그만 써도 됩니다.",
  },
  {
    parameter: "text-{크기}",
    type: "className",
    required: "Optional",
    description:
      "타이포 스케일. 예: text-4xl(32), text-xl(20), text-base(16), text-sm(14), text-xs(12).",
  },
  {
    parameter: "TITLE / BODY / LABEL",
    type: "스케일 그룹",
    required: "Optional",
    description:
      "용도 구분. TITLE 은 제목, BODY 는 본문, LABEL 은 버튼·입력 라벨 등 보조 텍스트에 사용합니다.",
  },
  {
    parameter: "SB / M / R",
    type: "스케일 이름 규칙",
    required: "Optional",
    description:
      "스케일 이름에 붙는 웨이트 약어입니다. 각각 Semibold · Medium · Regular 을 뜻합니다.",
  },
];

export default function TypographyDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Typography</h3>
        <p className="mb-8 font-medium text-gray-700">
          프로젝트 타이포그래피 규칙입니다. 폰트 웨이트는 3가지로 제한하고, 헤드라인은
          태그에 크기·행간이 지정돼 있으며, 본문·라벨은 용도별 스케일을 따릅니다.
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
