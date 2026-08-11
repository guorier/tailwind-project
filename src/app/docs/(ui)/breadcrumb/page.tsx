import { basic, ellipsis } from "@/examples/breadcrumb";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, ellipsis];

const structureProps: Parameter[] = [
  {
    parameter: "Breadcrumb",
    type: "children: ReactNode",
    required: "Required",
    description:
      'nav 로 렌더되며 aria-label="breadcrumb" 가 붙습니다. 전체를 감쌉니다.',
  },
  {
    parameter: "BreadcrumbList",
    type: "children: ReactNode",
    required: "Required",
    description:
      "항목을 담는 ol 입니다. 좁은 화면에서는 자동으로 줄바꿈됩니다.",
  },
  {
    parameter: "BreadcrumbItem",
    type: "children: ReactNode",
    required: "Required",
    description: "경로 한 칸을 감싸는 li 입니다.",
  },
  {
    parameter: "BreadcrumbLink",
    type: "href: string, asChild?: boolean",
    required: "Optional",
    description:
      "이동 가능한 경로. Next.js Link 로 렌더하려면 asChild 를 주고 자식으로 <Link> 를 넘깁니다.",
  },
  {
    parameter: "BreadcrumbPage",
    type: "children: ReactNode",
    required: "Optional",
    description:
      '현재 페이지. 링크가 아니며 aria-current="page" 가 붙습니다. 보통 마지막 항목에 씁니다.',
  },
  {
    parameter: "BreadcrumbSeparator",
    type: "children?: ReactNode",
    required: "Optional",
    description:
      "항목 사이 구분자. 생략하면 화살표(>)가 기본으로 들어가며, 장식이므로 낭독기에서 감춰집니다.",
  },
  {
    parameter: "BreadcrumbEllipsis",
    type: "-",
    required: "Optional",
    description:
      "경로가 길 때 가운데를 접어서 표시하는 생략 기호입니다.",
  },
];

export default function BreadcrumbDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Breadcrumb</h3>
        <p className="mb-8 font-medium text-gray-700">
          현재 위치까지의 경로를 보여주는 탐색 컴포넌트입니다. 메뉴 depth 가 깊은
          화면에서 사용자가 어디에 있는지, 어디로 되돌아갈 수 있는지 알려줍니다.
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
