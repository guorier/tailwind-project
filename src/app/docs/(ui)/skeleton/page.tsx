import { basic, text, card } from "@/examples/skeleton";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, text, card];

const skeletonProps: Parameter[] = [
  {
    parameter: "className",
    type: "string",
    required: "Optional",
    description:
      "크기와 모양을 지정합니다. 실제 콘텐츠와 비슷한 크기로 맞춰야 로딩이 끝날 때 레이아웃이 밀리지 않습니다.",
  },
];

const skeletonTextProps: Parameter[] = [
  {
    parameter: "lines",
    type: "number",
    required: "Optional",
    description:
      "렌더할 줄 수입니다. 기본값은 3이며, 마지막 줄은 짧게 렌더되어 문단처럼 보입니다.",
  },
  {
    parameter: "className",
    type: "string",
    required: "Optional",
    description: "바깥 래퍼에 적용됩니다. 폭 제한 등에 사용합니다.",
  },
];

export default function SkeletonDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Skeleton</h3>
        <p className="mb-8 font-medium text-gray-700">
          데이터를 기다리는 동안 콘텐츠가 들어올 자리를 미리 잡아 두는
          플레이스홀더입니다. Spinner 가 &ldquo;로딩 중&rdquo;이라는 사실만 알린다면,
          Skeleton 은 무엇이 어디에 나타날지까지 미리 보여줘 화면이 덜 흔들립니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Skeleton 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={skeletonProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">SkeletonText 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={skeletonTextProps} />
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
