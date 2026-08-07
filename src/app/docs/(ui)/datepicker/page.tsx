import { basic, range } from "@/examples/datepicker";
import DocPage from "@/components/DocPage";
import ObjectParameter, { Parameter } from "../ObjectParameter";

/** 문서에 노출할 예제 순서. */
const examples = [basic, range];

const datepickerProps: Parameter[] = [
  {
    parameter: "value",
    type: "Date | undefined",
    required: "Optional",
    description: "선택된 날짜. 문자열이 아니라 Date 객체입니다.",
  },
  {
    parameter: "onChange",
    type: "(date: Date | undefined) => void",
    required: "Optional",
    description: "날짜를 선택하면 Date 객체를 넘겨 호출됩니다.",
  },
  {
    parameter: "minDate / maxDate",
    type: "Date",
    required: "Optional",
    description:
      "선택 가능한 범위. 기간 선택에서 종료일에 minDate={시작일} 을 넘겨 사용합니다.",
  },
  {
    parameter: "placeholder",
    type: "string",
    required: "Optional",
    description: '입력 안내 문구. 기본값 "YYYY-MM-DD".',
  },
  {
    parameter: "disabled",
    type: "boolean",
    required: "Optional",
    description: "비활성화 여부. 기본값 false.",
  },
  {
    parameter: "className",
    type: "string",
    required: "Optional",
    description: "외부 스타일 적용.",
  },
];

const dateinputProps: Parameter[] = [
  {
    parameter: "value",
    type: "string",
    required: "Required",
    description: '"YYYY-MM-DD" 형식 문자열.',
  },
  {
    parameter: "onChange",
    type: "(event: ChangeEvent<HTMLInputElement>) => void",
    required: "Required",
    description:
      "Datepicker 와 달리 이벤트를 받습니다. event.target.value 로 값을 꺼냅니다.",
  },
  {
    parameter: "min",
    type: "string",
    required: "Required",
    description:
      '선택 가능한 최소 날짜("YYYY-MM-DD"). 제한이 없으면 오늘 날짜나 빈 문자열을 넘깁니다.',
  },
  {
    parameter: "max",
    type: "string",
    required: "Optional",
    description: "선택 가능한 최대 날짜. 네이티브 input 속성이 그대로 전달됩니다.",
  },
  {
    parameter: "borderRadius",
    type: "테마 border_radius 키",
    required: "Optional",
    description: '모서리 형태. 기본값 "default".',
  },
  {
    parameter: "width",
    type: "테마 너비 키",
    required: "Optional",
    description: '너비. 기본값 "42".',
  },
  {
    parameter: "disabled",
    type: "boolean",
    required: "Optional",
    description: "비활성화 여부.",
  },
];

export default function DatepickerDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-2 font-bold">Datepicker</h3>
        <p className="mb-8 font-medium text-gray-700">
          날짜 선택 UI 입니다. 달력 팝오버 방식의 Datepicker 와 브라우저 기본
          input[type=date] 를 감싼 Dateinput 두 가지를 제공합니다. 값의 타입이 서로 달라
          섞어 쓸 때 주의가 필요합니다.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Datepicker 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={datepickerProps} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">Dateinput 속성</h5>
          <div className="w-full border-t border-solid border-gray-300" />
        </div>
        <div className="mb-10">
          <ObjectParameter parameters={dateinputProps} />
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
