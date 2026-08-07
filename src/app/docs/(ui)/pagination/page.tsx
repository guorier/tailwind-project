import { basic, modern, shadcn } from "@/examples/pagination";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, modern, shadcn];

const paginationProps: Parameter[] = [
  {
    parameter: "currentPage",
    type: "number",
    required: "Required",
    description: "현재 페이지 번호(1부터 시작). 컴포넌트는 상태를 갖지 않습니다.",
  },
  {
    parameter: "totalPages",
    type: "number",
    required: "Required",
    description: "전체 페이지 개수.",
  },
  {
    parameter: "onPageChange",
    type: "(page: number) => void",
    required: "Required",
    description:
      "페이지 버튼을 눌렀을 때 호출됩니다. 여기서 상태를 갱신하고 데이터를 다시 불러옵니다.",
  },
  {
    parameter: "pageRangeDisplayed",
    type: "number",
    required: "Optional",
    description:
      "한 번에 노출할 페이지 번호 개수. 기본값 5. Pagination 에만 있습니다.",
  },
  {
    parameter: "theme",
    type: "DeepPartial<PagingTheme>",
    required: "Optional",
    description: "기본 테마에 병합할 부분 테마.",
  },
];

const variantProps: Parameter[] = [
  {
    parameter: "Pagination",
    type: "@/components/Pagination/Pagination",
    required: "Optional",
    description:
      "기본형. 현재 페이지를 가운데 두고 pageRangeDisplayed 개수만큼 번호를 노출합니다.",
  },
  {
    parameter: "ModernPagination",
    type: "@/components/Pagination/CustomPagination",
    required: "Optional",
    description:
      "페이지가 많을 때 사용. 첫·마지막 페이지 번호와 생략 기호(...)를 자동으로 넣습니다. 노출 개수는 5로 고정입니다.",
  },
  {
    parameter: "ui/pagination",
    type: "@/components/ui/pagination",
    required: "Optional",
    description:
      "shadcn 링크형. 페이지마다 고유 URL 이 필요할 때 쓰며 번호 계산은 직접 해야 합니다.",
  },
];

export default function PaginationDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Pagination</h3>
        <p className="mb-8 font-medium text-gray-700">
          페이지 이동 UI 입니다. 상태를 직접 관리하는 버튼형 두 가지와 링크형 한 가지를
          제공하며, 버튼형은 모두 같은 속성을 사용합니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">종류</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={variantProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Pagination / ModernPagination 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={paginationProps} />
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
