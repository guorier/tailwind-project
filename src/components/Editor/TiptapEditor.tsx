"use client";

import type {
  ChangeEvent,
  ClipboardEvent,
  ComponentType,
  DragEvent,
  KeyboardEvent,
  ReactNode,
} from "react";
import { useEffect, useRef, useState } from "react";
import type { Editor } from "@tiptap/core";
import { FindAndReplace } from "@tiptap/extension-find-and-replace";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import Placeholder from "@tiptap/extension-placeholder";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import { TableKit } from "@tiptap/extension-table";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import StarterKit from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/react";
import { createPortal } from "react-dom";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  ArrowDown,
  ArrowUp,
  Bold,
  Braces,
  Check,
  ChevronDown,
  Code2,
  Highlighter,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  ImagePlus,
  Italic,
  Link2,
  List,
  ListChecks,
  ListOrdered,
  Moon,
  Redo2,
  Search,
  Strikethrough,
  Subscript as SubscriptIcon,
  Superscript as SuperscriptIcon,
  Sun,
  Table2,
  Underline,
  Undo2,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const defaultContent = "<p></p>";

const highlightColors = [
  { label: "노랑", value: "yellow", className: "bg-yellow-300" },
  { label: "초록", value: "lightgreen", className: "bg-green-300" },
  { label: "파랑", value: "lightskyblue", className: "bg-blue-300" },
  { label: "분홍", value: "pink", className: "bg-pink-300" },
];

type ToolbarButtonProps = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  disabled?: boolean;
  text?: string;
  onClick: () => void;
};

function ToolbarButton({
  icon: Icon,
  label,
  active = false,
  disabled = false,
  text,
  onClick,
}: ToolbarButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size={text ? "sm" : "icon"}
      className={cn(
        "h-8 min-w-8 rounded-xl px-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white",
        active &&
          "bg-secondary/15 text-secondary hover:bg-secondary/20 hover:text-secondary",
        !text && "px-0",
      )}
      aria-label={label}
      aria-pressed={active}
      title={label}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon className="h-4 w-4 shrink-0" />
      {text && <span>{text}</span>}
    </Button>
  );
}

function ToolbarGroup({ children }: { children: ReactNode }) {
  return (
    <div className="flex shrink-0 items-center gap-0.5" role="group">
      {children}
    </div>
  );
}

function ToolbarSeparator() {
  return (
    <span
      className="mx-1 h-5 w-px shrink-0 bg-slate-200 dark:bg-slate-700"
      aria-hidden="true"
    />
  );
}

type ToolbarMenuOption = {
  value: string;
  label: string;
  icon?: ComponentType<{ className?: string }>;
};

function ToolbarMenu({
  value,
  label,
  onChange,
  options,
}: {
  value: string;
  label: string;
  onChange: (value: string) => void;
  options: ToolbarMenuOption[];
}) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const selectedOption =
    options.find((option) => option.value === value) ?? options[0];
  const SelectedIcon = selectedOption?.icon;

  useEffect(() => {
    if (!isOpen) return;

    const updatePosition = () => {
      const rect = triggerRef.current?.getBoundingClientRect();
      if (!rect) return;

      setMenuPosition({
        top: rect.bottom + 4,
        left: Math.min(rect.left, window.innerWidth - 180),
      });
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!triggerRef.current?.contains(target) && !panelRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    updatePosition();
    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isOpen]);

  return (
    <div className="relative shrink-0">
      <Button
        ref={triggerRef}
        type="button"
        variant="ghost"
        size="sm"
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="h-8 gap-1 rounded-xl px-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
        onClick={() => setIsOpen((open) => !open)}
      >
        {SelectedIcon && <SelectedIcon className="h-4 w-4 text-slate-500" />}
        <span>{selectedOption?.label}</span>
        <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
      </Button>
      {isOpen && typeof document !== "undefined" && createPortal(
        <div
          ref={panelRef}
          className="fixed z-[100] max-h-[min(20rem,calc(100vh-1rem))] min-w-40 overflow-y-auto rounded-xl border border-slate-200 bg-white p-1 shadow-xl dark:border-slate-700 dark:bg-slate-900"
          style={{ top: menuPosition.top, left: Math.max(8, menuPosition.left) }}
          role="menu"
          aria-label={label}
        >
          {options.map((option) => {
            const OptionIcon = option.icon;
            const isSelected = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                role="menuitem"
                className={cn(
                  "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
                  isSelected &&
                    "bg-slate-100 font-semibold text-slate-900 dark:bg-slate-800 dark:text-white",
                )}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {OptionIcon && <OptionIcon className="h-4 w-4 shrink-0" />}
                <span>{option.label}</span>
                {isSelected && <Check className="ml-auto h-4 w-4" />}
              </button>
            );
          })}
        </div>,
        document.body,
      )}
    </div>
  );
}

