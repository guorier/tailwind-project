"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { closeAction } from "./parts";

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => toast("Event has been created", { action: closeAction })}
      >
        Default
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.success("The operation was completed successfully", {
            action: closeAction,
          })
        }
      >
        Success
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.info("Be at the area 10 minutes before the event time", {
            action: closeAction,
          })
        }
      >
        Info
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.warning(
            "You do not have the necessary permissions to access this feature.",
            { action: closeAction },
          )
        }
      >
        Warning
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.error("The action could not be completed. Please try again.", {
            action: closeAction,
          })
        }
      >
        Error
      </Button>
    </div>
  );
}

const code = `import { toast } from "sonner";
import { X } from "lucide-react";

// 닫기 버튼은 action 으로 넘깁니다.
const closeAction = {
  label: <X className="min-w-4 size-4" />,
  onClick: () => toast.dismiss(),
};

toast("Event has been created", { action: closeAction });
toast.success("The operation was completed successfully", { action: closeAction });
toast.info("Be at the area 10 minutes before the event time", { action: closeAction });
toast.warning("You do not have the necessary permissions.", { action: closeAction });
toast.error("The action could not be completed.", { action: closeAction });`;

export const types: CodeData = {
  title: "종류별 토스트",
  description:
    "sonner 의 toast 함수를 호출하면 됩니다. 종류마다 아이콘과 색이 다르게 적용되며, action 으로 닫기 버튼을 붙일 수 있습니다. 버튼을 눌러 확인하세요.",
  type: "single",
  code: [{ fileName: "Toast.tsx", language: "tsx", code }],
  component: <Component />,
};
