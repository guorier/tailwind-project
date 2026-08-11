import type { PropsWithChildren } from 'react';

export default function Page({ children }: PropsWithChildren) {
  return (
    <div className='mx-auto flex max-w-8xl justify-between px-4'>
      {/* min-w-0 가 없으면 코드블록·테이블이 flex 자식을 밀어내 페이지에 가로 스크롤이 생긴다. */}
      <div className='mx-auto w-full min-w-0'>
        {children}
      </div>
    </div>
  )
}