function SearchPanel({
  editor,
  onClose,
}: {
  editor: Editor;
  onClose: () => void;
}) {
  const storage = editor.storage.findAndReplace;
  const [searchTerm, setSearchTerm] = useState(storage.searchTerm ?? "");
  const [replaceTerm, setReplaceTerm] = useState(storage.replaceTerm ?? "");
  const resultCount = storage.results?.length ?? 0;
  const currentResult =
    storage.currentIndex === null ? 0 : storage.currentIndex + 1;

  const updateSearch = (value: string) => {
    setSearchTerm(value);
    editor.commands.setSearchTerm(value);
  };

  const updateReplace = (value: string) => {
    setReplaceTerm(value);
    editor.commands.setReplaceTerm(value);
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    action: () => void,
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      action();
    }
  };

  return (
    <div
      className="border-b border-slate-200 bg-slate-50 px-3 py-3 dark:border-slate-700 dark:bg-slate-900/95"
      role="search"
    >
      <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-2">
        <div className="relative min-w-[180px] flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            autoFocus
            value={searchTerm}
            onChange={(event) => updateSearch(event.target.value)}
            onKeyDown={(event) =>
              handleKeyDown(event, () => editor.commands.goToNextResult())
            }
            placeholder="검색"
            aria-label="검색"
            className="h-9 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none ring-secondary/20 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
          />
        </div>
        <div className="relative min-w-[180px] flex-1">
          <input
            value={replaceTerm}
            onChange={(event) => updateReplace(event.target.value)}
            onKeyDown={(event) =>
              handleKeyDown(event, () => editor.commands.replace())
            }
            placeholder="바꾸기"
            aria-label="바꾸기"
            className="h-9 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none ring-secondary/20 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
          />
        </div>
        <span
          className="min-w-12 text-center text-xs tabular-nums text-slate-500"
          aria-live="polite"
        >
          {currentResult} / {resultCount}
        </span>
        <ToolbarButton
          icon={ArrowUp}
          label="이전 검색 결과"
          disabled={resultCount === 0}
          onClick={() => editor.commands.goToPreviousResult()}
        />
        <ToolbarButton
          icon={ArrowDown}
          label="다음 검색 결과"
          disabled={resultCount === 0}
          onClick={() => editor.commands.goToNextResult()}
        />
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-8 rounded-xl px-3 text-xs"
          disabled={resultCount === 0 || replaceTerm.length === 0}
          onClick={() => editor.commands.replace()}
        >
          바꾸기
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-8 rounded-xl px-3 text-xs"
          disabled={resultCount === 0 || replaceTerm.length === 0}
          onClick={() => editor.commands.replaceAll()}
        >
          모두 바꾸기
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-xl"
          aria-label="검색 닫기"
          title="검색 닫기"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="mx-auto mt-2 flex max-w-3xl items-center justify-end gap-3 text-xs text-slate-500">
        <button
          type="button"
          className={cn(
            "rounded-md px-2 py-1 transition hover:bg-slate-200 dark:hover:bg-slate-800",
            storage.caseSensitive &&
              "bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-white",
          )}
          aria-pressed={storage.caseSensitive}
          onClick={() =>
            editor.commands.setCaseSensitive(!storage.caseSensitive)
          }
        >
          대소문자 구분
        </button>
        <button
          type="button"
          className={cn(
            "rounded-md px-2 py-1 transition hover:bg-slate-200 dark:hover:bg-slate-800",
            storage.wholeWord &&
              "bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-white",
          )}
          aria-pressed={storage.wholeWord}
          onClick={() => editor.commands.setWholeWord(!storage.wholeWord)}
        >
          단어 단위
        </button>
        <button
          type="button"
          className={cn(
            "rounded-md px-2 py-1 transition hover:bg-slate-200 dark:hover:bg-slate-800",
            storage.useRegex &&
              "bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-white",
          )}
          aria-pressed={storage.useRegex}
          onClick={() => editor.commands.setUseRegex(!storage.useRegex)}
        >
          정규식
        </button>
      </div>
    </div>
  );
}

