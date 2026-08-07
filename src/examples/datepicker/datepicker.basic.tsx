"use client";

import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Datepicker } from "@/components/DatePicker/DatePicker";
import { Dateinput } from "@/components/DatePicker/DateInput";
import { CompareGrid, StateLabels, ColumnTitle, todayString } from "./parts";

function Component() {
  const [picked, setPicked] = useState<Date | undefined>(undefined);
  const [pickedFocus, setPickedFocus] = useState<Date | undefined>(undefined);
  const [text, setText] = useState("");
  const today = todayString();

  return (
    <CompareGrid>
      <StateLabels items={["Default", "Disabled", "Focus"]} />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center gap-4">
          <ColumnTitle>Datepicker (달력)</ColumnTitle>
          <Datepicker value={picked} onChange={setPicked} placeholder="YYYY-MM-DD" />
          <Datepicker value={undefined} onChange={() => {}} placeholder="YYYY-MM-DD" disabled />
          <Datepicker
            value={pickedFocus}
            onChange={setPickedFocus}
            placeholder="YYYY-MM-DD"
            className="border-natural-900"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <ColumnTitle>Dateinput (type=date)</ColumnTitle>
          <Dateinput value={text} onChange={(e) => setText(e.target.value)} min={today} />
          <Dateinput value={text} onChange={(e) => setText(e.target.value)} min={today} disabled />
          <Dateinput
            value={text}
            onChange={(e) => setText(e.target.value)}
            min={today}
            className="border-natural-900"
          />
        </div>
      </div>
    </CompareGrid>
  );
}

const code = `import { Datepicker } from "@/components/DatePicker/DatePicker";
import { Dateinput } from "@/components/DatePicker/DateInput";
import { useState } from "react";

// Datepicker — 달력 팝오버 방식. value 가 Date 객체입니다.
const [date, setDate] = useState<Date | undefined>(undefined);

<Datepicker value={date} onChange={setDate} placeholder="YYYY-MM-DD" />
<Datepicker value={date} onChange={setDate} disabled />

// Dateinput — 브라우저 기본 input[type=date]. value 가 "YYYY-MM-DD" 문자열이고
// onChange 가 이벤트를 받습니다.
const [text, setText] = useState("");
const today = new Date().toISOString().split("T")[0];

<Dateinput value={text} onChange={(e) => setText(e.target.value)} min={today} />`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "두 방식의 값 타입이 다릅니다. Datepicker 는 Date 객체와 onChange(date) 를, Dateinput 은 YYYY-MM-DD 문자열과 onChange(event) 를 사용합니다.",
  type: "single",
  code: [{ fileName: "Datepicker.tsx", language: "tsx", code }],
  component: <Component />,
};
