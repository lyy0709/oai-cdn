const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/e3a0afbtjejcqe3f.js","assets/gfs0keudzvcg5rgq.js","assets/iqnriohw8g1d2uyi.js","assets/root-f6p3uecq.css","assets/b6arjgg215unn3v3.js","assets/conversation-small-lkohtmkm.css","assets/o7amlkgkeatodl16.js","assets/ng4znd9vscmia3td.js","assets/c4bxzbp1808foto4.js","assets/njf2pfrje37mn9g2.js","assets/bdf03o5pi5a2t177.js","assets/ADAVisualizationComponent-mi6em660.css"])))=>i.map(i=>d[i]);
import{aI as V,aJ as _,M as C,m as s,aM as j,L as A,dd as S,de as F}from"./gfs0keudzvcg5rgq.js";import{aX as b,b2 as T,b3 as w,b4 as z,A as k,b5 as O,b6 as W,b7 as v,F as D,b8 as R}from"./b6arjgg215unn3v3.js";import{a as c,T as U}from"./fdqp2wfsa8ojjx32.js";import"./iqnriohw8g1d2uyi.js";import"./o7amlkgkeatodl16.js";const M=V(()=>_(()=>import("./e3a0afbtjejcqe3f.js").then(t=>t.A),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(t=>t.default));function B({messages:t,isRequestActive:l,clientThreadId:u}){const[r,e]=t,n=b(r.message),a=e?.message.metadata?.aggregate_result,h=T(),g=w(),d=e?.message?z(e.message):[],o=e?.message.metadata?.aggregate_result?.messages.filter(k)??[],E=(d.filter(i=>i.type==="chart")??[]).length!==o.length,f=g&&!E;let m=c.Running;return a?.status==="success"?m=c.Finished:e!=null&&e.message.content.content_type!==C.ExecutionOutput||a!=null&&a.status!=="running"?m=c.Error:(n||!l)&&(m=c.Stopped),s.jsxs(s.Fragment,{children:[s.jsx(J,{messages:t,status:m,isRequestActive:l}),f&&d.map((i,x)=>{const{type:I}=i;return I==="chart"&&!h?(i.fallback_to_image=!0,s.jsx(y,{children:s.jsx(M,{clientThreadId:u,visualization:i})},x)):s.jsx(y,{children:s.jsx(M,{clientThreadId:u,visualization:i})},x)}),!f&&e!=null&&s.jsx(O,{message:e.message})]})}const y=j.div`mb-3 max-w-[80%]`;function J({messages:t,status:l,isRequestActive:u}){const[r,e]=t,n=A(),a=e?.message.metadata?.aggregate_result,h=b(r.message),{data:g,error:d}=S(F.ShowExpandedCodeView);let o=n.formatMessage({id:"message.tools.data-analysis.running",defaultMessage:"Analyzing"});if(a?.status==="success"?o=n.formatMessage({id:"message.tools.data-analysis.finished",defaultMessage:"Analyzed"}):e!=null&&e.message.content.content_type!==C.ExecutionOutput||a!=null&&a.status!=="running"?o=n.formatMessage({id:"message.tools.data-analysis.error",defaultMessage:"Analysis errored"}):(h||!u)&&(o=n.formatMessage({id:"message.tools.data-analysis.stopped",defaultMessage:"Analysis paused"})),g!==void 0||d){const p=W(r.message)!=null;return s.jsx(U,{status:l,highlightedCommand:o,showWorkUserSetting:g??!1,hideOnlyIfNotInteractedWith:!0,children:p?s.jsxs("div",{className:"mb-3 mt-0.5 overflow-hidden rounded-xl bg-black",children:[s.jsx(v,{message:r.message,FormattedText:D}),e!=null&&s.jsx(R,{message:e.message})]}):null})}return null}export{B as DataAnalysisMessage};
//# sourceMappingURL=ochfbx5cqmk3odzn.js.map