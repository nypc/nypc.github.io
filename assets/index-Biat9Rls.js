import{c as d,j as r,s as l,T as i,C as x}from"./main-DXzhmhj6.js";import{P as u}from"./YouTube-CqWWwTfB.js";import{t as a}from"./themes-olrHLD7I.js";import{r as c}from"./polished.esm-vbAoiQsC.js";const f=l.div`
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
`,P=()=>{const e=d.c(3);let t,n;e[0]===Symbol.for("react.memo_cache_sentinel")?(t={title:"NYPC 아카이브",subtitle:"역대 NYPC 문제들을 모아 두었습니다."},n=Object.entries(a).sort(y)[0]?.[1],e[0]=t,e[1]=n):(t=e[0],n=e[1]);let o;return e[2]===Symbol.for("react.memo_cache_sentinel")?(o=r.jsx(u,{root:!0,meta:t,theme:n,children:r.jsx(f,{children:Object.entries(a).sort(b).map(j)})}),e[2]=o):o=e[2],o};function y(e,t){return t[0].localeCompare(e[0])}function b(e,t){return t[0].localeCompare(e[0])}function j(e){const[t,n]=e,{background:o,color:s,codebattle:p}=n;return r.jsxs(h,{children:[r.jsxs(m,{style:{color:s},as:"a",clickable:!0,href:`/${t}`,backgroundColor:o,children:[r.jsxs(i,{h2:!0,"no-margin":!0,children:["NYPC ",t]}),r.jsxs(i,{style:{color:c(o),opacity:.8},children:["제 ",+t-2015,"회 넥슨 청소년 프로그래밍 챌린지"]})]}),p&&r.jsxs(m,{style:{color:s},as:"a",clickable:!0,href:`/${t}-codebattle`,backgroundColor:o,children:[r.jsx(i,{h2:!0,"no-margin":!0,children:"CODE BATTLE"}),r.jsx(i,{style:{color:c(o),opacity:.8},children:"NYPC 코드 배틀"})]})]},t)}export{P as component};
