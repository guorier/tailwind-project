'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface Parameter {
  parameter: string
  type: string
  required: "Required" | "Optional"
  description: string
}

export default function ObjectParameter({ parameters }: { parameters: Parameter[] }) {
  return (
    <div className="w-full min-w-0 overflow-x-auto">
      <Table className="min-w-[640px]">
        <TableHeader>
          <TableRow>
            <TableHead>parameter</TableHead>
            <TableHead>type</TableHead>
            <TableHead>required</TableHead>
            <TableHead>description</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {parameters.map((parameter) => (
            <TableRow key={parameter.parameter}>
              <TableCell className="font-medium">
                {parameter.parameter}
              </TableCell>
              <TableCell>{parameter.type}</TableCell>
              <TableCell>{parameter.required}</TableCell>
              <TableCell>{parameter.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
