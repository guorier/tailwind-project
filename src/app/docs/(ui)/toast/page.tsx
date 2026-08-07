import { types, async } from "@/examples/toast";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [types, async];

const toastFns: Parameter[] = [
  {
    parameter: "toast(message, options?)",
    type: "(message: ReactNode, options?) => string | number",
    required: "Optional",
    description: "기본 토스트. 반환값은 토스트 id 로, 나중에 덮어쓸 때 씁니다.",
  },
  {
    parameter: "toast.success / info / warning / error",
    type: "(message, options?) => string | number",
    required: "Optional",
    description: "종류별 토스트. 아이콘과 색이 다르게 적용됩니다.",
  },
  {
    parameter: "toast.loading",
    type: "(message, options?) => string | number",
    required: "Optional",
    description:
      "로딩 토스트. 반환된 id 를 다른 toast 호출의 options.id 로 넘기면 같은 토스트를 교체합니다.",
  },
  {
    parameter: "toast.promise",
    type: "(fn, { loading, success, error }) => void",
    required: "Optional",
    description:
      "비동기 작업의 로딩·성공·실패 전환을 자동 처리합니다. success 는 결과값을 받는 함수로 넘길 수 있습니다.",
  },
  {
    parameter: "toast.dismiss",
    type: "(id?: string | number) => void",
    required: "Optional",
    description: "토스트를 닫습니다. id 를 생략하면 전체를 닫습니다.",
  },
];

const toastOptions: Parameter[] = [
  {
    parameter: "action",
    type: "{ label: ReactNode; onClick: () => void }",
    required: "Optional",
    description:
      "우측 버튼. 닫기 버튼을 만들 때는 onClick 에서 toast.dismiss() 를 호출합니다.",
  },
  {
    parameter: "description",
    type: "ReactNode",
    required: "Optional",
    description: "본문 아래 보조 문구.",
  },
  {
    parameter: "id",
    type: "string | number",
    required: "Optional",
    description:
      "기존 토스트를 교체할 때 넘깁니다. toast.loading 이 반환한 id 와 함께 씁니다.",
  },
  {
    parameter: "duration",
    type: "number",
    required: "Optional",
    description:
      "표시 시간(ms). 이 프로젝트는 layout.tsx 의 Toaster 에서 10000 으로 지정해 두었습니다.",
  },
];

export default function ToastDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Toast</h3>
        <p className="mb-8 font-medium text-gray-700">
          화면 한쪽에 잠깐 떠오르는 알림입니다. sonner 기반이며 컴포넌트를 배치하지 않고
          함수 호출로 띄웁니다. Toaster 는 이미 app/layout.tsx 에 마운트돼 있으므로 각
          페이지에서 추가 설정 없이 toast 만 import 하면 됩니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">호출 함수</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={toastFns} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">options 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={toastOptions} />
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
