import { customTab, composed, shadcn } from "@/examples/tabs";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [customTab, composed, shadcn];

const variantProps: Parameter[] = [
  {
    parameter: "CustomTab",
    type: "@/components/Tabs/CustomTab",
    required: "Optional",
    description:
      "탭 목록을 배열로 넘기는 방식. 탭 수가 고정이고 구조가 단순할 때 가장 짧게 씁니다.",
  },
  {
    parameter: "Tabs / TabItem",
    type: "@/components/Tabs/items",
    required: "Optional",
    description:
      "TabItem 을 자식으로 나열하는 방식. 방향키 이동을 지원하고 ref 로 외부에서 탭을 바꿀 수 있습니다.",
  },
  {
    parameter: "ui/tabs",
    type: "@/components/ui/tabs",
    required: "Optional",
    description:
      "shadcn·Radix 기반. value 문자열로 트리거와 본문을 연결하며 본문이 복잡할 때 편합니다.",
  },
];

const customTabProps: Parameter[] = [
  {
    parameter: "tabsData",
    type: "{ title: string; content: ReactNode; disabled: boolean }[]",
    required: "Required",
    description: "탭 목록. title 이 탭 이름, content 가 본문입니다.",
  },
  {
    parameter: "kind",
    type: '"base" | "line" | "underline"',
    required: "Optional",
    description:
      '탭 모양. 기본값 "base"(활성 탭 배경 채움). line 은 박스형, underline 은 밑줄형입니다.',
  },
  {
    parameter: "height",
    type: '"36" | "44" | "48" | "56"',
    required: "Optional",
    description: '탭 높이(px). 기본값 "36". 높이에 따라 글자 크기도 함께 바뀝니다.',
  },
  {
    parameter: "theme",
    type: "DeepPartial<CustomTabStyle>",
    required: "Optional",
    description: "기본 테마에 병합할 부분 테마.",
  },
];

const composedProps: Parameter[] = [
  {
    parameter: "style",
    type: '"default" | "underline" | "pills" | "fullWidth"',
    required: "Optional",
    description: '탭 모양. 기본값 "underline".',
  },
  {
    parameter: "onActiveTabChange",
    type: "(activeTab: number) => void",
    required: "Optional",
    description: "활성 탭이 바뀔 때 인덱스를 넘겨 호출됩니다.",
  },
  {
    parameter: "ring",
    type: "boolean",
    required: "Optional",
    description: "탭 버튼에 포커스 링 표시 여부. 기본값 false.",
  },
  {
    parameter: "TabItem.title",
    type: "ReactNode",
    required: "Required",
    description: "탭 버튼에 표시할 이름.",
  },
  {
    parameter: "TabItem.active",
    type: "boolean",
    required: "Optional",
    description: "처음에 열려 있을 탭을 지정합니다.",
  },
  {
    parameter: "TabItem.disabled",
    type: "boolean",
    required: "Optional",
    description: "선택할 수 없는 탭으로 만듭니다.",
  },
];

export default function TabsDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Tabs</h3>
        <p className="mb-8 font-medium text-gray-700">
          여러 콘텐츠를 탭으로 전환해 보여주는 컴포넌트입니다. 사용 방식이 다른 세 가지
          구현을 제공하므로 상황에 맞는 쪽을 고르세요.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">종류</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={variantProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">CustomTab 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={customTabProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Tabs / TabItem 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={composedProps} />
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
