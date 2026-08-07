"use client";

import dynamic from "next/dynamic";
import { basic } from "@/examples/foldertree";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic];

const folderTreeProps: Parameter[] = [
  {
    parameter: "folders",
    type: "{ id: string; name: string; children?: Folder[] }[]",
    required: "Required",
    description:
      "폴더 구조. children 으로 중첩하며 깊이 제한은 없습니다. id 는 트리 전체에서 고유해야 합니다.",
  },
  {
    parameter: "checked",
    type: "Record<string, boolean>",
    required: "Required",
    description: "id 별 체크 상태. 호출부에서 관리합니다.",
  },
  {
    parameter: "setChecked",
    type: "Dispatch<SetStateAction<Record<string, boolean>>>",
    required: "Required",
    description:
      "체크 상태 갱신 함수. 부모를 체크하면 하위 항목까지 함께 반영됩니다.",
  },
];

export default function FolderTreeDoc() {
  const DocPage = dynamic(() => import("@/components/DocPage"), {
    ssr: false,
  });

  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">FolderTree</h3>
        <p className="mb-8 font-medium text-gray-700">
          계층 구조를 접고 펼치며 항목을 선택하는 트리입니다. 펼침 상태는 컴포넌트가
          내부에서 관리하고 처음에는 모두 펼쳐진 상태로 시작합니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">FolderTree 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={folderTreeProps} />
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
