"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Tabs, TabItem } from "@/components/Tabs/items";

const styles = ["default", "underline", "pills", "fullWidth"] as const;

function Component() {
  return (
    <div className="flex flex-col gap-8">
      {styles.map((style) => (
        <div key={style} className="flex flex-col gap-2">
          <span className="text-sm text-gray-600">style=&quot;{style}&quot;</span>
          <Tabs style={style}>
            <TabItem title="프로필" active>
              <div className="p-4">프로필 탭 내용입니다.</div>
            </TabItem>
            <TabItem title="설정">
              <div className="p-4">설정 탭 내용입니다.</div>
            </TabItem>
            <TabItem title="비활성" disabled>
              <div className="p-4">선택할 수 없습니다.</div>
            </TabItem>
          </Tabs>
        </div>
      ))}
    </div>
  );
}

const code = `import { Tabs, TabItem } from "@/components/Tabs/items";

// 자식으로 TabItem 을 나열하는 방식입니다.
// active — 처음 열려 있을 탭
// style — "default" | "underline" | "pills" | "fullWidth" (기본값 "underline")
<Tabs style="underline" onActiveTabChange={(i) => console.log(i)}>
  <TabItem title="프로필" active>
    <div>프로필 탭 내용</div>
  </TabItem>
  <TabItem title="설정">
    <div>설정 탭 내용</div>
  </TabItem>
  <TabItem title="비활성" disabled>
    <div>선택할 수 없습니다</div>
  </TabItem>
</Tabs>`;

export const composed: CodeData = {
  title: "Tabs (조합 방식)",
  description:
    "TabItem 을 자식으로 나열합니다. 좌우 방향키로 탭을 이동할 수 있고, onActiveTabChange 로 활성 탭 변경을 감지합니다. ref 로 setActiveTab 을 호출해 외부에서 탭을 바꿀 수도 있습니다.",
  type: "single",
  code: [{ fileName: "Tabs.tsx", language: "tsx", code }],
  component: <Component />,
};
