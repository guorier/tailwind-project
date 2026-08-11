export interface SkeletonStyle {
  base: string;
  /** 자주 쓰는 형태의 크기 프리셋. */
  shape: {
    [key: string]: string;
  };
}

const SkeletonConfig: SkeletonStyle = {
  base: "animate-pulse rounded-md bg-silver-200",
  shape: {
    text: "h-4 w-full",
    title: "h-6 w-2/5",
    avatar: "size-10 rounded-full",
    thumbnail: "h-32 w-full",
    button: "h-10 w-24",
  },
};

export default SkeletonConfig;
