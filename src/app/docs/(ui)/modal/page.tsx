import { dialog, alert } from "@/examples/modal";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [dialog, alert];

const alertProps: Parameter[] = [
  {
    parameter: "open",
    type: "boolean",
    required: "Optional",
    description: "열림 여부. 상태는 호출부에서 관리합니다.",
  },
  {
    parameter: "onOpenChange",
    type: "(open: boolean) => void",
    required: "Optional",
    description:
      "배경 클릭이나 ESC 로 닫힐 때도 호출되므로 여기서 상태를 갱신해야 합니다.",
  },
  {
    parameter: "actions",
    type: "ReactNode[]",
    required: "Optional",
    description:
      "하단 버튼 목록. 하나면 알림, 둘이면 확인/취소 형태가 됩니다. 각 요소에 key 를 주세요.",
  },
  {
    parameter: "icon",
    type: "string",
    required: "Optional",
    description: '상단 아이콘 이름. 예: "iconCompleted", "iconFail".',
  },
  {
    parameter: "poptitle",
    type: "ReactNode",
    required: "Optional",
    description: "아이콘 옆 작은 제목.",
  },
  {
    parameter: "title / subtitle",
    type: "ReactNode",
    required: "Optional",
    description: "본문 제목과 보조 문구.",
  },
  {
    parameter: "description / extra / children",
    type: "ReactNode",
    required: "Optional",
    description: "추가 설명이나 임의의 본문을 넣을 때 사용합니다.",
  },
  {
    parameter: "contentClassName",
    type: "string",
    required: "Optional",
    description:
      "본문 영역 스타일. headerClassName · footerClassName 도 함께 제공됩니다.",
  },
];

const dialogProps: Parameter[] = [
  {
    parameter: "Dialog",
    type: "open?, onOpenChange?",
    required: "Required",
    description:
      "모달 루트. 트리거를 함께 쓰면 열림 상태를 내부에서 관리하므로 생략할 수 있습니다.",
  },
  {
    parameter: "DialogTrigger",
    type: "asChild?: boolean",
    required: "Optional",
    description: "모달을 여는 요소. asChild 를 주면 자식 버튼이 그대로 트리거가 됩니다.",
  },
  {
    parameter: "DialogContent",
    type: "className?: string",
    required: "Required",
    description: "모달 본문. 너비는 className 으로 지정합니다.",
  },
  {
    parameter: "DialogHeader / DialogFooter",
    type: "children: ReactNode",
    required: "Optional",
    description: "제목 영역과 버튼 영역. 내부 정렬이 지정돼 있습니다.",
  },
  {
    parameter: "DialogTitle / DialogDescription",
    type: "children: ReactNode",
    required: "Optional",
    description: "제목과 설명. 접근성 속성이 자동으로 연결됩니다.",
  },
  {
    parameter: "DialogClose",
    type: "asChild?: boolean",
    required: "Optional",
    description: "감싼 요소를 닫기 버튼으로 만듭니다. 별도 핸들러가 필요 없습니다.",
  },
];

export default function ModalDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Modal</h3>
        <p className="mb-8 font-medium text-gray-700">
          화면 위에 겹쳐 띄우는 대화창입니다. 입력 폼을 담는 Dialog 와, 알림·확인용
          Alert 두 가지를 제공합니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Dialog 구성 요소</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={dialogProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Alert 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={alertProps} />
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
