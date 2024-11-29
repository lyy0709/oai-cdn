import{es as V,L as G,r as m,a3 as T,m as e,aK as O,K as Q,dS as J,aT as z,eW as X,aC as I,bw as L,d3 as ee,b0 as E,fw as k,b$ as se,c0 as te,gl as ae,dM as A}from"./gfs0keudzvcg5rgq.js";import{v as P,bR as ne,f2 as ie,iY as M,c7 as re,aM as oe,cp as le,iZ as C,i_ as ce,i$ as de,cd as _,j0 as me,ec as ue,U as B,ev as ge,av as fe,j1 as xe,iH as pe,iI as he,j2 as Se,j3 as v,j4 as be,j5 as S,d6 as je,j6 as ve,j7 as Ce,j8 as ye,dU as Ie,j9 as U,aw as D,ja as ke,jb as ze,jc as Ne,jd as y,je as Me,dV as Ge,jf as Te,jg as Fe,jh as Oe,e$ as we,ji as Le,jj as Ee}from"./b6arjgg215unn3v3.js";import{ax as Ae,by as Pe,z as _e,aB as Be,M as Ue,bb as De,N as W,aO as We,ai as Re}from"./iqnriohw8g1d2uyi.js";import{m as R}from"./o7amlkgkeatodl16.js";import{a as He}from"./gyqgqt7py9lqpp7m.js";import{U as Ke,P as Ye}from"./eq1nad9lwlbxs0ds.js";function Ze({gizmo:s,historyDisabled:r,section:n,onClick:o,isActive:l,hideOverflowMenu:u=!1,elementRef:c}){const{clientThreadId:g}=P(),f=V(g),x=G(),[t,b]=m.useState(!1),[a,i]=m.useState(!1),[d,p]=m.useState(null),h=T(),Z=!!s?.gizmo.tags?.includes(ne.FirstParty),F=!1;let $=!1;m.useEffect(()=>{d==null&&l&&f&&p(!0)},[l,f,d]);const[q,ss]=m.useState(0);let j;if(s!=null)j=s.gizmo.display.name||ie;else{if(h==null)return null;r?j=x.formatMessage(M.clearChat):h.canInteractWithGizmos()?j=de:j=x.formatMessage({id:"GizmoSidebarListItem.newChat",defaultMessage:"New chat"})}return e.jsxs(e.Fragment,{children:[e.jsx(R.div,{whileTap:{scale:.98},onMouseEnter:()=>{i(!0)},onMouseLeave:()=>{i(!1)},children:e.jsx(re,{loggingGizmoId:s?.gizmo.id??"primary",href:s!=null?oe(s):"/",onClick:o,showActiveIndicator:$,icon:e.jsx(le,{gizmoId:s?.gizmo.id,isFirstParty:s==null||Z,gizmoEmoji:s?.gizmo.display.emoji,gizmoTheme:s?.gizmo.display.theme,src:s?.gizmo.display.profile_picture_url,className:"h-6 w-6"}),isMenuOpen:t,label:j,hoverLeftIcon:a&&s&&F&&q&&e.jsx("button",{onClick:N=>{N.preventDefault(),p(!d)},className:"flex text-token-text-secondary hover:text-token-text-primary",children:e.jsx("div",{className:"h-6 w-6",children:e.jsx("div",{className:"relative flex h-full items-center justify-center text-token-text-primary",children:d?e.jsx(Ae,{className:"icon-md"}):e.jsx(Pe,{className:"icon-md"})})})}),rightIcon:n===C.Workspace&&e.jsx(O,{side:"right",label:x.formatMessage(w.workspaceRecommended,{workspace_name:h?.name??"Your Workspace"}),children:e.jsx(_e,{className:"icon-md text-token-text-secondary",alt:x.formatMessage(w.workspaceRecommended,{workspace_name:h?.name??"Your Workspace"})})}),hoverRightIcon:e.jsxs("div",{className:"flex gap-2",children:[(a||t)&&s!=null&&!F&&!u&&e.jsx("div",{className:"text-token-text-tertiary",onClick:N=>{N.preventDefault()},children:e.jsx(ce,{gizmo:s,isOpen:t,setIsOpen:b,section:n})}),!u&&e.jsx(O,{side:"right",label:x.formatMessage(r?M.clearChat:M.newChat),className:"flex items-center",children:e.jsx("button",{className:t?"text-token-text-tertiary":"invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",children:r?e.jsx(Be,{className:"icon-md"}):e.jsx(Ue,{className:"icon-md"})})})]}),elementRef:c})}),!1]})}const w=Q({workspaceRecommended:{id:"gizmo.workspaceRecommended",defaultMessage:"Recommended at {workspace_name}"}});function H(){const s=G(),r=_(),n=s.formatMessage({id:"gizmo.exploreStoreEnabled",defaultMessage:"Explore GPTs"});return e.jsx(me,{children:e.jsx(R.div,{whileTap:{scale:.98},children:e.jsx(J,{to:ue(),onClick:()=>{r.activeSidebar==="popover-nav"&&B.setActiveSidebar(!1)},children:e.jsx(ge,{icon:De,"data-testid":"explore-gpts-button",children:n})},"explore")})})}const $e=2;function K({gizmos:s,isGizmoFlyout:r,isLoaded:n,maxToShowOnLoad:o=4,isScreenArch:l,showAllSidebarItems:u}){const c=Se(s,i=>i.flair.kind),g=[...(c[v.Workspace]?.map(({resource:i})=>({gizmo:i,section:C.Workspace}))??[]).slice(0,3),...c[v.FirstParty]?.map(({resource:i})=>({gizmo:i,section:C.Keep}))??[],...c[v.SidebarKeep]?.map(({resource:i})=>({gizmo:i,section:C.Keep}))??[]],f=c[v.Recent]?.slice(0,l||n?c[v.Recent]?.length:$e).map(({resource:i})=>({gizmo:i,section:C.Recents}))??[],x=f.length,t=g.length,b=l?x>0:s.length>o;let a=[];return r&&l?a=[...g,...f]:!r&&l?a=g:(a=[...g,...f],u||(a.length>o&&t>o?a=a.slice(0,t):a.length>o&&(a=a.slice(0,o)))),{listItems:a,itemsLeft:s.length-a.length,needsToCollapseItems:b,total:s.length}}function Y({gizmo:s,currentGizmoId:r,maxToShowOnLoad:n,hideOverflowMenu:o=!1}){const l=m.useRef(!1),u=!n,c=fe(),[g,f]=m.useState(!1),x=_(d=>!xe.isGptListCollapsed(d)),{listItems:t,needsToCollapseItems:b,itemsLeft:a}=K({gizmos:s,isGizmoFlyout:u,isLoaded:g,maxToShowOnLoad:n,isScreenArch:c,showAllSidebarItems:x});m.useEffect(()=>{g||f(!0)},[g]),m.useEffect(()=>{t.length>0&&!l.current&&(pe({namespace:he.ChatPageLoad})?.logTiming("render_gizmo_sidebar"),l.current=!0)},[t]);function i(d,p){const h=e.jsx(Ze,{gizmo:d,isActive:d.gizmo.id===r,section:p,hideOverflowMenu:o},d.gizmo.id);return c?e.jsx("li",{children:h}):h}return e.jsxs("div",{children:[t.map(({gizmo:d,section:p},h)=>e.jsxs(m.Fragment,{children:[h>1&&p!==t[h-1].section&&e.jsx("div",{className:"my-2 ml-2 h-px w-7 bg-token-sidebar-surface-tertiary"}),i(d,p)]},h)),!c&&b?e.jsxs("button",{onClick:B.toggleGptListCollapsed,className:"flex h-10 w-full items-center gap-2 rounded-lg px-2 text-sm text-token-text-primary hover:bg-token-sidebar-surface-secondary",children:[e.jsx("div",{className:"flex h-6 w-6 flex-shrink-0 items-center justify-center",children:e.jsx(W,{className:"icon-md text-token-text-primary"})}),e.jsx("div",{className:"flex grow items-center gap-1",children:x?e.jsxs(e.Fragment,{children:[e.jsx(z,{id:"GizmoSidebarList.showLess",defaultMessage:"See less"}),e.jsx(We,{className:"icon-xs"})]}):e.jsxs(e.Fragment,{children:[e.jsx(z,{id:"GizmoSidebarList.showMoreItems",defaultMessage:"{numMore} more",values:{numMore:a}}),e.jsx(Re,{className:"icon-xs"})]})})]}):null,!c&&e.jsx(H,{})]})}function qe({currentGizmoId:s,gizmos:r,onClick:n}){const{isSidebarFlyoutOpen:o,onSidebarFlyoutOpenChange:l}=be(),u=o(S.Gizmo);return e.jsx("div",{className:"group mt-1 flex w-full items-center justify-start",children:e.jsx(X,{onOpenChange:c=>l(S.Gizmo,c),side:"right",sideOffset:4,open:u,contentAlign:"end",triggerButton:e.jsxs("button",{className:I("flex flex-1 select-none items-center gap-2 rounded-lg px-2 py-2 text-sm tracking-condensed text-token-text-secondary hover:bg-token-main-surface-secondary focus:ring-0",u&&"bg-token-main-surface-secondary"),onClick:n,children:[e.jsx(W,{className:I("icon-md mr-1 font-semibold text-token-sidebar-icon")}),e.jsx("span",{className:"text-left",children:e.jsx(z,{id:"qTIiY/",defaultMessage:"See more"})})]}),size:"auto",children:e.jsx("div",{className:"max-h-[50dvh] overflow-x-auto px-2 [scrollbar-gutter:stable]",children:e.jsx(L,{children:e.jsx("ul",{className:"flex flex-col gap-0.5",children:e.jsx(Y,{gizmo:r,currentGizmoId:s,hideOverflowMenu:!0})})})})})})}function Ve({currentGizmoId:s}){const{data:{gizmos:r}={}}=je();let n=r;const o=!n||n?.length===0,{needsToCollapseItems:l}=K({gizmos:n??[],isLoaded:!1,isGizmoFlyout:!1,isScreenArch:!0});return o?null:e.jsx(e.Fragment,{children:e.jsxs(ve,{header:e.jsx("div",{className:"sticky top-[--sidebar-sticky-threshold] z-20",children:e.jsx(z,{id:"ZT2HVu",defaultMessage:"GPTs"})}),isLastInGroup:!0,children:[e.jsx(H,{}),e.jsx(Y,{gizmo:n??[],currentGizmoId:s,maxToShowOnLoad:Ce}),l&&e.jsx(L,{children:e.jsx(qe,{currentGizmoId:s,gizmos:n??[]})})]})})}function Qe({clientThreadId:s}){const r=T(),n=ee(s),{isUnauthenticated:o}=E();return o?null:e.jsxs("div",{className:I(k.screenContent),children:[null,null,e.jsx(ye,{clientThreadId:s}),r?.canInteractWithGizmos()?e.jsx(Ve,{currentGizmoId:n}):null,!1]})}function Je(){const s=T(),r=s?.data==null,{isUnauthenticated:n}=E(),{openSettings:o}=Ie(),[l]=m.useState(()=>{const t=se.getCookie(te.Workspace);return typeof t=="string"&&t!==ae}),u=G(),{store:c,actions:g}=U(),f=c(t=>t.mode);if(!s||l&&r)return null;const x=n?e.jsx(Ke,{}):e.jsx(He,{onClickSettings:()=>o()});return e.jsxs(D,{name:"user-profile-bar",className:"z-10 mb-[0.5px] grid-cols-[minmax(0,_1fr)_auto] px-sidebar-inline md:py-1.5",type:"primary",disableSizeTracking:!0,style:{"--bar-gap":"12px","--bar-background-color":"transparent"},children:[x,e.jsx("div",{className:k.togglePinWrapper,children:e.jsx(ke,{tooltipSideOffset:14,className:k.pinSidebarAction,icon:e.jsx(ze,{}),onActivate:t=>{t.preventDefault(),t.persist(),Ne.togglePinSidebar(t,g,f===y.Floating?y.Pinned:y.Floating)},label:f===y.Floating?u.formatMessage({id:"b43Hkt",defaultMessage:"Pin Sidebar"}):u.formatMessage({id:"6m3n9w",defaultMessage:"Unpin Sidebar"}),htmlFor:A.FloatingOrPinned})})]})}function Xe(){return e.jsx(D,{className:"z-10 px-sidebar-inline pb-0.5",type:"primary",disableSizeTracking:!0,style:{"--bar-gap":"12px","--bar-background-color":"transparent"},children:e.jsx(Ye,{})})}function es(){return e.jsxs(Me,{className:I(k.screenTrailingBarContainer),children:[e.jsx(Ge,{}),e.jsx(Xe,{}),e.jsx(Je,{})]})}function ls(){const{clientThreadId:s,onNewThread:r}=P(),[n,o]=m.useState(!1),[l,u]=m.useState(!1),[c,g]=m.useState(!1),{store:f}=U(),x=m.useCallback(a=>a===S.Conversation?n:a===S.Gizmo?l:a===S.Conversation2?c:!1,[n,l,c]),t=m.useCallback((a,i)=>{const d=p=>{a===S.Conversation?o(p):a===S.Gizmo?u(p):a===S.Conversation2&&g(p)};if(i){d(i);return}setTimeout(()=>{d(i)},100)},[]),b=m.useRef(null);return Te((a,i)=>{t(S.Conversation,!1),t(S.Gizmo,!1),t(S.Conversation2,!1);const d=window.matchMedia("(max-width: 700px)").matches,p=Ee(b.current);i!=null&&d&&f.getState().isSidebarOpen&&(f.getState().mode===y.Floating||p)&&setTimeout(()=>{document.getElementById(A.OpenOrClosed)?.click()},100)}),e.jsxs(Fe,{value:{isSidebarFlyoutOpen:x,onSidebarFlyoutOpenChange:t},children:[e.jsx(Oe,{}),e.jsx(we,{anchor:"vertical",className:I(k.screen,"popover flex-1 border-r border-r-token-border-xlight"),name:"sidebar",leading:e.jsx(Le,{onNewThread:r}),ref:b,trackLeading:!0,trailing:e.jsx(es,{}),children:e.jsx(Qe,{clientThreadId:s})})]})}export{ls as C,Ze as G,Y as a};
//# sourceMappingURL=kfqzi8h3ie5n60ji.js.map