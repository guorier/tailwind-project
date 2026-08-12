interface GenericObject<T> { [key: string]: T; }
type ObjectString = GenericObject<string>;
interface RadioSizeType {
  sm: string;
  lg: string;
}
export interface RadioStyle {
  label: string;
  base: string;
  // sizes: RadioSize;
  colors: ObjectString;
  type: {
    default: {
      base: string;
      sizes: RadioSizeType;
    };
    line: {
      base: string;
      sizes: RadioSizeType;
    };
  }
}

const disabled = "disabled:cursor-default disabled:text-silver-200 disabled:bg-line-100 disabled:border-line-200 checked:disabled:bg-disabled-chk";

// line — shadcn base radio-group 형태.
// 테두리는 그대로 두고 가운데에 채워진 점(indicator)만 나타난다.
const lineCommon = "relative rounded-full transition-[color,box-shadow] appearance-none";
// 점 크기는 원 대비 비율(1/2)로 잡아 spacing 스케일에 의존하지 않는다.
const lineIndicator =
  "after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-1/2 after:h-1/2 after:rounded-full after:bg-transparent after:transition-transform after:scale-0 motion-reduce:after:transition-none";
// 점 색상은 colors 가 정하므로 여기서는 표시 여부만 다룬다.
const lineCheck = "checked:after:scale-100";
const lineFocus = "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-natural-900/20";
// disabled 는 colors 뒤에 병합되므로 hover·focus 조합까지 마지막으로 덮어쓴다.
const lineDisabled =
  "disabled:cursor-default disabled:bg-line-100 disabled:border-line-200 checked:disabled:bg-line-100 checked:disabled:hover:bg-line-100 checked:disabled:focus:bg-line-100 checked:disabled:border-line-200 checked:disabled:hover:border-line-200 checked:disabled:focus:border-line-200 checked:disabled:after:bg-line-300";

const sizeSm = "w-4 min-w-4 max-w-4 h-4 min-h-4 max-h-4";
const sizeLg = "w-5 min-w-5 max-w-5 h-5 min-h-5 max-h-5";

const RadioConfig: RadioStyle = {
  label: "cursor-pointer flex justify-center items-center gap-2 text-sm has-[:disabled]:cursor-default",
  base: `cursor-pointer border bg-white ${disabled} focus:ring-0 focus-visible:ring-0 focus:ring-offset-0 focus-visible:ring-offset-0`,
  type: {
    default: {
      base: `${disabled} checked:disabled:bg-none checked:disabled:bg-white`,
      sizes: {
        sm: `${sizeSm} checked:border-4`,
        lg: `${sizeLg} checked:border-5`,
      },
    },
    line: {
      base: `${lineCommon} ${lineIndicator} ${lineCheck} ${lineFocus} ${lineDisabled}`,
      sizes: {
        sm: sizeSm,
        lg: sizeLg,
      },
    }
  },
  // line 타입은 checked:after:bg-* 가 가운데 점 색을 결정한다.
  //
  // @tailwindcss/forms 는 input[type=radio]:checked:hover / :checked:focus 에
  // `background-color: currentColor; border-color: transparent` 를 강제한다.
  // 그대로 두면 hover·focus 시 원 전체가 상속된 글자색(blue-600 #0b50d0)으로 칠해지므로,
  // 같은 상태 조합으로 배경과 테두리를 다시 지정해 덮어쓴다.
  colors: {
    base: "checked:bg-white checked:hover:bg-white checked:focus:bg-white border-silver-400 checked:border-natural-900 checked:hover:border-natural-900 checked:focus:border-natural-900 checked:after:bg-natural-900",
    primary: "checked:bg-white checked:hover:bg-white checked:focus:bg-white border-primary-400 checked:border-primary-900 checked:hover:border-primary-900 checked:focus:border-primary-900 checked:after:bg-primary-900",
    secondary: "checked:bg-white checked:hover:bg-white checked:focus:bg-white border-secondary-400 checked:border-secondary-900 checked:hover:border-secondary-900 checked:focus:border-secondary-900 checked:after:bg-secondary-900",
    warning: "checked:bg-white checked:hover:bg-white checked:focus:bg-white border-warning-100 checked:border-warning-100 checked:hover:border-warning-100 checked:focus:border-warning-100 checked:after:bg-warning-100",
    error: "checked:bg-white checked:hover:bg-white checked:focus:bg-white border-error-100 checked:border-error-100 checked:hover:border-error-100 checked:focus:border-error-100 checked:after:bg-error-100",
    valid: "checked:bg-white checked:hover:bg-white checked:focus:bg-white border-valid-100 checked:border-valid-100 checked:hover:border-valid-100 checked:focus:border-valid-100 checked:after:bg-valid-100",
  },
};

export default RadioConfig
