import { basic } from "@/examples/sidebar";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic];

const structureProps: Parameter[] = [
  {
    parameter: "SidebarProvider",
    type: "defaultOpen?, open?, onOpenChange?",
    required: "Required",
    description:
      "열림 상태를 관리하며 전체를 감쌉니다. 화면 폭이 768px 미만이면 Sidebar 가 자동으로 Sheet 로 전환됩니다.",
  },
  {
    parameter: "Sidebar",
    type: "children: ReactNode",
    required: "Required",
    description:
      "사이드바 본체입니다. 데스크톱에서는 너비가 줄어들며 접히고, 모바일에서는 Sheet 로 열립니다.",
  },
  {
    parameter: "SidebarTrigger",
    type: "-",
    required: "Optional",
    description:
      "여닫는 버튼입니다. 보통 본문 헤더에 두므로 SidebarInset 안에 넣습니다.",
  },
  {
    parameter: "SidebarHeader / SidebarFooter",
    type: "children: ReactNode",
    required: "Optional",
    description: "사이드바의 머리말과 바닥 영역입니다.",
  },
  {
    parameter: "SidebarContent",
    type: "children: ReactNode",
    required: "Optional",
    description: "스크롤되는 본문 영역입니다. 메뉴 묶음을 넣습니다.",
  },
  {
    parameter: "SidebarGroup / SidebarGroupLabel",
    type: "children: ReactNode",
    required: "Optional",
    description: "메뉴를 주제별로 묶고 제목을 붙입니다.",
  },
  {
    parameter: "SidebarMenu / SidebarMenuItem",
    type: "children: ReactNode",
    required: "Optional",
    description: "메뉴 목록과 항목입니다. ul · li 로 렌더됩니다.",
  },
  {
    parameter: "SidebarMenuButton",
    type: "isActive?: boolean, onClick?",
    required: "Optional",
    description:
      "메뉴 버튼입니다. 현재 위치인 항목에 isActive 를 주면 강조됩니다.",
  },
  {
    parameter: "SidebarInset",
    type: "children: ReactNode",
    required: "Optional",
    description: "사이드바 옆에 오는 본문 영역입니다. main 으로 렌더됩니다.",
  },
  {
    parameter: "useSidebar()",
    type: "() => { open, setOpen, toggle, isMobile }",
    required: "Optional",
    description:
      "하위 컴포넌트에서 열림 상태를 직접 읽거나 바꿀 때 사용합니다.",
  },
];

export default function SidebarDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Sidebar</h3>
        <p className="mb-8 font-medium text-gray-700">
          접고 펼 수 있는 사이드바 레이아웃입니다. 화면이 좁아지면 상주 패널
          대신 Sheet 로 열려서 본문을 가리지 않습니다.
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
