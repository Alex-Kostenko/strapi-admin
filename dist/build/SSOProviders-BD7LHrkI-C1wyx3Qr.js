import{d as r,F as d,u as h,j as e,O as s,bd as c,be as m,T as u}from"./strapi-B5tTVWvh.js";const g=({providers:t,displayAllProviders:a})=>{const{formatMessage:o}=h();return a?e.jsx(s.Root,{gap:4,children:t.map(n=>e.jsx(s.Item,{col:4,direction:"column",alignItems:"stretch",children:e.jsx(i,{provider:n})},n.uid))}):t.length>2&&!a?e.jsxs(s.Root,{gap:4,children:[t.slice(0,2).map(n=>e.jsx(s.Item,{col:4,direction:"column",alignItems:"stretch",children:e.jsx(i,{provider:n})},n.uid)),e.jsx(s.Item,{col:4,direction:"column",alignItems:"stretch",children:e.jsx(c,{label:o({id:"global.see-more"}),children:e.jsx(l,{as:m,to:"/auth/providers",children:e.jsx("span",{"aria-hidden":!0,children:"•••"})})})})]}):e.jsx(x,{justifyContent:"center",children:t.map(n=>e.jsx(i,{provider:n},n.uid))})},x=r(d)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:t})=>t.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:t})=>t.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:t})=>t.spaces[2]};
  }
`,i=({provider:t})=>e.jsx(c,{label:t.displayName,children:e.jsx(l,{href:`${window.strapi.backendURL}/admin/connect/${t.uid}`,children:t.icon?e.jsx("img",{src:t.icon,"aria-hidden":!0,alt:"",height:"32px"}):e.jsx(u,{children:t.displayName})})}),l=r.a`
  width: 13.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.8rem;
  border: 1px solid ${({theme:t})=>t.colors.neutral150};
  border-radius: ${({theme:t})=>t.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:t})=>t.colors.neutral600};
`;export{g as S};
