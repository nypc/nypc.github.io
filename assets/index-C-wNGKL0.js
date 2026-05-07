import{c as m,j as n,s as i,T as l,C as p}from"./main-nojkiZ4Q.js";import{P as d}from"./YouTube-Cm4AZ3et.js";import{t as a}from"./themes-olrHLD7I.js";import{r as x}from"./polished.esm-E6LSiwxU.js";const f=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,u=i(p)`
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
`,h=i.div`
  display: flex;
  gap: 16px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 4px;
  }
`,Y=()=>{const e=m.c(3);let t,r;e[0]===Symbol.for("react.memo_cache_sentinel")?(t={title:"NYPC Archive",subtitle:"A collection of past NYPC problems."},r=Object.entries(a).sort(y)[0]?.[1],e[0]=t,e[1]=r):(t=e[0],r=e[1]);let o;return e[2]===Symbol.for("react.memo_cache_sentinel")?(o=n.jsx(d,{en:!0,root:!0,meta:t,theme:r,children:n.jsx(f,{children:Object.entries(a).filter(b).sort(C).map(j)})}),e[2]=o):o=e[2],o};function y(e,t){return t[0].localeCompare(e[0])}function b(e){const[t]=e;return t==="2025"}function C(e,t){return t[0].localeCompare(e[0])}function j(e){const[t,r]=e,{background:o,color:c,codebattle:s}=r;return n.jsx(h,{children:s&&n.jsxs(u,{style:{color:c},as:"a",clickable:!0,href:`/en/${t}-codebattle`,backgroundColor:o,children:[n.jsx(l,{h2:!0,"no-margin":!0,children:"CODE BATTLE"}),n.jsx(l,{style:{color:x(o),opacity:.8},children:"NYPC Code Battle"})]})},t)}export{Y as component};
