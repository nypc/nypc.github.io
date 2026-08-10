import{c as d,j as r,s as l,T as i,C as x}from"./main-togzyOLS.js";import{P as u}from"./YouTube-CZsGs_tU.js";import{t as a}from"./themes-kL4TE6zW.js";import{r as c}from"./polished.esm-BY1qMpb2.js";const f=l.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,m=l(x)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px;
  flex: 1;
  min-width: 0;
  @media (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 16px;
  }
`,h=l.div`
  display: flex;
  gap: 16px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 4px;
  }
`,P=()=>{const t=d.c(3);let e,n;t[0]===Symbol.for("react.memo_cache_sentinel")?(e={title:"NYPC 아카이브",subtitle:"역대 NYPC 문제들을 모아 두었습니다."},n=Object.entries(a).sort(y)[0]?.[1],t[0]=e,t[1]=n):(e=t[0],n=t[1]);let o;return t[2]===Symbol.for("react.memo_cache_sentinel")?(o=r.jsx(u,{root:!0,meta:e,theme:n,children:r.jsx(f,{children:Object.entries(a).sort(b).map(j)})}),t[2]=o):o=t[2],o};function y(t,e){return e[0].localeCompare(t[0])}function b(t,e){return e[0].localeCompare(t[0])}function j(t){const[e,n]=t,{background:o,color:s,codebattle:p}=n;return r.jsxs(h,{children:[r.jsxs(m,{style:{color:s},as:"a",clickable:!0,href:`/${e}`,backgroundColor:o,children:[r.jsxs(i,{h2:!0,"no-margin":!0,children:["NYPC ",e]}),r.jsx(i,{style:{color:c(o),opacity:.8},children:+e>=2026?`${e} 넥슨 영 프로그래머스 컵`:`제 ${+e-2015}회 넥슨 청소년 프로그래밍 챌린지`})]}),p&&r.jsxs(m,{style:{color:s},as:"a",clickable:!0,href:`/${e}-codebattle`,backgroundColor:o,children:[r.jsx(i,{h2:!0,"no-margin":!0,children:"CODE BATTLE"}),r.jsx(i,{style:{color:c(o),opacity:.8},children:"NYPC 코드 배틀"})]})]},e)}export{P as component};
