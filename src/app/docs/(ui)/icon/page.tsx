import { color, gallery } from "@/examples/icon";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [color, gallery];

const iconProps: Parameter[] = [
  {
    parameter: "iName",
    type: "string",
    required: "Required",
    description:
      "아이콘 이름. 아래 목록의 이름을 그대로 넘깁니다. 없는 이름을 넘기면 아무것도 표시되지 않습니다.",
  },
  {
    parameter: "original",
    type: "boolean",
    required: "Optional",
    description:
      "SVG 를 배경 이미지로 넣어 원본 색상을 유지합니다. 생략하면 마스크로 처리되어 bg-* 가 아이콘 색이 됩니다.",
  },
  {
    parameter: "className",
    type: "string",
    required: "Optional",
    description:
      "크기는 size-*, 색은 bg-*(original 을 쓰지 않을 때)로 지정합니다.",
  },
  {
    parameter: "title",
    type: "string",
    required: "Optional",
    description: "마우스를 올렸을 때 표시할 설명. title 속성으로 전달됩니다.",
  },
  {
    parameter: "onClick",
    type: "() => void",
    required: "Optional",
    description: "클릭 핸들러. 커서 모양은 cursor-pointer 로 직접 지정합니다.",
  },
];

export default function IconDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Icon</h3>
        <p className="mb-8 font-medium text-gray-700">
          프로젝트에 등록된 SVG 아이콘을 이름으로 불러옵니다. 색을 바꿔야 하는 아이콘은
          마스크 방식(original 생략)으로, 원본 색을 그대로 써야 하는 아이콘은 original
          로 사용합니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Icons 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={iconProps} />
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
