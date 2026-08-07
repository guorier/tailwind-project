"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Component() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <div className="flex flex-col gap-4 p-4 border border-slate-300">
            <div className="font-semibold text-base">Account</div>
            <div className="grid gap-3">
              <Label htmlFor="tabs-demo-name">Name</Label>
              <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
            </div>
            <Button>Save changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="password">
          <div className="flex flex-col gap-4 p-4 border border-slate-300">
            <div className="font-semibold text-base">Password</div>
            <div className="grid gap-3">
              <Label htmlFor="tabs-demo-current">Current password</Label>
              <Input id="tabs-demo-current" type="password" />
            </div>
            <Button>Save password</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

const code = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// value 로 트리거와 본문을 짝지웁니다. (Radix 기반)
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>

  <TabsContent value="account">
    <Label htmlFor="name">Name</Label>
    <Input id="name" defaultValue="Pedro Duarte" />
    <Button>Save changes</Button>
  </TabsContent>

  <TabsContent value="password">
    <Label htmlFor="current">Current password</Label>
    <Input id="current" type="password" />
    <Button>Save password</Button>
  </TabsContent>
</Tabs>`;

export const shadcn: CodeData = {
  title: "shadcn Tabs",
  description:
    "Radix 기반으로 value 문자열로 트리거와 본문을 연결합니다. 폼처럼 본문이 복잡할 때 조합하기 편합니다.",
  type: "single",
  code: [{ fileName: "TabsShadcn.tsx", language: "tsx", code }],
  component: <Component />,
};
