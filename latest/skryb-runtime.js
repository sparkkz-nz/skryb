/*! Skryb runtime | Copyright 2026 Stuart Parkinson | Apache-2.0 | https://github.com/sparkkz-nz/skryb */
"use strict";(()=>{var Ee=["background","pale","light","neutral","dark","accent-soft","accent","accent-strong","note","success","warning","danger","highlight","none"],en=["flowchart","sequence"],yt=["auto","light","dark"],tn=["right","down","left","up"],Yn=["actor"],xt=["solid","dashed"],Je=["rounded-rectangle","circle","oval","database","diamond","rhombus","flattened-hexagon","chevron","right-chevron","document","text"],ae=["top","right","bottom","left"],Qe=["orthogonal","straight","curved"],$e=["none","arrow","circle"],lt={start:"none",end:"arrow"},_n=["top","center"],Xn=["left","center","right"],nn={width:50,height:20},rn={width:50,height:20},H={shape:"rounded-rectangle",label:"New node",width:190,height:80},Te=(t,e,n,r,o,i,s,a,c,d,l,u,p)=>({background:t,pale:e,light:n,neutral:r,dark:o,"accent-soft":i,accent:s,"accent-strong":a,note:c,success:d,warning:l,danger:u,highlight:p,none:y("None","none","none",t.text)}),y=(t,e,n,r,o,i)=>({label:t,fill:e,stroke:n,text:r,gradient:o,glow:i}),Fe={classic:{label:"Classic",light:Te(y("Background","#FFFFFF","#D1D5DB","#111827"),y("Pale","#F3F4F6","#9CA3AF","#1F2937"),y("Light","#E5E7EB","#6B7280","#1F2937"),y("Neutral","#D1D5DB","#4B5563","#111827"),y("Dark","#374151","#111827","#F9FAFB"),y("Soft","#DBEAFE","#60A5FA","#1E3A8A"),y("Accent","#BFDBFE","#2563EB","#1E3A8A","#EFF6FF"),y("Strong","#2563EB","#1D4ED8","#FFFFFF","#3B82F6","#60A5FA"),y("Note","#DBEAFE","#2563EB","#1E3A8A"),y("Success","#DCFCE7","#16A34A","#14532D"),y("Warning","#FFEDD5","#EA580C","#7C2D12"),y("Danger","#FEE2E2","#DC2626","#7F1D1D"),y("Highlight","#FEF9C3","#CA8A04","#713F12")),dark:Te(y("Background","#111827","#374151","#F9FAFB"),y("Pale","#1F2937","#4B5563","#F3F4F6"),y("Light","#374151","#6B7280","#F9FAFB"),y("Neutral","#4B5563","#9CA3AF","#FFFFFF"),y("Dark","#9CA3AF","#D1D5DB","#111827"),y("Soft","#172554","#3B82F6","#DBEAFE"),y("Accent","#1E3A8A","#60A5FA","#EFF6FF","#172554"),y("Strong","#2563EB","#93C5FD","#FFFFFF","#1D4ED8","#60A5FA"),y("Note","#172554","#60A5FA","#DBEAFE"),y("Success","#052E16","#4ADE80","#DCFCE7"),y("Warning","#431407","#FB923C","#FFEDD5"),y("Danger","#450A0A","#F87171","#FEE2E2"),y("Highlight","#422006","#FACC15","#FEF9C3"))},fire:{label:"Fire",light:Te(y("Background","#FBFAF9","#D9D2CC","#1F1B19"),y("Pale","#F4F1ED","#C7BDB6","#282320"),y("Light","#E9E2DC","#A2948B","#282320"),y("Neutral","#D5CAC2","#8A6D59","#241B15"),y("Dark","#3D312A","#221913","#FFF2E4"),y("Soft","#FDECDD","#E7A672","#7A3B12"),y("Accent","#FBD8BA","#D2691E","#6A2D07","#FFF3E8"),y("Strong","#D2521C","#A6380D","#FFFFFF","#F0873C","#FFA867"),y("Note","#F7EBDD","#A9784C","#523A22"),y("Success","#E7F2D9","#5F8C2B","#2C4310"),y("Warning","#FFEACB","#E08600","#6D3C00"),y("Danger","#FFE1DB","#D93A1F","#6D1708"),y("Highlight","#FFF6CB","#D9A400","#5B4200")),dark:Te(y("Background","#171413","#3A3330","#E7E2DE"),y("Pale","#1F1B19","#4A413C","#EDE8E3"),y("Light","#2B2522","#695C54","#F5EFE9"),y("Neutral","#3E3430","#A08674","#FFF3E7"),y("Dark","#C9B29F","#E4D3C4","#191412"),y("Soft","#3A2415","#C4763A","#FFE7D2"),y("Accent","#5A2E12","#F0873C","#FFEDDD","#47240F"),y("Strong","#E2571B","#FFB27A","#FFFFFF","#B33C0E","#FF8A3D"),y("Note","#302319","#BE8C5A","#F6E4D0"),y("Success","#1F2E14","#8FBF52","#E7F4D5"),y("Warning","#4A2A05","#FFA726","#FFE9C4"),y("Danger","#4B1108","#FF6B52","#FFE0DA"),y("Highlight","#453206","#FFD54A","#FFF6D2"))},ice:{label:"Ice",light:Te(y("Background","#F8FCFF","#D8EAF4","#123040"),y("Pale","#EDF8FC","#B8DCEB","#123040"),y("Light","#D9F2FF","#88BED7","#123040"),y("Neutral","#B8DCEB","#4A8BAA","#123040"),y("Dark","#21536C","#123040","#F4FBFF"),y("Soft","#DDF5FF","#75C6E8","#0F4C67"),y("Accent","#BDEAFF","#2E91BF","#083B55","#E8F9FF"),y("Strong","#1976A3","#0E5E85","#FFFFFF","#43B3E8","#8DDBF7"),y("Note","#DCEFFF","#3182CE","#123A63"),y("Success","#DDF7EE","#1E9B68","#104B35"),y("Warning","#FFF0D8","#D97918","#6B3510"),y("Danger","#FFE4E7","#D9485F","#651C2A"),y("Highlight","#FFF8C9","#C69A13","#5E4900")),dark:Te(y("Background","#0C1D29","#26475A","#E8F7FF"),y("Pale","#112B3A","#376176","#E8F7FF"),y("Light","#173B4D","#4A7B92","#F0FAFF"),y("Neutral","#28576B","#79AFC3","#F4FBFF"),y("Dark","#A3D6E9","#D4F2FF","#0C1D29"),y("Soft","#10384E","#4AB5DF","#DDF7FF"),y("Accent","#15526D","#72CEF2","#ECFBFF","#123C52"),y("Strong","#2186B5","#94DCF5","#FFFFFF","#176A91","#64CEF2"),y("Note","#122E4B","#62A9F5","#DCEFFF"),y("Success","#103D32","#4DD69A","#DDF7EE"),y("Warning","#4B2C0D","#F3A34C","#FFF0D8"),y("Danger","#4B1923","#F07A8C","#FFE4E7"),y("Highlight","#4A3D0A","#E6C54B","#FFF8C9"))},midnight:{label:"Midnight",light:Te(y("Background","#F5F7FC","#CAD3E4","#101D38"),y("Pale","#E9EEF8","#B6C4DC","#172744"),y("Light","#D9E2F2","#91A5C5","#172744"),y("Neutral","#C1CEE1","#6F85A6","#14223C"),y("Dark","#243B63","#1B3155","#F5F8FF"),y("Soft","#DCE7FA","#93A9CE","#1A3158"),y("Accent","#C9DBFA","#5E7FB4","#152D54","#D6E3F8"),y("Strong","#345F9D","#2C548D","#FFFFFF","#416EAE","#6F91C2"),y("Note","#DBE7F8","#5277AE","#1D355D"),y("Success","#DDEFE8","#3E886A","#173F31"),y("Warning","#F8E9D1","#B9702D","#5D3513"),y("Danger","#F4E0E5","#AD5570","#591F30"),y("Highlight","#F8F0C9","#A88222","#554300")),dark:Te(y("Background","#081426","#1F3554","#E8F0FF"),y("Pale","#0D1C32","#2A4265","#E5EEFF"),y("Light","#132843","#3A557A","#EDF4FF"),y("Neutral","#1E385B","#59779E","#EEF5FF"),y("Dark","#91A9C9","#AFC2DB","#0A172A"),y("Soft","#112B4D","#527AA9","#E1EEFF"),y("Accent","#173B68","#6389BA","#ECF4FF","#1B416E"),y("Strong","#2C629F","#6D98CD","#FFFFFF","#356FAF","#6D98CD"),y("Note","#132A4A","#6D96C8","#DDEAFF"),y("Success","#123B31","#5FBA91","#DDF3E8"),y("Warning","#422C14","#D09150","#FBEAD1"),y("Danger","#431E2B","#D27691","#F8E1E8"),y("Highlight","#403710","#C5A543","#FAF2CA"))},paper:{label:"Paper",light:Te(y("Background","#FFFDF7","#E0D8C8","#332D24"),y("Pale","#F7F1E5","#D4C5AD","#40372C"),y("Light","#EEE3D0","#BBA98B","#40372C"),y("Neutral","#D8C8AF","#8C765A","#332D24"),y("Dark","#514536","#332D24","#FFFCF5"),y("Soft","#EEE8DC","#A99879","#44392B"),y("Accent","#E8DDC7","#947044","#3E2D1D","#F7F0E4"),y("Strong","#81592F","#62401F","#FFFFFF","#A77A44","#D3B37B"),y("Note","#E5EFF4","#517B98","#233E50"),y("Success","#E4F0DF","#5D8A54","#294527"),y("Warning","#F9E8CD","#B96B28","#64350D"),y("Danger","#F5E0DA","#AD5342","#5D251C"),y("Highlight","#F8F0BD","#A78216","#584600")),dark:Te(y("Background","#29251F","#554B3E","#F9F2E6"),y("Pale","#373027","#6F6250","#F9F2E6"),y("Light","#4A4033","#8B7B64","#FFF9EE"),y("Neutral","#675947","#A89880","#FFF9EE"),y("Dark","#CBBCA4","#E8DBC7","#30291F"),y("Soft","#463B2D","#B6A080","#FFF8E9"),y("Accent","#5C482F","#D1B98A","#FFF9EE","#483622"),y("Strong","#916C3C","#E0C28B","#FFFFFF","#705029","#CFAA69"),y("Note","#273A46","#7DB2D0","#E5EFF4"),y("Success","#31452B","#9BC58F","#E4F0DF"),y("Warning","#503016","#E3A060","#F9E8CD"),y("Danger","#51281F","#DA8A79","#F5E0DA"),y("Highlight","#4A3D12","#D6BC48","#F8F0BD"))}},Kn={light:{edge:{stroke:"#52616B",strokeWidth:2,text:"#3E4A54"},node:{fill:"#EAF2FF",stroke:"#3574C7",strokeWidth:2,text:"#17202A"}},dark:{edge:{stroke:"#B8C7D5",strokeWidth:2,text:"#D9E4ED"},node:{fill:"#193A61",stroke:"#71AEF7",strokeWidth:2,text:"#F3F8FC"}}};var Zn=["note","info","warning","success"],Jn={2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))","2fr 1fr":"minmax(0, 2fr) minmax(0, 1fr)","1fr 2fr":"minmax(0, 1fr) minmax(0, 2fr)"};function wt(t){if(t==="light"||t==="dark")return t;if(t==="auto")return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches?"dark":"light";throw new Error(`Unsupported document theme: ${t}`)}function ut(t,e="light"){let n=wt(e),r=Kn[n];if(!r)throw new Error(`Unsupported diagram theme: ${n}`);return r}function fe(t,e,n){return(Object.prototype.hasOwnProperty.call(Fe,t)?Fe[t]:void 0)?.[wt(e)]?.[n]||null}function Ne(t,e){return{...t,...e||{}}}function Et(t,e){return e&&t.styles?.[e]||null}function Oe(t,e,n="light",r="classic"){let i=ut(t,n).node,s=e.shape==="text"?{fill:"none",stroke:"none"}:null,a=Et(t,e.class),c=a?.palette?fe(r,n,a.palette):null,d=e.palette?fe(r,n,e.palette):null;return Ne(Ne(Ne(Ne(Ne(i,s),c),a?.style),d),e.style)}function et(t,e,n="light",r="classic"){let o=ut(t,n),i=e.palette?fe(r,n,e.palette):null;return Ne(Ne(o.node,i),e.style)}function St(t,e,n="light"){let r=ut(t,n),o=Et(t,e.class);return Ne(Ne(r.edge,o?.style),e.style)}function on(t,e){let n=e==="start"?t.start:t.end;return typeof n=="string"&&$e.includes(n)?n:lt[e]}function ne(t){let e=Number(t.canvas?.grid);return Number.isFinite(e)&&e>0?e:0}function R(t,e){return e?Math.round(t/e)*e:Math.round(t)}function vt(t,e,n){let r=R(t,n),o=n?Math.ceil(e/n)*n:e;return Math.max(o,r)}function Qn(t){return{width:Number(t.size?.width)||H.width,height:Number(t.size?.height)||H.height}}var O=class{constructor(e){this.entriesById=new Map;this.entriesByNode=new Map;this.ranges=new Map;let n=[],r=(o,i,s,a)=>{for(let c of o){let d={x:s.x+(Number(c.position?.x)||0),y:s.y+(Number(c.position?.y)||0)},l={node:c,parent:i,siblings:o,position:d,bounds:{...d,...Qn(c)},depth:a},u=n.length;n.push(l),this.entriesById.set(c.id,this.entriesById.get(c.id)||l),this.entriesByNode.set(c,l),r(c.children||[],c,d,a+1),this.ranges.set(c,{start:u,end:n.length})}};r(e.nodes,null,{x:0,y:0},0),this.entries=n}getById(e){return this.entriesById.get(e)||null}getByNode(e){return this.entriesByNode.get(e)||null}contains(e,n){let r=this.ranges.get(e),o=this.ranges.get(n);return!!(r&&o&&o.start>r.start&&o.start<r.end)}isRelated(e,n){return e===n||this.contains(e,n)||this.contains(n,e)}descendants(e){let n=this.ranges.get(e);return n?this.entries.slice(n.start+1,n.end):[]}};function ue(t,e){return new O(t).getById(e)}function tt(t,e){return new O(t).getByNode(e)?.bounds||{x:0,y:0,...Qn(e)}}function er(t,e){var h;let n=new O(t),r=n.getById(e);if(!r)return null;let{node:o,siblings:i,position:s}=r,{width:a,height:c}=r.bounds,d={x:s.x+a/2,y:s.y+c/2},u=n.entries.filter(g=>g.node!==o&&!n.contains(o,g.node)).filter(({bounds:g})=>d.x>=g.x&&d.x<=g.x+g.width&&d.y>=g.y&&d.y<=g.y+g.height).reduce((g,m)=>!g||m.depth>=g.depth?m:g,null),p=u?(h=u.node).children||(h.children=[]):t.nodes;return i===p||(i.splice(i.indexOf(o),1),o.position={x:s.x-(u?.position.x||0),y:s.y-(u?.position.y||0)},p.push(o)),o}function Pe(t,e){return t.includes(e)}function Mo(t){return{x:Number(t.position?.x)||0,y:Number(t.position?.y)||0,width:Number(t.size?.width)||H.width,height:Number(t.size?.height)||H.height}}function nt(t,e,n=40){return tr(t,e,n)}function an(t,e=40){return tr(t,null,e,!0)}function tr(t,e,n=40,r=!1){let o=Number(t.canvas?.width)||1e3,i=Number(t.canvas?.height)||560,s=r||!!t.canvas?.auto,a=new O(t),d=[...new Set(a.entries.map(b=>b.node))];e&&!d.includes(e)&&d.push(e);let l=b=>a.getByNode(b)?.bounds||Mo(b),u=()=>[...d.map(l),...d.filter(b=>b.arrow).map(b=>({x:b.arrow.x,y:b.arrow.y,width:0,height:0})),...(t.edges||[]).filter(b=>b.waypoint).map(b=>({x:b.waypoint.x,y:b.waypoint.y,width:0,height:0}))],p=u(),h=Math.min(0,...p.map(b=>b.x)),g=Math.min(0,...p.map(b=>b.y)),m=h<0?n-h:0,f=g<0?n-g:0;if(m||f){for(let b of a.entries.filter(k=>k.parent===null)){let k=b.node;k.position={...k.position,x:(Number(k.position?.x)||0)+m,y:(Number(k.position?.y)||0)+f}}for(let b of d)b.arrow&&(b.arrow={x:b.arrow.x+m,y:b.arrow.y+f});for(let b of t.edges||[])b.waypoint&&(b.waypoint={x:b.waypoint.x+m,y:b.waypoint.y+f});a=new O(t)}let E=u(),F=Math.max(2*n,...E.map(b=>b.x+b.width+n)),x=Math.max(2*n,...E.map(b=>b.y+b.height+n));return t.canvas={...t.canvas,width:s&&E.length?F:Math.max(o+m,F),height:s&&E.length?x:Math.max(i+f,x)},t}function nr(t,e){return t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}function Co(t,e="new-node"){let n=i=>i.flatMap(s=>[s.id,...n(s.children||[])]),r=new Set(n(t));if(!r.has(e))return e;let o=2;for(;r.has(`${e}-${o}`);)o+=1;return`${e}-${o}`}function To(t,e){let n=e.replace(/[^a-z0-9]/gi,"").toLowerCase()||"node",r=1,o="";do o=`${n}${String(r).padStart(2,"0")}`,r+=1;while(t.has(o));return t.add(o),o}function Lo(t,e,n,r,o){let i=Number(t.canvas?.width)||1e3,s=Number(t.canvas?.height)||560,a=ne(t),c=a||20,d={x:R(o.x,a),y:R(o.y,a)};for(let u=c;u<=Math.max(i,s);u+=c)for(let p of[{x:d.x+u,y:d.y+u},{x:d.x+u,y:d.y-u},{x:d.x-u,y:d.y+u},{x:d.x-u,y:d.y-u}])if(!(p.x<0||p.y<0||p.x+n>i||p.y+r>s)&&!e.entries.some(({bounds:h})=>nr({...p,width:n,height:r},h)))return p;let l=Math.max(0,...e.entries.map(({bounds:u})=>u.x+u.width));return{x:R(l+c,a),y:0}}function Po(t){let e=new O(t),n=Number(t.canvas?.width)||1e3,r=Number(t.canvas?.height)||560,o=ne(t),i={x:R(Math.max(0,(n-H.width)/2),o),y:R(Math.max(0,(r-H.height)/2),o)},s=o||20;for(let a=0;a<=Math.max(n,r);a+=s)for(let c of[{x:i.x+a,y:i.y},{x:i.x-a,y:i.y},{x:i.x,y:i.y+a},{x:i.x,y:i.y-a}])if(!(c.x<0||c.y<0||c.x+H.width>n||c.y+H.height>r)&&!e.entries.some(({bounds:d})=>nr({...c,width:H.width,height:H.height},d)))return c;return i}function rr(t){let e={id:Co(t.nodes),label:H.label,shape:H.shape,position:Po(t),size:{width:H.width,height:H.height}};return t.nodes.push(e),e}function Dt(t,e){let n=new O(t),r=n.getById(e);if(!r)return null;let o=new Set(n.entries.map(({node:l})=>l.id)),i=l=>({id:To(o,l.shape),label:l.label,shape:l.shape,...l.position?{position:{...l.position}}:{},...l.size?{size:{...l.size}}:{},...l.style?{style:{...l.style}}:{},...l.palette?{palette:l.palette}:{},...l.subtitle!==void 0?{subtitle:l.subtitle}:{},...l.textVAlign!==void 0?{textVAlign:l.textVAlign}:{},...l.textHAlign!==void 0?{textHAlign:l.textHAlign}:{},...l.children?{children:l.children.map(i)}:{}}),s=i(r.node),a=r.bounds,c=Lo(t,n,Number(s.size?.width)||H.width,Number(s.size?.height)||H.height,a),d=r.parent?n.getByNode(r.parent)?.position||{x:0,y:0}:{x:0,y:0};return s.position={x:c.x-d.x,y:c.y-d.y},r.siblings.push(s),nt(t,s),s}function or(t,e,n,r,o){if(!Pe(ae,n)||!Pe(ae,o))throw new Error("Connector anchors must be supported edge anchors.");let i={source:e,target:r,sourceAnchor:n,targetAnchor:o,route:"orthogonal",end:"arrow"};return t.edges.push(i),i}function ir(t,e,n,r){return Pe(ae,r)&&(e==="source"?(t.source=n,t.sourceAnchor=r):(t.target=n,t.targetAnchor=r)),t}function $t(t,e){return e<0||e>=t.edges.length?null:t.edges.splice(e,1)[0]}function Ft(t,e){let n=ue(t,e);if(!n)return{node:null,deletedEdges:[]};let r=new Set([n.node,...n.node.children||[]].flatMap(function i(s){return[s,...(s.children||[]).flatMap(i)]}).map(i=>i.id)),o=t.edges.filter(i=>r.has(i.source)||r.has(i.target));return n.siblings.splice(n.siblings.indexOf(n.node),1),t.edges=t.edges.filter(i=>!r.has(i.source)&&!r.has(i.target)),t.canvas?.auto&&an(t),{node:e,deletedEdges:o}}function Nt(t,e){return t.label=String(e).trim(),t}function ar(t,e){return Pe(Je,e)&&(t.shape=e),t}function sr(t,e){return t.subtitle=String(e??"").trim(),t}function sn(t,e,n){return e==="textVAlign"&&(n==="top"||n==="center")&&(t.textVAlign=n),e==="textHAlign"&&(n==="left"||n==="center"||n==="right")&&(t.textHAlign=n),t}function mt(t,e,n){return t.style={...t.style,[e]:n},t}function cn(t,e,n="classic"){if(!Pe(Ee,e)||!fe(n,"light",e))return t;let{fill:o,stroke:i,text:s,...a}=t.style||{};return Object.keys(a).length?t.style=a:delete t.style,t.palette=e,t}function cr(t){return t==="document"?rn:nn}function dn(t){return{position:{x:Number(t.position?.x)||0,y:Number(t.position?.y)||0},size:{width:Number(t.size?.width)||H.width,height:Number(t.size?.height)||H.height},childPositions:new Map((t.children||[]).map(e=>[e,{x:Number(e.position?.x)||0,y:Number(e.position?.y)||0}]))}}function dr(t,e,n,r,o,i=dn(e)){let s=ne(t),a=cr(e.shape),c=n.endsWith("left"),d=n.startsWith("top"),l=vt(i.size.width+(c?-r:r),a.width,s),u=vt(i.size.height+(d?-o:o),a.height,s);if(e.shape==="circle"){let m=Math.max(l,u);l=m,u=m}let p={...e.position,x:c?i.position.x+i.size.width-l:i.position.x,y:d?i.position.y+i.size.height-u:i.position.y},h=i.position.x-p.x,g=i.position.y-p.y;for(let m of e.children||[]){let f=i.childPositions.get(m)||m.position||{x:0,y:0};m.position={...m.position,x:f.x+h,y:f.y+g}}return e.position=p,e.size={...e.size,width:l,height:u},e}function ln(t,e,n,r){let o=ne(t),i=cr(e.shape),s=n==="width"?i.width:i.height,a=vt(Number(r)||s,s,o);return e.size=e.shape==="circle"?{...e.size,width:a,height:a}:{...e.size,[n]:a},e}function At(t,e){return t.label=String(e).trim(),t}function lr(t,e){return Pe(Qe,e)&&(t.route=e),t}function ur(t){return delete t.waypoint,t}function un(t,e){return t.arrow={x:e.x,y:e.y},t}function Ro(t){return delete t.arrow,t}function mr(t,e){if(e.arrow)return Ro(e);let n=tt(t,e),r=ne(t),o=un(e,{x:R(n.x+n.width/2,r),y:R(n.y+n.height+Math.max(60,n.height*.75),r)});return nt(t,e),o}function mn(t,e,n){return Pe(ae,n)&&(e==="source"?t.sourceAnchor=n:t.targetAnchor=n),t}function gn(t,e,n){return t.style={...t.style,[e]:n},t}function hn(t,e){let n=Math.max(1,Math.round(Number(e))||1);return t.style={...t.style,strokeWidth:n},t}function gr(t,e){return t.start=Pe($e,e)?e:lt.start,t}function hr(t,e){return t.end=Pe($e,e)?e:lt.end,t}function kt(t){return Math.min(Math.max(25,Number(t)||100),800)}function Mt(t,e=0){return e===1?t*16:e===2?t*400:t}function pr(t,e,n=0){return kt(kt(t)*Math.exp(-Mt(e,n)*.0025))}var fr=new WeakSet;function br(t){return fr.has(t)}var pn={stageGap:120,siblingGap:60};function qe(t){return{width:Number(t.size?.width)||H.width,height:Number(t.size?.height)||H.height}}function fn(t){return Number.isFinite(t.position?.x)&&Number.isFinite(t.position?.y)}function bn(t){if(t==null)return null;if(typeof t=="string")return{direction:t,...pn};let e=t;return{direction:e.direction,stageGap:e.stageGap===void 0?pn.stageGap:Number(e.stageGap),siblingGap:e.siblingGap===void 0?pn.siblingGap:Number(e.siblingGap)}}function Bo(t){return t==="right"||t==="left"}function yn(t){return{right:{source:"right",target:"left"},left:{source:"left",target:"right"},down:{source:"bottom",target:"top"},up:{source:"top",target:"bottom"}}[t]}function Io(t,e,n){let r=new Set(t),o=yn(n),i=e.filter(m=>r.has(m.source)&&r.has(m.target)&&m.source!==m.target),s=i.filter(m=>!(m.sourceAnchor===o.target&&m.targetAnchor===o.source)),a=s.length?s:i,c=new Map;for(let m of a)c.set(m.source,[...c.get(m.source)||[],m.target]);let d=[],l=new Map,u=m=>{l.set(m,"visiting");for(let f of c.get(m)||[])l.get(f)!=="visiting"&&(d.push({source:m,target:f}),l.has(f)||u(f));l.set(m,"done")};for(let m of t)l.has(m)||u(m);let p=new Map;for(let m of d)p.set(m.target,[...p.get(m.target)||[],m.source]);let h=new Map,g=(m,f)=>{let E=h.get(m);if(E!==void 0)return E;if(f.has(m))return 0;f.add(m);let F=Math.max(0,...(p.get(m)||[]).map(x=>g(x,f)+1));return h.set(m,F),F};for(let m of t)g(m,new Set);return h}function qo(t,e,n=4){let r=s=>{let a=new Map;for(let c of e){let[d,l]=s?[c.target,c.source]:[c.source,c.target];a.set(d,[...a.get(d)||[],l])}return a},o=r(!0),i=r(!1);for(let s=0;s<n;s+=1){let a=s%2===0,c=a?t.map((d,l)=>l):t.map((d,l)=>t.length-1-l);for(let d of c){let l=a?d-1:d+1,u=t[l];if(!u)continue;let p=new Map(u.map((f,E)=>[f,E])),h=a?o:i,g=new Map;for(let f of t[d]){let E=(h.get(f)||[]).map(F=>p.get(F)).filter(F=>F!==void 0).sort((F,x)=>F-x);g.set(f,E.length?E[E.length-1>>1]:Number.NaN)}let m=new Map(t[d].map((f,E)=>[f,E]));t[d]=[...t[d]].sort((f,E)=>{let F=g.get(f),x=g.get(E);return Number.isNaN(F)||Number.isNaN(x)||F===x?m.get(f)-m.get(E):F-x})}}}function zo(t,e,n,r,o){let i=t.map(x=>x.id),s=Io(i,e,n.direction),a=Math.max(0,...s.values())+1,c=Array.from({length:a},()=>[]);for(let x of i)c[s.get(x)||0].push(x);let d=e.filter(x=>s.has(x.source)&&s.has(x.target));qo(c,d);let l=new Map(t.map(x=>[x.id,x])),u=Bo(n.direction),p=n.direction==="left"||n.direction==="up",h=c.map(x=>Math.max(0,...x.map(b=>{let k=qe(l.get(b));return u?k.width:k.height}))),g=c.map(x=>x.reduce((b,k,w)=>{let D=qe(l.get(k));return b+(u?D.height:D.width)+(w?n.siblingGap:0)},0)),m=Math.max(0,...g),f=0,E=h.map(x=>{let b=f;return f+=x+n.stageGap,b}),F=Math.max(0,f-n.stageGap);c.forEach((x,b)=>{let k=(m-g[b])/2;for(let w of x){let D=l.get(w),$=qe(D),C=p?F-E[b]-(u?$.width:$.height):E[b];D.position={x:R(r.x+(u?C:k),o),y:R(r.y+(u?k:C),o)},k+=(u?$.height:$.width)+n.siblingGap}})}function yr(t,e,n=0){return t.x-n<e.x+e.width&&t.x+t.width+n>e.x&&t.y-n<e.y+e.height&&t.y+t.height+n>e.y}function Ho(t,e,n,r,o){let i=new Map(e.filter(fn).map(m=>[m.id,m])),s=qe(t),a=yn(r.direction),c=[];for(let m of n){let f=m.source===t.id,E=m.target===t.id;if(f===E)continue;let F=i.get(f?m.target:m.source);if(!F)continue;let x=(f?m.sourceAnchor:m.targetAnchor)||(f?a.source:a.target),b={...F.position,...qe(F)};x==="left"?c.push({position:{x:b.x+b.width+r.stageGap,y:b.y+(b.height-s.height)/2},axis:"x",sign:1}):x==="right"?c.push({position:{x:b.x-r.stageGap-s.width,y:b.y+(b.height-s.height)/2},axis:"x",sign:-1}):x==="top"?c.push({position:{x:b.x+(b.width-s.width)/2,y:b.y+b.height+r.stageGap},axis:"y",sign:1}):x==="bottom"&&c.push({position:{x:b.x+(b.width-s.width)/2,y:b.y-r.stageGap-s.height},axis:"y",sign:-1})}if(!c.length)return null;let d=c[0].axis,l=c.filter(m=>m.axis===d),p=l[0].sign>0?Math.max(...l.map(m=>m.position[d])):Math.min(...l.map(m=>m.position[d])),h=d==="x"?"y":"x",g=c.reduce((m,f)=>m+f.position[h],0)/c.length;return{position:{x:R(d==="x"?p:g,o),y:R(d==="y"?p:g,o)},acrossAxis:h}}function jo(t,e,n,r,o,i){let s=o||20,a=Math.min(i,20);for(let c=0;c<=200;c+=1)for(let d of c?[c*s,-c*s]:[0]){let l={...t,[r]:t[r]+d},u={...l,...e};if(!n.some(p=>yr(u,p,a)))return{x:R(l.x,o),y:R(l.y,o)}}return t}function Oo(t,e,n,r,o){let i=r||20,s=Math.min(o,20),a={x:R(n.x,r),y:R(n.y,r)},c=Math.max(n.y,...e.map(d=>d.y+d.height));for(let d=0;d<=2e3;d+=i)for(let l of d?[{x:a.x+d,y:a.y},{x:a.x,y:a.y+d}]:[a])if(!e.some(u=>yr({...l,...t},u,s)))return l;return{x:a.x,y:R(c+i,r)}}function Go(t,e,n,r,o){let i=t.filter(s=>!fn(s));if(!i.length)return!1;if(i.length===t.length)return zo(t,e,n,r,o),!0;for(let s of i){let a=qe(s),c=t.filter(l=>l!==s&&fn(l)).map(l=>({...l.position,...qe(l)})),d=Ho(s,t,e,n,o);s.position=d?jo(d.position,a,c,d.acrossAxis,o,n.siblingGap):Oo(a,c,r,o,n.siblingGap)}return!0}function Vo(t,e){let n=e.x+e.width/2-(t.x+t.width/2),r=e.y+e.height/2-(t.y+t.height/2),o=Math.abs(n)-(t.width+e.width)/2,i=Math.abs(r)-(t.height+e.height)/2;return o<=0&&i<=0?null:o>=i?n>=0?{source:"right",target:"left"}:{source:"left",target:"right"}:r>=0?{source:"bottom",target:"top"}:{source:"top",target:"bottom"}}function Uo(t,e){let n=t.edges||[];if(!n.some(i=>!i.sourceAnchor||!i.targetAnchor))return!1;let r=yn(e.direction),o=new O(t);for(let i of n){if(i.sourceAnchor&&i.targetAnchor)continue;let s=o.getById(i.source)?.bounds,a=o.getById(i.target)?.bounds,c=s&&a&&i.source!==i.target?Vo(s,a):null;i.sourceAnchor=i.sourceAnchor||c?.source||r.source,i.targetAnchor=i.targetAnchor||c?.target||r.target}return!0}function xr(t){let e=bn(t.layout);if(!e)return t;let n=ne(t),r=40,o=!1,i=(s,a)=>{for(let c of s)if(c.children?.length&&(i(c.children,{x:r,y:r}),!c.size)){let d=c.children.reduce((l,u)=>{let p=qe(u);return{width:Math.max(l.width,(Number(u.position?.x)||0)+p.width),height:Math.max(l.height,(Number(u.position?.y)||0)+p.height)}},{width:0,height:0});c.size={width:R(d.width+r,n),height:R(d.height+r,n)}}o=Go(s,t.edges||[],e,a,n)||o};return i(t.nodes||[],{x:r,y:r}),o=Uo(t,e)||o,o&&fr.add(t),t}var Wo=["nodes","edges","participants","messages","activations","notes","groups"],Er=["version","id","caption","description","theme"],Yo=[...Er,"type","layout","styles","canvas","nodes","edges"],_o=[...Er,"type","canvas","participants","messages","activations","notes","groups"],Xo=["id","label","shape","class","position","size","style","palette","subtitle","textVAlign","textHAlign","arrow","children"],Ko=["source","target","class","sourceAnchor","targetAnchor","route","label","style","start","end","waypoint"],Zo=["palette","style"],Jo=["direction","stageGap","siblingGap"],wn=["fill","stroke","strokeWidth","text"],Qo=["stroke","strokeWidth","text"],ei=["id","label","kind","palette","style","size"],ti=["from","to","label","style"],ni=["participant","from","to"],ri=["at","after","label","palette","style","size"],oi=["label","from","to"],ii=["width","height","participantSpacing","participantSize"];function v(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Re(t){let e=t.trim();if(e.startsWith('"')&&e.endsWith('"'))try{return JSON.parse(e)}catch{throw new Error(`Invalid quoted scalar: ${e}`)}if(e.startsWith("'")&&e.endsWith("'"))return e.slice(1,-1);if(/^-?\d+(\.\d+)?$/.test(e))return Number(e);if(e==="true"||e==="false")return e==="true";if(e.startsWith("{")&&e.endsWith("}")){let n=e.slice(1,-1).trim();if(!n)return{};let r=n.split(","),o={};for(let i of r){let s=i.indexOf(":");if(s===-1)throw new Error(`Invalid inline mapping: ${e}`);let a=i.slice(0,s).trim();o[a]=Re(i.slice(s+1))}return o}return e}var ai=/^(\s*)((?:- )?)([A-Za-z_][\w-]*):\s*\|([+-])?\s*$/;function si(t){let e=[],n=0;for(;n<t.length;){let r=t[n],o=r.match(ai);if(!o){e.push(r),n+=1;continue}let[,i,s,a,c]=o,d=n+1,l=null;for(;d<t.length;){let m=t[d];if(m.trim()===""){d+=1;continue}l=m.length-m.trimStart().length;break}if(l===null||l<=i.length){e.push(`${i}${s}${a}: ""`),n+=1;continue}let u=[],p=n+1,h=0;for(;p<t.length;){let m=t[p];if(m.trim()===""){u.push(""),h+=1,p+=1;continue}if(m.length-m.trimStart().length<l)break;u.push(m.slice(l)),h=0,p+=1}h>0&&c!=="+"&&(u.length-=h-1);let g=u.join(`
`);e.push(`${i}${s}${a}: ${JSON.stringify(g)}`),n=p}return e}function Se(t,e="classic"){let r=si(t.replace(/\r\n/g,`
`).split(`
`)).filter(h=>h.trim()&&!h.trimStart().startsWith("#"));for(let h of r){if(h.trimStart()!==h||!h.trimEnd().endsWith(":"))continue;let g=h.trim().slice(0,-1);if(g!=="canvas"&&g!=="styles"&&g!=="layout"&&!Wo.includes(g))throw new Error(`Unsupported diagram section: ${g}`)}let o=0,i=h=>h.length-h.trimStart().length,s=h=>h.trim().match(/^([^:]+):\s*(.*)$/),a=h=>h.trim().match(/^- ([^:]+):\s*(.*)$/),c=h=>o>=r.length||i(r[o])<=h?{}:r[o].trimStart().startsWith("- ")?l(i(r[o])):d(i(r[o])),d=h=>{let g={};for(;o<r.length&&i(r[o])===h;){let m=r[o],f=s(m);if(!f)throw new Error(`Cannot parse diagram line: ${m}`);o+=1,g[f[1]]=f[2]?Re(f[2]):c(h)}return g},l=h=>{let g=[];for(;o<r.length&&i(r[o])===h;){let m=r[o],f=a(m);if(!f)throw new Error(`Cannot parse diagram line: ${m}`);o+=1;let E={[f[1]]:f[2]?Re(f[2]):c(h)};for(;o<r.length&&i(r[o])>h;){let F=i(r[o]),x=s(r[o]);if(!x)throw new Error(`Cannot parse diagram line: ${r[o]}`);o+=1,E[x[1]]=x[2]?Re(x[2]):c(F)}g.push(E)}return g},u=d(0);if(!u.type)throw new Error(`Diagram type is required and must be one of: ${en.join(", ")}.`);if(typeof u.type!="string"||!en.includes(u.type))throw new Error(`Unsupported diagram type: ${String(u.type)}`);let p=u.type==="flowchart"?Yo:_o;return me(u,p,`${u.type} diagram`),ci(u),u.type==="flowchart"?di(u,e):li(u,e)}function ci(t){if(t.version!==void 0&&(!Number.isInteger(t.version)||Number(t.version)<1))throw new Error("Diagram version must be a positive integer.");for(let e of["id","caption","description"])if(t[e]!==void 0&&typeof t[e]!="string")throw new Error(`Diagram ${e} must be a string.`);if(t.theme!==void 0&&(typeof t.theme!="string"||!yt.includes(t.theme)))throw new Error(`Unsupported diagram theme: ${String(t.theme)}`)}function di(t,e="classic"){if(t.canvas==="auto"&&(t.canvas={auto:!0}),t.canvas=t.canvas||{},typeof t.canvas!="object"||Array.isArray(t.canvas))throw new Error('Flowchart canvas must be a mapping or the value "auto".');if(t.canvas.auto!==void 0&&typeof t.canvas.auto!="boolean")throw new Error("Flowchart canvas.auto must be true or false.");return Array.isArray(t.nodes)||(t.nodes=[]),Array.isArray(t.edges)||(t.edges=[]),gi(t,e),xr(t),t.canvas.auto&&an(t),t}function li(t,e="classic"){return hi(t,e),t}function me(t,e,n){for(let r of Object.keys(t||{}))if(!e.includes(r))throw new Error(`Unsupported ${n} field: ${r}`)}function Ct(t,e,n){if(t){for(let r of Object.keys(t))if(!e.includes(r))throw new Error(`Unsupported ${n} style field: ${r}`)}}function xn(t,e){let n=e.charAt(0).toUpperCase()+e.slice(1);if(typeof t!="object"||t===null||Array.isArray(t))throw new Error(`${n} must be a mapping.`);let r=t;if(!Number.isFinite(r.x)||!Number.isFinite(r.y))throw new Error(`${n} requires finite x and y coordinates.`);me(t,["x","y"],e)}function ui(t){if(t.styles===void 0)return new Set;if(typeof t.styles!="object"||Array.isArray(t.styles))throw new Error("Diagram styles must be a mapping of names to style definitions.");for(let[e,n]of Object.entries(t.styles)){if(typeof n!="object"||n===null||Array.isArray(n))throw new Error(`Style "${e}" must be a mapping.`);if(me(n,Zo,`style "${e}"`),n.palette!==void 0&&(typeof n.palette!="string"||!Ee.includes(n.palette)))throw new Error(`Unsupported palette in style "${e}": ${String(n.palette)}`);if(n.style?.width!==void 0)throw new Error(`Style "${e}" style.width is not supported; use style.strokeWidth.`);if(Ct(n.style,wn,`style "${e}"`),n.palette===void 0&&!Object.keys(n.style||{}).length)throw new Error(`Style "${e}" declares no palette or style values.`)}return new Set(Object.keys(t.styles))}function mi(t){if(t.layout===void 0)return;if(typeof t.layout=="object"&&!Array.isArray(t.layout)){me(t.layout,Jo,"layout");for(let n of["stageGap","siblingGap"]){let r=t.layout[n];if(r!==void 0&&(typeof r!="number"||!Number.isFinite(r)||r<0))throw new Error(`Layout ${n} must be a number of zero or more.`)}}else if(typeof t.layout!="string")throw new Error("Layout must be a direction or a mapping.");let e=bn(t.layout);if(!e||!tn.includes(e.direction))throw new Error(`Unsupported layout direction: ${String(e?.direction)}`)}function gi(t,e="classic"){mi(t);let n=t.layout!==void 0,r=ui(t),o=(a,c)=>{if(a!==void 0&&(typeof a!="string"||!r.has(a)))throw new Error(`Unknown style class on ${c}: ${String(a)}`)},i=new Set,s=a=>{if("type"in a)throw new Error(`Node "${a.id||"unknown"}" uses removed field "type".`);if(me(a,Xo,`node "${a.id||"unknown"}"`),!a.id||typeof a.label!="string")throw new Error("Every node requires an id and a string label.");if(!a.shape)throw new Error(`Node "${a.id}" requires a shape.`);if(!Je.includes(a.shape))throw new Error(`Unsupported node shape: ${a.shape}`);if(a.position===void 0){if(!n)throw new Error(`Node "${a.id}" requires a position, or a "layout" on the diagram to place it.`)}else xn(a.position,`node "${a.id}" position`);if(a.textVAlign!==void 0&&!_n.includes(a.textVAlign))throw new Error(`Unsupported node textVAlign: ${a.textVAlign}`);if(a.textHAlign!==void 0&&!Xn.includes(a.textHAlign))throw new Error(`Unsupported node textHAlign: ${a.textHAlign}`);if(a.palette!==void 0&&(typeof a.palette!="string"||!Ee.includes(a.palette)))throw new Error(`Unsupported node palette: ${String(a.palette||"unknown")}`);if(a.style?.width!==void 0)throw new Error("Node style.width is not supported; use style.strokeWidth.");if(o(a.class,`node "${a.id}"`),Ct(a.style,wn,`node "${a.id}"`),a.arrow!==void 0&&xn(a.arrow,`node "${a.id}" arrow`),i.has(a.id))throw new Error(`Duplicate flowchart node id: ${a.id}`);if(i.add(a.id),a.children!==void 0&&!Array.isArray(a.children))throw new Error(`Children for node "${a.id}" must be a list.`);for(let c of a.children||[])s(c)};for(let a of t.nodes)s(a);for(let a of t.edges){if(me(a,Ko,`edge "${a.source||"unknown"}" -> "${a.target||"unknown"}"`),!a.sourceAnchor&&!n)throw new Error(`Edge "${a.source||"unknown"}" -> "${a.target||"unknown"}" requires a sourceAnchor.`);if(!a.targetAnchor&&!n)throw new Error(`Edge "${a.source||"unknown"}" -> "${a.target||"unknown"}" requires a targetAnchor.`);if(a.sourceAnchor&&!ae.includes(a.sourceAnchor))throw new Error(`Unsupported edge sourceAnchor: ${a.sourceAnchor}`);if(a.targetAnchor&&!ae.includes(a.targetAnchor))throw new Error(`Unsupported edge targetAnchor: ${a.targetAnchor}`);if(a.route!==void 0&&!Qe.includes(a.route))throw new Error(`Unsupported edge route: ${a.route}`);if(a.waypoint!==void 0&&xn(a.waypoint,`edge "${a.source}" -> "${a.target}" waypoint`),a.start!==void 0&&!$e.includes(a.start))throw new Error(`Unsupported edge start marker: ${a.start}`);if(a.end!==void 0&&!$e.includes(a.end))throw new Error(`Unsupported edge end marker: ${a.end}`);if(a.style?.width!==void 0)throw new Error("Edge style.width is not supported; use style.strokeWidth.");o(a.class,`edge "${a.source||"unknown"}" -> "${a.target||"unknown"}"`),Ct(a.style,Qo,`edge "${a.source||"unknown"}" -> "${a.target||"unknown"}"`)}}function hi(t,e="classic"){if(!Array.isArray(t.participants)||!Array.isArray(t.messages))throw new Error("Sequence diagrams require participants and messages sections.");if(t.activations!==void 0&&!Array.isArray(t.activations))throw new Error("Sequence diagram activations must be a list.");if(t.notes!==void 0&&!Array.isArray(t.notes))throw new Error("Sequence diagram notes must be a list.");if(t.groups!==void 0&&!Array.isArray(t.groups))throw new Error("Sequence diagram groups must be a list.");if(t.canvas!==void 0&&(typeof t.canvas!="object"||Array.isArray(t.canvas)))throw new Error("Sequence canvas must be a mapping.");me(t.canvas,ii,"sequence canvas");for(let r of["width","height","participantSpacing"]){let o=t.canvas?.[r];if(o!==void 0&&(!Number.isFinite(o)||Number(o)<=0))throw new Error(`Sequence canvas.${r} must be a positive number.`)}if(t.canvas?.participantSize!==void 0){if(typeof t.canvas.participantSize!="object"||Array.isArray(t.canvas.participantSize))throw new Error("Sequence canvas.participantSize must be a mapping.");me(t.canvas.participantSize,["width","height"],"sequence canvas participantSize");for(let r of["width","height"]){let o=t.canvas.participantSize[r];if(o!==void 0&&(!Number.isFinite(o)||Number(o)<=0))throw new Error(`Sequence canvas.participantSize.${r} must be a positive number.`)}}let n=new Set;for(let r of t.participants){if(me(r,ei,`participant "${r.id||"unknown"}"`),!r.id||!r.label)throw new Error("Every sequence participant requires an id and label.");if(r.kind!==void 0&&!Yn.includes(r.kind))throw new Error(`Unsupported sequence participant kind: ${r.kind}`);if(wr(r,`participant "${r.id}"`,e),n.has(r.id))throw new Error(`Duplicate sequence participant id: ${r.id}`);n.add(r.id)}for(let[r,o]of t.messages.entries()){if(me(o,ti,`message ${r}`),!o.from||!o.to||!o.label)throw new Error(`Sequence message ${r} requires from, to, and label.`);if(!n.has(o.from)||!n.has(o.to))throw new Error(`Sequence message ${r} references an unknown participant.`);if(o.style!==void 0&&!xt.includes(o.style))throw new Error(`Unsupported sequence message style: ${o.style}`)}for(let[r,o]of(t.activations||[]).entries()){if(me(o,ni,`activation ${r}`),!o.participant||!Number.isInteger(o.from)||!Number.isInteger(o.to))throw new Error(`Sequence activation ${r} requires participant and integer from and to message positions.`);if(!n.has(o.participant))throw new Error(`Sequence activation ${r} references an unknown participant.`);if(o.from<1||o.to<o.from||o.to>t.messages.length)throw new Error(`Sequence activation ${r} range is out of bounds.`)}for(let[r,o]of(t.notes||[]).entries()){me(o,ri,`note ${r}`);let i=o.after;if(!o.at||!Number.isInteger(i)||!o.label)throw new Error(`Sequence note ${r} requires at, after, and label.`);if(wr(o,`note ${r}`,e),!n.has(o.at))throw new Error(`Sequence note ${r} references an unknown participant.`);if(i<0||i>t.messages.length)throw new Error(`Sequence note ${r} after position is out of bounds.`)}for(let[r,o]of(t.groups||[]).entries()){if(me(o,oi,`group ${r}`),!o.label&&o.label!=="")throw new Error(`Sequence group ${r} requires a label.`);if(!Number.isInteger(o.from)||!Number.isInteger(o.to))throw new Error(`Sequence group ${r} requires integer from and to indices.`);if(o.from<1||o.to<o.from||o.to>t.messages.length)throw new Error(`Sequence group ${r} range is out of bounds.`)}}function wr(t,e,n="classic"){if(t.palette!==void 0){let r=String(t.palette||"");if(!Ee.includes(r))throw new Error(`Unsupported ${e} palette: ${r||"unknown"}`)}if(Ct(t.style,wn,e),t.size){me(t.size,["width","height"],`size for ${e}`);for(let r of["width","height"]){let o=t.size[r];if(o!==void 0&&(!Number.isFinite(o)||Number(o)<=0))throw new Error(`${e} size.${r} must be a positive number.`)}}}function En(t){return typeof t=="number"||typeof t=="boolean"?String(t):t&&typeof t=="object"?Object.keys(t).length?`{ ${Object.entries(t).map(([e,n])=>`${e}: ${En(n)}`).join(", ")} }`:"{}":/^[\w./-]+(?: [\w./-]+)*$/.test(String(t))?String(t):JSON.stringify(String(t))}function Ge(t,e,n,r,o=""){if(typeof e=="string"&&e.includes(`
`)){let i=e.split(`
`).map(s=>s.length?`${" ".repeat(r)}${s}`:"");return[`${" ".repeat(n)}${o}${t}: |+`,...i]}return[`${" ".repeat(n)}${o}${t}: ${En(e)}`]}function ze(t,e=2){let n=Object.entries(t),[r,o]=n[0],i=Ge(r,o,e,e+4,"- ");for(let[s,a]of n.slice(1))if(!(s==="children"&&Array.isArray(a)&&!a.length))if(s==="children"&&Array.isArray(a)){i.push(`${" ".repeat(e+2)}children:`);for(let c of a)i.push(...ze(c,e+4))}else i.push(...Ge(s,a,e+2,e+4));return i}function Be(t){let e=[`type: ${En(t.type)}`];for(let o of["version","id","caption","description","theme"])t[o]!==void 0&&e.push(...Ge(o,t[o],0,2));if(t.type==="flowchart"&&t.layout!==void 0&&e.push(...Ge("layout",t.layout,0,2)),t.type==="sequence"){if(t.canvas!==void 0){e.push("canvas:");for(let[o,i]of Object.entries(t.canvas))e.push(...Ge(o,i,2,4))}e.push("participants:");for(let o of t.participants||[])e.push(...ze(o));e.push("messages:");for(let o of t.messages||[])e.push(...ze(o));if(t.activations!==void 0){e.push("activations:");for(let o of t.activations||[])e.push(...ze(o))}if(t.notes!==void 0){e.push("notes:");for(let o of t.notes||[])e.push(...ze(o))}if(t.groups!==void 0){e.push("groups:");for(let o of t.groups||[])e.push(...ze(o))}return e.join(`
`)}if(t.styles!==void 0){e.push("styles:");for(let[o,i]of Object.entries(t.styles)){e.push(`  ${o}:`);for(let[s,a]of Object.entries(i))e.push(...Ge(s,a,4,6))}}let n=t.canvas||{},r=Object.entries(n).filter(([o])=>!n.auto||o!=="width"&&o!=="height");if(n.auto&&r.length===1)e.push("canvas: auto");else if(r.length){e.push("canvas:");for(let[o,i]of r)e.push(...Ge(o,i,2,4))}e.push("nodes:");for(let o of t.nodes||[])e.push(...ze(o));e.push("edges:");for(let o of t.edges||[])e.push(...ze(o));return e.join(`
`)}var rt={horizontalAspectRatio:4,verticalAspectRatio:5,minimumNodeCount:8,minimumDominantPath:8,minimumPathCoverage:.75,maximumBranchingRatio:.2};function Sr(t){return{width:Number(t.size?.width)||H.width,height:Number(t.size?.height)||H.height}}function pi(t){if(t.nodes.some(g=>g.children?.length))return null;let e=t.nodes.map(g=>g.id),n=new Map(e.map((g,m)=>[g,m])),r=new Set(e),o=new Map(e.map(g=>[g,[]])),i=new Map(e.map(g=>[g,[]]));for(let g of t.edges){if(!r.has(g.source)||!r.has(g.target)||g.source===g.target)return null;i.get(g.source).push(g.target),o.get(g.target).push(g.source)}let s=new Set,a=e.length?[e[0]]:[];for(;a.length;){let g=a.pop();s.has(g)||(s.add(g),a.push(...o.get(g),...i.get(g)))}if(s.size!==e.length)return null;let c=new Map(e.map(g=>[g,o.get(g).length])),d=e.filter(g=>c.get(g)===0),l=[];for(;d.length;){d.sort((m,f)=>n.get(m)-n.get(f));let g=d.shift();l.push(g);for(let m of i.get(g)){let f=c.get(m)-1;c.set(m,f),f===0&&d.push(m)}}if(l.length!==e.length)return null;let u=new Map;for(let g of l){let m=o.get(g).map(f=>u.get(f)||[f]);m.sort((f,E)=>E.length-f.length||n.get(f[0])-n.get(E[0])),u.set(g,[...m[0]||[],g])}let p=[...u.values()].sort((g,m)=>m.length-g.length||n.get(g[0])-n.get(m[0]))[0]||[],h=e.filter(g=>o.get(g).length>1||i.get(g).length>1).length;return{order:l,dominantPath:p,incoming:o,outgoing:i,branchingNodes:h}}function vr(t){let e=new O(t).entries;if(!e.length)return null;let n=Math.min(...e.map(({bounds:s})=>s.x)),r=Math.min(...e.map(({bounds:s})=>s.y)),o=Math.max(...e.map(({bounds:s})=>s.x+s.width)),i=Math.max(...e.map(({bounds:s})=>s.y+s.height));return{width:o-n,height:i-r}}function kr(t){let e=t.nodes.length;if(e<rt.minimumNodeCount||t.nodes.some(l=>!l.position))return null;let n=pi(t),r=vr(t);if(!n||!r||!r.width||!r.height)return null;let o=r.width>=r.height?"horizontal":"vertical",i=o==="horizontal"?r.width/r.height:r.height/r.width,s=o==="horizontal"?rt.horizontalAspectRatio:rt.verticalAspectRatio,a=n.dominantPath.length,c=a/e,d=n.branchingNodes/e;return i<s||a<rt.minimumDominantPath||c<rt.minimumPathCoverage||d>rt.maximumBranchingRatio?null:{graph:n,analysis:{direction:o,width:Math.round(r.width),height:Math.round(r.height),aspectRatio:i,dominantPathLength:a,nodeCount:e,pathCoverage:c,branchingNodes:n.branchingNodes,reason:`the dominant path contains ${a} of ${e} nodes (${Math.round(c*100)}%) with ${n.branchingNodes} branching node${n.branchingNodes===1?"":"s"}`}}}function Dr(t){return kr(t)?.analysis||null}function fi(t){let e=new Map(t.dominantPath.map((o,i)=>[o,i])),n=new Map;for(let o of t.order){let i=e.get(o),s=Math.max(-1,...t.incoming.get(o).map(a=>n.get(a)??-1));n.set(o,i??s)}let r=new Map(t.order.map((o,i)=>[o,i]));return[...t.order].sort((o,i)=>n.get(o)-n.get(i)||+!e.has(o)-+!e.has(i)||r.get(o)-r.get(i))}function bi(t,e){let n=e.x-t.x,r=e.y-t.y;return Math.abs(n)>=Math.abs(r)?n>=0?{source:"right",target:"left"}:{source:"left",target:"right"}:r>=0?{source:"bottom",target:"top"}:{source:"top",target:"bottom"}}function $r(t){let e=kr(t);if(!e)return null;let{analysis:n,graph:r}=e,o=ne(t),i=typeof t.layout=="object"?t.layout:void 0,s=Number(i?.stageGap)||120,a=Number(i?.siblingGap)||60,c=new Map(t.nodes.map(b=>[b.id,b])),d=Math.max(...t.nodes.map(b=>Sr(b).width)),l=Math.max(...t.nodes.map(b=>Sr(b).height)),u=n.direction==="horizontal",p=u?d+s:l+s,h=u?l+a:d+a,g=fi(r),m=Math.max(3,Math.min(Math.ceil(g.length/2),Math.ceil(Math.sqrt(g.length*h/p)))),f=R(40,o);g.forEach((b,k)=>{let w=Math.floor(k/m),D=k%m,$=c.get(b);$.position=u?{x:R(f+D*p,o),y:R(f+w*h,o)}:{x:R(f+w*h,o),y:R(f+D*p,o)}});let E=f+m*p-s+Math.max(s/2,40),F=new Map(g.map((b,k)=>[b,k]));for(let b of t.edges){let k=c.get(b.source),w=c.get(b.target);if(!k?.position||!w?.position)continue;let D=F.get(k.id),$=F.get(w.id),C=Math.floor(D/m),P=Math.floor($/m);if(delete b.waypoint,b.route="orthogonal",C!==P)u?(b.sourceAnchor="right",b.targetAnchor="top",b.waypoint={x:R(E,o),y:R(w.position.y-a/2,o)}):(b.sourceAnchor="bottom",b.targetAnchor="left",b.waypoint={x:R(w.position.x-a/2,o),y:R(E,o)});else{let A=bi(k.position,w.position);b.sourceAnchor=A.source,b.targetAnchor=A.target}}t.layout=u?"right":"down";let x=vr(t);return t.canvas.auto||(t.canvas.width=Math.max(Number(t.canvas.width)||0,Math.ceil(x.width+f*2)),t.canvas.height=Math.max(Number(t.canvas.height)||0,Math.ceil(x.height+f*2))),{analysis:n,before:{width:n.width,height:n.height,aspectRatio:n.aspectRatio},after:{width:Math.round(x.width),height:Math.round(x.height),aspectRatio:Math.max(x.width/x.height,x.height/x.width)}}}var yi=/^(?: {0,3}> ?)+/;function ve(t){return t.replace(yi,"")}function Le(t){let e=t.match(/^(`{3,})([\w-]*)\s*$/);return e?{marker:e[1],info:e[2]}:null}function Ve(t,e){let n=t.match(/^(`{3,})\s*$/);return!!(n&&n[1].length>=e.length)}function ot(t,e,n,r=t.length){for(let o=e;o<r;o+=1)if(Ve(ve(t[o]),n))return o;return-1}var xi=["document","diagram"];function Tt(t){let e=t.replace(/\r\n/g,`
`).split(`
`),n=e.findIndex(i=>i.trim()!=="");if(n===-1||e[n]!=="---")return{content:t,frontmatter:{}};let r=e.indexOf("---",n+1);if(r===-1)return{content:t,frontmatter:{}};let o={};for(let i of e.slice(n+1,r)){if(!i.trim()||i.trimStart().startsWith("#"))continue;let s=i.match(/^([^:]+):\s*(.*)$/);if(!s)throw new Error(`Cannot parse document frontmatter line: ${i}`);o[s[1]]=Re(s[2])}return{content:e.slice(r+1).join(`
`),frontmatter:o}}function gt(t){let e=Tt(t),n=String(e.frontmatter.theme??"auto"),r=String(e.frontmatter.colourScheme??"classic"),o=String(e.frontmatter.doctype??"document");if(!yt.includes(n))throw new Error(`Unsupported document theme: ${n}`);let i=n,s=wt(i);if(!Object.prototype.hasOwnProperty.call(Fe,r))throw new Error(`Unsupported document colour scheme: ${r}`);let a=r;if(!xi.includes(o))throw new Error(`Unsupported document doctype: ${o}`);return{...e,theme:i,resolvedTheme:s,colourScheme:a,doctype:o}}function it(t){let e=gt(t),n=e.content.replace(/\r\n/g,`
`).split(`
`),r=0,o=new Set,i=!1,s=null;for(let a of n){let c=ve(a);if(s){Ve(c,s)&&(s=null);continue}let d=Le(c);if(d){s=d.marker;continue}if(/^:::diagram\s+\{\s*id=/.test(c)){i=!0;break}}for(;r<n.length;){let a=ve(n[r]),c=Le(a);if(!c){r+=1;continue}let d=ot(n,r+1,c.marker);if(d===-1)throw new Error("Unclosed code block.");if(c.info==="diagram"){let l=n.slice(r+1,d).map(p=>ve(p)).join(`
`);Se(l,e.colourScheme);let u=l.match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m)?.slice(1).find(Boolean);if(u){if(o.has(u))throw new Error(`Duplicate diagram id: ${u}`);o.add(u)}else if(i)throw new Error("Every diagram requires an id when using diagram references.")}r=d+1}return e}function Lt(t){let e=t.match(/^id:\s*(.*?)\s*$/m)?.[1];if(e===void 0)return null;try{let n=Re(e);return typeof n=="string"?n:null}catch{return null}}function at(t){let e=t.match(/[^\r\n]*(?:\r\n|\r|\n|$)/g)?.filter((u,p,h)=>u.length>0||p<h.length-1)||[],n=e.map(u=>u.replace(/\r\n$|[\r\n]$/,"")),r=[],o=0;for(let u of e)r.push(o),o+=u.length;let i=(u,p)=>({line:u+1,column:p+1,offset:(r[u]??t.length)+p}),s=u=>{let p=n[u]||"",h=ve(p),g=p.length-h.length;return{start:i(u,g),end:i(u,p.length)}},a=0,c=n.findIndex(u=>u.trim()!=="");if(c!==-1&&n[c]==="---"){let u=n.indexOf("---",c+1);u!==-1&&(a=u+1)}let d=[],l=a;for(;l<n.length;){let u=Le(ve(n[l]));if(!u){l+=1;continue}let p=ot(n,l+1,u.marker);if(p===-1)break;if(u.info==="diagram"){let h=n.slice(l+1,p).map((E,F)=>s(l+1+F)),g=n.slice(l+1,p).map(E=>ve(E)).join(`
`),m=s(l),f=s(p);d.push({id:Lt(g),source:g,index:d.length,fenceRange:{start:m.start,end:f.end},bodyRange:h.length?{start:h[0].start,end:h[h.length-1].end}:{start:m.end,end:f.start},lineRanges:h})}l=p+1}return d}function Ue(t){let e=2166136261;for(let n=0;n<t.length;n+=1)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e.toString(16).padStart(8,"0")}function Pt(t){let e=t.split(`
`),n=e.map(h=>h.endsWith("\r")?h.slice(0,-1):h),o=e.filter(h=>h.endsWith("\r")).length*2>e.length-1?"\r":"",i=t.replace(/\r\n/g,`
`),{content:s,frontmatter:a}=Tt(i),c=String(a.colourScheme||"classic"),d=[],l=i.split(`
`).length-s.split(`
`).length,u=0,p=0;for(;l<e.length;){let h=Le(ve(n[l]));if(!h){l+=1;continue}let g=ot(n,l+1,h.marker);if(g===-1)break;if(h.info==="diagram"){let m=n.slice(l+1,g).map(E=>ve(E)).join(`
`),f=Se(m,c);if(f.type==="flowchart"&&br(f)){let E=n[l],F=E.slice(0,E.length-ve(E).length);d.push({start:l+1,end:g,lines:Be(f).split(`
`).map(x=>`${F}${x}${o}`)}),u+=1}else p+=1}l=g+1}return{source:Sn(e,d).join(`
`),baked:u,preserved:p,fences:d}}function Sn(t,e){let n=[...t];for(let r of[...e].reverse())n.splice(r.start,r.end-r.start,...r.lines);return n}function Fr(t){let e=it(t),n=at(t).reverse(),r=[],o=t;for(let i of n){let s=Nr(o,i,e.colourScheme);s.changed&&s.layout&&(o=s.source,r.unshift(s.layout))}return{source:o,changed:r.length>0,layouts:r}}function Nr(t,e,n){let r=Se(e.source,n);if(r.type!=="flowchart")return{source:t,changed:!1,layout:null};let o=$r(r);if(!o)return{source:t,changed:!1,layout:null};let i=t.split(`
`),s=e.fenceRange.start.line-1,a=e.fenceRange.end.line-1,c=i[s].endsWith("\r")?i[s].slice(0,-1):i[s],d=c.slice(0,c.length-ve(c).length),u=i.filter(h=>h.endsWith("\r")).length*2>i.length-1?"\r":"",p=Be(r).split(`
`).map(h=>`${d}${h}${u}`);return i.splice(s+1,a-s-1,...p),{source:i.join(`
`),changed:!0,layout:o}}function Ar(t,e){let n=it(t),r=at(t).find(o=>o.index===e);if(!r)throw new Error(`Diagram ${e+1} does not exist.`);return Nr(t,r,n.colourScheme)}function Mr(t,e){return Lt(t)===null?`id: ${e}
${t}`:t.replace(/^id:\s*(?:"[^"]+"|[^\s#]+)\s*$/m,()=>`id: ${e}`)}function vn(t,e,n){let r=t.replace(/\r\n/g,`
`),o=r.split(`
`),i=o.findIndex(l=>l.trim()!==""),s=i!==-1&&o[i]==="---",a=s?o.indexOf("---",i+1):-1;if(!s||a===-1)return`---
${e}: ${n}
---
${r}`;let c=!1,d=o.slice(i+1,a).map(l=>{if(!l.trim()||l.trimStart().startsWith("#"))return l;let u=l.match(/^([^:]+):\s*(.*)$/);return u&&u[1]===e?(c=!0,`${e}: ${n}`):l});return c||d.push(`${e}: ${n}`),[...o.slice(0,i+1),...d,...o.slice(a)].join(`
`)}function Cr(t,e){return vn(t,"theme",e)}function Tr(t,e){return vn(t,"colourScheme",e)}function Lr(t,e){return vn(t,"doctype",e)}function Pr(t,e){let n=e.trim(),r=n?t.indexOf(n):-1;return r===-1?null:{start:r,end:r+n.length}}function Rr(t,e){let n=Number.parseFloat(globalThis.getComputedStyle(t).lineHeight)||20,r=t.value.slice(0,e.start).split(`
`).length-1,o=Math.max(1,Math.floor(t.clientHeight/n));t.scrollTop=Math.max(0,(r-Math.floor(o/2))*n)}function We(t,e,n){let r=Math.min(t.x,e.x),o=Math.max(t.x,e.x),i=Math.min(t.y,e.y),s=Math.max(t.y,e.y);if(o<=n.x||r>=n.x+n.width||s<=n.y||i>=n.y+n.height)return!1;if(t.x===e.x||t.y===e.y)return!0;let a=d=>(e.x-t.x)*(d.y-t.y)-(e.y-t.y)*(d.x-t.x),c=[{x:n.x,y:n.y},{x:n.x+n.width,y:n.y},{x:n.x+n.width,y:n.y+n.height},{x:n.x,y:n.y+n.height}].map(a);return c.some(d=>d>0)&&c.some(d=>d<0)}function Rt(t,e){return t.slice(1).some((n,r)=>e.some(o=>We(t[r],n,o)))}var wi=20,Ei=220;function Br(t){return[...new Set(t.map(e=>Math.round(e*100)/100))].sort((e,n)=>e-n)}var kn=[{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}];function Ir(t){return t.x>0?0:t.x<0?1:t.y>0?2:3}function Dn(t,e,n,r,o,i=24,s=wi){let a={x:t.x+n.x*i,y:t.y+n.y*i},c={x:e.x+r.x*i,y:e.y+r.y*i},d=Br([t.x,e.x,a.x,c.x,...o.flatMap(A=>[A.x-s,A.x+A.width+s])]),l=Br([t.y,e.y,a.y,c.y,...o.flatMap(A=>[A.y-s,A.y+A.height+s])]),u=new Map(d.map((A,L)=>[A,L])),p=new Map(l.map((A,L)=>[A,L])),h=A=>{let L=u.get(Math.round(A.x*100)/100),N=p.get(Math.round(A.y*100)/100);return L===void 0||N===void 0?null:{column:L,row:N}},g=h(a),m=h(c);if(!g||!m)return null;let f=(A,L)=>!o.some(N=>We(A,L,N));if(!f(t,a)||!f(e,c))return null;let E=d.length*l.length*4,F=(A,L,N)=>(L*d.length+A)*4+N,x=new Float64Array(E).fill(Number.POSITIVE_INFINITY),b=new Int32Array(E).fill(-1),k=Ir({x:-r.x,y:-r.y}),w=Ir(n),D=F(g.column,g.row,w);x[D]=0;let $=[{key:D,cost:0}],C=-1;for(;$.length;){$.sort((q,_)=>q.cost-_.cost||q.key-_.key);let A=$.shift();if(A.cost>x[A.key])continue;let L=A.key%4,N=(A.key-L)/4,B=N%d.length,z=(N-B)/d.length;if(B===m.column&&z===m.row&&L===k){C=A.key;break}let M={x:d[B],y:l[z]};for(let q=0;q<4;q=q+1){let _=kn[q];if(_.x===-kn[L].x&&_.y===-kn[L].y)continue;let j=B+_.x,X=z+_.y;if(j<0||j>=d.length||X<0||X>=l.length)continue;let re={x:d[j],y:l[X]};if(!f(M,re))continue;let K=A.cost+Math.hypot(re.x-M.x,re.y-M.y)+(q===L?0:Ei),xe=F(j,X,q);K<x[xe]&&(x[xe]=K,b[xe]=A.key,$.push({key:xe,cost:K}))}}if(C===-1)return null;let P=[];for(let A=C;A!==-1;A=b[A]){let L=A%4,N=(A-L)/4,B=N%d.length,z=(N-B)/d.length;P.unshift({x:d[B],y:l[z]})}return $n([t,...P,e])}function $n(t){let e=t.filter((n,r)=>r===0||n.x!==t[r-1].x||n.y!==t[r-1].y);return e.filter((n,r)=>{if(r===0||r===e.length-1)return!0;let o=e[r-1],i=e[r+1];return!(o.x===n.x&&n.x===i.x||o.y===n.y&&n.y===i.y)})}function qr(t,e,n){let r=n.x-e.x,o=n.y-e.y,i=Math.hypot(r,o),s=u=>i?Math.abs(r*(u.y-e.y)-o*(u.x-e.x))/i:Math.hypot(u.x-e.x,u.y-e.y),c=[...t.slice(1,-1),...t.slice(1).map((u,p)=>({x:(t[p].x+u.x)/2,y:(t[p].y+u.y)/2}))];if(!c.length)return null;let d=Math.max(...c.map(s));if(!d)return null;let l={x:(e.x+n.x)/2,y:(e.y+n.y)/2};return c.filter(u=>s(u)===d).reduce((u,p)=>Math.hypot(p.x-l.x,p.y-l.y)<Math.hypot(u.x-l.x,u.y-l.y)?p:u)}function ge(t){return String(t??"").replace(/\r\n/g,`
`).split(`
`)}var Si="iljI|!.,;:'`()[]{}/\\",vi="tfr",ki="mwMW";function Di(t){return t===" "?.26:Si.includes(t)?.28:vi.includes(t)?.33:ki.includes(t)?.85:t>="0"&&t<="9"?.56:t>="A"&&t<="Z"?.66:.55}function ct(t,e,n=!1){let r=0;for(let o of String(t??""))r+=Di(o);return r*e*(n?1.03:1)}function zr(t,e,n,r=!1){return e>0?t.flatMap(o=>{if(ct(o,n,r)<=e)return[o];let i=[],s="";for(let a of o.split(/(?<=\s)/)){let c=s+a;s&&ct(c.trimEnd(),n,r)>e?(i.push(s.trimEnd()),s=a.trimStart()):s=c}return i.push(s.trimEnd()),i.filter((a,c)=>a||!c)}):t}function ke(t,e,n,r,o,i,s="middle"){if(!n.length)return"";let a=n.map((c,d)=>{let l=d===0?"":` dy="${r}"`;return`<tspan x="${t}"${l}>${v(c)||" "}</tspan>`}).join("");return`<text x="${t}" y="${e}" text-anchor="${s}" class="${o}" fill="${v(i)}">${a}</text>`}function De(t,e,n,r,o){let i=t.shape,s=e+r/2,a=n+o/2,c={x:e+12,y:n+12,width:r-24,height:o-24},d={top:{x:s,y:n},right:{x:e+r,y:a},bottom:{x:s,y:n+o},left:{x:e,y:a}},l;if(i==="circle"){let u=Math.min(r,o),p=s-u/2,h=a-u/2,g=u/2;c.x=p+g*.3,c.y=h+g*.3,c.width=g*1.4,c.height=g*1.4,d.top.y=h,d.right.x=p+u,d.bottom.y=h+u,d.left.x=p,l=`<circle class="docdiagram-node-body" cx="${s}" cy="${a}" r="${g}"/>`}else if(i==="oval")c.x+=r*.1,c.width-=r*.2,l=`<ellipse class="docdiagram-node-body" cx="${s}" cy="${a}" rx="${r/2}" ry="${o/2}"/>`;else if(i==="database"){let u=Math.min(o*.22,18);c.y+=u/2,c.height-=u,l=`<path class="docdiagram-node-body" d="M ${e} ${n+u} C ${e} ${n-u/3} ${e+r} ${n-u/3} ${e+r} ${n+u} V ${n+o-u} C ${e+r} ${n+o+u/3} ${e} ${n+o+u/3} ${e} ${n+o-u} Z"/><path class="docdiagram-node-detail" d="M ${e} ${n+u} C ${e} ${n+u*2.3} ${e+r} ${n+u*2.3} ${e+r} ${n+u}" fill="none"/>`}else if(i==="diamond")c.x+=r*.25,c.y+=o*.25,c.width-=r*.5,c.height-=o*.5,d.top={x:s,y:n},d.right={x:e+r,y:a},d.bottom={x:s,y:n+o},d.left={x:e,y:a},l=`<polygon class="docdiagram-node-body" points="${s},${n} ${e+r},${a} ${s},${n+o} ${e},${a}"/>`;else if(i==="rhombus"){let u=Math.min(r*.2,o*.6);c.x+=u,c.width-=u*2,d.left.x=e+u/2,d.right.x=e+r-u/2,l=`<polygon class="docdiagram-node-body" points="${e+u},${n} ${e+r},${n} ${e+r-u},${n+o} ${e},${n+o}"/>`}else if(i==="flattened-hexagon"){let u=Math.min(r*.18,o*.7);c.x+=u,c.width-=u*2,l=`<polygon class="docdiagram-node-body" points="${e+u},${n} ${e+r-u},${n} ${e+r},${a} ${e+r-u},${n+o} ${e+u},${n+o} ${e},${a}"/>`}else if(i==="chevron"){let u=Math.min(r*.16,o*.45);c.x+=u*1.175,c.width-=u*1.35,d.left.x=e+u,l=`<polygon class="docdiagram-node-body" points="${e},${n} ${e+r-u},${n} ${e+r},${a} ${e+r-u},${n+o} ${e},${n+o} ${e+u},${a}"/>`}else if(i==="right-chevron"){let u=Math.min(r*.16,o*.45);c.width-=u,l=`<polygon class="docdiagram-node-body" points="${e},${n} ${e+r-u},${n} ${e+r},${a} ${e+r-u},${n+o} ${e},${n+o}"/>`}else if(i==="document"){let u=Math.max(12,Math.min(26,Math.min(r,o)*.18));c.width-=u*.45,c.y+=2,c.height-=2,l=`<path class="docdiagram-node-body" d="M ${e} ${n} H ${e+r-u} L ${e+r} ${n+u} V ${n+o} H ${e} Z M ${e+r-u} ${n} V ${n+u} H ${e+r}"/>`}else i==="text"?l=`<rect class="docdiagram-node-body" x="${e}" y="${n}" width="${r}" height="${o}"/>`:l=`<rect class="docdiagram-node-body" x="${e}" y="${n}" width="${r}" height="${o}" rx="12"/>`;return{bodyMarkup:l,textBounds:c,anchors:d}}function dt(t,e,n,r,o){let i,s;typeof t=="number"?(i={x:t,y:e,width:n||0,height:r||0},s=o):(i=t,s=e);let a=20,c=15,d=zr(ge(s.label),i.width,16,!0),l=s.subtitle?zr(ge(s.subtitle),i.width,13):[],u=l.length?6:0,p=d.length*a,h=l.length*c,g=p+u+h,m=s.textHAlign||"center",f=m==="left"?i.x:m==="right"?i.x+i.width:i.x+i.width/2,E=m==="left"?"start":m==="right"?"end":"middle",F=i.y+i.height/2,x=s.textVAlign==="top"?i.y:F-g/2;return{centerX:f,textAnchor:E,labelLines:d,subtitleLines:l,labelLineHeight:a,subtitleLineHeight:c,labelStartY:x+a*.72,subtitleStartY:x+p+u+c*.72}}function Bt(t,e,n){return t.bodyMarkup.replace("/>",` fill="${v(e.fill||"")}" stroke="${v(e.stroke||"")}" stroke-width="${n}"/>`).replace('class="docdiagram-node-detail"',`class="docdiagram-node-detail" stroke="${v(e.stroke||"")}" stroke-width="${n}"`)}function Hr(t){return{top:{x:0,y:-1},right:{x:1,y:0},bottom:{x:0,y:1},left:{x:-1,y:0}}[t]}function Y(t){return`${t.x} ${t.y}`}function jr(t){let e=t.slice(1).map((o,i)=>{let s=t[i];return{start:s,end:o,length:Math.hypot(o.x-s.x,o.y-s.y)}}),r=e.reduce((o,i)=>o+i.length,0)/2;for(let o of e){if(r<=o.length||o===e[e.length-1]){let i=o.length?r/o.length:0;return{x:o.start.x+(o.end.x-o.start.x)*i,y:o.start.y+(o.end.y-o.start.y)*i}}r-=o.length}return t[0]}function Fn(t,e){return Math.min(Math.max(Math.abs(e.x-t.x),Math.abs(e.y-t.y),80)/2,140)}var $i={along:t=>t.x,cross:t=>t.y,point:(t,e)=>({x:t,y:e})},Fi={along:t=>t.y,cross:t=>t.x,point:(t,e)=>({x:e,y:t})},st=24;function Ni(t,e,n,r,o,i){let s=o.along(t),a=o.cross(t),c=o.along(e),d=o.cross(e),l=o.along(n),u=o.cross(r);if(Math.sign(c-s)===l&&Math.sign(a-d)===u)return[t,o.point(c,a),e];let p=Math.sign(c-s)===l?(s+c)/2:s+l*i,h=Math.sign(a-d)===u?(a+d)/2:d+u*i;return[t,o.point(p,a),o.point(p,h),o.point(c,h),e]}function Ai(t,e,n,r,o,i){let s=o.along(t),a=o.cross(t),c=o.along(e),d=o.cross(e),l=o.along(n),u=o.along(r),p=Math.sign(c-s)===l;if(l===-u&&p)return a===d?[t,e]:[t,o.point((s+c)/2,a),o.point((s+c)/2,d),e];if(l===u&&Math.abs(a-d)>=st){let E=l>0?Math.max(s,c)+st:Math.min(s,c)-st;return[t,o.point(E,a),o.point(E,d),e]}let h=i*2,g=s+l*h,m=c+u*h;if(g===m)return[t,o.point(g,a),o.point(g,d),e];let f=Math.min(a,d)-h;return[t,o.point(g,a),o.point(g,f),o.point(m,f),o.point(m,d),e]}function Mi(t,e,n,r){if(t.x===e.x&&t.y===e.y)return[t,e];let o=Math.max(Math.abs(e.x-t.x),Math.abs(e.y-t.y)),i=Math.max(o/4,st),s=n.x!==0,a=s?$i:Fi;return s===(r.x!==0)?Ai(t,e,n,r,a,i):Ni(t,e,n,r,a,i)}function Ci(t,e,n){for(let[r,o]of[[t,e],[t,n],[n,e]]){let i=Math.hypot(o.x-r.x,o.y-r.y);if(i>0)return{x:(o.x-r.x)/i,y:(o.y-r.y)/i}}return{x:1,y:0}}function He(t,e,n,r,o="orthogonal",i,s){let a=Hr(n),c=Hr(r),d=a.x!==0,l=c.x!==0;if(!i&&s?.length&&o!=="orthogonal"&&Rt([t,e],s))for(let m of[20,60,120]){let f=Dn(t,e,a,c,s,st,m),E=f&&qr(f,t,e);if(!E)continue;let F=He(t,e,n,r,o,E);if(!Rt(pt(F.path),s)){i=E;break}}let u,p,h,g;if(i&&o==="straight")u=`M ${Y(t)} L ${Y(i)} L ${Y(e)}`,p=i,h={x:i.x-t.x,y:i.y-t.y},g={x:e.x-i.x,y:e.y-i.y};else if(i&&o==="curved"){let m=Fn(t,i),f=Fn(i,e),E=Ci(t,e,i),F={x:t.x+a.x*m,y:t.y+a.y*m},x={x:i.x-E.x*m,y:i.y-E.y*m},b={x:i.x+E.x*f,y:i.y+E.y*f},k={x:e.x+c.x*f,y:e.y+c.y*f};u=[`M ${Y(t)}`,`C ${Y(F)} ${Y(x)} ${Y(i)}`,`C ${Y(b)} ${Y(k)} ${Y(e)}`].join(" "),p=i,h={x:F.x-t.x,y:F.y-t.y},g={x:e.x-k.x,y:e.y-k.y}}else if(i){let f=(i.x-t.x)*a.x+(i.y-t.y)*a.y<=0,E=(i.x-e.x)*c.x+(i.y-e.y)*c.y<=0,F={x:t.x+a.x*24,y:t.y+a.y*24},x={x:e.x+c.x*24,y:e.y+c.y*24},b=f?[t,F,d?{x:F.x,y:i.y}:{x:i.x,y:F.y},i]:[t,d?{x:i.x,y:t.y}:{x:t.x,y:i.y},i],k=E?[l?{x:x.x,y:i.y}:{x:i.x,y:x.y},x,e]:[l?{x:i.x,y:e.y}:{x:e.x,y:i.y},e],w=[...b,...k].filter(($,C,P)=>C===0||$.x!==P[C-1].x||$.y!==P[C-1].y);u=`M ${Y(w[0])}${w.slice(1).map($=>` L ${Y($)}`).join("")}`,p=jr(w),h={x:w[1].x-w[0].x,y:w[1].y-w[0].y};let D=w.slice(-2);g={x:D[1].x-D[0].x,y:D[1].y-D[0].y}}else if(o==="straight")u=`M ${Y(t)} L ${Y(e)}`,p={x:(t.x+e.x)/2,y:(t.y+e.y)/2},h={x:e.x-t.x,y:e.y-t.y},g=h;else if(o==="curved"){let m=Fn(t,e),f={x:t.x+a.x*m,y:t.y+a.y*m},E={x:e.x+c.x*m,y:e.y+c.y*m};u=`M ${Y(t)} C ${Y(f)} ${Y(E)} ${Y(e)}`,p={x:(t.x+3*f.x+3*E.x+e.x)/8,y:(t.y+3*f.y+3*E.y+e.y)/8},h={x:f.x-t.x,y:f.y-t.y},g={x:e.x-E.x,y:e.y-E.y}}else{let m=Mi(t,e,a,c),f=m.filter((F,x)=>x===0||F.x!==m[x-1].x||F.y!==m[x-1].y);if(f.length===1&&(f=[t,e]),s?.length&&Rt(f,s)){let F=Dn(t,e,a,c,s,st);F&&(f=$n(F))}u=`M ${Y(f[0])}${f.slice(1).map(F=>` L ${Y(F)}`).join("")}`,p=jr(f),h={x:f[1].x-f[0].x,y:f[1].y-f[0].y};let E=f.slice(-2);g={x:E[1].x-E[0].x,y:E[1].y-E[0].y}}return{path:u,midpoint:p,startTangent:h,endTangent:g,hitPath:u}}function Nn(t,e){let n=e?13:15;return{x:t.x-n/2,y:t.y-n/2,size:n,radius:e?2:n/2,transform:e?`rotate(45 ${t.x} ${t.y})`:""}}function Or(t,e,n,r){let o=Nn(n,r),i=r?"Anchored edge waypoint":"Edge waypoint";return`<rect class="docdiagram-edge-waypoint" data-diagram-index="${t}" data-edge-index="${e}" data-anchored="${r}" x="${o.x}" y="${o.y}" width="${o.size}" height="${o.size}" rx="${o.radius}"${o.transform?` transform="${o.transform}"`:""} aria-label="${i}"/>`}function Ti(t){let e=Math.max(1,Number(t)||2),n=6+e*2.5,r=Math.max(n*.38,e/2+1);return{size:n,circleRadius:r}}function ht(t,e,n,r,o){let i=v(r),{size:s,circleRadius:a}=Ti(o),c=s/2;return e==="arrow"?`<marker id="${t}" markerWidth="${s}" markerHeight="${s}" refX="${s}" refY="${c}" markerUnits="userSpaceOnUse" orient="${n==="start"?"auto-start-reverse":"auto"}"><path fill="${i}" stroke="${i}" d="M 0 0 L ${s} ${c} L 0 ${s} z"/></marker>`:e==="circle"?`<marker id="${t}" markerWidth="${s}" markerHeight="${s}" refX="${c}" refY="${c}" markerUnits="userSpaceOnUse"><circle cx="${c}" cy="${c}" r="${a}" fill="${i}" stroke="${i}"/></marker>`:""}function It(t,e){let n={x:t.x+t.width/2,y:t.y+t.height/2},r=e.x-n.x,o=e.y-n.y,i=Math.hypot(r,o);if(!Number.isFinite(i)||i<1)return null;let s=Math.max(6,Math.min(Math.min(t.width,t.height)*.28,i*.6,44)),a={x:-o/i*s,y:r/i*s},c=[{x:n.x+a.x,y:n.y+a.y},{x:e.x,y:e.y},{x:n.x-a.x,y:n.y-a.y}],d=[...c.map(h=>h.x),t.x,t.x+t.width],l=[...c.map(h=>h.y),t.y,t.y+t.height],u=Math.min(...d),p=Math.min(...l);return{points:c,polygonPoints:c.map(h=>`${h.x},${h.y}`).join(" "),bounds:{x:u,y:p,width:Math.max(...d)-u,height:Math.max(...l)-p}}}function Li(t,e,n){let r=t.indexOf('<path class="docdiagram-node-detail"');return(r===-1?t:t.slice(0,r)).replace('class="docdiagram-node-body"',`class="${n}"`).replace("/>",` fill="${e}" stroke="none"/>`)}function An(t){return Li(t,"#000000","docdiagram-node-callout-mask-body")}function Mn(t,e){let n=e*2+8;return{x:t.bounds.x-n,y:t.bounds.y-n,width:t.bounds.width+n*2,height:t.bounds.height+n*2}}function Gr(t,e,n,r,o){let i=!!n.fill&&n.fill!=="none",s=!!n.stroke&&n.stroke!=="none",a=i?n.fill:s?"none":n.text||"none",c=Mn(t,r),d=[`<mask id="${o}" maskUnits="userSpaceOnUse" x="${c.x}" y="${c.y}" width="${c.width}" height="${c.height}">`,`<rect class="docdiagram-node-callout-mask-region" x="${c.x}" y="${c.y}" width="${c.width}" height="${c.height}" fill="#ffffff"/>`,An(e),"</mask>"].join(""),l=i?"":` mask="url(#${o})"`;return[d,a==="none"?"":`<polygon class="docdiagram-node-callout" points="${t.polygonPoints}" fill="${v(a||"")}" stroke="none"${l}/>`,s?`<polygon class="docdiagram-node-callout-outline" points="${t.polygonPoints}" fill="none" stroke="${v(n.stroke||"")}" stroke-width="${r}" stroke-linejoin="round" mask="url(#${o})"/>`:""].join("")}function pt(t,e=12){let n=[],r=/-?\d+(?:\.\d+)?/g,o={x:0,y:0};for(let[,i,s]of t.matchAll(/([MLC])\s*([^MLC]*)/g)){let a=(s.match(r)||[]).map(Number);if(i==="C"){let[c,d,l,u,p,h]=a;for(let g=1;g<=e;g+=1){let m=g/e,f=1-m;n.push({x:f**3*o.x+3*f**2*m*c+3*f*m**2*l+m**3*p,y:f**3*o.y+3*f**2*m*d+3*f*m**2*u+m**3*h})}o={x:p,y:h};continue}for(let c=0;c+1<a.length;c+=2)o={x:a[c],y:a[c+1]},n.push(o)}return n}var Pi=15,qt=16,Cn=6;function Ri(t){let e=pt(t);return e.slice(1).map((n,r)=>({start:e[r],end:n,index:r,length:Math.hypot(n.x-e[r].x,n.y-e[r].y)})).filter(n=>n.length>0).sort((n,r)=>r.length-n.length||n.index-r.index)}function Bi(t,e){return{x:t.x-e,y:t.y-e,width:t.width+e*2,height:t.height+e*2}}function Vr(t,e){return t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}function Ur(t,e){let n=Math.max(0,...t.map(i=>ct(i,Pi))),r=t.length*qt,o={x:e.x-n/2,y:e.y-r/2,width:n,height:r};return{center:e,startY:o.y+qt*.72,lines:t,bounds:o,clear:!0,conflicts:[]}}function Ii(t,e,n){let r={x:(t.start.x+t.end.x)/2,y:(t.start.y+t.end.y)/2},o=t.end.x-t.start.x,s={x:-(t.end.y-t.start.y)/t.length,y:o/t.length};(s.y>0||s.y===0&&s.x>0)&&(s={x:-s.x,y:-s.y});let a=Math.abs(s.x)*e/2+Math.abs(s.y)*n/2+Cn;return[{x:r.x+s.x*a,y:r.y+s.y*a},{x:r.x-s.x*a,y:r.y-s.y*a}]}function qi(t,e,n,r,o){let i=Bi(t.bounds,Cn),s=[];(t.bounds.x<e.x||t.bounds.y<e.y||t.bounds.x+t.bounds.width>e.x+e.width||t.bounds.y+t.bounds.height>e.y+e.height)&&s.push({kind:"canvas"});for(let a of n)Vr(i,a.bounds)&&s.push({kind:"node",id:a.id});for(let a of r)Vr(i,a.bounds)&&s.push({kind:"edge-label",edgeIndex:a.edgeIndex});for(let a of o)a.segments.some(c=>We(c.start,c.end,i))&&s.push({kind:"edge-route",edgeIndex:a.edgeIndex});return s}function zt(t,e=new O(t)){let n=t.edges.map(s=>{let a=e.getById(s.source),c=e.getById(s.target);if(!a||!c)return null;let d=De(a.node,a.bounds.x,a.bounds.y,a.bounds.width,a.bounds.height).anchors[s.sourceAnchor||"right"],l=De(c.node,c.bounds.x,c.bounds.y,c.bounds.width,c.bounds.height).anchors[s.targetAnchor||"left"],u=e.entries.filter(({node:h})=>!e.isRelated(h,a.node)&&!e.isRelated(h,c.node)),p=He(d,l,s.sourceAnchor||"right",s.targetAnchor||"left",s.route||"orthogonal",s.waypoint,s.waypoint?void 0:u.map(h=>h.bounds));return{sourceAnchor:d,targetAnchor:l,path:p,label:null}}),r=n.map((s,a)=>s?{edgeIndex:a,segments:Ri(s.path.path)}:null).filter(s=>!!s),o=[],i={x:0,y:0,width:Number(t.canvas.width)||1e3,height:Number(t.canvas.height)||560};return n.forEach((s,a)=>{let c=t.edges[a];if(!s||!c.label)return;let d=e.getById(c.source),l=e.getById(c.target),u=ge(c.label),p=Ur(u,{x:0,y:0}).bounds,h=r.find(F=>F.edgeIndex===a)?.segments||[],g=h.flatMap(F=>Ii(F,p.width,p.height).map(x=>({center:x,hostSegmentIndex:F.index})));g.length||g.push({center:{x:s.path.midpoint.x,y:s.path.midpoint.y-p.height/2-Cn},hostSegmentIndex:-1});let m=e.entries.filter(({node:F})=>!e.isRelated(F,d.node)&&!e.isRelated(F,l.node)).map(({node:F,bounds:x})=>({id:F.id,bounds:x})),f=r.filter(F=>F.edgeIndex!==a),E=null;for(let{center:F,hostSegmentIndex:x}of g){let b=Ur(u,F),k=(c.route||"orthogonal")==="curved"?1:0,w=h.filter(D=>x<0||Math.abs(D.index-x)>k);if(b.conflicts=qi(b,i,m,o,[...f,{edgeIndex:a,segments:w}]),b.clear=b.conflicts.length===0,E||(E=b),b.clear){E=b;break}}s.label=E,E&&o.push({edgeIndex:a,bounds:E.bounds})}),n}function zi(t,e){return t||`diagram ${e+1}`}function Hi(t,e){let n=new Map,r=[],o="";return t.source.split(`
`).forEach((i,s)=>{let a=i.match(/^([A-Za-z_][\w-]*):/);a&&(o=a[1]);let c=i.match(/^\s*-\s+id:\s*(?:"([^"]+)"|'([^']+)'|([^\s#]+))/),d=t.lineRanges[s];c&&d&&n.set(c[1]||c[2]||c[3],d),o==="edges"&&/^\s*-\s+[^:]+:/.test(i)&&d&&r.push(d)}),e.map(i=>i.kind==="node"?{...i,sourceRange:n.get(i.id)}:{...i,sourceRange:r[i.index]})}function ji(t,e){let n=Math.min(t.x+t.width,e.x+e.width)-Math.max(t.x,e.x),r=Math.min(t.y+t.height,e.y+e.height)-Math.max(t.y,e.y);return n>0&&r>0?{width:n,height:r}:null}function Oi(t,e){let n=t.entries;for(let r=0;r<n.length;r+=1)for(let o=r+1;o<n.length;o+=1){let i=n[r],s=n[o];if(t.isRelated(i.node,s.node))continue;let a=ji(i.bounds,s.bounds);a&&e("node-overlap",`Nodes "${i.node.id}" and "${s.node.id}" overlap by ${Math.round(a.width)} by ${Math.round(a.height)} units.`,"warning",[{kind:"node",id:i.node.id},{kind:"node",id:s.node.id}])}}function Gi(t,e){for(let{node:n}of t.entries){let r=Number(n.size?.width)||H.width,o=Number(n.size?.height)||H.height,{textBounds:i}=De(n,0,0,r,o),s=dt(i,n),a=24;if(n.shape==="text"){let d=ge(n.label).find(l=>ct(l.replace(/^#{1,2}\s+/,""),/^#{1,2}\s/.test(l)?24:16)>i.width+a);d!==void 0&&e("label-overflow",`Node "${n.id}" has a line wider than its shape: "${d.trim()}".`,"warning",[{kind:"node",id:n.id}])}let c=s.labelLines.length*s.labelLineHeight+(s.subtitleLines.length?6+s.subtitleLines.length*s.subtitleLineHeight:0);c>i.height+a&&e("label-overflow",`Node "${n.id}" needs ${Math.ceil(c)} units of text height but its shape offers ${Math.floor(i.height+a)}.`,"warning",[{kind:"node",id:n.id}])}}function Vi(t,e,n){let r=i=>({kind:"edge",index:i,source:t.edges[i].source,target:t.edges[i].target}),o=zt(t,e);for(let[i,s]of(t.edges||[]).entries()){let a=r(i),c=e.getById(s.source),d=e.getById(s.target);for(let[h,g,m]of[["source",s.source,c],["target",s.target,d]])m||n("unknown-edge-endpoint",`Edge "${s.source}" -> "${s.target}" names a ${h} node "${g}" that does not exist, so it is not drawn.`,"error",[a]);if(!c||!d)continue;let l=e.entries.filter(({node:h})=>!e.isRelated(h,c.node)&&!e.isRelated(h,d.node)),u=o[i],p=pt(u.path.path);for(let h of l)p.slice(1).some((m,f)=>We(p[f],m,h.bounds))&&n("edge-crosses-node",`Edge "${s.source}" -> "${s.target}" passes through unrelated node "${h.node.id}".`,"warning",[a,{kind:"node",id:h.node.id}]);if(u.label&&!u.label.clear){let h=[a],g=new Set([`edge:${i}`]);for(let m of u.label.conflicts){if(m.kind==="canvas")continue;let f=m.kind==="node"?`node:${m.id}`:`edge:${m.edgeIndex}`;g.has(f)||(g.add(f),h.push(m.kind==="node"?{kind:"node",id:m.id}:r(m.edgeIndex)))}n("edge-label-overlap",`Edge "${s.source}" -> "${s.target}" has no clear position for its label; the deterministic fallback remains visible.`,"warning",h)}}}function Tn(t){let e=[],n=Ue(t);try{it(t)}catch(o){return e.push({severity:"error",rule:"schema",message:o.message}),{sourceHash:n,messages:e,errorCount:1,warningCount:0}}let r=gt(t).colourScheme;return at(t).forEach(o=>{let i=Se(o.source,r);if(i.type!=="flowchart")return;let s=zi(o.id,o.index),a=(l,u,p="warning",h=[])=>{e.push({severity:p,rule:l,message:u,diagram:s,location:{diagramId:o.id,diagramIndex:o.index,fenceRange:o.fenceRange,subjects:Hi(o,h)}})},c=new O(i);Vi(i,c,a),Oi(c,a),Gi(c,a);let d=Dr(i);d&&(a("unbalanced-aspect-ratio",`Fitted content is ${d.width} by ${d.height} units (${d.aspectRatio.toFixed(1)}:1 ${d.direction}); ${d.reason}.`,"warning"),e[e.length-1].suggestedAction={id:"wrap-linear-flow",label:`Wrap this ${d.direction} flow`,diagramIndex:o.index})}),{sourceHash:n,messages:e,errorCount:e.filter(o=>o.severity==="error").length,warningCount:e.filter(o=>o.severity==="warning").length}}function Wr(t){return t.messages.map(e=>[e.severity,e.diagram?`[${e.diagram}]`:null,e.message,`(${e.rule})`].filter(Boolean).join(" ")).join(`
`)}var Ui=[{type:"comment",pattern:"\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/"},{type:"string",pattern:"`(?:\\\\.|[^`\\\\])*`|\"(?:\\\\.|[^\"\\\\\\n])*\"|'(?:\\\\.|[^'\\\\\\n])*'"}],je={type:"number",pattern:"\\b(?:0[xXbBoO][\\da-fA-F_]+|\\d[\\d_]*(?:\\.[\\d_]+)?(?:[eE][+-]?\\d+)?)\\b"};function Ae(...t){return`\\b(?:${t.join("|")})\\b`}var Wi=Ae("async","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","export","extends","finally","for","from","function","get","if","implements","import","in","instanceof","interface","let","new","of","private","protected","public","readonly","return","satisfies","set","static","super","switch","this","throw","try","type","typeof","var","void","while","yield"),_r={clike:[...Ui,{type:"keyword",pattern:Wi},{type:"literal",pattern:Ae("true","false","null","undefined","NaN","Infinity")},{type:"type",pattern:Ae("any","bigint","boolean","never","number","object","string","symbol","unknown")},je],python:[{type:"comment",pattern:"#[^\\n]*"},{type:"string",pattern:`(?:[rRbBfFuU]{0,2})(?:"""[\\s\\S]*?"""|'''[\\s\\S]*?'''|"(?:\\\\.|[^"\\\\\\n])*"|'(?:\\\\.|[^'\\\\\\n])*')`},{type:"keyword",pattern:Ae("and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield")},{type:"literal",pattern:Ae("True","False","None","self","cls")},je],ruby:[{type:"comment",pattern:"#[^\\n]*"},{type:"string",pattern:`"(?:\\\\.|[^"\\\\\\n])*"|'(?:\\\\.|[^'\\\\\\n])*'|:[a-zA-Z_]\\w*[?!]?`},{type:"keyword",pattern:Ae("alias","begin","break","case","class","def","do","else","elsif","end","ensure","for","if","in","module","next","raise","require","rescue","return","then","unless","until","when","while","yield")},{type:"literal",pattern:Ae("true","false","nil","self")},je],json:[{type:"attribute",pattern:'"(?:\\\\.|[^"\\\\])*"(?=\\s*:)'},{type:"string",pattern:'"(?:\\\\.|[^"\\\\])*"'},{type:"literal",pattern:Ae("true","false","null")},je],yaml:[{type:"comment",pattern:"#[^\\n]*"},{type:"attribute",pattern:"^\\s*(?:-\\s+)?[\\w.-]+(?=\\s*:(?:\\s|$))"},{type:"string",pattern:`"(?:\\\\.|[^"\\\\\\n])*"|'(?:''|[^'\\n])*'`},{type:"meta",pattern:"^---\\s*$|^\\.\\.\\.\\s*$|(?:^|\\s)[|>][+-]?\\s*$|(?:^|\\s)[&*][\\w-]+"},{type:"literal",pattern:Ae("true","false","null","yes","no","on","off","True","False","Null")},je],sql:[{type:"comment",pattern:"--[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/"},{type:"string",pattern:"'(?:''|[^'\\n])*'"},{type:"keyword",pattern:`\\b(?:${["ADD","ALL","ALTER","AND","AS","ASC","BEGIN","BETWEEN","BY","CASE","COMMIT","CREATE","CROSS","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","EXISTS","FROM","FULL","GROUP","HAVING","IN","INDEX","INNER","INSERT","INTO","IS","JOIN","LEFT","LIKE","LIMIT","NOT","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RETURNING","RIGHT","ROLLBACK","SELECT","SET","TABLE","THEN","TRANSACTION","UNION","UNIQUE","UPDATE","VALUES","VIEW","WHEN","WHERE","WITH"].join("|")})\\b`},{type:"literal",pattern:"\\b(?:NULL|TRUE|FALSE)\\b"},je],shell:[{type:"comment",pattern:"#[^\\n]*"},{type:"string",pattern:`"(?:\\\\.|[^"\\\\])*"|'[^']*'`},{type:"meta",pattern:"\\$(?:\\{[^}]*\\}|[\\w@*#?$!-]+)"},{type:"keyword",pattern:Ae("case","cd","do","done","echo","elif","else","esac","exit","export","fi","for","function","if","in","local","read","return","set","shift","source","then","unset","until","while")},{type:"attribute",pattern:"(?:^|\\s)--?[\\w-]+"},je],markup:[{type:"comment",pattern:"<!--[\\s\\S]*?-->"},{type:"meta",pattern:"<!(?:DOCTYPE|doctype)[^>]*>|<\\?[\\s\\S]*?\\?>"},{type:"tag",pattern:"<\\/?[a-zA-Z][\\w:-]*"},{type:"string",pattern:`"[^"]*"|'[^']*'`},{type:"attribute",pattern:"\\b[a-zA-Z_:][\\w:.-]*(?==)"},{type:"tag",pattern:"\\/?>"}],css:[{type:"comment",pattern:"\\/\\*[\\s\\S]*?\\*\\/"},{type:"string",pattern:`"[^"\\n]*"|'[^'\\n]*'`},{type:"meta",pattern:"@[\\w-]+"},{type:"attribute",pattern:"[a-zA-Z-]+(?=\\s*:)"},{type:"number",pattern:"#[\\da-fA-F]{3,8}\\b|\\b\\d[\\d.]*(?:px|rem|em|%|vh|vw|s|ms|deg|fr)?\\b"}],diff:[{type:"meta",pattern:"^(?:diff|index|@@|\\+\\+\\+|---)[^\\n]*"},{type:"inserted",pattern:"^\\+[^\\n]*"},{type:"deleted",pattern:"^-[^\\n]*"}],ini:[{type:"comment",pattern:"[#;][^\\n]*"},{type:"meta",pattern:"^\\s*\\[[^\\]\\n]*\\]"},{type:"attribute",pattern:"^\\s*[\\w.-]+(?=\\s*=)"},{type:"string",pattern:`"[^"\\n]*"|'[^'\\n]*'`},{type:"literal",pattern:Ae("true","false")},je]},Yi={javascript:"clike",js:"clike",jsx:"clike",mjs:"clike",cjs:"clike",typescript:"clike",ts:"clike",tsx:"clike",java:"clike",kotlin:"clike",kt:"clike",swift:"clike",scala:"clike",go:"clike",golang:"clike",rust:"clike",rs:"clike",c:"clike",cpp:"clike","c++":"clike",cs:"clike",csharp:"clike",php:"clike",dart:"clike",python:"python",py:"python",ruby:"ruby",rb:"ruby",json:"json",jsonc:"json",yaml:"yaml",yml:"yaml",sql:"sql",postgresql:"sql",mysql:"sql",bash:"shell",sh:"shell",shell:"shell",zsh:"shell",console:"shell",terminal:"shell",html:"markup",xml:"markup",svg:"markup",vue:"markup",css:"css",scss:"css",less:"css",diff:"diff",patch:"diff",ini:"ini",toml:"ini",conf:"ini"},Yr=new Map;function _i(t){let e=Yr.get(t);if(e)return e;let n=new RegExp(_r[t].map(r=>`(${r.pattern})`).join("|"),"gm");return Yr.set(t,n),n}function Xi(t){let e=String(t??"").trim().toLowerCase();return Yi[e]||null}function Xr(t,e){let n=Xi(e);if(!n)return v(t);let r=_r[n],o=_i(n);o.lastIndex=0;let i=[],s=0,a;for(;a=o.exec(t);){if(!a[0]){o.lastIndex+=1;continue}a.index>s&&i.push(v(t.slice(s,a.index)));let c=a.findIndex((p,h)=>h>0&&p!==void 0)-1,d=r[c]?.type,l=a[0].match(/^\s*/)[0],u=a[0].slice(l.length);i.push(v(l)),i.push(d&&u?`<span class="docdiagram-token-${d}">${v(u)}</span>`:v(u)),s=a.index+a[0].length}return i.push(v(t.slice(s))),i.join("")}var Ht={section:{attributes:["title","palette","fill","stroke","text"]},panel:{attributes:["title","palette","fill","stroke","text"]},callout:{attributes:["kind","title","palette","fill","stroke","text"]},grid:{attributes:["columns"]},stack:{attributes:[]},diagram:{attributes:["id"],void:!0},toc:{attributes:["depth","diagrams"],void:!0}},Ki=Object.keys(Ht);function Pn(t){return!!Ht[t].void}var Zi=/\u0001ref:([^\u0001]*)\u0001/g,Ji=/\u0001toc:([^\u0001]*)\u0001/g;function Qi(t){let e=t.replace(/\\#/g,""),n=e.indexOf("#"),r=o=>o.replace(/\u0002/g,"#");return n===-1?{hasPlaceholder:!1,before:r(e),after:"",text:r(e)}:{hasPlaceholder:!0,before:r(e.slice(0,n)),after:r(e.slice(n+1)),text:r(e.slice(0,n)+e.slice(n+1))}}function ea(t){return t.replace(/!\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/(\*\*|__|~~|\*|_)/g,"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/[\s-]+/g,"-")||"section"}function ta(t,e){let n=ea(t),r=e.headingOccurrences||(e.headingOccurrences=new Map),o=e.usedHeadingIds||(e.usedHeadingIds=new Set),i=(r.get(n)||0)+1,s=i===1?n:`${n}-${i}`;for(;o.has(s);)i+=1,s=`${n}-${i}`;return r.set(n,i),o.add(s),s}function Rn(t){let e=[],n="",r=!1,o=t.trim().replace(/^\||\|$/g,"");for(let i of o)r?(n+=i,r=!1):i==="\\"?r=!0:i==="|"?(e.push(n.trim()),n=""):n+=i;return e.push(n.trim()),e}function Kr(t){let e=Rn(t);return!e.length||!e.every(n=>/^:?-{3,}:?$/.test(n))?null:e.map(n=>n.startsWith(":")&&n.endsWith(":")?"center":n.startsWith(":")?"left":n.endsWith(":")?"right":"")}function Ye(t){return t.match(/^(\s*)([-+*]|\d+[.)])\s+(.+)$/)}function ft(t){let e=t.match(new RegExp(`^:::(${Ki.join("|")})(?:\\s+\\{(.*)\\})?\\s*$`));if(!e)return null;let n={},r=e[2];if(r!==void 0){let o=0,i=/\s*([a-z][\w-]*)=(?:"([^"]*)"|([^\s}]+))/gi,s;for(;s=i.exec(r);){if(s.index!==o||n[s[1]]!==void 0)return null;n[s[1]]=s[2]??s[3],o=i.lastIndex}if(r.slice(o).trim())return null}return{name:e[1],attributes:n}}function na(t){let e=ft(t);if(!e||e.name!=="diagram")return null;let n=Object.keys(e.attributes),r=e.attributes.id;return n.length===1&&r?{id:r}:null}function Ln(t){let e=t.match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m);return e?.[1]??e?.[2]??null}function ra(t){let e=t.match(/^caption:[ \t]*(\S.*?)\s*$/m),n=e?Re(e[1]):null;return typeof n=="string"&&n?n:null}function oa(t){return t.replace(/^(?: {0,3}> ?)+/,"")}function Jr(t){return/^:::(?:\s+.*)?$/.test(t)}function ia(t,e,n){let r=1,o=null;for(let i=e+1;i<n;i+=1){let s=t[i];if(o){Ve(s,o)&&(o=null);continue}let a=Le(s);if(a){o=a.marker;continue}let c=ft(s);if(c)Pn(c.name)||(r+=1);else if(Jr(s)&&(r-=1,!r))return i}return-1}function aa(t){return/^#[\da-f]{3,8}$/i.test(t)}function sa(t,e="classic",n="light"){let r=t.palette!==void 0;if(r&&!Ee.includes(t.palette))return null;for(let a of["fill","stroke","text"])if(t[a]!==void 0&&!aa(t[a]))return null;let o=r?fe(e,n,t.palette):null,i=Object.fromEntries(["fill","stroke","text"].filter(a=>t[a]!==void 0).map(a=>[a,t[a]])),s=Ne(o||{},i);return Object.entries(s).filter(([,a])=>a!==void 0).map(([a,c])=>`--docdiagram-component-${a}:${c}`).join(";")}function Zr(t,e=!1){let n=String(t).trim();if(n.startsWith("//")||n.startsWith("\\"))return!1;if(!n||n.startsWith("#")||n.startsWith("/")||n.startsWith("./")||n.startsWith("../")||n.startsWith("?")||e&&/^data:image\/(?:gif|jpeg|png|webp);base64,/i.test(n))return!0;let r=n.match(/^([a-z][a-z\d+.-]*):/i);return!r||["http","https","mailto"].includes(r[1].toLowerCase())}function be(t){let e=[],n=String(t).replace(/`([^`]+)`/g,(r,o)=>{let i=`\0${e.length}\0`;return e.push(`<code>${v(o)}</code>`),i});return n=n.replace(/\{ref=(?:"([^"}]+)"|([^\s}]+))\}/g,(r,o,i)=>`ref:${o??i}`),n=v(n),n=n.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(r,o,i)=>{let s=i.replace(/&amp;/g,"&");return Zr(s,!0)?`<img src="${v(s)}" alt="${o}">`:`![${o}](${v(i)})`}),n=n.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(r,o,i)=>{let s=i.replace(/&amp;/g,"&");return Zr(s)?`<a href="${v(s)}">${o}</a>`:`[${o}](${v(i)})`}),n=n.replace(/(\*\*|__)(?=\S)([\s\S]*?\S)\1/g,"<strong>$2</strong>").replace(/~~(?=\S)([\s\S]*?\S)~~/g,"<del>$1</del>").replace(/(?<!\*)\*(?=\S)([\s\S]*?\S)\*(?!\*)/g,"<em>$1</em>").replace(/(?<!_)_(?=\S)([\s\S]*?\S)_(?!_)/g,"<em>$1</em>"),n.replace(/\u0000(\d+)\u0000/g,(r,o)=>e[Number(o)])}function Bn(t,e={diagramIndex:0},n){let r=t.replace(/\r\n/g,`
`).split(`
`),o=n?.renderDiagram??((x,b)=>{throw new Error("renderDiagram callback is required for diagram blocks.")}),i=!!n?.diagramReferenceRegistry,s=n?.documentColorScheme||"classic",a=n?.documentTheme||"light",c=n?.diagramReferenceRegistry||(()=>{let x=new Map,b=new Set,k=new Map,w=new Set,D=r.map(oa);for(let C=0;C<D.length;C+=1){let P=Le(D[C]);if(!P)continue;let A=ot(D,C+1,P.marker);if(A===-1)break;if(P.info==="diagram"){let L=D.slice(C+1,A).join(`
`),N=Ln(L);N&&(w.add(N),x.has(N)?b.add(N):x.set(N,{id:N,source:L}))}C=A}let $=null;for(let C of D){if($){Ve(C,$)&&($=null);continue}let P=Le(C);if(P){$=P.marker;continue}let A=na(C);A&&k.set(A.id,(k.get(A.id)||0)+1)}return{definitions:x,duplicateDefinitionIds:b,referenceCounts:k,diagramIds:w}})(),{definitions:d,duplicateDefinitionIds:l,referenceCounts:u}=c;if(e.figures||(e.figures=new Map),e.contents||(e.contents=[]),!i){let x=e.usedHeadingIds||(e.usedHeadingIds=new Set);for(let b of c.diagramIds)x.add(b)}function p(x){let b=Ln(x),k=ra(x),w=k?Qi(k):null,D=w?.hasPlaceholder?e.figureNumber=(e.figureNumber||0)+1:null,$=w?D===null?w.text:`${w.before}${D}${w.after}`:null;w&&b&&(e.figures.set(b,{id:b,number:D,text:$}),e.contents.push({kind:"figure",level:0,id:b,text:be($)}));let C=o(x,e.diagramIndex,{id:b,caption:$});return e.diagramIndex+=1,C}function h(x){let b=r[x]||"";return!b.trim()||/^```/.test(b)||/^(#{1,6})\s+/.test(b)||/^ {0,3}&gt;|^ {0,3}>/.test(b)||/^ {0,3}(?:[-*_]\s*){3,}$/.test(b)||/^:::/.test(b)||!!Ye(b)||x+1<r.length&&!!Kr(r[x+1])}function g(x,b){let k=Ye(r[x]),w=/^\d/.test(k[2]),D=[],$=x,C=w?Number.parseInt(k[2],10):null;for(;$<r.length;){let N=Ye(r[$]);if(!N||N[1].length!==b||/^\d/.test(N[2])!==w)break;let B={content:[N[3]],children:[]};for($+=1;$<r.length;){let z=Ye(r[$]);if(z&&z[1].length>b){let M=g($,z[1].length);B.children.push(M.html),$=M.index;continue}if(!r[$].trim()){$+=1;let M=$<r.length?Ye(r[$]):null;if($>=r.length||!M||M[1].length<=b)break;continue}if(/^\s+/.test(r[$])&&!Ye(r[$])){B.content.push(r[$].trim()),$+=1;continue}break}D.push(B)}let P=w?"ol":"ul",A=w&&C!==1?` start="${C}"`:"",L=D.map(N=>{let B=!w&&N.content.length===1&&N.content[0].match(/^\[([ xX])\]\s+(.*)$/),z=B?`<input type="checkbox" disabled${B[1].toLowerCase()==="x"?" checked":""}> ${be(B[2])}`:be(N.content.join(" "));return`<li${B?' class="docdiagram-task-list-item"':""}>${z}${N.children.join("")}</li>`}).join("");return{html:`<${P}${A}>${L}</${P}>`,index:$}}function m(x){let{name:b,attributes:k}=x;if(Object.keys(k).some(D=>!Ht[b].attributes.includes(D)))return null;if(b==="diagram"){let D=k.id;if(!D)return null;let $=d.get(D);return $?l.has(D)?`<section class="docdiagram-error"><strong>Diagram "${v(D)}" has multiple definitions.</strong></section>`:(u.get(D)||0)>1?`<section class="docdiagram-error"><strong>Diagram "${v(D)}" is referenced more than once.</strong></section>`:p($.source):`<section class="docdiagram-error"><strong>Diagram "${v(D)}" could not be found.</strong></section>`}let w=k.depth===void 0?3:Number(k.depth);return!Number.isInteger(w)||w<1||w>6||k.diagrams!==void 0&&k.diagrams!=="true"&&k.diagrams!=="false"?null:`toc:${w}:${k.diagrams==="true"}`}function f(x,b){let k=ft(r[x]);if(!k||Pn(k.name))return null;let w=ia(r,x,b);if(w===-1)return null;let{name:D,attributes:$}=k;if(Object.keys($).some(N=>!Ht[D].attributes.includes(N)))return null;if(D==="grid"){let N=Jn[$.columns];if(!N)return null;let B=[],z=x+1;for(;z<w;){if(!r[z].trim()){z+=1;continue}let M=ft(r[z]);if(!M||!["panel","callout","stack"].includes(M.name))return null;let q=f(z,w);if(!q)return null;B.push(`<div class="docdiagram-grid-item">${q.html}</div>`),z=q.next}return{html:`<div class="docdiagram-grid" style="--docdiagram-grid-columns:${N}">${B.join("")}</div>`,next:w+1}}if(D==="stack")return Object.keys($).length?null:{html:`<div class="docdiagram-stack">${E(x+1,w)}</div>`,next:w+1};let C=sa($,s,a);if(C===null||D==="callout"&&$.kind!==void 0&&!Zn.includes($.kind))return null;let P=$.title?`<div class="docdiagram-component-title">${be($.title)}</div>`:"",A=E(x+1,w),L=`docdiagram-component${D==="callout"?"":` docdiagram-${D}`}${C?" docdiagram-component-styled":""}`;if(D==="callout"){let N=$.kind||"info";return{html:`<aside class="${L} docdiagram-callout docdiagram-callout-${N}"${C?` style="${C}"`:""} aria-label="${v($.title||N)} callout"><div class="docdiagram-callout-kind">${v(N)}</div>${P}${A}</aside>`,next:w+1}}return{html:`<section class="${L}"${C?` style="${C}"`:""}>${P}${A}</section>`,next:w+1}}function E(x=0,b=r.length){let k=[],w=x;for(;w<b;){let D=r[w];if(!D.trim()){w+=1;continue}if(/^:::/.test(D)){let N=ft(D);if(N&&Pn(N.name)){let z=m(N);k.push(z??`<pre class="docdiagram-literal-source"><code>${v(D)}</code></pre>`),w+=1,z!==null&&w<b&&Jr(r[w])&&(w+=1);continue}let B=f(w,b);B?(k.push(B.html),w=B.next):(k.push(`<pre class="docdiagram-literal-source"><code>${v(D)}</code></pre>`),w+=1);continue}let $=Le(D);if($){let N=r.slice(w+1,b).findIndex(M=>Ve(M,$.marker));if(N===-1){k.push('<section class="docdiagram-error"><strong>Unclosed code block.</strong></section>');break}let B=w+N+1,z=r.slice(w+1,B).join(`
`);if($.info==="diagram"){let M=Ln(z);M&&l.has(M)?k.push(`<section class="docdiagram-error"><strong>Diagram "${v(M)}" has multiple definitions.</strong></section>`):(!M||!u.has(M))&&k.push(p(z))}else{let M=$.info?` class="language-${v($.info)}"`:"";k.push(`<pre><code${M}>${Xr(z,$.info)}</code></pre>`)}w=B+1;continue}let C=D.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);if(C){let N=C[1].length,B=ta(C[2],e);e.contents.push({kind:"heading",level:N,id:B,text:be(C[2])}),k.push(`<h${N} id="${B}">${be(C[2])}</h${N}>`),w+=1;continue}if(/^ {0,3}(?:[-*_]\s*){3,}$/.test(D)){k.push("<hr>"),w+=1;continue}if(/^ {0,3}>/.test(D)){let N=[];for(;w<b&&/^ {0,3}>/.test(r[w]);)N.push(r[w].replace(/^ {0,3}> ?/,"")),w+=1;k.push(`<blockquote>${Bn(N.join(`
`),e,{...n,diagramReferenceRegistry:c})}</blockquote>`);continue}let P=Ye(D);if(P){let N=g(w,P[1].length);k.push(N.html),w=N.index;continue}let A=w+1<b?Kr(r[w+1]):null;if(A){let N=Rn(D),B=[];for(w+=2;w<b&&r[w].includes("|")&&r[w].trim();)B.push(Rn(r[w])),w+=1;let z=(M,q)=>q.map((_,j)=>`<${M}${A[j]?` style="text-align:${A[j]}"`:""}>${be(_||"")}</${M}>`).join("");k.push(`<table><thead><tr>${z("th",N)}</tr></thead><tbody>${B.map(M=>`<tr>${z("td",M)}</tr>`).join("")}</tbody></table>`);continue}let L=[D.trim()];for(w+=1;w<b&&!h(w);)L.push(r[w].trim()),w+=1;k.push(`<p>${be(L.join(" "))}</p>`)}return k.join("")}let F=E();return i?F:da(F,e)}function ca(t,e,n){let r=t.filter(d=>d.kind==="figure"?n:d.level<=e);if(!r.length)return"";let o=r.filter(d=>d.kind==="heading").map(d=>d.level),i=Math.min(...o.length?o:[1]),s=[],a=[];for(let d of r){let l=d.kind==="figure"?(a.length?a[a.length-1].level:0)+1:d.level-i+1;for(;a.length&&a[a.length-1].level>=l;)a.pop();let u={entry:d,level:l,children:[]};(a.length?a[a.length-1].children:s).push(u),d.kind==="heading"&&a.push(u)}let c=d=>`<ul>${d.map(l=>`<li class="docdiagram-contents-${l.entry.kind}"><a href="#${v(l.entry.id)}">${l.entry.text}</a>${l.children.length?c(l.children):""}</li>`).join("")}</ul>`;return`<nav class="docdiagram-contents" aria-label="Table of contents">${c(s)}</nav>`}function da(t,e){let n=e.figures||new Map,r=e.contents||[];return t.replace(Zi,(o,i)=>{let s=n.get(i);return s?`<a href="#${v(i)}">${s.number===null?be(s.text):String(s.number)}</a>`:`<strong class="docdiagram-error-inline">Unknown reference "${v(i)}"</strong>`}).replace(Ji,(o,i)=>{let[s,a]=i.split(":");return ca(r,Number(s),a==="true")})}var qn={h1:{fontSize:26,lineHeight:34},h2:{fontSize:20,lineHeight:26},body:{fontSize:16,lineHeight:20}},zn=.72,la=/^(#{1,2})\s+(.*)$/,In=/(\*\*([^*]+)\*\*)|((?<!\w)_([^_\s](?:[^_]*[^_\s])?)_)(?!\w)|(`([^`]+)`)/g;function ua(t){let e=t.match(la);return e?{kind:e[1].length===1?"h1":"h2",text:e[2]}:{kind:"body",text:t}}function ma(t){let e=[],n=0,r;for(In.lastIndex=0;r=In.exec(t);)r.index>n&&e.push({text:t.slice(n,r.index)}),r[2]!==void 0?e.push({text:r[2],bold:!0}):r[4]!==void 0?e.push({text:r[4],italic:!0}):r[6]!==void 0&&e.push({text:r[6],code:!0}),n=In.lastIndex;return(n<t.length||!e.length)&&e.push({text:t.slice(n)}),e}function ga(t,e,n,r,o,i){let s=[];n&&(s.push(`x="${r}"`),o!==null&&s.push(`dy="${o}"`));let a=[`font-size:${i}px`];(t.bold||e)&&a.push("font-weight:700"),t.italic&&a.push("font-style:italic"),t.code&&a.push("font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace"),s.push(`style="${a.join(";")}"`);let c=v(t.text)||" ";return`<tspan ${s.join(" ")}>${c}</tspan>`}function ha(t,e,n,r,o){if(!r.length)return"";let i=n+qn[r[0].kind].lineHeight*zn,s=n,a=0,c=r.map((d,l)=>{let u=qn[d.kind],p=s+u.lineHeight*zn,h=l===0?null:p-a;s+=u.lineHeight,a=p;let g=ma(d.text),m=d.kind!=="body";return g.map((f,E)=>ga(f,m,E===0,t,E===0?h:null,u.fontSize)).join("")}).join("");return`<text x="${t}" y="${i}" text-anchor="${e}" class="docdiagram-node-label docdiagram-node-label-markdown" fill="${v(o)}">${c}</text>`}function Qr(t,e,n){let r=ge(e.label).map(ua),o=e.subtitle?ge(e.subtitle):[];if(!r.length&&!o.length)return"";let i=15,s=r.reduce((F,x)=>F+qn[x.kind].lineHeight,0),a=o.length?6:0,c=o.length*i,d=s+a+c,l=e.textHAlign||"center",u=l==="left"?t.x:l==="right"?t.x+t.width:t.x+t.width/2,p=l==="left"?"start":l==="right"?"end":"middle",h=t.y+t.height/2,g=e.textVAlign==="top"?t.y:h-d/2,m=ha(u,p,g,r,n),f=g+s+a+i*zn,E=o.length?ke(u,f,o,i,"docdiagram-node-subtitle",n,p):"";return m+E}function jt(t){return[t?.caption?' class="docdiagram docdiagram-captioned"':' class="docdiagram"',t?.id?` id="${v(t.id)}"`:""].join("")}function Ot(t,e){return t?.caption?`<figcaption class="docdiagram-caption">${e(t.caption)}</figcaption>`:""}function Gt(t,e,n,r){if(t.description===void 0)return{attributes:`role="img" aria-label="${v(n)}"`,metadata:""};let o=`docdiagram-title-${e}`;if(!r?.caption)return{attributes:`role="img" aria-labelledby="${o}"`,metadata:`<title id="${o}">${v(t.description)}</title>`};let i=`docdiagram-description-${e}`;return{attributes:`role="img" aria-labelledby="${o}" aria-describedby="${i}"`,metadata:`<title id="${o}">${v(r.caption)}</title><desc id="${i}">${v(t.description)}</desc>`}}function Hn(t,e,n){let r=e!=="none",o=e==="flowchart",i=n.expandedDiagramIndex===t;return['<div class="docdiagram-diagram-toolbar" role="toolbar" aria-label="Diagram controls">',`<button type="button" class="docdiagram-icon-button docdiagram-zoom-in" data-diagram-index="${t}" aria-label="Zoom in" title="Zoom in">+</button>`,`<button type="button" class="docdiagram-icon-button docdiagram-zoom-out" data-diagram-index="${t}" aria-label="Zoom out" title="Zoom out">\u2212</button>`,`<button type="button" class="docdiagram-icon-button docdiagram-fit" data-diagram-index="${t}" aria-label="Zoom to fit" title="Zoom to fit">\u22A1</button>`,`<button type="button" class="docdiagram-icon-button docdiagram-toggle-expand" data-diagram-index="${t}" aria-pressed="${i}" aria-label="${i?"Collapse diagram":"Expand diagram"}" title="${i?"Collapse diagram (Esc)":"Expand diagram"}">${i?"\u2921":"\u2922"}</button>`,'<div class="docdiagram-diagram-export">',`<button type="button" class="docdiagram-icon-button docdiagram-export-toggle" data-diagram-index="${t}" aria-label="Export diagram" aria-expanded="false" title="Export diagram">\u21E7</button>`,'<div class="docdiagram-diagram-export-menu" hidden>',`<button type="button" class="docdiagram-open-diagram" data-diagram-index="${t}">Open full diagram</button>`,`<button type="button" class="docdiagram-save-diagram" data-diagram-index="${t}">Save as Skryb diagram</button>`,`<button type="button" class="docdiagram-download-diagram" data-diagram-index="${t}">Save as SVG</button>`,`<button type="button" class="docdiagram-print-diagram" data-diagram-index="${t}">Print / Save as PDF</button>`,"</div>","</div>",r?n.editingDiagramIndex===t?`<button type="button" class="docdiagram-icon-button docdiagram-done-editing" aria-label="Done editing" title="Done editing">\u2713</button><button type="button" class="docdiagram-icon-button docdiagram-cancel-editing" aria-label="Cancel editing and discard changes" title="Cancel editing and discard changes">\xD7</button>${o?`<button type="button" class="docdiagram-icon-button docdiagram-create-node" data-diagram-index="${t}" aria-label="New node" title="New node">+</button>`:""}`:n.editingDiagramIndex===null?`<button type="button" class="docdiagram-icon-button docdiagram-start-editing" data-diagram-index="${t}" aria-label="Edit diagram" title="Edit diagram">\u270E</button>`:"":"","</div>"].join("")}function eo(t,e,n,r,o){let{selectedNode:i,selectedEdge:s,editingNode:a,editingEdge:c,connectionDrag:d,diagramZooms:l,diagramCameraOffsets:u}=n,p=n.editingDiagramIndex===e,h=new O(t),g=h.entries,m=zt(t,h),f=[],E=[],x=Fe[n.documentColorScheme]?.[n.documentTheme==="dark"?"dark":"light"],b=x?Object.entries(x).filter(([,M])=>M.gradient).map(([M,q])=>`<linearGradient id="docdiagram-${n.documentColorScheme}-${e}-${M}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${v(q.gradient||q.fill)}"/><stop offset="1" stop-color="${v(q.fill)}"/></linearGradient>`).join(""):"",k=t.edges.map((M,q)=>{let _=m[q];if(!_)return"";let{sourceAnchor:j,targetAnchor:X,path:re,label:K}=_,xe=K?.center.x??re.midpoint.x,Ie=K?.center.y??re.midpoint.y-10,Z=St(t,M,n.documentTheme),oe=s?.diagramIndex===e&&s.edgeIndex===q,Me=oe&&c?.diagramIndex===e&&c.edgeIndex===q,J=(Number(Z.strokeWidth)||2)+(oe?2:0),Q=220,we=72,le=on(M,"start"),ie=on(M,"end"),ee=`docdiagram-marker-${e}-${q}-start`,te=`docdiagram-marker-${e}-${q}-end`;le!=="none"&&f.push(ht(ee,le,"start",Z.stroke||"",J)),ie!=="none"&&f.push(ht(te,ie,"end",Z.stroke||"",J)),oe&&p&&E.push(`<circle class="docdiagram-edge-endpoint" data-diagram-index="${e}" data-edge-index="${q}" data-endpoint="source" cx="${j.x}" cy="${j.y}" r="7"/>`,`<circle class="docdiagram-edge-endpoint" data-diagram-index="${e}" data-edge-index="${q}" data-endpoint="target" cx="${X.x}" cy="${X.y}" r="7"/>`,Or(e,q,M.waypoint??re.midpoint,!!M.waypoint));let Ce=[le!=="none"?` marker-start="url(#${ee})"`:"",ie!=="none"?` marker-end="url(#${te})"`:""].join("");return[`<g class="docdiagram-edge-group${oe?" docdiagram-edge-selected":""}" data-diagram-index="${e}" data-edge-index="${q}">`,`<path class="docdiagram-edge-hit" d="${re.hitPath}" fill="none" stroke="transparent" stroke-width="16"/>`,`<path class="docdiagram-edge" d="${re.path}"${Ce} stroke="${v(Z.stroke||"")}" stroke-width="${J}"/>`,Me?`<foreignObject class="docdiagram-inline-editor-host" x="${xe-Q/2}" y="${Ie-we/2}" width="${Q}" height="${we}"><textarea class="docdiagram-inline-editor docdiagram-inline-editor-edge" aria-label="Edit edge label. Press Enter for a new line. Press Control or Command plus Enter to save. Press Escape to cancel.">${v(M.label||"")}</textarea></foreignObject>`:K?ke(xe,K.startY,K.lines,qt,"docdiagram-edge-label",Z.text||""):"","</g>"].join("")}).join(""),w=[],D=g.map(({node:M,position:q},_)=>{let j=q.x,X=q.y,re=Number(M.size?.width)||190,K=Number(M.size?.height)||80,xe=Oe(t,M,n.documentTheme,n.documentColorScheme),Ie=M.palette||Et(t,M.class)?.palette,Z=Ie?x?.[Ie]:void 0,oe=M.arrow?It({x:j,y:X,width:re,height:K},M.arrow):null,Me=oe&&Z?.gradient?`docdiagram-${n.documentColorScheme}-${e}-${Ie}-callout-${_}`:"";Me&&Z&&w.push(`<linearGradient id="${Me}" gradientUnits="userSpaceOnUse" x1="${j}" y1="${X}" x2="${j}" y2="${X+K}"><stop offset="0" stop-color="${v(Z.gradient||Z.fill)}"/><stop offset="1" stop-color="${v(Z.fill)}"/></linearGradient>`);let J=Z?.gradient?{...xe,fill:Me?`url(#${Me})`:`url(#docdiagram-${n.documentColorScheme}-${e}-${Ie})`}:xe,Q=i?.diagramIndex===e&&i.nodeId===M.id,we=Q&&a?.diagramIndex===e&&a.nodeId===M.id,le=(Number(J.strokeWidth)||2)+(Q?2:0),ie=De(M,j,X,re,K),ee=dt(ie.textBounds,M),te=M.shape==="text";return[`<g class="docdiagram-node${Q?" docdiagram-node-selected":""}" data-diagram-index="${e}" data-node-id="${v(M.id)}">`,Bt(ie,J,le),oe?Gr(oe,ie.bodyMarkup,J,le,`docdiagram-callout-mask-${e}-${_}`):"",we?`<foreignObject class="docdiagram-inline-editor-host" x="${ie.textBounds.x}" y="${ie.textBounds.y}" width="${ie.textBounds.width}" height="${ie.textBounds.height}"><textarea class="docdiagram-inline-editor docdiagram-inline-editor-node" aria-label="Edit node label. Press Enter for a new line. Press Control or Command plus Enter to save. Press Escape to cancel.">${v(M.label)}</textarea></foreignObject>`:te?Qr(ie.textBounds,M,J.text||""):ke(ee.centerX,ee.labelStartY,ee.labelLines,ee.labelLineHeight,"docdiagram-node-label",J.text||"",ee.textAnchor),!we&&!te&&ee.subtitleLines.length?ke(ee.centerX,ee.subtitleStartY,ee.subtitleLines,ee.subtitleLineHeight,"docdiagram-node-subtitle",J.text||"",ee.textAnchor):"",Q&&p&&!we?[["top-left",j-7,X-7],["top-right",j+re-7,X-7],["bottom-left",j-7,X+K-7],["bottom-right",j+re-7,X+K-7]].map(([Ce,Ze,bt])=>`<rect class="docdiagram-resize-handle" data-resize-corner="${Ce}" x="${Ze}" y="${bt}" width="14" height="14" rx="3"/>`).join(""):"",Q&&p&&!we?ae.map(Ce=>{let Ze=ie.anchors[Ce];return`<circle class="docdiagram-connection-port" data-anchor="${Ce}" cx="${Ze.x}" cy="${Ze.y}" r="7" aria-label="${Ce} connection port"/>`}).join(""):"",Q&&p&&!we&&M.arrow?`<circle class="docdiagram-callout-handle" data-diagram-index="${e}" data-node-id="${v(M.id)}" cx="${M.arrow.x}" cy="${M.arrow.y}" r="7" aria-label="Callout pointer target"/>`:"","</g>"].join("")}).join(""),$=Number(t.canvas.width)||1e3,C=Number(t.canvas.height)||560,P=n.expandedDiagramIndex===e,A=n.diagramViewportHeights.get(e),L=A&&!P?` style="box-sizing: border-box; height: ${A}px; min-height: 0"`:"",N=u.get(e)||{x:0,y:0},B=`width: ${l.get(e)||100}%; transform: translate(${N.x}px, ${N.y}px)`,z=Gt(t,e,"Architecture diagram",o);return[`<figure${jt(o)} data-diagram-index="${e}" data-diagram-type="flowchart" data-editing="${p}" data-expanded="${P}"${L}>`,r(e,"flowchart",n),`<svg viewBox="0 0 ${$} ${C}" ${z.attributes} data-diagram-index="${e}" style="${B}">`,z.metadata,`<defs>${b}${w.join("")}${f.join("")}</defs>`,D,k,d?.diagramIndex===e?`<path class="docdiagram-connection-preview${d.invalid?" docdiagram-connection-invalid":""}" d="${He(d.start,d.current,d.sourceAnchor,d.targetAnchor||d.sourceAnchor,"straight").path}"/>`:"",E.join(""),"</svg>",Ot(o,be),"</figure>"].join("")}function to(t,e,n,r,o){let i=ut(t,n.documentTheme),s=Number(t.canvas?.width)||1e3,a=Number(t.canvas?.height)||560,c=t.participants||[],d=t.messages||[],l=t.activations||[],u=t.notes||[],p=t.groups||[],h=90,g=90,m=28,f=Number(t.canvas?.participantSize?.width)||180,E=Number(t.canvas?.participantSize?.height)||42,F=Number(t.canvas?.participantSpacing)||220,x=16,b=74+Math.max(0,...c.filter(S=>S.kind==="actor").map(S=>ge(S.label||"").length-1))*x,k=48,w=16,D=16,$=15,C=12,P=26,A=28,L=40,N=22,B=n.expandedDiagramIndex===e,z=n.diagramViewportHeights.get(e),M=z&&!B?` style="box-sizing: border-box; height: ${z}px; min-height: 0"`:"",q=`docdiagram-sequence-arrow-${e}`,_=Gt(t,e,"Sequence diagram",o),j=m+b+12,X=c[0],re=c[c.length-1],K=Number(X?.size?.width)||f,xe=Number(re?.size?.width)||f,Ie=c.length>1?K/2+F*(c.length-1)+xe/2:f+h+g,Z=Math.max(s,Ie,h+g),oe=new Map;c.forEach((S,T)=>{oe.set(S.id,c.length===1?Z/2:K/2+F*T)});let Me=j+40,J=[],Q=[],we=[],le=[],ie=[],ee=new Map;u.forEach((S,T)=>{let I=Number(S.after);if(!Number.isFinite(I)||I<1){ie.push({note:S,sourceIndex:T});return}let G=ee.get(I)||[];G.push({note:S,sourceIndex:T}),ee.set(I,G)});let te=j+24,Ce=(S,T)=>{let I=ge(S.label||""),G=Math.max(0,...I.map(Ao=>Ao.length)),se=Math.max(160,Number(S.size?.width)||0,G*7.2+32),pe=Math.max(k,I.length*D+24,Number(S.size?.height)||0),ce=oe.get(S.at||"")||Z/2,V=Math.min(Z-se/2-24,Math.max(se/2+24,ce)),de=te;return te=de+pe+w,{...S,lines:I,x:V-se/2,y:de,width:se,height:pe,sourceIndex:T}};ie.forEach(S=>Q.push(Ce(S.note,S.sourceIndex))),d.forEach((S,T)=>{let I=T+1;p.filter(V=>Number(V.from)===I).forEach(V=>{let de={label:V.label,from:Number(V.from),to:Number(V.to),startY:te,endY:te,depth:le.length};te=de.startY+L,le.push(de),we.push(de)});let G=ge(S.label||""),se=te,pe=Math.max(1,G.length)*$,ce=se+pe+C;J.push({...S,index:T,y:ce,lines:G,labelTop:se}),te=ce+P+(S.from===S.to?A:0),(ee.get(I)||[]).forEach(V=>{Q.push(Ce(V.note,V.sourceIndex))});for(let V=le.length-1;V>=0;V-=1)le[V].to>I||(le[V].endY=te,te+=N,le.splice(V,1))}),le.forEach(S=>{S.endY=te});let Ze=Math.max(j+140,te+8,Q.length?Q[Q.length-1].y+Q[Q.length-1].height:0,J.length?J[J.length-1].y+44:Me,...we.map(S=>S.endY+12)),bt=Math.max(a,Ze+56),wo=bt-36,Eo=l.map((S,T)=>({participantId:S.participant,depth:l.slice(0,T).filter(I=>I.participant===S.participant&&I.from<=S.from&&I.to>=S.from).length,startY:(J[S.from-1]?.y||Me)-10,endY:(J[S.to-1]?.y||Me)+18})),So=c.map(S=>{let T=oe.get(S.id)||0,I=ge(S.label||""),G=et(t,S,n.documentTheme,n.documentColorScheme),se=Number(S.size?.width)||f,pe=Number(S.size?.height)||E;if(S.kind==="actor"){let ce=m+10,V=ce+18,de=V+18;return[`<g class="docdiagram-sequence-participant docdiagram-sequence-actor" data-diagram-index="${e}" data-participant-id="${v(S.id)}">`,`<circle cx="${T}" cy="${ce}" r="8" fill="none" stroke="${v(G.stroke||"")}" stroke-width="${Number(G.strokeWidth)||2}"/>`,`<path d="M ${T} ${ce+8} V ${de} M ${T-14} ${V} H ${T+14} M ${T} ${de} L ${T-12} ${de+18} M ${T} ${de} L ${T+12} ${de+18}" fill="none" stroke="${v(G.stroke||"")}" stroke-width="${Number(G.strokeWidth)||2}" stroke-linecap="round" stroke-linejoin="round"/>`,ke(T,m+b-4-(I.length-1)*x,I,x,"docdiagram-node-label",G.text||""),"</g>"].join("")}return[`<g class="docdiagram-sequence-participant" data-diagram-index="${e}" data-participant-id="${v(S.id)}">`,`<rect x="${T-se/2}" y="${m}" width="${se}" height="${pe}" rx="12" fill="${v(G.fill||"")}" stroke="${v(G.stroke||"")}" stroke-width="${Number(G.strokeWidth)||2}"/>`,ke(T,m+pe/2+6-(I.length-1)*x/2,I,x,"docdiagram-node-label",G.text||""),"</g>"].join("")}).join(""),vo=c.map(S=>{let T=oe.get(S.id)||0;return`<path class="docdiagram-sequence-lifeline" d="M ${T} ${j} L ${T} ${wo}" fill="none" stroke="${v(i.edge.stroke)}" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.35"/>`}).join(""),Wn=we.map(S=>{let T=42+S.depth*14,I=Math.min(260,Math.max(110,String(S.label||"").length*8+28));return{group:S,inset:T,labelWidth:I}}),ko=Wn.map(({group:S,inset:T})=>['<g class="docdiagram-sequence-group">',`<rect x="${T}" y="${S.startY}" width="${Math.max(60,Z-T*2)}" height="${Math.max(40,S.endY-S.startY)}" rx="12" fill="none" stroke="${v(i.edge.stroke)}" stroke-width="1.5" stroke-dasharray="10 6" opacity="0.45"/>`,"</g>"].join("")).join(""),Do=Wn.map(({group:S,inset:T,labelWidth:I})=>['<g class="docdiagram-sequence-group-label">',`<rect x="${T+12}" y="${S.startY-12}" width="${I}" height="24" rx="6" fill="${v(i.node.fill)}" stroke="${v(i.edge.stroke)}" stroke-width="1.5"/>`,`<text x="${T+12+I/2}" y="${S.startY+5}" text-anchor="middle" class="docdiagram-edge-label" fill="${v(i.edge.text)}">${v(S.label||"")}</text>`,"</g>"].join("")).join(""),$o=Q.map(S=>{let T=S.y+20,I=et(t,S,n.documentTheme,n.documentColorScheme);return[`<g class="docdiagram-sequence-note" data-diagram-index="${e}" data-note-index="${S.sourceIndex}">`,`<rect x="${S.x}" y="${S.y}" width="${S.width}" height="${S.height}" rx="10" fill="${v(I.fill||"")}" stroke="${v(I.stroke||"")}" stroke-width="${Number(I.strokeWidth)||2}"/>`,ke(S.x+S.width/2,T,S.lines,D,"docdiagram-node-subtitle",I.text||""),"</g>"].join("")}).join(""),Fo=Eo.map(S=>{let T=oe.get(S.participantId)||0,I=S.depth*7,G=12,se=Math.max(20,S.endY-S.startY),pe=c.find(V=>V.id===S.participantId),ce=pe?et(t,pe,n.documentTheme,n.documentColorScheme):i.node;return`<rect class="docdiagram-sequence-activation" x="${T-G/2+I}" y="${S.startY}" width="${G}" height="${se}" rx="4" fill="${v(ce.fill||"")}" stroke="${v(ce.stroke||"")}" stroke-width="${Number(ce.strokeWidth)||2}"/>`}).join(""),No=J.map(S=>{let T=oe.get(S.from)||0,I=oe.get(S.to)||0,G=S.style==="dashed",se=S.lines,pe=S.labelTop+12,ce=` marker-end="url(#${q})"`;if(S.from===S.to){let de=A;return[`<g class="docdiagram-sequence-message" data-diagram-index="${e}" data-message-index="${S.index}">`,`<path d="M ${T} ${S.y} L ${T+48} ${S.y} L ${T+48} ${S.y+de} L ${T} ${S.y+de}" fill="none" stroke="${v(i.edge.stroke)}" stroke-width="2"${ce}${G?' stroke-dasharray="8 5"':""}/>`,ke(T+48/2,pe,se,$,"docdiagram-edge-label",i.edge.text),"</g>"].join("")}return[`<g class="docdiagram-sequence-message" data-diagram-index="${e}" data-message-index="${S.index}">`,`<path d="M ${T} ${S.y} L ${I} ${S.y}" fill="none" stroke="${v(i.edge.stroke)}" stroke-width="2"${ce}${G?' stroke-dasharray="8 5"':""}/>`,ke((T+I)/2,pe,se,$,"docdiagram-edge-label",i.edge.text),"</g>"].join("")}).join("");return[`<figure${jt(o)} data-diagram-index="${e}" data-diagram-type="sequence" data-editing="${n.editingDiagramIndex===e}" data-expanded="${B}"${M}>`,r(e,"sequence",n),`<svg viewBox="0 0 ${Z} ${bt}" ${_.attributes} data-diagram-index="${e}" style="width: ${n.diagramZooms.get(e)||100}%">`,_.metadata,`<defs>${ht(q,"arrow","end",i.edge.stroke,2)}</defs>`,ko,vo,So,Fo,$o,No,Do,"</svg>",Ot(o,be),"</figure>"].join("")}function no(t,e,n){try{let r=Se(t,n.colourScheme);return n.onDiagram(e,r),r.type==="sequence"?to(r,e,n.state,Hn,n.figure):eo(r,e,n.state,Hn,n.figure)}catch(r){let o=r instanceof Error?r.message:String(r);return`<section class="docdiagram-error"><strong>Diagram could not be rendered.</strong><br>${v(o)}</section>`}}function ro(){if(document.querySelector("style[data-docdiagram-runtime-styles]"))return;let t=document.createElement("style");t.dataset.docdiagramRuntimeStyles="true",t.textContent=`
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
  `,document.head.append(t)}var Vt=class{constructor(e,n){this.state=e;this.outputElement=n}closeDocumentMenu(){let e=document.querySelector(".docdiagram-menu"),n=document.querySelector(".docdiagram-menu-toggle");!e||!n||(e.hidden=!0,n.setAttribute("aria-expanded","false"))}closeDiagramExportMenus(){for(let e of document.querySelectorAll(".docdiagram-diagram-export-menu"))e.hidden=!0;for(let e of document.querySelectorAll(".docdiagram-export-toggle"))e.setAttribute("aria-expanded","false")}applyDocumentColourScheme(e){let n=fe(this.state.documentColorScheme,this.state.documentTheme,"background"),r=fe(this.state.documentColorScheme,this.state.documentTheme,"pale"),o=fe(this.state.documentColorScheme,this.state.documentTheme,"neutral"),i=fe(this.state.documentColorScheme,this.state.documentTheme,"accent");!n||!r||!o||!i||(e.style.setProperty("--docdiagram-background",n.fill||""),e.style.setProperty("--docdiagram-border",o.stroke||""),e.style.setProperty("--docdiagram-control-background",r.fill||""),e.style.setProperty("--docdiagram-control-hover",o.fill||""),e.style.setProperty("--docdiagram-code-background",r.fill||""),e.style.setProperty("--docdiagram-text",n.text||""),e.style.setProperty("--docdiagram-muted",o.text||""),e.style.setProperty("--docdiagram-accent",i.stroke||""))}applyPageTheme(e){let n=fe(this.state.documentColorScheme,e,"background");document.documentElement.dataset.docdiagramTheme=e,document.documentElement.dataset.docdiagramExpanded=String(this.state.expandedDiagramIndex!==null),document.documentElement.style.setProperty("--docdiagram-page-background",n?.fill||""),document.documentElement.style.setProperty("--docdiagram-page-text",n?.text||""),document.body&&(document.body.dataset.docdiagramTheme=e)}dockExpandedDiagramToolbar(e){if(this.state.expandedDiagramIndex===null)return;let n=this.outputElement?.querySelector(`.docdiagram[data-diagram-index="${this.state.expandedDiagramIndex}"] .docdiagram-diagram-toolbar`);n&&e.prepend(n)}removeToolbar(){if(this.outputElement)for(;this.outputElement.previousElementSibling?.classList.contains("docdiagram-toolbar");)this.outputElement.previousElementSibling.remove()}};function oo(t){return t instanceof Element&&t.matches("input, textarea, select, [contenteditable]")}var Ut=class{constructor(e){this.host=e;this.viewportRefitTimer=null}bind(){globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.addEventListener("change",()=>{this.host.isAutoTheme()&&this.host.renderDocument()}),globalThis.addEventListener("resize",()=>{this.viewportRefitTimer!==null&&clearTimeout(this.viewportRefitTimer),this.viewportRefitTimer=setTimeout(()=>{this.viewportRefitTimer=null,this.host.refitDiagramViewports()},150)}),globalThis.addEventListener("beforeunload",e=>{this.host.hasUnsavedChanges()&&(e.preventDefault(),e.returnValue="")}),document.addEventListener("keydown",e=>this.handleKeydown(e)),document.addEventListener("pointerdown",e=>this.handlePointerDown(e)),this.host.outputElement.addEventListener("dblclick",e=>{e.target instanceof Element&&e.target.closest("button, input, textarea, select, [contenteditable]")||this.host.revealSource(globalThis.getSelection?.()?.toString()||"")})}handleKeydown(e){if((e.metaKey||e.ctrlKey)&&e.shiftKey&&e.key.toLowerCase()==="e"&&(this.host.isSourceEditorOpen()||!oo(e.target))){e.preventDefault(),this.host.toggleSourceEditor();return}if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="s"){e.preventDefault(),this.host.downloadDocument();return}if(e.key==="Escape"){this.host.closeDocumentMenu();let n=this.host.getExpandedDiagramIndex();!e.defaultPrevented&&!oo(e.target)&&n!==null&&(e.preventDefault(),this.host.toggleDiagramExpansion(n))}}handlePointerDown(e){let n=document.activeElement;n instanceof HTMLTextAreaElement&&n.matches(".docdiagram-inline-editor")&&!(e.target instanceof Node&&n.contains(e.target))&&n.blur();let r=document.querySelector(".docdiagram-toolbar"),o=e.target instanceof Element&&e.target.closest(".docdiagram-diagram-toolbar")!==null;r&&e.target instanceof Node&&(!r.contains(e.target)||o)&&this.host.closeDocumentMenu(),e.target instanceof Node&&!(e.target instanceof Element&&e.target.closest(".docdiagram-diagram-export"))&&this.host.closeDiagramExportMenus(),!(!(e.target instanceof Element)||e.target.closest(".docdiagram-toolbar, .docdiagram-node, .docdiagram-edge-group, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-inline-editor, .docdiagram-sequence-participant, .docdiagram-sequence-note, .docdiagram-sequence-message")||!this.host.hasSelection())&&this.host.clearSelection()}};function io(){return{diagramModels:[],editingDiagramIndex:null,selectedNode:null,selectedEdge:null,selectedSequenceElement:null,editingNode:null,editingEdge:null,connectionDrag:null,documentTheme:"light",documentThemeSetting:"auto",documentColorScheme:"classic",documentFormat:"centered",documentDoctype:"document",editSessionDiagram:null,expandedDiagramIndex:null,diagramZooms:new Map,diagramCameraOffsets:new Map,diagramViewportHeights:new Map}}function _e(t){t.selectedNode=null,t.selectedEdge=null,t.selectedSequenceElement=null,t.editingNode=null,t.editingEdge=null}function Xe(t,e){return t.editingDiagramIndex===e}function ye(t,e){return t.target instanceof Element?t.target.closest(e):null}function he(t,e){let n=t.diagramModels[e];return n?.type==="flowchart"?n:null}function W(t){return Number(t)}function pa(t,e){let n=t.getBoundingClientRect(),r=18;return e.clientX>=n.right-r&&e.clientY>=n.bottom-r}function jn(t,e){return(Number(Oe(t,e).strokeWidth)||2)+2}var Wt=class{constructor(e){this.host=e;this.editingShortcutsBound=!1}enableCanvasPanning(){for(let e of this.host.outputElement.querySelectorAll(".docdiagram")){let n=e.querySelector("svg");n&&(e.addEventListener("pointerdown",r=>{(r.target===e||r.target===n)&&!pa(e,r)&&this.beginCanvasPan(n,r)}),e.addEventListener("wheel",r=>this.moveCanvasWithWheel(n,r),{passive:!1}))}}moveCanvasWithWheel(e,n){n.preventDefault();let r=W(e.dataset.diagramIndex),o=this.host.state.diagramCameraOffsets.get(r)||{x:0,y:0};if(!n.ctrlKey&&!n.metaKey){let u=Mt(n.deltaY,n.deltaMode),p=Mt(n.deltaX,n.deltaMode);this.setCameraOffset(e,r,{x:o.x-(n.shiftKey&&!p?u:p),y:o.y-(n.shiftKey&&!p?0:u)});return}let i=this.host.state.diagramZooms.get(r)||100,s=pr(i,n.deltaY,n.deltaMode);if(s===i)return;let a=e.getBoundingClientRect(),c=a.width?(n.clientX-a.left)/a.width:.5,d=a.height?(n.clientY-a.top)/a.height:.5;this.host.state.diagramZooms.set(r,s),e.style.width=`${s}%`;let l=e.getBoundingClientRect();this.setCameraOffset(e,r,{x:o.x+n.clientX-(l.left+c*l.width),y:o.y+n.clientY-(l.top+d*l.height)})}setCameraOffset(e,n,r){this.host.state.diagramCameraOffsets.set(n,r),e.style.transform=`translate(${r.x}px, ${r.y}px)`}enableSequenceSelection(){for(let e of this.host.outputElement.querySelectorAll('.docdiagram[data-diagram-type="sequence"] svg'))e.addEventListener("click",n=>{if(!Xe(this.host.state,W(e.dataset.diagramIndex)))return;let r=ye(n,".docdiagram-sequence-participant"),o=ye(n,".docdiagram-sequence-note"),i=ye(n,".docdiagram-sequence-message");r?this.host.state.selectedSequenceElement={diagramIndex:W(r.getAttribute("data-diagram-index")||void 0),kind:"participant",id:r.getAttribute("data-participant-id")||""}:o?this.host.state.selectedSequenceElement={diagramIndex:W(o.getAttribute("data-diagram-index")||void 0),kind:"note",index:W(o.getAttribute("data-note-index")||void 0)}:i?this.host.state.selectedSequenceElement={diagramIndex:W(i.getAttribute("data-diagram-index")||void 0),kind:"message",index:W(i.getAttribute("data-message-index")||void 0)}:this.host.state.selectedSequenceElement=null,this.host.state.selectedNode=null,this.host.state.selectedEdge=null,this.host.renderDocument()})}enableEditing(){for(let e of this.host.outputElement.querySelectorAll(".docdiagram svg"))Xe(this.host.state,W(e.dataset.diagramIndex))&&(e.addEventListener("click",n=>this.handleDiagramClick(e,n)),e.addEventListener("pointerdown",n=>this.handleDiagramPointerDown(e,n)));for(let e of this.host.outputElement.querySelectorAll(".docdiagram-inline-editor"))this.wireInlineEditor(e);this.editingShortcutsBound||(this.editingShortcutsBound=!0,document.addEventListener("keydown",e=>{if(this.host.state.editingDiagramIndex===null)return;let n=document.activeElement;n instanceof Element&&n.matches("input, textarea, select, [contenteditable]")||((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="d"&&this.host.state.selectedNode?(e.preventDefault(),this.duplicateSelectedNode()):(e.key==="Delete"||e.key==="Backspace")&&(this.host.state.selectedNode||this.host.state.selectedEdge)&&(e.preventDefault(),this.deleteSelected()))},!0))}selectNode(e,n){this.host.state.selectedNode={diagramIndex:e,nodeId:n},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}selectEdge(e,n){this.host.state.selectedEdge={diagramIndex:e,edgeIndex:n},this.host.state.selectedNode=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}handleDiagramClick(e,n){if(ye(n,".docdiagram-inline-editor"))return;let r=ye(n,".docdiagram-node");if(r){this.selectNode(W(r.getAttribute("data-diagram-index")||void 0),r.getAttribute("data-node-id")||"");return}let o=ye(n,".docdiagram-edge-group");if(o){let i=W(o.getAttribute("data-diagram-index")||void 0),s=W(o.getAttribute("data-edge-index")||void 0),a=this.host.state.selectedEdge?.diagramIndex===i&&this.host.state.selectedEdge.edgeIndex===s,c=this.host.state.editingEdge?.diagramIndex===i&&this.host.state.editingEdge.edgeIndex===s;a&&!c?(this.host.state.editingEdge={diagramIndex:i,edgeIndex:s},this.host.renderDocument()):this.selectEdge(i,s);return}(this.host.state.selectedNode||this.host.state.selectedEdge)&&this.clearSelection()}handleDiagramPointerDown(e,n){let r=ye(n,".docdiagram-edge-waypoint");if(r){this.moveEdgeWaypoint(e,n,r);return}let o=ye(n,".docdiagram-callout-handle");if(o){this.moveNodeCalloutPointer(e,n,o);return}let i=ye(n,".docdiagram-connection-port");if(i){let w=i.closest(".docdiagram-node"),D=W(w?.getAttribute("data-diagram-index")||e.dataset.diagramIndex),$=i.getAttribute("data-node-id")||w?.getAttribute("data-node-id")||"",C=he(this.host.state,D),P=C?ue(C,$)?.node:null,A=i.getAttribute("data-anchor")||"";if(P&&ae.includes(A)){let L=A;this.beginConnectionDrag(e,n,{diagramIndex:D,sourceNodeId:$,sourceAnchor:L,start:this.getNodePortPoint(P,L),current:this.getNodePortPoint(P,L),invalid:!1})}return}let s=ye(n,".docdiagram-edge-endpoint");if(s){let w=W(s.getAttribute("data-diagram-index")||void 0),D=W(s.getAttribute("data-edge-index")||void 0),$=he(this.host.state,w),C=$?.edges[D],P=s.getAttribute("data-endpoint");if(!C||P!=="source"&&P!=="target")return;let A=P==="source"?C.source:C.target,L=P==="source"?C.sourceAnchor:C.targetAnchor,N=$?ue($,A)?.node:null;if(!N||!L)return;this.beginConnectionDrag(e,n,{diagramIndex:w,edgeIndex:D,endpoint:P,reconnect:!0,sourceNodeId:A,sourceAnchor:L,start:this.getNodePortPoint(N,L),current:this.getNodePortPoint(N,L),invalid:!1});return}let a=ye(n,".docdiagram-resize-handle");if(a){let w=a.closest(".docdiagram-node"),D=a.getAttribute("data-resize-corner");w&&(D==="top-left"||D==="top-right"||D==="bottom-left"||D==="bottom-right")&&this.resizeNode(e,n,w,D);return}if(ye(n,".docdiagram-inline-editor"))return;let c=ye(n,".docdiagram-node");if(!c)return;let d=W(c.getAttribute("data-diagram-index")||void 0),l=c.getAttribute("data-node-id")||"",u=he(this.host.state,d);if(!u)return;let p=new O(u),h=p.getById(l),g=h?.node;if(!h||!g)return;n.preventDefault();let m=this.svgPoint(e,n),f=h.bounds,E=h.parent?p.getByNode(h.parent)?.position||{x:0,y:0}:{x:0,y:0},F=ne(u),x=!1;this.capturePointer(e,n);let b=w=>{let D=this.svgPoint(e,w),$=R(f.x+D.x-m.x,F),C=R(f.y+D.y-m.y,F);x=x||$!==f.x||C!==f.y,c.setAttribute("transform",`translate(${$-f.x} ${C-f.y})`),g.arrow&&this.updateNodeCalloutMarkup(c,f,{x:g.arrow.x-($-f.x),y:g.arrow.y-(C-f.y)},De(g,f.x,f.y,f.width,f.height).bodyMarkup,jn(u,g)),g.position={...g.position,x:$-E.x,y:C-E.y}},k=w=>{this.releasePointer(e,w),e.removeEventListener("pointermove",b),e.removeEventListener("pointerup",k),e.removeEventListener("pointercancel",k),x?(er(u,l),nt(u,g),this.host.state.selectedNode={diagramIndex:d,nodeId:l},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.persistDiagramModels(),this.host.renderDocument()):this.host.state.selectedNode?.diagramIndex===d&&this.host.state.selectedNode.nodeId===l?(this.host.state.editingNode={diagramIndex:d,nodeId:l},this.host.renderDocument()):this.selectNode(d,l)};e.addEventListener("pointermove",b),e.addEventListener("pointerup",k),e.addEventListener("pointercancel",k)}getSelectedNode(){let e=this.host.state.selectedNode,n=e?he(this.host.state,e.diagramIndex):null;return e&&n&&ue(n,e.nodeId)?.node||null}getSelectedEdge(){let e=this.host.state.selectedEdge,n=e?he(this.host.state,e.diagramIndex):null;return e&&n?.edges[e.edgeIndex]||null}clearSelection(){this.host.state.selectedNode=null,this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}deleteSelected(){let e=this.host.state.selectedNode,n=this.host.state.selectedEdge;if(e){let r=he(this.host.state,e.diagramIndex);if(!r)return;let o=r.edges.filter(i=>i.source===e.nodeId||i.target===e.nodeId);if(o.length&&!globalThis.confirm(`Delete this node and its ${o.length} attached connector${o.length===1?"":"s"}?`))return;Ft(r,e.nodeId)}else if(n){let r=he(this.host.state,n.diagramIndex);if(!r)return;$t(r,n.edgeIndex)}else return;_e(this.host.state),this.host.persistDiagramModels(),this.host.renderDocument()}duplicateSelectedNode(){let e=this.host.state.selectedNode;if(!e)return;let n=he(this.host.state,e.diagramIndex);if(!n)return;let r=Dt(n,e.nodeId);r&&(this.host.state.selectedNode={diagramIndex:e.diagramIndex,nodeId:r.id},this.host.state.selectedEdge=null,this.host.persistDiagramModels(),this.host.renderDocument())}wireInlineEditor(e){let n=!1,r=()=>{if(!n){if(n=!0,e.classList.contains("docdiagram-inline-editor-edge")){let i=this.getSelectedEdge();i&&(At(i,e.value),this.host.persistDiagramModels()),this.host.state.editingEdge=null}else{let i=this.getSelectedNode();i&&(Nt(i,e.value),this.host.persistDiagramModels()),this.host.state.editingNode=null}this.host.renderDocument()}},o=()=>{n||(n=!0,e.classList.contains("docdiagram-inline-editor-edge")?this.host.state.editingEdge=null:this.host.state.editingNode=null,this.host.renderDocument())};e.addEventListener("pointerdown",i=>i.stopPropagation()),e.addEventListener("click",i=>i.stopPropagation()),e.addEventListener("keydown",i=>{i.key==="Enter"&&(i.metaKey||i.ctrlKey)?(i.preventDefault(),r()):i.key==="Escape"&&(i.preventDefault(),o())}),e.addEventListener("blur",r,{once:!0}),e.focus(),e.select()}resizeNode(e,n,r,o){n.preventDefault();let i=W(r.getAttribute("data-diagram-index")||void 0),s=r.getAttribute("data-node-id")||"",a=he(this.host.state,i),c=a?ue(a,s)?.node:null;if(!a||!c)return;let d=this.svgPoint(e,n),l=dn(c),u=!1;this.capturePointer(e,n);let p=g=>{let m=this.svgPoint(e,g);dr(a,c,o,m.x-d.x,m.y-d.y,l);let f=Number(c.size?.width)||190,E=Number(c.size?.height)||80;u=u||f!==l.size.width||E!==l.size.height,this.updateNodeSizeMarkup(r,c,f,E)},h=g=>{this.releasePointer(e,g),e.removeEventListener("pointermove",p),e.removeEventListener("pointerup",h),e.removeEventListener("pointercancel",h),u&&(nt(a,c),this.host.state.selectedNode={diagramIndex:i,nodeId:s},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.persistDiagramModels(),this.host.renderDocument())};e.addEventListener("pointermove",p),e.addEventListener("pointerup",h),e.addEventListener("pointercancel",h)}updateNodeSizeMarkup(e,n,r,o){let i=he(this.host.state,W(e.getAttribute("data-diagram-index")||void 0));if(!i)return;let{x:s,y:a}=tt(i,n),c=e.querySelector(".docdiagram-node-body"),d=e.querySelector(".docdiagram-node-label"),l=e.querySelector(".docdiagram-node-subtitle"),u=e.querySelectorAll(".docdiagram-resize-handle");if(!c)return;let p=Oe(i,n),h=De(n,s,a,r,o),g=dt(h.textBounds,n);for(let m of e.querySelectorAll(".docdiagram-node-detail"))m.remove();c.outerHTML=Bt(h,p,Number(p.strokeWidth)||2);for(let m of[d,l])if(m){m.setAttribute("x",String(g.centerX)),m.setAttribute("y",String(m===d?g.labelStartY:g.subtitleStartY)),m.setAttribute("text-anchor",g.textAnchor);for(let f of m.querySelectorAll("tspan"))f.setAttribute("x",String(g.centerX))}for(let m of u){let f=m.getAttribute("data-resize-corner");m.setAttribute("x",String(f?.endsWith("left")?s-7:s+r-7)),m.setAttribute("y",String(f?.startsWith("top")?a-7:a+o-7))}this.updateNodeCalloutMarkup(e,{x:s,y:a,width:r,height:o},n.arrow,h.bodyMarkup,jn(i,n))}getNodePortPoint(e,n,r){let o=r;if(!o){let i=this.host.state.diagramModels.find(s=>s.type==="flowchart"&&ue(s,e.id)?.node===e);if(!i)return{x:0,y:0};o=tt(i,e)}return De(e,o.x,o.y,o.width,o.height).anchors[n]}addConnectionTargetPorts(e,n){let r=he(this.host.state,n);if(r)for(let{node:o,bounds:i}of new O(r).entries)for(let s of ae){let a=this.getNodePortPoint(o,s,i),c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("class","docdiagram-connection-port docdiagram-connection-target-port"),c.dataset.nodeId=o.id,c.dataset.anchor=s,c.setAttribute("cx",String(a.x)),c.setAttribute("cy",String(a.y)),c.setAttribute("r","7"),e.append(c)}}beginConnectionDrag(e,n,r){n.preventDefault(),n.stopPropagation(),this.host.state.connectionDrag={...r,current:this.svgPoint(e,n),invalid:!1},this.addConnectionTargetPorts(e,r.diagramIndex);let o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("class","docdiagram-connection-preview"),e.append(o),this.capturePointer(e,n);let i=c=>{let l=document.elementFromPoint(c.clientX,c.clientY)?.closest(".docdiagram-connection-port");return l||[...e.querySelectorAll(".docdiagram-connection-port")].find(u=>{let p=u.getBoundingClientRect();return c.clientX>=p.left&&c.clientX<=p.right&&c.clientY>=p.top&&c.clientY<=p.bottom})||null},s=c=>{let d=this.host.state.connectionDrag;if(!d)return;let l=this.svgPoint(e,c),u=i(c);d.current=l,d.invalid=!u;let p=u?.getAttribute("data-anchor")||d.sourceAnchor;o.setAttribute("d",He(d.start,l,d.sourceAnchor,p,"straight").path),o.classList.toggle("docdiagram-connection-invalid",d.invalid)},a=c=>{this.releasePointer(e,c),e.removeEventListener("pointermove",s),e.removeEventListener("pointerup",a),e.removeEventListener("pointercancel",a);let d=i(c),l=this.host.state.connectionDrag;if(this.host.state.connectionDrag=null,d&&l){let u=he(this.host.state,l.diagramIndex),p=d.getAttribute("data-node-id")||d.closest(".docdiagram-node")?.getAttribute("data-node-id"),h=d.getAttribute("data-anchor")||"";if(u&&p){if(l.reconnect&&l.edgeIndex!==void 0&&l.endpoint){let g=u.edges[l.edgeIndex];g&&(ir(g,l.endpoint,p,h),this.host.state.selectedEdge={diagramIndex:l.diagramIndex,edgeIndex:l.edgeIndex},this.host.state.selectedNode=null)}else{let g=or(u,l.sourceNodeId,l.sourceAnchor,p,h);this.host.state.selectedEdge={diagramIndex:l.diagramIndex,edgeIndex:u.edges.indexOf(g)},this.host.state.selectedNode=null}this.host.persistDiagramModels()}}this.host.renderDocument()};e.addEventListener("pointermove",s),e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a)}beginCanvasPan(e,n){let r=e.closest(".docdiagram");if(!r)return;n.preventDefault();let o=W(e.dataset.diagramIndex),i=this.host.state.diagramCameraOffsets.get(o)||{x:0,y:0},s={clientX:n.clientX,clientY:n.clientY,offset:i};r.classList.add("docdiagram-panning"),this.capturePointer(e,n);let a=d=>{let l={x:s.offset.x+d.clientX-s.clientX,y:s.offset.y+d.clientY-s.clientY};this.host.state.diagramCameraOffsets.set(o,l),e.style.transform=`translate(${l.x}px, ${l.y}px)`},c=d=>{this.releasePointer(e,d),r.classList.remove("docdiagram-panning"),e.removeEventListener("pointermove",a),e.removeEventListener("pointerup",c),e.removeEventListener("pointercancel",c)};e.addEventListener("pointermove",a),e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c)}moveEdgeWaypoint(e,n,r){let o=W(r.getAttribute("data-diagram-index")||void 0),i=W(r.getAttribute("data-edge-index")||void 0),s=he(this.host.state,o),a=s?.edges[i];if(!s||!a)return;let c=new O(s),d=c.getById(a.source),l=c.getById(a.target);if(!d||!l)return;n.preventDefault(),n.stopPropagation(),this.capturePointer(e,n);let u=h=>{let g=this.svgPoint(e,h);a.waypoint={x:R(g.x,ne(s)),y:R(g.y,ne(s))};let m=a.sourceAnchor||"right",f=a.targetAnchor||"left",E=this.getNodePortPoint(d.node,m,d.bounds),F=this.getNodePortPoint(l.node,f,l.bounds),x=He(E,F,m,f,a.route||"orthogonal",a.waypoint),b=Nn(a.waypoint,!0);r.setAttribute("x",String(b.x)),r.setAttribute("y",String(b.y)),r.setAttribute("width",String(b.size)),r.setAttribute("height",String(b.size)),r.setAttribute("rx",String(b.radius)),r.setAttribute("transform",b.transform),r.setAttribute("data-anchored","true");let k=e.querySelector(`.docdiagram-edge-group[data-diagram-index="${o}"][data-edge-index="${i}"]`);k?.querySelector(".docdiagram-edge")?.setAttribute("d",x.path),k?.querySelector(".docdiagram-edge-hit")?.setAttribute("d",x.hitPath)},p=h=>{this.releasePointer(e,h),e.removeEventListener("pointermove",u),e.removeEventListener("pointerup",p),e.removeEventListener("pointercancel",p),this.host.persistDiagramModels(),this.host.renderDocument()};e.addEventListener("pointermove",u),e.addEventListener("pointerup",p),e.addEventListener("pointercancel",p)}moveNodeCalloutPointer(e,n,r){let o=W(r.getAttribute("data-diagram-index")||void 0),i=r.getAttribute("data-node-id")||"",s=he(this.host.state,o),a=s?ue(s,i)?.node:null,c=r.closest(".docdiagram-node");if(!s||!a||!c)return;n.preventDefault(),n.stopPropagation(),this.capturePointer(e,n);let d=ne(s),l=tt(s,a),u=De(a,l.x,l.y,l.width,l.height),p=jn(s,a),h=m=>{let f=this.svgPoint(e,m),E={x:R(f.x,d),y:R(f.y,d)};un(a,E),this.updateNodeCalloutMarkup(c,l,E,u.bodyMarkup,p)},g=m=>{this.releasePointer(e,m),e.removeEventListener("pointermove",h),e.removeEventListener("pointerup",g),e.removeEventListener("pointercancel",g),nt(s,a),this.host.persistDiagramModels(),this.host.renderDocument()};e.addEventListener("pointermove",h),e.addEventListener("pointerup",g),e.addEventListener("pointercancel",g)}updateNodeCalloutMarkup(e,n,r,o,i){let s=r?It(n,r):null;if(!s)return;for(let l of e.querySelectorAll(".docdiagram-node-callout, .docdiagram-node-callout-outline"))l.setAttribute("points",s.polygonPoints);let a=e.querySelector(".docdiagram-node-callout-mask-body");a&&(a.outerHTML=An(o));let c=Mn(s,i);for(let l of[e.querySelector("mask"),e.querySelector(".docdiagram-node-callout-mask-region")])for(let[u,p]of Object.entries(c))l?.setAttribute(u,String(p));let d=e.querySelector(".docdiagram-callout-handle");d?.setAttribute("cx",String(r?.x??0)),d?.setAttribute("cy",String(r?.y??0))}svgPoint(e,n){let r=e.getBoundingClientRect(),o=e.viewBox.baseVal;return{x:(n.clientX-r.left)*o.width/r.width,y:(n.clientY-r.top)*o.height/r.height}}capturePointer(e,n){n.isTrusted&&e.setPointerCapture(n.pointerId)}releasePointer(e,n){n.isTrusted&&e.hasPointerCapture(n.pointerId)&&e.releasePointerCapture(n.pointerId)}};function so(t,e,n,r){let o=Fe[t]?.[e==="dark"?"dark":"light"];return[[...Ee.slice(0,5),"none"],Ee.slice(5,8),Ee.slice(8,13)].map(i=>`<div class="docdiagram-palette-group">${i.map(s=>{let a=o?.[s];return`<label class="docdiagram-palette-swatch"><input type="radio" name="${r}" value="${s}"${s===n?" checked":""}><span style="--docdiagram-swatch-fill:${a?.fill};--docdiagram-swatch-stroke:${a?.stroke};--docdiagram-swatch-text:${a?.text}">${a?.label||s}</span></label>`}).join("")}</div>`).join("")}function co(t,e,n="classic",r="light"){let o=ne(t),i=Oe(t,e,r,n),s=Number(e.size?.width)||190,a=Number(e.size?.height)||80,c=e.shape==="document"?{width:140,height:84}:{width:120,height:60},d=o?Math.ceil(c.width/o)*o:c.width,l=o?Math.ceil(c.height/o)*o:c.height,u=o||1,p=e.palette||"accent";return[`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-inspector-label docdiagram-inspector-textarea" rows="2">${v(e.label)}</textarea></label>`,`<label class="docdiagram-field docdiagram-field-wide">Subtitle<textarea class="docdiagram-inspector-subtitle docdiagram-inspector-textarea" rows="2">${v(e.subtitle||"")}</textarea></label>`,`<div class="docdiagram-field docdiagram-field-wide"><span>Palette</span><div class="docdiagram-inspector-palette">${so(n,r,p,"node-palette")}</div></div>`,`<label class="docdiagram-inspector-shape-row"><span>Shape</span><select class="docdiagram-inspector-shape">${Je.map(h=>`<option value="${h}"${h===e.shape?" selected":""}>${h}</option>`).join("")}</select></label>`,`<div class="docdiagram-inspector-row docdiagram-inspector-colour-row"><span>Fill</span><input type="color" class="docdiagram-inspector-fill" value="${v(i.fill||"")}"><span>Stroke</span><input type="color" class="docdiagram-inspector-stroke" value="${v(i.stroke||"")}"><label class="docdiagram-visually-hidden" for="docdiagram-inspector-stroke-width">Stroke width</label><input id="docdiagram-inspector-stroke-width" type="number" aria-label="Stroke width" class="docdiagram-inspector-stroke-width" value="${Number(i.strokeWidth)||2}" min="1" step="1"></div>`,`<label class="docdiagram-inspector-text-row"><span>Text</span><input type="color" class="docdiagram-inspector-text" value="${v(i.text||"")}"></label>`,`<div class="docdiagram-inspector-paired-controls"><span>Align</span><label class="docdiagram-visually-hidden" for="docdiagram-inspector-text-v-align">Vertical alignment</label><select id="docdiagram-inspector-text-v-align" class="docdiagram-inspector-text-v-align" aria-label="Vertical alignment"><option value="top"${e.textVAlign==="top"?" selected":""}>Top</option><option value="center"${e.textVAlign!=="top"?" selected":""}>Middle</option></select><label class="docdiagram-visually-hidden" for="docdiagram-inspector-text-h-align">Horizontal alignment</label><select id="docdiagram-inspector-text-h-align" class="docdiagram-inspector-text-h-align" aria-label="Horizontal alignment"><option value="left"${e.textHAlign==="left"?" selected":""}>Left</option><option value="center"${e.textHAlign!=="left"&&e.textHAlign!=="right"?" selected":""}>Center</option><option value="right"${e.textHAlign==="right"?" selected":""}>Right</option></select><span>Size</span><label class="docdiagram-visually-hidden" for="docdiagram-inspector-width">Width</label><input id="docdiagram-inspector-width" type="number" aria-label="Width" class="docdiagram-inspector-width" value="${s}" min="${d}" step="${u}"><label class="docdiagram-visually-hidden" for="docdiagram-inspector-height">Height</label><input id="docdiagram-inspector-height" type="number" aria-label="Height" class="docdiagram-inspector-height" value="${a}" min="${l}" step="${u}"><span>Callout</span><button type="button" class="docdiagram-inspector-callout">${e.arrow?"Remove pointer":"Add pointer"}</button><span></span><button type="button" class="docdiagram-inspector-delete">Delete</button><button type="button" class="docdiagram-inspector-duplicate">Duplicate</button></div>`].join("")}function lo(t,e){let n=St(t,e),r=Number(n.strokeWidth)||2,o=e.route||"orthogonal",i=e.start||"none",s=e.end||"arrow";return[`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-inspector-label docdiagram-inspector-textarea" rows="2">${v(e.label||"")}</textarea></label>`,`<label class="docdiagram-field">Route<select class="docdiagram-inspector-route">${Qe.map(a=>`<option value="${a}"${a===o?" selected":""}>${a}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Source side<select class="docdiagram-inspector-source-anchor">${ae.map(a=>`<option value="${a}"${a===e.sourceAnchor?" selected":""}>${a}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Target side<select class="docdiagram-inspector-target-anchor">${ae.map(a=>`<option value="${a}"${a===e.targetAnchor?" selected":""}>${a}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Start<select class="docdiagram-inspector-marker-start">${$e.map(a=>`<option value="${a}"${a===i?" selected":""}>${a}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">End<select class="docdiagram-inspector-marker-end">${$e.map(a=>`<option value="${a}"${a===s?" selected":""}>${a}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Stroke<input type="color" class="docdiagram-inspector-stroke" value="${v(n.stroke||"")}"></label>`,`<label class="docdiagram-field">Label colour<input type="color" class="docdiagram-inspector-text" value="${v(n.text||"")}"></label>`,`<label class="docdiagram-field">Stroke width<input type="number" class="docdiagram-inspector-stroke-width" value="${r}" min="1" step="1"></label>`,`<div class="docdiagram-inspector-actions">${e.waypoint?'<button type="button" class="docdiagram-inspector-clear-waypoint">Remove waypoint</button>':""}<button type="button" class="docdiagram-inspector-delete">Delete</button></div>`].join("")}function uo(t,e,n,r="classic",o="light"){let i="from"in n?null:et(t,n,o,r),s=e.kind!=="message",a=s?n:null;return[`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-sequence-inspector-label docdiagram-inspector-textarea" rows="2">${v(n.label||"")}</textarea></label>`,e.kind==="message"?`<label class="docdiagram-field">Style<select class="docdiagram-sequence-inspector-message-style"><option value="solid"${n.style!=="dashed"?" selected":""}>Solid</option><option value="dashed"${n.style==="dashed"?" selected":""}>Dashed</option></select></label>`:"",s?`<div class="docdiagram-field docdiagram-field-wide"><span>Palette</span><div class="docdiagram-sequence-inspector-palette">${so(r,o,a?.palette||"accent","sequence-palette")}</div></div>`:"",s?`<label class="docdiagram-field">Fill<input type="color" class="docdiagram-sequence-inspector-fill" value="${v(i?.fill||"")}"></label><label class="docdiagram-field">Border<input type="color" class="docdiagram-sequence-inspector-stroke" value="${v(i?.stroke||"")}"></label><label class="docdiagram-field">Text<input type="color" class="docdiagram-sequence-inspector-text" value="${v(i?.text||"")}"></label><label class="docdiagram-field">Width<input type="number" min="1" class="docdiagram-sequence-inspector-width" value="${Number(a?.size?.width)||""}"></label><label class="docdiagram-field">Height<input type="number" min="1" class="docdiagram-sequence-inspector-height" value="${Number(a?.size?.height)||""}"></label>`:""].join("")}function fa(t,e){return t.querySelector(e)}function U(t,e,n){fa(t,e)?.addEventListener("change",r=>{n(r.currentTarget.value)})}function Ke(t,e){e(),t.persistDiagramModels(),t.renderDocument()}function ba(t,e){e(),t.persistDiagramModels()}function ao(t,e,n,r){t&&t.addEventListener("input",()=>{n(t.value);let o=t.value,i=t.selectionStart,s=t.selectionEnd;r(t,()=>{let a=document.querySelector(e);a&&a.value!==o&&(a.value=o),a?.focus(),a?.setSelectionRange(i,s)})})}function mo(t,e,n,r){let o=null,i=(c,d)=>{globalThis.clearTimeout(o??void 0),o=globalThis.setTimeout(()=>{o=null;let l=document.activeElement===c;t.renderDocument(),l&&d()},250)},s=c=>{let d=t.state.diagramModels[n];if(!d||d.type!=="flowchart")return;let l=ue(d,r)?.node;l&&Ke(t,()=>c(d,l))},a=c=>{let d=t.state.diagramModels[n];if(!d||d.type!=="flowchart")return;let l=ue(d,r)?.node;l&&ba(t,()=>c(d,l))};ao(e.querySelector(".docdiagram-inspector-label"),".docdiagram-inspector-label",c=>a((d,l)=>Nt(l,c)),i),ao(e.querySelector(".docdiagram-inspector-subtitle"),".docdiagram-inspector-subtitle",c=>a((d,l)=>sr(l,c)),i);for(let c of e.querySelectorAll(".docdiagram-inspector-palette input"))c.addEventListener("change",()=>s((d,l)=>cn(l,c.value,t.state.documentColorScheme)));U(e,".docdiagram-inspector-shape",c=>s((d,l)=>ar(l,c))),U(e,".docdiagram-inspector-fill",c=>s((d,l)=>mt(l,"fill",c))),U(e,".docdiagram-inspector-stroke",c=>s((d,l)=>mt(l,"stroke",c))),U(e,".docdiagram-inspector-text",c=>s((d,l)=>mt(l,"text",c))),U(e,".docdiagram-inspector-text-v-align",c=>s((d,l)=>sn(l,"textVAlign",c))),U(e,".docdiagram-inspector-text-h-align",c=>s((d,l)=>sn(l,"textHAlign",c))),U(e,".docdiagram-inspector-stroke-width",c=>s((d,l)=>hn(l,c))),U(e,".docdiagram-inspector-width",c=>s((d,l)=>ln(d,l,"width",c))),U(e,".docdiagram-inspector-height",c=>s((d,l)=>ln(d,l,"height",c))),e.querySelector(".docdiagram-inspector-callout")?.addEventListener("click",()=>{s((c,d)=>mr(c,d))}),e.querySelector(".docdiagram-inspector-delete")?.addEventListener("click",()=>{s((c,d)=>{Ft(c,d.id),t.state.selectedNode=null})}),e.querySelector(".docdiagram-inspector-duplicate")?.addEventListener("click",()=>{s((c,d)=>{let l=Dt(c,d.id);l&&(t.state.selectedNode={diagramIndex:n,nodeId:l.id})})})}function go(t,e,n,r){let o=i=>{let s=t.state.diagramModels[n];if(!s||s.type!=="flowchart")return;let a=s.edges[r];a&&Ke(t,()=>i(s,a))};U(e,".docdiagram-inspector-label",i=>o((s,a)=>At(a,i))),U(e,".docdiagram-inspector-route",i=>o((s,a)=>lr(a,i))),U(e,".docdiagram-inspector-source-anchor",i=>o((s,a)=>mn(a,"source",i))),U(e,".docdiagram-inspector-target-anchor",i=>o((s,a)=>mn(a,"target",i))),U(e,".docdiagram-inspector-marker-start",i=>o((s,a)=>gr(a,i))),U(e,".docdiagram-inspector-marker-end",i=>o((s,a)=>hr(a,i))),U(e,".docdiagram-inspector-stroke",i=>o((s,a)=>gn(a,"stroke",i))),U(e,".docdiagram-inspector-text",i=>o((s,a)=>gn(a,"text",i))),U(e,".docdiagram-inspector-stroke-width",i=>o((s,a)=>hn(a,i))),e.querySelector(".docdiagram-inspector-clear-waypoint")?.addEventListener("click",()=>{o((i,s)=>ur(s))}),e.querySelector(".docdiagram-inspector-delete")?.addEventListener("click",()=>{o(i=>{$t(i,r),t.state.selectedEdge=null})})}function ho(t,e,n){let r=t.state.selectedSequenceElement;if(!r)return;if(U(e,".docdiagram-sequence-inspector-label",i=>Ke(t,()=>{n.label=i.trim()||n.label})),r.kind==="message"){U(e,".docdiagram-sequence-inspector-message-style",i=>Ke(t,()=>{xt.includes(i)&&(n.style=i)}));return}let o=n;for(let i of e.querySelectorAll(".docdiagram-sequence-inspector-palette input"))i.addEventListener("change",()=>Ke(t,()=>cn(o,i.value,t.state.documentColorScheme)));for(let[i,s]of[[".docdiagram-sequence-inspector-fill","fill"],[".docdiagram-sequence-inspector-stroke","stroke"],[".docdiagram-sequence-inspector-text","text"]])U(e,i,a=>Ke(t,()=>mt(o,s,a)));for(let[i,s]of[[".docdiagram-sequence-inspector-width","width"],[".docdiagram-sequence-inspector-height","height"]])U(e,i,a=>Ke(t,()=>{let c=Number(a);Number.isFinite(c)&&c>0&&(o.size={...o.size,[s]:c})}))}var ya="https://sparkkz-nz.github.io/skryb/docs/reference.html",On=192,xa=96,po=24,wa=8e6,Ea={flowchart:["```diagram","id: new-flowchart","type: flowchart","canvas:","  auto: true","  grid: 5","nodes:","  - id: first-node","    label: First node","    shape: rounded-rectangle","    position: { x: 80, y: 110 }","  - id: second-node","    label: Second node","    shape: rounded-rectangle","    position: { x: 330, y: 110 }","edges:","  - source: first-node","    target: second-node","    sourceAnchor: right","    targetAnchor: left","```"].join(`
`),sequence:["```diagram","id: new-sequence","type: sequence","participants:","  - id: first-participant","    label: First participant","  - id: second-participant","    label: Second participant","messages:","  - from: first-participant","    to: second-participant","    label: Request","```"].join(`
`),"diagram-reference":":::diagram { id=diagram-id }",toc:":::toc { depth=3 diagrams=true }",panel:[':::panel { title="New panel" palette=accent }',"Panel content.",":::"].join(`
`),grid:[":::grid { columns=2 }",':::panel { title="First panel" }',"First panel content.",":::","",':::panel { title="Second panel" }',"Second panel content.",":::",":::"].join(`
`)};function Yt(t,e){let n=new Set([...t.matchAll(/(?:\bid:\s*|:::diagram\s+\{\s*id=)(?:"([^"]+)"|([^\s}\n#]+))/g)].map(i=>i[1]||i[2])),r=1,o=e;for(;n.has(o);)r+=1,o=`${e}-${r}`;return o}function Sa(t,e){let n=Ea[t];if(!n)return null;if(t==="flowchart")return n.replace("id: new-flowchart",`id: ${Yt(e,"new-flowchart")}`);if(t==="sequence")return n.replace("id: new-sequence",`id: ${Yt(e,"new-sequence")}`);if(t==="diagram-reference"){let r=Yt(e,"diagram-reference");return n.replace("diagram-id",r)}return n}function va(t){if(!/<template[^>]*\bid=["']?source\b/i.test(t))return t;let n=new DOMParser().parseFromString(t,"text/html").querySelector("template#source");if(!n)throw new Error("That Skryb document has no source template to import from.");return n.content.textContent||""}function ka(){return new Promise(t=>{let e=document.createElement("input");e.type="file",e.accept=".html,.htm,.md,.markdown,text/html,text/markdown",e.hidden=!0;let n=r=>{e.remove(),t(r)};e.addEventListener("change",()=>n(e.files?.[0]||null),{once:!0}),e.addEventListener("cancel",()=>n(null),{once:!0}),document.body.append(e),e.click()})}function Da(t){if(t.length<=1)return t[0]||null;let e=t.map((o,i)=>`${i+1}. ${o.id||"(no id)"}`).join(`
`),n=globalThis.prompt(`That file has ${t.length} diagrams. Import which one?

${e}`,"1");if(n===null)return null;let r=Number.parseInt(n.trim(),10);if(!Number.isInteger(r)||r<1||r>t.length)throw new Error(`Enter a number between 1 and ${t.length}.`);return t[r-1]}var _t=class{constructor(e){this.host=e;this.renderTimer=null;this.resizeObserver=null;this.openState=!1;this.draft="";this.error=""}get isOpen(){return this.openState}get hasUnsavedDraft(){return this.openState&&this.draft!==this.host.getSource()}get hasError(){return this.error.length>0}get draftSource(){return this.draft}setError(e){this.error=e,this.updateStatus()}clearError(){this.error=""}open(){globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=null,this.draft=this.host.getSource(),this.error="",this.openState=!0,this.host.stopDiagramEditing(),this.host.renderDocument();let e=()=>this.focus();globalThis.requestAnimationFrame?.(e)??e()}close(){this.flushRender(),!(this.error&&this.draft!==this.host.getSource()&&!globalThis.confirm("Discard the invalid source changes?"))&&(this.openState=!1,this.draft="",this.error="",this.renderTray(),document.querySelector(".docdiagram-menu-toggle")?.focus())}flushRender(){return this.renderTimer===null?!0:this.renderDraft()}syncSource(e){if(!this.openState)return;this.draft=e,this.error="";let n=document.querySelector(".docdiagram-source-editor");if(!n)return;let r=n.selectionStart,o=n.selectionEnd,i=n.scrollTop;n.value=e,n.setSelectionRange(Math.min(r,e.length),Math.min(o,e.length)),n.scrollTop=i,this.updateStatus()}reveal(e){let n=this.host.getSource(),r=Pr(n,e);return r?this.revealSourceRange({start:{line:1,column:1,offset:r.start},end:{line:1,column:1,offset:r.end}},Ue(n)):!1}revealSourceRange(e,n){let r=this.host.getSource();if(Ue(r)!==n||this.hasUnsavedDraft||e.start.offset>r.length)return!1;this.openState||this.open();let o=()=>{let i=document.querySelector(".docdiagram-source-editor");i&&(i.focus(),i.setSelectionRange(e.start.offset,Math.min(e.end.offset,r.length)),Rr(i,{start:e.start.offset}))};return globalThis.requestAnimationFrame?.(o)??o(),!0}renderTray(){let e=document.querySelector(".docdiagram-source-tray");if(!this.openState){this.resizeObserver?.disconnect(),this.resizeObserver=null,e?.remove(),delete this.host.outputElement.dataset.sourceEditorOpen,this.host.outputElement.style.removeProperty("--docdiagram-source-tray-height");return}if(e){e.dataset.theme=this.host.getDocumentTheme(),this.host.outputElement.dataset.sourceEditorOpen="true",this.updateStatus();return}e=document.createElement("section"),e.className="docdiagram-source-tray",e.dataset.theme=this.host.getDocumentTheme(),e.setAttribute("aria-label","Document source editor"),e.innerHTML=['<div class="docdiagram-source-resize" role="separator" aria-orientation="horizontal" aria-label="Resize source editor" tabindex="0" title="Drag to resize"></div>','<header class="docdiagram-source-header">','<div><strong>Source</strong><span class="docdiagram-source-shortcut">Cmd/Ctrl+Shift+E to close</span></div>','<div class="docdiagram-source-actions">','<button type="button" class="docdiagram-source-menu-toggle" aria-label="Source editor menu" aria-expanded="false" title="Source editor menu">\u2630</button>','<div class="docdiagram-source-menu" hidden>','<div class="docdiagram-source-menu-heading">Insert</div>','<button type="button" data-source-template="flowchart">Flowchart</button>','<button type="button" data-source-template="sequence">Sequence</button>','<button type="button" data-source-template="diagram-reference">Diagram Reference</button>','<button type="button" data-source-template="toc">Contents</button>','<button type="button" class="docdiagram-source-import">Import diagram\u2026</button>','<button type="button" data-source-template="panel">Panel</button>','<button type="button" data-source-template="grid">Grid</button>','<button type="button" class="docdiagram-source-help">Help</button>',"</div>",'<button type="button" class="docdiagram-source-close" aria-label="Close source editor" title="Close source editor">\xD7</button>',"</div>","</header>",'<label class="docdiagram-source-label">Canonical Markdown<textarea class="docdiagram-source-editor" spellcheck="false"></textarea></label>','<p class="docdiagram-source-status" aria-live="polite"></p>','<p class="docdiagram-source-error" role="alert"></p>'].join("");let n=e.querySelector(".docdiagram-source-editor"),r=e.querySelector(".docdiagram-source-close"),o=e.querySelector(".docdiagram-source-menu-toggle"),i=e.querySelector(".docdiagram-source-menu");if(!n||!r||!o||!i)return;n.value=this.draft,n.addEventListener("input",()=>{this.draft=n.value,this.error="",this.updateStatus(),this.scheduleRender()}),r.addEventListener("click",()=>this.close()),o.addEventListener("click",()=>{let a=i.hidden;i.hidden=!a,o.setAttribute("aria-expanded",String(a))});for(let a of e.querySelectorAll("[data-source-template]"))a.addEventListener("click",()=>{let c=Sa(a.dataset.sourceTemplate||"",n.value);c&&(this.insertTemplate(n,c),i.hidden=!0,o.setAttribute("aria-expanded","false"))});e.querySelector(".docdiagram-source-import")?.addEventListener("click",async a=>{let c=a.currentTarget;i.hidden=!0,o.setAttribute("aria-expanded","false"),c.disabled=!0;try{await this.importDiagram(n)}catch(d){let l=d instanceof Error?d.message:String(d);globalThis.alert(`Import diagram failed: ${l}`)}finally{c.disabled=!1}}),e.querySelector(".docdiagram-source-help")?.addEventListener("click",()=>{globalThis.open(ya,"_blank","noopener")}),e.addEventListener("keydown",a=>{a.key==="Escape"&&!i.hidden&&(a.preventDefault(),i.hidden=!0,o.setAttribute("aria-expanded","false"),o.focus())}),this.host.outputElement.after(e),this.host.outputElement.dataset.sourceEditorOpen="true";let s=()=>{this.host.outputElement.style.setProperty("--docdiagram-source-tray-height",`${e?.offsetHeight||0}px`)};this.attachResizeHandle(e,s),this.resizeObserver?.disconnect(),globalThis.ResizeObserver&&(this.resizeObserver=new globalThis.ResizeObserver(s),this.resizeObserver.observe(e)),s(),this.updateStatus()}attachResizeHandle(e,n){let r=e.querySelector(".docdiagram-source-resize");if(!r)return;let o=s=>{let a=globalThis.innerHeight||0,c=a?Math.max(On,a-xa):s;return Math.min(Math.max(s,On),c)},i=s=>{e.style.height=`${o(s)}px`,n()};r.addEventListener("pointerdown",s=>{if(s.button!==0)return;s.preventDefault();let a=s.clientY,c=e.offsetHeight;e.dataset.resizing="true",r.setPointerCapture?.(s.pointerId);let d=u=>{i(c-(u.clientY-a))},l=()=>{r.removeEventListener("pointermove",d),r.removeEventListener("pointerup",l),r.removeEventListener("pointercancel",l),delete e.dataset.resizing,r.releasePointerCapture?.(s.pointerId)};r.addEventListener("pointermove",d),r.addEventListener("pointerup",l),r.addEventListener("pointercancel",l)}),r.addEventListener("keydown",s=>{let a=s.shiftKey?po*4:po;s.key==="ArrowUp"?(s.preventDefault(),i(e.offsetHeight+a)):s.key==="ArrowDown"?(s.preventDefault(),i(e.offsetHeight-a)):s.key==="Home"?(s.preventDefault(),i(Number.MAX_SAFE_INTEGER)):s.key==="End"&&(s.preventDefault(),i(On))}),r.addEventListener("dblclick",()=>{e.style.removeProperty("height"),n()})}scheduleRender(){globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=globalThis.setTimeout(()=>{this.renderTimer=null,this.renderDraft()},250)}renderDraft(){return globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=null,this.host.renderDocument(this.draft,{preserveOnError:!0})}updateStatus(){let e=document.querySelector(".docdiagram-source-tray");if(!e)return;let n=e.querySelector(".docdiagram-source-status"),r=e.querySelector(".docdiagram-source-error");!n||!r||(n.textContent=this.error?"Source has errors; showing the last valid render.":"Changes render automatically.",r.hidden=!this.error,r.textContent=this.error)}insertTemplate(e,n){let r=e.selectionStart,o=e.selectionEnd,i=e.value.lastIndexOf(`
`,r-1)+1,s=e.value.indexOf(`
`,r),a=s===-1?e.value.length:s,c=e.value.slice(i,a),d=/^\s*$/.test(c)?r:a,l=/^\s*$/.test(c)?o:a,u=d===a?`
${n}`:n;e.setRangeText(u,d,l,"end"),this.draft=e.value,this.error="",this.updateStatus(),this.scheduleRender(),e.focus()}async importDiagram(e){let n=await ka();if(!n)return;if(n.size>wa)throw new Error("That file is too large to import.");let r=at(va(await n.text()));if(!r.length)throw new Error("That file has no diagrams to import.");let o=Da(r);if(!o)return;Se(o.source,this.host.getDocumentColourScheme());let i=Yt(e.value,o.id||"imported-diagram");this.insertTemplate(e,`\`\`\`diagram
${Mr(o.source,i)}
\`\`\``)}focus(){let e=document.querySelector(".docdiagram-source-editor");e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))}};var Gn="data-docdiagram-offline-runtime-placeholder",fo='script[data-docdiagram-runtime="embedded"]',$a="https://sparkkz-nz.github.io/skryb/latest/skryb-runtime.js";function Fa(){let t=globalThis;return typeof t.DocDiagramRuntimeSource=="string"?t.DocDiagramRuntimeSource:null}function Vn(t){return/^https?:\/\//i.test(t)?t:$a}async function Na(t,e=globalThis.fetch.bind(globalThis)){let n=await e(t);if(!n.ok)throw new Error(`Could not fetch the Skryb runtime (${n.status||"unknown status"}).`);return n.text()}function bo(t,e,n=""){let r=new RegExp(`<script\\b[^>]*\\b${Gn}\\b[^>]*>[\\s\\S]*?<\\/script>\\s*`,"i");if(!r.test(t))throw new Error("Could not find the selected Skryb runtime in this document.");let o=t.replace(r,""),i=/<\/body\s*>/i;if(!i.test(o))throw new Error("Could not find the document body for offline export.");let s=e.replace(/<\/script/gi,"<\\/script"),c=`<script data-docdiagram-runtime="embedded"${n?` data-docdiagram-runtime-url="${Aa(n)}"`:""}>
${s}
<\/script>
`;return o.replace(i,()=>`${c}</body>`)}async function yo(t,e){let n=t.querySelector(fo);if(n)return n.setAttribute(Gn,""),{source:n.textContent||"",runtimeUrl:Vn(n.dataset.docdiagramRuntimeUrl||"")};let r=Array.from(t.querySelectorAll("script[src]")).find(i=>{try{let s=new URL(i.getAttribute("src")||"",t.ownerDocument.baseURI).pathname;return/\/skryb-runtime(?:-self-packaged)?\.js$/i.test(s)}catch{return!1}});if(!r)throw new Error("Could not find the selected Skryb runtime in this document.");return r.setAttribute(Gn,""),{source:Fa()||await Na(r.src,e),runtimeUrl:Vn(r.getAttribute("src")||r.src)}}function Un(t){let e=t.querySelector(fo);if(!e)return;let n=Vn(e.dataset.docdiagramRuntimeUrl||""),r=t.ownerDocument.createElement("script");r.src=n,r.defer=!0,e.replaceWith(r)}function Aa(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;")}var Xt=class{constructor(e,n,r,o){this.session=e;this.state=n;this.outputElement=r;this.sourceEditor=o}downloadDocument(){if(this.sourceEditor?.flushRender(),!this.canExportLastValidSource())return;let e=this.createDocumentCopy();try{Un(e)}catch(n){let r=n instanceof Error?n.message:String(n);console.error("Save As failed.",n),globalThis.alert(`Save As failed: ${r}`);return}this.downloadHtml(e.outerHTML,"-edited"),this.session.markSaved()}async downloadOfflineDocument(){if(this.sourceEditor?.flushRender(),!this.canExportLastValidSource())return;let e=this.createDocumentCopy(),n=await yo(e);this.downloadHtml(bo(e.outerHTML,n.source,n.runtimeUrl),"-offline"),this.session.markSaved()}createDocumentCopy(e=this.session.source){let n=document.documentElement.cloneNode(!0),r=n.querySelector("#source"),o=n.querySelector("#rendered-document");r?.content.replaceChildren(document.createTextNode(e)),n.querySelector(".docdiagram-lint-dialog")?.remove(),n.querySelector(".docdiagram-toolbar")?.remove(),n.querySelector(".docdiagram-source-tray")?.remove();for(let i of n.querySelectorAll("style"))(i.dataset.docdiagramRuntimeStyles==="true"||i.textContent?.includes(".docdiagram-inline-editor")&&i.textContent.includes(".docdiagram-toolbar"))&&i.remove();n.removeAttribute("data-docdiagram-theme"),n.removeAttribute("data-docdiagram-expanded"),n.style.removeProperty("--docdiagram-page-background"),n.style.removeProperty("--docdiagram-page-text"),n.getAttribute("style")||n.removeAttribute("style"),n.querySelector("body")?.removeAttribute("data-docdiagram-theme"),o?.replaceChildren(),o?.removeAttribute("data-editing-shortcuts-bound");for(let i of[...o?.attributes||[]])(i.name==="style"||i.name.startsWith("data-"))&&o?.removeAttribute(i.name);return n}openDiagram(e){let n=this.getDiagramExportUrl(e,"image/svg+xml;charset=utf-8");if(!n)return;if(!globalThis.open(n,"_blank")){URL.revokeObjectURL(n),globalThis.alert("Your browser blocked the new diagram tab. Allow pop-ups and try again.");return}globalThis.setTimeout(()=>URL.revokeObjectURL(n),6e4)}downloadDiagramDocument(e){let n=this.state.diagramModels[e];if(!n){globalThis.alert("The diagram is no longer available to save.");return}let r=Be(n),o=Lt(r)||this.getDiagramExportName(e),i=["---",`theme: ${this.state.documentThemeSetting}`,`colourScheme: ${this.state.documentColorScheme}`,"doctype: diagram","---","","```diagram",r,"```",""].join(`
`),s=this.createDocumentCopy(i),a=s.querySelector("title");a&&(a.textContent=o);try{Un(s)}catch(c){let d=c instanceof Error?c.message:String(c);console.error("Save as Skryb diagram failed.",c),globalThis.alert(`Save as Skryb diagram failed: ${d}`);return}this.downloadHtml(s.outerHTML,"",this.slug(o))}downloadDiagram(e){let n=this.getDiagramExportUrl(e,"image/svg+xml;charset=utf-8");if(!n)return;let r=document.createElement("a");r.href=n,r.download=`${this.getDiagramExportName(e)}.svg`,r.hidden=!0,document.body.append(r),r.click(),r.remove(),globalThis.setTimeout(()=>URL.revokeObjectURL(n),200)}printDiagram(e){let n=this.getStandaloneDiagramSvg(e);if(!n){globalThis.alert("The diagram is no longer available to print.");return}let r=['<!doctype html><html><head><meta charset="utf-8"><title>Diagram</title>',"<style>html,body{height:100%;margin:0}body{display:grid;place-items:center}svg{height:auto;max-height:100vh;max-width:100vw;width:auto}@page{margin:0}</style>","</head><body>",new XMLSerializer().serializeToString(n),"</body></html>"].join(""),o=globalThis.open("","_blank");if(!o){globalThis.alert("Your browser blocked the print window. Allow pop-ups and try again.");return}o.document.open(),o.document.write(r),o.document.close(),o.focus(),o.print()}getStandaloneDiagramSvg(e){let n=this.outputElement?.querySelector(`.docdiagram[data-diagram-index="${e}"] svg`);if(!n)return null;let r=n.closest(".docdiagram"),o=globalThis.getComputedStyle(r||n).backgroundColor,i=n.cloneNode(!0);i.setAttribute("xmlns","http://www.w3.org/2000/svg"),i.removeAttribute("style"),i.querySelectorAll(".docdiagram-inline-editor-host, .docdiagram-resize-handle, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-connection-preview").forEach(c=>c.remove()),i.querySelectorAll(".docdiagram-node-selected, .docdiagram-edge-selected").forEach(c=>{c.classList.remove("docdiagram-node-selected","docdiagram-edge-selected")});let s=document.createElementNS("http://www.w3.org/2000/svg","style");s.textContent=['svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}',".docdiagram-edge,.docdiagram-edge-hit{fill:none}",".docdiagram-edge-label{font-size:15px}",".docdiagram-node-label{font-size:16px;font-weight:650}",".docdiagram-node-subtitle{font-size:13px}"].join(""),i.insertBefore(s,i.firstChild);let a=document.createElementNS("http://www.w3.org/2000/svg","rect");return a.setAttribute("class","docdiagram-export-background"),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("fill",o),i.insertBefore(a,s.nextSibling),i}canExportLastValidSource(){return!(this.sourceEditor?.hasError&&this.sourceEditor.hasUnsavedDraft)||globalThis.confirm("Source has errors. Save the last valid version instead?")}getDiagramExportUrl(e,n){let r=this.getStandaloneDiagramSvg(e);return r?URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(r)],{type:n})):(globalThis.alert("The diagram is no longer available to export."),null)}getDiagramExportName(e){return`${this.slug(document.title)||"diagram"}-${e+1}`}downloadHtml(e,n,r=""){let o=new Blob([`<!doctype html>
${e}`],{type:"text/html;charset=utf-8"}),i=document.createElement("a"),s=r||this.slug(document.title);i.href=URL.createObjectURL(o),i.download=`${s||"document"}${n}.html`,i.click(),URL.revokeObjectURL(i.href)}slug(e){return e.toLowerCase().replace(/[^\w]+/g,"-").replace(/^-|-$/g,"")}};var Kt=class{constructor(e,n){this.state=e;this.renderMarkdown=n}render(e,n=!1){let r=[...this.state.diagramModels],o=this.state.documentTheme,i=this.state.documentThemeSetting,s=this.state.documentColorScheme,a=this.state.documentDoctype;this.state.diagramModels.length=0;try{let c=n?it(e):gt(e);this.state.documentTheme=c.resolvedTheme,this.state.documentThemeSetting=c.theme,this.state.documentColorScheme=c.colourScheme,this.state.documentDoctype=c.doctype;let d=this.renderMarkdown(c.content);return this.state.expandedDiagramIndex!==null&&!this.state.diagramModels[this.state.expandedDiagramIndex]&&(this.state.expandedDiagramIndex=null,this.state.diagramModels.length=0,d=this.renderMarkdown(c.content)),{ok:!0,markup:d}}catch(c){let d=c instanceof Error?c.message:String(c);return this.state.diagramModels.length=0,this.state.diagramModels.push(...r),n&&(this.state.documentTheme=o,this.state.documentThemeSetting=i,this.state.documentColorScheme=s,this.state.documentDoctype=a),{ok:!1,message:d}}}};var Zt=class{constructor(e){this.sourceElement=e}read(){return this.sourceElement?.content.textContent||""}write(e){this.sourceElement?.content.replaceChildren(document.createTextNode(e))}},Jt=class{constructor(e){this.sourceStore=e;this.savedSource=""}get source(){return this.sourceStore.read()}set source(e){this.sourceStore.write(e)}captureSavedSource(){this.savedSource=this.source}markSaved(){this.captureSavedSource()}hasUnsavedChanges(e=!1){return this.source!==this.savedSource||e}bake(){try{let e=Pt(this.source);return e.baked&&(this.source=e.source),{baked:e.baked,failed:!1}}catch{return{baked:0,failed:!0}}}persistDiagramModels(e){let n=0,r=new Map;for(let s of e){let a=s.id;typeof a=="string"&&r.set(a,[...r.get(a)||[],s])}let o=new Map([...r].flatMap(([s,a])=>a.length===1?[[s,a[0]]]:[])),i=this.source.replace(/\r\n/g,`
`).replace(/^((?: {0,3}> ?)*)```diagram\s*\n([\s\S]*?)^((?: {0,3}> ?)*)```$/gm,(s,a,c,d)=>{let u=c.replace(/^(?: {0,3}> ?)+/gm,"").match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m)?.slice(1).find(Boolean),p=u&&o.get(u)||e[n];n+=1;let h=p?Be(p):"",g=h?h.split(`
`).map(m=>`${a}${m}`).join(`
`):"";return`${a}\`\`\`diagram
${g?`${g}
`:""}${d}\`\`\``});return this.source=i,i}};function Ma(t){let e=t.querySelector("svg");if(!e||typeof e.getBBox!="function")return null;let n;try{n=e.getBBox()}catch{return null}let r=e.viewBox?.baseVal?.height||0,o=e.getBoundingClientRect();if(!r||!o.height||!n.height)return null;let i=o.height/r,s=getComputedStyle(t),a=o.top-t.getBoundingClientRect().top+t.scrollTop,c=(parseFloat(s.paddingBottom)||0)+(parseFloat(s.borderBottomWidth)||0),d=Math.min(Math.max(n.y,0),40)*i,l=Math.ceil(a+(n.y+n.height)*i+d+c);return Math.min(l,t.offsetHeight)}var Ca="template[data-skryb-lint]",Qt=class{constructor(e,n){this.sourceElement=e;this.outputElement=n;this.state=io();this.pendingViewportFits=new Set;this.autoFittedDiagrams=new Map;this.session=new Jt(new Zt(e)),this.renderer=new Kt(this.state,r=>this.renderMarkdown(r)),this.chrome=new Vt(this.state,n),this.sourceEditor=n?new _t({outputElement:n,getSource:()=>this.getSource(),getDocumentTheme:()=>this.getDocumentTheme(),getDocumentColourScheme:()=>this.state.documentColorScheme,renderDocument:(r,o)=>this.renderDocument(r,o),stopDiagramEditing:()=>this.stopDiagramEditing(),closeDocumentMenu:()=>this.closeDocumentMenu()}):null,this.diagramEditor=n?new Wt({outputElement:n,state:this.state,persistDiagramModels:()=>this.persistDiagramModels(),renderDocument:()=>this.renderDocument()}):null,this.exportService=new Xt(this.session,this.state,n,this.sourceEditor),this.lifecycle=n?new Ut({outputElement:n,isAutoTheme:()=>this.state.documentThemeSetting==="auto",renderDocument:()=>{this.renderDocument()},refitDiagramViewports:()=>this.refitDiagramViewports(),hasUnsavedChanges:()=>this.session.hasUnsavedChanges(this.sourceEditor?.hasUnsavedDraft),isSourceEditorOpen:()=>!!this.sourceEditor?.isOpen,toggleSourceEditor:()=>this.sourceEditor?.isOpen?this.sourceEditor.close():this.sourceEditor?.open(),downloadDocument:()=>this.downloadDocument(),closeDocumentMenu:()=>this.closeDocumentMenu(),closeDiagramExportMenus:()=>this.closeDiagramExportMenus(),getExpandedDiagramIndex:()=>this.state.expandedDiagramIndex,toggleDiagramExpansion:r=>this.toggleDiagramExpansion(r),hasSelection:()=>!!(this.state.selectedNode||this.state.selectedEdge||this.state.selectedSequenceElement),clearSelection:()=>{_e(this.state),this.renderDocument()},revealSource:r=>this.sourceEditor?.reveal(r)}):null}getSource(){return this.session.source}setSource(e){this.session.source=e}getDocumentTheme(){return this.state.documentTheme}stopDiagramEditing(){this.state.editingDiagramIndex!==null&&(this.state.editingDiagramIndex=null,this.state.editSessionDiagram=null,_e(this.state))}renderDiagram(e,n,r){return no(e,n,{figure:r,colourScheme:this.state.documentColorScheme,state:{...this.state,documentTheme:this.state.documentTheme,documentColorScheme:this.state.documentColorScheme},onDiagram:(o,i)=>{this.state.diagramModels[o]=i}})}renderMarkdown(e,n={diagramIndex:0}){return Bn(e,n,{renderDiagram:(r,o,i)=>this.renderDiagram(r,o,i),documentColorScheme:this.state.documentColorScheme,documentTheme:this.state.documentTheme})}persistDiagramModels(){let e=this.session.persistDiagramModels(this.state.diagramModels);this.sourceEditor?.syncSource(e)}renderDocument(e=this.getSource(),{preserveOnError:n=!1}={}){if(!this.outputElement)return!1;for(let a of this.outputElement.querySelectorAll(".docdiagram")){let c=Number(a.dataset.diagramIndex);if(this.pendingViewportFits.has(c)){this.state.diagramViewportHeights.delete(c);continue}c!==this.state.expandedDiagramIndex&&this.state.diagramViewportHeights.set(c,a.offsetHeight)}let r={x:globalThis.scrollX||0,y:globalThis.scrollY||0},o=this.renderer.render(e,n);if(!o.ok)return n?(this.sourceEditor?.setError(o.message),!1):(this.applyPageTheme(this.state.documentTheme),this.removeToolbarChrome(),this.outputElement.innerHTML=`<section class="docdiagram-error"><strong>Document could not be rendered.</strong><br>${v(o.message)}</section>`,this.sourceEditor?.renderTray(),!1);this.setSource(e);let i=o.markup;this.sourceEditor?.clearError(),this.outputElement.dataset.theme=this.state.documentTheme,this.outputElement.dataset.colourScheme=this.state.documentColorScheme,this.applyDocumentColourScheme(this.outputElement),this.outputElement.dataset.format=this.state.documentFormat,this.applyPageTheme(this.state.documentTheme),this.outputElement.innerHTML=i,this.removeToolbarChrome(),this.createToolbar(),this.sourceEditor?.renderTray();let s=document.querySelector(".docdiagram-source-tray");return s&&this.applyDocumentColourScheme(s),this.diagramEditor?.enableCanvasPanning(),this.diagramEditor?.enableSequenceSelection(),this.fitDiagramViewports(),this.state.editingDiagramIndex!==null&&this.diagramEditor?.enableEditing(),globalThis.scrollTo?.(r.x,r.y),!0}fitDiagramViewports(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram")){let n=Number(e.dataset.diagramIndex);if(this.state.diagramViewportHeights.has(n)||n===this.state.expandedDiagramIndex)continue;let r=Ma(e);r&&(this.state.diagramViewportHeights.set(n,r),this.autoFittedDiagrams.set(n,r),e.style.boxSizing="border-box",e.style.minHeight="0",e.style.height=`${r}px`)}this.pendingViewportFits.clear()}}refitDiagramViewports(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram")){let n=Number(e.dataset.diagramIndex),r=this.autoFittedDiagrams.get(n);if(!(r===void 0||n===this.state.expandedDiagramIndex)){if(e.offsetHeight!==r){this.autoFittedDiagrams.delete(n);continue}e.style.removeProperty("height"),e.style.removeProperty("min-height"),this.state.diagramViewportHeights.delete(n)}}this.fitDiagramViewports()}}closeDocumentMenu(){this.chrome.closeDocumentMenu()}bakeOnOpen(){let{baked:e,failed:n}=this.session.bake(),r=this.skrybActionRequestedByUrl("autowrap"),o=!1;if(!n&&r)try{let i=Fr(this.getSource());i.changed&&(this.setSource(i.source),o=!0)}catch{}(e||n||o||r||this.skrybActionRequestedByUrl("lint"))&&this.writeLintReport()}skrybActionRequestedByUrl(e){let n=globalThis.location?.search||"";return new URLSearchParams(n).getAll("skryb").includes(e)?!0:e==="lint"&&/(^|[?&])skryb-lint(=|&|$)/.test(n)}writeLintReport(){let e=this.getSource(),n;try{n=Tn(e)}catch(o){n={sourceHash:Ue(e),messages:[{severity:"error",rule:"schema",message:o instanceof Error?o.message:String(o)}],errorCount:1,warningCount:0}}let r=document.querySelector(Ca)||document.createElement("template");return r.dataset.skrybLint="",r.content.replaceChildren(document.createTextNode(JSON.stringify({errors:n.errorCount,warnings:n.warningCount,sourceHash:n.sourceHash,messages:n.messages},null,2))),r.isConnected||document.body.append(r),n}showLintReport(){let e=this.writeLintReport();if(!e)return;let n=`${e.errorCount} error${e.errorCount===1?"":"s"}, ${e.warningCount} warning${e.warningCount===1?"":"s"}`,r=document.querySelector(".docdiagram-lint-dialog")||document.body.appendChild(document.createElement("dialog"));r.className="docdiagram-lint-dialog",r.replaceChildren();let o=document.createElement("h2");o.textContent=`Document check: ${n}`;let i=document.createElement("div");i.className="docdiagram-lint-messages",e.messages.length||(i.textContent="Nothing to report. Every check passed.");for(let a of e.messages){let c=a.location?.subjects.find(l=>l.sourceRange)?.sourceRange||a.location?.fenceRange,d=c&&this.sourceEditor?document.createElement("button"):document.createElement("pre");if(d.textContent=Wr({sourceHash:e.sourceHash,messages:[a],errorCount:a.severity==="error"?1:0,warningCount:a.severity==="warning"?1:0}),d instanceof HTMLButtonElement&&c&&(d.type="button",d.title=`Reveal source at line ${c.start.line}`,d.addEventListener("click",()=>{r.close(),this.sourceEditor?.revealSourceRange(c,e.sourceHash)})),i.append(d),a.suggestedAction?.id==="wrap-linear-flow"){let l=document.createElement("button");l.type="button",l.textContent=a.suggestedAction.label,l.addEventListener("click",()=>{let u=Ar(this.getSource(),a.suggestedAction.diagramIndex);if(!u.changed||!u.layout)return;let{before:p,after:h}=u.layout;globalThis.confirm(`Preview: fitted content changes from ${p.width} by ${p.height} (${p.aspectRatio.toFixed(1)}:1) to ${h.width} by ${h.height} (${h.aspectRatio.toFixed(1)}:1).

This replaces node positions, connector anchors, routes, and waypoints. Apply the wrapped layout?`)&&(r.close(),this.renderDocument(u.source),this.sourceEditor?.syncSource(u.source),this.writeLintReport())}),i.append(l)}}let s=document.createElement("button");s.type="button",s.textContent="Close",s.addEventListener("click",()=>r.close()),r.append(o,i,s),r.showModal()}downloadDocument(){this.exportService.downloadDocument()}async downloadOfflineDocument(){await this.exportService.downloadOfflineDocument()}boot(){if(!(!this.sourceElement||!this.outputElement)){ro(),this.session.captureSavedSource(),this.bakeOnOpen(),this.lifecycle?.bind();try{Tt(this.getSource()).frontmatter.doctype==="diagram"&&(this.state.expandedDiagramIndex=0)}catch{this.state.expandedDiagramIndex=null}this.renderDocument()}}getCoreApi(){return{bakeDocumentSource:Pt,spliceBakedFences:Sn,lintDocument:Tn}}createToolbar(){if(!this.outputElement)return;let e=document.createElement("section");e.className="docdiagram-toolbar",e.dataset.editing=String(this.state.editingDiagramIndex!==null),e.dataset.theme=this.state.documentTheme,e.dataset.colourScheme=this.state.documentColorScheme,e.dataset.format=this.state.documentFormat;let n=this.getSelectedNode(),r=n?null:this.getSelectedEdge(),o=!n&&!r?this.getSelectedSequenceElement():null,i=n&&this.state.selectedNode?this.state.diagramModels[this.state.selectedNode.diagramIndex]:r&&this.state.selectedEdge?this.state.diagramModels[this.state.selectedEdge.diagramIndex]:o&&this.state.selectedSequenceElement?this.state.diagramModels[this.state.selectedSequenceElement.diagramIndex]:null;e.innerHTML=['<button type="button" class="docdiagram-menu-toggle" aria-label="Document menu" aria-expanded="false" title="Document menu">\u2630</button>','<div class="docdiagram-menu" hidden>','<label class="docdiagram-theme-control">Theme<select class="docdiagram-theme-select">',`<option value="auto"${this.state.documentThemeSetting==="auto"?" selected":""}>Auto</option>`,`<option value="light"${this.state.documentThemeSetting==="light"?" selected":""}>Light</option>`,`<option value="dark"${this.state.documentThemeSetting==="dark"?" selected":""}>Dark</option>`,"</select></label>",`<label class="docdiagram-theme-control">Colour scheme<select class="docdiagram-colour-scheme-select">${Object.entries(Fe).map(([c,d])=>`<option value="${c}"${this.state.documentColorScheme===c?" selected":""}>${d.label}</option>`).join("")}</select></label>`,'<label class="docdiagram-theme-control">Format<select class="docdiagram-format-select">',`<option value="centered"${this.state.documentFormat==="centered"?" selected":""}>Centered</option>`,`<option value="full-width"${this.state.documentFormat==="full-width"?" selected":""}>Full width</option>`,"</select></label>",'<label class="docdiagram-theme-control">Opens as<select class="docdiagram-doctype-select">',`<option value="document"${this.state.documentDoctype==="document"?" selected":""}>Document</option>`,`<option value="diagram"${this.state.documentDoctype==="diagram"?" selected":""}>Diagram</option>`,"</select></label>",'<button type="button" class="docdiagram-edit-source">Edit source</button>','<button type="button" class="docdiagram-lint">Check document</button>','<button type="button" class="docdiagram-print-document">Print / Save as PDF</button>','<button type="button" class="docdiagram-save">Save As</button>','<button type="button" class="docdiagram-offline-save">Save for Offline</button>',"</div>",n&&i?.type==="flowchart"?`<div class="docdiagram-inspector" data-kind="node">${co(i,n,this.state.documentColorScheme,this.state.documentTheme)}</div>`:r&&i?`<div class="docdiagram-inspector" data-kind="edge">${lo(i,r)}</div>`:o&&i?`<div class="docdiagram-inspector" data-kind="sequence">${uo(i,this.state.selectedSequenceElement,o,this.state.documentColorScheme,this.state.documentTheme)}</div>`:""].join("");let s=e.querySelector(".docdiagram-menu-toggle"),a=e.querySelector(".docdiagram-menu");s?.addEventListener("click",()=>{if(!a)return;let c=a.hidden;a.hidden=!c,s.setAttribute("aria-expanded",String(c))}),e.querySelector(".docdiagram-print-document")?.addEventListener("click",()=>this.printDocument()),e.querySelector(".docdiagram-save")?.addEventListener("click",()=>this.downloadDocument()),e.querySelector(".docdiagram-offline-save")?.addEventListener("click",async c=>{let d=c.currentTarget;d.disabled=!0;try{await this.downloadOfflineDocument()}catch(l){let u=l instanceof Error?l.message:String(l);console.error("Offline export failed.",l),globalThis.alert(`Save for Offline failed: ${u}`)}finally{d.disabled=!1}}),e.querySelector(".docdiagram-edit-source")?.addEventListener("click",()=>{this.closeDocumentMenu(),this.sourceEditor?.open()}),e.querySelector(".docdiagram-lint")?.addEventListener("click",()=>{this.closeDocumentMenu(),this.showLintReport()}),e.querySelector(".docdiagram-theme-select")?.addEventListener("change",c=>{this.setSource(Cr(this.getSource(),c.currentTarget.value)),this.renderDocument()}),e.querySelector(".docdiagram-colour-scheme-select")?.addEventListener("change",c=>{this.setSource(Tr(this.getSource(),c.currentTarget.value)),this.renderDocument()}),e.querySelector(".docdiagram-format-select")?.addEventListener("change",c=>{this.state.documentFormat=c.currentTarget.value==="full-width"?"full-width":"centered",this.renderDocument()}),e.querySelector(".docdiagram-doctype-select")?.addEventListener("change",c=>{let d=c.currentTarget.value==="diagram"?"diagram":"document";this.setSource(Lr(this.getSource(),d)),this.setExpandedDiagram(d==="diagram"?0:null),this.renderDocument()}),this.outputElement.before(e),this.applyDocumentColourScheme(e),n&&this.state.selectedNode?mo(this,e,this.state.selectedNode.diagramIndex,this.state.selectedNode.nodeId):r&&this.state.selectedEdge?go(this,e,this.state.selectedEdge.diagramIndex,this.state.selectedEdge.edgeIndex):o&&this.state.selectedSequenceElement&&ho(this,e,o),this.wireChromeControls(),this.dockExpandedDiagramToolbar(e)}dockExpandedDiagramToolbar(e){this.chrome.dockExpandedDiagramToolbar(e)}getSelectedNode(){let e=this.state.selectedNode,n=e?this.state.diagramModels[e.diagramIndex]:null;return e&&n?.type==="flowchart"&&Xe(this.state,e.diagramIndex)&&ue(n,e.nodeId)?.node||null}getSelectedEdge(){let e=this.state.selectedEdge,n=e?this.state.diagramModels[e.diagramIndex]:null;return e&&n?.type==="flowchart"&&Xe(this.state,e.diagramIndex)&&n.edges[e.edgeIndex]||null}getSelectedSequenceElement(){let e=this.state.selectedSequenceElement,n=e?this.state.diagramModels[e.diagramIndex]:null;return!e||n?.type!=="sequence"||!Xe(this.state,e.diagramIndex)?null:e.kind==="participant"?n.participants?.find(r=>r.id===e.id)||null:e.kind==="message"?n.messages?.[e.index]||null:n.notes?.[e.index]||null}applyDocumentColourScheme(e){this.chrome.applyDocumentColourScheme(e)}wireChromeControls(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram-export-toggle"))e.addEventListener("click",()=>{let n=e.parentElement?.querySelector(".docdiagram-diagram-export-menu");if(!n)return;let r=n.hidden;this.closeDiagramExportMenus(),n.hidden=!r,e.setAttribute("aria-expanded",String(r))});for(let e of this.outputElement.querySelectorAll(".docdiagram-toggle-expand"))e.addEventListener("click",()=>this.toggleDiagramExpansion(Number(e.dataset.diagramIndex)));for(let e of this.outputElement.querySelectorAll(".docdiagram-open-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.openDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-save-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.downloadDiagramDocument(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-download-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.downloadDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-print-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.printDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-zoom-in, .docdiagram-zoom-out"))e.addEventListener("click",()=>{let n=Number(e.dataset.diagramIndex),r=this.state.diagramZooms.get(n)||100,o=e.classList.contains("docdiagram-zoom-in")?25:-25;this.state.diagramZooms.set(n,kt(r+o)),this.renderDocument()});for(let e of this.outputElement.querySelectorAll(".docdiagram-fit"))e.addEventListener("click",()=>{let n=Number(e.dataset.diagramIndex);this.state.diagramZooms.set(n,100),this.state.diagramCameraOffsets.delete(n),this.pendingViewportFits.add(n),this.renderDocument()});for(let e of this.outputElement.querySelectorAll(".docdiagram-start-editing"))e.addEventListener("click",()=>{let n=Number(e.dataset.diagramIndex),r=this.state.diagramModels[n];r&&(this.state.editSessionDiagram=Se(Be(r),this.state.documentColorScheme),this.state.editingDiagramIndex=n,_e(this.state),this.renderDocument())});for(let e of this.outputElement.querySelectorAll(".docdiagram-done-editing"))e.addEventListener("click",()=>this.exitEditing(this.state.editingDiagramIndex,!1));for(let e of this.outputElement.querySelectorAll(".docdiagram-cancel-editing"))e.addEventListener("click",()=>this.exitEditing(this.state.editingDiagramIndex,!0));for(let e of this.outputElement.querySelectorAll(".docdiagram-create-node"))e.addEventListener("click",()=>this.createNewNode(Number(e.dataset.diagramIndex)))}}printDocument(){this.closeDocumentMenu(),this.closeDiagramExportMenus(),this.stopDiagramEditing(),this.state.expandedDiagramIndex=null,this.state.diagramViewportHeights.clear();for(let e of this.state.diagramZooms.keys())this.state.diagramZooms.set(e,100);this.state.diagramCameraOffsets.clear(),this.renderDocument(),globalThis.print()}closeDiagramExportMenus(){this.chrome.closeDiagramExportMenus()}exitEditing(e,n){e!==null&&(n&&this.state.editSessionDiagram&&(this.state.diagramModels[e]=this.state.editSessionDiagram,this.persistDiagramModels()),this.state.editingDiagramIndex=null,this.state.editSessionDiagram=null,_e(this.state),this.renderDocument())}createNewNode(e){let n=this.state.diagramModels[e];if(!n||n.type!=="flowchart")return;let r=rr(n);this.state.selectedNode={diagramIndex:e,nodeId:r.id},this.state.selectedEdge=null,this.persistDiagramModels(),this.renderDocument()}applyPageTheme(e){this.chrome.applyPageTheme(e)}setExpandedDiagram(e){let n=this.state.expandedDiagramIndex;if(n!==e){this.state.expandedDiagramIndex=e;for(let r of[n,e])r!==null&&(this.state.diagramZooms.set(r,100),this.state.diagramCameraOffsets.delete(r),this.pendingViewportFits.add(r),this.autoFittedDiagrams.delete(r))}}toggleDiagramExpansion(e){this.setExpandedDiagram(this.state.expandedDiagramIndex===e?null:e),this.closeDiagramExportMenus(),this.renderDocument()}removeToolbarChrome(){this.chrome.removeToolbar()}};var Ta=document.querySelector("#source"),La=document.querySelector("#rendered-document"),xo=new Qt(Ta,La),Pa=globalThis;Pa.DocDiagramCore=xo.getCoreApi();xo.boot();})();
