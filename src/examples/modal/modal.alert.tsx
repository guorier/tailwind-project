"use client";

import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/Alert/Alert";

function Component() {
  const [alertOpen, setAlertOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <div className="flex flex-wrap gap-4">
      <Button onClick={() => setAlertOpen(true)}>Alert 열기</Button>
      <Button variant="outline" onClick={() => setConfirmOpen(true)}>
        Confirm 열기
      </Button>

      {/* Alert — 확인 버튼 하나 */}
      <Alert
        open={alertOpen}
        onOpenChange={setAlertOpen}
        icon="iconCompleted"
        poptitle="팝업타이틀"
        title="내용을 입력하세요"
        subtitle="서브메세지를 입력하세요"
        actions={[
          <Button
            key="ok"
            variant="outline"
            size="lg"
            className="flex-1"
            onClick={() => setAlertOpen(false)}
          >
            확인
          </Button>,
        ]}
      />

      {/* Confirm — 취소 + 확인 두 버튼 */}
      <Alert
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        icon="iconFail"
        poptitle="팝업타이틀"
        title="내용을 입력하세요"
        subtitle="서브메세지를 입력하세요"
        actions={[
          <Button
            key="cancel"
            variant="outline"
            size="lg"
            className="flex-1"
            onClick={() => setConfirmOpen(false)}
          >
            취소
          </Button>,
          <Button
            key="ok"
            size="lg"
            className="flex-1"
            onClick={() => setConfirmOpen(false)}
          >
            확인
          </Button>,
        ]}
      />
    </div>
  );
}

const code = `import { Alert } from "@/components/Alert/Alert";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const [open, setOpen] = useState(false);

// Alert — actions 에 버튼 하나
<Alert
  open={open}
  onOpenChange={setOpen}
  icon="iconCompleted"
  poptitle="팝업타이틀"
  title="내용을 입력하세요"
  subtitle="서브메세지를 입력하세요"
  actions={[
    <Button key="ok" variant="outline" size="lg" className="flex-1"
      onClick={() => setOpen(false)}>확인</Button>,
  ]}
/>

// Confirm — actions 에 버튼 두 개를 넣으면 확인/취소 형태가 됩니다.
<Alert
  open={open}
  onOpenChange={setOpen}
  icon="iconFail"
  poptitle="팝업타이틀"
  title="내용을 입력하세요"
  actions={[
    <Button key="cancel" variant="outline" size="lg" className="flex-1"
      onClick={() => setOpen(false)}>취소</Button>,
    <Button key="ok" size="lg" className="flex-1"
      onClick={() => setOpen(false)}>확인</Button>,
  ]}
/>`;

export const alert: CodeData = {
  title: "알림 · 확인 모달 (Alert)",
  description:
    "Alert 하나로 알림과 확인 모달을 모두 만듭니다. actions 배열에 버튼을 몇 개 넣느냐가 차이이며, 열림 상태는 open · onOpenChange 로 직접 관리합니다.",
  type: "single",
  code: [{ fileName: "Alert.tsx", language: "tsx", code }],
  component: <Component />,
};
