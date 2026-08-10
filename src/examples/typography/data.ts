/** 사용 가능한 폰트 웨이트. Semibold · Regular · Light 3가지만 사용한다. */
export const weights = [
  { label: "Semibold", weightClass: "font-semibold" },
  { label: "Regular", weightClass: "font-normal" },
  { label: "Light", weightClass: "font-light" },
];

export const koreanSample = "가나다";
export const koreanBody =
  "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산대한사람 대한으로 길이 보전하세";

export const latinSample = "ABab123";
export const latinBody =
  "Oh say, can you seeBy the dawn's early lightWhat so proudly we hailedAt the twilight's last gleaming 1234567890";

/** 헤드라인 계층. 태그를 그대로 쓰면 아래 크기·행간이 적용된다. */
export const headlines = [
  { tag: "h1", label: "Headline1", size: 48, leading: 62 },
  { tag: "h2", label: "Headline2", size: 40, leading: 52 },
  { tag: "h3", label: "Headline3", size: 32, leading: 42 },
  { tag: "h4", label: "Headline4", size: 28, leading: 38 },
  { tag: "h5", label: "Headline5", size: 24, leading: 32 },
  { tag: "h6", label: "Headline6", size: 20, leading: 28 },
];

export const titleScale = [
  { label: "TITLE/ R 32", size: 32, leading: 42, css: "text-4xl font-normal" },
  { label: "TITLE/ SB 20", size: 20, leading: 28, css: "text-xl font-semibold" },
  { label: "TITLE/ R 20", size: 20, leading: 28, css: "text-xl font-normal" },
];

export const bodyScale = [
  { label: "BODY/ R 24", size: 24, leading: 32, css: "text-2xl font-normal" },
  { label: "BODY/ M 16", size: 16, leading: 24, css: "text-base font-medium" },
  { label: "BODY/ R 16", size: 16, leading: 24, css: "text-base font-normal" },
];

export const labelScale = [
  { label: "LABEL/ L SB 16", size: 16, leading: 24, css: "text-base font-semibold" },
  { label: "LABEL/ M SB 14", size: 14, leading: 20, css: "text-sm font-semibold" },
  { label: "LABEL/ M R 14", size: 14, leading: 20, css: "text-sm font-normal" },
  { label: "LABEL/ S SB 12", size: 12, leading: 16, css: "text-xs font-semibold" },
  { label: "LABEL/ S R 12", size: 12, leading: 16, css: "text-xs font-normal" },
  { label: "LABEL/ XS SB 10", size: 10, leading: 14, css: "text-[10px] font-semibold" },
];

/** 표 본문에 공통으로 쓰는 표본 문구. */
export const typefaceSample = "동틀 녘 햇빛 포개짐";
