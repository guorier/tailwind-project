"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { CodeData } from "@/components/helpers/examples/code-demo";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  username: z
    .string()
    .min(2, { message: "2자 이상 입력해 주세요." })
    .max(20, { message: "20자를 넘을 수 없습니다." }),
});

function Component() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { username: "" },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => undefined)}
        className="max-w-100 space-y-6"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>사용자 이름</FormLabel>
              <FormControl>
                <Input placeholder="이름을 입력하세요" {...field} />
              </FormControl>
              <FormDescription>다른 사용자에게 표시되는 이름입니다.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">저장</Button>
      </form>
    </Form>
  );
}

const code = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form, FormField, FormItem, FormLabel,
  FormControl, FormDescription, FormMessage,
} from "@/components/ui/form";

const schema = z.object({
  username: z.string().min(2, { message: "2자 이상 입력해 주세요." }),
});

const form = useForm({
  resolver: zodResolver(schema),
  defaultValues: { username: "" },
});

// id 와 aria 속성이 자동으로 연결되므로
// htmlFor 나 aria-describedby 를 직접 쓸 필요가 없습니다.
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>사용자 이름</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>표시되는 이름입니다.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit">저장</Button>
  </form>
</Form>`;

export const basic: CodeData = {
  title: "기본 사용 (zod 검증)",
  description:
    "react-hook-form 과 zod 를 연결한 폼입니다. 아무것도 입력하지 않고 저장을 누르면 FormMessage 에 오류가 표시되고 라벨이 붉게 변합니다. id·aria 속성은 자동으로 이어집니다.",
  type: "single",
  code: [{ fileName: "Form.tsx", language: "tsx", code }],
  component: <Component />,
};
