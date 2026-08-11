export interface CardStyle {
  base: string;
  header: string;
  title: string;
  description: string;
  action: string;
  content: string;
  footer: string;
  /** 표면 강조 정도. 대시보드에서는 flat, 모달 위에서는 raised 를 쓴다. */
  elevation: {
    [key: string]: string;
  };
}

const CardConfig: CardStyle = {
  base: "flex flex-col rounded-xl border border-silver-200 bg-white text-natural-800 shadow-sm",
  header: "flex items-start justify-between gap-4 px-6 pt-6 pb-4",
  title: "text-base font-bold leading-none",
  description: "mt-1.5 text-sm text-natural-500",
  action: "flex-none",
  content: "px-6 pb-6",
  footer:
    "mt-auto flex items-center gap-2 border-t border-silver-200 px-6 py-4",
  elevation: {
    flat: "shadow-none",
    default: "shadow-sm",
    raised: "shadow-md",
  },
};

export default CardConfig;
