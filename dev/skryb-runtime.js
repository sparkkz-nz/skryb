/*! Skryb runtime | Copyright 2026 Stuart Parkinson | Apache-2.0 | https://github.com/sparkkz-nz/skryb */
"use strict";(()=>{var we=["background","pale","light","neutral","dark","accent-soft","accent","accent-strong","note","success","warning","danger","highlight","none"],or=["flowchart","sequence"],yt=["auto","light","dark"],nr=["right","down","left","up"],_r=["actor"],xt=["solid","dashed"],Qe=["rounded-rectangle","circle","oval","database","diamond","rhombus","flattened-hexagon","chevron","right-chevron","document","text"],ne=["top","right","bottom","left"],et=["orthogonal","straight","curved"],De=["none","arrow","circle"],dt={start:"none",end:"arrow"},Xr=["top","center"],Kr=["left","center","right"],ir={width:50,height:20},ar={width:50,height:20},O={shape:"rounded-rectangle",label:"New node",width:190,height:80},Te=(r,e,t,o,n,i,s,a,c,d,l,u,g)=>({background:r,pale:e,light:t,neutral:o,dark:n,"accent-soft":i,accent:s,"accent-strong":a,note:c,success:d,warning:l,danger:u,highlight:g,none:b("None","none","none",r.text)}),b=(r,e,t,o,n,i)=>({label:r,fill:e,stroke:t,text:o,gradient:n,glow:i}),$e={classic:{label:"Classic",light:Te(b("Background","#FFFFFF","#D1D5DB","#111827"),b("Pale","#F3F4F6","#9CA3AF","#1F2937"),b("Light","#E5E7EB","#6B7280","#1F2937"),b("Neutral","#D1D5DB","#4B5563","#111827"),b("Dark","#374151","#111827","#F9FAFB"),b("Soft","#DBEAFE","#60A5FA","#1E3A8A"),b("Accent","#BFDBFE","#2563EB","#1E3A8A","#EFF6FF"),b("Strong","#2563EB","#1D4ED8","#FFFFFF","#3B82F6","#60A5FA"),b("Note","#DBEAFE","#2563EB","#1E3A8A"),b("Success","#DCFCE7","#16A34A","#14532D"),b("Warning","#FFEDD5","#EA580C","#7C2D12"),b("Danger","#FEE2E2","#DC2626","#7F1D1D"),b("Highlight","#FEF9C3","#CA8A04","#713F12")),dark:Te(b("Background","#111827","#374151","#F9FAFB"),b("Pale","#1F2937","#4B5563","#F3F4F6"),b("Light","#374151","#6B7280","#F9FAFB"),b("Neutral","#4B5563","#9CA3AF","#FFFFFF"),b("Dark","#9CA3AF","#D1D5DB","#111827"),b("Soft","#172554","#3B82F6","#DBEAFE"),b("Accent","#1E3A8A","#60A5FA","#EFF6FF","#172554"),b("Strong","#2563EB","#93C5FD","#FFFFFF","#1D4ED8","#60A5FA"),b("Note","#172554","#60A5FA","#DBEAFE"),b("Success","#052E16","#4ADE80","#DCFCE7"),b("Warning","#431407","#FB923C","#FFEDD5"),b("Danger","#450A0A","#F87171","#FEE2E2"),b("Highlight","#422006","#FACC15","#FEF9C3"))},fire:{label:"Fire",light:Te(b("Background","#FBFAF9","#D9D2CC","#1F1B19"),b("Pale","#F4F1ED","#C7BDB6","#282320"),b("Light","#E9E2DC","#A2948B","#282320"),b("Neutral","#D5CAC2","#8A6D59","#241B15"),b("Dark","#3D312A","#221913","#FFF2E4"),b("Soft","#FDECDD","#E7A672","#7A3B12"),b("Accent","#FBD8BA","#D2691E","#6A2D07","#FFF3E8"),b("Strong","#D2521C","#A6380D","#FFFFFF","#F0873C","#FFA867"),b("Note","#F7EBDD","#A9784C","#523A22"),b("Success","#E7F2D9","#5F8C2B","#2C4310"),b("Warning","#FFEACB","#E08600","#6D3C00"),b("Danger","#FFE1DB","#D93A1F","#6D1708"),b("Highlight","#FFF6CB","#D9A400","#5B4200")),dark:Te(b("Background","#171413","#3A3330","#E7E2DE"),b("Pale","#1F1B19","#4A413C","#EDE8E3"),b("Light","#2B2522","#695C54","#F5EFE9"),b("Neutral","#3E3430","#A08674","#FFF3E7"),b("Dark","#C9B29F","#E4D3C4","#191412"),b("Soft","#3A2415","#C4763A","#FFE7D2"),b("Accent","#5A2E12","#F0873C","#FFEDDD","#47240F"),b("Strong","#E2571B","#FFB27A","#FFFFFF","#B33C0E","#FF8A3D"),b("Note","#302319","#BE8C5A","#F6E4D0"),b("Success","#1F2E14","#8FBF52","#E7F4D5"),b("Warning","#4A2A05","#FFA726","#FFE9C4"),b("Danger","#4B1108","#FF6B52","#FFE0DA"),b("Highlight","#453206","#FFD54A","#FFF6D2"))},ice:{label:"Ice",light:Te(b("Background","#F8FCFF","#D8EAF4","#123040"),b("Pale","#EDF8FC","#B8DCEB","#123040"),b("Light","#D9F2FF","#88BED7","#123040"),b("Neutral","#B8DCEB","#4A8BAA","#123040"),b("Dark","#21536C","#123040","#F4FBFF"),b("Soft","#DDF5FF","#75C6E8","#0F4C67"),b("Accent","#BDEAFF","#2E91BF","#083B55","#E8F9FF"),b("Strong","#1976A3","#0E5E85","#FFFFFF","#43B3E8","#8DDBF7"),b("Note","#DCEFFF","#3182CE","#123A63"),b("Success","#DDF7EE","#1E9B68","#104B35"),b("Warning","#FFF0D8","#D97918","#6B3510"),b("Danger","#FFE4E7","#D9485F","#651C2A"),b("Highlight","#FFF8C9","#C69A13","#5E4900")),dark:Te(b("Background","#0C1D29","#26475A","#E8F7FF"),b("Pale","#112B3A","#376176","#E8F7FF"),b("Light","#173B4D","#4A7B92","#F0FAFF"),b("Neutral","#28576B","#79AFC3","#F4FBFF"),b("Dark","#A3D6E9","#D4F2FF","#0C1D29"),b("Soft","#10384E","#4AB5DF","#DDF7FF"),b("Accent","#15526D","#72CEF2","#ECFBFF","#123C52"),b("Strong","#2186B5","#94DCF5","#FFFFFF","#176A91","#64CEF2"),b("Note","#122E4B","#62A9F5","#DCEFFF"),b("Success","#103D32","#4DD69A","#DDF7EE"),b("Warning","#4B2C0D","#F3A34C","#FFF0D8"),b("Danger","#4B1923","#F07A8C","#FFE4E7"),b("Highlight","#4A3D0A","#E6C54B","#FFF8C9"))},midnight:{label:"Midnight",light:Te(b("Background","#F5F7FC","#CAD3E4","#101D38"),b("Pale","#E9EEF8","#B6C4DC","#172744"),b("Light","#D9E2F2","#91A5C5","#172744"),b("Neutral","#C1CEE1","#6F85A6","#14223C"),b("Dark","#243B63","#1B3155","#F5F8FF"),b("Soft","#DCE7FA","#93A9CE","#1A3158"),b("Accent","#C9DBFA","#5E7FB4","#152D54","#D6E3F8"),b("Strong","#345F9D","#2C548D","#FFFFFF","#416EAE","#6F91C2"),b("Note","#DBE7F8","#5277AE","#1D355D"),b("Success","#DDEFE8","#3E886A","#173F31"),b("Warning","#F8E9D1","#B9702D","#5D3513"),b("Danger","#F4E0E5","#AD5570","#591F30"),b("Highlight","#F8F0C9","#A88222","#554300")),dark:Te(b("Background","#081426","#1F3554","#E8F0FF"),b("Pale","#0D1C32","#2A4265","#E5EEFF"),b("Light","#132843","#3A557A","#EDF4FF"),b("Neutral","#1E385B","#59779E","#EEF5FF"),b("Dark","#91A9C9","#AFC2DB","#0A172A"),b("Soft","#112B4D","#527AA9","#E1EEFF"),b("Accent","#173B68","#6389BA","#ECF4FF","#1B416E"),b("Strong","#2C629F","#6D98CD","#FFFFFF","#356FAF","#6D98CD"),b("Note","#132A4A","#6D96C8","#DDEAFF"),b("Success","#123B31","#5FBA91","#DDF3E8"),b("Warning","#422C14","#D09150","#FBEAD1"),b("Danger","#431E2B","#D27691","#F8E1E8"),b("Highlight","#403710","#C5A543","#FAF2CA"))},paper:{label:"Paper",light:Te(b("Background","#FFFDF7","#E0D8C8","#332D24"),b("Pale","#F7F1E5","#D4C5AD","#40372C"),b("Light","#EEE3D0","#BBA98B","#40372C"),b("Neutral","#D8C8AF","#8C765A","#332D24"),b("Dark","#514536","#332D24","#FFFCF5"),b("Soft","#EEE8DC","#A99879","#44392B"),b("Accent","#E8DDC7","#947044","#3E2D1D","#F7F0E4"),b("Strong","#81592F","#62401F","#FFFFFF","#A77A44","#D3B37B"),b("Note","#E5EFF4","#517B98","#233E50"),b("Success","#E4F0DF","#5D8A54","#294527"),b("Warning","#F9E8CD","#B96B28","#64350D"),b("Danger","#F5E0DA","#AD5342","#5D251C"),b("Highlight","#F8F0BD","#A78216","#584600")),dark:Te(b("Background","#29251F","#554B3E","#F9F2E6"),b("Pale","#373027","#6F6250","#F9F2E6"),b("Light","#4A4033","#8B7B64","#FFF9EE"),b("Neutral","#675947","#A89880","#FFF9EE"),b("Dark","#CBBCA4","#E8DBC7","#30291F"),b("Soft","#463B2D","#B6A080","#FFF8E9"),b("Accent","#5C482F","#D1B98A","#FFF9EE","#483622"),b("Strong","#916C3C","#E0C28B","#FFFFFF","#705029","#CFAA69"),b("Note","#273A46","#7DB2D0","#E5EFF4"),b("Success","#31452B","#9BC58F","#E4F0DF"),b("Warning","#503016","#E3A060","#F9E8CD"),b("Danger","#51281F","#DA8A79","#F5E0DA"),b("Highlight","#4A3D12","#D6BC48","#F8F0BD"))}},Zr={light:{edge:{stroke:"#52616B",strokeWidth:2,text:"#3E4A54"},node:{fill:"#EAF2FF",stroke:"#3574C7",strokeWidth:2,text:"#17202A"}},dark:{edge:{stroke:"#B8C7D5",strokeWidth:2,text:"#D9E4ED"},node:{fill:"#193A61",stroke:"#71AEF7",strokeWidth:2,text:"#F3F8FC"}}};var Jr=["note","info","warning","success"],Qr={2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))","2fr 1fr":"minmax(0, 2fr) minmax(0, 1fr)","1fr 2fr":"minmax(0, 1fr) minmax(0, 2fr)"};function wt(r){if(r==="light"||r==="dark")return r;if(r==="auto")return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches?"dark":"light";throw new Error(`Unsupported document theme: ${r}`)}function lt(r,e="light"){let t=wt(e),o=Zr[t];if(!o)throw new Error(`Unsupported diagram theme: ${t}`);return o}function fe(r,e,t){return(Object.prototype.hasOwnProperty.call($e,r)?$e[r]:void 0)?.[wt(e)]?.[t]||null}function Fe(r,e){return{...r,...e||{}}}function Et(r,e){return e&&r.styles?.[e]||null}function Ge(r,e,t="light",o="classic"){let i=lt(r,t).node,s=e.shape==="text"?{fill:"none",stroke:"none"}:null,a=Et(r,e.class),c=a?.palette?fe(o,t,a.palette):null,d=e.palette?fe(o,t,e.palette):null;return Fe(Fe(Fe(Fe(Fe(i,s),c),a?.style),d),e.style)}function tt(r,e,t="light",o="classic"){let n=lt(r,t),i=e.palette?fe(o,t,e.palette):null;return Fe(Fe(n.node,i),e.style)}function St(r,e,t="light"){let o=lt(r,t),n=Et(r,e.class);return Fe(Fe(o.edge,n?.style),e.style)}function sr(r,e){let t=e==="start"?r.start:r.end;return typeof t=="string"&&De.includes(t)?t:dt[e]}function ce(r){let e=Number(r.canvas?.grid);return Number.isFinite(e)&&e>0?e:0}function H(r,e){return e?Math.round(r/e)*e:Math.round(r)}function vt(r,e,t){let o=H(r,t),n=t?Math.ceil(e/t)*t:e;return Math.max(n,o)}function eo(r){return{width:Number(r.size?.width)||O.width,height:Number(r.size?.height)||O.height}}var X=class{constructor(e){this.entriesById=new Map;this.entriesByNode=new Map;this.ranges=new Map;let t=[],o=(n,i,s,a)=>{for(let c of n){let d={x:s.x+(Number(c.position?.x)||0),y:s.y+(Number(c.position?.y)||0)},l={node:c,parent:i,siblings:n,position:d,bounds:{...d,...eo(c)},depth:a},u=t.length;t.push(l),this.entriesById.set(c.id,this.entriesById.get(c.id)||l),this.entriesByNode.set(c,l),o(c.children||[],c,d,a+1),this.ranges.set(c,{start:u,end:t.length})}};o(e.nodes,null,{x:0,y:0},0),this.entries=t}getById(e){return this.entriesById.get(e)||null}getByNode(e){return this.entriesByNode.get(e)||null}contains(e,t){let o=this.ranges.get(e),n=this.ranges.get(t);return!!(o&&n&&n.start>o.start&&n.start<o.end)}isRelated(e,t){return e===t||this.contains(e,t)||this.contains(t,e)}descendants(e){let t=this.ranges.get(e);return t?this.entries.slice(t.start+1,t.end):[]}};function de(r,e){return new X(r).getById(e)}function rt(r,e){return new X(r).getByNode(e)?.bounds||{x:0,y:0,...eo(e)}}function to(r,e){var h;let t=new X(r),o=t.getById(e);if(!o)return null;let{node:n,siblings:i,position:s}=o,{width:a,height:c}=o.bounds,d={x:s.x+a/2,y:s.y+c/2},u=t.entries.filter(f=>f.node!==n&&!t.contains(n,f.node)).filter(({bounds:f})=>d.x>=f.x&&d.x<=f.x+f.width&&d.y>=f.y&&d.y<=f.y+f.height).reduce((f,m)=>!f||m.depth>=f.depth?m:f,null),g=u?(h=u.node).children||(h.children=[]):r.nodes;return i===g||(i.splice(i.indexOf(n),1),n.position={x:s.x-(u?.position.x||0),y:s.y-(u?.position.y||0)},g.push(n)),n}function Pe(r,e){return r.includes(e)}function hn(r){return{x:Number(r.position?.x)||0,y:Number(r.position?.y)||0,width:Number(r.size?.width)||O.width,height:Number(r.size?.height)||O.height}}function ot(r,e,t=40){return ro(r,e,t)}function cr(r,e=40){return ro(r,null,e,!0)}function ro(r,e,t=40,o=!1){let n=Number(r.canvas?.width)||1e3,i=Number(r.canvas?.height)||560,s=o||!!r.canvas?.auto,a=new X(r),d=[...new Set(a.entries.map(y=>y.node))];e&&!d.includes(e)&&d.push(e);let l=y=>a.getByNode(y)?.bounds||hn(y),u=()=>[...d.map(l),...d.filter(y=>y.arrow).map(y=>({x:y.arrow.x,y:y.arrow.y,width:0,height:0})),...(r.edges||[]).filter(y=>y.waypoint).map(y=>({x:y.waypoint.x,y:y.waypoint.y,width:0,height:0}))],g=u(),h=Math.min(0,...g.map(y=>y.x)),f=Math.min(0,...g.map(y=>y.y)),m=h<0?t-h:0,p=f<0?t-f:0;if(m||p){for(let y of a.entries.filter($=>$.parent===null)){let $=y.node;$.position={...$.position,x:(Number($.position?.x)||0)+m,y:(Number($.position?.y)||0)+p}}for(let y of d)y.arrow&&(y.arrow={x:y.arrow.x+m,y:y.arrow.y+p});for(let y of r.edges||[])y.waypoint&&(y.waypoint={x:y.waypoint.x+m,y:y.waypoint.y+p});a=new X(r)}let E=u(),N=Math.max(2*t,...E.map(y=>y.x+y.width+t)),x=Math.max(2*t,...E.map(y=>y.y+y.height+t));return r.canvas={...r.canvas,width:s&&E.length?N:Math.max(n+m,N),height:s&&E.length?x:Math.max(i+p,x)},r}function oo(r,e){return r.x<e.x+e.width&&r.x+r.width>e.x&&r.y<e.y+e.height&&r.y+r.height>e.y}function pn(r,e="new-node"){let t=i=>i.flatMap(s=>[s.id,...t(s.children||[])]),o=new Set(t(r));if(!o.has(e))return e;let n=2;for(;o.has(`${e}-${n}`);)n+=1;return`${e}-${n}`}function fn(r,e){let t=e.replace(/[^a-z0-9]/gi,"").toLowerCase()||"node",o=1,n="";do n=`${t}${String(o).padStart(2,"0")}`,o+=1;while(r.has(n));return r.add(n),n}function bn(r,e,t,o,n){let i=Number(r.canvas?.width)||1e3,s=Number(r.canvas?.height)||560,a=ce(r),c=a||20,d={x:H(n.x,a),y:H(n.y,a)};for(let u=c;u<=Math.max(i,s);u+=c)for(let g of[{x:d.x+u,y:d.y+u},{x:d.x+u,y:d.y-u},{x:d.x-u,y:d.y+u},{x:d.x-u,y:d.y-u}])if(!(g.x<0||g.y<0||g.x+t>i||g.y+o>s)&&!e.entries.some(({bounds:h})=>oo({...g,width:t,height:o},h)))return g;let l=Math.max(0,...e.entries.map(({bounds:u})=>u.x+u.width));return{x:H(l+c,a),y:0}}function yn(r){let e=new X(r),t=Number(r.canvas?.width)||1e3,o=Number(r.canvas?.height)||560,n=ce(r),i={x:H(Math.max(0,(t-O.width)/2),n),y:H(Math.max(0,(o-O.height)/2),n)},s=n||20;for(let a=0;a<=Math.max(t,o);a+=s)for(let c of[{x:i.x+a,y:i.y},{x:i.x-a,y:i.y},{x:i.x,y:i.y+a},{x:i.x,y:i.y-a}])if(!(c.x<0||c.y<0||c.x+O.width>t||c.y+O.height>o)&&!e.entries.some(({bounds:d})=>oo({...c,width:O.width,height:O.height},d)))return c;return i}function no(r){let e={id:pn(r.nodes),label:O.label,shape:O.shape,position:yn(r),size:{width:O.width,height:O.height}};return r.nodes.push(e),e}function Dt(r,e){let t=new X(r),o=t.getById(e);if(!o)return null;let n=new Set(t.entries.map(({node:l})=>l.id)),i=l=>({id:fn(n,l.shape),label:l.label,shape:l.shape,...l.position?{position:{...l.position}}:{},...l.size?{size:{...l.size}}:{},...l.style?{style:{...l.style}}:{},...l.palette?{palette:l.palette}:{},...l.subtitle!==void 0?{subtitle:l.subtitle}:{},...l.textVAlign!==void 0?{textVAlign:l.textVAlign}:{},...l.textHAlign!==void 0?{textHAlign:l.textHAlign}:{},...l.children?{children:l.children.map(i)}:{}}),s=i(o.node),a=o.bounds,c=bn(r,t,Number(s.size?.width)||O.width,Number(s.size?.height)||O.height,a),d=o.parent?t.getByNode(o.parent)?.position||{x:0,y:0}:{x:0,y:0};return s.position={x:c.x-d.x,y:c.y-d.y},o.siblings.push(s),ot(r,s),s}function io(r,e,t,o,n){if(!Pe(ne,t)||!Pe(ne,n))throw new Error("Connector anchors must be supported edge anchors.");let i={source:e,target:o,sourceAnchor:t,targetAnchor:n,route:"orthogonal",end:"arrow"};return r.edges.push(i),i}function ao(r,e,t,o){return Pe(ne,o)&&(e==="source"?(r.source=t,r.sourceAnchor=o):(r.target=t,r.targetAnchor=o)),r}function $t(r,e){return e<0||e>=r.edges.length?null:r.edges.splice(e,1)[0]}function Ft(r,e){let t=de(r,e);if(!t)return{node:null,deletedEdges:[]};let o=new Set([t.node,...t.node.children||[]].flatMap(function i(s){return[s,...(s.children||[]).flatMap(i)]}).map(i=>i.id)),n=r.edges.filter(i=>o.has(i.source)||o.has(i.target));return t.siblings.splice(t.siblings.indexOf(t.node),1),r.edges=r.edges.filter(i=>!o.has(i.source)&&!o.has(i.target)),r.canvas?.auto&&cr(r),{node:e,deletedEdges:n}}function Nt(r,e){return r.label=String(e).trim(),r}function so(r,e){return Pe(Qe,e)&&(r.shape=e),r}function co(r,e){return r.subtitle=String(e??"").trim(),r}function dr(r,e,t){return e==="textVAlign"&&(t==="top"||t==="center")&&(r.textVAlign=t),e==="textHAlign"&&(t==="left"||t==="center"||t==="right")&&(r.textHAlign=t),r}function ut(r,e,t){return r.style={...r.style,[e]:t},r}function lr(r,e,t="classic"){if(!Pe(we,e)||!fe(t,"light",e))return r;let{fill:n,stroke:i,text:s,...a}=r.style||{};return Object.keys(a).length?r.style=a:delete r.style,r.palette=e,r}function lo(r){return r==="document"?ar:ir}function ur(r){return{position:{x:Number(r.position?.x)||0,y:Number(r.position?.y)||0},size:{width:Number(r.size?.width)||O.width,height:Number(r.size?.height)||O.height},childPositions:new Map((r.children||[]).map(e=>[e,{x:Number(e.position?.x)||0,y:Number(e.position?.y)||0}]))}}function uo(r,e,t,o,n,i=ur(e)){let s=ce(r),a=lo(e.shape),c=t.endsWith("left"),d=t.startsWith("top"),l=vt(i.size.width+(c?-o:o),a.width,s),u=vt(i.size.height+(d?-n:n),a.height,s);if(e.shape==="circle"){let m=Math.max(l,u);l=m,u=m}let g={...e.position,x:c?i.position.x+i.size.width-l:i.position.x,y:d?i.position.y+i.size.height-u:i.position.y},h=i.position.x-g.x,f=i.position.y-g.y;for(let m of e.children||[]){let p=i.childPositions.get(m)||m.position||{x:0,y:0};m.position={...m.position,x:p.x+h,y:p.y+f}}return e.position=g,e.size={...e.size,width:l,height:u},e}function mr(r,e,t,o){let n=ce(r),i=lo(e.shape),s=t==="width"?i.width:i.height,a=vt(Number(o)||s,s,n);return e.size=e.shape==="circle"?{...e.size,width:a,height:a}:{...e.size,[t]:a},e}function At(r,e){return r.label=String(e).trim(),r}function mo(r,e){return Pe(et,e)&&(r.route=e),r}function go(r){return delete r.waypoint,r}function gr(r,e){return r.arrow={x:e.x,y:e.y},r}function xn(r){return delete r.arrow,r}function ho(r,e){if(e.arrow)return xn(e);let t=rt(r,e),o=ce(r),n=gr(e,{x:H(t.x+t.width/2,o),y:H(t.y+t.height+Math.max(60,t.height*.75),o)});return ot(r,e),n}function hr(r,e,t){return Pe(ne,t)&&(e==="source"?r.sourceAnchor=t:r.targetAnchor=t),r}function pr(r,e,t){return r.style={...r.style,[e]:t},r}function fr(r,e){let t=Math.max(1,Math.round(Number(e))||1);return r.style={...r.style,strokeWidth:t},r}function po(r,e){return r.start=Pe(De,e)?e:dt.start,r}function fo(r,e){return r.end=Pe(De,e)?e:dt.end,r}function kt(r){return Math.min(Math.max(25,Number(r)||100),800)}function Mt(r,e=0){return e===1?r*16:e===2?r*400:r}function bo(r,e,t=0){return kt(kt(r)*Math.exp(-Mt(e,t)*.0025))}var yo=new WeakSet;function xo(r){return yo.has(r)}var br={stageGap:120,siblingGap:60};function Ie(r){return{width:Number(r.size?.width)||O.width,height:Number(r.size?.height)||O.height}}function yr(r){return Number.isFinite(r.position?.x)&&Number.isFinite(r.position?.y)}function xr(r){if(r==null)return null;if(typeof r=="string")return{direction:r,...br};let e=r;return{direction:e.direction,stageGap:e.stageGap===void 0?br.stageGap:Number(e.stageGap),siblingGap:e.siblingGap===void 0?br.siblingGap:Number(e.siblingGap)}}function wn(r){return r==="right"||r==="left"}function wr(r){return{right:{source:"right",target:"left"},left:{source:"left",target:"right"},down:{source:"bottom",target:"top"},up:{source:"top",target:"bottom"}}[r]}function En(r,e,t){let o=new Set(r),n=wr(t),i=e.filter(m=>o.has(m.source)&&o.has(m.target)&&m.source!==m.target),s=i.filter(m=>!(m.sourceAnchor===n.target&&m.targetAnchor===n.source)),a=s.length?s:i,c=new Map;for(let m of a)c.set(m.source,[...c.get(m.source)||[],m.target]);let d=[],l=new Map,u=m=>{l.set(m,"visiting");for(let p of c.get(m)||[])l.get(p)!=="visiting"&&(d.push({source:m,target:p}),l.has(p)||u(p));l.set(m,"done")};for(let m of r)l.has(m)||u(m);let g=new Map;for(let m of d)g.set(m.target,[...g.get(m.target)||[],m.source]);let h=new Map,f=(m,p)=>{let E=h.get(m);if(E!==void 0)return E;if(p.has(m))return 0;p.add(m);let N=Math.max(0,...(g.get(m)||[]).map(x=>f(x,p)+1));return h.set(m,N),N};for(let m of r)f(m,new Set);return h}function Sn(r,e,t=4){let o=s=>{let a=new Map;for(let c of e){let[d,l]=s?[c.target,c.source]:[c.source,c.target];a.set(d,[...a.get(d)||[],l])}return a},n=o(!0),i=o(!1);for(let s=0;s<t;s+=1){let a=s%2===0,c=a?r.map((d,l)=>l):r.map((d,l)=>r.length-1-l);for(let d of c){let l=a?d-1:d+1,u=r[l];if(!u)continue;let g=new Map(u.map((p,E)=>[p,E])),h=a?n:i,f=new Map;for(let p of r[d]){let E=(h.get(p)||[]).map(N=>g.get(N)).filter(N=>N!==void 0).sort((N,x)=>N-x);f.set(p,E.length?E[E.length-1>>1]:Number.NaN)}let m=new Map(r[d].map((p,E)=>[p,E]));r[d]=[...r[d]].sort((p,E)=>{let N=f.get(p),x=f.get(E);return Number.isNaN(N)||Number.isNaN(x)||N===x?m.get(p)-m.get(E):N-x})}}}function vn(r,e,t,o,n){let i=r.map(x=>x.id),s=En(i,e,t.direction),a=Math.max(0,...s.values())+1,c=Array.from({length:a},()=>[]);for(let x of i)c[s.get(x)||0].push(x);let d=e.filter(x=>s.has(x.source)&&s.has(x.target));Sn(c,d);let l=new Map(r.map(x=>[x.id,x])),u=wn(t.direction),g=t.direction==="left"||t.direction==="up",h=c.map(x=>Math.max(0,...x.map(y=>{let $=Ie(l.get(y));return u?$.width:$.height}))),f=c.map(x=>x.reduce((y,$,w)=>{let D=Ie(l.get($));return y+(u?D.height:D.width)+(w?t.siblingGap:0)},0)),m=Math.max(0,...f),p=0,E=h.map(x=>{let y=p;return p+=x+t.stageGap,y}),N=Math.max(0,p-t.stageGap);c.forEach((x,y)=>{let $=(m-f[y])/2;for(let w of x){let D=l.get(w),k=Ie(D),C=g?N-E[y]-(u?k.width:k.height):E[y];D.position={x:H(o.x+(u?C:$),n),y:H(o.y+(u?$:C),n)},$+=(u?k.height:k.width)+t.siblingGap}})}function wo(r,e,t=0){return r.x-t<e.x+e.width&&r.x+r.width+t>e.x&&r.y-t<e.y+e.height&&r.y+r.height+t>e.y}function kn(r,e,t,o,n){let i=new Map(e.filter(yr).map(m=>[m.id,m])),s=Ie(r),a=wr(o.direction),c=[];for(let m of t){let p=m.source===r.id,E=m.target===r.id;if(p===E)continue;let N=i.get(p?m.target:m.source);if(!N)continue;let x=(p?m.sourceAnchor:m.targetAnchor)||(p?a.source:a.target),y={...N.position,...Ie(N)};x==="left"?c.push({position:{x:y.x+y.width+o.stageGap,y:y.y+(y.height-s.height)/2},axis:"x",sign:1}):x==="right"?c.push({position:{x:y.x-o.stageGap-s.width,y:y.y+(y.height-s.height)/2},axis:"x",sign:-1}):x==="top"?c.push({position:{x:y.x+(y.width-s.width)/2,y:y.y+y.height+o.stageGap},axis:"y",sign:1}):x==="bottom"&&c.push({position:{x:y.x+(y.width-s.width)/2,y:y.y-o.stageGap-s.height},axis:"y",sign:-1})}if(!c.length)return null;let d=c[0].axis,l=c.filter(m=>m.axis===d),g=l[0].sign>0?Math.max(...l.map(m=>m.position[d])):Math.min(...l.map(m=>m.position[d])),h=d==="x"?"y":"x",f=c.reduce((m,p)=>m+p.position[h],0)/c.length;return{position:{x:H(d==="x"?g:f,n),y:H(d==="y"?g:f,n)},acrossAxis:h}}function Dn(r,e,t,o,n,i){let s=n||20,a=Math.min(i,20);for(let c=0;c<=200;c+=1)for(let d of c?[c*s,-c*s]:[0]){let l={...r,[o]:r[o]+d},u={...l,...e};if(!t.some(g=>wo(u,g,a)))return{x:H(l.x,n),y:H(l.y,n)}}return r}function $n(r,e,t,o,n){let i=o||20,s=Math.min(n,20),a={x:H(t.x,o),y:H(t.y,o)},c=Math.max(t.y,...e.map(d=>d.y+d.height));for(let d=0;d<=2e3;d+=i)for(let l of d?[{x:a.x+d,y:a.y},{x:a.x,y:a.y+d}]:[a])if(!e.some(u=>wo({...l,...r},u,s)))return l;return{x:a.x,y:H(c+i,o)}}function Fn(r,e,t,o,n){let i=r.filter(s=>!yr(s));if(!i.length)return!1;if(i.length===r.length)return vn(r,e,t,o,n),!0;for(let s of i){let a=Ie(s),c=r.filter(l=>l!==s&&yr(l)).map(l=>({...l.position,...Ie(l)})),d=kn(s,r,e,t,n);s.position=d?Dn(d.position,a,c,d.acrossAxis,n,t.siblingGap):$n(a,c,o,n,t.siblingGap)}return!0}function Nn(r,e){let t=e.x+e.width/2-(r.x+r.width/2),o=e.y+e.height/2-(r.y+r.height/2),n=Math.abs(t)-(r.width+e.width)/2,i=Math.abs(o)-(r.height+e.height)/2;return n<=0&&i<=0?null:n>=i?t>=0?{source:"right",target:"left"}:{source:"left",target:"right"}:o>=0?{source:"bottom",target:"top"}:{source:"top",target:"bottom"}}function An(r,e){let t=r.edges||[];if(!t.some(i=>!i.sourceAnchor||!i.targetAnchor))return!1;let o=wr(e.direction),n=new X(r);for(let i of t){if(i.sourceAnchor&&i.targetAnchor)continue;let s=n.getById(i.source)?.bounds,a=n.getById(i.target)?.bounds,c=s&&a&&i.source!==i.target?Nn(s,a):null;i.sourceAnchor=i.sourceAnchor||c?.source||o.source,i.targetAnchor=i.targetAnchor||c?.target||o.target}return!0}function Eo(r){let e=xr(r.layout);if(!e)return r;let t=ce(r),o=40,n=!1,i=(s,a)=>{for(let c of s)if(c.children?.length&&(i(c.children,{x:o,y:o}),!c.size)){let d=c.children.reduce((l,u)=>{let g=Ie(u);return{width:Math.max(l.width,(Number(u.position?.x)||0)+g.width),height:Math.max(l.height,(Number(u.position?.y)||0)+g.height)}},{width:0,height:0});c.size={width:H(d.width+o,t),height:H(d.height+o,t)}}n=Fn(s,r.edges||[],e,a,t)||n};return i(r.nodes||[],{x:o,y:o}),n=An(r,e)||n,n&&yo.add(r),r}var Mn=["nodes","edges","participants","messages","activations","notes","groups"],vo=["version","id","caption","theme"],Cn=[...vo,"type","layout","styles","canvas","nodes","edges"],Tn=[...vo,"type","canvas","participants","messages","activations","notes","groups"],Ln=["id","label","shape","class","position","size","style","palette","subtitle","textVAlign","textHAlign","arrow","children"],Pn=["source","target","class","sourceAnchor","targetAnchor","route","label","style","start","end","waypoint"],Rn=["palette","style"],qn=["direction","stageGap","siblingGap"],Sr=["fill","stroke","strokeWidth","text"],Bn=["stroke","strokeWidth","text"],In=["id","label","kind","palette","style","size"],zn=["from","to","label","style"],Hn=["participant","from","to"],jn=["at","after","label","palette","style","size"],On=["label","from","to"],Gn=["width","height","participantSpacing","participantSize"];function v(r){return String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Re(r){let e=r.trim();if(e.startsWith('"')&&e.endsWith('"'))try{return JSON.parse(e)}catch{throw new Error(`Invalid quoted scalar: ${e}`)}if(e.startsWith("'")&&e.endsWith("'"))return e.slice(1,-1);if(/^-?\d+(\.\d+)?$/.test(e))return Number(e);if(e==="true"||e==="false")return e==="true";if(e.startsWith("{")&&e.endsWith("}")){let t=e.slice(1,-1).trim();if(!t)return{};let o=t.split(","),n={};for(let i of o){let s=i.indexOf(":");if(s===-1)throw new Error(`Invalid inline mapping: ${e}`);let a=i.slice(0,s).trim();n[a]=Re(i.slice(s+1))}return n}return e}var Vn=/^(\s*)((?:- )?)([A-Za-z_][\w-]*):\s*\|([+-])?\s*$/;function Un(r){let e=[],t=0;for(;t<r.length;){let o=r[t],n=o.match(Vn);if(!n){e.push(o),t+=1;continue}let[,i,s,a,c]=n,d=t+1,l=null;for(;d<r.length;){let m=r[d];if(m.trim()===""){d+=1;continue}l=m.length-m.trimStart().length;break}if(l===null||l<=i.length){e.push(`${i}${s}${a}: ""`),t+=1;continue}let u=[],g=t+1,h=0;for(;g<r.length;){let m=r[g];if(m.trim()===""){u.push(""),h+=1,g+=1;continue}if(m.length-m.trimStart().length<l)break;u.push(m.slice(l)),h=0,g+=1}h>0&&c!=="+"&&(u.length-=h-1);let f=u.join(`
`);e.push(`${i}${s}${a}: ${JSON.stringify(f)}`),t=g}return e}function Ne(r,e="classic"){let o=Un(r.replace(/\r\n/g,`
`).split(`
`)).filter(h=>h.trim()&&!h.trimStart().startsWith("#"));for(let h of o){if(h.trimStart()!==h||!h.trimEnd().endsWith(":"))continue;let f=h.trim().slice(0,-1);if(f!=="canvas"&&f!=="styles"&&f!=="layout"&&!Mn.includes(f))throw new Error(`Unsupported diagram section: ${f}`)}let n=0,i=h=>h.length-h.trimStart().length,s=h=>h.trim().match(/^([^:]+):\s*(.*)$/),a=h=>h.trim().match(/^- ([^:]+):\s*(.*)$/),c=h=>n>=o.length||i(o[n])<=h?{}:o[n].trimStart().startsWith("- ")?l(i(o[n])):d(i(o[n])),d=h=>{let f={};for(;n<o.length&&i(o[n])===h;){let m=o[n],p=s(m);if(!p)throw new Error(`Cannot parse diagram line: ${m}`);n+=1,f[p[1]]=p[2]?Re(p[2]):c(h)}return f},l=h=>{let f=[];for(;n<o.length&&i(o[n])===h;){let m=o[n],p=a(m);if(!p)throw new Error(`Cannot parse diagram line: ${m}`);n+=1;let E={[p[1]]:p[2]?Re(p[2]):c(h)};for(;n<o.length&&i(o[n])>h;){let N=i(o[n]),x=s(o[n]);if(!x)throw new Error(`Cannot parse diagram line: ${o[n]}`);n+=1,E[x[1]]=x[2]?Re(x[2]):c(N)}f.push(E)}return f},u=d(0);if(!u.type)throw new Error(`Diagram type is required and must be one of: ${or.join(", ")}.`);if(typeof u.type!="string"||!or.includes(u.type))throw new Error(`Unsupported diagram type: ${String(u.type)}`);let g=u.type==="flowchart"?Cn:Tn;return le(u,g,`${u.type} diagram`),Wn(u),u.type==="flowchart"?Yn(u,e):_n(u,e)}function Wn(r){if(r.version!==void 0&&(!Number.isInteger(r.version)||Number(r.version)<1))throw new Error("Diagram version must be a positive integer.");for(let e of["id","caption"])if(r[e]!==void 0&&typeof r[e]!="string")throw new Error(`Diagram ${e} must be a string.`);if(r.theme!==void 0&&(typeof r.theme!="string"||!yt.includes(r.theme)))throw new Error(`Unsupported diagram theme: ${String(r.theme)}`)}function Yn(r,e="classic"){if(r.canvas==="auto"&&(r.canvas={auto:!0}),r.canvas=r.canvas||{},typeof r.canvas!="object"||Array.isArray(r.canvas))throw new Error('Flowchart canvas must be a mapping or the value "auto".');if(r.canvas.auto!==void 0&&typeof r.canvas.auto!="boolean")throw new Error("Flowchart canvas.auto must be true or false.");return Array.isArray(r.nodes)||(r.nodes=[]),Array.isArray(r.edges)||(r.edges=[]),Zn(r,e),Eo(r),r.canvas.auto&&cr(r),r}function _n(r,e="classic"){return Jn(r,e),r}function le(r,e,t){for(let o of Object.keys(r||{}))if(!e.includes(o))throw new Error(`Unsupported ${t} field: ${o}`)}function Ct(r,e,t){if(r){for(let o of Object.keys(r))if(!e.includes(o))throw new Error(`Unsupported ${t} style field: ${o}`)}}function Er(r,e){let t=e.charAt(0).toUpperCase()+e.slice(1);if(typeof r!="object"||r===null||Array.isArray(r))throw new Error(`${t} must be a mapping.`);let o=r;if(!Number.isFinite(o.x)||!Number.isFinite(o.y))throw new Error(`${t} requires finite x and y coordinates.`);le(r,["x","y"],e)}function Xn(r){if(r.styles===void 0)return new Set;if(typeof r.styles!="object"||Array.isArray(r.styles))throw new Error("Diagram styles must be a mapping of names to style definitions.");for(let[e,t]of Object.entries(r.styles)){if(typeof t!="object"||t===null||Array.isArray(t))throw new Error(`Style "${e}" must be a mapping.`);if(le(t,Rn,`style "${e}"`),t.palette!==void 0&&(typeof t.palette!="string"||!we.includes(t.palette)))throw new Error(`Unsupported palette in style "${e}": ${String(t.palette)}`);if(t.style?.width!==void 0)throw new Error(`Style "${e}" style.width is not supported; use style.strokeWidth.`);if(Ct(t.style,Sr,`style "${e}"`),t.palette===void 0&&!Object.keys(t.style||{}).length)throw new Error(`Style "${e}" declares no palette or style values.`)}return new Set(Object.keys(r.styles))}function Kn(r){if(r.layout===void 0)return;if(typeof r.layout=="object"&&!Array.isArray(r.layout)){le(r.layout,qn,"layout");for(let t of["stageGap","siblingGap"]){let o=r.layout[t];if(o!==void 0&&(typeof o!="number"||!Number.isFinite(o)||o<0))throw new Error(`Layout ${t} must be a number of zero or more.`)}}else if(typeof r.layout!="string")throw new Error("Layout must be a direction or a mapping.");let e=xr(r.layout);if(!e||!nr.includes(e.direction))throw new Error(`Unsupported layout direction: ${String(e?.direction)}`)}function Zn(r,e="classic"){Kn(r);let t=r.layout!==void 0,o=Xn(r),n=(a,c)=>{if(a!==void 0&&(typeof a!="string"||!o.has(a)))throw new Error(`Unknown style class on ${c}: ${String(a)}`)},i=new Set,s=a=>{if("type"in a)throw new Error(`Node "${a.id||"unknown"}" uses removed field "type".`);if(le(a,Ln,`node "${a.id||"unknown"}"`),!a.id||typeof a.label!="string")throw new Error("Every node requires an id and a string label.");if(!a.shape)throw new Error(`Node "${a.id}" requires a shape.`);if(!Qe.includes(a.shape))throw new Error(`Unsupported node shape: ${a.shape}`);if(a.position===void 0){if(!t)throw new Error(`Node "${a.id}" requires a position, or a "layout" on the diagram to place it.`)}else Er(a.position,`node "${a.id}" position`);if(a.textVAlign!==void 0&&!Xr.includes(a.textVAlign))throw new Error(`Unsupported node textVAlign: ${a.textVAlign}`);if(a.textHAlign!==void 0&&!Kr.includes(a.textHAlign))throw new Error(`Unsupported node textHAlign: ${a.textHAlign}`);if(a.palette!==void 0&&(typeof a.palette!="string"||!we.includes(a.palette)))throw new Error(`Unsupported node palette: ${String(a.palette||"unknown")}`);if(a.style?.width!==void 0)throw new Error("Node style.width is not supported; use style.strokeWidth.");if(n(a.class,`node "${a.id}"`),Ct(a.style,Sr,`node "${a.id}"`),a.arrow!==void 0&&Er(a.arrow,`node "${a.id}" arrow`),i.has(a.id))throw new Error(`Duplicate flowchart node id: ${a.id}`);if(i.add(a.id),a.children!==void 0&&!Array.isArray(a.children))throw new Error(`Children for node "${a.id}" must be a list.`);for(let c of a.children||[])s(c)};for(let a of r.nodes)s(a);for(let a of r.edges){if(le(a,Pn,`edge "${a.source||"unknown"}" -> "${a.target||"unknown"}"`),!a.sourceAnchor&&!t)throw new Error(`Edge "${a.source||"unknown"}" -> "${a.target||"unknown"}" requires a sourceAnchor.`);if(!a.targetAnchor&&!t)throw new Error(`Edge "${a.source||"unknown"}" -> "${a.target||"unknown"}" requires a targetAnchor.`);if(a.sourceAnchor&&!ne.includes(a.sourceAnchor))throw new Error(`Unsupported edge sourceAnchor: ${a.sourceAnchor}`);if(a.targetAnchor&&!ne.includes(a.targetAnchor))throw new Error(`Unsupported edge targetAnchor: ${a.targetAnchor}`);if(a.route!==void 0&&!et.includes(a.route))throw new Error(`Unsupported edge route: ${a.route}`);if(a.waypoint!==void 0&&Er(a.waypoint,`edge "${a.source}" -> "${a.target}" waypoint`),a.start!==void 0&&!De.includes(a.start))throw new Error(`Unsupported edge start marker: ${a.start}`);if(a.end!==void 0&&!De.includes(a.end))throw new Error(`Unsupported edge end marker: ${a.end}`);if(a.style?.width!==void 0)throw new Error("Edge style.width is not supported; use style.strokeWidth.");n(a.class,`edge "${a.source||"unknown"}" -> "${a.target||"unknown"}"`),Ct(a.style,Bn,`edge "${a.source||"unknown"}" -> "${a.target||"unknown"}"`)}}function Jn(r,e="classic"){if(!Array.isArray(r.participants)||!Array.isArray(r.messages))throw new Error("Sequence diagrams require participants and messages sections.");if(r.activations!==void 0&&!Array.isArray(r.activations))throw new Error("Sequence diagram activations must be a list.");if(r.notes!==void 0&&!Array.isArray(r.notes))throw new Error("Sequence diagram notes must be a list.");if(r.groups!==void 0&&!Array.isArray(r.groups))throw new Error("Sequence diagram groups must be a list.");if(r.canvas!==void 0&&(typeof r.canvas!="object"||Array.isArray(r.canvas)))throw new Error("Sequence canvas must be a mapping.");le(r.canvas,Gn,"sequence canvas");for(let o of["width","height","participantSpacing"]){let n=r.canvas?.[o];if(n!==void 0&&(!Number.isFinite(n)||Number(n)<=0))throw new Error(`Sequence canvas.${o} must be a positive number.`)}if(r.canvas?.participantSize!==void 0){if(typeof r.canvas.participantSize!="object"||Array.isArray(r.canvas.participantSize))throw new Error("Sequence canvas.participantSize must be a mapping.");le(r.canvas.participantSize,["width","height"],"sequence canvas participantSize");for(let o of["width","height"]){let n=r.canvas.participantSize[o];if(n!==void 0&&(!Number.isFinite(n)||Number(n)<=0))throw new Error(`Sequence canvas.participantSize.${o} must be a positive number.`)}}let t=new Set;for(let o of r.participants){if(le(o,In,`participant "${o.id||"unknown"}"`),!o.id||!o.label)throw new Error("Every sequence participant requires an id and label.");if(o.kind!==void 0&&!_r.includes(o.kind))throw new Error(`Unsupported sequence participant kind: ${o.kind}`);if(So(o,`participant "${o.id}"`,e),t.has(o.id))throw new Error(`Duplicate sequence participant id: ${o.id}`);t.add(o.id)}for(let[o,n]of r.messages.entries()){if(le(n,zn,`message ${o}`),!n.from||!n.to||!n.label)throw new Error(`Sequence message ${o} requires from, to, and label.`);if(!t.has(n.from)||!t.has(n.to))throw new Error(`Sequence message ${o} references an unknown participant.`);if(n.style!==void 0&&!xt.includes(n.style))throw new Error(`Unsupported sequence message style: ${n.style}`)}for(let[o,n]of(r.activations||[]).entries()){if(le(n,Hn,`activation ${o}`),!n.participant||!Number.isInteger(n.from)||!Number.isInteger(n.to))throw new Error(`Sequence activation ${o} requires participant and integer from and to message positions.`);if(!t.has(n.participant))throw new Error(`Sequence activation ${o} references an unknown participant.`);if(n.from<1||n.to<n.from||n.to>r.messages.length)throw new Error(`Sequence activation ${o} range is out of bounds.`)}for(let[o,n]of(r.notes||[]).entries()){le(n,jn,`note ${o}`);let i=n.after;if(!n.at||!Number.isInteger(i)||!n.label)throw new Error(`Sequence note ${o} requires at, after, and label.`);if(So(n,`note ${o}`,e),!t.has(n.at))throw new Error(`Sequence note ${o} references an unknown participant.`);if(i<0||i>r.messages.length)throw new Error(`Sequence note ${o} after position is out of bounds.`)}for(let[o,n]of(r.groups||[]).entries()){if(le(n,On,`group ${o}`),!n.label&&n.label!=="")throw new Error(`Sequence group ${o} requires a label.`);if(!Number.isInteger(n.from)||!Number.isInteger(n.to))throw new Error(`Sequence group ${o} requires integer from and to indices.`);if(n.from<1||n.to<n.from||n.to>r.messages.length)throw new Error(`Sequence group ${o} range is out of bounds.`)}}function So(r,e,t="classic"){if(r.palette!==void 0){let o=String(r.palette||"");if(!we.includes(o))throw new Error(`Unsupported ${e} palette: ${o||"unknown"}`)}if(Ct(r.style,Sr,e),r.size){le(r.size,["width","height"],`size for ${e}`);for(let o of["width","height"]){let n=r.size[o];if(n!==void 0&&(!Number.isFinite(n)||Number(n)<=0))throw new Error(`${e} size.${o} must be a positive number.`)}}}function vr(r){return typeof r=="number"||typeof r=="boolean"?String(r):r&&typeof r=="object"?Object.keys(r).length?`{ ${Object.entries(r).map(([e,t])=>`${e}: ${vr(t)}`).join(", ")} }`:"{}":/^[\w./-]+(?: [\w./-]+)*$/.test(String(r))?String(r):JSON.stringify(String(r))}function Ve(r,e,t,o,n=""){if(typeof e=="string"&&e.includes(`
`)){let i=e.split(`
`).map(s=>s.length?`${" ".repeat(o)}${s}`:"");return[`${" ".repeat(t)}${n}${r}: |+`,...i]}return[`${" ".repeat(t)}${n}${r}: ${vr(e)}`]}function ze(r,e=2){let t=Object.entries(r),[o,n]=t[0],i=Ve(o,n,e,e+4,"- ");for(let[s,a]of t.slice(1))if(!(s==="children"&&Array.isArray(a)&&!a.length))if(s==="children"&&Array.isArray(a)){i.push(`${" ".repeat(e+2)}children:`);for(let c of a)i.push(...ze(c,e+4))}else i.push(...Ve(s,a,e+2,e+4));return i}function He(r){let e=[`type: ${vr(r.type)}`];for(let n of["version","id","caption","theme"])r[n]!==void 0&&e.push(...Ve(n,r[n],0,2));if(r.type==="flowchart"&&r.layout!==void 0&&e.push(...Ve("layout",r.layout,0,2)),r.type==="sequence"){if(r.canvas!==void 0){e.push("canvas:");for(let[n,i]of Object.entries(r.canvas))e.push(...Ve(n,i,2,4))}e.push("participants:");for(let n of r.participants||[])e.push(...ze(n));e.push("messages:");for(let n of r.messages||[])e.push(...ze(n));if(r.activations!==void 0){e.push("activations:");for(let n of r.activations||[])e.push(...ze(n))}if(r.notes!==void 0){e.push("notes:");for(let n of r.notes||[])e.push(...ze(n))}if(r.groups!==void 0){e.push("groups:");for(let n of r.groups||[])e.push(...ze(n))}return e.join(`
`)}if(r.styles!==void 0){e.push("styles:");for(let[n,i]of Object.entries(r.styles)){e.push(`  ${n}:`);for(let[s,a]of Object.entries(i))e.push(...Ve(s,a,4,6))}}let t=r.canvas||{},o=Object.entries(t).filter(([n])=>!t.auto||n!=="width"&&n!=="height");if(t.auto&&o.length===1)e.push("canvas: auto");else if(o.length){e.push("canvas:");for(let[n,i]of o)e.push(...Ve(n,i,2,4))}e.push("nodes:");for(let n of r.nodes||[])e.push(...ze(n));e.push("edges:");for(let n of r.edges||[])e.push(...ze(n));return e.join(`
`)}var Qn=/^(?: {0,3}> ?)+/;function Ae(r){return r.replace(Qn,"")}function Le(r){let e=r.match(/^(`{3,})([\w-]*)\s*$/);return e?{marker:e[1],info:e[2]}:null}function Ue(r,e){let t=r.match(/^(`{3,})\s*$/);return!!(t&&t[1].length>=e.length)}function nt(r,e,t,o=r.length){for(let n=e;n<o;n+=1)if(Ue(Ae(r[n]),t))return n;return-1}var ei=["document","diagram"];function Tt(r){let e=r.replace(/\r\n/g,`
`).split(`
`),t=e.findIndex(i=>i.trim()!=="");if(t===-1||e[t]!=="---")return{content:r,frontmatter:{}};let o=e.indexOf("---",t+1);if(o===-1)return{content:r,frontmatter:{}};let n={};for(let i of e.slice(t+1,o)){if(!i.trim()||i.trimStart().startsWith("#"))continue;let s=i.match(/^([^:]+):\s*(.*)$/);if(!s)throw new Error(`Cannot parse document frontmatter line: ${i}`);n[s[1]]=Re(s[2])}return{content:e.slice(o+1).join(`
`),frontmatter:n}}function mt(r){let e=Tt(r),t=String(e.frontmatter.theme??"auto"),o=String(e.frontmatter.colourScheme??"classic"),n=String(e.frontmatter.doctype??"document");if(!yt.includes(t))throw new Error(`Unsupported document theme: ${t}`);let i=t,s=wt(i);if(!Object.prototype.hasOwnProperty.call($e,o))throw new Error(`Unsupported document colour scheme: ${o}`);let a=o;if(!ei.includes(n))throw new Error(`Unsupported document doctype: ${n}`);return{...e,theme:i,resolvedTheme:s,colourScheme:a,doctype:n}}function Lt(r){let e=mt(r),t=e.content.replace(/\r\n/g,`
`).split(`
`),o=0,n=new Set,i=!1,s=null;for(let a of t){let c=Ae(a);if(s){Ue(c,s)&&(s=null);continue}let d=Le(c);if(d){s=d.marker;continue}if(/^:::diagram\s+\{\s*id=/.test(c)){i=!0;break}}for(;o<t.length;){let a=Ae(t[o]),c=Le(a);if(!c){o+=1;continue}let d=nt(t,o+1,c.marker);if(d===-1)throw new Error("Unclosed code block.");if(c.info==="diagram"){let l=t.slice(o+1,d).map(g=>Ae(g)).join(`
`);Ne(l,e.colourScheme);let u=l.match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m)?.slice(1).find(Boolean);if(u){if(n.has(u))throw new Error(`Duplicate diagram id: ${u}`);n.add(u)}else if(i)throw new Error("Every diagram requires an id when using diagram references.")}o=d+1}return e}function Pt(r){let e=r.match(/^id:\s*(.*?)\s*$/m)?.[1];if(e===void 0)return null;try{let t=Re(e);return typeof t=="string"?t:null}catch{return null}}function Rt(r){let e=r.match(/[^\r\n]*(?:\r\n|\r|\n|$)/g)?.filter((u,g,h)=>u.length>0||g<h.length-1)||[],t=e.map(u=>u.replace(/\r\n$|[\r\n]$/,"")),o=[],n=0;for(let u of e)o.push(n),n+=u.length;let i=(u,g)=>({line:u+1,column:g+1,offset:(o[u]??r.length)+g}),s=u=>{let g=t[u]||"",h=Ae(g),f=g.length-h.length;return{start:i(u,f),end:i(u,g.length)}},a=0,c=t.findIndex(u=>u.trim()!=="");if(c!==-1&&t[c]==="---"){let u=t.indexOf("---",c+1);u!==-1&&(a=u+1)}let d=[],l=a;for(;l<t.length;){let u=Le(Ae(t[l]));if(!u){l+=1;continue}let g=nt(t,l+1,u.marker);if(g===-1)break;if(u.info==="diagram"){let h=t.slice(l+1,g).map((E,N)=>s(l+1+N)),f=t.slice(l+1,g).map(E=>Ae(E)).join(`
`),m=s(l),p=s(g);d.push({id:Pt(f),source:f,index:d.length,fenceRange:{start:m.start,end:p.end},bodyRange:h.length?{start:h[0].start,end:h[h.length-1].end}:{start:m.end,end:p.start},lineRanges:h})}l=g+1}return d}function We(r){let e=2166136261;for(let t=0;t<r.length;t+=1)e^=r.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e.toString(16).padStart(8,"0")}function qt(r){let e=r.split(`
`),t=e.map(h=>h.endsWith("\r")?h.slice(0,-1):h),n=e.filter(h=>h.endsWith("\r")).length*2>e.length-1?"\r":"",i=r.replace(/\r\n/g,`
`),{content:s,frontmatter:a}=Tt(i),c=String(a.colourScheme||"classic"),d=[],l=i.split(`
`).length-s.split(`
`).length,u=0,g=0;for(;l<e.length;){let h=Le(Ae(t[l]));if(!h){l+=1;continue}let f=nt(t,l+1,h.marker);if(f===-1)break;if(h.info==="diagram"){let m=t.slice(l+1,f).map(E=>Ae(E)).join(`
`),p=Ne(m,c);if(p.type==="flowchart"&&xo(p)){let E=t[l],N=E.slice(0,E.length-Ae(E).length);d.push({start:l+1,end:f,lines:He(p).split(`
`).map(x=>`${N}${x}${n}`)}),u+=1}else g+=1}l=f+1}return{source:kr(e,d).join(`
`),baked:u,preserved:g,fences:d}}function kr(r,e){let t=[...r];for(let o of[...e].reverse())t.splice(o.start,o.end-o.start,...o.lines);return t}function ko(r,e){return Pt(r)===null?`id: ${e}
${r}`:r.replace(/^id:\s*(?:"[^"]+"|[^\s#]+)\s*$/m,()=>`id: ${e}`)}function Dr(r,e,t){let o=r.replace(/\r\n/g,`
`),n=o.split(`
`),i=n.findIndex(l=>l.trim()!==""),s=i!==-1&&n[i]==="---",a=s?n.indexOf("---",i+1):-1;if(!s||a===-1)return`---
${e}: ${t}
---
${o}`;let c=!1,d=n.slice(i+1,a).map(l=>{if(!l.trim()||l.trimStart().startsWith("#"))return l;let u=l.match(/^([^:]+):\s*(.*)$/);return u&&u[1]===e?(c=!0,`${e}: ${t}`):l});return c||d.push(`${e}: ${t}`),[...n.slice(0,i+1),...d,...n.slice(a)].join(`
`)}function Do(r,e){return Dr(r,"theme",e)}function $o(r,e){return Dr(r,"colourScheme",e)}function Fo(r,e){return Dr(r,"doctype",e)}function No(r,e){let t=e.trim(),o=t?r.indexOf(t):-1;return o===-1?null:{start:o,end:o+t.length}}function Ao(r,e){let t=Number.parseFloat(globalThis.getComputedStyle(r).lineHeight)||20,o=r.value.slice(0,e.start).split(`
`).length-1,n=Math.max(1,Math.floor(r.clientHeight/t));r.scrollTop=Math.max(0,(o-Math.floor(n/2))*t)}function gt(r,e,t){let o=Math.min(r.x,e.x),n=Math.max(r.x,e.x),i=Math.min(r.y,e.y),s=Math.max(r.y,e.y);if(n<=t.x||o>=t.x+t.width||s<=t.y||i>=t.y+t.height)return!1;if(r.x===e.x||r.y===e.y)return!0;let a=d=>(e.x-r.x)*(d.y-r.y)-(e.y-r.y)*(d.x-r.x),c=[{x:t.x,y:t.y},{x:t.x+t.width,y:t.y},{x:t.x+t.width,y:t.y+t.height},{x:t.x,y:t.y+t.height}].map(a);return c.some(d=>d>0)&&c.some(d=>d<0)}function Bt(r,e){return r.slice(1).some((t,o)=>e.some(n=>gt(r[o],t,n)))}var ti=20,ri=220;function Mo(r){return[...new Set(r.map(e=>Math.round(e*100)/100))].sort((e,t)=>e-t)}var $r=[{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}];function Co(r){return r.x>0?0:r.x<0?1:r.y>0?2:3}function Fr(r,e,t,o,n,i=24,s=ti){let a={x:r.x+t.x*i,y:r.y+t.y*i},c={x:e.x+o.x*i,y:e.y+o.y*i},d=Mo([r.x,e.x,a.x,c.x,...n.flatMap(M=>[M.x-s,M.x+M.width+s])]),l=Mo([r.y,e.y,a.y,c.y,...n.flatMap(M=>[M.y-s,M.y+M.height+s])]),u=new Map(d.map((M,L)=>[M,L])),g=new Map(l.map((M,L)=>[M,L])),h=M=>{let L=u.get(Math.round(M.x*100)/100),A=g.get(Math.round(M.y*100)/100);return L===void 0||A===void 0?null:{column:L,row:A}},f=h(a),m=h(c);if(!f||!m)return null;let p=(M,L)=>!n.some(A=>gt(M,L,A));if(!p(r,a)||!p(e,c))return null;let E=d.length*l.length*4,N=(M,L,A)=>(L*d.length+M)*4+A,x=new Float64Array(E).fill(Number.POSITIVE_INFINITY),y=new Int32Array(E).fill(-1),$=Co({x:-o.x,y:-o.y}),w=Co(t),D=N(f.column,f.row,w);x[D]=0;let k=[{key:D,cost:0}],C=-1;for(;k.length;){k.sort((R,j)=>R.cost-j.cost||R.key-j.key);let M=k.shift();if(M.cost>x[M.key])continue;let L=M.key%4,A=(M.key-L)/4,P=A%d.length,I=(A-P)/d.length;if(P===m.column&&I===m.row&&L===$){C=M.key;break}let F={x:d[P],y:l[I]};for(let R=0;R<4;R=R+1){let j=$r[R];if(j.x===-$r[L].x&&j.y===-$r[L].y)continue;let G=P+j.x,_=I+j.y;if(G<0||G>=d.length||_<0||_>=l.length)continue;let ee={x:d[G],y:l[_]};if(!p(F,ee))continue;let ge=M.cost+Math.hypot(ee.x-F.x,ee.y-F.y)+(R===L?0:ri),Se=N(G,_,R);ge<x[Se]&&(x[Se]=ge,y[Se]=M.key,k.push({key:Se,cost:ge}))}}if(C===-1)return null;let B=[];for(let M=C;M!==-1;M=y[M]){let L=M%4,A=(M-L)/4,P=A%d.length,I=(A-P)/d.length;B.unshift({x:d[P],y:l[I]})}return Nr([r,...B,e])}function Nr(r){let e=r.filter((t,o)=>o===0||t.x!==r[o-1].x||t.y!==r[o-1].y);return e.filter((t,o)=>{if(o===0||o===e.length-1)return!0;let n=e[o-1],i=e[o+1];return!(n.x===t.x&&t.x===i.x||n.y===t.y&&t.y===i.y)})}function To(r,e,t){let o=t.x-e.x,n=t.y-e.y,i=Math.hypot(o,n),s=u=>i?Math.abs(o*(u.y-e.y)-n*(u.x-e.x))/i:Math.hypot(u.x-e.x,u.y-e.y),c=[...r.slice(1,-1),...r.slice(1).map((u,g)=>({x:(r[g].x+u.x)/2,y:(r[g].y+u.y)/2}))];if(!c.length)return null;let d=Math.max(...c.map(s));if(!d)return null;let l={x:(e.x+t.x)/2,y:(e.y+t.y)/2};return c.filter(u=>s(u)===d).reduce((u,g)=>Math.hypot(g.x-l.x,g.y-l.y)<Math.hypot(u.x-l.x,u.y-l.y)?g:u)}function ue(r){return String(r??"").replace(/\r\n/g,`
`).split(`
`)}var oi="iljI|!.,;:'`()[]{}/\\",ni="tfr",ii="mwMW";function ai(r){return r===" "?.26:oi.includes(r)?.28:ni.includes(r)?.33:ii.includes(r)?.85:r>="0"&&r<="9"?.56:r>="A"&&r<="Z"?.66:.55}function It(r,e,t=!1){let o=0;for(let n of String(r??""))o+=ai(n);return o*e*(t?1.03:1)}function Lo(r,e,t,o=!1){return e>0?r.flatMap(n=>{if(It(n,t,o)<=e)return[n];let i=[],s="";for(let a of n.split(/(?<=\s)/)){let c=s+a;s&&It(c.trimEnd(),t,o)>e?(i.push(s.trimEnd()),s=a.trimStart()):s=c}return i.push(s.trimEnd()),i.filter((a,c)=>a||!c)}):r}function Ee(r,e,t,o,n,i,s="middle"){if(!t.length)return"";let a=t.map((c,d)=>{let l=d===0?"":` dy="${o}"`;return`<tspan x="${r}"${l}>${v(c)||" "}</tspan>`}).join("");return`<text x="${r}" y="${e}" text-anchor="${s}" class="${n}" fill="${v(i)}">${a}</text>`}function be(r,e,t,o,n){let i=r.shape,s=e+o/2,a=t+n/2,c={x:e+12,y:t+12,width:o-24,height:n-24},d={top:{x:s,y:t},right:{x:e+o,y:a},bottom:{x:s,y:t+n},left:{x:e,y:a}},l;if(i==="circle"){let u=Math.min(o,n),g=s-u/2,h=a-u/2,f=u/2;c.x=g+f*.3,c.y=h+f*.3,c.width=f*1.4,c.height=f*1.4,d.top.y=h,d.right.x=g+u,d.bottom.y=h+u,d.left.x=g,l=`<circle class="docdiagram-node-body" cx="${s}" cy="${a}" r="${f}"/>`}else if(i==="oval")c.x+=o*.1,c.width-=o*.2,l=`<ellipse class="docdiagram-node-body" cx="${s}" cy="${a}" rx="${o/2}" ry="${n/2}"/>`;else if(i==="database"){let u=Math.min(n*.22,18);c.y+=u/2,c.height-=u,l=`<path class="docdiagram-node-body" d="M ${e} ${t+u} C ${e} ${t-u/3} ${e+o} ${t-u/3} ${e+o} ${t+u} V ${t+n-u} C ${e+o} ${t+n+u/3} ${e} ${t+n+u/3} ${e} ${t+n-u} Z"/><path class="docdiagram-node-detail" d="M ${e} ${t+u} C ${e} ${t+u*2.3} ${e+o} ${t+u*2.3} ${e+o} ${t+u}" fill="none"/>`}else if(i==="diamond")c.x+=o*.25,c.y+=n*.25,c.width-=o*.5,c.height-=n*.5,d.top={x:s,y:t},d.right={x:e+o,y:a},d.bottom={x:s,y:t+n},d.left={x:e,y:a},l=`<polygon class="docdiagram-node-body" points="${s},${t} ${e+o},${a} ${s},${t+n} ${e},${a}"/>`;else if(i==="rhombus"){let u=Math.min(o*.2,n*.6);c.x+=u,c.width-=u*2,d.left.x=e+u/2,d.right.x=e+o-u/2,l=`<polygon class="docdiagram-node-body" points="${e+u},${t} ${e+o},${t} ${e+o-u},${t+n} ${e},${t+n}"/>`}else if(i==="flattened-hexagon"){let u=Math.min(o*.18,n*.7);c.x+=u,c.width-=u*2,l=`<polygon class="docdiagram-node-body" points="${e+u},${t} ${e+o-u},${t} ${e+o},${a} ${e+o-u},${t+n} ${e+u},${t+n} ${e},${a}"/>`}else if(i==="chevron"){let u=Math.min(o*.16,n*.45);c.x+=u*1.175,c.width-=u*1.35,d.left.x=e+u,l=`<polygon class="docdiagram-node-body" points="${e},${t} ${e+o-u},${t} ${e+o},${a} ${e+o-u},${t+n} ${e},${t+n} ${e+u},${a}"/>`}else if(i==="right-chevron"){let u=Math.min(o*.16,n*.45);c.width-=u,l=`<polygon class="docdiagram-node-body" points="${e},${t} ${e+o-u},${t} ${e+o},${a} ${e+o-u},${t+n} ${e},${t+n}"/>`}else if(i==="document"){let u=Math.max(12,Math.min(26,Math.min(o,n)*.18));c.width-=u*.45,c.y+=2,c.height-=2,l=`<path class="docdiagram-node-body" d="M ${e} ${t} H ${e+o-u} L ${e+o} ${t+u} V ${t+n} H ${e} Z M ${e+o-u} ${t} V ${t+u} H ${e+o}"/>`}else i==="text"?l=`<rect class="docdiagram-node-body" x="${e}" y="${t}" width="${o}" height="${n}"/>`:l=`<rect class="docdiagram-node-body" x="${e}" y="${t}" width="${o}" height="${n}" rx="12"/>`;return{bodyMarkup:l,textBounds:c,anchors:d}}function at(r,e,t,o,n){let i,s;typeof r=="number"?(i={x:r,y:e,width:t||0,height:o||0},s=n):(i=r,s=e);let a=20,c=15,d=Lo(ue(s.label),i.width,16,!0),l=s.subtitle?Lo(ue(s.subtitle),i.width,13):[],u=l.length?6:0,g=d.length*a,h=l.length*c,f=g+u+h,m=s.textHAlign||"center",p=m==="left"?i.x:m==="right"?i.x+i.width:i.x+i.width/2,E=m==="left"?"start":m==="right"?"end":"middle",N=i.y+i.height/2,x=s.textVAlign==="top"?i.y:N-f/2;return{centerX:p,textAnchor:E,labelLines:d,subtitleLines:l,labelLineHeight:a,subtitleLineHeight:c,labelStartY:x+a*.72,subtitleStartY:x+g+u+c*.72}}function zt(r,e,t){return r.bodyMarkup.replace("/>",` fill="${v(e.fill||"")}" stroke="${v(e.stroke||"")}" stroke-width="${t}"/>`).replace('class="docdiagram-node-detail"',`class="docdiagram-node-detail" stroke="${v(e.stroke||"")}" stroke-width="${t}"`)}function Po(r){return{top:{x:0,y:-1},right:{x:1,y:0},bottom:{x:0,y:1},left:{x:-1,y:0}}[r]}function K(r){return`${r.x} ${r.y}`}function Ro(r){let e=r.slice(1).map((n,i)=>{let s=r[i];return{start:s,end:n,length:Math.hypot(n.x-s.x,n.y-s.y)}}),o=e.reduce((n,i)=>n+i.length,0)/2;for(let n of e){if(o<=n.length||n===e[e.length-1]){let i=n.length?o/n.length:0;return{x:n.start.x+(n.end.x-n.start.x)*i,y:n.start.y+(n.end.y-n.start.y)*i}}o-=n.length}return r[0]}function Ar(r,e){return Math.min(Math.max(Math.abs(e.x-r.x),Math.abs(e.y-r.y),80)/2,140)}var si={along:r=>r.x,cross:r=>r.y,point:(r,e)=>({x:r,y:e})},ci={along:r=>r.y,cross:r=>r.x,point:(r,e)=>({x:e,y:r})},it=24;function di(r,e,t,o,n,i){let s=n.along(r),a=n.cross(r),c=n.along(e),d=n.cross(e),l=n.along(t),u=n.cross(o);if(Math.sign(c-s)===l&&Math.sign(a-d)===u)return[r,n.point(c,a),e];let g=Math.sign(c-s)===l?(s+c)/2:s+l*i,h=Math.sign(a-d)===u?(a+d)/2:d+u*i;return[r,n.point(g,a),n.point(g,h),n.point(c,h),e]}function li(r,e,t,o,n,i){let s=n.along(r),a=n.cross(r),c=n.along(e),d=n.cross(e),l=n.along(t),u=n.along(o),g=Math.sign(c-s)===l;if(l===-u&&g)return a===d?[r,e]:[r,n.point((s+c)/2,a),n.point((s+c)/2,d),e];if(l===u&&Math.abs(a-d)>=it){let E=l>0?Math.max(s,c)+it:Math.min(s,c)-it;return[r,n.point(E,a),n.point(E,d),e]}let h=i*2,f=s+l*h,m=c+u*h;if(f===m)return[r,n.point(f,a),n.point(f,d),e];let p=Math.min(a,d)-h;return[r,n.point(f,a),n.point(f,p),n.point(m,p),n.point(m,d),e]}function ui(r,e,t,o){if(r.x===e.x&&r.y===e.y)return[r,e];let n=Math.max(Math.abs(e.x-r.x),Math.abs(e.y-r.y)),i=Math.max(n/4,it),s=t.x!==0,a=s?si:ci;return s===(o.x!==0)?li(r,e,t,o,a,i):di(r,e,t,o,a,i)}function mi(r,e,t){for(let[o,n]of[[r,e],[r,t],[t,e]]){let i=Math.hypot(n.x-o.x,n.y-o.y);if(i>0)return{x:(n.x-o.x)/i,y:(n.y-o.y)/i}}return{x:1,y:0}}function qe(r,e,t,o,n="orthogonal",i,s){let a=Po(t),c=Po(o),d=a.x!==0,l=c.x!==0;if(!i&&s?.length&&n!=="orthogonal"&&Bt([r,e],s))for(let m of[20,60,120]){let p=Fr(r,e,a,c,s,it,m),E=p&&To(p,r,e);if(!E)continue;let N=qe(r,e,t,o,n,E);if(!Bt(Lr(N.path),s)){i=E;break}}let u,g,h,f;if(i&&n==="straight")u=`M ${K(r)} L ${K(i)} L ${K(e)}`,g=i,h={x:i.x-r.x,y:i.y-r.y},f={x:e.x-i.x,y:e.y-i.y};else if(i&&n==="curved"){let m=Ar(r,i),p=Ar(i,e),E=mi(r,e,i),N={x:r.x+a.x*m,y:r.y+a.y*m},x={x:i.x-E.x*m,y:i.y-E.y*m},y={x:i.x+E.x*p,y:i.y+E.y*p},$={x:e.x+c.x*p,y:e.y+c.y*p};u=[`M ${K(r)}`,`C ${K(N)} ${K(x)} ${K(i)}`,`C ${K(y)} ${K($)} ${K(e)}`].join(" "),g=i,h={x:N.x-r.x,y:N.y-r.y},f={x:e.x-$.x,y:e.y-$.y}}else if(i){let p=(i.x-r.x)*a.x+(i.y-r.y)*a.y<=0,E=(i.x-e.x)*c.x+(i.y-e.y)*c.y<=0,N={x:r.x+a.x*24,y:r.y+a.y*24},x={x:e.x+c.x*24,y:e.y+c.y*24},y=p?[r,N,d?{x:N.x,y:i.y}:{x:i.x,y:N.y},i]:[r,d?{x:i.x,y:r.y}:{x:r.x,y:i.y},i],$=E?[l?{x:x.x,y:i.y}:{x:i.x,y:x.y},x,e]:[l?{x:i.x,y:e.y}:{x:e.x,y:i.y},e],w=[...y,...$].filter((k,C,B)=>C===0||k.x!==B[C-1].x||k.y!==B[C-1].y);u=`M ${K(w[0])}${w.slice(1).map(k=>` L ${K(k)}`).join("")}`,g=Ro(w),h={x:w[1].x-w[0].x,y:w[1].y-w[0].y};let D=w.slice(-2);f={x:D[1].x-D[0].x,y:D[1].y-D[0].y}}else if(n==="straight")u=`M ${K(r)} L ${K(e)}`,g={x:(r.x+e.x)/2,y:(r.y+e.y)/2},h={x:e.x-r.x,y:e.y-r.y},f=h;else if(n==="curved"){let m=Ar(r,e),p={x:r.x+a.x*m,y:r.y+a.y*m},E={x:e.x+c.x*m,y:e.y+c.y*m};u=`M ${K(r)} C ${K(p)} ${K(E)} ${K(e)}`,g={x:(r.x+3*p.x+3*E.x+e.x)/8,y:(r.y+3*p.y+3*E.y+e.y)/8},h={x:p.x-r.x,y:p.y-r.y},f={x:e.x-E.x,y:e.y-E.y}}else{let m=ui(r,e,a,c),p=m.filter((N,x)=>x===0||N.x!==m[x-1].x||N.y!==m[x-1].y);if(p.length===1&&(p=[r,e]),s?.length&&Bt(p,s)){let N=Fr(r,e,a,c,s,it);N&&(p=Nr(N))}u=`M ${K(p[0])}${p.slice(1).map(N=>` L ${K(N)}`).join("")}`,g=Ro(p),h={x:p[1].x-p[0].x,y:p[1].y-p[0].y};let E=p.slice(-2);f={x:E[1].x-E[0].x,y:E[1].y-E[0].y}}return{path:u,midpoint:g,startTangent:h,endTangent:f,hitPath:u}}function Mr(r,e){let t=e?13:15;return{x:r.x-t/2,y:r.y-t/2,size:t,radius:e?2:t/2,transform:e?`rotate(45 ${r.x} ${r.y})`:""}}function qo(r,e,t,o){let n=Mr(t,o),i=o?"Anchored edge waypoint":"Edge waypoint";return`<rect class="docdiagram-edge-waypoint" data-diagram-index="${r}" data-edge-index="${e}" data-anchored="${o}" x="${n.x}" y="${n.y}" width="${n.size}" height="${n.size}" rx="${n.radius}"${n.transform?` transform="${n.transform}"`:""} aria-label="${i}"/>`}function gi(r){let e=Math.max(1,Number(r)||2),t=6+e*2.5,o=Math.max(t*.38,e/2+1);return{size:t,circleRadius:o}}function ht(r,e,t,o,n){let i=v(o),{size:s,circleRadius:a}=gi(n),c=s/2;return e==="arrow"?`<marker id="${r}" markerWidth="${s}" markerHeight="${s}" refX="${s}" refY="${c}" markerUnits="userSpaceOnUse" orient="${t==="start"?"auto-start-reverse":"auto"}"><path fill="${i}" stroke="${i}" d="M 0 0 L ${s} ${c} L 0 ${s} z"/></marker>`:e==="circle"?`<marker id="${r}" markerWidth="${s}" markerHeight="${s}" refX="${c}" refY="${c}" markerUnits="userSpaceOnUse"><circle cx="${c}" cy="${c}" r="${a}" fill="${i}" stroke="${i}"/></marker>`:""}function Ht(r,e){let t={x:r.x+r.width/2,y:r.y+r.height/2},o=e.x-t.x,n=e.y-t.y,i=Math.hypot(o,n);if(!Number.isFinite(i)||i<1)return null;let s=Math.max(6,Math.min(Math.min(r.width,r.height)*.28,i*.6,44)),a={x:-n/i*s,y:o/i*s},c=[{x:t.x+a.x,y:t.y+a.y},{x:e.x,y:e.y},{x:t.x-a.x,y:t.y-a.y}],d=[...c.map(h=>h.x),r.x,r.x+r.width],l=[...c.map(h=>h.y),r.y,r.y+r.height],u=Math.min(...d),g=Math.min(...l);return{points:c,polygonPoints:c.map(h=>`${h.x},${h.y}`).join(" "),bounds:{x:u,y:g,width:Math.max(...d)-u,height:Math.max(...l)-g}}}function hi(r,e,t){let o=r.indexOf('<path class="docdiagram-node-detail"');return(o===-1?r:r.slice(0,o)).replace('class="docdiagram-node-body"',`class="${t}"`).replace("/>",` fill="${e}" stroke="none"/>`)}function Cr(r){return hi(r,"#000000","docdiagram-node-callout-mask-body")}function Tr(r,e){let t=e*2+8;return{x:r.bounds.x-t,y:r.bounds.y-t,width:r.bounds.width+t*2,height:r.bounds.height+t*2}}function Bo(r,e,t,o,n){let i=!!t.fill&&t.fill!=="none",s=!!t.stroke&&t.stroke!=="none",a=i?t.fill:s?"none":t.text||"none",c=Tr(r,o),d=[`<mask id="${n}" maskUnits="userSpaceOnUse" x="${c.x}" y="${c.y}" width="${c.width}" height="${c.height}">`,`<rect class="docdiagram-node-callout-mask-region" x="${c.x}" y="${c.y}" width="${c.width}" height="${c.height}" fill="#ffffff"/>`,Cr(e),"</mask>"].join(""),l=i?"":` mask="url(#${n})"`;return[d,a==="none"?"":`<polygon class="docdiagram-node-callout" points="${r.polygonPoints}" fill="${v(a||"")}" stroke="none"${l}/>`,s?`<polygon class="docdiagram-node-callout-outline" points="${r.polygonPoints}" fill="none" stroke="${v(t.stroke||"")}" stroke-width="${o}" stroke-linejoin="round" mask="url(#${n})"/>`:""].join("")}function Lr(r,e=12){let t=[],o=/-?\d+(?:\.\d+)?/g,n={x:0,y:0};for(let[,i,s]of r.matchAll(/([MLC])\s*([^MLC]*)/g)){let a=(s.match(o)||[]).map(Number);if(i==="C"){let[c,d,l,u,g,h]=a;for(let f=1;f<=e;f+=1){let m=f/e,p=1-m;t.push({x:p**3*n.x+3*p**2*m*c+3*p*m**2*l+m**3*g,y:p**3*n.y+3*p**2*m*d+3*p*m**2*u+m**3*h})}n={x:g,y:h};continue}for(let c=0;c+1<a.length;c+=2)n={x:a[c],y:a[c+1]},t.push(n)}return t}function pi(r,e){return r||`diagram ${e+1}`}function fi(r,e){let t=new Map,o=[],n="";return r.source.split(`
`).forEach((i,s)=>{let a=i.match(/^([A-Za-z_][\w-]*):/);a&&(n=a[1]);let c=i.match(/^\s*-\s+id:\s*(?:"([^"]+)"|'([^']+)'|([^\s#]+))/),d=r.lineRanges[s];c&&d&&t.set(c[1]||c[2]||c[3],d),n==="edges"&&/^\s*-\s+[^:]+:/.test(i)&&d&&o.push(d)}),e.map(i=>i.kind==="node"?{...i,sourceRange:t.get(i.id)}:{...i,sourceRange:o[i.index]})}function bi(r,e){let t=Math.min(r.x+r.width,e.x+e.width)-Math.max(r.x,e.x),o=Math.min(r.y+r.height,e.y+e.height)-Math.max(r.y,e.y);return t>0&&o>0?{width:t,height:o}:null}function yi(r,e){let t=r.entries;for(let o=0;o<t.length;o+=1)for(let n=o+1;n<t.length;n+=1){let i=t[o],s=t[n];if(r.isRelated(i.node,s.node))continue;let a=bi(i.bounds,s.bounds);a&&e("node-overlap",`Nodes "${i.node.id}" and "${s.node.id}" overlap by ${Math.round(a.width)} by ${Math.round(a.height)} units.`,"warning",[{kind:"node",id:i.node.id},{kind:"node",id:s.node.id}])}}function xi(r,e){for(let{node:t}of r.entries){let o=Number(t.size?.width)||O.width,n=Number(t.size?.height)||O.height,{textBounds:i}=be(t,0,0,o,n),s=at(i,t),a=24;if(t.shape==="text"){let d=ue(t.label).find(l=>It(l.replace(/^#{1,2}\s+/,""),/^#{1,2}\s/.test(l)?24:16)>i.width+a);d!==void 0&&e("label-overflow",`Node "${t.id}" has a line wider than its shape: "${d.trim()}".`,"warning",[{kind:"node",id:t.id}])}let c=s.labelLines.length*s.labelLineHeight+(s.subtitleLines.length?6+s.subtitleLines.length*s.subtitleLineHeight:0);c>i.height+a&&e("label-overflow",`Node "${t.id}" needs ${Math.ceil(c)} units of text height but its shape offers ${Math.floor(i.height+a)}.`,"warning",[{kind:"node",id:t.id}])}}function wi(r,e,t){for(let[o,n]of(r.edges||[]).entries()){let i={kind:"edge",index:o,source:n.source,target:n.target},s=e.getById(n.source),a=e.getById(n.target);for(let[m,p,E]of[["source",n.source,s],["target",n.target,a]])E||t("unknown-edge-endpoint",`Edge "${n.source}" -> "${n.target}" names a ${m} node "${p}" that does not exist, so it is not drawn.`,"error",[i]);if(!s||!a)continue;let c=s.bounds,d=a.bounds,l=be(s.node,c.x,c.y,c.width,c.height).anchors[n.sourceAnchor||"right"],u=be(a.node,d.x,d.y,d.width,d.height).anchors[n.targetAnchor||"left"],g=e.entries.filter(({node:m})=>!e.isRelated(m,s.node)&&!e.isRelated(m,a.node)),{path:h}=qe(l,u,n.sourceAnchor||"right",n.targetAnchor||"left",n.route||"orthogonal",n.waypoint,n.waypoint?void 0:g.map(m=>m.bounds)),f=Lr(h);for(let m of g)f.slice(1).some((E,N)=>gt(f[N],E,m.bounds))&&t("edge-crosses-node",`Edge "${n.source}" -> "${n.target}" passes through unrelated node "${m.node.id}".`,"warning",[i,{kind:"node",id:m.node.id}])}}function Pr(r){let e=[],t=We(r);try{Lt(r)}catch(n){return e.push({severity:"error",rule:"schema",message:n.message}),{sourceHash:t,messages:e,errorCount:1,warningCount:0}}let o=mt(r).colourScheme;return Rt(r).forEach(n=>{let i=Ne(n.source,o);if(i.type!=="flowchart")return;let s=pi(n.id,n.index),a=(d,l,u="warning",g=[])=>{e.push({severity:u,rule:d,message:l,diagram:s,location:{diagramId:n.id,diagramIndex:n.index,fenceRange:n.fenceRange,subjects:fi(n,g)}})},c=new X(i);wi(i,c,a),yi(c,a),xi(c,a)}),{sourceHash:t,messages:e,errorCount:e.filter(n=>n.severity==="error").length,warningCount:e.filter(n=>n.severity==="warning").length}}function Io(r){return r.messages.map(e=>[e.severity,e.diagram?`[${e.diagram}]`:null,e.message,`(${e.rule})`].filter(Boolean).join(" ")).join(`
`)}var Ei=[{type:"comment",pattern:"\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/"},{type:"string",pattern:"`(?:\\\\.|[^`\\\\])*`|\"(?:\\\\.|[^\"\\\\\\n])*\"|'(?:\\\\.|[^'\\\\\\n])*'"}],je={type:"number",pattern:"\\b(?:0[xXbBoO][\\da-fA-F_]+|\\d[\\d_]*(?:\\.[\\d_]+)?(?:[eE][+-]?\\d+)?)\\b"};function Me(...r){return`\\b(?:${r.join("|")})\\b`}var Si=Me("async","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","export","extends","finally","for","from","function","get","if","implements","import","in","instanceof","interface","let","new","of","private","protected","public","readonly","return","satisfies","set","static","super","switch","this","throw","try","type","typeof","var","void","while","yield"),Ho={clike:[...Ei,{type:"keyword",pattern:Si},{type:"literal",pattern:Me("true","false","null","undefined","NaN","Infinity")},{type:"type",pattern:Me("any","bigint","boolean","never","number","object","string","symbol","unknown")},je],python:[{type:"comment",pattern:"#[^\\n]*"},{type:"string",pattern:`(?:[rRbBfFuU]{0,2})(?:"""[\\s\\S]*?"""|'''[\\s\\S]*?'''|"(?:\\\\.|[^"\\\\\\n])*"|'(?:\\\\.|[^'\\\\\\n])*')`},{type:"keyword",pattern:Me("and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield")},{type:"literal",pattern:Me("True","False","None","self","cls")},je],ruby:[{type:"comment",pattern:"#[^\\n]*"},{type:"string",pattern:`"(?:\\\\.|[^"\\\\\\n])*"|'(?:\\\\.|[^'\\\\\\n])*'|:[a-zA-Z_]\\w*[?!]?`},{type:"keyword",pattern:Me("alias","begin","break","case","class","def","do","else","elsif","end","ensure","for","if","in","module","next","raise","require","rescue","return","then","unless","until","when","while","yield")},{type:"literal",pattern:Me("true","false","nil","self")},je],json:[{type:"attribute",pattern:'"(?:\\\\.|[^"\\\\])*"(?=\\s*:)'},{type:"string",pattern:'"(?:\\\\.|[^"\\\\])*"'},{type:"literal",pattern:Me("true","false","null")},je],yaml:[{type:"comment",pattern:"#[^\\n]*"},{type:"attribute",pattern:"^\\s*(?:-\\s+)?[\\w.-]+(?=\\s*:(?:\\s|$))"},{type:"string",pattern:`"(?:\\\\.|[^"\\\\\\n])*"|'(?:''|[^'\\n])*'`},{type:"meta",pattern:"^---\\s*$|^\\.\\.\\.\\s*$|(?:^|\\s)[|>][+-]?\\s*$|(?:^|\\s)[&*][\\w-]+"},{type:"literal",pattern:Me("true","false","null","yes","no","on","off","True","False","Null")},je],sql:[{type:"comment",pattern:"--[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/"},{type:"string",pattern:"'(?:''|[^'\\n])*'"},{type:"keyword",pattern:`\\b(?:${["ADD","ALL","ALTER","AND","AS","ASC","BEGIN","BETWEEN","BY","CASE","COMMIT","CREATE","CROSS","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","EXISTS","FROM","FULL","GROUP","HAVING","IN","INDEX","INNER","INSERT","INTO","IS","JOIN","LEFT","LIKE","LIMIT","NOT","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RETURNING","RIGHT","ROLLBACK","SELECT","SET","TABLE","THEN","TRANSACTION","UNION","UNIQUE","UPDATE","VALUES","VIEW","WHEN","WHERE","WITH"].join("|")})\\b`},{type:"literal",pattern:"\\b(?:NULL|TRUE|FALSE)\\b"},je],shell:[{type:"comment",pattern:"#[^\\n]*"},{type:"string",pattern:`"(?:\\\\.|[^"\\\\])*"|'[^']*'`},{type:"meta",pattern:"\\$(?:\\{[^}]*\\}|[\\w@*#?$!-]+)"},{type:"keyword",pattern:Me("case","cd","do","done","echo","elif","else","esac","exit","export","fi","for","function","if","in","local","read","return","set","shift","source","then","unset","until","while")},{type:"attribute",pattern:"(?:^|\\s)--?[\\w-]+"},je],markup:[{type:"comment",pattern:"<!--[\\s\\S]*?-->"},{type:"meta",pattern:"<!(?:DOCTYPE|doctype)[^>]*>|<\\?[\\s\\S]*?\\?>"},{type:"tag",pattern:"<\\/?[a-zA-Z][\\w:-]*"},{type:"string",pattern:`"[^"]*"|'[^']*'`},{type:"attribute",pattern:"\\b[a-zA-Z_:][\\w:.-]*(?==)"},{type:"tag",pattern:"\\/?>"}],css:[{type:"comment",pattern:"\\/\\*[\\s\\S]*?\\*\\/"},{type:"string",pattern:`"[^"\\n]*"|'[^'\\n]*'`},{type:"meta",pattern:"@[\\w-]+"},{type:"attribute",pattern:"[a-zA-Z-]+(?=\\s*:)"},{type:"number",pattern:"#[\\da-fA-F]{3,8}\\b|\\b\\d[\\d.]*(?:px|rem|em|%|vh|vw|s|ms|deg|fr)?\\b"}],diff:[{type:"meta",pattern:"^(?:diff|index|@@|\\+\\+\\+|---)[^\\n]*"},{type:"inserted",pattern:"^\\+[^\\n]*"},{type:"deleted",pattern:"^-[^\\n]*"}],ini:[{type:"comment",pattern:"[#;][^\\n]*"},{type:"meta",pattern:"^\\s*\\[[^\\]\\n]*\\]"},{type:"attribute",pattern:"^\\s*[\\w.-]+(?=\\s*=)"},{type:"string",pattern:`"[^"\\n]*"|'[^'\\n]*'`},{type:"literal",pattern:Me("true","false")},je]},vi={javascript:"clike",js:"clike",jsx:"clike",mjs:"clike",cjs:"clike",typescript:"clike",ts:"clike",tsx:"clike",java:"clike",kotlin:"clike",kt:"clike",swift:"clike",scala:"clike",go:"clike",golang:"clike",rust:"clike",rs:"clike",c:"clike",cpp:"clike","c++":"clike",cs:"clike",csharp:"clike",php:"clike",dart:"clike",python:"python",py:"python",ruby:"ruby",rb:"ruby",json:"json",jsonc:"json",yaml:"yaml",yml:"yaml",sql:"sql",postgresql:"sql",mysql:"sql",bash:"shell",sh:"shell",shell:"shell",zsh:"shell",console:"shell",terminal:"shell",html:"markup",xml:"markup",svg:"markup",vue:"markup",css:"css",scss:"css",less:"css",diff:"diff",patch:"diff",ini:"ini",toml:"ini",conf:"ini"},zo=new Map;function ki(r){let e=zo.get(r);if(e)return e;let t=new RegExp(Ho[r].map(o=>`(${o.pattern})`).join("|"),"gm");return zo.set(r,t),t}function Di(r){let e=String(r??"").trim().toLowerCase();return vi[e]||null}function jo(r,e){let t=Di(e);if(!t)return v(r);let o=Ho[t],n=ki(t);n.lastIndex=0;let i=[],s=0,a;for(;a=n.exec(r);){if(!a[0]){n.lastIndex+=1;continue}a.index>s&&i.push(v(r.slice(s,a.index)));let c=a.findIndex((g,h)=>h>0&&g!==void 0)-1,d=o[c]?.type,l=a[0].match(/^\s*/)[0],u=a[0].slice(l.length);i.push(v(l)),i.push(d&&u?`<span class="docdiagram-token-${d}">${v(u)}</span>`:v(u)),s=a.index+a[0].length}return i.push(v(r.slice(s))),i.join("")}var jt={section:{attributes:["title","palette","fill","stroke","text"]},panel:{attributes:["title","palette","fill","stroke","text"]},callout:{attributes:["kind","title","palette","fill","stroke","text"]},grid:{attributes:["columns"]},stack:{attributes:[]},diagram:{attributes:["id"],void:!0},toc:{attributes:["depth","diagrams"],void:!0}},$i=Object.keys(jt);function qr(r){return!!jt[r].void}var Fi=/\u0001ref:([^\u0001]*)\u0001/g,Ni=/\u0001toc:([^\u0001]*)\u0001/g;function Ai(r){let e=r.replace(/\\#/g,""),t=e.indexOf("#"),o=n=>n.replace(/\u0002/g,"#");return t===-1?{hasPlaceholder:!1,before:o(e),after:"",text:o(e)}:{hasPlaceholder:!0,before:o(e.slice(0,t)),after:o(e.slice(t+1)),text:o(e.slice(0,t)+e.slice(t+1))}}function Mi(r){return r.replace(/!\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/(\*\*|__|~~|\*|_)/g,"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/[\s-]+/g,"-")||"section"}function Ci(r,e){let t=Mi(r),o=e.headingOccurrences||(e.headingOccurrences=new Map),n=e.usedHeadingIds||(e.usedHeadingIds=new Set),i=(o.get(t)||0)+1,s=i===1?t:`${t}-${i}`;for(;n.has(s);)i+=1,s=`${t}-${i}`;return o.set(t,i),n.add(s),s}function Br(r){let e=[],t="",o=!1,n=r.trim().replace(/^\||\|$/g,"");for(let i of n)o?(t+=i,o=!1):i==="\\"?o=!0:i==="|"?(e.push(t.trim()),t=""):t+=i;return e.push(t.trim()),e}function Oo(r){let e=Br(r);return!e.length||!e.every(t=>/^:?-{3,}:?$/.test(t))?null:e.map(t=>t.startsWith(":")&&t.endsWith(":")?"center":t.startsWith(":")?"left":t.endsWith(":")?"right":"")}function Ye(r){return r.match(/^(\s*)([-+*]|\d+[.)])\s+(.+)$/)}function pt(r){let e=r.match(new RegExp(`^:::(${$i.join("|")})(?:\\s+\\{(.*)\\})?\\s*$`));if(!e)return null;let t={},o=e[2];if(o!==void 0){let n=0,i=/\s*([a-z][\w-]*)=(?:"([^"]*)"|([^\s}]+))/gi,s;for(;s=i.exec(o);){if(s.index!==n||t[s[1]]!==void 0)return null;t[s[1]]=s[2]??s[3],n=i.lastIndex}if(o.slice(n).trim())return null}return{name:e[1],attributes:t}}function Ti(r){let e=pt(r);if(!e||e.name!=="diagram")return null;let t=Object.keys(e.attributes),o=e.attributes.id;return t.length===1&&o?{id:o}:null}function Rr(r){let e=r.match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m);return e?.[1]??e?.[2]??null}function Li(r){let e=r.match(/^caption:[ \t]*(\S.*?)\s*$/m),t=e?Re(e[1]):null;return typeof t=="string"&&t?t:null}function Pi(r){return r.replace(/^(?: {0,3}> ?)+/,"")}function Vo(r){return/^:::(?:\s+.*)?$/.test(r)}function Ri(r,e,t){let o=1,n=null;for(let i=e+1;i<t;i+=1){let s=r[i];if(n){Ue(s,n)&&(n=null);continue}let a=Le(s);if(a){n=a.marker;continue}let c=pt(s);if(c)qr(c.name)||(o+=1);else if(Vo(s)&&(o-=1,!o))return i}return-1}function qi(r){return/^#[\da-f]{3,8}$/i.test(r)}function Bi(r,e="classic",t="light"){let o=r.palette!==void 0;if(o&&!we.includes(r.palette))return null;for(let a of["fill","stroke","text"])if(r[a]!==void 0&&!qi(r[a]))return null;let n=o?fe(e,t,r.palette):null,i=Object.fromEntries(["fill","stroke","text"].filter(a=>r[a]!==void 0).map(a=>[a,r[a]])),s=Fe(n||{},i);return Object.entries(s).filter(([,a])=>a!==void 0).map(([a,c])=>`--docdiagram-component-${a}:${c}`).join(";")}function Go(r,e=!1){let t=String(r).trim();if(t.startsWith("//")||t.startsWith("\\"))return!1;if(!t||t.startsWith("#")||t.startsWith("/")||t.startsWith("./")||t.startsWith("../")||t.startsWith("?")||e&&/^data:image\/(?:gif|jpeg|png|webp);base64,/i.test(t))return!0;let o=t.match(/^([a-z][a-z\d+.-]*):/i);return!o||["http","https","mailto"].includes(o[1].toLowerCase())}function ye(r){let e=[],t=String(r).replace(/`([^`]+)`/g,(o,n)=>{let i=`\0${e.length}\0`;return e.push(`<code>${v(n)}</code>`),i});return t=t.replace(/\{ref=(?:"([^"}]+)"|([^\s}]+))\}/g,(o,n,i)=>`ref:${n??i}`),t=v(t),t=t.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(o,n,i)=>{let s=i.replace(/&amp;/g,"&");return Go(s,!0)?`<img src="${v(s)}" alt="${n}">`:`![${n}](${v(i)})`}),t=t.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(o,n,i)=>{let s=i.replace(/&amp;/g,"&");return Go(s)?`<a href="${v(s)}">${n}</a>`:`[${n}](${v(i)})`}),t=t.replace(/(\*\*|__)(?=\S)([\s\S]*?\S)\1/g,"<strong>$2</strong>").replace(/~~(?=\S)([\s\S]*?\S)~~/g,"<del>$1</del>").replace(/(?<!\*)\*(?=\S)([\s\S]*?\S)\*(?!\*)/g,"<em>$1</em>").replace(/(?<!_)_(?=\S)([\s\S]*?\S)_(?!_)/g,"<em>$1</em>"),t.replace(/\u0000(\d+)\u0000/g,(o,n)=>e[Number(n)])}function Ir(r,e={diagramIndex:0},t){let o=r.replace(/\r\n/g,`
`).split(`
`),n=t?.renderDiagram??((x,y)=>{throw new Error("renderDiagram callback is required for diagram blocks.")}),i=!!t?.diagramReferenceRegistry,s=t?.documentColorScheme||"classic",a=t?.documentTheme||"light",c=t?.diagramReferenceRegistry||(()=>{let x=new Map,y=new Set,$=new Map,w=new Set,D=o.map(Pi);for(let C=0;C<D.length;C+=1){let B=Le(D[C]);if(!B)continue;let M=nt(D,C+1,B.marker);if(M===-1)break;if(B.info==="diagram"){let L=D.slice(C+1,M).join(`
`),A=Rr(L);A&&(w.add(A),x.has(A)?y.add(A):x.set(A,{id:A,source:L}))}C=M}let k=null;for(let C of D){if(k){Ue(C,k)&&(k=null);continue}let B=Le(C);if(B){k=B.marker;continue}let M=Ti(C);M&&$.set(M.id,($.get(M.id)||0)+1)}return{definitions:x,duplicateDefinitionIds:y,referenceCounts:$,diagramIds:w}})(),{definitions:d,duplicateDefinitionIds:l,referenceCounts:u}=c;if(e.figures||(e.figures=new Map),e.contents||(e.contents=[]),!i){let x=e.usedHeadingIds||(e.usedHeadingIds=new Set);for(let y of c.diagramIds)x.add(y)}function g(x){let y=Rr(x),$=Li(x),w=$?Ai($):null,D=w?.hasPlaceholder?e.figureNumber=(e.figureNumber||0)+1:null,k=w?D===null?w.text:`${w.before}${D}${w.after}`:null;w&&y&&(e.figures.set(y,{id:y,number:D,text:k}),e.contents.push({kind:"figure",level:0,id:y,text:ye(k)}));let C=n(x,e.diagramIndex,{id:y,caption:k});return e.diagramIndex+=1,C}function h(x){let y=o[x]||"";return!y.trim()||/^```/.test(y)||/^(#{1,6})\s+/.test(y)||/^ {0,3}&gt;|^ {0,3}>/.test(y)||/^ {0,3}(?:[-*_]\s*){3,}$/.test(y)||/^:::/.test(y)||!!Ye(y)||x+1<o.length&&!!Oo(o[x+1])}function f(x,y){let $=Ye(o[x]),w=/^\d/.test($[2]),D=[],k=x,C=w?Number.parseInt($[2],10):null;for(;k<o.length;){let A=Ye(o[k]);if(!A||A[1].length!==y||/^\d/.test(A[2])!==w)break;let P={content:[A[3]],children:[]};for(k+=1;k<o.length;){let I=Ye(o[k]);if(I&&I[1].length>y){let F=f(k,I[1].length);P.children.push(F.html),k=F.index;continue}if(!o[k].trim()){k+=1;let F=k<o.length?Ye(o[k]):null;if(k>=o.length||!F||F[1].length<=y)break;continue}if(/^\s+/.test(o[k])&&!Ye(o[k])){P.content.push(o[k].trim()),k+=1;continue}break}D.push(P)}let B=w?"ol":"ul",M=w&&C!==1?` start="${C}"`:"",L=D.map(A=>{let P=!w&&A.content.length===1&&A.content[0].match(/^\[([ xX])\]\s+(.*)$/),I=P?`<input type="checkbox" disabled${P[1].toLowerCase()==="x"?" checked":""}> ${ye(P[2])}`:ye(A.content.join(" "));return`<li${P?' class="docdiagram-task-list-item"':""}>${I}${A.children.join("")}</li>`}).join("");return{html:`<${B}${M}>${L}</${B}>`,index:k}}function m(x){let{name:y,attributes:$}=x;if(Object.keys($).some(D=>!jt[y].attributes.includes(D)))return null;if(y==="diagram"){let D=$.id;if(!D)return null;let k=d.get(D);return k?l.has(D)?`<section class="docdiagram-error"><strong>Diagram "${v(D)}" has multiple definitions.</strong></section>`:(u.get(D)||0)>1?`<section class="docdiagram-error"><strong>Diagram "${v(D)}" is referenced more than once.</strong></section>`:g(k.source):`<section class="docdiagram-error"><strong>Diagram "${v(D)}" could not be found.</strong></section>`}let w=$.depth===void 0?3:Number($.depth);return!Number.isInteger(w)||w<1||w>6||$.diagrams!==void 0&&$.diagrams!=="true"&&$.diagrams!=="false"?null:`toc:${w}:${$.diagrams==="true"}`}function p(x,y){let $=pt(o[x]);if(!$||qr($.name))return null;let w=Ri(o,x,y);if(w===-1)return null;let{name:D,attributes:k}=$;if(Object.keys(k).some(A=>!jt[D].attributes.includes(A)))return null;if(D==="grid"){let A=Qr[k.columns];if(!A)return null;let P=[],I=x+1;for(;I<w;){if(!o[I].trim()){I+=1;continue}let F=pt(o[I]);if(!F||!["panel","callout","stack"].includes(F.name))return null;let R=p(I,w);if(!R)return null;P.push(`<div class="docdiagram-grid-item">${R.html}</div>`),I=R.next}return{html:`<div class="docdiagram-grid" style="--docdiagram-grid-columns:${A}">${P.join("")}</div>`,next:w+1}}if(D==="stack")return Object.keys(k).length?null:{html:`<div class="docdiagram-stack">${E(x+1,w)}</div>`,next:w+1};let C=Bi(k,s,a);if(C===null||D==="callout"&&k.kind!==void 0&&!Jr.includes(k.kind))return null;let B=k.title?`<div class="docdiagram-component-title">${ye(k.title)}</div>`:"",M=E(x+1,w),L=`docdiagram-component${D==="callout"?"":` docdiagram-${D}`}${C?" docdiagram-component-styled":""}`;if(D==="callout"){let A=k.kind||"info";return{html:`<aside class="${L} docdiagram-callout docdiagram-callout-${A}"${C?` style="${C}"`:""} aria-label="${v(k.title||A)} callout"><div class="docdiagram-callout-kind">${v(A)}</div>${B}${M}</aside>`,next:w+1}}return{html:`<section class="${L}"${C?` style="${C}"`:""}>${B}${M}</section>`,next:w+1}}function E(x=0,y=o.length){let $=[],w=x;for(;w<y;){let D=o[w];if(!D.trim()){w+=1;continue}if(/^:::/.test(D)){let A=pt(D);if(A&&qr(A.name)){let I=m(A);$.push(I??`<pre class="docdiagram-literal-source"><code>${v(D)}</code></pre>`),w+=1,I!==null&&w<y&&Vo(o[w])&&(w+=1);continue}let P=p(w,y);P?($.push(P.html),w=P.next):($.push(`<pre class="docdiagram-literal-source"><code>${v(D)}</code></pre>`),w+=1);continue}let k=Le(D);if(k){let A=o.slice(w+1,y).findIndex(F=>Ue(F,k.marker));if(A===-1){$.push('<section class="docdiagram-error"><strong>Unclosed code block.</strong></section>');break}let P=w+A+1,I=o.slice(w+1,P).join(`
`);if(k.info==="diagram"){let F=Rr(I);F&&l.has(F)?$.push(`<section class="docdiagram-error"><strong>Diagram "${v(F)}" has multiple definitions.</strong></section>`):(!F||!u.has(F))&&$.push(g(I))}else{let F=k.info?` class="language-${v(k.info)}"`:"";$.push(`<pre><code${F}>${jo(I,k.info)}</code></pre>`)}w=P+1;continue}let C=D.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);if(C){let A=C[1].length,P=Ci(C[2],e);e.contents.push({kind:"heading",level:A,id:P,text:ye(C[2])}),$.push(`<h${A} id="${P}">${ye(C[2])}</h${A}>`),w+=1;continue}if(/^ {0,3}(?:[-*_]\s*){3,}$/.test(D)){$.push("<hr>"),w+=1;continue}if(/^ {0,3}>/.test(D)){let A=[];for(;w<y&&/^ {0,3}>/.test(o[w]);)A.push(o[w].replace(/^ {0,3}> ?/,"")),w+=1;$.push(`<blockquote>${Ir(A.join(`
`),e,{...t,diagramReferenceRegistry:c})}</blockquote>`);continue}let B=Ye(D);if(B){let A=f(w,B[1].length);$.push(A.html),w=A.index;continue}let M=w+1<y?Oo(o[w+1]):null;if(M){let A=Br(D),P=[];for(w+=2;w<y&&o[w].includes("|")&&o[w].trim();)P.push(Br(o[w])),w+=1;let I=(F,R)=>R.map((j,G)=>`<${F}${M[G]?` style="text-align:${M[G]}"`:""}>${ye(j||"")}</${F}>`).join("");$.push(`<table><thead><tr>${I("th",A)}</tr></thead><tbody>${P.map(F=>`<tr>${I("td",F)}</tr>`).join("")}</tbody></table>`);continue}let L=[D.trim()];for(w+=1;w<y&&!h(w);)L.push(o[w].trim()),w+=1;$.push(`<p>${ye(L.join(" "))}</p>`)}return $.join("")}let N=E();return i?N:zi(N,e)}function Ii(r,e,t){let o=r.filter(d=>d.kind==="figure"?t:d.level<=e);if(!o.length)return"";let n=o.filter(d=>d.kind==="heading").map(d=>d.level),i=Math.min(...n.length?n:[1]),s=[],a=[];for(let d of o){let l=d.kind==="figure"?(a.length?a[a.length-1].level:0)+1:d.level-i+1;for(;a.length&&a[a.length-1].level>=l;)a.pop();let u={entry:d,level:l,children:[]};(a.length?a[a.length-1].children:s).push(u),d.kind==="heading"&&a.push(u)}let c=d=>`<ul>${d.map(l=>`<li class="docdiagram-contents-${l.entry.kind}"><a href="#${v(l.entry.id)}">${l.entry.text}</a>${l.children.length?c(l.children):""}</li>`).join("")}</ul>`;return`<nav class="docdiagram-contents" aria-label="Table of contents">${c(s)}</nav>`}function zi(r,e){let t=e.figures||new Map,o=e.contents||[];return r.replace(Fi,(n,i)=>{let s=t.get(i);return s?`<a href="#${v(i)}">${s.number===null?ye(s.text):String(s.number)}</a>`:`<strong class="docdiagram-error-inline">Unknown reference "${v(i)}"</strong>`}).replace(Ni,(n,i)=>{let[s,a]=i.split(":");return Ii(o,Number(s),a==="true")})}var Hr={h1:{fontSize:26,lineHeight:34},h2:{fontSize:20,lineHeight:26},body:{fontSize:16,lineHeight:20}},jr=.72,Hi=/^(#{1,2})\s+(.*)$/,zr=/(\*\*([^*]+)\*\*)|((?<!\w)_([^_\s](?:[^_]*[^_\s])?)_)(?!\w)|(`([^`]+)`)/g;function ji(r){let e=r.match(Hi);return e?{kind:e[1].length===1?"h1":"h2",text:e[2]}:{kind:"body",text:r}}function Oi(r){let e=[],t=0,o;for(zr.lastIndex=0;o=zr.exec(r);)o.index>t&&e.push({text:r.slice(t,o.index)}),o[2]!==void 0?e.push({text:o[2],bold:!0}):o[4]!==void 0?e.push({text:o[4],italic:!0}):o[6]!==void 0&&e.push({text:o[6],code:!0}),t=zr.lastIndex;return(t<r.length||!e.length)&&e.push({text:r.slice(t)}),e}function Gi(r,e,t,o,n,i){let s=[];t&&(s.push(`x="${o}"`),n!==null&&s.push(`dy="${n}"`));let a=[`font-size:${i}px`];(r.bold||e)&&a.push("font-weight:700"),r.italic&&a.push("font-style:italic"),r.code&&a.push("font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace"),s.push(`style="${a.join(";")}"`);let c=v(r.text)||" ";return`<tspan ${s.join(" ")}>${c}</tspan>`}function Vi(r,e,t,o,n){if(!o.length)return"";let i=t+Hr[o[0].kind].lineHeight*jr,s=t,a=0,c=o.map((d,l)=>{let u=Hr[d.kind],g=s+u.lineHeight*jr,h=l===0?null:g-a;s+=u.lineHeight,a=g;let f=Oi(d.text),m=d.kind!=="body";return f.map((p,E)=>Gi(p,m,E===0,r,E===0?h:null,u.fontSize)).join("")}).join("");return`<text x="${r}" y="${i}" text-anchor="${e}" class="docdiagram-node-label docdiagram-node-label-markdown" fill="${v(n)}">${c}</text>`}function Uo(r,e,t){let o=ue(e.label).map(ji),n=e.subtitle?ue(e.subtitle):[];if(!o.length&&!n.length)return"";let i=15,s=o.reduce((N,x)=>N+Hr[x.kind].lineHeight,0),a=n.length?6:0,c=n.length*i,d=s+a+c,l=e.textHAlign||"center",u=l==="left"?r.x:l==="right"?r.x+r.width:r.x+r.width/2,g=l==="left"?"start":l==="right"?"end":"middle",h=r.y+r.height/2,f=e.textVAlign==="top"?r.y:h-d/2,m=Vi(u,g,f,o,t),p=f+s+a+i*jr,E=n.length?Ee(u,p,n,i,"docdiagram-node-subtitle",t,g):"";return m+E}function Ot(r){return[r?.caption?' class="docdiagram docdiagram-captioned"':' class="docdiagram"',r?.id?` id="${v(r.id)}"`:""].join("")}function Gt(r,e){return r?.caption?`<figcaption class="docdiagram-caption">${e(r.caption)}</figcaption>`:""}function Or(r,e,t){let o=e!=="none",n=e==="flowchart",i=t.expandedDiagramIndex===r;return['<div class="docdiagram-diagram-toolbar" role="toolbar" aria-label="Diagram controls">',`<button type="button" class="docdiagram-icon-button docdiagram-zoom-in" data-diagram-index="${r}" aria-label="Zoom in" title="Zoom in">+</button>`,`<button type="button" class="docdiagram-icon-button docdiagram-zoom-out" data-diagram-index="${r}" aria-label="Zoom out" title="Zoom out">\u2212</button>`,`<button type="button" class="docdiagram-icon-button docdiagram-fit" data-diagram-index="${r}" aria-label="Zoom to fit" title="Zoom to fit">\u22A1</button>`,`<button type="button" class="docdiagram-icon-button docdiagram-toggle-expand" data-diagram-index="${r}" aria-pressed="${i}" aria-label="${i?"Collapse diagram":"Expand diagram"}" title="${i?"Collapse diagram (Esc)":"Expand diagram"}">${i?"\u2921":"\u2922"}</button>`,'<div class="docdiagram-diagram-export">',`<button type="button" class="docdiagram-icon-button docdiagram-export-toggle" data-diagram-index="${r}" aria-label="Export diagram" aria-expanded="false" title="Export diagram">\u21E7</button>`,'<div class="docdiagram-diagram-export-menu" hidden>',`<button type="button" class="docdiagram-open-diagram" data-diagram-index="${r}">Open full diagram</button>`,`<button type="button" class="docdiagram-save-diagram" data-diagram-index="${r}">Save as Skryb diagram</button>`,`<button type="button" class="docdiagram-download-diagram" data-diagram-index="${r}">Save as SVG</button>`,`<button type="button" class="docdiagram-print-diagram" data-diagram-index="${r}">Print / Save as PDF</button>`,"</div>","</div>",o?t.editingDiagramIndex===r?`<button type="button" class="docdiagram-icon-button docdiagram-done-editing" aria-label="Done editing" title="Done editing">\u2713</button><button type="button" class="docdiagram-icon-button docdiagram-cancel-editing" aria-label="Cancel editing and discard changes" title="Cancel editing and discard changes">\xD7</button>${n?`<button type="button" class="docdiagram-icon-button docdiagram-create-node" data-diagram-index="${r}" aria-label="New node" title="New node">+</button>`:""}`:t.editingDiagramIndex===null?`<button type="button" class="docdiagram-icon-button docdiagram-start-editing" data-diagram-index="${r}" aria-label="Edit diagram" title="Edit diagram">\u270E</button>`:"":"","</div>"].join("")}function Wo(r,e,t,o,n){let{selectedNode:i,selectedEdge:s,editingNode:a,editingEdge:c,connectionDrag:d,diagramZooms:l,diagramCameraOffsets:u}=t,g=t.editingDiagramIndex===e,h=new X(r),f=h.entries,m=(F,R)=>f.filter(({node:j})=>!h.isRelated(j,F)&&!h.isRelated(j,R)).map(({bounds:j})=>j),p=16,E=[],N=[],y=$e[t.documentColorScheme]?.[t.documentTheme==="dark"?"dark":"light"],$=y?Object.entries(y).filter(([,F])=>F.gradient).map(([F,R])=>`<linearGradient id="docdiagram-${t.documentColorScheme}-${e}-${F}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${v(R.gradient||R.fill)}"/><stop offset="1" stop-color="${v(R.fill)}"/></linearGradient>`).join(""):"",w=r.edges.map((F,R)=>{let j=h.getById(F.source),G=h.getById(F.target);if(!j||!G)return"";let _=j.node,ee=G.node,ge=be(_,j.position.x,j.position.y,Number(_.size?.width)||190,Number(_.size?.height)||80),Se=be(ee,G.position.x,G.position.y,Number(ee.size?.width)||190,Number(ee.size?.height)||80),he=F.sourceAnchor||"right",J=F.targetAnchor||"left",ve=ge.anchors[he],te=Se.anchors[J],Q=F.route||"orthogonal",re=qe(ve,te,he,J,Q,F.waypoint,F.waypoint?void 0:m(_,ee)),oe=re.midpoint.x,Be=re.midpoint.y-10,Z=St(r,F,t.documentTheme),z=s?.diagramIndex===e&&s.edgeIndex===R,Oe=z&&c?.diagramIndex===e&&c.edgeIndex===R,ke=(Number(Z.strokeWidth)||2)+(z?2:0),Ce=220,Ze=72,st=F.label?ue(F.label):[],er=st.length*p,tr=Be-er/2+p*.72,Je=sr(F,"start"),ct=sr(F,"end"),ft=`docdiagram-marker-${e}-${R}-start`,bt=`docdiagram-marker-${e}-${R}-end`;Je!=="none"&&E.push(ht(ft,Je,"start",Z.stroke||"",ke)),ct!=="none"&&E.push(ht(bt,ct,"end",Z.stroke||"",ke)),z&&g&&N.push(`<circle class="docdiagram-edge-endpoint" data-diagram-index="${e}" data-edge-index="${R}" data-endpoint="source" cx="${ve.x}" cy="${ve.y}" r="7"/>`,`<circle class="docdiagram-edge-endpoint" data-diagram-index="${e}" data-edge-index="${R}" data-endpoint="target" cx="${te.x}" cy="${te.y}" r="7"/>`,qo(e,R,F.waypoint??re.midpoint,!!F.waypoint));let rr=[Je!=="none"?` marker-start="url(#${ft})"`:"",ct!=="none"?` marker-end="url(#${bt})"`:""].join("");return[`<g class="docdiagram-edge-group${z?" docdiagram-edge-selected":""}" data-diagram-index="${e}" data-edge-index="${R}">`,`<path class="docdiagram-edge-hit" d="${re.hitPath}" fill="none" stroke="transparent" stroke-width="16"/>`,`<path class="docdiagram-edge" d="${re.path}"${rr} stroke="${v(Z.stroke||"")}" stroke-width="${ke}"/>`,Oe?`<foreignObject class="docdiagram-inline-editor-host" x="${oe-Ce/2}" y="${Be-Ze/2}" width="${Ce}" height="${Ze}"><textarea class="docdiagram-inline-editor docdiagram-inline-editor-edge" aria-label="Edit edge label. Press Enter for a new line. Press Control or Command plus Enter to save. Press Escape to cancel.">${v(F.label||"")}</textarea></foreignObject>`:st.length?Ee(oe,tr,st,p,"docdiagram-edge-label",Z.text||""):"","</g>"].join("")}).join(""),D=[],k=f.map(({node:F,position:R},j)=>{let G=R.x,_=R.y,ee=Number(F.size?.width)||190,ge=Number(F.size?.height)||80,Se=Ge(r,F,t.documentTheme,t.documentColorScheme),he=F.palette||Et(r,F.class)?.palette,J=he?y?.[he]:void 0,ve=F.arrow?Ht({x:G,y:_,width:ee,height:ge},F.arrow):null,te=ve&&J?.gradient?`docdiagram-${t.documentColorScheme}-${e}-${he}-callout-${j}`:"";te&&J&&D.push(`<linearGradient id="${te}" gradientUnits="userSpaceOnUse" x1="${G}" y1="${_}" x2="${G}" y2="${_+ge}"><stop offset="0" stop-color="${v(J.gradient||J.fill)}"/><stop offset="1" stop-color="${v(J.fill)}"/></linearGradient>`);let Q=J?.gradient?{...Se,fill:te?`url(#${te})`:`url(#docdiagram-${t.documentColorScheme}-${e}-${he})`}:Se,re=i?.diagramIndex===e&&i.nodeId===F.id,oe=re&&a?.diagramIndex===e&&a.nodeId===F.id,Be=(Number(Q.strokeWidth)||2)+(re?2:0),Z=be(F,G,_,ee,ge),z=at(Z.textBounds,F),Oe=F.shape==="text";return[`<g class="docdiagram-node${re?" docdiagram-node-selected":""}" data-diagram-index="${e}" data-node-id="${v(F.id)}">`,zt(Z,Q,Be),ve?Bo(ve,Z.bodyMarkup,Q,Be,`docdiagram-callout-mask-${e}-${j}`):"",oe?`<foreignObject class="docdiagram-inline-editor-host" x="${Z.textBounds.x}" y="${Z.textBounds.y}" width="${Z.textBounds.width}" height="${Z.textBounds.height}"><textarea class="docdiagram-inline-editor docdiagram-inline-editor-node" aria-label="Edit node label. Press Enter for a new line. Press Control or Command plus Enter to save. Press Escape to cancel.">${v(F.label)}</textarea></foreignObject>`:Oe?Uo(Z.textBounds,F,Q.text||""):Ee(z.centerX,z.labelStartY,z.labelLines,z.labelLineHeight,"docdiagram-node-label",Q.text||"",z.textAnchor),!oe&&!Oe&&z.subtitleLines.length?Ee(z.centerX,z.subtitleStartY,z.subtitleLines,z.subtitleLineHeight,"docdiagram-node-subtitle",Q.text||"",z.textAnchor):"",re&&g&&!oe?[["top-left",G-7,_-7],["top-right",G+ee-7,_-7],["bottom-left",G-7,_+ge-7],["bottom-right",G+ee-7,_+ge-7]].map(([ke,Ce,Ze])=>`<rect class="docdiagram-resize-handle" data-resize-corner="${ke}" x="${Ce}" y="${Ze}" width="14" height="14" rx="3"/>`).join(""):"",re&&g&&!oe?ne.map(ke=>{let Ce=Z.anchors[ke];return`<circle class="docdiagram-connection-port" data-anchor="${ke}" cx="${Ce.x}" cy="${Ce.y}" r="7" aria-label="${ke} connection port"/>`}).join(""):"",re&&g&&!oe&&F.arrow?`<circle class="docdiagram-callout-handle" data-diagram-index="${e}" data-node-id="${v(F.id)}" cx="${F.arrow.x}" cy="${F.arrow.y}" r="7" aria-label="Callout pointer target"/>`:"","</g>"].join("")}).join(""),C=Number(r.canvas.width)||1e3,B=Number(r.canvas.height)||560,M=t.expandedDiagramIndex===e,L=t.diagramViewportHeights.get(e),A=L&&!M?` style="box-sizing: border-box; height: ${L}px; min-height: 0"`:"",P=u.get(e)||{x:0,y:0},I=`width: ${l.get(e)||100}%; transform: translate(${P.x}px, ${P.y}px)`;return[`<figure${Ot(n)} data-diagram-index="${e}" data-diagram-type="flowchart" data-editing="${g}" data-expanded="${M}"${A}>`,o(e,"flowchart",t),`<svg viewBox="0 0 ${C} ${B}" role="img" aria-label="Architecture diagram" data-diagram-index="${e}" style="${I}">`,`<defs>${$}${D.join("")}${E.join("")}</defs>`,k,w,d?.diagramIndex===e?`<path class="docdiagram-connection-preview${d.invalid?" docdiagram-connection-invalid":""}" d="${qe(d.start,d.current,d.sourceAnchor,d.targetAnchor||d.sourceAnchor,"straight").path}"/>`:"",N.join(""),"</svg>",Gt(n,ye),"</figure>"].join("")}function Yo(r,e,t,o,n){let i=lt(r,t.documentTheme),s=Number(r.canvas?.width)||1e3,a=Number(r.canvas?.height)||560,c=r.participants||[],d=r.messages||[],l=r.activations||[],u=r.notes||[],g=r.groups||[],h=90,f=90,m=28,p=Number(r.canvas?.participantSize?.width)||180,E=Number(r.canvas?.participantSize?.height)||42,N=Number(r.canvas?.participantSpacing)||220,x=16,y=74+Math.max(0,...c.filter(S=>S.kind==="actor").map(S=>ue(S.label||"").length-1))*x,$=48,w=16,D=16,k=15,C=12,B=26,M=28,L=40,A=22,P=t.expandedDiagramIndex===e,I=t.diagramViewportHeights.get(e),F=I&&!P?` style="box-sizing: border-box; height: ${I}px; min-height: 0"`:"",R=`docdiagram-sequence-arrow-${e}`,j=m+y+12,G=c[0],_=c[c.length-1],ee=Number(G?.size?.width)||p,ge=Number(_?.size?.width)||p,Se=c.length>1?ee/2+N*(c.length-1)+ge/2:p+h+f,he=Math.max(s,Se,h+f),J=new Map;c.forEach((S,T)=>{J.set(S.id,c.length===1?he/2:ee/2+N*T)});let ve=j+40,te=[],Q=[],re=[],oe=[],Be=[],Z=new Map;u.forEach((S,T)=>{let q=Number(S.after);if(!Number.isFinite(q)||q<1){Be.push({note:S,sourceIndex:T});return}let V=Z.get(q)||[];V.push({note:S,sourceIndex:T}),Z.set(q,V)});let z=j+24,Oe=(S,T)=>{let q=ue(S.label||""),V=Math.max(0,...q.map(gn=>gn.length)),ie=Math.max(160,Number(S.size?.width)||0,V*7.2+32),pe=Math.max($,q.length*D+24,Number(S.size?.height)||0),ae=J.get(S.at||"")||he/2,U=Math.min(he-ie/2-24,Math.max(ie/2+24,ae)),se=z;return z=se+pe+w,{...S,lines:q,x:U-ie/2,y:se,width:ie,height:pe,sourceIndex:T}};Be.forEach(S=>Q.push(Oe(S.note,S.sourceIndex))),d.forEach((S,T)=>{let q=T+1;g.filter(U=>Number(U.from)===q).forEach(U=>{let se={label:U.label,from:Number(U.from),to:Number(U.to),startY:z,endY:z,depth:oe.length};z=se.startY+L,oe.push(se),re.push(se)});let V=ue(S.label||""),ie=z,pe=Math.max(1,V.length)*k,ae=ie+pe+C;te.push({...S,index:T,y:ae,lines:V,labelTop:ie}),z=ae+B+(S.from===S.to?M:0),(Z.get(q)||[]).forEach(U=>{Q.push(Oe(U.note,U.sourceIndex))});for(let U=oe.length-1;U>=0;U-=1)oe[U].to>q||(oe[U].endY=z,z+=A,oe.splice(U,1))}),oe.forEach(S=>{S.endY=z});let ke=Math.max(j+140,z+8,Q.length?Q[Q.length-1].y+Q[Q.length-1].height:0,te.length?te[te.length-1].y+44:ve,...re.map(S=>S.endY+12)),Ce=Math.max(a,ke+56),Ze=Ce-36,st=l.map((S,T)=>({participantId:S.participant,depth:l.slice(0,T).filter(q=>q.participant===S.participant&&q.from<=S.from&&q.to>=S.from).length,startY:(te[S.from-1]?.y||ve)-10,endY:(te[S.to-1]?.y||ve)+18})),er=c.map(S=>{let T=J.get(S.id)||0,q=ue(S.label||""),V=tt(r,S,t.documentTheme,t.documentColorScheme),ie=Number(S.size?.width)||p,pe=Number(S.size?.height)||E;if(S.kind==="actor"){let ae=m+10,U=ae+18,se=U+18;return[`<g class="docdiagram-sequence-participant docdiagram-sequence-actor" data-diagram-index="${e}" data-participant-id="${v(S.id)}">`,`<circle cx="${T}" cy="${ae}" r="8" fill="none" stroke="${v(V.stroke||"")}" stroke-width="${Number(V.strokeWidth)||2}"/>`,`<path d="M ${T} ${ae+8} V ${se} M ${T-14} ${U} H ${T+14} M ${T} ${se} L ${T-12} ${se+18} M ${T} ${se} L ${T+12} ${se+18}" fill="none" stroke="${v(V.stroke||"")}" stroke-width="${Number(V.strokeWidth)||2}" stroke-linecap="round" stroke-linejoin="round"/>`,Ee(T,m+y-4-(q.length-1)*x,q,x,"docdiagram-node-label",V.text||""),"</g>"].join("")}return[`<g class="docdiagram-sequence-participant" data-diagram-index="${e}" data-participant-id="${v(S.id)}">`,`<rect x="${T-ie/2}" y="${m}" width="${ie}" height="${pe}" rx="12" fill="${v(V.fill||"")}" stroke="${v(V.stroke||"")}" stroke-width="${Number(V.strokeWidth)||2}"/>`,Ee(T,m+pe/2+6-(q.length-1)*x/2,q,x,"docdiagram-node-label",V.text||""),"</g>"].join("")}).join(""),tr=c.map(S=>{let T=J.get(S.id)||0;return`<path class="docdiagram-sequence-lifeline" d="M ${T} ${j} L ${T} ${Ze}" fill="none" stroke="${v(i.edge.stroke)}" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.35"/>`}).join(""),Je=re.map(S=>{let T=42+S.depth*14,q=Math.min(260,Math.max(110,String(S.label||"").length*8+28));return{group:S,inset:T,labelWidth:q}}),ct=Je.map(({group:S,inset:T})=>['<g class="docdiagram-sequence-group">',`<rect x="${T}" y="${S.startY}" width="${Math.max(60,he-T*2)}" height="${Math.max(40,S.endY-S.startY)}" rx="12" fill="none" stroke="${v(i.edge.stroke)}" stroke-width="1.5" stroke-dasharray="10 6" opacity="0.45"/>`,"</g>"].join("")).join(""),ft=Je.map(({group:S,inset:T,labelWidth:q})=>['<g class="docdiagram-sequence-group-label">',`<rect x="${T+12}" y="${S.startY-12}" width="${q}" height="24" rx="6" fill="${v(i.node.fill)}" stroke="${v(i.edge.stroke)}" stroke-width="1.5"/>`,`<text x="${T+12+q/2}" y="${S.startY+5}" text-anchor="middle" class="docdiagram-edge-label" fill="${v(i.edge.text)}">${v(S.label||"")}</text>`,"</g>"].join("")).join(""),bt=Q.map(S=>{let T=S.y+20,q=tt(r,S,t.documentTheme,t.documentColorScheme);return[`<g class="docdiagram-sequence-note" data-diagram-index="${e}" data-note-index="${S.sourceIndex}">`,`<rect x="${S.x}" y="${S.y}" width="${S.width}" height="${S.height}" rx="10" fill="${v(q.fill||"")}" stroke="${v(q.stroke||"")}" stroke-width="${Number(q.strokeWidth)||2}"/>`,Ee(S.x+S.width/2,T,S.lines,D,"docdiagram-node-subtitle",q.text||""),"</g>"].join("")}).join(""),rr=st.map(S=>{let T=J.get(S.participantId)||0,q=S.depth*7,V=12,ie=Math.max(20,S.endY-S.startY),pe=c.find(U=>U.id===S.participantId),ae=pe?tt(r,pe,t.documentTheme,t.documentColorScheme):i.node;return`<rect class="docdiagram-sequence-activation" x="${T-V/2+q}" y="${S.startY}" width="${V}" height="${ie}" rx="4" fill="${v(ae.fill||"")}" stroke="${v(ae.stroke||"")}" stroke-width="${Number(ae.strokeWidth)||2}"/>`}).join(""),mn=te.map(S=>{let T=J.get(S.from)||0,q=J.get(S.to)||0,V=S.style==="dashed",ie=S.lines,pe=S.labelTop+12,ae=` marker-end="url(#${R})"`;if(S.from===S.to){let se=M;return[`<g class="docdiagram-sequence-message" data-diagram-index="${e}" data-message-index="${S.index}">`,`<path d="M ${T} ${S.y} L ${T+48} ${S.y} L ${T+48} ${S.y+se} L ${T} ${S.y+se}" fill="none" stroke="${v(i.edge.stroke)}" stroke-width="2"${ae}${V?' stroke-dasharray="8 5"':""}/>`,Ee(T+48/2,pe,ie,k,"docdiagram-edge-label",i.edge.text),"</g>"].join("")}return[`<g class="docdiagram-sequence-message" data-diagram-index="${e}" data-message-index="${S.index}">`,`<path d="M ${T} ${S.y} L ${q} ${S.y}" fill="none" stroke="${v(i.edge.stroke)}" stroke-width="2"${ae}${V?' stroke-dasharray="8 5"':""}/>`,Ee((T+q)/2,pe,ie,k,"docdiagram-edge-label",i.edge.text),"</g>"].join("")}).join("");return[`<figure${Ot(n)} data-diagram-index="${e}" data-diagram-type="sequence" data-editing="${t.editingDiagramIndex===e}" data-expanded="${P}"${F}>`,o(e,"sequence",t),`<svg viewBox="0 0 ${he} ${Ce}" role="img" aria-label="Sequence diagram" data-diagram-index="${e}" style="width: ${t.diagramZooms.get(e)||100}%">`,`<defs>${ht(R,"arrow","end",i.edge.stroke,2)}</defs>`,ct,tr,er,rr,bt,mn,ft,"</svg>",Gt(n,ye),"</figure>"].join("")}function _o(r,e,t){try{let o=Ne(r,t.colourScheme);return t.onDiagram(e,o),o.type==="sequence"?Yo(o,e,t.state,Or,t.figure):Wo(o,e,t.state,Or,t.figure)}catch(o){let n=o instanceof Error?o.message:String(o);return`<section class="docdiagram-error"><strong>Diagram could not be rendered.</strong><br>${v(n)}</section>`}}function Xo(){if(document.querySelector("style[data-docdiagram-runtime-styles]"))return;let r=document.createElement("style");r.dataset.docdiagramRuntimeStyles="true",r.textContent=`
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
  `,document.head.append(r)}var Vt=class{constructor(e,t){this.state=e;this.outputElement=t}closeDocumentMenu(){let e=document.querySelector(".docdiagram-menu"),t=document.querySelector(".docdiagram-menu-toggle");!e||!t||(e.hidden=!0,t.setAttribute("aria-expanded","false"))}closeDiagramExportMenus(){for(let e of document.querySelectorAll(".docdiagram-diagram-export-menu"))e.hidden=!0;for(let e of document.querySelectorAll(".docdiagram-export-toggle"))e.setAttribute("aria-expanded","false")}applyDocumentColourScheme(e){let t=fe(this.state.documentColorScheme,this.state.documentTheme,"background"),o=fe(this.state.documentColorScheme,this.state.documentTheme,"pale"),n=fe(this.state.documentColorScheme,this.state.documentTheme,"neutral"),i=fe(this.state.documentColorScheme,this.state.documentTheme,"accent");!t||!o||!n||!i||(e.style.setProperty("--docdiagram-background",t.fill||""),e.style.setProperty("--docdiagram-border",n.stroke||""),e.style.setProperty("--docdiagram-control-background",o.fill||""),e.style.setProperty("--docdiagram-control-hover",n.fill||""),e.style.setProperty("--docdiagram-code-background",o.fill||""),e.style.setProperty("--docdiagram-text",t.text||""),e.style.setProperty("--docdiagram-muted",n.text||""),e.style.setProperty("--docdiagram-accent",i.stroke||""))}applyPageTheme(e){let t=fe(this.state.documentColorScheme,e,"background");document.documentElement.dataset.docdiagramTheme=e,document.documentElement.dataset.docdiagramExpanded=String(this.state.expandedDiagramIndex!==null),document.documentElement.style.setProperty("--docdiagram-page-background",t?.fill||""),document.documentElement.style.setProperty("--docdiagram-page-text",t?.text||""),document.body&&(document.body.dataset.docdiagramTheme=e)}dockExpandedDiagramToolbar(e){if(this.state.expandedDiagramIndex===null)return;let t=this.outputElement?.querySelector(`.docdiagram[data-diagram-index="${this.state.expandedDiagramIndex}"] .docdiagram-diagram-toolbar`);t&&e.prepend(t)}removeToolbar(){if(this.outputElement)for(;this.outputElement.previousElementSibling?.classList.contains("docdiagram-toolbar");)this.outputElement.previousElementSibling.remove()}};function Ko(r){return r instanceof Element&&r.matches("input, textarea, select, [contenteditable]")}var Ut=class{constructor(e){this.host=e;this.viewportRefitTimer=null}bind(){globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.addEventListener("change",()=>{this.host.isAutoTheme()&&this.host.renderDocument()}),globalThis.addEventListener("resize",()=>{this.viewportRefitTimer!==null&&clearTimeout(this.viewportRefitTimer),this.viewportRefitTimer=setTimeout(()=>{this.viewportRefitTimer=null,this.host.refitDiagramViewports()},150)}),globalThis.addEventListener("beforeunload",e=>{this.host.hasUnsavedChanges()&&(e.preventDefault(),e.returnValue="")}),document.addEventListener("keydown",e=>this.handleKeydown(e)),document.addEventListener("pointerdown",e=>this.handlePointerDown(e)),this.host.outputElement.addEventListener("dblclick",e=>{e.target instanceof Element&&e.target.closest("button, input, textarea, select, [contenteditable]")||this.host.revealSource(globalThis.getSelection?.()?.toString()||"")})}handleKeydown(e){if((e.metaKey||e.ctrlKey)&&e.shiftKey&&e.key.toLowerCase()==="e"&&(this.host.isSourceEditorOpen()||!Ko(e.target))){e.preventDefault(),this.host.toggleSourceEditor();return}if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="s"){e.preventDefault(),this.host.downloadDocument();return}if(e.key==="Escape"){this.host.closeDocumentMenu();let t=this.host.getExpandedDiagramIndex();!e.defaultPrevented&&!Ko(e.target)&&t!==null&&(e.preventDefault(),this.host.toggleDiagramExpansion(t))}}handlePointerDown(e){let t=document.activeElement;t instanceof HTMLTextAreaElement&&t.matches(".docdiagram-inline-editor")&&!(e.target instanceof Node&&t.contains(e.target))&&t.blur();let o=document.querySelector(".docdiagram-toolbar"),n=e.target instanceof Element&&e.target.closest(".docdiagram-diagram-toolbar")!==null;o&&e.target instanceof Node&&(!o.contains(e.target)||n)&&this.host.closeDocumentMenu(),e.target instanceof Node&&!(e.target instanceof Element&&e.target.closest(".docdiagram-diagram-export"))&&this.host.closeDiagramExportMenus(),!(!(e.target instanceof Element)||e.target.closest(".docdiagram-toolbar, .docdiagram-node, .docdiagram-edge-group, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-inline-editor, .docdiagram-sequence-participant, .docdiagram-sequence-note, .docdiagram-sequence-message")||!this.host.hasSelection())&&this.host.clearSelection()}};function Zo(){return{diagramModels:[],editingDiagramIndex:null,selectedNode:null,selectedEdge:null,selectedSequenceElement:null,editingNode:null,editingEdge:null,connectionDrag:null,documentTheme:"light",documentThemeSetting:"auto",documentColorScheme:"classic",documentFormat:"centered",documentDoctype:"document",editSessionDiagram:null,expandedDiagramIndex:null,diagramZooms:new Map,diagramCameraOffsets:new Map,diagramViewportHeights:new Map}}function _e(r){r.selectedNode=null,r.selectedEdge=null,r.selectedSequenceElement=null,r.editingNode=null,r.editingEdge=null}function Xe(r,e){return r.editingDiagramIndex===e}function xe(r,e){return r.target instanceof Element?r.target.closest(e):null}function me(r,e){let t=r.diagramModels[e];return t?.type==="flowchart"?t:null}function Y(r){return Number(r)}function Ui(r,e){let t=r.getBoundingClientRect(),o=18;return e.clientX>=t.right-o&&e.clientY>=t.bottom-o}function Gr(r,e){return(Number(Ge(r,e).strokeWidth)||2)+2}var Wt=class{constructor(e){this.host=e;this.editingShortcutsBound=!1}enableCanvasPanning(){for(let e of this.host.outputElement.querySelectorAll(".docdiagram")){let t=e.querySelector("svg");t&&(e.addEventListener("pointerdown",o=>{(o.target===e||o.target===t)&&!Ui(e,o)&&this.beginCanvasPan(t,o)}),e.addEventListener("wheel",o=>this.moveCanvasWithWheel(t,o),{passive:!1}))}}moveCanvasWithWheel(e,t){t.preventDefault();let o=Y(e.dataset.diagramIndex),n=this.host.state.diagramCameraOffsets.get(o)||{x:0,y:0};if(!t.ctrlKey&&!t.metaKey){let u=Mt(t.deltaY,t.deltaMode),g=Mt(t.deltaX,t.deltaMode);this.setCameraOffset(e,o,{x:n.x-(t.shiftKey&&!g?u:g),y:n.y-(t.shiftKey&&!g?0:u)});return}let i=this.host.state.diagramZooms.get(o)||100,s=bo(i,t.deltaY,t.deltaMode);if(s===i)return;let a=e.getBoundingClientRect(),c=a.width?(t.clientX-a.left)/a.width:.5,d=a.height?(t.clientY-a.top)/a.height:.5;this.host.state.diagramZooms.set(o,s),e.style.width=`${s}%`;let l=e.getBoundingClientRect();this.setCameraOffset(e,o,{x:n.x+t.clientX-(l.left+c*l.width),y:n.y+t.clientY-(l.top+d*l.height)})}setCameraOffset(e,t,o){this.host.state.diagramCameraOffsets.set(t,o),e.style.transform=`translate(${o.x}px, ${o.y}px)`}enableSequenceSelection(){for(let e of this.host.outputElement.querySelectorAll('.docdiagram[data-diagram-type="sequence"] svg'))e.addEventListener("click",t=>{if(!Xe(this.host.state,Y(e.dataset.diagramIndex)))return;let o=xe(t,".docdiagram-sequence-participant"),n=xe(t,".docdiagram-sequence-note"),i=xe(t,".docdiagram-sequence-message");o?this.host.state.selectedSequenceElement={diagramIndex:Y(o.getAttribute("data-diagram-index")||void 0),kind:"participant",id:o.getAttribute("data-participant-id")||""}:n?this.host.state.selectedSequenceElement={diagramIndex:Y(n.getAttribute("data-diagram-index")||void 0),kind:"note",index:Y(n.getAttribute("data-note-index")||void 0)}:i?this.host.state.selectedSequenceElement={diagramIndex:Y(i.getAttribute("data-diagram-index")||void 0),kind:"message",index:Y(i.getAttribute("data-message-index")||void 0)}:this.host.state.selectedSequenceElement=null,this.host.state.selectedNode=null,this.host.state.selectedEdge=null,this.host.renderDocument()})}enableEditing(){for(let e of this.host.outputElement.querySelectorAll(".docdiagram svg"))Xe(this.host.state,Y(e.dataset.diagramIndex))&&(e.addEventListener("click",t=>this.handleDiagramClick(e,t)),e.addEventListener("pointerdown",t=>this.handleDiagramPointerDown(e,t)));for(let e of this.host.outputElement.querySelectorAll(".docdiagram-inline-editor"))this.wireInlineEditor(e);this.editingShortcutsBound||(this.editingShortcutsBound=!0,document.addEventListener("keydown",e=>{if(this.host.state.editingDiagramIndex===null)return;let t=document.activeElement;t instanceof Element&&t.matches("input, textarea, select, [contenteditable]")||((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="d"&&this.host.state.selectedNode?(e.preventDefault(),this.duplicateSelectedNode()):(e.key==="Delete"||e.key==="Backspace")&&(this.host.state.selectedNode||this.host.state.selectedEdge)&&(e.preventDefault(),this.deleteSelected()))},!0))}selectNode(e,t){this.host.state.selectedNode={diagramIndex:e,nodeId:t},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}selectEdge(e,t){this.host.state.selectedEdge={diagramIndex:e,edgeIndex:t},this.host.state.selectedNode=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}handleDiagramClick(e,t){if(xe(t,".docdiagram-inline-editor"))return;let o=xe(t,".docdiagram-node");if(o){this.selectNode(Y(o.getAttribute("data-diagram-index")||void 0),o.getAttribute("data-node-id")||"");return}let n=xe(t,".docdiagram-edge-group");if(n){let i=Y(n.getAttribute("data-diagram-index")||void 0),s=Y(n.getAttribute("data-edge-index")||void 0),a=this.host.state.selectedEdge?.diagramIndex===i&&this.host.state.selectedEdge.edgeIndex===s,c=this.host.state.editingEdge?.diagramIndex===i&&this.host.state.editingEdge.edgeIndex===s;a&&!c?(this.host.state.editingEdge={diagramIndex:i,edgeIndex:s},this.host.renderDocument()):this.selectEdge(i,s);return}(this.host.state.selectedNode||this.host.state.selectedEdge)&&this.clearSelection()}handleDiagramPointerDown(e,t){let o=xe(t,".docdiagram-edge-waypoint");if(o){this.moveEdgeWaypoint(e,t,o);return}let n=xe(t,".docdiagram-callout-handle");if(n){this.moveNodeCalloutPointer(e,t,n);return}let i=xe(t,".docdiagram-connection-port");if(i){let w=i.closest(".docdiagram-node"),D=Y(w?.getAttribute("data-diagram-index")||e.dataset.diagramIndex),k=i.getAttribute("data-node-id")||w?.getAttribute("data-node-id")||"",C=me(this.host.state,D),B=C?de(C,k)?.node:null,M=i.getAttribute("data-anchor")||"";if(B&&ne.includes(M)){let L=M;this.beginConnectionDrag(e,t,{diagramIndex:D,sourceNodeId:k,sourceAnchor:L,start:this.getNodePortPoint(B,L),current:this.getNodePortPoint(B,L),invalid:!1})}return}let s=xe(t,".docdiagram-edge-endpoint");if(s){let w=Y(s.getAttribute("data-diagram-index")||void 0),D=Y(s.getAttribute("data-edge-index")||void 0),k=me(this.host.state,w),C=k?.edges[D],B=s.getAttribute("data-endpoint");if(!C||B!=="source"&&B!=="target")return;let M=B==="source"?C.source:C.target,L=B==="source"?C.sourceAnchor:C.targetAnchor,A=k?de(k,M)?.node:null;if(!A||!L)return;this.beginConnectionDrag(e,t,{diagramIndex:w,edgeIndex:D,endpoint:B,reconnect:!0,sourceNodeId:M,sourceAnchor:L,start:this.getNodePortPoint(A,L),current:this.getNodePortPoint(A,L),invalid:!1});return}let a=xe(t,".docdiagram-resize-handle");if(a){let w=a.closest(".docdiagram-node"),D=a.getAttribute("data-resize-corner");w&&(D==="top-left"||D==="top-right"||D==="bottom-left"||D==="bottom-right")&&this.resizeNode(e,t,w,D);return}if(xe(t,".docdiagram-inline-editor"))return;let c=xe(t,".docdiagram-node");if(!c)return;let d=Y(c.getAttribute("data-diagram-index")||void 0),l=c.getAttribute("data-node-id")||"",u=me(this.host.state,d);if(!u)return;let g=new X(u),h=g.getById(l),f=h?.node;if(!h||!f)return;t.preventDefault();let m=this.svgPoint(e,t),p=h.bounds,E=h.parent?g.getByNode(h.parent)?.position||{x:0,y:0}:{x:0,y:0},N=ce(u),x=!1;this.capturePointer(e,t);let y=w=>{let D=this.svgPoint(e,w),k=H(p.x+D.x-m.x,N),C=H(p.y+D.y-m.y,N);x=x||k!==p.x||C!==p.y,c.setAttribute("transform",`translate(${k-p.x} ${C-p.y})`),f.arrow&&this.updateNodeCalloutMarkup(c,p,{x:f.arrow.x-(k-p.x),y:f.arrow.y-(C-p.y)},be(f,p.x,p.y,p.width,p.height).bodyMarkup,Gr(u,f)),f.position={...f.position,x:k-E.x,y:C-E.y}},$=w=>{this.releasePointer(e,w),e.removeEventListener("pointermove",y),e.removeEventListener("pointerup",$),e.removeEventListener("pointercancel",$),x?(to(u,l),ot(u,f),this.host.state.selectedNode={diagramIndex:d,nodeId:l},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.persistDiagramModels(),this.host.renderDocument()):this.host.state.selectedNode?.diagramIndex===d&&this.host.state.selectedNode.nodeId===l?(this.host.state.editingNode={diagramIndex:d,nodeId:l},this.host.renderDocument()):this.selectNode(d,l)};e.addEventListener("pointermove",y),e.addEventListener("pointerup",$),e.addEventListener("pointercancel",$)}getSelectedNode(){let e=this.host.state.selectedNode,t=e?me(this.host.state,e.diagramIndex):null;return e&&t&&de(t,e.nodeId)?.node||null}getSelectedEdge(){let e=this.host.state.selectedEdge,t=e?me(this.host.state,e.diagramIndex):null;return e&&t?.edges[e.edgeIndex]||null}clearSelection(){this.host.state.selectedNode=null,this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}deleteSelected(){let e=this.host.state.selectedNode,t=this.host.state.selectedEdge;if(e){let o=me(this.host.state,e.diagramIndex);if(!o)return;let n=o.edges.filter(i=>i.source===e.nodeId||i.target===e.nodeId);if(n.length&&!globalThis.confirm(`Delete this node and its ${n.length} attached connector${n.length===1?"":"s"}?`))return;Ft(o,e.nodeId)}else if(t){let o=me(this.host.state,t.diagramIndex);if(!o)return;$t(o,t.edgeIndex)}else return;_e(this.host.state),this.host.persistDiagramModels(),this.host.renderDocument()}duplicateSelectedNode(){let e=this.host.state.selectedNode;if(!e)return;let t=me(this.host.state,e.diagramIndex);if(!t)return;let o=Dt(t,e.nodeId);o&&(this.host.state.selectedNode={diagramIndex:e.diagramIndex,nodeId:o.id},this.host.state.selectedEdge=null,this.host.persistDiagramModels(),this.host.renderDocument())}wireInlineEditor(e){let t=!1,o=()=>{if(!t){if(t=!0,e.classList.contains("docdiagram-inline-editor-edge")){let i=this.getSelectedEdge();i&&(At(i,e.value),this.host.persistDiagramModels()),this.host.state.editingEdge=null}else{let i=this.getSelectedNode();i&&(Nt(i,e.value),this.host.persistDiagramModels()),this.host.state.editingNode=null}this.host.renderDocument()}},n=()=>{t||(t=!0,e.classList.contains("docdiagram-inline-editor-edge")?this.host.state.editingEdge=null:this.host.state.editingNode=null,this.host.renderDocument())};e.addEventListener("pointerdown",i=>i.stopPropagation()),e.addEventListener("click",i=>i.stopPropagation()),e.addEventListener("keydown",i=>{i.key==="Enter"&&(i.metaKey||i.ctrlKey)?(i.preventDefault(),o()):i.key==="Escape"&&(i.preventDefault(),n())}),e.addEventListener("blur",o,{once:!0}),e.focus(),e.select()}resizeNode(e,t,o,n){t.preventDefault();let i=Y(o.getAttribute("data-diagram-index")||void 0),s=o.getAttribute("data-node-id")||"",a=me(this.host.state,i),c=a?de(a,s)?.node:null;if(!a||!c)return;let d=this.svgPoint(e,t),l=ur(c),u=!1;this.capturePointer(e,t);let g=f=>{let m=this.svgPoint(e,f);uo(a,c,n,m.x-d.x,m.y-d.y,l);let p=Number(c.size?.width)||190,E=Number(c.size?.height)||80;u=u||p!==l.size.width||E!==l.size.height,this.updateNodeSizeMarkup(o,c,p,E)},h=f=>{this.releasePointer(e,f),e.removeEventListener("pointermove",g),e.removeEventListener("pointerup",h),e.removeEventListener("pointercancel",h),u&&(ot(a,c),this.host.state.selectedNode={diagramIndex:i,nodeId:s},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.persistDiagramModels(),this.host.renderDocument())};e.addEventListener("pointermove",g),e.addEventListener("pointerup",h),e.addEventListener("pointercancel",h)}updateNodeSizeMarkup(e,t,o,n){let i=me(this.host.state,Y(e.getAttribute("data-diagram-index")||void 0));if(!i)return;let{x:s,y:a}=rt(i,t),c=e.querySelector(".docdiagram-node-body"),d=e.querySelector(".docdiagram-node-label"),l=e.querySelector(".docdiagram-node-subtitle"),u=e.querySelectorAll(".docdiagram-resize-handle");if(!c)return;let g=Ge(i,t),h=be(t,s,a,o,n),f=at(h.textBounds,t);for(let m of e.querySelectorAll(".docdiagram-node-detail"))m.remove();c.outerHTML=zt(h,g,Number(g.strokeWidth)||2);for(let m of[d,l])if(m){m.setAttribute("x",String(f.centerX)),m.setAttribute("y",String(m===d?f.labelStartY:f.subtitleStartY)),m.setAttribute("text-anchor",f.textAnchor);for(let p of m.querySelectorAll("tspan"))p.setAttribute("x",String(f.centerX))}for(let m of u){let p=m.getAttribute("data-resize-corner");m.setAttribute("x",String(p?.endsWith("left")?s-7:s+o-7)),m.setAttribute("y",String(p?.startsWith("top")?a-7:a+n-7))}this.updateNodeCalloutMarkup(e,{x:s,y:a,width:o,height:n},t.arrow,h.bodyMarkup,Gr(i,t))}getNodePortPoint(e,t,o){let n=o;if(!n){let i=this.host.state.diagramModels.find(s=>s.type==="flowchart"&&de(s,e.id)?.node===e);if(!i)return{x:0,y:0};n=rt(i,e)}return be(e,n.x,n.y,n.width,n.height).anchors[t]}addConnectionTargetPorts(e,t){let o=me(this.host.state,t);if(o)for(let{node:n,bounds:i}of new X(o).entries)for(let s of ne){let a=this.getNodePortPoint(n,s,i),c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("class","docdiagram-connection-port docdiagram-connection-target-port"),c.dataset.nodeId=n.id,c.dataset.anchor=s,c.setAttribute("cx",String(a.x)),c.setAttribute("cy",String(a.y)),c.setAttribute("r","7"),e.append(c)}}beginConnectionDrag(e,t,o){t.preventDefault(),t.stopPropagation(),this.host.state.connectionDrag={...o,current:this.svgPoint(e,t),invalid:!1},this.addConnectionTargetPorts(e,o.diagramIndex);let n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("class","docdiagram-connection-preview"),e.append(n),this.capturePointer(e,t);let i=c=>{let l=document.elementFromPoint(c.clientX,c.clientY)?.closest(".docdiagram-connection-port");return l||[...e.querySelectorAll(".docdiagram-connection-port")].find(u=>{let g=u.getBoundingClientRect();return c.clientX>=g.left&&c.clientX<=g.right&&c.clientY>=g.top&&c.clientY<=g.bottom})||null},s=c=>{let d=this.host.state.connectionDrag;if(!d)return;let l=this.svgPoint(e,c),u=i(c);d.current=l,d.invalid=!u;let g=u?.getAttribute("data-anchor")||d.sourceAnchor;n.setAttribute("d",qe(d.start,l,d.sourceAnchor,g,"straight").path),n.classList.toggle("docdiagram-connection-invalid",d.invalid)},a=c=>{this.releasePointer(e,c),e.removeEventListener("pointermove",s),e.removeEventListener("pointerup",a),e.removeEventListener("pointercancel",a);let d=i(c),l=this.host.state.connectionDrag;if(this.host.state.connectionDrag=null,d&&l){let u=me(this.host.state,l.diagramIndex),g=d.getAttribute("data-node-id")||d.closest(".docdiagram-node")?.getAttribute("data-node-id"),h=d.getAttribute("data-anchor")||"";if(u&&g){if(l.reconnect&&l.edgeIndex!==void 0&&l.endpoint){let f=u.edges[l.edgeIndex];f&&(ao(f,l.endpoint,g,h),this.host.state.selectedEdge={diagramIndex:l.diagramIndex,edgeIndex:l.edgeIndex},this.host.state.selectedNode=null)}else{let f=io(u,l.sourceNodeId,l.sourceAnchor,g,h);this.host.state.selectedEdge={diagramIndex:l.diagramIndex,edgeIndex:u.edges.indexOf(f)},this.host.state.selectedNode=null}this.host.persistDiagramModels()}}this.host.renderDocument()};e.addEventListener("pointermove",s),e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a)}beginCanvasPan(e,t){let o=e.closest(".docdiagram");if(!o)return;t.preventDefault();let n=Y(e.dataset.diagramIndex),i=this.host.state.diagramCameraOffsets.get(n)||{x:0,y:0},s={clientX:t.clientX,clientY:t.clientY,offset:i};o.classList.add("docdiagram-panning"),this.capturePointer(e,t);let a=d=>{let l={x:s.offset.x+d.clientX-s.clientX,y:s.offset.y+d.clientY-s.clientY};this.host.state.diagramCameraOffsets.set(n,l),e.style.transform=`translate(${l.x}px, ${l.y}px)`},c=d=>{this.releasePointer(e,d),o.classList.remove("docdiagram-panning"),e.removeEventListener("pointermove",a),e.removeEventListener("pointerup",c),e.removeEventListener("pointercancel",c)};e.addEventListener("pointermove",a),e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c)}moveEdgeWaypoint(e,t,o){let n=Y(o.getAttribute("data-diagram-index")||void 0),i=Y(o.getAttribute("data-edge-index")||void 0),s=me(this.host.state,n),a=s?.edges[i];if(!s||!a)return;let c=new X(s),d=c.getById(a.source),l=c.getById(a.target);if(!d||!l)return;t.preventDefault(),t.stopPropagation(),this.capturePointer(e,t);let u=h=>{let f=this.svgPoint(e,h);a.waypoint={x:H(f.x,ce(s)),y:H(f.y,ce(s))};let m=a.sourceAnchor||"right",p=a.targetAnchor||"left",E=this.getNodePortPoint(d.node,m,d.bounds),N=this.getNodePortPoint(l.node,p,l.bounds),x=qe(E,N,m,p,a.route||"orthogonal",a.waypoint),y=Mr(a.waypoint,!0);o.setAttribute("x",String(y.x)),o.setAttribute("y",String(y.y)),o.setAttribute("width",String(y.size)),o.setAttribute("height",String(y.size)),o.setAttribute("rx",String(y.radius)),o.setAttribute("transform",y.transform),o.setAttribute("data-anchored","true");let $=e.querySelector(`.docdiagram-edge-group[data-diagram-index="${n}"][data-edge-index="${i}"]`);$?.querySelector(".docdiagram-edge")?.setAttribute("d",x.path),$?.querySelector(".docdiagram-edge-hit")?.setAttribute("d",x.hitPath)},g=h=>{this.releasePointer(e,h),e.removeEventListener("pointermove",u),e.removeEventListener("pointerup",g),e.removeEventListener("pointercancel",g),this.host.persistDiagramModels(),this.host.renderDocument()};e.addEventListener("pointermove",u),e.addEventListener("pointerup",g),e.addEventListener("pointercancel",g)}moveNodeCalloutPointer(e,t,o){let n=Y(o.getAttribute("data-diagram-index")||void 0),i=o.getAttribute("data-node-id")||"",s=me(this.host.state,n),a=s?de(s,i)?.node:null,c=o.closest(".docdiagram-node");if(!s||!a||!c)return;t.preventDefault(),t.stopPropagation(),this.capturePointer(e,t);let d=ce(s),l=rt(s,a),u=be(a,l.x,l.y,l.width,l.height),g=Gr(s,a),h=m=>{let p=this.svgPoint(e,m),E={x:H(p.x,d),y:H(p.y,d)};gr(a,E),this.updateNodeCalloutMarkup(c,l,E,u.bodyMarkup,g)},f=m=>{this.releasePointer(e,m),e.removeEventListener("pointermove",h),e.removeEventListener("pointerup",f),e.removeEventListener("pointercancel",f),ot(s,a),this.host.persistDiagramModels(),this.host.renderDocument()};e.addEventListener("pointermove",h),e.addEventListener("pointerup",f),e.addEventListener("pointercancel",f)}updateNodeCalloutMarkup(e,t,o,n,i){let s=o?Ht(t,o):null;if(!s)return;for(let l of e.querySelectorAll(".docdiagram-node-callout, .docdiagram-node-callout-outline"))l.setAttribute("points",s.polygonPoints);let a=e.querySelector(".docdiagram-node-callout-mask-body");a&&(a.outerHTML=Cr(n));let c=Tr(s,i);for(let l of[e.querySelector("mask"),e.querySelector(".docdiagram-node-callout-mask-region")])for(let[u,g]of Object.entries(c))l?.setAttribute(u,String(g));let d=e.querySelector(".docdiagram-callout-handle");d?.setAttribute("cx",String(o?.x??0)),d?.setAttribute("cy",String(o?.y??0))}svgPoint(e,t){let o=e.getBoundingClientRect(),n=e.viewBox.baseVal;return{x:(t.clientX-o.left)*n.width/o.width,y:(t.clientY-o.top)*n.height/o.height}}capturePointer(e,t){t.isTrusted&&e.setPointerCapture(t.pointerId)}releasePointer(e,t){t.isTrusted&&e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId)}};function Qo(r,e,t,o){let n=$e[r]?.[e==="dark"?"dark":"light"];return[[...we.slice(0,5),"none"],we.slice(5,8),we.slice(8,13)].map(i=>`<div class="docdiagram-palette-group">${i.map(s=>{let a=n?.[s];return`<label class="docdiagram-palette-swatch"><input type="radio" name="${o}" value="${s}"${s===t?" checked":""}><span style="--docdiagram-swatch-fill:${a?.fill};--docdiagram-swatch-stroke:${a?.stroke};--docdiagram-swatch-text:${a?.text}">${a?.label||s}</span></label>`}).join("")}</div>`).join("")}function en(r,e,t="classic",o="light"){let n=ce(r),i=Ge(r,e,o,t),s=Number(e.size?.width)||190,a=Number(e.size?.height)||80,c=e.shape==="document"?{width:140,height:84}:{width:120,height:60},d=n?Math.ceil(c.width/n)*n:c.width,l=n?Math.ceil(c.height/n)*n:c.height,u=n||1,g=e.palette||"accent";return[`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-inspector-label docdiagram-inspector-textarea" rows="2">${v(e.label)}</textarea></label>`,`<label class="docdiagram-field docdiagram-field-wide">Subtitle<textarea class="docdiagram-inspector-subtitle docdiagram-inspector-textarea" rows="2">${v(e.subtitle||"")}</textarea></label>`,`<div class="docdiagram-field docdiagram-field-wide"><span>Palette</span><div class="docdiagram-inspector-palette">${Qo(t,o,g,"node-palette")}</div></div>`,`<label class="docdiagram-inspector-shape-row"><span>Shape</span><select class="docdiagram-inspector-shape">${Qe.map(h=>`<option value="${h}"${h===e.shape?" selected":""}>${h}</option>`).join("")}</select></label>`,`<div class="docdiagram-inspector-row docdiagram-inspector-colour-row"><span>Fill</span><input type="color" class="docdiagram-inspector-fill" value="${v(i.fill||"")}"><span>Stroke</span><input type="color" class="docdiagram-inspector-stroke" value="${v(i.stroke||"")}"><label class="docdiagram-visually-hidden" for="docdiagram-inspector-stroke-width">Stroke width</label><input id="docdiagram-inspector-stroke-width" type="number" aria-label="Stroke width" class="docdiagram-inspector-stroke-width" value="${Number(i.strokeWidth)||2}" min="1" step="1"></div>`,`<label class="docdiagram-inspector-text-row"><span>Text</span><input type="color" class="docdiagram-inspector-text" value="${v(i.text||"")}"></label>`,`<div class="docdiagram-inspector-paired-controls"><span>Align</span><label class="docdiagram-visually-hidden" for="docdiagram-inspector-text-v-align">Vertical alignment</label><select id="docdiagram-inspector-text-v-align" class="docdiagram-inspector-text-v-align" aria-label="Vertical alignment"><option value="top"${e.textVAlign==="top"?" selected":""}>Top</option><option value="center"${e.textVAlign!=="top"?" selected":""}>Middle</option></select><label class="docdiagram-visually-hidden" for="docdiagram-inspector-text-h-align">Horizontal alignment</label><select id="docdiagram-inspector-text-h-align" class="docdiagram-inspector-text-h-align" aria-label="Horizontal alignment"><option value="left"${e.textHAlign==="left"?" selected":""}>Left</option><option value="center"${e.textHAlign!=="left"&&e.textHAlign!=="right"?" selected":""}>Center</option><option value="right"${e.textHAlign==="right"?" selected":""}>Right</option></select><span>Size</span><label class="docdiagram-visually-hidden" for="docdiagram-inspector-width">Width</label><input id="docdiagram-inspector-width" type="number" aria-label="Width" class="docdiagram-inspector-width" value="${s}" min="${d}" step="${u}"><label class="docdiagram-visually-hidden" for="docdiagram-inspector-height">Height</label><input id="docdiagram-inspector-height" type="number" aria-label="Height" class="docdiagram-inspector-height" value="${a}" min="${l}" step="${u}"><span>Callout</span><button type="button" class="docdiagram-inspector-callout">${e.arrow?"Remove pointer":"Add pointer"}</button><span></span><button type="button" class="docdiagram-inspector-delete">Delete</button><button type="button" class="docdiagram-inspector-duplicate">Duplicate</button></div>`].join("")}function tn(r,e){let t=St(r,e),o=Number(t.strokeWidth)||2,n=e.route||"orthogonal",i=e.start||"none",s=e.end||"arrow";return[`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-inspector-label docdiagram-inspector-textarea" rows="2">${v(e.label||"")}</textarea></label>`,`<label class="docdiagram-field">Route<select class="docdiagram-inspector-route">${et.map(a=>`<option value="${a}"${a===n?" selected":""}>${a}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Source side<select class="docdiagram-inspector-source-anchor">${ne.map(a=>`<option value="${a}"${a===e.sourceAnchor?" selected":""}>${a}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Target side<select class="docdiagram-inspector-target-anchor">${ne.map(a=>`<option value="${a}"${a===e.targetAnchor?" selected":""}>${a}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Start<select class="docdiagram-inspector-marker-start">${De.map(a=>`<option value="${a}"${a===i?" selected":""}>${a}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">End<select class="docdiagram-inspector-marker-end">${De.map(a=>`<option value="${a}"${a===s?" selected":""}>${a}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Stroke<input type="color" class="docdiagram-inspector-stroke" value="${v(t.stroke||"")}"></label>`,`<label class="docdiagram-field">Label colour<input type="color" class="docdiagram-inspector-text" value="${v(t.text||"")}"></label>`,`<label class="docdiagram-field">Stroke width<input type="number" class="docdiagram-inspector-stroke-width" value="${o}" min="1" step="1"></label>`,`<div class="docdiagram-inspector-actions">${e.waypoint?'<button type="button" class="docdiagram-inspector-clear-waypoint">Remove waypoint</button>':""}<button type="button" class="docdiagram-inspector-delete">Delete</button></div>`].join("")}function rn(r,e,t,o="classic",n="light"){let i="from"in t?null:tt(r,t,n,o),s=e.kind!=="message",a=s?t:null;return[`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-sequence-inspector-label docdiagram-inspector-textarea" rows="2">${v(t.label||"")}</textarea></label>`,e.kind==="message"?`<label class="docdiagram-field">Style<select class="docdiagram-sequence-inspector-message-style"><option value="solid"${t.style!=="dashed"?" selected":""}>Solid</option><option value="dashed"${t.style==="dashed"?" selected":""}>Dashed</option></select></label>`:"",s?`<div class="docdiagram-field docdiagram-field-wide"><span>Palette</span><div class="docdiagram-sequence-inspector-palette">${Qo(o,n,a?.palette||"accent","sequence-palette")}</div></div>`:"",s?`<label class="docdiagram-field">Fill<input type="color" class="docdiagram-sequence-inspector-fill" value="${v(i?.fill||"")}"></label><label class="docdiagram-field">Border<input type="color" class="docdiagram-sequence-inspector-stroke" value="${v(i?.stroke||"")}"></label><label class="docdiagram-field">Text<input type="color" class="docdiagram-sequence-inspector-text" value="${v(i?.text||"")}"></label><label class="docdiagram-field">Width<input type="number" min="1" class="docdiagram-sequence-inspector-width" value="${Number(a?.size?.width)||""}"></label><label class="docdiagram-field">Height<input type="number" min="1" class="docdiagram-sequence-inspector-height" value="${Number(a?.size?.height)||""}"></label>`:""].join("")}function Wi(r,e){return r.querySelector(e)}function W(r,e,t){Wi(r,e)?.addEventListener("change",o=>{t(o.currentTarget.value)})}function Ke(r,e){e(),r.persistDiagramModels(),r.renderDocument()}function Yi(r,e){e(),r.persistDiagramModels()}function Jo(r,e,t,o){r&&r.addEventListener("input",()=>{t(r.value);let n=r.value,i=r.selectionStart,s=r.selectionEnd;o(r,()=>{let a=document.querySelector(e);a&&a.value!==n&&(a.value=n),a?.focus(),a?.setSelectionRange(i,s)})})}function on(r,e,t,o){let n=null,i=(c,d)=>{globalThis.clearTimeout(n??void 0),n=globalThis.setTimeout(()=>{n=null;let l=document.activeElement===c;r.renderDocument(),l&&d()},250)},s=c=>{let d=r.state.diagramModels[t];if(!d||d.type!=="flowchart")return;let l=de(d,o)?.node;l&&Ke(r,()=>c(d,l))},a=c=>{let d=r.state.diagramModels[t];if(!d||d.type!=="flowchart")return;let l=de(d,o)?.node;l&&Yi(r,()=>c(d,l))};Jo(e.querySelector(".docdiagram-inspector-label"),".docdiagram-inspector-label",c=>a((d,l)=>Nt(l,c)),i),Jo(e.querySelector(".docdiagram-inspector-subtitle"),".docdiagram-inspector-subtitle",c=>a((d,l)=>co(l,c)),i);for(let c of e.querySelectorAll(".docdiagram-inspector-palette input"))c.addEventListener("change",()=>s((d,l)=>lr(l,c.value,r.state.documentColorScheme)));W(e,".docdiagram-inspector-shape",c=>s((d,l)=>so(l,c))),W(e,".docdiagram-inspector-fill",c=>s((d,l)=>ut(l,"fill",c))),W(e,".docdiagram-inspector-stroke",c=>s((d,l)=>ut(l,"stroke",c))),W(e,".docdiagram-inspector-text",c=>s((d,l)=>ut(l,"text",c))),W(e,".docdiagram-inspector-text-v-align",c=>s((d,l)=>dr(l,"textVAlign",c))),W(e,".docdiagram-inspector-text-h-align",c=>s((d,l)=>dr(l,"textHAlign",c))),W(e,".docdiagram-inspector-stroke-width",c=>s((d,l)=>fr(l,c))),W(e,".docdiagram-inspector-width",c=>s((d,l)=>mr(d,l,"width",c))),W(e,".docdiagram-inspector-height",c=>s((d,l)=>mr(d,l,"height",c))),e.querySelector(".docdiagram-inspector-callout")?.addEventListener("click",()=>{s((c,d)=>ho(c,d))}),e.querySelector(".docdiagram-inspector-delete")?.addEventListener("click",()=>{s((c,d)=>{Ft(c,d.id),r.state.selectedNode=null})}),e.querySelector(".docdiagram-inspector-duplicate")?.addEventListener("click",()=>{s((c,d)=>{let l=Dt(c,d.id);l&&(r.state.selectedNode={diagramIndex:t,nodeId:l.id})})})}function nn(r,e,t,o){let n=i=>{let s=r.state.diagramModels[t];if(!s||s.type!=="flowchart")return;let a=s.edges[o];a&&Ke(r,()=>i(s,a))};W(e,".docdiagram-inspector-label",i=>n((s,a)=>At(a,i))),W(e,".docdiagram-inspector-route",i=>n((s,a)=>mo(a,i))),W(e,".docdiagram-inspector-source-anchor",i=>n((s,a)=>hr(a,"source",i))),W(e,".docdiagram-inspector-target-anchor",i=>n((s,a)=>hr(a,"target",i))),W(e,".docdiagram-inspector-marker-start",i=>n((s,a)=>po(a,i))),W(e,".docdiagram-inspector-marker-end",i=>n((s,a)=>fo(a,i))),W(e,".docdiagram-inspector-stroke",i=>n((s,a)=>pr(a,"stroke",i))),W(e,".docdiagram-inspector-text",i=>n((s,a)=>pr(a,"text",i))),W(e,".docdiagram-inspector-stroke-width",i=>n((s,a)=>fr(a,i))),e.querySelector(".docdiagram-inspector-clear-waypoint")?.addEventListener("click",()=>{n((i,s)=>go(s))}),e.querySelector(".docdiagram-inspector-delete")?.addEventListener("click",()=>{n(i=>{$t(i,o),r.state.selectedEdge=null})})}function an(r,e,t){let o=r.state.selectedSequenceElement;if(!o)return;if(W(e,".docdiagram-sequence-inspector-label",i=>Ke(r,()=>{t.label=i.trim()||t.label})),o.kind==="message"){W(e,".docdiagram-sequence-inspector-message-style",i=>Ke(r,()=>{xt.includes(i)&&(t.style=i)}));return}let n=t;for(let i of e.querySelectorAll(".docdiagram-sequence-inspector-palette input"))i.addEventListener("change",()=>Ke(r,()=>lr(n,i.value,r.state.documentColorScheme)));for(let[i,s]of[[".docdiagram-sequence-inspector-fill","fill"],[".docdiagram-sequence-inspector-stroke","stroke"],[".docdiagram-sequence-inspector-text","text"]])W(e,i,a=>Ke(r,()=>ut(n,s,a)));for(let[i,s]of[[".docdiagram-sequence-inspector-width","width"],[".docdiagram-sequence-inspector-height","height"]])W(e,i,a=>Ke(r,()=>{let c=Number(a);Number.isFinite(c)&&c>0&&(n.size={...n.size,[s]:c})}))}var _i="https://sparkkz-nz.github.io/skryb/docs/reference.html",Vr=192,Xi=96,sn=24,Ki=8e6,Zi={flowchart:["```diagram","id: new-flowchart","type: flowchart","canvas:","  auto: true","  grid: 5","nodes:","  - id: first-node","    label: First node","    shape: rounded-rectangle","    position: { x: 80, y: 110 }","  - id: second-node","    label: Second node","    shape: rounded-rectangle","    position: { x: 330, y: 110 }","edges:","  - source: first-node","    target: second-node","    sourceAnchor: right","    targetAnchor: left","```"].join(`
`),sequence:["```diagram","id: new-sequence","type: sequence","participants:","  - id: first-participant","    label: First participant","  - id: second-participant","    label: Second participant","messages:","  - from: first-participant","    to: second-participant","    label: Request","```"].join(`
`),"diagram-reference":":::diagram { id=diagram-id }",toc:":::toc { depth=3 diagrams=true }",panel:[':::panel { title="New panel" palette=accent }',"Panel content.",":::"].join(`
`),grid:[":::grid { columns=2 }",':::panel { title="First panel" }',"First panel content.",":::","",':::panel { title="Second panel" }',"Second panel content.",":::",":::"].join(`
`)};function Yt(r,e){let t=new Set([...r.matchAll(/(?:\bid:\s*|:::diagram\s+\{\s*id=)(?:"([^"]+)"|([^\s}\n#]+))/g)].map(i=>i[1]||i[2])),o=1,n=e;for(;t.has(n);)o+=1,n=`${e}-${o}`;return n}function Ji(r,e){let t=Zi[r];if(!t)return null;if(r==="flowchart")return t.replace("id: new-flowchart",`id: ${Yt(e,"new-flowchart")}`);if(r==="sequence")return t.replace("id: new-sequence",`id: ${Yt(e,"new-sequence")}`);if(r==="diagram-reference"){let o=Yt(e,"diagram-reference");return t.replace("diagram-id",o)}return t}function Qi(r){if(!/<template[^>]*\bid=["']?source\b/i.test(r))return r;let t=new DOMParser().parseFromString(r,"text/html").querySelector("template#source");if(!t)throw new Error("That Skryb document has no source template to import from.");return t.content.textContent||""}function ea(){return new Promise(r=>{let e=document.createElement("input");e.type="file",e.accept=".html,.htm,.md,.markdown,text/html,text/markdown",e.hidden=!0;let t=o=>{e.remove(),r(o)};e.addEventListener("change",()=>t(e.files?.[0]||null),{once:!0}),e.addEventListener("cancel",()=>t(null),{once:!0}),document.body.append(e),e.click()})}function ta(r){if(r.length<=1)return r[0]||null;let e=r.map((n,i)=>`${i+1}. ${n.id||"(no id)"}`).join(`
`),t=globalThis.prompt(`That file has ${r.length} diagrams. Import which one?

${e}`,"1");if(t===null)return null;let o=Number.parseInt(t.trim(),10);if(!Number.isInteger(o)||o<1||o>r.length)throw new Error(`Enter a number between 1 and ${r.length}.`);return r[o-1]}var _t=class{constructor(e){this.host=e;this.renderTimer=null;this.resizeObserver=null;this.openState=!1;this.draft="";this.error=""}get isOpen(){return this.openState}get hasUnsavedDraft(){return this.openState&&this.draft!==this.host.getSource()}get hasError(){return this.error.length>0}get draftSource(){return this.draft}setError(e){this.error=e,this.updateStatus()}clearError(){this.error=""}open(){globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=null,this.draft=this.host.getSource(),this.error="",this.openState=!0,this.host.stopDiagramEditing(),this.host.renderDocument();let e=()=>this.focus();globalThis.requestAnimationFrame?.(e)??e()}close(){this.flushRender(),!(this.error&&this.draft!==this.host.getSource()&&!globalThis.confirm("Discard the invalid source changes?"))&&(this.openState=!1,this.draft="",this.error="",this.renderTray(),document.querySelector(".docdiagram-menu-toggle")?.focus())}flushRender(){return this.renderTimer===null?!0:this.renderDraft()}syncSource(e){if(!this.openState)return;this.draft=e,this.error="";let t=document.querySelector(".docdiagram-source-editor");if(!t)return;let o=t.selectionStart,n=t.selectionEnd,i=t.scrollTop;t.value=e,t.setSelectionRange(Math.min(o,e.length),Math.min(n,e.length)),t.scrollTop=i,this.updateStatus()}reveal(e){let t=this.host.getSource(),o=No(t,e);return o?this.revealSourceRange({start:{line:1,column:1,offset:o.start},end:{line:1,column:1,offset:o.end}},We(t)):!1}revealSourceRange(e,t){let o=this.host.getSource();if(We(o)!==t||this.hasUnsavedDraft||e.start.offset>o.length)return!1;this.openState||this.open();let n=()=>{let i=document.querySelector(".docdiagram-source-editor");i&&(i.focus(),i.setSelectionRange(e.start.offset,Math.min(e.end.offset,o.length)),Ao(i,{start:e.start.offset}))};return globalThis.requestAnimationFrame?.(n)??n(),!0}renderTray(){let e=document.querySelector(".docdiagram-source-tray");if(!this.openState){this.resizeObserver?.disconnect(),this.resizeObserver=null,e?.remove(),delete this.host.outputElement.dataset.sourceEditorOpen,this.host.outputElement.style.removeProperty("--docdiagram-source-tray-height");return}if(e){e.dataset.theme=this.host.getDocumentTheme(),this.host.outputElement.dataset.sourceEditorOpen="true",this.updateStatus();return}e=document.createElement("section"),e.className="docdiagram-source-tray",e.dataset.theme=this.host.getDocumentTheme(),e.setAttribute("aria-label","Document source editor"),e.innerHTML=['<div class="docdiagram-source-resize" role="separator" aria-orientation="horizontal" aria-label="Resize source editor" tabindex="0" title="Drag to resize"></div>','<header class="docdiagram-source-header">','<div><strong>Source</strong><span class="docdiagram-source-shortcut">Cmd/Ctrl+Shift+E to close</span></div>','<div class="docdiagram-source-actions">','<button type="button" class="docdiagram-source-menu-toggle" aria-label="Source editor menu" aria-expanded="false" title="Source editor menu">\u2630</button>','<div class="docdiagram-source-menu" hidden>','<div class="docdiagram-source-menu-heading">Insert</div>','<button type="button" data-source-template="flowchart">Flowchart</button>','<button type="button" data-source-template="sequence">Sequence</button>','<button type="button" data-source-template="diagram-reference">Diagram Reference</button>','<button type="button" data-source-template="toc">Contents</button>','<button type="button" class="docdiagram-source-import">Import diagram\u2026</button>','<button type="button" data-source-template="panel">Panel</button>','<button type="button" data-source-template="grid">Grid</button>','<button type="button" class="docdiagram-source-help">Help</button>',"</div>",'<button type="button" class="docdiagram-source-close" aria-label="Close source editor" title="Close source editor">\xD7</button>',"</div>","</header>",'<label class="docdiagram-source-label">Canonical Markdown<textarea class="docdiagram-source-editor" spellcheck="false"></textarea></label>','<p class="docdiagram-source-status" aria-live="polite"></p>','<p class="docdiagram-source-error" role="alert"></p>'].join("");let t=e.querySelector(".docdiagram-source-editor"),o=e.querySelector(".docdiagram-source-close"),n=e.querySelector(".docdiagram-source-menu-toggle"),i=e.querySelector(".docdiagram-source-menu");if(!t||!o||!n||!i)return;t.value=this.draft,t.addEventListener("input",()=>{this.draft=t.value,this.error="",this.updateStatus(),this.scheduleRender()}),o.addEventListener("click",()=>this.close()),n.addEventListener("click",()=>{let a=i.hidden;i.hidden=!a,n.setAttribute("aria-expanded",String(a))});for(let a of e.querySelectorAll("[data-source-template]"))a.addEventListener("click",()=>{let c=Ji(a.dataset.sourceTemplate||"",t.value);c&&(this.insertTemplate(t,c),i.hidden=!0,n.setAttribute("aria-expanded","false"))});e.querySelector(".docdiagram-source-import")?.addEventListener("click",async a=>{let c=a.currentTarget;i.hidden=!0,n.setAttribute("aria-expanded","false"),c.disabled=!0;try{await this.importDiagram(t)}catch(d){let l=d instanceof Error?d.message:String(d);globalThis.alert(`Import diagram failed: ${l}`)}finally{c.disabled=!1}}),e.querySelector(".docdiagram-source-help")?.addEventListener("click",()=>{globalThis.open(_i,"_blank","noopener")}),e.addEventListener("keydown",a=>{a.key==="Escape"&&!i.hidden&&(a.preventDefault(),i.hidden=!0,n.setAttribute("aria-expanded","false"),n.focus())}),this.host.outputElement.after(e),this.host.outputElement.dataset.sourceEditorOpen="true";let s=()=>{this.host.outputElement.style.setProperty("--docdiagram-source-tray-height",`${e?.offsetHeight||0}px`)};this.attachResizeHandle(e,s),this.resizeObserver?.disconnect(),globalThis.ResizeObserver&&(this.resizeObserver=new globalThis.ResizeObserver(s),this.resizeObserver.observe(e)),s(),this.updateStatus()}attachResizeHandle(e,t){let o=e.querySelector(".docdiagram-source-resize");if(!o)return;let n=s=>{let a=globalThis.innerHeight||0,c=a?Math.max(Vr,a-Xi):s;return Math.min(Math.max(s,Vr),c)},i=s=>{e.style.height=`${n(s)}px`,t()};o.addEventListener("pointerdown",s=>{if(s.button!==0)return;s.preventDefault();let a=s.clientY,c=e.offsetHeight;e.dataset.resizing="true",o.setPointerCapture?.(s.pointerId);let d=u=>{i(c-(u.clientY-a))},l=()=>{o.removeEventListener("pointermove",d),o.removeEventListener("pointerup",l),o.removeEventListener("pointercancel",l),delete e.dataset.resizing,o.releasePointerCapture?.(s.pointerId)};o.addEventListener("pointermove",d),o.addEventListener("pointerup",l),o.addEventListener("pointercancel",l)}),o.addEventListener("keydown",s=>{let a=s.shiftKey?sn*4:sn;s.key==="ArrowUp"?(s.preventDefault(),i(e.offsetHeight+a)):s.key==="ArrowDown"?(s.preventDefault(),i(e.offsetHeight-a)):s.key==="Home"?(s.preventDefault(),i(Number.MAX_SAFE_INTEGER)):s.key==="End"&&(s.preventDefault(),i(Vr))}),o.addEventListener("dblclick",()=>{e.style.removeProperty("height"),t()})}scheduleRender(){globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=globalThis.setTimeout(()=>{this.renderTimer=null,this.renderDraft()},250)}renderDraft(){return globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=null,this.host.renderDocument(this.draft,{preserveOnError:!0})}updateStatus(){let e=document.querySelector(".docdiagram-source-tray");if(!e)return;let t=e.querySelector(".docdiagram-source-status"),o=e.querySelector(".docdiagram-source-error");!t||!o||(t.textContent=this.error?"Source has errors; showing the last valid render.":"Changes render automatically.",o.hidden=!this.error,o.textContent=this.error)}insertTemplate(e,t){let o=e.selectionStart,n=e.selectionEnd,i=e.value.lastIndexOf(`
`,o-1)+1,s=e.value.indexOf(`
`,o),a=s===-1?e.value.length:s,c=e.value.slice(i,a),d=/^\s*$/.test(c)?o:a,l=/^\s*$/.test(c)?n:a,u=d===a?`
${t}`:t;e.setRangeText(u,d,l,"end"),this.draft=e.value,this.error="",this.updateStatus(),this.scheduleRender(),e.focus()}async importDiagram(e){let t=await ea();if(!t)return;if(t.size>Ki)throw new Error("That file is too large to import.");let o=Rt(Qi(await t.text()));if(!o.length)throw new Error("That file has no diagrams to import.");let n=ta(o);if(!n)return;Ne(n.source,this.host.getDocumentColourScheme());let i=Yt(e.value,n.id||"imported-diagram");this.insertTemplate(e,`\`\`\`diagram
${ko(n.source,i)}
\`\`\``)}focus(){let e=document.querySelector(".docdiagram-source-editor");e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))}};var Ur="data-docdiagram-offline-runtime-placeholder",cn='script[data-docdiagram-runtime="embedded"]',ra="https://sparkkz-nz.github.io/skryb/latest/skryb-runtime.js";function oa(){let r=globalThis;return typeof r.DocDiagramRuntimeSource=="string"?r.DocDiagramRuntimeSource:null}function Wr(r){return/^https?:\/\//i.test(r)?r:ra}async function na(r,e=globalThis.fetch.bind(globalThis)){let t=await e(r);if(!t.ok)throw new Error(`Could not fetch the Skryb runtime (${t.status||"unknown status"}).`);return t.text()}function dn(r,e,t=""){let o=new RegExp(`<script\\b[^>]*\\b${Ur}\\b[^>]*>[\\s\\S]*?<\\/script>\\s*`,"i");if(!o.test(r))throw new Error("Could not find the selected Skryb runtime in this document.");let n=r.replace(o,""),i=/<\/body\s*>/i;if(!i.test(n))throw new Error("Could not find the document body for offline export.");let s=e.replace(/<\/script/gi,"<\\/script"),c=`<script data-docdiagram-runtime="embedded"${t?` data-docdiagram-runtime-url="${ia(t)}"`:""}>
${s}
<\/script>
`;return n.replace(i,()=>`${c}</body>`)}async function ln(r,e){let t=r.querySelector(cn);if(t)return t.setAttribute(Ur,""),{source:t.textContent||"",runtimeUrl:Wr(t.dataset.docdiagramRuntimeUrl||"")};let o=Array.from(r.querySelectorAll("script[src]")).find(i=>{try{let s=new URL(i.getAttribute("src")||"",r.ownerDocument.baseURI).pathname;return/\/skryb-runtime(?:-self-packaged)?\.js$/i.test(s)}catch{return!1}});if(!o)throw new Error("Could not find the selected Skryb runtime in this document.");return o.setAttribute(Ur,""),{source:oa()||await na(o.src,e),runtimeUrl:Wr(o.getAttribute("src")||o.src)}}function Yr(r){let e=r.querySelector(cn);if(!e)return;let t=Wr(e.dataset.docdiagramRuntimeUrl||""),o=r.ownerDocument.createElement("script");o.src=t,o.defer=!0,e.replaceWith(o)}function ia(r){return r.replace(/&/g,"&amp;").replace(/"/g,"&quot;")}var Xt=class{constructor(e,t,o,n){this.session=e;this.state=t;this.outputElement=o;this.sourceEditor=n}downloadDocument(){if(this.sourceEditor?.flushRender(),!this.canExportLastValidSource())return;let e=this.createDocumentCopy();try{Yr(e)}catch(t){let o=t instanceof Error?t.message:String(t);console.error("Save As failed.",t),globalThis.alert(`Save As failed: ${o}`);return}this.downloadHtml(e.outerHTML,"-edited"),this.session.markSaved()}async downloadOfflineDocument(){if(this.sourceEditor?.flushRender(),!this.canExportLastValidSource())return;let e=this.createDocumentCopy(),t=await ln(e);this.downloadHtml(dn(e.outerHTML,t.source,t.runtimeUrl),"-offline"),this.session.markSaved()}createDocumentCopy(e=this.session.source){let t=document.documentElement.cloneNode(!0),o=t.querySelector("#source"),n=t.querySelector("#rendered-document");o?.content.replaceChildren(document.createTextNode(e)),t.querySelector(".docdiagram-lint-dialog")?.remove(),t.querySelector(".docdiagram-toolbar")?.remove(),t.querySelector(".docdiagram-source-tray")?.remove();for(let i of t.querySelectorAll("style"))(i.dataset.docdiagramRuntimeStyles==="true"||i.textContent?.includes(".docdiagram-inline-editor")&&i.textContent.includes(".docdiagram-toolbar"))&&i.remove();t.removeAttribute("data-docdiagram-theme"),t.removeAttribute("data-docdiagram-expanded"),t.style.removeProperty("--docdiagram-page-background"),t.style.removeProperty("--docdiagram-page-text"),t.getAttribute("style")||t.removeAttribute("style"),t.querySelector("body")?.removeAttribute("data-docdiagram-theme"),n?.replaceChildren(),n?.removeAttribute("data-editing-shortcuts-bound");for(let i of[...n?.attributes||[]])(i.name==="style"||i.name.startsWith("data-"))&&n?.removeAttribute(i.name);return t}openDiagram(e){let t=this.getDiagramExportUrl(e,"image/svg+xml;charset=utf-8");if(!t)return;if(!globalThis.open(t,"_blank")){URL.revokeObjectURL(t),globalThis.alert("Your browser blocked the new diagram tab. Allow pop-ups and try again.");return}globalThis.setTimeout(()=>URL.revokeObjectURL(t),6e4)}downloadDiagramDocument(e){let t=this.state.diagramModels[e];if(!t){globalThis.alert("The diagram is no longer available to save.");return}let o=He(t),n=Pt(o)||this.getDiagramExportName(e),i=["---",`theme: ${this.state.documentThemeSetting}`,`colourScheme: ${this.state.documentColorScheme}`,"doctype: diagram","---","","```diagram",o,"```",""].join(`
`),s=this.createDocumentCopy(i),a=s.querySelector("title");a&&(a.textContent=n);try{Yr(s)}catch(c){let d=c instanceof Error?c.message:String(c);console.error("Save as Skryb diagram failed.",c),globalThis.alert(`Save as Skryb diagram failed: ${d}`);return}this.downloadHtml(s.outerHTML,"",this.slug(n))}downloadDiagram(e){let t=this.getDiagramExportUrl(e,"image/svg+xml;charset=utf-8");if(!t)return;let o=document.createElement("a");o.href=t,o.download=`${this.getDiagramExportName(e)}.svg`,o.hidden=!0,document.body.append(o),o.click(),o.remove(),globalThis.setTimeout(()=>URL.revokeObjectURL(t),200)}printDiagram(e){let t=this.getStandaloneDiagramSvg(e);if(!t){globalThis.alert("The diagram is no longer available to print.");return}let o=['<!doctype html><html><head><meta charset="utf-8"><title>Diagram</title>',"<style>html,body{height:100%;margin:0}body{display:grid;place-items:center}svg{height:auto;max-height:100vh;max-width:100vw;width:auto}@page{margin:0}</style>","</head><body>",new XMLSerializer().serializeToString(t),"</body></html>"].join(""),n=globalThis.open("","_blank");if(!n){globalThis.alert("Your browser blocked the print window. Allow pop-ups and try again.");return}n.document.open(),n.document.write(o),n.document.close(),n.focus(),n.print()}getStandaloneDiagramSvg(e){let t=this.outputElement?.querySelector(`.docdiagram[data-diagram-index="${e}"] svg`);if(!t)return null;let o=t.closest(".docdiagram"),n=globalThis.getComputedStyle(o||t).backgroundColor,i=t.cloneNode(!0);i.setAttribute("xmlns","http://www.w3.org/2000/svg"),i.removeAttribute("style"),i.querySelectorAll(".docdiagram-inline-editor-host, .docdiagram-resize-handle, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-connection-preview").forEach(c=>c.remove()),i.querySelectorAll(".docdiagram-node-selected, .docdiagram-edge-selected").forEach(c=>{c.classList.remove("docdiagram-node-selected","docdiagram-edge-selected")});let s=document.createElementNS("http://www.w3.org/2000/svg","style");s.textContent=['svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}',".docdiagram-edge,.docdiagram-edge-hit{fill:none}",".docdiagram-edge-label{font-size:15px}",".docdiagram-node-label{font-size:16px;font-weight:650}",".docdiagram-node-subtitle{font-size:13px}"].join(""),i.insertBefore(s,i.firstChild);let a=document.createElementNS("http://www.w3.org/2000/svg","rect");return a.setAttribute("class","docdiagram-export-background"),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("fill",n),i.insertBefore(a,s.nextSibling),i}canExportLastValidSource(){return!(this.sourceEditor?.hasError&&this.sourceEditor.hasUnsavedDraft)||globalThis.confirm("Source has errors. Save the last valid version instead?")}getDiagramExportUrl(e,t){let o=this.getStandaloneDiagramSvg(e);return o?URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(o)],{type:t})):(globalThis.alert("The diagram is no longer available to export."),null)}getDiagramExportName(e){return`${this.slug(document.title)||"diagram"}-${e+1}`}downloadHtml(e,t,o=""){let n=new Blob([`<!doctype html>
${e}`],{type:"text/html;charset=utf-8"}),i=document.createElement("a"),s=o||this.slug(document.title);i.href=URL.createObjectURL(n),i.download=`${s||"document"}${t}.html`,i.click(),URL.revokeObjectURL(i.href)}slug(e){return e.toLowerCase().replace(/[^\w]+/g,"-").replace(/^-|-$/g,"")}};var Kt=class{constructor(e,t){this.state=e;this.renderMarkdown=t}render(e,t=!1){let o=[...this.state.diagramModels],n=this.state.documentTheme,i=this.state.documentThemeSetting,s=this.state.documentColorScheme,a=this.state.documentDoctype;this.state.diagramModels.length=0;try{let c=t?Lt(e):mt(e);this.state.documentTheme=c.resolvedTheme,this.state.documentThemeSetting=c.theme,this.state.documentColorScheme=c.colourScheme,this.state.documentDoctype=c.doctype;let d=this.renderMarkdown(c.content);return this.state.expandedDiagramIndex!==null&&!this.state.diagramModels[this.state.expandedDiagramIndex]&&(this.state.expandedDiagramIndex=null,this.state.diagramModels.length=0,d=this.renderMarkdown(c.content)),{ok:!0,markup:d}}catch(c){let d=c instanceof Error?c.message:String(c);return this.state.diagramModels.length=0,this.state.diagramModels.push(...o),t&&(this.state.documentTheme=n,this.state.documentThemeSetting=i,this.state.documentColorScheme=s,this.state.documentDoctype=a),{ok:!1,message:d}}}};var Zt=class{constructor(e){this.sourceElement=e}read(){return this.sourceElement?.content.textContent||""}write(e){this.sourceElement?.content.replaceChildren(document.createTextNode(e))}},Jt=class{constructor(e){this.sourceStore=e;this.savedSource="";this.lintReportUnsaved=!1}get source(){return this.sourceStore.read()}set source(e){this.sourceStore.write(e)}captureSavedSource(){this.savedSource=this.source}markSaved(){this.captureSavedSource(),this.lintReportUnsaved=!1}markLintReportUnsaved(){this.lintReportUnsaved=!0}hasUnsavedChanges(e=!1){return this.source!==this.savedSource||e||this.lintReportUnsaved}bake(){try{let e=qt(this.source);return e.baked&&(this.source=e.source),{baked:e.baked,failed:!1}}catch{return{baked:0,failed:!0}}}persistDiagramModels(e){let t=0,o=new Map;for(let s of e){let a=s.id;typeof a=="string"&&o.set(a,[...o.get(a)||[],s])}let n=new Map([...o].flatMap(([s,a])=>a.length===1?[[s,a[0]]]:[])),i=this.source.replace(/\r\n/g,`
`).replace(/^((?: {0,3}> ?)*)```diagram\s*\n([\s\S]*?)^((?: {0,3}> ?)*)```$/gm,(s,a,c,d)=>{let u=c.replace(/^(?: {0,3}> ?)+/gm,"").match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m)?.slice(1).find(Boolean),g=u&&n.get(u)||e[t];t+=1;let h=g?He(g):"",f=h?h.split(`
`).map(m=>`${a}${m}`).join(`
`):"";return`${a}\`\`\`diagram
${f?`${f}
`:""}${d}\`\`\``});return this.source=i,i}};function aa(r){let e=r.querySelector("svg");if(!e||typeof e.getBBox!="function")return null;let t;try{t=e.getBBox()}catch{return null}let o=e.viewBox?.baseVal?.height||0,n=e.getBoundingClientRect();if(!o||!n.height||!t.height)return null;let i=n.height/o,s=getComputedStyle(r),a=n.top-r.getBoundingClientRect().top+r.scrollTop,c=(parseFloat(s.paddingBottom)||0)+(parseFloat(s.borderBottomWidth)||0),d=Math.min(Math.max(t.y,0),40)*i,l=Math.ceil(a+(t.y+t.height)*i+d+c);return Math.min(l,r.offsetHeight)}var sa="template[data-skryb-lint]",Qt=class{constructor(e,t){this.sourceElement=e;this.outputElement=t;this.state=Zo();this.pendingViewportFits=new Set;this.autoFittedDiagrams=new Map;this.session=new Jt(new Zt(e)),this.renderer=new Kt(this.state,o=>this.renderMarkdown(o)),this.chrome=new Vt(this.state,t),this.sourceEditor=t?new _t({outputElement:t,getSource:()=>this.getSource(),getDocumentTheme:()=>this.getDocumentTheme(),getDocumentColourScheme:()=>this.state.documentColorScheme,renderDocument:(o,n)=>this.renderDocument(o,n),stopDiagramEditing:()=>this.stopDiagramEditing(),closeDocumentMenu:()=>this.closeDocumentMenu()}):null,this.diagramEditor=t?new Wt({outputElement:t,state:this.state,persistDiagramModels:()=>this.persistDiagramModels(),renderDocument:()=>this.renderDocument()}):null,this.exportService=new Xt(this.session,this.state,t,this.sourceEditor),this.lifecycle=t?new Ut({outputElement:t,isAutoTheme:()=>this.state.documentThemeSetting==="auto",renderDocument:()=>{this.renderDocument()},refitDiagramViewports:()=>this.refitDiagramViewports(),hasUnsavedChanges:()=>this.session.hasUnsavedChanges(this.sourceEditor?.hasUnsavedDraft),isSourceEditorOpen:()=>!!this.sourceEditor?.isOpen,toggleSourceEditor:()=>this.sourceEditor?.isOpen?this.sourceEditor.close():this.sourceEditor?.open(),downloadDocument:()=>this.downloadDocument(),closeDocumentMenu:()=>this.closeDocumentMenu(),closeDiagramExportMenus:()=>this.closeDiagramExportMenus(),getExpandedDiagramIndex:()=>this.state.expandedDiagramIndex,toggleDiagramExpansion:o=>this.toggleDiagramExpansion(o),hasSelection:()=>!!(this.state.selectedNode||this.state.selectedEdge||this.state.selectedSequenceElement),clearSelection:()=>{_e(this.state),this.renderDocument()},revealSource:o=>this.sourceEditor?.reveal(o)}):null}getSource(){return this.session.source}setSource(e){this.session.source=e}getDocumentTheme(){return this.state.documentTheme}stopDiagramEditing(){this.state.editingDiagramIndex!==null&&(this.state.editingDiagramIndex=null,this.state.editSessionDiagram=null,_e(this.state))}renderDiagram(e,t,o){return _o(e,t,{figure:o,colourScheme:this.state.documentColorScheme,state:{...this.state,documentTheme:this.state.documentTheme,documentColorScheme:this.state.documentColorScheme},onDiagram:(n,i)=>{this.state.diagramModels[n]=i}})}renderMarkdown(e,t={diagramIndex:0}){return Ir(e,t,{renderDiagram:(o,n,i)=>this.renderDiagram(o,n,i),documentColorScheme:this.state.documentColorScheme,documentTheme:this.state.documentTheme})}persistDiagramModels(){let e=this.session.persistDiagramModels(this.state.diagramModels);this.sourceEditor?.syncSource(e)}renderDocument(e=this.getSource(),{preserveOnError:t=!1}={}){if(!this.outputElement)return!1;for(let a of this.outputElement.querySelectorAll(".docdiagram")){let c=Number(a.dataset.diagramIndex);if(this.pendingViewportFits.has(c)){this.state.diagramViewportHeights.delete(c);continue}c!==this.state.expandedDiagramIndex&&this.state.diagramViewportHeights.set(c,a.offsetHeight)}let o={x:globalThis.scrollX||0,y:globalThis.scrollY||0},n=this.renderer.render(e,t);if(!n.ok)return t?(this.sourceEditor?.setError(n.message),!1):(this.applyPageTheme(this.state.documentTheme),this.removeToolbarChrome(),this.outputElement.innerHTML=`<section class="docdiagram-error"><strong>Document could not be rendered.</strong><br>${v(n.message)}</section>`,this.sourceEditor?.renderTray(),!1);this.setSource(e);let i=n.markup;this.sourceEditor?.clearError(),this.outputElement.dataset.theme=this.state.documentTheme,this.outputElement.dataset.colourScheme=this.state.documentColorScheme,this.applyDocumentColourScheme(this.outputElement),this.outputElement.dataset.format=this.state.documentFormat,this.applyPageTheme(this.state.documentTheme),this.outputElement.innerHTML=i,this.removeToolbarChrome(),this.createToolbar(),this.sourceEditor?.renderTray();let s=document.querySelector(".docdiagram-source-tray");return s&&this.applyDocumentColourScheme(s),this.diagramEditor?.enableCanvasPanning(),this.diagramEditor?.enableSequenceSelection(),this.fitDiagramViewports(),this.state.editingDiagramIndex!==null&&this.diagramEditor?.enableEditing(),globalThis.scrollTo?.(o.x,o.y),!0}fitDiagramViewports(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram")){let t=Number(e.dataset.diagramIndex);if(this.state.diagramViewportHeights.has(t)||t===this.state.expandedDiagramIndex)continue;let o=aa(e);o&&(this.state.diagramViewportHeights.set(t,o),this.autoFittedDiagrams.set(t,o),e.style.boxSizing="border-box",e.style.minHeight="0",e.style.height=`${o}px`)}this.pendingViewportFits.clear()}}refitDiagramViewports(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram")){let t=Number(e.dataset.diagramIndex),o=this.autoFittedDiagrams.get(t);if(!(o===void 0||t===this.state.expandedDiagramIndex)){if(e.offsetHeight!==o){this.autoFittedDiagrams.delete(t);continue}e.style.removeProperty("height"),e.style.removeProperty("min-height"),this.state.diagramViewportHeights.delete(t)}}this.fitDiagramViewports()}}closeDocumentMenu(){this.chrome.closeDocumentMenu()}bakeOnOpen(){let{baked:e,failed:t}=this.session.bake();(e||t||this.lintRequestedByUrl())&&this.writeLintReport()}lintRequestedByUrl(){let e=globalThis.location?.search||"";return/(^|[?&])skryb-lint(=|&|$)/.test(e)}writeLintReport(){let e=this.getSource(),t;try{t=Pr(e)}catch(n){t={sourceHash:We(e),messages:[{severity:"error",rule:"schema",message:n instanceof Error?n.message:String(n)}],errorCount:1,warningCount:0}}let o=document.querySelector(sa)||document.createElement("template");return o.dataset.skrybLint="",o.content.replaceChildren(document.createTextNode(JSON.stringify({errors:t.errorCount,warnings:t.warningCount,sourceHash:t.sourceHash,messages:t.messages},null,2))),o.isConnected||document.body.append(o),this.session.markLintReportUnsaved(),t}showLintReport(){let e=this.writeLintReport();if(!e)return;let t=`${e.errorCount} error${e.errorCount===1?"":"s"}, ${e.warningCount} warning${e.warningCount===1?"":"s"}`,o=document.querySelector(".docdiagram-lint-dialog")||document.body.appendChild(document.createElement("dialog"));o.className="docdiagram-lint-dialog",o.replaceChildren();let n=document.createElement("h2");n.textContent=`Document check: ${t}`;let i=document.createElement("div");i.className="docdiagram-lint-messages",e.messages.length||(i.textContent="Nothing to report. Every check passed.");for(let a of e.messages){let c=a.location?.subjects.find(l=>l.sourceRange)?.sourceRange||a.location?.fenceRange,d=c&&this.sourceEditor?document.createElement("button"):document.createElement("pre");d.textContent=Io({sourceHash:e.sourceHash,messages:[a],errorCount:a.severity==="error"?1:0,warningCount:a.severity==="warning"?1:0}),d instanceof HTMLButtonElement&&c&&(d.type="button",d.title=`Reveal source at line ${c.start.line}`,d.addEventListener("click",()=>{o.close(),this.sourceEditor?.revealSourceRange(c,e.sourceHash)})),i.append(d)}let s=document.createElement("button");s.type="button",s.textContent="Close",s.addEventListener("click",()=>o.close()),o.append(n,i,s),o.showModal()}downloadDocument(){this.exportService.downloadDocument()}async downloadOfflineDocument(){await this.exportService.downloadOfflineDocument()}boot(){if(!(!this.sourceElement||!this.outputElement)){Xo(),this.session.captureSavedSource(),this.bakeOnOpen(),this.lifecycle?.bind();try{Tt(this.getSource()).frontmatter.doctype==="diagram"&&(this.state.expandedDiagramIndex=0)}catch{this.state.expandedDiagramIndex=null}this.renderDocument()}}getCoreApi(){return{bakeDocumentSource:qt,spliceBakedFences:kr,lintDocument:Pr}}createToolbar(){if(!this.outputElement)return;let e=document.createElement("section");e.className="docdiagram-toolbar",e.dataset.editing=String(this.state.editingDiagramIndex!==null),e.dataset.theme=this.state.documentTheme,e.dataset.colourScheme=this.state.documentColorScheme,e.dataset.format=this.state.documentFormat;let t=this.getSelectedNode(),o=t?null:this.getSelectedEdge(),n=!t&&!o?this.getSelectedSequenceElement():null,i=t&&this.state.selectedNode?this.state.diagramModels[this.state.selectedNode.diagramIndex]:o&&this.state.selectedEdge?this.state.diagramModels[this.state.selectedEdge.diagramIndex]:n&&this.state.selectedSequenceElement?this.state.diagramModels[this.state.selectedSequenceElement.diagramIndex]:null;e.innerHTML=['<button type="button" class="docdiagram-menu-toggle" aria-label="Document menu" aria-expanded="false" title="Document menu">\u2630</button>','<div class="docdiagram-menu" hidden>','<label class="docdiagram-theme-control">Theme<select class="docdiagram-theme-select">',`<option value="auto"${this.state.documentThemeSetting==="auto"?" selected":""}>Auto</option>`,`<option value="light"${this.state.documentThemeSetting==="light"?" selected":""}>Light</option>`,`<option value="dark"${this.state.documentThemeSetting==="dark"?" selected":""}>Dark</option>`,"</select></label>",`<label class="docdiagram-theme-control">Colour scheme<select class="docdiagram-colour-scheme-select">${Object.entries($e).map(([c,d])=>`<option value="${c}"${this.state.documentColorScheme===c?" selected":""}>${d.label}</option>`).join("")}</select></label>`,'<label class="docdiagram-theme-control">Format<select class="docdiagram-format-select">',`<option value="centered"${this.state.documentFormat==="centered"?" selected":""}>Centered</option>`,`<option value="full-width"${this.state.documentFormat==="full-width"?" selected":""}>Full width</option>`,"</select></label>",'<label class="docdiagram-theme-control">Opens as<select class="docdiagram-doctype-select">',`<option value="document"${this.state.documentDoctype==="document"?" selected":""}>Document</option>`,`<option value="diagram"${this.state.documentDoctype==="diagram"?" selected":""}>Diagram</option>`,"</select></label>",'<button type="button" class="docdiagram-edit-source">Edit source</button>','<button type="button" class="docdiagram-lint">Check document</button>','<button type="button" class="docdiagram-print-document">Print / Save as PDF</button>','<button type="button" class="docdiagram-save">Save As</button>','<button type="button" class="docdiagram-offline-save">Save for Offline</button>',"</div>",t&&i?.type==="flowchart"?`<div class="docdiagram-inspector" data-kind="node">${en(i,t,this.state.documentColorScheme,this.state.documentTheme)}</div>`:o&&i?`<div class="docdiagram-inspector" data-kind="edge">${tn(i,o)}</div>`:n&&i?`<div class="docdiagram-inspector" data-kind="sequence">${rn(i,this.state.selectedSequenceElement,n,this.state.documentColorScheme,this.state.documentTheme)}</div>`:""].join("");let s=e.querySelector(".docdiagram-menu-toggle"),a=e.querySelector(".docdiagram-menu");s?.addEventListener("click",()=>{if(!a)return;let c=a.hidden;a.hidden=!c,s.setAttribute("aria-expanded",String(c))}),e.querySelector(".docdiagram-print-document")?.addEventListener("click",()=>this.printDocument()),e.querySelector(".docdiagram-save")?.addEventListener("click",()=>this.downloadDocument()),e.querySelector(".docdiagram-offline-save")?.addEventListener("click",async c=>{let d=c.currentTarget;d.disabled=!0;try{await this.downloadOfflineDocument()}catch(l){let u=l instanceof Error?l.message:String(l);console.error("Offline export failed.",l),globalThis.alert(`Save for Offline failed: ${u}`)}finally{d.disabled=!1}}),e.querySelector(".docdiagram-edit-source")?.addEventListener("click",()=>{this.closeDocumentMenu(),this.sourceEditor?.open()}),e.querySelector(".docdiagram-lint")?.addEventListener("click",()=>{this.closeDocumentMenu(),this.showLintReport()}),e.querySelector(".docdiagram-theme-select")?.addEventListener("change",c=>{this.setSource(Do(this.getSource(),c.currentTarget.value)),this.renderDocument()}),e.querySelector(".docdiagram-colour-scheme-select")?.addEventListener("change",c=>{this.setSource($o(this.getSource(),c.currentTarget.value)),this.renderDocument()}),e.querySelector(".docdiagram-format-select")?.addEventListener("change",c=>{this.state.documentFormat=c.currentTarget.value==="full-width"?"full-width":"centered",this.renderDocument()}),e.querySelector(".docdiagram-doctype-select")?.addEventListener("change",c=>{let d=c.currentTarget.value==="diagram"?"diagram":"document";this.setSource(Fo(this.getSource(),d)),this.setExpandedDiagram(d==="diagram"?0:null),this.renderDocument()}),this.outputElement.before(e),this.applyDocumentColourScheme(e),t&&this.state.selectedNode?on(this,e,this.state.selectedNode.diagramIndex,this.state.selectedNode.nodeId):o&&this.state.selectedEdge?nn(this,e,this.state.selectedEdge.diagramIndex,this.state.selectedEdge.edgeIndex):n&&this.state.selectedSequenceElement&&an(this,e,n),this.wireChromeControls(),this.dockExpandedDiagramToolbar(e)}dockExpandedDiagramToolbar(e){this.chrome.dockExpandedDiagramToolbar(e)}getSelectedNode(){let e=this.state.selectedNode,t=e?this.state.diagramModels[e.diagramIndex]:null;return e&&t?.type==="flowchart"&&Xe(this.state,e.diagramIndex)&&de(t,e.nodeId)?.node||null}getSelectedEdge(){let e=this.state.selectedEdge,t=e?this.state.diagramModels[e.diagramIndex]:null;return e&&t?.type==="flowchart"&&Xe(this.state,e.diagramIndex)&&t.edges[e.edgeIndex]||null}getSelectedSequenceElement(){let e=this.state.selectedSequenceElement,t=e?this.state.diagramModels[e.diagramIndex]:null;return!e||t?.type!=="sequence"||!Xe(this.state,e.diagramIndex)?null:e.kind==="participant"?t.participants?.find(o=>o.id===e.id)||null:e.kind==="message"?t.messages?.[e.index]||null:t.notes?.[e.index]||null}applyDocumentColourScheme(e){this.chrome.applyDocumentColourScheme(e)}wireChromeControls(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram-export-toggle"))e.addEventListener("click",()=>{let t=e.parentElement?.querySelector(".docdiagram-diagram-export-menu");if(!t)return;let o=t.hidden;this.closeDiagramExportMenus(),t.hidden=!o,e.setAttribute("aria-expanded",String(o))});for(let e of this.outputElement.querySelectorAll(".docdiagram-toggle-expand"))e.addEventListener("click",()=>this.toggleDiagramExpansion(Number(e.dataset.diagramIndex)));for(let e of this.outputElement.querySelectorAll(".docdiagram-open-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.openDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-save-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.downloadDiagramDocument(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-download-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.downloadDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-print-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.printDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-zoom-in, .docdiagram-zoom-out"))e.addEventListener("click",()=>{let t=Number(e.dataset.diagramIndex),o=this.state.diagramZooms.get(t)||100,n=e.classList.contains("docdiagram-zoom-in")?25:-25;this.state.diagramZooms.set(t,kt(o+n)),this.renderDocument()});for(let e of this.outputElement.querySelectorAll(".docdiagram-fit"))e.addEventListener("click",()=>{let t=Number(e.dataset.diagramIndex);this.state.diagramZooms.set(t,100),this.state.diagramCameraOffsets.delete(t),this.pendingViewportFits.add(t),this.renderDocument()});for(let e of this.outputElement.querySelectorAll(".docdiagram-start-editing"))e.addEventListener("click",()=>{let t=Number(e.dataset.diagramIndex),o=this.state.diagramModels[t];o&&(this.state.editSessionDiagram=Ne(He(o),this.state.documentColorScheme),this.state.editingDiagramIndex=t,_e(this.state),this.renderDocument())});for(let e of this.outputElement.querySelectorAll(".docdiagram-done-editing"))e.addEventListener("click",()=>this.exitEditing(this.state.editingDiagramIndex,!1));for(let e of this.outputElement.querySelectorAll(".docdiagram-cancel-editing"))e.addEventListener("click",()=>this.exitEditing(this.state.editingDiagramIndex,!0));for(let e of this.outputElement.querySelectorAll(".docdiagram-create-node"))e.addEventListener("click",()=>this.createNewNode(Number(e.dataset.diagramIndex)))}}printDocument(){this.closeDocumentMenu(),this.closeDiagramExportMenus(),this.stopDiagramEditing(),this.state.expandedDiagramIndex=null,this.state.diagramViewportHeights.clear();for(let e of this.state.diagramZooms.keys())this.state.diagramZooms.set(e,100);this.state.diagramCameraOffsets.clear(),this.renderDocument(),globalThis.print()}closeDiagramExportMenus(){this.chrome.closeDiagramExportMenus()}exitEditing(e,t){e!==null&&(t&&this.state.editSessionDiagram&&(this.state.diagramModels[e]=this.state.editSessionDiagram,this.persistDiagramModels()),this.state.editingDiagramIndex=null,this.state.editSessionDiagram=null,_e(this.state),this.renderDocument())}createNewNode(e){let t=this.state.diagramModels[e];if(!t||t.type!=="flowchart")return;let o=no(t);this.state.selectedNode={diagramIndex:e,nodeId:o.id},this.state.selectedEdge=null,this.persistDiagramModels(),this.renderDocument()}applyPageTheme(e){this.chrome.applyPageTheme(e)}setExpandedDiagram(e){let t=this.state.expandedDiagramIndex;if(t!==e){this.state.expandedDiagramIndex=e;for(let o of[t,e])o!==null&&(this.state.diagramZooms.set(o,100),this.state.diagramCameraOffsets.delete(o),this.pendingViewportFits.add(o),this.autoFittedDiagrams.delete(o))}}toggleDiagramExpansion(e){this.setExpandedDiagram(this.state.expandedDiagramIndex===e?null:e),this.closeDiagramExportMenus(),this.renderDocument()}removeToolbarChrome(){this.chrome.removeToolbar()}};var ca=document.querySelector("#source"),da=document.querySelector("#rendered-document"),un=new Qt(ca,da),la=globalThis;la.DocDiagramCore=un.getCoreApi();un.boot();})();
