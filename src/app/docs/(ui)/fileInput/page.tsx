import { basic, drop } from "@/examples/fileInput";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, drop];

const variantProps: Parameter[] = [
  {
    parameter: "FileInput",
    type: "@/components/FileInput/FileInput",
    required: "Optional",
    description:
      "네이티브 파일 선택 버튼. input[type=file] 속성을 그대로 받습니다.",
  },
  {
    parameter: "FileDragAndDrop",
    type: "@/components/FileInput/FileDragAndDrop",
    required: "Optional",
    description:
      "끌어다 놓기를 지원하며 선택된 목록을 setFiles 로 부모에 올려보냅니다.",
  },
  {
    parameter: "FileDrop",
    type: "@/components/FileInput/FileDrop",
    required: "Optional",
    description:
      "목록 표시·개별 삭제·업로드 상태 UI 까지 내장된 형태. onFiles 로 File 배열만 받습니다.",
  },
];

const fileInputProps: Parameter[] = [
  {
    parameter: "sizing",
    type: '"sm" | "md" | "lg"',
    required: "Optional",
    description: '크기. 기본값 "md".',
  },
  {
    parameter: "color",
    type: '"gray" | "info" | "failure" | "warning" | "success"',
    required: "Optional",
    description: '색상. 기본값 "gray".',
  },
  {
    parameter: "maxFileCount",
    type: "number",
    required: "Optional",
    description: "첨부 가능한 최대 파일 개수.",
  },
  {
    parameter: "multiple / accept / disabled",
    type: "input[type=file] 속성",
    required: "Optional",
    description:
      "네이티브 속성이 그대로 전달됩니다. accept 로 확장자를 제한할 수 있습니다.",
  },
  {
    parameter: "theme",
    type: "DeepPartial<FileInputTheme>",
    required: "Optional",
    description: "기본 테마에 병합할 부분 테마.",
  },
];

const callbackProps: Parameter[] = [
  {
    parameter: "setFiles",
    type: "Dispatch<SetStateAction<IFileTypes[]>>",
    required: "Optional",
    description:
      "FileDragAndDrop 전용. 선택된 파일 목록을 부모 상태로 올려보냅니다.",
  },
  {
    parameter: "onFiles",
    type: "(files: File[]) => void",
    required: "Optional",
    description:
      "FileDrop 전용. 추가된 File 객체 배열을 받아 업로드 처리에 사용합니다.",
  },
];

export default function FileInputDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">File Upload</h3>
        <p className="mb-8 font-medium text-gray-700">
          파일 첨부 UI 입니다. 단순 선택 버튼부터 목록 관리까지 포함한 형태까지 세 가지를
          제공하며, 필요한 수준에 맞춰 고르면 됩니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">종류</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={variantProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">FileInput / FileDragAndDrop 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={fileInputProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">콜백</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={callbackProps} />
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
