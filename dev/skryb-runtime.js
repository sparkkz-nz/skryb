/*! Skryb runtime | Copyright 2026 Stuart Parkinson | Apache-2.0 | https://github.com/sparkkz-nz/skryb */
"use strict";(()=>{var Ae=["background","pale","light","neutral","dark","accent-soft","accent","accent-strong","note","success","warning","danger","highlight","none"],Wt=["flowchart","sequence"],pt=["rounded-rectangle","circle","oval","database","diamond","rhombus","flattened-hexagon","chevron","right-chevron","document","text"],Me=["top","right","bottom","left"],ft=["orthogonal","straight","curved"],ve=["none","arrow","circle"],it={start:"none",end:"arrow"},qr=["top","center"],Ir=["left","center","right"],Yt={width:50,height:20},_t={width:50,height:20},O={shape:"rounded-rectangle",label:"New node",width:190,height:80},Ne=(r,e,t,n,o,i,s,a,c,d,l,u,g)=>({background:r,pale:e,light:t,neutral:n,dark:o,"accent-soft":i,accent:s,"accent-strong":a,note:c,success:d,warning:l,danger:u,highlight:g,none:f("None","none","none",r.text)}),f=(r,e,t,n,o,i)=>({label:r,fill:e,stroke:t,text:n,gradient:o,glow:i}),Ce={classic:{label:"Classic",light:Ne(f("Background","#FFFFFF","#D1D5DB","#111827"),f("Pale","#F3F4F6","#9CA3AF","#1F2937"),f("Light","#E5E7EB","#6B7280","#1F2937"),f("Neutral","#D1D5DB","#4B5563","#111827"),f("Dark","#374151","#111827","#F9FAFB"),f("Soft","#DBEAFE","#60A5FA","#1E3A8A"),f("Accent","#BFDBFE","#2563EB","#1E3A8A","#EFF6FF"),f("Strong","#2563EB","#1D4ED8","#FFFFFF","#3B82F6","#60A5FA"),f("Note","#DBEAFE","#2563EB","#1E3A8A"),f("Success","#DCFCE7","#16A34A","#14532D"),f("Warning","#FFEDD5","#EA580C","#7C2D12"),f("Danger","#FEE2E2","#DC2626","#7F1D1D"),f("Highlight","#FEF9C3","#CA8A04","#713F12")),dark:Ne(f("Background","#111827","#374151","#F9FAFB"),f("Pale","#1F2937","#4B5563","#F3F4F6"),f("Light","#374151","#6B7280","#F9FAFB"),f("Neutral","#4B5563","#9CA3AF","#FFFFFF"),f("Dark","#9CA3AF","#D1D5DB","#111827"),f("Soft","#172554","#3B82F6","#DBEAFE"),f("Accent","#1E3A8A","#60A5FA","#EFF6FF","#172554"),f("Strong","#2563EB","#93C5FD","#FFFFFF","#1D4ED8","#60A5FA"),f("Note","#172554","#60A5FA","#DBEAFE"),f("Success","#052E16","#4ADE80","#DCFCE7"),f("Warning","#431407","#FB923C","#FFEDD5"),f("Danger","#450A0A","#F87171","#FEE2E2"),f("Highlight","#422006","#FACC15","#FEF9C3"))},fire:{label:"Fire",light:Ne(f("Background","#FBFAF9","#D9D2CC","#1F1B19"),f("Pale","#F4F1ED","#C7BDB6","#282320"),f("Light","#E9E2DC","#A2948B","#282320"),f("Neutral","#D5CAC2","#8A6D59","#241B15"),f("Dark","#3D312A","#221913","#FFF2E4"),f("Soft","#FDECDD","#E7A672","#7A3B12"),f("Accent","#FBD8BA","#D2691E","#6A2D07","#FFF3E8"),f("Strong","#D2521C","#A6380D","#FFFFFF","#F0873C","#FFA867"),f("Note","#F7EBDD","#A9784C","#523A22"),f("Success","#E7F2D9","#5F8C2B","#2C4310"),f("Warning","#FFEACB","#E08600","#6D3C00"),f("Danger","#FFE1DB","#D93A1F","#6D1708"),f("Highlight","#FFF6CB","#D9A400","#5B4200")),dark:Ne(f("Background","#171413","#3A3330","#E7E2DE"),f("Pale","#1F1B19","#4A413C","#EDE8E3"),f("Light","#2B2522","#695C54","#F5EFE9"),f("Neutral","#3E3430","#A08674","#FFF3E7"),f("Dark","#C9B29F","#E4D3C4","#191412"),f("Soft","#3A2415","#C4763A","#FFE7D2"),f("Accent","#5A2E12","#F0873C","#FFEDDD","#47240F"),f("Strong","#E2571B","#FFB27A","#FFFFFF","#B33C0E","#FF8A3D"),f("Note","#302319","#BE8C5A","#F6E4D0"),f("Success","#1F2E14","#8FBF52","#E7F4D5"),f("Warning","#4A2A05","#FFA726","#FFE9C4"),f("Danger","#4B1108","#FF6B52","#FFE0DA"),f("Highlight","#453206","#FFD54A","#FFF6D2"))},ice:{label:"Ice",light:Ne(f("Background","#F8FCFF","#D8EAF4","#123040"),f("Pale","#EDF8FC","#B8DCEB","#123040"),f("Light","#D9F2FF","#88BED7","#123040"),f("Neutral","#B8DCEB","#4A8BAA","#123040"),f("Dark","#21536C","#123040","#F4FBFF"),f("Soft","#DDF5FF","#75C6E8","#0F4C67"),f("Accent","#BDEAFF","#2E91BF","#083B55","#E8F9FF"),f("Strong","#1976A3","#0E5E85","#FFFFFF","#43B3E8","#8DDBF7"),f("Note","#DCEFFF","#3182CE","#123A63"),f("Success","#DDF7EE","#1E9B68","#104B35"),f("Warning","#FFF0D8","#D97918","#6B3510"),f("Danger","#FFE4E7","#D9485F","#651C2A"),f("Highlight","#FFF8C9","#C69A13","#5E4900")),dark:Ne(f("Background","#0C1D29","#26475A","#E8F7FF"),f("Pale","#112B3A","#376176","#E8F7FF"),f("Light","#173B4D","#4A7B92","#F0FAFF"),f("Neutral","#28576B","#79AFC3","#F4FBFF"),f("Dark","#A3D6E9","#D4F2FF","#0C1D29"),f("Soft","#10384E","#4AB5DF","#DDF7FF"),f("Accent","#15526D","#72CEF2","#ECFBFF","#123C52"),f("Strong","#2186B5","#94DCF5","#FFFFFF","#176A91","#64CEF2"),f("Note","#122E4B","#62A9F5","#DCEFFF"),f("Success","#103D32","#4DD69A","#DDF7EE"),f("Warning","#4B2C0D","#F3A34C","#FFF0D8"),f("Danger","#4B1923","#F07A8C","#FFE4E7"),f("Highlight","#4A3D0A","#E6C54B","#FFF8C9"))},midnight:{label:"Midnight",light:Ne(f("Background","#F5F7FC","#CAD3E4","#101D38"),f("Pale","#E9EEF8","#B6C4DC","#172744"),f("Light","#D9E2F2","#91A5C5","#172744"),f("Neutral","#C1CEE1","#6F85A6","#14223C"),f("Dark","#243B63","#1B3155","#F5F8FF"),f("Soft","#DCE7FA","#93A9CE","#1A3158"),f("Accent","#C9DBFA","#5E7FB4","#152D54","#D6E3F8"),f("Strong","#345F9D","#2C548D","#FFFFFF","#416EAE","#6F91C2"),f("Note","#DBE7F8","#5277AE","#1D355D"),f("Success","#DDEFE8","#3E886A","#173F31"),f("Warning","#F8E9D1","#B9702D","#5D3513"),f("Danger","#F4E0E5","#AD5570","#591F30"),f("Highlight","#F8F0C9","#A88222","#554300")),dark:Ne(f("Background","#081426","#1F3554","#E8F0FF"),f("Pale","#0D1C32","#2A4265","#E5EEFF"),f("Light","#132843","#3A557A","#EDF4FF"),f("Neutral","#1E385B","#59779E","#EEF5FF"),f("Dark","#91A9C9","#AFC2DB","#0A172A"),f("Soft","#112B4D","#527AA9","#E1EEFF"),f("Accent","#173B68","#6389BA","#ECF4FF","#1B416E"),f("Strong","#2C629F","#6D98CD","#FFFFFF","#356FAF","#6D98CD"),f("Note","#132A4A","#6D96C8","#DDEAFF"),f("Success","#123B31","#5FBA91","#DDF3E8"),f("Warning","#422C14","#D09150","#FBEAD1"),f("Danger","#431E2B","#D27691","#F8E1E8"),f("Highlight","#403710","#C5A543","#FAF2CA"))},paper:{label:"Paper",light:Ne(f("Background","#FFFDF7","#E0D8C8","#332D24"),f("Pale","#F7F1E5","#D4C5AD","#40372C"),f("Light","#EEE3D0","#BBA98B","#40372C"),f("Neutral","#D8C8AF","#8C765A","#332D24"),f("Dark","#514536","#332D24","#FFFCF5"),f("Soft","#EEE8DC","#A99879","#44392B"),f("Accent","#E8DDC7","#947044","#3E2D1D","#F7F0E4"),f("Strong","#81592F","#62401F","#FFFFFF","#A77A44","#D3B37B"),f("Note","#E5EFF4","#517B98","#233E50"),f("Success","#E4F0DF","#5D8A54","#294527"),f("Warning","#F9E8CD","#B96B28","#64350D"),f("Danger","#F5E0DA","#AD5342","#5D251C"),f("Highlight","#F8F0BD","#A78216","#584600")),dark:Ne(f("Background","#29251F","#554B3E","#F9F2E6"),f("Pale","#373027","#6F6250","#F9F2E6"),f("Light","#4A4033","#8B7B64","#FFF9EE"),f("Neutral","#675947","#A89880","#FFF9EE"),f("Dark","#CBBCA4","#E8DBC7","#30291F"),f("Soft","#463B2D","#B6A080","#FFF8E9"),f("Accent","#5C482F","#D1B98A","#FFF9EE","#483622"),f("Strong","#916C3C","#E0C28B","#FFFFFF","#705029","#CFAA69"),f("Note","#273A46","#7DB2D0","#E5EFF4"),f("Success","#31452B","#9BC58F","#E4F0DF"),f("Warning","#503016","#E3A060","#F9E8CD"),f("Danger","#51281F","#DA8A79","#F5E0DA"),f("Highlight","#4A3D12","#D6BC48","#F8F0BD"))}},zr={light:{edge:{stroke:"#52616B",strokeWidth:2,text:"#3E4A54"},node:{fill:"#EAF2FF",stroke:"#3574C7",strokeWidth:2,text:"#17202A"}},dark:{edge:{stroke:"#B8C7D5",strokeWidth:2,text:"#D9E4ED"},node:{fill:"#193A61",stroke:"#71AEF7",strokeWidth:2,text:"#F3F8FC"}}};var Hr=["note","info","warning","success"],jr={2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))","2fr 1fr":"minmax(0, 2fr) minmax(0, 1fr)","1fr 2fr":"minmax(0, 1fr) minmax(0, 2fr)"};function bt(r){if(r==="light"||r==="dark")return r;if(r==="auto")return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches?"dark":"light";throw new Error(`Unsupported document theme: ${r}`)}function at(r,e="light"){let t=bt(e),n=zr[t];if(!n)throw new Error(`Unsupported diagram theme: ${t}`);return n}function he(r,e,t){return Ce[r]?.[bt(e)]?.[t]||null}function ke(r,e){return{...r,...e||{}}}function yt(r,e){return e&&r.styles?.[e]||null}function je(r,e,t="light",n="classic"){let i=at(r,t).node,s=e.shape==="text"?{fill:"none",stroke:"none"}:null,a=yt(r,e.class),c=a?.palette?he(n,t,a.palette):null,d=e.palette?he(n,t,e.palette):null;return ke(ke(ke(ke(ke(i,s),c),a?.style),d),e.style)}function Xe(r,e,t="light",n="classic"){let o=at(r,t),i=e.palette?he(n,t,e.palette):null;return ke(ke(o.node,i),e.style)}function xt(r,e,t="light"){let n=at(r,t),o=yt(r,e.class);return ke(ke(n.edge,o?.style),e.style)}function Xt(r,e){let t=e==="start"?r.start:r.end;return typeof t=="string"&&ve.includes(t)?t:it[e]}function se(r){let e=Number(r.canvas?.grid);return Number.isFinite(e)&&e>0?e:0}function H(r,e){return e?Math.round(r/e)*e:Math.round(r)}function wt(r,e,t){let n=H(r,t),o=t?Math.ceil(e/t)*t:e;return Math.max(o,n)}function Or(r){return{width:Number(r.size?.width)||O.width,height:Number(r.size?.height)||O.height}}var X=class{constructor(e){this.entriesById=new Map;this.entriesByNode=new Map;this.ranges=new Map;let t=[],n=(o,i,s,a)=>{for(let c of o){let d={x:s.x+(Number(c.position?.x)||0),y:s.y+(Number(c.position?.y)||0)},l={node:c,parent:i,siblings:o,position:d,bounds:{...d,...Or(c)},depth:a},u=t.length;t.push(l),this.entriesById.set(c.id,this.entriesById.get(c.id)||l),this.entriesByNode.set(c,l),n(c.children||[],c,d,a+1),this.ranges.set(c,{start:u,end:t.length})}};n(e.nodes,null,{x:0,y:0},0),this.entries=t}getById(e){return this.entriesById.get(e)||null}getByNode(e){return this.entriesByNode.get(e)||null}contains(e,t){let n=this.ranges.get(e),o=this.ranges.get(t);return!!(n&&o&&o.start>n.start&&o.start<n.end)}isRelated(e,t){return e===t||this.contains(e,t)||this.contains(t,e)}descendants(e){let t=this.ranges.get(e);return t?this.entries.slice(t.start+1,t.end):[]}};function ce(r,e){return new X(r).getById(e)}function Ke(r,e){return new X(r).getByNode(e)?.bounds||{x:0,y:0,...Or(e)}}function Gr(r,e){var h;let t=new X(r),n=t.getById(e);if(!n)return null;let{node:o,siblings:i,position:s}=n,{width:a,height:c}=n.bounds,d={x:s.x+a/2,y:s.y+c/2},u=t.entries.filter(b=>b.node!==o&&!t.contains(o,b.node)).filter(({bounds:b})=>d.x>=b.x&&d.x<=b.x+b.width&&d.y>=b.y&&d.y<=b.y+b.height).reduce((b,m)=>!b||m.depth>=b.depth?m:b,null),g=u?(h=u.node).children||(h.children=[]):r.nodes;return i===g||(i.splice(i.indexOf(o),1),o.position={x:s.x-(u?.position.x||0),y:s.y-(u?.position.y||0)},g.push(o)),o}function ro(r){return{x:Number(r.position?.x)||0,y:Number(r.position?.y)||0,width:Number(r.size?.width)||O.width,height:Number(r.size?.height)||O.height}}function Ze(r,e,t=40){return Vr(r,e,t)}function Kt(r,e=40){return Vr(r,null,e,!0)}function Vr(r,e,t=40,n=!1){let o=Number(r.canvas?.width)||1e3,i=Number(r.canvas?.height)||560,s=n||!!r.canvas?.auto,a=new X(r),d=[...new Set(a.entries.map(y=>y.node))];e&&!d.includes(e)&&d.push(e);let l=y=>a.getByNode(y)?.bounds||ro(y),u=()=>[...d.map(l),...d.filter(y=>y.arrow).map(y=>({x:y.arrow.x,y:y.arrow.y,width:0,height:0})),...(r.edges||[]).filter(y=>y.waypoint).map(y=>({x:y.waypoint.x,y:y.waypoint.y,width:0,height:0}))],g=u(),h=Math.min(0,...g.map(y=>y.x)),b=Math.min(0,...g.map(y=>y.y)),m=h<0?t-h:0,p=b<0?t-b:0;if(m||p){for(let y of a.entries.filter(F=>F.parent===null)){let F=y.node;F.position={...F.position,x:(Number(F.position?.x)||0)+m,y:(Number(F.position?.y)||0)+p}}for(let y of d)y.arrow&&(y.arrow={x:y.arrow.x+m,y:y.arrow.y+p});for(let y of r.edges||[])y.waypoint&&(y.waypoint={x:y.waypoint.x+m,y:y.waypoint.y+p});a=new X(r)}let S=u(),N=Math.max(2*t,...S.map(y=>y.x+y.width+t)),x=Math.max(2*t,...S.map(y=>y.y+y.height+t));return r.canvas={...r.canvas,width:s&&S.length?N:Math.max(o+m,N),height:s&&S.length?x:Math.max(i+p,x)},r}function Ur(r,e){return r.x<e.x+e.width&&r.x+r.width>e.x&&r.y<e.y+e.height&&r.y+r.height>e.y}function no(r,e="new-node"){let t=i=>i.flatMap(s=>[s.id,...t(s.children||[])]),n=new Set(t(r));if(!n.has(e))return e;let o=2;for(;n.has(`${e}-${o}`);)o+=1;return`${e}-${o}`}function oo(r,e){let t=e.replace(/[^a-z0-9]/gi,"").toLowerCase()||"node",n=1,o="";do o=`${t}${String(n).padStart(2,"0")}`,n+=1;while(r.has(o));return r.add(o),o}function io(r,e,t,n,o){let i=Number(r.canvas?.width)||1e3,s=Number(r.canvas?.height)||560,a=se(r),c=a||20,d={x:H(o.x,a),y:H(o.y,a)};for(let u=c;u<=Math.max(i,s);u+=c)for(let g of[{x:d.x+u,y:d.y+u},{x:d.x+u,y:d.y-u},{x:d.x-u,y:d.y+u},{x:d.x-u,y:d.y-u}])if(!(g.x<0||g.y<0||g.x+t>i||g.y+n>s)&&!e.entries.some(({bounds:h})=>Ur({...g,width:t,height:n},h)))return g;let l=Math.max(0,...e.entries.map(({bounds:u})=>u.x+u.width));return{x:H(l+c,a),y:0}}function ao(r){let e=new X(r),t=Number(r.canvas?.width)||1e3,n=Number(r.canvas?.height)||560,o=se(r),i={x:H(Math.max(0,(t-O.width)/2),o),y:H(Math.max(0,(n-O.height)/2),o)},s=o||20;for(let a=0;a<=Math.max(t,n);a+=s)for(let c of[{x:i.x+a,y:i.y},{x:i.x-a,y:i.y},{x:i.x,y:i.y+a},{x:i.x,y:i.y-a}])if(!(c.x<0||c.y<0||c.x+O.width>t||c.y+O.height>n)&&!e.entries.some(({bounds:d})=>Ur({...c,width:O.width,height:O.height},d)))return c;return i}function Wr(r){let e={id:no(r.nodes),label:O.label,shape:O.shape,position:ao(r),size:{width:O.width,height:O.height}};return r.nodes.push(e),e}function St(r,e){let t=new X(r),n=t.getById(e);if(!n)return null;let o=new Set(t.entries.map(({node:l})=>l.id)),i=l=>({id:oo(o,l.shape),label:l.label,shape:l.shape,...l.position?{position:{...l.position}}:{},...l.size?{size:{...l.size}}:{},...l.style?{style:{...l.style}}:{},...l.palette?{palette:l.palette}:{},...l.subtitle!==void 0?{subtitle:l.subtitle}:{},...l.textVAlign!==void 0?{textVAlign:l.textVAlign}:{},...l.textHAlign!==void 0?{textHAlign:l.textHAlign}:{},...l.children?{children:l.children.map(i)}:{}}),s=i(n.node),a=n.bounds,c=io(r,t,Number(s.size?.width)||O.width,Number(s.size?.height)||O.height,a),d=n.parent?t.getByNode(n.parent)?.position||{x:0,y:0}:{x:0,y:0};return s.position={x:c.x-d.x,y:c.y-d.y},n.siblings.push(s),Ze(r,s),s}function Yr(r,e,t,n,o){let i={source:e,target:n,sourceAnchor:t,targetAnchor:o,route:"orthogonal",end:"arrow"};return r.edges.push(i),i}function _r(r,e,t,n){return e==="source"?(r.source=t,r.sourceAnchor=n):(r.target=t,r.targetAnchor=n),r}function vt(r,e){return e<0||e>=r.edges.length?null:r.edges.splice(e,1)[0]}function kt(r,e){let t=ce(r,e);if(!t)return{node:null,deletedEdges:[]};let n=new Set([t.node,...t.node.children||[]].flatMap(function i(s){return[s,...(s.children||[]).flatMap(i)]}).map(i=>i.id)),o=r.edges.filter(i=>n.has(i.source)||n.has(i.target));return t.siblings.splice(t.siblings.indexOf(t.node),1),r.edges=r.edges.filter(i=>!n.has(i.source)&&!n.has(i.target)),r.canvas?.auto&&Kt(r),{node:e,deletedEdges:o}}function $t(r,e){return r.label=String(e).trim(),r}function Xr(r,e){return r.shape=e,r}function Kr(r,e){return r.subtitle=String(e??"").trim(),r}function Zt(r,e,t){return e==="textVAlign"&&(t==="top"||t==="center")&&(r.textVAlign=t),e==="textHAlign"&&(t==="left"||t==="center"||t==="right")&&(r.textHAlign=t),r}function st(r,e,t){return r.style={...r.style,[e]:t},r}function Jt(r,e,t="classic"){if(!he(t,"light",e))return r;let{fill:o,stroke:i,text:s,...a}=r.style||{};return Object.keys(a).length?r.style=a:delete r.style,r.palette=e,r}function Zr(r){return r==="document"?_t:Yt}function Qt(r){return{position:{x:Number(r.position?.x)||0,y:Number(r.position?.y)||0},size:{width:Number(r.size?.width)||O.width,height:Number(r.size?.height)||O.height},childPositions:new Map((r.children||[]).map(e=>[e,{x:Number(e.position?.x)||0,y:Number(e.position?.y)||0}]))}}function Jr(r,e,t,n,o,i=Qt(e)){let s=se(r),a=Zr(e.shape),c=t.endsWith("left"),d=t.startsWith("top"),l=wt(i.size.width+(c?-n:n),a.width,s),u=wt(i.size.height+(d?-o:o),a.height,s);if(e.shape==="circle"){let m=Math.max(l,u);l=m,u=m}let g={...e.position,x:c?i.position.x+i.size.width-l:i.position.x,y:d?i.position.y+i.size.height-u:i.position.y},h=i.position.x-g.x,b=i.position.y-g.y;for(let m of e.children||[]){let p=i.childPositions.get(m)||m.position||{x:0,y:0};m.position={...m.position,x:p.x+h,y:p.y+b}}return e.position=g,e.size={...e.size,width:l,height:u},e}function er(r,e,t,n){let o=se(r),i=Zr(e.shape),s=t==="width"?i.width:i.height,a=wt(Number(n)||s,s,o);return e.size=e.shape==="circle"?{...e.size,width:a,height:a}:{...e.size,[t]:a},e}function Ft(r,e){return r.label=String(e).trim(),r}function Qr(r,e){return r.route=e,r}function en(r){return delete r.waypoint,r}function tr(r,e){return r.arrow={x:e.x,y:e.y},r}function so(r){return delete r.arrow,r}function tn(r,e){if(e.arrow)return so(e);let t=Ke(r,e),n=se(r),o=tr(e,{x:H(t.x+t.width/2,n),y:H(t.y+t.height+Math.max(60,t.height*.75),n)});return Ze(r,e),o}function rr(r,e,t){return e==="source"?r.sourceAnchor=t:r.targetAnchor=t,r}function nr(r,e,t){return r.style={...r.style,[e]:t},r}function or(r,e){let t=Math.max(1,Math.round(Number(e))||1);return r.style={...r.style,strokeWidth:t},r}function rn(r,e){return r.start=ve.includes(e)?e:it.start,r}function nn(r,e){return r.end=ve.includes(e)?e:it.end,r}function Et(r){return Math.min(Math.max(25,Number(r)||100),800)}function Dt(r,e=0){return e===1?r*16:e===2?r*400:r}function on(r,e,t=0){return Et(Et(r)*Math.exp(-Dt(e,t)*.0025))}var an=["right","down","left","up"],sn=new WeakSet;function cn(r){return sn.has(r)}var ir={stageGap:120,siblingGap:60};function Be(r){return{width:Number(r.size?.width)||O.width,height:Number(r.size?.height)||O.height}}function ar(r){return Number.isFinite(r.position?.x)&&Number.isFinite(r.position?.y)}function sr(r){if(r==null)return null;if(typeof r=="string")return{direction:r,...ir};let e=r;return{direction:e.direction,stageGap:e.stageGap===void 0?ir.stageGap:Number(e.stageGap),siblingGap:e.siblingGap===void 0?ir.siblingGap:Number(e.siblingGap)}}function co(r){return r==="right"||r==="left"}function cr(r){return{right:{source:"right",target:"left"},left:{source:"left",target:"right"},down:{source:"bottom",target:"top"},up:{source:"top",target:"bottom"}}[r]}function lo(r,e,t){let n=new Set(r),o=cr(t),i=e.filter(m=>n.has(m.source)&&n.has(m.target)&&m.source!==m.target),s=i.filter(m=>!(m.sourceAnchor===o.target&&m.targetAnchor===o.source)),a=s.length?s:i,c=new Map;for(let m of a)c.set(m.source,[...c.get(m.source)||[],m.target]);let d=[],l=new Map,u=m=>{l.set(m,"visiting");for(let p of c.get(m)||[])l.get(p)!=="visiting"&&(d.push({source:m,target:p}),l.has(p)||u(p));l.set(m,"done")};for(let m of r)l.has(m)||u(m);let g=new Map;for(let m of d)g.set(m.target,[...g.get(m.target)||[],m.source]);let h=new Map,b=(m,p)=>{let S=h.get(m);if(S!==void 0)return S;if(p.has(m))return 0;p.add(m);let N=Math.max(0,...(g.get(m)||[]).map(x=>b(x,p)+1));return h.set(m,N),N};for(let m of r)b(m,new Set);return h}function uo(r,e,t=4){let n=s=>{let a=new Map;for(let c of e){let[d,l]=s?[c.target,c.source]:[c.source,c.target];a.set(d,[...a.get(d)||[],l])}return a},o=n(!0),i=n(!1);for(let s=0;s<t;s+=1){let a=s%2===0,c=a?r.map((d,l)=>l):r.map((d,l)=>r.length-1-l);for(let d of c){let l=a?d-1:d+1,u=r[l];if(!u)continue;let g=new Map(u.map((p,S)=>[p,S])),h=a?o:i,b=new Map;for(let p of r[d]){let S=(h.get(p)||[]).map(N=>g.get(N)).filter(N=>N!==void 0).sort((N,x)=>N-x);b.set(p,S.length?S[S.length-1>>1]:Number.NaN)}let m=new Map(r[d].map((p,S)=>[p,S]));r[d]=[...r[d]].sort((p,S)=>{let N=b.get(p),x=b.get(S);return Number.isNaN(N)||Number.isNaN(x)||N===x?m.get(p)-m.get(S):N-x})}}}function mo(r,e,t,n,o){let i=r.map(x=>x.id),s=lo(i,e,t.direction),a=Math.max(0,...s.values())+1,c=Array.from({length:a},()=>[]);for(let x of i)c[s.get(x)||0].push(x);let d=e.filter(x=>s.has(x.source)&&s.has(x.target));uo(c,d);let l=new Map(r.map(x=>[x.id,x])),u=co(t.direction),g=t.direction==="left"||t.direction==="up",h=c.map(x=>Math.max(0,...x.map(y=>{let F=Be(l.get(y));return u?F.width:F.height}))),b=c.map(x=>x.reduce((y,F,w)=>{let $=Be(l.get(F));return y+(u?$.height:$.width)+(w?t.siblingGap:0)},0)),m=Math.max(0,...b),p=0,S=h.map(x=>{let y=p;return p+=x+t.stageGap,y}),N=Math.max(0,p-t.stageGap);c.forEach((x,y)=>{let F=(m-b[y])/2;for(let w of x){let $=l.get(w),k=Be($),C=g?N-S[y]-(u?k.width:k.height):S[y];$.position={x:H(n.x+(u?C:F),o),y:H(n.y+(u?F:C),o)},F+=(u?k.height:k.width)+t.siblingGap}})}function dn(r,e,t=0){return r.x-t<e.x+e.width&&r.x+r.width+t>e.x&&r.y-t<e.y+e.height&&r.y+r.height+t>e.y}function go(r,e,t,n,o){let i=new Map(e.filter(ar).map(m=>[m.id,m])),s=Be(r),a=cr(n.direction),c=[];for(let m of t){let p=m.source===r.id,S=m.target===r.id;if(p===S)continue;let N=i.get(p?m.target:m.source);if(!N)continue;let x=(p?m.sourceAnchor:m.targetAnchor)||(p?a.source:a.target),y={...N.position,...Be(N)};x==="left"?c.push({position:{x:y.x+y.width+n.stageGap,y:y.y+(y.height-s.height)/2},axis:"x",sign:1}):x==="right"?c.push({position:{x:y.x-n.stageGap-s.width,y:y.y+(y.height-s.height)/2},axis:"x",sign:-1}):x==="top"?c.push({position:{x:y.x+(y.width-s.width)/2,y:y.y+y.height+n.stageGap},axis:"y",sign:1}):x==="bottom"&&c.push({position:{x:y.x+(y.width-s.width)/2,y:y.y-n.stageGap-s.height},axis:"y",sign:-1})}if(!c.length)return null;let d=c[0].axis,l=c.filter(m=>m.axis===d),g=l[0].sign>0?Math.max(...l.map(m=>m.position[d])):Math.min(...l.map(m=>m.position[d])),h=d==="x"?"y":"x",b=c.reduce((m,p)=>m+p.position[h],0)/c.length;return{position:{x:H(d==="x"?g:b,o),y:H(d==="y"?g:b,o)},acrossAxis:h}}function ho(r,e,t,n,o,i){let s=o||20,a=Math.min(i,20);for(let c=0;c<=200;c+=1)for(let d of c?[c*s,-c*s]:[0]){let l={...r,[n]:r[n]+d},u={...l,...e};if(!t.some(g=>dn(u,g,a)))return{x:H(l.x,o),y:H(l.y,o)}}return r}function po(r,e,t,n,o){let i=n||20,s=Math.min(o,20),a={x:H(t.x,n),y:H(t.y,n)},c=Math.max(t.y,...e.map(d=>d.y+d.height));for(let d=0;d<=2e3;d+=i)for(let l of d?[{x:a.x+d,y:a.y},{x:a.x,y:a.y+d}]:[a])if(!e.some(u=>dn({...l,...r},u,s)))return l;return{x:a.x,y:H(c+i,n)}}function fo(r,e,t,n,o){let i=r.filter(s=>!ar(s));if(!i.length)return!1;if(i.length===r.length)return mo(r,e,t,n,o),!0;for(let s of i){let a=Be(s),c=r.filter(l=>l!==s&&ar(l)).map(l=>({...l.position,...Be(l)})),d=go(s,r,e,t,o);s.position=d?ho(d.position,a,c,d.acrossAxis,o,t.siblingGap):po(a,c,n,o,t.siblingGap)}return!0}function bo(r,e){let t=e.x+e.width/2-(r.x+r.width/2),n=e.y+e.height/2-(r.y+r.height/2),o=Math.abs(t)-(r.width+e.width)/2,i=Math.abs(n)-(r.height+e.height)/2;return o<=0&&i<=0?null:o>=i?t>=0?{source:"right",target:"left"}:{source:"left",target:"right"}:n>=0?{source:"bottom",target:"top"}:{source:"top",target:"bottom"}}function yo(r,e){let t=r.edges||[];if(!t.some(i=>!i.sourceAnchor||!i.targetAnchor))return!1;let n=cr(e.direction),o=new X(r);for(let i of t){if(i.sourceAnchor&&i.targetAnchor)continue;let s=o.getById(i.source)?.bounds,a=o.getById(i.target)?.bounds,c=s&&a&&i.source!==i.target?bo(s,a):null;i.sourceAnchor=i.sourceAnchor||c?.source||n.source,i.targetAnchor=i.targetAnchor||c?.target||n.target}return!0}function ln(r){let e=sr(r.layout);if(!e)return r;let t=se(r),n=40,o=!1,i=(s,a)=>{for(let c of s)if(c.children?.length&&(i(c.children,{x:n,y:n}),!c.size)){let d=c.children.reduce((l,u)=>{let g=Be(u);return{width:Math.max(l.width,(Number(u.position?.x)||0)+g.width),height:Math.max(l.height,(Number(u.position?.y)||0)+g.height)}},{width:0,height:0});c.size={width:H(d.width+n,t),height:H(d.height+n,t)}}o=fo(s,r.edges||[],e,a,t)||o};return i(r.nodes||[],{x:n,y:n}),o=yo(r,e)||o,o&&sn.add(r),r}var xo=["nodes","edges","participants","messages","activations","notes","groups"],wo=["id","label","shape","class","position","size","style","palette","subtitle","textVAlign","textHAlign","arrow","children"],Eo=["source","target","class","sourceAnchor","targetAnchor","route","label","style","start","end","waypoint"],So=["palette","style"],vo=["direction","stageGap","siblingGap"],lr=["fill","stroke","strokeWidth","text"],ko=["stroke","strokeWidth","text"],$o=["id","label","kind","palette","style","size"],Fo=["actor"],Do=["from","to","label","style"],No=["solid","dashed"],Ao=["participant","from","to"],Mo=["at","after","label","palette","style","size"],Co=["label","from","to"],To=["width","height","participantSpacing","participantSize"];function v(r){return String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function qe(r){let e=r.trim();if(e.startsWith('"')&&e.endsWith('"'))try{return JSON.parse(e)}catch{throw new Error(`Invalid quoted scalar: ${e}`)}if(e.startsWith("'")&&e.endsWith("'"))return e.slice(1,-1);if(/^-?\d+(\.\d+)?$/.test(e))return Number(e);if(e==="true"||e==="false")return e==="true";if(e.startsWith("{")&&e.endsWith("}")){let t=e.slice(1,-1).trim();if(!t)return{};let n=t.split(","),o={};for(let i of n){let s=i.indexOf(":");if(s===-1)throw new Error(`Invalid inline mapping: ${e}`);let a=i.slice(0,s).trim();o[a]=qe(i.slice(s+1))}return o}return e}var Lo=/^(\s*)((?:- )?)([A-Za-z_][\w-]*):\s*\|([+-])?\s*$/;function Po(r){let e=[],t=0;for(;t<r.length;){let n=r[t],o=n.match(Lo);if(!o){e.push(n),t+=1;continue}let[,i,s,a,c]=o,d=t+1,l=null;for(;d<r.length;){let m=r[d];if(m.trim()===""){d+=1;continue}l=m.length-m.trimStart().length;break}if(l===null||l<=i.length){e.push(`${i}${s}${a}: ""`),t+=1;continue}let u=[],g=t+1,h=0;for(;g<r.length;){let m=r[g];if(m.trim()===""){u.push(""),h+=1,g+=1;continue}if(m.length-m.trimStart().length<l)break;u.push(m.slice(l)),h=0,g+=1}h>0&&c!=="+"&&(u.length-=h-1);let b=u.join(`
`);e.push(`${i}${s}${a}: ${JSON.stringify(b)}`),t=g}return e}function $e(r,e="classic"){let n=Po(r.replace(/\r\n/g,`
`).split(`
`)).filter(g=>g.trim()&&!g.trimStart().startsWith("#"));for(let g of n){if(g.trimStart()!==g||!g.trimEnd().endsWith(":"))continue;let h=g.trim().slice(0,-1);if(h!=="canvas"&&h!=="styles"&&h!=="layout"&&!xo.includes(h))throw new Error(`Unsupported diagram section: ${h}`)}let o=0,i=g=>g.length-g.trimStart().length,s=g=>g.trim().match(/^([^:]+):\s*(.*)$/),a=g=>g.trim().match(/^- ([^:]+):\s*(.*)$/),c=g=>o>=n.length||i(n[o])<=g?{}:n[o].trimStart().startsWith("- ")?l(i(n[o])):d(i(n[o])),d=g=>{let h={};for(;o<n.length&&i(n[o])===g;){let b=n[o],m=s(b);if(!m)throw new Error(`Cannot parse diagram line: ${b}`);o+=1,h[m[1]]=m[2]?qe(m[2]):c(g)}return h},l=g=>{let h=[];for(;o<n.length&&i(n[o])===g;){let b=n[o],m=a(b);if(!m)throw new Error(`Cannot parse diagram line: ${b}`);o+=1;let p={[m[1]]:m[2]?qe(m[2]):c(g)};for(;o<n.length&&i(n[o])>g;){let S=i(n[o]),N=s(n[o]);if(!N)throw new Error(`Cannot parse diagram line: ${n[o]}`);o+=1,p[N[1]]=N[2]?qe(N[2]):c(S)}h.push(p)}return h},u=d(0);if(!u.type)throw new Error(`Diagram type is required and must be one of: ${Wt.join(", ")}.`);if(typeof u.type!="string"||!Wt.includes(u.type))throw new Error(`Unsupported diagram type: ${String(u.type)}`);return u.type==="flowchart"?Ro(u,e):Bo(u,e)}function Ro(r,e="classic"){if(r.canvas==="auto"&&(r.canvas={auto:!0}),r.canvas=r.canvas||{},typeof r.canvas!="object"||Array.isArray(r.canvas))throw new Error('Flowchart canvas must be a mapping or the value "auto".');if(r.canvas.auto!==void 0&&typeof r.canvas.auto!="boolean")throw new Error("Flowchart canvas.auto must be true or false.");return Array.isArray(r.nodes)||(r.nodes=[]),Array.isArray(r.edges)||(r.edges=[]),zo(r,e),ln(r),r.canvas.auto&&Kt(r),r}function Bo(r,e="classic"){return Ho(r,e),r}function pe(r,e,t){for(let n of Object.keys(r||{}))if(!e.includes(n))throw new Error(`Unsupported ${t} field: ${n}`)}function Nt(r,e,t){if(r){for(let n of Object.keys(r))if(!e.includes(n))throw new Error(`Unsupported ${t} style field: ${n}`)}}function dr(r,e){let t=e.charAt(0).toUpperCase()+e.slice(1);if(typeof r!="object"||r===null||Array.isArray(r))throw new Error(`${t} must be a mapping.`);let n=r;if(!Number.isFinite(n.x)||!Number.isFinite(n.y))throw new Error(`${t} requires finite x and y coordinates.`);pe(r,["x","y"],e)}function qo(r){if(r.styles===void 0)return new Set;if(typeof r.styles!="object"||Array.isArray(r.styles))throw new Error("Diagram styles must be a mapping of names to style definitions.");for(let[e,t]of Object.entries(r.styles)){if(typeof t!="object"||t===null||Array.isArray(t))throw new Error(`Style "${e}" must be a mapping.`);if(pe(t,So,`style "${e}"`),t.palette!==void 0&&(typeof t.palette!="string"||!Ae.includes(t.palette)))throw new Error(`Unsupported palette in style "${e}": ${String(t.palette)}`);if(t.style?.width!==void 0)throw new Error(`Style "${e}" style.width is not supported; use style.strokeWidth.`);if(Nt(t.style,lr,`style "${e}"`),t.palette===void 0&&!Object.keys(t.style||{}).length)throw new Error(`Style "${e}" declares no palette or style values.`)}return new Set(Object.keys(r.styles))}function Io(r){if(r.layout===void 0)return;if(typeof r.layout=="object"&&!Array.isArray(r.layout)){pe(r.layout,vo,"layout");for(let t of["stageGap","siblingGap"]){let n=r.layout[t];if(n!==void 0&&(typeof n!="number"||!Number.isFinite(n)||n<0))throw new Error(`Layout ${t} must be a number of zero or more.`)}}else if(typeof r.layout!="string")throw new Error("Layout must be a direction or a mapping.");let e=sr(r.layout);if(!e||!an.includes(e.direction))throw new Error(`Unsupported layout direction: ${String(e?.direction)}`)}function zo(r,e="classic"){Io(r);let t=r.layout!==void 0;if(r.participants!==void 0||r.messages!==void 0||r.activations!==void 0||r.notes!==void 0||r.groups!==void 0)throw new Error("Flowchart diagrams do not support sequence sections.");let n=qo(r),o=(a,c)=>{if(a!==void 0&&(typeof a!="string"||!n.has(a)))throw new Error(`Unknown style class on ${c}: ${String(a)}`)},i=new Set,s=a=>{if("type"in a)throw new Error(`Node "${a.id||"unknown"}" uses removed field "type".`);if(pe(a,wo,`node "${a.id||"unknown"}"`),!a.id||typeof a.label!="string")throw new Error("Every node requires an id and a string label.");if(!a.shape)throw new Error(`Node "${a.id}" requires a shape.`);if(!pt.includes(a.shape))throw new Error(`Unsupported node shape: ${a.shape}`);if(a.position===void 0){if(!t)throw new Error(`Node "${a.id}" requires a position, or a "layout" on the diagram to place it.`)}else dr(a.position,`node "${a.id}" position`);if(a.textVAlign!==void 0&&!qr.includes(a.textVAlign))throw new Error(`Unsupported node textVAlign: ${a.textVAlign}`);if(a.textHAlign!==void 0&&!Ir.includes(a.textHAlign))throw new Error(`Unsupported node textHAlign: ${a.textHAlign}`);if(a.palette!==void 0&&(typeof a.palette!="string"||!Ae.includes(a.palette)))throw new Error(`Unsupported node palette: ${String(a.palette||"unknown")}`);if(a.style?.width!==void 0)throw new Error("Node style.width is not supported; use style.strokeWidth.");if(o(a.class,`node "${a.id}"`),Nt(a.style,lr,`node "${a.id}"`),a.arrow!==void 0&&dr(a.arrow,`node "${a.id}" arrow`),i.has(a.id))throw new Error(`Duplicate flowchart node id: ${a.id}`);if(i.add(a.id),a.children!==void 0&&!Array.isArray(a.children))throw new Error(`Children for node "${a.id}" must be a list.`);for(let c of a.children||[])s(c)};for(let a of r.nodes)s(a);for(let a of r.edges){if(pe(a,Eo,`edge "${a.source||"unknown"}" -> "${a.target||"unknown"}"`),!a.sourceAnchor&&!t)throw new Error(`Edge "${a.source||"unknown"}" -> "${a.target||"unknown"}" requires a sourceAnchor.`);if(!a.targetAnchor&&!t)throw new Error(`Edge "${a.source||"unknown"}" -> "${a.target||"unknown"}" requires a targetAnchor.`);if(a.sourceAnchor&&!Me.includes(a.sourceAnchor))throw new Error(`Unsupported edge sourceAnchor: ${a.sourceAnchor}`);if(a.targetAnchor&&!Me.includes(a.targetAnchor))throw new Error(`Unsupported edge targetAnchor: ${a.targetAnchor}`);if(a.route!==void 0&&!ft.includes(a.route))throw new Error(`Unsupported edge route: ${a.route}`);if(a.waypoint!==void 0&&dr(a.waypoint,`edge "${a.source}" -> "${a.target}" waypoint`),a.start!==void 0&&!ve.includes(a.start))throw new Error(`Unsupported edge start marker: ${a.start}`);if(a.end!==void 0&&!ve.includes(a.end))throw new Error(`Unsupported edge end marker: ${a.end}`);if(a.style?.width!==void 0)throw new Error("Edge style.width is not supported; use style.strokeWidth.");o(a.class,`edge "${a.source||"unknown"}" -> "${a.target||"unknown"}"`),Nt(a.style,ko,`edge "${a.source||"unknown"}" -> "${a.target||"unknown"}"`)}}function Ho(r,e="classic"){if(r.nodes!==void 0||r.edges!==void 0)throw new Error("Sequence diagrams do not support flowchart sections.");if(!Array.isArray(r.participants)||!Array.isArray(r.messages))throw new Error("Sequence diagrams require participants and messages sections.");if(r.activations!==void 0&&!Array.isArray(r.activations))throw new Error("Sequence diagram activations must be a list.");if(r.notes!==void 0&&!Array.isArray(r.notes))throw new Error("Sequence diagram notes must be a list.");if(r.groups!==void 0&&!Array.isArray(r.groups))throw new Error("Sequence diagram groups must be a list.");if(r.canvas!==void 0&&(typeof r.canvas!="object"||Array.isArray(r.canvas)))throw new Error("Sequence canvas must be a mapping.");pe(r.canvas,To,"sequence canvas");for(let n of["width","height","participantSpacing"]){let o=r.canvas?.[n];if(o!==void 0&&(!Number.isFinite(o)||Number(o)<=0))throw new Error(`Sequence canvas.${n} must be a positive number.`)}if(r.canvas?.participantSize!==void 0){if(typeof r.canvas.participantSize!="object"||Array.isArray(r.canvas.participantSize))throw new Error("Sequence canvas.participantSize must be a mapping.");pe(r.canvas.participantSize,["width","height"],"sequence canvas participantSize");for(let n of["width","height"]){let o=r.canvas.participantSize[n];if(o!==void 0&&(!Number.isFinite(o)||Number(o)<=0))throw new Error(`Sequence canvas.participantSize.${n} must be a positive number.`)}}let t=new Set;for(let n of r.participants){if(pe(n,$o,`participant "${n.id||"unknown"}"`),!n.id||!n.label)throw new Error("Every sequence participant requires an id and label.");if(n.kind!==void 0&&!Fo.includes(n.kind))throw new Error(`Unsupported sequence participant kind: ${n.kind}`);if(un(n,`participant "${n.id}"`,e),t.has(n.id))throw new Error(`Duplicate sequence participant id: ${n.id}`);t.add(n.id)}for(let[n,o]of r.messages.entries()){if(pe(o,Do,`message ${n}`),!o.from||!o.to||!o.label)throw new Error(`Sequence message ${n} requires from, to, and label.`);if(!t.has(o.from)||!t.has(o.to))throw new Error(`Sequence message ${n} references an unknown participant.`);if(o.style!==void 0&&!No.includes(o.style))throw new Error(`Unsupported sequence message style: ${o.style}`)}for(let[n,o]of(r.activations||[]).entries()){if(pe(o,Ao,`activation ${n}`),!o.participant||!Number.isInteger(o.from)||!Number.isInteger(o.to))throw new Error(`Sequence activation ${n} requires participant and integer from and to message positions.`);if(!t.has(o.participant))throw new Error(`Sequence activation ${n} references an unknown participant.`);if(o.from<1||o.to<o.from||o.to>r.messages.length)throw new Error(`Sequence activation ${n} range is out of bounds.`)}for(let[n,o]of(r.notes||[]).entries()){pe(o,Mo,`note ${n}`);let i=o.after;if(!o.at||!Number.isInteger(i)||!o.label)throw new Error(`Sequence note ${n} requires at, after, and label.`);if(un(o,`note ${n}`,e),!t.has(o.at))throw new Error(`Sequence note ${n} references an unknown participant.`);if(i<0||i>r.messages.length)throw new Error(`Sequence note ${n} after position is out of bounds.`)}for(let[n,o]of(r.groups||[]).entries()){if(pe(o,Co,`group ${n}`),!o.label&&o.label!=="")throw new Error(`Sequence group ${n} requires a label.`);if(!Number.isInteger(o.from)||!Number.isInteger(o.to))throw new Error(`Sequence group ${n} requires integer from and to indices.`);if(o.from<1||o.to<o.from||o.to>r.messages.length)throw new Error(`Sequence group ${n} range is out of bounds.`)}}function un(r,e,t="classic"){if(r.palette!==void 0){let n=String(r.palette||"");if(!Ae.includes(n))throw new Error(`Unsupported ${e} palette: ${n||"unknown"}`)}if(Nt(r.style,lr,e),r.size){pe(r.size,["width","height"],`size for ${e}`);for(let n of["width","height"]){let o=r.size[n];if(o!==void 0&&(!Number.isFinite(o)||Number(o)<=0))throw new Error(`${e} size.${n} must be a positive number.`)}}}function ur(r){return typeof r=="number"||typeof r=="boolean"?String(r):r&&typeof r=="object"?Object.keys(r).length?`{ ${Object.entries(r).map(([e,t])=>`${e}: ${ur(t)}`).join(", ")} }`:"{}":/^[\w./-]+(?: [\w./-]+)*$/.test(String(r))?String(r):JSON.stringify(String(r))}function Je(r,e,t,n,o=""){if(typeof e=="string"&&e.includes(`
`)){let i=e.split(`
`).map(s=>s.length?`${" ".repeat(n)}${s}`:"");return[`${" ".repeat(t)}${o}${r}: |+`,...i]}return[`${" ".repeat(t)}${o}${r}: ${ur(e)}`]}function Ie(r,e=2){let t=Object.entries(r),[n,o]=t[0],i=Je(n,o,e,e+4,"- ");for(let[s,a]of t.slice(1))if(!(s==="children"&&Array.isArray(a)&&!a.length))if(s==="children"&&Array.isArray(a)){i.push(`${" ".repeat(e+2)}children:`);for(let c of a)i.push(...Ie(c,e+4))}else i.push(...Je(s,a,e+2,e+4));return i}function Qe(r){let e=[`type: ${ur(r.type)}`];for(let[o,i]of Object.entries(r))o==="type"||o==="canvas"||o==="styles"||o==="nodes"||o==="edges"||o==="participants"||o==="messages"||o==="activations"||o==="notes"||o==="groups"||e.push(...Je(o,i,0,2));if(r.type==="sequence"){if(r.canvas!==void 0){e.push("canvas:");for(let[o,i]of Object.entries(r.canvas))e.push(...Je(o,i,2,4))}e.push("participants:");for(let o of r.participants||[])e.push(...Ie(o));e.push("messages:");for(let o of r.messages||[])e.push(...Ie(o));if(r.activations!==void 0){e.push("activations:");for(let o of r.activations||[])e.push(...Ie(o))}if(r.notes!==void 0){e.push("notes:");for(let o of r.notes||[])e.push(...Ie(o))}if(r.groups!==void 0){e.push("groups:");for(let o of r.groups||[])e.push(...Ie(o))}return e.join(`
`)}if(r.styles!==void 0){e.push("styles:");for(let[o,i]of Object.entries(r.styles)){e.push(`  ${o}:`);for(let[s,a]of Object.entries(i))e.push(...Je(s,a,4,6))}}let t=r.canvas||{},n=Object.entries(t).filter(([o])=>!t.auto||o!=="width"&&o!=="height");if(t.auto&&n.length===1)e.push("canvas: auto");else if(n.length){e.push("canvas:");for(let[o,i]of n)e.push(...Je(o,i,2,4))}e.push("nodes:");for(let o of r.nodes||[])e.push(...Ie(o));e.push("edges:");for(let o of r.edges||[])e.push(...Ie(o));return e.join(`
`)}var jo=/^(?: {0,3}> ?)+/;function Te(r){return r.replace(jo,"")}function Le(r){let e=r.match(/^(`{3,})([\w-]*)\s*$/);return e?{marker:e[1],info:e[2]}:null}function Oe(r,e){let t=r.match(/^(`{3,})\s*$/);return!!(t&&t[1].length>=e.length)}function et(r,e,t,n=r.length){for(let o=e;o<n;o+=1)if(Oe(Te(r[o]),t))return o;return-1}var Oo=["document","diagram"];function ct(r){let e=r.replace(/\r\n/g,`
`).split(`
`),t=e.findIndex(i=>i.trim()!=="");if(t===-1||e[t]!=="---")return{content:r,frontmatter:{}};let n=e.indexOf("---",t+1);if(n===-1)return{content:r,frontmatter:{}};let o={};for(let i of e.slice(t+1,n)){if(!i.trim()||i.trimStart().startsWith("#"))continue;let s=i.match(/^([^:]+):\s*(.*)$/);if(!s)throw new Error(`Cannot parse document frontmatter line: ${i}`);o[s[1]]=qe(s[2])}return{content:e.slice(n+1).join(`
`),frontmatter:o}}function dt(r){let e=ct(r),t=String(e.frontmatter.theme||"auto"),n=String(e.frontmatter.colourScheme||"classic"),o=String(e.frontmatter.doctype||"document"),i;try{i=bt(t)}catch{throw new Error(`Unsupported document theme: ${t}`)}if(!Ce[n])throw new Error(`Unsupported document colour scheme: ${n}`);if(!Oo.includes(o))throw new Error(`Unsupported document doctype: ${o}`);return{...e,theme:t,resolvedTheme:i,colourScheme:n,doctype:o}}function At(r){let e=dt(r),t=e.content.replace(/\r\n/g,`
`).split(`
`),n=0,o=new Set,i=!1,s=null;for(let a of t){let c=Te(a);if(s){Oe(c,s)&&(s=null);continue}let d=Le(c);if(d){s=d.marker;continue}if(/^:::diagram\s+\{\s*id=/.test(c)){i=!0;break}}for(;n<t.length;){let a=Te(t[n]),c=Le(a);if(!c){n+=1;continue}let d=et(t,n+1,c.marker);if(d===-1)throw new Error("Unclosed code block.");if(c.info==="diagram"){let l=t.slice(n+1,d).map(g=>Te(g)).join(`
`);$e(l,e.colourScheme);let u=l.match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m)?.slice(1).find(Boolean);if(u){if(o.has(u))throw new Error(`Duplicate diagram id: ${u}`);o.add(u)}else if(i)throw new Error("Every diagram requires an id when using diagram references.")}n=d+1}return e}function Mt(r){return r.match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m)?.slice(1).find(Boolean)||null}function Ct(r){let{content:e}=ct(r.replace(/\r\n/g,`
`)),t=e.split(`
`),n=[],o=0;for(;o<t.length;){let i=Le(Te(t[o]));if(!i){o+=1;continue}let s=et(t,o+1,i.marker);if(s===-1)break;if(i.info==="diagram"){let a=t.slice(o+1,s).map(c=>Te(c)).join(`
`);n.push({id:Mt(a),source:a})}o=s+1}return n}function mn(r){let e=2166136261;for(let t=0;t<r.length;t+=1)e^=r.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e.toString(16).padStart(8,"0")}function mr(r){let e=r.split(`
`),t=e.map(h=>h.endsWith("\r")?h.slice(0,-1):h),o=e.filter(h=>h.endsWith("\r")).length*2>e.length-1?"\r":"",i=r.replace(/\r\n/g,`
`),{content:s,frontmatter:a}=ct(i),c=String(a.colourScheme||"classic"),d=[],l=i.split(`
`).length-s.split(`
`).length,u=0,g=0;for(;l<e.length;){let h=Le(Te(t[l]));if(!h){l+=1;continue}let b=et(t,l+1,h.marker);if(b===-1)break;if(h.info==="diagram"){let m=t.slice(l+1,b).map(S=>Te(S)).join(`
`),p=$e(m,c);if(p.type==="flowchart"&&cn(p)){let S=t[l],N=S.slice(0,S.length-Te(S).length);d.push({start:l+1,end:b,lines:Qe(p).split(`
`).map(x=>`${N}${x}${o}`)}),u+=1}else g+=1}l=b+1}return{source:gr(e,d).join(`
`),baked:u,preserved:g,fences:d}}function gr(r,e){let t=[...r];for(let n of[...e].reverse())t.splice(n.start,n.end-n.start,...n.lines);return t}function gn(r,e){return Mt(r)===null?`id: ${e}
${r}`:r.replace(/^id:\s*(?:"[^"]+"|[^\s#]+)\s*$/m,()=>`id: ${e}`)}function hr(r,e,t){let n=r.replace(/\r\n/g,`
`),o=n.split(`
`),i=o.findIndex(l=>l.trim()!==""),s=i!==-1&&o[i]==="---",a=s?o.indexOf("---",i+1):-1;if(!s||a===-1)return`---
${e}: ${t}
---
${n}`;let c=!1,d=o.slice(i+1,a).map(l=>{if(!l.trim()||l.trimStart().startsWith("#"))return l;let u=l.match(/^([^:]+):\s*(.*)$/);return u&&u[1]===e?(c=!0,`${e}: ${t}`):l});return c||d.push(`${e}: ${t}`),[...o.slice(0,i+1),...d,...o.slice(a)].join(`
`)}function hn(r,e){return hr(r,"theme",e)}function pn(r,e){return hr(r,"colourScheme",e)}function fn(r,e){return hr(r,"doctype",e)}function bn(r,e){let t=e.trim(),n=t?r.indexOf(t):-1;return n===-1?null:{start:n,end:n+t.length}}function yn(r,e){let t=Number.parseFloat(globalThis.getComputedStyle(r).lineHeight)||20,n=r.value.slice(0,e.start).split(`
`).length-1,o=Math.max(1,Math.floor(r.clientHeight/t));r.scrollTop=Math.max(0,(n-Math.floor(o/2))*t)}function lt(r,e,t){let n=Math.min(r.x,e.x),o=Math.max(r.x,e.x),i=Math.min(r.y,e.y),s=Math.max(r.y,e.y);if(o<=t.x||n>=t.x+t.width||s<=t.y||i>=t.y+t.height)return!1;if(r.x===e.x||r.y===e.y)return!0;let a=d=>(e.x-r.x)*(d.y-r.y)-(e.y-r.y)*(d.x-r.x),c=[{x:t.x,y:t.y},{x:t.x+t.width,y:t.y},{x:t.x+t.width,y:t.y+t.height},{x:t.x,y:t.y+t.height}].map(a);return c.some(d=>d>0)&&c.some(d=>d<0)}function Tt(r,e){return r.slice(1).some((t,n)=>e.some(o=>lt(r[n],t,o)))}var Go=20,Vo=220;function xn(r){return[...new Set(r.map(e=>Math.round(e*100)/100))].sort((e,t)=>e-t)}var pr=[{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}];function wn(r){return r.x>0?0:r.x<0?1:r.y>0?2:3}function fr(r,e,t,n,o,i=24,s=Go){let a={x:r.x+t.x*i,y:r.y+t.y*i},c={x:e.x+n.x*i,y:e.y+n.y*i},d=xn([r.x,e.x,a.x,c.x,...o.flatMap(M=>[M.x-s,M.x+M.width+s])]),l=xn([r.y,e.y,a.y,c.y,...o.flatMap(M=>[M.y-s,M.y+M.height+s])]),u=new Map(d.map((M,L)=>[M,L])),g=new Map(l.map((M,L)=>[M,L])),h=M=>{let L=u.get(Math.round(M.x*100)/100),A=g.get(Math.round(M.y*100)/100);return L===void 0||A===void 0?null:{column:L,row:A}},b=h(a),m=h(c);if(!b||!m)return null;let p=(M,L)=>!o.some(A=>lt(M,L,A));if(!p(r,a)||!p(e,c))return null;let S=d.length*l.length*4,N=(M,L,A)=>(L*d.length+M)*4+A,x=new Float64Array(S).fill(Number.POSITIVE_INFINITY),y=new Int32Array(S).fill(-1),F=wn({x:-n.x,y:-n.y}),w=wn(t),$=N(b.column,b.row,w);x[$]=0;let k=[{key:$,cost:0}],C=-1;for(;k.length;){k.sort((R,j)=>R.cost-j.cost||R.key-j.key);let M=k.shift();if(M.cost>x[M.key])continue;let L=M.key%4,A=(M.key-L)/4,P=A%d.length,I=(A-P)/d.length;if(P===m.column&&I===m.row&&L===F){C=M.key;break}let D={x:d[P],y:l[I]};for(let R=0;R<4;R=R+1){let j=pr[R];if(j.x===-pr[L].x&&j.y===-pr[L].y)continue;let G=P+j.x,_=I+j.y;if(G<0||G>=d.length||_<0||_>=l.length)continue;let ee={x:d[G],y:l[_]};if(!p(D,ee))continue;let ue=M.cost+Math.hypot(ee.x-D.x,ee.y-D.y)+(R===L?0:Vo),we=N(G,_,R);ue<x[we]&&(x[we]=ue,y[we]=M.key,k.push({key:we,cost:ue}))}}if(C===-1)return null;let q=[];for(let M=C;M!==-1;M=y[M]){let L=M%4,A=(M-L)/4,P=A%d.length,I=(A-P)/d.length;q.unshift({x:d[P],y:l[I]})}return br([r,...q,e])}function br(r){let e=r.filter((t,n)=>n===0||t.x!==r[n-1].x||t.y!==r[n-1].y);return e.filter((t,n)=>{if(n===0||n===e.length-1)return!0;let o=e[n-1],i=e[n+1];return!(o.x===t.x&&t.x===i.x||o.y===t.y&&t.y===i.y)})}function En(r,e,t){let n=t.x-e.x,o=t.y-e.y,i=Math.hypot(n,o),s=u=>i?Math.abs(n*(u.y-e.y)-o*(u.x-e.x))/i:Math.hypot(u.x-e.x,u.y-e.y),c=[...r.slice(1,-1),...r.slice(1).map((u,g)=>({x:(r[g].x+u.x)/2,y:(r[g].y+u.y)/2}))];if(!c.length)return null;let d=Math.max(...c.map(s));if(!d)return null;let l={x:(e.x+t.x)/2,y:(e.y+t.y)/2};return c.filter(u=>s(u)===d).reduce((u,g)=>Math.hypot(g.x-l.x,g.y-l.y)<Math.hypot(u.x-l.x,u.y-l.y)?g:u)}function de(r){return String(r??"").replace(/\r\n/g,`
`).split(`
`)}var Uo="iljI|!.,;:'`()[]{}/\\",Wo="tfr",Yo="mwMW";function _o(r){return r===" "?.26:Uo.includes(r)?.28:Wo.includes(r)?.33:Yo.includes(r)?.85:r>="0"&&r<="9"?.56:r>="A"&&r<="Z"?.66:.55}function Lt(r,e,t=!1){let n=0;for(let o of String(r??""))n+=_o(o);return n*e*(t?1.03:1)}function Sn(r,e,t,n=!1){return e>0?r.flatMap(o=>{if(Lt(o,t,n)<=e)return[o];let i=[],s="";for(let a of o.split(/(?<=\s)/)){let c=s+a;s&&Lt(c.trimEnd(),t,n)>e?(i.push(s.trimEnd()),s=a.trimStart()):s=c}return i.push(s.trimEnd()),i.filter((a,c)=>a||!c)}):r}function xe(r,e,t,n,o,i,s="middle"){if(!t.length)return"";let a=t.map((c,d)=>{let l=d===0?"":` dy="${n}"`;return`<tspan x="${r}"${l}>${v(c)||" "}</tspan>`}).join("");return`<text x="${r}" y="${e}" text-anchor="${s}" class="${o}" fill="${v(i)}">${a}</text>`}function fe(r,e,t,n,o){let i=r.shape,s=e+n/2,a=t+o/2,c={x:e+12,y:t+12,width:n-24,height:o-24},d={top:{x:s,y:t},right:{x:e+n,y:a},bottom:{x:s,y:t+o},left:{x:e,y:a}},l;if(i==="circle"){let u=Math.min(n,o),g=s-u/2,h=a-u/2,b=u/2;c.x=g+b*.3,c.y=h+b*.3,c.width=b*1.4,c.height=b*1.4,d.top.y=h,d.right.x=g+u,d.bottom.y=h+u,d.left.x=g,l=`<circle class="docdiagram-node-body" cx="${s}" cy="${a}" r="${b}"/>`}else if(i==="oval")c.x+=n*.1,c.width-=n*.2,l=`<ellipse class="docdiagram-node-body" cx="${s}" cy="${a}" rx="${n/2}" ry="${o/2}"/>`;else if(i==="database"){let u=Math.min(o*.22,18);c.y+=u/2,c.height-=u,l=`<path class="docdiagram-node-body" d="M ${e} ${t+u} C ${e} ${t-u/3} ${e+n} ${t-u/3} ${e+n} ${t+u} V ${t+o-u} C ${e+n} ${t+o+u/3} ${e} ${t+o+u/3} ${e} ${t+o-u} Z"/><path class="docdiagram-node-detail" d="M ${e} ${t+u} C ${e} ${t+u*2.3} ${e+n} ${t+u*2.3} ${e+n} ${t+u}" fill="none"/>`}else if(i==="diamond")c.x+=n*.25,c.y+=o*.25,c.width-=n*.5,c.height-=o*.5,d.top={x:s,y:t},d.right={x:e+n,y:a},d.bottom={x:s,y:t+o},d.left={x:e,y:a},l=`<polygon class="docdiagram-node-body" points="${s},${t} ${e+n},${a} ${s},${t+o} ${e},${a}"/>`;else if(i==="rhombus"){let u=Math.min(n*.2,o*.6);c.x+=u,c.width-=u*2,d.left.x=e+u/2,d.right.x=e+n-u/2,l=`<polygon class="docdiagram-node-body" points="${e+u},${t} ${e+n},${t} ${e+n-u},${t+o} ${e},${t+o}"/>`}else if(i==="flattened-hexagon"){let u=Math.min(n*.18,o*.7);c.x+=u,c.width-=u*2,l=`<polygon class="docdiagram-node-body" points="${e+u},${t} ${e+n-u},${t} ${e+n},${a} ${e+n-u},${t+o} ${e+u},${t+o} ${e},${a}"/>`}else if(i==="chevron"){let u=Math.min(n*.16,o*.45);c.x+=u*1.175,c.width-=u*1.35,d.left.x=e+u,l=`<polygon class="docdiagram-node-body" points="${e},${t} ${e+n-u},${t} ${e+n},${a} ${e+n-u},${t+o} ${e},${t+o} ${e+u},${a}"/>`}else if(i==="right-chevron"){let u=Math.min(n*.16,o*.45);c.width-=u,l=`<polygon class="docdiagram-node-body" points="${e},${t} ${e+n-u},${t} ${e+n},${a} ${e+n-u},${t+o} ${e},${t+o}"/>`}else if(i==="document"){let u=Math.max(12,Math.min(26,Math.min(n,o)*.18));c.width-=u*.45,c.y+=2,c.height-=2,l=`<path class="docdiagram-node-body" d="M ${e} ${t} H ${e+n-u} L ${e+n} ${t+u} V ${t+o} H ${e} Z M ${e+n-u} ${t} V ${t+u} H ${e+n}"/>`}else i==="text"?l=`<rect class="docdiagram-node-body" x="${e}" y="${t}" width="${n}" height="${o}"/>`:l=`<rect class="docdiagram-node-body" x="${e}" y="${t}" width="${n}" height="${o}" rx="12"/>`;return{bodyMarkup:l,textBounds:c,anchors:d}}function rt(r,e,t,n,o){let i,s;typeof r=="number"?(i={x:r,y:e,width:t||0,height:n||0},s=o):(i=r,s=e);let a=20,c=15,d=Sn(de(s.label),i.width,16,!0),l=s.subtitle?Sn(de(s.subtitle),i.width,13):[],u=l.length?6:0,g=d.length*a,h=l.length*c,b=g+u+h,m=s.textHAlign||"center",p=m==="left"?i.x:m==="right"?i.x+i.width:i.x+i.width/2,S=m==="left"?"start":m==="right"?"end":"middle",N=i.y+i.height/2,x=s.textVAlign==="top"?i.y:N-b/2;return{centerX:p,textAnchor:S,labelLines:d,subtitleLines:l,labelLineHeight:a,subtitleLineHeight:c,labelStartY:x+a*.72,subtitleStartY:x+g+u+c*.72}}function Pt(r,e,t){return r.bodyMarkup.replace("/>",` fill="${v(e.fill||"")}" stroke="${v(e.stroke||"")}" stroke-width="${t}"/>`).replace('class="docdiagram-node-detail"',`class="docdiagram-node-detail" stroke="${v(e.stroke||"")}" stroke-width="${t}"`)}function vn(r){return{top:{x:0,y:-1},right:{x:1,y:0},bottom:{x:0,y:1},left:{x:-1,y:0}}[r]}function K(r){return`${r.x} ${r.y}`}function kn(r){let e=r.slice(1).map((o,i)=>{let s=r[i];return{start:s,end:o,length:Math.hypot(o.x-s.x,o.y-s.y)}}),n=e.reduce((o,i)=>o+i.length,0)/2;for(let o of e){if(n<=o.length||o===e[e.length-1]){let i=o.length?n/o.length:0;return{x:o.start.x+(o.end.x-o.start.x)*i,y:o.start.y+(o.end.y-o.start.y)*i}}n-=o.length}return r[0]}function yr(r,e){return Math.min(Math.max(Math.abs(e.x-r.x),Math.abs(e.y-r.y),80)/2,140)}var Xo={along:r=>r.x,cross:r=>r.y,point:(r,e)=>({x:r,y:e})},Ko={along:r=>r.y,cross:r=>r.x,point:(r,e)=>({x:e,y:r})},tt=24;function Zo(r,e,t,n,o,i){let s=o.along(r),a=o.cross(r),c=o.along(e),d=o.cross(e),l=o.along(t),u=o.cross(n);if(Math.sign(c-s)===l&&Math.sign(a-d)===u)return[r,o.point(c,a),e];let g=Math.sign(c-s)===l?(s+c)/2:s+l*i,h=Math.sign(a-d)===u?(a+d)/2:d+u*i;return[r,o.point(g,a),o.point(g,h),o.point(c,h),e]}function Jo(r,e,t,n,o,i){let s=o.along(r),a=o.cross(r),c=o.along(e),d=o.cross(e),l=o.along(t),u=o.along(n),g=Math.sign(c-s)===l;if(l===-u&&g)return a===d?[r,e]:[r,o.point((s+c)/2,a),o.point((s+c)/2,d),e];if(l===u&&Math.abs(a-d)>=tt){let S=l>0?Math.max(s,c)+tt:Math.min(s,c)-tt;return[r,o.point(S,a),o.point(S,d),e]}let h=i*2,b=s+l*h,m=c+u*h;if(b===m)return[r,o.point(b,a),o.point(b,d),e];let p=Math.min(a,d)-h;return[r,o.point(b,a),o.point(b,p),o.point(m,p),o.point(m,d),e]}function Qo(r,e,t,n){if(r.x===e.x&&r.y===e.y)return[r,e];let o=Math.max(Math.abs(e.x-r.x),Math.abs(e.y-r.y)),i=Math.max(o/4,tt),s=t.x!==0,a=s?Xo:Ko;return s===(n.x!==0)?Jo(r,e,t,n,a,i):Zo(r,e,t,n,a,i)}function ei(r,e,t){for(let[n,o]of[[r,e],[r,t],[t,e]]){let i=Math.hypot(o.x-n.x,o.y-n.y);if(i>0)return{x:(o.x-n.x)/i,y:(o.y-n.y)/i}}return{x:1,y:0}}function Pe(r,e,t,n,o="orthogonal",i,s){let a=vn(t),c=vn(n),d=a.x!==0,l=c.x!==0;if(!i&&s?.length&&o!=="orthogonal"&&Tt([r,e],s))for(let m of[20,60,120]){let p=fr(r,e,a,c,s,tt,m),S=p&&En(p,r,e);if(!S)continue;let N=Pe(r,e,t,n,o,S);if(!Tt(Sr(N.path),s)){i=S;break}}let u,g,h,b;if(i&&o==="straight")u=`M ${K(r)} L ${K(i)} L ${K(e)}`,g=i,h={x:i.x-r.x,y:i.y-r.y},b={x:e.x-i.x,y:e.y-i.y};else if(i&&o==="curved"){let m=yr(r,i),p=yr(i,e),S=ei(r,e,i),N={x:r.x+a.x*m,y:r.y+a.y*m},x={x:i.x-S.x*m,y:i.y-S.y*m},y={x:i.x+S.x*p,y:i.y+S.y*p},F={x:e.x+c.x*p,y:e.y+c.y*p};u=[`M ${K(r)}`,`C ${K(N)} ${K(x)} ${K(i)}`,`C ${K(y)} ${K(F)} ${K(e)}`].join(" "),g=i,h={x:N.x-r.x,y:N.y-r.y},b={x:e.x-F.x,y:e.y-F.y}}else if(i){let p=(i.x-r.x)*a.x+(i.y-r.y)*a.y<=0,S=(i.x-e.x)*c.x+(i.y-e.y)*c.y<=0,N={x:r.x+a.x*24,y:r.y+a.y*24},x={x:e.x+c.x*24,y:e.y+c.y*24},y=p?[r,N,d?{x:N.x,y:i.y}:{x:i.x,y:N.y},i]:[r,d?{x:i.x,y:r.y}:{x:r.x,y:i.y},i],F=S?[l?{x:x.x,y:i.y}:{x:i.x,y:x.y},x,e]:[l?{x:i.x,y:e.y}:{x:e.x,y:i.y},e],w=[...y,...F].filter((k,C,q)=>C===0||k.x!==q[C-1].x||k.y!==q[C-1].y);u=`M ${K(w[0])}${w.slice(1).map(k=>` L ${K(k)}`).join("")}`,g=kn(w),h={x:w[1].x-w[0].x,y:w[1].y-w[0].y};let $=w.slice(-2);b={x:$[1].x-$[0].x,y:$[1].y-$[0].y}}else if(o==="straight")u=`M ${K(r)} L ${K(e)}`,g={x:(r.x+e.x)/2,y:(r.y+e.y)/2},h={x:e.x-r.x,y:e.y-r.y},b=h;else if(o==="curved"){let m=yr(r,e),p={x:r.x+a.x*m,y:r.y+a.y*m},S={x:e.x+c.x*m,y:e.y+c.y*m};u=`M ${K(r)} C ${K(p)} ${K(S)} ${K(e)}`,g={x:(r.x+3*p.x+3*S.x+e.x)/8,y:(r.y+3*p.y+3*S.y+e.y)/8},h={x:p.x-r.x,y:p.y-r.y},b={x:e.x-S.x,y:e.y-S.y}}else{let m=Qo(r,e,a,c),p=m.filter((N,x)=>x===0||N.x!==m[x-1].x||N.y!==m[x-1].y);if(p.length===1&&(p=[r,e]),s?.length&&Tt(p,s)){let N=fr(r,e,a,c,s,tt);N&&(p=br(N))}u=`M ${K(p[0])}${p.slice(1).map(N=>` L ${K(N)}`).join("")}`,g=kn(p),h={x:p[1].x-p[0].x,y:p[1].y-p[0].y};let S=p.slice(-2);b={x:S[1].x-S[0].x,y:S[1].y-S[0].y}}return{path:u,midpoint:g,startTangent:h,endTangent:b,hitPath:u}}function xr(r,e){let t=e?13:15;return{x:r.x-t/2,y:r.y-t/2,size:t,radius:e?2:t/2,transform:e?`rotate(45 ${r.x} ${r.y})`:""}}function $n(r,e,t,n){let o=xr(t,n),i=n?"Anchored edge waypoint":"Edge waypoint";return`<rect class="docdiagram-edge-waypoint" data-diagram-index="${r}" data-edge-index="${e}" data-anchored="${n}" x="${o.x}" y="${o.y}" width="${o.size}" height="${o.size}" rx="${o.radius}"${o.transform?` transform="${o.transform}"`:""} aria-label="${i}"/>`}function ti(r){let e=Math.max(1,Number(r)||2),t=6+e*2.5,n=Math.max(t*.38,e/2+1);return{size:t,circleRadius:n}}function ut(r,e,t,n,o){let i=v(n),{size:s,circleRadius:a}=ti(o),c=s/2;return e==="arrow"?`<marker id="${r}" markerWidth="${s}" markerHeight="${s}" refX="${s}" refY="${c}" markerUnits="userSpaceOnUse" orient="${t==="start"?"auto-start-reverse":"auto"}"><path fill="${i}" stroke="${i}" d="M 0 0 L ${s} ${c} L 0 ${s} z"/></marker>`:e==="circle"?`<marker id="${r}" markerWidth="${s}" markerHeight="${s}" refX="${c}" refY="${c}" markerUnits="userSpaceOnUse"><circle cx="${c}" cy="${c}" r="${a}" fill="${i}" stroke="${i}"/></marker>`:""}function Rt(r,e){let t={x:r.x+r.width/2,y:r.y+r.height/2},n=e.x-t.x,o=e.y-t.y,i=Math.hypot(n,o);if(!Number.isFinite(i)||i<1)return null;let s=Math.max(6,Math.min(Math.min(r.width,r.height)*.28,i*.6,44)),a={x:-o/i*s,y:n/i*s},c=[{x:t.x+a.x,y:t.y+a.y},{x:e.x,y:e.y},{x:t.x-a.x,y:t.y-a.y}],d=[...c.map(h=>h.x),r.x,r.x+r.width],l=[...c.map(h=>h.y),r.y,r.y+r.height],u=Math.min(...d),g=Math.min(...l);return{points:c,polygonPoints:c.map(h=>`${h.x},${h.y}`).join(" "),bounds:{x:u,y:g,width:Math.max(...d)-u,height:Math.max(...l)-g}}}function ri(r,e,t){let n=r.indexOf('<path class="docdiagram-node-detail"');return(n===-1?r:r.slice(0,n)).replace('class="docdiagram-node-body"',`class="${t}"`).replace("/>",` fill="${e}" stroke="none"/>`)}function wr(r){return ri(r,"#000000","docdiagram-node-callout-mask-body")}function Er(r,e){let t=e*2+8;return{x:r.bounds.x-t,y:r.bounds.y-t,width:r.bounds.width+t*2,height:r.bounds.height+t*2}}function Fn(r,e,t,n,o){let i=!!t.fill&&t.fill!=="none",s=!!t.stroke&&t.stroke!=="none",a=i?t.fill:s?"none":t.text||"none",c=Er(r,n),d=[`<mask id="${o}" maskUnits="userSpaceOnUse" x="${c.x}" y="${c.y}" width="${c.width}" height="${c.height}">`,`<rect class="docdiagram-node-callout-mask-region" x="${c.x}" y="${c.y}" width="${c.width}" height="${c.height}" fill="#ffffff"/>`,wr(e),"</mask>"].join(""),l=i?"":` mask="url(#${o})"`;return[d,a==="none"?"":`<polygon class="docdiagram-node-callout" points="${r.polygonPoints}" fill="${v(a||"")}" stroke="none"${l}/>`,s?`<polygon class="docdiagram-node-callout-outline" points="${r.polygonPoints}" fill="none" stroke="${v(t.stroke||"")}" stroke-width="${n}" stroke-linejoin="round" mask="url(#${o})"/>`:""].join("")}function Sr(r,e=12){let t=[],n=/-?\d+(?:\.\d+)?/g,o={x:0,y:0};for(let[,i,s]of r.matchAll(/([MLC])\s*([^MLC]*)/g)){let a=(s.match(n)||[]).map(Number);if(i==="C"){let[c,d,l,u,g,h]=a;for(let b=1;b<=e;b+=1){let m=b/e,p=1-m;t.push({x:p**3*o.x+3*p**2*m*c+3*p*m**2*l+m**3*g,y:p**3*o.y+3*p**2*m*d+3*p*m**2*u+m**3*h})}o={x:g,y:h};continue}for(let c=0;c+1<a.length;c+=2)o={x:a[c],y:a[c+1]},t.push(o)}return t}function ni(r,e){return r||`diagram ${e+1}`}function oi(r,e){let t=Math.min(r.x+r.width,e.x+e.width)-Math.max(r.x,e.x),n=Math.min(r.y+r.height,e.y+e.height)-Math.max(r.y,e.y);return t>0&&n>0?{width:t,height:n}:null}function ii(r,e){let t=r.entries;for(let n=0;n<t.length;n+=1)for(let o=n+1;o<t.length;o+=1){let i=t[n],s=t[o];if(r.isRelated(i.node,s.node))continue;let a=oi(i.bounds,s.bounds);a&&e("node-overlap",`Nodes "${i.node.id}" and "${s.node.id}" overlap by ${Math.round(a.width)} by ${Math.round(a.height)} units.`)}}function ai(r,e){for(let{node:t}of r.entries){let n=Number(t.size?.width)||O.width,o=Number(t.size?.height)||O.height,{textBounds:i}=fe(t,0,0,n,o),s=rt(i,t),a=24;if(t.shape==="text"){let d=de(t.label).find(l=>Lt(l.replace(/^#{1,2}\s+/,""),/^#{1,2}\s/.test(l)?24:16)>i.width+a);d!==void 0&&e("label-overflow",`Node "${t.id}" has a line wider than its shape: "${d.trim()}".`)}let c=s.labelLines.length*s.labelLineHeight+(s.subtitleLines.length?6+s.subtitleLines.length*s.subtitleLineHeight:0);c>i.height+a&&e("label-overflow",`Node "${t.id}" needs ${Math.ceil(c)} units of text height but its shape offers ${Math.floor(i.height+a)}.`)}}function si(r,e,t){for(let n of r.edges||[]){let o=e.getById(n.source),i=e.getById(n.target);for(let[h,b,m]of[["source",n.source,o],["target",n.target,i]])m||t("unknown-edge-endpoint",`Edge "${n.source}" -> "${n.target}" names a ${h} node "${b}" that does not exist, so it is not drawn.`,"error");if(!o||!i)continue;let s=o.bounds,a=i.bounds,c=fe(o.node,s.x,s.y,s.width,s.height).anchors[n.sourceAnchor||"right"],d=fe(i.node,a.x,a.y,a.width,a.height).anchors[n.targetAnchor||"left"],l=e.entries.filter(({node:h})=>!e.isRelated(h,o.node)&&!e.isRelated(h,i.node)),{path:u}=Pe(c,d,n.sourceAnchor||"right",n.targetAnchor||"left",n.route||"orthogonal",n.waypoint,n.waypoint?void 0:l.map(h=>h.bounds)),g=Sr(u);for(let h of l)g.slice(1).some((m,p)=>lt(g[p],m,h.bounds))&&t("edge-crosses-node",`Edge "${n.source}" -> "${n.target}" passes through unrelated node "${h.node.id}".`)}}function vr(r){let e=[];try{At(r)}catch(n){return e.push({severity:"error",rule:"schema",message:n.message}),{messages:e,errorCount:1,warningCount:0}}let t=dt(r).colourScheme;return Ct(r).forEach(({id:n,source:o},i)=>{let s=$e(o,t);if(s.type!=="flowchart")return;let a=ni(n,i),c=(l,u,g="warning")=>{e.push({severity:g,rule:l,message:u,diagram:a})},d=new X(s);si(s,d,c),ii(d,c),ai(d,c)}),{messages:e,errorCount:e.filter(n=>n.severity==="error").length,warningCount:e.filter(n=>n.severity==="warning").length}}function Dn(r){return r.messages.map(e=>[e.severity,e.diagram?`[${e.diagram}]`:null,e.message,`(${e.rule})`].filter(Boolean).join(" ")).join(`
`)}var ci=[{type:"comment",pattern:"\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/"},{type:"string",pattern:"`(?:\\\\.|[^`\\\\])*`|\"(?:\\\\.|[^\"\\\\\\n])*\"|'(?:\\\\.|[^'\\\\\\n])*'"}],ze={type:"number",pattern:"\\b(?:0[xXbBoO][\\da-fA-F_]+|\\d[\\d_]*(?:\\.[\\d_]+)?(?:[eE][+-]?\\d+)?)\\b"};function Fe(...r){return`\\b(?:${r.join("|")})\\b`}var di=Fe("async","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","export","extends","finally","for","from","function","get","if","implements","import","in","instanceof","interface","let","new","of","private","protected","public","readonly","return","satisfies","set","static","super","switch","this","throw","try","type","typeof","var","void","while","yield"),An={clike:[...ci,{type:"keyword",pattern:di},{type:"literal",pattern:Fe("true","false","null","undefined","NaN","Infinity")},{type:"type",pattern:Fe("any","bigint","boolean","never","number","object","string","symbol","unknown")},ze],python:[{type:"comment",pattern:"#[^\\n]*"},{type:"string",pattern:`(?:[rRbBfFuU]{0,2})(?:"""[\\s\\S]*?"""|'''[\\s\\S]*?'''|"(?:\\\\.|[^"\\\\\\n])*"|'(?:\\\\.|[^'\\\\\\n])*')`},{type:"keyword",pattern:Fe("and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield")},{type:"literal",pattern:Fe("True","False","None","self","cls")},ze],ruby:[{type:"comment",pattern:"#[^\\n]*"},{type:"string",pattern:`"(?:\\\\.|[^"\\\\\\n])*"|'(?:\\\\.|[^'\\\\\\n])*'|:[a-zA-Z_]\\w*[?!]?`},{type:"keyword",pattern:Fe("alias","begin","break","case","class","def","do","else","elsif","end","ensure","for","if","in","module","next","raise","require","rescue","return","then","unless","until","when","while","yield")},{type:"literal",pattern:Fe("true","false","nil","self")},ze],json:[{type:"attribute",pattern:'"(?:\\\\.|[^"\\\\])*"(?=\\s*:)'},{type:"string",pattern:'"(?:\\\\.|[^"\\\\])*"'},{type:"literal",pattern:Fe("true","false","null")},ze],yaml:[{type:"comment",pattern:"#[^\\n]*"},{type:"attribute",pattern:"^\\s*(?:-\\s+)?[\\w.-]+(?=\\s*:(?:\\s|$))"},{type:"string",pattern:`"(?:\\\\.|[^"\\\\\\n])*"|'(?:''|[^'\\n])*'`},{type:"meta",pattern:"^---\\s*$|^\\.\\.\\.\\s*$|(?:^|\\s)[|>][+-]?\\s*$|(?:^|\\s)[&*][\\w-]+"},{type:"literal",pattern:Fe("true","false","null","yes","no","on","off","True","False","Null")},ze],sql:[{type:"comment",pattern:"--[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/"},{type:"string",pattern:"'(?:''|[^'\\n])*'"},{type:"keyword",pattern:`\\b(?:${["ADD","ALL","ALTER","AND","AS","ASC","BEGIN","BETWEEN","BY","CASE","COMMIT","CREATE","CROSS","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","EXISTS","FROM","FULL","GROUP","HAVING","IN","INDEX","INNER","INSERT","INTO","IS","JOIN","LEFT","LIKE","LIMIT","NOT","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RETURNING","RIGHT","ROLLBACK","SELECT","SET","TABLE","THEN","TRANSACTION","UNION","UNIQUE","UPDATE","VALUES","VIEW","WHEN","WHERE","WITH"].join("|")})\\b`},{type:"literal",pattern:"\\b(?:NULL|TRUE|FALSE)\\b"},ze],shell:[{type:"comment",pattern:"#[^\\n]*"},{type:"string",pattern:`"(?:\\\\.|[^"\\\\])*"|'[^']*'`},{type:"meta",pattern:"\\$(?:\\{[^}]*\\}|[\\w@*#?$!-]+)"},{type:"keyword",pattern:Fe("case","cd","do","done","echo","elif","else","esac","exit","export","fi","for","function","if","in","local","read","return","set","shift","source","then","unset","until","while")},{type:"attribute",pattern:"(?:^|\\s)--?[\\w-]+"},ze],markup:[{type:"comment",pattern:"<!--[\\s\\S]*?-->"},{type:"meta",pattern:"<!(?:DOCTYPE|doctype)[^>]*>|<\\?[\\s\\S]*?\\?>"},{type:"tag",pattern:"<\\/?[a-zA-Z][\\w:-]*"},{type:"string",pattern:`"[^"]*"|'[^']*'`},{type:"attribute",pattern:"\\b[a-zA-Z_:][\\w:.-]*(?==)"},{type:"tag",pattern:"\\/?>"}],css:[{type:"comment",pattern:"\\/\\*[\\s\\S]*?\\*\\/"},{type:"string",pattern:`"[^"\\n]*"|'[^'\\n]*'`},{type:"meta",pattern:"@[\\w-]+"},{type:"attribute",pattern:"[a-zA-Z-]+(?=\\s*:)"},{type:"number",pattern:"#[\\da-fA-F]{3,8}\\b|\\b\\d[\\d.]*(?:px|rem|em|%|vh|vw|s|ms|deg|fr)?\\b"}],diff:[{type:"meta",pattern:"^(?:diff|index|@@|\\+\\+\\+|---)[^\\n]*"},{type:"inserted",pattern:"^\\+[^\\n]*"},{type:"deleted",pattern:"^-[^\\n]*"}],ini:[{type:"comment",pattern:"[#;][^\\n]*"},{type:"meta",pattern:"^\\s*\\[[^\\]\\n]*\\]"},{type:"attribute",pattern:"^\\s*[\\w.-]+(?=\\s*=)"},{type:"string",pattern:`"[^"\\n]*"|'[^'\\n]*'`},{type:"literal",pattern:Fe("true","false")},ze]},li={javascript:"clike",js:"clike",jsx:"clike",mjs:"clike",cjs:"clike",typescript:"clike",ts:"clike",tsx:"clike",java:"clike",kotlin:"clike",kt:"clike",swift:"clike",scala:"clike",go:"clike",golang:"clike",rust:"clike",rs:"clike",c:"clike",cpp:"clike","c++":"clike",cs:"clike",csharp:"clike",php:"clike",dart:"clike",python:"python",py:"python",ruby:"ruby",rb:"ruby",json:"json",jsonc:"json",yaml:"yaml",yml:"yaml",sql:"sql",postgresql:"sql",mysql:"sql",bash:"shell",sh:"shell",shell:"shell",zsh:"shell",console:"shell",terminal:"shell",html:"markup",xml:"markup",svg:"markup",vue:"markup",css:"css",scss:"css",less:"css",diff:"diff",patch:"diff",ini:"ini",toml:"ini",conf:"ini"},Nn=new Map;function ui(r){let e=Nn.get(r);if(e)return e;let t=new RegExp(An[r].map(n=>`(${n.pattern})`).join("|"),"gm");return Nn.set(r,t),t}function mi(r){let e=String(r??"").trim().toLowerCase();return li[e]||null}function Mn(r,e){let t=mi(e);if(!t)return v(r);let n=An[t],o=ui(t);o.lastIndex=0;let i=[],s=0,a;for(;a=o.exec(r);){if(!a[0]){o.lastIndex+=1;continue}a.index>s&&i.push(v(r.slice(s,a.index)));let c=a.findIndex((g,h)=>h>0&&g!==void 0)-1,d=n[c]?.type,l=a[0].match(/^\s*/)[0],u=a[0].slice(l.length);i.push(v(l)),i.push(d&&u?`<span class="docdiagram-token-${d}">${v(u)}</span>`:v(u)),s=a.index+a[0].length}return i.push(v(r.slice(s))),i.join("")}var Bt={section:{attributes:["title","palette","fill","stroke","text"]},panel:{attributes:["title","palette","fill","stroke","text"]},callout:{attributes:["kind","title","palette","fill","stroke","text"]},grid:{attributes:["columns"]},stack:{attributes:[]},diagram:{attributes:["id"],void:!0},toc:{attributes:["depth","diagrams"],void:!0}},gi=Object.keys(Bt);function $r(r){return!!Bt[r].void}var hi=/\u0001ref:([^\u0001]*)\u0001/g,pi=/\u0001toc:([^\u0001]*)\u0001/g;function fi(r){let e=r.replace(/\\#/g,""),t=e.indexOf("#"),n=o=>o.replace(/\u0002/g,"#");return t===-1?{hasPlaceholder:!1,before:n(e),after:"",text:n(e)}:{hasPlaceholder:!0,before:n(e.slice(0,t)),after:n(e.slice(t+1)),text:n(e.slice(0,t)+e.slice(t+1))}}function bi(r){return r.replace(/!\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/(\*\*|__|~~|\*|_)/g,"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/[\s-]+/g,"-")||"section"}function yi(r,e){let t=bi(r),n=e.headingOccurrences||(e.headingOccurrences=new Map),o=e.usedHeadingIds||(e.usedHeadingIds=new Set),i=(n.get(t)||0)+1,s=i===1?t:`${t}-${i}`;for(;o.has(s);)i+=1,s=`${t}-${i}`;return n.set(t,i),o.add(s),s}function Fr(r){let e=[],t="",n=!1,o=r.trim().replace(/^\||\|$/g,"");for(let i of o)n?(t+=i,n=!1):i==="\\"?n=!0:i==="|"?(e.push(t.trim()),t=""):t+=i;return e.push(t.trim()),e}function Cn(r){let e=Fr(r);return!e.length||!e.every(t=>/^:?-{3,}:?$/.test(t))?null:e.map(t=>t.startsWith(":")&&t.endsWith(":")?"center":t.startsWith(":")?"left":t.endsWith(":")?"right":"")}function Ge(r){return r.match(/^(\s*)([-+*]|\d+[.)])\s+(.+)$/)}function mt(r){let e=r.match(new RegExp(`^:::(${gi.join("|")})(?:\\s+\\{(.*)\\})?\\s*$`));if(!e)return null;let t={},n=e[2];if(n!==void 0){let o=0,i=/\s*([a-z][\w-]*)=(?:"([^"]*)"|([^\s}]+))/gi,s;for(;s=i.exec(n);){if(s.index!==o||t[s[1]]!==void 0)return null;t[s[1]]=s[2]??s[3],o=i.lastIndex}if(n.slice(o).trim())return null}return{name:e[1],attributes:t}}function xi(r){let e=mt(r);if(!e||e.name!=="diagram")return null;let t=Object.keys(e.attributes),n=e.attributes.id;return t.length===1&&n?{id:n}:null}function kr(r){let e=r.match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m);return e?.[1]??e?.[2]??null}function wi(r){let e=r.match(/^caption:[ \t]*(\S.*?)\s*$/m),t=e?qe(e[1]):null;return typeof t=="string"&&t?t:null}function Ei(r){return r.replace(/^(?: {0,3}> ?)+/,"")}function Ln(r){return/^:::(?:\s+.*)?$/.test(r)}function Si(r,e,t){let n=1,o=null;for(let i=e+1;i<t;i+=1){let s=r[i];if(o){Oe(s,o)&&(o=null);continue}let a=Le(s);if(a){o=a.marker;continue}let c=mt(s);if(c)$r(c.name)||(n+=1);else if(Ln(s)&&(n-=1,!n))return i}return-1}function vi(r){return/^#[\da-f]{3,8}$/i.test(r)}function ki(r,e="classic",t="light"){let n=r.palette!==void 0;if(n&&!Ae.includes(r.palette))return null;for(let a of["fill","stroke","text"])if(r[a]!==void 0&&!vi(r[a]))return null;let o=n?he(e,t,r.palette):null,i=Object.fromEntries(["fill","stroke","text"].filter(a=>r[a]!==void 0).map(a=>[a,r[a]])),s=ke(o||{},i);return Object.entries(s).filter(([,a])=>a!==void 0).map(([a,c])=>`--docdiagram-component-${a}:${c}`).join(";")}function Tn(r,e=!1){let t=String(r).trim();if(t.startsWith("//")||t.startsWith("\\"))return!1;if(!t||t.startsWith("#")||t.startsWith("/")||t.startsWith("./")||t.startsWith("../")||t.startsWith("?")||e&&/^data:image\/(?:gif|jpeg|png|webp);base64,/i.test(t))return!0;let n=t.match(/^([a-z][a-z\d+.-]*):/i);return!n||["http","https","mailto"].includes(n[1].toLowerCase())}function be(r){let e=[],t=String(r).replace(/`([^`]+)`/g,(n,o)=>{let i=`\0${e.length}\0`;return e.push(`<code>${v(o)}</code>`),i});return t=t.replace(/\{ref=(?:"([^"}]+)"|([^\s}]+))\}/g,(n,o,i)=>`ref:${o??i}`),t=v(t),t=t.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(n,o,i)=>{let s=i.replace(/&amp;/g,"&");return Tn(s,!0)?`<img src="${v(s)}" alt="${o}">`:`![${o}](${v(i)})`}),t=t.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(n,o,i)=>{let s=i.replace(/&amp;/g,"&");return Tn(s)?`<a href="${v(s)}">${o}</a>`:`[${o}](${v(i)})`}),t=t.replace(/(\*\*|__)(?=\S)([\s\S]*?\S)\1/g,"<strong>$2</strong>").replace(/~~(?=\S)([\s\S]*?\S)~~/g,"<del>$1</del>").replace(/(?<!\*)\*(?=\S)([\s\S]*?\S)\*(?!\*)/g,"<em>$1</em>").replace(/(?<!_)_(?=\S)([\s\S]*?\S)_(?!_)/g,"<em>$1</em>"),t.replace(/\u0000(\d+)\u0000/g,(n,o)=>e[Number(o)])}function Dr(r,e={diagramIndex:0},t){let n=r.replace(/\r\n/g,`
`).split(`
`),o=t?.renderDiagram??((x,y)=>{throw new Error("renderDiagram callback is required for diagram blocks.")}),i=!!t?.diagramReferenceRegistry,s=t?.documentColorScheme||"classic",a=t?.documentTheme||"light",c=t?.diagramReferenceRegistry||(()=>{let x=new Map,y=new Set,F=new Map,w=new Set,$=n.map(Ei);for(let C=0;C<$.length;C+=1){let q=Le($[C]);if(!q)continue;let M=et($,C+1,q.marker);if(M===-1)break;if(q.info==="diagram"){let L=$.slice(C+1,M).join(`
`),A=kr(L);A&&(w.add(A),x.has(A)?y.add(A):x.set(A,{id:A,source:L}))}C=M}let k=null;for(let C of $){if(k){Oe(C,k)&&(k=null);continue}let q=Le(C);if(q){k=q.marker;continue}let M=xi(C);M&&F.set(M.id,(F.get(M.id)||0)+1)}return{definitions:x,duplicateDefinitionIds:y,referenceCounts:F,diagramIds:w}})(),{definitions:d,duplicateDefinitionIds:l,referenceCounts:u}=c;if(e.figures||(e.figures=new Map),e.contents||(e.contents=[]),!i){let x=e.usedHeadingIds||(e.usedHeadingIds=new Set);for(let y of c.diagramIds)x.add(y)}function g(x){let y=kr(x),F=wi(x),w=F?fi(F):null,$=w?.hasPlaceholder?e.figureNumber=(e.figureNumber||0)+1:null,k=w?$===null?w.text:`${w.before}${$}${w.after}`:null;w&&y&&(e.figures.set(y,{id:y,number:$,text:k}),e.contents.push({kind:"figure",level:0,id:y,text:be(k)}));let C=o(x,e.diagramIndex,{id:y,caption:k});return e.diagramIndex+=1,C}function h(x){let y=n[x]||"";return!y.trim()||/^```/.test(y)||/^(#{1,6})\s+/.test(y)||/^ {0,3}&gt;|^ {0,3}>/.test(y)||/^ {0,3}(?:[-*_]\s*){3,}$/.test(y)||/^:::/.test(y)||!!Ge(y)||x+1<n.length&&!!Cn(n[x+1])}function b(x,y){let F=Ge(n[x]),w=/^\d/.test(F[2]),$=[],k=x,C=w?Number.parseInt(F[2],10):null;for(;k<n.length;){let A=Ge(n[k]);if(!A||A[1].length!==y||/^\d/.test(A[2])!==w)break;let P={content:[A[3]],children:[]};for(k+=1;k<n.length;){let I=Ge(n[k]);if(I&&I[1].length>y){let D=b(k,I[1].length);P.children.push(D.html),k=D.index;continue}if(!n[k].trim()){k+=1;let D=k<n.length?Ge(n[k]):null;if(k>=n.length||!D||D[1].length<=y)break;continue}if(/^\s+/.test(n[k])&&!Ge(n[k])){P.content.push(n[k].trim()),k+=1;continue}break}$.push(P)}let q=w?"ol":"ul",M=w&&C!==1?` start="${C}"`:"",L=$.map(A=>{let P=!w&&A.content.length===1&&A.content[0].match(/^\[([ xX])\]\s+(.*)$/),I=P?`<input type="checkbox" disabled${P[1].toLowerCase()==="x"?" checked":""}> ${be(P[2])}`:be(A.content.join(" "));return`<li${P?' class="docdiagram-task-list-item"':""}>${I}${A.children.join("")}</li>`}).join("");return{html:`<${q}${M}>${L}</${q}>`,index:k}}function m(x){let{name:y,attributes:F}=x;if(Object.keys(F).some($=>!Bt[y].attributes.includes($)))return null;if(y==="diagram"){let $=F.id;if(!$)return null;let k=d.get($);return k?l.has($)?`<section class="docdiagram-error"><strong>Diagram "${v($)}" has multiple definitions.</strong></section>`:(u.get($)||0)>1?`<section class="docdiagram-error"><strong>Diagram "${v($)}" is referenced more than once.</strong></section>`:g(k.source):`<section class="docdiagram-error"><strong>Diagram "${v($)}" could not be found.</strong></section>`}let w=F.depth===void 0?3:Number(F.depth);return!Number.isInteger(w)||w<1||w>6||F.diagrams!==void 0&&F.diagrams!=="true"&&F.diagrams!=="false"?null:`toc:${w}:${F.diagrams==="true"}`}function p(x,y){let F=mt(n[x]);if(!F||$r(F.name))return null;let w=Si(n,x,y);if(w===-1)return null;let{name:$,attributes:k}=F;if(Object.keys(k).some(A=>!Bt[$].attributes.includes(A)))return null;if($==="grid"){let A=jr[k.columns];if(!A)return null;let P=[],I=x+1;for(;I<w;){if(!n[I].trim()){I+=1;continue}let D=mt(n[I]);if(!D||!["panel","callout","stack"].includes(D.name))return null;let R=p(I,w);if(!R)return null;P.push(`<div class="docdiagram-grid-item">${R.html}</div>`),I=R.next}return{html:`<div class="docdiagram-grid" style="--docdiagram-grid-columns:${A}">${P.join("")}</div>`,next:w+1}}if($==="stack")return Object.keys(k).length?null:{html:`<div class="docdiagram-stack">${S(x+1,w)}</div>`,next:w+1};let C=ki(k,s,a);if(C===null||$==="callout"&&k.kind!==void 0&&!Hr.includes(k.kind))return null;let q=k.title?`<div class="docdiagram-component-title">${be(k.title)}</div>`:"",M=S(x+1,w),L=`docdiagram-component${$==="callout"?"":` docdiagram-${$}`}${C?" docdiagram-component-styled":""}`;if($==="callout"){let A=k.kind||"info";return{html:`<aside class="${L} docdiagram-callout docdiagram-callout-${A}"${C?` style="${C}"`:""} aria-label="${v(k.title||A)} callout"><div class="docdiagram-callout-kind">${v(A)}</div>${q}${M}</aside>`,next:w+1}}return{html:`<section class="${L}"${C?` style="${C}"`:""}>${q}${M}</section>`,next:w+1}}function S(x=0,y=n.length){let F=[],w=x;for(;w<y;){let $=n[w];if(!$.trim()){w+=1;continue}if(/^:::/.test($)){let A=mt($);if(A&&$r(A.name)){let I=m(A);F.push(I??`<pre class="docdiagram-literal-source"><code>${v($)}</code></pre>`),w+=1,I!==null&&w<y&&Ln(n[w])&&(w+=1);continue}let P=p(w,y);P?(F.push(P.html),w=P.next):(F.push(`<pre class="docdiagram-literal-source"><code>${v($)}</code></pre>`),w+=1);continue}let k=Le($);if(k){let A=n.slice(w+1,y).findIndex(D=>Oe(D,k.marker));if(A===-1){F.push('<section class="docdiagram-error"><strong>Unclosed code block.</strong></section>');break}let P=w+A+1,I=n.slice(w+1,P).join(`
`);if(k.info==="diagram"){let D=kr(I);D&&l.has(D)?F.push(`<section class="docdiagram-error"><strong>Diagram "${v(D)}" has multiple definitions.</strong></section>`):(!D||!u.has(D))&&F.push(g(I))}else{let D=k.info?` class="language-${v(k.info)}"`:"";F.push(`<pre><code${D}>${Mn(I,k.info)}</code></pre>`)}w=P+1;continue}let C=$.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);if(C){let A=C[1].length,P=yi(C[2],e);e.contents.push({kind:"heading",level:A,id:P,text:be(C[2])}),F.push(`<h${A} id="${P}">${be(C[2])}</h${A}>`),w+=1;continue}if(/^ {0,3}(?:[-*_]\s*){3,}$/.test($)){F.push("<hr>"),w+=1;continue}if(/^ {0,3}>/.test($)){let A=[];for(;w<y&&/^ {0,3}>/.test(n[w]);)A.push(n[w].replace(/^ {0,3}> ?/,"")),w+=1;F.push(`<blockquote>${Dr(A.join(`
`),e,{...t,diagramReferenceRegistry:c})}</blockquote>`);continue}let q=Ge($);if(q){let A=b(w,q[1].length);F.push(A.html),w=A.index;continue}let M=w+1<y?Cn(n[w+1]):null;if(M){let A=Fr($),P=[];for(w+=2;w<y&&n[w].includes("|")&&n[w].trim();)P.push(Fr(n[w])),w+=1;let I=(D,R)=>R.map((j,G)=>`<${D}${M[G]?` style="text-align:${M[G]}"`:""}>${be(j||"")}</${D}>`).join("");F.push(`<table><thead><tr>${I("th",A)}</tr></thead><tbody>${P.map(D=>`<tr>${I("td",D)}</tr>`).join("")}</tbody></table>`);continue}let L=[$.trim()];for(w+=1;w<y&&!h(w);)L.push(n[w].trim()),w+=1;F.push(`<p>${be(L.join(" "))}</p>`)}return F.join("")}let N=S();return i?N:Fi(N,e)}function $i(r,e,t){let n=r.filter(d=>d.kind==="figure"?t:d.level<=e);if(!n.length)return"";let o=n.filter(d=>d.kind==="heading").map(d=>d.level),i=Math.min(...o.length?o:[1]),s=[],a=[];for(let d of n){let l=d.kind==="figure"?(a.length?a[a.length-1].level:0)+1:d.level-i+1;for(;a.length&&a[a.length-1].level>=l;)a.pop();let u={entry:d,level:l,children:[]};(a.length?a[a.length-1].children:s).push(u),d.kind==="heading"&&a.push(u)}let c=d=>`<ul>${d.map(l=>`<li class="docdiagram-contents-${l.entry.kind}"><a href="#${v(l.entry.id)}">${l.entry.text}</a>${l.children.length?c(l.children):""}</li>`).join("")}</ul>`;return`<nav class="docdiagram-contents" aria-label="Table of contents">${c(s)}</nav>`}function Fi(r,e){let t=e.figures||new Map,n=e.contents||[];return r.replace(hi,(o,i)=>{let s=t.get(i);return s?`<a href="#${v(i)}">${s.number===null?be(s.text):String(s.number)}</a>`:`<strong class="docdiagram-error-inline">Unknown reference "${v(i)}"</strong>`}).replace(pi,(o,i)=>{let[s,a]=i.split(":");return $i(n,Number(s),a==="true")})}var Ar={h1:{fontSize:26,lineHeight:34},h2:{fontSize:20,lineHeight:26},body:{fontSize:16,lineHeight:20}},Mr=.72,Di=/^(#{1,2})\s+(.*)$/,Nr=/(\*\*([^*]+)\*\*)|((?<!\w)_([^_\s](?:[^_]*[^_\s])?)_)(?!\w)|(`([^`]+)`)/g;function Ni(r){let e=r.match(Di);return e?{kind:e[1].length===1?"h1":"h2",text:e[2]}:{kind:"body",text:r}}function Ai(r){let e=[],t=0,n;for(Nr.lastIndex=0;n=Nr.exec(r);)n.index>t&&e.push({text:r.slice(t,n.index)}),n[2]!==void 0?e.push({text:n[2],bold:!0}):n[4]!==void 0?e.push({text:n[4],italic:!0}):n[6]!==void 0&&e.push({text:n[6],code:!0}),t=Nr.lastIndex;return(t<r.length||!e.length)&&e.push({text:r.slice(t)}),e}function Mi(r,e,t,n,o,i){let s=[];t&&(s.push(`x="${n}"`),o!==null&&s.push(`dy="${o}"`));let a=[`font-size:${i}px`];(r.bold||e)&&a.push("font-weight:700"),r.italic&&a.push("font-style:italic"),r.code&&a.push("font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace"),s.push(`style="${a.join(";")}"`);let c=v(r.text)||" ";return`<tspan ${s.join(" ")}>${c}</tspan>`}function Ci(r,e,t,n,o){if(!n.length)return"";let i=t+Ar[n[0].kind].lineHeight*Mr,s=t,a=0,c=n.map((d,l)=>{let u=Ar[d.kind],g=s+u.lineHeight*Mr,h=l===0?null:g-a;s+=u.lineHeight,a=g;let b=Ai(d.text),m=d.kind!=="body";return b.map((p,S)=>Mi(p,m,S===0,r,S===0?h:null,u.fontSize)).join("")}).join("");return`<text x="${r}" y="${i}" text-anchor="${e}" class="docdiagram-node-label docdiagram-node-label-markdown" fill="${v(o)}">${c}</text>`}function Pn(r,e,t){let n=de(e.label).map(Ni),o=e.subtitle?de(e.subtitle):[];if(!n.length&&!o.length)return"";let i=15,s=n.reduce((N,x)=>N+Ar[x.kind].lineHeight,0),a=o.length?6:0,c=o.length*i,d=s+a+c,l=e.textHAlign||"center",u=l==="left"?r.x:l==="right"?r.x+r.width:r.x+r.width/2,g=l==="left"?"start":l==="right"?"end":"middle",h=r.y+r.height/2,b=e.textVAlign==="top"?r.y:h-d/2,m=Ci(u,g,b,n,t),p=b+s+a+i*Mr,S=o.length?xe(u,p,o,i,"docdiagram-node-subtitle",t,g):"";return m+S}function qt(r){return[r?.caption?' class="docdiagram docdiagram-captioned"':' class="docdiagram"',r?.id?` id="${v(r.id)}"`:""].join("")}function It(r,e){return r?.caption?`<figcaption class="docdiagram-caption">${e(r.caption)}</figcaption>`:""}function Cr(r,e,t){let n=e!=="none",o=e==="flowchart",i=t.expandedDiagramIndex===r;return['<div class="docdiagram-diagram-toolbar" role="toolbar" aria-label="Diagram controls">',`<button type="button" class="docdiagram-icon-button docdiagram-zoom-in" data-diagram-index="${r}" aria-label="Zoom in" title="Zoom in">+</button>`,`<button type="button" class="docdiagram-icon-button docdiagram-zoom-out" data-diagram-index="${r}" aria-label="Zoom out" title="Zoom out">\u2212</button>`,`<button type="button" class="docdiagram-icon-button docdiagram-fit" data-diagram-index="${r}" aria-label="Zoom to fit" title="Zoom to fit">\u22A1</button>`,`<button type="button" class="docdiagram-icon-button docdiagram-toggle-expand" data-diagram-index="${r}" aria-pressed="${i}" aria-label="${i?"Collapse diagram":"Expand diagram"}" title="${i?"Collapse diagram (Esc)":"Expand diagram"}">${i?"\u2921":"\u2922"}</button>`,'<div class="docdiagram-diagram-export">',`<button type="button" class="docdiagram-icon-button docdiagram-export-toggle" data-diagram-index="${r}" aria-label="Export diagram" aria-expanded="false" title="Export diagram">\u21E7</button>`,'<div class="docdiagram-diagram-export-menu" hidden>',`<button type="button" class="docdiagram-open-diagram" data-diagram-index="${r}">Open full diagram</button>`,`<button type="button" class="docdiagram-save-diagram" data-diagram-index="${r}">Save as Skryb diagram</button>`,`<button type="button" class="docdiagram-download-diagram" data-diagram-index="${r}">Save as SVG</button>`,`<button type="button" class="docdiagram-print-diagram" data-diagram-index="${r}">Print / Save as PDF</button>`,"</div>","</div>",n?t.editingDiagramIndex===r?`<button type="button" class="docdiagram-icon-button docdiagram-done-editing" aria-label="Done editing" title="Done editing">\u2713</button><button type="button" class="docdiagram-icon-button docdiagram-cancel-editing" aria-label="Cancel editing and discard changes" title="Cancel editing and discard changes">\xD7</button>${o?`<button type="button" class="docdiagram-icon-button docdiagram-create-node" data-diagram-index="${r}" aria-label="New node" title="New node">+</button>`:""}`:t.editingDiagramIndex===null?`<button type="button" class="docdiagram-icon-button docdiagram-start-editing" data-diagram-index="${r}" aria-label="Edit diagram" title="Edit diagram">\u270E</button>`:"":"","</div>"].join("")}function Rn(r,e,t,n,o){let{selectedNode:i,selectedEdge:s,editingNode:a,editingEdge:c,connectionDrag:d,diagramZooms:l,diagramCameraOffsets:u}=t,g=t.editingDiagramIndex===e,h=new X(r),b=h.entries,m=(D,R)=>b.filter(({node:j})=>!h.isRelated(j,D)&&!h.isRelated(j,R)).map(({bounds:j})=>j),p=16,S=[],N=[],y=Ce[t.documentColorScheme]?.[t.documentTheme==="dark"?"dark":"light"],F=y?Object.entries(y).filter(([,D])=>D.gradient).map(([D,R])=>`<linearGradient id="docdiagram-${t.documentColorScheme}-${e}-${D}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${v(R.gradient||R.fill)}"/><stop offset="1" stop-color="${v(R.fill)}"/></linearGradient>`).join(""):"",w=r.edges.map((D,R)=>{let j=h.getById(D.source),G=h.getById(D.target);if(!j||!G)return"";let _=j.node,ee=G.node,ue=fe(_,j.position.x,j.position.y,Number(_.size?.width)||190,Number(_.size?.height)||80),we=fe(ee,G.position.x,G.position.y,Number(ee.size?.width)||190,Number(ee.size?.height)||80),me=D.sourceAnchor||"right",J=D.targetAnchor||"left",Ee=ue.anchors[me],te=we.anchors[J],Q=D.route||"orthogonal",re=Pe(Ee,te,me,J,Q,D.waypoint,D.waypoint?void 0:m(_,ee)),ne=re.midpoint.x,Re=re.midpoint.y-10,Z=xt(r,D,t.documentTheme),z=s?.diagramIndex===e&&s.edgeIndex===R,He=z&&c?.diagramIndex===e&&c.edgeIndex===R,Se=(Number(Z.strokeWidth)||2)+(z?2:0),De=220,Ye=72,nt=D.label?de(D.label):[],Gt=nt.length*p,Vt=Re-Gt/2+p*.72,_e=Xt(D,"start"),ot=Xt(D,"end"),gt=`docdiagram-marker-${e}-${R}-start`,ht=`docdiagram-marker-${e}-${R}-end`;_e!=="none"&&S.push(ut(gt,_e,"start",Z.stroke||"",Se)),ot!=="none"&&S.push(ut(ht,ot,"end",Z.stroke||"",Se)),z&&g&&N.push(`<circle class="docdiagram-edge-endpoint" data-diagram-index="${e}" data-edge-index="${R}" data-endpoint="source" cx="${Ee.x}" cy="${Ee.y}" r="7"/>`,`<circle class="docdiagram-edge-endpoint" data-diagram-index="${e}" data-edge-index="${R}" data-endpoint="target" cx="${te.x}" cy="${te.y}" r="7"/>`,$n(e,R,D.waypoint??re.midpoint,!!D.waypoint));let Ut=[_e!=="none"?` marker-start="url(#${gt})"`:"",ot!=="none"?` marker-end="url(#${ht})"`:""].join("");return[`<g class="docdiagram-edge-group${z?" docdiagram-edge-selected":""}" data-diagram-index="${e}" data-edge-index="${R}">`,`<path class="docdiagram-edge-hit" d="${re.hitPath}" fill="none" stroke="transparent" stroke-width="16"/>`,`<path class="docdiagram-edge" d="${re.path}"${Ut} stroke="${v(Z.stroke||"")}" stroke-width="${Se}"/>`,He?`<foreignObject class="docdiagram-inline-editor-host" x="${ne-De/2}" y="${Re-Ye/2}" width="${De}" height="${Ye}"><textarea class="docdiagram-inline-editor docdiagram-inline-editor-edge" aria-label="Edit edge label. Press Enter for a new line. Press Control or Command plus Enter to save. Press Escape to cancel.">${v(D.label||"")}</textarea></foreignObject>`:nt.length?xe(ne,Vt,nt,p,"docdiagram-edge-label",Z.text||""):"","</g>"].join("")}).join(""),$=[],k=b.map(({node:D,position:R},j)=>{let G=R.x,_=R.y,ee=Number(D.size?.width)||190,ue=Number(D.size?.height)||80,we=je(r,D,t.documentTheme,t.documentColorScheme),me=D.palette||yt(r,D.class)?.palette,J=me?y?.[me]:void 0,Ee=D.arrow?Rt({x:G,y:_,width:ee,height:ue},D.arrow):null,te=Ee&&J?.gradient?`docdiagram-${t.documentColorScheme}-${e}-${me}-callout-${j}`:"";te&&J&&$.push(`<linearGradient id="${te}" gradientUnits="userSpaceOnUse" x1="${G}" y1="${_}" x2="${G}" y2="${_+ue}"><stop offset="0" stop-color="${v(J.gradient||J.fill)}"/><stop offset="1" stop-color="${v(J.fill)}"/></linearGradient>`);let Q=J?.gradient?{...we,fill:te?`url(#${te})`:`url(#docdiagram-${t.documentColorScheme}-${e}-${me})`}:we,re=i?.diagramIndex===e&&i.nodeId===D.id,ne=re&&a?.diagramIndex===e&&a.nodeId===D.id,Re=(Number(Q.strokeWidth)||2)+(re?2:0),Z=fe(D,G,_,ee,ue),z=rt(Z.textBounds,D),He=D.shape==="text";return[`<g class="docdiagram-node${re?" docdiagram-node-selected":""}" data-diagram-index="${e}" data-node-id="${v(D.id)}">`,Pt(Z,Q,Re),Ee?Fn(Ee,Z.bodyMarkup,Q,Re,`docdiagram-callout-mask-${e}-${j}`):"",ne?`<foreignObject class="docdiagram-inline-editor-host" x="${Z.textBounds.x}" y="${Z.textBounds.y}" width="${Z.textBounds.width}" height="${Z.textBounds.height}"><textarea class="docdiagram-inline-editor docdiagram-inline-editor-node" aria-label="Edit node label. Press Enter for a new line. Press Control or Command plus Enter to save. Press Escape to cancel.">${v(D.label)}</textarea></foreignObject>`:He?Pn(Z.textBounds,D,Q.text||""):xe(z.centerX,z.labelStartY,z.labelLines,z.labelLineHeight,"docdiagram-node-label",Q.text||"",z.textAnchor),!ne&&!He&&z.subtitleLines.length?xe(z.centerX,z.subtitleStartY,z.subtitleLines,z.subtitleLineHeight,"docdiagram-node-subtitle",Q.text||"",z.textAnchor):"",re&&g&&!ne?[["top-left",G-7,_-7],["top-right",G+ee-7,_-7],["bottom-left",G-7,_+ue-7],["bottom-right",G+ee-7,_+ue-7]].map(([Se,De,Ye])=>`<rect class="docdiagram-resize-handle" data-resize-corner="${Se}" x="${De}" y="${Ye}" width="14" height="14" rx="3"/>`).join(""):"",re&&g&&!ne?Me.map(Se=>{let De=Z.anchors[Se];return`<circle class="docdiagram-connection-port" data-anchor="${Se}" cx="${De.x}" cy="${De.y}" r="7" aria-label="${Se} connection port"/>`}).join(""):"",re&&g&&!ne&&D.arrow?`<circle class="docdiagram-callout-handle" data-diagram-index="${e}" data-node-id="${v(D.id)}" cx="${D.arrow.x}" cy="${D.arrow.y}" r="7" aria-label="Callout pointer target"/>`:"","</g>"].join("")}).join(""),C=Number(r.canvas.width)||1e3,q=Number(r.canvas.height)||560,M=t.expandedDiagramIndex===e,L=t.diagramViewportHeights.get(e),A=L&&!M?` style="box-sizing: border-box; height: ${L}px; min-height: 0"`:"",P=u.get(e)||{x:0,y:0},I=`width: ${l.get(e)||100}%; transform: translate(${P.x}px, ${P.y}px)`;return[`<figure${qt(o)} data-diagram-index="${e}" data-diagram-type="flowchart" data-editing="${g}" data-expanded="${M}"${A}>`,n(e,"flowchart",t),`<svg viewBox="0 0 ${C} ${q}" role="img" aria-label="Architecture diagram" data-diagram-index="${e}" style="${I}">`,`<defs>${F}${$.join("")}${S.join("")}</defs>`,k,w,d?.diagramIndex===e?`<path class="docdiagram-connection-preview${d.invalid?" docdiagram-connection-invalid":""}" d="${Pe(d.start,d.current,d.sourceAnchor,d.targetAnchor||d.sourceAnchor,"straight").path}"/>`:"",N.join(""),"</svg>",It(o,be),"</figure>"].join("")}function Bn(r,e,t,n,o){let i=at(r,t.documentTheme),s=Number(r.canvas?.width)||1e3,a=Number(r.canvas?.height)||560,c=r.participants||[],d=r.messages||[],l=r.activations||[],u=r.notes||[],g=r.groups||[],h=90,b=90,m=28,p=Number(r.canvas?.participantSize?.width)||180,S=Number(r.canvas?.participantSize?.height)||42,N=Number(r.canvas?.participantSpacing)||220,x=16,y=74+Math.max(0,...c.filter(E=>E.kind==="actor").map(E=>de(E.label||"").length-1))*x,F=48,w=16,$=16,k=15,C=12,q=26,M=28,L=40,A=22,P=t.expandedDiagramIndex===e,I=t.diagramViewportHeights.get(e),D=I&&!P?` style="box-sizing: border-box; height: ${I}px; min-height: 0"`:"",R=`docdiagram-sequence-arrow-${e}`,j=m+y+12,G=c[0],_=c[c.length-1],ee=Number(G?.size?.width)||p,ue=Number(_?.size?.width)||p,we=c.length>1?ee/2+N*(c.length-1)+ue/2:p+h+b,me=Math.max(s,we,h+b),J=new Map;c.forEach((E,T)=>{J.set(E.id,c.length===1?me/2:ee/2+N*T)});let Ee=j+40,te=[],Q=[],re=[],ne=[],Re=[],Z=new Map;u.forEach((E,T)=>{let B=Number(E.after);if(!Number.isFinite(B)||B<1){Re.push({note:E,sourceIndex:T});return}let V=Z.get(B)||[];V.push({note:E,sourceIndex:T}),Z.set(B,V)});let z=j+24,He=(E,T)=>{let B=de(E.label||""),V=Math.max(0,...B.map(to=>to.length)),oe=Math.max(160,Number(E.size?.width)||0,V*7.2+32),ge=Math.max(F,B.length*$+24,Number(E.size?.height)||0),ie=J.get(E.at||"")||me/2,U=Math.min(me-oe/2-24,Math.max(oe/2+24,ie)),ae=z;return z=ae+ge+w,{...E,lines:B,x:U-oe/2,y:ae,width:oe,height:ge,sourceIndex:T}};Re.forEach(E=>Q.push(He(E.note,E.sourceIndex))),d.forEach((E,T)=>{let B=T+1;g.filter(U=>Number(U.from)===B).forEach(U=>{let ae={label:U.label,from:Number(U.from),to:Number(U.to),startY:z,endY:z,depth:ne.length};z=ae.startY+L,ne.push(ae),re.push(ae)});let V=de(E.label||""),oe=z,ge=Math.max(1,V.length)*k,ie=oe+ge+C;te.push({...E,index:T,y:ie,lines:V,labelTop:oe}),z=ie+q+(E.from===E.to?M:0),(Z.get(B)||[]).forEach(U=>{Q.push(He(U.note,U.sourceIndex))});for(let U=ne.length-1;U>=0;U-=1)ne[U].to>B||(ne[U].endY=z,z+=A,ne.splice(U,1))}),ne.forEach(E=>{E.endY=z});let Se=Math.max(j+140,z+8,Q.length?Q[Q.length-1].y+Q[Q.length-1].height:0,te.length?te[te.length-1].y+44:Ee,...re.map(E=>E.endY+12)),De=Math.max(a,Se+56),Ye=De-36,nt=l.map((E,T)=>({participantId:E.participant,depth:l.slice(0,T).filter(B=>B.participant===E.participant&&B.from<=E.from&&B.to>=E.from).length,startY:(te[E.from-1]?.y||Ee)-10,endY:(te[E.to-1]?.y||Ee)+18})),Gt=c.map(E=>{let T=J.get(E.id)||0,B=de(E.label||""),V=Xe(r,E,t.documentTheme,t.documentColorScheme),oe=Number(E.size?.width)||p,ge=Number(E.size?.height)||S;if(E.kind==="actor"){let ie=m+10,U=ie+18,ae=U+18;return[`<g class="docdiagram-sequence-participant docdiagram-sequence-actor" data-diagram-index="${e}" data-participant-id="${v(E.id)}">`,`<circle cx="${T}" cy="${ie}" r="8" fill="none" stroke="${v(V.stroke||"")}" stroke-width="${Number(V.strokeWidth)||2}"/>`,`<path d="M ${T} ${ie+8} V ${ae} M ${T-14} ${U} H ${T+14} M ${T} ${ae} L ${T-12} ${ae+18} M ${T} ${ae} L ${T+12} ${ae+18}" fill="none" stroke="${v(V.stroke||"")}" stroke-width="${Number(V.strokeWidth)||2}" stroke-linecap="round" stroke-linejoin="round"/>`,xe(T,m+y-4-(B.length-1)*x,B,x,"docdiagram-node-label",V.text||""),"</g>"].join("")}return[`<g class="docdiagram-sequence-participant" data-diagram-index="${e}" data-participant-id="${v(E.id)}">`,`<rect x="${T-oe/2}" y="${m}" width="${oe}" height="${ge}" rx="12" fill="${v(V.fill||"")}" stroke="${v(V.stroke||"")}" stroke-width="${Number(V.strokeWidth)||2}"/>`,xe(T,m+ge/2+6-(B.length-1)*x/2,B,x,"docdiagram-node-label",V.text||""),"</g>"].join("")}).join(""),Vt=c.map(E=>{let T=J.get(E.id)||0;return`<path class="docdiagram-sequence-lifeline" d="M ${T} ${j} L ${T} ${Ye}" fill="none" stroke="${v(i.edge.stroke)}" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.35"/>`}).join(""),_e=re.map(E=>{let T=42+E.depth*14,B=Math.min(260,Math.max(110,String(E.label||"").length*8+28));return{group:E,inset:T,labelWidth:B}}),ot=_e.map(({group:E,inset:T})=>['<g class="docdiagram-sequence-group">',`<rect x="${T}" y="${E.startY}" width="${Math.max(60,me-T*2)}" height="${Math.max(40,E.endY-E.startY)}" rx="12" fill="none" stroke="${v(i.edge.stroke)}" stroke-width="1.5" stroke-dasharray="10 6" opacity="0.45"/>`,"</g>"].join("")).join(""),gt=_e.map(({group:E,inset:T,labelWidth:B})=>['<g class="docdiagram-sequence-group-label">',`<rect x="${T+12}" y="${E.startY-12}" width="${B}" height="24" rx="6" fill="${v(i.node.fill)}" stroke="${v(i.edge.stroke)}" stroke-width="1.5"/>`,`<text x="${T+12+B/2}" y="${E.startY+5}" text-anchor="middle" class="docdiagram-edge-label" fill="${v(i.edge.text)}">${v(E.label||"")}</text>`,"</g>"].join("")).join(""),ht=Q.map(E=>{let T=E.y+20,B=Xe(r,E,t.documentTheme,t.documentColorScheme);return[`<g class="docdiagram-sequence-note" data-diagram-index="${e}" data-note-index="${E.sourceIndex}">`,`<rect x="${E.x}" y="${E.y}" width="${E.width}" height="${E.height}" rx="10" fill="${v(B.fill||"")}" stroke="${v(B.stroke||"")}" stroke-width="${Number(B.strokeWidth)||2}"/>`,xe(E.x+E.width/2,T,E.lines,$,"docdiagram-node-subtitle",B.text||""),"</g>"].join("")}).join(""),Ut=nt.map(E=>{let T=J.get(E.participantId)||0,B=E.depth*7,V=12,oe=Math.max(20,E.endY-E.startY),ge=c.find(U=>U.id===E.participantId),ie=ge?Xe(r,ge,t.documentTheme,t.documentColorScheme):i.node;return`<rect class="docdiagram-sequence-activation" x="${T-V/2+B}" y="${E.startY}" width="${V}" height="${oe}" rx="4" fill="${v(ie.fill||"")}" stroke="${v(ie.stroke||"")}" stroke-width="${Number(ie.strokeWidth)||2}"/>`}).join(""),eo=te.map(E=>{let T=J.get(E.from)||0,B=J.get(E.to)||0,V=E.style==="dashed",oe=E.lines,ge=E.labelTop+12,ie=` marker-end="url(#${R})"`;if(E.from===E.to){let ae=M;return[`<g class="docdiagram-sequence-message" data-diagram-index="${e}" data-message-index="${E.index}">`,`<path d="M ${T} ${E.y} L ${T+48} ${E.y} L ${T+48} ${E.y+ae} L ${T} ${E.y+ae}" fill="none" stroke="${v(i.edge.stroke)}" stroke-width="2"${ie}${V?' stroke-dasharray="8 5"':""}/>`,xe(T+48/2,ge,oe,k,"docdiagram-edge-label",i.edge.text),"</g>"].join("")}return[`<g class="docdiagram-sequence-message" data-diagram-index="${e}" data-message-index="${E.index}">`,`<path d="M ${T} ${E.y} L ${B} ${E.y}" fill="none" stroke="${v(i.edge.stroke)}" stroke-width="2"${ie}${V?' stroke-dasharray="8 5"':""}/>`,xe((T+B)/2,ge,oe,k,"docdiagram-edge-label",i.edge.text),"</g>"].join("")}).join("");return[`<figure${qt(o)} data-diagram-index="${e}" data-diagram-type="sequence" data-editing="${t.editingDiagramIndex===e}" data-expanded="${P}"${D}>`,n(e,"sequence",t),`<svg viewBox="0 0 ${me} ${De}" role="img" aria-label="Sequence diagram" data-diagram-index="${e}" style="width: ${t.diagramZooms.get(e)||100}%">`,`<defs>${ut(R,"arrow","end",i.edge.stroke,2)}</defs>`,ot,Vt,Gt,Ut,ht,eo,gt,"</svg>",It(o,be),"</figure>"].join("")}function qn(r,e,t){try{let n=$e(r,t.colourScheme);return t.onDiagram(e,n),n.type==="sequence"?Bn(n,e,t.state,Cr,t.figure):Rn(n,e,t.state,Cr,t.figure)}catch(n){let o=n instanceof Error?n.message:String(n);return`<section class="docdiagram-error"><strong>Diagram could not be rendered.</strong><br>${v(o)}</section>`}}function In(){if(document.querySelector("style[data-docdiagram-runtime-styles]"))return;let r=document.createElement("style");r.dataset.docdiagramRuntimeStyles="true",r.textContent=`
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
    .docdiagram-lint-dialog pre {
      font-size: 0.85rem;
      margin: 0 0 12px;
      max-height: 50vh;
      overflow: auto;
      white-space: pre-wrap;
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
      grid-template-columns: 2.8rem 2.6rem 1fr auto 3.2rem;
      width: 100%;
    }
    .docdiagram-inspector-colour-row > span:nth-of-type(2) {
      justify-self: end;
    }
    .docdiagram-inspector-colour-row input[type="color"] {
      height: 1.9rem;
      padding: 2px;
      width: 2.6rem;
    }
    .docdiagram-inspector-colour-row .docdiagram-inspector-stroke-width {
      box-sizing: border-box;
      min-width: 0;
      width: 3.2rem;
    }
    .docdiagram-inspector-text-row {
      align-items: center;
      color: var(--docdiagram-muted);
      display: grid;
      font-size: .9rem;
      gap: .4rem;
      grid-template-columns: 2.8rem 2.6rem;
    }
    .docdiagram-inspector-text-row input[type="color"] {
      height: 1.9rem;
      padding: 2px;
      width: 2.6rem;
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
  `,document.head.append(r)}function zn(){return{diagramModels:[],editingDiagramIndex:null,selectedNode:null,selectedEdge:null,selectedSequenceElement:null,editingNode:null,editingEdge:null,connectionDrag:null,documentTheme:"light",documentThemeSetting:"auto",documentColorScheme:"classic",documentFormat:"centered",documentDoctype:"document",savedSource:"",editSessionDiagram:null,expandedDiagramIndex:null,diagramZooms:new Map,diagramCameraOffsets:new Map,diagramViewportHeights:new Map}}function Ve(r){r.selectedNode=null,r.selectedEdge=null,r.selectedSequenceElement=null,r.editingNode=null,r.editingEdge=null}function Ue(r,e){return r.editingDiagramIndex===e}function ye(r,e){return r.target instanceof Element?r.target.closest(e):null}function le(r,e){let t=r.diagramModels[e];return t?.type==="flowchart"?t:null}function Y(r){return Number(r)}function Ti(r,e){let t=r.getBoundingClientRect(),n=18;return e.clientX>=t.right-n&&e.clientY>=t.bottom-n}function Tr(r,e){return(Number(je(r,e).strokeWidth)||2)+2}var zt=class{constructor(e){this.host=e;this.editingShortcutsBound=!1}enableCanvasPanning(){for(let e of this.host.outputElement.querySelectorAll(".docdiagram")){let t=e.querySelector("svg");t&&(e.addEventListener("pointerdown",n=>{(n.target===e||n.target===t)&&!Ti(e,n)&&this.beginCanvasPan(t,n)}),e.addEventListener("wheel",n=>this.moveCanvasWithWheel(t,n),{passive:!1}))}}moveCanvasWithWheel(e,t){t.preventDefault();let n=Y(e.dataset.diagramIndex),o=this.host.state.diagramCameraOffsets.get(n)||{x:0,y:0};if(!t.ctrlKey&&!t.metaKey){let u=Dt(t.deltaY,t.deltaMode),g=Dt(t.deltaX,t.deltaMode);this.setCameraOffset(e,n,{x:o.x-(t.shiftKey&&!g?u:g),y:o.y-(t.shiftKey&&!g?0:u)});return}let i=this.host.state.diagramZooms.get(n)||100,s=on(i,t.deltaY,t.deltaMode);if(s===i)return;let a=e.getBoundingClientRect(),c=a.width?(t.clientX-a.left)/a.width:.5,d=a.height?(t.clientY-a.top)/a.height:.5;this.host.state.diagramZooms.set(n,s),e.style.width=`${s}%`;let l=e.getBoundingClientRect();this.setCameraOffset(e,n,{x:o.x+t.clientX-(l.left+c*l.width),y:o.y+t.clientY-(l.top+d*l.height)})}setCameraOffset(e,t,n){this.host.state.diagramCameraOffsets.set(t,n),e.style.transform=`translate(${n.x}px, ${n.y}px)`}enableSequenceSelection(){for(let e of this.host.outputElement.querySelectorAll('.docdiagram[data-diagram-type="sequence"] svg'))e.addEventListener("click",t=>{if(!Ue(this.host.state,Y(e.dataset.diagramIndex)))return;let n=ye(t,".docdiagram-sequence-participant"),o=ye(t,".docdiagram-sequence-note"),i=ye(t,".docdiagram-sequence-message");n?this.host.state.selectedSequenceElement={diagramIndex:Y(n.getAttribute("data-diagram-index")||void 0),kind:"participant",id:n.getAttribute("data-participant-id")||""}:o?this.host.state.selectedSequenceElement={diagramIndex:Y(o.getAttribute("data-diagram-index")||void 0),kind:"note",index:Y(o.getAttribute("data-note-index")||void 0)}:i?this.host.state.selectedSequenceElement={diagramIndex:Y(i.getAttribute("data-diagram-index")||void 0),kind:"message",index:Y(i.getAttribute("data-message-index")||void 0)}:this.host.state.selectedSequenceElement=null,this.host.state.selectedNode=null,this.host.state.selectedEdge=null,this.host.renderDocument()})}enableEditing(){for(let e of this.host.outputElement.querySelectorAll(".docdiagram svg"))Ue(this.host.state,Y(e.dataset.diagramIndex))&&(e.addEventListener("click",t=>this.handleDiagramClick(e,t)),e.addEventListener("pointerdown",t=>this.handleDiagramPointerDown(e,t)));for(let e of this.host.outputElement.querySelectorAll(".docdiagram-inline-editor"))this.wireInlineEditor(e);this.editingShortcutsBound||(this.editingShortcutsBound=!0,document.addEventListener("keydown",e=>{if(this.host.state.editingDiagramIndex===null)return;let t=document.activeElement;t instanceof Element&&t.matches("input, textarea, select, [contenteditable]")||((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="d"&&this.host.state.selectedNode?(e.preventDefault(),this.duplicateSelectedNode()):(e.key==="Delete"||e.key==="Backspace")&&(this.host.state.selectedNode||this.host.state.selectedEdge)&&(e.preventDefault(),this.deleteSelected()))},!0))}selectNode(e,t){this.host.state.selectedNode={diagramIndex:e,nodeId:t},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}selectEdge(e,t){this.host.state.selectedEdge={diagramIndex:e,edgeIndex:t},this.host.state.selectedNode=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}handleDiagramClick(e,t){if(ye(t,".docdiagram-inline-editor"))return;let n=ye(t,".docdiagram-node");if(n){this.selectNode(Y(n.getAttribute("data-diagram-index")||void 0),n.getAttribute("data-node-id")||"");return}let o=ye(t,".docdiagram-edge-group");if(o){let i=Y(o.getAttribute("data-diagram-index")||void 0),s=Y(o.getAttribute("data-edge-index")||void 0),a=this.host.state.selectedEdge?.diagramIndex===i&&this.host.state.selectedEdge.edgeIndex===s,c=this.host.state.editingEdge?.diagramIndex===i&&this.host.state.editingEdge.edgeIndex===s;a&&!c?(this.host.state.editingEdge={diagramIndex:i,edgeIndex:s},this.host.renderDocument()):this.selectEdge(i,s);return}(this.host.state.selectedNode||this.host.state.selectedEdge)&&this.clearSelection()}handleDiagramPointerDown(e,t){let n=ye(t,".docdiagram-edge-waypoint");if(n){this.moveEdgeWaypoint(e,t,n);return}let o=ye(t,".docdiagram-callout-handle");if(o){this.moveNodeCalloutPointer(e,t,o);return}let i=ye(t,".docdiagram-connection-port");if(i){let w=i.closest(".docdiagram-node"),$=Y(w?.getAttribute("data-diagram-index")||e.dataset.diagramIndex),k=i.getAttribute("data-node-id")||w?.getAttribute("data-node-id")||"",C=le(this.host.state,$),q=C?ce(C,k)?.node:null,M=i.getAttribute("data-anchor")||"";q&&this.beginConnectionDrag(e,t,{diagramIndex:$,sourceNodeId:k,sourceAnchor:M,start:this.getNodePortPoint(q,M),current:this.getNodePortPoint(q,M),invalid:!1});return}let s=ye(t,".docdiagram-edge-endpoint");if(s){let w=Y(s.getAttribute("data-diagram-index")||void 0),$=Y(s.getAttribute("data-edge-index")||void 0),k=le(this.host.state,w),C=k?.edges[$],q=s.getAttribute("data-endpoint");if(!C||q!=="source"&&q!=="target")return;let M=q==="source"?C.source:C.target,L=q==="source"?C.sourceAnchor:C.targetAnchor,A=k?ce(k,M)?.node:null;if(!A||!L)return;this.beginConnectionDrag(e,t,{diagramIndex:w,edgeIndex:$,endpoint:q,reconnect:!0,sourceNodeId:M,sourceAnchor:L,start:this.getNodePortPoint(A,L),current:this.getNodePortPoint(A,L),invalid:!1});return}let a=ye(t,".docdiagram-resize-handle");if(a){let w=a.closest(".docdiagram-node"),$=a.getAttribute("data-resize-corner");w&&($==="top-left"||$==="top-right"||$==="bottom-left"||$==="bottom-right")&&this.resizeNode(e,t,w,$);return}if(ye(t,".docdiagram-inline-editor"))return;let c=ye(t,".docdiagram-node");if(!c)return;let d=Y(c.getAttribute("data-diagram-index")||void 0),l=c.getAttribute("data-node-id")||"",u=le(this.host.state,d);if(!u)return;let g=new X(u),h=g.getById(l),b=h?.node;if(!h||!b)return;t.preventDefault();let m=this.svgPoint(e,t),p=h.bounds,S=h.parent?g.getByNode(h.parent)?.position||{x:0,y:0}:{x:0,y:0},N=se(u),x=!1;this.capturePointer(e,t);let y=w=>{let $=this.svgPoint(e,w),k=H(p.x+$.x-m.x,N),C=H(p.y+$.y-m.y,N);x=x||k!==p.x||C!==p.y,c.setAttribute("transform",`translate(${k-p.x} ${C-p.y})`),b.arrow&&this.updateNodeCalloutMarkup(c,p,{x:b.arrow.x-(k-p.x),y:b.arrow.y-(C-p.y)},fe(b,p.x,p.y,p.width,p.height).bodyMarkup,Tr(u,b)),b.position={...b.position,x:k-S.x,y:C-S.y}},F=w=>{this.releasePointer(e,w),e.removeEventListener("pointermove",y),e.removeEventListener("pointerup",F),e.removeEventListener("pointercancel",F),x?(Gr(u,l),Ze(u,b),this.host.state.selectedNode={diagramIndex:d,nodeId:l},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.persistDiagramModels(),this.host.renderDocument()):this.host.state.selectedNode?.diagramIndex===d&&this.host.state.selectedNode.nodeId===l?(this.host.state.editingNode={diagramIndex:d,nodeId:l},this.host.renderDocument()):this.selectNode(d,l)};e.addEventListener("pointermove",y),e.addEventListener("pointerup",F),e.addEventListener("pointercancel",F)}getSelectedNode(){let e=this.host.state.selectedNode,t=e?le(this.host.state,e.diagramIndex):null;return e&&t&&ce(t,e.nodeId)?.node||null}getSelectedEdge(){let e=this.host.state.selectedEdge,t=e?le(this.host.state,e.diagramIndex):null;return e&&t?.edges[e.edgeIndex]||null}clearSelection(){this.host.state.selectedNode=null,this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}deleteSelected(){let e=this.host.state.selectedNode,t=this.host.state.selectedEdge;if(e){let n=le(this.host.state,e.diagramIndex);if(!n)return;let o=n.edges.filter(i=>i.source===e.nodeId||i.target===e.nodeId);if(o.length&&!globalThis.confirm(`Delete this node and its ${o.length} attached connector${o.length===1?"":"s"}?`))return;kt(n,e.nodeId)}else if(t){let n=le(this.host.state,t.diagramIndex);if(!n)return;vt(n,t.edgeIndex)}else return;Ve(this.host.state),this.host.persistDiagramModels(),this.host.renderDocument()}duplicateSelectedNode(){let e=this.host.state.selectedNode;if(!e)return;let t=le(this.host.state,e.diagramIndex);if(!t)return;let n=St(t,e.nodeId);n&&(this.host.state.selectedNode={diagramIndex:e.diagramIndex,nodeId:n.id},this.host.state.selectedEdge=null,this.host.persistDiagramModels(),this.host.renderDocument())}wireInlineEditor(e){let t=!1,n=()=>{if(!t){if(t=!0,e.classList.contains("docdiagram-inline-editor-edge")){let i=this.getSelectedEdge();i&&(Ft(i,e.value),this.host.persistDiagramModels()),this.host.state.editingEdge=null}else{let i=this.getSelectedNode();i&&($t(i,e.value),this.host.persistDiagramModels()),this.host.state.editingNode=null}this.host.renderDocument()}},o=()=>{t||(t=!0,e.classList.contains("docdiagram-inline-editor-edge")?this.host.state.editingEdge=null:this.host.state.editingNode=null,this.host.renderDocument())};e.addEventListener("pointerdown",i=>i.stopPropagation()),e.addEventListener("click",i=>i.stopPropagation()),e.addEventListener("keydown",i=>{i.key==="Enter"&&(i.metaKey||i.ctrlKey)?(i.preventDefault(),n()):i.key==="Escape"&&(i.preventDefault(),o())}),e.addEventListener("blur",n,{once:!0}),e.focus(),e.select()}resizeNode(e,t,n,o){t.preventDefault();let i=Y(n.getAttribute("data-diagram-index")||void 0),s=n.getAttribute("data-node-id")||"",a=le(this.host.state,i),c=a?ce(a,s)?.node:null;if(!a||!c)return;let d=this.svgPoint(e,t),l=Qt(c),u=!1;this.capturePointer(e,t);let g=b=>{let m=this.svgPoint(e,b);Jr(a,c,o,m.x-d.x,m.y-d.y,l);let p=Number(c.size?.width)||190,S=Number(c.size?.height)||80;u=u||p!==l.size.width||S!==l.size.height,this.updateNodeSizeMarkup(n,c,p,S)},h=b=>{this.releasePointer(e,b),e.removeEventListener("pointermove",g),e.removeEventListener("pointerup",h),e.removeEventListener("pointercancel",h),u&&(Ze(a,c),this.host.state.selectedNode={diagramIndex:i,nodeId:s},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.persistDiagramModels(),this.host.renderDocument())};e.addEventListener("pointermove",g),e.addEventListener("pointerup",h),e.addEventListener("pointercancel",h)}updateNodeSizeMarkup(e,t,n,o){let i=le(this.host.state,Y(e.getAttribute("data-diagram-index")||void 0));if(!i)return;let{x:s,y:a}=Ke(i,t),c=e.querySelector(".docdiagram-node-body"),d=e.querySelector(".docdiagram-node-label"),l=e.querySelector(".docdiagram-node-subtitle"),u=e.querySelectorAll(".docdiagram-resize-handle");if(!c)return;let g=je(i,t),h=fe(t,s,a,n,o),b=rt(h.textBounds,t);for(let m of e.querySelectorAll(".docdiagram-node-detail"))m.remove();c.outerHTML=Pt(h,g,Number(g.strokeWidth)||2);for(let m of[d,l])if(m){m.setAttribute("x",String(b.centerX)),m.setAttribute("y",String(m===d?b.labelStartY:b.subtitleStartY)),m.setAttribute("text-anchor",b.textAnchor);for(let p of m.querySelectorAll("tspan"))p.setAttribute("x",String(b.centerX))}for(let m of u){let p=m.getAttribute("data-resize-corner");m.setAttribute("x",String(p?.endsWith("left")?s-7:s+n-7)),m.setAttribute("y",String(p?.startsWith("top")?a-7:a+o-7))}this.updateNodeCalloutMarkup(e,{x:s,y:a,width:n,height:o},t.arrow,h.bodyMarkup,Tr(i,t))}getNodePortPoint(e,t,n){let o=n;if(!o){let i=this.host.state.diagramModels.find(s=>s.type==="flowchart"&&ce(s,e.id)?.node===e);if(!i)return{x:0,y:0};o=Ke(i,e)}return fe(e,o.x,o.y,o.width,o.height).anchors[t]}addConnectionTargetPorts(e,t){let n=le(this.host.state,t);if(n)for(let{node:o,bounds:i}of new X(n).entries)for(let s of Me){let a=this.getNodePortPoint(o,s,i),c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("class","docdiagram-connection-port docdiagram-connection-target-port"),c.dataset.nodeId=o.id,c.dataset.anchor=s,c.setAttribute("cx",String(a.x)),c.setAttribute("cy",String(a.y)),c.setAttribute("r","7"),e.append(c)}}beginConnectionDrag(e,t,n){t.preventDefault(),t.stopPropagation(),this.host.state.connectionDrag={...n,current:this.svgPoint(e,t),invalid:!1},this.addConnectionTargetPorts(e,n.diagramIndex);let o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("class","docdiagram-connection-preview"),e.append(o),this.capturePointer(e,t);let i=c=>{let l=document.elementFromPoint(c.clientX,c.clientY)?.closest(".docdiagram-connection-port");return l||[...e.querySelectorAll(".docdiagram-connection-port")].find(u=>{let g=u.getBoundingClientRect();return c.clientX>=g.left&&c.clientX<=g.right&&c.clientY>=g.top&&c.clientY<=g.bottom})||null},s=c=>{let d=this.host.state.connectionDrag;if(!d)return;let l=this.svgPoint(e,c),u=i(c);d.current=l,d.invalid=!u;let g=u?.getAttribute("data-anchor")||d.sourceAnchor;o.setAttribute("d",Pe(d.start,l,d.sourceAnchor,g,"straight").path),o.classList.toggle("docdiagram-connection-invalid",d.invalid)},a=c=>{this.releasePointer(e,c),e.removeEventListener("pointermove",s),e.removeEventListener("pointerup",a),e.removeEventListener("pointercancel",a);let d=i(c),l=this.host.state.connectionDrag;if(this.host.state.connectionDrag=null,d&&l){let u=le(this.host.state,l.diagramIndex),g=d.getAttribute("data-node-id")||d.closest(".docdiagram-node")?.getAttribute("data-node-id"),h=d.getAttribute("data-anchor")||"";if(u&&g){if(l.reconnect&&l.edgeIndex!==void 0&&l.endpoint){let b=u.edges[l.edgeIndex];b&&(_r(b,l.endpoint,g,h),this.host.state.selectedEdge={diagramIndex:l.diagramIndex,edgeIndex:l.edgeIndex},this.host.state.selectedNode=null)}else{let b=Yr(u,l.sourceNodeId,l.sourceAnchor,g,h);this.host.state.selectedEdge={diagramIndex:l.diagramIndex,edgeIndex:u.edges.indexOf(b)},this.host.state.selectedNode=null}this.host.persistDiagramModels()}}this.host.renderDocument()};e.addEventListener("pointermove",s),e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a)}beginCanvasPan(e,t){let n=e.closest(".docdiagram");if(!n)return;t.preventDefault();let o=Y(e.dataset.diagramIndex),i=this.host.state.diagramCameraOffsets.get(o)||{x:0,y:0},s={clientX:t.clientX,clientY:t.clientY,offset:i};n.classList.add("docdiagram-panning"),this.capturePointer(e,t);let a=d=>{let l={x:s.offset.x+d.clientX-s.clientX,y:s.offset.y+d.clientY-s.clientY};this.host.state.diagramCameraOffsets.set(o,l),e.style.transform=`translate(${l.x}px, ${l.y}px)`},c=d=>{this.releasePointer(e,d),n.classList.remove("docdiagram-panning"),e.removeEventListener("pointermove",a),e.removeEventListener("pointerup",c),e.removeEventListener("pointercancel",c)};e.addEventListener("pointermove",a),e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c)}moveEdgeWaypoint(e,t,n){let o=Y(n.getAttribute("data-diagram-index")||void 0),i=Y(n.getAttribute("data-edge-index")||void 0),s=le(this.host.state,o),a=s?.edges[i];if(!s||!a)return;let c=new X(s),d=c.getById(a.source),l=c.getById(a.target);if(!d||!l)return;t.preventDefault(),t.stopPropagation(),this.capturePointer(e,t);let u=h=>{let b=this.svgPoint(e,h);a.waypoint={x:H(b.x,se(s)),y:H(b.y,se(s))};let m=a.sourceAnchor||"right",p=a.targetAnchor||"left",S=this.getNodePortPoint(d.node,m,d.bounds),N=this.getNodePortPoint(l.node,p,l.bounds),x=Pe(S,N,m,p,a.route||"orthogonal",a.waypoint),y=xr(a.waypoint,!0);n.setAttribute("x",String(y.x)),n.setAttribute("y",String(y.y)),n.setAttribute("width",String(y.size)),n.setAttribute("height",String(y.size)),n.setAttribute("rx",String(y.radius)),n.setAttribute("transform",y.transform),n.setAttribute("data-anchored","true");let F=e.querySelector(`.docdiagram-edge-group[data-diagram-index="${o}"][data-edge-index="${i}"]`);F?.querySelector(".docdiagram-edge")?.setAttribute("d",x.path),F?.querySelector(".docdiagram-edge-hit")?.setAttribute("d",x.hitPath)},g=h=>{this.releasePointer(e,h),e.removeEventListener("pointermove",u),e.removeEventListener("pointerup",g),e.removeEventListener("pointercancel",g),this.host.persistDiagramModels(),this.host.renderDocument()};e.addEventListener("pointermove",u),e.addEventListener("pointerup",g),e.addEventListener("pointercancel",g)}moveNodeCalloutPointer(e,t,n){let o=Y(n.getAttribute("data-diagram-index")||void 0),i=n.getAttribute("data-node-id")||"",s=le(this.host.state,o),a=s?ce(s,i)?.node:null,c=n.closest(".docdiagram-node");if(!s||!a||!c)return;t.preventDefault(),t.stopPropagation(),this.capturePointer(e,t);let d=se(s),l=Ke(s,a),u=fe(a,l.x,l.y,l.width,l.height),g=Tr(s,a),h=m=>{let p=this.svgPoint(e,m),S={x:H(p.x,d),y:H(p.y,d)};tr(a,S),this.updateNodeCalloutMarkup(c,l,S,u.bodyMarkup,g)},b=m=>{this.releasePointer(e,m),e.removeEventListener("pointermove",h),e.removeEventListener("pointerup",b),e.removeEventListener("pointercancel",b),Ze(s,a),this.host.persistDiagramModels(),this.host.renderDocument()};e.addEventListener("pointermove",h),e.addEventListener("pointerup",b),e.addEventListener("pointercancel",b)}updateNodeCalloutMarkup(e,t,n,o,i){let s=n?Rt(t,n):null;if(!s)return;for(let l of e.querySelectorAll(".docdiagram-node-callout, .docdiagram-node-callout-outline"))l.setAttribute("points",s.polygonPoints);let a=e.querySelector(".docdiagram-node-callout-mask-body");a&&(a.outerHTML=wr(o));let c=Er(s,i);for(let l of[e.querySelector("mask"),e.querySelector(".docdiagram-node-callout-mask-region")])for(let[u,g]of Object.entries(c))l?.setAttribute(u,String(g));let d=e.querySelector(".docdiagram-callout-handle");d?.setAttribute("cx",String(n?.x??0)),d?.setAttribute("cy",String(n?.y??0))}svgPoint(e,t){let n=e.getBoundingClientRect(),o=e.viewBox.baseVal;return{x:(t.clientX-n.left)*o.width/n.width,y:(t.clientY-n.top)*o.height/n.height}}capturePointer(e,t){t.isTrusted&&e.setPointerCapture(t.pointerId)}releasePointer(e,t){t.isTrusted&&e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId)}};function jn(r,e,t,n){let o=Ce[r]?.[e==="dark"?"dark":"light"];return[[...Ae.slice(0,5),"none"],Ae.slice(5,8),Ae.slice(8,13)].map(i=>`<div class="docdiagram-palette-group">${i.map(s=>{let a=o?.[s];return`<label class="docdiagram-palette-swatch"><input type="radio" name="${n}" value="${s}"${s===t?" checked":""}><span style="--docdiagram-swatch-fill:${a?.fill};--docdiagram-swatch-stroke:${a?.stroke};--docdiagram-swatch-text:${a?.text}">${a?.label||s}</span></label>`}).join("")}</div>`).join("")}function On(r,e,t="classic",n="light"){let o=se(r),i=je(r,e,n,t),s=Number(e.size?.width)||190,a=Number(e.size?.height)||80,c=e.shape==="document"?{width:140,height:84}:{width:120,height:60},d=o?Math.ceil(c.width/o)*o:c.width,l=o?Math.ceil(c.height/o)*o:c.height,u=o||1,g=e.palette||"accent";return[`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-inspector-label docdiagram-inspector-textarea" rows="2">${v(e.label)}</textarea></label>`,`<label class="docdiagram-field docdiagram-field-wide">Subtitle<textarea class="docdiagram-inspector-subtitle docdiagram-inspector-textarea" rows="2">${v(e.subtitle||"")}</textarea></label>`,`<div class="docdiagram-field docdiagram-field-wide"><span>Palette</span><div class="docdiagram-inspector-palette">${jn(t,n,g,"node-palette")}</div></div>`,`<label class="docdiagram-inspector-shape-row"><span>Shape</span><select class="docdiagram-inspector-shape">${pt.map(h=>`<option value="${h}"${h===e.shape?" selected":""}>${h}</option>`).join("")}</select></label>`,`<div class="docdiagram-inspector-row docdiagram-inspector-colour-row"><span>Fill</span><input type="color" class="docdiagram-inspector-fill" value="${v(i.fill||"")}"><span>Stroke</span><input type="color" class="docdiagram-inspector-stroke" value="${v(i.stroke||"")}"><label class="docdiagram-visually-hidden" for="docdiagram-inspector-stroke-width">Stroke width</label><input id="docdiagram-inspector-stroke-width" type="number" aria-label="Stroke width" class="docdiagram-inspector-stroke-width" value="${Number(i.strokeWidth)||2}" min="1" step="1"></div>`,`<label class="docdiagram-inspector-text-row"><span>Text</span><input type="color" class="docdiagram-inspector-text" value="${v(i.text||"")}"></label>`,`<div class="docdiagram-inspector-paired-controls"><span>Align</span><label class="docdiagram-visually-hidden" for="docdiagram-inspector-text-v-align">Vertical alignment</label><select id="docdiagram-inspector-text-v-align" class="docdiagram-inspector-text-v-align" aria-label="Vertical alignment"><option value="top"${e.textVAlign==="top"?" selected":""}>Top</option><option value="center"${e.textVAlign!=="top"?" selected":""}>Middle</option></select><label class="docdiagram-visually-hidden" for="docdiagram-inspector-text-h-align">Horizontal alignment</label><select id="docdiagram-inspector-text-h-align" class="docdiagram-inspector-text-h-align" aria-label="Horizontal alignment"><option value="left"${e.textHAlign==="left"?" selected":""}>Left</option><option value="center"${e.textHAlign!=="left"&&e.textHAlign!=="right"?" selected":""}>Center</option><option value="right"${e.textHAlign==="right"?" selected":""}>Right</option></select><span>Size</span><label class="docdiagram-visually-hidden" for="docdiagram-inspector-width">Width</label><input id="docdiagram-inspector-width" type="number" aria-label="Width" class="docdiagram-inspector-width" value="${s}" min="${d}" step="${u}"><label class="docdiagram-visually-hidden" for="docdiagram-inspector-height">Height</label><input id="docdiagram-inspector-height" type="number" aria-label="Height" class="docdiagram-inspector-height" value="${a}" min="${l}" step="${u}"><span>Callout</span><button type="button" class="docdiagram-inspector-callout">${e.arrow?"Remove pointer":"Add pointer"}</button><span></span><button type="button" class="docdiagram-inspector-delete">Delete</button><button type="button" class="docdiagram-inspector-duplicate">Duplicate</button></div>`].join("")}function Gn(r,e){let t=xt(r,e),n=Number(t.strokeWidth)||2,o=e.route||"orthogonal",i=e.start||"none",s=e.end||"arrow";return[`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-inspector-label docdiagram-inspector-textarea" rows="2">${v(e.label||"")}</textarea></label>`,`<label class="docdiagram-field">Route<select class="docdiagram-inspector-route">${ft.map(a=>`<option value="${a}"${a===o?" selected":""}>${a}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Source side<select class="docdiagram-inspector-source-anchor">${Me.map(a=>`<option value="${a}"${a===e.sourceAnchor?" selected":""}>${a}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Target side<select class="docdiagram-inspector-target-anchor">${Me.map(a=>`<option value="${a}"${a===e.targetAnchor?" selected":""}>${a}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Start<select class="docdiagram-inspector-marker-start">${ve.map(a=>`<option value="${a}"${a===i?" selected":""}>${a}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">End<select class="docdiagram-inspector-marker-end">${ve.map(a=>`<option value="${a}"${a===s?" selected":""}>${a}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Stroke<input type="color" class="docdiagram-inspector-stroke" value="${v(t.stroke||"")}"></label>`,`<label class="docdiagram-field">Label colour<input type="color" class="docdiagram-inspector-text" value="${v(t.text||"")}"></label>`,`<label class="docdiagram-field">Stroke width<input type="number" class="docdiagram-inspector-stroke-width" value="${n}" min="1" step="1"></label>`,`<div class="docdiagram-inspector-actions">${e.waypoint?'<button type="button" class="docdiagram-inspector-clear-waypoint">Remove waypoint</button>':""}<button type="button" class="docdiagram-inspector-delete">Delete</button></div>`].join("")}function Vn(r,e,t,n="classic",o="light"){let i="from"in t?null:Xe(r,t,o,n),s=e.kind!=="message",a=s?t:null;return[`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-sequence-inspector-label docdiagram-inspector-textarea" rows="2">${v(t.label||"")}</textarea></label>`,e.kind==="message"?`<label class="docdiagram-field">Style<select class="docdiagram-sequence-inspector-message-style"><option value="solid"${t.style!=="dashed"?" selected":""}>Solid</option><option value="dashed"${t.style==="dashed"?" selected":""}>Dashed</option></select></label>`:"",s?`<div class="docdiagram-field docdiagram-field-wide"><span>Palette</span><div class="docdiagram-sequence-inspector-palette">${jn(n,o,a?.palette||"accent","sequence-palette")}</div></div>`:"",s?`<label class="docdiagram-field">Fill<input type="color" class="docdiagram-sequence-inspector-fill" value="${v(i?.fill||"")}"></label><label class="docdiagram-field">Border<input type="color" class="docdiagram-sequence-inspector-stroke" value="${v(i?.stroke||"")}"></label><label class="docdiagram-field">Text<input type="color" class="docdiagram-sequence-inspector-text" value="${v(i?.text||"")}"></label><label class="docdiagram-field">Width<input type="number" min="1" class="docdiagram-sequence-inspector-width" value="${Number(a?.size?.width)||""}"></label><label class="docdiagram-field">Height<input type="number" min="1" class="docdiagram-sequence-inspector-height" value="${Number(a?.size?.height)||""}"></label>`:""].join("")}function Li(r,e){return r.querySelector(e)}function W(r,e,t){Li(r,e)?.addEventListener("change",n=>{t(n.currentTarget.value)})}function We(r,e){e(),r.persistDiagramModels(),r.renderDocument()}function Pi(r,e){e(),r.persistDiagramModels()}function Hn(r,e,t,n){r&&r.addEventListener("input",()=>{t(r.value);let o=r.value,i=r.selectionStart,s=r.selectionEnd;n(r,()=>{let a=document.querySelector(e);a&&a.value!==o&&(a.value=o),a?.focus(),a?.setSelectionRange(i,s)})})}function Un(r,e,t,n){let o=null,i=(c,d)=>{globalThis.clearTimeout(o??void 0),o=globalThis.setTimeout(()=>{o=null;let l=document.activeElement===c;r.renderDocument(),l&&d()},250)},s=c=>{let d=r.state.diagramModels[t];if(!d||d.type!=="flowchart")return;let l=ce(d,n)?.node;l&&We(r,()=>c(d,l))},a=c=>{let d=r.state.diagramModels[t];if(!d||d.type!=="flowchart")return;let l=ce(d,n)?.node;l&&Pi(r,()=>c(d,l))};Hn(e.querySelector(".docdiagram-inspector-label"),".docdiagram-inspector-label",c=>a((d,l)=>$t(l,c)),i),Hn(e.querySelector(".docdiagram-inspector-subtitle"),".docdiagram-inspector-subtitle",c=>a((d,l)=>Kr(l,c)),i);for(let c of e.querySelectorAll(".docdiagram-inspector-palette input"))c.addEventListener("change",()=>s((d,l)=>Jt(l,c.value,r.state.documentColorScheme)));W(e,".docdiagram-inspector-shape",c=>s((d,l)=>Xr(l,c))),W(e,".docdiagram-inspector-fill",c=>s((d,l)=>st(l,"fill",c))),W(e,".docdiagram-inspector-stroke",c=>s((d,l)=>st(l,"stroke",c))),W(e,".docdiagram-inspector-text",c=>s((d,l)=>st(l,"text",c))),W(e,".docdiagram-inspector-text-v-align",c=>s((d,l)=>Zt(l,"textVAlign",c))),W(e,".docdiagram-inspector-text-h-align",c=>s((d,l)=>Zt(l,"textHAlign",c))),W(e,".docdiagram-inspector-stroke-width",c=>s((d,l)=>or(l,c))),W(e,".docdiagram-inspector-width",c=>s((d,l)=>er(d,l,"width",c))),W(e,".docdiagram-inspector-height",c=>s((d,l)=>er(d,l,"height",c))),e.querySelector(".docdiagram-inspector-callout")?.addEventListener("click",()=>{s((c,d)=>tn(c,d))}),e.querySelector(".docdiagram-inspector-delete")?.addEventListener("click",()=>{s((c,d)=>{kt(c,d.id),r.state.selectedNode=null})}),e.querySelector(".docdiagram-inspector-duplicate")?.addEventListener("click",()=>{s((c,d)=>{let l=St(c,d.id);l&&(r.state.selectedNode={diagramIndex:t,nodeId:l.id})})})}function Wn(r,e,t,n){let o=i=>{let s=r.state.diagramModels[t];if(!s||s.type!=="flowchart")return;let a=s.edges[n];a&&We(r,()=>i(s,a))};W(e,".docdiagram-inspector-label",i=>o((s,a)=>Ft(a,i))),W(e,".docdiagram-inspector-route",i=>o((s,a)=>Qr(a,i))),W(e,".docdiagram-inspector-source-anchor",i=>o((s,a)=>rr(a,"source",i))),W(e,".docdiagram-inspector-target-anchor",i=>o((s,a)=>rr(a,"target",i))),W(e,".docdiagram-inspector-marker-start",i=>o((s,a)=>rn(a,i))),W(e,".docdiagram-inspector-marker-end",i=>o((s,a)=>nn(a,i))),W(e,".docdiagram-inspector-stroke",i=>o((s,a)=>nr(a,"stroke",i))),W(e,".docdiagram-inspector-text",i=>o((s,a)=>nr(a,"text",i))),W(e,".docdiagram-inspector-stroke-width",i=>o((s,a)=>or(a,i))),e.querySelector(".docdiagram-inspector-clear-waypoint")?.addEventListener("click",()=>{o((i,s)=>en(s))}),e.querySelector(".docdiagram-inspector-delete")?.addEventListener("click",()=>{o(i=>{vt(i,n),r.state.selectedEdge=null})})}function Yn(r,e,t){let n=r.state.selectedSequenceElement;if(!n)return;if(W(e,".docdiagram-sequence-inspector-label",i=>We(r,()=>{t.label=i.trim()||t.label})),n.kind==="message"){W(e,".docdiagram-sequence-inspector-message-style",i=>We(r,()=>{t.style=i}));return}let o=t;for(let i of e.querySelectorAll(".docdiagram-sequence-inspector-palette input"))i.addEventListener("change",()=>We(r,()=>Jt(o,i.value,r.state.documentColorScheme)));for(let[i,s]of[[".docdiagram-sequence-inspector-fill","fill"],[".docdiagram-sequence-inspector-stroke","stroke"],[".docdiagram-sequence-inspector-text","text"]])W(e,i,a=>We(r,()=>st(o,s,a)));for(let[i,s]of[[".docdiagram-sequence-inspector-width","width"],[".docdiagram-sequence-inspector-height","height"]])W(e,i,a=>We(r,()=>{let c=Number(a);Number.isFinite(c)&&c>0&&(o.size={...o.size,[s]:c})}))}var Ri="https://sparkkz-nz.github.io/skryb/docs/reference.html",Lr=192,Bi=96,_n=24,qi=8e6,Ii={flowchart:["```diagram","id: new-flowchart","type: flowchart","canvas:","  auto: true","  grid: 5","nodes:","  - id: first-node","    label: First node","    shape: rounded-rectangle","    position: { x: 80, y: 110 }","  - id: second-node","    label: Second node","    shape: rounded-rectangle","    position: { x: 330, y: 110 }","edges:","  - source: first-node","    target: second-node","    sourceAnchor: right","    targetAnchor: left","```"].join(`
`),sequence:["```diagram","id: new-sequence","type: sequence","participants:","  - id: first-participant","    label: First participant","  - id: second-participant","    label: Second participant","messages:","  - from: first-participant","    to: second-participant","    label: Request","```"].join(`
`),"diagram-reference":":::diagram { id=diagram-id }",toc:":::toc { depth=3 diagrams=true }",panel:[':::panel { title="New panel" palette=accent }',"Panel content.",":::"].join(`
`),grid:[":::grid { columns=2 }",':::panel { title="First panel" }',"First panel content.",":::","",':::panel { title="Second panel" }',"Second panel content.",":::",":::"].join(`
`)};function Ht(r,e){let t=new Set([...r.matchAll(/(?:\bid:\s*|:::diagram\s+\{\s*id=)(?:"([^"]+)"|([^\s}\n#]+))/g)].map(i=>i[1]||i[2])),n=1,o=e;for(;t.has(o);)n+=1,o=`${e}-${n}`;return o}function zi(r,e){let t=Ii[r];if(!t)return null;if(r==="flowchart")return t.replace("id: new-flowchart",`id: ${Ht(e,"new-flowchart")}`);if(r==="sequence")return t.replace("id: new-sequence",`id: ${Ht(e,"new-sequence")}`);if(r==="diagram-reference"){let n=Ht(e,"diagram-reference");return t.replace("diagram-id",n)}return t}function Hi(r){if(!/<template[^>]*\bid=["']?source\b/i.test(r))return r;let t=new DOMParser().parseFromString(r,"text/html").querySelector("template#source");if(!t)throw new Error("That Skryb document has no source template to import from.");return t.content.textContent||""}function ji(){return new Promise(r=>{let e=document.createElement("input");e.type="file",e.accept=".html,.htm,.md,.markdown,text/html,text/markdown",e.hidden=!0;let t=n=>{e.remove(),r(n)};e.addEventListener("change",()=>t(e.files?.[0]||null),{once:!0}),e.addEventListener("cancel",()=>t(null),{once:!0}),document.body.append(e),e.click()})}function Oi(r){if(r.length<=1)return r[0]||null;let e=r.map((o,i)=>`${i+1}. ${o.id||"(no id)"}`).join(`
`),t=globalThis.prompt(`That file has ${r.length} diagrams. Import which one?

${e}`,"1");if(t===null)return null;let n=Number.parseInt(t.trim(),10);if(!Number.isInteger(n)||n<1||n>r.length)throw new Error(`Enter a number between 1 and ${r.length}.`);return r[n-1]}var jt=class{constructor(e){this.host=e;this.renderTimer=null;this.resizeObserver=null;this.openState=!1;this.draft="";this.error=""}get isOpen(){return this.openState}get hasUnsavedDraft(){return this.openState&&this.draft!==this.host.getSource()}get hasError(){return this.error.length>0}get draftSource(){return this.draft}setError(e){this.error=e,this.updateStatus()}clearError(){this.error=""}open(){globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=null,this.draft=this.host.getSource(),this.error="",this.openState=!0,this.host.stopDiagramEditing(),this.host.renderDocument();let e=()=>this.focus();globalThis.requestAnimationFrame?.(e)??e()}close(){this.flushRender(),!(this.error&&this.draft!==this.host.getSource()&&!globalThis.confirm("Discard the invalid source changes?"))&&(this.openState=!1,this.draft="",this.error="",this.renderTray(),document.querySelector(".docdiagram-menu-toggle")?.focus())}flushRender(){return this.renderTimer===null?!0:this.renderDraft()}syncSource(e){if(!this.openState)return;this.draft=e,this.error="";let t=document.querySelector(".docdiagram-source-editor");if(!t)return;let n=t.selectionStart,o=t.selectionEnd,i=t.scrollTop;t.value=e,t.setSelectionRange(Math.min(n,e.length),Math.min(o,e.length)),t.scrollTop=i,this.updateStatus()}reveal(e){let t=bn(this.host.getSource(),e);if(!t||this.hasUnsavedDraft)return!1;this.openState||this.open();let n=()=>{let o=document.querySelector(".docdiagram-source-editor");o&&(o.focus(),o.setSelectionRange(t.start,t.end),yn(o,t))};return globalThis.requestAnimationFrame?.(n)??n(),!0}renderTray(){let e=document.querySelector(".docdiagram-source-tray");if(!this.openState){this.resizeObserver?.disconnect(),this.resizeObserver=null,e?.remove(),delete this.host.outputElement.dataset.sourceEditorOpen,this.host.outputElement.style.removeProperty("--docdiagram-source-tray-height");return}if(e){e.dataset.theme=this.host.getDocumentTheme(),this.host.outputElement.dataset.sourceEditorOpen="true",this.updateStatus();return}e=document.createElement("section"),e.className="docdiagram-source-tray",e.dataset.theme=this.host.getDocumentTheme(),e.setAttribute("aria-label","Document source editor"),e.innerHTML=['<div class="docdiagram-source-resize" role="separator" aria-orientation="horizontal" aria-label="Resize source editor" tabindex="0" title="Drag to resize"></div>','<header class="docdiagram-source-header">','<div><strong>Source</strong><span class="docdiagram-source-shortcut">Cmd/Ctrl+Shift+E to close</span></div>','<div class="docdiagram-source-actions">','<button type="button" class="docdiagram-source-menu-toggle" aria-label="Source editor menu" aria-expanded="false" title="Source editor menu">\u2630</button>','<div class="docdiagram-source-menu" hidden>','<div class="docdiagram-source-menu-heading">Insert</div>','<button type="button" data-source-template="flowchart">Flowchart</button>','<button type="button" data-source-template="sequence">Sequence</button>','<button type="button" data-source-template="diagram-reference">Diagram Reference</button>','<button type="button" data-source-template="toc">Contents</button>','<button type="button" class="docdiagram-source-import">Import diagram\u2026</button>','<button type="button" data-source-template="panel">Panel</button>','<button type="button" data-source-template="grid">Grid</button>','<button type="button" class="docdiagram-source-help">Help</button>',"</div>",'<button type="button" class="docdiagram-source-close" aria-label="Close source editor" title="Close source editor">\xD7</button>',"</div>","</header>",'<label class="docdiagram-source-label">Canonical Markdown<textarea class="docdiagram-source-editor" spellcheck="false"></textarea></label>','<p class="docdiagram-source-status" aria-live="polite"></p>','<p class="docdiagram-source-error" role="alert"></p>'].join("");let t=e.querySelector(".docdiagram-source-editor"),n=e.querySelector(".docdiagram-source-close"),o=e.querySelector(".docdiagram-source-menu-toggle"),i=e.querySelector(".docdiagram-source-menu");if(!t||!n||!o||!i)return;t.value=this.draft,t.addEventListener("input",()=>{this.draft=t.value,this.error="",this.updateStatus(),this.scheduleRender()}),n.addEventListener("click",()=>this.close()),o.addEventListener("click",()=>{let a=i.hidden;i.hidden=!a,o.setAttribute("aria-expanded",String(a))});for(let a of e.querySelectorAll("[data-source-template]"))a.addEventListener("click",()=>{let c=zi(a.dataset.sourceTemplate||"",t.value);c&&(this.insertTemplate(t,c),i.hidden=!0,o.setAttribute("aria-expanded","false"))});e.querySelector(".docdiagram-source-import")?.addEventListener("click",async a=>{let c=a.currentTarget;i.hidden=!0,o.setAttribute("aria-expanded","false"),c.disabled=!0;try{await this.importDiagram(t)}catch(d){let l=d instanceof Error?d.message:String(d);globalThis.alert(`Import diagram failed: ${l}`)}finally{c.disabled=!1}}),e.querySelector(".docdiagram-source-help")?.addEventListener("click",()=>{globalThis.open(Ri,"_blank","noopener")}),e.addEventListener("keydown",a=>{a.key==="Escape"&&!i.hidden&&(a.preventDefault(),i.hidden=!0,o.setAttribute("aria-expanded","false"),o.focus())}),this.host.outputElement.after(e),this.host.outputElement.dataset.sourceEditorOpen="true";let s=()=>{this.host.outputElement.style.setProperty("--docdiagram-source-tray-height",`${e?.offsetHeight||0}px`)};this.attachResizeHandle(e,s),this.resizeObserver?.disconnect(),globalThis.ResizeObserver&&(this.resizeObserver=new globalThis.ResizeObserver(s),this.resizeObserver.observe(e)),s(),this.updateStatus()}attachResizeHandle(e,t){let n=e.querySelector(".docdiagram-source-resize");if(!n)return;let o=s=>{let a=globalThis.innerHeight||0,c=a?Math.max(Lr,a-Bi):s;return Math.min(Math.max(s,Lr),c)},i=s=>{e.style.height=`${o(s)}px`,t()};n.addEventListener("pointerdown",s=>{if(s.button!==0)return;s.preventDefault();let a=s.clientY,c=e.offsetHeight;e.dataset.resizing="true",n.setPointerCapture?.(s.pointerId);let d=u=>{i(c-(u.clientY-a))},l=()=>{n.removeEventListener("pointermove",d),n.removeEventListener("pointerup",l),n.removeEventListener("pointercancel",l),delete e.dataset.resizing,n.releasePointerCapture?.(s.pointerId)};n.addEventListener("pointermove",d),n.addEventListener("pointerup",l),n.addEventListener("pointercancel",l)}),n.addEventListener("keydown",s=>{let a=s.shiftKey?_n*4:_n;s.key==="ArrowUp"?(s.preventDefault(),i(e.offsetHeight+a)):s.key==="ArrowDown"?(s.preventDefault(),i(e.offsetHeight-a)):s.key==="Home"?(s.preventDefault(),i(Number.MAX_SAFE_INTEGER)):s.key==="End"&&(s.preventDefault(),i(Lr))}),n.addEventListener("dblclick",()=>{e.style.removeProperty("height"),t()})}scheduleRender(){globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=globalThis.setTimeout(()=>{this.renderTimer=null,this.renderDraft()},250)}renderDraft(){return globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=null,this.host.renderDocument(this.draft,{preserveOnError:!0})}updateStatus(){let e=document.querySelector(".docdiagram-source-tray");if(!e)return;let t=e.querySelector(".docdiagram-source-status"),n=e.querySelector(".docdiagram-source-error");!t||!n||(t.textContent=this.error?"Source has errors; showing the last valid render.":"Changes render automatically.",n.hidden=!this.error,n.textContent=this.error)}insertTemplate(e,t){let n=e.selectionStart,o=e.selectionEnd,i=e.value.lastIndexOf(`
`,n-1)+1,s=e.value.indexOf(`
`,n),a=s===-1?e.value.length:s,c=e.value.slice(i,a),d=/^\s*$/.test(c)?n:a,l=/^\s*$/.test(c)?o:a,u=d===a?`
${t}`:t;e.setRangeText(u,d,l,"end"),this.draft=e.value,this.error="",this.updateStatus(),this.scheduleRender(),e.focus()}async importDiagram(e){let t=await ji();if(!t)return;if(t.size>qi)throw new Error("That file is too large to import.");let n=Ct(Hi(await t.text()));if(!n.length)throw new Error("That file has no diagrams to import.");let o=Oi(n);if(!o)return;$e(o.source,this.host.getDocumentColourScheme());let i=Ht(e.value,o.id||"imported-diagram");this.insertTemplate(e,`\`\`\`diagram
${gn(o.source,i)}
\`\`\``)}focus(){let e=document.querySelector(".docdiagram-source-editor");e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))}};var Pr="data-docdiagram-offline-runtime-placeholder",Xn='script[data-docdiagram-runtime="embedded"]',Gi="https://sparkkz-nz.github.io/skryb/latest/skryb-runtime.js";function Vi(){let r=globalThis;return typeof r.DocDiagramRuntimeSource=="string"?r.DocDiagramRuntimeSource:null}function Rr(r){return/^https?:\/\//i.test(r)?r:Gi}async function Ui(r,e=globalThis.fetch.bind(globalThis)){let t=await e(r);if(!t.ok)throw new Error(`Could not fetch the Skryb runtime (${t.status||"unknown status"}).`);return t.text()}function Kn(r,e,t=""){let n=new RegExp(`<script\\b[^>]*\\b${Pr}\\b[^>]*>[\\s\\S]*?<\\/script>\\s*`,"i");if(!n.test(r))throw new Error("Could not find the selected Skryb runtime in this document.");let o=r.replace(n,""),i=/<\/body\s*>/i;if(!i.test(o))throw new Error("Could not find the document body for offline export.");let s=e.replace(/<\/script/gi,"<\\/script"),c=`<script data-docdiagram-runtime="embedded"${t?` data-docdiagram-runtime-url="${Wi(t)}"`:""}>
${s}
<\/script>
`;return o.replace(i,()=>`${c}</body>`)}async function Zn(r,e){let t=r.querySelector(Xn);if(t)return t.setAttribute(Pr,""),{source:t.textContent||"",runtimeUrl:Rr(t.dataset.docdiagramRuntimeUrl||"")};let n=Array.from(r.querySelectorAll("script[src]")).find(i=>{try{let s=new URL(i.getAttribute("src")||"",r.ownerDocument.baseURI).pathname;return/\/skryb-runtime(?:-self-packaged)?\.js$/i.test(s)}catch{return!1}});if(!n)throw new Error("Could not find the selected Skryb runtime in this document.");return n.setAttribute(Pr,""),{source:Vi()||await Ui(n.src,e),runtimeUrl:Rr(n.getAttribute("src")||n.src)}}function Br(r){let e=r.querySelector(Xn);if(!e)return;let t=Rr(e.dataset.docdiagramRuntimeUrl||""),n=r.ownerDocument.createElement("script");n.src=t,n.defer=!0,e.replaceWith(n)}function Wi(r){return r.replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function Jn(r){return r instanceof Element&&r.matches("input, textarea, select, [contenteditable]")}function Yi(r){let e=r.querySelector("svg");if(!e||typeof e.getBBox!="function")return null;let t;try{t=e.getBBox()}catch{return null}let n=e.viewBox?.baseVal?.height||0,o=e.getBoundingClientRect();if(!n||!o.height||!t.height)return null;let i=o.height/n,s=getComputedStyle(r),a=o.top-r.getBoundingClientRect().top+r.scrollTop,c=(parseFloat(s.paddingBottom)||0)+(parseFloat(s.borderBottomWidth)||0),d=Math.min(Math.max(t.y,0),40)*i,l=Math.ceil(a+(t.y+t.height)*i+d+c);return Math.min(l,r.offsetHeight)}var _i="template[data-skryb-lint]",Ot=class{constructor(e,t){this.sourceElement=e;this.outputElement=t;this.state=zn();this.pendingViewportFits=new Set;this.autoFittedDiagrams=new Map;this.viewportRefitTimer=null;this.lintReportUnsaved=!1;this.sourceEditor=t?new jt({outputElement:t,getSource:()=>this.getSource(),getDocumentTheme:()=>this.getDocumentTheme(),getDocumentColourScheme:()=>this.state.documentColorScheme,renderDocument:(n,o)=>this.renderDocument(n,o),stopDiagramEditing:()=>this.stopDiagramEditing(),closeDocumentMenu:()=>this.closeDocumentMenu()}):null,this.diagramEditor=t?new zt({outputElement:t,state:this.state,persistDiagramModels:()=>this.persistDiagramModels(),renderDocument:()=>this.renderDocument()}):null}getSource(){return this.sourceElement?.content.textContent||""}setSource(e){this.sourceElement?.content.replaceChildren(document.createTextNode(e))}getDocumentTheme(){return this.state.documentTheme}stopDiagramEditing(){this.state.editingDiagramIndex!==null&&(this.state.editingDiagramIndex=null,this.state.editSessionDiagram=null,Ve(this.state))}renderDiagram(e,t,n){return qn(e,t,{figure:n,colourScheme:this.state.documentColorScheme,state:{...this.state,documentTheme:this.state.documentTheme,documentColorScheme:this.state.documentColorScheme},onDiagram:(o,i)=>{this.state.diagramModels[o]=i}})}renderMarkdown(e,t={diagramIndex:0}){return Dr(e,t,{renderDiagram:(n,o,i)=>this.renderDiagram(n,o,i),documentColorScheme:this.state.documentColorScheme,documentTheme:this.state.documentTheme})}persistDiagramModels(){let e=0,t=this.getSource().replace(/\r\n/g,`
`),n=new Map;for(let s of this.state.diagramModels){let a=s.id;typeof a=="string"&&n.set(a,[...n.get(a)||[],s])}let o=new Map([...n].flatMap(([s,a])=>a.length===1?[[s,a[0]]]:[])),i=t.replace(/^((?: {0,3}> ?)*)```diagram\s*\n([\s\S]*?)^((?: {0,3}> ?)*)```$/gm,(s,a,c,d)=>{let u=c.replace(/^(?: {0,3}> ?)+/gm,"").match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m)?.slice(1).find(Boolean),g=u&&o.get(u)||this.state.diagramModels[e];e+=1;let h=g?Qe(g):"",b=h?h.split(`
`).map(m=>`${a}${m}`).join(`
`):"";return`${a}\`\`\`diagram
${b?`${b}
`:""}${d}\`\`\``});this.setSource(i),this.sourceEditor?.syncSource(i)}renderDocument(e=this.getSource(),{preserveOnError:t=!1}={}){if(!this.outputElement)return!1;for(let u of this.outputElement.querySelectorAll(".docdiagram")){let g=Number(u.dataset.diagramIndex);if(this.pendingViewportFits.has(g)){this.state.diagramViewportHeights.delete(g);continue}g!==this.state.expandedDiagramIndex&&this.state.diagramViewportHeights.set(g,u.offsetHeight)}let n={x:globalThis.scrollX||0,y:globalThis.scrollY||0},o=[...this.state.diagramModels],i=this.state.documentTheme,s=this.state.documentThemeSetting,a=this.state.documentColorScheme,c=this.state.documentDoctype;this.state.diagramModels.length=0;let d;try{let u=t?At(e):dt(e);this.state.documentTheme=u.resolvedTheme,this.state.documentThemeSetting=u.theme,this.state.documentColorScheme=u.colourScheme,this.state.documentDoctype=u.doctype,d=this.renderMarkdown(u.content),this.state.expandedDiagramIndex!==null&&!this.state.diagramModels[this.state.expandedDiagramIndex]&&(this.state.expandedDiagramIndex=null,this.state.diagramModels.length=0,d=this.renderMarkdown(u.content))}catch(u){let g=u instanceof Error?u.message:String(u);return this.state.diagramModels.length=0,this.state.diagramModels.push(...o),t?(this.state.documentTheme=i,this.state.documentThemeSetting=s,this.state.documentColorScheme=a,this.state.documentDoctype=c,this.sourceEditor?.setError(g),!1):(this.applyPageTheme(this.state.documentTheme),this.removeToolbarChrome(),this.outputElement.innerHTML=`<section class="docdiagram-error"><strong>Document could not be rendered.</strong><br>${v(g)}</section>`,this.sourceEditor?.renderTray(),!1)}this.setSource(e),this.sourceEditor?.clearError(),this.outputElement.dataset.theme=this.state.documentTheme,this.outputElement.dataset.colourScheme=this.state.documentColorScheme,this.applyDocumentColourScheme(this.outputElement),this.outputElement.dataset.format=this.state.documentFormat,this.applyPageTheme(this.state.documentTheme),this.outputElement.innerHTML=d,this.removeToolbarChrome(),this.createToolbar(),this.sourceEditor?.renderTray();let l=document.querySelector(".docdiagram-source-tray");return l&&this.applyDocumentColourScheme(l),this.diagramEditor?.enableCanvasPanning(),this.diagramEditor?.enableSequenceSelection(),this.fitDiagramViewports(),this.state.editingDiagramIndex!==null&&this.diagramEditor?.enableEditing(),globalThis.scrollTo?.(n.x,n.y),!0}fitDiagramViewports(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram")){let t=Number(e.dataset.diagramIndex);if(this.state.diagramViewportHeights.has(t)||t===this.state.expandedDiagramIndex)continue;let n=Yi(e);n&&(this.state.diagramViewportHeights.set(t,n),this.autoFittedDiagrams.set(t,n),e.style.boxSizing="border-box",e.style.minHeight="0",e.style.height=`${n}px`)}this.pendingViewportFits.clear()}}refitDiagramViewports(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram")){let t=Number(e.dataset.diagramIndex),n=this.autoFittedDiagrams.get(t);if(!(n===void 0||t===this.state.expandedDiagramIndex)){if(e.offsetHeight!==n){this.autoFittedDiagrams.delete(t);continue}e.style.removeProperty("height"),e.style.removeProperty("min-height"),this.state.diagramViewportHeights.delete(t)}}this.fitDiagramViewports()}}closeDocumentMenu(){let e=document.querySelector(".docdiagram-menu"),t=document.querySelector(".docdiagram-menu-toggle");!e||!t||(e.hidden=!0,t.setAttribute("aria-expanded","false"))}bakeOnOpen(){let e=0,t=!1;try{let n=mr(this.getSource());e=n.baked,e&&this.setSource(n.source)}catch{t=!0}(e||t||this.lintRequestedByUrl())&&this.writeLintReport()}lintRequestedByUrl(){let e=globalThis.location?.search||"";return/(^|[?&])skryb-lint(=|&|$)/.test(e)}writeLintReport(){let e=this.getSource(),t;try{t=vr(e)}catch(o){t={messages:[{severity:"error",rule:"schema",message:o instanceof Error?o.message:String(o)}],errorCount:1,warningCount:0}}let n=document.querySelector(_i)||document.createElement("template");return n.dataset.skrybLint="",n.content.replaceChildren(document.createTextNode(JSON.stringify({errors:t.errorCount,warnings:t.warningCount,sourceHash:mn(e),messages:t.messages},null,2))),n.isConnected||document.body.append(n),this.lintReportUnsaved=!0,t}showLintReport(){let e=this.writeLintReport();if(!e)return;let t=`${e.errorCount} error${e.errorCount===1?"":"s"}, ${e.warningCount} warning${e.warningCount===1?"":"s"}`,n=Dn(e),o=document.querySelector(".docdiagram-lint-dialog")||document.body.appendChild(document.createElement("dialog"));o.className="docdiagram-lint-dialog",o.replaceChildren();let i=document.createElement("h2");i.textContent=`Document check: ${t}`;let s=document.createElement("pre");s.textContent=n||"Nothing to report. Every check passed.";let a=document.createElement("button");a.type="button",a.textContent="Close",a.addEventListener("click",()=>o.close()),o.append(i,s,a),o.showModal()}downloadDocument(){if(this.sourceEditor?.flushRender(),this.sourceEditor?.hasError&&this.sourceEditor.hasUnsavedDraft&&!globalThis.confirm("Source has errors. Save the last valid version instead?"))return;let e=this.createDocumentCopy();try{Br(e)}catch(t){let n=t instanceof Error?t.message:String(t);console.error("Save As failed.",t),globalThis.alert(`Save As failed: ${n}`);return}this.downloadHtml(e.outerHTML,"-edited"),this.state.savedSource=this.getSource(),this.lintReportUnsaved=!1}async downloadOfflineDocument(){if(this.sourceEditor?.flushRender(),this.sourceEditor?.hasError&&this.sourceEditor.hasUnsavedDraft&&!globalThis.confirm("Source has errors. Save the last valid version instead?"))return;let e=this.createDocumentCopy(),t=await Zn(e);this.downloadHtml(Kn(e.outerHTML,t.source,t.runtimeUrl),"-offline"),this.state.savedSource=this.getSource(),this.lintReportUnsaved=!1}createDocumentCopy(e=this.getSource()){let t=document.documentElement.cloneNode(!0),n=t.querySelector("#source"),o=t.querySelector(".docdiagram-toolbar"),i=t.querySelector(".docdiagram-source-tray"),s=t.querySelector("#rendered-document"),a=t.querySelector("body");n?.content.replaceChildren(document.createTextNode(e)),t.querySelector(".docdiagram-lint-dialog")?.remove(),o?.remove(),i?.remove();for(let c of t.querySelectorAll("style"))(c.dataset.docdiagramRuntimeStyles==="true"||c.textContent?.includes(".docdiagram-inline-editor")&&c.textContent.includes(".docdiagram-toolbar"))&&c.remove();t.removeAttribute("data-docdiagram-theme"),t.removeAttribute("data-docdiagram-expanded"),t.style.removeProperty("--docdiagram-page-background"),t.style.removeProperty("--docdiagram-page-text"),t.getAttribute("style")||t.removeAttribute("style"),a?.removeAttribute("data-docdiagram-theme"),s?.replaceChildren(),s?.removeAttribute("data-editing-shortcuts-bound");for(let c of[...s?.attributes||[]])(c.name==="style"||c.name.startsWith("data-"))&&s?.removeAttribute(c.name);return t}downloadHtml(e,t,n=""){let o=new Blob([`<!doctype html>
${e}`],{type:"text/html;charset=utf-8"}),i=document.createElement("a"),s=n||document.title.toLowerCase().replace(/[^\w]+/g,"-").replace(/^-|-$/g,"");i.href=URL.createObjectURL(o),i.download=`${s||"document"}${t}.html`,i.click(),URL.revokeObjectURL(i.href)}boot(){if(!(!this.sourceElement||!this.outputElement)){In(),this.state.savedSource=this.getSource(),this.bakeOnOpen(),globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.addEventListener("change",()=>{this.state.documentThemeSetting==="auto"&&this.renderDocument()}),globalThis.addEventListener("resize",()=>{this.viewportRefitTimer!==null&&clearTimeout(this.viewportRefitTimer),this.viewportRefitTimer=setTimeout(()=>{this.viewportRefitTimer=null,this.refitDiagramViewports()},150)}),globalThis.addEventListener("beforeunload",e=>{this.getSource()===this.state.savedSource&&!this.sourceEditor?.hasUnsavedDraft&&!this.lintReportUnsaved||(e.preventDefault(),e.returnValue="")}),document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.shiftKey&&e.key.toLowerCase()==="e"&&(this.sourceEditor?.isOpen||!Jn(e.target))){e.preventDefault(),this.sourceEditor?.isOpen?this.sourceEditor.close():this.sourceEditor?.open();return}if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="s"){e.preventDefault(),this.downloadDocument();return}e.key==="Escape"&&(this.closeDocumentMenu(),!e.defaultPrevented&&!Jn(e.target)&&this.state.expandedDiagramIndex!==null&&(e.preventDefault(),this.toggleDiagramExpansion(this.state.expandedDiagramIndex)))}),document.addEventListener("pointerdown",e=>{let t=document.activeElement;t instanceof HTMLTextAreaElement&&t.matches(".docdiagram-inline-editor")&&!(e.target instanceof Node&&t.contains(e.target))&&t.blur();let n=document.querySelector(".docdiagram-toolbar"),o=e.target instanceof Element&&e.target.closest(".docdiagram-diagram-toolbar")!==null;n&&e.target instanceof Node&&(!n.contains(e.target)||o)&&this.closeDocumentMenu(),e.target instanceof Node&&!(e.target instanceof Element&&e.target.closest(".docdiagram-diagram-export"))&&this.closeDiagramExportMenus(),!(!(e.target instanceof Element)||e.target.closest(".docdiagram-toolbar, .docdiagram-node, .docdiagram-edge-group, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-inline-editor, .docdiagram-sequence-participant, .docdiagram-sequence-note, .docdiagram-sequence-message")||!this.state.selectedNode&&!this.state.selectedEdge&&!this.state.selectedSequenceElement)&&(Ve(this.state),this.renderDocument())}),this.outputElement.addEventListener("dblclick",e=>{e.target instanceof Element&&e.target.closest("button, input, textarea, select, [contenteditable]")||this.sourceEditor?.reveal(globalThis.getSelection?.()?.toString()||"")});try{ct(this.getSource()).frontmatter.doctype==="diagram"&&(this.state.expandedDiagramIndex=0)}catch{this.state.expandedDiagramIndex=null}this.renderDocument()}}getCoreApi(){return{bakeDocumentSource:mr,spliceBakedFences:gr,lintDocument:vr}}createToolbar(){if(!this.outputElement)return;let e=document.createElement("section");e.className="docdiagram-toolbar",e.dataset.editing=String(this.state.editingDiagramIndex!==null),e.dataset.theme=this.state.documentTheme,e.dataset.colourScheme=this.state.documentColorScheme,e.dataset.format=this.state.documentFormat;let t=this.getSelectedNode(),n=t?null:this.getSelectedEdge(),o=!t&&!n?this.getSelectedSequenceElement():null,i=t&&this.state.selectedNode?this.state.diagramModels[this.state.selectedNode.diagramIndex]:n&&this.state.selectedEdge?this.state.diagramModels[this.state.selectedEdge.diagramIndex]:o&&this.state.selectedSequenceElement?this.state.diagramModels[this.state.selectedSequenceElement.diagramIndex]:null;e.innerHTML=['<button type="button" class="docdiagram-menu-toggle" aria-label="Document menu" aria-expanded="false" title="Document menu">\u2630</button>','<div class="docdiagram-menu" hidden>','<label class="docdiagram-theme-control">Theme<select class="docdiagram-theme-select">',`<option value="auto"${this.state.documentThemeSetting==="auto"?" selected":""}>Auto</option>`,`<option value="light"${this.state.documentThemeSetting==="light"?" selected":""}>Light</option>`,`<option value="dark"${this.state.documentThemeSetting==="dark"?" selected":""}>Dark</option>`,"</select></label>",`<label class="docdiagram-theme-control">Colour scheme<select class="docdiagram-colour-scheme-select">${Object.entries(Ce).map(([c,d])=>`<option value="${c}"${this.state.documentColorScheme===c?" selected":""}>${d.label}</option>`).join("")}</select></label>`,'<label class="docdiagram-theme-control">Format<select class="docdiagram-format-select">',`<option value="centered"${this.state.documentFormat==="centered"?" selected":""}>Centered</option>`,`<option value="full-width"${this.state.documentFormat==="full-width"?" selected":""}>Full width</option>`,"</select></label>",'<label class="docdiagram-theme-control">Opens as<select class="docdiagram-doctype-select">',`<option value="document"${this.state.documentDoctype==="document"?" selected":""}>Document</option>`,`<option value="diagram"${this.state.documentDoctype==="diagram"?" selected":""}>Diagram</option>`,"</select></label>",'<button type="button" class="docdiagram-edit-source">Edit source</button>','<button type="button" class="docdiagram-lint">Check document</button>','<button type="button" class="docdiagram-print-document">Print / Save as PDF</button>','<button type="button" class="docdiagram-save">Save As</button>','<button type="button" class="docdiagram-offline-save">Save for Offline</button>',"</div>",t&&i?.type==="flowchart"?`<div class="docdiagram-inspector" data-kind="node">${On(i,t,this.state.documentColorScheme,this.state.documentTheme)}</div>`:n&&i?`<div class="docdiagram-inspector" data-kind="edge">${Gn(i,n)}</div>`:o&&i?`<div class="docdiagram-inspector" data-kind="sequence">${Vn(i,this.state.selectedSequenceElement,o,this.state.documentColorScheme,this.state.documentTheme)}</div>`:""].join("");let s=e.querySelector(".docdiagram-menu-toggle"),a=e.querySelector(".docdiagram-menu");s?.addEventListener("click",()=>{if(!a)return;let c=a.hidden;a.hidden=!c,s.setAttribute("aria-expanded",String(c))}),e.querySelector(".docdiagram-print-document")?.addEventListener("click",()=>this.printDocument()),e.querySelector(".docdiagram-save")?.addEventListener("click",()=>this.downloadDocument()),e.querySelector(".docdiagram-offline-save")?.addEventListener("click",async c=>{let d=c.currentTarget;d.disabled=!0;try{await this.downloadOfflineDocument()}catch(l){let u=l instanceof Error?l.message:String(l);console.error("Offline export failed.",l),globalThis.alert(`Save for Offline failed: ${u}`)}finally{d.disabled=!1}}),e.querySelector(".docdiagram-edit-source")?.addEventListener("click",()=>{this.closeDocumentMenu(),this.sourceEditor?.open()}),e.querySelector(".docdiagram-lint")?.addEventListener("click",()=>{this.closeDocumentMenu(),this.showLintReport()}),e.querySelector(".docdiagram-theme-select")?.addEventListener("change",c=>{this.setSource(hn(this.getSource(),c.currentTarget.value)),this.renderDocument()}),e.querySelector(".docdiagram-colour-scheme-select")?.addEventListener("change",c=>{this.setSource(pn(this.getSource(),c.currentTarget.value)),this.renderDocument()}),e.querySelector(".docdiagram-format-select")?.addEventListener("change",c=>{this.state.documentFormat=c.currentTarget.value==="full-width"?"full-width":"centered",this.renderDocument()}),e.querySelector(".docdiagram-doctype-select")?.addEventListener("change",c=>{let d=c.currentTarget.value==="diagram"?"diagram":"document";this.setSource(fn(this.getSource(),d)),this.setExpandedDiagram(d==="diagram"?0:null),this.renderDocument()}),this.outputElement.before(e),this.applyDocumentColourScheme(e),t&&this.state.selectedNode?Un(this,e,this.state.selectedNode.diagramIndex,this.state.selectedNode.nodeId):n&&this.state.selectedEdge?Wn(this,e,this.state.selectedEdge.diagramIndex,this.state.selectedEdge.edgeIndex):o&&this.state.selectedSequenceElement&&Yn(this,e,o),this.wireChromeControls(),this.dockExpandedDiagramToolbar(e)}dockExpandedDiagramToolbar(e){if(this.state.expandedDiagramIndex===null)return;let t=this.outputElement?.querySelector(`.docdiagram[data-diagram-index="${this.state.expandedDiagramIndex}"] .docdiagram-diagram-toolbar`);t&&e.prepend(t)}getSelectedNode(){let e=this.state.selectedNode,t=e?this.state.diagramModels[e.diagramIndex]:null;return e&&t?.type==="flowchart"&&Ue(this.state,e.diagramIndex)&&ce(t,e.nodeId)?.node||null}getSelectedEdge(){let e=this.state.selectedEdge,t=e?this.state.diagramModels[e.diagramIndex]:null;return e&&t?.type==="flowchart"&&Ue(this.state,e.diagramIndex)&&t.edges[e.edgeIndex]||null}getSelectedSequenceElement(){let e=this.state.selectedSequenceElement,t=e?this.state.diagramModels[e.diagramIndex]:null;return!e||t?.type!=="sequence"||!Ue(this.state,e.diagramIndex)?null:e.kind==="participant"?t.participants?.find(n=>n.id===e.id)||null:e.kind==="message"?t.messages?.[e.index]||null:t.notes?.[e.index]||null}applyDocumentColourScheme(e){let t=he(this.state.documentColorScheme,this.state.documentTheme,"background"),n=he(this.state.documentColorScheme,this.state.documentTheme,"pale"),o=he(this.state.documentColorScheme,this.state.documentTheme,"neutral"),i=he(this.state.documentColorScheme,this.state.documentTheme,"accent");!t||!n||!o||!i||(e.style.setProperty("--docdiagram-background",t.fill||""),e.style.setProperty("--docdiagram-border",o.stroke||""),e.style.setProperty("--docdiagram-control-background",n.fill||""),e.style.setProperty("--docdiagram-control-hover",o.fill||""),e.style.setProperty("--docdiagram-code-background",n.fill||""),e.style.setProperty("--docdiagram-text",t.text||""),e.style.setProperty("--docdiagram-muted",o.text||""),e.style.setProperty("--docdiagram-accent",i.stroke||""))}wireChromeControls(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram-export-toggle"))e.addEventListener("click",()=>{let t=e.parentElement?.querySelector(".docdiagram-diagram-export-menu");if(!t)return;let n=t.hidden;this.closeDiagramExportMenus(),t.hidden=!n,e.setAttribute("aria-expanded",String(n))});for(let e of this.outputElement.querySelectorAll(".docdiagram-toggle-expand"))e.addEventListener("click",()=>this.toggleDiagramExpansion(Number(e.dataset.diagramIndex)));for(let e of this.outputElement.querySelectorAll(".docdiagram-open-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.openDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-save-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.downloadDiagramDocument(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-download-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.downloadDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-print-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.printDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-zoom-in, .docdiagram-zoom-out"))e.addEventListener("click",()=>{let t=Number(e.dataset.diagramIndex),n=this.state.diagramZooms.get(t)||100,o=e.classList.contains("docdiagram-zoom-in")?25:-25;this.state.diagramZooms.set(t,Et(n+o)),this.renderDocument()});for(let e of this.outputElement.querySelectorAll(".docdiagram-fit"))e.addEventListener("click",()=>{let t=Number(e.dataset.diagramIndex);this.state.diagramZooms.set(t,100),this.state.diagramCameraOffsets.delete(t),this.pendingViewportFits.add(t),this.renderDocument()});for(let e of this.outputElement.querySelectorAll(".docdiagram-start-editing"))e.addEventListener("click",()=>{let t=Number(e.dataset.diagramIndex),n=this.state.diagramModels[t];n&&(this.state.editSessionDiagram=$e(Qe(n),this.state.documentColorScheme),this.state.editingDiagramIndex=t,Ve(this.state),this.renderDocument())});for(let e of this.outputElement.querySelectorAll(".docdiagram-done-editing"))e.addEventListener("click",()=>this.exitEditing(this.state.editingDiagramIndex,!1));for(let e of this.outputElement.querySelectorAll(".docdiagram-cancel-editing"))e.addEventListener("click",()=>this.exitEditing(this.state.editingDiagramIndex,!0));for(let e of this.outputElement.querySelectorAll(".docdiagram-create-node"))e.addEventListener("click",()=>this.createNewNode(Number(e.dataset.diagramIndex)))}}getStandaloneDiagramSvg(e){let t=this.outputElement?.querySelector(`.docdiagram[data-diagram-index="${e}"] svg`);if(!t)return null;let n=t.closest(".docdiagram"),o=globalThis.getComputedStyle(n||t).backgroundColor,i=t.cloneNode(!0);i.setAttribute("xmlns","http://www.w3.org/2000/svg"),i.removeAttribute("style"),i.querySelectorAll(".docdiagram-inline-editor-host, .docdiagram-resize-handle, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-connection-preview").forEach(c=>c.remove()),i.querySelectorAll(".docdiagram-node-selected, .docdiagram-edge-selected").forEach(c=>{c.classList.remove("docdiagram-node-selected","docdiagram-edge-selected")});let s=document.createElementNS("http://www.w3.org/2000/svg","style");s.textContent=['svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}',".docdiagram-edge,.docdiagram-edge-hit{fill:none}",".docdiagram-edge-label{font-size:15px}",".docdiagram-node-label{font-size:16px;font-weight:650}",".docdiagram-node-subtitle{font-size:13px}"].join(""),i.insertBefore(s,i.firstChild);let a=document.createElementNS("http://www.w3.org/2000/svg","rect");return a.setAttribute("class","docdiagram-export-background"),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("fill",o),i.insertBefore(a,s.nextSibling),i}getDiagramExportUrl(e,t){let n=this.getStandaloneDiagramSvg(e);return n?URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(n)],{type:t})):(globalThis.alert("The diagram is no longer available to export."),null)}getDiagramExportName(e){return`${document.title.toLowerCase().replace(/[^\w]+/g,"-").replace(/^-|-$/g,"")||"diagram"}-${e+1}`}openDiagram(e){let t=this.getDiagramExportUrl(e,"image/svg+xml;charset=utf-8");if(!t)return;if(!globalThis.open(t,"_blank")){URL.revokeObjectURL(t),globalThis.alert("Your browser blocked the new diagram tab. Allow pop-ups and try again.");return}globalThis.setTimeout(()=>URL.revokeObjectURL(t),6e4)}downloadDiagramDocument(e){let t=this.state.diagramModels[e];if(!t){globalThis.alert("The diagram is no longer available to save.");return}let n=Qe(t),o=Mt(n)||this.getDiagramExportName(e),i=["---",`theme: ${this.state.documentThemeSetting}`,`colourScheme: ${this.state.documentColorScheme}`,"doctype: diagram","---","","```diagram",n,"```",""].join(`
`),s=this.createDocumentCopy(i),a=s.querySelector("title");a&&(a.textContent=o);try{Br(s)}catch(c){let d=c instanceof Error?c.message:String(c);console.error("Save as Skryb diagram failed.",c),globalThis.alert(`Save as Skryb diagram failed: ${d}`);return}this.downloadHtml(s.outerHTML,"",o.toLowerCase().replace(/[^\w]+/g,"-").replace(/^-|-$/g,""))}downloadDiagram(e){let t=this.getDiagramExportUrl(e,"image/svg+xml;charset=utf-8");if(!t)return;let n=document.createElement("a");n.href=t,n.download=`${this.getDiagramExportName(e)}.svg`,n.hidden=!0,document.body.append(n),n.click(),n.remove(),globalThis.setTimeout(()=>URL.revokeObjectURL(t),200)}printDocument(){this.closeDocumentMenu(),this.closeDiagramExportMenus(),this.stopDiagramEditing(),this.state.expandedDiagramIndex=null,this.state.diagramViewportHeights.clear();for(let e of this.state.diagramZooms.keys())this.state.diagramZooms.set(e,100);this.state.diagramCameraOffsets.clear(),this.renderDocument(),globalThis.print()}printDiagram(e){let t=this.getStandaloneDiagramSvg(e);if(!t){globalThis.alert("The diagram is no longer available to print.");return}let n=['<!doctype html><html><head><meta charset="utf-8"><title>Diagram</title>',"<style>html,body{height:100%;margin:0}body{display:grid;place-items:center}svg{height:auto;max-height:100vh;max-width:100vw;width:auto}@page{margin:0}</style>","</head><body>",new XMLSerializer().serializeToString(t),"</body></html>"].join(""),o=globalThis.open("","_blank");if(!o){globalThis.alert("Your browser blocked the print window. Allow pop-ups and try again.");return}o.document.open(),o.document.write(n),o.document.close(),o.focus(),o.print()}closeDiagramExportMenus(){for(let e of document.querySelectorAll(".docdiagram-diagram-export-menu"))e.hidden=!0;for(let e of document.querySelectorAll(".docdiagram-export-toggle"))e.setAttribute("aria-expanded","false")}exitEditing(e,t){e!==null&&(t&&this.state.editSessionDiagram&&(this.state.diagramModels[e]=this.state.editSessionDiagram,this.persistDiagramModels()),this.state.editingDiagramIndex=null,this.state.editSessionDiagram=null,Ve(this.state),this.renderDocument())}createNewNode(e){let t=this.state.diagramModels[e];if(!t||t.type!=="flowchart")return;let n=Wr(t);this.state.selectedNode={diagramIndex:e,nodeId:n.id},this.state.selectedEdge=null,this.persistDiagramModels(),this.renderDocument()}applyPageTheme(e){let t=he(this.state.documentColorScheme,e,"background"),n=t?.text;document.documentElement.dataset.docdiagramTheme=e,document.documentElement.dataset.docdiagramExpanded=String(this.state.expandedDiagramIndex!==null),document.documentElement.style.setProperty("--docdiagram-page-background",t?.fill||""),document.documentElement.style.setProperty("--docdiagram-page-text",n||""),document.body?.dataset&&(document.body.dataset.docdiagramTheme=e)}setExpandedDiagram(e){let t=this.state.expandedDiagramIndex;if(t!==e){this.state.expandedDiagramIndex=e;for(let n of[t,e])n!==null&&(this.state.diagramZooms.set(n,100),this.state.diagramCameraOffsets.delete(n),this.pendingViewportFits.add(n),this.autoFittedDiagrams.delete(n))}}toggleDiagramExpansion(e){this.setExpandedDiagram(this.state.expandedDiagramIndex===e?null:e),this.closeDiagramExportMenus(),this.renderDocument()}removeToolbarChrome(){if(this.outputElement)for(;this.outputElement.previousElementSibling?.classList.contains("docdiagram-toolbar");)this.outputElement.previousElementSibling.remove()}};var Xi=document.querySelector("#source"),Ki=document.querySelector("#rendered-document"),Qn=new Ot(Xi,Ki),Zi=globalThis;Zi.DocDiagramCore=Qn.getCoreApi();Qn.boot();})();
