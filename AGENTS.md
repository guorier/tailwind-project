# next-common-project

사내 공통 UI 컴포넌트 라이브러리와 그 문서 사이트. Next.js(App Router) + TypeScript.

`/docs/<컴포넌트>` 경로에서 각 컴포넌트의 속성 표와 살아있는 예제를 보여준다.

## 기술 스택

- **프레임워크**: Next.js 14 (App Router), React 18, TypeScript
- **스타일**: Tailwind CSS 3.4 + `tailwindcss-animate`. 클래스 병합은 `cn()`(`clsx` + `tailwind-merge`)
- **UI 프리미티브**: Radix UI (`@radix-ui/react-*`) 위에 shadcn/ui 패턴으로 래핑
- **variant**: `class-variance-authority`(cva)
- **아이콘**: `lucide-react`, `react-icons`
- **폼**: `react-hook-form` + `zod` + `@hookform/resolvers`
- **테이블**: `@tanstack/react-table`
- **상태**: Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **에디터**: TinyMCE, SunEditor
- **날짜**: `date-fns`, `moment`, `react-datepicker`, `react-day-picker`
- **토스트**: `sonner`
- **배포**: `gh-pages` (정적 호스팅)

패키지 매니저는 npm.

## 명령어

```bash
npm run dev        # 개발 서버 (포트 7000)
npm run build      # 프로덕션 빌드
npm run start      # 빌드 결과 실행 (포트 7000)
npm run lint       # eslint
npm run typecheck  # tsc --noEmit (변경 후 항상 실행 권장)
npm run deploy     # out/ 을 gh-pages 로 배포
```

## 프로젝트 구조

- `src/app/docs/(ui)/<컴포넌트>/page.tsx` — 컴포넌트별 문서 페이지
- `src/app/docs/(ui)/ObjectParameter.tsx` — 속성 표 렌더러
- `src/components/ui/` — shadcn 패턴 프리미티브 (소문자 파일명: `badge.tsx`, `button.tsx`)
- `src/components/<PascalCase>/` — 자체 제작 복합 컴포넌트 (`Modal/`, `Table/`, `SelectBox/` 등)
- `src/components/DocPage.tsx` — 문서 페이지의 예제 목록 렌더러
- `src/components/helpers/examples/code-demo.tsx` — `CodeData` 타입과 예제 뷰어
- `src/examples/<컴포넌트>/` — 문서에 실릴 예제. 배럴 `index.ts`로 export
- `src/styles/theme/*.theme.ts` — 자체 컴포넌트의 스타일 설정 객체
- `src/styles/globals.css` — 전역 CSS 및 CSS 변수
- `src/redux/` — 스토어, `features/` 슬라이스, `services/` RTK Query API
- `src/utiles/` — 유틸리티 (폴더명 오타가 굳어졌으니 그대로 쓴다)
- `src/lib/utils.ts` — `cn()` 클래스 병합 헬퍼
- `src/layout/` — `Nav`, `Navbar`, `Footer`

## 핵심 규칙 (반드시 준수)

### 컴포넌트 계층
새 컴포넌트를 만들 때 두 계층 중 어디에 속하는지 먼저 정한다:

- **`src/components/ui/`** — Radix 프리미티브를 감싼 얇은 래퍼. 파일명은 소문자-케밥, cva로 variant를 정의하고 `cn()`으로 className을 병합한다. shadcn 관례를 따른다.
- **`src/components/<PascalCase>/`** — 여러 프리미티브를 조합한 자체 컴포넌트. 스타일 설정이 복잡하면 `src/styles/theme/<이름>.theme.ts`로 분리한다.

기존 컴포넌트를 먼저 찾고, 없을 때만 새로 만든다.

### 문서 예제 추가 패턴
컴포넌트 문서에 예제를 추가할 때:

1. `src/examples/<컴포넌트>/<컴포넌트>.<변형>.tsx` 생성. `"use client"`로 시작한다.
2. 미리보기용 `Component()` 함수와 표시할 소스 문자열 `code`를 각각 작성한다 — 둘은 자동 동기화되지 않으므로 함께 고쳐야 한다.
3. `CodeData` 타입 객체를 named export 한다 (`title`, `description`, `type`, `code`, `component`).
4. 같은 폴더 `index.ts`에 re-export 하고, 필요하면 `src/examples/index.ts`에도 추가한다.
5. 문서 페이지에서 `DocPage`에 배열로 넘긴다 — 네임스페이스 객체는 번들러가 알파벳순으로 정렬하므로 순서를 고정하려면 배열을 쓴다.

### 스타일
- Tailwind 유틸리티를 쓴다. 임의값(`w-[123px]`)은 `tailwind.config.ts`의 `safelist`에 1~1000px 범위가 미리 등록되어 있다.
- 색상은 `tailwind.config.ts`에 정의된 팔레트(`silver-*`, `point-*`, `natural-*`, `lightblue-*` 등)를 쓰고 raw hex를 새로 도입하지 않는다.
- 조건부 className은 문자열 연결 대신 `cn()`을 쓴다.
- CSS Module(`.module.css`)은 신규로 만들지 않는다.

### 애니메이션
- keyframes는 `tailwind.config.ts`의 `theme.extend.keyframes`/`animation`에 등록해 유틸리티 클래스로 쓴다.
- 움직이는 요소에는 `motion-reduce:animate-none`을 함께 붙여 `prefers-reduced-motion`을 존중한다.

## 주의 사항

- **git**: 사용자 지시 없이 `git checkout`/`reset`/`restore` 등 작업본을 덮어쓰는 파괴적 명령을 실행하지 않는다.
- **README.md**: GitLab 기본 템플릿 상태이므로 프로젝트 정보의 근거로 삼지 않는다.
- **`src/middleware.ts`**: Next.js 예제 코드가 그대로 남아있다. 실제 인증·인가 로직이 아니다.
- 변경 후에는 `npm run typecheck`로 타입 오류가 없는지 확인한다.
