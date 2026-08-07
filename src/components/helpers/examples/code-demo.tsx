"use client"

import { useState } from "react"
import { CodeHighlight, type Language } from "./code-highlight"

interface CodeItem {
  fileName: string
  language: Language
  code: string
}

type Code = CodeItem | CodeItem[]

interface CodeData {
  type: "single"
  code: Code
  component: React.ReactNode
  title?: string
  description?: string
}

export function CodeDemo({ data }: { data: CodeData }) {
  const items = Array.isArray(data.code) ? data.code : [data.code]
  const current = items[0]

  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(current.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="mt-8 space-y-6">
      {/* SECTION HEADING */}
      {data.title && (
        <div className="space-y-1">
          <h5 className="font-bold">{data.title}</h5>
          {data.description && (
            <p className="text-sm text-gray-600">{data.description}</p>
          )}
        </div>
      )}

      {/* PREVIEW */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        {data.component}
      </div>

      {/* CODE BLOCK + COPY BUTTON */}
      <div className="relative">
        <button
          type="button"
          onClick={handleCopy}
          className="absolute right-3 top-3 rounded-md border border-gray-500/40 bg-black/40 px-3 py-1 text-xs text-gray-100 backdrop-blur hover:bg-black/60"
        >
          {copied ? "Copied" : "Copy"}
        </button>

        <CodeHighlight
          code={current.code}
          language={current.language}
        />
      </div>
    </div>
  )
}

export type { CodeData }
