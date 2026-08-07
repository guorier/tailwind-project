"use client";

import React, { useEffect, useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Datepicker } from "@/components/DatePicker/DatePicker";
import { Dateinput } from "@/components/DatePicker/DateInput";
import { ColumnTitle, todayString } from "./parts";

function Component() {
  // 달력 방식
  const [from, setFrom] = useState<Date | undefined>(undefined);
  const [to, setTo] = useState<Date | undefined>(undefined);

  // input[type=date] 방식
  const [startText, setStartText] = useState("");
  const [endText, setEndText] = useState("");
  const today = todayString();

  // 시작일이 바뀌면 종료일을 비운다.
  useEffect(() => {
    if (startText) setEndText("");
  }, [startText]);

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col gap-4">
        <ColumnTitle>Datepicker</ColumnTitle>
        <div className="flex items-center gap-1">
          <Datepicker value={from} onChange={setFrom} placeholder="시작일" />
          <span>~</span>
          {/* minDate 로 시작일 이전을 막는다. */}
          <Datepicker
            value={to}
            onChange={setTo}
            placeholder="종료일"
            minDate={from}
            disabled={!from}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <ColumnTitle>Dateinput</ColumnTitle>
        <div className="flex items-center gap-1">
          <Dateinput
            value={startText}
            onChange={(e) => setStartText(e.target.value)}
            min={today}
          />
          <span>~</span>
          <Dateinput
            value={endText}
            onChange={(e) => setEndText(e.target.value)}
            min={startText || today}
            disabled={!startText}
          />
        </div>
      </div>
    </div>
  );
}

const code = `import { Datepicker } from "@/components/DatePicker/DatePicker";
import { Dateinput } from "@/components/DatePicker/DateInput";
import { useState, useEffect } from "react";

// 달력 방식 — minDate 로 시작일 이전 선택을 막습니다.
const [from, setFrom] = useState<Date | undefined>();
const [to, setTo] = useState<Date | undefined>();

<Datepicker value={from} onChange={setFrom} placeholder="시작일" />
<Datepicker
  value={to}
  onChange={setTo}
  placeholder="종료일"
  minDate={from}
  disabled={!from}
/>

// input 방식 — min 에 시작일 문자열을 넘깁니다.
const [start, setStart] = useState("");
const [end, setEnd] = useState("");
const today = new Date().toISOString().split("T")[0];

// 시작일이 바뀌면 종료일을 비웁니다.
useEffect(() => { if (start) setEnd(""); }, [start]);

<Dateinput value={start} onChange={(e) => setStart(e.target.value)} min={today} />
<Dateinput
  value={end}
  onChange={(e) => setEnd(e.target.value)}
  min={start || today}
  disabled={!start}
/>`;

export const range: CodeData = {
  title: "기간 선택 (시작일 ~ 종료일)",
  description:
    "종료일에 minDate(달력) 또는 min(input)으로 시작일을 넘겨 그 이전 날짜를 막습니다. 시작일이 바뀌면 종료일을 비워 잘못된 조합이 남지 않게 합니다.",
  type: "single",
  code: [{ fileName: "DateRange.tsx", language: "tsx", code }],
  component: <Component />,
};
