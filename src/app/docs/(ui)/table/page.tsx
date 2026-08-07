import { basic, colgroup, dataTable } from "@/examples/table";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, colgroup, dataTable];

const structureProps: Parameter[] = [
  {
    parameter: "Table",
    type: "@/components/ui/table",
    required: "Required",
    description: "표 전체를 감싸는 table 요소.",
  },
  {
    parameter: "TableHeader / TableBody",
    type: "children: ReactNode",
    required: "Required",
    description: "thead · tbody 에 해당합니다.",
  },
  {
    parameter: "TableRow",
    type: "data-state?: \"selected\"",
    required: "Required",
    description:
      "행. data-state=\"selected\" 를 주면 선택된 행 배경이 적용됩니다.",
  },
  {
    parameter: "TableHead / TableCell",
    type: "className?: string",
    required: "Required",
    description: "머리글 셀 · 본문 셀. 정렬은 text-right 등 className 으로 지정합니다.",
  },
  {
    parameter: "TableColGroup",
    type: "@/components/Table",
    required: "Optional",
    description: "colgroup 으로 열 너비를 고정합니다. 아래 표를 참고하세요.",
  },
];

const colGroupProps: Parameter[] = [
  {
    parameter: "columnCount",
    type: "number",
    required: "Required",
    description: "전체 열 개수. 이 개수만큼 col 요소를 만듭니다.",
  },
  {
    parameter: "widths",
    type: "{ [columnIndex: number]: string }",
    required: "Optional",
    description:
      '열 번호(0부터)별 너비. 예: { 0: "42px", 1: "16%" }. 지정하지 않은 열은 defaultWidth 를 씁니다.',
  },
  {
    parameter: "defaultWidth",
    type: "string",
    required: "Optional",
    description: 'widths 에 없는 열의 너비. 기본값 "auto".',
  },
];

const tanstackProps: Parameter[] = [
  {
    parameter: "data / columns",
    type: "TData[] / ColumnDef<TData>[]",
    required: "Required",
    description:
      "표시할 데이터와 열 정의. 열 정의는 별도 파일로 분리하는 편이 관리하기 좋습니다.",
  },
  {
    parameter: "getSortedRowModel",
    type: "RowModel",
    required: "Optional",
    description:
      "정렬을 쓸 때 넘깁니다. 헤더에서 column.toggleSorting() 을 호출해 방향을 바꿉니다.",
  },
  {
    parameter: "getFilteredRowModel",
    type: "RowModel",
    required: "Optional",
    description:
      "필터를 쓸 때 넘깁니다. table.getColumn(id)?.setFilterValue() 로 특정 열만 걸러냅니다.",
  },
  {
    parameter: "getPaginationRowModel",
    type: "RowModel",
    required: "Optional",
    description: "페이지 단위로 나눠 보여줄 때 넘깁니다.",
  },
  {
    parameter: "state",
    type: "{ sorting, columnFilters, columnVisibility, rowSelection }",
    required: "Optional",
    description:
      "제어하려는 상태를 넘기고, 각 on*Change 콜백으로 갱신합니다. 상태는 호출부에서 관리합니다.",
  },
];

export default function TableDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Table</h3>
        <p className="mb-8 font-medium text-gray-700">
          데이터를 행과 열로 표현합니다. 표시만 필요하면 표 컴포넌트를 직접 조합하고,
          정렬·필터·행 선택이 필요하면 TanStack Table 과 함께 씁니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">구성 요소</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={structureProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">TableColGroup 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={colGroupProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">useReactTable 주요 옵션</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={tanstackProps} />
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
