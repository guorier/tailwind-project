"use client";

import React from "react";
import { X } from "lucide-react";
import { toast } from "sonner";

/** 토스트에 붙이는 닫기 버튼. sonner 의 action 형식을 따른다. */
export const closeAction = {
  label: <X className="min-w-4 size-4" />,
  onClick: () => toast.dismiss(),
};
