import { basic } from "@/examples/form";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic];

const structureProps: Parameter[] = [
  {
    parameter: "Form",
    type: "{...form}",
    required: "Required",
    description:
      "react-hook-form 의 FormProvider 입니다. useForm 이 돌려준 객체를 그대로 펼쳐 넘깁니다.",
  },
  {
    parameter: "FormField",
    type: "control, name, render",
    required: "Required",
    description:
      "입력 하나를 감쌉니다. render 가 받는 field 를 실제 입력에 펼쳐 넘기면 값과 변경 처리가 연결됩니다.",
  },
  {
    parameter: "FormItem",
    type: "children: ReactNode",
    required: "Required",
    description:
      "라벨·입력·설명·오류를 한 덩어리로 묶고 이들을 이어 줄 공통 id 를 만듭니다.",
  },
  {
    parameter: "FormLabel",
    type: "children: ReactNode",
    required: "Optional",
    description:
      "입력과 자동으로 연결되며, 검증 오류가 있으면 붉게 변합니다.",
  },
  {
    parameter: "FormControl",
    type: "children: ReactElement",
    required: "Required",
    description:
      "실제 입력 요소를 감싸 id 와 aria 속성을 물려줍니다. 자식은 하나만 넣습니다.",
  },
  {
    parameter: "FormDescription",
    type: "children: ReactNode",
    required: "Optional",
    description: "입력 아래 보조 설명입니다.",
  },
  {
    parameter: "FormMessage",
    type: "children?: ReactNode",
    required: "Optional",
    description:
      "검증 오류 메시지입니다. 오류가 없으면 아무것도 렌더하지 않으므로 조건문 없이 그냥 두면 됩니다.",
  },
];

export default function FormDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Form</h3>
        <p className="mb-8 font-medium text-gray-700">
          react-hook-form 을 감싸 라벨·설명·오류 메시지를 자동으로 연결하는
          래퍼입니다. id 와 aria 속성이 알아서 이어지므로 htmlFor 나
          aria-describedby 를 직접 쓸 필요가 없습니다. 검증은 zod 로 합니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">구성 요소</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={structureProps} />
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
