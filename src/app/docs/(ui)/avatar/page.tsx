import { basic, size, badge, group } from "@/examples/avatar";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, size, badge, group];

const structureProps: Parameter[] = [
  {
    parameter: "Avatar",
    type: 'size?: "sm" | "default" | "lg"',
    required: "Required",
    description:
      "원형 테두리를 잡습니다. size 로 32 · 40 · 48px 중 고르며 fallback 글자 크기도 함께 조정됩니다.",
  },
  {
    parameter: "AvatarImage",
    type: "src: string, alt: string",
    required: "Optional",
    description:
      "표시할 이미지입니다. 로딩에 실패하면 자동으로 AvatarFallback 이 대신 보입니다.",
  },
  {
    parameter: "AvatarFallback",
    type: "children: ReactNode",
    required: "Optional",
    description:
      "이미지가 없을 때 보이는 대체 표시입니다. 보통 이름 첫 글자를 넣으며, 항상 함께 두는 것이 좋습니다.",
  },
  {
    parameter: "AvatarBadge",
    type: "children?: ReactNode, aria-label?: string",
    required: "Optional",
    description:
      "우하단에 겹쳐 붙는 작은 표식입니다. 색만으로 뜻이 정해지는 경우 aria-label 로 뜻을 함께 주세요.",
  },
  {
    parameter: "AvatarGroup",
    type: "children: ReactNode",
    required: "Optional",
    description:
      "아바타 여러 개를 겹쳐 나열합니다. 각 아바타에 흰 테두리가 자동으로 붙습니다.",
  },
  {
    parameter: "AvatarGroupCount",
    type: "children: ReactNode",
    required: "Optional",
    description:
      '그룹 끝에 붙는 "+N" 표시입니다. 다 보여주기 어려운 나머지 인원 수를 알립니다.',
  },
];

export default function AvatarDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Avatar</h3>
        <p className="mb-8 font-medium text-gray-700">
          사용자를 나타내는 원형 표식입니다. 이미지가 없는 사용자도 있으므로
          AvatarImage 와 AvatarFallback 을 항상 함께 넣습니다.
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
