/**
 * 컴포넌트 테마/스타일 시스템 공통 타입.
 *
 * 각 컴포넌트는 `src/styles/theme` 의 기본 테마를 갖고,
 * `theme` prop 으로 부분 덮어쓰기(DeepPartial)를 받는다.
 */

/** 객체의 모든 깊이를 optional 로 만든다. */
export type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

/** on/off 두 상태의 클래스 쌍. */
export interface ThemeBoolean {
  on: string;
  off: string;
}

/** 오버레이 요소의 9방향 배치 클래스. */
export interface ThemePositions {
  'top-left': string;
  'top-center': string;
  'top-right': string;
  'center-left': string;
  center: string;
  'center-right': string;
  'bottom-right': string;
  'bottom-center': string;
  'bottom-left': string;
}

/** 컨테이너 폭 단계별 클래스. */
export interface ThemeSizes {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
}

/** 입력 요소의 상태 색상 클래스. */
export interface InputColors {
  gray: string;
  info: string;
  failure: string;
  warning: string;
  success: string;
}

/** 입력 요소의 크기별 클래스. */
export interface InputSizes {
  sm: string;
  md: string;
  lg: string;
}
