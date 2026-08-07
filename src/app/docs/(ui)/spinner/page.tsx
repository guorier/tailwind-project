import { basic, custom } from "@/examples/spinner";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, custom];

const spinnerProps: Parameter[] = [
  {
    parameter: "className",
    type: "string",
    required: "Optional",
    description:
      '크기·색상 지정. 기본 크기는 size-4 이며 size-* 로 덮어씁니다. lucide 아이콘이므로 색은 text-* 를 씁니다.',
  },
];

const spinnerBarProps: Parameter[] = [
  {
    parameter: "trackOpacity",
    type: "number",
    required: "Optional",
    description:
      "회전하지 않는 트랙 부분의 투명도(0~1). 기본값 0.3. 값이 낮을수록 트랙이 연해집니다.",
  },
  {
    parameter: "className",
    type: "string",
    required: "Optional",
    description:
      "크기는 size-*, 색은 text-*(currentColor 사용), 두께는 border-* 로 지정합니다. 기본 두께는 border-[3px].",
  },
];

export default function SpinnerDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Spinner</h3>
        <p className="mb-8 font-medium text-gray-700">
          로딩 상태를 표시하는 컴포넌트입니다. 아이콘을 회전시키는 Spinner 와
          테두리를 회전시키는 SpinnerBar 두 가지를 제공하며, 둘 다 role=&quot;status&quot; 가
          내장돼 있어 별도 접근성 처리가 필요하지 않습니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Spinner 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={spinnerProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">SpinnerBar 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={spinnerBarProps} />
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
