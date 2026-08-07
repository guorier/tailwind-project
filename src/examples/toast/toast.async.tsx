"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { closeAction } from "./parts";

/** 예제용 가짜 비동기 작업. */
const fakeRequest = () =>
  new Promise<{ name: string }>((resolve) =>
    setTimeout(() => resolve({ name: "Event" }), 2000),
  );

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(fakeRequest, {
            loading: "Loading...",
            success: (data) => `${data.name} has been created`,
            error: "Error",
          })
        }
      >
        toast.promise
      </Button>

      <Button
        variant="outline"
        onClick={async () => {
          const id = toast.loading("Loading...");
          try {
            const data = await fakeRequest();
            toast.success(`${data.name} has been created`, { id, action: closeAction });
          } catch {
            toast.error("Error", { id, action: closeAction });
          }
        }}
      >
        toast.loading + id
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: closeAction,
          })
        }
      >
        설명 추가
      </Button>
    </div>
  );
}

const code = `import { toast } from "sonner";

// 1) toast.promise — 가장 간단한 방법.
// 로딩 → 성공/실패 전환을 알아서 처리합니다.
toast.promise(fetchData, {
  loading: "Loading...",
  success: (data) => \`\${data.name} has been created\`,
  error: "Error",
});

// 2) toast.loading + id — 닫기 버튼을 붙이거나
// 중간에 더 세밀하게 제어해야 할 때 씁니다.
// 같은 id 로 덮어쓰면 기존 토스트가 교체됩니다.
const id = toast.loading("Loading...");
try {
  const data = await fetchData();
  toast.success(\`\${data.name} has been created\`, { id, action: closeAction });
} catch {
  toast.error("Error", { id, action: closeAction });
}

// description — 본문 아래 보조 문구
toast("Event has been created", {
  description: "Sunday, December 03, 2023 at 9:00 AM",
  action: closeAction,
});`;

export const async: CodeData = {
  title: "비동기 작업 · 설명 추가",
  description:
    "toast.promise 는 로딩·성공·실패 전환을 알아서 처리합니다. 닫기 버튼을 붙이거나 더 세밀한 제어가 필요하면 toast.loading 으로 id 를 받아 같은 id 에 덮어쓰세요.",
  type: "single",
  code: [{ fileName: "ToastAsync.tsx", language: "tsx", code }],
  component: <Component />,
};
