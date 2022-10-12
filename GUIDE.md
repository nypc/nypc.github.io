# 작업 가이드

NYPC 아카이브 레포지토리에 오신 것을 환영합니다!

이 레포지토리는 다음과 같은 파일 구조로 이루어져 있습니다.

- `/pages`: 아카이브 컨텐츠
- `/public`: 이미지, 데이터 애셋 등
- `/components`: 아카이브 컨텐츠에서 참조하는 React 컴포넌트

일반적인 작업은 `/pages` 내에서 이루어집니다. 파일 형식은 [MDX](https://mdxjs.com/)로 Markdown과 비슷하지만 [JSX](https://reactjs.org/docs/introducing-jsx.html)를 섞어 쓸 수 있는 형식입니다.

파일을 수정하고 `main` 브랜치에 커밋하면 이 레포지토리의 [Actions](https://github.com/nypc/nypc.github.io/actions) 탭에 빌드 작업이 자동 생성되며, 빌드가 성공한 경우 수 분 내로 사이트에 자동 배포됩니다.

## 디스크립션 및 해설 작업

디스크립션 및 해설 작업을 하는 데에는 MDX에 관한 깊은 지식이 필요하지는 않으며, Markdown 문법을 알고 있다면 기존 파일을 적당히 수정하는 정도로도 충분히 작성이 가능합니다. JSX는 예제 입출력, 테스트 유형, 해설 등의 페이지를 구현하는 데에만 쓰입니다. 다만 작성에 있어서 고려해야 할 부분들이 있습니다.

### 구조

- 문서 상단의 `import` / `export` 구문을 지우지 말아 주세요.
- `export const meta` 부분에 적당한 `title`, `year`, `stage`를 적어 주세요. 여기에 적은 정보는 페이지 상단을 렌더하는 데에 쓰입니다.

### 문법

- `{` 대신 `\{`를 사용해 주세요. MDX는 `{ ... }` 안의 내용을 Javascript 코드로 인식합니다.
- `<`, `>` 대신 `&lt;`, `&gt;`를 사용해 주세요. MDX는 `< ... >` 안의 내용을 컴포넌트 이름으로 인식합니다.
  - 수식 안에서는 그대로 사용해도 무방하나, 사용하시는 에디터의 구문 강조<sup>syntax highlighting</sup>가 깨질 경우에는 대신하여 `\lt` `\gt`를 사용해도 됩니다.
- `$ ... $`로 인라인 수식을, `$$ [개행] ... [개행] $$`로 블록 수식을 작성할 수 있습니다.
  - `\( \)`, `\[ \]`는 지원하지 않습니다.
  - [KaTeX가 지원하는 함수와 환경들](https://katex.org/docs/supported.html)은 모두 사용 가능합니다.
- HTML `class`와 `style` 속성을 사용하고자 하는 경우 [이 링크를 참조해 주세요](https://reactjs.org/docs/faq-styling.html). 이는 이 프로젝트가 React 기반 MDX 렌더러를 사용하고 있기 때문입니다.

### 컴포넌트

만들어 둔 커스텀 컴포넌트에는 `Examples` (`Input` / `Output`), `Figure`, `Simulators`, `Solution`, `Subtask`가 있습니다.

- `Examples` 안의 코드에 예제 입출력을 작성할 때, `\`, `` ` ``, `*` 등의 문자가 포함되어 있다면 적절히 escape해 줘야 합니다. 특수문자 앞에 `\`를 붙이거나, escape해야 하는 양이 많다면 ` ```text [개행] ... [개행] ``` `로 감싸 주세요.
- HTML `figure` 대신 커스텀 컴포넌트 `Figure`를 사용합니다. `figcaption` 대신 `caption` 속성을 사용합니다.

## 기타 작업 / 직접 실행해 보고 싶은 경우

이 아카이브는 [Next.js](https://nextjs.org/)로 빌드되고, [static HTML export](https://nextjs.org/docs/advanced-features/static-html-export)를 통해 GitHub Pages에 게시됩니다.

### 로컬 실행

로컬에서 다음과 같이 실행해볼 수 있습니다.

1. Node.js가 설치되어 있지 않다면 설치합니다. 버전은 최신 LTS면 충분합니다.

   https://nodejs.org/en/ 의 설명을 따라가 주세요.

2. yarn이 설치되어 있지 않다면 설치합니다.

   ```
   npm i -g yarn
   ```

3. 의존성 패키지를 설치합니다. 프로젝트 루트 디렉토리 이하에서 실행해야 합니다.

   ```
   yarn
   ```

4. 프로젝트를 실행합니다. http://localhost:3000/2022 에서 테스트해볼 수 있습니다.
   ```
   yarn dev
   ```

### 로컬 빌드

사이트가 잘 빌드되는지는 아래와 같이 테스트해볼 수 있습니다.

1. Next.js 프로젝트를 빌드합니다.

   ```
   yarn build
   ```

   - 빌드를 테스트하려면 아래를 실행합니다.
     ```
     yarn start
     ```
   - GitHub Pages 배포를 위해서는 빌드 메시지에 다음과 같은 메시지가 보이지 않아야 합니다.
     ```
     λ  (Lambda)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
     ```

2. 빌드된 프로젝트를 static HTML로 변환합니다.
   ```
   yarn export
   ```

   - HTML은 `/out`에 생성됩니다.
   - `/out/index.html`을 로컬 브라우저로 열었다면 컨텐츠 내에 `/`로 시작하는 하이퍼링크가 있는 경우 제대로 동작하지 않을 수 있습니다. 이런 경우를 제대로 테스트하려면 [Serve](https://github.com/vercel/serve) 등의 방법을 사용하면 됩니다.

위 과정에서 실패하는 경우 다음 문서들이 도움이 될 수 있습니다.

- https://nextjs.org/docs/advanced-features/automatic-static-optimization
- https://nextjs.org/docs/advanced-features/static-html-export: Unsupported Features 섹션에 명시된 작업을 하고 있지는 않은지 체크해 주세요.
