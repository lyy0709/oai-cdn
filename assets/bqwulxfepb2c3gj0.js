import{r as d,L as C,fi as N,fj as I,N as L,fm as j,m as e,aZ as E,aT as u,dd as D,df as T,de as v,fn as f,u as y}from"./gfs0keudzvcg5rgq.js";import{aQ as F,aR as k,aS as A}from"./iqnriohw8g1d2uyi.js";import{cJ as R,cK as V,cL as U,cM as S,cN as J,cO as z,cP as G,cQ as H}from"./b6arjgg215unn3v3.js";import{S as a}from"./ng4znd9vscmia3td.js";function O({voice:t}){const[l,c]=d.useState(!1),i=C(),s=N(),g=t.voice,r=t.preview_url,n=d.useRef({playPromise:null}).current,o=I(x=>x.isPlaying&&x.sourceUrl===r),h=L(),m=d.useCallback(async()=>{if(!s)return;const x={voice:g,source:r};j.previews.click(x);try{c(!0),s.changeSource(r),n.playPromise=s.play(),c(!1)}catch(w){j.previews.error(w,x),h.danger(i.formatMessage({id:"DeIYxH",defaultMessage:"Something went wrong playing preview"}))}},[i,s,r,g,n,h]),p=d.useCallback(()=>{s&&(n.playPromise?n.playPromise.then(()=>{s.stop(),n.playPromise=null}):s.stop())},[s,n]),P=d.useCallback(()=>{o?p():l||m()},[p,m,l,o]);return d.useEffect(()=>()=>{o&&p()},[t,o,p]),e.jsx(E,{onClick:P,color:"secondary",className:"flex flex-row flex-nowrap items-center gap-1 border-none font-normal",loading:l,icon:o?F:k,children:o?e.jsx(u,{id:"yGpEMJ",defaultMessage:"Stop"}):e.jsx(u,{id:"JwYDVp",defaultMessage:"Play"})})}const X={Trigger:Q,Content:Y};function b(){return y("174366048")?.value}function Q(){return b()?e.jsx(R,{value:V.Speech,icon:e.jsx(A,{className:"icon-sm"}),label:e.jsx(u,{id:"speechSettings.trigger",defaultMessage:"Speech"})}):null}function Y(){const t=b(),l=y("1426009137")?.value;return t?e.jsxs(U,{value:V.Speech,children:[e.jsx(S,{children:e.jsx(_,{})}),l?e.jsx(S,{children:e.jsx(B,{})}):null]}):null}function M(t){const{data:l,isLoading:c}=D(t)||{},i=T();return{isLoading:c,value:l,setValue:s=>{i.mutate({setting:t,value:s})}}}function _(){const{isLoading:t,value:l,setValue:c}=M(v.VoiceName),i=J(),s=z(),g=t?"":G(l,s),r=i.find(({voice:n})=>n===g);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col flex-nowrap gap-2",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(u,{id:"speechSettings.content.voice",defaultMessage:"Voice"})}),e.jsxs("div",{className:"flex flex-row flex-nowrap items-center gap-1",children:[r?e.jsxs(e.Fragment,{children:[e.jsx(O,{voice:r}),e.jsx("div",{className:"h-4 border-l"})]}):null,e.jsxs(a.Root,{value:g,onValueChange:n=>c(n),disabled:t,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsx(a.Content,{children:i.map(({voice:n,name:o})=>e.jsx(a.Item,{value:n,children:o},n))})})]})]})]})})})}function B(){const{isLoading:t,value:l,setValue:c}=M(v.VoiceMainLanguage);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(u,{id:"speechSettings.content.language",defaultMessage:"Main Language"})}),e.jsxs(a.Root,{value:t?"":l??f.Auto,onValueChange:i=>c(i),disabled:t,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsxs(a.Content,{position:"popper",style:{maxHeight:"calc(var(--radix-select-content-available-height) - 5rem)"},children:[e.jsx(a.Item,{value:f.Auto,children:e.jsx(u,{id:"speechSettings.content.autoDetect",defaultMessage:"Auto-Detect"})}),Object.entries(f).filter(([i,s])=>s!==f.Auto).map(([i,s])=>e.jsx(a.Item,{value:s,className:"capitalize",children:i},s))]})})]})]}),e.jsx(H,{children:e.jsx(u,{id:"speechSettings.content.autoDetectDescription",defaultMessage:"For best results, select the language you mainly speak. If it's not listed, it may still be supported via auto-detection."})})]})}export{X as S,M as u};
//# sourceMappingURL=bqwulxfepb2c3gj0.js.map
