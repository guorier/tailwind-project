"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Button } from "@/components/Button/Button";
import Icons from "@/components/Icons";
import { ColumnTitle, heightKeys } from "./parts";

const iconWhite = "size-4 bg-white";
const iconDark = "size-4";

function Component() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <ColumnTitle>아이콘 + 텍스트</ColumnTitle>
        <div className="flex flex-wrap items-end gap-4">
          {heightKeys.map((height) => (
            <div key={height} className="flex flex-col items-center gap-2">
              <span className="text-xs text-gray-600">{height}</span>
              <Button height={height}>
                <Icons iName="iconSearch" className={iconWhite} />
                검색
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <ColumnTitle>아이콘만</ColumnTitle>
        <div className="flex flex-wrap items-end gap-4">
          <Button radius="round">
            <Icons iName="iconSearch" className={iconWhite} />
          </Button>
          <Button radius="pill">
            <Icons iName="iconSearch" className={iconWhite} />
          </Button>
          <Button styleType="outline" radius="round">
            <Icons iName="iconSearch" className={iconDark} />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <ColumnTitle>아이콘 위치</ColumnTitle>
        <div className="flex flex-wrap items-center gap-4">
          <Button>
            <Icons iName="iconSearch" className={iconWhite} />
            왼쪽 아이콘
          </Button>
          <Button>
            오른쪽 아이콘
            <Icons iName="iconSearch" className={iconWhite} />
          </Button>
        </div>
      </div>
    </div>
  );
}

const code = `import { Button } from "@/components/Button/Button";
import Icons from "@/components/Icons";

// children 순서로 아이콘 위치가 결정됩니다. (내부가 flex + gap-2)
// 왼쪽 아이콘
<Button>
  <Icons iName="iconSearch" className="size-4 bg-white" />
  검색
</Button>

// 오른쪽 아이콘
<Button>
  검색
  <Icons iName="iconSearch" className="size-4 bg-white" />
</Button>

// 아이콘만
<Button radius="round">
  <Icons iName="iconSearch" className="size-4 bg-white" />
</Button>

// outline 에서는 아이콘 색을 어둡게 (bg-white 제거)
<Button styleType="outline">
  <Icons iName="iconSearch" className="size-4" />
  검색
</Button>`;

export const icon: CodeData = {
  title: "아이콘 조합",
  description:
    "버튼 내부가 flex + gap-2 이므로 children 순서만 바꾸면 아이콘 위치가 결정됩니다. Icons 는 배경색으로 색을 내므로 채움 버튼에서는 bg-white, outline 에서는 생략하세요.",
  type: "single",
  code: [{ fileName: "ButtonIcon.tsx", language: "tsx", code }],
  component: <Component />,
};
