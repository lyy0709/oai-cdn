import{aM as C,r as l,m as e,aT as o,aK as y,K as g}from"./gfs0keudzvcg5rgq.js";import{aR as j}from"./b6arjgg215unn3v3.js";import{al as M,t as h}from"./iqnriohw8g1d2uyi.js";const u=g({copy:{id:"CopyButton.copy",defaultMessage:"Copy"},copied:{id:"CopyButton.copied",defaultMessage:"Copied!"}});function b({buttonText:a,shouldChangeText:m=!0,iconClassName:i="icon-sm",onCopy:p,className:n}){const[t,d]=l.useState(!1),c=j(),x=l.useCallback(r=>{r.stopPropagation(),p(r),d(!0),setTimeout(()=>{c()&&d(!1)},2e3)},[c,p]);let s=a;return m&&t?s=e.jsx(o,{...u.copied}):a===!0&&(s=e.jsx(o,{...u.copy})),e.jsxs(e.Fragment,{children:[!t&&e.jsx(y,{label:e.jsx(o,{id:"CopyButton.copyTooltip",defaultMessage:"Copy"}),sideOffset:0,children:e.jsxs(f,{onClick:x,className:n,children:[e.jsx(M,{className:i}),s]})}),t&&e.jsxs(f,{className:n,children:[e.jsx(h,{className:i}),s]})]})}const f=C.button`flex gap-1 items-center select-none`;export{b as C};
//# sourceMappingURL=glqzjueihg1desix.js.map