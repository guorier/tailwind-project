# solar-front

태양광 발전 관제·정산·거래 웹 프론트엔드. Next.js(App Router) + TypeScript.

## 기술 스택

- **프레임워크**: Next.js 15 (App Router), React 19, TypeScript
- **데이터 페칭**: `@tanstack/react-query` (axios 기반)
- **스타일**: SCSS(`sass`) — CSS Module이 아닌 일반 `.scss` 사용 (`.module.css`는 폐기됨)
- **그리드**: AG Grid (`ag-grid-react`)
- **차트**: ECharts (`echarts`, `echarts-for-react`)
- **폼**: `react-hook-form` + `zod` + `@hookform/resolvers`
- **상태**: `zustand`
- **실시간**: STOMP over SockJS (`@stomp/stompjs`, `sockjs-client`)
- **인증**: `next-auth` v5 (beta)

Node 22.14.x / npm 10.9.x. 패키지 매니저는 npm.

## 명령어

```bash
npm run dev     # 개발 서버 (포트 5173, 아이콘 watch 동시 실행)
npm run build   # 프로덕션 빌드
npm run lint    # eslint
npx tsc --noEmit  # 타입 체크 (변경 후 항상 실행 권장)
```

## 프로젝트 구조

- `src/app/(home)/...` — App Router 라우트 (페이지)
- `src/constants/<도메인>/...` — 페이지별 실제 UI 구현. `_components/`, `_constants/`, `_hooks/` 하위 폴더 패턴 사용
- `src/services/<도메인>/` — API 레이어. **`query.ts`(react-query 훅) / `request.ts`(axios 호출) / `type.ts`(타입)** 3종 분리
- `src/components/` — 공통 컴포넌트. `@/components`에서 배럴(`index.ts`)로 export
- `src/lib/http.lib.ts` — axios 클라이언트 정의
- `src/utils/appStorage.ts` — 암호화 스토리지 (아래 참조)
- `src/styles/global/theme.scss` — 색상 등 디자인 토큰

## 핵심 규칙 (반드시 준수)

### API 레이어 패턴
새 API를 추가할 때 `src/services/<도메인>/` 아래에 세 파일로 분리한다:

- `request.ts` — axios 호출 함수. 게이트웨이별 클라이언트를 import해서 사용
- `query.ts` — `useQuery`/`useMutation` 훅. mutation 성공 시 관련 `queryKey`를 `invalidateQueries`
- `type.ts` — 요청/응답 타입

게이트웨이별 axios 클라이언트 (`@/lib/http.lib`):
- `comClient` (`/com/api`) — 공통·계정
- `plantClient` (`/plant/api`) — 발전소. 자동으로 `acntUnqNo` 파라미터 주입
- `operateClient` (`/operate/api`) — 전력거래·운영
- 직접 `axios`를 새로 만들지 말고 위 클라이언트를 재사용한다.

### 사용자 ID 필드
API payload의 `mdfrId`(수정자), `rgtrId`(등록자)는 **항상** `session?.user?.email?.trim() ?? ''`를 사용한다. 백엔드가 email을 사용자 식별자로 쓰기 때문. `id`, `name` 등 다른 세션 필드를 ID로 쓰지 않는다.

### 클라이언트 스토리지
`localStorage`/`sessionStorage`를 **직접 호출 금지**. 보안진단 대응으로 `src/utils/appStorage.ts`의 `appStorage`(localStorage 대체) / `appSessionStorage`(sessionStorage 대체)만 사용한다. 내부적으로 AES 암호화된 단일 블롭에 저장된다. 진짜 비밀(토큰)은 저장하지 않는다 — 세션 토큰은 httpOnly 쿠키로 유지.

### 스타일
- 색상·치수는 하드코딩하지 말고 `src/styles/global/theme.scss`의 토큰을 사용한다 (`#fff`, `#333` 등 raw hex 금지).
- 신규/수정 스타일은 `.scss`로 작성. CSS Module(`.module.css`)은 사용하지 않는다.

### 공통 컴포넌트
폼·테이블·모달 등은 `@/components`의 공통 컴포넌트(SearchForm, SearchFields, Tab/Tabs, Modal, AgGrid, DataTable 등)를 먼저 찾아 재사용한다. 새로 만들기 전에 배럴 export(`src/components/index.ts`)를 확인할 것.

## 주의 사항

- **git**: 사용자 지시 없이 `git checkout`/`reset`/`restore` 등 작업본을 덮어쓰는 파괴적 명령을 실행하지 않는다.
- **배포**: PC+모바일 통합 배포(`Dockerfile.combined`). `.env.local`이 빌드에 구워지며, `NEXT_PUBLIC_WS_SOLAR`는 Dockerfile ARG/ENV(`/ws`)로 고정된다.
- 변경 후에는 `npx tsc --noEmit`으로 타입 오류가 없는지 확인한다.
