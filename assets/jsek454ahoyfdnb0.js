import{fA as i,aE as s,m as r,r as d,d4 as l,o as n,eY as c,L as m,a8 as h,fM as u}from"./gfs0keudzvcg5rgq.js";import{C as g}from"./jad2uxm0304f7r4n.js";import{B as v}from"./b6arjgg215unn3v3.js";import{S as f}from"./ild7sgvnxj7si9nq.js";import"./iqnriohw8g1d2uyi.js";import"./o7amlkgkeatodl16.js";import"./hstfd7jg0qovo68e.js";import"./eq1nad9lwlbxs0ds.js";import"./gyqgqt7py9lqpp7m.js";import"./dgei8q7vdlmkoylh.js";import"./fdqp2wfsa8ojjx32.js";import"./itggh6ang5sjriim.js";import"./dv7yn9no9p7iay99.js";import"./g2j2w17gn167m80e.js";import"./e50rxb5ybt07ryl4.js";import"./oggbs06988uwteeo.js";import"./kpqtoukjn4jluw7m.js";import"./okj5y0nipwhz20cq.js";import"./kfqzi8h3ie5n60ji.js";import"./nt1j9piveztgekdl.js";import"./ojvv2ity5l9p5469.js";import"./e358terkvvgen8fa.js";function C(e){if(e.serverResponse.type==="error")return r.jsx(S,{error:e.serverResponse.error});const t={...e,conversationData:e.serverResponse.data};return e.continueMode||e.moderationMode||e.isContinueEnabled?r.jsx(x,{...t}):r.jsx(p,{...t})}function x(e){const[t]=d.useState(()=>l());return n.initThreadFromServerData(t,e.conversationData,!0,e.sharedConversationId),e.chatPageProps!=null?r.jsx(c.Provider,{value:{serverSharedThreadId:e.sharedConversationId},children:r.jsx(g,{...e.chatPageProps,clientThreadId:t})}):null}function p(e){return n.initThreadFromServerData(e.sharedConversationId,e.conversationData,!0),r.jsx(f,{sharedConversationId:e.sharedConversationId,initiallyHighlightedMessageId:e.conversationData.highlighted_message_id,continueConversationUrl:e.conversationData.continue_conversation_url,isIndexable:e.conversationData.is_indexable,isBetterMetatagsEnabled:e.conversationData.is_better_metatags_enabled})}function S({error:e}){const t=m(),a=h();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(v,{content:e,primaryCtaText:t.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const Y=({data:e})=>{const t=e;if(!t||t.serverResponse.type==="error"||!t.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=t;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:window.location.origin+"/share/"+t.sharedConversationId}]:[{title:"ChatGPT"},...u]};function q(){const{sharedConversationId:e,...t}=i(),{layer:a}=s("2840731323"),o=a.get("is_direct_continue_enabled",!1);return r.jsx(C,{...t,sharedConversationId:e,isContinueEnabled:o})}export{q as default,Y as meta};
//# sourceMappingURL=jsek454ahoyfdnb0.js.map