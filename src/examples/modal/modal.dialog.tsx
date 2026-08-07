"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { DialogModal } from "@/components/Modal/Dialog";

function Component() {
  return (
    <div className="max-w-xs">
      <DialogModal />
    </div>
  );
}

const code = `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// DialogTrigger 에 asChild 를 주면 자식 버튼이 그대로 트리거가 됩니다.
// 열림 상태는 Dialog 내부에서 관리하므로 useState 가 필요하지 않습니다.
<Dialog>
  <DialogTrigger asChild>
    <Button>OPEN MODAL</Button>
  </DialogTrigger>

  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Modal</DialogTitle>
      <DialogDescription>
        Make changes to your profile here.
      </DialogDescription>
    </DialogHeader>

    <div className="grid gap-3">
      <Label htmlFor="name">Name</Label>
      <Input id="name" name="name" defaultValue="Pedro Duarte" />
    </div>

    <DialogFooter>
      {/* DialogClose — 별도 핸들러 없이 닫기 */}
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button type="submit">Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`;

export const dialog: CodeData = {
  title: "폼 모달 (Dialog)",
  description:
    "입력 폼을 담는 일반 모달입니다. DialogTrigger 가 열기를, DialogClose 가 닫기를 담당하므로 열림 상태를 직접 관리할 필요가 없습니다.",
  type: "single",
  code: [{ fileName: "Dialog.tsx", language: "tsx", code }],
  component: <Component />,
};
