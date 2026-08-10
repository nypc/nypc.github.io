import{c as d,j as o,s as i,T as l,C as x}from"./main-boFdULV6.js";import{P as u}from"./YouTube-Ds9rMvN2.js";import{t as c}from"./themes-kL4TE6zW.js";import{r as a}from"./polished.esm-Bke7hwW9.js";const f=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,m=i(x)`
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
`,w=()=>{const e=d.c(3);let t,n;e[0]===Symbol.for("react.memo_cache_sentinel")?(t={title:"NYPC Archive",subtitle:"A collection of past NYPC problems."},n=Object.entries(c).sort(y)[0]?.[1],e[0]=t,e[1]=n):(t=e[0],n=e[1]);let r;return e[2]===Symbol.for("react.memo_cache_sentinel")?(r=o.jsx(u,{en:!0,root:!0,meta:t,theme:n,children:o.jsx(f,{children:Object.entries(c).filter(b).sort(C).map(g)})}),e[2]=r):r=e[2],r};function y(e,t){return t[0].localeCompare(e[0])}function b(e){const[t]=e;return["2025","2026"].includes(t)}function C(e,t){return t[0].localeCompare(e[0])}function g(e){const[t,n]=e,{background:r,color:s,codebattle:p}=n;return o.jsxs(h,{children:[t==="2026"&&o.jsxs(m,{style:{color:s},as:"a",clickable:!0,href:`/en/${t}`,backgroundColor:r,children:[o.jsxs(l,{h2:!0,"no-margin":!0,children:["NYPC ",t]}),o.jsx(l,{style:{color:a(r),opacity:.8},children:"NEXON Young Programmers Cup"})]}),p&&o.jsxs(m,{style:{color:s},as:"a",clickable:!0,href:`/en/${t}-codebattle`,backgroundColor:r,children:[o.jsx(l,{h2:!0,"no-margin":!0,children:"CODE BATTLE"}),o.jsx(l,{style:{color:a(r),opacity:.8},children:"NYPC Code Battle"})]})]},t)}export{w as component};
