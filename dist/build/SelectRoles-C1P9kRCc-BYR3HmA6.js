import{bF as p,d as u,g,u as d,bG as f,j as e,bH as m,I as h,bn as b,b0 as x,G as i,b6 as M,b7 as j,bI as C,bJ as y}from"./strapi-B5tTVWvh.js";import{u as k}from"./useAdminRoles-Bd2N7J7A-FbO-HsOj.js";const v=({children:a,target:t})=>{const{toggleNotification:n}=g(),{formatMessage:o}=d(),{copy:r}=f(),l=o({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),c=async s=>{s.preventDefault(),await r(t)&&n({type:"info",message:o({id:"notification.link-copied"})})};return e.jsx(m,{endAction:e.jsx(h,{label:l,variant:"ghost",onClick:c,children:e.jsx(b,{})}),title:t,titleEllipsis:!0,subtitle:a,icon:e.jsx("span",{style:{fontSize:32},children:"✉️"}),iconBackground:"neutral100"})},R=({registrationToken:a})=>{const{formatMessage:t}=d(),n=`${window.location.origin}${y()}/auth/register?registrationToken=${a}`;return e.jsx(v,{target:n,children:t({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})},I=({disabled:a})=>{const{isLoading:t,roles:n}=k(),{formatMessage:o}=d(),{value:r=[],onChange:l,error:c}=x("roles");return e.jsxs(i.Root,{error:c,hint:o({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),name:"roles",required:!0,children:[e.jsx(i.Label,{children:o({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"})}),e.jsx(M,{disabled:a,onChange:s=>{l("roles",s)},placeholder:o({id:"app.components.Select.placeholder",defaultMessage:"Select"}),startIcon:t?e.jsx($,{}):void 0,value:r.map(s=>s.toString()),withTags:!0,children:n.map(s=>e.jsx(j,{value:s.id.toString(),children:o({id:`global.${s.code}`,defaultMessage:s.name})},s.id))}),e.jsx(i.Error,{}),e.jsx(i.Hint,{})]})},S=p`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,L=u.div`
  animation: ${S} 2s infinite linear;
`,$=()=>e.jsx(L,{children:e.jsx(C,{})});export{R as M,I as S,v as a};
