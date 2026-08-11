export interface BreadcrumbStyle {
  list: string;
  item: string;
  link: string;
  page: string;
  separator: string;
  ellipsis: string;
}

const BreadcrumbConfig: BreadcrumbStyle = {
  list: "flex flex-wrap items-center gap-1.5 text-sm text-natural-500 sm:gap-2.5",
  item: "inline-flex items-center gap-1.5",
  link: "transition-colors hover:text-natural-900",
  page: "font-medium text-natural-900",
  separator: "[&>svg]:size-3.5",
  ellipsis: "flex size-9 items-center justify-center",
};

export default BreadcrumbConfig;