export interface TiptapEditorProps {
  initialContent?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
}

export default function TiptapEditor({
  initialContent = defaultContent,
  onChange,
  placeholder = "내용을 입력해 주세요...",
}: TiptapEditorProps) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const objectUrlsRef = useRef<string[]>([]);
  const [isDark, setIsDark] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLinkOpen, setIsLinkOpen] = useState(false);
  const [linkHref, setLinkHref] = useState("");
  const [isHighlightOpen, setIsHighlightOpen] = useState(false);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4] },
        link: { openOnClick: false, enableClickSelection: true },
      }),
      FindAndReplace.configure({
        searchTerm: "",
        replaceTerm: "",
        caseSensitive: false,
        useRegex: false,
        wholeWord: false,
        searchDebounceMs: 150,
        injectCSS: false,
      }),
      Highlight.configure({ multicolor: true }),
      Image.configure({
        allowBase64: false,
        HTMLAttributes: { class: "editor-image" },
      }),
      Placeholder.configure({ placeholder }),
      Subscript,
      Superscript,
      TableKit.configure({
        table: { resizable: true, HTMLAttributes: { class: "editor-table" } },
      }),
      TaskList,
      TaskItem.configure({ nested: true }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Typography,
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        class:
          "tiptap simple-editor min-h-[620px] px-6 pb-16 pt-8 outline-none",
        "aria-label": "문서 본문",
      },
    },
    onUpdate: ({ editor: updatedEditor }) =>
      onChange?.(updatedEditor.getHTML()),
  });

  useEffect(() => {
    const objectUrls = objectUrlsRef.current;
    return () => objectUrls.forEach((url) => URL.revokeObjectURL(url));
  }, []);

  if (!editor) {
    return (
      <div className="min-h-[680px] animate-pulse rounded-2xl border border-slate-200 bg-slate-50 motion-reduce:animate-none" />
    );
  }

  const addImageFiles = (files: FileList | File[]) => {
    const file = Array.from(files).find((candidate) =>
      candidate.type.startsWith("image/"),
    );
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    objectUrlsRef.current.push(objectUrl);
    editor.chain().focus().setImage({ src: objectUrl, alt: file.name }).run();
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    addImageFiles(event.target.files ?? []);
    event.target.value = "";
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    if (event.dataTransfer.files.length === 0) return;
    event.preventDefault();
    addImageFiles(event.dataTransfer.files);
  };

  const handlePaste = (event: ClipboardEvent<HTMLDivElement>) => {
    if (event.clipboardData.files.length === 0) return;
    event.preventDefault();
    addImageFiles(event.clipboardData.files);
  };

  const openLinkPopover = () => {
    setLinkHref(editor.getAttributes("link").href ?? "");
    setIsLinkOpen((open) => !open);
    setIsHighlightOpen(false);
  };

  const applyLink = () => {
    if (linkHref.trim()) {
      editor.chain().focus().setLink({ href: linkHref.trim() }).run();
    } else {
      editor.chain().focus().unsetLink().run();
    }
    setIsLinkOpen(false);
  };

  const headingValue = editor.isActive("heading")
    ? String(editor.getAttributes("heading").level)
    : "paragraph";
  const listValue = editor.isActive("bulletList")
    ? "bullet"
    : editor.isActive("orderedList")
      ? "ordered"
      : editor.isActive("taskList")
        ? "task"
        : "none";

  return (
    <div
      className={cn(
        "tiptap-editor relative flex min-h-[680px] min-w-0 w-full flex-col overflow-visible border shadow-sm transition-colors",
        isDark
          ? "border-slate-800 bg-slate-950 text-slate-100"
          : "border-slate-200 bg-white text-slate-900",
      )}
      data-editor-theme={isDark ? "dark" : "light"}
      onDrop={handleDrop}
      onDragOver={(event) => {
        if (event.dataTransfer.types.includes("Files")) event.preventDefault();
      }}
      onPaste={handlePaste}
    >
      <div
        className={cn(
          "sticky top-0 z-20 flex min-h-11 w-full items-center gap-1 overflow-x-auto border-b px-2 py-1",
          isDark
            ? "border-slate-800 bg-slate-950/95"
            : "border-slate-200 bg-white/95",
        )}
        role="toolbar"
        aria-label="문서 도구 모음"
      >
        <ToolbarGroup>
          <ToolbarButton
            icon={Undo2}
            label="실행 취소"
            disabled={!editor.can().undo()}
            onClick={() => editor.chain().focus().undo().run()}
          />
          <ToolbarButton
            icon={Redo2}
            label="다시 실행"
            disabled={!editor.can().redo()}
            onClick={() => editor.chain().focus().redo().run()}
          />
        </ToolbarGroup>

        <ToolbarSeparator />

        <ToolbarGroup>
          <ToolbarMenu
            value={headingValue}
            label="제목 스타일"
            onChange={(value) =>
              value === "paragraph"
                ? editor.chain().focus().setParagraph().run()
                : editor
                    .chain()
                    .focus()
                    .setHeading({ level: Number(value) as 1 | 2 | 3 | 4 })
                    .run()
            }
            options={[
              { value: "paragraph", label: "본문" },
              { value: "1", label: "제목 1", icon: Heading1 },
              { value: "2", label: "제목 2", icon: Heading2 },
              { value: "3", label: "제목 3", icon: Heading3 },
              { value: "4", label: "제목 4", icon: Heading4 },
            ]}
          />
          <ToolbarMenu
            value={listValue}
            label="목록 스타일"
            onChange={(value) => {
              if (value === "bullet")
                editor.chain().focus().toggleBulletList().run();
              if (value === "ordered")
                editor.chain().focus().toggleOrderedList().run();
              if (value === "task")
                editor.chain().focus().toggleTaskList().run();
              if (value === "none") {
                if (editor.isActive("bulletList"))
                  editor.chain().focus().toggleBulletList().run();
                if (editor.isActive("orderedList"))
                  editor.chain().focus().toggleOrderedList().run();
                if (editor.isActive("taskList"))
                  editor.chain().focus().toggleTaskList().run();
              }
            }}
            options={[
              { value: "none", label: "목록", icon: List },
              { value: "bullet", label: "글머리 기호", icon: List },
              { value: "ordered", label: "번호 목록", icon: ListOrdered },
              { value: "task", label: "체크리스트", icon: ListChecks },
            ]}
          />
          <ToolbarButton
            icon={Code2}
            label="코드 블록"
            active={editor.isActive("codeBlock")}
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          />
        </ToolbarGroup>

        <ToolbarSeparator />

        <ToolbarGroup>
          <ToolbarButton
            icon={Bold}
            label="굵게"
            active={editor.isActive("bold")}
            onClick={() => editor.chain().focus().toggleBold().run()}
          />
          <ToolbarButton
            icon={Italic}
            label="기울임"
            active={editor.isActive("italic")}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          />
          <ToolbarButton
            icon={Strikethrough}
            label="취소선"
            active={editor.isActive("strike")}
            onClick={() => editor.chain().focus().toggleStrike().run()}
          />
          <ToolbarButton
            icon={Braces}
            label="인라인 코드"
            active={editor.isActive("code")}
            onClick={() => editor.chain().focus().toggleCode().run()}
          />
          <ToolbarButton
            icon={Underline}
            label="밑줄"
            active={editor.isActive("underline")}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          />
          <div className="relative">
            <ToolbarButton
              icon={Highlighter}
              label="하이라이트"
              active={editor.isActive("highlight")}
              onClick={() => {
                setIsHighlightOpen((open) => !open);
                setIsLinkOpen(false);
              }}
            />
            {isHighlightOpen && (
              <div className="absolute left-0 top-10 z-30 flex gap-1 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900">
                {highlightColors.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    aria-label={`${color.label} 하이라이트`}
                    title={color.label}
                    className={cn(
                      "h-6 w-6 rounded-full border border-white shadow-sm ring-1 ring-slate-200 transition hover:scale-110 dark:ring-slate-600",
                      color.className,
                    )}
                    onClick={() => {
                      editor
                        .chain()
                        .focus()
                        .toggleHighlight({ color: color.value })
                        .run();
                      setIsHighlightOpen(false);
                    }}
                  />
                ))}
                <button
                  type="button"
                  className="h-6 rounded-full px-2 text-xs text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => {
                    editor.chain().focus().unsetHighlight().run();
                    setIsHighlightOpen(false);
                  }}
                >
                  없음
                </button>
              </div>
            )}
          </div>
          <div className="relative">
            <ToolbarButton
              icon={Link2}
              label="링크"
              active={editor.isActive("link")}
              onClick={openLinkPopover}
            />
            {isLinkOpen && (
              <div className="absolute right-0 top-10 z-30 flex w-72 gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-900">
                <input
                  autoFocus
                  value={linkHref}
                  onChange={(event) => setLinkHref(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      applyLink();
                    }
                  }}
                  placeholder="https://example.com"
                  aria-label="링크 주소"
                  className="h-8 min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-2 text-xs outline-none focus:ring-2 focus:ring-secondary/30 dark:border-slate-700 dark:bg-slate-950"
                />
                <Button
                  type="button"
                  size="icon"
                  className="h-8 w-8 rounded-lg"
                  aria-label="링크 적용"
                  onClick={applyLink}
                >
                  <Check className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </ToolbarGroup>

        <ToolbarSeparator />

        <ToolbarGroup>
          <ToolbarButton
            icon={SuperscriptIcon}
            label="위 첨자"
            active={editor.isActive("superscript")}
            onClick={() => editor.chain().focus().toggleSuperscript().run()}
          />
          <ToolbarButton
            icon={SubscriptIcon}
            label="아래 첨자"
            active={editor.isActive("subscript")}
            onClick={() => editor.chain().focus().toggleSubscript().run()}
          />
          <ToolbarButton
            icon={AlignLeft}
            label="왼쪽 정렬"
            active={editor.isActive({ textAlign: "left" })}
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
          />
          <ToolbarButton
            icon={AlignCenter}
            label="가운데 정렬"
            active={editor.isActive({ textAlign: "center" })}
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
          />
          <ToolbarButton
            icon={AlignRight}
            label="오른쪽 정렬"
            active={editor.isActive({ textAlign: "right" })}
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
          />
          <ToolbarButton
            icon={AlignJustify}
            label="양쪽 정렬"
            active={editor.isActive({ textAlign: "justify" })}
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          />
        </ToolbarGroup>

        <ToolbarSeparator />

        <ToolbarGroup>
          <ToolbarButton
            icon={ImagePlus}
            label="이미지 삽입"
            text="Add"
            onClick={() => imageInputRef.current?.click()}
          />
          <ToolbarButton
            icon={Table2}
            label="표 삽입"
            onClick={() =>
              editor
                .chain()
                .focus()
                .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                .run()
            }
          />
          <ToolbarButton
            icon={Search}
            label="검색 및 바꾸기"
            active={isSearchOpen}
            onClick={() => {
              setIsSearchOpen((open) => !open);
              setIsLinkOpen(false);
              setIsHighlightOpen(false);
            }}
          />
        </ToolbarGroup>

        <div className="min-w-3 flex-1" />

        <ToolbarGroup>
          <ToolbarButton
            icon={isDark ? Sun : Moon}
            label={isDark ? "라이트 모드" : "다크 모드"}
            onClick={() => setIsDark((dark) => !dark)}
          />
        </ToolbarGroup>
      </div>

      {isSearchOpen && (
        <SearchPanel
          editor={editor}
          onClose={() => {
            editor.commands.clearSearch();
            setIsSearchOpen(false);
          }}
        />
      )}

      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
        onChange={handleImageUpload}
      />
      <EditorContent
        editor={editor}
        className={cn(
          "simple-editor-content flex min-h-[620px] min-w-0 w-full flex-1 flex-col overflow-x-auto",
          isDark ? "bg-slate-950" : "bg-white",
        )}
      />
    </div>
  );
}
