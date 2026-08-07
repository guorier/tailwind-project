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
import { Badge } from "@/components/ui/badge";
import { payments } from "./data";

const rows = payments.slice(0, 5);

function Component() {
  return (
    <div className="rounded-md border border-slate-300">
      <Table>
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
              <TableCell>
                <Badge variant={row.status === "failed" ? "destructive" : "default"}>
                  {row.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right font-medium">
                ${row.amount.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const code = `import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

// 정렬·필터가 필요 없는 단순 표는 데이터를 직접 순회하면 됩니다.
<div className="rounded-md border border-slate-300">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>Email</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id}>
          <TableCell className="font-medium">{row.id}</TableCell>
          <TableCell className="lowercase">{row.email}</TableCell>
          <TableCell className="text-right">\${row.amount.toFixed(2)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>`;

export const basic: CodeData = {
  title: "기본 표",
  description:
    "정렬이나 필터가 필요 없다면 TanStack 없이 데이터를 직접 순회하는 게 가장 간단합니다. 셀 정렬은 className 으로 지정합니다.",
  type: "single",
  code: [{ fileName: "Table.tsx", language: "tsx", code }],
  component: <Component />,
};
