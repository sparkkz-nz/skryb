/*! Skryb runtime | Copyright 2026 Stuart Parkinson | Apache-2.0 | https://github.com/sparkkz-nz/skryb */
"use strict";(()=>{var Tt=["N","S","E","W","NE","NW","SE","SW","n","s","e","w","ne","nw","se","sw"],Te=["background","pale","light","neutral","dark","accent-soft","accent","accent-strong","note","success","warning","danger","highlight","none"],An=["flowchart","sequence"],jt=["auto","light","dark"],Mn=["right","down","left","up"],$o=["actor"],Ot=["solid","dashed"],xt=["rounded-rectangle","circle","oval","database","diamond","rhombus","flattened-hexagon","chevron","right-chevron","document","text"],ce=["top","right","bottom","left"],wt=["orthogonal","straight","curved"],We=["solid","dotted","dashed","double"],Le=["none","arrow","circle"],Ct={start:"none",end:"arrow"},Do=["top","center"],Fo=["left","center","right"],Tn={width:50,height:20},Cn={width:50,height:20},V={shape:"rounded-rectangle",label:"New node",width:190,height:80},qe=(t,e,n,o,r,i,s,a,c,d,l,u,h)=>({background:t,pale:e,light:n,neutral:o,dark:r,"accent-soft":i,accent:s,"accent-strong":a,note:c,success:d,warning:l,danger:u,highlight:h,none:w("None","none","none",t.text)}),w=(t,e,n,o,r,i)=>({label:t,fill:e,stroke:n,text:o,gradient:r,glow:i}),fe={classic:{label:"Classic",light:qe(w("Background","#FFFFFF","#D1D5DB","#111827"),w("Pale","#F3F4F6","#9CA3AF","#1F2937"),w("Light","#E5E7EB","#6B7280","#1F2937"),w("Neutral","#D1D5DB","#4B5563","#111827"),w("Dark","#374151","#111827","#F9FAFB"),w("Soft","#DBEAFE","#60A5FA","#1E3A8A"),w("Accent","#BFDBFE","#2563EB","#1E3A8A","#EFF6FF"),w("Strong","#2563EB","#1D4ED8","#FFFFFF","#3B82F6","#60A5FA"),w("Note","#DBEAFE","#2563EB","#1E3A8A"),w("Success","#DCFCE7","#16A34A","#14532D"),w("Warning","#FFEDD5","#EA580C","#7C2D12"),w("Danger","#FEE2E2","#DC2626","#7F1D1D"),w("Highlight","#FEF9C3","#CA8A04","#713F12")),dark:qe(w("Background","#111827","#374151","#F9FAFB"),w("Pale","#1F2937","#4B5563","#F3F4F6"),w("Light","#374151","#6B7280","#F9FAFB"),w("Neutral","#4B5563","#9CA3AF","#FFFFFF"),w("Dark","#9CA3AF","#D1D5DB","#111827"),w("Soft","#172554","#3B82F6","#DBEAFE"),w("Accent","#1E3A8A","#60A5FA","#EFF6FF","#172554"),w("Strong","#2563EB","#93C5FD","#FFFFFF","#1D4ED8","#60A5FA"),w("Note","#172554","#60A5FA","#DBEAFE"),w("Success","#052E16","#4ADE80","#DCFCE7"),w("Warning","#431407","#FB923C","#FFEDD5"),w("Danger","#450A0A","#F87171","#FEE2E2"),w("Highlight","#422006","#FACC15","#FEF9C3"))},fire:{label:"Fire",light:qe(w("Background","#FBFAF9","#D9D2CC","#1F1B19"),w("Pale","#F4F1ED","#C7BDB6","#282320"),w("Light","#E9E2DC","#A2948B","#282320"),w("Neutral","#D5CAC2","#8A6D59","#241B15"),w("Dark","#3D312A","#221913","#FFF2E4"),w("Soft","#FDECDD","#E7A672","#7A3B12"),w("Accent","#FBD8BA","#D2691E","#6A2D07","#FFF3E8"),w("Strong","#D2521C","#A6380D","#FFFFFF","#F0873C","#FFA867"),w("Note","#F7EBDD","#A9784C","#523A22"),w("Success","#E7F2D9","#5F8C2B","#2C4310"),w("Warning","#FFEACB","#E08600","#6D3C00"),w("Danger","#FFE1DB","#D93A1F","#6D1708"),w("Highlight","#FFF6CB","#D9A400","#5B4200")),dark:qe(w("Background","#171413","#3A3330","#E7E2DE"),w("Pale","#1F1B19","#4A413C","#EDE8E3"),w("Light","#2B2522","#695C54","#F5EFE9"),w("Neutral","#3E3430","#A08674","#FFF3E7"),w("Dark","#C9B29F","#E4D3C4","#191412"),w("Soft","#3A2415","#C4763A","#FFE7D2"),w("Accent","#5A2E12","#F0873C","#FFEDDD","#47240F"),w("Strong","#E2571B","#FFB27A","#FFFFFF","#B33C0E","#FF8A3D"),w("Note","#302319","#BE8C5A","#F6E4D0"),w("Success","#1F2E14","#8FBF52","#E7F4D5"),w("Warning","#4A2A05","#FFA726","#FFE9C4"),w("Danger","#4B1108","#FF6B52","#FFE0DA"),w("Highlight","#453206","#FFD54A","#FFF6D2"))},ice:{label:"Ice",light:qe(w("Background","#F8FCFF","#D8EAF4","#123040"),w("Pale","#EDF8FC","#B8DCEB","#123040"),w("Light","#D9F2FF","#88BED7","#123040"),w("Neutral","#B8DCEB","#4A8BAA","#123040"),w("Dark","#21536C","#123040","#F4FBFF"),w("Soft","#DDF5FF","#75C6E8","#0F4C67"),w("Accent","#BDEAFF","#2E91BF","#083B55","#E8F9FF"),w("Strong","#1976A3","#0E5E85","#FFFFFF","#43B3E8","#8DDBF7"),w("Note","#DCEFFF","#3182CE","#123A63"),w("Success","#DDF7EE","#1E9B68","#104B35"),w("Warning","#FFF0D8","#D97918","#6B3510"),w("Danger","#FFE4E7","#D9485F","#651C2A"),w("Highlight","#FFF8C9","#C69A13","#5E4900")),dark:qe(w("Background","#0C1D29","#26475A","#E8F7FF"),w("Pale","#112B3A","#376176","#E8F7FF"),w("Light","#173B4D","#4A7B92","#F0FAFF"),w("Neutral","#28576B","#79AFC3","#F4FBFF"),w("Dark","#A3D6E9","#D4F2FF","#0C1D29"),w("Soft","#10384E","#4AB5DF","#DDF7FF"),w("Accent","#15526D","#72CEF2","#ECFBFF","#123C52"),w("Strong","#2186B5","#94DCF5","#FFFFFF","#176A91","#64CEF2"),w("Note","#122E4B","#62A9F5","#DCEFFF"),w("Success","#103D32","#4DD69A","#DDF7EE"),w("Warning","#4B2C0D","#F3A34C","#FFF0D8"),w("Danger","#4B1923","#F07A8C","#FFE4E7"),w("Highlight","#4A3D0A","#E6C54B","#FFF8C9"))},midnight:{label:"Midnight",light:qe(w("Background","#F5F7FC","#CAD3E4","#101D38"),w("Pale","#E9EEF8","#B6C4DC","#172744"),w("Light","#D9E2F2","#91A5C5","#172744"),w("Neutral","#C1CEE1","#6F85A6","#14223C"),w("Dark","#243B63","#1B3155","#F5F8FF"),w("Soft","#DCE7FA","#93A9CE","#1A3158"),w("Accent","#C9DBFA","#5E7FB4","#152D54","#D6E3F8"),w("Strong","#345F9D","#2C548D","#FFFFFF","#416EAE","#6F91C2"),w("Note","#DBE7F8","#5277AE","#1D355D"),w("Success","#DDEFE8","#3E886A","#173F31"),w("Warning","#F8E9D1","#B9702D","#5D3513"),w("Danger","#F4E0E5","#AD5570","#591F30"),w("Highlight","#F8F0C9","#A88222","#554300")),dark:qe(w("Background","#081426","#1F3554","#E8F0FF"),w("Pale","#0D1C32","#2A4265","#E5EEFF"),w("Light","#132843","#3A557A","#EDF4FF"),w("Neutral","#1E385B","#59779E","#EEF5FF"),w("Dark","#91A9C9","#AFC2DB","#0A172A"),w("Soft","#112B4D","#527AA9","#E1EEFF"),w("Accent","#173B68","#6389BA","#ECF4FF","#1B416E"),w("Strong","#2C629F","#6D98CD","#FFFFFF","#356FAF","#6D98CD"),w("Note","#132A4A","#6D96C8","#DDEAFF"),w("Success","#123B31","#5FBA91","#DDF3E8"),w("Warning","#422C14","#D09150","#FBEAD1"),w("Danger","#431E2B","#D27691","#F8E1E8"),w("Highlight","#403710","#C5A543","#FAF2CA"))},paper:{label:"Paper",light:qe(w("Background","#FFFDF7","#E0D8C8","#332D24"),w("Pale","#F7F1E5","#D4C5AD","#40372C"),w("Light","#EEE3D0","#BBA98B","#40372C"),w("Neutral","#D8C8AF","#8C765A","#332D24"),w("Dark","#514536","#332D24","#FFFCF5"),w("Soft","#EEE8DC","#A99879","#44392B"),w("Accent","#E8DDC7","#947044","#3E2D1D","#F7F0E4"),w("Strong","#81592F","#62401F","#FFFFFF","#A77A44","#D3B37B"),w("Note","#E5EFF4","#517B98","#233E50"),w("Success","#E4F0DF","#5D8A54","#294527"),w("Warning","#F9E8CD","#B96B28","#64350D"),w("Danger","#F5E0DA","#AD5342","#5D251C"),w("Highlight","#F8F0BD","#A78216","#584600")),dark:qe(w("Background","#29251F","#554B3E","#F9F2E6"),w("Pale","#373027","#6F6250","#F9F2E6"),w("Light","#4A4033","#8B7B64","#FFF9EE"),w("Neutral","#675947","#A89880","#FFF9EE"),w("Dark","#CBBCA4","#E8DBC7","#30291F"),w("Soft","#463B2D","#B6A080","#FFF8E9"),w("Accent","#5C482F","#D1B98A","#FFF9EE","#483622"),w("Strong","#916C3C","#E0C28B","#FFFFFF","#705029","#CFAA69"),w("Note","#273A46","#7DB2D0","#E5EFF4"),w("Success","#31452B","#9BC58F","#E4F0DF"),w("Warning","#503016","#E3A060","#F9E8CD"),w("Danger","#51281F","#DA8A79","#F5E0DA"),w("Highlight","#4A3D12","#D6BC48","#F8F0BD"))}},No={light:{edge:{stroke:"#52616B",strokeWidth:2,text:"#3E4A54"},node:{fill:"#EAF2FF",stroke:"#3574C7",strokeWidth:2,text:"#17202A"}},dark:{edge:{stroke:"#B8C7D5",strokeWidth:2,text:"#D9E4ED"},node:{fill:"#193A61",stroke:"#71AEF7",strokeWidth:2,text:"#F3F8FC"}}};var Ao=["note","info","warning","success"],Mo={2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))","2fr 1fr":"minmax(0, 2fr) minmax(0, 1fr)","1fr 2fr":"minmax(0, 1fr) minmax(0, 2fr)"};function at(t){if(t==="light"||t==="dark")return t;if(t==="auto")return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches?"dark":"light";throw new Error(`Unsupported document theme: ${t}`)}function Lt(t,e="light"){let n=at(e),o=No[n];if(!o)throw new Error(`Unsupported diagram theme: ${n}`);return o}function ve(t,e,n){return(Object.prototype.hasOwnProperty.call(fe,t)?fe[t]:void 0)?.[at(e)]?.[n]||null}function Pe(t,e){return{...t,...e||{}}}function Gt(t,e){return e&&t.styles?.[e]||null}function st(t,e,n="light",o="classic"){let i=Lt(t,n).node,s=e.shape==="text"?{fill:"none",stroke:"none"}:null,a=Gt(t,e.class),c=a?.palette?ve(o,n,a.palette):null,d=e.palette?ve(o,n,e.palette):null;return Pe(Pe(Pe(Pe(Pe(i,s),c),a?.style),d),e.style)}function Et(t,e,n="light",o="classic"){let r=Lt(t,n),i=e.palette?ve(o,n,e.palette):null;return Pe(Pe(r.node,i),e.style)}function St(t,e,n="light",o="classic"){let r=Lt(t,n),i=fe[o][at(n)],s=Gt(t,e.class);return Pe(Pe({...r.edge,stroke:i.neutral.fill,text:i.background.text},s?.style),e.style)}function Ln(t,e){let n=e==="start"?t.start:t.end;return typeof n=="string"&&Le.includes(n)?n:Ct[e]}function ae(t){let e=Number(t.canvas?.grid);return Number.isFinite(e)&&e>0?e:0}function I(t,e){return e?Math.round(t/e)*e:Math.round(t)}function Vt(t,e,n){let o=I(t,n),r=n?Math.ceil(e/n)*n:e;return Math.max(r,o)}function To(t){return{width:Number(t.size?.width)||V.width,height:Number(t.size?.height)||V.height}}var Y=class{constructor(e){this.entriesById=new Map;this.entriesByNode=new Map;this.ranges=new Map;let n=[],o=(r,i,s,a)=>{for(let c of r){let d={x:s.x+(Number(c.position?.x)||0),y:s.y+(Number(c.position?.y)||0)},l={node:c,parent:i,siblings:r,position:d,bounds:{...d,...To(c)},depth:a},u=n.length;n.push(l),this.entriesById.set(c.id,this.entriesById.get(c.id)||l),this.entriesByNode.set(c,l),o(c.children||[],c,d,a+1),this.ranges.set(c,{start:u,end:n.length})}};o(e.nodes,null,{x:0,y:0},0),this.entries=n}getById(e){return this.entriesById.get(e)||null}getByNode(e){return this.entriesByNode.get(e)||null}contains(e,n){let o=this.ranges.get(e),r=this.ranges.get(n);return!!(o&&r&&r.start>o.start&&r.start<o.end)}isRelated(e,n){return e===n||this.contains(e,n)||this.contains(n,e)}descendants(e){let n=this.ranges.get(e);return n?this.entries.slice(n.start+1,n.end):[]}};function be(t,e){return new Y(t).getById(e)}function vt(t,e){return new Y(t).getByNode(e)?.bounds||{x:0,y:0,...To(e)}}function Co(t,e){var p;let n=new Y(t),o=n.getById(e);if(!o)return null;let{node:r,siblings:i,position:s}=o,{width:a,height:c}=o.bounds,d={x:s.x+a/2,y:s.y+c/2},u=n.entries.filter(g=>g.node!==r&&!n.contains(r,g.node)).filter(({bounds:g})=>d.x>=g.x&&d.x<=g.x+g.width&&d.y>=g.y&&d.y<=g.y+g.height).reduce((g,m)=>!g||m.depth>=g.depth?m:g,null),h=u?(p=u.node).children||(p.children=[]):t.nodes;return i===h||(i.splice(i.indexOf(r),1),r.position={x:s.x-(u?.position.x||0),y:s.y-(u?.position.y||0)},h.push(r)),r}function Pn(t){if(typeof t!="string"||!t.startsWith("#"))return null;try{return decodeURIComponent(t.slice(1))||null}catch{return null}}function Pt(t){if(typeof t!="string"||/[\s\u0000-\u001f\u007f<>"`\\]/.test(t))return null;let e=Pn(t);return e?.trim()&&!/[\u0000-\u001f\u007f]/.test(e)&&!e.includes(":~:")?e:null}function kt(t){return Pt(t)!==null}var Ue=class extends Error{constructor(n){super(`Node "${n}" href must be a non-empty same-document fragment string, such as "#detail".`);this.nodeId=n}};function ct(t,e,n){let o=Math.min(t.x,e.x),r=Math.max(t.x,e.x),i=Math.min(t.y,e.y),s=Math.max(t.y,e.y);if(r<=n.x||o>=n.x+n.width||s<=n.y||i>=n.y+n.height)return!1;if(t.x===e.x||t.y===e.y)return!0;let a=d=>(e.x-t.x)*(d.y-t.y)-(e.y-t.y)*(d.x-t.x),c=[{x:n.x,y:n.y},{x:n.x+n.width,y:n.y},{x:n.x+n.width,y:n.y+n.height},{x:n.x,y:n.y+n.height}].map(a);return c.some(d=>d>0)&&c.some(d=>d<0)}function Wt(t,e){return t.slice(1).some((n,o)=>e.some(r=>ct(t[o],n,r)))}var hi=20,pi=220;function Lo(t){return[...new Set(t.map(e=>Math.round(e*100)/100))].sort((e,n)=>e-n)}var Rn=[{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}];function Po(t){return t.x>0?0:t.x<0?1:t.y>0?2:3}function Bn(t,e,n,o,r,i=24,s=hi){let a={x:t.x+n.x*i,y:t.y+n.y*i},c={x:e.x+o.x*i,y:e.y+o.y*i},d=Lo([t.x,e.x,a.x,c.x,...r.flatMap(A=>[A.x-s,A.x+A.width+s])]),l=Lo([t.y,e.y,a.y,c.y,...r.flatMap(A=>[A.y-s,A.y+A.height+s])]),u=new Map(d.map((A,P)=>[A,P])),h=new Map(l.map((A,P)=>[A,P])),p=A=>{let P=u.get(Math.round(A.x*100)/100),N=h.get(Math.round(A.y*100)/100);return P===void 0||N===void 0?null:{column:P,row:N}},g=p(a),m=p(c);if(!g||!m)return null;let f=(A,P)=>!r.some(N=>ct(A,P,N));if(!f(t,a)||!f(e,c))return null;let b=d.length*l.length*4,v=(A,P,N)=>(P*d.length+A)*4+N,E=new Float64Array(b).fill(Number.POSITIVE_INFINITY),S=new Int32Array(b).fill(-1),x=Po({x:-o.x,y:-o.y}),y=Po(n),F=v(g.column,g.row,y);E[F]=0;let D=[{key:F,cost:0}],M=-1;for(;D.length;){D.sort((oe,de)=>oe.cost-de.cost||oe.key-de.key);let A=D.shift();if(A.cost>E[A.key])continue;let P=A.key%4,N=(A.key-P)/4,q=N%d.length,H=(N-q)/d.length;if(q===m.column&&H===m.row&&P===x){M=A.key;break}let O={x:d[q],y:l[H]};for(let oe=0;oe<4;oe=oe+1){let de=Rn[oe];if(de.x===-Rn[P].x&&de.y===-Rn[P].y)continue;let De=q+de.x,Fe=H+de.y;if(De<0||De>=d.length||Fe<0||Fe>=l.length)continue;let T={x:d[De],y:l[Fe]};if(!f(O,T))continue;let _=A.cost+Math.hypot(T.x-O.x,T.y-O.y)+(oe===P?0:pi),le=v(De,Fe,oe);_<E[le]&&(E[le]=_,S[le]=A.key,D.push({key:le,cost:_}))}}if(M===-1)return null;let R=[];for(let A=M;A!==-1;A=S[A]){let P=A%4,N=(A-P)/4,q=N%d.length,H=(N-q)/d.length;R.unshift({x:d[q],y:l[H]})}return In([t,...R,e])}function In(t){let e=t.filter((n,o)=>o===0||n.x!==t[o-1].x||n.y!==t[o-1].y);return e.filter((n,o)=>{if(o===0||o===e.length-1)return!0;let r=e[o-1],i=e[o+1];return!(r.x===n.x&&n.x===i.x||r.y===n.y&&n.y===i.y)})}function Ro(t,e,n){let o=n.x-e.x,r=n.y-e.y,i=Math.hypot(o,r),s=u=>i?Math.abs(o*(u.y-e.y)-r*(u.x-e.x))/i:Math.hypot(u.x-e.x,u.y-e.y),c=[...t.slice(1,-1),...t.slice(1).map((u,h)=>({x:(t[h].x+u.x)/2,y:(t[h].y+u.y)/2}))];if(!c.length)return null;let d=Math.max(...c.map(s));if(!d)return null;let l={x:(e.x+n.x)/2,y:(e.y+n.y)/2};return c.filter(u=>s(u)===d).reduce((u,h)=>Math.hypot(h.x-l.x,h.y-l.y)<Math.hypot(u.x-l.x,u.y-l.y)?h:u)}function ge(t){return String(t??"").replace(/\r\n/g,`
`).split(`
`)}var fi="iljI|!.,;:'`()[]{}/\\",bi="tfr",yi="mwMW";function xi(t){return t===" "?.26:fi.includes(t)?.28:bi.includes(t)?.33:yi.includes(t)?.85:t>="0"&&t<="9"?.56:t>="A"&&t<="Z"?.66:.55}function ze(t,e,n=!1){let o=0;for(let r of String(t??""))o+=xi(r);return o*e*(n?1.03:1)}function Bo(t,e,n,o=!1){return e>0?t.flatMap(r=>{if(ze(r,n,o)<=e)return[r];let i=[],s="";for(let a of r.split(/(?<=\s)/)){let c=s+a;s&&ze(c.trimEnd(),n,o)>e?(i.push(s.trimEnd()),s=a.trimStart()):s=c}return i.push(s.trimEnd()),i.filter((a,c)=>a||!c)}):t}function ye(t,e,n,o,r,i,s="middle"){if(!n.length)return"";let a=n.map((c,d)=>{let l=d===0?"":` dy="${o}"`;return`<tspan x="${t}"${l}>${k(c)||" "}</tspan>`}).join("");return`<text x="${t}" y="${e}" text-anchor="${s}" class="${r}" fill="${k(i)}">${a}</text>`}function Ce(t,e,n,o,r){let i=t.shape,s=e+o/2,a=n+r/2,c={x:e+12,y:n+12,width:o-24,height:r-24},d={top:{x:s,y:n},right:{x:e+o,y:a},bottom:{x:s,y:n+r},left:{x:e,y:a}},l;if(i==="circle"){let u=Math.min(o,r),h=s-u/2,p=a-u/2,g=u/2;c.x=h+g*.3,c.y=p+g*.3,c.width=g*1.4,c.height=g*1.4,d.top.y=p,d.right.x=h+u,d.bottom.y=p+u,d.left.x=h,l=`<circle class="docdiagram-node-body" cx="${s}" cy="${a}" r="${g}"/>`}else if(i==="oval")c.x+=o*.1,c.width-=o*.2,l=`<ellipse class="docdiagram-node-body" cx="${s}" cy="${a}" rx="${o/2}" ry="${r/2}"/>`;else if(i==="database"){let u=Math.min(r*.22,18);c.y+=u/2,c.height-=u,l=`<path class="docdiagram-node-body" d="M ${e} ${n+u} C ${e} ${n-u/3} ${e+o} ${n-u/3} ${e+o} ${n+u} V ${n+r-u} C ${e+o} ${n+r+u/3} ${e} ${n+r+u/3} ${e} ${n+r-u} Z"/><path class="docdiagram-node-detail" d="M ${e} ${n+u} C ${e} ${n+u*2.3} ${e+o} ${n+u*2.3} ${e+o} ${n+u}" fill="none"/>`}else if(i==="diamond")c.x+=o*.25,c.y+=r*.25,c.width-=o*.5,c.height-=r*.5,d.top={x:s,y:n},d.right={x:e+o,y:a},d.bottom={x:s,y:n+r},d.left={x:e,y:a},l=`<polygon class="docdiagram-node-body" points="${s},${n} ${e+o},${a} ${s},${n+r} ${e},${a}"/>`;else if(i==="rhombus"){let u=Math.min(o*.2,r*.6);c.x+=u,c.width-=u*2,d.left.x=e+u/2,d.right.x=e+o-u/2,l=`<polygon class="docdiagram-node-body" points="${e+u},${n} ${e+o},${n} ${e+o-u},${n+r} ${e},${n+r}"/>`}else if(i==="flattened-hexagon"){let u=Math.min(o*.18,r*.7);c.x+=u,c.width-=u*2,l=`<polygon class="docdiagram-node-body" points="${e+u},${n} ${e+o-u},${n} ${e+o},${a} ${e+o-u},${n+r} ${e+u},${n+r} ${e},${a}"/>`}else if(i==="chevron"){let u=Math.min(o*.16,r*.45);c.x+=u*1.175,c.width-=u*1.35,d.left.x=e+u,l=`<polygon class="docdiagram-node-body" points="${e},${n} ${e+o-u},${n} ${e+o},${a} ${e+o-u},${n+r} ${e},${n+r} ${e+u},${a}"/>`}else if(i==="right-chevron"){let u=Math.min(o*.16,r*.45);c.width-=u,l=`<polygon class="docdiagram-node-body" points="${e},${n} ${e+o-u},${n} ${e+o},${a} ${e+o-u},${n+r} ${e},${n+r}"/>`}else if(i==="document"){let u=Math.max(12,Math.min(26,Math.min(o,r)*.18));c.width-=u*.45,c.y+=2,c.height-=2,l=`<path class="docdiagram-node-body" d="M ${e} ${n} H ${e+o-u} L ${e+o} ${n+u} V ${n+r} H ${e} Z M ${e+o-u} ${n} V ${n+u} H ${e+o}"/>`}else i==="text"?l=`<rect class="docdiagram-node-body" x="${e}" y="${n}" width="${o}" height="${r}"/>`:l=`<rect class="docdiagram-node-body" x="${e}" y="${n}" width="${o}" height="${r}" rx="12"/>`;return{bodyMarkup:l,textBounds:c,anchors:d}}function Dt(t,e,n,o,r){let i,s;typeof t=="number"?(i={x:t,y:e,width:n||0,height:o||0},s=r):(i=t,s=e);let a=20,c=15,d=Bo(ge(s.label),i.width,16,!0),l=s.subtitle?Bo(ge(s.subtitle),i.width,13):[],u=l.length?6:0,h=d.length*a,p=l.length*c,g=h+u+p,m=s.textHAlign||"center",f=m==="left"?i.x:m==="right"?i.x+i.width:i.x+i.width/2,b=m==="left"?"start":m==="right"?"end":"middle",v=i.y+i.height/2,E=s.textVAlign==="top"?i.y:v-g/2;return{centerX:f,textAnchor:b,labelLines:d,subtitleLines:l,labelLineHeight:a,subtitleLineHeight:c,labelStartY:E+a*.72,subtitleStartY:E+h+u+c*.72}}function Ut(t,e,n,o="solid",r="#ffffff"){let i=(a,c,d,l="",u=!1)=>t.bodyMarkup.replace('class="docdiagram-node-body"',`class="${u?"docdiagram-node-stroke-gap":"docdiagram-node-body"}"`).replace("/>",` fill="${k(a)}" stroke="${k(c)}" stroke-width="${d}"${l}/>`).replace('class="docdiagram-node-detail"',`class="docdiagram-node-detail${u?" docdiagram-node-stroke-gap":""}" stroke="${k(c)}" stroke-width="${d}"${l}`),s=o==="dotted"?' stroke-linecap="round" stroke-dasharray="1 6"':o==="dashed"?' stroke-dasharray="8 6"':"";return o==="double"?i(e.fill||"",e.stroke||"",n*3)+i("none",r,n,"",!0):i(e.fill||"",e.stroke||"",n,s)}function Io(t){return{top:{x:0,y:-1},right:{x:1,y:0},bottom:{x:0,y:1},left:{x:-1,y:0}}[t]}function ne(t){return`${t.x} ${t.y}`}function qo(t){let e=t.slice(1).map((r,i)=>{let s=t[i];return{start:s,end:r,length:Math.hypot(r.x-s.x,r.y-s.y)}}),o=e.reduce((r,i)=>r+i.length,0)/2;for(let r of e){if(o<=r.length||r===e[e.length-1]){let i=r.length?o/r.length:0;return{x:r.start.x+(r.end.x-r.start.x)*i,y:r.start.y+(r.end.y-r.start.y)*i}}o-=r.length}return t[0]}function qn(t,e){return Math.min(Math.max(Math.abs(e.x-t.x),Math.abs(e.y-t.y),80)/2,140)}var wi={along:t=>t.x,cross:t=>t.y,point:(t,e)=>({x:t,y:e})},Ei={along:t=>t.y,cross:t=>t.x,point:(t,e)=>({x:e,y:t})},$t=24;function Si(t,e,n,o,r,i){let s=r.along(t),a=r.cross(t),c=r.along(e),d=r.cross(e),l=r.along(n),u=r.cross(o);if(Math.sign(c-s)===l&&Math.sign(a-d)===u)return[t,r.point(c,a),e];let h=Math.sign(c-s)===l?(s+c)/2:s+l*i,p=Math.sign(a-d)===u?(a+d)/2:d+u*i;return[t,r.point(h,a),r.point(h,p),r.point(c,p),e]}function vi(t,e,n,o,r,i){let s=r.along(t),a=r.cross(t),c=r.along(e),d=r.cross(e),l=r.along(n),u=r.along(o),h=Math.sign(c-s)===l;if(l===-u&&h)return a===d?[t,e]:[t,r.point((s+c)/2,a),r.point((s+c)/2,d),e];if(l===u&&Math.abs(a-d)>=$t){let b=l>0?Math.max(s,c)+$t:Math.min(s,c)-$t;return[t,r.point(b,a),r.point(b,d),e]}let p=i*2,g=s+l*p,m=c+u*p;if(g===m)return[t,r.point(g,a),r.point(g,d),e];let f=Math.min(a,d)-p;return[t,r.point(g,a),r.point(g,f),r.point(m,f),r.point(m,d),e]}function ki(t,e,n,o){if(t.x===e.x&&t.y===e.y)return[t,e];let r=Math.max(Math.abs(e.x-t.x),Math.abs(e.y-t.y)),i=Math.max(r/4,$t),s=n.x!==0,a=s?wi:Ei;return s===(o.x!==0)?vi(t,e,n,o,a,i):Si(t,e,n,o,a,i)}function $i(t,e,n){for(let[o,r]of[[t,e],[t,n],[n,e]]){let i=Math.hypot(r.x-o.x,r.y-o.y);if(i>0)return{x:(r.x-o.x)/i,y:(r.y-o.y)/i}}return{x:1,y:0}}function Qe(t,e,n,o,r="orthogonal",i,s){let a=Io(n),c=Io(o),d=a.x!==0,l=c.x!==0;if(!i&&s?.length&&r!=="orthogonal"&&Wt([t,e],s))for(let m of[20,60,120]){let f=Bn(t,e,a,c,s,$t,m),b=f&&Ro(f,t,e);if(!b)continue;let v=Qe(t,e,n,o,r,b);if(!Wt(Bt(v.path),s)){i=b;break}}let u,h,p,g;if(i&&r==="straight")u=`M ${ne(t)} L ${ne(i)} L ${ne(e)}`,h=i,p={x:i.x-t.x,y:i.y-t.y},g={x:e.x-i.x,y:e.y-i.y};else if(i&&r==="curved"){let m=qn(t,i),f=qn(i,e),b=$i(t,e,i),v={x:t.x+a.x*m,y:t.y+a.y*m},E={x:i.x-b.x*m,y:i.y-b.y*m},S={x:i.x+b.x*f,y:i.y+b.y*f},x={x:e.x+c.x*f,y:e.y+c.y*f};u=[`M ${ne(t)}`,`C ${ne(v)} ${ne(E)} ${ne(i)}`,`C ${ne(S)} ${ne(x)} ${ne(e)}`].join(" "),h=i,p={x:v.x-t.x,y:v.y-t.y},g={x:e.x-x.x,y:e.y-x.y}}else if(i){let f=(i.x-t.x)*a.x+(i.y-t.y)*a.y<=0,b=(i.x-e.x)*c.x+(i.y-e.y)*c.y<=0,v={x:t.x+a.x*24,y:t.y+a.y*24},E={x:e.x+c.x*24,y:e.y+c.y*24},S=f?[t,v,d?{x:v.x,y:i.y}:{x:i.x,y:v.y},i]:[t,d?{x:i.x,y:t.y}:{x:t.x,y:i.y},i],x=b?[l?{x:E.x,y:i.y}:{x:i.x,y:E.y},E,e]:[l?{x:i.x,y:e.y}:{x:e.x,y:i.y},e],y=[...S,...x].filter((D,M,R)=>M===0||D.x!==R[M-1].x||D.y!==R[M-1].y);u=`M ${ne(y[0])}${y.slice(1).map(D=>` L ${ne(D)}`).join("")}`,h=qo(y),p={x:y[1].x-y[0].x,y:y[1].y-y[0].y};let F=y.slice(-2);g={x:F[1].x-F[0].x,y:F[1].y-F[0].y}}else if(r==="straight")u=`M ${ne(t)} L ${ne(e)}`,h={x:(t.x+e.x)/2,y:(t.y+e.y)/2},p={x:e.x-t.x,y:e.y-t.y},g=p;else if(r==="curved"){let m=qn(t,e),f={x:t.x+a.x*m,y:t.y+a.y*m},b={x:e.x+c.x*m,y:e.y+c.y*m};u=`M ${ne(t)} C ${ne(f)} ${ne(b)} ${ne(e)}`,h={x:(t.x+3*f.x+3*b.x+e.x)/8,y:(t.y+3*f.y+3*b.y+e.y)/8},p={x:f.x-t.x,y:f.y-t.y},g={x:e.x-b.x,y:e.y-b.y}}else{let m=ki(t,e,a,c),f=m.filter((v,E)=>E===0||v.x!==m[E-1].x||v.y!==m[E-1].y);if(f.length===1&&(f=[t,e]),s?.length&&Wt(f,s)){let v=Bn(t,e,a,c,s,$t);v&&(f=In(v))}u=`M ${ne(f[0])}${f.slice(1).map(v=>` L ${ne(v)}`).join("")}`,h=qo(f),p={x:f[1].x-f[0].x,y:f[1].y-f[0].y};let b=f.slice(-2);g={x:b[1].x-b[0].x,y:b[1].y-b[0].y}}return{path:u,midpoint:h,startTangent:p,endTangent:g,hitPath:u}}function zn(t,e){let n=e?13:15;return{x:t.x-n/2,y:t.y-n/2,size:n,radius:e?2:n/2,transform:e?`rotate(45 ${t.x} ${t.y})`:""}}function zo(t,e,n,o){let r=zn(n,o),i=o?"Anchored edge waypoint":"Edge waypoint";return`<rect class="docdiagram-edge-waypoint" data-diagram-index="${t}" data-edge-index="${e}" data-anchored="${o}" x="${r.x}" y="${r.y}" width="${r.size}" height="${r.size}" rx="${r.radius}"${r.transform?` transform="${r.transform}"`:""} aria-label="${i}"/>`}function Di(t){let e=Math.max(1,Number(t)||2),n=6+e*2.5,o=Math.max(n*.38,e/2+1);return{size:n,circleRadius:o}}function Rt(t,e,n,o,r){let i=k(o),{size:s,circleRadius:a}=Di(r),c=s/2;return e==="arrow"?`<marker id="${t}" markerWidth="${s}" markerHeight="${s}" refX="${s}" refY="${c}" markerUnits="userSpaceOnUse" orient="${n==="start"?"auto-start-reverse":"auto"}"><path fill="${i}" stroke="${i}" d="M 0 0 L ${s} ${c} L 0 ${s} z"/></marker>`:e==="circle"?`<marker id="${t}" markerWidth="${s}" markerHeight="${s}" refX="${c}" refY="${c}" markerUnits="userSpaceOnUse"><circle cx="${c}" cy="${c}" r="${a}" fill="${i}" stroke="${i}"/></marker>`:""}function Yt(t,e){let n={x:t.x+t.width/2,y:t.y+t.height/2},o=e.x-n.x,r=e.y-n.y,i=Math.hypot(o,r);if(!Number.isFinite(i)||i<1)return null;let s=Math.max(6,Math.min(Math.min(t.width,t.height)*.28,i*.6,44)),a={x:-r/i*s,y:o/i*s},c=[{x:n.x+a.x,y:n.y+a.y},{x:e.x,y:e.y},{x:n.x-a.x,y:n.y-a.y}],d=[...c.map(p=>p.x),t.x,t.x+t.width],l=[...c.map(p=>p.y),t.y,t.y+t.height],u=Math.min(...d),h=Math.min(...l);return{points:c,polygonPoints:c.map(p=>`${p.x},${p.y}`).join(" "),bounds:{x:u,y:h,width:Math.max(...d)-u,height:Math.max(...l)-h}}}function Fi(t,e,n){let o=t.indexOf('<path class="docdiagram-node-detail"');return(o===-1?t:t.slice(0,o)).replace('class="docdiagram-node-body"',`class="${n}"`).replace("/>",` fill="${e}" stroke="none"/>`)}function Hn(t){return Fi(t,"#000000","docdiagram-node-callout-mask-body")}function jn(t,e){let n=e*2+8;return{x:t.bounds.x-n,y:t.bounds.y-n,width:t.bounds.width+n*2,height:t.bounds.height+n*2}}function Ho(t,e,n,o,r){let i=!!n.fill&&n.fill!=="none",s=!!n.stroke&&n.stroke!=="none",a=i?n.fill:s?"none":n.text||"none",c=jn(t,o),d=[`<mask id="${r}" maskUnits="userSpaceOnUse" x="${c.x}" y="${c.y}" width="${c.width}" height="${c.height}">`,`<rect class="docdiagram-node-callout-mask-region" x="${c.x}" y="${c.y}" width="${c.width}" height="${c.height}" fill="#ffffff"/>`,Hn(e),"</mask>"].join(""),l=i?"":` mask="url(#${r})"`;return[d,a==="none"?"":`<polygon class="docdiagram-node-callout" points="${t.polygonPoints}" fill="${k(a||"")}" stroke="none"${l}/>`,s?`<polygon class="docdiagram-node-callout-outline" points="${t.polygonPoints}" fill="none" stroke="${k(n.stroke||"")}" stroke-width="${o}" stroke-linejoin="round" mask="url(#${r})"/>`:""].join("")}function Bt(t,e=12){let n=[],o=/-?\d+(?:\.\d+)?/g,r={x:0,y:0};for(let[,i,s]of t.matchAll(/([MLC])\s*([^MLC]*)/g)){let a=(s.match(o)||[]).map(Number);if(i==="C"){let[c,d,l,u,h,p]=a;for(let g=1;g<=e;g+=1){let m=g/e,f=1-m;n.push({x:f**3*r.x+3*f**2*m*c+3*f*m**2*l+m**3*h,y:f**3*r.y+3*f**2*m*d+3*f*m**2*u+m**3*p})}r={x:h,y:p};continue}for(let c=0;c+1<a.length;c+=2)r={x:a[c],y:a[c+1]},n.push(r)}return n}var Ni=15,Ft=16,On=6;function Ai(t){let e=Bt(t);return e.slice(1).map((n,o)=>({start:e[o],end:n,index:o,length:Math.hypot(n.x-e[o].x,n.y-e[o].y)})).filter(n=>n.length>0).sort((n,o)=>o.length-n.length||n.index-o.index)}function Mi(t,e){return{x:t.x-e,y:t.y-e,width:t.width+e*2,height:t.height+e*2}}function jo(t,e){return t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}function Oo(t,e){let n=Math.max(0,...t.map(i=>ze(i,Ni))),o=t.length*Ft,r={x:e.x-n/2,y:e.y-o/2,width:n,height:o};return{center:e,startY:r.y+Ft*.72,lines:t,bounds:r,clear:!0,conflicts:[]}}function Ti(t,e,n){let o={x:(t.start.x+t.end.x)/2,y:(t.start.y+t.end.y)/2},r=t.end.x-t.start.x,s={x:-(t.end.y-t.start.y)/t.length,y:r/t.length};(s.y>0||s.y===0&&s.x>0)&&(s={x:-s.x,y:-s.y});let a=Math.abs(s.x)*e/2+Math.abs(s.y)*n/2+On;return[{x:o.x+s.x*a,y:o.y+s.y*a},{x:o.x-s.x*a,y:o.y-s.y*a}]}function Ci(t,e,n,o,r){let i=Mi(t.bounds,On),s=[];e&&(t.bounds.x<e.x||t.bounds.y<e.y||t.bounds.x+t.bounds.width>e.x+e.width||t.bounds.y+t.bounds.height>e.y+e.height)&&s.push({kind:"canvas"});for(let a of n)jo(i,a.bounds)&&s.push({kind:"node",id:a.id});for(let a of o)jo(i,a.bounds)&&s.push({kind:"edge-label",edgeIndex:a.edgeIndex});for(let a of r)a.segments.some(c=>ct(c.start,c.end,i))&&s.push({kind:"edge-route",edgeIndex:a.edgeIndex});return s}function He(t,e=new Y(t),n={}){let o=t.edges.map(c=>{let d=e.getById(c.source),l=e.getById(c.target);if(!d||!l)return null;let u=Ce(d.node,d.bounds.x,d.bounds.y,d.bounds.width,d.bounds.height).anchors[c.sourceAnchor||"right"],h=Ce(l.node,l.bounds.x,l.bounds.y,l.bounds.width,l.bounds.height).anchors[c.targetAnchor||"left"],p=e.entries.filter(({node:m})=>!e.isRelated(m,d.node)&&!e.isRelated(m,l.node)),g=Qe(u,h,c.sourceAnchor||"right",c.targetAnchor||"left",c.route||"orthogonal",c.waypoint,c.waypoint?void 0:p.map(m=>m.bounds));return{sourceAnchor:u,targetAnchor:h,path:g,label:null}}),r=o.map((c,d)=>c?{edgeIndex:d,segments:Ai(c.path.path)}:null).filter(c=>!!c),i=[],a=n.ignoreCanvas??(t.canvas.auto&&t.edges.some(c=>c.ref!==void 0))?null:{x:0,y:0,width:Number(t.canvas.width)||1e3,height:Number(t.canvas.height)||560};return o.forEach((c,d)=>{let l=t.edges[d];if(!c||!l.label)return;let u=ge(l.label),h=Oo(u,{x:0,y:0}).bounds,p=r.find(v=>v.edgeIndex===d)?.segments||[],g=p.flatMap(v=>Ti(v,h.width,h.height).map(E=>({center:E,hostSegmentIndex:v.index})));g.length||g.push({center:{x:c.path.midpoint.x,y:c.path.midpoint.y-h.height/2-On},hostSegmentIndex:-1});let m=e.entries.map(({node:v,bounds:E})=>({id:v.id,bounds:E})),f=r.filter(v=>v.edgeIndex!==d),b=null;for(let{center:v,hostSegmentIndex:E}of g){let S=Oo(u,v),x=(l.route||"orthogonal")==="curved"?1:0,y=p.filter(F=>E<0||Math.abs(F.index-E)>x);if(S.conflicts=Ci(S,a,m,i,[...f,{edgeIndex:d,segments:y}]),S.clear=S.conflicts.length===0,b||(b=S),S.clear){b=S;break}}c.label=b,b&&i.push({edgeIndex:d,bounds:b.bounds})}),o}var Go={classic:["#1d4ed8","#93c5fd"],fire:["#1e40af","#a5c8ff"],ice:["#0369a1","#7dd3fc"],midnight:["#1e3a8a","#a5b4fc"],paper:["#245a81","#a6c9e5"]};function _e(t,e="Annotation ref"){let n=t;if(typeof t=="object"&&t!==null&&!Array.isArray(t)){let o=t;if(Object.keys(o).some(r=>r!=="label"&&r!=="position"))throw new Error(`${e} accepts only label and position fields.`);if(o.position!==void 0&&!Tt.includes(o.position))throw new Error(`${e} position must be one of: ${Tt.join(", ")}.`);n=o.label}if(!(typeof n=="number"&&Number.isFinite(n))&&!(typeof n=="string"&&n.trim()&&!/[\u0000-\u001f\u007f]/.test(n)))throw new Error(`${e} label must be a non-empty single-line string or a finite number.`)}function je(t){return String(typeof t=="object"?t.label:t)}function It(t){return typeof t=="object"?t.position??"NW":"NW"}function _t(t){let e=je(t);return{width:/^[0-9]{1,2}$/.test(e)?24:Math.max(32,Math.ceil(ze(e,14,!0)+16)),height:24}}function Ye(t,e,n=!1){let o=It(t),r=o.toUpperCase(),i=n||r===o,{width:s,height:a}=_t(t),c=4,d=r.includes("W")?i?e.x-s-c:e.x+c:r.includes("E")?i?e.x+e.width+c:e.x+e.width-s-c:e.x+(e.width-s)/2,l=r.includes("N")?i?e.y-a-c:e.y+c:r.includes("S")?i?e.y+e.height+c:e.y+e.height-a-c:e.y+(e.height-a)/2;return{x:d,y:l,width:s,height:a}}function Gn(t,e){if(!Object.prototype.hasOwnProperty.call(Go,t))throw new Error(`Unsupported annotation colour scheme: ${t}`);let n=Go[t];return at(e)==="dark"?{fill:n[1],text:"#10213b"}:{fill:n[0],text:"#ffffff"}}function Xt(t,e=new Y(t),n){let o=[];for(let r of e.entries)r.node.ref!==void 0&&o.push({kind:"node",id:r.node.id,ref:r.node.ref,target:r.bounds,bounds:Ye(r.node.ref,r.bounds)});if(t.edges.some(r=>r.ref!==void 0)){let r=n??He(t,e);t.edges.forEach((i,s)=>{let a=r[s];if(i.ref===void 0||!a)return;let c=a.label?.bounds??{...a.path.midpoint,width:0,height:0};o.push({kind:"edge",index:s,ref:i.ref,target:c,bounds:Ye(i.ref,c,!0)})})}return o}function dt(t,e,n,o){let r=k(je(t)),i=Gn(n,o),s={x:e.x+e.width/2,y:e.y+e.height/2};return`<g class="docdiagram-annotation-ref" role="img" aria-label="Reference ${r}" pointer-events="none"><title>Reference ${r}</title><rect aria-hidden="true" x="${e.x}" y="${e.y}" width="${e.width}" height="${e.height}" rx="${e.height/2}" fill="${i.fill}" stroke="none"/><text aria-hidden="true" x="${s.x}" y="${s.y}" text-anchor="middle" dominant-baseline="central" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="${i.text}">${r}</text></g>`}function Re(t,e){return t.includes(e)}function Li(t){return{x:Number(t.position?.x)||0,y:Number(t.position?.y)||0,width:Number(t.size?.width)||V.width,height:Number(t.size?.height)||V.height}}function Nt(t,e,n=40){return Vo(t,e,n)}function Vn(t,e=40){return Vo(t,null,e,!0)}function Vo(t,e,n=40,o=!1){let r=Number(t.canvas?.width)||1e3,i=Number(t.canvas?.height)||560,s=o||!!t.canvas?.auto,a=new Y(t),c=new Set(a.entries.map(x=>x.node)),d=[...c];e&&!d.includes(e)&&d.push(e);let l=x=>a.getByNode(x)?.bounds||Li(x),u=t.edges.some(x=>x.ref!==void 0),h=()=>{let x=u?He(t,a,{ignoreCanvas:!0}):void 0;return[...d.map(l),...Xt(t,a,x).map(y=>y.bounds),...(x||[]).flatMap(y=>y?.label?[y.label.bounds]:[]),...e&&!c.has(e)&&e.ref!==void 0?[Ye(e.ref,l(e))]:[],...d.filter(y=>y.arrow).map(y=>({x:y.arrow.x,y:y.arrow.y,width:0,height:0})),...(t.edges||[]).filter(y=>y.waypoint).map(y=>({x:y.waypoint.x,y:y.waypoint.y,width:0,height:0}))]},p=h(),g=Math.min(0,...p.map(x=>x.x)),m=Math.min(0,...p.map(x=>x.y)),f=g<0?n-g:0,b=m<0?n-m:0;if(f||b){for(let x of a.entries.filter(y=>y.parent===null)){let y=x.node;y.position={...y.position,x:(Number(y.position?.x)||0)+f,y:(Number(y.position?.y)||0)+b}}for(let x of d)x.arrow&&(x.arrow={x:x.arrow.x+f,y:x.arrow.y+b});for(let x of t.edges||[])x.waypoint&&(x.waypoint={x:x.waypoint.x+f,y:x.waypoint.y+b});a=new Y(t)}let v=h(),E=Math.max(2*n,...v.map(x=>x.x+x.width+n)),S=Math.max(2*n,...v.map(x=>x.y+x.height+n));return t.canvas={...t.canvas,width:s&&v.length?E:Math.max(r+f,E),height:s&&v.length?S:Math.max(i+b,S)},t}function Wo(t,e){return t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}function Pi(t,e="new-node"){let n=i=>i.flatMap(s=>[s.id,...n(s.children||[])]),o=new Set(n(t));if(!o.has(e))return e;let r=2;for(;o.has(`${e}-${r}`);)r+=1;return`${e}-${r}`}function Ri(t,e){let n=e.replace(/[^a-z0-9]/gi,"").toLowerCase()||"node",o=1,r="";do r=`${n}${String(o).padStart(2,"0")}`,o+=1;while(t.has(r));return t.add(r),r}function Bi(t,e,n,o,r){let i=Number(t.canvas?.width)||1e3,s=Number(t.canvas?.height)||560,a=ae(t),c=a||20,d={x:I(r.x,a),y:I(r.y,a)};for(let u=c;u<=Math.max(i,s);u+=c)for(let h of[{x:d.x+u,y:d.y+u},{x:d.x+u,y:d.y-u},{x:d.x-u,y:d.y+u},{x:d.x-u,y:d.y-u}])if(!(h.x<0||h.y<0||h.x+n>i||h.y+o>s)&&!e.entries.some(({bounds:p})=>Wo({...h,width:n,height:o},p)))return h;let l=Math.max(0,...e.entries.map(({bounds:u})=>u.x+u.width));return{x:I(l+c,a),y:0}}function Ii(t){let e=new Y(t),n=Number(t.canvas?.width)||1e3,o=Number(t.canvas?.height)||560,r=ae(t),i={x:I(Math.max(0,(n-V.width)/2),r),y:I(Math.max(0,(o-V.height)/2),r)},s=r||20;for(let a=0;a<=Math.max(n,o);a+=s)for(let c of[{x:i.x+a,y:i.y},{x:i.x-a,y:i.y},{x:i.x,y:i.y+a},{x:i.x,y:i.y-a}])if(!(c.x<0||c.y<0||c.x+V.width>n||c.y+V.height>o)&&!e.entries.some(({bounds:d})=>Wo({...c,width:V.width,height:V.height},d)))return c;return i}function Uo(t){let e={id:Pi(t.nodes),label:V.label,shape:V.shape,position:Ii(t),size:{width:V.width,height:V.height}};return t.nodes.push(e),e}function Zt(t,e){let n=new Y(t),o=n.getById(e);if(!o)return null;let r=new Set(n.entries.map(({node:l})=>l.id)),i=l=>({id:Ri(r,l.shape),label:l.label,...l.href!==void 0?{href:l.href}:{},...l.ref!==void 0?{ref:typeof l.ref=="object"?{...l.ref}:l.ref}:{},shape:l.shape,...l.position?{position:{...l.position}}:{},...l.size?{size:{...l.size}}:{},...l.style?{style:{...l.style}}:{},...l.palette?{palette:l.palette}:{},...l.strokeType?{strokeType:l.strokeType}:{},...l.subtitle!==void 0?{subtitle:l.subtitle}:{},...l.textVAlign!==void 0?{textVAlign:l.textVAlign}:{},...l.textHAlign!==void 0?{textHAlign:l.textHAlign}:{},...l.children?{children:l.children.map(i)}:{}}),s=i(o.node),a=o.bounds,c=Bi(t,n,Number(s.size?.width)||V.width,Number(s.size?.height)||V.height,a),d=o.parent?n.getByNode(o.parent)?.position||{x:0,y:0}:{x:0,y:0};return s.position={x:c.x-d.x,y:c.y-d.y},o.siblings.push(s),Nt(t,s),s}function Yo(t,e){if(e==="")delete t.href;else{if(!kt(e))throw new Error('Node href must be a non-empty same-document fragment string, such as "#detail".');t.href=e}return t}function _o(t,e){return e===""?(delete t.ref,t):(_e(e),t.ref!==void 0&&je(t.ref)===e||(t.ref=typeof t.ref=="object"?{...t.ref,label:e}:e),t)}function Xo(t,e){let n={label:t.ref===void 0?0:typeof t.ref=="object"?t.ref.label:t.ref,position:e};return _e(n),t.ref!==void 0&&(t.ref=n),t}function Ko(t,e,n,o,r){if(!Re(ce,n)||!Re(ce,r))throw new Error("Connector anchors must be supported edge anchors.");let i={source:e,target:o,sourceAnchor:n,targetAnchor:r,route:"orthogonal",end:"arrow"};return t.edges.push(i),i}function Zo(t,e,n,o){return Re(ce,o)&&(e==="source"?(t.source=n,t.sourceAnchor=o):(t.target=n,t.targetAnchor=o)),t}function Jt(t,e){return e<0||e>=t.edges.length?null:t.edges.splice(e,1)[0]}function Qt(t,e){let n=be(t,e);if(!n)return{node:null,deletedEdges:[]};let o=new Set([n.node,...n.node.children||[]].flatMap(function i(s){return[s,...(s.children||[]).flatMap(i)]}).map(i=>i.id)),r=t.edges.filter(i=>o.has(i.source)||o.has(i.target));return n.siblings.splice(n.siblings.indexOf(n.node),1),t.edges=t.edges.filter(i=>!o.has(i.source)&&!o.has(i.target)),t.canvas?.auto&&Vn(t),{node:e,deletedEdges:r}}function en(t,e){return t.label=String(e).trim(),t}function Jo(t,e){return Re(xt,e)&&(t.shape=e),t}function Qo(t,e){return t.subtitle=String(e??"").trim(),t}function er(t,e){return Re(We,e)&&(t.strokeType=e),t}function Wn(t,e,n){return e==="textVAlign"&&(n==="top"||n==="center")&&(t.textVAlign=n),e==="textHAlign"&&(n==="left"||n==="center"||n==="right")&&(t.textHAlign=n),t}function qt(t,e,n){return t.style={...t.style,[e]:n},t}function Un(t,e,n="classic"){if(!Re(Te,e)||!ve(n,"light",e))return t;let{fill:r,stroke:i,text:s,...a}=t.style||{};return Object.keys(a).length?t.style=a:delete t.style,t.palette=e,t}function tr(t){return t==="document"?Cn:Tn}function Yn(t){return{position:{x:Number(t.position?.x)||0,y:Number(t.position?.y)||0},size:{width:Number(t.size?.width)||V.width,height:Number(t.size?.height)||V.height},childPositions:new Map((t.children||[]).map(e=>[e,{x:Number(e.position?.x)||0,y:Number(e.position?.y)||0}]))}}function nr(t,e,n,o,r,i=Yn(e)){let s=ae(t),a=tr(e.shape),c=n.endsWith("left"),d=n.startsWith("top"),l=Vt(i.size.width+(c?-o:o),a.width,s),u=Vt(i.size.height+(d?-r:r),a.height,s);if(e.shape==="circle"){let m=Math.max(l,u);l=m,u=m}let h={...e.position,x:c?i.position.x+i.size.width-l:i.position.x,y:d?i.position.y+i.size.height-u:i.position.y},p=i.position.x-h.x,g=i.position.y-h.y;for(let m of e.children||[]){let f=i.childPositions.get(m)||m.position||{x:0,y:0};m.position={...m.position,x:f.x+p,y:f.y+g}}return e.position=h,e.size={...e.size,width:l,height:u},e}function _n(t,e,n,o){let r=ae(t),i=tr(e.shape),s=n==="width"?i.width:i.height,a=Vt(Number(o)||s,s,r);return e.size=e.shape==="circle"?{...e.size,width:a,height:a}:{...e.size,[n]:a},e}function tn(t,e){return t.label=String(e).trim(),t}function or(t,e){return Re(wt,e)&&(t.route=e),t}function rr(t,e){return Re(We,e)&&(t.strokeType=e),t}function ir(t){return delete t.waypoint,t}function Xn(t,e){return t.arrow={x:e.x,y:e.y},t}function qi(t){return delete t.arrow,t}function ar(t,e){if(e.arrow)return qi(e);let n=vt(t,e),o=ae(t),r=Xn(e,{x:I(n.x+n.width/2,o),y:I(n.y+n.height+Math.max(60,n.height*.75),o)});return Nt(t,e),r}function Kn(t,e,n){return Re(ce,n)&&(e==="source"?t.sourceAnchor=n:t.targetAnchor=n),t}function Zn(t,e,n){return t.style={...t.style,[e]:n},t}function Jn(t,e){let n=Math.max(1,Math.round(Number(e))||1);return t.style={...t.style,strokeWidth:n},t}function sr(t,e){return t.start=Re(Le,e)?e:Ct.start,t}function cr(t,e){return t.end=Re(Le,e)?e:Ct.end,t}function Kt(t){return Math.min(Math.max(25,Number(t)||100),800)}function nn(t,e=0){return e===1?t*16:e===2?t*400:t}function dr(t,e,n=0){return Kt(Kt(t)*Math.exp(-nn(e,n)*.0025))}var lr=new WeakSet;function ur(t){return lr.has(t)}var Qn={stageGap:120,siblingGap:60};function et(t){return{width:Number(t.size?.width)||V.width,height:Number(t.size?.height)||V.height}}function eo(t){return Number.isFinite(t.position?.x)&&Number.isFinite(t.position?.y)}function to(t){if(t==null)return null;if(typeof t=="string")return{direction:t,...Qn};let e=t;return{direction:e.direction,stageGap:e.stageGap===void 0?Qn.stageGap:Number(e.stageGap),siblingGap:e.siblingGap===void 0?Qn.siblingGap:Number(e.siblingGap)}}function zi(t){return t==="right"||t==="left"}function no(t){return{right:{source:"right",target:"left"},left:{source:"left",target:"right"},down:{source:"bottom",target:"top"},up:{source:"top",target:"bottom"}}[t]}function Hi(t,e,n){let o=new Set(t),r=no(n),i=e.filter(m=>o.has(m.source)&&o.has(m.target)&&m.source!==m.target),s=i.filter(m=>!(m.sourceAnchor===r.target&&m.targetAnchor===r.source)),a=s.length?s:i,c=new Map;for(let m of a)c.set(m.source,[...c.get(m.source)||[],m.target]);let d=[],l=new Map,u=m=>{l.set(m,"visiting");for(let f of c.get(m)||[])l.get(f)!=="visiting"&&(d.push({source:m,target:f}),l.has(f)||u(f));l.set(m,"done")};for(let m of t)l.has(m)||u(m);let h=new Map;for(let m of d)h.set(m.target,[...h.get(m.target)||[],m.source]);let p=new Map,g=(m,f)=>{let b=p.get(m);if(b!==void 0)return b;if(f.has(m))return 0;f.add(m);let v=Math.max(0,...(h.get(m)||[]).map(E=>g(E,f)+1));return p.set(m,v),v};for(let m of t)g(m,new Set);return p}function ji(t,e,n=4){let o=s=>{let a=new Map;for(let c of e){let[d,l]=s?[c.target,c.source]:[c.source,c.target];a.set(d,[...a.get(d)||[],l])}return a},r=o(!0),i=o(!1);for(let s=0;s<n;s+=1){let a=s%2===0,c=a?t.map((d,l)=>l):t.map((d,l)=>t.length-1-l);for(let d of c){let l=a?d-1:d+1,u=t[l];if(!u)continue;let h=new Map(u.map((f,b)=>[f,b])),p=a?r:i,g=new Map;for(let f of t[d]){let b=(p.get(f)||[]).map(v=>h.get(v)).filter(v=>v!==void 0).sort((v,E)=>v-E);g.set(f,b.length?b[b.length-1>>1]:Number.NaN)}let m=new Map(t[d].map((f,b)=>[f,b]));t[d]=[...t[d]].sort((f,b)=>{let v=g.get(f),E=g.get(b);return Number.isNaN(v)||Number.isNaN(E)||v===E?m.get(f)-m.get(b):v-E})}}}function Oi(t,e,n,o,r,i,s,a=4){let c=m=>{let f=et(o.get(m));return r?f.height:f.width},d=t.map(m=>m.reduce((f,b,v)=>f+c(b)+(v?i:0),0)),l=Math.max(0,...d),u=new Map;t.forEach((m,f)=>{let b=(l-d[f])/2;for(let v of m)u.set(v,b),b+=c(v)+i});let h=new Map;for(let m of n){let f=e.get(m.source),b=e.get(m.target);f===void 0||b===void 0||Math.abs(f-b)!==1||(h.set(m.source,[...h.get(m.source)||[],m.target]),h.set(m.target,[...h.get(m.target)||[],m.source]))}let p=(m,f)=>{let b=t[m],v=b.map(x=>{let y=(h.get(x)||[]).filter(D=>e.get(D)===f).map(D=>u.get(D)+c(D)/2).sort((D,M)=>D-M);return(y.length?(y[y.length-1>>1]+y[y.length>>1])/2:u.get(x)+c(x)/2)-c(x)/2}),E=[...v];for(let x=1;x<E.length;x+=1)E[x]=Math.max(E[x],E[x-1]+c(b[x-1])+i);for(let x=E.length-2;x>=0;x-=1)E[x]=Math.min(E[x],E[x+1]-c(b[x])-i);let S=E.length?v.reduce((x,y,F)=>x+y-E[F],0)/E.length:0;b.forEach((x,y)=>u.set(x,E[y]+S))};for(let m=0;m<a;m+=1)if(m%2===0)for(let b=1;b<t.length;b+=1)p(b,b-1);else for(let b=t.length-2;b>=0;b-=1)p(b,b+1);let g=u.size?Math.min(...u.values()):0;if(g!==0)for(let[m,f]of u)u.set(m,f-g);for(let m of t){let f=Number.NEGATIVE_INFINITY;for(let b of m){let v=I(u.get(b),s),E=f+i;v<E&&(v=s?Math.ceil(E/s)*s:Math.ceil(E)),u.set(b,v),f=v+c(b)}}return u}function Gi(t,e,n,o,r){let i=t.map(v=>v.id),s=Hi(i,e,n.direction),a=Math.max(0,...s.values())+1,c=Array.from({length:a},()=>[]);for(let v of i)c[s.get(v)||0].push(v);let d=e.filter(v=>s.has(v.source)&&s.has(v.target));ji(c,d);let l=new Map(t.map(v=>[v.id,v])),u=zi(n.direction),h=n.direction==="left"||n.direction==="up",p=c.map(v=>Math.max(0,...v.map(E=>{let S=et(l.get(E));return u?S.width:S.height}))),g=Oi(c,s,d,l,u,n.siblingGap,r),m=0,f=p.map(v=>{let E=m;return m+=v+n.stageGap,E}),b=Math.max(0,m-n.stageGap);c.forEach((v,E)=>{for(let S of v){let x=l.get(S),y=et(x),F=h?b-f[E]-(u?y.width:y.height):f[E],D=g.get(S);x.position={x:I(o.x+(u?F:D),r),y:I(o.y+(u?D:F),r)}}})}function mr(t,e,n=0){return t.x-n<e.x+e.width&&t.x+t.width+n>e.x&&t.y-n<e.y+e.height&&t.y+t.height+n>e.y}function Vi(t,e,n,o,r){let i=new Map(e.filter(eo).map(m=>[m.id,m])),s=et(t),a=no(o.direction),c=[];for(let m of n){let f=m.source===t.id,b=m.target===t.id;if(f===b)continue;let v=i.get(f?m.target:m.source);if(!v)continue;let E=(f?m.sourceAnchor:m.targetAnchor)||(f?a.source:a.target),S={...v.position,...et(v)};E==="left"?c.push({position:{x:S.x+S.width+o.stageGap,y:S.y+(S.height-s.height)/2},axis:"x",sign:1}):E==="right"?c.push({position:{x:S.x-o.stageGap-s.width,y:S.y+(S.height-s.height)/2},axis:"x",sign:-1}):E==="top"?c.push({position:{x:S.x+(S.width-s.width)/2,y:S.y+S.height+o.stageGap},axis:"y",sign:1}):E==="bottom"&&c.push({position:{x:S.x+(S.width-s.width)/2,y:S.y-o.stageGap-s.height},axis:"y",sign:-1})}if(!c.length)return null;let d=c[0].axis,l=c.filter(m=>m.axis===d),h=l[0].sign>0?Math.max(...l.map(m=>m.position[d])):Math.min(...l.map(m=>m.position[d])),p=d==="x"?"y":"x",g=c.reduce((m,f)=>m+f.position[p],0)/c.length;return{position:{x:I(d==="x"?h:g,r),y:I(d==="y"?h:g,r)},acrossAxis:p}}function Wi(t,e,n,o,r,i){let s=r||20,a=Math.min(i,20);for(let c=0;c<=200;c+=1)for(let d of c?[c*s,-c*s]:[0]){let l={...t,[o]:t[o]+d},u={...l,...e};if(!n.some(h=>mr(u,h,a)))return{x:I(l.x,r),y:I(l.y,r)}}return t}function Ui(t,e,n,o,r){let i=o||20,s=Math.min(r,20),a={x:I(n.x,o),y:I(n.y,o)},c=Math.max(n.y,...e.map(d=>d.y+d.height));for(let d=0;d<=2e3;d+=i)for(let l of d?[{x:a.x+d,y:a.y},{x:a.x,y:a.y+d}]:[a])if(!e.some(u=>mr({...l,...t},u,s)))return l;return{x:a.x,y:I(c+i,o)}}function Yi(t,e,n,o,r){let i=t.filter(s=>!eo(s));if(!i.length)return!1;if(i.length===t.length)return Gi(t,e,n,o,r),!0;for(let s of i){let a=et(s),c=t.filter(l=>l!==s&&eo(l)).map(l=>({...l.position,...et(l)})),d=Vi(s,t,e,n,r);s.position=d?Wi(d.position,a,c,d.acrossAxis,r,n.siblingGap):Ui(a,c,o,r,n.siblingGap)}return!0}function _i(t,e){let n=e.x+e.width/2-(t.x+t.width/2),o=e.y+e.height/2-(t.y+t.height/2),r=Math.abs(n)-(t.width+e.width)/2,i=Math.abs(o)-(t.height+e.height)/2;return r<=0&&i<=0?null:r>=i?n>=0?{source:"right",target:"left"}:{source:"left",target:"right"}:o>=0?{source:"bottom",target:"top"}:{source:"top",target:"bottom"}}function Xi(t,e){let n=t.edges||[];if(!n.some(i=>!i.sourceAnchor||!i.targetAnchor))return!1;let o=no(e.direction),r=new Y(t);for(let i of n){if(i.sourceAnchor&&i.targetAnchor)continue;let s=r.getById(i.source)?.bounds,a=r.getById(i.target)?.bounds,c=s&&a&&i.source!==i.target?_i(s,a):null;i.sourceAnchor=i.sourceAnchor||c?.source||o.source,i.targetAnchor=i.targetAnchor||c?.target||o.target}return!0}function on(t){let e=to(t.layout);if(!e)return t;let n=ae(t),o=40,r=!1,i=(s,a)=>{for(let c of s)if(c.children?.length&&(i(c.children,{x:o,y:o}),!c.size)){let d=c.children.reduce((l,u)=>{let h=et(u);return{width:Math.max(l.width,(Number(u.position?.x)||0)+h.width),height:Math.max(l.height,(Number(u.position?.y)||0)+h.height)}},{width:0,height:0});c.size={width:I(d.width+o,n),height:I(d.height+o,n)}}r=Yi(s,t.edges||[],e,a,n)||r};return i(t.nodes||[],{x:o,y:o}),r=Xi(t,e)||r,r&&lr.add(t),t}var At={horizontalAspectRatio:4,verticalAspectRatio:5,minimumNodeCount:8,minimumDominantPath:8,minimumPathCoverage:.75,maximumBranchingRatio:.2};function gr(t){return{width:Number(t.size?.width)||V.width,height:Number(t.size?.height)||V.height}}function Ki(t){if(t.nodes.some(g=>g.children?.length))return null;let e=t.nodes.map(g=>g.id),n=new Map(e.map((g,m)=>[g,m])),o=new Set(e),r=new Map(e.map(g=>[g,[]])),i=new Map(e.map(g=>[g,[]]));for(let g of t.edges){if(!o.has(g.source)||!o.has(g.target)||g.source===g.target)return null;i.get(g.source).push(g.target),r.get(g.target).push(g.source)}let s=new Set,a=e.length?[e[0]]:[];for(;a.length;){let g=a.pop();s.has(g)||(s.add(g),a.push(...r.get(g),...i.get(g)))}if(s.size!==e.length)return null;let c=new Map(e.map(g=>[g,r.get(g).length])),d=e.filter(g=>c.get(g)===0),l=[];for(;d.length;){d.sort((m,f)=>n.get(m)-n.get(f));let g=d.shift();l.push(g);for(let m of i.get(g)){let f=c.get(m)-1;c.set(m,f),f===0&&d.push(m)}}if(l.length!==e.length)return null;let u=new Map;for(let g of l){let m=r.get(g).map(f=>u.get(f)||[f]);m.sort((f,b)=>b.length-f.length||n.get(f[0])-n.get(b[0])),u.set(g,[...m[0]||[],g])}let h=[...u.values()].sort((g,m)=>m.length-g.length||n.get(g[0])-n.get(m[0]))[0]||[],p=e.filter(g=>r.get(g).length>1||i.get(g).length>1).length;return{order:l,dominantPath:h,incoming:r,outgoing:i,branchingNodes:p}}function hr(t){let e=new Y(t).entries;if(!e.length)return null;let n=Math.min(...e.map(({bounds:s})=>s.x)),o=Math.min(...e.map(({bounds:s})=>s.y)),r=Math.max(...e.map(({bounds:s})=>s.x+s.width)),i=Math.max(...e.map(({bounds:s})=>s.y+s.height));return{width:r-n,height:i-o}}function pr(t){let e=t.nodes.length;if(e<At.minimumNodeCount||t.nodes.some(l=>!l.position))return null;let n=Ki(t),o=hr(t);if(!n||!o||!o.width||!o.height)return null;let r=o.width>=o.height?"horizontal":"vertical",i=r==="horizontal"?o.width/o.height:o.height/o.width,s=r==="horizontal"?At.horizontalAspectRatio:At.verticalAspectRatio,a=n.dominantPath.length,c=a/e,d=n.branchingNodes/e;return i<s||a<At.minimumDominantPath||c<At.minimumPathCoverage||d>At.maximumBranchingRatio?null:{graph:n,analysis:{direction:r,width:Math.round(o.width),height:Math.round(o.height),aspectRatio:i,dominantPathLength:a,nodeCount:e,pathCoverage:c,branchingNodes:n.branchingNodes,reason:`the dominant path contains ${a} of ${e} nodes (${Math.round(c*100)}%) with ${n.branchingNodes} branching node${n.branchingNodes===1?"":"s"}`}}}function fr(t){return pr(t)?.analysis||null}function Zi(t){let e=new Map(t.dominantPath.map((r,i)=>[r,i])),n=new Map;for(let r of t.order){let i=e.get(r),s=Math.max(-1,...t.incoming.get(r).map(a=>n.get(a)??-1));n.set(r,i??s)}let o=new Map(t.order.map((r,i)=>[r,i]));return[...t.order].sort((r,i)=>n.get(r)-n.get(i)||+!e.has(r)-+!e.has(i)||o.get(r)-o.get(i))}function Ji(t,e){let n=e.x-t.x,o=e.y-t.y;return Math.abs(n)>=Math.abs(o)?n>=0?{source:"right",target:"left"}:{source:"left",target:"right"}:o>=0?{source:"bottom",target:"top"}:{source:"top",target:"bottom"}}function rn(t){let e=pr(t);if(!e)return null;let{analysis:n,graph:o}=e,r=ae(t),i=typeof t.layout=="object"?t.layout:void 0,s=Number(i?.stageGap)||120,a=Number(i?.siblingGap)||60,c=new Map(t.nodes.map(S=>[S.id,S])),d=Math.max(...t.nodes.map(S=>gr(S).width)),l=Math.max(...t.nodes.map(S=>gr(S).height)),u=n.direction==="horizontal",h=u?d+s:l+s,p=u?l+a:d+a,g=Zi(o),m=Math.max(3,Math.min(Math.ceil(g.length/2),Math.ceil(Math.sqrt(g.length*p/h)))),f=I(40,r);g.forEach((S,x)=>{let y=Math.floor(x/m),F=x%m,D=c.get(S);D.position=u?{x:I(f+F*h,r),y:I(f+y*p,r)}:{x:I(f+y*p,r),y:I(f+F*h,r)}});let b=f+m*h-s+Math.max(s/2,40),v=new Map(g.map((S,x)=>[S,x]));for(let S of t.edges){let x=c.get(S.source),y=c.get(S.target);if(!x?.position||!y?.position)continue;let F=v.get(x.id),D=v.get(y.id),M=Math.floor(F/m),R=Math.floor(D/m);if(delete S.waypoint,S.route="orthogonal",M!==R)u?(S.sourceAnchor="right",S.targetAnchor="top",S.waypoint={x:I(b,r),y:I(y.position.y-a/2,r)}):(S.sourceAnchor="bottom",S.targetAnchor="left",S.waypoint={x:I(y.position.x-a/2,r),y:I(b,r)});else{let A=Ji(x.position,y.position);S.sourceAnchor=A.source,S.targetAnchor=A.target}}t.layout=u?"right":"down";let E=hr(t);return t.canvas.auto||(t.canvas.width=Math.max(Number(t.canvas.width)||0,Math.ceil(E.width+f*2)),t.canvas.height=Math.max(Number(t.canvas.height)||0,Math.ceil(E.height+f*2))),{analysis:n,before:{width:n.width,height:n.height,aspectRatio:n.aspectRatio},after:{width:Math.round(E.width),height:Math.round(E.height),aspectRatio:Math.max(E.width/E.height,E.height/E.width)}}}var br=new WeakSet;function yr(t){return br.has(t)}function xr(t,e){for(let n of t)e(n),xr(n.children||[],e)}function an(t,e){if(!t.layout)throw new Error("Relayout requires a layout direction on the diagram.");xr(t.nodes,n=>{(e!=="unpinned"||!n.pinned)&&delete n.position});for(let n of t.edges)delete n.sourceAnchor,delete n.targetAnchor,delete n.route,delete n.waypoint;if(on(t),e==="autowrap"){let n=t.layout;rn(t)&&typeof n=="object"&&(t.layout={...n,direction:typeof t.layout=="string"?t.layout:t.layout.direction})}return delete t.relayout,br.add(t),t}var Qi=["nodes","edges","participants","messages","activations","notes","groups"],Er=["version","id","caption","description","theme"],ea=[...Er,"type","layout","relayout","styles","canvas","nodes","edges"],ta=[...Er,"type","canvas","participants","messages","activations","notes","groups"],na=["id","label","href","ref","shape","class","position","pinned","size","style","strokeType","palette","subtitle","textVAlign","textHAlign","arrow","children"],oa=["source","target","class","sourceAnchor","targetAnchor","route","strokeType","label","ref","style","start","end","waypoint"],ra=["palette","style"],ia=["direction","stageGap","siblingGap"],ro=["fill","stroke","strokeWidth","text"],aa=["stroke","strokeWidth","text"],sa=["id","label","kind","palette","style","size"],ca=["from","to","label","ref","style"],da=["participant","from","to"],la=["at","after","label","palette","style","size"],ua=["label","from","to"],ma=["width","height","participantSpacing","participantSize"];function k(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Be(t){let e=t.trim();if(e.startsWith('"')&&e.endsWith('"'))try{return JSON.parse(e)}catch{throw new Error(`Invalid quoted scalar: ${e}`)}if(e.startsWith("'")&&e.endsWith("'"))return e.slice(1,-1);if(/^-?\d+(\.\d+)?$/.test(e))return Number(e);if(e==="true"||e==="false")return e==="true";if(e.startsWith("[")&&e.endsWith("]"))try{return JSON.parse(e)}catch{throw new Error(`Invalid inline list: ${e}`)}if(e.startsWith("{")&&e.endsWith("}")){let n=e.slice(1,-1).trim();if(!n)return{};let o=[],r=0,i="",s=0,a=!0;for(let d=0;d<n.length;d+=1){let l=n[d];if(i){l==="\\"&&i==='"'?d+=1:l===i&&(i="");continue}(l==='"'||l==="'")&&a?i=l:l==="{"||l==="["?s+=1:l==="}"||l==="]"?s-=1:l===","&&s===0&&(o.push(n.slice(r,d)),r=d+1),/\s/.test(l)||(a=":,[{".includes(l))}if(i||s!==0)throw new Error(`Invalid inline mapping: ${e}`);o.push(n.slice(r));let c={};for(let d of o){let l=d.indexOf(":");if(l===-1)throw new Error(`Invalid inline mapping: ${e}`);let u=d.slice(0,l).trim();if(Object.prototype.hasOwnProperty.call(c,u))throw new Error(`Duplicate inline mapping field: ${u}`);c[u]=Be(d.slice(l+1))}return c}return e}var ga=/^(\s*)((?:- )?)([A-Za-z_][\w-]*):\s*\|([+-])?\s*$/;function ha(t){let e=[],n=0;for(;n<t.length;){let o=t[n],r=o.match(ga);if(!r){e.push(o),n+=1;continue}let[,i,s,a,c]=r,d=n+1,l=null;for(;d<t.length;){let m=t[d];if(m.trim()===""){d+=1;continue}l=m.length-m.trimStart().length;break}if(l===null||l<=i.length){e.push(`${i}${s}${a}: ""`),n+=1;continue}let u=[],h=n+1,p=0;for(;h<t.length;){let m=t[h];if(m.trim()===""){u.push(""),p+=1,h+=1;continue}if(m.length-m.trimStart().length<l)break;u.push(m.slice(l)),p=0,h+=1}p>0&&c!=="+"&&(u.length-=p-1);let g=u.join(`
`);e.push(`${i}${s}${a}: ${JSON.stringify(g)}`),n=h}return e}function we(t,e="classic"){let o=ha(t.replace(/\r\n/g,`
`).split(`
`)).filter(p=>p.trim()&&!p.trimStart().startsWith("#"));for(let p of o){if(p.trimStart()!==p||!p.trimEnd().endsWith(":"))continue;let g=p.trim().slice(0,-1);if(g!=="canvas"&&g!=="styles"&&g!=="layout"&&!Qi.includes(g))throw new Error(`Unsupported diagram section: ${g}`)}let r=0,i=p=>p.length-p.trimStart().length,s=p=>p.trim().match(/^([^:]+):\s*(.*)$/),a=p=>p.trim().match(/^- ([^:]+):\s*(.*)$/),c=p=>r>=o.length||i(o[r])<=p?{}:o[r].trimStart().startsWith("- ")?l(i(o[r])):d(i(o[r])),d=p=>{let g={};for(;r<o.length&&i(o[r])===p;){let m=o[r],f=s(m);if(!f)throw new Error(`Cannot parse diagram line: ${m}`);r+=1,g[f[1]]=f[2]?Be(f[2]):c(p)}return g},l=p=>{let g=[];for(;r<o.length&&i(o[r])===p;){let m=o[r],f=a(m);if(!f)throw new Error(`Cannot parse diagram line: ${m}`);r+=1;let b={[f[1]]:f[2]?Be(f[2]):c(p)};for(;r<o.length&&i(o[r])>p;){let v=i(o[r]),E=s(o[r]);if(!E)throw new Error(`Cannot parse diagram line: ${o[r]}`);r+=1,b[E[1]]=E[2]?Be(E[2]):c(v)}g.push(b)}return g},u=d(0);if(!u.type)throw new Error(`Diagram type is required and must be one of: ${An.join(", ")}.`);if(typeof u.type!="string"||!An.includes(u.type))throw new Error(`Unsupported diagram type: ${String(u.type)}`);let h=u.type==="flowchart"?ea:ta;return xe(u,h,`${u.type} diagram`),pa(u),u.type==="flowchart"?fa(u,e):ba(u,e)}function pa(t){if(t.version!==void 0&&(!Number.isInteger(t.version)||Number(t.version)<1))throw new Error("Diagram version must be a positive integer.");for(let e of["id","caption","description"])if(t[e]!==void 0&&typeof t[e]!="string")throw new Error(`Diagram ${e} must be a string.`);if(t.theme!==void 0&&(typeof t.theme!="string"||!jt.includes(t.theme)))throw new Error(`Unsupported diagram theme: ${String(t.theme)}`)}function fa(t,e="classic"){if(t.canvas==="auto"&&(t.canvas={auto:!0}),t.canvas=t.canvas||{},typeof t.canvas!="object"||Array.isArray(t.canvas))throw new Error('Flowchart canvas must be a mapping or the value "auto".');if(t.canvas.auto!==void 0&&typeof t.canvas.auto!="boolean")throw new Error("Flowchart canvas.auto must be true or false.");return Array.isArray(t.nodes)||(t.nodes=[]),Array.isArray(t.edges)||(t.edges=[]),wa(t,e),t.relayout?an(t,t.relayout):on(t),t.canvas.auto&&Vn(t),t}function ba(t,e="classic"){return Ea(t,e),t}function xe(t,e,n){for(let o of Object.keys(t||{}))if(!e.includes(o))throw new Error(`Unsupported ${n} field: ${o}`)}function sn(t,e,n){if(t){for(let o of Object.keys(t))if(!e.includes(o))throw new Error(`Unsupported ${n} style field: ${o}`)}}function oo(t,e){let n=e.charAt(0).toUpperCase()+e.slice(1);if(typeof t!="object"||t===null||Array.isArray(t))throw new Error(`${n} must be a mapping.`);let o=t;if(!Number.isFinite(o.x)||!Number.isFinite(o.y))throw new Error(`${n} requires finite x and y coordinates.`);xe(t,["x","y"],e)}function ya(t){if(t.styles===void 0)return new Set;if(typeof t.styles!="object"||Array.isArray(t.styles))throw new Error("Diagram styles must be a mapping of names to style definitions.");for(let[e,n]of Object.entries(t.styles)){if(typeof n!="object"||n===null||Array.isArray(n))throw new Error(`Style "${e}" must be a mapping.`);if(xe(n,ra,`style "${e}"`),n.palette!==void 0&&(typeof n.palette!="string"||!Te.includes(n.palette)))throw new Error(`Unsupported palette in style "${e}": ${String(n.palette)}`);if(n.style?.width!==void 0)throw new Error(`Style "${e}" style.width is not supported; use style.strokeWidth.`);if(sn(n.style,ro,`style "${e}"`),n.palette===void 0&&!Object.keys(n.style||{}).length)throw new Error(`Style "${e}" declares no palette or style values.`)}return new Set(Object.keys(t.styles))}function xa(t){if(t.layout===void 0)return;if(typeof t.layout=="object"&&!Array.isArray(t.layout)){xe(t.layout,ia,"layout");for(let n of["stageGap","siblingGap"]){let o=t.layout[n];if(o!==void 0&&(typeof o!="number"||!Number.isFinite(o)||o<0))throw new Error(`Layout ${n} must be a number of zero or more.`)}}else if(typeof t.layout!="string")throw new Error("Layout must be a direction or a mapping.");let e=to(t.layout);if(!e||!Mn.includes(e.direction))throw new Error(`Unsupported layout direction: ${String(e?.direction)}`)}function wa(t,e="classic"){if(xa(t),t.relayout!==void 0&&!["all","unpinned","autowrap"].includes(t.relayout))throw new Error(`Unsupported relayout mode: ${String(t.relayout)}`);if(t.relayout!==void 0&&t.layout===void 0)throw new Error("Relayout requires a layout direction on the diagram.");let n=t.layout!==void 0,o=ya(t),r=(a,c)=>{if(a!==void 0&&(typeof a!="string"||!o.has(a)))throw new Error(`Unknown style class on ${c}: ${String(a)}`)},i=new Set,s=a=>{if("type"in a)throw new Error(`Node "${a.id||"unknown"}" uses removed field "type".`);if(xe(a,na,`node "${a.id||"unknown"}"`),a.ref!==void 0&&_e(a.ref,`Node "${a.id}" ref`),!a.id||typeof a.label!="string")throw new Error("Every node requires an id and a string label.");if(a.href!==void 0&&!kt(a.href))throw new Ue(a.id);if(!a.shape)throw new Error(`Node "${a.id}" requires a shape.`);if(!xt.includes(a.shape))throw new Error(`Unsupported node shape: ${a.shape}`);if(a.position===void 0){if(!n)throw new Error(`Node "${a.id}" requires a position, or a "layout" on the diagram to place it.`)}else oo(a.position,`node "${a.id}" position`);if(a.pinned!==void 0&&typeof a.pinned!="boolean")throw new Error(`Node "${a.id}" pinned must be true or false.`);if(a.pinned&&a.position===void 0)throw new Error(`Pinned node "${a.id}" requires a position.`);if(a.textVAlign!==void 0&&!Do.includes(a.textVAlign))throw new Error(`Unsupported node textVAlign: ${a.textVAlign}`);if(a.textHAlign!==void 0&&!Fo.includes(a.textHAlign))throw new Error(`Unsupported node textHAlign: ${a.textHAlign}`);if(a.palette!==void 0&&(typeof a.palette!="string"||!Te.includes(a.palette)))throw new Error(`Unsupported node palette: ${String(a.palette||"unknown")}`);if(a.strokeType!==void 0&&!We.includes(a.strokeType))throw new Error(`Unsupported node strokeType: ${a.strokeType}`);if(a.style?.width!==void 0)throw new Error("Node style.width is not supported; use style.strokeWidth.");if(r(a.class,`node "${a.id}"`),sn(a.style,ro,`node "${a.id}"`),a.arrow!==void 0&&oo(a.arrow,`node "${a.id}" arrow`),i.has(a.id))throw new Error(`Duplicate flowchart node id: ${a.id}`);if(i.add(a.id),a.children!==void 0&&!Array.isArray(a.children))throw new Error(`Children for node "${a.id}" must be a list.`);for(let c of a.children||[])s(c)};for(let a of t.nodes)s(a);for(let a of t.edges){if(xe(a,oa,`edge "${a.source||"unknown"}" -> "${a.target||"unknown"}"`),a.ref!==void 0&&_e(a.ref,`Edge "${a.source}" -> "${a.target}" ref`),!a.sourceAnchor&&!n)throw new Error(`Edge "${a.source||"unknown"}" -> "${a.target||"unknown"}" requires a sourceAnchor.`);if(!a.targetAnchor&&!n)throw new Error(`Edge "${a.source||"unknown"}" -> "${a.target||"unknown"}" requires a targetAnchor.`);if(a.sourceAnchor&&!ce.includes(a.sourceAnchor))throw new Error(`Unsupported edge sourceAnchor: ${a.sourceAnchor}`);if(a.targetAnchor&&!ce.includes(a.targetAnchor))throw new Error(`Unsupported edge targetAnchor: ${a.targetAnchor}`);if(a.route!==void 0&&!wt.includes(a.route))throw new Error(`Unsupported edge route: ${a.route}`);if(a.strokeType!==void 0&&!We.includes(a.strokeType))throw new Error(`Unsupported edge strokeType: ${a.strokeType}`);if(a.waypoint!==void 0&&oo(a.waypoint,`edge "${a.source}" -> "${a.target}" waypoint`),a.start!==void 0&&!Le.includes(a.start))throw new Error(`Unsupported edge start marker: ${a.start}`);if(a.end!==void 0&&!Le.includes(a.end))throw new Error(`Unsupported edge end marker: ${a.end}`);if(a.style?.width!==void 0)throw new Error("Edge style.width is not supported; use style.strokeWidth.");r(a.class,`edge "${a.source||"unknown"}" -> "${a.target||"unknown"}"`),sn(a.style,aa,`edge "${a.source||"unknown"}" -> "${a.target||"unknown"}"`)}}function Ea(t,e="classic"){if(!Array.isArray(t.participants)||!Array.isArray(t.messages))throw new Error("Sequence diagrams require participants and messages sections.");if(t.activations!==void 0&&!Array.isArray(t.activations))throw new Error("Sequence diagram activations must be a list.");if(t.notes!==void 0&&!Array.isArray(t.notes))throw new Error("Sequence diagram notes must be a list.");if(t.groups!==void 0&&!Array.isArray(t.groups))throw new Error("Sequence diagram groups must be a list.");if(t.canvas!==void 0&&(typeof t.canvas!="object"||Array.isArray(t.canvas)))throw new Error("Sequence canvas must be a mapping.");xe(t.canvas,ma,"sequence canvas");for(let o of["width","height","participantSpacing"]){let r=t.canvas?.[o];if(r!==void 0&&(!Number.isFinite(r)||Number(r)<=0))throw new Error(`Sequence canvas.${o} must be a positive number.`)}if(t.canvas?.participantSize!==void 0){if(typeof t.canvas.participantSize!="object"||Array.isArray(t.canvas.participantSize))throw new Error("Sequence canvas.participantSize must be a mapping.");xe(t.canvas.participantSize,["width","height"],"sequence canvas participantSize");for(let o of["width","height"]){let r=t.canvas.participantSize[o];if(r!==void 0&&(!Number.isFinite(r)||Number(r)<=0))throw new Error(`Sequence canvas.participantSize.${o} must be a positive number.`)}}let n=new Set;for(let o of t.participants){if(xe(o,sa,`participant "${o.id||"unknown"}"`),!o.id||!o.label)throw new Error("Every sequence participant requires an id and label.");if(o.kind!==void 0&&!$o.includes(o.kind))throw new Error(`Unsupported sequence participant kind: ${o.kind}`);if(wr(o,`participant "${o.id}"`,e),n.has(o.id))throw new Error(`Duplicate sequence participant id: ${o.id}`);n.add(o.id)}for(let[o,r]of t.messages.entries()){if(xe(r,ca,`message ${o}`),r.ref!==void 0&&_e(r.ref,`Sequence message ${o} ref`),!r.from||!r.to)throw new Error(`Sequence message ${o} requires from and to.`);if(r.label!==void 0&&typeof r.label!="string")throw new Error(`Sequence message ${o} label must be a string.`);if(!n.has(r.from)||!n.has(r.to))throw new Error(`Sequence message ${o} references an unknown participant.`);if(r.style!==void 0&&!Ot.includes(r.style))throw new Error(`Unsupported sequence message style: ${r.style}`)}for(let[o,r]of(t.activations||[]).entries()){if(xe(r,da,`activation ${o}`),!r.participant||!Number.isInteger(r.from)||!Number.isInteger(r.to))throw new Error(`Sequence activation ${o} requires participant and integer from and to message positions.`);if(!n.has(r.participant))throw new Error(`Sequence activation ${o} references an unknown participant.`);if(r.from<1||r.to<r.from||r.to>t.messages.length)throw new Error(`Sequence activation ${o} range is out of bounds.`)}for(let[o,r]of(t.notes||[]).entries()){xe(r,la,`note ${o}`);let i=r.after;if(!r.at||!Number.isInteger(i)||!r.label)throw new Error(`Sequence note ${o} requires at, after, and label.`);if(wr(r,`note ${o}`,e),!n.has(r.at))throw new Error(`Sequence note ${o} references an unknown participant.`);if(i<0||i>t.messages.length)throw new Error(`Sequence note ${o} after position is out of bounds.`)}for(let[o,r]of(t.groups||[]).entries()){if(xe(r,ua,`group ${o}`),!r.label&&r.label!=="")throw new Error(`Sequence group ${o} requires a label.`);if(!Number.isInteger(r.from)||!Number.isInteger(r.to))throw new Error(`Sequence group ${o} requires integer from and to indices.`);if(r.from<1||r.to<r.from||r.to>t.messages.length)throw new Error(`Sequence group ${o} range is out of bounds.`)}}function wr(t,e,n="classic"){if(t.palette!==void 0){let o=String(t.palette||"");if(!Te.includes(o))throw new Error(`Unsupported ${e} palette: ${o||"unknown"}`)}if(sn(t.style,ro,e),t.size){xe(t.size,["width","height"],`size for ${e}`);for(let o of["width","height"]){let r=t.size[o];if(r!==void 0&&(!Number.isFinite(r)||Number(r)<=0))throw new Error(`${e} size.${o} must be a positive number.`)}}}function io(t){return typeof t=="number"||typeof t=="boolean"?String(t):t&&typeof t=="object"?Object.keys(t).length?`{ ${Object.entries(t).map(([e,n])=>`${e}: ${io(n)}`).join(", ")} }`:"{}":/^[\w./-]+(?: [\w./-]+)*$/.test(String(t))&&!/^(?:-?\d+(?:\.\d+)?|true|false)$/.test(String(t))?String(t):JSON.stringify(String(t))}function lt(t,e,n,o,r=""){if(typeof e=="string"&&e.includes(`
`)){let i=e.split(`
`).map(s=>s.length?`${" ".repeat(o)}${s}`:"");return[`${" ".repeat(n)}${r}${t}: |+`,...i]}return[`${" ".repeat(n)}${r}${t}: ${io(e)}`]}function tt(t,e=2){let n=Object.entries(t),[o,r]=n[0],i=lt(o,r,e,e+4,"- ");for(let[s,a]of n.slice(1))if(!(s==="children"&&Array.isArray(a)&&!a.length))if(s==="children"&&Array.isArray(a)){i.push(`${" ".repeat(e+2)}children:`);for(let c of a)i.push(...tt(c,e+4))}else i.push(...lt(s,a,e+2,e+4));return i}function Oe(t){let e=[`type: ${io(t.type)}`];for(let r of["version","id","caption","description","theme"])t[r]!==void 0&&e.push(...lt(r,t[r],0,2));if(t.type==="flowchart"&&t.layout!==void 0&&e.push(...lt("layout",t.layout,0,2)),t.type==="sequence"){if(t.canvas!==void 0){e.push("canvas:");for(let[r,i]of Object.entries(t.canvas))e.push(...lt(r,i,2,4))}e.push("participants:");for(let r of t.participants||[])e.push(...tt(r));e.push("messages:");for(let r of t.messages||[])e.push(...tt(r));if(t.activations!==void 0){e.push("activations:");for(let r of t.activations||[])e.push(...tt(r))}if(t.notes!==void 0){e.push("notes:");for(let r of t.notes||[])e.push(...tt(r))}if(t.groups!==void 0){e.push("groups:");for(let r of t.groups||[])e.push(...tt(r))}return e.join(`
`)}if(t.styles!==void 0){e.push("styles:");for(let[r,i]of Object.entries(t.styles)){e.push(`  ${r}:`);for(let[s,a]of Object.entries(i))e.push(...lt(s,a,4,6))}}let n=t.canvas||{},o=Object.entries(n).filter(([r])=>!n.auto||r!=="width"&&r!=="height");if(n.auto&&o.length===1)e.push("canvas: auto");else if(o.length){e.push("canvas:");for(let[r,i]of o)e.push(...lt(r,i,2,4))}e.push("nodes:");for(let r of t.nodes||[])e.push(...tt(r));e.push("edges:");for(let r of t.edges||[])e.push(...tt(r));return e.join(`
`)}var Sa=/^(?: {0,3}> ?)+/;function ke(t){return t.replace(Sa,"")}function Ge(t){let e=t.match(/^(`{3,})([\w-]*)\s*$/);return e?{marker:e[1],info:e[2]}:null}function ut(t,e){let n=t.match(/^(`{3,})\s*$/);return!!(n&&n[1].length>=e.length)}function Mt(t,e,n,o=t.length){for(let r=e;r<o;r+=1)if(ut(ke(t[r]),n))return r;return-1}var va=["document","diagram"];function cn(t){let e=t.replace(/\r\n/g,`
`).split(`
`),n=e.findIndex(i=>i.trim()!=="");if(n===-1||e[n]!=="---")return{content:t,frontmatter:{}};let o=e.indexOf("---",n+1);if(o===-1)return{content:t,frontmatter:{}};let r={};for(let i of e.slice(n+1,o)){if(!i.trim()||i.trimStart().startsWith("#"))continue;let s=i.match(/^([^:]+):\s*(.*)$/);if(!s)throw new Error(`Cannot parse document frontmatter line: ${i}`);r[s[1]]=Be(s[2])}return{content:e.slice(o+1).join(`
`),frontmatter:r}}function mt(t){let e=cn(t),n=String(e.frontmatter.theme??"auto"),o=String(e.frontmatter.colourScheme??"classic"),r=String(e.frontmatter.doctype??"document");if(!jt.includes(n))throw new Error(`Unsupported document theme: ${n}`);let i=n,s=at(i);if(!Object.prototype.hasOwnProperty.call(fe,o))throw new Error(`Unsupported document colour scheme: ${o}`);let a=o;if(!va.includes(r))throw new Error(`Unsupported document doctype: ${r}`);return{...e,theme:i,resolvedTheme:s,colourScheme:a,doctype:r}}function gt(t){let e=mt(t),n=e.content.replace(/\r\n/g,`
`).split(`
`),o=0,r=new Set,i=!1,s=null;for(let a of n){let c=ke(a);if(s){ut(c,s)&&(s=null);continue}let d=Ge(c);if(d){s=d.marker;continue}if(/^:::diagram\s+\{\s*id=/.test(c)){i=!0;break}}for(;o<n.length;){let a=ke(n[o]),c=Ge(a);if(!c){o+=1;continue}let d=Mt(n,o+1,c.marker);if(d===-1)throw new Error("Unclosed code block.");if(c.info==="diagram"){let l=n.slice(o+1,d).map(h=>ke(h)).join(`
`);we(l,e.colourScheme);let u=Xe(l);if(u){if(r.has(u))throw new Error(`Duplicate diagram id: ${u}`);r.add(u)}else if(i)throw new Error("Every diagram requires an id when using diagram references.")}o=d+1}return e}function Xe(t){let e=t.match(/^id:\s*(.*?)\s*$/m)?.[1];if(e===void 0)return null;try{let n=Be(e);return typeof n=="string"?n:null}catch{return null}}function nt(t){let e=t.match(/[^\r\n]*(?:\r\n|\r|\n|$)/g)?.filter((u,h,p)=>u.length>0||h<p.length-1)||[],n=e.map(u=>u.replace(/\r\n$|[\r\n]$/,"")),o=[],r=0;for(let u of e)o.push(r),r+=u.length;let i=(u,h)=>({line:u+1,column:h+1,offset:(o[u]??t.length)+h}),s=u=>{let h=n[u]||"",p=ke(h),g=h.length-p.length;return{start:i(u,g),end:i(u,h.length)}},a=0,c=n.findIndex(u=>u.trim()!=="");if(c!==-1&&n[c]==="---"){let u=n.indexOf("---",c+1);u!==-1&&(a=u+1)}let d=[],l=a;for(;l<n.length;){let u=Ge(ke(n[l]));if(!u){l+=1;continue}let h=Mt(n,l+1,u.marker);if(h===-1)break;if(u.info==="diagram"){let p=n.slice(l+1,h).map((b,v)=>s(l+1+v)),g=n.slice(l+1,h).map(b=>ke(b)).join(`
`),m=s(l),f=s(h);d.push({id:Xe(g),source:g,index:d.length,fenceRange:{start:m.start,end:f.end},bodyRange:p.length?{start:p[0].start,end:p[p.length-1].end}:{start:m.end,end:f.start},lineRanges:p})}l=h+1}return d}function ht(t){let e=2166136261;for(let n=0;n<t.length;n+=1)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e.toString(16).padStart(8,"0")}function dn(t){let e=t.split(`
`),n=e.map(p=>p.endsWith("\r")?p.slice(0,-1):p),r=e.filter(p=>p.endsWith("\r")).length*2>e.length-1?"\r":"",i=t.replace(/\r\n/g,`
`),{content:s,frontmatter:a}=cn(i),c=String(a.colourScheme||"classic"),d=[],l=i.split(`
`).length-s.split(`
`).length,u=0,h=0;for(;l<e.length;){let p=Ge(ke(n[l]));if(!p){l+=1;continue}let g=Mt(n,l+1,p.marker);if(g===-1)break;if(p.info==="diagram"){let m=n.slice(l+1,g).map(b=>ke(b)).join(`
`),f=we(m,c);if(f.type==="flowchart"&&(ur(f)||yr(f))){let b=n[l],v=b.slice(0,b.length-ke(b).length);d.push({start:l+1,end:g,lines:Oe(f).split(`
`).map(E=>`${v}${E}${r}`)}),u+=1}else h+=1}l=g+1}return{source:ao(e,d).join(`
`),baked:u,preserved:h,fences:d}}function ao(t,e){let n=[...t];for(let o of[...e].reverse())n.splice(o.start,o.end-o.start,...o.lines);return n}function Sr(t){let e=gt(t),n=nt(t).reverse(),o=[],r=t;for(let i of n){let s=vr(r,i,e.colourScheme);s.changed&&s.layout&&(r=s.source,o.unshift(s.layout))}return{source:r,changed:o.length>0,layouts:o}}function vr(t,e,n){let o=we(e.source,n);if(o.type!=="flowchart")return{source:t,changed:!1,layout:null};let r=rn(o);if(!r)return{source:t,changed:!1,layout:null};let i=t.split(`
`),s=e.fenceRange.start.line-1,a=e.fenceRange.end.line-1,c=i[s].endsWith("\r")?i[s].slice(0,-1):i[s],d=c.slice(0,c.length-ke(c).length),u=i.filter(p=>p.endsWith("\r")).length*2>i.length-1?"\r":"",h=Oe(o).split(`
`).map(p=>`${d}${p}${u}`);return i.splice(s+1,a-s-1,...h),{source:i.join(`
`),changed:!0,layout:r}}function kr(t,e){let n=gt(t),o=nt(t).find(r=>r.index===e);if(!o)throw new Error(`Diagram ${e+1} does not exist.`);return vr(t,o,n.colourScheme)}function $r(t,e,n="all"){let o=gt(t),r=nt(t).find(g=>g.index===e);if(!r)throw new Error(`Diagram ${e+1} does not exist.`);let i=we(r.source,o.colourScheme);if(i.type!=="flowchart")return{source:t,changed:!1};an(i,n);let s=t.split(`
`),a=r.fenceRange.start.line-1,c=r.fenceRange.end.line-1,d=s[a].endsWith("\r")?s[a].slice(0,-1):s[a],l=d.slice(0,d.length-ke(d).length),h=s.filter(g=>g.endsWith("\r")).length*2>s.length-1?"\r":"",p=Oe(i).split(`
`).map(g=>`${l}${g}${h}`);return s.splice(a+1,c-a-1,...p),{source:s.join(`
`),changed:!0}}function Dr(t,e){return Xe(t)===null?`id: ${e}
${t}`:t.replace(/^id:\s*(?:"[^"]+"|[^\s#]+)\s*$/m,()=>`id: ${e}`)}function so(t,e,n){let o=t.replace(/\r\n/g,`
`),r=o.split(`
`),i=r.findIndex(l=>l.trim()!==""),s=i!==-1&&r[i]==="---",a=s?r.indexOf("---",i+1):-1;if(!s||a===-1)return`---
${e}: ${n}
---
${o}`;let c=!1,d=r.slice(i+1,a).map(l=>{if(!l.trim()||l.trimStart().startsWith("#"))return l;let u=l.match(/^([^:]+):\s*(.*)$/);return u&&u[1]===e?(c=!0,`${e}: ${n}`):l});return c||d.push(`${e}: ${n}`),[...r.slice(0,i+1),...d,...r.slice(a)].join(`
`)}function Fr(t,e){return so(t,"theme",e)}function Nr(t,e){return so(t,"colourScheme",e)}function Ar(t,e){return so(t,"doctype",e)}function Mr(t,e){let n=e.trim(),o=n?t.indexOf(n):-1;return o===-1?null:{start:o,end:o+n.length}}function Tr(t,e){let n=Number.parseFloat(globalThis.getComputedStyle(t).lineHeight)||20,o=t.value.slice(0,e.start).split(`
`).length-1,r=Math.max(1,Math.floor(t.clientHeight/n));t.scrollTop=Math.max(0,(o-Math.floor(r/2))*n)}var ka=[{type:"comment",pattern:"\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/"},{type:"string",pattern:"`(?:\\\\.|[^`\\\\])*`|\"(?:\\\\.|[^\"\\\\\\n])*\"|'(?:\\\\.|[^'\\\\\\n])*'"}],ot={type:"number",pattern:"\\b(?:0[xXbBoO][\\da-fA-F_]+|\\d[\\d_]*(?:\\.[\\d_]+)?(?:[eE][+-]?\\d+)?)\\b"};function Ie(...t){return`\\b(?:${t.join("|")})\\b`}var $a=Ie("async","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","export","extends","finally","for","from","function","get","if","implements","import","in","instanceof","interface","let","new","of","private","protected","public","readonly","return","satisfies","set","static","super","switch","this","throw","try","type","typeof","var","void","while","yield"),Lr={clike:[...ka,{type:"keyword",pattern:$a},{type:"literal",pattern:Ie("true","false","null","undefined","NaN","Infinity")},{type:"type",pattern:Ie("any","bigint","boolean","never","number","object","string","symbol","unknown")},ot],python:[{type:"comment",pattern:"#[^\\n]*"},{type:"string",pattern:`(?:[rRbBfFuU]{0,2})(?:"""[\\s\\S]*?"""|'''[\\s\\S]*?'''|"(?:\\\\.|[^"\\\\\\n])*"|'(?:\\\\.|[^'\\\\\\n])*')`},{type:"keyword",pattern:Ie("and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield")},{type:"literal",pattern:Ie("True","False","None","self","cls")},ot],ruby:[{type:"comment",pattern:"#[^\\n]*"},{type:"string",pattern:`"(?:\\\\.|[^"\\\\\\n])*"|'(?:\\\\.|[^'\\\\\\n])*'|:[a-zA-Z_]\\w*[?!]?`},{type:"keyword",pattern:Ie("alias","begin","break","case","class","def","do","else","elsif","end","ensure","for","if","in","module","next","raise","require","rescue","return","then","unless","until","when","while","yield")},{type:"literal",pattern:Ie("true","false","nil","self")},ot],json:[{type:"attribute",pattern:'"(?:\\\\.|[^"\\\\])*"(?=\\s*:)'},{type:"string",pattern:'"(?:\\\\.|[^"\\\\])*"'},{type:"literal",pattern:Ie("true","false","null")},ot],yaml:[{type:"comment",pattern:"#[^\\n]*"},{type:"attribute",pattern:"^\\s*(?:-\\s+)?[\\w.-]+(?=\\s*:(?:\\s|$))"},{type:"string",pattern:`"(?:\\\\.|[^"\\\\\\n])*"|'(?:''|[^'\\n])*'`},{type:"meta",pattern:"^---\\s*$|^\\.\\.\\.\\s*$|(?:^|\\s)[|>][+-]?\\s*$|(?:^|\\s)[&*][\\w-]+"},{type:"literal",pattern:Ie("true","false","null","yes","no","on","off","True","False","Null")},ot],sql:[{type:"comment",pattern:"--[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/"},{type:"string",pattern:"'(?:''|[^'\\n])*'"},{type:"keyword",pattern:`\\b(?:${["ADD","ALL","ALTER","AND","AS","ASC","BEGIN","BETWEEN","BY","CASE","COMMIT","CREATE","CROSS","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","EXISTS","FROM","FULL","GROUP","HAVING","IN","INDEX","INNER","INSERT","INTO","IS","JOIN","LEFT","LIKE","LIMIT","NOT","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RETURNING","RIGHT","ROLLBACK","SELECT","SET","TABLE","THEN","TRANSACTION","UNION","UNIQUE","UPDATE","VALUES","VIEW","WHEN","WHERE","WITH"].join("|")})\\b`},{type:"literal",pattern:"\\b(?:NULL|TRUE|FALSE)\\b"},ot],shell:[{type:"comment",pattern:"#[^\\n]*"},{type:"string",pattern:`"(?:\\\\.|[^"\\\\])*"|'[^']*'`},{type:"meta",pattern:"\\$(?:\\{[^}]*\\}|[\\w@*#?$!-]+)"},{type:"keyword",pattern:Ie("case","cd","do","done","echo","elif","else","esac","exit","export","fi","for","function","if","in","local","read","return","set","shift","source","then","unset","until","while")},{type:"attribute",pattern:"(?:^|\\s)--?[\\w-]+"},ot],markup:[{type:"comment",pattern:"<!--[\\s\\S]*?-->"},{type:"meta",pattern:"<!(?:DOCTYPE|doctype)[^>]*>|<\\?[\\s\\S]*?\\?>"},{type:"tag",pattern:"<\\/?[a-zA-Z][\\w:-]*"},{type:"string",pattern:`"[^"]*"|'[^']*'`},{type:"attribute",pattern:"\\b[a-zA-Z_:][\\w:.-]*(?==)"},{type:"tag",pattern:"\\/?>"}],css:[{type:"comment",pattern:"\\/\\*[\\s\\S]*?\\*\\/"},{type:"string",pattern:`"[^"\\n]*"|'[^'\\n]*'`},{type:"meta",pattern:"@[\\w-]+"},{type:"attribute",pattern:"[a-zA-Z-]+(?=\\s*:)"},{type:"number",pattern:"#[\\da-fA-F]{3,8}\\b|\\b\\d[\\d.]*(?:px|rem|em|%|vh|vw|s|ms|deg|fr)?\\b"}],diff:[{type:"meta",pattern:"^(?:diff|index|@@|\\+\\+\\+|---)[^\\n]*"},{type:"inserted",pattern:"^\\+[^\\n]*"},{type:"deleted",pattern:"^-[^\\n]*"}],ini:[{type:"comment",pattern:"[#;][^\\n]*"},{type:"meta",pattern:"^\\s*\\[[^\\]\\n]*\\]"},{type:"attribute",pattern:"^\\s*[\\w.-]+(?=\\s*=)"},{type:"string",pattern:`"[^"\\n]*"|'[^'\\n]*'`},{type:"literal",pattern:Ie("true","false")},ot]},Da={javascript:"clike",js:"clike",jsx:"clike",mjs:"clike",cjs:"clike",typescript:"clike",ts:"clike",tsx:"clike",java:"clike",kotlin:"clike",kt:"clike",swift:"clike",scala:"clike",go:"clike",golang:"clike",rust:"clike",rs:"clike",c:"clike",cpp:"clike","c++":"clike",cs:"clike",csharp:"clike",php:"clike",dart:"clike",python:"python",py:"python",ruby:"ruby",rb:"ruby",json:"json",jsonc:"json",yaml:"yaml",yml:"yaml",sql:"sql",postgresql:"sql",mysql:"sql",bash:"shell",sh:"shell",shell:"shell",zsh:"shell",console:"shell",terminal:"shell",html:"markup",xml:"markup",svg:"markup",vue:"markup",css:"css",scss:"css",less:"css",diff:"diff",patch:"diff",ini:"ini",toml:"ini",conf:"ini"},Cr=new Map;function Fa(t){let e=Cr.get(t);if(e)return e;let n=new RegExp(Lr[t].map(o=>`(${o.pattern})`).join("|"),"gm");return Cr.set(t,n),n}function Na(t){let e=String(t??"").trim().toLowerCase();return Da[e]||null}function Pr(t,e){let n=Na(e);if(!n)return k(t);let o=Lr[n],r=Fa(n);r.lastIndex=0;let i=[],s=0,a;for(;a=r.exec(t);){if(!a[0]){r.lastIndex+=1;continue}a.index>s&&i.push(k(t.slice(s,a.index)));let c=a.findIndex((h,p)=>p>0&&h!==void 0)-1,d=o[c]?.type,l=a[0].match(/^\s*/)[0],u=a[0].slice(l.length);i.push(k(l)),i.push(d&&u?`<span class="docdiagram-token-${d}">${k(u)}</span>`:k(u)),s=a.index+a[0].length}return i.push(k(t.slice(s))),i.join("")}var ln={section:{attributes:["title","palette","fill","stroke","text"]},panel:{attributes:["title","palette","fill","stroke","text"]},callout:{attributes:["kind","title","palette","fill","stroke","text"]},grid:{attributes:["columns"]},stack:{attributes:[]},diagram:{attributes:["id"],void:!0},toc:{attributes:["depth","diagrams"],void:!0}},Aa=Object.keys(ln);function co(t){return!!ln[t].void}var Ma=/\u0001ref:([^\u0001]*)\u0001/g,Ta=/\u0001toc:([^\u0001]*)\u0001/g;function Ca(t){let e=t.replace(/\\#/g,""),n=e.indexOf("#"),o=r=>r.replace(/\u0002/g,"#");return n===-1?{hasPlaceholder:!1,before:o(e),after:"",text:o(e)}:{hasPlaceholder:!0,before:o(e.slice(0,n)),after:o(e.slice(n+1)),text:o(e.slice(0,n)+e.slice(n+1))}}function La(t){return t.replace(/!\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/(\*\*|__|~~|\*|_)/g,"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/[\s-]+/g,"-")||"section"}function Pa(t,e){let n=La(t),o=e.headingOccurrences||(e.headingOccurrences=new Map),r=e.usedHeadingIds||(e.usedHeadingIds=new Set),i=(o.get(n)||0)+1,s=i===1?n:`${n}-${i}`;for(;r.has(s);)i+=1,s=`${n}-${i}`;return o.set(n,i),r.add(s),s}function lo(t){let e=[],n="",o=!1,r=t.trim().replace(/^\||\|$/g,"");for(let i of r)o?(n+=i,o=!1):i==="\\"?o=!0:i==="|"?(e.push(n.trim()),n=""):n+=i;return e.push(n.trim()),e}function Rr(t){let e=lo(t);return!e.length||!e.every(n=>/^:?-{3,}:?$/.test(n))?null:e.map(n=>n.startsWith(":")&&n.endsWith(":")?"center":n.startsWith(":")?"left":n.endsWith(":")?"right":"")}function pt(t){return t.match(/^(\s*)([-+*]|\d+[.)])\s+(.+)$/)}function zt(t){let e=t.match(new RegExp(`^:::(${Aa.join("|")})(?:\\s+\\{(.*)\\})?\\s*$`));if(!e)return null;let n={},o=e[2];if(o!==void 0){let r=0,i=/\s*([a-z][\w-]*)=(?:"([^"]*)"|([^\s}]+))/gi,s;for(;s=i.exec(o);){if(s.index!==r||n[s[1]]!==void 0)return null;n[s[1]]=s[2]??s[3],r=i.lastIndex}if(o.slice(r).trim())return null}return{name:e[1],attributes:n}}function Ra(t){let e=zt(t);if(!e||e.name!=="diagram")return null;let n=Object.keys(e.attributes),o=e.attributes.id;return n.length===1&&o?{id:o}:null}function Ba(t){let e=t.match(/^caption:[ \t]*(\S.*?)\s*$/m),n=e?Be(e[1]):null;return typeof n=="string"&&n?n:null}function Ia(t){return t.replace(/^(?: {0,3}> ?)+/,"")}function Ir(t){return/^:::(?:\s+.*)?$/.test(t)}function qa(t,e,n){let o=1,r=null;for(let i=e+1;i<n;i+=1){let s=t[i];if(r){ut(s,r)&&(r=null);continue}let a=Ge(s);if(a){r=a.marker;continue}let c=zt(s);if(c)co(c.name)||(o+=1);else if(Ir(s)&&(o-=1,!o))return i}return-1}function za(t){return/^#[\da-f]{3,8}$/i.test(t)}function Ha(t,e="classic",n="light"){let o=t.palette!==void 0;if(o&&!Te.includes(t.palette))return null;for(let a of["fill","stroke","text"])if(t[a]!==void 0&&!za(t[a]))return null;let r=o?ve(e,n,t.palette):null,i=Object.fromEntries(["fill","stroke","text"].filter(a=>t[a]!==void 0).map(a=>[a,t[a]])),s=Pe(r||{},i);return Object.entries(s).filter(([,a])=>a!==void 0).map(([a,c])=>`--docdiagram-component-${a}:${c}`).join(";")}function Br(t,e=!1){let n=String(t).trim();if(n.startsWith("//")||n.startsWith("\\"))return!1;if(!n||n.startsWith("#")||n.startsWith("/")||n.startsWith("./")||n.startsWith("../")||n.startsWith("?")||e&&/^data:image\/(?:gif|jpeg|png|webp);base64,/i.test(n))return!0;let o=n.match(/^([a-z][a-z\d+.-]*):/i);return!o||["http","https","mailto"].includes(o[1].toLowerCase())}function $e(t){let e=[],n=String(t).replace(/`([^`]+)`/g,(r,i)=>{let s=`\0${e.length}\0`;return e.push(`<code>${k(i)}</code>`),s}),o=[];return n=n.replace(/!\[[^\]]*\]\([^)]*\)|(\[[^\]]*\]\()([^)]*)(\))/g,(r,i,s,a)=>{let c=`${o.length}`;return o.push(i?s:r),i?`${i}${c}${a}`:c}),n=n.replace(/\{annotation=(?:"([^"}\r\n]+)"|([^{}\r\n]+))\}/g,(r,i,s)=>{let a=je(i??s);if(!a.trim()||/[\u0000-\u001f\u007f]/.test(a))return r;let c=`\0${e.length}\0`,d=/^[0-9]{1,2}$/.test(a)?" docdiagram-annotation-inline-circle":"";return e.push(`<span class="docdiagram-annotation-inline${d}" role="img" aria-label="Reference ${k(a)}">${k(a)}</span>`),c}),n=n.replace(/\u0002(\d+)\u0002/g,(r,i)=>o[Number(i)]),n=n.replace(/\{ref=(?:"([^"}]+)"|([^\s}]+))\}/g,(r,i,s)=>`ref:${i??s}`),n=k(n),n=n.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(r,i,s)=>{let a=s.replace(/&amp;/g,"&");return Br(a,!0)?`<img src="${k(a)}" alt="${i}">`:`![${i}](${k(s)})`}),n=n.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(r,i,s)=>{let a=s.replace(/&amp;/g,"&");return Br(a)?`<a href="${k(a)}">${i}</a>`:`[${i}](${k(s)})`}),n=n.replace(/(\*\*|__)(?=\S)([\s\S]*?\S)\1/g,"<strong>$2</strong>").replace(/~~(?=\S)([\s\S]*?\S)~~/g,"<del>$1</del>").replace(/(?<!\*)\*(?=\S)([\s\S]*?\S)\*(?!\*)/g,"<em>$1</em>").replace(/(?<!_)_(?=\S)([\s\S]*?\S)_(?!_)/g,"<em>$1</em>"),n.replace(/\u0000(\d+)\u0000/g,(r,i)=>e[Number(i)])}function un(t,e={diagramIndex:0},n){let o=t.replace(/\r\n/g,`
`).split(`
`),r=n?.renderDiagram??((E,S)=>{throw new Error("renderDiagram callback is required for diagram blocks.")}),i=!!n?.diagramReferenceRegistry,s=n?.documentColorScheme||"classic",a=n?.documentTheme||"light",c=n?.diagramReferenceRegistry||(()=>{let E=new Map,S=new Set,x=new Map,y=new Set,F=o.map(Ia);for(let M=0;M<F.length;M+=1){let R=Ge(F[M]);if(!R)continue;let A=Mt(F,M+1,R.marker);if(A===-1)break;if(R.info==="diagram"){let P=F.slice(M+1,A).join(`
`),N=Xe(P);N&&(y.add(N),E.has(N)?S.add(N):E.set(N,{id:N,source:P}))}M=A}let D=null;for(let M of F){if(D){ut(M,D)&&(D=null);continue}let R=Ge(M);if(R){D=R.marker;continue}let A=Ra(M);A&&x.set(A.id,(x.get(A.id)||0)+1)}return{definitions:E,duplicateDefinitionIds:S,referenceCounts:x,diagramIds:y}})(),{definitions:d,duplicateDefinitionIds:l,referenceCounts:u}=c;if(e.figures||(e.figures=new Map),e.contents||(e.contents=[]),!i){let E=e.usedHeadingIds||(e.usedHeadingIds=new Set);for(let S of c.diagramIds)E.add(S)}function h(E){let S=Xe(E);S&&e.anchors&&e.anchors.set(S,(e.anchors.get(S)||0)+1);let x=Ba(E),y=x?Ca(x):null,F=y?.hasPlaceholder?e.figureNumber=(e.figureNumber||0)+1:null,D=y?F===null?y.text:`${y.before}${F}${y.after}`:null;y&&S&&(e.figures.set(S,{id:S,number:F,text:D}),e.contents.push({kind:"figure",level:0,id:S,text:$e(D)}));let M=r(E,e.diagramIndex,{id:S,caption:D});return e.diagramIndex+=1,M}function p(E){let S=o[E]||"";return!S.trim()||/^```/.test(S)||/^(#{1,6})\s+/.test(S)||/^ {0,3}&gt;|^ {0,3}>/.test(S)||/^ {0,3}(?:[-*_]\s*){3,}$/.test(S)||/^:::/.test(S)||!!pt(S)||E+1<o.length&&!!Rr(o[E+1])}function g(E,S){let x=pt(o[E]),y=/^\d/.test(x[2]),F=[],D=E,M=y?Number.parseInt(x[2],10):null;for(;D<o.length;){let N=pt(o[D]);if(!N||N[1].length!==S||/^\d/.test(N[2])!==y)break;let q={content:[N[3]],children:[]};for(D+=1;D<o.length;){let H=pt(o[D]);if(H&&H[1].length>S){let O=g(D,H[1].length);q.children.push(O.html),D=O.index;continue}if(!o[D].trim()){D+=1;let O=D<o.length?pt(o[D]):null;if(D>=o.length||!O||O[1].length<=S)break;continue}if(/^\s+/.test(o[D])&&!pt(o[D])){q.content.push(o[D].trim()),D+=1;continue}break}F.push(q)}let R=y?"ol":"ul",A=y&&M!==1?` start="${M}"`:"",P=F.map(N=>{let q=!y&&N.content.length===1&&N.content[0].match(/^\[([ xX])\]\s+(.*)$/),H=q?`<input type="checkbox" disabled${q[1].toLowerCase()==="x"?" checked":""}> ${$e(q[2])}`:$e(N.content.join(" "));return`<li${q?' class="docdiagram-task-list-item"':""}>${H}${N.children.join("")}</li>`}).join("");return{html:`<${R}${A}>${P}</${R}>`,index:D}}function m(E){let{name:S,attributes:x}=E;if(Object.keys(x).some(F=>!ln[S].attributes.includes(F)))return null;if(S==="diagram"){let F=x.id;if(!F)return null;let D=d.get(F);return D?l.has(F)?`<section class="docdiagram-error"><strong>Diagram "${k(F)}" has multiple definitions.</strong></section>`:(u.get(F)||0)>1?`<section class="docdiagram-error"><strong>Diagram "${k(F)}" is referenced more than once.</strong></section>`:h(D.source):`<section class="docdiagram-error"><strong>Diagram "${k(F)}" could not be found.</strong></section>`}let y=x.depth===void 0?3:Number(x.depth);return!Number.isInteger(y)||y<1||y>6||x.diagrams!==void 0&&x.diagrams!=="true"&&x.diagrams!=="false"?null:`toc:${y}:${x.diagrams==="true"}`}function f(E,S){let x=zt(o[E]);if(!x||co(x.name))return null;let y=qa(o,E,S);if(y===-1)return null;let{name:F,attributes:D}=x;if(Object.keys(D).some(N=>!ln[F].attributes.includes(N)))return null;if(F==="grid"){let N=Mo[D.columns];if(!N)return null;let q=[],H=E+1;for(;H<y;){if(!o[H].trim()){H+=1;continue}let O=zt(o[H]);if(!O||!["panel","callout","stack"].includes(O.name))return null;let oe=f(H,y);if(!oe)return null;q.push(`<div class="docdiagram-grid-item">${oe.html}</div>`),H=oe.next}return{html:`<div class="docdiagram-grid" style="--docdiagram-grid-columns:${N}">${q.join("")}</div>`,next:y+1}}if(F==="stack")return Object.keys(D).length?null:{html:`<div class="docdiagram-stack">${b(E+1,y)}</div>`,next:y+1};let M=Ha(D,s,a);if(M===null||F==="callout"&&D.kind!==void 0&&!Ao.includes(D.kind))return null;let R=D.title?`<div class="docdiagram-component-title">${$e(D.title)}</div>`:"",A=b(E+1,y),P=`docdiagram-component${F==="callout"?"":` docdiagram-${F}`}${M?" docdiagram-component-styled":""}`;if(F==="callout"){let N=D.kind||"info";return{html:`<aside class="${P} docdiagram-callout docdiagram-callout-${N}"${M?` style="${M}"`:""} aria-label="${k(D.title||N)} callout"><div class="docdiagram-callout-kind">${k(N)}</div>${R}${A}</aside>`,next:y+1}}return{html:`<section class="${P}"${M?` style="${M}"`:""}>${R}${A}</section>`,next:y+1}}function b(E=0,S=o.length){let x=[],y=E;for(;y<S;){let F=o[y];if(!F.trim()){y+=1;continue}if(/^:::/.test(F)){let N=zt(F);if(N&&co(N.name)){let H=m(N);x.push(H??`<pre class="docdiagram-literal-source"><code>${k(F)}</code></pre>`),y+=1,H!==null&&y<S&&Ir(o[y])&&(y+=1);continue}let q=f(y,S);q?(x.push(q.html),y=q.next):(x.push(`<pre class="docdiagram-literal-source"><code>${k(F)}</code></pre>`),y+=1);continue}let D=Ge(F);if(D){let N=o.slice(y+1,S).findIndex(O=>ut(O,D.marker));if(N===-1){x.push('<section class="docdiagram-error"><strong>Unclosed code block.</strong></section>');break}let q=y+N+1,H=o.slice(y+1,q).join(`
`);if(D.info==="diagram"){let O=Xe(H);O&&l.has(O)?x.push(`<section class="docdiagram-error"><strong>Diagram "${k(O)}" has multiple definitions.</strong></section>`):(!O||!u.has(O))&&x.push(h(H))}else{let O=D.info?` class="language-${k(D.info)}"`:"";x.push(`<pre><code${O}>${Pr(H,D.info)}</code></pre>`)}y=q+1;continue}let M=F.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);if(M){let N=M[1].length,q=Pa(M[2],e);e.anchors&&e.anchors.set(q,(e.anchors.get(q)||0)+1),e.contents.push({kind:"heading",level:N,id:q,text:$e(M[2])}),x.push(`<h${N} id="${q}">${$e(M[2])}</h${N}>`),y+=1;continue}if(/^ {0,3}(?:[-*_]\s*){3,}$/.test(F)){x.push("<hr>"),y+=1;continue}if(/^ {0,3}>/.test(F)){let N=[];for(;y<S&&/^ {0,3}>/.test(o[y]);)N.push(o[y].replace(/^ {0,3}> ?/,"")),y+=1;x.push(`<blockquote>${un(N.join(`
`),e,{...n,diagramReferenceRegistry:c})}</blockquote>`);continue}let R=pt(F);if(R){let N=g(y,R[1].length);x.push(N.html),y=N.index;continue}let A=y+1<S?Rr(o[y+1]):null;if(A){let N=lo(F),q=[];for(y+=2;y<S&&o[y].includes("|")&&o[y].trim();)q.push(lo(o[y])),y+=1;let H=(O,oe)=>oe.map((de,De)=>`<${O}${A[De]?` style="text-align:${A[De]}"`:""}>${$e(de||"")}</${O}>`).join("");x.push(`<table><thead><tr>${H("th",N)}</tr></thead><tbody>${q.map(O=>`<tr>${H("td",O)}</tr>`).join("")}</tbody></table>`);continue}let P=[F.trim()];for(y+=1;y<S&&!p(y);)P.push(o[y].trim()),y+=1;x.push(`<p>${$e(P.join(" "))}</p>`)}return x.join("")}let v=b();return i?v:Oa(v,e)}function qr(t){let e=mt(t),n=new Map;return un(e.content,{diagramIndex:0,anchors:n},{renderDiagram:()=>"",documentColorScheme:e.colourScheme,documentTheme:e.theme}),n}function ja(t,e,n){let o=t.filter(d=>d.kind==="figure"?n:d.level<=e);if(!o.length)return"";let r=o.filter(d=>d.kind==="heading").map(d=>d.level),i=Math.min(...r.length?r:[1]),s=[],a=[];for(let d of o){let l=d.kind==="figure"?(a.length?a[a.length-1].level:0)+1:d.level-i+1;for(;a.length&&a[a.length-1].level>=l;)a.pop();let u={entry:d,level:l,children:[]};(a.length?a[a.length-1].children:s).push(u),d.kind==="heading"&&a.push(u)}let c=d=>`<ul>${d.map(l=>`<li class="docdiagram-contents-${l.entry.kind}"><a href="#${k(l.entry.id)}">${l.entry.text}</a>${l.children.length?c(l.children):""}</li>`).join("")}</ul>`;return`<nav class="docdiagram-contents" aria-label="Table of contents">${c(s)}</nav>`}function Oa(t,e){let n=e.figures||new Map,o=e.contents||[];return t.replace(Ma,(r,i)=>{let s=n.get(i);return s?`<a href="#${k(i)}">${s.number===null?$e(s.text):String(s.number)}</a>`:`<strong class="docdiagram-error-inline">Unknown reference "${k(i)}"</strong>`}).replace(Ta,(r,i)=>{let[s,a]=i.split(":");return ja(o,Number(s),a==="true")})}function zr(t,e){return t||`diagram ${e+1}`}function Ga(t,e){let n=new Map,o=[],r="";return t.source.split(`
`).forEach((i,s)=>{let a=i.match(/^([A-Za-z_][\w-]*):/);a&&(r=a[1]);let c=i.match(/^\s*-\s+id:\s*(?:"([^"]+)"|'([^']+)'|([^\s#]+))/),d=t.lineRanges[s];c&&d&&n.set(c[1]||c[2]||c[3],d),r==="edges"&&/^\s*-\s+[^:]+:/.test(i)&&d&&o.push(d)}),e.map(i=>i.kind==="node"?{...i,sourceRange:i.sourceRange??n.get(i.id)}:{...i,sourceRange:i.sourceRange??o[i.index]})}function Hr(t){let e=[],n=[],o=!1,r=null;for(let[i,s]of t.source.split(`
`).entries()){let a=s.length-s.trimStart().length;if(r!==null){if(!s.trim()||a>r)continue;r=null}if(/^[A-Za-z_][\w-]*:/.test(s)&&(o=s.startsWith("nodes:"),n.length=0),!o)continue;let c=s.match(/^\s*(-\s+)?([A-Za-z_][\w-]*):\s*(.*)$/);if(!c)continue;if(c[1]){for(;n.length&&n[n.length-1].indent>=a;)n.pop();let l={indent:a};e.push(l),n.push(l)}else for(;n.length&&n[n.length-1].indent>=a;)n.pop();let d=n[n.length-1];if(d&&(c[1]||a===d.indent+2)){if(c[2]==="id"){let l=Be(c[3]);typeof l=="string"&&(d.id=l)}else if(c[2]==="href"){let l=t.lineRanges[i],u=s.indexOf("href:");d.range={start:{...l.start,column:l.start.column+u,offset:l.start.offset+u},end:l.end}}}/^\|[+-]?$/.test(c[3])&&(r=a+(c[1]?2:0))}return new Map(e.filter(i=>i.id&&i.range).map(i=>[i.id,i.range]))}function jr(t,e){let n=Math.min(t.x+t.width,e.x+e.width)-Math.max(t.x,e.x),o=Math.min(t.y+t.height,e.y+e.height)-Math.max(t.y,e.y);return n>0&&o>0?{width:n,height:o}:null}function Va(t,e,n){let o=Xt(t,e);for(let r of o){let i=r.kind==="node"?{kind:"node",id:r.id}:{kind:"edge",index:r.index,source:t.edges[r.index].source,target:t.edges[r.index].target},s=r.kind==="node"?`Node "${r.id}"`:`Edge ${r.index+1}`,a=It(r.ref),{bounds:c,target:d}=r;r.kind==="node"&&a===a.toLowerCase()&&(c.x<d.x||c.y<d.y||c.x+c.width>d.x+d.width||c.y+c.height>d.y+d.height)&&n("annotation-overflow",`${s} annotation does not fit inside its node bounds. Enlarge the node or choose an outside position.`,"warning",[i]);let l=r.kind==="node"?e.getById(r.id)?.node:null,u=e.entries.find(h=>(!l||!e.isRelated(l,h.node))&&jr(c,h.bounds));u&&n("annotation-overlap",`${s} annotation overlaps node "${u.node.id}".`,"warning",[i,{kind:"node",id:u.node.id}])}}function Wa(t,e){let n=t.entries;for(let o=0;o<n.length;o+=1)for(let r=o+1;r<n.length;r+=1){let i=n[o],s=n[r];if(t.isRelated(i.node,s.node))continue;let a=jr(i.bounds,s.bounds);a&&e("node-overlap",`Nodes "${i.node.id}" and "${s.node.id}" overlap by ${Math.round(a.width)} by ${Math.round(a.height)} units.`,"warning",[{kind:"node",id:i.node.id},{kind:"node",id:s.node.id}])}}function Ua(t,e){for(let{node:n}of t.entries){let o=Number(n.size?.width)||V.width,r=Number(n.size?.height)||V.height,{textBounds:i}=Ce(n,0,0,o,r),s=Dt(i,n),a=24;if(n.shape==="text"){let d=ge(n.label).find(l=>ze(l.replace(/^#{1,2}\s+/,""),/^#{1,2}\s/.test(l)?24:16)>i.width+a);d!==void 0&&e("label-overflow",`Node "${n.id}" has a line wider than its shape: "${d.trim()}".`,"warning",[{kind:"node",id:n.id}])}let c=s.labelLines.length*s.labelLineHeight+(s.subtitleLines.length?6+s.subtitleLines.length*s.subtitleLineHeight:0);c>i.height+a&&e("label-overflow",`Node "${n.id}" needs ${Math.ceil(c)} units of text height but its shape offers ${Math.floor(i.height+a)}.`,"warning",[{kind:"node",id:n.id}])}}function Ya(t,e,n){let o=i=>({kind:"edge",index:i,source:t.edges[i].source,target:t.edges[i].target}),r=He(t,e);for(let[i,s]of(t.edges||[]).entries()){let a=o(i),c=e.getById(s.source),d=e.getById(s.target);for(let[p,g,m]of[["source",s.source,c],["target",s.target,d]])m||n("unknown-edge-endpoint",`Edge "${s.source}" -> "${s.target}" names a ${p} node "${g}" that does not exist, so it is not drawn.`,"error",[a]);if(!c||!d)continue;let l=e.entries.filter(({node:p})=>!e.isRelated(p,c.node)&&!e.isRelated(p,d.node)),u=r[i],h=Bt(u.path.path);for(let p of l)h.slice(1).some((m,f)=>ct(h[f],m,p.bounds))&&n("edge-crosses-node",`Edge "${s.source}" -> "${s.target}" passes through unrelated node "${p.node.id}".`,"warning",[a,{kind:"node",id:p.node.id}]);if(u.label&&!u.label.clear){let p=[a],g=new Set([`edge:${i}`]);for(let m of u.label.conflicts){if(m.kind==="canvas")continue;let f=m.kind==="node"?`node:${m.id}`:`edge:${m.edgeIndex}`;g.has(f)||(g.add(f),p.push(m.kind==="node"?{kind:"node",id:m.id}:o(m.edgeIndex)))}n("edge-label-overlap",`Edge "${s.source}" -> "${s.target}" has no clear position for its label; the deterministic fallback remains visible.`,"warning",p)}}}function uo(t){let e=[],n=ht(t);try{gt(t)}catch(i){let s={severity:"error",rule:"schema",message:i.message};if(i instanceof Ue)for(let a of nt(t))try{we(a.source)}catch(c){if(c instanceof Ue){s.diagram=zr(a.id,a.index),s.location={diagramId:a.id,diagramIndex:a.index,fenceRange:a.fenceRange,subjects:[{kind:"node",id:c.nodeId,sourceRange:Hr(a).get(c.nodeId)}]};break}}return e.push(s),{sourceHash:n,messages:e,errorCount:1,warningCount:0}}let o=mt(t).colourScheme,r=qr(t);return nt(t).forEach(i=>{let s=we(i.source,o);if(s.type!=="flowchart")return;let a=zr(i.id,i.index),c=(h,p,g="warning",m=[])=>{e.push({severity:g,rule:h,message:p,diagram:a,location:{diagramId:i.id,diagramIndex:i.index,fenceRange:i.fenceRange,subjects:Ga(i,m)}})},d=new Y(s),l=Hr(i);for(let{node:h}of d.entries){if(h.href===void 0)continue;let p=Pt(h.href),g=r.get(p)||0;g!==1&&c(g?"ambiguous-node-destination":"missing-node-destination",g?`Node "${h.id}" destination "${h.href}" matches ${g} rendered anchors.`:`Node "${h.id}" destination "${h.href}" does not match a rendered heading or diagram anchor.`,"warning",[{kind:"node",id:h.id,sourceRange:l.get(h.id)}])}Ya(s,d,c),Wa(d,c),Ua(d,c),Va(s,d,c);let u=fr(s);u&&(c("unbalanced-aspect-ratio",`Fitted content is ${u.width} by ${u.height} units (${u.aspectRatio.toFixed(1)}:1 ${u.direction}); ${u.reason}.`,"warning"),e[e.length-1].suggestedAction={id:"wrap-linear-flow",label:`Wrap this ${u.direction} flow`,diagramIndex:i.index})}),{sourceHash:n,messages:e,errorCount:e.filter(i=>i.severity==="error").length,warningCount:e.filter(i=>i.severity==="warning").length}}function Or(t){return t.messages.map(e=>[e.severity,e.diagram?`[${e.diagram}]`:null,e.message,`(${e.rule})`].filter(Boolean).join(" ")).join(`
`)}var go={h1:{fontSize:26,lineHeight:34},h2:{fontSize:20,lineHeight:26},body:{fontSize:16,lineHeight:20}},ho=.72,_a=/^(#{1,2})\s+(.*)$/,mo=/(\*\*([^*]+)\*\*)|((?<!\w)_([^_\s](?:[^_]*[^_\s])?)_)(?!\w)|(`([^`]+)`)/g;function Xa(t){let e=t.match(_a);return e?{kind:e[1].length===1?"h1":"h2",text:e[2]}:{kind:"body",text:t}}function Ka(t){let e=[],n=0,o;for(mo.lastIndex=0;o=mo.exec(t);)o.index>n&&e.push({text:t.slice(n,o.index)}),o[2]!==void 0?e.push({text:o[2],bold:!0}):o[4]!==void 0?e.push({text:o[4],italic:!0}):o[6]!==void 0&&e.push({text:o[6],code:!0}),n=mo.lastIndex;return(n<t.length||!e.length)&&e.push({text:t.slice(n)}),e}function Za(t,e,n,o,r,i){let s=[];n&&(s.push(`x="${o}"`),r!==null&&s.push(`dy="${r}"`));let a=[`font-size:${i}px`];(t.bold||e)&&a.push("font-weight:700"),t.italic&&a.push("font-style:italic"),t.code&&a.push("font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace"),s.push(`style="${a.join(";")}"`);let c=k(t.text)||" ";return`<tspan ${s.join(" ")}>${c}</tspan>`}function Ja(t,e,n,o,r){if(!o.length)return"";let i=n+go[o[0].kind].lineHeight*ho,s=n,a=0,c=o.map((d,l)=>{let u=go[d.kind],h=s+u.lineHeight*ho,p=l===0?null:h-a;s+=u.lineHeight,a=h;let g=Ka(d.text),m=d.kind!=="body";return g.map((f,b)=>Za(f,m,b===0,t,b===0?p:null,u.fontSize)).join("")}).join("");return`<text x="${t}" y="${i}" text-anchor="${e}" class="docdiagram-node-label docdiagram-node-label-markdown" fill="${k(r)}">${c}</text>`}function Gr(t,e,n){let o=ge(e.label).map(Xa),r=e.subtitle?ge(e.subtitle):[];if(!o.length&&!r.length)return"";let i=15,s=o.reduce((v,E)=>v+go[E.kind].lineHeight,0),a=r.length?6:0,c=r.length*i,d=s+a+c,l=e.textHAlign||"center",u=l==="left"?t.x:l==="right"?t.x+t.width:t.x+t.width/2,h=l==="left"?"start":l==="right"?"end":"middle",p=t.y+t.height/2,g=e.textVAlign==="top"?t.y:p-d/2,m=Ja(u,h,g,o,n),f=g+s+a+i*ho,b=r.length?ye(u,f,r,i,"docdiagram-node-subtitle",n,h):"";return m+b}function mn(t){return[t?.caption?' class="docdiagram docdiagram-captioned"':' class="docdiagram"',t?.id?` id="${k(t.id)}"`:""].join("")}function gn(t,e){return t?.caption?`<figcaption class="docdiagram-caption">${e(t.caption)}</figcaption>`:""}function hn(t,e,n,o,r=!1){let i=r?"group":"img";if(t.description===void 0)return{attributes:`role="${i}" aria-label="${k(n)}"`,metadata:""};let s=`docdiagram-title-${e}`;if(!o?.caption)return{attributes:`role="${i}" aria-labelledby="${s}"`,metadata:`<title id="${s}">${k(t.description)}</title>`};let a=`docdiagram-description-${e}`;return{attributes:`role="${i}" aria-labelledby="${s}" aria-describedby="${a}"`,metadata:`<title id="${s}">${k(o.caption)}</title><desc id="${a}">${k(t.description)}</desc>`}}function po(t,e,n,o=!1){let r=e!=="none",i=e==="flowchart",s=n.expandedDiagramIndex===t;return['<div class="docdiagram-diagram-toolbar" role="toolbar" aria-label="Diagram controls">',`<button type="button" class="docdiagram-icon-button docdiagram-zoom-in" data-diagram-index="${t}" aria-label="Zoom in" title="Zoom in">+</button>`,`<button type="button" class="docdiagram-icon-button docdiagram-zoom-out" data-diagram-index="${t}" aria-label="Zoom out" title="Zoom out">\u2212</button>`,`<button type="button" class="docdiagram-icon-button docdiagram-fit" data-diagram-index="${t}" aria-label="Zoom to fit" title="Zoom to fit">\u22A1</button>`,`<button type="button" class="docdiagram-icon-button docdiagram-toggle-expand" data-diagram-index="${t}" aria-pressed="${s}" aria-label="${s?"Collapse diagram":"Expand diagram"}" title="${s?"Collapse diagram (Esc)":"Expand diagram"}">${s?"\u2921":"\u2922"}</button>`,'<div class="docdiagram-diagram-export">',`<button type="button" class="docdiagram-icon-button docdiagram-export-toggle" data-diagram-index="${t}" aria-label="Export diagram" aria-expanded="false" title="Export diagram">\u21E7</button>`,'<div class="docdiagram-diagram-export-menu" hidden>',`<button type="button" class="docdiagram-open-diagram" data-diagram-index="${t}">Open full diagram</button>`,`<button type="button" class="docdiagram-save-diagram" data-diagram-index="${t}">Save as Skryb diagram</button>`,`<button type="button" class="docdiagram-download-diagram" data-diagram-index="${t}">Save as SVG</button>`,`<button type="button" class="docdiagram-print-diagram" data-diagram-index="${t}">Print / Save as PDF</button>`,"</div>","</div>",r?n.editingDiagramIndex===t?`<button type="button" class="docdiagram-icon-button docdiagram-done-editing" aria-label="Done editing" title="Done editing">\u2713</button><button type="button" class="docdiagram-icon-button docdiagram-cancel-editing" aria-label="Cancel editing and discard changes" title="Cancel editing and discard changes">\xD7</button>${i?`<button type="button" class="docdiagram-icon-button docdiagram-create-node" data-diagram-index="${t}" aria-label="New node" title="New node">+</button>`:""}`:n.editingDiagramIndex===null?`${o?`<button type="button" class="docdiagram-icon-button docdiagram-relayout" data-diagram-index="${t}" aria-label="Relayout diagram" title="Relayout diagram">\u21BB</button>`:""}<button type="button" class="docdiagram-icon-button docdiagram-start-editing" data-diagram-index="${t}" aria-label="Edit diagram" title="Edit diagram">\u270E</button>`:"":"","</div>"].join("")}function Vr(t,e,n,o,r){let{selectedNode:i,selectedEdge:s,editingNode:a,editingEdge:c,connectionDrag:d,diagramZooms:l,diagramCameraOffsets:u}=n,h=n.editingDiagramIndex===e,p=new Y(t),g=p.entries,m=[],f=(T,_,le=!1)=>{let Q=Ye(T,_,le);return m.push(Q),dt(T,Q,n.documentColorScheme,n.documentTheme)},b=He(t,p),v=[],E=[],S=fe[n.documentColorScheme][n.documentTheme==="dark"?"dark":"light"],x=Object.entries(S).filter(([,T])=>T.gradient).map(([T,_])=>`<linearGradient id="docdiagram-${n.documentColorScheme}-${e}-${T}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${k(_.gradient||_.fill)}"/><stop offset="1" stop-color="${k(_.fill)}"/></linearGradient>`).join(""),y=t.edges.map((T,_)=>{let le=b[_];if(!le)return"";let{sourceAnchor:Q,targetAnchor:ie,path:W,label:U}=le,Ve=U?.center.x??W.midpoint.x,se=U?.center.y??W.midpoint.y-10,K=St(t,T,n.documentTheme,n.documentColorScheme),Ne=s?.diagramIndex===e&&s.edgeIndex===_,he=Ne&&c?.diagramIndex===e&&c.edgeIndex===_,ue=Number(K.strokeWidth)||2,me=ue+(Ne?2:0),Z=T.strokeType,Ke=220,pe=72,re=Ln(T,"start"),Ze=Ln(T,"end"),Ae=`docdiagram-marker-${e}-${_}-start`,it=`docdiagram-marker-${e}-${_}-end`;re!=="none"&&v.push(Rt(Ae,re,"start",K.stroke||"",me)),Ze!=="none"&&v.push(Rt(it,Ze,"end",K.stroke||"",me)),Ne&&h&&E.push(`<circle class="docdiagram-edge-endpoint" data-diagram-index="${e}" data-edge-index="${_}" data-endpoint="source" cx="${Q.x}" cy="${Q.y}" r="7"/>`,`<circle class="docdiagram-edge-endpoint" data-diagram-index="${e}" data-edge-index="${_}" data-endpoint="target" cx="${ie.x}" cy="${ie.y}" r="7"/>`,zo(e,_,T.waypoint??W.midpoint,!!T.waypoint));let yt=[re!=="none"?` marker-start="url(#${Ae})"`:"",Ze!=="none"?` marker-end="url(#${it})"`:""].join(""),Me=k(K.stroke||""),Je=Z==="double"?`<path class="docdiagram-edge" d="${W.path}" stroke="${Me}" stroke-width="${me+ue*2}"/><path d="${W.path}" fill="none" stroke="${k(S.background.fill)}" stroke-width="${ue}"/><path d="${W.path}"${yt} fill="none" stroke="none"/>`:`<path class="docdiagram-edge" d="${W.path}"${yt} stroke="${Me}" stroke-width="${me}"${Z==="dotted"?' stroke-linecap="round" stroke-dasharray="1 6"':""}${Z==="dashed"?' stroke-dasharray="8 6"':""}/>`;return[`<g class="docdiagram-edge-group${Ne?" docdiagram-edge-selected":""}" data-diagram-index="${e}" data-edge-index="${_}">`,`<path class="docdiagram-edge-hit" d="${W.hitPath}" fill="none" stroke="transparent" stroke-width="16"/>`,Je,he?`<foreignObject class="docdiagram-inline-editor-host" x="${Ve-Ke/2}" y="${se-pe/2}" width="${Ke}" height="${pe}"><textarea class="docdiagram-inline-editor docdiagram-inline-editor-edge" aria-label="Edit edge label. Press Enter for a new line. Press Control or Command plus Enter to save. Press Escape to cancel.">${k(T.label||"")}</textarea></foreignObject>`:U?ye(Ve,U.startY,U.lines,Ft,"docdiagram-edge-label",K.text||""):"",T.ref!==void 0?f(T.ref,U?.bounds??{x:W.midpoint.x,y:W.midpoint.y,width:0,height:0},!0):"","</g>"].join("")}).join(""),F=[],D=g.map(({node:T,position:_},le)=>{let Q=_.x,ie=_.y,W=Number(T.size?.width)||190,U=Number(T.size?.height)||80,Ve=st(t,T,n.documentTheme,n.documentColorScheme),se=T.palette||Gt(t,T.class)?.palette,K=se?S?.[se]:void 0,Ne=T.arrow?Yt({x:Q,y:ie,width:W,height:U},T.arrow):null,he=Ne&&K?.gradient?`docdiagram-${n.documentColorScheme}-${e}-${se}-callout-${le}`:"";he&&K&&F.push(`<linearGradient id="${he}" gradientUnits="userSpaceOnUse" x1="${Q}" y1="${ie}" x2="${Q}" y2="${ie+U}"><stop offset="0" stop-color="${k(K.gradient||K.fill)}"/><stop offset="1" stop-color="${k(K.fill)}"/></linearGradient>`);let ue=K?.gradient?{...Ve,fill:he?`url(#${he})`:`url(#docdiagram-${n.documentColorScheme}-${e}-${se})`}:Ve,me=i?.diagramIndex===e&&i.nodeId===T.id,Z=me&&a?.diagramIndex===e&&a.nodeId===T.id,Ke=(Number(ue.strokeWidth)||2)+(me?2:0),pe=Ce(T,Q,ie,W,U),re=Dt(pe.textBounds,T),Ze=T.shape==="text",Ae=h?void 0:T.href,it=T.label.trim()||T.subtitle?.trim()||`Go to ${Ae}`,yt=T.ref!==void 0?`${it}, reference ${je(T.ref)}`:it;return[Ae?`<a class="docdiagram-node-link" href="${k(Ae)}" aria-label="${k(yt)}">`:"",`<g class="docdiagram-node${me?" docdiagram-node-selected":""}" data-diagram-index="${e}" data-node-id="${k(T.id)}">`,Ae?`<rect class="docdiagram-node-link-hit" x="${Q}" y="${ie}" width="${W}" height="${U}" fill="transparent" pointer-events="all"/>`:"",Ut(pe,ue,Ke,T.strokeType,S.background.fill),Ne?Ho(Ne,pe.bodyMarkup,ue,Ke,`docdiagram-callout-mask-${e}-${le}`):"",Z?`<foreignObject class="docdiagram-inline-editor-host" x="${pe.textBounds.x}" y="${pe.textBounds.y}" width="${pe.textBounds.width}" height="${pe.textBounds.height}"><textarea class="docdiagram-inline-editor docdiagram-inline-editor-node" aria-label="Edit node label. Press Enter for a new line. Press Control or Command plus Enter to save. Press Escape to cancel.">${k(T.label)}</textarea></foreignObject>`:Ze?Gr(pe.textBounds,T,ue.text||""):ye(re.centerX,re.labelStartY,re.labelLines,re.labelLineHeight,"docdiagram-node-label",ue.text||"",re.textAnchor),!Z&&!Ze&&re.subtitleLines.length?ye(re.centerX,re.subtitleStartY,re.subtitleLines,re.subtitleLineHeight,"docdiagram-node-subtitle",ue.text||"",re.textAnchor):"",me&&h&&!Z?[["top-left",Q-7,ie-7],["top-right",Q+W-7,ie-7],["bottom-left",Q-7,ie+U-7],["bottom-right",Q+W-7,ie+U-7]].map(([Me,Je,Dn])=>`<rect class="docdiagram-resize-handle" data-resize-corner="${Me}" x="${Je}" y="${Dn}" width="14" height="14" rx="3"/>`).join(""):"",me&&h&&!Z?ce.map(Me=>{let Je=pe.anchors[Me];return`<circle class="docdiagram-connection-port" data-anchor="${Me}" cx="${Je.x}" cy="${Je.y}" r="7" aria-label="${Me} connection port"/>`}).join(""):"",me&&h&&!Z&&T.arrow?`<circle class="docdiagram-callout-handle" data-diagram-index="${e}" data-node-id="${k(T.id)}" cx="${T.arrow.x}" cy="${T.arrow.y}" r="7" aria-label="Callout pointer target"/>`:"",Ae?`<rect class="docdiagram-node-link-focus" x="${Q+2}" y="${ie+2}" width="${W-4}" height="${U-4}" rx="4" fill="none" stroke="${k(ue.text||"")}" stroke-width="2" stroke-dasharray="4 3" visibility="hidden" pointer-events="none"/><path class="docdiagram-node-link-indicator" d="M ${Q+W-20} ${ie+16} h 10 m -4 -4 l 4 4 l -4 4" fill="none" stroke="${k(ue.text||"")}" stroke-width="1.5" aria-hidden="true" pointer-events="none"/>`:"",T.ref!==void 0?f(T.ref,{x:Q,y:ie,width:W,height:U}):"","</g>",Ae?"</a>":""].join("")}).join(""),M=Number(t.canvas.width)||1e3,R=Number(t.canvas.height)||560,A=Math.min(0,...m.map(T=>T.x-2)),P=Math.min(0,...m.map(T=>T.y-2)),N=Math.max(M,...m.map(T=>T.x+T.width+2)),q=Math.max(R,...m.map(T=>T.y+T.height+2)),H=n.expandedDiagramIndex===e,O=n.diagramViewportHeights.get(e),oe=O&&!H?` style="box-sizing: border-box; height: ${O}px; min-height: 0"`:"",de=u.get(e)||{x:0,y:0},De=`width: ${l.get(e)||100}%; transform: translate(${de.x}px, ${de.y}px)`,Fe=hn(t,e,"Architecture diagram",r,m.length>0||!h&&g.some(({node:T})=>T.href!==void 0));return[`<figure${mn(r)} data-diagram-index="${e}" data-diagram-type="flowchart" data-editing="${h}" data-expanded="${H}"${oe}>`,o(e,"flowchart",n,t.layout!==void 0),`<svg viewBox="${A} ${P} ${N-A} ${q-P}" ${Fe.attributes} data-diagram-index="${e}" style="${De}">`,Fe.metadata,`<defs>${x}${F.join("")}${v.join("")}</defs>`,D,y,d?.diagramIndex===e?`<path class="docdiagram-connection-preview${d.invalid?" docdiagram-connection-invalid":""}" d="${Qe(d.start,d.current,d.sourceAnchor,d.targetAnchor||d.sourceAnchor,"straight").path}"/>`:"",E.join(""),"</svg>",gn(r,$e),"</figure>"].join("")}function Wr(t,e,n,o,r){let i=Lt(t,n.documentTheme),s=Number(t.canvas?.width)||1e3,a=Number(t.canvas?.height)||560,c=t.participants||[],d=t.messages||[],l=t.activations||[],u=t.notes||[],h=t.groups||[],p=d.some($=>$.ref!==void 0),g=90,m=90,f=28,b=Number(t.canvas?.participantSize?.width)||180,v=Number(t.canvas?.participantSize?.height)||42,E=Number(t.canvas?.participantSpacing)||220,S=16,x=74+Math.max(0,...c.filter($=>$.kind==="actor").map($=>ge($.label||"").length-1))*S,y=48,F=16,D=16,M=15,R=12,A=26,P=28,N=40,q=22,H=n.expandedDiagramIndex===e,O=n.diagramViewportHeights.get(e),oe=O&&!H?` style="box-sizing: border-box; height: ${O}px; min-height: 0"`:"",de=`docdiagram-sequence-arrow-${e}`,De=hn(t,e,"Sequence diagram",r,p),Fe=f+x+12,T=c[0],_=c[c.length-1],le=Number(T?.size?.width)||b,Q=Number(_?.size?.width)||b,ie=c.length>1?le/2+E*(c.length-1)+Q/2:b+g+m,W=Math.max(s,ie,g+m),U=new Map;c.forEach(($,C)=>{U.set($.id,c.length===1?W/2:le/2+E*C)});let Ve=Fe+40,se=[],K=[],Ne=[],he=[],ue=[],me=new Map;u.forEach(($,C)=>{let B=Number($.after);if(!Number.isFinite(B)||B<1){ue.push({note:$,sourceIndex:C});return}let G=me.get(B)||[];G.push({note:$,sourceIndex:C}),me.set(B,G)});let Z=Fe+24,Ke=($,C)=>{let B=ge($.label||""),G=Math.max(0,...B.map(Ht=>Ht.length)),ee=Math.max(160,Number($.size?.width)||0,G*7.2+32),L=Math.max(y,B.length*D+24,Number($.size?.height)||0),z=U.get($.at||"")||W/2,j=Math.min(W-ee/2-24,Math.max(ee/2+24,z)),te=Z;return Z=te+L+F,{...$,lines:B,x:j-ee/2,y:te,width:ee,height:L,sourceIndex:C}};ue.forEach($=>K.push(Ke($.note,$.sourceIndex))),d.forEach(($,C)=>{let B=C+1;h.filter(j=>Number(j.from)===B).forEach(j=>{let te={label:j.label,from:Number(j.from),to:Number(j.to),startY:Z,endY:Z,depth:he.length};Z=te.startY+N,he.push(te),Ne.push(te)});let G=ge($.label||""),ee=Z,L=Math.max(1,G.length)*M,z=ee+L+R;se.push({...$,index:C,y:z,lines:G,labelTop:ee}),Z=z+A+($.from===$.to?P:0),(me.get(B)||[]).forEach(j=>{K.push(Ke(j.note,j.sourceIndex))});for(let j=he.length-1;j>=0;j-=1)he[j].to>B||(he[j].endY=Z,Z+=q,he.splice(j,1))}),he.forEach($=>{$.endY=Z});let pe=Math.max(Fe+140,Z+8,K.length?K[K.length-1].y+K[K.length-1].height:0,se.length?se[se.length-1].y+44:Ve,...Ne.map($=>$.endY+12)),re=Math.max(a,pe+56),Ze=re-36,Ae=l.map(($,C)=>({participantId:$.participant,depth:l.slice(0,C).filter(B=>B.participant===$.participant&&B.from<=$.from&&B.to>=$.from).length,startY:(se[$.from-1]?.y||Ve)-10,endY:(se[$.to-1]?.y||Ve)+18})),it=c.map($=>{let C=U.get($.id)||0,B=ge($.label||""),G=Et(t,$,n.documentTheme,n.documentColorScheme),ee=Number($.size?.width)||b,L=Number($.size?.height)||v;if($.kind==="actor"){let z=f+10,j=z+18,te=j+18;return[`<g class="docdiagram-sequence-participant docdiagram-sequence-actor" data-diagram-index="${e}" data-participant-id="${k($.id)}">`,`<circle cx="${C}" cy="${z}" r="8" fill="none" stroke="${k(G.stroke||"")}" stroke-width="${Number(G.strokeWidth)||2}"/>`,`<path d="M ${C} ${z+8} V ${te} M ${C-14} ${j} H ${C+14} M ${C} ${te} L ${C-12} ${te+18} M ${C} ${te} L ${C+12} ${te+18}" fill="none" stroke="${k(G.stroke||"")}" stroke-width="${Number(G.strokeWidth)||2}" stroke-linecap="round" stroke-linejoin="round"/>`,ye(C,f+x-4-(B.length-1)*S,B,S,"docdiagram-node-label",G.text||""),"</g>"].join("")}return[`<g class="docdiagram-sequence-participant" data-diagram-index="${e}" data-participant-id="${k($.id)}">`,`<rect x="${C-ee/2}" y="${f}" width="${ee}" height="${L}" rx="12" fill="${k(G.fill||"")}" stroke="${k(G.stroke||"")}" stroke-width="${Number(G.strokeWidth)||2}"/>`,ye(C,f+L/2+6-(B.length-1)*S/2,B,S,"docdiagram-node-label",G.text||""),"</g>"].join("")}).join(""),yt=c.map($=>{let C=U.get($.id)||0;return`<path class="docdiagram-sequence-lifeline" d="M ${C} ${Fe} L ${C} ${Ze}" fill="none" stroke="${k(i.edge.stroke)}" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.35"/>`}).join(""),Me=Ne.map($=>{let C=42+$.depth*14,B=Math.min(260,Math.max(110,String($.label||"").length*8+28));return{group:$,inset:C,labelWidth:B}}),Je=Me.map(({group:$,inset:C})=>['<g class="docdiagram-sequence-group">',`<rect x="${C}" y="${$.startY}" width="${Math.max(60,W-C*2)}" height="${Math.max(40,$.endY-$.startY)}" rx="12" fill="none" stroke="${k(i.edge.stroke)}" stroke-width="1.5" stroke-dasharray="10 6" opacity="0.45"/>`,"</g>"].join("")).join(""),Dn=Me.map(({group:$,inset:C,labelWidth:B})=>['<g class="docdiagram-sequence-group-label">',`<rect x="${C+12}" y="${$.startY-12}" width="${B}" height="24" rx="6" fill="${k(i.node.fill)}" stroke="${k(i.edge.stroke)}" stroke-width="1.5"/>`,`<text x="${C+12+B/2}" y="${$.startY+5}" text-anchor="middle" class="docdiagram-edge-label" fill="${k(i.edge.text)}">${k($.label||"")}</text>`,"</g>"].join("")).join(""),li=K.map($=>{let C=$.y+20,B=Et(t,$,n.documentTheme,n.documentColorScheme);return[`<g class="docdiagram-sequence-note" data-diagram-index="${e}" data-note-index="${$.sourceIndex}">`,`<rect x="${$.x}" y="${$.y}" width="${$.width}" height="${$.height}" rx="10" fill="${k(B.fill||"")}" stroke="${k(B.stroke||"")}" stroke-width="${Number(B.strokeWidth)||2}"/>`,ye($.x+$.width/2,C,$.lines,D,"docdiagram-node-subtitle",B.text||""),"</g>"].join("")}).join(""),ui=Ae.map($=>{let C=U.get($.participantId)||0,B=$.depth*7,G=12,ee=Math.max(20,$.endY-$.startY),L=c.find(j=>j.id===$.participantId),z=L?Et(t,L,n.documentTheme,n.documentColorScheme):i.node;return`<rect class="docdiagram-sequence-activation" x="${C-G/2+B}" y="${$.startY}" width="${G}" height="${ee}" rx="4" fill="${k(z.fill||"")}" stroke="${k(z.stroke||"")}" stroke-width="${Number(z.strokeWidth)||2}"/>`}).join(""),mi=se.map($=>{let C=U.get($.from)||0,B=U.get($.to)||0,G=$.style==="dashed",ee=$.lines,L=$.labelTop+12,z=` marker-end="url(#${de})"`;if($.from===$.to){let te=P;return[`<g class="docdiagram-sequence-message" data-diagram-index="${e}" data-message-index="${$.index}">`,`<path d="M ${C} ${$.y} L ${C+48} ${$.y} L ${C+48} ${$.y+te} L ${C} ${$.y+te}" fill="none" stroke="${k(i.edge.stroke)}" stroke-width="2"${z}${G?' stroke-dasharray="8 5"':""}/>`,ye(C+48/2,L,ee,M,"docdiagram-edge-label",i.edge.text),"</g>"].join("")}return[`<g class="docdiagram-sequence-message" data-diagram-index="${e}" data-message-index="${$.index}">`,`<path d="M ${C} ${$.y} L ${B} ${$.y}" fill="none" stroke="${k(i.edge.stroke)}" stroke-width="2"${z}${G?' stroke-dasharray="8 5"':""}/>`,ye((C+B)/2,L,ee,M,"docdiagram-edge-label",i.edge.text),"</g>"].join("")}).join(""),vo=W,Fn=re,Nn=0,ko="";if(p){let $=Math.max(...d.map(L=>L.ref===void 0?0:_t(L.ref).width)),C=0,B=W,G=(L,z)=>{C=Math.min(C,L),B=Math.max(B,L+z)},ee=(L,z,j,te=!1)=>{let Ht=Math.max(0,...z.map(gi=>ze(gi,j,te)));G(L-Ht/2,Ht)};c.forEach(L=>{let z=U.get(L.id)||0,j=Number(L.size?.width)||b;G(z-j/2,j),ee(z,ge(L.label||""),16,!0),Fn=Math.max(Fn,f+(Number(L.size?.height)||v)+16)}),K.forEach(L=>{G(L.x,L.width),ee(L.x+L.width/2,L.lines,13)}),Me.forEach(({group:L,inset:z,labelWidth:j})=>{G(z,Math.max(60,W-z*2)),G(z+12,j),ee(z+12+j/2,[L.label||""],15)}),Ae.forEach(L=>{G((U.get(L.participantId)||0)-6+L.depth*7,12)}),se.forEach(L=>{let z=U.get(L.from)||0,j=U.get(L.to)||0,te=L.from===L.to;G(Math.min(z,j),te?48:Math.abs(j-z)),ee(te?z+24:(z+j)/2,L.lines,15)}),Nn=12+$+20-C,vo=B+Nn+12,ko=se.map(L=>{if(L.ref===void 0)return"";let z=_t(L.ref);return dt(L.ref,{x:12,y:L.y-z.height/2,...z},n.documentColorScheme,n.documentTheme)}).join("")}return[`<figure${mn(r)} data-diagram-index="${e}" data-diagram-type="sequence" data-editing="${n.editingDiagramIndex===e}" data-expanded="${H}"${oe}>`,o(e,"sequence",n),`<svg viewBox="0 0 ${vo} ${Fn}" ${De.attributes} data-diagram-index="${e}" style="width: ${n.diagramZooms.get(e)||100}%">`,De.metadata,`<defs>${Rt(de,"arrow","end",i.edge.stroke,2)}</defs>`,p?`<g class="docdiagram-sequence-content" transform="translate(${Nn} 0)">`:"",Je,yt,it,ui,li,mi,Dn,p?"</g>":"",ko,"</svg>",gn(r,$e),"</figure>"].join("")}function Ur(t,e,n){try{let o=we(t,n.colourScheme);return n.onDiagram(e,o),o.type==="sequence"?Wr(o,e,n.state,po,n.figure):Vr(o,e,n.state,po,n.figure)}catch(o){let r=o instanceof Error?o.message:String(o);return`<section class="docdiagram-error"><strong>Diagram could not be rendered.</strong><br>${k(r)}</section>`}}function Yr(){if(document.querySelector("style[data-docdiagram-runtime-styles]"))return;let t=document.createElement("style");t.dataset.docdiagramRuntimeStyles="true",t.textContent=`
    html,
    body {
      margin: 0;
      min-height: 100%;
    }
    html[data-docdiagram-theme="light"],
    body[data-docdiagram-theme="light"] {
      background: var(--docdiagram-page-background, #ffffff);
      color: var(--docdiagram-page-text, #17202a);
    }
    html[data-docdiagram-theme="dark"],
    body[data-docdiagram-theme="dark"] {
      background: var(--docdiagram-page-background, #17202a);
      color: var(--docdiagram-page-text, #f3f8fc);
    }
    html[data-docdiagram-expanded="true"],
    html[data-docdiagram-expanded="true"] body {
      overflow: hidden;
    }
    #rendered-document {
      background: var(--docdiagram-background);
      box-sizing: border-box;
      color: var(--docdiagram-text);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      line-height: 1.55;
      margin: 0 auto;
      max-width: 1100px;
      padding: 2rem;
    }
    #rendered-document[data-format="full-width"] {
      margin: 0;
      max-width: none;
    }
    #rendered-document[data-source-editor-open="true"] {
      padding-bottom: calc(2rem + var(--docdiagram-source-tray-height, 0px));
    }
    #rendered-document pre {
      background: var(--docdiagram-code-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 8px;
      overflow: auto;
      padding: 1rem;
    }
    /* Highlighting is colour on top of the normal code text, so a block stays perfectly readable
       in a theme that does not define these, and in print, where colour may be dropped. */
    #rendered-document .docdiagram-token-comment { color: var(--docdiagram-token-comment); font-style: italic; }
    #rendered-document .docdiagram-token-string { color: var(--docdiagram-token-string); }
    #rendered-document .docdiagram-token-number { color: var(--docdiagram-token-number); }
    #rendered-document .docdiagram-token-keyword { color: var(--docdiagram-token-keyword); font-weight: 600; }
    #rendered-document .docdiagram-token-literal { color: var(--docdiagram-token-literal); }
    #rendered-document .docdiagram-token-type { color: var(--docdiagram-token-type); }
    #rendered-document .docdiagram-token-tag { color: var(--docdiagram-token-tag); }
    #rendered-document .docdiagram-token-attribute { color: var(--docdiagram-token-attribute); }
    #rendered-document .docdiagram-token-meta { color: var(--docdiagram-token-meta); }
    #rendered-document .docdiagram-token-inserted { color: var(--docdiagram-token-inserted); }
    #rendered-document .docdiagram-token-deleted { color: var(--docdiagram-token-deleted); }
    #rendered-document code,
    #rendered-document kbd,
    #rendered-document pre,
    #rendered-document samp {
      font-family: var(--docdiagram-code-font, ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace);
      font-size: 1em;
    }
    #rendered-document :not(pre) > code {
      background: var(--docdiagram-code-background);
      border-radius: 4px;
      font-size: .95em;
      padding: .12em .3em;
    }
    #rendered-document blockquote {
      border-left: 4px solid var(--docdiagram-border);
      color: var(--docdiagram-muted);
      margin-left: 0;
      padding-left: 1rem;
    }
    #rendered-document hr {
      border: 0;
      border-top: 1px solid var(--docdiagram-border);
      margin: 2rem 0;
    }
    #rendered-document a {
      color: inherit;
      text-decoration-thickness: .1em;
      text-underline-offset: .15em;
    }
    .docdiagram-annotation-inline {
      align-items: center;
      background: var(--docdiagram-annotation-fill);
      border-radius: 999px;
      box-sizing: border-box;
      color: var(--docdiagram-annotation-text);
      display: inline-flex;
      font-family: Arial, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      height: 24px;
      justify-content: center;
      line-height: 1;
      min-width: 32px;
      padding: 0 8px;
      vertical-align: middle;
      white-space: nowrap;
    }
    .docdiagram-annotation-inline.docdiagram-annotation-inline-circle {
      min-width: 24px;
      padding: 0;
      width: 24px;
    }
    #rendered-document img {
      height: auto;
      max-width: 100%;
    }
    #rendered-document table {
      border-collapse: collapse;
      display: block;
      max-width: 100%;
      overflow-x: auto;
    }
    #rendered-document th,
    #rendered-document td {
      border: 1px solid var(--docdiagram-border);
      padding: .55rem .75rem;
    }
    #rendered-document th {
      background: var(--docdiagram-code-background);
      font-weight: 600;
    }
    #rendered-document .docdiagram-task-list-item {
      list-style: none;
    }
    #rendered-document .docdiagram-task-list-item input {
      accent-color: currentColor;
      margin: 0 .45rem 0 0;
    }
    #rendered-document .docdiagram-component {
      background: linear-gradient(
        135deg,
        var(--docdiagram-component-gradient, var(--docdiagram-component-fill, var(--docdiagram-code-background))),
        var(--docdiagram-component-fill, var(--docdiagram-code-background))
      );
      border: 1px solid var(--docdiagram-component-stroke, var(--docdiagram-border));
      border-radius: 8px;
      color: var(--docdiagram-component-text, var(--docdiagram-text));
      margin: 1rem 0;
      padding: 1rem;
    }
    #rendered-document .docdiagram-section:not(.docdiagram-component-styled) {
      background: transparent;
    }
    #rendered-document .docdiagram-component-title {
      font-size: 1.1em;
      font-weight: 700;
      margin-bottom: .5rem;
    }
    #rendered-document .docdiagram-component > :last-child {
      margin-bottom: 0;
    }
    #rendered-document .docdiagram-component a {
      color: inherit;
    }
    #rendered-document .docdiagram-component :not(pre) > code {
      background: color-mix(in srgb, currentColor 12%, transparent);
    }
    #rendered-document .docdiagram-component pre,
    #rendered-document .docdiagram-component th {
      background: transparent;
      border-color: currentColor;
      color: inherit;
    }
    #rendered-document .docdiagram-component blockquote {
      border-color: currentColor;
      color: inherit;
    }
    #rendered-document .docdiagram-callout {
      border-left-width: 8px;
    }
    #rendered-document .docdiagram-callout-kind {
      font-size: .78em;
      font-weight: 700;
      letter-spacing: .06em;
      margin-bottom: .35rem;
      text-transform: uppercase;
    }
    #rendered-document .docdiagram-grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: var(--docdiagram-grid-columns);
      margin: 1rem 0;
    }
    #rendered-document .docdiagram-grid-item > .docdiagram-component,
    #rendered-document .docdiagram-grid-item > .docdiagram-stack {
      margin: 0;
    }
    #rendered-document .docdiagram-grid-item > .docdiagram-component {
      box-sizing: border-box;
      height: 100%;
    }
    #rendered-document .docdiagram-stack {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    #rendered-document .docdiagram-stack > * {
      margin: 0;
    }
    #rendered-document .docdiagram-literal-source {
      margin: 1rem 0;
    }
    @media (max-width: 700px) {
      #rendered-document .docdiagram-grid {
        grid-template-columns: 1fr;
      }
    }
    #rendered-document[data-theme="light"],
    .docdiagram-toolbar[data-theme="light"],
    .docdiagram-source-tray[data-theme="light"] {
      --docdiagram-background: #ffffff;
      --docdiagram-border: #dce3ea;
      --docdiagram-control-background: #ffffff;
      --docdiagram-control-hover: #eef4f8;
      --docdiagram-code-background: #f5f8fa;
      --docdiagram-text: #17202a;
      --docdiagram-muted: #52616b;
      --docdiagram-token-comment: #5c6d7a;
      --docdiagram-token-string: #0a7a52;
      --docdiagram-token-number: #9a4d00;
      --docdiagram-token-keyword: #9b2c8f;
      --docdiagram-token-literal: #1b56c4;
      --docdiagram-token-type: #0f6b93;
      --docdiagram-token-tag: #9b2c8f;
      --docdiagram-token-attribute: #1b56c4;
      --docdiagram-token-meta: #9a4d00;
      --docdiagram-token-inserted: #0a7a52;
      --docdiagram-token-deleted: #b3261e;
    }
    #rendered-document[data-theme="dark"],
    .docdiagram-toolbar[data-theme="dark"],
    .docdiagram-source-tray[data-theme="dark"] {
      --docdiagram-background: #17202a;
      --docdiagram-border: #3b5263;
      --docdiagram-control-background: #263947;
      --docdiagram-control-hover: #344c5d;
      --docdiagram-code-background: #101a22;
      --docdiagram-text: #f3f8fc;
      --docdiagram-muted: #c5d5e5;
      --docdiagram-token-comment: #90a4b4;
      --docdiagram-token-string: #7fd7a8;
      --docdiagram-token-number: #f0b177;
      --docdiagram-token-keyword: #e79ae0;
      --docdiagram-token-literal: #8fbcf7;
      --docdiagram-token-type: #7fd0ee;
      --docdiagram-token-tag: #e79ae0;
      --docdiagram-token-attribute: #8fbcf7;
      --docdiagram-token-meta: #f0b177;
      --docdiagram-token-inserted: #7fd7a8;
      --docdiagram-token-deleted: #f19a94;
    }
    .docdiagram-toolbar {
      align-items: center;
      background: var(--docdiagram-background);
      color: var(--docdiagram-text);
      display: flex;
      gap: .35rem;
      justify-content: flex-end;
      margin: 0;
      max-width: 1100px;
      padding: .5rem 2rem;
      position: fixed;
      right: 0;
      top: 0;
      z-index: 40;
    }
    .docdiagram-toolbar[data-format="full-width"] {
      margin-left: 0;
      margin-right: 0;
      max-width: none;
    }
    .docdiagram-toolbar button,
    .docdiagram-toolbar input,
    .docdiagram-toolbar select {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      color: var(--docdiagram-text);
      font: inherit;
      padding: .45rem .65rem;
    }
    .docdiagram-toolbar button {
      cursor: pointer;
    }
    .docdiagram-toolbar button:hover {
      background: var(--docdiagram-control-hover);
    }
    .docdiagram-toolbar button:disabled {
      cursor: not-allowed;
      opacity: .6;
    }
    .docdiagram-menu {
      background: var(--docdiagram-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 8px;
      box-shadow: 0 4px 12px rgb(21 41 62 / 18%);
      display: flex;
      flex-direction: column;
      gap: .6rem;
      padding: .75rem;
      position: absolute;
      right: 2rem;
      top: calc(100% + .25rem);
      z-index: 20;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
    }
    .docdiagram-menu[hidden] {
      display: none;
    }
    .docdiagram-lint-dialog {
      background: var(--docdiagram-page-background, #fff);
      border: 1px solid currentColor;
      border-radius: 8px;
      color: var(--docdiagram-page-text, #111);
      max-height: 70vh;
      max-width: min(90vw, 70ch);
      padding: 16px 20px;
    }
    .docdiagram-lint-dialog::backdrop {
      background: rgb(0 0 0 / 40%);
    }
    .docdiagram-lint-dialog h2 {
      font-size: 1rem;
      margin: 0 0 12px;
    }
    .docdiagram-lint-messages {
      display: grid;
      gap: 8px;
      margin: 0 0 12px;
      max-height: 50vh;
      overflow: auto;
    }
    .docdiagram-lint-messages pre,
    .docdiagram-lint-messages button {
      background: transparent;
      color: inherit;
      font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
      font-size: 0.85rem;
      margin: 0;
      text-align: left;
      white-space: pre-wrap;
    }
    .docdiagram-lint-messages button {
      border: 1px solid var(--docdiagram-border, currentColor);
      border-radius: 4px;
      cursor: pointer;
      padding: 8px;
    }
    .docdiagram-lint-messages button:hover,
    .docdiagram-lint-messages button:focus-visible {
      background: var(--docdiagram-panel-background, rgb(127 127 127 / 10%));
    }
    .docdiagram-source-tray {
      background: var(--docdiagram-background);
      border: 1px solid var(--docdiagram-border);
      border-bottom: 0;
      box-shadow: 0 -4px 16px rgb(21 41 62 / 20%);
      box-sizing: border-box;
      color: var(--docdiagram-text);
      display: flex;
      flex-direction: column;
      height: min(42vh, 32rem);
      min-height: 12rem;
      padding: .75rem 1rem 1rem;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 40;
      font-family: Arial, Helvetica, sans-serif;
    }
    .docdiagram-source-resize {
      cursor: ns-resize;
      height: .75rem;
      left: 0;
      position: absolute;
      right: 0;
      top: -.25rem;
      touch-action: none;
    }
    .docdiagram-source-resize::before {
      background: var(--docdiagram-border);
      border-radius: 999px;
      content: "";
      display: block;
      height: .25rem;
      margin: .25rem auto 0;
      transition: background .15s, width .15s;
      width: 3rem;
    }
    .docdiagram-source-resize:hover::before,
    .docdiagram-source-resize:focus-visible::before,
    .docdiagram-source-tray[data-resizing="true"] .docdiagram-source-resize::before {
      background: var(--docdiagram-text);
      width: 5rem;
    }
    .docdiagram-source-resize:focus-visible {
      outline: 2px solid var(--docdiagram-text);
      outline-offset: 2px;
    }
    .docdiagram-source-tray[data-resizing="true"] {
      user-select: none;
    }
    .docdiagram-source-header {
      align-items: center;
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      margin-bottom: .5rem;
    }
    .docdiagram-source-shortcut {
      color: var(--docdiagram-muted);
      font-size: .8rem;
      margin-left: .75rem;
    }
    .docdiagram-source-close {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      color: var(--docdiagram-text);
      cursor: pointer;
      font: inherit;
      padding: .35rem .55rem;
    }
    .docdiagram-source-actions {
      align-items: center;
      display: flex;
      gap: .5rem;
      position: relative;
    }
    .docdiagram-source-menu-toggle {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      color: var(--docdiagram-text);
      cursor: pointer;
      font: inherit;
      padding: .35rem .55rem;
    }
    .docdiagram-source-menu {
      background: var(--docdiagram-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 8px;
      box-shadow: 0 4px 12px rgb(21 41 62 / 18%);
      display: flex;
      flex-direction: column;
      gap: .3rem;
      padding: .5rem;
      position: absolute;
      right: 2.5rem;
      bottom: calc(100% + .35rem);
      width: max-content;
      z-index: 50;
    }
    .docdiagram-source-menu[hidden] {
      display: none;
    }
    .docdiagram-source-menu button {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 5px;
      color: var(--docdiagram-text);
      cursor: pointer;
      font: inherit;
      padding: .35rem .55rem;
      text-align: left;
    }
    .docdiagram-source-menu-heading {
      color: var(--docdiagram-muted);
      font-size: .8rem;
      font-weight: 700;
      padding: .1rem .2rem;
    }
    .docdiagram-source-label {
      display: flex;
      flex: 1;
      flex-direction: column;
      font-size: .85rem;
      gap: .35rem;
      min-height: 0;
    }
    .docdiagram-source-editor {
      background: var(--docdiagram-code-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      box-sizing: border-box;
      color: var(--docdiagram-text);
      flex: 1;
      font: .85rem/1.45 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      min-height: 0;
      padding: .65rem;
      resize: none;
      width: 100%;
    }
    .docdiagram-source-status,
    .docdiagram-source-error {
      font-size: .8rem;
      margin: .45rem 0 0;
    }
    .docdiagram-source-status {
      color: var(--docdiagram-muted);
    }
    .docdiagram-source-error {
      color: #c2410c;
    }
    .docdiagram-theme-control {
      display: flex;
      flex-direction: column;
      gap: .2rem;
    }
    .docdiagram-palette-group {
      border: 0;
      display: grid;
      gap: .4rem;
      grid-template-columns: repeat(3, minmax(4.8rem, 1fr));
      margin: 0;
      padding: 0;
    }
    .docdiagram-palette-group + .docdiagram-palette-group {
      margin-top: .55rem;
    }
    .docdiagram-palette-swatch {
      cursor: pointer;
      display: block;
    }
    .docdiagram-palette-swatch input {
      inline-size: 1px;
      margin: -1px;
      opacity: 0;
      position: absolute;
    }
    .docdiagram-palette-swatch span {
      background: var(--docdiagram-swatch-fill);
      border: 2px solid var(--docdiagram-swatch-stroke);
      border-radius: 5px;
      color: var(--docdiagram-swatch-text);
      display: block;
      font-size: .7rem;
      font-weight: 700;
      line-height: 1.05;
      min-height: .9rem;
      padding: .18rem .3rem;
      text-align: center;
    }
    .docdiagram-palette-swatch input:checked + span {
      box-shadow: 0 0 0 2px var(--docdiagram-background), 0 0 0 4px var(--docdiagram-accent);
    }
    .docdiagram-palette-swatch input:focus-visible + span {
      outline: 2px solid var(--docdiagram-accent);
      outline-offset: 2px;
    }
    .docdiagram-theme-control {
      align-items: center;
      color: var(--docdiagram-muted);
      display: flex;
      font-size: .9rem;
      gap: .75rem;
      justify-content: space-between;
    }
    .docdiagram-inspector {
      background: var(--docdiagram-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 8px;
      box-sizing: border-box;
      box-shadow: 0 4px 12px rgb(21 41 62 / 18%);
      display: flex;
      flex-direction: column;
      gap: .6rem;
      max-height: calc(100vh - 5.5rem);
      overflow-x: hidden;
      overflow-y: auto;
      padding: 1rem;
      position: fixed;
      right: 1rem;
      top: 1rem;
      width: min(21rem, calc(100vw - 2rem));
      z-index: 30;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
    }
    .docdiagram-field {
      align-items: center;
      color: var(--docdiagram-muted);
      display: flex;
      flex-direction: row;
      font-size: .9rem;
      gap: .75rem;
      justify-content: space-between;
      min-width: 0;
      width: 100%;
    }
    .docdiagram-field-wide {
      align-items: stretch;
      flex-direction: column;
      gap: .35rem;
      width: 100%;
    }
    .docdiagram-field input,
    .docdiagram-field select,
    .docdiagram-field textarea {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      color: var(--docdiagram-text);
      font-size: .85rem;
      padding: .3rem .4rem;
    }
    .docdiagram-field select,
    .docdiagram-field input:not([type="color"]) {
      min-width: 9rem;
    }
    .docdiagram-field input[type="color"] {
      height: 1.9rem;
      padding: 2px;
      width: 2.6rem;
    }
    .docdiagram-field input[type="number"] {
      width: 4.6rem;
    }
    .docdiagram-inspector-row {
      align-items: center;
      color: var(--docdiagram-muted);
      display: flex;
      font-size: .9rem;
      gap: .4rem;
      min-width: 0;
    }
    .docdiagram-inspector-row > span:first-child {
      min-width: 2.8rem;
    }
    .docdiagram-inspector-row .docdiagram-field {
      gap: .35rem;
    }
    .docdiagram-inspector-row .docdiagram-field-compact {
      max-width: 4.6rem;
    }
    .docdiagram-inspector-row select,
    .docdiagram-inspector-row input {
      min-width: 0;
      width: 4.6rem;
    }
    .docdiagram-inspector-row select {
      width: auto;
    }
    .docdiagram-inspector-colour-row {
      display: grid;
      grid-template-columns: 2.8rem 2.6rem;
      width: 100%;
    }
    .docdiagram-inspector-stroke-row {
      display: grid;
      grid-template-columns: 2.8rem 2.6rem 5rem 0 3.2rem;
      width: 100%;
    }
    .docdiagram-inspector-colour-row input[type="color"],
    .docdiagram-inspector-stroke-row input[type="color"] {
      height: 1.9rem;
      padding: 2px;
      width: 2.6rem;
    }
    .docdiagram-inspector-stroke-row .docdiagram-inspector-stroke-width {
      box-sizing: border-box;
      min-width: 0;
      width: 3.2rem;
    }
    .docdiagram-inspector-shape-row {
      align-items: center;
      color: var(--docdiagram-muted);
      display: grid;
      font-size: .9rem;
      gap: .4rem;
      grid-template-columns: 2.8rem minmax(0, 1fr);
    }
    .docdiagram-inspector-shape-row select {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      box-sizing: border-box;
      color: var(--docdiagram-text);
      font-size: .85rem;
      min-width: 0;
      padding: .3rem .4rem;
      width: 100%;
    }
    .docdiagram-inspector-paired-controls {
      align-items: center;
      color: var(--docdiagram-muted);
      display: grid;
      font-size: .9rem;
      gap: .4rem;
      grid-template-columns: 2.8rem repeat(2, minmax(0, 1fr));
    }
    .docdiagram-inspector-paired-controls select,
    .docdiagram-inspector-paired-controls input,
    .docdiagram-inspector-paired-controls button {
      box-sizing: border-box;
      height: 2rem;
      min-width: 0;
      width: 100%;
    }
    .docdiagram-inspector-paired-controls button {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      color: var(--docdiagram-text);
      cursor: pointer;
      font: inherit;
      padding: .35rem .55rem;
    }
    .docdiagram-inspector-paired-controls .docdiagram-inspector-callout {
      grid-column: span 2;
    }
    .docdiagram-inspector-paired-controls .docdiagram-inspector-delete {
      color: #b42318;
    }
    .docdiagram-inspector-actions {
      display: flex;
      gap: .5rem;
      justify-content: flex-end;
      margin-top: .2rem;
    }
    .docdiagram-inspector-actions button {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      color: var(--docdiagram-text);
      cursor: pointer;
      font: inherit;
      padding: .35rem .55rem;
    }
    .docdiagram-inspector-actions .docdiagram-inspector-delete {
      color: #b42318;
    }
    .docdiagram-visually-hidden {
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
    }
    .docdiagram-inspector-textarea {
      box-sizing: border-box;
      font-family: inherit;
      min-height: 2.4rem;
      resize: vertical;
      width: 100%;
    }
    .docdiagram {
      background: var(--docdiagram-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 12px;
      box-shadow: 0 2px 8px rgb(21 41 62 / 8%);
      margin: 1.5rem 0;
      height: min(70vh, 42rem);
      min-height: 16rem;
      /* The camera offset is the only thing that moves the canvas, so the frame
         itself never scrolls. Native scrolling cannot reach past the canvas
         origin, which put anywhere the camera had moved left of it out of
         reach. */
      overflow: hidden;
      padding: 1rem;
      position: relative;
      resize: vertical;
    }
    .docdiagram-captioned {
      padding-bottom: 2.75rem;
    }
    .docdiagram-scroll-active {
      outline: 2px solid var(--docdiagram-accent);
      outline-offset: -2px;
    }
    .docdiagram-caption {
      bottom: .9rem;
      color: var(--docdiagram-muted);
      font-size: .9rem;
      left: 1rem;
      position: absolute;
      right: 1rem;
      text-align: center;
    }
    /* An expanded frame is a working view rather than a document view, so the caption steps aside
       along with the space reserved for it. */
    .docdiagram[data-expanded="true"] .docdiagram-caption {
      display: none;
    }
    .docdiagram-captioned[data-expanded="true"] {
      padding-bottom: 1rem;
    }
    .docdiagram-contents ul {
      margin: .25rem 0;
      padding-left: 1.25rem;
    }
    .docdiagram-contents > ul {
      padding-left: 0;
    }
    .docdiagram-contents li {
      list-style: none;
    }
    .docdiagram-contents-figure > a {
      font-style: italic;
    }
    .docdiagram-error-inline {
      color: #8b1c1c;
    }
    .docdiagram[data-expanded="true"] {      border-radius: 0;
      border-width: 0;
      box-shadow: none;
      height: auto;
      margin: 0;
      max-height: none;
      min-height: 0;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: var(--docdiagram-source-tray-height, 0px);
      resize: none;
      z-index: 25;
    }
    .docdiagram-panning svg {
      cursor: grabbing;
    }
    .docdiagram-diagram-toolbar {
      display: flex;
      gap: .35rem;
      justify-content: flex-end;
      margin-bottom: .5rem;
      box-sizing: border-box;
      left: 0;
      position: sticky;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 10;
    }
    .docdiagram-diagram-export {
      position: relative;
    }
    /* Docked into the document toolbar while a frame fills the window, where it
       is one item in that row rather than a bar spanning its own frame. */
    .docdiagram-toolbar .docdiagram-diagram-toolbar {
      margin-bottom: 0;
      position: static;
      width: auto;
    }
    .docdiagram-diagram-export-menu {
      background: var(--docdiagram-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      box-shadow: 0 4px 12px rgb(21 41 62 / 18%);
      display: flex;
      flex-direction: column;
      gap: .35rem;
      padding: .35rem;
      position: absolute;
      right: 0;
      top: calc(100% + .25rem);
      width: max-content;
      z-index: 11;
    }
    .docdiagram-diagram-export-menu[hidden] {
      display: none;
    }
    .docdiagram-diagram-export-menu button {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 5px;
      color: var(--docdiagram-text);
      cursor: pointer;
      font: inherit;
      padding: .35rem .55rem;
      text-align: left;
    }
    .docdiagram-diagram-export-menu button:hover {
      background: var(--docdiagram-control-hover);
    }
    .docdiagram-icon-button {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      color: var(--docdiagram-text);
      cursor: pointer;
      font: inherit;
      height: 2rem;
      padding: 0;
      width: 2rem;
    }
    .docdiagram-icon-button:hover {
      background: var(--docdiagram-control-hover);
    }
    .docdiagram svg {
      display: block;
    }
    .docdiagram-edge {
      fill: none;
    }
    .docdiagram-edge-hit {
      fill: none;
    }
    .docdiagram-edge-group {
      cursor: default;
    }
    .docdiagram[data-editing="true"] .docdiagram-edge-group {
      cursor: pointer;
    }
    .docdiagram[data-editing="true"] .docdiagram-edge-group:has(.docdiagram-inline-editor) {
      cursor: text;
    }
    .docdiagram-edge-selected .docdiagram-edge {
      filter: drop-shadow(0 0 4px rgb(39 117 197 / 65%));
    }
    .docdiagram-edge-label {
      filter: drop-shadow(0 0 4px var(--docdiagram-background));
      font-size: 15px;
    }
    .docdiagram-node-selected .docdiagram-node-body {
      filter: drop-shadow(0 0 4px rgb(39 117 197 / 65%));
    }
    .docdiagram-resize-handle {
      fill: #ffffff;
      stroke: #3574c7;
      stroke-width: 2;
    }
    .docdiagram-resize-handle[data-resize-corner="top-left"],
    .docdiagram-resize-handle[data-resize-corner="bottom-right"] {
      cursor: nwse-resize;
    }
    .docdiagram-resize-handle[data-resize-corner="top-right"],
    .docdiagram-resize-handle[data-resize-corner="bottom-left"] {
      cursor: nesw-resize;
    }
    .docdiagram-connection-port,
    .docdiagram-edge-endpoint,
    .docdiagram-edge-waypoint,
    .docdiagram-callout-handle {
      cursor: crosshair;
      fill: #ffffff;
      stroke: #3574c7;
      stroke-width: 2;
    }
    .docdiagram-connection-target-port {
      fill: #eaf2ff;
    }
    .docdiagram-edge-waypoint,
    .docdiagram-callout-handle {
      cursor: move;
      fill: #eaf2ff;
    }
    .docdiagram-connection-preview {
      fill: none;
      pointer-events: none;
      stroke: #3574c7;
      stroke-dasharray: 6 4;
      stroke-width: 2;
    }
    .docdiagram-connection-preview.docdiagram-connection-invalid {
      stroke: #d53f3f;
    }
    .docdiagram-node {
      cursor: default;
    }
    .docdiagram-node-link .docdiagram-node {
      cursor: pointer;
    }
    .docdiagram-node-link:focus-visible .docdiagram-node-link-focus {
      visibility: visible;
    }
    #rendered-document [id] {
      scroll-margin-top: 5rem;
    }
    .docdiagram[data-editing="true"] .docdiagram-node {
      cursor: grab;
    }
    #rendered-document .docdiagram svg {
      cursor: grab;
    }
    .docdiagram[data-editing="true"] .docdiagram-node:has(.docdiagram-inline-editor) {
      cursor: text;
    }
    .docdiagram-node-label {
      font-size: 16px;
      font-weight: 650;
    }
    .docdiagram-node-subtitle {
      font-size: 13px;
    }
    .docdiagram-inline-editor {
      box-sizing: border-box;
      border: 1px solid #3574c7;
      border-radius: 4px;
      font: 650 16px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      padding: 4px 6px;
      resize: none;
      text-align: center;
      width: 100%;
    }
    .docdiagram-inline-editor-node {
      height: 100%;
    }
    .docdiagram-inline-editor-edge {
      font-size: 14px;
      font-weight: 500;
      height: 100%;
    }
    .docdiagram-error {
      background: #fff0f0;
      border: 1px solid #d53f3f;
      border-radius: 8px;
      color: #8b1c1c;
      margin: 1rem 0;
      padding: 1rem;
    }
    /* Printing a whole document. The rules stand on their own rather than depending on the
       document menu, so Ctrl/Cmd+P produces the same result as the menu action. */
    @media print {
      @page {
        margin: 18mm;
      }
      /* Editing chrome is not part of the document. */
      .docdiagram-toolbar,
      .docdiagram-source-tray,
      .docdiagram-diagram-toolbar,
      .docdiagram-inspector,
      .docdiagram-connection-port,
      .docdiagram-callout-handle,
      .docdiagram-edge-waypoint-handle,
      .docdiagram-edge-endpoint {
        display: none !important;
      }
      html,
      body {
        background: #ffffff !important;
      }
      #rendered-document {
        background: #ffffff !important;
        margin: 0 !important;
        max-width: none !important;
        padding: 0 !important;
        width: auto !important;
      }
      /* Palettes and highlighting carry meaning, so they are asked for rather than left to the
         browser's default of dropping backgrounds. */
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      /* On screen a diagram frame is a fixed-height viewport that scrolls and can be zoomed or
         panned. On paper there is nothing to scroll, so the frame becomes the diagram's own
         height and the camera is reset - otherwise a pan would print as a cropped diagram. */
      .docdiagram {
        break-inside: avoid;
        outline: none !important;
        height: auto !important;
        max-height: none !important;
        min-height: 0 !important;
        overflow: visible !important;
        page-break-inside: avoid;
        position: static !important;
        resize: none !important;
      }
      .docdiagram svg {
        height: auto !important;
        max-width: 100% !important;
        transform: none !important;
        width: 100% !important;
      }
      /* A panel, callout or table split across a page boundary reads as two broken things. */
      .docdiagram-component,
      .docdiagram-grid-item,
      blockquote,
      pre,
      table,
      figure {
        break-inside: avoid;
        page-break-inside: avoid;
      }
      /* A heading stranded at the foot of a page is the most obvious print defect of all. */
      h1, h2, h3, h4, h5, h6 {
        break-after: avoid;
        page-break-after: avoid;
      }
      p, li, blockquote {
        orphans: 3;
        widows: 3;
      }
      /* A grid is a screen-width device; on paper the columns are too narrow to read. */
      .docdiagram-grid {
        display: block !important;
      }
      .docdiagram-grid-item + .docdiagram-grid-item {
        margin-top: 1rem;
      }
      .docdiagram-contents {
        break-inside: avoid;
        page-break-inside: avoid;
      }
      .docdiagram-caption {
        bottom: auto !important;
        left: auto !important;
        position: static !important;
        right: auto !important;
      }
      .docdiagram-captioned {
        padding-bottom: 1rem !important;
      }
      /* A diagram left expanded or mid-edit still prints as an ordinary document diagram. */
      .docdiagram[data-expanded="true"] {
        border: 1px solid var(--docdiagram-border) !important;
        border-radius: 12px !important;
        inset: auto !important;
        padding: 1rem !important;
      }
    }
  `,document.head.append(t)}var pn=class{constructor(e,n){this.state=e;this.outputElement=n}closeDocumentMenu(){let e=document.querySelector(".docdiagram-menu"),n=document.querySelector(".docdiagram-menu-toggle");!e||!n||(e.hidden=!0,n.setAttribute("aria-expanded","false"))}closeDiagramExportMenus(){for(let e of document.querySelectorAll(".docdiagram-diagram-export-menu"))e.hidden=!0;for(let e of document.querySelectorAll(".docdiagram-export-toggle"))e.setAttribute("aria-expanded","false")}applyDocumentColourScheme(e){let n=ve(this.state.documentColorScheme,this.state.documentTheme,"background"),o=ve(this.state.documentColorScheme,this.state.documentTheme,"pale"),r=ve(this.state.documentColorScheme,this.state.documentTheme,"neutral"),i=ve(this.state.documentColorScheme,this.state.documentTheme,"accent");if(!n||!o||!r||!i)return;e.style.setProperty("--docdiagram-background",n.fill||""),e.style.setProperty("--docdiagram-border",r.stroke||""),e.style.setProperty("--docdiagram-control-background",o.fill||""),e.style.setProperty("--docdiagram-control-hover",r.fill||""),e.style.setProperty("--docdiagram-code-background",o.fill||""),e.style.setProperty("--docdiagram-text",n.text||""),e.style.setProperty("--docdiagram-muted",r.text||""),e.style.setProperty("--docdiagram-accent",i.stroke||"");let s=Gn(this.state.documentColorScheme,this.state.documentTheme);e.style.setProperty("--docdiagram-annotation-fill",s.fill),e.style.setProperty("--docdiagram-annotation-text",s.text)}applyPageTheme(e){let n=ve(this.state.documentColorScheme,e,"background");document.documentElement.dataset.docdiagramTheme=e,document.documentElement.dataset.docdiagramExpanded=String(this.state.expandedDiagramIndex!==null),document.documentElement.style.setProperty("--docdiagram-page-background",n?.fill||""),document.documentElement.style.setProperty("--docdiagram-page-text",n?.text||""),document.body&&(document.body.dataset.docdiagramTheme=e)}dockExpandedDiagramToolbar(e){if(this.state.expandedDiagramIndex===null)return;let n=this.outputElement?.querySelector(`.docdiagram[data-diagram-index="${this.state.expandedDiagramIndex}"] .docdiagram-diagram-toolbar`);n&&e.prepend(n)}removeToolbar(){if(this.outputElement)for(;this.outputElement.previousElementSibling?.classList.contains("docdiagram-toolbar");)this.outputElement.previousElementSibling.remove()}};function _r(t){return t instanceof Element&&t.matches("input, textarea, select, [contenteditable]")}var fn=class{constructor(e){this.host=e;this.viewportRefitTimer=null}bind(){globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.addEventListener("change",()=>{this.host.isAutoTheme()&&this.host.renderDocument()}),globalThis.addEventListener("resize",()=>{this.viewportRefitTimer!==null&&clearTimeout(this.viewportRefitTimer),this.viewportRefitTimer=setTimeout(()=>{this.viewportRefitTimer=null,this.host.refitDiagramViewports()},150)}),globalThis.addEventListener("beforeunload",e=>{this.host.hasUnsavedChanges()&&(e.preventDefault(),e.returnValue="")}),document.addEventListener("keydown",e=>this.handleKeydown(e)),document.addEventListener("pointerdown",e=>{e.button===0&&this.activateDiagramAt(e.target)},!0),document.addEventListener("focusin",e=>this.activateDiagramAt(e.target)),document.addEventListener("pointerdown",e=>this.handlePointerDown(e)),this.host.outputElement.addEventListener("dblclick",e=>{if(e.target instanceof Element&&e.target.closest("a, button, input, textarea, select, [contenteditable]"))return;let n=e.target instanceof Element?e.target.closest(".docdiagram"):null;if(n&&(e.target===n||e.target===n.querySelector("svg"))){e.preventDefault(),this.host.toggleDiagramExpansion(Number(n.dataset.diagramIndex));return}this.host.revealSource(globalThis.getSelection?.()?.toString()||"")})}activateDiagramAt(e){let n=e instanceof Element?e.closest(".docdiagram"):null,o=e instanceof Element&&e.closest(".docdiagram-diagram-toolbar");this.host.activateDiagram(n?Number(n.dataset.diagramIndex):o?this.host.getExpandedDiagramIndex():null)}handleKeydown(e){if((e.metaKey||e.ctrlKey)&&e.shiftKey&&e.key.toLowerCase()==="e"&&(this.host.isSourceEditorOpen()||!_r(e.target))){e.preventDefault(),this.host.toggleSourceEditor();return}if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="s"){e.preventDefault(),this.host.downloadDocument();return}if(e.key==="Escape"){this.host.closeDocumentMenu();let n=this.host.getExpandedDiagramIndex();!e.defaultPrevented&&!_r(e.target)&&n!==null&&(e.preventDefault(),this.host.toggleDiagramExpansion(n))}}handlePointerDown(e){let n=document.activeElement;n instanceof HTMLTextAreaElement&&n.matches(".docdiagram-inline-editor")&&!(e.target instanceof Node&&n.contains(e.target))&&n.blur();let o=document.querySelector(".docdiagram-toolbar"),r=e.target instanceof Element&&e.target.closest(".docdiagram-diagram-toolbar")!==null;o&&e.target instanceof Node&&(!o.contains(e.target)||r)&&this.host.closeDocumentMenu(),e.target instanceof Node&&!(e.target instanceof Element&&e.target.closest(".docdiagram-diagram-export"))&&this.host.closeDiagramExportMenus(),!(!(e.target instanceof Element)||e.target.closest(".docdiagram-toolbar, .docdiagram-node, .docdiagram-edge-group, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-inline-editor, .docdiagram-sequence-participant, .docdiagram-sequence-note, .docdiagram-sequence-message")||!this.host.hasSelection())&&this.host.clearSelection()}};function Xr(){return{diagramModels:[],editingDiagramIndex:null,selectedNode:null,selectedEdge:null,selectedSequenceElement:null,editingNode:null,editingEdge:null,connectionDrag:null,documentTheme:"light",documentThemeSetting:"auto",documentColorScheme:"classic",documentFormat:"centered",documentDoctype:"document",editSessionDiagram:null,expandedDiagramIndex:null,diagramZooms:new Map,diagramCameraOffsets:new Map,diagramViewportHeights:new Map}}function ft(t){t.selectedNode=null,t.selectedEdge=null,t.selectedSequenceElement=null,t.editingNode=null,t.editingEdge=null}function bt(t,e){return t.editingDiagramIndex===e}function Ee(t,e){return t.target instanceof Element?t.target.closest(e):null}function Se(t,e){let n=t.diagramModels[e];return n?.type==="flowchart"?n:null}function J(t){return Number(t)}function Qa(t,e){let n=t.getBoundingClientRect(),o=18;return e.clientX>=n.right-o&&e.clientY>=n.bottom-o}function fo(t,e){return(Number(st(t,e).strokeWidth)||2)+2}var bn=class{constructor(e){this.host=e;this.editingShortcutsBound=!1;this.activeDiagramIndex=null}activateDiagram(e){this.activeDiagramIndex=e;for(let n of this.host.outputElement.querySelectorAll(".docdiagram"))n.classList.toggle("docdiagram-scroll-active",Number(n.dataset.diagramIndex)===e)}enableCanvasPanning(){this.activeDiagramIndex!==null&&!this.host.state.diagramModels[this.activeDiagramIndex]&&(this.activeDiagramIndex=null),this.activateDiagram(this.activeDiagramIndex);for(let e of this.host.outputElement.querySelectorAll(".docdiagram")){let n=e.querySelector("svg");n&&(e.tabIndex=0,e.setAttribute("aria-description","Click or focus to pan with the wheel. Ctrl or Cmd with the wheel zooms. Double-click the background to expand or collapse."),e.addEventListener("pointerdown",o=>{(o.target===e||o.target===n)&&!Qa(e,o)&&this.beginCanvasPan(n,o)}),e.addEventListener("wheel",o=>this.moveCanvasWithWheel(n,o),{passive:!1}))}}moveCanvasWithWheel(e,n){let o=J(e.dataset.diagramIndex);if(this.activeDiagramIndex!==o||Ee(n,"input, textarea, select, [contenteditable]"))return;n.preventDefault();let r=this.host.state.diagramCameraOffsets.get(o)||{x:0,y:0};if(!n.ctrlKey&&!n.metaKey){let u=nn(n.deltaY,n.deltaMode),h=nn(n.deltaX,n.deltaMode);this.setCameraOffset(e,o,{x:r.x-(n.shiftKey&&!h?u:h),y:r.y-(n.shiftKey&&!h?0:u)});return}let i=this.host.state.diagramZooms.get(o)||100,s=dr(i,n.deltaY,n.deltaMode);if(s===i)return;let a=e.getBoundingClientRect(),c=a.width?(n.clientX-a.left)/a.width:.5,d=a.height?(n.clientY-a.top)/a.height:.5;this.host.state.diagramZooms.set(o,s),e.style.width=`${s}%`;let l=e.getBoundingClientRect();this.setCameraOffset(e,o,{x:r.x+n.clientX-(l.left+c*l.width),y:r.y+n.clientY-(l.top+d*l.height)})}setCameraOffset(e,n,o){this.host.state.diagramCameraOffsets.set(n,o),e.style.transform=`translate(${o.x}px, ${o.y}px)`}enableSequenceSelection(){for(let e of this.host.outputElement.querySelectorAll('.docdiagram[data-diagram-type="sequence"] svg'))e.addEventListener("click",n=>{if(!bt(this.host.state,J(e.dataset.diagramIndex)))return;let o=Ee(n,".docdiagram-sequence-participant"),r=Ee(n,".docdiagram-sequence-note"),i=Ee(n,".docdiagram-sequence-message");if(o)this.host.state.selectedSequenceElement={diagramIndex:J(o.getAttribute("data-diagram-index")||void 0),kind:"participant",id:o.getAttribute("data-participant-id")||""};else if(r)this.host.state.selectedSequenceElement={diagramIndex:J(r.getAttribute("data-diagram-index")||void 0),kind:"note",index:J(r.getAttribute("data-note-index")||void 0)};else if(i)this.host.state.selectedSequenceElement={diagramIndex:J(i.getAttribute("data-diagram-index")||void 0),kind:"message",index:J(i.getAttribute("data-message-index")||void 0)};else{if(!this.host.state.selectedSequenceElement&&!this.host.state.selectedNode&&!this.host.state.selectedEdge)return;this.host.state.selectedSequenceElement=null}this.host.state.selectedNode=null,this.host.state.selectedEdge=null,this.host.renderDocument()})}enableEditing(){for(let e of this.host.outputElement.querySelectorAll(".docdiagram svg"))bt(this.host.state,J(e.dataset.diagramIndex))&&(e.addEventListener("click",n=>this.handleDiagramClick(e,n)),e.addEventListener("pointerdown",n=>this.handleDiagramPointerDown(e,n)));for(let e of this.host.outputElement.querySelectorAll(".docdiagram-inline-editor"))this.wireInlineEditor(e);this.editingShortcutsBound||(this.editingShortcutsBound=!0,document.addEventListener("keydown",e=>{if(this.host.state.editingDiagramIndex===null)return;let n=document.activeElement;n instanceof Element&&n.matches("input, textarea, select, [contenteditable]")||((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="d"&&this.host.state.selectedNode?(e.preventDefault(),this.duplicateSelectedNode()):(e.key==="Delete"||e.key==="Backspace")&&(this.host.state.selectedNode||this.host.state.selectedEdge)&&(e.preventDefault(),this.deleteSelected()))},!0))}selectNode(e,n){this.host.state.selectedNode={diagramIndex:e,nodeId:n},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}selectEdge(e,n){this.host.state.selectedEdge={diagramIndex:e,edgeIndex:n},this.host.state.selectedNode=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}handleDiagramClick(e,n){if(Ee(n,".docdiagram-inline-editor"))return;let o=Ee(n,".docdiagram-node");if(o){this.selectNode(J(o.getAttribute("data-diagram-index")||void 0),o.getAttribute("data-node-id")||"");return}let r=Ee(n,".docdiagram-edge-group");if(r){let i=J(r.getAttribute("data-diagram-index")||void 0),s=J(r.getAttribute("data-edge-index")||void 0),a=this.host.state.selectedEdge?.diagramIndex===i&&this.host.state.selectedEdge.edgeIndex===s,c=this.host.state.editingEdge?.diagramIndex===i&&this.host.state.editingEdge.edgeIndex===s;a&&!c?(this.host.state.editingEdge={diagramIndex:i,edgeIndex:s},this.host.renderDocument()):this.selectEdge(i,s);return}(this.host.state.selectedNode||this.host.state.selectedEdge)&&this.clearSelection()}handleDiagramPointerDown(e,n){let o=Ee(n,".docdiagram-edge-waypoint");if(o){this.moveEdgeWaypoint(e,n,o);return}let r=Ee(n,".docdiagram-callout-handle");if(r){this.moveNodeCalloutPointer(e,n,r);return}let i=Ee(n,".docdiagram-connection-port");if(i){let y=i.closest(".docdiagram-node"),F=J(y?.getAttribute("data-diagram-index")||e.dataset.diagramIndex),D=i.getAttribute("data-node-id")||y?.getAttribute("data-node-id")||"",M=Se(this.host.state,F),R=M?be(M,D)?.node:null,A=i.getAttribute("data-anchor")||"";if(R&&ce.includes(A)){let P=A;this.beginConnectionDrag(e,n,{diagramIndex:F,sourceNodeId:D,sourceAnchor:P,start:this.getNodePortPoint(R,P),current:this.getNodePortPoint(R,P),invalid:!1})}return}let s=Ee(n,".docdiagram-edge-endpoint");if(s){let y=J(s.getAttribute("data-diagram-index")||void 0),F=J(s.getAttribute("data-edge-index")||void 0),D=Se(this.host.state,y),M=D?.edges[F],R=s.getAttribute("data-endpoint");if(!M||R!=="source"&&R!=="target")return;let A=R==="source"?M.source:M.target,P=R==="source"?M.sourceAnchor:M.targetAnchor,N=D?be(D,A)?.node:null;if(!N||!P)return;this.beginConnectionDrag(e,n,{diagramIndex:y,edgeIndex:F,endpoint:R,reconnect:!0,sourceNodeId:A,sourceAnchor:P,start:this.getNodePortPoint(N,P),current:this.getNodePortPoint(N,P),invalid:!1});return}let a=Ee(n,".docdiagram-resize-handle");if(a){let y=a.closest(".docdiagram-node"),F=a.getAttribute("data-resize-corner");y&&(F==="top-left"||F==="top-right"||F==="bottom-left"||F==="bottom-right")&&this.resizeNode(e,n,y,F);return}if(Ee(n,".docdiagram-inline-editor"))return;let c=Ee(n,".docdiagram-node");if(!c)return;let d=J(c.getAttribute("data-diagram-index")||void 0),l=c.getAttribute("data-node-id")||"",u=Se(this.host.state,d);if(!u)return;let h=new Y(u),p=h.getById(l),g=p?.node;if(!p||!g)return;n.preventDefault();let m=this.svgPoint(e,n),f=p.bounds,b=p.parent?h.getByNode(p.parent)?.position||{x:0,y:0}:{x:0,y:0},v=ae(u),E=!1;this.capturePointer(e,n);let S=y=>{let F=this.svgPoint(e,y),D=I(f.x+F.x-m.x,v),M=I(f.y+F.y-m.y,v);E=E||D!==f.x||M!==f.y,c.setAttribute("transform",`translate(${D-f.x} ${M-f.y})`),g.arrow&&this.updateNodeCalloutMarkup(c,f,{x:g.arrow.x-(D-f.x),y:g.arrow.y-(M-f.y)},Ce(g,f.x,f.y,f.width,f.height).bodyMarkup,fo(u,g)),g.position={...g.position,x:D-b.x,y:M-b.y}},x=y=>{this.releasePointer(e,y),e.removeEventListener("pointermove",S),e.removeEventListener("pointerup",x),e.removeEventListener("pointercancel",x),E?(Co(u,l),Nt(u,g),this.host.state.selectedNode={diagramIndex:d,nodeId:l},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.persistDiagramModels(),this.host.renderDocument()):this.host.state.selectedNode?.diagramIndex===d&&this.host.state.selectedNode.nodeId===l?(this.host.state.editingNode={diagramIndex:d,nodeId:l},this.host.renderDocument()):this.selectNode(d,l)};e.addEventListener("pointermove",S),e.addEventListener("pointerup",x),e.addEventListener("pointercancel",x)}getSelectedNode(){let e=this.host.state.selectedNode,n=e?Se(this.host.state,e.diagramIndex):null;return e&&n&&be(n,e.nodeId)?.node||null}getSelectedEdge(){let e=this.host.state.selectedEdge,n=e?Se(this.host.state,e.diagramIndex):null;return e&&n?.edges[e.edgeIndex]||null}clearSelection(){this.host.state.selectedNode=null,this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}deleteSelected(){let e=this.host.state.selectedNode,n=this.host.state.selectedEdge;if(e){let o=Se(this.host.state,e.diagramIndex);if(!o)return;let r=o.edges.filter(i=>i.source===e.nodeId||i.target===e.nodeId);if(r.length&&!globalThis.confirm(`Delete this node and its ${r.length} attached connector${r.length===1?"":"s"}?`))return;Qt(o,e.nodeId)}else if(n){let o=Se(this.host.state,n.diagramIndex);if(!o)return;Jt(o,n.edgeIndex)}else return;ft(this.host.state),this.host.persistDiagramModels(),this.host.renderDocument()}duplicateSelectedNode(){let e=this.host.state.selectedNode;if(!e)return;let n=Se(this.host.state,e.diagramIndex);if(!n)return;let o=Zt(n,e.nodeId);o&&(this.host.state.selectedNode={diagramIndex:e.diagramIndex,nodeId:o.id},this.host.state.selectedEdge=null,this.host.persistDiagramModels(),this.host.renderDocument())}wireInlineEditor(e){let n=!1,o=()=>{if(!n){if(n=!0,e.classList.contains("docdiagram-inline-editor-edge")){let i=this.getSelectedEdge();i&&(tn(i,e.value),this.host.persistDiagramModels()),this.host.state.editingEdge=null}else{let i=this.getSelectedNode();i&&(en(i,e.value),this.host.persistDiagramModels()),this.host.state.editingNode=null}this.host.renderDocument()}},r=()=>{n||(n=!0,e.classList.contains("docdiagram-inline-editor-edge")?this.host.state.editingEdge=null:this.host.state.editingNode=null,this.host.renderDocument())};e.addEventListener("pointerdown",i=>i.stopPropagation()),e.addEventListener("click",i=>i.stopPropagation()),e.addEventListener("keydown",i=>{i.key==="Enter"&&(i.metaKey||i.ctrlKey)?(i.preventDefault(),o()):i.key==="Escape"&&(i.preventDefault(),r())}),e.addEventListener("blur",o,{once:!0}),e.focus(),e.select()}resizeNode(e,n,o,r){n.preventDefault();let i=J(o.getAttribute("data-diagram-index")||void 0),s=o.getAttribute("data-node-id")||"",a=Se(this.host.state,i),c=a?be(a,s)?.node:null;if(!a||!c)return;let d=this.svgPoint(e,n),l=Yn(c),u=!1;this.capturePointer(e,n);let h=g=>{let m=this.svgPoint(e,g);nr(a,c,r,m.x-d.x,m.y-d.y,l);let f=Number(c.size?.width)||190,b=Number(c.size?.height)||80;u=u||f!==l.size.width||b!==l.size.height,this.updateNodeSizeMarkup(o,c,f,b)},p=g=>{this.releasePointer(e,g),e.removeEventListener("pointermove",h),e.removeEventListener("pointerup",p),e.removeEventListener("pointercancel",p),u&&(Nt(a,c),this.host.state.selectedNode={diagramIndex:i,nodeId:s},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.persistDiagramModels(),this.host.renderDocument())};e.addEventListener("pointermove",h),e.addEventListener("pointerup",p),e.addEventListener("pointercancel",p)}updateNodeSizeMarkup(e,n,o,r){let i=Se(this.host.state,J(e.getAttribute("data-diagram-index")||void 0));if(!i)return;let{x:s,y:a}=vt(i,n),c=e.querySelector(".docdiagram-node-body"),d=e.querySelector(".docdiagram-node-label"),l=e.querySelector(".docdiagram-node-subtitle"),u=e.querySelectorAll(".docdiagram-resize-handle");if(!c)return;let h=st(i,n,this.host.state.documentTheme,this.host.state.documentColorScheme),p=fe[this.host.state.documentColorScheme][this.host.state.documentTheme==="dark"?"dark":"light"],g=Ce(n,s,a,o,r),m=Dt(g.textBounds,n),f=e.querySelector(".docdiagram-annotation-ref");f&&n.ref!==void 0&&(f.outerHTML=dt(n.ref,Ye(n.ref,{x:s,y:a,width:o,height:r}),this.host.state.documentColorScheme,this.host.state.documentTheme));for(let b of e.querySelectorAll(".docdiagram-node-stroke-gap"))b.remove();for(let b of e.querySelectorAll(".docdiagram-node-detail"))b.remove();c.outerHTML=Ut(g,h,Number(h.strokeWidth)||2,n.strokeType,p.background.fill);for(let b of[d,l])if(b){b.setAttribute("x",String(m.centerX)),b.setAttribute("y",String(b===d?m.labelStartY:m.subtitleStartY)),b.setAttribute("text-anchor",m.textAnchor);for(let v of b.querySelectorAll("tspan"))v.setAttribute("x",String(m.centerX))}for(let b of u){let v=b.getAttribute("data-resize-corner");b.setAttribute("x",String(v?.endsWith("left")?s-7:s+o-7)),b.setAttribute("y",String(v?.startsWith("top")?a-7:a+r-7))}this.updateNodeCalloutMarkup(e,{x:s,y:a,width:o,height:r},n.arrow,g.bodyMarkup,fo(i,n))}getNodePortPoint(e,n,o){let r=o;if(!r){let i=this.host.state.diagramModels.find(s=>s.type==="flowchart"&&be(s,e.id)?.node===e);if(!i)return{x:0,y:0};r=vt(i,e)}return Ce(e,r.x,r.y,r.width,r.height).anchors[n]}addConnectionTargetPorts(e,n){let o=Se(this.host.state,n);if(o)for(let{node:r,bounds:i}of new Y(o).entries)for(let s of ce){let a=this.getNodePortPoint(r,s,i),c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("class","docdiagram-connection-port docdiagram-connection-target-port"),c.dataset.nodeId=r.id,c.dataset.anchor=s,c.setAttribute("cx",String(a.x)),c.setAttribute("cy",String(a.y)),c.setAttribute("r","7"),e.append(c)}}beginConnectionDrag(e,n,o){n.preventDefault(),n.stopPropagation(),this.host.state.connectionDrag={...o,current:this.svgPoint(e,n),invalid:!1},this.addConnectionTargetPorts(e,o.diagramIndex);let r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("class","docdiagram-connection-preview"),e.append(r),this.capturePointer(e,n);let i=c=>{let l=document.elementFromPoint(c.clientX,c.clientY)?.closest(".docdiagram-connection-port");return l||[...e.querySelectorAll(".docdiagram-connection-port")].find(u=>{let h=u.getBoundingClientRect();return c.clientX>=h.left&&c.clientX<=h.right&&c.clientY>=h.top&&c.clientY<=h.bottom})||null},s=c=>{let d=this.host.state.connectionDrag;if(!d)return;let l=this.svgPoint(e,c),u=i(c);d.current=l,d.invalid=!u;let h=u?.getAttribute("data-anchor")||d.sourceAnchor;r.setAttribute("d",Qe(d.start,l,d.sourceAnchor,h,"straight").path),r.classList.toggle("docdiagram-connection-invalid",d.invalid)},a=c=>{this.releasePointer(e,c),e.removeEventListener("pointermove",s),e.removeEventListener("pointerup",a),e.removeEventListener("pointercancel",a);let d=i(c),l=this.host.state.connectionDrag;if(this.host.state.connectionDrag=null,d&&l){let u=Se(this.host.state,l.diagramIndex),h=d.getAttribute("data-node-id")||d.closest(".docdiagram-node")?.getAttribute("data-node-id"),p=d.getAttribute("data-anchor")||"";if(u&&h){if(l.reconnect&&l.edgeIndex!==void 0&&l.endpoint){let g=u.edges[l.edgeIndex];g&&(Zo(g,l.endpoint,h,p),this.host.state.selectedEdge={diagramIndex:l.diagramIndex,edgeIndex:l.edgeIndex},this.host.state.selectedNode=null)}else{let g=Ko(u,l.sourceNodeId,l.sourceAnchor,h,p);this.host.state.selectedEdge={diagramIndex:l.diagramIndex,edgeIndex:u.edges.indexOf(g)},this.host.state.selectedNode=null}this.host.persistDiagramModels()}}this.host.renderDocument()};e.addEventListener("pointermove",s),e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a)}beginCanvasPan(e,n){let o=e.closest(".docdiagram");if(!o)return;n.preventDefault();let r=J(e.dataset.diagramIndex),i=this.host.state.diagramCameraOffsets.get(r)||{x:0,y:0},s={clientX:n.clientX,clientY:n.clientY,offset:i};o.classList.add("docdiagram-panning"),this.capturePointer(e,n);let a=d=>{let l={x:s.offset.x+d.clientX-s.clientX,y:s.offset.y+d.clientY-s.clientY};this.host.state.diagramCameraOffsets.set(r,l),e.style.transform=`translate(${l.x}px, ${l.y}px)`},c=d=>{this.releasePointer(e,d),o.classList.remove("docdiagram-panning"),e.removeEventListener("pointermove",a),e.removeEventListener("pointerup",c),e.removeEventListener("pointercancel",c)};e.addEventListener("pointermove",a),e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c)}moveEdgeWaypoint(e,n,o){let r=J(o.getAttribute("data-diagram-index")||void 0),i=J(o.getAttribute("data-edge-index")||void 0),s=Se(this.host.state,r),a=s?.edges[i];if(!s||!a)return;let c=new Y(s),d=c.getById(a.source),l=c.getById(a.target);if(!d||!l)return;n.preventDefault(),n.stopPropagation(),this.capturePointer(e,n);let u=p=>{let g=this.svgPoint(e,p);a.waypoint={x:I(g.x,ae(s)),y:I(g.y,ae(s))};let m=a.sourceAnchor||"right",f=a.targetAnchor||"left",b=this.getNodePortPoint(d.node,m,d.bounds),v=this.getNodePortPoint(l.node,f,l.bounds),E=a.ref!==void 0?He(s,c)[i]:null,S=E?.path??Qe(b,v,m,f,a.route||"orthogonal",a.waypoint),x=zn(a.waypoint,!0);o.setAttribute("x",String(x.x)),o.setAttribute("y",String(x.y)),o.setAttribute("width",String(x.size)),o.setAttribute("height",String(x.size)),o.setAttribute("rx",String(x.radius)),o.setAttribute("transform",x.transform),o.setAttribute("data-anchored","true");let y=e.querySelector(`.docdiagram-edge-group[data-diagram-index="${r}"][data-edge-index="${i}"]`);y?.querySelector(".docdiagram-edge")?.setAttribute("d",S.path),y?.querySelector(".docdiagram-edge-hit")?.setAttribute("d",S.hitPath);let F=y?.querySelector(".docdiagram-annotation-ref");if(F&&a.ref!==void 0&&E){let D=E.label;if(D){let M=St(s,a,this.host.state.documentTheme,this.host.state.documentColorScheme),R=y?.querySelector(".docdiagram-edge-label");R&&(R.outerHTML=ye(D.center.x,D.startY,D.lines,Ft,"docdiagram-edge-label",M.text||""))}F.outerHTML=dt(a.ref,Ye(a.ref,D?.bounds??{x:S.midpoint.x,y:S.midpoint.y,width:0,height:0},!0),this.host.state.documentColorScheme,this.host.state.documentTheme)}},h=p=>{this.releasePointer(e,p),e.removeEventListener("pointermove",u),e.removeEventListener("pointerup",h),e.removeEventListener("pointercancel",h),this.host.persistDiagramModels(),this.host.renderDocument()};e.addEventListener("pointermove",u),e.addEventListener("pointerup",h),e.addEventListener("pointercancel",h)}moveNodeCalloutPointer(e,n,o){let r=J(o.getAttribute("data-diagram-index")||void 0),i=o.getAttribute("data-node-id")||"",s=Se(this.host.state,r),a=s?be(s,i)?.node:null,c=o.closest(".docdiagram-node");if(!s||!a||!c)return;n.preventDefault(),n.stopPropagation(),this.capturePointer(e,n);let d=ae(s),l=vt(s,a),u=Ce(a,l.x,l.y,l.width,l.height),h=fo(s,a),p=m=>{let f=this.svgPoint(e,m),b={x:I(f.x,d),y:I(f.y,d)};Xn(a,b),this.updateNodeCalloutMarkup(c,l,b,u.bodyMarkup,h)},g=m=>{this.releasePointer(e,m),e.removeEventListener("pointermove",p),e.removeEventListener("pointerup",g),e.removeEventListener("pointercancel",g),Nt(s,a),this.host.persistDiagramModels(),this.host.renderDocument()};e.addEventListener("pointermove",p),e.addEventListener("pointerup",g),e.addEventListener("pointercancel",g)}updateNodeCalloutMarkup(e,n,o,r,i){let s=o?Yt(n,o):null;if(!s)return;for(let l of e.querySelectorAll(".docdiagram-node-callout, .docdiagram-node-callout-outline"))l.setAttribute("points",s.polygonPoints);let a=e.querySelector(".docdiagram-node-callout-mask-body");a&&(a.outerHTML=Hn(r));let c=jn(s,i);for(let l of[e.querySelector("mask"),e.querySelector(".docdiagram-node-callout-mask-region")])for(let[u,h]of Object.entries(c))l?.setAttribute(u,String(h));let d=e.querySelector(".docdiagram-callout-handle");d?.setAttribute("cx",String(o?.x??0)),d?.setAttribute("cy",String(o?.y??0))}svgPoint(e,n){let o=e.getBoundingClientRect(),r=e.viewBox.baseVal;return{x:r.x+(n.clientX-o.left)*r.width/o.width,y:r.y+(n.clientY-o.top)*r.height/o.height}}capturePointer(e,n){n.isTrusted&&e.setPointerCapture(n.pointerId)}releasePointer(e,n){n.isTrusted&&e.hasPointerCapture(n.pointerId)&&e.releasePointerCapture(n.pointerId)}};function bo(t,e=!0,n=!1){let o=t===void 0?"NW":It(t);return[`<label class="docdiagram-field docdiagram-field-wide">Reference<input type="text" class="docdiagram-inspector-reference" value="${k(t===void 0?"":je(t))}"></label>`,e?`<label class="docdiagram-field">Position<select class="docdiagram-inspector-reference-position"${t===void 0?" disabled":""}>${Tt.filter(r=>!n||r===r.toUpperCase()).map(r=>`<option value="${r}"${r===(n?o.toUpperCase():o)?" selected":""}>${r}${n?"":r===r.toUpperCase()?" (outside)":" (inside)"}</option>`).join("")}</select></label>`:""].join("")}function yo(t,e){for(let[n,o]of[[".docdiagram-inspector-reference",!1],[".docdiagram-inspector-reference-position",!0]]){let r=ti(t,n);r?.addEventListener("change",()=>{let i=o?r.value:r.value.trim();try{(o||i)&&_e(o?{label:0,position:i}:i)}catch(s){r.setAttribute("aria-invalid","true"),globalThis.alert(s instanceof Error?s.message:String(s)),r.focus();return}r.removeAttribute("aria-invalid"),e(s=>{o?Xo(s,i):_o(s,i)})})}}function es(t){return`<select class="docdiagram-inspector-node-stroke-type" aria-label="Stroke type">${We.map(e=>`<option value="${e}"${e===t?" selected":""}>${e}</option>`).join("")}</select>`}function Zr(t,e,n,o){let r=fe[t]?.[e==="dark"?"dark":"light"];return[[...Te.slice(0,5),"none"],Te.slice(5,8),Te.slice(8,13)].map(i=>`<div class="docdiagram-palette-group">${i.map(s=>{let a=r?.[s];return`<label class="docdiagram-palette-swatch"><input type="radio" name="${o}" value="${s}"${s===n?" checked":""}><span style="--docdiagram-swatch-fill:${a?.fill};--docdiagram-swatch-stroke:${a?.stroke};--docdiagram-swatch-text:${a?.text}">${a?.label||s}</span></label>`}).join("")}</div>`).join("")}function Jr(t,e,n="classic",o="light"){let r=ae(t),i=st(t,e,o,n),s=Number(e.size?.width)||190,a=Number(e.size?.height)||80,c=e.shape==="document"?{width:140,height:84}:{width:120,height:60},d=r?Math.ceil(c.width/r)*r:c.width,l=r?Math.ceil(c.height/r)*r:c.height,u=r||1,h=e.palette||"accent";return[`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-inspector-label docdiagram-inspector-textarea" rows="2">${k(e.label)}</textarea></label>`,`<label class="docdiagram-field docdiagram-field-wide">Subtitle<textarea class="docdiagram-inspector-subtitle docdiagram-inspector-textarea" rows="2">${k(e.subtitle||"")}</textarea></label>`,`<label class="docdiagram-field docdiagram-field-wide">Destination<input type="text" class="docdiagram-inspector-destination" value="${k(e.href||"")}" placeholder="#detail"></label>`,bo(e.ref),`<div class="docdiagram-field docdiagram-field-wide"><span>Palette</span><div class="docdiagram-inspector-palette">${Zr(n,o,h,"node-palette")}</div></div>`,`<label class="docdiagram-inspector-shape-row"><span>Shape</span><select class="docdiagram-inspector-shape">${xt.map(p=>`<option value="${p}"${p===e.shape?" selected":""}>${p}</option>`).join("")}</select></label>`,`<div class="docdiagram-inspector-row docdiagram-inspector-colour-row"><span>Fill</span><input type="color" class="docdiagram-inspector-fill" value="${k(i.fill||"")}"></div>`,`<div class="docdiagram-inspector-row docdiagram-inspector-stroke-row"><span>Stroke</span><input type="color" class="docdiagram-inspector-stroke" value="${k(i.stroke||"")}">${es(e.strokeType||"solid")}<label class="docdiagram-visually-hidden" for="docdiagram-inspector-stroke-width">Stroke width</label><input id="docdiagram-inspector-stroke-width" type="number" aria-label="Stroke width" class="docdiagram-inspector-stroke-width" value="${Number(i.strokeWidth)||2}" min="1" step="1"></div>`,`<div class="docdiagram-inspector-row docdiagram-inspector-colour-row"><span>Text</span><input type="color" class="docdiagram-inspector-text" value="${k(i.text||"")}"></div>`,`<div class="docdiagram-inspector-paired-controls"><span>Align</span><label class="docdiagram-visually-hidden" for="docdiagram-inspector-text-v-align">Vertical alignment</label><select id="docdiagram-inspector-text-v-align" class="docdiagram-inspector-text-v-align" aria-label="Vertical alignment"><option value="top"${e.textVAlign==="top"?" selected":""}>Top</option><option value="center"${e.textVAlign!=="top"?" selected":""}>Middle</option></select><label class="docdiagram-visually-hidden" for="docdiagram-inspector-text-h-align">Horizontal alignment</label><select id="docdiagram-inspector-text-h-align" class="docdiagram-inspector-text-h-align" aria-label="Horizontal alignment"><option value="left"${e.textHAlign==="left"?" selected":""}>Left</option><option value="center"${e.textHAlign!=="left"&&e.textHAlign!=="right"?" selected":""}>Center</option><option value="right"${e.textHAlign==="right"?" selected":""}>Right</option></select><span>Size</span><label class="docdiagram-visually-hidden" for="docdiagram-inspector-width">Width</label><input id="docdiagram-inspector-width" type="number" aria-label="Width" class="docdiagram-inspector-width" value="${s}" min="${d}" step="${u}"><label class="docdiagram-visually-hidden" for="docdiagram-inspector-height">Height</label><input id="docdiagram-inspector-height" type="number" aria-label="Height" class="docdiagram-inspector-height" value="${a}" min="${l}" step="${u}"><span>Callout</span><button type="button" class="docdiagram-inspector-callout">${e.arrow?"Remove pointer":"Add pointer"}</button><span></span><button type="button" class="docdiagram-inspector-delete">Delete</button><button type="button" class="docdiagram-inspector-duplicate">Duplicate</button></div>`].join("")}function Qr(t,e,n="classic",o="light"){let r=St(t,e,o,n),i=Number(r.strokeWidth)||2,s=e.route||"orthogonal",a=e.strokeType||"solid",c=e.start||"none",d=e.end||"arrow";return[`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-inspector-label docdiagram-inspector-textarea" rows="2">${k(e.label||"")}</textarea></label>`,bo(e.ref,!0,!0),`<label class="docdiagram-field">Route<select class="docdiagram-inspector-route">${wt.map(l=>`<option value="${l}"${l===s?" selected":""}>${l}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Stroke type<select class="docdiagram-inspector-stroke-type">${We.map(l=>`<option value="${l}"${l===a?" selected":""}>${l}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Source side<select class="docdiagram-inspector-source-anchor">${ce.map(l=>`<option value="${l}"${l===e.sourceAnchor?" selected":""}>${l}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Target side<select class="docdiagram-inspector-target-anchor">${ce.map(l=>`<option value="${l}"${l===e.targetAnchor?" selected":""}>${l}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Start<select class="docdiagram-inspector-marker-start">${Le.map(l=>`<option value="${l}"${l===c?" selected":""}>${l}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">End<select class="docdiagram-inspector-marker-end">${Le.map(l=>`<option value="${l}"${l===d?" selected":""}>${l}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Stroke<input type="color" class="docdiagram-inspector-stroke" value="${k(r.stroke||"")}"></label>`,`<label class="docdiagram-field">Label colour<input type="color" class="docdiagram-inspector-text" value="${k(r.text||"")}"></label>`,`<label class="docdiagram-field">Stroke width<input type="number" class="docdiagram-inspector-stroke-width" value="${i}" min="1" step="1"></label>`,`<div class="docdiagram-inspector-actions">${e.waypoint?'<button type="button" class="docdiagram-inspector-clear-waypoint">Remove waypoint</button>':""}<button type="button" class="docdiagram-inspector-delete">Delete</button></div>`].join("")}function ei(t,e,n,o="classic",r="light"){let i="from"in n?null:Et(t,n,r,o),s=e.kind!=="message",a=s?n:null;return[`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-sequence-inspector-label docdiagram-inspector-textarea" rows="2">${k(n.label||"")}</textarea></label>`,e.kind==="message"?bo(n.ref,!1):"",e.kind==="message"?`<label class="docdiagram-field">Style<select class="docdiagram-sequence-inspector-message-style"><option value="solid"${n.style!=="dashed"?" selected":""}>Solid</option><option value="dashed"${n.style==="dashed"?" selected":""}>Dashed</option></select></label>`:"",s?`<div class="docdiagram-field docdiagram-field-wide"><span>Palette</span><div class="docdiagram-sequence-inspector-palette">${Zr(o,r,a?.palette||"accent","sequence-palette")}</div></div>`:"",s?`<label class="docdiagram-field">Fill<input type="color" class="docdiagram-sequence-inspector-fill" value="${k(i?.fill||"")}"></label><label class="docdiagram-field">Border<input type="color" class="docdiagram-sequence-inspector-stroke" value="${k(i?.stroke||"")}"></label><label class="docdiagram-field">Text<input type="color" class="docdiagram-sequence-inspector-text" value="${k(i?.text||"")}"></label><label class="docdiagram-field">Width<input type="number" min="1" class="docdiagram-sequence-inspector-width" value="${Number(a?.size?.width)||""}"></label><label class="docdiagram-field">Height<input type="number" min="1" class="docdiagram-sequence-inspector-height" value="${Number(a?.size?.height)||""}"></label>`:""].join("")}function ti(t,e){return t.querySelector(e)}function X(t,e,n){ti(t,e)?.addEventListener("change",o=>{n(o.currentTarget.value)})}function rt(t,e){e(),t.persistDiagramModels(),t.renderDocument()}function ts(t,e){e(),t.persistDiagramModels()}function Kr(t,e,n,o){t&&t.addEventListener("input",()=>{n(t.value);let r=t.value,i=t.selectionStart,s=t.selectionEnd;o(t,()=>{let a=document.querySelector(e);a&&a.value!==r&&(a.value=r),a?.focus(),a?.setSelectionRange(i,s)})})}function ni(t,e,n,o){let r=null,i=(d,l)=>{globalThis.clearTimeout(r??void 0),r=globalThis.setTimeout(()=>{r=null;let u=document.activeElement===d;t.renderDocument(),u&&l()},250)},s=d=>{let l=t.state.diagramModels[n];if(!l||l.type!=="flowchart")return;let u=be(l,o)?.node;u&&rt(t,()=>d(l,u))},a=d=>{let l=t.state.diagramModels[n];if(!l||l.type!=="flowchart")return;let u=be(l,o)?.node;u&&ts(t,()=>d(l,u))};Kr(e.querySelector(".docdiagram-inspector-label"),".docdiagram-inspector-label",d=>a((l,u)=>en(u,d)),i),yo(e,d=>s((l,u)=>d(u))),Kr(e.querySelector(".docdiagram-inspector-subtitle"),".docdiagram-inspector-subtitle",d=>a((l,u)=>Qo(u,d)),i);let c=e.querySelector(".docdiagram-inspector-destination");c?.addEventListener("change",()=>{let d=c.value;if(d&&!kt(d)){c.setAttribute("aria-invalid","true"),globalThis.alert(new Ue(o).message),c.focus();return}c.removeAttribute("aria-invalid"),s((l,u)=>Yo(u,d))});for(let d of e.querySelectorAll(".docdiagram-inspector-palette input"))d.addEventListener("change",()=>s((l,u)=>Un(u,d.value,t.state.documentColorScheme)));X(e,".docdiagram-inspector-shape",d=>s((l,u)=>Jo(u,d))),X(e,".docdiagram-inspector-fill",d=>s((l,u)=>qt(u,"fill",d))),X(e,".docdiagram-inspector-stroke",d=>s((l,u)=>qt(u,"stroke",d))),X(e,".docdiagram-inspector-node-stroke-type",d=>s((l,u)=>er(u,d))),X(e,".docdiagram-inspector-text",d=>s((l,u)=>qt(u,"text",d))),X(e,".docdiagram-inspector-text-v-align",d=>s((l,u)=>Wn(u,"textVAlign",d))),X(e,".docdiagram-inspector-text-h-align",d=>s((l,u)=>Wn(u,"textHAlign",d))),X(e,".docdiagram-inspector-stroke-width",d=>s((l,u)=>Jn(u,d))),X(e,".docdiagram-inspector-width",d=>s((l,u)=>_n(l,u,"width",d))),X(e,".docdiagram-inspector-height",d=>s((l,u)=>_n(l,u,"height",d))),e.querySelector(".docdiagram-inspector-callout")?.addEventListener("click",()=>{s((d,l)=>ar(d,l))}),e.querySelector(".docdiagram-inspector-delete")?.addEventListener("click",()=>{s((d,l)=>{Qt(d,l.id),t.state.selectedNode=null})}),e.querySelector(".docdiagram-inspector-duplicate")?.addEventListener("click",()=>{s((d,l)=>{let u=Zt(d,l.id);u&&(t.state.selectedNode={diagramIndex:n,nodeId:u.id})})})}function oi(t,e,n,o){let r=i=>{let s=t.state.diagramModels[n];if(!s||s.type!=="flowchart")return;let a=s.edges[o];a&&rt(t,()=>i(s,a))};yo(e,i=>r((s,a)=>i(a))),X(e,".docdiagram-inspector-label",i=>r((s,a)=>tn(a,i))),X(e,".docdiagram-inspector-route",i=>r((s,a)=>or(a,i))),X(e,".docdiagram-inspector-stroke-type",i=>r((s,a)=>rr(a,i))),X(e,".docdiagram-inspector-source-anchor",i=>r((s,a)=>Kn(a,"source",i))),X(e,".docdiagram-inspector-target-anchor",i=>r((s,a)=>Kn(a,"target",i))),X(e,".docdiagram-inspector-marker-start",i=>r((s,a)=>sr(a,i))),X(e,".docdiagram-inspector-marker-end",i=>r((s,a)=>cr(a,i))),X(e,".docdiagram-inspector-stroke",i=>r((s,a)=>Zn(a,"stroke",i))),X(e,".docdiagram-inspector-text",i=>r((s,a)=>Zn(a,"text",i))),X(e,".docdiagram-inspector-stroke-width",i=>r((s,a)=>Jn(a,i))),e.querySelector(".docdiagram-inspector-clear-waypoint")?.addEventListener("click",()=>{r((i,s)=>ir(s))}),e.querySelector(".docdiagram-inspector-delete")?.addEventListener("click",()=>{r(i=>{Jt(i,o),t.state.selectedEdge=null})})}function ri(t,e,n){let o=t.state.selectedSequenceElement;if(!o)return;if(X(e,".docdiagram-sequence-inspector-label",i=>rt(t,()=>{n.label=o.kind==="message"?i.trim():i.trim()||n.label})),o.kind==="message"){yo(e,i=>rt(t,()=>i(n))),X(e,".docdiagram-sequence-inspector-message-style",i=>rt(t,()=>{Ot.includes(i)&&(n.style=i)}));return}let r=n;for(let i of e.querySelectorAll(".docdiagram-sequence-inspector-palette input"))i.addEventListener("change",()=>rt(t,()=>Un(r,i.value,t.state.documentColorScheme)));for(let[i,s]of[[".docdiagram-sequence-inspector-fill","fill"],[".docdiagram-sequence-inspector-stroke","stroke"],[".docdiagram-sequence-inspector-text","text"]])X(e,i,a=>rt(t,()=>qt(r,s,a)));for(let[i,s]of[[".docdiagram-sequence-inspector-width","width"],[".docdiagram-sequence-inspector-height","height"]])X(e,i,a=>rt(t,()=>{let c=Number(a);Number.isFinite(c)&&c>0&&(r.size={...r.size,[s]:c})}))}var ns="https://sparkkz-nz.github.io/skryb/docs/reference.html",xo=192,os=96,ii=24,rs=8e6,is={flowchart:["```diagram","id: new-flowchart","type: flowchart","canvas:","  auto: true","  grid: 5","nodes:","  - id: first-node","    label: First node","    shape: rounded-rectangle","    position: { x: 80, y: 110 }","  - id: second-node","    label: Second node","    shape: rounded-rectangle","    position: { x: 330, y: 110 }","edges:","  - source: first-node","    target: second-node","    sourceAnchor: right","    targetAnchor: left","```"].join(`
`),sequence:["```diagram","id: new-sequence","type: sequence","participants:","  - id: first-participant","    label: First participant","  - id: second-participant","    label: Second participant","messages:","  - from: first-participant","    to: second-participant","    label: Request","```"].join(`
`),"diagram-reference":":::diagram { id=diagram-id }",toc:":::toc { depth=3 diagrams=true }",panel:[':::panel { title="New panel" palette=accent }',"Panel content.",":::"].join(`
`),grid:[":::grid { columns=2 }",':::panel { title="First panel" }',"First panel content.",":::","",':::panel { title="Second panel" }',"Second panel content.",":::",":::"].join(`
`)};function yn(t,e){let n=new Set([...t.matchAll(/(?:\bid:\s*|:::diagram\s+\{\s*id=)(?:"([^"]+)"|([^\s}\n#]+))/g)].map(i=>i[1]||i[2])),o=1,r=e;for(;n.has(r);)o+=1,r=`${e}-${o}`;return r}function as(t,e){let n=is[t];if(!n)return null;if(t==="flowchart")return n.replace("id: new-flowchart",`id: ${yn(e,"new-flowchart")}`);if(t==="sequence")return n.replace("id: new-sequence",`id: ${yn(e,"new-sequence")}`);if(t==="diagram-reference"){let o=yn(e,"diagram-reference");return n.replace("diagram-id",o)}return n}function ss(t){if(!/<template[^>]*\bid=["']?source\b/i.test(t))return t;let n=new DOMParser().parseFromString(t,"text/html").querySelector("template#source");if(!n)throw new Error("That Skryb document has no source template to import from.");return n.content.textContent||""}function cs(){return new Promise(t=>{let e=document.createElement("input");e.type="file",e.accept=".html,.htm,.md,.markdown,text/html,text/markdown",e.hidden=!0;let n=o=>{e.remove(),t(o)};e.addEventListener("change",()=>n(e.files?.[0]||null),{once:!0}),e.addEventListener("cancel",()=>n(null),{once:!0}),document.body.append(e),e.click()})}function ds(t){if(t.length<=1)return t[0]||null;let e=t.map((r,i)=>`${i+1}. ${r.id||"(no id)"}`).join(`
`),n=globalThis.prompt(`That file has ${t.length} diagrams. Import which one?

${e}`,"1");if(n===null)return null;let o=Number.parseInt(n.trim(),10);if(!Number.isInteger(o)||o<1||o>t.length)throw new Error(`Enter a number between 1 and ${t.length}.`);return t[o-1]}var xn=class{constructor(e){this.host=e;this.renderTimer=null;this.resizeObserver=null;this.openState=!1;this.draft="";this.error=""}get isOpen(){return this.openState}get hasUnsavedDraft(){return this.openState&&this.draft!==this.host.getSource()}get hasError(){return this.error.length>0}get draftSource(){return this.draft}setError(e){this.error=e,this.updateStatus()}clearError(){this.error=""}open(){globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=null,this.draft=this.host.getSource(),this.error="",this.openState=!0,this.host.stopDiagramEditing(),this.host.renderDocument();let e=()=>this.focus();globalThis.requestAnimationFrame?.(e)??e()}close(){this.flushRender(),!(this.error&&this.draft!==this.host.getSource()&&!globalThis.confirm("Discard the invalid source changes?"))&&(this.openState=!1,this.draft="",this.error="",this.renderTray(),document.querySelector(".docdiagram-menu-toggle")?.focus())}flushRender(){return this.renderTimer===null?!0:this.renderDraft()}syncSource(e){if(!this.openState)return;this.draft=e,this.error="";let n=document.querySelector(".docdiagram-source-editor");if(!n)return;let o=n.selectionStart,r=n.selectionEnd,i=n.scrollTop;n.value=e,n.setSelectionRange(Math.min(o,e.length),Math.min(r,e.length)),n.scrollTop=i,this.updateStatus()}reveal(e){let n=this.host.getSource(),o=Mr(n,e);return o?this.revealSourceRange({start:{line:1,column:1,offset:o.start},end:{line:1,column:1,offset:o.end}},ht(n)):!1}revealSourceRange(e,n){let o=this.host.getSource();if(ht(o)!==n||this.hasUnsavedDraft||e.start.offset>o.length)return!1;this.openState||this.open();let r=()=>{let i=document.querySelector(".docdiagram-source-editor");i&&(i.focus(),i.setSelectionRange(e.start.offset,Math.min(e.end.offset,o.length)),Tr(i,{start:e.start.offset}))};return globalThis.requestAnimationFrame?.(r)??r(),!0}renderTray(){let e=document.querySelector(".docdiagram-source-tray");if(!this.openState){this.resizeObserver?.disconnect(),this.resizeObserver=null,e?.remove(),delete this.host.outputElement.dataset.sourceEditorOpen,this.host.outputElement.style.removeProperty("--docdiagram-source-tray-height");return}if(e){e.dataset.theme=this.host.getDocumentTheme(),this.host.outputElement.dataset.sourceEditorOpen="true",this.updateStatus();return}e=document.createElement("section"),e.className="docdiagram-source-tray",e.dataset.theme=this.host.getDocumentTheme(),e.setAttribute("aria-label","Document source editor"),e.innerHTML=['<div class="docdiagram-source-resize" role="separator" aria-orientation="horizontal" aria-label="Resize source editor" tabindex="0" title="Drag to resize"></div>','<header class="docdiagram-source-header">','<div><strong>Source</strong><span class="docdiagram-source-shortcut">Cmd/Ctrl+Shift+E to close</span></div>','<div class="docdiagram-source-actions">','<button type="button" class="docdiagram-source-menu-toggle" aria-label="Source editor menu" aria-expanded="false" title="Source editor menu">\u2630</button>','<div class="docdiagram-source-menu" hidden>','<div class="docdiagram-source-menu-heading">Insert</div>','<button type="button" data-source-template="flowchart">Flowchart</button>','<button type="button" data-source-template="sequence">Sequence</button>','<button type="button" data-source-template="diagram-reference">Diagram Reference</button>','<button type="button" data-source-template="toc">Contents</button>','<button type="button" class="docdiagram-source-import">Import diagram\u2026</button>','<button type="button" data-source-template="panel">Panel</button>','<button type="button" data-source-template="grid">Grid</button>','<button type="button" class="docdiagram-source-help">Help</button>',"</div>",'<button type="button" class="docdiagram-source-close" aria-label="Close source editor" title="Close source editor">\xD7</button>',"</div>","</header>",'<label class="docdiagram-source-label">Canonical Markdown<textarea class="docdiagram-source-editor" spellcheck="false"></textarea></label>','<p class="docdiagram-source-status" aria-live="polite"></p>','<p class="docdiagram-source-error" role="alert"></p>'].join("");let n=e.querySelector(".docdiagram-source-editor"),o=e.querySelector(".docdiagram-source-close"),r=e.querySelector(".docdiagram-source-menu-toggle"),i=e.querySelector(".docdiagram-source-menu");if(!n||!o||!r||!i)return;n.value=this.draft,n.addEventListener("input",()=>{this.draft=n.value,this.error="",this.updateStatus(),this.scheduleRender()}),o.addEventListener("click",()=>this.close()),r.addEventListener("click",()=>{let a=i.hidden;i.hidden=!a,r.setAttribute("aria-expanded",String(a))});for(let a of e.querySelectorAll("[data-source-template]"))a.addEventListener("click",()=>{let c=as(a.dataset.sourceTemplate||"",n.value);c&&(this.insertTemplate(n,c),i.hidden=!0,r.setAttribute("aria-expanded","false"))});e.querySelector(".docdiagram-source-import")?.addEventListener("click",async a=>{let c=a.currentTarget;i.hidden=!0,r.setAttribute("aria-expanded","false"),c.disabled=!0;try{await this.importDiagram(n)}catch(d){let l=d instanceof Error?d.message:String(d);globalThis.alert(`Import diagram failed: ${l}`)}finally{c.disabled=!1}}),e.querySelector(".docdiagram-source-help")?.addEventListener("click",()=>{globalThis.open(ns,"_blank","noopener")}),e.addEventListener("keydown",a=>{a.key==="Escape"&&!i.hidden&&(a.preventDefault(),i.hidden=!0,r.setAttribute("aria-expanded","false"),r.focus())}),this.host.outputElement.after(e),this.host.outputElement.dataset.sourceEditorOpen="true";let s=()=>{this.host.outputElement.style.setProperty("--docdiagram-source-tray-height",`${e?.offsetHeight||0}px`)};this.attachResizeHandle(e,s),this.resizeObserver?.disconnect(),globalThis.ResizeObserver&&(this.resizeObserver=new globalThis.ResizeObserver(s),this.resizeObserver.observe(e)),s(),this.updateStatus()}attachResizeHandle(e,n){let o=e.querySelector(".docdiagram-source-resize");if(!o)return;let r=s=>{let a=globalThis.innerHeight||0,c=a?Math.max(xo,a-os):s;return Math.min(Math.max(s,xo),c)},i=s=>{e.style.height=`${r(s)}px`,n()};o.addEventListener("pointerdown",s=>{if(s.button!==0)return;s.preventDefault();let a=s.clientY,c=e.offsetHeight;e.dataset.resizing="true",o.setPointerCapture?.(s.pointerId);let d=u=>{i(c-(u.clientY-a))},l=()=>{o.removeEventListener("pointermove",d),o.removeEventListener("pointerup",l),o.removeEventListener("pointercancel",l),delete e.dataset.resizing,o.releasePointerCapture?.(s.pointerId)};o.addEventListener("pointermove",d),o.addEventListener("pointerup",l),o.addEventListener("pointercancel",l)}),o.addEventListener("keydown",s=>{let a=s.shiftKey?ii*4:ii;s.key==="ArrowUp"?(s.preventDefault(),i(e.offsetHeight+a)):s.key==="ArrowDown"?(s.preventDefault(),i(e.offsetHeight-a)):s.key==="Home"?(s.preventDefault(),i(Number.MAX_SAFE_INTEGER)):s.key==="End"&&(s.preventDefault(),i(xo))}),o.addEventListener("dblclick",()=>{e.style.removeProperty("height"),n()})}scheduleRender(){globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=globalThis.setTimeout(()=>{this.renderTimer=null,this.renderDraft()},250)}renderDraft(){return globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=null,this.host.renderDocument(this.draft,{preserveOnError:!0})}updateStatus(){let e=document.querySelector(".docdiagram-source-tray");if(!e)return;let n=e.querySelector(".docdiagram-source-status"),o=e.querySelector(".docdiagram-source-error");!n||!o||(n.textContent=this.error?"Source has errors; showing the last valid render.":"Changes render automatically.",o.hidden=!this.error,o.textContent=this.error)}insertTemplate(e,n){let o=e.selectionStart,r=e.selectionEnd,i=e.value.lastIndexOf(`
`,o-1)+1,s=e.value.indexOf(`
`,o),a=s===-1?e.value.length:s,c=e.value.slice(i,a),d=/^\s*$/.test(c)?o:a,l=/^\s*$/.test(c)?r:a,u=d===a?`
${n}`:n;e.setRangeText(u,d,l,"end"),this.draft=e.value,this.error="",this.updateStatus(),this.scheduleRender(),e.focus()}async importDiagram(e){let n=await cs();if(!n)return;if(n.size>rs)throw new Error("That file is too large to import.");let o=nt(ss(await n.text()));if(!o.length)throw new Error("That file has no diagrams to import.");let r=ds(o);if(!r)return;we(r.source,this.host.getDocumentColourScheme());let i=yn(e.value,r.id||"imported-diagram");this.insertTemplate(e,`\`\`\`diagram
${Dr(r.source,i)}
\`\`\``)}focus(){let e=document.querySelector(".docdiagram-source-editor");e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))}};var wo="data-docdiagram-offline-runtime-placeholder",ai='script[data-docdiagram-runtime="embedded"]',ls="https://sparkkz-nz.github.io/skryb/latest/skryb-runtime.js";function us(){let t=globalThis;return typeof t.DocDiagramRuntimeSource=="string"?t.DocDiagramRuntimeSource:null}function Eo(t){return/^https?:\/\//i.test(t)?t:ls}async function ms(t,e=globalThis.fetch.bind(globalThis)){let n=await e(t);if(!n.ok)throw new Error(`Could not fetch the Skryb runtime (${n.status||"unknown status"}).`);return n.text()}function si(t,e,n=""){let o=new RegExp(`<script\\b[^>]*\\b${wo}\\b[^>]*>[\\s\\S]*?<\\/script>\\s*`,"i");if(!o.test(t))throw new Error("Could not find the selected Skryb runtime in this document.");let r=t.replace(o,""),i=/<\/body\s*>/i;if(!i.test(r))throw new Error("Could not find the document body for offline export.");let s=e.replace(/<\/script/gi,"<\\/script"),c=`<script data-docdiagram-runtime="embedded"${n?` data-docdiagram-runtime-url="${gs(n)}"`:""}>
${s}
<\/script>
`;return r.replace(i,()=>`${c}</body>`)}async function ci(t,e){let n=t.querySelector(ai);if(n)return n.setAttribute(wo,""),{source:n.textContent||"",runtimeUrl:Eo(n.dataset.docdiagramRuntimeUrl||"")};let o=Array.from(t.querySelectorAll("script[src]")).find(i=>{try{let s=new URL(i.getAttribute("src")||"",t.ownerDocument.baseURI).pathname;return/\/skryb-runtime(?:-self-packaged)?\.js$/i.test(s)}catch{return!1}});if(!o)throw new Error("Could not find the selected Skryb runtime in this document.");return o.setAttribute(wo,""),{source:us()||await ms(o.src,e),runtimeUrl:Eo(o.getAttribute("src")||o.src)}}function So(t){let e=t.querySelector(ai);if(!e)return;let n=Eo(e.dataset.docdiagramRuntimeUrl||""),o=t.ownerDocument.createElement("script");o.src=n,o.defer=!0,e.replaceWith(o)}function gs(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;")}var wn=class{constructor(e,n,o,r){this.session=e;this.state=n;this.outputElement=o;this.sourceEditor=r}downloadDocument(){if(this.sourceEditor?.flushRender(),!this.canExportLastValidSource())return;let e=this.createDocumentCopy();try{So(e)}catch(n){let o=n instanceof Error?n.message:String(n);console.error("Save As failed.",n),globalThis.alert(`Save As failed: ${o}`);return}this.downloadHtml(e.outerHTML,"-edited"),this.session.markSaved()}async downloadOfflineDocument(){if(this.sourceEditor?.flushRender(),!this.canExportLastValidSource())return;let e=this.createDocumentCopy(),n=await ci(e);this.downloadHtml(si(e.outerHTML,n.source,n.runtimeUrl),"-offline"),this.session.markSaved()}createDocumentCopy(e=this.session.source){let n=document.documentElement.cloneNode(!0),o=n.querySelector("#source"),r=n.querySelector("#rendered-document");o?.content.replaceChildren(document.createTextNode(e)),n.querySelector(".docdiagram-lint-dialog")?.remove(),n.querySelector(".docdiagram-toolbar")?.remove(),n.querySelector(".docdiagram-source-tray")?.remove();for(let i of n.querySelectorAll("style"))(i.dataset.docdiagramRuntimeStyles==="true"||i.textContent?.includes(".docdiagram-inline-editor")&&i.textContent.includes(".docdiagram-toolbar"))&&i.remove();n.removeAttribute("data-docdiagram-theme"),n.removeAttribute("data-docdiagram-expanded"),n.style.removeProperty("--docdiagram-page-background"),n.style.removeProperty("--docdiagram-page-text"),n.getAttribute("style")||n.removeAttribute("style"),n.querySelector("body")?.removeAttribute("data-docdiagram-theme"),r?.replaceChildren(),r?.removeAttribute("tabindex"),r?.removeAttribute("data-editing-shortcuts-bound");for(let i of[...r?.attributes||[]])(i.name==="style"||i.name.startsWith("data-"))&&r?.removeAttribute(i.name);return n}openDiagram(e){let n=this.getDiagramExportUrl(e,"image/svg+xml;charset=utf-8");if(!n)return;if(!globalThis.open(n,"_blank")){URL.revokeObjectURL(n),globalThis.alert("Your browser blocked the new diagram tab. Allow pop-ups and try again.");return}globalThis.setTimeout(()=>URL.revokeObjectURL(n),6e4)}downloadDiagramDocument(e){let n=this.state.diagramModels[e];if(!n){globalThis.alert("The diagram is no longer available to save.");return}let o=d=>{let l={...d};return(!n.id||Pt(l.href)!==n.id)&&delete l.href,l.children&&(l.children=l.children.map(o)),l},r=Oe(n.type==="flowchart"?{...n,nodes:n.nodes.map(o)}:n),i=Xe(r)||this.getDiagramExportName(e),s=["---",`theme: ${this.state.documentThemeSetting}`,`colourScheme: ${this.state.documentColorScheme}`,"doctype: diagram","---","","```diagram",r,"```",""].join(`
`),a=this.createDocumentCopy(s),c=a.querySelector("title");c&&(c.textContent=i);try{So(a)}catch(d){let l=d instanceof Error?d.message:String(d);console.error("Save as Skryb diagram failed.",d),globalThis.alert(`Save as Skryb diagram failed: ${l}`);return}this.downloadHtml(a.outerHTML,"",this.slug(i))}downloadDiagram(e){let n=this.getDiagramExportUrl(e,"image/svg+xml;charset=utf-8");if(!n)return;let o=document.createElement("a");o.href=n,o.download=`${this.getDiagramExportName(e)}.svg`,o.hidden=!0,document.body.append(o),o.click(),o.remove(),globalThis.setTimeout(()=>URL.revokeObjectURL(n),200)}printDiagram(e){let n=this.getStandaloneDiagramSvg(e);if(!n){globalThis.alert("The diagram is no longer available to print.");return}let o=['<!doctype html><html><head><meta charset="utf-8"><title>Diagram</title>',"<style>html,body{height:100%;margin:0}body{display:grid;place-items:center}svg{height:auto;max-height:100vh;max-width:100vw;width:auto}@page{margin:0}</style>","</head><body>",new XMLSerializer().serializeToString(n),"</body></html>"].join(""),r=globalThis.open("","_blank");if(!r){globalThis.alert("Your browser blocked the print window. Allow pop-ups and try again.");return}r.document.open(),r.document.write(o),r.document.close(),r.focus(),r.print()}getStandaloneDiagramSvg(e){let n=this.outputElement?.querySelector(`.docdiagram[data-diagram-index="${e}"] svg`);if(!n)return null;let o=n.closest(".docdiagram"),r=globalThis.getComputedStyle(o||n).backgroundColor,i=n.cloneNode(!0);i.setAttribute("xmlns","http://www.w3.org/2000/svg"),i.removeAttribute("style"),i.querySelectorAll(".docdiagram-inline-editor-host, .docdiagram-resize-handle, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-connection-preview").forEach(d=>d.remove()),i.querySelectorAll(".docdiagram-node-selected, .docdiagram-edge-selected").forEach(d=>{d.classList.remove("docdiagram-node-selected","docdiagram-edge-selected")}),i.querySelectorAll("a.docdiagram-node-link").forEach(d=>{d.replaceWith(...d.childNodes)}),i.querySelectorAll(".docdiagram-node-link-hit, .docdiagram-node-link-focus, .docdiagram-node-link-indicator").forEach(d=>d.remove()),i.setAttribute("role",i.querySelectorAll(".docdiagram-annotation-ref").length?"group":"img");let s=document.createElementNS("http://www.w3.org/2000/svg","style");s.textContent=['svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}',".docdiagram-edge,.docdiagram-edge-hit{fill:none}",".docdiagram-edge-label{font-size:15px}",".docdiagram-node-label{font-size:16px;font-weight:650}",".docdiagram-node-subtitle{font-size:13px}"].join(""),i.insertBefore(s,i.firstChild);let a=document.createElementNS("http://www.w3.org/2000/svg","rect"),c=i.viewBox?.baseVal;return a.setAttribute("class","docdiagram-export-background"),a.setAttribute("x",String(c?.x??0)),a.setAttribute("y",String(c?.y??0)),a.setAttribute("width",c&&c.width>0?String(c.width):"100%"),a.setAttribute("height",c&&c.height>0?String(c.height):"100%"),a.setAttribute("fill",r),i.insertBefore(a,s.nextSibling),i}canExportLastValidSource(){return!(this.sourceEditor?.hasError&&this.sourceEditor.hasUnsavedDraft)||globalThis.confirm("Source has errors. Save the last valid version instead?")}getDiagramExportUrl(e,n){let o=this.getStandaloneDiagramSvg(e);return o?URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(o)],{type:n})):(globalThis.alert("The diagram is no longer available to export."),null)}getDiagramExportName(e){return`${this.slug(document.title)||"diagram"}-${e+1}`}downloadHtml(e,n,o=""){let r=new Blob([`<!doctype html>
${e}`],{type:"text/html;charset=utf-8"}),i=document.createElement("a"),s=o||this.slug(document.title);i.href=URL.createObjectURL(r),i.download=`${s||"document"}${n}.html`,i.click(),URL.revokeObjectURL(i.href)}slug(e){return e.toLowerCase().replace(/[^\w]+/g,"-").replace(/^-|-$/g,"")}};var En=class{constructor(e,n){this.state=e;this.renderMarkdown=n}render(e,n=!1){let o=[...this.state.diagramModels],r=this.state.documentTheme,i=this.state.documentThemeSetting,s=this.state.documentColorScheme,a=this.state.documentDoctype;this.state.diagramModels.length=0;try{let c=n?gt(e):mt(e);this.state.documentTheme=c.resolvedTheme,this.state.documentThemeSetting=c.theme,this.state.documentColorScheme=c.colourScheme,this.state.documentDoctype=c.doctype;let d=this.renderMarkdown(c.content);return this.state.expandedDiagramIndex!==null&&!this.state.diagramModels[this.state.expandedDiagramIndex]&&(this.state.expandedDiagramIndex=null,this.state.diagramModels.length=0,d=this.renderMarkdown(c.content)),{ok:!0,markup:d}}catch(c){let d=c instanceof Error?c.message:String(c);return this.state.diagramModels.length=0,this.state.diagramModels.push(...o),n&&(this.state.documentTheme=r,this.state.documentThemeSetting=i,this.state.documentColorScheme=s,this.state.documentDoctype=a),{ok:!1,message:d}}}};var Sn=class{constructor(e){this.sourceElement=e}read(){return this.sourceElement?.content.textContent||""}write(e){this.sourceElement?.content.replaceChildren(document.createTextNode(e))}},vn=class{constructor(e){this.sourceStore=e;this.savedSource=""}get source(){return this.sourceStore.read()}set source(e){this.sourceStore.write(e)}captureSavedSource(){this.savedSource=this.source}markSaved(){this.captureSavedSource()}hasUnsavedChanges(e=!1){return this.source!==this.savedSource||e}bake(){try{let e=dn(this.source);return e.baked&&(this.source=e.source),{baked:e.baked,failed:!1}}catch{return{baked:0,failed:!0}}}persistDiagramModels(e){let n=0,o=new Map;for(let s of e){let a=s.id;typeof a=="string"&&o.set(a,[...o.get(a)||[],s])}let r=new Map([...o].flatMap(([s,a])=>a.length===1?[[s,a[0]]]:[])),i=this.source.replace(/\r\n/g,`
`).replace(/^((?: {0,3}> ?)*)```diagram\s*\n([\s\S]*?)^((?: {0,3}> ?)*)```$/gm,(s,a,c,d)=>{let u=c.replace(/^(?: {0,3}> ?)+/gm,"").match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m)?.slice(1).find(Boolean),h=u&&r.get(u)||e[n];n+=1;let p=h?Oe(h):"",g=p?p.split(`
`).map(m=>`${a}${m}`).join(`
`):"";return`${a}\`\`\`diagram
${g?`${g}
`:""}${d}\`\`\``});return this.source=i,i}};var kn=class{constructor(e){this.host=e;this.pointer=null;this.navigationRequest=0}bind(){let e=this.host.outputElement;e.addEventListener("click",o=>this.handleClick(o)),e.addEventListener("pointerdown",o=>{this.pointer={id:o.pointerId,x:o.clientX,y:o.clientY,link:this.nodeLink(o.target),cancelled:!o.isPrimary||o.button!==0}},!0);let n=o=>{this.pointer?.id===o.pointerId&&Math.hypot(o.clientX-this.pointer.x,o.clientY-this.pointer.y)>5&&(this.pointer.cancelled=!0)};e.addEventListener("pointermove",n,!0),e.addEventListener("pointerup",n,!0),e.addEventListener("pointercancel",()=>{this.pointer&&(this.pointer.cancelled=!0)},!0),e.addEventListener("wheel",()=>{this.pointer&&(this.pointer.cancelled=!0)},!0),e.addEventListener("dragstart",o=>{this.nodeLink(o.target)&&(o.preventDefault(),this.pointer&&(this.pointer.cancelled=!0))}),globalThis.addEventListener("hashchange",()=>{this.revealFragment()})}nodeLink(e){return e instanceof Element?e.closest("a.docdiagram-node-link"):null}handleClick(e){let n=e.target instanceof Element?e.target.closest("a[href]"):null;if(!n||e.defaultPrevented)return;if(n.matches(".docdiagram-node-link")&&e.detail>0&&(!this.pointer||this.pointer.link!==n||this.pointer.cancelled)){e.preventDefault();return}if(e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||n.hasAttribute("download")||(n.getAttribute("target")||"_self")!=="_self")return;let r=n.getAttribute("href")||"";r.startsWith("#")&&(e.preventDefault(),this.revealFragment(r,!0))}async revealFragment(e=globalThis.location.hash,n=!1){let o=++this.navigationRequest,r=e&&e!=="#"?Pn(e):null,i=()=>r===null?[]:[...this.host.outputElement.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id], figure.docdiagram[id]")].filter(a=>a.id===r);if(e&&e!=="#"&&(r===null||i().length!==1)){let a=`Navigation target "${e}" is missing, ambiguous, or invalid. Use Check document to inspect node destinations.`;console.warn(a),n&&globalThis.alert(a);return}if(document.fullscreenElement)try{await document.exitFullscreen()}catch(a){console.error("Could not leave fullscreen for document navigation.",a),globalThis.alert("Could not leave fullscreen. Exit fullscreen and activate the link again.");return}if(o!==this.navigationRequest||!this.host.prepareDocumentView(r))return;n&&globalThis.location.hash!==e&&(globalThis.location.hash=e);let s=r===null?this.host.outputElement:i()[0];if(!s){console.warn(`Navigation target "${e}" is no longer available.`);return}s.hasAttribute("tabindex")||(s.setAttribute("tabindex","-1"),s.addEventListener("blur",()=>s.removeAttribute("tabindex"),{once:!0})),s.focus({preventScroll:!0}),r===null?globalThis.scrollTo(0,0):s.scrollIntoView({block:"start"})}};function hs(t){let e=t.querySelector("svg");if(!e||typeof e.getBBox!="function")return null;let n;try{n=e.getBBox()}catch{return null}let o=e.viewBox?.baseVal?.height||0,r=e.getBoundingClientRect();if(!o||!r.height||!n.height)return null;let i=r.height/o,s=n.y-(e.viewBox?.baseVal?.y||0),a=getComputedStyle(t),c=r.top-t.getBoundingClientRect().top+t.scrollTop,d=(parseFloat(a.paddingBottom)||0)+(parseFloat(a.borderBottomWidth)||0),l=Math.min(Math.max(s,0),40)*i,u=Math.ceil(c+(s+n.height)*i+l+d);return Math.min(u,t.offsetHeight)}var ps="template[data-skryb-lint]",$n=class{constructor(e,n){this.sourceElement=e;this.outputElement=n;this.state=Xr();this.pendingViewportFits=new Set;this.autoFittedDiagrams=new Map;this.session=new vn(new Sn(e)),this.renderer=new En(this.state,o=>this.renderMarkdown(o)),this.chrome=new pn(this.state,n),this.sourceEditor=n?new xn({outputElement:n,getSource:()=>this.getSource(),getDocumentTheme:()=>this.getDocumentTheme(),getDocumentColourScheme:()=>this.state.documentColorScheme,renderDocument:(o,r)=>this.renderDocument(o,r),stopDiagramEditing:()=>this.stopDiagramEditing(),closeDocumentMenu:()=>this.closeDocumentMenu()}):null,this.diagramEditor=n?new bn({outputElement:n,state:this.state,persistDiagramModels:()=>this.persistDiagramModels(),renderDocument:()=>this.renderDocument()}):null,this.exportService=new wn(this.session,this.state,n,this.sourceEditor),this.navigation=n?new kn({outputElement:n,prepareDocumentView:o=>this.prepareNavigation(o)}):null,this.lifecycle=n?new fn({outputElement:n,isAutoTheme:()=>this.state.documentThemeSetting==="auto",renderDocument:()=>{this.renderDocument()},refitDiagramViewports:()=>this.refitDiagramViewports(),hasUnsavedChanges:()=>this.session.hasUnsavedChanges(this.sourceEditor?.hasUnsavedDraft),isSourceEditorOpen:()=>!!this.sourceEditor?.isOpen,toggleSourceEditor:()=>this.sourceEditor?.isOpen?this.sourceEditor.close():this.sourceEditor?.open(),downloadDocument:()=>this.downloadDocument(),closeDocumentMenu:()=>this.closeDocumentMenu(),closeDiagramExportMenus:()=>this.closeDiagramExportMenus(),getExpandedDiagramIndex:()=>this.state.expandedDiagramIndex,toggleDiagramExpansion:o=>this.toggleDiagramExpansion(o),activateDiagram:o=>this.diagramEditor?.activateDiagram(o),hasSelection:()=>!!(this.state.selectedNode||this.state.selectedEdge||this.state.selectedSequenceElement),clearSelection:()=>{ft(this.state),this.renderDocument()},revealSource:o=>this.sourceEditor?.reveal(o)}):null}getSource(){return this.session.source}setSource(e){this.session.source=e}getDocumentTheme(){return this.state.documentTheme}stopDiagramEditing(){this.state.editingDiagramIndex!==null&&(this.state.editingDiagramIndex=null,this.state.editSessionDiagram=null,ft(this.state))}renderDiagram(e,n,o){return Ur(e,n,{figure:o,colourScheme:this.state.documentColorScheme,state:{...this.state,documentTheme:this.state.documentTheme,documentColorScheme:this.state.documentColorScheme},onDiagram:(r,i)=>{this.state.diagramModels[r]=i}})}renderMarkdown(e,n={diagramIndex:0}){return un(e,n,{renderDiagram:(o,r,i)=>this.renderDiagram(o,r,i),documentColorScheme:this.state.documentColorScheme,documentTheme:this.state.documentTheme})}persistDiagramModels(){let e=this.session.persistDiagramModels(this.state.diagramModels);this.sourceEditor?.syncSource(e)}renderDocument(e=this.getSource(),{preserveOnError:n=!1}={}){if(!this.outputElement)return!1;for(let a of this.outputElement.querySelectorAll(".docdiagram")){let c=Number(a.dataset.diagramIndex);if(this.pendingViewportFits.has(c)){this.state.diagramViewportHeights.delete(c);continue}c!==this.state.expandedDiagramIndex&&this.state.diagramViewportHeights.set(c,a.offsetHeight)}let o={x:globalThis.scrollX||0,y:globalThis.scrollY||0},r=this.renderer.render(e,n);if(!r.ok)return n?(this.sourceEditor?.setError(r.message),!1):(this.applyPageTheme(this.state.documentTheme),this.removeToolbarChrome(),this.outputElement.innerHTML=`<section class="docdiagram-error"><strong>Document could not be rendered.</strong><br>${k(r.message)}</section>`,this.sourceEditor?.renderTray(),!1);this.setSource(e);let i=r.markup;this.sourceEditor?.clearError(),this.outputElement.dataset.theme=this.state.documentTheme,this.outputElement.dataset.colourScheme=this.state.documentColorScheme,this.applyDocumentColourScheme(this.outputElement),this.outputElement.dataset.format=this.state.documentFormat,this.applyPageTheme(this.state.documentTheme),this.outputElement.innerHTML=i,this.removeToolbarChrome(),this.createToolbar(),this.sourceEditor?.renderTray();let s=document.querySelector(".docdiagram-source-tray");return s&&this.applyDocumentColourScheme(s),this.diagramEditor?.enableCanvasPanning(),this.diagramEditor?.enableSequenceSelection(),this.fitDiagramViewports(),this.state.editingDiagramIndex!==null&&this.diagramEditor?.enableEditing(),globalThis.scrollTo?.(o.x,o.y),!0}fitDiagramViewports(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram")){let n=Number(e.dataset.diagramIndex);if(this.state.diagramViewportHeights.has(n)||n===this.state.expandedDiagramIndex)continue;let o=hs(e);o&&(this.state.diagramViewportHeights.set(n,o),this.autoFittedDiagrams.set(n,o),e.style.boxSizing="border-box",e.style.minHeight="0",e.style.height=`${o}px`)}this.pendingViewportFits.clear()}}refitDiagramViewports(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram")){let n=Number(e.dataset.diagramIndex),o=this.autoFittedDiagrams.get(n);if(!(o===void 0||n===this.state.expandedDiagramIndex)){if(e.offsetHeight!==o){this.autoFittedDiagrams.delete(n);continue}e.style.removeProperty("height"),e.style.removeProperty("min-height"),this.state.diagramViewportHeights.delete(n)}}this.fitDiagramViewports()}}closeDocumentMenu(){this.chrome.closeDocumentMenu()}bakeOnOpen(){let{baked:e,failed:n}=this.session.bake(),o=this.skrybActionRequestedByUrl("autowrap"),r=!1;if(!n&&o)try{let i=Sr(this.getSource());i.changed&&(this.setSource(i.source),r=!0)}catch{}(e||n||r||o||this.skrybActionRequestedByUrl("lint"))&&this.writeLintReport()}skrybActionRequestedByUrl(e){let n=globalThis.location?.search||"";return new URLSearchParams(n).getAll("skryb").includes(e)?!0:e==="lint"&&/(^|[?&])skryb-lint(=|&|$)/.test(n)}writeLintReport(){let e=this.getSource(),n;try{n=uo(e)}catch(r){n={sourceHash:ht(e),messages:[{severity:"error",rule:"schema",message:r instanceof Error?r.message:String(r)}],errorCount:1,warningCount:0}}let o=document.querySelector(ps)||document.createElement("template");return o.dataset.skrybLint="",o.content.replaceChildren(document.createTextNode(JSON.stringify({errors:n.errorCount,warnings:n.warningCount,sourceHash:n.sourceHash,messages:n.messages},null,2))),o.isConnected||document.body.append(o),n}showLintReport(){let e=this.writeLintReport();if(!e)return;let n=`${e.errorCount} error${e.errorCount===1?"":"s"}, ${e.warningCount} warning${e.warningCount===1?"":"s"}`,o=document.querySelector(".docdiagram-lint-dialog")||document.body.appendChild(document.createElement("dialog"));o.className="docdiagram-lint-dialog",o.replaceChildren();let r=document.createElement("h2");r.textContent=`Document check: ${n}`;let i=document.createElement("div");i.className="docdiagram-lint-messages",e.messages.length||(i.textContent="Nothing to report. Every check passed.");for(let a of e.messages){let c=a.location?.subjects.find(l=>l.sourceRange)?.sourceRange||a.location?.fenceRange,d=c&&this.sourceEditor?document.createElement("button"):document.createElement("pre");if(d.textContent=Or({sourceHash:e.sourceHash,messages:[a],errorCount:a.severity==="error"?1:0,warningCount:a.severity==="warning"?1:0}),d instanceof HTMLButtonElement&&c&&(d.type="button",d.title=`Reveal source at line ${c.start.line}`,d.addEventListener("click",()=>{o.close(),this.sourceEditor?.revealSourceRange(c,e.sourceHash)})),i.append(d),a.suggestedAction?.id==="wrap-linear-flow"){let l=document.createElement("button");l.type="button",l.textContent=a.suggestedAction.label,l.addEventListener("click",()=>{let u=kr(this.getSource(),a.suggestedAction.diagramIndex);if(!u.changed||!u.layout)return;let{before:h,after:p}=u.layout;globalThis.confirm(`Preview: fitted content changes from ${h.width} by ${h.height} (${h.aspectRatio.toFixed(1)}:1) to ${p.width} by ${p.height} (${p.aspectRatio.toFixed(1)}:1).

This replaces node positions, connector anchors, routes, and waypoints. Apply the wrapped layout?`)&&(o.close(),this.renderDocument(u.source),this.sourceEditor?.syncSource(u.source),this.writeLintReport())}),i.append(l)}}let s=document.createElement("button");s.type="button",s.textContent="Close",s.addEventListener("click",()=>o.close()),o.append(r,i,s),o.showModal()}downloadDocument(){this.exportService.downloadDocument()}async downloadOfflineDocument(){await this.exportService.downloadOfflineDocument()}boot(){if(!this.sourceElement||!this.outputElement)return;Yr(),this.session.captureSavedSource(),this.bakeOnOpen(),this.lifecycle?.bind(),this.navigation?.bind();let e=!1;try{e=cn(this.getSource()).frontmatter.doctype==="diagram"}catch{this.setExpandedDiagram(null)}e&&this.setExpandedDiagram(0),this.renderDocument(),globalThis.location?.hash&&this.navigation?.revealFragment()}getCoreApi(){return{bakeDocumentSource:dn,spliceBakedFences:ao,lintDocument:uo}}createToolbar(){if(!this.outputElement)return;let e=document.createElement("section");e.className="docdiagram-toolbar",e.dataset.editing=String(this.state.editingDiagramIndex!==null),e.dataset.theme=this.state.documentTheme,e.dataset.colourScheme=this.state.documentColorScheme,e.dataset.format=this.state.documentFormat;let n=this.getSelectedNode(),o=n?null:this.getSelectedEdge(),r=!n&&!o?this.getSelectedSequenceElement():null,i=n&&this.state.selectedNode?this.state.diagramModels[this.state.selectedNode.diagramIndex]:o&&this.state.selectedEdge?this.state.diagramModels[this.state.selectedEdge.diagramIndex]:r&&this.state.selectedSequenceElement?this.state.diagramModels[this.state.selectedSequenceElement.diagramIndex]:null;e.innerHTML=['<button type="button" class="docdiagram-menu-toggle" aria-label="Document menu" aria-expanded="false" title="Document menu">\u2630</button>','<div class="docdiagram-menu" hidden>','<label class="docdiagram-theme-control">Theme<select class="docdiagram-theme-select">',`<option value="auto"${this.state.documentThemeSetting==="auto"?" selected":""}>Auto</option>`,`<option value="light"${this.state.documentThemeSetting==="light"?" selected":""}>Light</option>`,`<option value="dark"${this.state.documentThemeSetting==="dark"?" selected":""}>Dark</option>`,"</select></label>",`<label class="docdiagram-theme-control">Colour scheme<select class="docdiagram-colour-scheme-select">${Object.entries(fe).map(([c,d])=>`<option value="${c}"${this.state.documentColorScheme===c?" selected":""}>${d.label}</option>`).join("")}</select></label>`,'<label class="docdiagram-theme-control">Format<select class="docdiagram-format-select">',`<option value="centered"${this.state.documentFormat==="centered"?" selected":""}>Centered</option>`,`<option value="full-width"${this.state.documentFormat==="full-width"?" selected":""}>Full width</option>`,"</select></label>",'<label class="docdiagram-theme-control">Opens as<select class="docdiagram-doctype-select">',`<option value="document"${this.state.documentDoctype==="document"?" selected":""}>Document</option>`,`<option value="diagram"${this.state.documentDoctype==="diagram"?" selected":""}>Diagram</option>`,"</select></label>",'<button type="button" class="docdiagram-edit-source">Edit source</button>','<button type="button" class="docdiagram-lint">Check document</button>','<button type="button" class="docdiagram-print-document">Print / Save as PDF</button>','<button type="button" class="docdiagram-save">Save As</button>','<button type="button" class="docdiagram-offline-save">Save for Offline</button>',"</div>",n&&i?.type==="flowchart"?`<div class="docdiagram-inspector" data-kind="node">${Jr(i,n,this.state.documentColorScheme,this.state.documentTheme)}</div>`:o&&i?`<div class="docdiagram-inspector" data-kind="edge">${Qr(i,o,this.state.documentColorScheme,this.state.documentTheme)}</div>`:r&&i?`<div class="docdiagram-inspector" data-kind="sequence">${ei(i,this.state.selectedSequenceElement,r,this.state.documentColorScheme,this.state.documentTheme)}</div>`:""].join("");let s=e.querySelector(".docdiagram-menu-toggle"),a=e.querySelector(".docdiagram-menu");s?.addEventListener("click",()=>{if(!a)return;let c=a.hidden;a.hidden=!c,s.setAttribute("aria-expanded",String(c))}),e.querySelector(".docdiagram-print-document")?.addEventListener("click",()=>this.printDocument()),e.querySelector(".docdiagram-save")?.addEventListener("click",()=>this.downloadDocument()),e.querySelector(".docdiagram-offline-save")?.addEventListener("click",async c=>{let d=c.currentTarget;d.disabled=!0;try{await this.downloadOfflineDocument()}catch(l){let u=l instanceof Error?l.message:String(l);console.error("Offline export failed.",l),globalThis.alert(`Save for Offline failed: ${u}`)}finally{d.disabled=!1}}),e.querySelector(".docdiagram-edit-source")?.addEventListener("click",()=>{this.closeDocumentMenu(),this.sourceEditor?.open()}),e.querySelector(".docdiagram-lint")?.addEventListener("click",()=>{this.closeDocumentMenu(),this.showLintReport()}),e.querySelector(".docdiagram-theme-select")?.addEventListener("change",c=>{this.setSource(Fr(this.getSource(),c.currentTarget.value)),this.renderDocument()}),e.querySelector(".docdiagram-colour-scheme-select")?.addEventListener("change",c=>{this.setSource(Nr(this.getSource(),c.currentTarget.value)),this.renderDocument()}),e.querySelector(".docdiagram-format-select")?.addEventListener("change",c=>{this.state.documentFormat=c.currentTarget.value==="full-width"?"full-width":"centered",this.renderDocument()}),e.querySelector(".docdiagram-doctype-select")?.addEventListener("change",c=>{let d=c.currentTarget.value==="diagram"?"diagram":"document";this.setSource(Ar(this.getSource(),d)),this.setExpandedDiagram(d==="diagram"?0:null),this.renderDocument()}),this.outputElement.before(e),this.applyDocumentColourScheme(e),n&&this.state.selectedNode?ni(this,e,this.state.selectedNode.diagramIndex,this.state.selectedNode.nodeId):o&&this.state.selectedEdge?oi(this,e,this.state.selectedEdge.diagramIndex,this.state.selectedEdge.edgeIndex):r&&this.state.selectedSequenceElement&&ri(this,e,r),this.wireChromeControls(),this.dockExpandedDiagramToolbar(e)}dockExpandedDiagramToolbar(e){this.chrome.dockExpandedDiagramToolbar(e)}getSelectedNode(){let e=this.state.selectedNode,n=e?this.state.diagramModels[e.diagramIndex]:null;return e&&n?.type==="flowchart"&&bt(this.state,e.diagramIndex)&&be(n,e.nodeId)?.node||null}getSelectedEdge(){let e=this.state.selectedEdge,n=e?this.state.diagramModels[e.diagramIndex]:null;return e&&n?.type==="flowchart"&&bt(this.state,e.diagramIndex)&&n.edges[e.edgeIndex]||null}getSelectedSequenceElement(){let e=this.state.selectedSequenceElement,n=e?this.state.diagramModels[e.diagramIndex]:null;return!e||n?.type!=="sequence"||!bt(this.state,e.diagramIndex)?null:e.kind==="participant"?n.participants?.find(o=>o.id===e.id)||null:e.kind==="message"?n.messages?.[e.index]||null:n.notes?.[e.index]||null}applyDocumentColourScheme(e){this.chrome.applyDocumentColourScheme(e)}wireChromeControls(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram-export-toggle"))e.addEventListener("click",()=>{let n=e.parentElement?.querySelector(".docdiagram-diagram-export-menu");if(!n)return;let o=n.hidden;this.closeDiagramExportMenus(),n.hidden=!o,e.setAttribute("aria-expanded",String(o))});for(let e of this.outputElement.querySelectorAll(".docdiagram-toggle-expand"))e.addEventListener("click",()=>this.toggleDiagramExpansion(Number(e.dataset.diagramIndex)));for(let e of this.outputElement.querySelectorAll(".docdiagram-open-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.openDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-save-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.downloadDiagramDocument(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-download-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.downloadDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-print-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.printDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-zoom-in, .docdiagram-zoom-out"))e.addEventListener("click",()=>{let n=Number(e.dataset.diagramIndex),o=this.state.diagramZooms.get(n)||100,r=e.classList.contains("docdiagram-zoom-in")?25:-25;this.state.diagramZooms.set(n,Kt(o+r)),this.renderDocument()});for(let e of this.outputElement.querySelectorAll(".docdiagram-fit"))e.addEventListener("click",()=>{let n=Number(e.dataset.diagramIndex);this.state.diagramZooms.set(n,100),this.state.diagramCameraOffsets.delete(n),this.pendingViewportFits.add(n),this.renderDocument()});for(let e of this.outputElement.querySelectorAll(".docdiagram-relayout"))e.addEventListener("click",()=>{let n=Number(e.dataset.diagramIndex);if(!globalThis.confirm(`Relayout this entire diagram?

All node positions and connector anchors, routes, and waypoints will be replaced. Node sizes will be preserved.`))return;let r=$r(this.getSource(),n);r.changed&&(this.renderDocument(r.source),this.sourceEditor?.syncSource(r.source))});for(let e of this.outputElement.querySelectorAll(".docdiagram-start-editing"))e.addEventListener("click",()=>{let n=Number(e.dataset.diagramIndex),o=this.state.diagramModels[n];o&&(this.state.editSessionDiagram=we(Oe(o),this.state.documentColorScheme),this.state.editingDiagramIndex=n,ft(this.state),this.renderDocument())});for(let e of this.outputElement.querySelectorAll(".docdiagram-done-editing"))e.addEventListener("click",()=>this.exitEditing(this.state.editingDiagramIndex,!1));for(let e of this.outputElement.querySelectorAll(".docdiagram-cancel-editing"))e.addEventListener("click",()=>this.exitEditing(this.state.editingDiagramIndex,!0));for(let e of this.outputElement.querySelectorAll(".docdiagram-create-node"))e.addEventListener("click",()=>this.createNewNode(Number(e.dataset.diagramIndex)))}}printDocument(){this.closeDocumentMenu(),this.closeDiagramExportMenus(),this.stopDiagramEditing(),this.setExpandedDiagram(null),this.state.diagramViewportHeights.clear();for(let e of this.state.diagramZooms.keys())this.state.diagramZooms.set(e,100);this.state.diagramCameraOffsets.clear(),this.renderDocument(),globalThis.print()}closeDiagramExportMenus(){this.chrome.closeDiagramExportMenus()}exitEditing(e,n){e!==null&&(n&&this.state.editSessionDiagram&&(this.state.diagramModels[e]=this.state.editSessionDiagram,this.persistDiagramModels()),this.state.editingDiagramIndex=null,this.state.editSessionDiagram=null,ft(this.state),this.renderDocument())}createNewNode(e){let n=this.state.diagramModels[e];if(!n||n.type!=="flowchart")return;let o=Uo(n);this.state.selectedNode={diagramIndex:e,nodeId:o.id},this.state.selectedEdge=null,this.persistDiagramModels(),this.renderDocument()}applyPageTheme(e){this.chrome.applyPageTheme(e)}setExpandedDiagram(e){this.diagramEditor?.activateDiagram(e);let n=this.state.expandedDiagramIndex;if(n!==e){this.state.expandedDiagramIndex=e;for(let o of[n,e])o!==null&&(this.state.diagramZooms.set(o,100),this.state.diagramCameraOffsets.delete(o),this.pendingViewportFits.add(o),this.autoFittedDiagrams.delete(o))}}prepareNavigation(e){if(this.sourceEditor?.isOpen&&(this.sourceEditor.close(),this.sourceEditor.isOpen))return!1;let n=e===null?null:[...this.outputElement?.querySelectorAll(".docdiagram[id]")||[]].find(o=>o.id===e);if(this.stopDiagramEditing(),this.setExpandedDiagram(null),n){let o=Number(n.dataset.diagramIndex);this.state.diagramZooms.set(o,100),this.state.diagramCameraOffsets.delete(o),this.pendingViewportFits.add(o)}return this.closeDocumentMenu(),this.closeDiagramExportMenus(),this.renderDocument()}toggleDiagramExpansion(e){this.setExpandedDiagram(this.state.expandedDiagramIndex===e?null:e),this.closeDiagramExportMenus(),this.renderDocument()}removeToolbarChrome(){this.chrome.removeToolbar()}};var fs=document.querySelector("#source"),bs=document.querySelector("#rendered-document"),di=new $n(fs,bs),ys=globalThis;ys.DocDiagramCore=di.getCoreApi();di.boot();})();
globalThis.DocDiagramRuntimeSource=`/*! Skryb runtime | Copyright 2026 Stuart Parkinson | Apache-2.0 | https://github.com/sparkkz-nz/skryb */
"use strict";(()=>{var Tt=["N","S","E","W","NE","NW","SE","SW","n","s","e","w","ne","nw","se","sw"],Te=["background","pale","light","neutral","dark","accent-soft","accent","accent-strong","note","success","warning","danger","highlight","none"],An=["flowchart","sequence"],jt=["auto","light","dark"],Mn=["right","down","left","up"],$o=["actor"],Ot=["solid","dashed"],xt=["rounded-rectangle","circle","oval","database","diamond","rhombus","flattened-hexagon","chevron","right-chevron","document","text"],ce=["top","right","bottom","left"],wt=["orthogonal","straight","curved"],We=["solid","dotted","dashed","double"],Le=["none","arrow","circle"],Ct={start:"none",end:"arrow"},Do=["top","center"],Fo=["left","center","right"],Tn={width:50,height:20},Cn={width:50,height:20},V={shape:"rounded-rectangle",label:"New node",width:190,height:80},qe=(t,e,n,o,r,i,s,a,c,d,l,u,h)=>({background:t,pale:e,light:n,neutral:o,dark:r,"accent-soft":i,accent:s,"accent-strong":a,note:c,success:d,warning:l,danger:u,highlight:h,none:w("None","none","none",t.text)}),w=(t,e,n,o,r,i)=>({label:t,fill:e,stroke:n,text:o,gradient:r,glow:i}),fe={classic:{label:"Classic",light:qe(w("Background","#FFFFFF","#D1D5DB","#111827"),w("Pale","#F3F4F6","#9CA3AF","#1F2937"),w("Light","#E5E7EB","#6B7280","#1F2937"),w("Neutral","#D1D5DB","#4B5563","#111827"),w("Dark","#374151","#111827","#F9FAFB"),w("Soft","#DBEAFE","#60A5FA","#1E3A8A"),w("Accent","#BFDBFE","#2563EB","#1E3A8A","#EFF6FF"),w("Strong","#2563EB","#1D4ED8","#FFFFFF","#3B82F6","#60A5FA"),w("Note","#DBEAFE","#2563EB","#1E3A8A"),w("Success","#DCFCE7","#16A34A","#14532D"),w("Warning","#FFEDD5","#EA580C","#7C2D12"),w("Danger","#FEE2E2","#DC2626","#7F1D1D"),w("Highlight","#FEF9C3","#CA8A04","#713F12")),dark:qe(w("Background","#111827","#374151","#F9FAFB"),w("Pale","#1F2937","#4B5563","#F3F4F6"),w("Light","#374151","#6B7280","#F9FAFB"),w("Neutral","#4B5563","#9CA3AF","#FFFFFF"),w("Dark","#9CA3AF","#D1D5DB","#111827"),w("Soft","#172554","#3B82F6","#DBEAFE"),w("Accent","#1E3A8A","#60A5FA","#EFF6FF","#172554"),w("Strong","#2563EB","#93C5FD","#FFFFFF","#1D4ED8","#60A5FA"),w("Note","#172554","#60A5FA","#DBEAFE"),w("Success","#052E16","#4ADE80","#DCFCE7"),w("Warning","#431407","#FB923C","#FFEDD5"),w("Danger","#450A0A","#F87171","#FEE2E2"),w("Highlight","#422006","#FACC15","#FEF9C3"))},fire:{label:"Fire",light:qe(w("Background","#FBFAF9","#D9D2CC","#1F1B19"),w("Pale","#F4F1ED","#C7BDB6","#282320"),w("Light","#E9E2DC","#A2948B","#282320"),w("Neutral","#D5CAC2","#8A6D59","#241B15"),w("Dark","#3D312A","#221913","#FFF2E4"),w("Soft","#FDECDD","#E7A672","#7A3B12"),w("Accent","#FBD8BA","#D2691E","#6A2D07","#FFF3E8"),w("Strong","#D2521C","#A6380D","#FFFFFF","#F0873C","#FFA867"),w("Note","#F7EBDD","#A9784C","#523A22"),w("Success","#E7F2D9","#5F8C2B","#2C4310"),w("Warning","#FFEACB","#E08600","#6D3C00"),w("Danger","#FFE1DB","#D93A1F","#6D1708"),w("Highlight","#FFF6CB","#D9A400","#5B4200")),dark:qe(w("Background","#171413","#3A3330","#E7E2DE"),w("Pale","#1F1B19","#4A413C","#EDE8E3"),w("Light","#2B2522","#695C54","#F5EFE9"),w("Neutral","#3E3430","#A08674","#FFF3E7"),w("Dark","#C9B29F","#E4D3C4","#191412"),w("Soft","#3A2415","#C4763A","#FFE7D2"),w("Accent","#5A2E12","#F0873C","#FFEDDD","#47240F"),w("Strong","#E2571B","#FFB27A","#FFFFFF","#B33C0E","#FF8A3D"),w("Note","#302319","#BE8C5A","#F6E4D0"),w("Success","#1F2E14","#8FBF52","#E7F4D5"),w("Warning","#4A2A05","#FFA726","#FFE9C4"),w("Danger","#4B1108","#FF6B52","#FFE0DA"),w("Highlight","#453206","#FFD54A","#FFF6D2"))},ice:{label:"Ice",light:qe(w("Background","#F8FCFF","#D8EAF4","#123040"),w("Pale","#EDF8FC","#B8DCEB","#123040"),w("Light","#D9F2FF","#88BED7","#123040"),w("Neutral","#B8DCEB","#4A8BAA","#123040"),w("Dark","#21536C","#123040","#F4FBFF"),w("Soft","#DDF5FF","#75C6E8","#0F4C67"),w("Accent","#BDEAFF","#2E91BF","#083B55","#E8F9FF"),w("Strong","#1976A3","#0E5E85","#FFFFFF","#43B3E8","#8DDBF7"),w("Note","#DCEFFF","#3182CE","#123A63"),w("Success","#DDF7EE","#1E9B68","#104B35"),w("Warning","#FFF0D8","#D97918","#6B3510"),w("Danger","#FFE4E7","#D9485F","#651C2A"),w("Highlight","#FFF8C9","#C69A13","#5E4900")),dark:qe(w("Background","#0C1D29","#26475A","#E8F7FF"),w("Pale","#112B3A","#376176","#E8F7FF"),w("Light","#173B4D","#4A7B92","#F0FAFF"),w("Neutral","#28576B","#79AFC3","#F4FBFF"),w("Dark","#A3D6E9","#D4F2FF","#0C1D29"),w("Soft","#10384E","#4AB5DF","#DDF7FF"),w("Accent","#15526D","#72CEF2","#ECFBFF","#123C52"),w("Strong","#2186B5","#94DCF5","#FFFFFF","#176A91","#64CEF2"),w("Note","#122E4B","#62A9F5","#DCEFFF"),w("Success","#103D32","#4DD69A","#DDF7EE"),w("Warning","#4B2C0D","#F3A34C","#FFF0D8"),w("Danger","#4B1923","#F07A8C","#FFE4E7"),w("Highlight","#4A3D0A","#E6C54B","#FFF8C9"))},midnight:{label:"Midnight",light:qe(w("Background","#F5F7FC","#CAD3E4","#101D38"),w("Pale","#E9EEF8","#B6C4DC","#172744"),w("Light","#D9E2F2","#91A5C5","#172744"),w("Neutral","#C1CEE1","#6F85A6","#14223C"),w("Dark","#243B63","#1B3155","#F5F8FF"),w("Soft","#DCE7FA","#93A9CE","#1A3158"),w("Accent","#C9DBFA","#5E7FB4","#152D54","#D6E3F8"),w("Strong","#345F9D","#2C548D","#FFFFFF","#416EAE","#6F91C2"),w("Note","#DBE7F8","#5277AE","#1D355D"),w("Success","#DDEFE8","#3E886A","#173F31"),w("Warning","#F8E9D1","#B9702D","#5D3513"),w("Danger","#F4E0E5","#AD5570","#591F30"),w("Highlight","#F8F0C9","#A88222","#554300")),dark:qe(w("Background","#081426","#1F3554","#E8F0FF"),w("Pale","#0D1C32","#2A4265","#E5EEFF"),w("Light","#132843","#3A557A","#EDF4FF"),w("Neutral","#1E385B","#59779E","#EEF5FF"),w("Dark","#91A9C9","#AFC2DB","#0A172A"),w("Soft","#112B4D","#527AA9","#E1EEFF"),w("Accent","#173B68","#6389BA","#ECF4FF","#1B416E"),w("Strong","#2C629F","#6D98CD","#FFFFFF","#356FAF","#6D98CD"),w("Note","#132A4A","#6D96C8","#DDEAFF"),w("Success","#123B31","#5FBA91","#DDF3E8"),w("Warning","#422C14","#D09150","#FBEAD1"),w("Danger","#431E2B","#D27691","#F8E1E8"),w("Highlight","#403710","#C5A543","#FAF2CA"))},paper:{label:"Paper",light:qe(w("Background","#FFFDF7","#E0D8C8","#332D24"),w("Pale","#F7F1E5","#D4C5AD","#40372C"),w("Light","#EEE3D0","#BBA98B","#40372C"),w("Neutral","#D8C8AF","#8C765A","#332D24"),w("Dark","#514536","#332D24","#FFFCF5"),w("Soft","#EEE8DC","#A99879","#44392B"),w("Accent","#E8DDC7","#947044","#3E2D1D","#F7F0E4"),w("Strong","#81592F","#62401F","#FFFFFF","#A77A44","#D3B37B"),w("Note","#E5EFF4","#517B98","#233E50"),w("Success","#E4F0DF","#5D8A54","#294527"),w("Warning","#F9E8CD","#B96B28","#64350D"),w("Danger","#F5E0DA","#AD5342","#5D251C"),w("Highlight","#F8F0BD","#A78216","#584600")),dark:qe(w("Background","#29251F","#554B3E","#F9F2E6"),w("Pale","#373027","#6F6250","#F9F2E6"),w("Light","#4A4033","#8B7B64","#FFF9EE"),w("Neutral","#675947","#A89880","#FFF9EE"),w("Dark","#CBBCA4","#E8DBC7","#30291F"),w("Soft","#463B2D","#B6A080","#FFF8E9"),w("Accent","#5C482F","#D1B98A","#FFF9EE","#483622"),w("Strong","#916C3C","#E0C28B","#FFFFFF","#705029","#CFAA69"),w("Note","#273A46","#7DB2D0","#E5EFF4"),w("Success","#31452B","#9BC58F","#E4F0DF"),w("Warning","#503016","#E3A060","#F9E8CD"),w("Danger","#51281F","#DA8A79","#F5E0DA"),w("Highlight","#4A3D12","#D6BC48","#F8F0BD"))}},No={light:{edge:{stroke:"#52616B",strokeWidth:2,text:"#3E4A54"},node:{fill:"#EAF2FF",stroke:"#3574C7",strokeWidth:2,text:"#17202A"}},dark:{edge:{stroke:"#B8C7D5",strokeWidth:2,text:"#D9E4ED"},node:{fill:"#193A61",stroke:"#71AEF7",strokeWidth:2,text:"#F3F8FC"}}};var Ao=["note","info","warning","success"],Mo={2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))","2fr 1fr":"minmax(0, 2fr) minmax(0, 1fr)","1fr 2fr":"minmax(0, 1fr) minmax(0, 2fr)"};function at(t){if(t==="light"||t==="dark")return t;if(t==="auto")return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches?"dark":"light";throw new Error(\`Unsupported document theme: \${t}\`)}function Lt(t,e="light"){let n=at(e),o=No[n];if(!o)throw new Error(\`Unsupported diagram theme: \${n}\`);return o}function ve(t,e,n){return(Object.prototype.hasOwnProperty.call(fe,t)?fe[t]:void 0)?.[at(e)]?.[n]||null}function Pe(t,e){return{...t,...e||{}}}function Gt(t,e){return e&&t.styles?.[e]||null}function st(t,e,n="light",o="classic"){let i=Lt(t,n).node,s=e.shape==="text"?{fill:"none",stroke:"none"}:null,a=Gt(t,e.class),c=a?.palette?ve(o,n,a.palette):null,d=e.palette?ve(o,n,e.palette):null;return Pe(Pe(Pe(Pe(Pe(i,s),c),a?.style),d),e.style)}function Et(t,e,n="light",o="classic"){let r=Lt(t,n),i=e.palette?ve(o,n,e.palette):null;return Pe(Pe(r.node,i),e.style)}function St(t,e,n="light",o="classic"){let r=Lt(t,n),i=fe[o][at(n)],s=Gt(t,e.class);return Pe(Pe({...r.edge,stroke:i.neutral.fill,text:i.background.text},s?.style),e.style)}function Ln(t,e){let n=e==="start"?t.start:t.end;return typeof n=="string"&&Le.includes(n)?n:Ct[e]}function ae(t){let e=Number(t.canvas?.grid);return Number.isFinite(e)&&e>0?e:0}function I(t,e){return e?Math.round(t/e)*e:Math.round(t)}function Vt(t,e,n){let o=I(t,n),r=n?Math.ceil(e/n)*n:e;return Math.max(r,o)}function To(t){return{width:Number(t.size?.width)||V.width,height:Number(t.size?.height)||V.height}}var Y=class{constructor(e){this.entriesById=new Map;this.entriesByNode=new Map;this.ranges=new Map;let n=[],o=(r,i,s,a)=>{for(let c of r){let d={x:s.x+(Number(c.position?.x)||0),y:s.y+(Number(c.position?.y)||0)},l={node:c,parent:i,siblings:r,position:d,bounds:{...d,...To(c)},depth:a},u=n.length;n.push(l),this.entriesById.set(c.id,this.entriesById.get(c.id)||l),this.entriesByNode.set(c,l),o(c.children||[],c,d,a+1),this.ranges.set(c,{start:u,end:n.length})}};o(e.nodes,null,{x:0,y:0},0),this.entries=n}getById(e){return this.entriesById.get(e)||null}getByNode(e){return this.entriesByNode.get(e)||null}contains(e,n){let o=this.ranges.get(e),r=this.ranges.get(n);return!!(o&&r&&r.start>o.start&&r.start<o.end)}isRelated(e,n){return e===n||this.contains(e,n)||this.contains(n,e)}descendants(e){let n=this.ranges.get(e);return n?this.entries.slice(n.start+1,n.end):[]}};function be(t,e){return new Y(t).getById(e)}function vt(t,e){return new Y(t).getByNode(e)?.bounds||{x:0,y:0,...To(e)}}function Co(t,e){var p;let n=new Y(t),o=n.getById(e);if(!o)return null;let{node:r,siblings:i,position:s}=o,{width:a,height:c}=o.bounds,d={x:s.x+a/2,y:s.y+c/2},u=n.entries.filter(g=>g.node!==r&&!n.contains(r,g.node)).filter(({bounds:g})=>d.x>=g.x&&d.x<=g.x+g.width&&d.y>=g.y&&d.y<=g.y+g.height).reduce((g,m)=>!g||m.depth>=g.depth?m:g,null),h=u?(p=u.node).children||(p.children=[]):t.nodes;return i===h||(i.splice(i.indexOf(r),1),r.position={x:s.x-(u?.position.x||0),y:s.y-(u?.position.y||0)},h.push(r)),r}function Pn(t){if(typeof t!="string"||!t.startsWith("#"))return null;try{return decodeURIComponent(t.slice(1))||null}catch{return null}}function Pt(t){if(typeof t!="string"||/[\\s\\u0000-\\u001f\\u007f<>"\`\\\\]/.test(t))return null;let e=Pn(t);return e?.trim()&&!/[\\u0000-\\u001f\\u007f]/.test(e)&&!e.includes(":~:")?e:null}function kt(t){return Pt(t)!==null}var Ue=class extends Error{constructor(n){super(\`Node "\${n}" href must be a non-empty same-document fragment string, such as "#detail".\`);this.nodeId=n}};function ct(t,e,n){let o=Math.min(t.x,e.x),r=Math.max(t.x,e.x),i=Math.min(t.y,e.y),s=Math.max(t.y,e.y);if(r<=n.x||o>=n.x+n.width||s<=n.y||i>=n.y+n.height)return!1;if(t.x===e.x||t.y===e.y)return!0;let a=d=>(e.x-t.x)*(d.y-t.y)-(e.y-t.y)*(d.x-t.x),c=[{x:n.x,y:n.y},{x:n.x+n.width,y:n.y},{x:n.x+n.width,y:n.y+n.height},{x:n.x,y:n.y+n.height}].map(a);return c.some(d=>d>0)&&c.some(d=>d<0)}function Wt(t,e){return t.slice(1).some((n,o)=>e.some(r=>ct(t[o],n,r)))}var hi=20,pi=220;function Lo(t){return[...new Set(t.map(e=>Math.round(e*100)/100))].sort((e,n)=>e-n)}var Rn=[{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}];function Po(t){return t.x>0?0:t.x<0?1:t.y>0?2:3}function Bn(t,e,n,o,r,i=24,s=hi){let a={x:t.x+n.x*i,y:t.y+n.y*i},c={x:e.x+o.x*i,y:e.y+o.y*i},d=Lo([t.x,e.x,a.x,c.x,...r.flatMap(A=>[A.x-s,A.x+A.width+s])]),l=Lo([t.y,e.y,a.y,c.y,...r.flatMap(A=>[A.y-s,A.y+A.height+s])]),u=new Map(d.map((A,P)=>[A,P])),h=new Map(l.map((A,P)=>[A,P])),p=A=>{let P=u.get(Math.round(A.x*100)/100),N=h.get(Math.round(A.y*100)/100);return P===void 0||N===void 0?null:{column:P,row:N}},g=p(a),m=p(c);if(!g||!m)return null;let f=(A,P)=>!r.some(N=>ct(A,P,N));if(!f(t,a)||!f(e,c))return null;let b=d.length*l.length*4,v=(A,P,N)=>(P*d.length+A)*4+N,E=new Float64Array(b).fill(Number.POSITIVE_INFINITY),S=new Int32Array(b).fill(-1),x=Po({x:-o.x,y:-o.y}),y=Po(n),F=v(g.column,g.row,y);E[F]=0;let D=[{key:F,cost:0}],M=-1;for(;D.length;){D.sort((oe,de)=>oe.cost-de.cost||oe.key-de.key);let A=D.shift();if(A.cost>E[A.key])continue;let P=A.key%4,N=(A.key-P)/4,q=N%d.length,H=(N-q)/d.length;if(q===m.column&&H===m.row&&P===x){M=A.key;break}let O={x:d[q],y:l[H]};for(let oe=0;oe<4;oe=oe+1){let de=Rn[oe];if(de.x===-Rn[P].x&&de.y===-Rn[P].y)continue;let De=q+de.x,Fe=H+de.y;if(De<0||De>=d.length||Fe<0||Fe>=l.length)continue;let T={x:d[De],y:l[Fe]};if(!f(O,T))continue;let _=A.cost+Math.hypot(T.x-O.x,T.y-O.y)+(oe===P?0:pi),le=v(De,Fe,oe);_<E[le]&&(E[le]=_,S[le]=A.key,D.push({key:le,cost:_}))}}if(M===-1)return null;let R=[];for(let A=M;A!==-1;A=S[A]){let P=A%4,N=(A-P)/4,q=N%d.length,H=(N-q)/d.length;R.unshift({x:d[q],y:l[H]})}return In([t,...R,e])}function In(t){let e=t.filter((n,o)=>o===0||n.x!==t[o-1].x||n.y!==t[o-1].y);return e.filter((n,o)=>{if(o===0||o===e.length-1)return!0;let r=e[o-1],i=e[o+1];return!(r.x===n.x&&n.x===i.x||r.y===n.y&&n.y===i.y)})}function Ro(t,e,n){let o=n.x-e.x,r=n.y-e.y,i=Math.hypot(o,r),s=u=>i?Math.abs(o*(u.y-e.y)-r*(u.x-e.x))/i:Math.hypot(u.x-e.x,u.y-e.y),c=[...t.slice(1,-1),...t.slice(1).map((u,h)=>({x:(t[h].x+u.x)/2,y:(t[h].y+u.y)/2}))];if(!c.length)return null;let d=Math.max(...c.map(s));if(!d)return null;let l={x:(e.x+n.x)/2,y:(e.y+n.y)/2};return c.filter(u=>s(u)===d).reduce((u,h)=>Math.hypot(h.x-l.x,h.y-l.y)<Math.hypot(u.x-l.x,u.y-l.y)?h:u)}function ge(t){return String(t??"").replace(/\\r\\n/g,\`
\`).split(\`
\`)}var fi="iljI|!.,;:'\`()[]{}/\\\\",bi="tfr",yi="mwMW";function xi(t){return t===" "?.26:fi.includes(t)?.28:bi.includes(t)?.33:yi.includes(t)?.85:t>="0"&&t<="9"?.56:t>="A"&&t<="Z"?.66:.55}function ze(t,e,n=!1){let o=0;for(let r of String(t??""))o+=xi(r);return o*e*(n?1.03:1)}function Bo(t,e,n,o=!1){return e>0?t.flatMap(r=>{if(ze(r,n,o)<=e)return[r];let i=[],s="";for(let a of r.split(/(?<=\\s)/)){let c=s+a;s&&ze(c.trimEnd(),n,o)>e?(i.push(s.trimEnd()),s=a.trimStart()):s=c}return i.push(s.trimEnd()),i.filter((a,c)=>a||!c)}):t}function ye(t,e,n,o,r,i,s="middle"){if(!n.length)return"";let a=n.map((c,d)=>{let l=d===0?"":\` dy="\${o}"\`;return\`<tspan x="\${t}"\${l}>\${k(c)||" "}</tspan>\`}).join("");return\`<text x="\${t}" y="\${e}" text-anchor="\${s}" class="\${r}" fill="\${k(i)}">\${a}</text>\`}function Ce(t,e,n,o,r){let i=t.shape,s=e+o/2,a=n+r/2,c={x:e+12,y:n+12,width:o-24,height:r-24},d={top:{x:s,y:n},right:{x:e+o,y:a},bottom:{x:s,y:n+r},left:{x:e,y:a}},l;if(i==="circle"){let u=Math.min(o,r),h=s-u/2,p=a-u/2,g=u/2;c.x=h+g*.3,c.y=p+g*.3,c.width=g*1.4,c.height=g*1.4,d.top.y=p,d.right.x=h+u,d.bottom.y=p+u,d.left.x=h,l=\`<circle class="docdiagram-node-body" cx="\${s}" cy="\${a}" r="\${g}"/>\`}else if(i==="oval")c.x+=o*.1,c.width-=o*.2,l=\`<ellipse class="docdiagram-node-body" cx="\${s}" cy="\${a}" rx="\${o/2}" ry="\${r/2}"/>\`;else if(i==="database"){let u=Math.min(r*.22,18);c.y+=u/2,c.height-=u,l=\`<path class="docdiagram-node-body" d="M \${e} \${n+u} C \${e} \${n-u/3} \${e+o} \${n-u/3} \${e+o} \${n+u} V \${n+r-u} C \${e+o} \${n+r+u/3} \${e} \${n+r+u/3} \${e} \${n+r-u} Z"/><path class="docdiagram-node-detail" d="M \${e} \${n+u} C \${e} \${n+u*2.3} \${e+o} \${n+u*2.3} \${e+o} \${n+u}" fill="none"/>\`}else if(i==="diamond")c.x+=o*.25,c.y+=r*.25,c.width-=o*.5,c.height-=r*.5,d.top={x:s,y:n},d.right={x:e+o,y:a},d.bottom={x:s,y:n+r},d.left={x:e,y:a},l=\`<polygon class="docdiagram-node-body" points="\${s},\${n} \${e+o},\${a} \${s},\${n+r} \${e},\${a}"/>\`;else if(i==="rhombus"){let u=Math.min(o*.2,r*.6);c.x+=u,c.width-=u*2,d.left.x=e+u/2,d.right.x=e+o-u/2,l=\`<polygon class="docdiagram-node-body" points="\${e+u},\${n} \${e+o},\${n} \${e+o-u},\${n+r} \${e},\${n+r}"/>\`}else if(i==="flattened-hexagon"){let u=Math.min(o*.18,r*.7);c.x+=u,c.width-=u*2,l=\`<polygon class="docdiagram-node-body" points="\${e+u},\${n} \${e+o-u},\${n} \${e+o},\${a} \${e+o-u},\${n+r} \${e+u},\${n+r} \${e},\${a}"/>\`}else if(i==="chevron"){let u=Math.min(o*.16,r*.45);c.x+=u*1.175,c.width-=u*1.35,d.left.x=e+u,l=\`<polygon class="docdiagram-node-body" points="\${e},\${n} \${e+o-u},\${n} \${e+o},\${a} \${e+o-u},\${n+r} \${e},\${n+r} \${e+u},\${a}"/>\`}else if(i==="right-chevron"){let u=Math.min(o*.16,r*.45);c.width-=u,l=\`<polygon class="docdiagram-node-body" points="\${e},\${n} \${e+o-u},\${n} \${e+o},\${a} \${e+o-u},\${n+r} \${e},\${n+r}"/>\`}else if(i==="document"){let u=Math.max(12,Math.min(26,Math.min(o,r)*.18));c.width-=u*.45,c.y+=2,c.height-=2,l=\`<path class="docdiagram-node-body" d="M \${e} \${n} H \${e+o-u} L \${e+o} \${n+u} V \${n+r} H \${e} Z M \${e+o-u} \${n} V \${n+u} H \${e+o}"/>\`}else i==="text"?l=\`<rect class="docdiagram-node-body" x="\${e}" y="\${n}" width="\${o}" height="\${r}"/>\`:l=\`<rect class="docdiagram-node-body" x="\${e}" y="\${n}" width="\${o}" height="\${r}" rx="12"/>\`;return{bodyMarkup:l,textBounds:c,anchors:d}}function Dt(t,e,n,o,r){let i,s;typeof t=="number"?(i={x:t,y:e,width:n||0,height:o||0},s=r):(i=t,s=e);let a=20,c=15,d=Bo(ge(s.label),i.width,16,!0),l=s.subtitle?Bo(ge(s.subtitle),i.width,13):[],u=l.length?6:0,h=d.length*a,p=l.length*c,g=h+u+p,m=s.textHAlign||"center",f=m==="left"?i.x:m==="right"?i.x+i.width:i.x+i.width/2,b=m==="left"?"start":m==="right"?"end":"middle",v=i.y+i.height/2,E=s.textVAlign==="top"?i.y:v-g/2;return{centerX:f,textAnchor:b,labelLines:d,subtitleLines:l,labelLineHeight:a,subtitleLineHeight:c,labelStartY:E+a*.72,subtitleStartY:E+h+u+c*.72}}function Ut(t,e,n,o="solid",r="#ffffff"){let i=(a,c,d,l="",u=!1)=>t.bodyMarkup.replace('class="docdiagram-node-body"',\`class="\${u?"docdiagram-node-stroke-gap":"docdiagram-node-body"}"\`).replace("/>",\` fill="\${k(a)}" stroke="\${k(c)}" stroke-width="\${d}"\${l}/>\`).replace('class="docdiagram-node-detail"',\`class="docdiagram-node-detail\${u?" docdiagram-node-stroke-gap":""}" stroke="\${k(c)}" stroke-width="\${d}"\${l}\`),s=o==="dotted"?' stroke-linecap="round" stroke-dasharray="1 6"':o==="dashed"?' stroke-dasharray="8 6"':"";return o==="double"?i(e.fill||"",e.stroke||"",n*3)+i("none",r,n,"",!0):i(e.fill||"",e.stroke||"",n,s)}function Io(t){return{top:{x:0,y:-1},right:{x:1,y:0},bottom:{x:0,y:1},left:{x:-1,y:0}}[t]}function ne(t){return\`\${t.x} \${t.y}\`}function qo(t){let e=t.slice(1).map((r,i)=>{let s=t[i];return{start:s,end:r,length:Math.hypot(r.x-s.x,r.y-s.y)}}),o=e.reduce((r,i)=>r+i.length,0)/2;for(let r of e){if(o<=r.length||r===e[e.length-1]){let i=r.length?o/r.length:0;return{x:r.start.x+(r.end.x-r.start.x)*i,y:r.start.y+(r.end.y-r.start.y)*i}}o-=r.length}return t[0]}function qn(t,e){return Math.min(Math.max(Math.abs(e.x-t.x),Math.abs(e.y-t.y),80)/2,140)}var wi={along:t=>t.x,cross:t=>t.y,point:(t,e)=>({x:t,y:e})},Ei={along:t=>t.y,cross:t=>t.x,point:(t,e)=>({x:e,y:t})},$t=24;function Si(t,e,n,o,r,i){let s=r.along(t),a=r.cross(t),c=r.along(e),d=r.cross(e),l=r.along(n),u=r.cross(o);if(Math.sign(c-s)===l&&Math.sign(a-d)===u)return[t,r.point(c,a),e];let h=Math.sign(c-s)===l?(s+c)/2:s+l*i,p=Math.sign(a-d)===u?(a+d)/2:d+u*i;return[t,r.point(h,a),r.point(h,p),r.point(c,p),e]}function vi(t,e,n,o,r,i){let s=r.along(t),a=r.cross(t),c=r.along(e),d=r.cross(e),l=r.along(n),u=r.along(o),h=Math.sign(c-s)===l;if(l===-u&&h)return a===d?[t,e]:[t,r.point((s+c)/2,a),r.point((s+c)/2,d),e];if(l===u&&Math.abs(a-d)>=$t){let b=l>0?Math.max(s,c)+$t:Math.min(s,c)-$t;return[t,r.point(b,a),r.point(b,d),e]}let p=i*2,g=s+l*p,m=c+u*p;if(g===m)return[t,r.point(g,a),r.point(g,d),e];let f=Math.min(a,d)-p;return[t,r.point(g,a),r.point(g,f),r.point(m,f),r.point(m,d),e]}function ki(t,e,n,o){if(t.x===e.x&&t.y===e.y)return[t,e];let r=Math.max(Math.abs(e.x-t.x),Math.abs(e.y-t.y)),i=Math.max(r/4,$t),s=n.x!==0,a=s?wi:Ei;return s===(o.x!==0)?vi(t,e,n,o,a,i):Si(t,e,n,o,a,i)}function $i(t,e,n){for(let[o,r]of[[t,e],[t,n],[n,e]]){let i=Math.hypot(r.x-o.x,r.y-o.y);if(i>0)return{x:(r.x-o.x)/i,y:(r.y-o.y)/i}}return{x:1,y:0}}function Qe(t,e,n,o,r="orthogonal",i,s){let a=Io(n),c=Io(o),d=a.x!==0,l=c.x!==0;if(!i&&s?.length&&r!=="orthogonal"&&Wt([t,e],s))for(let m of[20,60,120]){let f=Bn(t,e,a,c,s,$t,m),b=f&&Ro(f,t,e);if(!b)continue;let v=Qe(t,e,n,o,r,b);if(!Wt(Bt(v.path),s)){i=b;break}}let u,h,p,g;if(i&&r==="straight")u=\`M \${ne(t)} L \${ne(i)} L \${ne(e)}\`,h=i,p={x:i.x-t.x,y:i.y-t.y},g={x:e.x-i.x,y:e.y-i.y};else if(i&&r==="curved"){let m=qn(t,i),f=qn(i,e),b=$i(t,e,i),v={x:t.x+a.x*m,y:t.y+a.y*m},E={x:i.x-b.x*m,y:i.y-b.y*m},S={x:i.x+b.x*f,y:i.y+b.y*f},x={x:e.x+c.x*f,y:e.y+c.y*f};u=[\`M \${ne(t)}\`,\`C \${ne(v)} \${ne(E)} \${ne(i)}\`,\`C \${ne(S)} \${ne(x)} \${ne(e)}\`].join(" "),h=i,p={x:v.x-t.x,y:v.y-t.y},g={x:e.x-x.x,y:e.y-x.y}}else if(i){let f=(i.x-t.x)*a.x+(i.y-t.y)*a.y<=0,b=(i.x-e.x)*c.x+(i.y-e.y)*c.y<=0,v={x:t.x+a.x*24,y:t.y+a.y*24},E={x:e.x+c.x*24,y:e.y+c.y*24},S=f?[t,v,d?{x:v.x,y:i.y}:{x:i.x,y:v.y},i]:[t,d?{x:i.x,y:t.y}:{x:t.x,y:i.y},i],x=b?[l?{x:E.x,y:i.y}:{x:i.x,y:E.y},E,e]:[l?{x:i.x,y:e.y}:{x:e.x,y:i.y},e],y=[...S,...x].filter((D,M,R)=>M===0||D.x!==R[M-1].x||D.y!==R[M-1].y);u=\`M \${ne(y[0])}\${y.slice(1).map(D=>\` L \${ne(D)}\`).join("")}\`,h=qo(y),p={x:y[1].x-y[0].x,y:y[1].y-y[0].y};let F=y.slice(-2);g={x:F[1].x-F[0].x,y:F[1].y-F[0].y}}else if(r==="straight")u=\`M \${ne(t)} L \${ne(e)}\`,h={x:(t.x+e.x)/2,y:(t.y+e.y)/2},p={x:e.x-t.x,y:e.y-t.y},g=p;else if(r==="curved"){let m=qn(t,e),f={x:t.x+a.x*m,y:t.y+a.y*m},b={x:e.x+c.x*m,y:e.y+c.y*m};u=\`M \${ne(t)} C \${ne(f)} \${ne(b)} \${ne(e)}\`,h={x:(t.x+3*f.x+3*b.x+e.x)/8,y:(t.y+3*f.y+3*b.y+e.y)/8},p={x:f.x-t.x,y:f.y-t.y},g={x:e.x-b.x,y:e.y-b.y}}else{let m=ki(t,e,a,c),f=m.filter((v,E)=>E===0||v.x!==m[E-1].x||v.y!==m[E-1].y);if(f.length===1&&(f=[t,e]),s?.length&&Wt(f,s)){let v=Bn(t,e,a,c,s,$t);v&&(f=In(v))}u=\`M \${ne(f[0])}\${f.slice(1).map(v=>\` L \${ne(v)}\`).join("")}\`,h=qo(f),p={x:f[1].x-f[0].x,y:f[1].y-f[0].y};let b=f.slice(-2);g={x:b[1].x-b[0].x,y:b[1].y-b[0].y}}return{path:u,midpoint:h,startTangent:p,endTangent:g,hitPath:u}}function zn(t,e){let n=e?13:15;return{x:t.x-n/2,y:t.y-n/2,size:n,radius:e?2:n/2,transform:e?\`rotate(45 \${t.x} \${t.y})\`:""}}function zo(t,e,n,o){let r=zn(n,o),i=o?"Anchored edge waypoint":"Edge waypoint";return\`<rect class="docdiagram-edge-waypoint" data-diagram-index="\${t}" data-edge-index="\${e}" data-anchored="\${o}" x="\${r.x}" y="\${r.y}" width="\${r.size}" height="\${r.size}" rx="\${r.radius}"\${r.transform?\` transform="\${r.transform}"\`:""} aria-label="\${i}"/>\`}function Di(t){let e=Math.max(1,Number(t)||2),n=6+e*2.5,o=Math.max(n*.38,e/2+1);return{size:n,circleRadius:o}}function Rt(t,e,n,o,r){let i=k(o),{size:s,circleRadius:a}=Di(r),c=s/2;return e==="arrow"?\`<marker id="\${t}" markerWidth="\${s}" markerHeight="\${s}" refX="\${s}" refY="\${c}" markerUnits="userSpaceOnUse" orient="\${n==="start"?"auto-start-reverse":"auto"}"><path fill="\${i}" stroke="\${i}" d="M 0 0 L \${s} \${c} L 0 \${s} z"/></marker>\`:e==="circle"?\`<marker id="\${t}" markerWidth="\${s}" markerHeight="\${s}" refX="\${c}" refY="\${c}" markerUnits="userSpaceOnUse"><circle cx="\${c}" cy="\${c}" r="\${a}" fill="\${i}" stroke="\${i}"/></marker>\`:""}function Yt(t,e){let n={x:t.x+t.width/2,y:t.y+t.height/2},o=e.x-n.x,r=e.y-n.y,i=Math.hypot(o,r);if(!Number.isFinite(i)||i<1)return null;let s=Math.max(6,Math.min(Math.min(t.width,t.height)*.28,i*.6,44)),a={x:-r/i*s,y:o/i*s},c=[{x:n.x+a.x,y:n.y+a.y},{x:e.x,y:e.y},{x:n.x-a.x,y:n.y-a.y}],d=[...c.map(p=>p.x),t.x,t.x+t.width],l=[...c.map(p=>p.y),t.y,t.y+t.height],u=Math.min(...d),h=Math.min(...l);return{points:c,polygonPoints:c.map(p=>\`\${p.x},\${p.y}\`).join(" "),bounds:{x:u,y:h,width:Math.max(...d)-u,height:Math.max(...l)-h}}}function Fi(t,e,n){let o=t.indexOf('<path class="docdiagram-node-detail"');return(o===-1?t:t.slice(0,o)).replace('class="docdiagram-node-body"',\`class="\${n}"\`).replace("/>",\` fill="\${e}" stroke="none"/>\`)}function Hn(t){return Fi(t,"#000000","docdiagram-node-callout-mask-body")}function jn(t,e){let n=e*2+8;return{x:t.bounds.x-n,y:t.bounds.y-n,width:t.bounds.width+n*2,height:t.bounds.height+n*2}}function Ho(t,e,n,o,r){let i=!!n.fill&&n.fill!=="none",s=!!n.stroke&&n.stroke!=="none",a=i?n.fill:s?"none":n.text||"none",c=jn(t,o),d=[\`<mask id="\${r}" maskUnits="userSpaceOnUse" x="\${c.x}" y="\${c.y}" width="\${c.width}" height="\${c.height}">\`,\`<rect class="docdiagram-node-callout-mask-region" x="\${c.x}" y="\${c.y}" width="\${c.width}" height="\${c.height}" fill="#ffffff"/>\`,Hn(e),"</mask>"].join(""),l=i?"":\` mask="url(#\${r})"\`;return[d,a==="none"?"":\`<polygon class="docdiagram-node-callout" points="\${t.polygonPoints}" fill="\${k(a||"")}" stroke="none"\${l}/>\`,s?\`<polygon class="docdiagram-node-callout-outline" points="\${t.polygonPoints}" fill="none" stroke="\${k(n.stroke||"")}" stroke-width="\${o}" stroke-linejoin="round" mask="url(#\${r})"/>\`:""].join("")}function Bt(t,e=12){let n=[],o=/-?\\d+(?:\\.\\d+)?/g,r={x:0,y:0};for(let[,i,s]of t.matchAll(/([MLC])\\s*([^MLC]*)/g)){let a=(s.match(o)||[]).map(Number);if(i==="C"){let[c,d,l,u,h,p]=a;for(let g=1;g<=e;g+=1){let m=g/e,f=1-m;n.push({x:f**3*r.x+3*f**2*m*c+3*f*m**2*l+m**3*h,y:f**3*r.y+3*f**2*m*d+3*f*m**2*u+m**3*p})}r={x:h,y:p};continue}for(let c=0;c+1<a.length;c+=2)r={x:a[c],y:a[c+1]},n.push(r)}return n}var Ni=15,Ft=16,On=6;function Ai(t){let e=Bt(t);return e.slice(1).map((n,o)=>({start:e[o],end:n,index:o,length:Math.hypot(n.x-e[o].x,n.y-e[o].y)})).filter(n=>n.length>0).sort((n,o)=>o.length-n.length||n.index-o.index)}function Mi(t,e){return{x:t.x-e,y:t.y-e,width:t.width+e*2,height:t.height+e*2}}function jo(t,e){return t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}function Oo(t,e){let n=Math.max(0,...t.map(i=>ze(i,Ni))),o=t.length*Ft,r={x:e.x-n/2,y:e.y-o/2,width:n,height:o};return{center:e,startY:r.y+Ft*.72,lines:t,bounds:r,clear:!0,conflicts:[]}}function Ti(t,e,n){let o={x:(t.start.x+t.end.x)/2,y:(t.start.y+t.end.y)/2},r=t.end.x-t.start.x,s={x:-(t.end.y-t.start.y)/t.length,y:r/t.length};(s.y>0||s.y===0&&s.x>0)&&(s={x:-s.x,y:-s.y});let a=Math.abs(s.x)*e/2+Math.abs(s.y)*n/2+On;return[{x:o.x+s.x*a,y:o.y+s.y*a},{x:o.x-s.x*a,y:o.y-s.y*a}]}function Ci(t,e,n,o,r){let i=Mi(t.bounds,On),s=[];e&&(t.bounds.x<e.x||t.bounds.y<e.y||t.bounds.x+t.bounds.width>e.x+e.width||t.bounds.y+t.bounds.height>e.y+e.height)&&s.push({kind:"canvas"});for(let a of n)jo(i,a.bounds)&&s.push({kind:"node",id:a.id});for(let a of o)jo(i,a.bounds)&&s.push({kind:"edge-label",edgeIndex:a.edgeIndex});for(let a of r)a.segments.some(c=>ct(c.start,c.end,i))&&s.push({kind:"edge-route",edgeIndex:a.edgeIndex});return s}function He(t,e=new Y(t),n={}){let o=t.edges.map(c=>{let d=e.getById(c.source),l=e.getById(c.target);if(!d||!l)return null;let u=Ce(d.node,d.bounds.x,d.bounds.y,d.bounds.width,d.bounds.height).anchors[c.sourceAnchor||"right"],h=Ce(l.node,l.bounds.x,l.bounds.y,l.bounds.width,l.bounds.height).anchors[c.targetAnchor||"left"],p=e.entries.filter(({node:m})=>!e.isRelated(m,d.node)&&!e.isRelated(m,l.node)),g=Qe(u,h,c.sourceAnchor||"right",c.targetAnchor||"left",c.route||"orthogonal",c.waypoint,c.waypoint?void 0:p.map(m=>m.bounds));return{sourceAnchor:u,targetAnchor:h,path:g,label:null}}),r=o.map((c,d)=>c?{edgeIndex:d,segments:Ai(c.path.path)}:null).filter(c=>!!c),i=[],a=n.ignoreCanvas??(t.canvas.auto&&t.edges.some(c=>c.ref!==void 0))?null:{x:0,y:0,width:Number(t.canvas.width)||1e3,height:Number(t.canvas.height)||560};return o.forEach((c,d)=>{let l=t.edges[d];if(!c||!l.label)return;let u=ge(l.label),h=Oo(u,{x:0,y:0}).bounds,p=r.find(v=>v.edgeIndex===d)?.segments||[],g=p.flatMap(v=>Ti(v,h.width,h.height).map(E=>({center:E,hostSegmentIndex:v.index})));g.length||g.push({center:{x:c.path.midpoint.x,y:c.path.midpoint.y-h.height/2-On},hostSegmentIndex:-1});let m=e.entries.map(({node:v,bounds:E})=>({id:v.id,bounds:E})),f=r.filter(v=>v.edgeIndex!==d),b=null;for(let{center:v,hostSegmentIndex:E}of g){let S=Oo(u,v),x=(l.route||"orthogonal")==="curved"?1:0,y=p.filter(F=>E<0||Math.abs(F.index-E)>x);if(S.conflicts=Ci(S,a,m,i,[...f,{edgeIndex:d,segments:y}]),S.clear=S.conflicts.length===0,b||(b=S),S.clear){b=S;break}}c.label=b,b&&i.push({edgeIndex:d,bounds:b.bounds})}),o}var Go={classic:["#1d4ed8","#93c5fd"],fire:["#1e40af","#a5c8ff"],ice:["#0369a1","#7dd3fc"],midnight:["#1e3a8a","#a5b4fc"],paper:["#245a81","#a6c9e5"]};function _e(t,e="Annotation ref"){let n=t;if(typeof t=="object"&&t!==null&&!Array.isArray(t)){let o=t;if(Object.keys(o).some(r=>r!=="label"&&r!=="position"))throw new Error(\`\${e} accepts only label and position fields.\`);if(o.position!==void 0&&!Tt.includes(o.position))throw new Error(\`\${e} position must be one of: \${Tt.join(", ")}.\`);n=o.label}if(!(typeof n=="number"&&Number.isFinite(n))&&!(typeof n=="string"&&n.trim()&&!/[\\u0000-\\u001f\\u007f]/.test(n)))throw new Error(\`\${e} label must be a non-empty single-line string or a finite number.\`)}function je(t){return String(typeof t=="object"?t.label:t)}function It(t){return typeof t=="object"?t.position??"NW":"NW"}function _t(t){let e=je(t);return{width:/^[0-9]{1,2}$/.test(e)?24:Math.max(32,Math.ceil(ze(e,14,!0)+16)),height:24}}function Ye(t,e,n=!1){let o=It(t),r=o.toUpperCase(),i=n||r===o,{width:s,height:a}=_t(t),c=4,d=r.includes("W")?i?e.x-s-c:e.x+c:r.includes("E")?i?e.x+e.width+c:e.x+e.width-s-c:e.x+(e.width-s)/2,l=r.includes("N")?i?e.y-a-c:e.y+c:r.includes("S")?i?e.y+e.height+c:e.y+e.height-a-c:e.y+(e.height-a)/2;return{x:d,y:l,width:s,height:a}}function Gn(t,e){if(!Object.prototype.hasOwnProperty.call(Go,t))throw new Error(\`Unsupported annotation colour scheme: \${t}\`);let n=Go[t];return at(e)==="dark"?{fill:n[1],text:"#10213b"}:{fill:n[0],text:"#ffffff"}}function Xt(t,e=new Y(t),n){let o=[];for(let r of e.entries)r.node.ref!==void 0&&o.push({kind:"node",id:r.node.id,ref:r.node.ref,target:r.bounds,bounds:Ye(r.node.ref,r.bounds)});if(t.edges.some(r=>r.ref!==void 0)){let r=n??He(t,e);t.edges.forEach((i,s)=>{let a=r[s];if(i.ref===void 0||!a)return;let c=a.label?.bounds??{...a.path.midpoint,width:0,height:0};o.push({kind:"edge",index:s,ref:i.ref,target:c,bounds:Ye(i.ref,c,!0)})})}return o}function dt(t,e,n,o){let r=k(je(t)),i=Gn(n,o),s={x:e.x+e.width/2,y:e.y+e.height/2};return\`<g class="docdiagram-annotation-ref" role="img" aria-label="Reference \${r}" pointer-events="none"><title>Reference \${r}</title><rect aria-hidden="true" x="\${e.x}" y="\${e.y}" width="\${e.width}" height="\${e.height}" rx="\${e.height/2}" fill="\${i.fill}" stroke="none"/><text aria-hidden="true" x="\${s.x}" y="\${s.y}" text-anchor="middle" dominant-baseline="central" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="\${i.text}">\${r}</text></g>\`}function Re(t,e){return t.includes(e)}function Li(t){return{x:Number(t.position?.x)||0,y:Number(t.position?.y)||0,width:Number(t.size?.width)||V.width,height:Number(t.size?.height)||V.height}}function Nt(t,e,n=40){return Vo(t,e,n)}function Vn(t,e=40){return Vo(t,null,e,!0)}function Vo(t,e,n=40,o=!1){let r=Number(t.canvas?.width)||1e3,i=Number(t.canvas?.height)||560,s=o||!!t.canvas?.auto,a=new Y(t),c=new Set(a.entries.map(x=>x.node)),d=[...c];e&&!d.includes(e)&&d.push(e);let l=x=>a.getByNode(x)?.bounds||Li(x),u=t.edges.some(x=>x.ref!==void 0),h=()=>{let x=u?He(t,a,{ignoreCanvas:!0}):void 0;return[...d.map(l),...Xt(t,a,x).map(y=>y.bounds),...(x||[]).flatMap(y=>y?.label?[y.label.bounds]:[]),...e&&!c.has(e)&&e.ref!==void 0?[Ye(e.ref,l(e))]:[],...d.filter(y=>y.arrow).map(y=>({x:y.arrow.x,y:y.arrow.y,width:0,height:0})),...(t.edges||[]).filter(y=>y.waypoint).map(y=>({x:y.waypoint.x,y:y.waypoint.y,width:0,height:0}))]},p=h(),g=Math.min(0,...p.map(x=>x.x)),m=Math.min(0,...p.map(x=>x.y)),f=g<0?n-g:0,b=m<0?n-m:0;if(f||b){for(let x of a.entries.filter(y=>y.parent===null)){let y=x.node;y.position={...y.position,x:(Number(y.position?.x)||0)+f,y:(Number(y.position?.y)||0)+b}}for(let x of d)x.arrow&&(x.arrow={x:x.arrow.x+f,y:x.arrow.y+b});for(let x of t.edges||[])x.waypoint&&(x.waypoint={x:x.waypoint.x+f,y:x.waypoint.y+b});a=new Y(t)}let v=h(),E=Math.max(2*n,...v.map(x=>x.x+x.width+n)),S=Math.max(2*n,...v.map(x=>x.y+x.height+n));return t.canvas={...t.canvas,width:s&&v.length?E:Math.max(r+f,E),height:s&&v.length?S:Math.max(i+b,S)},t}function Wo(t,e){return t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}function Pi(t,e="new-node"){let n=i=>i.flatMap(s=>[s.id,...n(s.children||[])]),o=new Set(n(t));if(!o.has(e))return e;let r=2;for(;o.has(\`\${e}-\${r}\`);)r+=1;return\`\${e}-\${r}\`}function Ri(t,e){let n=e.replace(/[^a-z0-9]/gi,"").toLowerCase()||"node",o=1,r="";do r=\`\${n}\${String(o).padStart(2,"0")}\`,o+=1;while(t.has(r));return t.add(r),r}function Bi(t,e,n,o,r){let i=Number(t.canvas?.width)||1e3,s=Number(t.canvas?.height)||560,a=ae(t),c=a||20,d={x:I(r.x,a),y:I(r.y,a)};for(let u=c;u<=Math.max(i,s);u+=c)for(let h of[{x:d.x+u,y:d.y+u},{x:d.x+u,y:d.y-u},{x:d.x-u,y:d.y+u},{x:d.x-u,y:d.y-u}])if(!(h.x<0||h.y<0||h.x+n>i||h.y+o>s)&&!e.entries.some(({bounds:p})=>Wo({...h,width:n,height:o},p)))return h;let l=Math.max(0,...e.entries.map(({bounds:u})=>u.x+u.width));return{x:I(l+c,a),y:0}}function Ii(t){let e=new Y(t),n=Number(t.canvas?.width)||1e3,o=Number(t.canvas?.height)||560,r=ae(t),i={x:I(Math.max(0,(n-V.width)/2),r),y:I(Math.max(0,(o-V.height)/2),r)},s=r||20;for(let a=0;a<=Math.max(n,o);a+=s)for(let c of[{x:i.x+a,y:i.y},{x:i.x-a,y:i.y},{x:i.x,y:i.y+a},{x:i.x,y:i.y-a}])if(!(c.x<0||c.y<0||c.x+V.width>n||c.y+V.height>o)&&!e.entries.some(({bounds:d})=>Wo({...c,width:V.width,height:V.height},d)))return c;return i}function Uo(t){let e={id:Pi(t.nodes),label:V.label,shape:V.shape,position:Ii(t),size:{width:V.width,height:V.height}};return t.nodes.push(e),e}function Zt(t,e){let n=new Y(t),o=n.getById(e);if(!o)return null;let r=new Set(n.entries.map(({node:l})=>l.id)),i=l=>({id:Ri(r,l.shape),label:l.label,...l.href!==void 0?{href:l.href}:{},...l.ref!==void 0?{ref:typeof l.ref=="object"?{...l.ref}:l.ref}:{},shape:l.shape,...l.position?{position:{...l.position}}:{},...l.size?{size:{...l.size}}:{},...l.style?{style:{...l.style}}:{},...l.palette?{palette:l.palette}:{},...l.strokeType?{strokeType:l.strokeType}:{},...l.subtitle!==void 0?{subtitle:l.subtitle}:{},...l.textVAlign!==void 0?{textVAlign:l.textVAlign}:{},...l.textHAlign!==void 0?{textHAlign:l.textHAlign}:{},...l.children?{children:l.children.map(i)}:{}}),s=i(o.node),a=o.bounds,c=Bi(t,n,Number(s.size?.width)||V.width,Number(s.size?.height)||V.height,a),d=o.parent?n.getByNode(o.parent)?.position||{x:0,y:0}:{x:0,y:0};return s.position={x:c.x-d.x,y:c.y-d.y},o.siblings.push(s),Nt(t,s),s}function Yo(t,e){if(e==="")delete t.href;else{if(!kt(e))throw new Error('Node href must be a non-empty same-document fragment string, such as "#detail".');t.href=e}return t}function _o(t,e){return e===""?(delete t.ref,t):(_e(e),t.ref!==void 0&&je(t.ref)===e||(t.ref=typeof t.ref=="object"?{...t.ref,label:e}:e),t)}function Xo(t,e){let n={label:t.ref===void 0?0:typeof t.ref=="object"?t.ref.label:t.ref,position:e};return _e(n),t.ref!==void 0&&(t.ref=n),t}function Ko(t,e,n,o,r){if(!Re(ce,n)||!Re(ce,r))throw new Error("Connector anchors must be supported edge anchors.");let i={source:e,target:o,sourceAnchor:n,targetAnchor:r,route:"orthogonal",end:"arrow"};return t.edges.push(i),i}function Zo(t,e,n,o){return Re(ce,o)&&(e==="source"?(t.source=n,t.sourceAnchor=o):(t.target=n,t.targetAnchor=o)),t}function Jt(t,e){return e<0||e>=t.edges.length?null:t.edges.splice(e,1)[0]}function Qt(t,e){let n=be(t,e);if(!n)return{node:null,deletedEdges:[]};let o=new Set([n.node,...n.node.children||[]].flatMap(function i(s){return[s,...(s.children||[]).flatMap(i)]}).map(i=>i.id)),r=t.edges.filter(i=>o.has(i.source)||o.has(i.target));return n.siblings.splice(n.siblings.indexOf(n.node),1),t.edges=t.edges.filter(i=>!o.has(i.source)&&!o.has(i.target)),t.canvas?.auto&&Vn(t),{node:e,deletedEdges:r}}function en(t,e){return t.label=String(e).trim(),t}function Jo(t,e){return Re(xt,e)&&(t.shape=e),t}function Qo(t,e){return t.subtitle=String(e??"").trim(),t}function er(t,e){return Re(We,e)&&(t.strokeType=e),t}function Wn(t,e,n){return e==="textVAlign"&&(n==="top"||n==="center")&&(t.textVAlign=n),e==="textHAlign"&&(n==="left"||n==="center"||n==="right")&&(t.textHAlign=n),t}function qt(t,e,n){return t.style={...t.style,[e]:n},t}function Un(t,e,n="classic"){if(!Re(Te,e)||!ve(n,"light",e))return t;let{fill:r,stroke:i,text:s,...a}=t.style||{};return Object.keys(a).length?t.style=a:delete t.style,t.palette=e,t}function tr(t){return t==="document"?Cn:Tn}function Yn(t){return{position:{x:Number(t.position?.x)||0,y:Number(t.position?.y)||0},size:{width:Number(t.size?.width)||V.width,height:Number(t.size?.height)||V.height},childPositions:new Map((t.children||[]).map(e=>[e,{x:Number(e.position?.x)||0,y:Number(e.position?.y)||0}]))}}function nr(t,e,n,o,r,i=Yn(e)){let s=ae(t),a=tr(e.shape),c=n.endsWith("left"),d=n.startsWith("top"),l=Vt(i.size.width+(c?-o:o),a.width,s),u=Vt(i.size.height+(d?-r:r),a.height,s);if(e.shape==="circle"){let m=Math.max(l,u);l=m,u=m}let h={...e.position,x:c?i.position.x+i.size.width-l:i.position.x,y:d?i.position.y+i.size.height-u:i.position.y},p=i.position.x-h.x,g=i.position.y-h.y;for(let m of e.children||[]){let f=i.childPositions.get(m)||m.position||{x:0,y:0};m.position={...m.position,x:f.x+p,y:f.y+g}}return e.position=h,e.size={...e.size,width:l,height:u},e}function _n(t,e,n,o){let r=ae(t),i=tr(e.shape),s=n==="width"?i.width:i.height,a=Vt(Number(o)||s,s,r);return e.size=e.shape==="circle"?{...e.size,width:a,height:a}:{...e.size,[n]:a},e}function tn(t,e){return t.label=String(e).trim(),t}function or(t,e){return Re(wt,e)&&(t.route=e),t}function rr(t,e){return Re(We,e)&&(t.strokeType=e),t}function ir(t){return delete t.waypoint,t}function Xn(t,e){return t.arrow={x:e.x,y:e.y},t}function qi(t){return delete t.arrow,t}function ar(t,e){if(e.arrow)return qi(e);let n=vt(t,e),o=ae(t),r=Xn(e,{x:I(n.x+n.width/2,o),y:I(n.y+n.height+Math.max(60,n.height*.75),o)});return Nt(t,e),r}function Kn(t,e,n){return Re(ce,n)&&(e==="source"?t.sourceAnchor=n:t.targetAnchor=n),t}function Zn(t,e,n){return t.style={...t.style,[e]:n},t}function Jn(t,e){let n=Math.max(1,Math.round(Number(e))||1);return t.style={...t.style,strokeWidth:n},t}function sr(t,e){return t.start=Re(Le,e)?e:Ct.start,t}function cr(t,e){return t.end=Re(Le,e)?e:Ct.end,t}function Kt(t){return Math.min(Math.max(25,Number(t)||100),800)}function nn(t,e=0){return e===1?t*16:e===2?t*400:t}function dr(t,e,n=0){return Kt(Kt(t)*Math.exp(-nn(e,n)*.0025))}var lr=new WeakSet;function ur(t){return lr.has(t)}var Qn={stageGap:120,siblingGap:60};function et(t){return{width:Number(t.size?.width)||V.width,height:Number(t.size?.height)||V.height}}function eo(t){return Number.isFinite(t.position?.x)&&Number.isFinite(t.position?.y)}function to(t){if(t==null)return null;if(typeof t=="string")return{direction:t,...Qn};let e=t;return{direction:e.direction,stageGap:e.stageGap===void 0?Qn.stageGap:Number(e.stageGap),siblingGap:e.siblingGap===void 0?Qn.siblingGap:Number(e.siblingGap)}}function zi(t){return t==="right"||t==="left"}function no(t){return{right:{source:"right",target:"left"},left:{source:"left",target:"right"},down:{source:"bottom",target:"top"},up:{source:"top",target:"bottom"}}[t]}function Hi(t,e,n){let o=new Set(t),r=no(n),i=e.filter(m=>o.has(m.source)&&o.has(m.target)&&m.source!==m.target),s=i.filter(m=>!(m.sourceAnchor===r.target&&m.targetAnchor===r.source)),a=s.length?s:i,c=new Map;for(let m of a)c.set(m.source,[...c.get(m.source)||[],m.target]);let d=[],l=new Map,u=m=>{l.set(m,"visiting");for(let f of c.get(m)||[])l.get(f)!=="visiting"&&(d.push({source:m,target:f}),l.has(f)||u(f));l.set(m,"done")};for(let m of t)l.has(m)||u(m);let h=new Map;for(let m of d)h.set(m.target,[...h.get(m.target)||[],m.source]);let p=new Map,g=(m,f)=>{let b=p.get(m);if(b!==void 0)return b;if(f.has(m))return 0;f.add(m);let v=Math.max(0,...(h.get(m)||[]).map(E=>g(E,f)+1));return p.set(m,v),v};for(let m of t)g(m,new Set);return p}function ji(t,e,n=4){let o=s=>{let a=new Map;for(let c of e){let[d,l]=s?[c.target,c.source]:[c.source,c.target];a.set(d,[...a.get(d)||[],l])}return a},r=o(!0),i=o(!1);for(let s=0;s<n;s+=1){let a=s%2===0,c=a?t.map((d,l)=>l):t.map((d,l)=>t.length-1-l);for(let d of c){let l=a?d-1:d+1,u=t[l];if(!u)continue;let h=new Map(u.map((f,b)=>[f,b])),p=a?r:i,g=new Map;for(let f of t[d]){let b=(p.get(f)||[]).map(v=>h.get(v)).filter(v=>v!==void 0).sort((v,E)=>v-E);g.set(f,b.length?b[b.length-1>>1]:Number.NaN)}let m=new Map(t[d].map((f,b)=>[f,b]));t[d]=[...t[d]].sort((f,b)=>{let v=g.get(f),E=g.get(b);return Number.isNaN(v)||Number.isNaN(E)||v===E?m.get(f)-m.get(b):v-E})}}}function Oi(t,e,n,o,r,i,s,a=4){let c=m=>{let f=et(o.get(m));return r?f.height:f.width},d=t.map(m=>m.reduce((f,b,v)=>f+c(b)+(v?i:0),0)),l=Math.max(0,...d),u=new Map;t.forEach((m,f)=>{let b=(l-d[f])/2;for(let v of m)u.set(v,b),b+=c(v)+i});let h=new Map;for(let m of n){let f=e.get(m.source),b=e.get(m.target);f===void 0||b===void 0||Math.abs(f-b)!==1||(h.set(m.source,[...h.get(m.source)||[],m.target]),h.set(m.target,[...h.get(m.target)||[],m.source]))}let p=(m,f)=>{let b=t[m],v=b.map(x=>{let y=(h.get(x)||[]).filter(D=>e.get(D)===f).map(D=>u.get(D)+c(D)/2).sort((D,M)=>D-M);return(y.length?(y[y.length-1>>1]+y[y.length>>1])/2:u.get(x)+c(x)/2)-c(x)/2}),E=[...v];for(let x=1;x<E.length;x+=1)E[x]=Math.max(E[x],E[x-1]+c(b[x-1])+i);for(let x=E.length-2;x>=0;x-=1)E[x]=Math.min(E[x],E[x+1]-c(b[x])-i);let S=E.length?v.reduce((x,y,F)=>x+y-E[F],0)/E.length:0;b.forEach((x,y)=>u.set(x,E[y]+S))};for(let m=0;m<a;m+=1)if(m%2===0)for(let b=1;b<t.length;b+=1)p(b,b-1);else for(let b=t.length-2;b>=0;b-=1)p(b,b+1);let g=u.size?Math.min(...u.values()):0;if(g!==0)for(let[m,f]of u)u.set(m,f-g);for(let m of t){let f=Number.NEGATIVE_INFINITY;for(let b of m){let v=I(u.get(b),s),E=f+i;v<E&&(v=s?Math.ceil(E/s)*s:Math.ceil(E)),u.set(b,v),f=v+c(b)}}return u}function Gi(t,e,n,o,r){let i=t.map(v=>v.id),s=Hi(i,e,n.direction),a=Math.max(0,...s.values())+1,c=Array.from({length:a},()=>[]);for(let v of i)c[s.get(v)||0].push(v);let d=e.filter(v=>s.has(v.source)&&s.has(v.target));ji(c,d);let l=new Map(t.map(v=>[v.id,v])),u=zi(n.direction),h=n.direction==="left"||n.direction==="up",p=c.map(v=>Math.max(0,...v.map(E=>{let S=et(l.get(E));return u?S.width:S.height}))),g=Oi(c,s,d,l,u,n.siblingGap,r),m=0,f=p.map(v=>{let E=m;return m+=v+n.stageGap,E}),b=Math.max(0,m-n.stageGap);c.forEach((v,E)=>{for(let S of v){let x=l.get(S),y=et(x),F=h?b-f[E]-(u?y.width:y.height):f[E],D=g.get(S);x.position={x:I(o.x+(u?F:D),r),y:I(o.y+(u?D:F),r)}}})}function mr(t,e,n=0){return t.x-n<e.x+e.width&&t.x+t.width+n>e.x&&t.y-n<e.y+e.height&&t.y+t.height+n>e.y}function Vi(t,e,n,o,r){let i=new Map(e.filter(eo).map(m=>[m.id,m])),s=et(t),a=no(o.direction),c=[];for(let m of n){let f=m.source===t.id,b=m.target===t.id;if(f===b)continue;let v=i.get(f?m.target:m.source);if(!v)continue;let E=(f?m.sourceAnchor:m.targetAnchor)||(f?a.source:a.target),S={...v.position,...et(v)};E==="left"?c.push({position:{x:S.x+S.width+o.stageGap,y:S.y+(S.height-s.height)/2},axis:"x",sign:1}):E==="right"?c.push({position:{x:S.x-o.stageGap-s.width,y:S.y+(S.height-s.height)/2},axis:"x",sign:-1}):E==="top"?c.push({position:{x:S.x+(S.width-s.width)/2,y:S.y+S.height+o.stageGap},axis:"y",sign:1}):E==="bottom"&&c.push({position:{x:S.x+(S.width-s.width)/2,y:S.y-o.stageGap-s.height},axis:"y",sign:-1})}if(!c.length)return null;let d=c[0].axis,l=c.filter(m=>m.axis===d),h=l[0].sign>0?Math.max(...l.map(m=>m.position[d])):Math.min(...l.map(m=>m.position[d])),p=d==="x"?"y":"x",g=c.reduce((m,f)=>m+f.position[p],0)/c.length;return{position:{x:I(d==="x"?h:g,r),y:I(d==="y"?h:g,r)},acrossAxis:p}}function Wi(t,e,n,o,r,i){let s=r||20,a=Math.min(i,20);for(let c=0;c<=200;c+=1)for(let d of c?[c*s,-c*s]:[0]){let l={...t,[o]:t[o]+d},u={...l,...e};if(!n.some(h=>mr(u,h,a)))return{x:I(l.x,r),y:I(l.y,r)}}return t}function Ui(t,e,n,o,r){let i=o||20,s=Math.min(r,20),a={x:I(n.x,o),y:I(n.y,o)},c=Math.max(n.y,...e.map(d=>d.y+d.height));for(let d=0;d<=2e3;d+=i)for(let l of d?[{x:a.x+d,y:a.y},{x:a.x,y:a.y+d}]:[a])if(!e.some(u=>mr({...l,...t},u,s)))return l;return{x:a.x,y:I(c+i,o)}}function Yi(t,e,n,o,r){let i=t.filter(s=>!eo(s));if(!i.length)return!1;if(i.length===t.length)return Gi(t,e,n,o,r),!0;for(let s of i){let a=et(s),c=t.filter(l=>l!==s&&eo(l)).map(l=>({...l.position,...et(l)})),d=Vi(s,t,e,n,r);s.position=d?Wi(d.position,a,c,d.acrossAxis,r,n.siblingGap):Ui(a,c,o,r,n.siblingGap)}return!0}function _i(t,e){let n=e.x+e.width/2-(t.x+t.width/2),o=e.y+e.height/2-(t.y+t.height/2),r=Math.abs(n)-(t.width+e.width)/2,i=Math.abs(o)-(t.height+e.height)/2;return r<=0&&i<=0?null:r>=i?n>=0?{source:"right",target:"left"}:{source:"left",target:"right"}:o>=0?{source:"bottom",target:"top"}:{source:"top",target:"bottom"}}function Xi(t,e){let n=t.edges||[];if(!n.some(i=>!i.sourceAnchor||!i.targetAnchor))return!1;let o=no(e.direction),r=new Y(t);for(let i of n){if(i.sourceAnchor&&i.targetAnchor)continue;let s=r.getById(i.source)?.bounds,a=r.getById(i.target)?.bounds,c=s&&a&&i.source!==i.target?_i(s,a):null;i.sourceAnchor=i.sourceAnchor||c?.source||o.source,i.targetAnchor=i.targetAnchor||c?.target||o.target}return!0}function on(t){let e=to(t.layout);if(!e)return t;let n=ae(t),o=40,r=!1,i=(s,a)=>{for(let c of s)if(c.children?.length&&(i(c.children,{x:o,y:o}),!c.size)){let d=c.children.reduce((l,u)=>{let h=et(u);return{width:Math.max(l.width,(Number(u.position?.x)||0)+h.width),height:Math.max(l.height,(Number(u.position?.y)||0)+h.height)}},{width:0,height:0});c.size={width:I(d.width+o,n),height:I(d.height+o,n)}}r=Yi(s,t.edges||[],e,a,n)||r};return i(t.nodes||[],{x:o,y:o}),r=Xi(t,e)||r,r&&lr.add(t),t}var At={horizontalAspectRatio:4,verticalAspectRatio:5,minimumNodeCount:8,minimumDominantPath:8,minimumPathCoverage:.75,maximumBranchingRatio:.2};function gr(t){return{width:Number(t.size?.width)||V.width,height:Number(t.size?.height)||V.height}}function Ki(t){if(t.nodes.some(g=>g.children?.length))return null;let e=t.nodes.map(g=>g.id),n=new Map(e.map((g,m)=>[g,m])),o=new Set(e),r=new Map(e.map(g=>[g,[]])),i=new Map(e.map(g=>[g,[]]));for(let g of t.edges){if(!o.has(g.source)||!o.has(g.target)||g.source===g.target)return null;i.get(g.source).push(g.target),r.get(g.target).push(g.source)}let s=new Set,a=e.length?[e[0]]:[];for(;a.length;){let g=a.pop();s.has(g)||(s.add(g),a.push(...r.get(g),...i.get(g)))}if(s.size!==e.length)return null;let c=new Map(e.map(g=>[g,r.get(g).length])),d=e.filter(g=>c.get(g)===0),l=[];for(;d.length;){d.sort((m,f)=>n.get(m)-n.get(f));let g=d.shift();l.push(g);for(let m of i.get(g)){let f=c.get(m)-1;c.set(m,f),f===0&&d.push(m)}}if(l.length!==e.length)return null;let u=new Map;for(let g of l){let m=r.get(g).map(f=>u.get(f)||[f]);m.sort((f,b)=>b.length-f.length||n.get(f[0])-n.get(b[0])),u.set(g,[...m[0]||[],g])}let h=[...u.values()].sort((g,m)=>m.length-g.length||n.get(g[0])-n.get(m[0]))[0]||[],p=e.filter(g=>r.get(g).length>1||i.get(g).length>1).length;return{order:l,dominantPath:h,incoming:r,outgoing:i,branchingNodes:p}}function hr(t){let e=new Y(t).entries;if(!e.length)return null;let n=Math.min(...e.map(({bounds:s})=>s.x)),o=Math.min(...e.map(({bounds:s})=>s.y)),r=Math.max(...e.map(({bounds:s})=>s.x+s.width)),i=Math.max(...e.map(({bounds:s})=>s.y+s.height));return{width:r-n,height:i-o}}function pr(t){let e=t.nodes.length;if(e<At.minimumNodeCount||t.nodes.some(l=>!l.position))return null;let n=Ki(t),o=hr(t);if(!n||!o||!o.width||!o.height)return null;let r=o.width>=o.height?"horizontal":"vertical",i=r==="horizontal"?o.width/o.height:o.height/o.width,s=r==="horizontal"?At.horizontalAspectRatio:At.verticalAspectRatio,a=n.dominantPath.length,c=a/e,d=n.branchingNodes/e;return i<s||a<At.minimumDominantPath||c<At.minimumPathCoverage||d>At.maximumBranchingRatio?null:{graph:n,analysis:{direction:r,width:Math.round(o.width),height:Math.round(o.height),aspectRatio:i,dominantPathLength:a,nodeCount:e,pathCoverage:c,branchingNodes:n.branchingNodes,reason:\`the dominant path contains \${a} of \${e} nodes (\${Math.round(c*100)}%) with \${n.branchingNodes} branching node\${n.branchingNodes===1?"":"s"}\`}}}function fr(t){return pr(t)?.analysis||null}function Zi(t){let e=new Map(t.dominantPath.map((r,i)=>[r,i])),n=new Map;for(let r of t.order){let i=e.get(r),s=Math.max(-1,...t.incoming.get(r).map(a=>n.get(a)??-1));n.set(r,i??s)}let o=new Map(t.order.map((r,i)=>[r,i]));return[...t.order].sort((r,i)=>n.get(r)-n.get(i)||+!e.has(r)-+!e.has(i)||o.get(r)-o.get(i))}function Ji(t,e){let n=e.x-t.x,o=e.y-t.y;return Math.abs(n)>=Math.abs(o)?n>=0?{source:"right",target:"left"}:{source:"left",target:"right"}:o>=0?{source:"bottom",target:"top"}:{source:"top",target:"bottom"}}function rn(t){let e=pr(t);if(!e)return null;let{analysis:n,graph:o}=e,r=ae(t),i=typeof t.layout=="object"?t.layout:void 0,s=Number(i?.stageGap)||120,a=Number(i?.siblingGap)||60,c=new Map(t.nodes.map(S=>[S.id,S])),d=Math.max(...t.nodes.map(S=>gr(S).width)),l=Math.max(...t.nodes.map(S=>gr(S).height)),u=n.direction==="horizontal",h=u?d+s:l+s,p=u?l+a:d+a,g=Zi(o),m=Math.max(3,Math.min(Math.ceil(g.length/2),Math.ceil(Math.sqrt(g.length*p/h)))),f=I(40,r);g.forEach((S,x)=>{let y=Math.floor(x/m),F=x%m,D=c.get(S);D.position=u?{x:I(f+F*h,r),y:I(f+y*p,r)}:{x:I(f+y*p,r),y:I(f+F*h,r)}});let b=f+m*h-s+Math.max(s/2,40),v=new Map(g.map((S,x)=>[S,x]));for(let S of t.edges){let x=c.get(S.source),y=c.get(S.target);if(!x?.position||!y?.position)continue;let F=v.get(x.id),D=v.get(y.id),M=Math.floor(F/m),R=Math.floor(D/m);if(delete S.waypoint,S.route="orthogonal",M!==R)u?(S.sourceAnchor="right",S.targetAnchor="top",S.waypoint={x:I(b,r),y:I(y.position.y-a/2,r)}):(S.sourceAnchor="bottom",S.targetAnchor="left",S.waypoint={x:I(y.position.x-a/2,r),y:I(b,r)});else{let A=Ji(x.position,y.position);S.sourceAnchor=A.source,S.targetAnchor=A.target}}t.layout=u?"right":"down";let E=hr(t);return t.canvas.auto||(t.canvas.width=Math.max(Number(t.canvas.width)||0,Math.ceil(E.width+f*2)),t.canvas.height=Math.max(Number(t.canvas.height)||0,Math.ceil(E.height+f*2))),{analysis:n,before:{width:n.width,height:n.height,aspectRatio:n.aspectRatio},after:{width:Math.round(E.width),height:Math.round(E.height),aspectRatio:Math.max(E.width/E.height,E.height/E.width)}}}var br=new WeakSet;function yr(t){return br.has(t)}function xr(t,e){for(let n of t)e(n),xr(n.children||[],e)}function an(t,e){if(!t.layout)throw new Error("Relayout requires a layout direction on the diagram.");xr(t.nodes,n=>{(e!=="unpinned"||!n.pinned)&&delete n.position});for(let n of t.edges)delete n.sourceAnchor,delete n.targetAnchor,delete n.route,delete n.waypoint;if(on(t),e==="autowrap"){let n=t.layout;rn(t)&&typeof n=="object"&&(t.layout={...n,direction:typeof t.layout=="string"?t.layout:t.layout.direction})}return delete t.relayout,br.add(t),t}var Qi=["nodes","edges","participants","messages","activations","notes","groups"],Er=["version","id","caption","description","theme"],ea=[...Er,"type","layout","relayout","styles","canvas","nodes","edges"],ta=[...Er,"type","canvas","participants","messages","activations","notes","groups"],na=["id","label","href","ref","shape","class","position","pinned","size","style","strokeType","palette","subtitle","textVAlign","textHAlign","arrow","children"],oa=["source","target","class","sourceAnchor","targetAnchor","route","strokeType","label","ref","style","start","end","waypoint"],ra=["palette","style"],ia=["direction","stageGap","siblingGap"],ro=["fill","stroke","strokeWidth","text"],aa=["stroke","strokeWidth","text"],sa=["id","label","kind","palette","style","size"],ca=["from","to","label","ref","style"],da=["participant","from","to"],la=["at","after","label","palette","style","size"],ua=["label","from","to"],ma=["width","height","participantSpacing","participantSize"];function k(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Be(t){let e=t.trim();if(e.startsWith('"')&&e.endsWith('"'))try{return JSON.parse(e)}catch{throw new Error(\`Invalid quoted scalar: \${e}\`)}if(e.startsWith("'")&&e.endsWith("'"))return e.slice(1,-1);if(/^-?\\d+(\\.\\d+)?$/.test(e))return Number(e);if(e==="true"||e==="false")return e==="true";if(e.startsWith("[")&&e.endsWith("]"))try{return JSON.parse(e)}catch{throw new Error(\`Invalid inline list: \${e}\`)}if(e.startsWith("{")&&e.endsWith("}")){let n=e.slice(1,-1).trim();if(!n)return{};let o=[],r=0,i="",s=0,a=!0;for(let d=0;d<n.length;d+=1){let l=n[d];if(i){l==="\\\\"&&i==='"'?d+=1:l===i&&(i="");continue}(l==='"'||l==="'")&&a?i=l:l==="{"||l==="["?s+=1:l==="}"||l==="]"?s-=1:l===","&&s===0&&(o.push(n.slice(r,d)),r=d+1),/\\s/.test(l)||(a=":,[{".includes(l))}if(i||s!==0)throw new Error(\`Invalid inline mapping: \${e}\`);o.push(n.slice(r));let c={};for(let d of o){let l=d.indexOf(":");if(l===-1)throw new Error(\`Invalid inline mapping: \${e}\`);let u=d.slice(0,l).trim();if(Object.prototype.hasOwnProperty.call(c,u))throw new Error(\`Duplicate inline mapping field: \${u}\`);c[u]=Be(d.slice(l+1))}return c}return e}var ga=/^(\\s*)((?:- )?)([A-Za-z_][\\w-]*):\\s*\\|([+-])?\\s*$/;function ha(t){let e=[],n=0;for(;n<t.length;){let o=t[n],r=o.match(ga);if(!r){e.push(o),n+=1;continue}let[,i,s,a,c]=r,d=n+1,l=null;for(;d<t.length;){let m=t[d];if(m.trim()===""){d+=1;continue}l=m.length-m.trimStart().length;break}if(l===null||l<=i.length){e.push(\`\${i}\${s}\${a}: ""\`),n+=1;continue}let u=[],h=n+1,p=0;for(;h<t.length;){let m=t[h];if(m.trim()===""){u.push(""),p+=1,h+=1;continue}if(m.length-m.trimStart().length<l)break;u.push(m.slice(l)),p=0,h+=1}p>0&&c!=="+"&&(u.length-=p-1);let g=u.join(\`
\`);e.push(\`\${i}\${s}\${a}: \${JSON.stringify(g)}\`),n=h}return e}function we(t,e="classic"){let o=ha(t.replace(/\\r\\n/g,\`
\`).split(\`
\`)).filter(p=>p.trim()&&!p.trimStart().startsWith("#"));for(let p of o){if(p.trimStart()!==p||!p.trimEnd().endsWith(":"))continue;let g=p.trim().slice(0,-1);if(g!=="canvas"&&g!=="styles"&&g!=="layout"&&!Qi.includes(g))throw new Error(\`Unsupported diagram section: \${g}\`)}let r=0,i=p=>p.length-p.trimStart().length,s=p=>p.trim().match(/^([^:]+):\\s*(.*)$/),a=p=>p.trim().match(/^- ([^:]+):\\s*(.*)$/),c=p=>r>=o.length||i(o[r])<=p?{}:o[r].trimStart().startsWith("- ")?l(i(o[r])):d(i(o[r])),d=p=>{let g={};for(;r<o.length&&i(o[r])===p;){let m=o[r],f=s(m);if(!f)throw new Error(\`Cannot parse diagram line: \${m}\`);r+=1,g[f[1]]=f[2]?Be(f[2]):c(p)}return g},l=p=>{let g=[];for(;r<o.length&&i(o[r])===p;){let m=o[r],f=a(m);if(!f)throw new Error(\`Cannot parse diagram line: \${m}\`);r+=1;let b={[f[1]]:f[2]?Be(f[2]):c(p)};for(;r<o.length&&i(o[r])>p;){let v=i(o[r]),E=s(o[r]);if(!E)throw new Error(\`Cannot parse diagram line: \${o[r]}\`);r+=1,b[E[1]]=E[2]?Be(E[2]):c(v)}g.push(b)}return g},u=d(0);if(!u.type)throw new Error(\`Diagram type is required and must be one of: \${An.join(", ")}.\`);if(typeof u.type!="string"||!An.includes(u.type))throw new Error(\`Unsupported diagram type: \${String(u.type)}\`);let h=u.type==="flowchart"?ea:ta;return xe(u,h,\`\${u.type} diagram\`),pa(u),u.type==="flowchart"?fa(u,e):ba(u,e)}function pa(t){if(t.version!==void 0&&(!Number.isInteger(t.version)||Number(t.version)<1))throw new Error("Diagram version must be a positive integer.");for(let e of["id","caption","description"])if(t[e]!==void 0&&typeof t[e]!="string")throw new Error(\`Diagram \${e} must be a string.\`);if(t.theme!==void 0&&(typeof t.theme!="string"||!jt.includes(t.theme)))throw new Error(\`Unsupported diagram theme: \${String(t.theme)}\`)}function fa(t,e="classic"){if(t.canvas==="auto"&&(t.canvas={auto:!0}),t.canvas=t.canvas||{},typeof t.canvas!="object"||Array.isArray(t.canvas))throw new Error('Flowchart canvas must be a mapping or the value "auto".');if(t.canvas.auto!==void 0&&typeof t.canvas.auto!="boolean")throw new Error("Flowchart canvas.auto must be true or false.");return Array.isArray(t.nodes)||(t.nodes=[]),Array.isArray(t.edges)||(t.edges=[]),wa(t,e),t.relayout?an(t,t.relayout):on(t),t.canvas.auto&&Vn(t),t}function ba(t,e="classic"){return Ea(t,e),t}function xe(t,e,n){for(let o of Object.keys(t||{}))if(!e.includes(o))throw new Error(\`Unsupported \${n} field: \${o}\`)}function sn(t,e,n){if(t){for(let o of Object.keys(t))if(!e.includes(o))throw new Error(\`Unsupported \${n} style field: \${o}\`)}}function oo(t,e){let n=e.charAt(0).toUpperCase()+e.slice(1);if(typeof t!="object"||t===null||Array.isArray(t))throw new Error(\`\${n} must be a mapping.\`);let o=t;if(!Number.isFinite(o.x)||!Number.isFinite(o.y))throw new Error(\`\${n} requires finite x and y coordinates.\`);xe(t,["x","y"],e)}function ya(t){if(t.styles===void 0)return new Set;if(typeof t.styles!="object"||Array.isArray(t.styles))throw new Error("Diagram styles must be a mapping of names to style definitions.");for(let[e,n]of Object.entries(t.styles)){if(typeof n!="object"||n===null||Array.isArray(n))throw new Error(\`Style "\${e}" must be a mapping.\`);if(xe(n,ra,\`style "\${e}"\`),n.palette!==void 0&&(typeof n.palette!="string"||!Te.includes(n.palette)))throw new Error(\`Unsupported palette in style "\${e}": \${String(n.palette)}\`);if(n.style?.width!==void 0)throw new Error(\`Style "\${e}" style.width is not supported; use style.strokeWidth.\`);if(sn(n.style,ro,\`style "\${e}"\`),n.palette===void 0&&!Object.keys(n.style||{}).length)throw new Error(\`Style "\${e}" declares no palette or style values.\`)}return new Set(Object.keys(t.styles))}function xa(t){if(t.layout===void 0)return;if(typeof t.layout=="object"&&!Array.isArray(t.layout)){xe(t.layout,ia,"layout");for(let n of["stageGap","siblingGap"]){let o=t.layout[n];if(o!==void 0&&(typeof o!="number"||!Number.isFinite(o)||o<0))throw new Error(\`Layout \${n} must be a number of zero or more.\`)}}else if(typeof t.layout!="string")throw new Error("Layout must be a direction or a mapping.");let e=to(t.layout);if(!e||!Mn.includes(e.direction))throw new Error(\`Unsupported layout direction: \${String(e?.direction)}\`)}function wa(t,e="classic"){if(xa(t),t.relayout!==void 0&&!["all","unpinned","autowrap"].includes(t.relayout))throw new Error(\`Unsupported relayout mode: \${String(t.relayout)}\`);if(t.relayout!==void 0&&t.layout===void 0)throw new Error("Relayout requires a layout direction on the diagram.");let n=t.layout!==void 0,o=ya(t),r=(a,c)=>{if(a!==void 0&&(typeof a!="string"||!o.has(a)))throw new Error(\`Unknown style class on \${c}: \${String(a)}\`)},i=new Set,s=a=>{if("type"in a)throw new Error(\`Node "\${a.id||"unknown"}" uses removed field "type".\`);if(xe(a,na,\`node "\${a.id||"unknown"}"\`),a.ref!==void 0&&_e(a.ref,\`Node "\${a.id}" ref\`),!a.id||typeof a.label!="string")throw new Error("Every node requires an id and a string label.");if(a.href!==void 0&&!kt(a.href))throw new Ue(a.id);if(!a.shape)throw new Error(\`Node "\${a.id}" requires a shape.\`);if(!xt.includes(a.shape))throw new Error(\`Unsupported node shape: \${a.shape}\`);if(a.position===void 0){if(!n)throw new Error(\`Node "\${a.id}" requires a position, or a "layout" on the diagram to place it.\`)}else oo(a.position,\`node "\${a.id}" position\`);if(a.pinned!==void 0&&typeof a.pinned!="boolean")throw new Error(\`Node "\${a.id}" pinned must be true or false.\`);if(a.pinned&&a.position===void 0)throw new Error(\`Pinned node "\${a.id}" requires a position.\`);if(a.textVAlign!==void 0&&!Do.includes(a.textVAlign))throw new Error(\`Unsupported node textVAlign: \${a.textVAlign}\`);if(a.textHAlign!==void 0&&!Fo.includes(a.textHAlign))throw new Error(\`Unsupported node textHAlign: \${a.textHAlign}\`);if(a.palette!==void 0&&(typeof a.palette!="string"||!Te.includes(a.palette)))throw new Error(\`Unsupported node palette: \${String(a.palette||"unknown")}\`);if(a.strokeType!==void 0&&!We.includes(a.strokeType))throw new Error(\`Unsupported node strokeType: \${a.strokeType}\`);if(a.style?.width!==void 0)throw new Error("Node style.width is not supported; use style.strokeWidth.");if(r(a.class,\`node "\${a.id}"\`),sn(a.style,ro,\`node "\${a.id}"\`),a.arrow!==void 0&&oo(a.arrow,\`node "\${a.id}" arrow\`),i.has(a.id))throw new Error(\`Duplicate flowchart node id: \${a.id}\`);if(i.add(a.id),a.children!==void 0&&!Array.isArray(a.children))throw new Error(\`Children for node "\${a.id}" must be a list.\`);for(let c of a.children||[])s(c)};for(let a of t.nodes)s(a);for(let a of t.edges){if(xe(a,oa,\`edge "\${a.source||"unknown"}" -> "\${a.target||"unknown"}"\`),a.ref!==void 0&&_e(a.ref,\`Edge "\${a.source}" -> "\${a.target}" ref\`),!a.sourceAnchor&&!n)throw new Error(\`Edge "\${a.source||"unknown"}" -> "\${a.target||"unknown"}" requires a sourceAnchor.\`);if(!a.targetAnchor&&!n)throw new Error(\`Edge "\${a.source||"unknown"}" -> "\${a.target||"unknown"}" requires a targetAnchor.\`);if(a.sourceAnchor&&!ce.includes(a.sourceAnchor))throw new Error(\`Unsupported edge sourceAnchor: \${a.sourceAnchor}\`);if(a.targetAnchor&&!ce.includes(a.targetAnchor))throw new Error(\`Unsupported edge targetAnchor: \${a.targetAnchor}\`);if(a.route!==void 0&&!wt.includes(a.route))throw new Error(\`Unsupported edge route: \${a.route}\`);if(a.strokeType!==void 0&&!We.includes(a.strokeType))throw new Error(\`Unsupported edge strokeType: \${a.strokeType}\`);if(a.waypoint!==void 0&&oo(a.waypoint,\`edge "\${a.source}" -> "\${a.target}" waypoint\`),a.start!==void 0&&!Le.includes(a.start))throw new Error(\`Unsupported edge start marker: \${a.start}\`);if(a.end!==void 0&&!Le.includes(a.end))throw new Error(\`Unsupported edge end marker: \${a.end}\`);if(a.style?.width!==void 0)throw new Error("Edge style.width is not supported; use style.strokeWidth.");r(a.class,\`edge "\${a.source||"unknown"}" -> "\${a.target||"unknown"}"\`),sn(a.style,aa,\`edge "\${a.source||"unknown"}" -> "\${a.target||"unknown"}"\`)}}function Ea(t,e="classic"){if(!Array.isArray(t.participants)||!Array.isArray(t.messages))throw new Error("Sequence diagrams require participants and messages sections.");if(t.activations!==void 0&&!Array.isArray(t.activations))throw new Error("Sequence diagram activations must be a list.");if(t.notes!==void 0&&!Array.isArray(t.notes))throw new Error("Sequence diagram notes must be a list.");if(t.groups!==void 0&&!Array.isArray(t.groups))throw new Error("Sequence diagram groups must be a list.");if(t.canvas!==void 0&&(typeof t.canvas!="object"||Array.isArray(t.canvas)))throw new Error("Sequence canvas must be a mapping.");xe(t.canvas,ma,"sequence canvas");for(let o of["width","height","participantSpacing"]){let r=t.canvas?.[o];if(r!==void 0&&(!Number.isFinite(r)||Number(r)<=0))throw new Error(\`Sequence canvas.\${o} must be a positive number.\`)}if(t.canvas?.participantSize!==void 0){if(typeof t.canvas.participantSize!="object"||Array.isArray(t.canvas.participantSize))throw new Error("Sequence canvas.participantSize must be a mapping.");xe(t.canvas.participantSize,["width","height"],"sequence canvas participantSize");for(let o of["width","height"]){let r=t.canvas.participantSize[o];if(r!==void 0&&(!Number.isFinite(r)||Number(r)<=0))throw new Error(\`Sequence canvas.participantSize.\${o} must be a positive number.\`)}}let n=new Set;for(let o of t.participants){if(xe(o,sa,\`participant "\${o.id||"unknown"}"\`),!o.id||!o.label)throw new Error("Every sequence participant requires an id and label.");if(o.kind!==void 0&&!$o.includes(o.kind))throw new Error(\`Unsupported sequence participant kind: \${o.kind}\`);if(wr(o,\`participant "\${o.id}"\`,e),n.has(o.id))throw new Error(\`Duplicate sequence participant id: \${o.id}\`);n.add(o.id)}for(let[o,r]of t.messages.entries()){if(xe(r,ca,\`message \${o}\`),r.ref!==void 0&&_e(r.ref,\`Sequence message \${o} ref\`),!r.from||!r.to)throw new Error(\`Sequence message \${o} requires from and to.\`);if(r.label!==void 0&&typeof r.label!="string")throw new Error(\`Sequence message \${o} label must be a string.\`);if(!n.has(r.from)||!n.has(r.to))throw new Error(\`Sequence message \${o} references an unknown participant.\`);if(r.style!==void 0&&!Ot.includes(r.style))throw new Error(\`Unsupported sequence message style: \${r.style}\`)}for(let[o,r]of(t.activations||[]).entries()){if(xe(r,da,\`activation \${o}\`),!r.participant||!Number.isInteger(r.from)||!Number.isInteger(r.to))throw new Error(\`Sequence activation \${o} requires participant and integer from and to message positions.\`);if(!n.has(r.participant))throw new Error(\`Sequence activation \${o} references an unknown participant.\`);if(r.from<1||r.to<r.from||r.to>t.messages.length)throw new Error(\`Sequence activation \${o} range is out of bounds.\`)}for(let[o,r]of(t.notes||[]).entries()){xe(r,la,\`note \${o}\`);let i=r.after;if(!r.at||!Number.isInteger(i)||!r.label)throw new Error(\`Sequence note \${o} requires at, after, and label.\`);if(wr(r,\`note \${o}\`,e),!n.has(r.at))throw new Error(\`Sequence note \${o} references an unknown participant.\`);if(i<0||i>t.messages.length)throw new Error(\`Sequence note \${o} after position is out of bounds.\`)}for(let[o,r]of(t.groups||[]).entries()){if(xe(r,ua,\`group \${o}\`),!r.label&&r.label!=="")throw new Error(\`Sequence group \${o} requires a label.\`);if(!Number.isInteger(r.from)||!Number.isInteger(r.to))throw new Error(\`Sequence group \${o} requires integer from and to indices.\`);if(r.from<1||r.to<r.from||r.to>t.messages.length)throw new Error(\`Sequence group \${o} range is out of bounds.\`)}}function wr(t,e,n="classic"){if(t.palette!==void 0){let o=String(t.palette||"");if(!Te.includes(o))throw new Error(\`Unsupported \${e} palette: \${o||"unknown"}\`)}if(sn(t.style,ro,e),t.size){xe(t.size,["width","height"],\`size for \${e}\`);for(let o of["width","height"]){let r=t.size[o];if(r!==void 0&&(!Number.isFinite(r)||Number(r)<=0))throw new Error(\`\${e} size.\${o} must be a positive number.\`)}}}function io(t){return typeof t=="number"||typeof t=="boolean"?String(t):t&&typeof t=="object"?Object.keys(t).length?\`{ \${Object.entries(t).map(([e,n])=>\`\${e}: \${io(n)}\`).join(", ")} }\`:"{}":/^[\\w./-]+(?: [\\w./-]+)*$/.test(String(t))&&!/^(?:-?\\d+(?:\\.\\d+)?|true|false)$/.test(String(t))?String(t):JSON.stringify(String(t))}function lt(t,e,n,o,r=""){if(typeof e=="string"&&e.includes(\`
\`)){let i=e.split(\`
\`).map(s=>s.length?\`\${" ".repeat(o)}\${s}\`:"");return[\`\${" ".repeat(n)}\${r}\${t}: |+\`,...i]}return[\`\${" ".repeat(n)}\${r}\${t}: \${io(e)}\`]}function tt(t,e=2){let n=Object.entries(t),[o,r]=n[0],i=lt(o,r,e,e+4,"- ");for(let[s,a]of n.slice(1))if(!(s==="children"&&Array.isArray(a)&&!a.length))if(s==="children"&&Array.isArray(a)){i.push(\`\${" ".repeat(e+2)}children:\`);for(let c of a)i.push(...tt(c,e+4))}else i.push(...lt(s,a,e+2,e+4));return i}function Oe(t){let e=[\`type: \${io(t.type)}\`];for(let r of["version","id","caption","description","theme"])t[r]!==void 0&&e.push(...lt(r,t[r],0,2));if(t.type==="flowchart"&&t.layout!==void 0&&e.push(...lt("layout",t.layout,0,2)),t.type==="sequence"){if(t.canvas!==void 0){e.push("canvas:");for(let[r,i]of Object.entries(t.canvas))e.push(...lt(r,i,2,4))}e.push("participants:");for(let r of t.participants||[])e.push(...tt(r));e.push("messages:");for(let r of t.messages||[])e.push(...tt(r));if(t.activations!==void 0){e.push("activations:");for(let r of t.activations||[])e.push(...tt(r))}if(t.notes!==void 0){e.push("notes:");for(let r of t.notes||[])e.push(...tt(r))}if(t.groups!==void 0){e.push("groups:");for(let r of t.groups||[])e.push(...tt(r))}return e.join(\`
\`)}if(t.styles!==void 0){e.push("styles:");for(let[r,i]of Object.entries(t.styles)){e.push(\`  \${r}:\`);for(let[s,a]of Object.entries(i))e.push(...lt(s,a,4,6))}}let n=t.canvas||{},o=Object.entries(n).filter(([r])=>!n.auto||r!=="width"&&r!=="height");if(n.auto&&o.length===1)e.push("canvas: auto");else if(o.length){e.push("canvas:");for(let[r,i]of o)e.push(...lt(r,i,2,4))}e.push("nodes:");for(let r of t.nodes||[])e.push(...tt(r));e.push("edges:");for(let r of t.edges||[])e.push(...tt(r));return e.join(\`
\`)}var Sa=/^(?: {0,3}> ?)+/;function ke(t){return t.replace(Sa,"")}function Ge(t){let e=t.match(/^(\`{3,})([\\w-]*)\\s*$/);return e?{marker:e[1],info:e[2]}:null}function ut(t,e){let n=t.match(/^(\`{3,})\\s*$/);return!!(n&&n[1].length>=e.length)}function Mt(t,e,n,o=t.length){for(let r=e;r<o;r+=1)if(ut(ke(t[r]),n))return r;return-1}var va=["document","diagram"];function cn(t){let e=t.replace(/\\r\\n/g,\`
\`).split(\`
\`),n=e.findIndex(i=>i.trim()!=="");if(n===-1||e[n]!=="---")return{content:t,frontmatter:{}};let o=e.indexOf("---",n+1);if(o===-1)return{content:t,frontmatter:{}};let r={};for(let i of e.slice(n+1,o)){if(!i.trim()||i.trimStart().startsWith("#"))continue;let s=i.match(/^([^:]+):\\s*(.*)$/);if(!s)throw new Error(\`Cannot parse document frontmatter line: \${i}\`);r[s[1]]=Be(s[2])}return{content:e.slice(o+1).join(\`
\`),frontmatter:r}}function mt(t){let e=cn(t),n=String(e.frontmatter.theme??"auto"),o=String(e.frontmatter.colourScheme??"classic"),r=String(e.frontmatter.doctype??"document");if(!jt.includes(n))throw new Error(\`Unsupported document theme: \${n}\`);let i=n,s=at(i);if(!Object.prototype.hasOwnProperty.call(fe,o))throw new Error(\`Unsupported document colour scheme: \${o}\`);let a=o;if(!va.includes(r))throw new Error(\`Unsupported document doctype: \${r}\`);return{...e,theme:i,resolvedTheme:s,colourScheme:a,doctype:r}}function gt(t){let e=mt(t),n=e.content.replace(/\\r\\n/g,\`
\`).split(\`
\`),o=0,r=new Set,i=!1,s=null;for(let a of n){let c=ke(a);if(s){ut(c,s)&&(s=null);continue}let d=Ge(c);if(d){s=d.marker;continue}if(/^:::diagram\\s+\\{\\s*id=/.test(c)){i=!0;break}}for(;o<n.length;){let a=ke(n[o]),c=Ge(a);if(!c){o+=1;continue}let d=Mt(n,o+1,c.marker);if(d===-1)throw new Error("Unclosed code block.");if(c.info==="diagram"){let l=n.slice(o+1,d).map(h=>ke(h)).join(\`
\`);we(l,e.colourScheme);let u=Xe(l);if(u){if(r.has(u))throw new Error(\`Duplicate diagram id: \${u}\`);r.add(u)}else if(i)throw new Error("Every diagram requires an id when using diagram references.")}o=d+1}return e}function Xe(t){let e=t.match(/^id:\\s*(.*?)\\s*$/m)?.[1];if(e===void 0)return null;try{let n=Be(e);return typeof n=="string"?n:null}catch{return null}}function nt(t){let e=t.match(/[^\\r\\n]*(?:\\r\\n|\\r|\\n|$)/g)?.filter((u,h,p)=>u.length>0||h<p.length-1)||[],n=e.map(u=>u.replace(/\\r\\n$|[\\r\\n]$/,"")),o=[],r=0;for(let u of e)o.push(r),r+=u.length;let i=(u,h)=>({line:u+1,column:h+1,offset:(o[u]??t.length)+h}),s=u=>{let h=n[u]||"",p=ke(h),g=h.length-p.length;return{start:i(u,g),end:i(u,h.length)}},a=0,c=n.findIndex(u=>u.trim()!=="");if(c!==-1&&n[c]==="---"){let u=n.indexOf("---",c+1);u!==-1&&(a=u+1)}let d=[],l=a;for(;l<n.length;){let u=Ge(ke(n[l]));if(!u){l+=1;continue}let h=Mt(n,l+1,u.marker);if(h===-1)break;if(u.info==="diagram"){let p=n.slice(l+1,h).map((b,v)=>s(l+1+v)),g=n.slice(l+1,h).map(b=>ke(b)).join(\`
\`),m=s(l),f=s(h);d.push({id:Xe(g),source:g,index:d.length,fenceRange:{start:m.start,end:f.end},bodyRange:p.length?{start:p[0].start,end:p[p.length-1].end}:{start:m.end,end:f.start},lineRanges:p})}l=h+1}return d}function ht(t){let e=2166136261;for(let n=0;n<t.length;n+=1)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e.toString(16).padStart(8,"0")}function dn(t){let e=t.split(\`
\`),n=e.map(p=>p.endsWith("\\r")?p.slice(0,-1):p),r=e.filter(p=>p.endsWith("\\r")).length*2>e.length-1?"\\r":"",i=t.replace(/\\r\\n/g,\`
\`),{content:s,frontmatter:a}=cn(i),c=String(a.colourScheme||"classic"),d=[],l=i.split(\`
\`).length-s.split(\`
\`).length,u=0,h=0;for(;l<e.length;){let p=Ge(ke(n[l]));if(!p){l+=1;continue}let g=Mt(n,l+1,p.marker);if(g===-1)break;if(p.info==="diagram"){let m=n.slice(l+1,g).map(b=>ke(b)).join(\`
\`),f=we(m,c);if(f.type==="flowchart"&&(ur(f)||yr(f))){let b=n[l],v=b.slice(0,b.length-ke(b).length);d.push({start:l+1,end:g,lines:Oe(f).split(\`
\`).map(E=>\`\${v}\${E}\${r}\`)}),u+=1}else h+=1}l=g+1}return{source:ao(e,d).join(\`
\`),baked:u,preserved:h,fences:d}}function ao(t,e){let n=[...t];for(let o of[...e].reverse())n.splice(o.start,o.end-o.start,...o.lines);return n}function Sr(t){let e=gt(t),n=nt(t).reverse(),o=[],r=t;for(let i of n){let s=vr(r,i,e.colourScheme);s.changed&&s.layout&&(r=s.source,o.unshift(s.layout))}return{source:r,changed:o.length>0,layouts:o}}function vr(t,e,n){let o=we(e.source,n);if(o.type!=="flowchart")return{source:t,changed:!1,layout:null};let r=rn(o);if(!r)return{source:t,changed:!1,layout:null};let i=t.split(\`
\`),s=e.fenceRange.start.line-1,a=e.fenceRange.end.line-1,c=i[s].endsWith("\\r")?i[s].slice(0,-1):i[s],d=c.slice(0,c.length-ke(c).length),u=i.filter(p=>p.endsWith("\\r")).length*2>i.length-1?"\\r":"",h=Oe(o).split(\`
\`).map(p=>\`\${d}\${p}\${u}\`);return i.splice(s+1,a-s-1,...h),{source:i.join(\`
\`),changed:!0,layout:r}}function kr(t,e){let n=gt(t),o=nt(t).find(r=>r.index===e);if(!o)throw new Error(\`Diagram \${e+1} does not exist.\`);return vr(t,o,n.colourScheme)}function $r(t,e,n="all"){let o=gt(t),r=nt(t).find(g=>g.index===e);if(!r)throw new Error(\`Diagram \${e+1} does not exist.\`);let i=we(r.source,o.colourScheme);if(i.type!=="flowchart")return{source:t,changed:!1};an(i,n);let s=t.split(\`
\`),a=r.fenceRange.start.line-1,c=r.fenceRange.end.line-1,d=s[a].endsWith("\\r")?s[a].slice(0,-1):s[a],l=d.slice(0,d.length-ke(d).length),h=s.filter(g=>g.endsWith("\\r")).length*2>s.length-1?"\\r":"",p=Oe(i).split(\`
\`).map(g=>\`\${l}\${g}\${h}\`);return s.splice(a+1,c-a-1,...p),{source:s.join(\`
\`),changed:!0}}function Dr(t,e){return Xe(t)===null?\`id: \${e}
\${t}\`:t.replace(/^id:\\s*(?:"[^"]+"|[^\\s#]+)\\s*$/m,()=>\`id: \${e}\`)}function so(t,e,n){let o=t.replace(/\\r\\n/g,\`
\`),r=o.split(\`
\`),i=r.findIndex(l=>l.trim()!==""),s=i!==-1&&r[i]==="---",a=s?r.indexOf("---",i+1):-1;if(!s||a===-1)return\`---
\${e}: \${n}
---
\${o}\`;let c=!1,d=r.slice(i+1,a).map(l=>{if(!l.trim()||l.trimStart().startsWith("#"))return l;let u=l.match(/^([^:]+):\\s*(.*)$/);return u&&u[1]===e?(c=!0,\`\${e}: \${n}\`):l});return c||d.push(\`\${e}: \${n}\`),[...r.slice(0,i+1),...d,...r.slice(a)].join(\`
\`)}function Fr(t,e){return so(t,"theme",e)}function Nr(t,e){return so(t,"colourScheme",e)}function Ar(t,e){return so(t,"doctype",e)}function Mr(t,e){let n=e.trim(),o=n?t.indexOf(n):-1;return o===-1?null:{start:o,end:o+n.length}}function Tr(t,e){let n=Number.parseFloat(globalThis.getComputedStyle(t).lineHeight)||20,o=t.value.slice(0,e.start).split(\`
\`).length-1,r=Math.max(1,Math.floor(t.clientHeight/n));t.scrollTop=Math.max(0,(o-Math.floor(r/2))*n)}var ka=[{type:"comment",pattern:"\\\\/\\\\/[^\\\\n]*|\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"},{type:"string",pattern:"\`(?:\\\\\\\\.|[^\`\\\\\\\\])*\`|\\"(?:\\\\\\\\.|[^\\"\\\\\\\\\\\\n])*\\"|'(?:\\\\\\\\.|[^'\\\\\\\\\\\\n])*'"}],ot={type:"number",pattern:"\\\\b(?:0[xXbBoO][\\\\da-fA-F_]+|\\\\d[\\\\d_]*(?:\\\\.[\\\\d_]+)?(?:[eE][+-]?\\\\d+)?)\\\\b"};function Ie(...t){return\`\\\\b(?:\${t.join("|")})\\\\b\`}var $a=Ie("async","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","export","extends","finally","for","from","function","get","if","implements","import","in","instanceof","interface","let","new","of","private","protected","public","readonly","return","satisfies","set","static","super","switch","this","throw","try","type","typeof","var","void","while","yield"),Lr={clike:[...ka,{type:"keyword",pattern:$a},{type:"literal",pattern:Ie("true","false","null","undefined","NaN","Infinity")},{type:"type",pattern:Ie("any","bigint","boolean","never","number","object","string","symbol","unknown")},ot],python:[{type:"comment",pattern:"#[^\\\\n]*"},{type:"string",pattern:\`(?:[rRbBfFuU]{0,2})(?:"""[\\\\s\\\\S]*?"""|'''[\\\\s\\\\S]*?'''|"(?:\\\\\\\\.|[^"\\\\\\\\\\\\n])*"|'(?:\\\\\\\\.|[^'\\\\\\\\\\\\n])*')\`},{type:"keyword",pattern:Ie("and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield")},{type:"literal",pattern:Ie("True","False","None","self","cls")},ot],ruby:[{type:"comment",pattern:"#[^\\\\n]*"},{type:"string",pattern:\`"(?:\\\\\\\\.|[^"\\\\\\\\\\\\n])*"|'(?:\\\\\\\\.|[^'\\\\\\\\\\\\n])*'|:[a-zA-Z_]\\\\w*[?!]?\`},{type:"keyword",pattern:Ie("alias","begin","break","case","class","def","do","else","elsif","end","ensure","for","if","in","module","next","raise","require","rescue","return","then","unless","until","when","while","yield")},{type:"literal",pattern:Ie("true","false","nil","self")},ot],json:[{type:"attribute",pattern:'"(?:\\\\\\\\.|[^"\\\\\\\\])*"(?=\\\\s*:)'},{type:"string",pattern:'"(?:\\\\\\\\.|[^"\\\\\\\\])*"'},{type:"literal",pattern:Ie("true","false","null")},ot],yaml:[{type:"comment",pattern:"#[^\\\\n]*"},{type:"attribute",pattern:"^\\\\s*(?:-\\\\s+)?[\\\\w.-]+(?=\\\\s*:(?:\\\\s|$))"},{type:"string",pattern:\`"(?:\\\\\\\\.|[^"\\\\\\\\\\\\n])*"|'(?:''|[^'\\\\n])*'\`},{type:"meta",pattern:"^---\\\\s*$|^\\\\.\\\\.\\\\.\\\\s*$|(?:^|\\\\s)[|>][+-]?\\\\s*$|(?:^|\\\\s)[&*][\\\\w-]+"},{type:"literal",pattern:Ie("true","false","null","yes","no","on","off","True","False","Null")},ot],sql:[{type:"comment",pattern:"--[^\\\\n]*|\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"},{type:"string",pattern:"'(?:''|[^'\\\\n])*'"},{type:"keyword",pattern:\`\\\\b(?:\${["ADD","ALL","ALTER","AND","AS","ASC","BEGIN","BETWEEN","BY","CASE","COMMIT","CREATE","CROSS","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","EXISTS","FROM","FULL","GROUP","HAVING","IN","INDEX","INNER","INSERT","INTO","IS","JOIN","LEFT","LIKE","LIMIT","NOT","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RETURNING","RIGHT","ROLLBACK","SELECT","SET","TABLE","THEN","TRANSACTION","UNION","UNIQUE","UPDATE","VALUES","VIEW","WHEN","WHERE","WITH"].join("|")})\\\\b\`},{type:"literal",pattern:"\\\\b(?:NULL|TRUE|FALSE)\\\\b"},ot],shell:[{type:"comment",pattern:"#[^\\\\n]*"},{type:"string",pattern:\`"(?:\\\\\\\\.|[^"\\\\\\\\])*"|'[^']*'\`},{type:"meta",pattern:"\\\\$(?:\\\\{[^}]*\\\\}|[\\\\w@*#?$!-]+)"},{type:"keyword",pattern:Ie("case","cd","do","done","echo","elif","else","esac","exit","export","fi","for","function","if","in","local","read","return","set","shift","source","then","unset","until","while")},{type:"attribute",pattern:"(?:^|\\\\s)--?[\\\\w-]+"},ot],markup:[{type:"comment",pattern:"<!--[\\\\s\\\\S]*?-->"},{type:"meta",pattern:"<!(?:DOCTYPE|doctype)[^>]*>|<\\\\?[\\\\s\\\\S]*?\\\\?>"},{type:"tag",pattern:"<\\\\/?[a-zA-Z][\\\\w:-]*"},{type:"string",pattern:\`"[^"]*"|'[^']*'\`},{type:"attribute",pattern:"\\\\b[a-zA-Z_:][\\\\w:.-]*(?==)"},{type:"tag",pattern:"\\\\/?>"}],css:[{type:"comment",pattern:"\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"},{type:"string",pattern:\`"[^"\\\\n]*"|'[^'\\\\n]*'\`},{type:"meta",pattern:"@[\\\\w-]+"},{type:"attribute",pattern:"[a-zA-Z-]+(?=\\\\s*:)"},{type:"number",pattern:"#[\\\\da-fA-F]{3,8}\\\\b|\\\\b\\\\d[\\\\d.]*(?:px|rem|em|%|vh|vw|s|ms|deg|fr)?\\\\b"}],diff:[{type:"meta",pattern:"^(?:diff|index|@@|\\\\+\\\\+\\\\+|---)[^\\\\n]*"},{type:"inserted",pattern:"^\\\\+[^\\\\n]*"},{type:"deleted",pattern:"^-[^\\\\n]*"}],ini:[{type:"comment",pattern:"[#;][^\\\\n]*"},{type:"meta",pattern:"^\\\\s*\\\\[[^\\\\]\\\\n]*\\\\]"},{type:"attribute",pattern:"^\\\\s*[\\\\w.-]+(?=\\\\s*=)"},{type:"string",pattern:\`"[^"\\\\n]*"|'[^'\\\\n]*'\`},{type:"literal",pattern:Ie("true","false")},ot]},Da={javascript:"clike",js:"clike",jsx:"clike",mjs:"clike",cjs:"clike",typescript:"clike",ts:"clike",tsx:"clike",java:"clike",kotlin:"clike",kt:"clike",swift:"clike",scala:"clike",go:"clike",golang:"clike",rust:"clike",rs:"clike",c:"clike",cpp:"clike","c++":"clike",cs:"clike",csharp:"clike",php:"clike",dart:"clike",python:"python",py:"python",ruby:"ruby",rb:"ruby",json:"json",jsonc:"json",yaml:"yaml",yml:"yaml",sql:"sql",postgresql:"sql",mysql:"sql",bash:"shell",sh:"shell",shell:"shell",zsh:"shell",console:"shell",terminal:"shell",html:"markup",xml:"markup",svg:"markup",vue:"markup",css:"css",scss:"css",less:"css",diff:"diff",patch:"diff",ini:"ini",toml:"ini",conf:"ini"},Cr=new Map;function Fa(t){let e=Cr.get(t);if(e)return e;let n=new RegExp(Lr[t].map(o=>\`(\${o.pattern})\`).join("|"),"gm");return Cr.set(t,n),n}function Na(t){let e=String(t??"").trim().toLowerCase();return Da[e]||null}function Pr(t,e){let n=Na(e);if(!n)return k(t);let o=Lr[n],r=Fa(n);r.lastIndex=0;let i=[],s=0,a;for(;a=r.exec(t);){if(!a[0]){r.lastIndex+=1;continue}a.index>s&&i.push(k(t.slice(s,a.index)));let c=a.findIndex((h,p)=>p>0&&h!==void 0)-1,d=o[c]?.type,l=a[0].match(/^\\s*/)[0],u=a[0].slice(l.length);i.push(k(l)),i.push(d&&u?\`<span class="docdiagram-token-\${d}">\${k(u)}</span>\`:k(u)),s=a.index+a[0].length}return i.push(k(t.slice(s))),i.join("")}var ln={section:{attributes:["title","palette","fill","stroke","text"]},panel:{attributes:["title","palette","fill","stroke","text"]},callout:{attributes:["kind","title","palette","fill","stroke","text"]},grid:{attributes:["columns"]},stack:{attributes:[]},diagram:{attributes:["id"],void:!0},toc:{attributes:["depth","diagrams"],void:!0}},Aa=Object.keys(ln);function co(t){return!!ln[t].void}var Ma=/\\u0001ref:([^\\u0001]*)\\u0001/g,Ta=/\\u0001toc:([^\\u0001]*)\\u0001/g;function Ca(t){let e=t.replace(/\\\\#/g,""),n=e.indexOf("#"),o=r=>r.replace(/\\u0002/g,"#");return n===-1?{hasPlaceholder:!1,before:o(e),after:"",text:o(e)}:{hasPlaceholder:!0,before:o(e.slice(0,n)),after:o(e.slice(n+1)),text:o(e.slice(0,n)+e.slice(n+1))}}function La(t){return t.replace(/!\\[([^\\]]*)\\]\\([^)]*\\)/g,"$1").replace(/\\[([^\\]]+)\\]\\([^)]*\\)/g,"$1").replace(/\`([^\`]+)\`/g,"$1").replace(/(\\*\\*|__|~~|\\*|_)/g,"").normalize("NFKD").replace(/[\\u0300-\\u036f]/g,"").toLowerCase().replace(/[^a-z0-9\\s-]/g,"").trim().replace(/[\\s-]+/g,"-")||"section"}function Pa(t,e){let n=La(t),o=e.headingOccurrences||(e.headingOccurrences=new Map),r=e.usedHeadingIds||(e.usedHeadingIds=new Set),i=(o.get(n)||0)+1,s=i===1?n:\`\${n}-\${i}\`;for(;r.has(s);)i+=1,s=\`\${n}-\${i}\`;return o.set(n,i),r.add(s),s}function lo(t){let e=[],n="",o=!1,r=t.trim().replace(/^\\||\\|$/g,"");for(let i of r)o?(n+=i,o=!1):i==="\\\\"?o=!0:i==="|"?(e.push(n.trim()),n=""):n+=i;return e.push(n.trim()),e}function Rr(t){let e=lo(t);return!e.length||!e.every(n=>/^:?-{3,}:?$/.test(n))?null:e.map(n=>n.startsWith(":")&&n.endsWith(":")?"center":n.startsWith(":")?"left":n.endsWith(":")?"right":"")}function pt(t){return t.match(/^(\\s*)([-+*]|\\d+[.)])\\s+(.+)$/)}function zt(t){let e=t.match(new RegExp(\`^:::(\${Aa.join("|")})(?:\\\\s+\\\\{(.*)\\\\})?\\\\s*$\`));if(!e)return null;let n={},o=e[2];if(o!==void 0){let r=0,i=/\\s*([a-z][\\w-]*)=(?:"([^"]*)"|([^\\s}]+))/gi,s;for(;s=i.exec(o);){if(s.index!==r||n[s[1]]!==void 0)return null;n[s[1]]=s[2]??s[3],r=i.lastIndex}if(o.slice(r).trim())return null}return{name:e[1],attributes:n}}function Ra(t){let e=zt(t);if(!e||e.name!=="diagram")return null;let n=Object.keys(e.attributes),o=e.attributes.id;return n.length===1&&o?{id:o}:null}function Ba(t){let e=t.match(/^caption:[ \\t]*(\\S.*?)\\s*$/m),n=e?Be(e[1]):null;return typeof n=="string"&&n?n:null}function Ia(t){return t.replace(/^(?: {0,3}> ?)+/,"")}function Ir(t){return/^:::(?:\\s+.*)?$/.test(t)}function qa(t,e,n){let o=1,r=null;for(let i=e+1;i<n;i+=1){let s=t[i];if(r){ut(s,r)&&(r=null);continue}let a=Ge(s);if(a){r=a.marker;continue}let c=zt(s);if(c)co(c.name)||(o+=1);else if(Ir(s)&&(o-=1,!o))return i}return-1}function za(t){return/^#[\\da-f]{3,8}$/i.test(t)}function Ha(t,e="classic",n="light"){let o=t.palette!==void 0;if(o&&!Te.includes(t.palette))return null;for(let a of["fill","stroke","text"])if(t[a]!==void 0&&!za(t[a]))return null;let r=o?ve(e,n,t.palette):null,i=Object.fromEntries(["fill","stroke","text"].filter(a=>t[a]!==void 0).map(a=>[a,t[a]])),s=Pe(r||{},i);return Object.entries(s).filter(([,a])=>a!==void 0).map(([a,c])=>\`--docdiagram-component-\${a}:\${c}\`).join(";")}function Br(t,e=!1){let n=String(t).trim();if(n.startsWith("//")||n.startsWith("\\\\"))return!1;if(!n||n.startsWith("#")||n.startsWith("/")||n.startsWith("./")||n.startsWith("../")||n.startsWith("?")||e&&/^data:image\\/(?:gif|jpeg|png|webp);base64,/i.test(n))return!0;let o=n.match(/^([a-z][a-z\\d+.-]*):/i);return!o||["http","https","mailto"].includes(o[1].toLowerCase())}function $e(t){let e=[],n=String(t).replace(/\`([^\`]+)\`/g,(r,i)=>{let s=\`\\0\${e.length}\\0\`;return e.push(\`<code>\${k(i)}</code>\`),s}),o=[];return n=n.replace(/!\\[[^\\]]*\\]\\([^)]*\\)|(\\[[^\\]]*\\]\\()([^)]*)(\\))/g,(r,i,s,a)=>{let c=\`\${o.length}\`;return o.push(i?s:r),i?\`\${i}\${c}\${a}\`:c}),n=n.replace(/\\{annotation=(?:"([^"}\\r\\n]+)"|([^{}\\r\\n]+))\\}/g,(r,i,s)=>{let a=je(i??s);if(!a.trim()||/[\\u0000-\\u001f\\u007f]/.test(a))return r;let c=\`\\0\${e.length}\\0\`,d=/^[0-9]{1,2}$/.test(a)?" docdiagram-annotation-inline-circle":"";return e.push(\`<span class="docdiagram-annotation-inline\${d}" role="img" aria-label="Reference \${k(a)}">\${k(a)}</span>\`),c}),n=n.replace(/\\u0002(\\d+)\\u0002/g,(r,i)=>o[Number(i)]),n=n.replace(/\\{ref=(?:"([^"}]+)"|([^\\s}]+))\\}/g,(r,i,s)=>\`ref:\${i??s}\`),n=k(n),n=n.replace(/!\\[([^\\]]*)\\]\\(([^)\\s]+)(?:\\s+&quot;[^&]*&quot;)?\\)/g,(r,i,s)=>{let a=s.replace(/&amp;/g,"&");return Br(a,!0)?\`<img src="\${k(a)}" alt="\${i}">\`:\`![\${i}](\${k(s)})\`}),n=n.replace(/\\[([^\\]]+)\\]\\(([^)\\s]+)(?:\\s+&quot;[^&]*&quot;)?\\)/g,(r,i,s)=>{let a=s.replace(/&amp;/g,"&");return Br(a)?\`<a href="\${k(a)}">\${i}</a>\`:\`[\${i}](\${k(s)})\`}),n=n.replace(/(\\*\\*|__)(?=\\S)([\\s\\S]*?\\S)\\1/g,"<strong>$2</strong>").replace(/~~(?=\\S)([\\s\\S]*?\\S)~~/g,"<del>$1</del>").replace(/(?<!\\*)\\*(?=\\S)([\\s\\S]*?\\S)\\*(?!\\*)/g,"<em>$1</em>").replace(/(?<!_)_(?=\\S)([\\s\\S]*?\\S)_(?!_)/g,"<em>$1</em>"),n.replace(/\\u0000(\\d+)\\u0000/g,(r,i)=>e[Number(i)])}function un(t,e={diagramIndex:0},n){let o=t.replace(/\\r\\n/g,\`
\`).split(\`
\`),r=n?.renderDiagram??((E,S)=>{throw new Error("renderDiagram callback is required for diagram blocks.")}),i=!!n?.diagramReferenceRegistry,s=n?.documentColorScheme||"classic",a=n?.documentTheme||"light",c=n?.diagramReferenceRegistry||(()=>{let E=new Map,S=new Set,x=new Map,y=new Set,F=o.map(Ia);for(let M=0;M<F.length;M+=1){let R=Ge(F[M]);if(!R)continue;let A=Mt(F,M+1,R.marker);if(A===-1)break;if(R.info==="diagram"){let P=F.slice(M+1,A).join(\`
\`),N=Xe(P);N&&(y.add(N),E.has(N)?S.add(N):E.set(N,{id:N,source:P}))}M=A}let D=null;for(let M of F){if(D){ut(M,D)&&(D=null);continue}let R=Ge(M);if(R){D=R.marker;continue}let A=Ra(M);A&&x.set(A.id,(x.get(A.id)||0)+1)}return{definitions:E,duplicateDefinitionIds:S,referenceCounts:x,diagramIds:y}})(),{definitions:d,duplicateDefinitionIds:l,referenceCounts:u}=c;if(e.figures||(e.figures=new Map),e.contents||(e.contents=[]),!i){let E=e.usedHeadingIds||(e.usedHeadingIds=new Set);for(let S of c.diagramIds)E.add(S)}function h(E){let S=Xe(E);S&&e.anchors&&e.anchors.set(S,(e.anchors.get(S)||0)+1);let x=Ba(E),y=x?Ca(x):null,F=y?.hasPlaceholder?e.figureNumber=(e.figureNumber||0)+1:null,D=y?F===null?y.text:\`\${y.before}\${F}\${y.after}\`:null;y&&S&&(e.figures.set(S,{id:S,number:F,text:D}),e.contents.push({kind:"figure",level:0,id:S,text:$e(D)}));let M=r(E,e.diagramIndex,{id:S,caption:D});return e.diagramIndex+=1,M}function p(E){let S=o[E]||"";return!S.trim()||/^\`\`\`/.test(S)||/^(#{1,6})\\s+/.test(S)||/^ {0,3}&gt;|^ {0,3}>/.test(S)||/^ {0,3}(?:[-*_]\\s*){3,}$/.test(S)||/^:::/.test(S)||!!pt(S)||E+1<o.length&&!!Rr(o[E+1])}function g(E,S){let x=pt(o[E]),y=/^\\d/.test(x[2]),F=[],D=E,M=y?Number.parseInt(x[2],10):null;for(;D<o.length;){let N=pt(o[D]);if(!N||N[1].length!==S||/^\\d/.test(N[2])!==y)break;let q={content:[N[3]],children:[]};for(D+=1;D<o.length;){let H=pt(o[D]);if(H&&H[1].length>S){let O=g(D,H[1].length);q.children.push(O.html),D=O.index;continue}if(!o[D].trim()){D+=1;let O=D<o.length?pt(o[D]):null;if(D>=o.length||!O||O[1].length<=S)break;continue}if(/^\\s+/.test(o[D])&&!pt(o[D])){q.content.push(o[D].trim()),D+=1;continue}break}F.push(q)}let R=y?"ol":"ul",A=y&&M!==1?\` start="\${M}"\`:"",P=F.map(N=>{let q=!y&&N.content.length===1&&N.content[0].match(/^\\[([ xX])\\]\\s+(.*)$/),H=q?\`<input type="checkbox" disabled\${q[1].toLowerCase()==="x"?" checked":""}> \${$e(q[2])}\`:$e(N.content.join(" "));return\`<li\${q?' class="docdiagram-task-list-item"':""}>\${H}\${N.children.join("")}</li>\`}).join("");return{html:\`<\${R}\${A}>\${P}</\${R}>\`,index:D}}function m(E){let{name:S,attributes:x}=E;if(Object.keys(x).some(F=>!ln[S].attributes.includes(F)))return null;if(S==="diagram"){let F=x.id;if(!F)return null;let D=d.get(F);return D?l.has(F)?\`<section class="docdiagram-error"><strong>Diagram "\${k(F)}" has multiple definitions.</strong></section>\`:(u.get(F)||0)>1?\`<section class="docdiagram-error"><strong>Diagram "\${k(F)}" is referenced more than once.</strong></section>\`:h(D.source):\`<section class="docdiagram-error"><strong>Diagram "\${k(F)}" could not be found.</strong></section>\`}let y=x.depth===void 0?3:Number(x.depth);return!Number.isInteger(y)||y<1||y>6||x.diagrams!==void 0&&x.diagrams!=="true"&&x.diagrams!=="false"?null:\`toc:\${y}:\${x.diagrams==="true"}\`}function f(E,S){let x=zt(o[E]);if(!x||co(x.name))return null;let y=qa(o,E,S);if(y===-1)return null;let{name:F,attributes:D}=x;if(Object.keys(D).some(N=>!ln[F].attributes.includes(N)))return null;if(F==="grid"){let N=Mo[D.columns];if(!N)return null;let q=[],H=E+1;for(;H<y;){if(!o[H].trim()){H+=1;continue}let O=zt(o[H]);if(!O||!["panel","callout","stack"].includes(O.name))return null;let oe=f(H,y);if(!oe)return null;q.push(\`<div class="docdiagram-grid-item">\${oe.html}</div>\`),H=oe.next}return{html:\`<div class="docdiagram-grid" style="--docdiagram-grid-columns:\${N}">\${q.join("")}</div>\`,next:y+1}}if(F==="stack")return Object.keys(D).length?null:{html:\`<div class="docdiagram-stack">\${b(E+1,y)}</div>\`,next:y+1};let M=Ha(D,s,a);if(M===null||F==="callout"&&D.kind!==void 0&&!Ao.includes(D.kind))return null;let R=D.title?\`<div class="docdiagram-component-title">\${$e(D.title)}</div>\`:"",A=b(E+1,y),P=\`docdiagram-component\${F==="callout"?"":\` docdiagram-\${F}\`}\${M?" docdiagram-component-styled":""}\`;if(F==="callout"){let N=D.kind||"info";return{html:\`<aside class="\${P} docdiagram-callout docdiagram-callout-\${N}"\${M?\` style="\${M}"\`:""} aria-label="\${k(D.title||N)} callout"><div class="docdiagram-callout-kind">\${k(N)}</div>\${R}\${A}</aside>\`,next:y+1}}return{html:\`<section class="\${P}"\${M?\` style="\${M}"\`:""}>\${R}\${A}</section>\`,next:y+1}}function b(E=0,S=o.length){let x=[],y=E;for(;y<S;){let F=o[y];if(!F.trim()){y+=1;continue}if(/^:::/.test(F)){let N=zt(F);if(N&&co(N.name)){let H=m(N);x.push(H??\`<pre class="docdiagram-literal-source"><code>\${k(F)}</code></pre>\`),y+=1,H!==null&&y<S&&Ir(o[y])&&(y+=1);continue}let q=f(y,S);q?(x.push(q.html),y=q.next):(x.push(\`<pre class="docdiagram-literal-source"><code>\${k(F)}</code></pre>\`),y+=1);continue}let D=Ge(F);if(D){let N=o.slice(y+1,S).findIndex(O=>ut(O,D.marker));if(N===-1){x.push('<section class="docdiagram-error"><strong>Unclosed code block.</strong></section>');break}let q=y+N+1,H=o.slice(y+1,q).join(\`
\`);if(D.info==="diagram"){let O=Xe(H);O&&l.has(O)?x.push(\`<section class="docdiagram-error"><strong>Diagram "\${k(O)}" has multiple definitions.</strong></section>\`):(!O||!u.has(O))&&x.push(h(H))}else{let O=D.info?\` class="language-\${k(D.info)}"\`:"";x.push(\`<pre><code\${O}>\${Pr(H,D.info)}</code></pre>\`)}y=q+1;continue}let M=F.match(/^(#{1,6})\\s+(.+?)\\s*#*\\s*$/);if(M){let N=M[1].length,q=Pa(M[2],e);e.anchors&&e.anchors.set(q,(e.anchors.get(q)||0)+1),e.contents.push({kind:"heading",level:N,id:q,text:$e(M[2])}),x.push(\`<h\${N} id="\${q}">\${$e(M[2])}</h\${N}>\`),y+=1;continue}if(/^ {0,3}(?:[-*_]\\s*){3,}$/.test(F)){x.push("<hr>"),y+=1;continue}if(/^ {0,3}>/.test(F)){let N=[];for(;y<S&&/^ {0,3}>/.test(o[y]);)N.push(o[y].replace(/^ {0,3}> ?/,"")),y+=1;x.push(\`<blockquote>\${un(N.join(\`
\`),e,{...n,diagramReferenceRegistry:c})}</blockquote>\`);continue}let R=pt(F);if(R){let N=g(y,R[1].length);x.push(N.html),y=N.index;continue}let A=y+1<S?Rr(o[y+1]):null;if(A){let N=lo(F),q=[];for(y+=2;y<S&&o[y].includes("|")&&o[y].trim();)q.push(lo(o[y])),y+=1;let H=(O,oe)=>oe.map((de,De)=>\`<\${O}\${A[De]?\` style="text-align:\${A[De]}"\`:""}>\${$e(de||"")}</\${O}>\`).join("");x.push(\`<table><thead><tr>\${H("th",N)}</tr></thead><tbody>\${q.map(O=>\`<tr>\${H("td",O)}</tr>\`).join("")}</tbody></table>\`);continue}let P=[F.trim()];for(y+=1;y<S&&!p(y);)P.push(o[y].trim()),y+=1;x.push(\`<p>\${$e(P.join(" "))}</p>\`)}return x.join("")}let v=b();return i?v:Oa(v,e)}function qr(t){let e=mt(t),n=new Map;return un(e.content,{diagramIndex:0,anchors:n},{renderDiagram:()=>"",documentColorScheme:e.colourScheme,documentTheme:e.theme}),n}function ja(t,e,n){let o=t.filter(d=>d.kind==="figure"?n:d.level<=e);if(!o.length)return"";let r=o.filter(d=>d.kind==="heading").map(d=>d.level),i=Math.min(...r.length?r:[1]),s=[],a=[];for(let d of o){let l=d.kind==="figure"?(a.length?a[a.length-1].level:0)+1:d.level-i+1;for(;a.length&&a[a.length-1].level>=l;)a.pop();let u={entry:d,level:l,children:[]};(a.length?a[a.length-1].children:s).push(u),d.kind==="heading"&&a.push(u)}let c=d=>\`<ul>\${d.map(l=>\`<li class="docdiagram-contents-\${l.entry.kind}"><a href="#\${k(l.entry.id)}">\${l.entry.text}</a>\${l.children.length?c(l.children):""}</li>\`).join("")}</ul>\`;return\`<nav class="docdiagram-contents" aria-label="Table of contents">\${c(s)}</nav>\`}function Oa(t,e){let n=e.figures||new Map,o=e.contents||[];return t.replace(Ma,(r,i)=>{let s=n.get(i);return s?\`<a href="#\${k(i)}">\${s.number===null?$e(s.text):String(s.number)}</a>\`:\`<strong class="docdiagram-error-inline">Unknown reference "\${k(i)}"</strong>\`}).replace(Ta,(r,i)=>{let[s,a]=i.split(":");return ja(o,Number(s),a==="true")})}function zr(t,e){return t||\`diagram \${e+1}\`}function Ga(t,e){let n=new Map,o=[],r="";return t.source.split(\`
\`).forEach((i,s)=>{let a=i.match(/^([A-Za-z_][\\w-]*):/);a&&(r=a[1]);let c=i.match(/^\\s*-\\s+id:\\s*(?:"([^"]+)"|'([^']+)'|([^\\s#]+))/),d=t.lineRanges[s];c&&d&&n.set(c[1]||c[2]||c[3],d),r==="edges"&&/^\\s*-\\s+[^:]+:/.test(i)&&d&&o.push(d)}),e.map(i=>i.kind==="node"?{...i,sourceRange:i.sourceRange??n.get(i.id)}:{...i,sourceRange:i.sourceRange??o[i.index]})}function Hr(t){let e=[],n=[],o=!1,r=null;for(let[i,s]of t.source.split(\`
\`).entries()){let a=s.length-s.trimStart().length;if(r!==null){if(!s.trim()||a>r)continue;r=null}if(/^[A-Za-z_][\\w-]*:/.test(s)&&(o=s.startsWith("nodes:"),n.length=0),!o)continue;let c=s.match(/^\\s*(-\\s+)?([A-Za-z_][\\w-]*):\\s*(.*)$/);if(!c)continue;if(c[1]){for(;n.length&&n[n.length-1].indent>=a;)n.pop();let l={indent:a};e.push(l),n.push(l)}else for(;n.length&&n[n.length-1].indent>=a;)n.pop();let d=n[n.length-1];if(d&&(c[1]||a===d.indent+2)){if(c[2]==="id"){let l=Be(c[3]);typeof l=="string"&&(d.id=l)}else if(c[2]==="href"){let l=t.lineRanges[i],u=s.indexOf("href:");d.range={start:{...l.start,column:l.start.column+u,offset:l.start.offset+u},end:l.end}}}/^\\|[+-]?$/.test(c[3])&&(r=a+(c[1]?2:0))}return new Map(e.filter(i=>i.id&&i.range).map(i=>[i.id,i.range]))}function jr(t,e){let n=Math.min(t.x+t.width,e.x+e.width)-Math.max(t.x,e.x),o=Math.min(t.y+t.height,e.y+e.height)-Math.max(t.y,e.y);return n>0&&o>0?{width:n,height:o}:null}function Va(t,e,n){let o=Xt(t,e);for(let r of o){let i=r.kind==="node"?{kind:"node",id:r.id}:{kind:"edge",index:r.index,source:t.edges[r.index].source,target:t.edges[r.index].target},s=r.kind==="node"?\`Node "\${r.id}"\`:\`Edge \${r.index+1}\`,a=It(r.ref),{bounds:c,target:d}=r;r.kind==="node"&&a===a.toLowerCase()&&(c.x<d.x||c.y<d.y||c.x+c.width>d.x+d.width||c.y+c.height>d.y+d.height)&&n("annotation-overflow",\`\${s} annotation does not fit inside its node bounds. Enlarge the node or choose an outside position.\`,"warning",[i]);let l=r.kind==="node"?e.getById(r.id)?.node:null,u=e.entries.find(h=>(!l||!e.isRelated(l,h.node))&&jr(c,h.bounds));u&&n("annotation-overlap",\`\${s} annotation overlaps node "\${u.node.id}".\`,"warning",[i,{kind:"node",id:u.node.id}])}}function Wa(t,e){let n=t.entries;for(let o=0;o<n.length;o+=1)for(let r=o+1;r<n.length;r+=1){let i=n[o],s=n[r];if(t.isRelated(i.node,s.node))continue;let a=jr(i.bounds,s.bounds);a&&e("node-overlap",\`Nodes "\${i.node.id}" and "\${s.node.id}" overlap by \${Math.round(a.width)} by \${Math.round(a.height)} units.\`,"warning",[{kind:"node",id:i.node.id},{kind:"node",id:s.node.id}])}}function Ua(t,e){for(let{node:n}of t.entries){let o=Number(n.size?.width)||V.width,r=Number(n.size?.height)||V.height,{textBounds:i}=Ce(n,0,0,o,r),s=Dt(i,n),a=24;if(n.shape==="text"){let d=ge(n.label).find(l=>ze(l.replace(/^#{1,2}\\s+/,""),/^#{1,2}\\s/.test(l)?24:16)>i.width+a);d!==void 0&&e("label-overflow",\`Node "\${n.id}" has a line wider than its shape: "\${d.trim()}".\`,"warning",[{kind:"node",id:n.id}])}let c=s.labelLines.length*s.labelLineHeight+(s.subtitleLines.length?6+s.subtitleLines.length*s.subtitleLineHeight:0);c>i.height+a&&e("label-overflow",\`Node "\${n.id}" needs \${Math.ceil(c)} units of text height but its shape offers \${Math.floor(i.height+a)}.\`,"warning",[{kind:"node",id:n.id}])}}function Ya(t,e,n){let o=i=>({kind:"edge",index:i,source:t.edges[i].source,target:t.edges[i].target}),r=He(t,e);for(let[i,s]of(t.edges||[]).entries()){let a=o(i),c=e.getById(s.source),d=e.getById(s.target);for(let[p,g,m]of[["source",s.source,c],["target",s.target,d]])m||n("unknown-edge-endpoint",\`Edge "\${s.source}" -> "\${s.target}" names a \${p} node "\${g}" that does not exist, so it is not drawn.\`,"error",[a]);if(!c||!d)continue;let l=e.entries.filter(({node:p})=>!e.isRelated(p,c.node)&&!e.isRelated(p,d.node)),u=r[i],h=Bt(u.path.path);for(let p of l)h.slice(1).some((m,f)=>ct(h[f],m,p.bounds))&&n("edge-crosses-node",\`Edge "\${s.source}" -> "\${s.target}" passes through unrelated node "\${p.node.id}".\`,"warning",[a,{kind:"node",id:p.node.id}]);if(u.label&&!u.label.clear){let p=[a],g=new Set([\`edge:\${i}\`]);for(let m of u.label.conflicts){if(m.kind==="canvas")continue;let f=m.kind==="node"?\`node:\${m.id}\`:\`edge:\${m.edgeIndex}\`;g.has(f)||(g.add(f),p.push(m.kind==="node"?{kind:"node",id:m.id}:o(m.edgeIndex)))}n("edge-label-overlap",\`Edge "\${s.source}" -> "\${s.target}" has no clear position for its label; the deterministic fallback remains visible.\`,"warning",p)}}}function uo(t){let e=[],n=ht(t);try{gt(t)}catch(i){let s={severity:"error",rule:"schema",message:i.message};if(i instanceof Ue)for(let a of nt(t))try{we(a.source)}catch(c){if(c instanceof Ue){s.diagram=zr(a.id,a.index),s.location={diagramId:a.id,diagramIndex:a.index,fenceRange:a.fenceRange,subjects:[{kind:"node",id:c.nodeId,sourceRange:Hr(a).get(c.nodeId)}]};break}}return e.push(s),{sourceHash:n,messages:e,errorCount:1,warningCount:0}}let o=mt(t).colourScheme,r=qr(t);return nt(t).forEach(i=>{let s=we(i.source,o);if(s.type!=="flowchart")return;let a=zr(i.id,i.index),c=(h,p,g="warning",m=[])=>{e.push({severity:g,rule:h,message:p,diagram:a,location:{diagramId:i.id,diagramIndex:i.index,fenceRange:i.fenceRange,subjects:Ga(i,m)}})},d=new Y(s),l=Hr(i);for(let{node:h}of d.entries){if(h.href===void 0)continue;let p=Pt(h.href),g=r.get(p)||0;g!==1&&c(g?"ambiguous-node-destination":"missing-node-destination",g?\`Node "\${h.id}" destination "\${h.href}" matches \${g} rendered anchors.\`:\`Node "\${h.id}" destination "\${h.href}" does not match a rendered heading or diagram anchor.\`,"warning",[{kind:"node",id:h.id,sourceRange:l.get(h.id)}])}Ya(s,d,c),Wa(d,c),Ua(d,c),Va(s,d,c);let u=fr(s);u&&(c("unbalanced-aspect-ratio",\`Fitted content is \${u.width} by \${u.height} units (\${u.aspectRatio.toFixed(1)}:1 \${u.direction}); \${u.reason}.\`,"warning"),e[e.length-1].suggestedAction={id:"wrap-linear-flow",label:\`Wrap this \${u.direction} flow\`,diagramIndex:i.index})}),{sourceHash:n,messages:e,errorCount:e.filter(i=>i.severity==="error").length,warningCount:e.filter(i=>i.severity==="warning").length}}function Or(t){return t.messages.map(e=>[e.severity,e.diagram?\`[\${e.diagram}]\`:null,e.message,\`(\${e.rule})\`].filter(Boolean).join(" ")).join(\`
\`)}var go={h1:{fontSize:26,lineHeight:34},h2:{fontSize:20,lineHeight:26},body:{fontSize:16,lineHeight:20}},ho=.72,_a=/^(#{1,2})\\s+(.*)$/,mo=/(\\*\\*([^*]+)\\*\\*)|((?<!\\w)_([^_\\s](?:[^_]*[^_\\s])?)_)(?!\\w)|(\`([^\`]+)\`)/g;function Xa(t){let e=t.match(_a);return e?{kind:e[1].length===1?"h1":"h2",text:e[2]}:{kind:"body",text:t}}function Ka(t){let e=[],n=0,o;for(mo.lastIndex=0;o=mo.exec(t);)o.index>n&&e.push({text:t.slice(n,o.index)}),o[2]!==void 0?e.push({text:o[2],bold:!0}):o[4]!==void 0?e.push({text:o[4],italic:!0}):o[6]!==void 0&&e.push({text:o[6],code:!0}),n=mo.lastIndex;return(n<t.length||!e.length)&&e.push({text:t.slice(n)}),e}function Za(t,e,n,o,r,i){let s=[];n&&(s.push(\`x="\${o}"\`),r!==null&&s.push(\`dy="\${r}"\`));let a=[\`font-size:\${i}px\`];(t.bold||e)&&a.push("font-weight:700"),t.italic&&a.push("font-style:italic"),t.code&&a.push("font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace"),s.push(\`style="\${a.join(";")}"\`);let c=k(t.text)||" ";return\`<tspan \${s.join(" ")}>\${c}</tspan>\`}function Ja(t,e,n,o,r){if(!o.length)return"";let i=n+go[o[0].kind].lineHeight*ho,s=n,a=0,c=o.map((d,l)=>{let u=go[d.kind],h=s+u.lineHeight*ho,p=l===0?null:h-a;s+=u.lineHeight,a=h;let g=Ka(d.text),m=d.kind!=="body";return g.map((f,b)=>Za(f,m,b===0,t,b===0?p:null,u.fontSize)).join("")}).join("");return\`<text x="\${t}" y="\${i}" text-anchor="\${e}" class="docdiagram-node-label docdiagram-node-label-markdown" fill="\${k(r)}">\${c}</text>\`}function Gr(t,e,n){let o=ge(e.label).map(Xa),r=e.subtitle?ge(e.subtitle):[];if(!o.length&&!r.length)return"";let i=15,s=o.reduce((v,E)=>v+go[E.kind].lineHeight,0),a=r.length?6:0,c=r.length*i,d=s+a+c,l=e.textHAlign||"center",u=l==="left"?t.x:l==="right"?t.x+t.width:t.x+t.width/2,h=l==="left"?"start":l==="right"?"end":"middle",p=t.y+t.height/2,g=e.textVAlign==="top"?t.y:p-d/2,m=Ja(u,h,g,o,n),f=g+s+a+i*ho,b=r.length?ye(u,f,r,i,"docdiagram-node-subtitle",n,h):"";return m+b}function mn(t){return[t?.caption?' class="docdiagram docdiagram-captioned"':' class="docdiagram"',t?.id?\` id="\${k(t.id)}"\`:""].join("")}function gn(t,e){return t?.caption?\`<figcaption class="docdiagram-caption">\${e(t.caption)}</figcaption>\`:""}function hn(t,e,n,o,r=!1){let i=r?"group":"img";if(t.description===void 0)return{attributes:\`role="\${i}" aria-label="\${k(n)}"\`,metadata:""};let s=\`docdiagram-title-\${e}\`;if(!o?.caption)return{attributes:\`role="\${i}" aria-labelledby="\${s}"\`,metadata:\`<title id="\${s}">\${k(t.description)}</title>\`};let a=\`docdiagram-description-\${e}\`;return{attributes:\`role="\${i}" aria-labelledby="\${s}" aria-describedby="\${a}"\`,metadata:\`<title id="\${s}">\${k(o.caption)}</title><desc id="\${a}">\${k(t.description)}</desc>\`}}function po(t,e,n,o=!1){let r=e!=="none",i=e==="flowchart",s=n.expandedDiagramIndex===t;return['<div class="docdiagram-diagram-toolbar" role="toolbar" aria-label="Diagram controls">',\`<button type="button" class="docdiagram-icon-button docdiagram-zoom-in" data-diagram-index="\${t}" aria-label="Zoom in" title="Zoom in">+</button>\`,\`<button type="button" class="docdiagram-icon-button docdiagram-zoom-out" data-diagram-index="\${t}" aria-label="Zoom out" title="Zoom out">\\u2212</button>\`,\`<button type="button" class="docdiagram-icon-button docdiagram-fit" data-diagram-index="\${t}" aria-label="Zoom to fit" title="Zoom to fit">\\u22A1</button>\`,\`<button type="button" class="docdiagram-icon-button docdiagram-toggle-expand" data-diagram-index="\${t}" aria-pressed="\${s}" aria-label="\${s?"Collapse diagram":"Expand diagram"}" title="\${s?"Collapse diagram (Esc)":"Expand diagram"}">\${s?"\\u2921":"\\u2922"}</button>\`,'<div class="docdiagram-diagram-export">',\`<button type="button" class="docdiagram-icon-button docdiagram-export-toggle" data-diagram-index="\${t}" aria-label="Export diagram" aria-expanded="false" title="Export diagram">\\u21E7</button>\`,'<div class="docdiagram-diagram-export-menu" hidden>',\`<button type="button" class="docdiagram-open-diagram" data-diagram-index="\${t}">Open full diagram</button>\`,\`<button type="button" class="docdiagram-save-diagram" data-diagram-index="\${t}">Save as Skryb diagram</button>\`,\`<button type="button" class="docdiagram-download-diagram" data-diagram-index="\${t}">Save as SVG</button>\`,\`<button type="button" class="docdiagram-print-diagram" data-diagram-index="\${t}">Print / Save as PDF</button>\`,"</div>","</div>",r?n.editingDiagramIndex===t?\`<button type="button" class="docdiagram-icon-button docdiagram-done-editing" aria-label="Done editing" title="Done editing">\\u2713</button><button type="button" class="docdiagram-icon-button docdiagram-cancel-editing" aria-label="Cancel editing and discard changes" title="Cancel editing and discard changes">\\xD7</button>\${i?\`<button type="button" class="docdiagram-icon-button docdiagram-create-node" data-diagram-index="\${t}" aria-label="New node" title="New node">+</button>\`:""}\`:n.editingDiagramIndex===null?\`\${o?\`<button type="button" class="docdiagram-icon-button docdiagram-relayout" data-diagram-index="\${t}" aria-label="Relayout diagram" title="Relayout diagram">\\u21BB</button>\`:""}<button type="button" class="docdiagram-icon-button docdiagram-start-editing" data-diagram-index="\${t}" aria-label="Edit diagram" title="Edit diagram">\\u270E</button>\`:"":"","</div>"].join("")}function Vr(t,e,n,o,r){let{selectedNode:i,selectedEdge:s,editingNode:a,editingEdge:c,connectionDrag:d,diagramZooms:l,diagramCameraOffsets:u}=n,h=n.editingDiagramIndex===e,p=new Y(t),g=p.entries,m=[],f=(T,_,le=!1)=>{let Q=Ye(T,_,le);return m.push(Q),dt(T,Q,n.documentColorScheme,n.documentTheme)},b=He(t,p),v=[],E=[],S=fe[n.documentColorScheme][n.documentTheme==="dark"?"dark":"light"],x=Object.entries(S).filter(([,T])=>T.gradient).map(([T,_])=>\`<linearGradient id="docdiagram-\${n.documentColorScheme}-\${e}-\${T}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="\${k(_.gradient||_.fill)}"/><stop offset="1" stop-color="\${k(_.fill)}"/></linearGradient>\`).join(""),y=t.edges.map((T,_)=>{let le=b[_];if(!le)return"";let{sourceAnchor:Q,targetAnchor:ie,path:W,label:U}=le,Ve=U?.center.x??W.midpoint.x,se=U?.center.y??W.midpoint.y-10,K=St(t,T,n.documentTheme,n.documentColorScheme),Ne=s?.diagramIndex===e&&s.edgeIndex===_,he=Ne&&c?.diagramIndex===e&&c.edgeIndex===_,ue=Number(K.strokeWidth)||2,me=ue+(Ne?2:0),Z=T.strokeType,Ke=220,pe=72,re=Ln(T,"start"),Ze=Ln(T,"end"),Ae=\`docdiagram-marker-\${e}-\${_}-start\`,it=\`docdiagram-marker-\${e}-\${_}-end\`;re!=="none"&&v.push(Rt(Ae,re,"start",K.stroke||"",me)),Ze!=="none"&&v.push(Rt(it,Ze,"end",K.stroke||"",me)),Ne&&h&&E.push(\`<circle class="docdiagram-edge-endpoint" data-diagram-index="\${e}" data-edge-index="\${_}" data-endpoint="source" cx="\${Q.x}" cy="\${Q.y}" r="7"/>\`,\`<circle class="docdiagram-edge-endpoint" data-diagram-index="\${e}" data-edge-index="\${_}" data-endpoint="target" cx="\${ie.x}" cy="\${ie.y}" r="7"/>\`,zo(e,_,T.waypoint??W.midpoint,!!T.waypoint));let yt=[re!=="none"?\` marker-start="url(#\${Ae})"\`:"",Ze!=="none"?\` marker-end="url(#\${it})"\`:""].join(""),Me=k(K.stroke||""),Je=Z==="double"?\`<path class="docdiagram-edge" d="\${W.path}" stroke="\${Me}" stroke-width="\${me+ue*2}"/><path d="\${W.path}" fill="none" stroke="\${k(S.background.fill)}" stroke-width="\${ue}"/><path d="\${W.path}"\${yt} fill="none" stroke="none"/>\`:\`<path class="docdiagram-edge" d="\${W.path}"\${yt} stroke="\${Me}" stroke-width="\${me}"\${Z==="dotted"?' stroke-linecap="round" stroke-dasharray="1 6"':""}\${Z==="dashed"?' stroke-dasharray="8 6"':""}/>\`;return[\`<g class="docdiagram-edge-group\${Ne?" docdiagram-edge-selected":""}" data-diagram-index="\${e}" data-edge-index="\${_}">\`,\`<path class="docdiagram-edge-hit" d="\${W.hitPath}" fill="none" stroke="transparent" stroke-width="16"/>\`,Je,he?\`<foreignObject class="docdiagram-inline-editor-host" x="\${Ve-Ke/2}" y="\${se-pe/2}" width="\${Ke}" height="\${pe}"><textarea class="docdiagram-inline-editor docdiagram-inline-editor-edge" aria-label="Edit edge label. Press Enter for a new line. Press Control or Command plus Enter to save. Press Escape to cancel.">\${k(T.label||"")}</textarea></foreignObject>\`:U?ye(Ve,U.startY,U.lines,Ft,"docdiagram-edge-label",K.text||""):"",T.ref!==void 0?f(T.ref,U?.bounds??{x:W.midpoint.x,y:W.midpoint.y,width:0,height:0},!0):"","</g>"].join("")}).join(""),F=[],D=g.map(({node:T,position:_},le)=>{let Q=_.x,ie=_.y,W=Number(T.size?.width)||190,U=Number(T.size?.height)||80,Ve=st(t,T,n.documentTheme,n.documentColorScheme),se=T.palette||Gt(t,T.class)?.palette,K=se?S?.[se]:void 0,Ne=T.arrow?Yt({x:Q,y:ie,width:W,height:U},T.arrow):null,he=Ne&&K?.gradient?\`docdiagram-\${n.documentColorScheme}-\${e}-\${se}-callout-\${le}\`:"";he&&K&&F.push(\`<linearGradient id="\${he}" gradientUnits="userSpaceOnUse" x1="\${Q}" y1="\${ie}" x2="\${Q}" y2="\${ie+U}"><stop offset="0" stop-color="\${k(K.gradient||K.fill)}"/><stop offset="1" stop-color="\${k(K.fill)}"/></linearGradient>\`);let ue=K?.gradient?{...Ve,fill:he?\`url(#\${he})\`:\`url(#docdiagram-\${n.documentColorScheme}-\${e}-\${se})\`}:Ve,me=i?.diagramIndex===e&&i.nodeId===T.id,Z=me&&a?.diagramIndex===e&&a.nodeId===T.id,Ke=(Number(ue.strokeWidth)||2)+(me?2:0),pe=Ce(T,Q,ie,W,U),re=Dt(pe.textBounds,T),Ze=T.shape==="text",Ae=h?void 0:T.href,it=T.label.trim()||T.subtitle?.trim()||\`Go to \${Ae}\`,yt=T.ref!==void 0?\`\${it}, reference \${je(T.ref)}\`:it;return[Ae?\`<a class="docdiagram-node-link" href="\${k(Ae)}" aria-label="\${k(yt)}">\`:"",\`<g class="docdiagram-node\${me?" docdiagram-node-selected":""}" data-diagram-index="\${e}" data-node-id="\${k(T.id)}">\`,Ae?\`<rect class="docdiagram-node-link-hit" x="\${Q}" y="\${ie}" width="\${W}" height="\${U}" fill="transparent" pointer-events="all"/>\`:"",Ut(pe,ue,Ke,T.strokeType,S.background.fill),Ne?Ho(Ne,pe.bodyMarkup,ue,Ke,\`docdiagram-callout-mask-\${e}-\${le}\`):"",Z?\`<foreignObject class="docdiagram-inline-editor-host" x="\${pe.textBounds.x}" y="\${pe.textBounds.y}" width="\${pe.textBounds.width}" height="\${pe.textBounds.height}"><textarea class="docdiagram-inline-editor docdiagram-inline-editor-node" aria-label="Edit node label. Press Enter for a new line. Press Control or Command plus Enter to save. Press Escape to cancel.">\${k(T.label)}</textarea></foreignObject>\`:Ze?Gr(pe.textBounds,T,ue.text||""):ye(re.centerX,re.labelStartY,re.labelLines,re.labelLineHeight,"docdiagram-node-label",ue.text||"",re.textAnchor),!Z&&!Ze&&re.subtitleLines.length?ye(re.centerX,re.subtitleStartY,re.subtitleLines,re.subtitleLineHeight,"docdiagram-node-subtitle",ue.text||"",re.textAnchor):"",me&&h&&!Z?[["top-left",Q-7,ie-7],["top-right",Q+W-7,ie-7],["bottom-left",Q-7,ie+U-7],["bottom-right",Q+W-7,ie+U-7]].map(([Me,Je,Dn])=>\`<rect class="docdiagram-resize-handle" data-resize-corner="\${Me}" x="\${Je}" y="\${Dn}" width="14" height="14" rx="3"/>\`).join(""):"",me&&h&&!Z?ce.map(Me=>{let Je=pe.anchors[Me];return\`<circle class="docdiagram-connection-port" data-anchor="\${Me}" cx="\${Je.x}" cy="\${Je.y}" r="7" aria-label="\${Me} connection port"/>\`}).join(""):"",me&&h&&!Z&&T.arrow?\`<circle class="docdiagram-callout-handle" data-diagram-index="\${e}" data-node-id="\${k(T.id)}" cx="\${T.arrow.x}" cy="\${T.arrow.y}" r="7" aria-label="Callout pointer target"/>\`:"",Ae?\`<rect class="docdiagram-node-link-focus" x="\${Q+2}" y="\${ie+2}" width="\${W-4}" height="\${U-4}" rx="4" fill="none" stroke="\${k(ue.text||"")}" stroke-width="2" stroke-dasharray="4 3" visibility="hidden" pointer-events="none"/><path class="docdiagram-node-link-indicator" d="M \${Q+W-20} \${ie+16} h 10 m -4 -4 l 4 4 l -4 4" fill="none" stroke="\${k(ue.text||"")}" stroke-width="1.5" aria-hidden="true" pointer-events="none"/>\`:"",T.ref!==void 0?f(T.ref,{x:Q,y:ie,width:W,height:U}):"","</g>",Ae?"</a>":""].join("")}).join(""),M=Number(t.canvas.width)||1e3,R=Number(t.canvas.height)||560,A=Math.min(0,...m.map(T=>T.x-2)),P=Math.min(0,...m.map(T=>T.y-2)),N=Math.max(M,...m.map(T=>T.x+T.width+2)),q=Math.max(R,...m.map(T=>T.y+T.height+2)),H=n.expandedDiagramIndex===e,O=n.diagramViewportHeights.get(e),oe=O&&!H?\` style="box-sizing: border-box; height: \${O}px; min-height: 0"\`:"",de=u.get(e)||{x:0,y:0},De=\`width: \${l.get(e)||100}%; transform: translate(\${de.x}px, \${de.y}px)\`,Fe=hn(t,e,"Architecture diagram",r,m.length>0||!h&&g.some(({node:T})=>T.href!==void 0));return[\`<figure\${mn(r)} data-diagram-index="\${e}" data-diagram-type="flowchart" data-editing="\${h}" data-expanded="\${H}"\${oe}>\`,o(e,"flowchart",n,t.layout!==void 0),\`<svg viewBox="\${A} \${P} \${N-A} \${q-P}" \${Fe.attributes} data-diagram-index="\${e}" style="\${De}">\`,Fe.metadata,\`<defs>\${x}\${F.join("")}\${v.join("")}</defs>\`,D,y,d?.diagramIndex===e?\`<path class="docdiagram-connection-preview\${d.invalid?" docdiagram-connection-invalid":""}" d="\${Qe(d.start,d.current,d.sourceAnchor,d.targetAnchor||d.sourceAnchor,"straight").path}"/>\`:"",E.join(""),"</svg>",gn(r,$e),"</figure>"].join("")}function Wr(t,e,n,o,r){let i=Lt(t,n.documentTheme),s=Number(t.canvas?.width)||1e3,a=Number(t.canvas?.height)||560,c=t.participants||[],d=t.messages||[],l=t.activations||[],u=t.notes||[],h=t.groups||[],p=d.some($=>$.ref!==void 0),g=90,m=90,f=28,b=Number(t.canvas?.participantSize?.width)||180,v=Number(t.canvas?.participantSize?.height)||42,E=Number(t.canvas?.participantSpacing)||220,S=16,x=74+Math.max(0,...c.filter($=>$.kind==="actor").map($=>ge($.label||"").length-1))*S,y=48,F=16,D=16,M=15,R=12,A=26,P=28,N=40,q=22,H=n.expandedDiagramIndex===e,O=n.diagramViewportHeights.get(e),oe=O&&!H?\` style="box-sizing: border-box; height: \${O}px; min-height: 0"\`:"",de=\`docdiagram-sequence-arrow-\${e}\`,De=hn(t,e,"Sequence diagram",r,p),Fe=f+x+12,T=c[0],_=c[c.length-1],le=Number(T?.size?.width)||b,Q=Number(_?.size?.width)||b,ie=c.length>1?le/2+E*(c.length-1)+Q/2:b+g+m,W=Math.max(s,ie,g+m),U=new Map;c.forEach(($,C)=>{U.set($.id,c.length===1?W/2:le/2+E*C)});let Ve=Fe+40,se=[],K=[],Ne=[],he=[],ue=[],me=new Map;u.forEach(($,C)=>{let B=Number($.after);if(!Number.isFinite(B)||B<1){ue.push({note:$,sourceIndex:C});return}let G=me.get(B)||[];G.push({note:$,sourceIndex:C}),me.set(B,G)});let Z=Fe+24,Ke=($,C)=>{let B=ge($.label||""),G=Math.max(0,...B.map(Ht=>Ht.length)),ee=Math.max(160,Number($.size?.width)||0,G*7.2+32),L=Math.max(y,B.length*D+24,Number($.size?.height)||0),z=U.get($.at||"")||W/2,j=Math.min(W-ee/2-24,Math.max(ee/2+24,z)),te=Z;return Z=te+L+F,{...$,lines:B,x:j-ee/2,y:te,width:ee,height:L,sourceIndex:C}};ue.forEach($=>K.push(Ke($.note,$.sourceIndex))),d.forEach(($,C)=>{let B=C+1;h.filter(j=>Number(j.from)===B).forEach(j=>{let te={label:j.label,from:Number(j.from),to:Number(j.to),startY:Z,endY:Z,depth:he.length};Z=te.startY+N,he.push(te),Ne.push(te)});let G=ge($.label||""),ee=Z,L=Math.max(1,G.length)*M,z=ee+L+R;se.push({...$,index:C,y:z,lines:G,labelTop:ee}),Z=z+A+($.from===$.to?P:0),(me.get(B)||[]).forEach(j=>{K.push(Ke(j.note,j.sourceIndex))});for(let j=he.length-1;j>=0;j-=1)he[j].to>B||(he[j].endY=Z,Z+=q,he.splice(j,1))}),he.forEach($=>{$.endY=Z});let pe=Math.max(Fe+140,Z+8,K.length?K[K.length-1].y+K[K.length-1].height:0,se.length?se[se.length-1].y+44:Ve,...Ne.map($=>$.endY+12)),re=Math.max(a,pe+56),Ze=re-36,Ae=l.map(($,C)=>({participantId:$.participant,depth:l.slice(0,C).filter(B=>B.participant===$.participant&&B.from<=$.from&&B.to>=$.from).length,startY:(se[$.from-1]?.y||Ve)-10,endY:(se[$.to-1]?.y||Ve)+18})),it=c.map($=>{let C=U.get($.id)||0,B=ge($.label||""),G=Et(t,$,n.documentTheme,n.documentColorScheme),ee=Number($.size?.width)||b,L=Number($.size?.height)||v;if($.kind==="actor"){let z=f+10,j=z+18,te=j+18;return[\`<g class="docdiagram-sequence-participant docdiagram-sequence-actor" data-diagram-index="\${e}" data-participant-id="\${k($.id)}">\`,\`<circle cx="\${C}" cy="\${z}" r="8" fill="none" stroke="\${k(G.stroke||"")}" stroke-width="\${Number(G.strokeWidth)||2}"/>\`,\`<path d="M \${C} \${z+8} V \${te} M \${C-14} \${j} H \${C+14} M \${C} \${te} L \${C-12} \${te+18} M \${C} \${te} L \${C+12} \${te+18}" fill="none" stroke="\${k(G.stroke||"")}" stroke-width="\${Number(G.strokeWidth)||2}" stroke-linecap="round" stroke-linejoin="round"/>\`,ye(C,f+x-4-(B.length-1)*S,B,S,"docdiagram-node-label",G.text||""),"</g>"].join("")}return[\`<g class="docdiagram-sequence-participant" data-diagram-index="\${e}" data-participant-id="\${k($.id)}">\`,\`<rect x="\${C-ee/2}" y="\${f}" width="\${ee}" height="\${L}" rx="12" fill="\${k(G.fill||"")}" stroke="\${k(G.stroke||"")}" stroke-width="\${Number(G.strokeWidth)||2}"/>\`,ye(C,f+L/2+6-(B.length-1)*S/2,B,S,"docdiagram-node-label",G.text||""),"</g>"].join("")}).join(""),yt=c.map($=>{let C=U.get($.id)||0;return\`<path class="docdiagram-sequence-lifeline" d="M \${C} \${Fe} L \${C} \${Ze}" fill="none" stroke="\${k(i.edge.stroke)}" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.35"/>\`}).join(""),Me=Ne.map($=>{let C=42+$.depth*14,B=Math.min(260,Math.max(110,String($.label||"").length*8+28));return{group:$,inset:C,labelWidth:B}}),Je=Me.map(({group:$,inset:C})=>['<g class="docdiagram-sequence-group">',\`<rect x="\${C}" y="\${$.startY}" width="\${Math.max(60,W-C*2)}" height="\${Math.max(40,$.endY-$.startY)}" rx="12" fill="none" stroke="\${k(i.edge.stroke)}" stroke-width="1.5" stroke-dasharray="10 6" opacity="0.45"/>\`,"</g>"].join("")).join(""),Dn=Me.map(({group:$,inset:C,labelWidth:B})=>['<g class="docdiagram-sequence-group-label">',\`<rect x="\${C+12}" y="\${$.startY-12}" width="\${B}" height="24" rx="6" fill="\${k(i.node.fill)}" stroke="\${k(i.edge.stroke)}" stroke-width="1.5"/>\`,\`<text x="\${C+12+B/2}" y="\${$.startY+5}" text-anchor="middle" class="docdiagram-edge-label" fill="\${k(i.edge.text)}">\${k($.label||"")}</text>\`,"</g>"].join("")).join(""),li=K.map($=>{let C=$.y+20,B=Et(t,$,n.documentTheme,n.documentColorScheme);return[\`<g class="docdiagram-sequence-note" data-diagram-index="\${e}" data-note-index="\${$.sourceIndex}">\`,\`<rect x="\${$.x}" y="\${$.y}" width="\${$.width}" height="\${$.height}" rx="10" fill="\${k(B.fill||"")}" stroke="\${k(B.stroke||"")}" stroke-width="\${Number(B.strokeWidth)||2}"/>\`,ye($.x+$.width/2,C,$.lines,D,"docdiagram-node-subtitle",B.text||""),"</g>"].join("")}).join(""),ui=Ae.map($=>{let C=U.get($.participantId)||0,B=$.depth*7,G=12,ee=Math.max(20,$.endY-$.startY),L=c.find(j=>j.id===$.participantId),z=L?Et(t,L,n.documentTheme,n.documentColorScheme):i.node;return\`<rect class="docdiagram-sequence-activation" x="\${C-G/2+B}" y="\${$.startY}" width="\${G}" height="\${ee}" rx="4" fill="\${k(z.fill||"")}" stroke="\${k(z.stroke||"")}" stroke-width="\${Number(z.strokeWidth)||2}"/>\`}).join(""),mi=se.map($=>{let C=U.get($.from)||0,B=U.get($.to)||0,G=$.style==="dashed",ee=$.lines,L=$.labelTop+12,z=\` marker-end="url(#\${de})"\`;if($.from===$.to){let te=P;return[\`<g class="docdiagram-sequence-message" data-diagram-index="\${e}" data-message-index="\${$.index}">\`,\`<path d="M \${C} \${$.y} L \${C+48} \${$.y} L \${C+48} \${$.y+te} L \${C} \${$.y+te}" fill="none" stroke="\${k(i.edge.stroke)}" stroke-width="2"\${z}\${G?' stroke-dasharray="8 5"':""}/>\`,ye(C+48/2,L,ee,M,"docdiagram-edge-label",i.edge.text),"</g>"].join("")}return[\`<g class="docdiagram-sequence-message" data-diagram-index="\${e}" data-message-index="\${$.index}">\`,\`<path d="M \${C} \${$.y} L \${B} \${$.y}" fill="none" stroke="\${k(i.edge.stroke)}" stroke-width="2"\${z}\${G?' stroke-dasharray="8 5"':""}/>\`,ye((C+B)/2,L,ee,M,"docdiagram-edge-label",i.edge.text),"</g>"].join("")}).join(""),vo=W,Fn=re,Nn=0,ko="";if(p){let $=Math.max(...d.map(L=>L.ref===void 0?0:_t(L.ref).width)),C=0,B=W,G=(L,z)=>{C=Math.min(C,L),B=Math.max(B,L+z)},ee=(L,z,j,te=!1)=>{let Ht=Math.max(0,...z.map(gi=>ze(gi,j,te)));G(L-Ht/2,Ht)};c.forEach(L=>{let z=U.get(L.id)||0,j=Number(L.size?.width)||b;G(z-j/2,j),ee(z,ge(L.label||""),16,!0),Fn=Math.max(Fn,f+(Number(L.size?.height)||v)+16)}),K.forEach(L=>{G(L.x,L.width),ee(L.x+L.width/2,L.lines,13)}),Me.forEach(({group:L,inset:z,labelWidth:j})=>{G(z,Math.max(60,W-z*2)),G(z+12,j),ee(z+12+j/2,[L.label||""],15)}),Ae.forEach(L=>{G((U.get(L.participantId)||0)-6+L.depth*7,12)}),se.forEach(L=>{let z=U.get(L.from)||0,j=U.get(L.to)||0,te=L.from===L.to;G(Math.min(z,j),te?48:Math.abs(j-z)),ee(te?z+24:(z+j)/2,L.lines,15)}),Nn=12+$+20-C,vo=B+Nn+12,ko=se.map(L=>{if(L.ref===void 0)return"";let z=_t(L.ref);return dt(L.ref,{x:12,y:L.y-z.height/2,...z},n.documentColorScheme,n.documentTheme)}).join("")}return[\`<figure\${mn(r)} data-diagram-index="\${e}" data-diagram-type="sequence" data-editing="\${n.editingDiagramIndex===e}" data-expanded="\${H}"\${oe}>\`,o(e,"sequence",n),\`<svg viewBox="0 0 \${vo} \${Fn}" \${De.attributes} data-diagram-index="\${e}" style="width: \${n.diagramZooms.get(e)||100}%">\`,De.metadata,\`<defs>\${Rt(de,"arrow","end",i.edge.stroke,2)}</defs>\`,p?\`<g class="docdiagram-sequence-content" transform="translate(\${Nn} 0)">\`:"",Je,yt,it,ui,li,mi,Dn,p?"</g>":"",ko,"</svg>",gn(r,$e),"</figure>"].join("")}function Ur(t,e,n){try{let o=we(t,n.colourScheme);return n.onDiagram(e,o),o.type==="sequence"?Wr(o,e,n.state,po,n.figure):Vr(o,e,n.state,po,n.figure)}catch(o){let r=o instanceof Error?o.message:String(o);return\`<section class="docdiagram-error"><strong>Diagram could not be rendered.</strong><br>\${k(r)}</section>\`}}function Yr(){if(document.querySelector("style[data-docdiagram-runtime-styles]"))return;let t=document.createElement("style");t.dataset.docdiagramRuntimeStyles="true",t.textContent=\`
    html,
    body {
      margin: 0;
      min-height: 100%;
    }
    html[data-docdiagram-theme="light"],
    body[data-docdiagram-theme="light"] {
      background: var(--docdiagram-page-background, #ffffff);
      color: var(--docdiagram-page-text, #17202a);
    }
    html[data-docdiagram-theme="dark"],
    body[data-docdiagram-theme="dark"] {
      background: var(--docdiagram-page-background, #17202a);
      color: var(--docdiagram-page-text, #f3f8fc);
    }
    html[data-docdiagram-expanded="true"],
    html[data-docdiagram-expanded="true"] body {
      overflow: hidden;
    }
    #rendered-document {
      background: var(--docdiagram-background);
      box-sizing: border-box;
      color: var(--docdiagram-text);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      line-height: 1.55;
      margin: 0 auto;
      max-width: 1100px;
      padding: 2rem;
    }
    #rendered-document[data-format="full-width"] {
      margin: 0;
      max-width: none;
    }
    #rendered-document[data-source-editor-open="true"] {
      padding-bottom: calc(2rem + var(--docdiagram-source-tray-height, 0px));
    }
    #rendered-document pre {
      background: var(--docdiagram-code-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 8px;
      overflow: auto;
      padding: 1rem;
    }
    /* Highlighting is colour on top of the normal code text, so a block stays perfectly readable
       in a theme that does not define these, and in print, where colour may be dropped. */
    #rendered-document .docdiagram-token-comment { color: var(--docdiagram-token-comment); font-style: italic; }
    #rendered-document .docdiagram-token-string { color: var(--docdiagram-token-string); }
    #rendered-document .docdiagram-token-number { color: var(--docdiagram-token-number); }
    #rendered-document .docdiagram-token-keyword { color: var(--docdiagram-token-keyword); font-weight: 600; }
    #rendered-document .docdiagram-token-literal { color: var(--docdiagram-token-literal); }
    #rendered-document .docdiagram-token-type { color: var(--docdiagram-token-type); }
    #rendered-document .docdiagram-token-tag { color: var(--docdiagram-token-tag); }
    #rendered-document .docdiagram-token-attribute { color: var(--docdiagram-token-attribute); }
    #rendered-document .docdiagram-token-meta { color: var(--docdiagram-token-meta); }
    #rendered-document .docdiagram-token-inserted { color: var(--docdiagram-token-inserted); }
    #rendered-document .docdiagram-token-deleted { color: var(--docdiagram-token-deleted); }
    #rendered-document code,
    #rendered-document kbd,
    #rendered-document pre,
    #rendered-document samp {
      font-family: var(--docdiagram-code-font, ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace);
      font-size: 1em;
    }
    #rendered-document :not(pre) > code {
      background: var(--docdiagram-code-background);
      border-radius: 4px;
      font-size: .95em;
      padding: .12em .3em;
    }
    #rendered-document blockquote {
      border-left: 4px solid var(--docdiagram-border);
      color: var(--docdiagram-muted);
      margin-left: 0;
      padding-left: 1rem;
    }
    #rendered-document hr {
      border: 0;
      border-top: 1px solid var(--docdiagram-border);
      margin: 2rem 0;
    }
    #rendered-document a {
      color: inherit;
      text-decoration-thickness: .1em;
      text-underline-offset: .15em;
    }
    .docdiagram-annotation-inline {
      align-items: center;
      background: var(--docdiagram-annotation-fill);
      border-radius: 999px;
      box-sizing: border-box;
      color: var(--docdiagram-annotation-text);
      display: inline-flex;
      font-family: Arial, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      height: 24px;
      justify-content: center;
      line-height: 1;
      min-width: 32px;
      padding: 0 8px;
      vertical-align: middle;
      white-space: nowrap;
    }
    .docdiagram-annotation-inline.docdiagram-annotation-inline-circle {
      min-width: 24px;
      padding: 0;
      width: 24px;
    }
    #rendered-document img {
      height: auto;
      max-width: 100%;
    }
    #rendered-document table {
      border-collapse: collapse;
      display: block;
      max-width: 100%;
      overflow-x: auto;
    }
    #rendered-document th,
    #rendered-document td {
      border: 1px solid var(--docdiagram-border);
      padding: .55rem .75rem;
    }
    #rendered-document th {
      background: var(--docdiagram-code-background);
      font-weight: 600;
    }
    #rendered-document .docdiagram-task-list-item {
      list-style: none;
    }
    #rendered-document .docdiagram-task-list-item input {
      accent-color: currentColor;
      margin: 0 .45rem 0 0;
    }
    #rendered-document .docdiagram-component {
      background: linear-gradient(
        135deg,
        var(--docdiagram-component-gradient, var(--docdiagram-component-fill, var(--docdiagram-code-background))),
        var(--docdiagram-component-fill, var(--docdiagram-code-background))
      );
      border: 1px solid var(--docdiagram-component-stroke, var(--docdiagram-border));
      border-radius: 8px;
      color: var(--docdiagram-component-text, var(--docdiagram-text));
      margin: 1rem 0;
      padding: 1rem;
    }
    #rendered-document .docdiagram-section:not(.docdiagram-component-styled) {
      background: transparent;
    }
    #rendered-document .docdiagram-component-title {
      font-size: 1.1em;
      font-weight: 700;
      margin-bottom: .5rem;
    }
    #rendered-document .docdiagram-component > :last-child {
      margin-bottom: 0;
    }
    #rendered-document .docdiagram-component a {
      color: inherit;
    }
    #rendered-document .docdiagram-component :not(pre) > code {
      background: color-mix(in srgb, currentColor 12%, transparent);
    }
    #rendered-document .docdiagram-component pre,
    #rendered-document .docdiagram-component th {
      background: transparent;
      border-color: currentColor;
      color: inherit;
    }
    #rendered-document .docdiagram-component blockquote {
      border-color: currentColor;
      color: inherit;
    }
    #rendered-document .docdiagram-callout {
      border-left-width: 8px;
    }
    #rendered-document .docdiagram-callout-kind {
      font-size: .78em;
      font-weight: 700;
      letter-spacing: .06em;
      margin-bottom: .35rem;
      text-transform: uppercase;
    }
    #rendered-document .docdiagram-grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: var(--docdiagram-grid-columns);
      margin: 1rem 0;
    }
    #rendered-document .docdiagram-grid-item > .docdiagram-component,
    #rendered-document .docdiagram-grid-item > .docdiagram-stack {
      margin: 0;
    }
    #rendered-document .docdiagram-grid-item > .docdiagram-component {
      box-sizing: border-box;
      height: 100%;
    }
    #rendered-document .docdiagram-stack {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    #rendered-document .docdiagram-stack > * {
      margin: 0;
    }
    #rendered-document .docdiagram-literal-source {
      margin: 1rem 0;
    }
    @media (max-width: 700px) {
      #rendered-document .docdiagram-grid {
        grid-template-columns: 1fr;
      }
    }
    #rendered-document[data-theme="light"],
    .docdiagram-toolbar[data-theme="light"],
    .docdiagram-source-tray[data-theme="light"] {
      --docdiagram-background: #ffffff;
      --docdiagram-border: #dce3ea;
      --docdiagram-control-background: #ffffff;
      --docdiagram-control-hover: #eef4f8;
      --docdiagram-code-background: #f5f8fa;
      --docdiagram-text: #17202a;
      --docdiagram-muted: #52616b;
      --docdiagram-token-comment: #5c6d7a;
      --docdiagram-token-string: #0a7a52;
      --docdiagram-token-number: #9a4d00;
      --docdiagram-token-keyword: #9b2c8f;
      --docdiagram-token-literal: #1b56c4;
      --docdiagram-token-type: #0f6b93;
      --docdiagram-token-tag: #9b2c8f;
      --docdiagram-token-attribute: #1b56c4;
      --docdiagram-token-meta: #9a4d00;
      --docdiagram-token-inserted: #0a7a52;
      --docdiagram-token-deleted: #b3261e;
    }
    #rendered-document[data-theme="dark"],
    .docdiagram-toolbar[data-theme="dark"],
    .docdiagram-source-tray[data-theme="dark"] {
      --docdiagram-background: #17202a;
      --docdiagram-border: #3b5263;
      --docdiagram-control-background: #263947;
      --docdiagram-control-hover: #344c5d;
      --docdiagram-code-background: #101a22;
      --docdiagram-text: #f3f8fc;
      --docdiagram-muted: #c5d5e5;
      --docdiagram-token-comment: #90a4b4;
      --docdiagram-token-string: #7fd7a8;
      --docdiagram-token-number: #f0b177;
      --docdiagram-token-keyword: #e79ae0;
      --docdiagram-token-literal: #8fbcf7;
      --docdiagram-token-type: #7fd0ee;
      --docdiagram-token-tag: #e79ae0;
      --docdiagram-token-attribute: #8fbcf7;
      --docdiagram-token-meta: #f0b177;
      --docdiagram-token-inserted: #7fd7a8;
      --docdiagram-token-deleted: #f19a94;
    }
    .docdiagram-toolbar {
      align-items: center;
      background: var(--docdiagram-background);
      color: var(--docdiagram-text);
      display: flex;
      gap: .35rem;
      justify-content: flex-end;
      margin: 0;
      max-width: 1100px;
      padding: .5rem 2rem;
      position: fixed;
      right: 0;
      top: 0;
      z-index: 40;
    }
    .docdiagram-toolbar[data-format="full-width"] {
      margin-left: 0;
      margin-right: 0;
      max-width: none;
    }
    .docdiagram-toolbar button,
    .docdiagram-toolbar input,
    .docdiagram-toolbar select {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      color: var(--docdiagram-text);
      font: inherit;
      padding: .45rem .65rem;
    }
    .docdiagram-toolbar button {
      cursor: pointer;
    }
    .docdiagram-toolbar button:hover {
      background: var(--docdiagram-control-hover);
    }
    .docdiagram-toolbar button:disabled {
      cursor: not-allowed;
      opacity: .6;
    }
    .docdiagram-menu {
      background: var(--docdiagram-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 8px;
      box-shadow: 0 4px 12px rgb(21 41 62 / 18%);
      display: flex;
      flex-direction: column;
      gap: .6rem;
      padding: .75rem;
      position: absolute;
      right: 2rem;
      top: calc(100% + .25rem);
      z-index: 20;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
    }
    .docdiagram-menu[hidden] {
      display: none;
    }
    .docdiagram-lint-dialog {
      background: var(--docdiagram-page-background, #fff);
      border: 1px solid currentColor;
      border-radius: 8px;
      color: var(--docdiagram-page-text, #111);
      max-height: 70vh;
      max-width: min(90vw, 70ch);
      padding: 16px 20px;
    }
    .docdiagram-lint-dialog::backdrop {
      background: rgb(0 0 0 / 40%);
    }
    .docdiagram-lint-dialog h2 {
      font-size: 1rem;
      margin: 0 0 12px;
    }
    .docdiagram-lint-messages {
      display: grid;
      gap: 8px;
      margin: 0 0 12px;
      max-height: 50vh;
      overflow: auto;
    }
    .docdiagram-lint-messages pre,
    .docdiagram-lint-messages button {
      background: transparent;
      color: inherit;
      font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
      font-size: 0.85rem;
      margin: 0;
      text-align: left;
      white-space: pre-wrap;
    }
    .docdiagram-lint-messages button {
      border: 1px solid var(--docdiagram-border, currentColor);
      border-radius: 4px;
      cursor: pointer;
      padding: 8px;
    }
    .docdiagram-lint-messages button:hover,
    .docdiagram-lint-messages button:focus-visible {
      background: var(--docdiagram-panel-background, rgb(127 127 127 / 10%));
    }
    .docdiagram-source-tray {
      background: var(--docdiagram-background);
      border: 1px solid var(--docdiagram-border);
      border-bottom: 0;
      box-shadow: 0 -4px 16px rgb(21 41 62 / 20%);
      box-sizing: border-box;
      color: var(--docdiagram-text);
      display: flex;
      flex-direction: column;
      height: min(42vh, 32rem);
      min-height: 12rem;
      padding: .75rem 1rem 1rem;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 40;
      font-family: Arial, Helvetica, sans-serif;
    }
    .docdiagram-source-resize {
      cursor: ns-resize;
      height: .75rem;
      left: 0;
      position: absolute;
      right: 0;
      top: -.25rem;
      touch-action: none;
    }
    .docdiagram-source-resize::before {
      background: var(--docdiagram-border);
      border-radius: 999px;
      content: "";
      display: block;
      height: .25rem;
      margin: .25rem auto 0;
      transition: background .15s, width .15s;
      width: 3rem;
    }
    .docdiagram-source-resize:hover::before,
    .docdiagram-source-resize:focus-visible::before,
    .docdiagram-source-tray[data-resizing="true"] .docdiagram-source-resize::before {
      background: var(--docdiagram-text);
      width: 5rem;
    }
    .docdiagram-source-resize:focus-visible {
      outline: 2px solid var(--docdiagram-text);
      outline-offset: 2px;
    }
    .docdiagram-source-tray[data-resizing="true"] {
      user-select: none;
    }
    .docdiagram-source-header {
      align-items: center;
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      margin-bottom: .5rem;
    }
    .docdiagram-source-shortcut {
      color: var(--docdiagram-muted);
      font-size: .8rem;
      margin-left: .75rem;
    }
    .docdiagram-source-close {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      color: var(--docdiagram-text);
      cursor: pointer;
      font: inherit;
      padding: .35rem .55rem;
    }
    .docdiagram-source-actions {
      align-items: center;
      display: flex;
      gap: .5rem;
      position: relative;
    }
    .docdiagram-source-menu-toggle {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      color: var(--docdiagram-text);
      cursor: pointer;
      font: inherit;
      padding: .35rem .55rem;
    }
    .docdiagram-source-menu {
      background: var(--docdiagram-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 8px;
      box-shadow: 0 4px 12px rgb(21 41 62 / 18%);
      display: flex;
      flex-direction: column;
      gap: .3rem;
      padding: .5rem;
      position: absolute;
      right: 2.5rem;
      bottom: calc(100% + .35rem);
      width: max-content;
      z-index: 50;
    }
    .docdiagram-source-menu[hidden] {
      display: none;
    }
    .docdiagram-source-menu button {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 5px;
      color: var(--docdiagram-text);
      cursor: pointer;
      font: inherit;
      padding: .35rem .55rem;
      text-align: left;
    }
    .docdiagram-source-menu-heading {
      color: var(--docdiagram-muted);
      font-size: .8rem;
      font-weight: 700;
      padding: .1rem .2rem;
    }
    .docdiagram-source-label {
      display: flex;
      flex: 1;
      flex-direction: column;
      font-size: .85rem;
      gap: .35rem;
      min-height: 0;
    }
    .docdiagram-source-editor {
      background: var(--docdiagram-code-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      box-sizing: border-box;
      color: var(--docdiagram-text);
      flex: 1;
      font: .85rem/1.45 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      min-height: 0;
      padding: .65rem;
      resize: none;
      width: 100%;
    }
    .docdiagram-source-status,
    .docdiagram-source-error {
      font-size: .8rem;
      margin: .45rem 0 0;
    }
    .docdiagram-source-status {
      color: var(--docdiagram-muted);
    }
    .docdiagram-source-error {
      color: #c2410c;
    }
    .docdiagram-theme-control {
      display: flex;
      flex-direction: column;
      gap: .2rem;
    }
    .docdiagram-palette-group {
      border: 0;
      display: grid;
      gap: .4rem;
      grid-template-columns: repeat(3, minmax(4.8rem, 1fr));
      margin: 0;
      padding: 0;
    }
    .docdiagram-palette-group + .docdiagram-palette-group {
      margin-top: .55rem;
    }
    .docdiagram-palette-swatch {
      cursor: pointer;
      display: block;
    }
    .docdiagram-palette-swatch input {
      inline-size: 1px;
      margin: -1px;
      opacity: 0;
      position: absolute;
    }
    .docdiagram-palette-swatch span {
      background: var(--docdiagram-swatch-fill);
      border: 2px solid var(--docdiagram-swatch-stroke);
      border-radius: 5px;
      color: var(--docdiagram-swatch-text);
      display: block;
      font-size: .7rem;
      font-weight: 700;
      line-height: 1.05;
      min-height: .9rem;
      padding: .18rem .3rem;
      text-align: center;
    }
    .docdiagram-palette-swatch input:checked + span {
      box-shadow: 0 0 0 2px var(--docdiagram-background), 0 0 0 4px var(--docdiagram-accent);
    }
    .docdiagram-palette-swatch input:focus-visible + span {
      outline: 2px solid var(--docdiagram-accent);
      outline-offset: 2px;
    }
    .docdiagram-theme-control {
      align-items: center;
      color: var(--docdiagram-muted);
      display: flex;
      font-size: .9rem;
      gap: .75rem;
      justify-content: space-between;
    }
    .docdiagram-inspector {
      background: var(--docdiagram-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 8px;
      box-sizing: border-box;
      box-shadow: 0 4px 12px rgb(21 41 62 / 18%);
      display: flex;
      flex-direction: column;
      gap: .6rem;
      max-height: calc(100vh - 5.5rem);
      overflow-x: hidden;
      overflow-y: auto;
      padding: 1rem;
      position: fixed;
      right: 1rem;
      top: 1rem;
      width: min(21rem, calc(100vw - 2rem));
      z-index: 30;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
    }
    .docdiagram-field {
      align-items: center;
      color: var(--docdiagram-muted);
      display: flex;
      flex-direction: row;
      font-size: .9rem;
      gap: .75rem;
      justify-content: space-between;
      min-width: 0;
      width: 100%;
    }
    .docdiagram-field-wide {
      align-items: stretch;
      flex-direction: column;
      gap: .35rem;
      width: 100%;
    }
    .docdiagram-field input,
    .docdiagram-field select,
    .docdiagram-field textarea {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      color: var(--docdiagram-text);
      font-size: .85rem;
      padding: .3rem .4rem;
    }
    .docdiagram-field select,
    .docdiagram-field input:not([type="color"]) {
      min-width: 9rem;
    }
    .docdiagram-field input[type="color"] {
      height: 1.9rem;
      padding: 2px;
      width: 2.6rem;
    }
    .docdiagram-field input[type="number"] {
      width: 4.6rem;
    }
    .docdiagram-inspector-row {
      align-items: center;
      color: var(--docdiagram-muted);
      display: flex;
      font-size: .9rem;
      gap: .4rem;
      min-width: 0;
    }
    .docdiagram-inspector-row > span:first-child {
      min-width: 2.8rem;
    }
    .docdiagram-inspector-row .docdiagram-field {
      gap: .35rem;
    }
    .docdiagram-inspector-row .docdiagram-field-compact {
      max-width: 4.6rem;
    }
    .docdiagram-inspector-row select,
    .docdiagram-inspector-row input {
      min-width: 0;
      width: 4.6rem;
    }
    .docdiagram-inspector-row select {
      width: auto;
    }
    .docdiagram-inspector-colour-row {
      display: grid;
      grid-template-columns: 2.8rem 2.6rem;
      width: 100%;
    }
    .docdiagram-inspector-stroke-row {
      display: grid;
      grid-template-columns: 2.8rem 2.6rem 5rem 0 3.2rem;
      width: 100%;
    }
    .docdiagram-inspector-colour-row input[type="color"],
    .docdiagram-inspector-stroke-row input[type="color"] {
      height: 1.9rem;
      padding: 2px;
      width: 2.6rem;
    }
    .docdiagram-inspector-stroke-row .docdiagram-inspector-stroke-width {
      box-sizing: border-box;
      min-width: 0;
      width: 3.2rem;
    }
    .docdiagram-inspector-shape-row {
      align-items: center;
      color: var(--docdiagram-muted);
      display: grid;
      font-size: .9rem;
      gap: .4rem;
      grid-template-columns: 2.8rem minmax(0, 1fr);
    }
    .docdiagram-inspector-shape-row select {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      box-sizing: border-box;
      color: var(--docdiagram-text);
      font-size: .85rem;
      min-width: 0;
      padding: .3rem .4rem;
      width: 100%;
    }
    .docdiagram-inspector-paired-controls {
      align-items: center;
      color: var(--docdiagram-muted);
      display: grid;
      font-size: .9rem;
      gap: .4rem;
      grid-template-columns: 2.8rem repeat(2, minmax(0, 1fr));
    }
    .docdiagram-inspector-paired-controls select,
    .docdiagram-inspector-paired-controls input,
    .docdiagram-inspector-paired-controls button {
      box-sizing: border-box;
      height: 2rem;
      min-width: 0;
      width: 100%;
    }
    .docdiagram-inspector-paired-controls button {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      color: var(--docdiagram-text);
      cursor: pointer;
      font: inherit;
      padding: .35rem .55rem;
    }
    .docdiagram-inspector-paired-controls .docdiagram-inspector-callout {
      grid-column: span 2;
    }
    .docdiagram-inspector-paired-controls .docdiagram-inspector-delete {
      color: #b42318;
    }
    .docdiagram-inspector-actions {
      display: flex;
      gap: .5rem;
      justify-content: flex-end;
      margin-top: .2rem;
    }
    .docdiagram-inspector-actions button {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      color: var(--docdiagram-text);
      cursor: pointer;
      font: inherit;
      padding: .35rem .55rem;
    }
    .docdiagram-inspector-actions .docdiagram-inspector-delete {
      color: #b42318;
    }
    .docdiagram-visually-hidden {
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
    }
    .docdiagram-inspector-textarea {
      box-sizing: border-box;
      font-family: inherit;
      min-height: 2.4rem;
      resize: vertical;
      width: 100%;
    }
    .docdiagram {
      background: var(--docdiagram-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 12px;
      box-shadow: 0 2px 8px rgb(21 41 62 / 8%);
      margin: 1.5rem 0;
      height: min(70vh, 42rem);
      min-height: 16rem;
      /* The camera offset is the only thing that moves the canvas, so the frame
         itself never scrolls. Native scrolling cannot reach past the canvas
         origin, which put anywhere the camera had moved left of it out of
         reach. */
      overflow: hidden;
      padding: 1rem;
      position: relative;
      resize: vertical;
    }
    .docdiagram-captioned {
      padding-bottom: 2.75rem;
    }
    .docdiagram-scroll-active {
      outline: 2px solid var(--docdiagram-accent);
      outline-offset: -2px;
    }
    .docdiagram-caption {
      bottom: .9rem;
      color: var(--docdiagram-muted);
      font-size: .9rem;
      left: 1rem;
      position: absolute;
      right: 1rem;
      text-align: center;
    }
    /* An expanded frame is a working view rather than a document view, so the caption steps aside
       along with the space reserved for it. */
    .docdiagram[data-expanded="true"] .docdiagram-caption {
      display: none;
    }
    .docdiagram-captioned[data-expanded="true"] {
      padding-bottom: 1rem;
    }
    .docdiagram-contents ul {
      margin: .25rem 0;
      padding-left: 1.25rem;
    }
    .docdiagram-contents > ul {
      padding-left: 0;
    }
    .docdiagram-contents li {
      list-style: none;
    }
    .docdiagram-contents-figure > a {
      font-style: italic;
    }
    .docdiagram-error-inline {
      color: #8b1c1c;
    }
    .docdiagram[data-expanded="true"] {      border-radius: 0;
      border-width: 0;
      box-shadow: none;
      height: auto;
      margin: 0;
      max-height: none;
      min-height: 0;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: var(--docdiagram-source-tray-height, 0px);
      resize: none;
      z-index: 25;
    }
    .docdiagram-panning svg {
      cursor: grabbing;
    }
    .docdiagram-diagram-toolbar {
      display: flex;
      gap: .35rem;
      justify-content: flex-end;
      margin-bottom: .5rem;
      box-sizing: border-box;
      left: 0;
      position: sticky;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 10;
    }
    .docdiagram-diagram-export {
      position: relative;
    }
    /* Docked into the document toolbar while a frame fills the window, where it
       is one item in that row rather than a bar spanning its own frame. */
    .docdiagram-toolbar .docdiagram-diagram-toolbar {
      margin-bottom: 0;
      position: static;
      width: auto;
    }
    .docdiagram-diagram-export-menu {
      background: var(--docdiagram-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      box-shadow: 0 4px 12px rgb(21 41 62 / 18%);
      display: flex;
      flex-direction: column;
      gap: .35rem;
      padding: .35rem;
      position: absolute;
      right: 0;
      top: calc(100% + .25rem);
      width: max-content;
      z-index: 11;
    }
    .docdiagram-diagram-export-menu[hidden] {
      display: none;
    }
    .docdiagram-diagram-export-menu button {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 5px;
      color: var(--docdiagram-text);
      cursor: pointer;
      font: inherit;
      padding: .35rem .55rem;
      text-align: left;
    }
    .docdiagram-diagram-export-menu button:hover {
      background: var(--docdiagram-control-hover);
    }
    .docdiagram-icon-button {
      background: var(--docdiagram-control-background);
      border: 1px solid var(--docdiagram-border);
      border-radius: 6px;
      color: var(--docdiagram-text);
      cursor: pointer;
      font: inherit;
      height: 2rem;
      padding: 0;
      width: 2rem;
    }
    .docdiagram-icon-button:hover {
      background: var(--docdiagram-control-hover);
    }
    .docdiagram svg {
      display: block;
    }
    .docdiagram-edge {
      fill: none;
    }
    .docdiagram-edge-hit {
      fill: none;
    }
    .docdiagram-edge-group {
      cursor: default;
    }
    .docdiagram[data-editing="true"] .docdiagram-edge-group {
      cursor: pointer;
    }
    .docdiagram[data-editing="true"] .docdiagram-edge-group:has(.docdiagram-inline-editor) {
      cursor: text;
    }
    .docdiagram-edge-selected .docdiagram-edge {
      filter: drop-shadow(0 0 4px rgb(39 117 197 / 65%));
    }
    .docdiagram-edge-label {
      filter: drop-shadow(0 0 4px var(--docdiagram-background));
      font-size: 15px;
    }
    .docdiagram-node-selected .docdiagram-node-body {
      filter: drop-shadow(0 0 4px rgb(39 117 197 / 65%));
    }
    .docdiagram-resize-handle {
      fill: #ffffff;
      stroke: #3574c7;
      stroke-width: 2;
    }
    .docdiagram-resize-handle[data-resize-corner="top-left"],
    .docdiagram-resize-handle[data-resize-corner="bottom-right"] {
      cursor: nwse-resize;
    }
    .docdiagram-resize-handle[data-resize-corner="top-right"],
    .docdiagram-resize-handle[data-resize-corner="bottom-left"] {
      cursor: nesw-resize;
    }
    .docdiagram-connection-port,
    .docdiagram-edge-endpoint,
    .docdiagram-edge-waypoint,
    .docdiagram-callout-handle {
      cursor: crosshair;
      fill: #ffffff;
      stroke: #3574c7;
      stroke-width: 2;
    }
    .docdiagram-connection-target-port {
      fill: #eaf2ff;
    }
    .docdiagram-edge-waypoint,
    .docdiagram-callout-handle {
      cursor: move;
      fill: #eaf2ff;
    }
    .docdiagram-connection-preview {
      fill: none;
      pointer-events: none;
      stroke: #3574c7;
      stroke-dasharray: 6 4;
      stroke-width: 2;
    }
    .docdiagram-connection-preview.docdiagram-connection-invalid {
      stroke: #d53f3f;
    }
    .docdiagram-node {
      cursor: default;
    }
    .docdiagram-node-link .docdiagram-node {
      cursor: pointer;
    }
    .docdiagram-node-link:focus-visible .docdiagram-node-link-focus {
      visibility: visible;
    }
    #rendered-document [id] {
      scroll-margin-top: 5rem;
    }
    .docdiagram[data-editing="true"] .docdiagram-node {
      cursor: grab;
    }
    #rendered-document .docdiagram svg {
      cursor: grab;
    }
    .docdiagram[data-editing="true"] .docdiagram-node:has(.docdiagram-inline-editor) {
      cursor: text;
    }
    .docdiagram-node-label {
      font-size: 16px;
      font-weight: 650;
    }
    .docdiagram-node-subtitle {
      font-size: 13px;
    }
    .docdiagram-inline-editor {
      box-sizing: border-box;
      border: 1px solid #3574c7;
      border-radius: 4px;
      font: 650 16px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      padding: 4px 6px;
      resize: none;
      text-align: center;
      width: 100%;
    }
    .docdiagram-inline-editor-node {
      height: 100%;
    }
    .docdiagram-inline-editor-edge {
      font-size: 14px;
      font-weight: 500;
      height: 100%;
    }
    .docdiagram-error {
      background: #fff0f0;
      border: 1px solid #d53f3f;
      border-radius: 8px;
      color: #8b1c1c;
      margin: 1rem 0;
      padding: 1rem;
    }
    /* Printing a whole document. The rules stand on their own rather than depending on the
       document menu, so Ctrl/Cmd+P produces the same result as the menu action. */
    @media print {
      @page {
        margin: 18mm;
      }
      /* Editing chrome is not part of the document. */
      .docdiagram-toolbar,
      .docdiagram-source-tray,
      .docdiagram-diagram-toolbar,
      .docdiagram-inspector,
      .docdiagram-connection-port,
      .docdiagram-callout-handle,
      .docdiagram-edge-waypoint-handle,
      .docdiagram-edge-endpoint {
        display: none !important;
      }
      html,
      body {
        background: #ffffff !important;
      }
      #rendered-document {
        background: #ffffff !important;
        margin: 0 !important;
        max-width: none !important;
        padding: 0 !important;
        width: auto !important;
      }
      /* Palettes and highlighting carry meaning, so they are asked for rather than left to the
         browser's default of dropping backgrounds. */
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      /* On screen a diagram frame is a fixed-height viewport that scrolls and can be zoomed or
         panned. On paper there is nothing to scroll, so the frame becomes the diagram's own
         height and the camera is reset - otherwise a pan would print as a cropped diagram. */
      .docdiagram {
        break-inside: avoid;
        outline: none !important;
        height: auto !important;
        max-height: none !important;
        min-height: 0 !important;
        overflow: visible !important;
        page-break-inside: avoid;
        position: static !important;
        resize: none !important;
      }
      .docdiagram svg {
        height: auto !important;
        max-width: 100% !important;
        transform: none !important;
        width: 100% !important;
      }
      /* A panel, callout or table split across a page boundary reads as two broken things. */
      .docdiagram-component,
      .docdiagram-grid-item,
      blockquote,
      pre,
      table,
      figure {
        break-inside: avoid;
        page-break-inside: avoid;
      }
      /* A heading stranded at the foot of a page is the most obvious print defect of all. */
      h1, h2, h3, h4, h5, h6 {
        break-after: avoid;
        page-break-after: avoid;
      }
      p, li, blockquote {
        orphans: 3;
        widows: 3;
      }
      /* A grid is a screen-width device; on paper the columns are too narrow to read. */
      .docdiagram-grid {
        display: block !important;
      }
      .docdiagram-grid-item + .docdiagram-grid-item {
        margin-top: 1rem;
      }
      .docdiagram-contents {
        break-inside: avoid;
        page-break-inside: avoid;
      }
      .docdiagram-caption {
        bottom: auto !important;
        left: auto !important;
        position: static !important;
        right: auto !important;
      }
      .docdiagram-captioned {
        padding-bottom: 1rem !important;
      }
      /* A diagram left expanded or mid-edit still prints as an ordinary document diagram. */
      .docdiagram[data-expanded="true"] {
        border: 1px solid var(--docdiagram-border) !important;
        border-radius: 12px !important;
        inset: auto !important;
        padding: 1rem !important;
      }
    }
  \`,document.head.append(t)}var pn=class{constructor(e,n){this.state=e;this.outputElement=n}closeDocumentMenu(){let e=document.querySelector(".docdiagram-menu"),n=document.querySelector(".docdiagram-menu-toggle");!e||!n||(e.hidden=!0,n.setAttribute("aria-expanded","false"))}closeDiagramExportMenus(){for(let e of document.querySelectorAll(".docdiagram-diagram-export-menu"))e.hidden=!0;for(let e of document.querySelectorAll(".docdiagram-export-toggle"))e.setAttribute("aria-expanded","false")}applyDocumentColourScheme(e){let n=ve(this.state.documentColorScheme,this.state.documentTheme,"background"),o=ve(this.state.documentColorScheme,this.state.documentTheme,"pale"),r=ve(this.state.documentColorScheme,this.state.documentTheme,"neutral"),i=ve(this.state.documentColorScheme,this.state.documentTheme,"accent");if(!n||!o||!r||!i)return;e.style.setProperty("--docdiagram-background",n.fill||""),e.style.setProperty("--docdiagram-border",r.stroke||""),e.style.setProperty("--docdiagram-control-background",o.fill||""),e.style.setProperty("--docdiagram-control-hover",r.fill||""),e.style.setProperty("--docdiagram-code-background",o.fill||""),e.style.setProperty("--docdiagram-text",n.text||""),e.style.setProperty("--docdiagram-muted",r.text||""),e.style.setProperty("--docdiagram-accent",i.stroke||"");let s=Gn(this.state.documentColorScheme,this.state.documentTheme);e.style.setProperty("--docdiagram-annotation-fill",s.fill),e.style.setProperty("--docdiagram-annotation-text",s.text)}applyPageTheme(e){let n=ve(this.state.documentColorScheme,e,"background");document.documentElement.dataset.docdiagramTheme=e,document.documentElement.dataset.docdiagramExpanded=String(this.state.expandedDiagramIndex!==null),document.documentElement.style.setProperty("--docdiagram-page-background",n?.fill||""),document.documentElement.style.setProperty("--docdiagram-page-text",n?.text||""),document.body&&(document.body.dataset.docdiagramTheme=e)}dockExpandedDiagramToolbar(e){if(this.state.expandedDiagramIndex===null)return;let n=this.outputElement?.querySelector(\`.docdiagram[data-diagram-index="\${this.state.expandedDiagramIndex}"] .docdiagram-diagram-toolbar\`);n&&e.prepend(n)}removeToolbar(){if(this.outputElement)for(;this.outputElement.previousElementSibling?.classList.contains("docdiagram-toolbar");)this.outputElement.previousElementSibling.remove()}};function _r(t){return t instanceof Element&&t.matches("input, textarea, select, [contenteditable]")}var fn=class{constructor(e){this.host=e;this.viewportRefitTimer=null}bind(){globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.addEventListener("change",()=>{this.host.isAutoTheme()&&this.host.renderDocument()}),globalThis.addEventListener("resize",()=>{this.viewportRefitTimer!==null&&clearTimeout(this.viewportRefitTimer),this.viewportRefitTimer=setTimeout(()=>{this.viewportRefitTimer=null,this.host.refitDiagramViewports()},150)}),globalThis.addEventListener("beforeunload",e=>{this.host.hasUnsavedChanges()&&(e.preventDefault(),e.returnValue="")}),document.addEventListener("keydown",e=>this.handleKeydown(e)),document.addEventListener("pointerdown",e=>{e.button===0&&this.activateDiagramAt(e.target)},!0),document.addEventListener("focusin",e=>this.activateDiagramAt(e.target)),document.addEventListener("pointerdown",e=>this.handlePointerDown(e)),this.host.outputElement.addEventListener("dblclick",e=>{if(e.target instanceof Element&&e.target.closest("a, button, input, textarea, select, [contenteditable]"))return;let n=e.target instanceof Element?e.target.closest(".docdiagram"):null;if(n&&(e.target===n||e.target===n.querySelector("svg"))){e.preventDefault(),this.host.toggleDiagramExpansion(Number(n.dataset.diagramIndex));return}this.host.revealSource(globalThis.getSelection?.()?.toString()||"")})}activateDiagramAt(e){let n=e instanceof Element?e.closest(".docdiagram"):null,o=e instanceof Element&&e.closest(".docdiagram-diagram-toolbar");this.host.activateDiagram(n?Number(n.dataset.diagramIndex):o?this.host.getExpandedDiagramIndex():null)}handleKeydown(e){if((e.metaKey||e.ctrlKey)&&e.shiftKey&&e.key.toLowerCase()==="e"&&(this.host.isSourceEditorOpen()||!_r(e.target))){e.preventDefault(),this.host.toggleSourceEditor();return}if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="s"){e.preventDefault(),this.host.downloadDocument();return}if(e.key==="Escape"){this.host.closeDocumentMenu();let n=this.host.getExpandedDiagramIndex();!e.defaultPrevented&&!_r(e.target)&&n!==null&&(e.preventDefault(),this.host.toggleDiagramExpansion(n))}}handlePointerDown(e){let n=document.activeElement;n instanceof HTMLTextAreaElement&&n.matches(".docdiagram-inline-editor")&&!(e.target instanceof Node&&n.contains(e.target))&&n.blur();let o=document.querySelector(".docdiagram-toolbar"),r=e.target instanceof Element&&e.target.closest(".docdiagram-diagram-toolbar")!==null;o&&e.target instanceof Node&&(!o.contains(e.target)||r)&&this.host.closeDocumentMenu(),e.target instanceof Node&&!(e.target instanceof Element&&e.target.closest(".docdiagram-diagram-export"))&&this.host.closeDiagramExportMenus(),!(!(e.target instanceof Element)||e.target.closest(".docdiagram-toolbar, .docdiagram-node, .docdiagram-edge-group, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-inline-editor, .docdiagram-sequence-participant, .docdiagram-sequence-note, .docdiagram-sequence-message")||!this.host.hasSelection())&&this.host.clearSelection()}};function Xr(){return{diagramModels:[],editingDiagramIndex:null,selectedNode:null,selectedEdge:null,selectedSequenceElement:null,editingNode:null,editingEdge:null,connectionDrag:null,documentTheme:"light",documentThemeSetting:"auto",documentColorScheme:"classic",documentFormat:"centered",documentDoctype:"document",editSessionDiagram:null,expandedDiagramIndex:null,diagramZooms:new Map,diagramCameraOffsets:new Map,diagramViewportHeights:new Map}}function ft(t){t.selectedNode=null,t.selectedEdge=null,t.selectedSequenceElement=null,t.editingNode=null,t.editingEdge=null}function bt(t,e){return t.editingDiagramIndex===e}function Ee(t,e){return t.target instanceof Element?t.target.closest(e):null}function Se(t,e){let n=t.diagramModels[e];return n?.type==="flowchart"?n:null}function J(t){return Number(t)}function Qa(t,e){let n=t.getBoundingClientRect(),o=18;return e.clientX>=n.right-o&&e.clientY>=n.bottom-o}function fo(t,e){return(Number(st(t,e).strokeWidth)||2)+2}var bn=class{constructor(e){this.host=e;this.editingShortcutsBound=!1;this.activeDiagramIndex=null}activateDiagram(e){this.activeDiagramIndex=e;for(let n of this.host.outputElement.querySelectorAll(".docdiagram"))n.classList.toggle("docdiagram-scroll-active",Number(n.dataset.diagramIndex)===e)}enableCanvasPanning(){this.activeDiagramIndex!==null&&!this.host.state.diagramModels[this.activeDiagramIndex]&&(this.activeDiagramIndex=null),this.activateDiagram(this.activeDiagramIndex);for(let e of this.host.outputElement.querySelectorAll(".docdiagram")){let n=e.querySelector("svg");n&&(e.tabIndex=0,e.setAttribute("aria-description","Click or focus to pan with the wheel. Ctrl or Cmd with the wheel zooms. Double-click the background to expand or collapse."),e.addEventListener("pointerdown",o=>{(o.target===e||o.target===n)&&!Qa(e,o)&&this.beginCanvasPan(n,o)}),e.addEventListener("wheel",o=>this.moveCanvasWithWheel(n,o),{passive:!1}))}}moveCanvasWithWheel(e,n){let o=J(e.dataset.diagramIndex);if(this.activeDiagramIndex!==o||Ee(n,"input, textarea, select, [contenteditable]"))return;n.preventDefault();let r=this.host.state.diagramCameraOffsets.get(o)||{x:0,y:0};if(!n.ctrlKey&&!n.metaKey){let u=nn(n.deltaY,n.deltaMode),h=nn(n.deltaX,n.deltaMode);this.setCameraOffset(e,o,{x:r.x-(n.shiftKey&&!h?u:h),y:r.y-(n.shiftKey&&!h?0:u)});return}let i=this.host.state.diagramZooms.get(o)||100,s=dr(i,n.deltaY,n.deltaMode);if(s===i)return;let a=e.getBoundingClientRect(),c=a.width?(n.clientX-a.left)/a.width:.5,d=a.height?(n.clientY-a.top)/a.height:.5;this.host.state.diagramZooms.set(o,s),e.style.width=\`\${s}%\`;let l=e.getBoundingClientRect();this.setCameraOffset(e,o,{x:r.x+n.clientX-(l.left+c*l.width),y:r.y+n.clientY-(l.top+d*l.height)})}setCameraOffset(e,n,o){this.host.state.diagramCameraOffsets.set(n,o),e.style.transform=\`translate(\${o.x}px, \${o.y}px)\`}enableSequenceSelection(){for(let e of this.host.outputElement.querySelectorAll('.docdiagram[data-diagram-type="sequence"] svg'))e.addEventListener("click",n=>{if(!bt(this.host.state,J(e.dataset.diagramIndex)))return;let o=Ee(n,".docdiagram-sequence-participant"),r=Ee(n,".docdiagram-sequence-note"),i=Ee(n,".docdiagram-sequence-message");if(o)this.host.state.selectedSequenceElement={diagramIndex:J(o.getAttribute("data-diagram-index")||void 0),kind:"participant",id:o.getAttribute("data-participant-id")||""};else if(r)this.host.state.selectedSequenceElement={diagramIndex:J(r.getAttribute("data-diagram-index")||void 0),kind:"note",index:J(r.getAttribute("data-note-index")||void 0)};else if(i)this.host.state.selectedSequenceElement={diagramIndex:J(i.getAttribute("data-diagram-index")||void 0),kind:"message",index:J(i.getAttribute("data-message-index")||void 0)};else{if(!this.host.state.selectedSequenceElement&&!this.host.state.selectedNode&&!this.host.state.selectedEdge)return;this.host.state.selectedSequenceElement=null}this.host.state.selectedNode=null,this.host.state.selectedEdge=null,this.host.renderDocument()})}enableEditing(){for(let e of this.host.outputElement.querySelectorAll(".docdiagram svg"))bt(this.host.state,J(e.dataset.diagramIndex))&&(e.addEventListener("click",n=>this.handleDiagramClick(e,n)),e.addEventListener("pointerdown",n=>this.handleDiagramPointerDown(e,n)));for(let e of this.host.outputElement.querySelectorAll(".docdiagram-inline-editor"))this.wireInlineEditor(e);this.editingShortcutsBound||(this.editingShortcutsBound=!0,document.addEventListener("keydown",e=>{if(this.host.state.editingDiagramIndex===null)return;let n=document.activeElement;n instanceof Element&&n.matches("input, textarea, select, [contenteditable]")||((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="d"&&this.host.state.selectedNode?(e.preventDefault(),this.duplicateSelectedNode()):(e.key==="Delete"||e.key==="Backspace")&&(this.host.state.selectedNode||this.host.state.selectedEdge)&&(e.preventDefault(),this.deleteSelected()))},!0))}selectNode(e,n){this.host.state.selectedNode={diagramIndex:e,nodeId:n},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}selectEdge(e,n){this.host.state.selectedEdge={diagramIndex:e,edgeIndex:n},this.host.state.selectedNode=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}handleDiagramClick(e,n){if(Ee(n,".docdiagram-inline-editor"))return;let o=Ee(n,".docdiagram-node");if(o){this.selectNode(J(o.getAttribute("data-diagram-index")||void 0),o.getAttribute("data-node-id")||"");return}let r=Ee(n,".docdiagram-edge-group");if(r){let i=J(r.getAttribute("data-diagram-index")||void 0),s=J(r.getAttribute("data-edge-index")||void 0),a=this.host.state.selectedEdge?.diagramIndex===i&&this.host.state.selectedEdge.edgeIndex===s,c=this.host.state.editingEdge?.diagramIndex===i&&this.host.state.editingEdge.edgeIndex===s;a&&!c?(this.host.state.editingEdge={diagramIndex:i,edgeIndex:s},this.host.renderDocument()):this.selectEdge(i,s);return}(this.host.state.selectedNode||this.host.state.selectedEdge)&&this.clearSelection()}handleDiagramPointerDown(e,n){let o=Ee(n,".docdiagram-edge-waypoint");if(o){this.moveEdgeWaypoint(e,n,o);return}let r=Ee(n,".docdiagram-callout-handle");if(r){this.moveNodeCalloutPointer(e,n,r);return}let i=Ee(n,".docdiagram-connection-port");if(i){let y=i.closest(".docdiagram-node"),F=J(y?.getAttribute("data-diagram-index")||e.dataset.diagramIndex),D=i.getAttribute("data-node-id")||y?.getAttribute("data-node-id")||"",M=Se(this.host.state,F),R=M?be(M,D)?.node:null,A=i.getAttribute("data-anchor")||"";if(R&&ce.includes(A)){let P=A;this.beginConnectionDrag(e,n,{diagramIndex:F,sourceNodeId:D,sourceAnchor:P,start:this.getNodePortPoint(R,P),current:this.getNodePortPoint(R,P),invalid:!1})}return}let s=Ee(n,".docdiagram-edge-endpoint");if(s){let y=J(s.getAttribute("data-diagram-index")||void 0),F=J(s.getAttribute("data-edge-index")||void 0),D=Se(this.host.state,y),M=D?.edges[F],R=s.getAttribute("data-endpoint");if(!M||R!=="source"&&R!=="target")return;let A=R==="source"?M.source:M.target,P=R==="source"?M.sourceAnchor:M.targetAnchor,N=D?be(D,A)?.node:null;if(!N||!P)return;this.beginConnectionDrag(e,n,{diagramIndex:y,edgeIndex:F,endpoint:R,reconnect:!0,sourceNodeId:A,sourceAnchor:P,start:this.getNodePortPoint(N,P),current:this.getNodePortPoint(N,P),invalid:!1});return}let a=Ee(n,".docdiagram-resize-handle");if(a){let y=a.closest(".docdiagram-node"),F=a.getAttribute("data-resize-corner");y&&(F==="top-left"||F==="top-right"||F==="bottom-left"||F==="bottom-right")&&this.resizeNode(e,n,y,F);return}if(Ee(n,".docdiagram-inline-editor"))return;let c=Ee(n,".docdiagram-node");if(!c)return;let d=J(c.getAttribute("data-diagram-index")||void 0),l=c.getAttribute("data-node-id")||"",u=Se(this.host.state,d);if(!u)return;let h=new Y(u),p=h.getById(l),g=p?.node;if(!p||!g)return;n.preventDefault();let m=this.svgPoint(e,n),f=p.bounds,b=p.parent?h.getByNode(p.parent)?.position||{x:0,y:0}:{x:0,y:0},v=ae(u),E=!1;this.capturePointer(e,n);let S=y=>{let F=this.svgPoint(e,y),D=I(f.x+F.x-m.x,v),M=I(f.y+F.y-m.y,v);E=E||D!==f.x||M!==f.y,c.setAttribute("transform",\`translate(\${D-f.x} \${M-f.y})\`),g.arrow&&this.updateNodeCalloutMarkup(c,f,{x:g.arrow.x-(D-f.x),y:g.arrow.y-(M-f.y)},Ce(g,f.x,f.y,f.width,f.height).bodyMarkup,fo(u,g)),g.position={...g.position,x:D-b.x,y:M-b.y}},x=y=>{this.releasePointer(e,y),e.removeEventListener("pointermove",S),e.removeEventListener("pointerup",x),e.removeEventListener("pointercancel",x),E?(Co(u,l),Nt(u,g),this.host.state.selectedNode={diagramIndex:d,nodeId:l},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.persistDiagramModels(),this.host.renderDocument()):this.host.state.selectedNode?.diagramIndex===d&&this.host.state.selectedNode.nodeId===l?(this.host.state.editingNode={diagramIndex:d,nodeId:l},this.host.renderDocument()):this.selectNode(d,l)};e.addEventListener("pointermove",S),e.addEventListener("pointerup",x),e.addEventListener("pointercancel",x)}getSelectedNode(){let e=this.host.state.selectedNode,n=e?Se(this.host.state,e.diagramIndex):null;return e&&n&&be(n,e.nodeId)?.node||null}getSelectedEdge(){let e=this.host.state.selectedEdge,n=e?Se(this.host.state,e.diagramIndex):null;return e&&n?.edges[e.edgeIndex]||null}clearSelection(){this.host.state.selectedNode=null,this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}deleteSelected(){let e=this.host.state.selectedNode,n=this.host.state.selectedEdge;if(e){let o=Se(this.host.state,e.diagramIndex);if(!o)return;let r=o.edges.filter(i=>i.source===e.nodeId||i.target===e.nodeId);if(r.length&&!globalThis.confirm(\`Delete this node and its \${r.length} attached connector\${r.length===1?"":"s"}?\`))return;Qt(o,e.nodeId)}else if(n){let o=Se(this.host.state,n.diagramIndex);if(!o)return;Jt(o,n.edgeIndex)}else return;ft(this.host.state),this.host.persistDiagramModels(),this.host.renderDocument()}duplicateSelectedNode(){let e=this.host.state.selectedNode;if(!e)return;let n=Se(this.host.state,e.diagramIndex);if(!n)return;let o=Zt(n,e.nodeId);o&&(this.host.state.selectedNode={diagramIndex:e.diagramIndex,nodeId:o.id},this.host.state.selectedEdge=null,this.host.persistDiagramModels(),this.host.renderDocument())}wireInlineEditor(e){let n=!1,o=()=>{if(!n){if(n=!0,e.classList.contains("docdiagram-inline-editor-edge")){let i=this.getSelectedEdge();i&&(tn(i,e.value),this.host.persistDiagramModels()),this.host.state.editingEdge=null}else{let i=this.getSelectedNode();i&&(en(i,e.value),this.host.persistDiagramModels()),this.host.state.editingNode=null}this.host.renderDocument()}},r=()=>{n||(n=!0,e.classList.contains("docdiagram-inline-editor-edge")?this.host.state.editingEdge=null:this.host.state.editingNode=null,this.host.renderDocument())};e.addEventListener("pointerdown",i=>i.stopPropagation()),e.addEventListener("click",i=>i.stopPropagation()),e.addEventListener("keydown",i=>{i.key==="Enter"&&(i.metaKey||i.ctrlKey)?(i.preventDefault(),o()):i.key==="Escape"&&(i.preventDefault(),r())}),e.addEventListener("blur",o,{once:!0}),e.focus(),e.select()}resizeNode(e,n,o,r){n.preventDefault();let i=J(o.getAttribute("data-diagram-index")||void 0),s=o.getAttribute("data-node-id")||"",a=Se(this.host.state,i),c=a?be(a,s)?.node:null;if(!a||!c)return;let d=this.svgPoint(e,n),l=Yn(c),u=!1;this.capturePointer(e,n);let h=g=>{let m=this.svgPoint(e,g);nr(a,c,r,m.x-d.x,m.y-d.y,l);let f=Number(c.size?.width)||190,b=Number(c.size?.height)||80;u=u||f!==l.size.width||b!==l.size.height,this.updateNodeSizeMarkup(o,c,f,b)},p=g=>{this.releasePointer(e,g),e.removeEventListener("pointermove",h),e.removeEventListener("pointerup",p),e.removeEventListener("pointercancel",p),u&&(Nt(a,c),this.host.state.selectedNode={diagramIndex:i,nodeId:s},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.persistDiagramModels(),this.host.renderDocument())};e.addEventListener("pointermove",h),e.addEventListener("pointerup",p),e.addEventListener("pointercancel",p)}updateNodeSizeMarkup(e,n,o,r){let i=Se(this.host.state,J(e.getAttribute("data-diagram-index")||void 0));if(!i)return;let{x:s,y:a}=vt(i,n),c=e.querySelector(".docdiagram-node-body"),d=e.querySelector(".docdiagram-node-label"),l=e.querySelector(".docdiagram-node-subtitle"),u=e.querySelectorAll(".docdiagram-resize-handle");if(!c)return;let h=st(i,n,this.host.state.documentTheme,this.host.state.documentColorScheme),p=fe[this.host.state.documentColorScheme][this.host.state.documentTheme==="dark"?"dark":"light"],g=Ce(n,s,a,o,r),m=Dt(g.textBounds,n),f=e.querySelector(".docdiagram-annotation-ref");f&&n.ref!==void 0&&(f.outerHTML=dt(n.ref,Ye(n.ref,{x:s,y:a,width:o,height:r}),this.host.state.documentColorScheme,this.host.state.documentTheme));for(let b of e.querySelectorAll(".docdiagram-node-stroke-gap"))b.remove();for(let b of e.querySelectorAll(".docdiagram-node-detail"))b.remove();c.outerHTML=Ut(g,h,Number(h.strokeWidth)||2,n.strokeType,p.background.fill);for(let b of[d,l])if(b){b.setAttribute("x",String(m.centerX)),b.setAttribute("y",String(b===d?m.labelStartY:m.subtitleStartY)),b.setAttribute("text-anchor",m.textAnchor);for(let v of b.querySelectorAll("tspan"))v.setAttribute("x",String(m.centerX))}for(let b of u){let v=b.getAttribute("data-resize-corner");b.setAttribute("x",String(v?.endsWith("left")?s-7:s+o-7)),b.setAttribute("y",String(v?.startsWith("top")?a-7:a+r-7))}this.updateNodeCalloutMarkup(e,{x:s,y:a,width:o,height:r},n.arrow,g.bodyMarkup,fo(i,n))}getNodePortPoint(e,n,o){let r=o;if(!r){let i=this.host.state.diagramModels.find(s=>s.type==="flowchart"&&be(s,e.id)?.node===e);if(!i)return{x:0,y:0};r=vt(i,e)}return Ce(e,r.x,r.y,r.width,r.height).anchors[n]}addConnectionTargetPorts(e,n){let o=Se(this.host.state,n);if(o)for(let{node:r,bounds:i}of new Y(o).entries)for(let s of ce){let a=this.getNodePortPoint(r,s,i),c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("class","docdiagram-connection-port docdiagram-connection-target-port"),c.dataset.nodeId=r.id,c.dataset.anchor=s,c.setAttribute("cx",String(a.x)),c.setAttribute("cy",String(a.y)),c.setAttribute("r","7"),e.append(c)}}beginConnectionDrag(e,n,o){n.preventDefault(),n.stopPropagation(),this.host.state.connectionDrag={...o,current:this.svgPoint(e,n),invalid:!1},this.addConnectionTargetPorts(e,o.diagramIndex);let r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("class","docdiagram-connection-preview"),e.append(r),this.capturePointer(e,n);let i=c=>{let l=document.elementFromPoint(c.clientX,c.clientY)?.closest(".docdiagram-connection-port");return l||[...e.querySelectorAll(".docdiagram-connection-port")].find(u=>{let h=u.getBoundingClientRect();return c.clientX>=h.left&&c.clientX<=h.right&&c.clientY>=h.top&&c.clientY<=h.bottom})||null},s=c=>{let d=this.host.state.connectionDrag;if(!d)return;let l=this.svgPoint(e,c),u=i(c);d.current=l,d.invalid=!u;let h=u?.getAttribute("data-anchor")||d.sourceAnchor;r.setAttribute("d",Qe(d.start,l,d.sourceAnchor,h,"straight").path),r.classList.toggle("docdiagram-connection-invalid",d.invalid)},a=c=>{this.releasePointer(e,c),e.removeEventListener("pointermove",s),e.removeEventListener("pointerup",a),e.removeEventListener("pointercancel",a);let d=i(c),l=this.host.state.connectionDrag;if(this.host.state.connectionDrag=null,d&&l){let u=Se(this.host.state,l.diagramIndex),h=d.getAttribute("data-node-id")||d.closest(".docdiagram-node")?.getAttribute("data-node-id"),p=d.getAttribute("data-anchor")||"";if(u&&h){if(l.reconnect&&l.edgeIndex!==void 0&&l.endpoint){let g=u.edges[l.edgeIndex];g&&(Zo(g,l.endpoint,h,p),this.host.state.selectedEdge={diagramIndex:l.diagramIndex,edgeIndex:l.edgeIndex},this.host.state.selectedNode=null)}else{let g=Ko(u,l.sourceNodeId,l.sourceAnchor,h,p);this.host.state.selectedEdge={diagramIndex:l.diagramIndex,edgeIndex:u.edges.indexOf(g)},this.host.state.selectedNode=null}this.host.persistDiagramModels()}}this.host.renderDocument()};e.addEventListener("pointermove",s),e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a)}beginCanvasPan(e,n){let o=e.closest(".docdiagram");if(!o)return;n.preventDefault();let r=J(e.dataset.diagramIndex),i=this.host.state.diagramCameraOffsets.get(r)||{x:0,y:0},s={clientX:n.clientX,clientY:n.clientY,offset:i};o.classList.add("docdiagram-panning"),this.capturePointer(e,n);let a=d=>{let l={x:s.offset.x+d.clientX-s.clientX,y:s.offset.y+d.clientY-s.clientY};this.host.state.diagramCameraOffsets.set(r,l),e.style.transform=\`translate(\${l.x}px, \${l.y}px)\`},c=d=>{this.releasePointer(e,d),o.classList.remove("docdiagram-panning"),e.removeEventListener("pointermove",a),e.removeEventListener("pointerup",c),e.removeEventListener("pointercancel",c)};e.addEventListener("pointermove",a),e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c)}moveEdgeWaypoint(e,n,o){let r=J(o.getAttribute("data-diagram-index")||void 0),i=J(o.getAttribute("data-edge-index")||void 0),s=Se(this.host.state,r),a=s?.edges[i];if(!s||!a)return;let c=new Y(s),d=c.getById(a.source),l=c.getById(a.target);if(!d||!l)return;n.preventDefault(),n.stopPropagation(),this.capturePointer(e,n);let u=p=>{let g=this.svgPoint(e,p);a.waypoint={x:I(g.x,ae(s)),y:I(g.y,ae(s))};let m=a.sourceAnchor||"right",f=a.targetAnchor||"left",b=this.getNodePortPoint(d.node,m,d.bounds),v=this.getNodePortPoint(l.node,f,l.bounds),E=a.ref!==void 0?He(s,c)[i]:null,S=E?.path??Qe(b,v,m,f,a.route||"orthogonal",a.waypoint),x=zn(a.waypoint,!0);o.setAttribute("x",String(x.x)),o.setAttribute("y",String(x.y)),o.setAttribute("width",String(x.size)),o.setAttribute("height",String(x.size)),o.setAttribute("rx",String(x.radius)),o.setAttribute("transform",x.transform),o.setAttribute("data-anchored","true");let y=e.querySelector(\`.docdiagram-edge-group[data-diagram-index="\${r}"][data-edge-index="\${i}"]\`);y?.querySelector(".docdiagram-edge")?.setAttribute("d",S.path),y?.querySelector(".docdiagram-edge-hit")?.setAttribute("d",S.hitPath);let F=y?.querySelector(".docdiagram-annotation-ref");if(F&&a.ref!==void 0&&E){let D=E.label;if(D){let M=St(s,a,this.host.state.documentTheme,this.host.state.documentColorScheme),R=y?.querySelector(".docdiagram-edge-label");R&&(R.outerHTML=ye(D.center.x,D.startY,D.lines,Ft,"docdiagram-edge-label",M.text||""))}F.outerHTML=dt(a.ref,Ye(a.ref,D?.bounds??{x:S.midpoint.x,y:S.midpoint.y,width:0,height:0},!0),this.host.state.documentColorScheme,this.host.state.documentTheme)}},h=p=>{this.releasePointer(e,p),e.removeEventListener("pointermove",u),e.removeEventListener("pointerup",h),e.removeEventListener("pointercancel",h),this.host.persistDiagramModels(),this.host.renderDocument()};e.addEventListener("pointermove",u),e.addEventListener("pointerup",h),e.addEventListener("pointercancel",h)}moveNodeCalloutPointer(e,n,o){let r=J(o.getAttribute("data-diagram-index")||void 0),i=o.getAttribute("data-node-id")||"",s=Se(this.host.state,r),a=s?be(s,i)?.node:null,c=o.closest(".docdiagram-node");if(!s||!a||!c)return;n.preventDefault(),n.stopPropagation(),this.capturePointer(e,n);let d=ae(s),l=vt(s,a),u=Ce(a,l.x,l.y,l.width,l.height),h=fo(s,a),p=m=>{let f=this.svgPoint(e,m),b={x:I(f.x,d),y:I(f.y,d)};Xn(a,b),this.updateNodeCalloutMarkup(c,l,b,u.bodyMarkup,h)},g=m=>{this.releasePointer(e,m),e.removeEventListener("pointermove",p),e.removeEventListener("pointerup",g),e.removeEventListener("pointercancel",g),Nt(s,a),this.host.persistDiagramModels(),this.host.renderDocument()};e.addEventListener("pointermove",p),e.addEventListener("pointerup",g),e.addEventListener("pointercancel",g)}updateNodeCalloutMarkup(e,n,o,r,i){let s=o?Yt(n,o):null;if(!s)return;for(let l of e.querySelectorAll(".docdiagram-node-callout, .docdiagram-node-callout-outline"))l.setAttribute("points",s.polygonPoints);let a=e.querySelector(".docdiagram-node-callout-mask-body");a&&(a.outerHTML=Hn(r));let c=jn(s,i);for(let l of[e.querySelector("mask"),e.querySelector(".docdiagram-node-callout-mask-region")])for(let[u,h]of Object.entries(c))l?.setAttribute(u,String(h));let d=e.querySelector(".docdiagram-callout-handle");d?.setAttribute("cx",String(o?.x??0)),d?.setAttribute("cy",String(o?.y??0))}svgPoint(e,n){let o=e.getBoundingClientRect(),r=e.viewBox.baseVal;return{x:r.x+(n.clientX-o.left)*r.width/o.width,y:r.y+(n.clientY-o.top)*r.height/o.height}}capturePointer(e,n){n.isTrusted&&e.setPointerCapture(n.pointerId)}releasePointer(e,n){n.isTrusted&&e.hasPointerCapture(n.pointerId)&&e.releasePointerCapture(n.pointerId)}};function bo(t,e=!0,n=!1){let o=t===void 0?"NW":It(t);return[\`<label class="docdiagram-field docdiagram-field-wide">Reference<input type="text" class="docdiagram-inspector-reference" value="\${k(t===void 0?"":je(t))}"></label>\`,e?\`<label class="docdiagram-field">Position<select class="docdiagram-inspector-reference-position"\${t===void 0?" disabled":""}>\${Tt.filter(r=>!n||r===r.toUpperCase()).map(r=>\`<option value="\${r}"\${r===(n?o.toUpperCase():o)?" selected":""}>\${r}\${n?"":r===r.toUpperCase()?" (outside)":" (inside)"}</option>\`).join("")}</select></label>\`:""].join("")}function yo(t,e){for(let[n,o]of[[".docdiagram-inspector-reference",!1],[".docdiagram-inspector-reference-position",!0]]){let r=ti(t,n);r?.addEventListener("change",()=>{let i=o?r.value:r.value.trim();try{(o||i)&&_e(o?{label:0,position:i}:i)}catch(s){r.setAttribute("aria-invalid","true"),globalThis.alert(s instanceof Error?s.message:String(s)),r.focus();return}r.removeAttribute("aria-invalid"),e(s=>{o?Xo(s,i):_o(s,i)})})}}function es(t){return\`<select class="docdiagram-inspector-node-stroke-type" aria-label="Stroke type">\${We.map(e=>\`<option value="\${e}"\${e===t?" selected":""}>\${e}</option>\`).join("")}</select>\`}function Zr(t,e,n,o){let r=fe[t]?.[e==="dark"?"dark":"light"];return[[...Te.slice(0,5),"none"],Te.slice(5,8),Te.slice(8,13)].map(i=>\`<div class="docdiagram-palette-group">\${i.map(s=>{let a=r?.[s];return\`<label class="docdiagram-palette-swatch"><input type="radio" name="\${o}" value="\${s}"\${s===n?" checked":""}><span style="--docdiagram-swatch-fill:\${a?.fill};--docdiagram-swatch-stroke:\${a?.stroke};--docdiagram-swatch-text:\${a?.text}">\${a?.label||s}</span></label>\`}).join("")}</div>\`).join("")}function Jr(t,e,n="classic",o="light"){let r=ae(t),i=st(t,e,o,n),s=Number(e.size?.width)||190,a=Number(e.size?.height)||80,c=e.shape==="document"?{width:140,height:84}:{width:120,height:60},d=r?Math.ceil(c.width/r)*r:c.width,l=r?Math.ceil(c.height/r)*r:c.height,u=r||1,h=e.palette||"accent";return[\`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-inspector-label docdiagram-inspector-textarea" rows="2">\${k(e.label)}</textarea></label>\`,\`<label class="docdiagram-field docdiagram-field-wide">Subtitle<textarea class="docdiagram-inspector-subtitle docdiagram-inspector-textarea" rows="2">\${k(e.subtitle||"")}</textarea></label>\`,\`<label class="docdiagram-field docdiagram-field-wide">Destination<input type="text" class="docdiagram-inspector-destination" value="\${k(e.href||"")}" placeholder="#detail"></label>\`,bo(e.ref),\`<div class="docdiagram-field docdiagram-field-wide"><span>Palette</span><div class="docdiagram-inspector-palette">\${Zr(n,o,h,"node-palette")}</div></div>\`,\`<label class="docdiagram-inspector-shape-row"><span>Shape</span><select class="docdiagram-inspector-shape">\${xt.map(p=>\`<option value="\${p}"\${p===e.shape?" selected":""}>\${p}</option>\`).join("")}</select></label>\`,\`<div class="docdiagram-inspector-row docdiagram-inspector-colour-row"><span>Fill</span><input type="color" class="docdiagram-inspector-fill" value="\${k(i.fill||"")}"></div>\`,\`<div class="docdiagram-inspector-row docdiagram-inspector-stroke-row"><span>Stroke</span><input type="color" class="docdiagram-inspector-stroke" value="\${k(i.stroke||"")}">\${es(e.strokeType||"solid")}<label class="docdiagram-visually-hidden" for="docdiagram-inspector-stroke-width">Stroke width</label><input id="docdiagram-inspector-stroke-width" type="number" aria-label="Stroke width" class="docdiagram-inspector-stroke-width" value="\${Number(i.strokeWidth)||2}" min="1" step="1"></div>\`,\`<div class="docdiagram-inspector-row docdiagram-inspector-colour-row"><span>Text</span><input type="color" class="docdiagram-inspector-text" value="\${k(i.text||"")}"></div>\`,\`<div class="docdiagram-inspector-paired-controls"><span>Align</span><label class="docdiagram-visually-hidden" for="docdiagram-inspector-text-v-align">Vertical alignment</label><select id="docdiagram-inspector-text-v-align" class="docdiagram-inspector-text-v-align" aria-label="Vertical alignment"><option value="top"\${e.textVAlign==="top"?" selected":""}>Top</option><option value="center"\${e.textVAlign!=="top"?" selected":""}>Middle</option></select><label class="docdiagram-visually-hidden" for="docdiagram-inspector-text-h-align">Horizontal alignment</label><select id="docdiagram-inspector-text-h-align" class="docdiagram-inspector-text-h-align" aria-label="Horizontal alignment"><option value="left"\${e.textHAlign==="left"?" selected":""}>Left</option><option value="center"\${e.textHAlign!=="left"&&e.textHAlign!=="right"?" selected":""}>Center</option><option value="right"\${e.textHAlign==="right"?" selected":""}>Right</option></select><span>Size</span><label class="docdiagram-visually-hidden" for="docdiagram-inspector-width">Width</label><input id="docdiagram-inspector-width" type="number" aria-label="Width" class="docdiagram-inspector-width" value="\${s}" min="\${d}" step="\${u}"><label class="docdiagram-visually-hidden" for="docdiagram-inspector-height">Height</label><input id="docdiagram-inspector-height" type="number" aria-label="Height" class="docdiagram-inspector-height" value="\${a}" min="\${l}" step="\${u}"><span>Callout</span><button type="button" class="docdiagram-inspector-callout">\${e.arrow?"Remove pointer":"Add pointer"}</button><span></span><button type="button" class="docdiagram-inspector-delete">Delete</button><button type="button" class="docdiagram-inspector-duplicate">Duplicate</button></div>\`].join("")}function Qr(t,e,n="classic",o="light"){let r=St(t,e,o,n),i=Number(r.strokeWidth)||2,s=e.route||"orthogonal",a=e.strokeType||"solid",c=e.start||"none",d=e.end||"arrow";return[\`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-inspector-label docdiagram-inspector-textarea" rows="2">\${k(e.label||"")}</textarea></label>\`,bo(e.ref,!0,!0),\`<label class="docdiagram-field">Route<select class="docdiagram-inspector-route">\${wt.map(l=>\`<option value="\${l}"\${l===s?" selected":""}>\${l}</option>\`).join("")}</select></label>\`,\`<label class="docdiagram-field">Stroke type<select class="docdiagram-inspector-stroke-type">\${We.map(l=>\`<option value="\${l}"\${l===a?" selected":""}>\${l}</option>\`).join("")}</select></label>\`,\`<label class="docdiagram-field">Source side<select class="docdiagram-inspector-source-anchor">\${ce.map(l=>\`<option value="\${l}"\${l===e.sourceAnchor?" selected":""}>\${l}</option>\`).join("")}</select></label>\`,\`<label class="docdiagram-field">Target side<select class="docdiagram-inspector-target-anchor">\${ce.map(l=>\`<option value="\${l}"\${l===e.targetAnchor?" selected":""}>\${l}</option>\`).join("")}</select></label>\`,\`<label class="docdiagram-field">Start<select class="docdiagram-inspector-marker-start">\${Le.map(l=>\`<option value="\${l}"\${l===c?" selected":""}>\${l}</option>\`).join("")}</select></label>\`,\`<label class="docdiagram-field">End<select class="docdiagram-inspector-marker-end">\${Le.map(l=>\`<option value="\${l}"\${l===d?" selected":""}>\${l}</option>\`).join("")}</select></label>\`,\`<label class="docdiagram-field">Stroke<input type="color" class="docdiagram-inspector-stroke" value="\${k(r.stroke||"")}"></label>\`,\`<label class="docdiagram-field">Label colour<input type="color" class="docdiagram-inspector-text" value="\${k(r.text||"")}"></label>\`,\`<label class="docdiagram-field">Stroke width<input type="number" class="docdiagram-inspector-stroke-width" value="\${i}" min="1" step="1"></label>\`,\`<div class="docdiagram-inspector-actions">\${e.waypoint?'<button type="button" class="docdiagram-inspector-clear-waypoint">Remove waypoint</button>':""}<button type="button" class="docdiagram-inspector-delete">Delete</button></div>\`].join("")}function ei(t,e,n,o="classic",r="light"){let i="from"in n?null:Et(t,n,r,o),s=e.kind!=="message",a=s?n:null;return[\`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-sequence-inspector-label docdiagram-inspector-textarea" rows="2">\${k(n.label||"")}</textarea></label>\`,e.kind==="message"?bo(n.ref,!1):"",e.kind==="message"?\`<label class="docdiagram-field">Style<select class="docdiagram-sequence-inspector-message-style"><option value="solid"\${n.style!=="dashed"?" selected":""}>Solid</option><option value="dashed"\${n.style==="dashed"?" selected":""}>Dashed</option></select></label>\`:"",s?\`<div class="docdiagram-field docdiagram-field-wide"><span>Palette</span><div class="docdiagram-sequence-inspector-palette">\${Zr(o,r,a?.palette||"accent","sequence-palette")}</div></div>\`:"",s?\`<label class="docdiagram-field">Fill<input type="color" class="docdiagram-sequence-inspector-fill" value="\${k(i?.fill||"")}"></label><label class="docdiagram-field">Border<input type="color" class="docdiagram-sequence-inspector-stroke" value="\${k(i?.stroke||"")}"></label><label class="docdiagram-field">Text<input type="color" class="docdiagram-sequence-inspector-text" value="\${k(i?.text||"")}"></label><label class="docdiagram-field">Width<input type="number" min="1" class="docdiagram-sequence-inspector-width" value="\${Number(a?.size?.width)||""}"></label><label class="docdiagram-field">Height<input type="number" min="1" class="docdiagram-sequence-inspector-height" value="\${Number(a?.size?.height)||""}"></label>\`:""].join("")}function ti(t,e){return t.querySelector(e)}function X(t,e,n){ti(t,e)?.addEventListener("change",o=>{n(o.currentTarget.value)})}function rt(t,e){e(),t.persistDiagramModels(),t.renderDocument()}function ts(t,e){e(),t.persistDiagramModels()}function Kr(t,e,n,o){t&&t.addEventListener("input",()=>{n(t.value);let r=t.value,i=t.selectionStart,s=t.selectionEnd;o(t,()=>{let a=document.querySelector(e);a&&a.value!==r&&(a.value=r),a?.focus(),a?.setSelectionRange(i,s)})})}function ni(t,e,n,o){let r=null,i=(d,l)=>{globalThis.clearTimeout(r??void 0),r=globalThis.setTimeout(()=>{r=null;let u=document.activeElement===d;t.renderDocument(),u&&l()},250)},s=d=>{let l=t.state.diagramModels[n];if(!l||l.type!=="flowchart")return;let u=be(l,o)?.node;u&&rt(t,()=>d(l,u))},a=d=>{let l=t.state.diagramModels[n];if(!l||l.type!=="flowchart")return;let u=be(l,o)?.node;u&&ts(t,()=>d(l,u))};Kr(e.querySelector(".docdiagram-inspector-label"),".docdiagram-inspector-label",d=>a((l,u)=>en(u,d)),i),yo(e,d=>s((l,u)=>d(u))),Kr(e.querySelector(".docdiagram-inspector-subtitle"),".docdiagram-inspector-subtitle",d=>a((l,u)=>Qo(u,d)),i);let c=e.querySelector(".docdiagram-inspector-destination");c?.addEventListener("change",()=>{let d=c.value;if(d&&!kt(d)){c.setAttribute("aria-invalid","true"),globalThis.alert(new Ue(o).message),c.focus();return}c.removeAttribute("aria-invalid"),s((l,u)=>Yo(u,d))});for(let d of e.querySelectorAll(".docdiagram-inspector-palette input"))d.addEventListener("change",()=>s((l,u)=>Un(u,d.value,t.state.documentColorScheme)));X(e,".docdiagram-inspector-shape",d=>s((l,u)=>Jo(u,d))),X(e,".docdiagram-inspector-fill",d=>s((l,u)=>qt(u,"fill",d))),X(e,".docdiagram-inspector-stroke",d=>s((l,u)=>qt(u,"stroke",d))),X(e,".docdiagram-inspector-node-stroke-type",d=>s((l,u)=>er(u,d))),X(e,".docdiagram-inspector-text",d=>s((l,u)=>qt(u,"text",d))),X(e,".docdiagram-inspector-text-v-align",d=>s((l,u)=>Wn(u,"textVAlign",d))),X(e,".docdiagram-inspector-text-h-align",d=>s((l,u)=>Wn(u,"textHAlign",d))),X(e,".docdiagram-inspector-stroke-width",d=>s((l,u)=>Jn(u,d))),X(e,".docdiagram-inspector-width",d=>s((l,u)=>_n(l,u,"width",d))),X(e,".docdiagram-inspector-height",d=>s((l,u)=>_n(l,u,"height",d))),e.querySelector(".docdiagram-inspector-callout")?.addEventListener("click",()=>{s((d,l)=>ar(d,l))}),e.querySelector(".docdiagram-inspector-delete")?.addEventListener("click",()=>{s((d,l)=>{Qt(d,l.id),t.state.selectedNode=null})}),e.querySelector(".docdiagram-inspector-duplicate")?.addEventListener("click",()=>{s((d,l)=>{let u=Zt(d,l.id);u&&(t.state.selectedNode={diagramIndex:n,nodeId:u.id})})})}function oi(t,e,n,o){let r=i=>{let s=t.state.diagramModels[n];if(!s||s.type!=="flowchart")return;let a=s.edges[o];a&&rt(t,()=>i(s,a))};yo(e,i=>r((s,a)=>i(a))),X(e,".docdiagram-inspector-label",i=>r((s,a)=>tn(a,i))),X(e,".docdiagram-inspector-route",i=>r((s,a)=>or(a,i))),X(e,".docdiagram-inspector-stroke-type",i=>r((s,a)=>rr(a,i))),X(e,".docdiagram-inspector-source-anchor",i=>r((s,a)=>Kn(a,"source",i))),X(e,".docdiagram-inspector-target-anchor",i=>r((s,a)=>Kn(a,"target",i))),X(e,".docdiagram-inspector-marker-start",i=>r((s,a)=>sr(a,i))),X(e,".docdiagram-inspector-marker-end",i=>r((s,a)=>cr(a,i))),X(e,".docdiagram-inspector-stroke",i=>r((s,a)=>Zn(a,"stroke",i))),X(e,".docdiagram-inspector-text",i=>r((s,a)=>Zn(a,"text",i))),X(e,".docdiagram-inspector-stroke-width",i=>r((s,a)=>Jn(a,i))),e.querySelector(".docdiagram-inspector-clear-waypoint")?.addEventListener("click",()=>{r((i,s)=>ir(s))}),e.querySelector(".docdiagram-inspector-delete")?.addEventListener("click",()=>{r(i=>{Jt(i,o),t.state.selectedEdge=null})})}function ri(t,e,n){let o=t.state.selectedSequenceElement;if(!o)return;if(X(e,".docdiagram-sequence-inspector-label",i=>rt(t,()=>{n.label=o.kind==="message"?i.trim():i.trim()||n.label})),o.kind==="message"){yo(e,i=>rt(t,()=>i(n))),X(e,".docdiagram-sequence-inspector-message-style",i=>rt(t,()=>{Ot.includes(i)&&(n.style=i)}));return}let r=n;for(let i of e.querySelectorAll(".docdiagram-sequence-inspector-palette input"))i.addEventListener("change",()=>rt(t,()=>Un(r,i.value,t.state.documentColorScheme)));for(let[i,s]of[[".docdiagram-sequence-inspector-fill","fill"],[".docdiagram-sequence-inspector-stroke","stroke"],[".docdiagram-sequence-inspector-text","text"]])X(e,i,a=>rt(t,()=>qt(r,s,a)));for(let[i,s]of[[".docdiagram-sequence-inspector-width","width"],[".docdiagram-sequence-inspector-height","height"]])X(e,i,a=>rt(t,()=>{let c=Number(a);Number.isFinite(c)&&c>0&&(r.size={...r.size,[s]:c})}))}var ns="https://sparkkz-nz.github.io/skryb/docs/reference.html",xo=192,os=96,ii=24,rs=8e6,is={flowchart:["\`\`\`diagram","id: new-flowchart","type: flowchart","canvas:","  auto: true","  grid: 5","nodes:","  - id: first-node","    label: First node","    shape: rounded-rectangle","    position: { x: 80, y: 110 }","  - id: second-node","    label: Second node","    shape: rounded-rectangle","    position: { x: 330, y: 110 }","edges:","  - source: first-node","    target: second-node","    sourceAnchor: right","    targetAnchor: left","\`\`\`"].join(\`
\`),sequence:["\`\`\`diagram","id: new-sequence","type: sequence","participants:","  - id: first-participant","    label: First participant","  - id: second-participant","    label: Second participant","messages:","  - from: first-participant","    to: second-participant","    label: Request","\`\`\`"].join(\`
\`),"diagram-reference":":::diagram { id=diagram-id }",toc:":::toc { depth=3 diagrams=true }",panel:[':::panel { title="New panel" palette=accent }',"Panel content.",":::"].join(\`
\`),grid:[":::grid { columns=2 }",':::panel { title="First panel" }',"First panel content.",":::","",':::panel { title="Second panel" }',"Second panel content.",":::",":::"].join(\`
\`)};function yn(t,e){let n=new Set([...t.matchAll(/(?:\\bid:\\s*|:::diagram\\s+\\{\\s*id=)(?:"([^"]+)"|([^\\s}\\n#]+))/g)].map(i=>i[1]||i[2])),o=1,r=e;for(;n.has(r);)o+=1,r=\`\${e}-\${o}\`;return r}function as(t,e){let n=is[t];if(!n)return null;if(t==="flowchart")return n.replace("id: new-flowchart",\`id: \${yn(e,"new-flowchart")}\`);if(t==="sequence")return n.replace("id: new-sequence",\`id: \${yn(e,"new-sequence")}\`);if(t==="diagram-reference"){let o=yn(e,"diagram-reference");return n.replace("diagram-id",o)}return n}function ss(t){if(!/<template[^>]*\\bid=["']?source\\b/i.test(t))return t;let n=new DOMParser().parseFromString(t,"text/html").querySelector("template#source");if(!n)throw new Error("That Skryb document has no source template to import from.");return n.content.textContent||""}function cs(){return new Promise(t=>{let e=document.createElement("input");e.type="file",e.accept=".html,.htm,.md,.markdown,text/html,text/markdown",e.hidden=!0;let n=o=>{e.remove(),t(o)};e.addEventListener("change",()=>n(e.files?.[0]||null),{once:!0}),e.addEventListener("cancel",()=>n(null),{once:!0}),document.body.append(e),e.click()})}function ds(t){if(t.length<=1)return t[0]||null;let e=t.map((r,i)=>\`\${i+1}. \${r.id||"(no id)"}\`).join(\`
\`),n=globalThis.prompt(\`That file has \${t.length} diagrams. Import which one?

\${e}\`,"1");if(n===null)return null;let o=Number.parseInt(n.trim(),10);if(!Number.isInteger(o)||o<1||o>t.length)throw new Error(\`Enter a number between 1 and \${t.length}.\`);return t[o-1]}var xn=class{constructor(e){this.host=e;this.renderTimer=null;this.resizeObserver=null;this.openState=!1;this.draft="";this.error=""}get isOpen(){return this.openState}get hasUnsavedDraft(){return this.openState&&this.draft!==this.host.getSource()}get hasError(){return this.error.length>0}get draftSource(){return this.draft}setError(e){this.error=e,this.updateStatus()}clearError(){this.error=""}open(){globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=null,this.draft=this.host.getSource(),this.error="",this.openState=!0,this.host.stopDiagramEditing(),this.host.renderDocument();let e=()=>this.focus();globalThis.requestAnimationFrame?.(e)??e()}close(){this.flushRender(),!(this.error&&this.draft!==this.host.getSource()&&!globalThis.confirm("Discard the invalid source changes?"))&&(this.openState=!1,this.draft="",this.error="",this.renderTray(),document.querySelector(".docdiagram-menu-toggle")?.focus())}flushRender(){return this.renderTimer===null?!0:this.renderDraft()}syncSource(e){if(!this.openState)return;this.draft=e,this.error="";let n=document.querySelector(".docdiagram-source-editor");if(!n)return;let o=n.selectionStart,r=n.selectionEnd,i=n.scrollTop;n.value=e,n.setSelectionRange(Math.min(o,e.length),Math.min(r,e.length)),n.scrollTop=i,this.updateStatus()}reveal(e){let n=this.host.getSource(),o=Mr(n,e);return o?this.revealSourceRange({start:{line:1,column:1,offset:o.start},end:{line:1,column:1,offset:o.end}},ht(n)):!1}revealSourceRange(e,n){let o=this.host.getSource();if(ht(o)!==n||this.hasUnsavedDraft||e.start.offset>o.length)return!1;this.openState||this.open();let r=()=>{let i=document.querySelector(".docdiagram-source-editor");i&&(i.focus(),i.setSelectionRange(e.start.offset,Math.min(e.end.offset,o.length)),Tr(i,{start:e.start.offset}))};return globalThis.requestAnimationFrame?.(r)??r(),!0}renderTray(){let e=document.querySelector(".docdiagram-source-tray");if(!this.openState){this.resizeObserver?.disconnect(),this.resizeObserver=null,e?.remove(),delete this.host.outputElement.dataset.sourceEditorOpen,this.host.outputElement.style.removeProperty("--docdiagram-source-tray-height");return}if(e){e.dataset.theme=this.host.getDocumentTheme(),this.host.outputElement.dataset.sourceEditorOpen="true",this.updateStatus();return}e=document.createElement("section"),e.className="docdiagram-source-tray",e.dataset.theme=this.host.getDocumentTheme(),e.setAttribute("aria-label","Document source editor"),e.innerHTML=['<div class="docdiagram-source-resize" role="separator" aria-orientation="horizontal" aria-label="Resize source editor" tabindex="0" title="Drag to resize"></div>','<header class="docdiagram-source-header">','<div><strong>Source</strong><span class="docdiagram-source-shortcut">Cmd/Ctrl+Shift+E to close</span></div>','<div class="docdiagram-source-actions">','<button type="button" class="docdiagram-source-menu-toggle" aria-label="Source editor menu" aria-expanded="false" title="Source editor menu">\\u2630</button>','<div class="docdiagram-source-menu" hidden>','<div class="docdiagram-source-menu-heading">Insert</div>','<button type="button" data-source-template="flowchart">Flowchart</button>','<button type="button" data-source-template="sequence">Sequence</button>','<button type="button" data-source-template="diagram-reference">Diagram Reference</button>','<button type="button" data-source-template="toc">Contents</button>','<button type="button" class="docdiagram-source-import">Import diagram\\u2026</button>','<button type="button" data-source-template="panel">Panel</button>','<button type="button" data-source-template="grid">Grid</button>','<button type="button" class="docdiagram-source-help">Help</button>',"</div>",'<button type="button" class="docdiagram-source-close" aria-label="Close source editor" title="Close source editor">\\xD7</button>',"</div>","</header>",'<label class="docdiagram-source-label">Canonical Markdown<textarea class="docdiagram-source-editor" spellcheck="false"></textarea></label>','<p class="docdiagram-source-status" aria-live="polite"></p>','<p class="docdiagram-source-error" role="alert"></p>'].join("");let n=e.querySelector(".docdiagram-source-editor"),o=e.querySelector(".docdiagram-source-close"),r=e.querySelector(".docdiagram-source-menu-toggle"),i=e.querySelector(".docdiagram-source-menu");if(!n||!o||!r||!i)return;n.value=this.draft,n.addEventListener("input",()=>{this.draft=n.value,this.error="",this.updateStatus(),this.scheduleRender()}),o.addEventListener("click",()=>this.close()),r.addEventListener("click",()=>{let a=i.hidden;i.hidden=!a,r.setAttribute("aria-expanded",String(a))});for(let a of e.querySelectorAll("[data-source-template]"))a.addEventListener("click",()=>{let c=as(a.dataset.sourceTemplate||"",n.value);c&&(this.insertTemplate(n,c),i.hidden=!0,r.setAttribute("aria-expanded","false"))});e.querySelector(".docdiagram-source-import")?.addEventListener("click",async a=>{let c=a.currentTarget;i.hidden=!0,r.setAttribute("aria-expanded","false"),c.disabled=!0;try{await this.importDiagram(n)}catch(d){let l=d instanceof Error?d.message:String(d);globalThis.alert(\`Import diagram failed: \${l}\`)}finally{c.disabled=!1}}),e.querySelector(".docdiagram-source-help")?.addEventListener("click",()=>{globalThis.open(ns,"_blank","noopener")}),e.addEventListener("keydown",a=>{a.key==="Escape"&&!i.hidden&&(a.preventDefault(),i.hidden=!0,r.setAttribute("aria-expanded","false"),r.focus())}),this.host.outputElement.after(e),this.host.outputElement.dataset.sourceEditorOpen="true";let s=()=>{this.host.outputElement.style.setProperty("--docdiagram-source-tray-height",\`\${e?.offsetHeight||0}px\`)};this.attachResizeHandle(e,s),this.resizeObserver?.disconnect(),globalThis.ResizeObserver&&(this.resizeObserver=new globalThis.ResizeObserver(s),this.resizeObserver.observe(e)),s(),this.updateStatus()}attachResizeHandle(e,n){let o=e.querySelector(".docdiagram-source-resize");if(!o)return;let r=s=>{let a=globalThis.innerHeight||0,c=a?Math.max(xo,a-os):s;return Math.min(Math.max(s,xo),c)},i=s=>{e.style.height=\`\${r(s)}px\`,n()};o.addEventListener("pointerdown",s=>{if(s.button!==0)return;s.preventDefault();let a=s.clientY,c=e.offsetHeight;e.dataset.resizing="true",o.setPointerCapture?.(s.pointerId);let d=u=>{i(c-(u.clientY-a))},l=()=>{o.removeEventListener("pointermove",d),o.removeEventListener("pointerup",l),o.removeEventListener("pointercancel",l),delete e.dataset.resizing,o.releasePointerCapture?.(s.pointerId)};o.addEventListener("pointermove",d),o.addEventListener("pointerup",l),o.addEventListener("pointercancel",l)}),o.addEventListener("keydown",s=>{let a=s.shiftKey?ii*4:ii;s.key==="ArrowUp"?(s.preventDefault(),i(e.offsetHeight+a)):s.key==="ArrowDown"?(s.preventDefault(),i(e.offsetHeight-a)):s.key==="Home"?(s.preventDefault(),i(Number.MAX_SAFE_INTEGER)):s.key==="End"&&(s.preventDefault(),i(xo))}),o.addEventListener("dblclick",()=>{e.style.removeProperty("height"),n()})}scheduleRender(){globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=globalThis.setTimeout(()=>{this.renderTimer=null,this.renderDraft()},250)}renderDraft(){return globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=null,this.host.renderDocument(this.draft,{preserveOnError:!0})}updateStatus(){let e=document.querySelector(".docdiagram-source-tray");if(!e)return;let n=e.querySelector(".docdiagram-source-status"),o=e.querySelector(".docdiagram-source-error");!n||!o||(n.textContent=this.error?"Source has errors; showing the last valid render.":"Changes render automatically.",o.hidden=!this.error,o.textContent=this.error)}insertTemplate(e,n){let o=e.selectionStart,r=e.selectionEnd,i=e.value.lastIndexOf(\`
\`,o-1)+1,s=e.value.indexOf(\`
\`,o),a=s===-1?e.value.length:s,c=e.value.slice(i,a),d=/^\\s*$/.test(c)?o:a,l=/^\\s*$/.test(c)?r:a,u=d===a?\`
\${n}\`:n;e.setRangeText(u,d,l,"end"),this.draft=e.value,this.error="",this.updateStatus(),this.scheduleRender(),e.focus()}async importDiagram(e){let n=await cs();if(!n)return;if(n.size>rs)throw new Error("That file is too large to import.");let o=nt(ss(await n.text()));if(!o.length)throw new Error("That file has no diagrams to import.");let r=ds(o);if(!r)return;we(r.source,this.host.getDocumentColourScheme());let i=yn(e.value,r.id||"imported-diagram");this.insertTemplate(e,\`\\\`\\\`\\\`diagram
\${Dr(r.source,i)}
\\\`\\\`\\\`\`)}focus(){let e=document.querySelector(".docdiagram-source-editor");e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))}};var wo="data-docdiagram-offline-runtime-placeholder",ai='script[data-docdiagram-runtime="embedded"]',ls="https://sparkkz-nz.github.io/skryb/latest/skryb-runtime.js";function us(){let t=globalThis;return typeof t.DocDiagramRuntimeSource=="string"?t.DocDiagramRuntimeSource:null}function Eo(t){return/^https?:\\/\\//i.test(t)?t:ls}async function ms(t,e=globalThis.fetch.bind(globalThis)){let n=await e(t);if(!n.ok)throw new Error(\`Could not fetch the Skryb runtime (\${n.status||"unknown status"}).\`);return n.text()}function si(t,e,n=""){let o=new RegExp(\`<script\\\\b[^>]*\\\\b\${wo}\\\\b[^>]*>[\\\\s\\\\S]*?<\\\\/script>\\\\s*\`,"i");if(!o.test(t))throw new Error("Could not find the selected Skryb runtime in this document.");let r=t.replace(o,""),i=/<\\/body\\s*>/i;if(!i.test(r))throw new Error("Could not find the document body for offline export.");let s=e.replace(/<\\/script/gi,"<\\\\/script"),c=\`<script data-docdiagram-runtime="embedded"\${n?\` data-docdiagram-runtime-url="\${gs(n)}"\`:""}>
\${s}
<\\/script>
\`;return r.replace(i,()=>\`\${c}</body>\`)}async function ci(t,e){let n=t.querySelector(ai);if(n)return n.setAttribute(wo,""),{source:n.textContent||"",runtimeUrl:Eo(n.dataset.docdiagramRuntimeUrl||"")};let o=Array.from(t.querySelectorAll("script[src]")).find(i=>{try{let s=new URL(i.getAttribute("src")||"",t.ownerDocument.baseURI).pathname;return/\\/skryb-runtime(?:-self-packaged)?\\.js$/i.test(s)}catch{return!1}});if(!o)throw new Error("Could not find the selected Skryb runtime in this document.");return o.setAttribute(wo,""),{source:us()||await ms(o.src,e),runtimeUrl:Eo(o.getAttribute("src")||o.src)}}function So(t){let e=t.querySelector(ai);if(!e)return;let n=Eo(e.dataset.docdiagramRuntimeUrl||""),o=t.ownerDocument.createElement("script");o.src=n,o.defer=!0,e.replaceWith(o)}function gs(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;")}var wn=class{constructor(e,n,o,r){this.session=e;this.state=n;this.outputElement=o;this.sourceEditor=r}downloadDocument(){if(this.sourceEditor?.flushRender(),!this.canExportLastValidSource())return;let e=this.createDocumentCopy();try{So(e)}catch(n){let o=n instanceof Error?n.message:String(n);console.error("Save As failed.",n),globalThis.alert(\`Save As failed: \${o}\`);return}this.downloadHtml(e.outerHTML,"-edited"),this.session.markSaved()}async downloadOfflineDocument(){if(this.sourceEditor?.flushRender(),!this.canExportLastValidSource())return;let e=this.createDocumentCopy(),n=await ci(e);this.downloadHtml(si(e.outerHTML,n.source,n.runtimeUrl),"-offline"),this.session.markSaved()}createDocumentCopy(e=this.session.source){let n=document.documentElement.cloneNode(!0),o=n.querySelector("#source"),r=n.querySelector("#rendered-document");o?.content.replaceChildren(document.createTextNode(e)),n.querySelector(".docdiagram-lint-dialog")?.remove(),n.querySelector(".docdiagram-toolbar")?.remove(),n.querySelector(".docdiagram-source-tray")?.remove();for(let i of n.querySelectorAll("style"))(i.dataset.docdiagramRuntimeStyles==="true"||i.textContent?.includes(".docdiagram-inline-editor")&&i.textContent.includes(".docdiagram-toolbar"))&&i.remove();n.removeAttribute("data-docdiagram-theme"),n.removeAttribute("data-docdiagram-expanded"),n.style.removeProperty("--docdiagram-page-background"),n.style.removeProperty("--docdiagram-page-text"),n.getAttribute("style")||n.removeAttribute("style"),n.querySelector("body")?.removeAttribute("data-docdiagram-theme"),r?.replaceChildren(),r?.removeAttribute("tabindex"),r?.removeAttribute("data-editing-shortcuts-bound");for(let i of[...r?.attributes||[]])(i.name==="style"||i.name.startsWith("data-"))&&r?.removeAttribute(i.name);return n}openDiagram(e){let n=this.getDiagramExportUrl(e,"image/svg+xml;charset=utf-8");if(!n)return;if(!globalThis.open(n,"_blank")){URL.revokeObjectURL(n),globalThis.alert("Your browser blocked the new diagram tab. Allow pop-ups and try again.");return}globalThis.setTimeout(()=>URL.revokeObjectURL(n),6e4)}downloadDiagramDocument(e){let n=this.state.diagramModels[e];if(!n){globalThis.alert("The diagram is no longer available to save.");return}let o=d=>{let l={...d};return(!n.id||Pt(l.href)!==n.id)&&delete l.href,l.children&&(l.children=l.children.map(o)),l},r=Oe(n.type==="flowchart"?{...n,nodes:n.nodes.map(o)}:n),i=Xe(r)||this.getDiagramExportName(e),s=["---",\`theme: \${this.state.documentThemeSetting}\`,\`colourScheme: \${this.state.documentColorScheme}\`,"doctype: diagram","---","","\`\`\`diagram",r,"\`\`\`",""].join(\`
\`),a=this.createDocumentCopy(s),c=a.querySelector("title");c&&(c.textContent=i);try{So(a)}catch(d){let l=d instanceof Error?d.message:String(d);console.error("Save as Skryb diagram failed.",d),globalThis.alert(\`Save as Skryb diagram failed: \${l}\`);return}this.downloadHtml(a.outerHTML,"",this.slug(i))}downloadDiagram(e){let n=this.getDiagramExportUrl(e,"image/svg+xml;charset=utf-8");if(!n)return;let o=document.createElement("a");o.href=n,o.download=\`\${this.getDiagramExportName(e)}.svg\`,o.hidden=!0,document.body.append(o),o.click(),o.remove(),globalThis.setTimeout(()=>URL.revokeObjectURL(n),200)}printDiagram(e){let n=this.getStandaloneDiagramSvg(e);if(!n){globalThis.alert("The diagram is no longer available to print.");return}let o=['<!doctype html><html><head><meta charset="utf-8"><title>Diagram</title>',"<style>html,body{height:100%;margin:0}body{display:grid;place-items:center}svg{height:auto;max-height:100vh;max-width:100vw;width:auto}@page{margin:0}</style>","</head><body>",new XMLSerializer().serializeToString(n),"</body></html>"].join(""),r=globalThis.open("","_blank");if(!r){globalThis.alert("Your browser blocked the print window. Allow pop-ups and try again.");return}r.document.open(),r.document.write(o),r.document.close(),r.focus(),r.print()}getStandaloneDiagramSvg(e){let n=this.outputElement?.querySelector(\`.docdiagram[data-diagram-index="\${e}"] svg\`);if(!n)return null;let o=n.closest(".docdiagram"),r=globalThis.getComputedStyle(o||n).backgroundColor,i=n.cloneNode(!0);i.setAttribute("xmlns","http://www.w3.org/2000/svg"),i.removeAttribute("style"),i.querySelectorAll(".docdiagram-inline-editor-host, .docdiagram-resize-handle, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-connection-preview").forEach(d=>d.remove()),i.querySelectorAll(".docdiagram-node-selected, .docdiagram-edge-selected").forEach(d=>{d.classList.remove("docdiagram-node-selected","docdiagram-edge-selected")}),i.querySelectorAll("a.docdiagram-node-link").forEach(d=>{d.replaceWith(...d.childNodes)}),i.querySelectorAll(".docdiagram-node-link-hit, .docdiagram-node-link-focus, .docdiagram-node-link-indicator").forEach(d=>d.remove()),i.setAttribute("role",i.querySelectorAll(".docdiagram-annotation-ref").length?"group":"img");let s=document.createElementNS("http://www.w3.org/2000/svg","style");s.textContent=['svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}',".docdiagram-edge,.docdiagram-edge-hit{fill:none}",".docdiagram-edge-label{font-size:15px}",".docdiagram-node-label{font-size:16px;font-weight:650}",".docdiagram-node-subtitle{font-size:13px}"].join(""),i.insertBefore(s,i.firstChild);let a=document.createElementNS("http://www.w3.org/2000/svg","rect"),c=i.viewBox?.baseVal;return a.setAttribute("class","docdiagram-export-background"),a.setAttribute("x",String(c?.x??0)),a.setAttribute("y",String(c?.y??0)),a.setAttribute("width",c&&c.width>0?String(c.width):"100%"),a.setAttribute("height",c&&c.height>0?String(c.height):"100%"),a.setAttribute("fill",r),i.insertBefore(a,s.nextSibling),i}canExportLastValidSource(){return!(this.sourceEditor?.hasError&&this.sourceEditor.hasUnsavedDraft)||globalThis.confirm("Source has errors. Save the last valid version instead?")}getDiagramExportUrl(e,n){let o=this.getStandaloneDiagramSvg(e);return o?URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(o)],{type:n})):(globalThis.alert("The diagram is no longer available to export."),null)}getDiagramExportName(e){return\`\${this.slug(document.title)||"diagram"}-\${e+1}\`}downloadHtml(e,n,o=""){let r=new Blob([\`<!doctype html>
\${e}\`],{type:"text/html;charset=utf-8"}),i=document.createElement("a"),s=o||this.slug(document.title);i.href=URL.createObjectURL(r),i.download=\`\${s||"document"}\${n}.html\`,i.click(),URL.revokeObjectURL(i.href)}slug(e){return e.toLowerCase().replace(/[^\\w]+/g,"-").replace(/^-|-$/g,"")}};var En=class{constructor(e,n){this.state=e;this.renderMarkdown=n}render(e,n=!1){let o=[...this.state.diagramModels],r=this.state.documentTheme,i=this.state.documentThemeSetting,s=this.state.documentColorScheme,a=this.state.documentDoctype;this.state.diagramModels.length=0;try{let c=n?gt(e):mt(e);this.state.documentTheme=c.resolvedTheme,this.state.documentThemeSetting=c.theme,this.state.documentColorScheme=c.colourScheme,this.state.documentDoctype=c.doctype;let d=this.renderMarkdown(c.content);return this.state.expandedDiagramIndex!==null&&!this.state.diagramModels[this.state.expandedDiagramIndex]&&(this.state.expandedDiagramIndex=null,this.state.diagramModels.length=0,d=this.renderMarkdown(c.content)),{ok:!0,markup:d}}catch(c){let d=c instanceof Error?c.message:String(c);return this.state.diagramModels.length=0,this.state.diagramModels.push(...o),n&&(this.state.documentTheme=r,this.state.documentThemeSetting=i,this.state.documentColorScheme=s,this.state.documentDoctype=a),{ok:!1,message:d}}}};var Sn=class{constructor(e){this.sourceElement=e}read(){return this.sourceElement?.content.textContent||""}write(e){this.sourceElement?.content.replaceChildren(document.createTextNode(e))}},vn=class{constructor(e){this.sourceStore=e;this.savedSource=""}get source(){return this.sourceStore.read()}set source(e){this.sourceStore.write(e)}captureSavedSource(){this.savedSource=this.source}markSaved(){this.captureSavedSource()}hasUnsavedChanges(e=!1){return this.source!==this.savedSource||e}bake(){try{let e=dn(this.source);return e.baked&&(this.source=e.source),{baked:e.baked,failed:!1}}catch{return{baked:0,failed:!0}}}persistDiagramModels(e){let n=0,o=new Map;for(let s of e){let a=s.id;typeof a=="string"&&o.set(a,[...o.get(a)||[],s])}let r=new Map([...o].flatMap(([s,a])=>a.length===1?[[s,a[0]]]:[])),i=this.source.replace(/\\r\\n/g,\`
\`).replace(/^((?: {0,3}> ?)*)\`\`\`diagram\\s*\\n([\\s\\S]*?)^((?: {0,3}> ?)*)\`\`\`$/gm,(s,a,c,d)=>{let u=c.replace(/^(?: {0,3}> ?)+/gm,"").match(/^id:\\s*(?:"([^"]+)"|([^\\s#]+))\\s*$/m)?.slice(1).find(Boolean),h=u&&r.get(u)||e[n];n+=1;let p=h?Oe(h):"",g=p?p.split(\`
\`).map(m=>\`\${a}\${m}\`).join(\`
\`):"";return\`\${a}\\\`\\\`\\\`diagram
\${g?\`\${g}
\`:""}\${d}\\\`\\\`\\\`\`});return this.source=i,i}};var kn=class{constructor(e){this.host=e;this.pointer=null;this.navigationRequest=0}bind(){let e=this.host.outputElement;e.addEventListener("click",o=>this.handleClick(o)),e.addEventListener("pointerdown",o=>{this.pointer={id:o.pointerId,x:o.clientX,y:o.clientY,link:this.nodeLink(o.target),cancelled:!o.isPrimary||o.button!==0}},!0);let n=o=>{this.pointer?.id===o.pointerId&&Math.hypot(o.clientX-this.pointer.x,o.clientY-this.pointer.y)>5&&(this.pointer.cancelled=!0)};e.addEventListener("pointermove",n,!0),e.addEventListener("pointerup",n,!0),e.addEventListener("pointercancel",()=>{this.pointer&&(this.pointer.cancelled=!0)},!0),e.addEventListener("wheel",()=>{this.pointer&&(this.pointer.cancelled=!0)},!0),e.addEventListener("dragstart",o=>{this.nodeLink(o.target)&&(o.preventDefault(),this.pointer&&(this.pointer.cancelled=!0))}),globalThis.addEventListener("hashchange",()=>{this.revealFragment()})}nodeLink(e){return e instanceof Element?e.closest("a.docdiagram-node-link"):null}handleClick(e){let n=e.target instanceof Element?e.target.closest("a[href]"):null;if(!n||e.defaultPrevented)return;if(n.matches(".docdiagram-node-link")&&e.detail>0&&(!this.pointer||this.pointer.link!==n||this.pointer.cancelled)){e.preventDefault();return}if(e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||n.hasAttribute("download")||(n.getAttribute("target")||"_self")!=="_self")return;let r=n.getAttribute("href")||"";r.startsWith("#")&&(e.preventDefault(),this.revealFragment(r,!0))}async revealFragment(e=globalThis.location.hash,n=!1){let o=++this.navigationRequest,r=e&&e!=="#"?Pn(e):null,i=()=>r===null?[]:[...this.host.outputElement.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id], figure.docdiagram[id]")].filter(a=>a.id===r);if(e&&e!=="#"&&(r===null||i().length!==1)){let a=\`Navigation target "\${e}" is missing, ambiguous, or invalid. Use Check document to inspect node destinations.\`;console.warn(a),n&&globalThis.alert(a);return}if(document.fullscreenElement)try{await document.exitFullscreen()}catch(a){console.error("Could not leave fullscreen for document navigation.",a),globalThis.alert("Could not leave fullscreen. Exit fullscreen and activate the link again.");return}if(o!==this.navigationRequest||!this.host.prepareDocumentView(r))return;n&&globalThis.location.hash!==e&&(globalThis.location.hash=e);let s=r===null?this.host.outputElement:i()[0];if(!s){console.warn(\`Navigation target "\${e}" is no longer available.\`);return}s.hasAttribute("tabindex")||(s.setAttribute("tabindex","-1"),s.addEventListener("blur",()=>s.removeAttribute("tabindex"),{once:!0})),s.focus({preventScroll:!0}),r===null?globalThis.scrollTo(0,0):s.scrollIntoView({block:"start"})}};function hs(t){let e=t.querySelector("svg");if(!e||typeof e.getBBox!="function")return null;let n;try{n=e.getBBox()}catch{return null}let o=e.viewBox?.baseVal?.height||0,r=e.getBoundingClientRect();if(!o||!r.height||!n.height)return null;let i=r.height/o,s=n.y-(e.viewBox?.baseVal?.y||0),a=getComputedStyle(t),c=r.top-t.getBoundingClientRect().top+t.scrollTop,d=(parseFloat(a.paddingBottom)||0)+(parseFloat(a.borderBottomWidth)||0),l=Math.min(Math.max(s,0),40)*i,u=Math.ceil(c+(s+n.height)*i+l+d);return Math.min(u,t.offsetHeight)}var ps="template[data-skryb-lint]",$n=class{constructor(e,n){this.sourceElement=e;this.outputElement=n;this.state=Xr();this.pendingViewportFits=new Set;this.autoFittedDiagrams=new Map;this.session=new vn(new Sn(e)),this.renderer=new En(this.state,o=>this.renderMarkdown(o)),this.chrome=new pn(this.state,n),this.sourceEditor=n?new xn({outputElement:n,getSource:()=>this.getSource(),getDocumentTheme:()=>this.getDocumentTheme(),getDocumentColourScheme:()=>this.state.documentColorScheme,renderDocument:(o,r)=>this.renderDocument(o,r),stopDiagramEditing:()=>this.stopDiagramEditing(),closeDocumentMenu:()=>this.closeDocumentMenu()}):null,this.diagramEditor=n?new bn({outputElement:n,state:this.state,persistDiagramModels:()=>this.persistDiagramModels(),renderDocument:()=>this.renderDocument()}):null,this.exportService=new wn(this.session,this.state,n,this.sourceEditor),this.navigation=n?new kn({outputElement:n,prepareDocumentView:o=>this.prepareNavigation(o)}):null,this.lifecycle=n?new fn({outputElement:n,isAutoTheme:()=>this.state.documentThemeSetting==="auto",renderDocument:()=>{this.renderDocument()},refitDiagramViewports:()=>this.refitDiagramViewports(),hasUnsavedChanges:()=>this.session.hasUnsavedChanges(this.sourceEditor?.hasUnsavedDraft),isSourceEditorOpen:()=>!!this.sourceEditor?.isOpen,toggleSourceEditor:()=>this.sourceEditor?.isOpen?this.sourceEditor.close():this.sourceEditor?.open(),downloadDocument:()=>this.downloadDocument(),closeDocumentMenu:()=>this.closeDocumentMenu(),closeDiagramExportMenus:()=>this.closeDiagramExportMenus(),getExpandedDiagramIndex:()=>this.state.expandedDiagramIndex,toggleDiagramExpansion:o=>this.toggleDiagramExpansion(o),activateDiagram:o=>this.diagramEditor?.activateDiagram(o),hasSelection:()=>!!(this.state.selectedNode||this.state.selectedEdge||this.state.selectedSequenceElement),clearSelection:()=>{ft(this.state),this.renderDocument()},revealSource:o=>this.sourceEditor?.reveal(o)}):null}getSource(){return this.session.source}setSource(e){this.session.source=e}getDocumentTheme(){return this.state.documentTheme}stopDiagramEditing(){this.state.editingDiagramIndex!==null&&(this.state.editingDiagramIndex=null,this.state.editSessionDiagram=null,ft(this.state))}renderDiagram(e,n,o){return Ur(e,n,{figure:o,colourScheme:this.state.documentColorScheme,state:{...this.state,documentTheme:this.state.documentTheme,documentColorScheme:this.state.documentColorScheme},onDiagram:(r,i)=>{this.state.diagramModels[r]=i}})}renderMarkdown(e,n={diagramIndex:0}){return un(e,n,{renderDiagram:(o,r,i)=>this.renderDiagram(o,r,i),documentColorScheme:this.state.documentColorScheme,documentTheme:this.state.documentTheme})}persistDiagramModels(){let e=this.session.persistDiagramModels(this.state.diagramModels);this.sourceEditor?.syncSource(e)}renderDocument(e=this.getSource(),{preserveOnError:n=!1}={}){if(!this.outputElement)return!1;for(let a of this.outputElement.querySelectorAll(".docdiagram")){let c=Number(a.dataset.diagramIndex);if(this.pendingViewportFits.has(c)){this.state.diagramViewportHeights.delete(c);continue}c!==this.state.expandedDiagramIndex&&this.state.diagramViewportHeights.set(c,a.offsetHeight)}let o={x:globalThis.scrollX||0,y:globalThis.scrollY||0},r=this.renderer.render(e,n);if(!r.ok)return n?(this.sourceEditor?.setError(r.message),!1):(this.applyPageTheme(this.state.documentTheme),this.removeToolbarChrome(),this.outputElement.innerHTML=\`<section class="docdiagram-error"><strong>Document could not be rendered.</strong><br>\${k(r.message)}</section>\`,this.sourceEditor?.renderTray(),!1);this.setSource(e);let i=r.markup;this.sourceEditor?.clearError(),this.outputElement.dataset.theme=this.state.documentTheme,this.outputElement.dataset.colourScheme=this.state.documentColorScheme,this.applyDocumentColourScheme(this.outputElement),this.outputElement.dataset.format=this.state.documentFormat,this.applyPageTheme(this.state.documentTheme),this.outputElement.innerHTML=i,this.removeToolbarChrome(),this.createToolbar(),this.sourceEditor?.renderTray();let s=document.querySelector(".docdiagram-source-tray");return s&&this.applyDocumentColourScheme(s),this.diagramEditor?.enableCanvasPanning(),this.diagramEditor?.enableSequenceSelection(),this.fitDiagramViewports(),this.state.editingDiagramIndex!==null&&this.diagramEditor?.enableEditing(),globalThis.scrollTo?.(o.x,o.y),!0}fitDiagramViewports(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram")){let n=Number(e.dataset.diagramIndex);if(this.state.diagramViewportHeights.has(n)||n===this.state.expandedDiagramIndex)continue;let o=hs(e);o&&(this.state.diagramViewportHeights.set(n,o),this.autoFittedDiagrams.set(n,o),e.style.boxSizing="border-box",e.style.minHeight="0",e.style.height=\`\${o}px\`)}this.pendingViewportFits.clear()}}refitDiagramViewports(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram")){let n=Number(e.dataset.diagramIndex),o=this.autoFittedDiagrams.get(n);if(!(o===void 0||n===this.state.expandedDiagramIndex)){if(e.offsetHeight!==o){this.autoFittedDiagrams.delete(n);continue}e.style.removeProperty("height"),e.style.removeProperty("min-height"),this.state.diagramViewportHeights.delete(n)}}this.fitDiagramViewports()}}closeDocumentMenu(){this.chrome.closeDocumentMenu()}bakeOnOpen(){let{baked:e,failed:n}=this.session.bake(),o=this.skrybActionRequestedByUrl("autowrap"),r=!1;if(!n&&o)try{let i=Sr(this.getSource());i.changed&&(this.setSource(i.source),r=!0)}catch{}(e||n||r||o||this.skrybActionRequestedByUrl("lint"))&&this.writeLintReport()}skrybActionRequestedByUrl(e){let n=globalThis.location?.search||"";return new URLSearchParams(n).getAll("skryb").includes(e)?!0:e==="lint"&&/(^|[?&])skryb-lint(=|&|$)/.test(n)}writeLintReport(){let e=this.getSource(),n;try{n=uo(e)}catch(r){n={sourceHash:ht(e),messages:[{severity:"error",rule:"schema",message:r instanceof Error?r.message:String(r)}],errorCount:1,warningCount:0}}let o=document.querySelector(ps)||document.createElement("template");return o.dataset.skrybLint="",o.content.replaceChildren(document.createTextNode(JSON.stringify({errors:n.errorCount,warnings:n.warningCount,sourceHash:n.sourceHash,messages:n.messages},null,2))),o.isConnected||document.body.append(o),n}showLintReport(){let e=this.writeLintReport();if(!e)return;let n=\`\${e.errorCount} error\${e.errorCount===1?"":"s"}, \${e.warningCount} warning\${e.warningCount===1?"":"s"}\`,o=document.querySelector(".docdiagram-lint-dialog")||document.body.appendChild(document.createElement("dialog"));o.className="docdiagram-lint-dialog",o.replaceChildren();let r=document.createElement("h2");r.textContent=\`Document check: \${n}\`;let i=document.createElement("div");i.className="docdiagram-lint-messages",e.messages.length||(i.textContent="Nothing to report. Every check passed.");for(let a of e.messages){let c=a.location?.subjects.find(l=>l.sourceRange)?.sourceRange||a.location?.fenceRange,d=c&&this.sourceEditor?document.createElement("button"):document.createElement("pre");if(d.textContent=Or({sourceHash:e.sourceHash,messages:[a],errorCount:a.severity==="error"?1:0,warningCount:a.severity==="warning"?1:0}),d instanceof HTMLButtonElement&&c&&(d.type="button",d.title=\`Reveal source at line \${c.start.line}\`,d.addEventListener("click",()=>{o.close(),this.sourceEditor?.revealSourceRange(c,e.sourceHash)})),i.append(d),a.suggestedAction?.id==="wrap-linear-flow"){let l=document.createElement("button");l.type="button",l.textContent=a.suggestedAction.label,l.addEventListener("click",()=>{let u=kr(this.getSource(),a.suggestedAction.diagramIndex);if(!u.changed||!u.layout)return;let{before:h,after:p}=u.layout;globalThis.confirm(\`Preview: fitted content changes from \${h.width} by \${h.height} (\${h.aspectRatio.toFixed(1)}:1) to \${p.width} by \${p.height} (\${p.aspectRatio.toFixed(1)}:1).

This replaces node positions, connector anchors, routes, and waypoints. Apply the wrapped layout?\`)&&(o.close(),this.renderDocument(u.source),this.sourceEditor?.syncSource(u.source),this.writeLintReport())}),i.append(l)}}let s=document.createElement("button");s.type="button",s.textContent="Close",s.addEventListener("click",()=>o.close()),o.append(r,i,s),o.showModal()}downloadDocument(){this.exportService.downloadDocument()}async downloadOfflineDocument(){await this.exportService.downloadOfflineDocument()}boot(){if(!this.sourceElement||!this.outputElement)return;Yr(),this.session.captureSavedSource(),this.bakeOnOpen(),this.lifecycle?.bind(),this.navigation?.bind();let e=!1;try{e=cn(this.getSource()).frontmatter.doctype==="diagram"}catch{this.setExpandedDiagram(null)}e&&this.setExpandedDiagram(0),this.renderDocument(),globalThis.location?.hash&&this.navigation?.revealFragment()}getCoreApi(){return{bakeDocumentSource:dn,spliceBakedFences:ao,lintDocument:uo}}createToolbar(){if(!this.outputElement)return;let e=document.createElement("section");e.className="docdiagram-toolbar",e.dataset.editing=String(this.state.editingDiagramIndex!==null),e.dataset.theme=this.state.documentTheme,e.dataset.colourScheme=this.state.documentColorScheme,e.dataset.format=this.state.documentFormat;let n=this.getSelectedNode(),o=n?null:this.getSelectedEdge(),r=!n&&!o?this.getSelectedSequenceElement():null,i=n&&this.state.selectedNode?this.state.diagramModels[this.state.selectedNode.diagramIndex]:o&&this.state.selectedEdge?this.state.diagramModels[this.state.selectedEdge.diagramIndex]:r&&this.state.selectedSequenceElement?this.state.diagramModels[this.state.selectedSequenceElement.diagramIndex]:null;e.innerHTML=['<button type="button" class="docdiagram-menu-toggle" aria-label="Document menu" aria-expanded="false" title="Document menu">\\u2630</button>','<div class="docdiagram-menu" hidden>','<label class="docdiagram-theme-control">Theme<select class="docdiagram-theme-select">',\`<option value="auto"\${this.state.documentThemeSetting==="auto"?" selected":""}>Auto</option>\`,\`<option value="light"\${this.state.documentThemeSetting==="light"?" selected":""}>Light</option>\`,\`<option value="dark"\${this.state.documentThemeSetting==="dark"?" selected":""}>Dark</option>\`,"</select></label>",\`<label class="docdiagram-theme-control">Colour scheme<select class="docdiagram-colour-scheme-select">\${Object.entries(fe).map(([c,d])=>\`<option value="\${c}"\${this.state.documentColorScheme===c?" selected":""}>\${d.label}</option>\`).join("")}</select></label>\`,'<label class="docdiagram-theme-control">Format<select class="docdiagram-format-select">',\`<option value="centered"\${this.state.documentFormat==="centered"?" selected":""}>Centered</option>\`,\`<option value="full-width"\${this.state.documentFormat==="full-width"?" selected":""}>Full width</option>\`,"</select></label>",'<label class="docdiagram-theme-control">Opens as<select class="docdiagram-doctype-select">',\`<option value="document"\${this.state.documentDoctype==="document"?" selected":""}>Document</option>\`,\`<option value="diagram"\${this.state.documentDoctype==="diagram"?" selected":""}>Diagram</option>\`,"</select></label>",'<button type="button" class="docdiagram-edit-source">Edit source</button>','<button type="button" class="docdiagram-lint">Check document</button>','<button type="button" class="docdiagram-print-document">Print / Save as PDF</button>','<button type="button" class="docdiagram-save">Save As</button>','<button type="button" class="docdiagram-offline-save">Save for Offline</button>',"</div>",n&&i?.type==="flowchart"?\`<div class="docdiagram-inspector" data-kind="node">\${Jr(i,n,this.state.documentColorScheme,this.state.documentTheme)}</div>\`:o&&i?\`<div class="docdiagram-inspector" data-kind="edge">\${Qr(i,o,this.state.documentColorScheme,this.state.documentTheme)}</div>\`:r&&i?\`<div class="docdiagram-inspector" data-kind="sequence">\${ei(i,this.state.selectedSequenceElement,r,this.state.documentColorScheme,this.state.documentTheme)}</div>\`:""].join("");let s=e.querySelector(".docdiagram-menu-toggle"),a=e.querySelector(".docdiagram-menu");s?.addEventListener("click",()=>{if(!a)return;let c=a.hidden;a.hidden=!c,s.setAttribute("aria-expanded",String(c))}),e.querySelector(".docdiagram-print-document")?.addEventListener("click",()=>this.printDocument()),e.querySelector(".docdiagram-save")?.addEventListener("click",()=>this.downloadDocument()),e.querySelector(".docdiagram-offline-save")?.addEventListener("click",async c=>{let d=c.currentTarget;d.disabled=!0;try{await this.downloadOfflineDocument()}catch(l){let u=l instanceof Error?l.message:String(l);console.error("Offline export failed.",l),globalThis.alert(\`Save for Offline failed: \${u}\`)}finally{d.disabled=!1}}),e.querySelector(".docdiagram-edit-source")?.addEventListener("click",()=>{this.closeDocumentMenu(),this.sourceEditor?.open()}),e.querySelector(".docdiagram-lint")?.addEventListener("click",()=>{this.closeDocumentMenu(),this.showLintReport()}),e.querySelector(".docdiagram-theme-select")?.addEventListener("change",c=>{this.setSource(Fr(this.getSource(),c.currentTarget.value)),this.renderDocument()}),e.querySelector(".docdiagram-colour-scheme-select")?.addEventListener("change",c=>{this.setSource(Nr(this.getSource(),c.currentTarget.value)),this.renderDocument()}),e.querySelector(".docdiagram-format-select")?.addEventListener("change",c=>{this.state.documentFormat=c.currentTarget.value==="full-width"?"full-width":"centered",this.renderDocument()}),e.querySelector(".docdiagram-doctype-select")?.addEventListener("change",c=>{let d=c.currentTarget.value==="diagram"?"diagram":"document";this.setSource(Ar(this.getSource(),d)),this.setExpandedDiagram(d==="diagram"?0:null),this.renderDocument()}),this.outputElement.before(e),this.applyDocumentColourScheme(e),n&&this.state.selectedNode?ni(this,e,this.state.selectedNode.diagramIndex,this.state.selectedNode.nodeId):o&&this.state.selectedEdge?oi(this,e,this.state.selectedEdge.diagramIndex,this.state.selectedEdge.edgeIndex):r&&this.state.selectedSequenceElement&&ri(this,e,r),this.wireChromeControls(),this.dockExpandedDiagramToolbar(e)}dockExpandedDiagramToolbar(e){this.chrome.dockExpandedDiagramToolbar(e)}getSelectedNode(){let e=this.state.selectedNode,n=e?this.state.diagramModels[e.diagramIndex]:null;return e&&n?.type==="flowchart"&&bt(this.state,e.diagramIndex)&&be(n,e.nodeId)?.node||null}getSelectedEdge(){let e=this.state.selectedEdge,n=e?this.state.diagramModels[e.diagramIndex]:null;return e&&n?.type==="flowchart"&&bt(this.state,e.diagramIndex)&&n.edges[e.edgeIndex]||null}getSelectedSequenceElement(){let e=this.state.selectedSequenceElement,n=e?this.state.diagramModels[e.diagramIndex]:null;return!e||n?.type!=="sequence"||!bt(this.state,e.diagramIndex)?null:e.kind==="participant"?n.participants?.find(o=>o.id===e.id)||null:e.kind==="message"?n.messages?.[e.index]||null:n.notes?.[e.index]||null}applyDocumentColourScheme(e){this.chrome.applyDocumentColourScheme(e)}wireChromeControls(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram-export-toggle"))e.addEventListener("click",()=>{let n=e.parentElement?.querySelector(".docdiagram-diagram-export-menu");if(!n)return;let o=n.hidden;this.closeDiagramExportMenus(),n.hidden=!o,e.setAttribute("aria-expanded",String(o))});for(let e of this.outputElement.querySelectorAll(".docdiagram-toggle-expand"))e.addEventListener("click",()=>this.toggleDiagramExpansion(Number(e.dataset.diagramIndex)));for(let e of this.outputElement.querySelectorAll(".docdiagram-open-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.openDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-save-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.downloadDiagramDocument(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-download-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.downloadDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-print-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.printDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-zoom-in, .docdiagram-zoom-out"))e.addEventListener("click",()=>{let n=Number(e.dataset.diagramIndex),o=this.state.diagramZooms.get(n)||100,r=e.classList.contains("docdiagram-zoom-in")?25:-25;this.state.diagramZooms.set(n,Kt(o+r)),this.renderDocument()});for(let e of this.outputElement.querySelectorAll(".docdiagram-fit"))e.addEventListener("click",()=>{let n=Number(e.dataset.diagramIndex);this.state.diagramZooms.set(n,100),this.state.diagramCameraOffsets.delete(n),this.pendingViewportFits.add(n),this.renderDocument()});for(let e of this.outputElement.querySelectorAll(".docdiagram-relayout"))e.addEventListener("click",()=>{let n=Number(e.dataset.diagramIndex);if(!globalThis.confirm(\`Relayout this entire diagram?

All node positions and connector anchors, routes, and waypoints will be replaced. Node sizes will be preserved.\`))return;let r=$r(this.getSource(),n);r.changed&&(this.renderDocument(r.source),this.sourceEditor?.syncSource(r.source))});for(let e of this.outputElement.querySelectorAll(".docdiagram-start-editing"))e.addEventListener("click",()=>{let n=Number(e.dataset.diagramIndex),o=this.state.diagramModels[n];o&&(this.state.editSessionDiagram=we(Oe(o),this.state.documentColorScheme),this.state.editingDiagramIndex=n,ft(this.state),this.renderDocument())});for(let e of this.outputElement.querySelectorAll(".docdiagram-done-editing"))e.addEventListener("click",()=>this.exitEditing(this.state.editingDiagramIndex,!1));for(let e of this.outputElement.querySelectorAll(".docdiagram-cancel-editing"))e.addEventListener("click",()=>this.exitEditing(this.state.editingDiagramIndex,!0));for(let e of this.outputElement.querySelectorAll(".docdiagram-create-node"))e.addEventListener("click",()=>this.createNewNode(Number(e.dataset.diagramIndex)))}}printDocument(){this.closeDocumentMenu(),this.closeDiagramExportMenus(),this.stopDiagramEditing(),this.setExpandedDiagram(null),this.state.diagramViewportHeights.clear();for(let e of this.state.diagramZooms.keys())this.state.diagramZooms.set(e,100);this.state.diagramCameraOffsets.clear(),this.renderDocument(),globalThis.print()}closeDiagramExportMenus(){this.chrome.closeDiagramExportMenus()}exitEditing(e,n){e!==null&&(n&&this.state.editSessionDiagram&&(this.state.diagramModels[e]=this.state.editSessionDiagram,this.persistDiagramModels()),this.state.editingDiagramIndex=null,this.state.editSessionDiagram=null,ft(this.state),this.renderDocument())}createNewNode(e){let n=this.state.diagramModels[e];if(!n||n.type!=="flowchart")return;let o=Uo(n);this.state.selectedNode={diagramIndex:e,nodeId:o.id},this.state.selectedEdge=null,this.persistDiagramModels(),this.renderDocument()}applyPageTheme(e){this.chrome.applyPageTheme(e)}setExpandedDiagram(e){this.diagramEditor?.activateDiagram(e);let n=this.state.expandedDiagramIndex;if(n!==e){this.state.expandedDiagramIndex=e;for(let o of[n,e])o!==null&&(this.state.diagramZooms.set(o,100),this.state.diagramCameraOffsets.delete(o),this.pendingViewportFits.add(o),this.autoFittedDiagrams.delete(o))}}prepareNavigation(e){if(this.sourceEditor?.isOpen&&(this.sourceEditor.close(),this.sourceEditor.isOpen))return!1;let n=e===null?null:[...this.outputElement?.querySelectorAll(".docdiagram[id]")||[]].find(o=>o.id===e);if(this.stopDiagramEditing(),this.setExpandedDiagram(null),n){let o=Number(n.dataset.diagramIndex);this.state.diagramZooms.set(o,100),this.state.diagramCameraOffsets.delete(o),this.pendingViewportFits.add(o)}return this.closeDocumentMenu(),this.closeDiagramExportMenus(),this.renderDocument()}toggleDiagramExpansion(e){this.setExpandedDiagram(this.state.expandedDiagramIndex===e?null:e),this.closeDiagramExportMenus(),this.renderDocument()}removeToolbarChrome(){this.chrome.removeToolbar()}};var fs=document.querySelector("#source"),bs=document.querySelector("#rendered-document"),di=new $n(fs,bs),ys=globalThis;ys.DocDiagramCore=di.getCoreApi();di.boot();})();
`;
