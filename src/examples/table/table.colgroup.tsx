"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableColGroup } from "@/components/Table";
import { payments } from "./data";

const rows = payments.slice(0, 4);

function Component() {
  return (
    <div className="rounded-md border border-slate-300">
      <Table>
        <TableColGroup columnCount={4} widths={{ 0: "80px", 2: "15%", 3: "100px" }} />
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{row.id}</TableCell>
              <TableCell className="lowercase">{row.email}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell className="text-right">${row.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const code = `import { TableColGroup } from "@/components/Table";

// columnCount — 전체 열 개수
// widths — 열 번호(0부터)별 너비. 지정하지 않은 열은 defaultWidth("auto")
<Table>
  <TableColGroup
    columnCount={4}
    widths={{ 0: "80px", 2: "15%", 3: "100px" }}
  />
  <TableHeader>...</TableHeader>
  <TableBody>...</TableBody>
</Table>

// 주의: 내부에서 w-[\${...}] 형태로 클래스를 만들기 때문에
// Tailwind 가 빌드 시점에 스캔하지 못합니다.
// 이 프로젝트는 tailwind.config.ts 의 safelist 에
// w-[1px]~w-[1000px] 와 w-[1%]~w-[100%] 를 미리 등록해 두었으므로
// px 정수값과 % 값은 안전하게 동작합니다.`;

export const colgroup: CodeData = {
  title: "열 너비 고정 (TableColGroup)",
  description:
    "colgroup 으로 열 너비를 고정합니다. 지정하지 않은 열은 auto 로 남아 남은 공간을 나눠 가집니다. 동적 클래스를 쓰므로 safelist 에 등록된 px·% 값만 사용하세요.",
  type: "single",
  code: [{ fileName: "TableColGroup.tsx", language: "tsx", code }],
  component: <Component />,
};
