"use client";

import React from "react";
import { ChevronRight, File, Folder } from "lucide-react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

type Node = { name: string; children?: Node[] };

const fileTree: Node[] = [
  {
    name: "src",
    children: [
      {
        name: "components",
        children: [{ name: "button.tsx" }, { name: "card.tsx" }],
      },
      { name: "lib", children: [{ name: "utils.ts" }] },
      { name: "page.tsx" },
    ],
  },
];

/** 폴더면 Collapsible 로 감싸고, 파일이면 한 줄로 렌더한다. */
function TreeNode({ node }: { node: Node }) {
  if (!node.children) {
    return (
      <div className="flex items-center gap-2 py-1 pl-6 text-sm">
        <File className="size-4 text-natural-400" />
        {node.name}
      </div>
    );
  }

  return (
    <Collapsible defaultOpen className="select-none">
      <CollapsibleTrigger className="group flex w-full items-center gap-2 rounded-md py-1 text-sm hover:bg-silver-100">
        <ChevronRight className="size-4 text-natural-400 transition-transform group-data-[state=open]:rotate-90" />
        <Folder className="size-4 text-natural-400" />
        {node.name}
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4">
        {node.children.map((child) => (
          <TreeNode key={child.name} node={child} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

function Component() {
  return (
    <div className="max-w-100 rounded-md border border-silver-200 p-3">
      {fileTree.map((node) => (
        <TreeNode key={node.name} node={node} />
      ))}
    </div>
  );
}

const code = `import {
  Collapsible, CollapsibleTrigger, CollapsibleContent,
} from "@/components/ui/collapsible";

// Collapsible 을 중첩하면 파일 트리가 됩니다.
// 화살표는 data-state 로 회전시킵니다.
function TreeNode({ node }) {
  if (!node.children) {
    return <div className="pl-6">{node.name}</div>;
  }

  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger className="group flex items-center gap-2">
        <ChevronRight className="size-4 transition-transform group-data-[state=open]:rotate-90" />
        <Folder className="size-4" />
        {node.name}
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4">
        {node.children.map((child) => (
          <TreeNode key={child.name} node={child} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}`;

export const tree: CodeData = {
  title: "파일 트리 (중첩)",
  description:
    "Collapsible 을 중첩해 계층 구조를 만듭니다. 화살표는 group-data-[state=open] 으로 회전시켜 열림 상태를 알립니다. 폴더 구조 전용 컴포넌트가 필요하면 Tree 를 보세요.",
  type: "single",
  code: [{ fileName: "CollapsibleTree.tsx", language: "tsx", code }],
  component: <Component />,
};
