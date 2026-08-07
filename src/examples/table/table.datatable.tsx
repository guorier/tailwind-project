"use client";

import * as React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableColGroup } from "@/components/Table";
import { ChevronDown } from "lucide-react";
import { payments } from "./data";
import { columns } from "./columns";

function Component() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: payments,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: { sorting, columnFilters, columnVisibility, rowSelection },
  });

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Filter..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm h-10 mr-auto"
        />
        <div className="text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Columns <ChevronDown className="ml-2 size-4 min-w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-col gap-4 h-[600px] rounded-md border border-slate-300 overflow-auto">
        <Table>
          <TableColGroup
            columnCount={6}
            widths={{ 0: "42px", 1: "16%", 3: "10%", 4: "10%", 5: "50px" }}
          />
          <TableHeader className="sticky top-0 bg-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const code = `import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";

// 열 정의는 별도 파일로 분리하는 편이 관리하기 좋습니다.
// header 에 Button + column.toggleSorting 을 넣으면 클릭 정렬이 됩니다.
const [sorting, setSorting] = useState([]);
const [columnFilters, setColumnFilters] = useState([]);
const [columnVisibility, setColumnVisibility] = useState({});
const [rowSelection, setRowSelection] = useState({});

const table = useReactTable({
  data,
  columns,
  onSortingChange: setSorting,
  onColumnFiltersChange: setColumnFilters,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),      // 정렬
  getFilteredRowModel: getFilteredRowModel(),  // 필터
  onColumnVisibilityChange: setColumnVisibility,
  onRowSelectionChange: setRowSelection,
  state: { sorting, columnFilters, columnVisibility, rowSelection },
});

// 특정 열만 필터링
<Input
  value={table.getColumn("email")?.getFilterValue() ?? ""}
  onChange={(e) => table.getColumn("email")?.setFilterValue(e.target.value)}
/>

// 헤더 고정 — 스크롤 컨테이너 + sticky
<div className="h-[600px] overflow-auto">
  <Table>
    <TableHeader className="sticky top-0 bg-white">...</TableHeader>
  </Table>
</div>`;

export const dataTable: CodeData = {
  title: "데이터 테이블 (정렬·필터·열 표시)",
  description:
    "TanStack Table 로 정렬, 특정 열 필터, 열 표시/숨김, 행 선택을 구현합니다. 헤더 고정은 스크롤 컨테이너에 sticky 를 조합해 처리합니다.",
  type: "single",
  code: [{ fileName: "DataTable.tsx", language: "tsx", code }],
  component: <Component />,
};
