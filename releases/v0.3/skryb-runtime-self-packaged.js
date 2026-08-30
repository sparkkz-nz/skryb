/*! Skryb runtime | Copyright 2026 Stuart Parkinson | Apache-2.0 | https://github.com/sparkkz-nz/skryb */
"use strict";(()=>{var ke=["background","pale","light","neutral","dark","accent-soft","accent","accent-strong","note","success","warning","danger","highlight","none"],io=["flowchart","sequence"],wt=["auto","light","dark"],ao=["right","down","left","up"],Jo=["actor"],Et=["solid","dashed"],tt=["rounded-rectangle","circle","oval","database","diamond","rhombus","flattened-hexagon","chevron","right-chevron","document","text"],ne=["top","right","bottom","left"],ot=["orthogonal","straight","curved"],Ie=["solid","dotted","dashed","double"],Fe=["none","arrow","circle"],mt={start:"none",end:"arrow"},Qo=["top","center"],en=["left","center","right"],so={width:50,height:20},co={width:50,height:20},z={shape:"rounded-rectangle",label:"New node",width:190,height:80},Le=(t,e,o,n,r,i,s,a,c,l,d,u,f)=>({background:t,pale:e,light:o,neutral:n,dark:r,"accent-soft":i,accent:s,"accent-strong":a,note:c,success:l,warning:d,danger:u,highlight:f,none:x("None","none","none",t.text)}),x=(t,e,o,n,r,i)=>({label:t,fill:e,stroke:o,text:n,gradient:r,glow:i}),ue={classic:{label:"Classic",light:Le(x("Background","#FFFFFF","#D1D5DB","#111827"),x("Pale","#F3F4F6","#9CA3AF","#1F2937"),x("Light","#E5E7EB","#6B7280","#1F2937"),x("Neutral","#D1D5DB","#4B5563","#111827"),x("Dark","#374151","#111827","#F9FAFB"),x("Soft","#DBEAFE","#60A5FA","#1E3A8A"),x("Accent","#BFDBFE","#2563EB","#1E3A8A","#EFF6FF"),x("Strong","#2563EB","#1D4ED8","#FFFFFF","#3B82F6","#60A5FA"),x("Note","#DBEAFE","#2563EB","#1E3A8A"),x("Success","#DCFCE7","#16A34A","#14532D"),x("Warning","#FFEDD5","#EA580C","#7C2D12"),x("Danger","#FEE2E2","#DC2626","#7F1D1D"),x("Highlight","#FEF9C3","#CA8A04","#713F12")),dark:Le(x("Background","#111827","#374151","#F9FAFB"),x("Pale","#1F2937","#4B5563","#F3F4F6"),x("Light","#374151","#6B7280","#F9FAFB"),x("Neutral","#4B5563","#9CA3AF","#FFFFFF"),x("Dark","#9CA3AF","#D1D5DB","#111827"),x("Soft","#172554","#3B82F6","#DBEAFE"),x("Accent","#1E3A8A","#60A5FA","#EFF6FF","#172554"),x("Strong","#2563EB","#93C5FD","#FFFFFF","#1D4ED8","#60A5FA"),x("Note","#172554","#60A5FA","#DBEAFE"),x("Success","#052E16","#4ADE80","#DCFCE7"),x("Warning","#431407","#FB923C","#FFEDD5"),x("Danger","#450A0A","#F87171","#FEE2E2"),x("Highlight","#422006","#FACC15","#FEF9C3"))},fire:{label:"Fire",light:Le(x("Background","#FBFAF9","#D9D2CC","#1F1B19"),x("Pale","#F4F1ED","#C7BDB6","#282320"),x("Light","#E9E2DC","#A2948B","#282320"),x("Neutral","#D5CAC2","#8A6D59","#241B15"),x("Dark","#3D312A","#221913","#FFF2E4"),x("Soft","#FDECDD","#E7A672","#7A3B12"),x("Accent","#FBD8BA","#D2691E","#6A2D07","#FFF3E8"),x("Strong","#D2521C","#A6380D","#FFFFFF","#F0873C","#FFA867"),x("Note","#F7EBDD","#A9784C","#523A22"),x("Success","#E7F2D9","#5F8C2B","#2C4310"),x("Warning","#FFEACB","#E08600","#6D3C00"),x("Danger","#FFE1DB","#D93A1F","#6D1708"),x("Highlight","#FFF6CB","#D9A400","#5B4200")),dark:Le(x("Background","#171413","#3A3330","#E7E2DE"),x("Pale","#1F1B19","#4A413C","#EDE8E3"),x("Light","#2B2522","#695C54","#F5EFE9"),x("Neutral","#3E3430","#A08674","#FFF3E7"),x("Dark","#C9B29F","#E4D3C4","#191412"),x("Soft","#3A2415","#C4763A","#FFE7D2"),x("Accent","#5A2E12","#F0873C","#FFEDDD","#47240F"),x("Strong","#E2571B","#FFB27A","#FFFFFF","#B33C0E","#FF8A3D"),x("Note","#302319","#BE8C5A","#F6E4D0"),x("Success","#1F2E14","#8FBF52","#E7F4D5"),x("Warning","#4A2A05","#FFA726","#FFE9C4"),x("Danger","#4B1108","#FF6B52","#FFE0DA"),x("Highlight","#453206","#FFD54A","#FFF6D2"))},ice:{label:"Ice",light:Le(x("Background","#F8FCFF","#D8EAF4","#123040"),x("Pale","#EDF8FC","#B8DCEB","#123040"),x("Light","#D9F2FF","#88BED7","#123040"),x("Neutral","#B8DCEB","#4A8BAA","#123040"),x("Dark","#21536C","#123040","#F4FBFF"),x("Soft","#DDF5FF","#75C6E8","#0F4C67"),x("Accent","#BDEAFF","#2E91BF","#083B55","#E8F9FF"),x("Strong","#1976A3","#0E5E85","#FFFFFF","#43B3E8","#8DDBF7"),x("Note","#DCEFFF","#3182CE","#123A63"),x("Success","#DDF7EE","#1E9B68","#104B35"),x("Warning","#FFF0D8","#D97918","#6B3510"),x("Danger","#FFE4E7","#D9485F","#651C2A"),x("Highlight","#FFF8C9","#C69A13","#5E4900")),dark:Le(x("Background","#0C1D29","#26475A","#E8F7FF"),x("Pale","#112B3A","#376176","#E8F7FF"),x("Light","#173B4D","#4A7B92","#F0FAFF"),x("Neutral","#28576B","#79AFC3","#F4FBFF"),x("Dark","#A3D6E9","#D4F2FF","#0C1D29"),x("Soft","#10384E","#4AB5DF","#DDF7FF"),x("Accent","#15526D","#72CEF2","#ECFBFF","#123C52"),x("Strong","#2186B5","#94DCF5","#FFFFFF","#176A91","#64CEF2"),x("Note","#122E4B","#62A9F5","#DCEFFF"),x("Success","#103D32","#4DD69A","#DDF7EE"),x("Warning","#4B2C0D","#F3A34C","#FFF0D8"),x("Danger","#4B1923","#F07A8C","#FFE4E7"),x("Highlight","#4A3D0A","#E6C54B","#FFF8C9"))},midnight:{label:"Midnight",light:Le(x("Background","#F5F7FC","#CAD3E4","#101D38"),x("Pale","#E9EEF8","#B6C4DC","#172744"),x("Light","#D9E2F2","#91A5C5","#172744"),x("Neutral","#C1CEE1","#6F85A6","#14223C"),x("Dark","#243B63","#1B3155","#F5F8FF"),x("Soft","#DCE7FA","#93A9CE","#1A3158"),x("Accent","#C9DBFA","#5E7FB4","#152D54","#D6E3F8"),x("Strong","#345F9D","#2C548D","#FFFFFF","#416EAE","#6F91C2"),x("Note","#DBE7F8","#5277AE","#1D355D"),x("Success","#DDEFE8","#3E886A","#173F31"),x("Warning","#F8E9D1","#B9702D","#5D3513"),x("Danger","#F4E0E5","#AD5570","#591F30"),x("Highlight","#F8F0C9","#A88222","#554300")),dark:Le(x("Background","#081426","#1F3554","#E8F0FF"),x("Pale","#0D1C32","#2A4265","#E5EEFF"),x("Light","#132843","#3A557A","#EDF4FF"),x("Neutral","#1E385B","#59779E","#EEF5FF"),x("Dark","#91A9C9","#AFC2DB","#0A172A"),x("Soft","#112B4D","#527AA9","#E1EEFF"),x("Accent","#173B68","#6389BA","#ECF4FF","#1B416E"),x("Strong","#2C629F","#6D98CD","#FFFFFF","#356FAF","#6D98CD"),x("Note","#132A4A","#6D96C8","#DDEAFF"),x("Success","#123B31","#5FBA91","#DDF3E8"),x("Warning","#422C14","#D09150","#FBEAD1"),x("Danger","#431E2B","#D27691","#F8E1E8"),x("Highlight","#403710","#C5A543","#FAF2CA"))},paper:{label:"Paper",light:Le(x("Background","#FFFDF7","#E0D8C8","#332D24"),x("Pale","#F7F1E5","#D4C5AD","#40372C"),x("Light","#EEE3D0","#BBA98B","#40372C"),x("Neutral","#D8C8AF","#8C765A","#332D24"),x("Dark","#514536","#332D24","#FFFCF5"),x("Soft","#EEE8DC","#A99879","#44392B"),x("Accent","#E8DDC7","#947044","#3E2D1D","#F7F0E4"),x("Strong","#81592F","#62401F","#FFFFFF","#A77A44","#D3B37B"),x("Note","#E5EFF4","#517B98","#233E50"),x("Success","#E4F0DF","#5D8A54","#294527"),x("Warning","#F9E8CD","#B96B28","#64350D"),x("Danger","#F5E0DA","#AD5342","#5D251C"),x("Highlight","#F8F0BD","#A78216","#584600")),dark:Le(x("Background","#29251F","#554B3E","#F9F2E6"),x("Pale","#373027","#6F6250","#F9F2E6"),x("Light","#4A4033","#8B7B64","#FFF9EE"),x("Neutral","#675947","#A89880","#FFF9EE"),x("Dark","#CBBCA4","#E8DBC7","#30291F"),x("Soft","#463B2D","#B6A080","#FFF8E9"),x("Accent","#5C482F","#D1B98A","#FFF9EE","#483622"),x("Strong","#916C3C","#E0C28B","#FFFFFF","#705029","#CFAA69"),x("Note","#273A46","#7DB2D0","#E5EFF4"),x("Success","#31452B","#9BC58F","#E4F0DF"),x("Warning","#503016","#E3A060","#F9E8CD"),x("Danger","#51281F","#DA8A79","#F5E0DA"),x("Highlight","#4A3D12","#D6BC48","#F8F0BD"))}},tn={light:{edge:{stroke:"#52616B",strokeWidth:2,text:"#3E4A54"},node:{fill:"#EAF2FF",stroke:"#3574C7",strokeWidth:2,text:"#17202A"}},dark:{edge:{stroke:"#B8C7D5",strokeWidth:2,text:"#D9E4ED"},node:{fill:"#193A61",stroke:"#71AEF7",strokeWidth:2,text:"#F3F8FC"}}};var on=["note","info","warning","success"],nn={2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))","2fr 1fr":"minmax(0, 2fr) minmax(0, 1fr)","1fr 2fr":"minmax(0, 1fr) minmax(0, 2fr)"};function gt(t){if(t==="light"||t==="dark")return t;if(t==="auto")return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches?"dark":"light";throw new Error(`Unsupported document theme: ${t}`)}function ht(t,e="light"){let o=gt(e),n=tn[o];if(!n)throw new Error(`Unsupported diagram theme: ${o}`);return n}function ye(t,e,o){return(Object.prototype.hasOwnProperty.call(ue,t)?ue[t]:void 0)?.[gt(e)]?.[o]||null}function Ne(t,e){return{...t,...e||{}}}function St(t,e){return e&&t.styles?.[e]||null}function Ge(t,e,o="light",n="classic"){let i=ht(t,o).node,s=e.shape==="text"?{fill:"none",stroke:"none"}:null,a=St(t,e.class),c=a?.palette?ye(n,o,a.palette):null,l=e.palette?ye(n,o,e.palette):null;return Ne(Ne(Ne(Ne(Ne(i,s),c),a?.style),l),e.style)}function nt(t,e,o="light",n="classic"){let r=ht(t,o),i=e.palette?ye(n,o,e.palette):null;return Ne(Ne(r.node,i),e.style)}function vt(t,e,o="light",n="classic"){let r=ht(t,o),i=ue[n][gt(o)],s=St(t,e.class);return Ne(Ne({...r.edge,stroke:i.neutral.fill,text:i.background.text},s?.style),e.style)}function lo(t,e){let o=e==="start"?t.start:t.end;return typeof o=="string"&&Fe.includes(o)?o:mt[e]}function oe(t){let e=Number(t.canvas?.grid);return Number.isFinite(e)&&e>0?e:0}function R(t,e){return e?Math.round(t/e)*e:Math.round(t)}function kt(t,e,o){let n=R(t,o),r=o?Math.ceil(e/o)*o:e;return Math.max(r,n)}function rn(t){return{width:Number(t.size?.width)||z.width,height:Number(t.size?.height)||z.height}}var G=class{constructor(e){this.entriesById=new Map;this.entriesByNode=new Map;this.ranges=new Map;let o=[],n=(r,i,s,a)=>{for(let c of r){let l={x:s.x+(Number(c.position?.x)||0),y:s.y+(Number(c.position?.y)||0)},d={node:c,parent:i,siblings:r,position:l,bounds:{...l,...rn(c)},depth:a},u=o.length;o.push(d),this.entriesById.set(c.id,this.entriesById.get(c.id)||d),this.entriesByNode.set(c,d),n(c.children||[],c,l,a+1),this.ranges.set(c,{start:u,end:o.length})}};n(e.nodes,null,{x:0,y:0},0),this.entries=o}getById(e){return this.entriesById.get(e)||null}getByNode(e){return this.entriesByNode.get(e)||null}contains(e,o){let n=this.ranges.get(e),r=this.ranges.get(o);return!!(n&&r&&r.start>n.start&&r.start<n.end)}isRelated(e,o){return e===o||this.contains(e,o)||this.contains(o,e)}descendants(e){let o=this.ranges.get(e);return o?this.entries.slice(o.start+1,o.end):[]}};function me(t,e){return new G(t).getById(e)}function rt(t,e){return new G(t).getByNode(e)?.bounds||{x:0,y:0,...rn(e)}}function an(t,e){var p;let o=new G(t),n=o.getById(e);if(!n)return null;let{node:r,siblings:i,position:s}=n,{width:a,height:c}=n.bounds,l={x:s.x+a/2,y:s.y+c/2},u=o.entries.filter(h=>h.node!==r&&!o.contains(r,h.node)).filter(({bounds:h})=>l.x>=h.x&&l.x<=h.x+h.width&&l.y>=h.y&&l.y<=h.y+h.height).reduce((h,m)=>!h||m.depth>=h.depth?m:h,null),f=u?(p=u.node).children||(p.children=[]):t.nodes;return i===f||(i.splice(i.indexOf(r),1),r.position={x:s.x-(u?.position.x||0),y:s.y-(u?.position.y||0)},f.push(r)),r}function Ae(t,e){return t.includes(e)}function qr(t){return{x:Number(t.position?.x)||0,y:Number(t.position?.y)||0,width:Number(t.size?.width)||z.width,height:Number(t.size?.height)||z.height}}function it(t,e,o=40){return sn(t,e,o)}function uo(t,e=40){return sn(t,null,e,!0)}function sn(t,e,o=40,n=!1){let r=Number(t.canvas?.width)||1e3,i=Number(t.canvas?.height)||560,s=n||!!t.canvas?.auto,a=new G(t),l=[...new Set(a.entries.map(b=>b.node))];e&&!l.includes(e)&&l.push(e);let d=b=>a.getByNode(b)?.bounds||qr(b),u=()=>[...l.map(d),...l.filter(b=>b.arrow).map(b=>({x:b.arrow.x,y:b.arrow.y,width:0,height:0})),...(t.edges||[]).filter(b=>b.waypoint).map(b=>({x:b.waypoint.x,y:b.waypoint.y,width:0,height:0}))],f=u(),p=Math.min(0,...f.map(b=>b.x)),h=Math.min(0,...f.map(b=>b.y)),m=p<0?o-p:0,g=h<0?o-h:0;if(m||g){for(let b of a.entries.filter(v=>v.parent===null)){let v=b.node;v.position={...v.position,x:(Number(v.position?.x)||0)+m,y:(Number(v.position?.y)||0)+g}}for(let b of l)b.arrow&&(b.arrow={x:b.arrow.x+m,y:b.arrow.y+g});for(let b of t.edges||[])b.waypoint&&(b.waypoint={x:b.waypoint.x+m,y:b.waypoint.y+g});a=new G(t)}let y=u(),S=Math.max(2*o,...y.map(b=>b.x+b.width+o)),w=Math.max(2*o,...y.map(b=>b.y+b.height+o));return t.canvas={...t.canvas,width:s&&y.length?S:Math.max(r+m,S),height:s&&y.length?w:Math.max(i+g,w)},t}function cn(t,e){return t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}function zr(t,e="new-node"){let o=i=>i.flatMap(s=>[s.id,...o(s.children||[])]),n=new Set(o(t));if(!n.has(e))return e;let r=2;for(;n.has(`${e}-${r}`);)r+=1;return`${e}-${r}`}function Hr(t,e){let o=e.replace(/[^a-z0-9]/gi,"").toLowerCase()||"node",n=1,r="";do r=`${o}${String(n).padStart(2,"0")}`,n+=1;while(t.has(r));return t.add(r),r}function jr(t,e,o,n,r){let i=Number(t.canvas?.width)||1e3,s=Number(t.canvas?.height)||560,a=oe(t),c=a||20,l={x:R(r.x,a),y:R(r.y,a)};for(let u=c;u<=Math.max(i,s);u+=c)for(let f of[{x:l.x+u,y:l.y+u},{x:l.x+u,y:l.y-u},{x:l.x-u,y:l.y+u},{x:l.x-u,y:l.y-u}])if(!(f.x<0||f.y<0||f.x+o>i||f.y+n>s)&&!e.entries.some(({bounds:p})=>cn({...f,width:o,height:n},p)))return f;let d=Math.max(0,...e.entries.map(({bounds:u})=>u.x+u.width));return{x:R(d+c,a),y:0}}function Or(t){let e=new G(t),o=Number(t.canvas?.width)||1e3,n=Number(t.canvas?.height)||560,r=oe(t),i={x:R(Math.max(0,(o-z.width)/2),r),y:R(Math.max(0,(n-z.height)/2),r)},s=r||20;for(let a=0;a<=Math.max(o,n);a+=s)for(let c of[{x:i.x+a,y:i.y},{x:i.x-a,y:i.y},{x:i.x,y:i.y+a},{x:i.x,y:i.y-a}])if(!(c.x<0||c.y<0||c.x+z.width>o||c.y+z.height>n)&&!e.entries.some(({bounds:l})=>cn({...c,width:z.width,height:z.height},l)))return c;return i}function dn(t){let e={id:zr(t.nodes),label:z.label,shape:z.shape,position:Or(t),size:{width:z.width,height:z.height}};return t.nodes.push(e),e}function $t(t,e){let o=new G(t),n=o.getById(e);if(!n)return null;let r=new Set(o.entries.map(({node:d})=>d.id)),i=d=>({id:Hr(r,d.shape),label:d.label,shape:d.shape,...d.position?{position:{...d.position}}:{},...d.size?{size:{...d.size}}:{},...d.style?{style:{...d.style}}:{},...d.palette?{palette:d.palette}:{},...d.strokeType?{strokeType:d.strokeType}:{},...d.subtitle!==void 0?{subtitle:d.subtitle}:{},...d.textVAlign!==void 0?{textVAlign:d.textVAlign}:{},...d.textHAlign!==void 0?{textHAlign:d.textHAlign}:{},...d.children?{children:d.children.map(i)}:{}}),s=i(n.node),a=n.bounds,c=jr(t,o,Number(s.size?.width)||z.width,Number(s.size?.height)||z.height,a),l=n.parent?o.getByNode(n.parent)?.position||{x:0,y:0}:{x:0,y:0};return s.position={x:c.x-l.x,y:c.y-l.y},n.siblings.push(s),it(t,s),s}function ln(t,e,o,n,r){if(!Ae(ne,o)||!Ae(ne,r))throw new Error("Connector anchors must be supported edge anchors.");let i={source:e,target:n,sourceAnchor:o,targetAnchor:r,route:"orthogonal",end:"arrow"};return t.edges.push(i),i}function un(t,e,o,n){return Ae(ne,n)&&(e==="source"?(t.source=o,t.sourceAnchor=n):(t.target=o,t.targetAnchor=n)),t}function Ft(t,e){return e<0||e>=t.edges.length?null:t.edges.splice(e,1)[0]}function Nt(t,e){let o=me(t,e);if(!o)return{node:null,deletedEdges:[]};let n=new Set([o.node,...o.node.children||[]].flatMap(function i(s){return[s,...(s.children||[]).flatMap(i)]}).map(i=>i.id)),r=t.edges.filter(i=>n.has(i.source)||n.has(i.target));return o.siblings.splice(o.siblings.indexOf(o.node),1),t.edges=t.edges.filter(i=>!n.has(i.source)&&!n.has(i.target)),t.canvas?.auto&&uo(t),{node:e,deletedEdges:r}}function At(t,e){return t.label=String(e).trim(),t}function mn(t,e){return Ae(tt,e)&&(t.shape=e),t}function gn(t,e){return t.subtitle=String(e??"").trim(),t}function hn(t,e){return Ae(Ie,e)&&(t.strokeType=e),t}function mo(t,e,o){return e==="textVAlign"&&(o==="top"||o==="center")&&(t.textVAlign=o),e==="textHAlign"&&(o==="left"||o==="center"||o==="right")&&(t.textHAlign=o),t}function pt(t,e,o){return t.style={...t.style,[e]:o},t}function go(t,e,o="classic"){if(!Ae(ke,e)||!ye(o,"light",e))return t;let{fill:r,stroke:i,text:s,...a}=t.style||{};return Object.keys(a).length?t.style=a:delete t.style,t.palette=e,t}function pn(t){return t==="document"?co:so}function ho(t){return{position:{x:Number(t.position?.x)||0,y:Number(t.position?.y)||0},size:{width:Number(t.size?.width)||z.width,height:Number(t.size?.height)||z.height},childPositions:new Map((t.children||[]).map(e=>[e,{x:Number(e.position?.x)||0,y:Number(e.position?.y)||0}]))}}function fn(t,e,o,n,r,i=ho(e)){let s=oe(t),a=pn(e.shape),c=o.endsWith("left"),l=o.startsWith("top"),d=kt(i.size.width+(c?-n:n),a.width,s),u=kt(i.size.height+(l?-r:r),a.height,s);if(e.shape==="circle"){let m=Math.max(d,u);d=m,u=m}let f={...e.position,x:c?i.position.x+i.size.width-d:i.position.x,y:l?i.position.y+i.size.height-u:i.position.y},p=i.position.x-f.x,h=i.position.y-f.y;for(let m of e.children||[]){let g=i.childPositions.get(m)||m.position||{x:0,y:0};m.position={...m.position,x:g.x+p,y:g.y+h}}return e.position=f,e.size={...e.size,width:d,height:u},e}function po(t,e,o,n){let r=oe(t),i=pn(e.shape),s=o==="width"?i.width:i.height,a=kt(Number(n)||s,s,r);return e.size=e.shape==="circle"?{...e.size,width:a,height:a}:{...e.size,[o]:a},e}function Mt(t,e){return t.label=String(e).trim(),t}function bn(t,e){return Ae(ot,e)&&(t.route=e),t}function yn(t,e){return Ae(Ie,e)&&(t.strokeType=e),t}function xn(t){return delete t.waypoint,t}function fo(t,e){return t.arrow={x:e.x,y:e.y},t}function Gr(t){return delete t.arrow,t}function wn(t,e){if(e.arrow)return Gr(e);let o=rt(t,e),n=oe(t),r=fo(e,{x:R(o.x+o.width/2,n),y:R(o.y+o.height+Math.max(60,o.height*.75),n)});return it(t,e),r}function bo(t,e,o){return Ae(ne,o)&&(e==="source"?t.sourceAnchor=o:t.targetAnchor=o),t}function yo(t,e,o){return t.style={...t.style,[e]:o},t}function xo(t,e){let o=Math.max(1,Math.round(Number(e))||1);return t.style={...t.style,strokeWidth:o},t}function En(t,e){return t.start=Ae(Fe,e)?e:mt.start,t}function Sn(t,e){return t.end=Ae(Fe,e)?e:mt.end,t}function Dt(t){return Math.min(Math.max(25,Number(t)||100),800)}function Tt(t,e=0){return e===1?t*16:e===2?t*400:t}function vn(t,e,o=0){return Dt(Dt(t)*Math.exp(-Tt(e,o)*.0025))}var kn=new WeakSet;function Dn(t){return kn.has(t)}var wo={stageGap:120,siblingGap:60};function ze(t){return{width:Number(t.size?.width)||z.width,height:Number(t.size?.height)||z.height}}function Eo(t){return Number.isFinite(t.position?.x)&&Number.isFinite(t.position?.y)}function So(t){if(t==null)return null;if(typeof t=="string")return{direction:t,...wo};let e=t;return{direction:e.direction,stageGap:e.stageGap===void 0?wo.stageGap:Number(e.stageGap),siblingGap:e.siblingGap===void 0?wo.siblingGap:Number(e.siblingGap)}}function Vr(t){return t==="right"||t==="left"}function vo(t){return{right:{source:"right",target:"left"},left:{source:"left",target:"right"},down:{source:"bottom",target:"top"},up:{source:"top",target:"bottom"}}[t]}function Ur(t,e,o){let n=new Set(t),r=vo(o),i=e.filter(m=>n.has(m.source)&&n.has(m.target)&&m.source!==m.target),s=i.filter(m=>!(m.sourceAnchor===r.target&&m.targetAnchor===r.source)),a=s.length?s:i,c=new Map;for(let m of a)c.set(m.source,[...c.get(m.source)||[],m.target]);let l=[],d=new Map,u=m=>{d.set(m,"visiting");for(let g of c.get(m)||[])d.get(g)!=="visiting"&&(l.push({source:m,target:g}),d.has(g)||u(g));d.set(m,"done")};for(let m of t)d.has(m)||u(m);let f=new Map;for(let m of l)f.set(m.target,[...f.get(m.target)||[],m.source]);let p=new Map,h=(m,g)=>{let y=p.get(m);if(y!==void 0)return y;if(g.has(m))return 0;g.add(m);let S=Math.max(0,...(f.get(m)||[]).map(w=>h(w,g)+1));return p.set(m,S),S};for(let m of t)h(m,new Set);return p}function Wr(t,e,o=4){let n=s=>{let a=new Map;for(let c of e){let[l,d]=s?[c.target,c.source]:[c.source,c.target];a.set(l,[...a.get(l)||[],d])}return a},r=n(!0),i=n(!1);for(let s=0;s<o;s+=1){let a=s%2===0,c=a?t.map((l,d)=>d):t.map((l,d)=>t.length-1-d);for(let l of c){let d=a?l-1:l+1,u=t[d];if(!u)continue;let f=new Map(u.map((g,y)=>[g,y])),p=a?r:i,h=new Map;for(let g of t[l]){let y=(p.get(g)||[]).map(S=>f.get(S)).filter(S=>S!==void 0).sort((S,w)=>S-w);h.set(g,y.length?y[y.length-1>>1]:Number.NaN)}let m=new Map(t[l].map((g,y)=>[g,y]));t[l]=[...t[l]].sort((g,y)=>{let S=h.get(g),w=h.get(y);return Number.isNaN(S)||Number.isNaN(w)||S===w?m.get(g)-m.get(y):S-w})}}}function Yr(t,e,o,n,r,i,s,a=4){let c=m=>{let g=ze(n.get(m));return r?g.height:g.width},l=t.map(m=>m.reduce((g,y,S)=>g+c(y)+(S?i:0),0)),d=Math.max(0,...l),u=new Map;t.forEach((m,g)=>{let y=(d-l[g])/2;for(let S of m)u.set(S,y),y+=c(S)+i});let f=new Map;for(let m of o){let g=e.get(m.source),y=e.get(m.target);g===void 0||y===void 0||Math.abs(g-y)!==1||(f.set(m.source,[...f.get(m.source)||[],m.target]),f.set(m.target,[...f.get(m.target)||[],m.source]))}let p=(m,g)=>{let y=t[m],S=y.map(v=>{let E=(f.get(v)||[]).filter($=>e.get($)===g).map($=>u.get($)+c($)/2).sort(($,T)=>$-T);return(E.length?(E[E.length-1>>1]+E[E.length>>1])/2:u.get(v)+c(v)/2)-c(v)/2}),w=[...S];for(let v=1;v<w.length;v+=1)w[v]=Math.max(w[v],w[v-1]+c(y[v-1])+i);for(let v=w.length-2;v>=0;v-=1)w[v]=Math.min(w[v],w[v+1]-c(y[v])-i);let b=w.length?S.reduce((v,E,F)=>v+E-w[F],0)/w.length:0;y.forEach((v,E)=>u.set(v,w[E]+b))};for(let m=0;m<a;m+=1)if(m%2===0)for(let y=1;y<t.length;y+=1)p(y,y-1);else for(let y=t.length-2;y>=0;y-=1)p(y,y+1);let h=u.size?Math.min(...u.values()):0;if(h!==0)for(let[m,g]of u)u.set(m,g-h);for(let m of t){let g=Number.NEGATIVE_INFINITY;for(let y of m){let S=R(u.get(y),s),w=g+i;S<w&&(S=s?Math.ceil(w/s)*s:Math.ceil(w)),u.set(y,S),g=S+c(y)}}return u}function _r(t,e,o,n,r){let i=t.map(S=>S.id),s=Ur(i,e,o.direction),a=Math.max(0,...s.values())+1,c=Array.from({length:a},()=>[]);for(let S of i)c[s.get(S)||0].push(S);let l=e.filter(S=>s.has(S.source)&&s.has(S.target));Wr(c,l);let d=new Map(t.map(S=>[S.id,S])),u=Vr(o.direction),f=o.direction==="left"||o.direction==="up",p=c.map(S=>Math.max(0,...S.map(w=>{let b=ze(d.get(w));return u?b.width:b.height}))),h=Yr(c,s,l,d,u,o.siblingGap,r),m=0,g=p.map(S=>{let w=m;return m+=S+o.stageGap,w}),y=Math.max(0,m-o.stageGap);c.forEach((S,w)=>{for(let b of S){let v=d.get(b),E=ze(v),F=f?y-g[w]-(u?E.width:E.height):g[w],$=h.get(b);v.position={x:R(n.x+(u?F:$),r),y:R(n.y+(u?$:F),r)}}})}function $n(t,e,o=0){return t.x-o<e.x+e.width&&t.x+t.width+o>e.x&&t.y-o<e.y+e.height&&t.y+t.height+o>e.y}function Xr(t,e,o,n,r){let i=new Map(e.filter(Eo).map(m=>[m.id,m])),s=ze(t),a=vo(n.direction),c=[];for(let m of o){let g=m.source===t.id,y=m.target===t.id;if(g===y)continue;let S=i.get(g?m.target:m.source);if(!S)continue;let w=(g?m.sourceAnchor:m.targetAnchor)||(g?a.source:a.target),b={...S.position,...ze(S)};w==="left"?c.push({position:{x:b.x+b.width+n.stageGap,y:b.y+(b.height-s.height)/2},axis:"x",sign:1}):w==="right"?c.push({position:{x:b.x-n.stageGap-s.width,y:b.y+(b.height-s.height)/2},axis:"x",sign:-1}):w==="top"?c.push({position:{x:b.x+(b.width-s.width)/2,y:b.y+b.height+n.stageGap},axis:"y",sign:1}):w==="bottom"&&c.push({position:{x:b.x+(b.width-s.width)/2,y:b.y-n.stageGap-s.height},axis:"y",sign:-1})}if(!c.length)return null;let l=c[0].axis,d=c.filter(m=>m.axis===l),f=d[0].sign>0?Math.max(...d.map(m=>m.position[l])):Math.min(...d.map(m=>m.position[l])),p=l==="x"?"y":"x",h=c.reduce((m,g)=>m+g.position[p],0)/c.length;return{position:{x:R(l==="x"?f:h,r),y:R(l==="y"?f:h,r)},acrossAxis:p}}function Kr(t,e,o,n,r,i){let s=r||20,a=Math.min(i,20);for(let c=0;c<=200;c+=1)for(let l of c?[c*s,-c*s]:[0]){let d={...t,[n]:t[n]+l},u={...d,...e};if(!o.some(f=>$n(u,f,a)))return{x:R(d.x,r),y:R(d.y,r)}}return t}function Zr(t,e,o,n,r){let i=n||20,s=Math.min(r,20),a={x:R(o.x,n),y:R(o.y,n)},c=Math.max(o.y,...e.map(l=>l.y+l.height));for(let l=0;l<=2e3;l+=i)for(let d of l?[{x:a.x+l,y:a.y},{x:a.x,y:a.y+l}]:[a])if(!e.some(u=>$n({...d,...t},u,s)))return d;return{x:a.x,y:R(c+i,n)}}function Jr(t,e,o,n,r){let i=t.filter(s=>!Eo(s));if(!i.length)return!1;if(i.length===t.length)return _r(t,e,o,n,r),!0;for(let s of i){let a=ze(s),c=t.filter(d=>d!==s&&Eo(d)).map(d=>({...d.position,...ze(d)})),l=Xr(s,t,e,o,r);s.position=l?Kr(l.position,a,c,l.acrossAxis,r,o.siblingGap):Zr(a,c,n,r,o.siblingGap)}return!0}function Qr(t,e){let o=e.x+e.width/2-(t.x+t.width/2),n=e.y+e.height/2-(t.y+t.height/2),r=Math.abs(o)-(t.width+e.width)/2,i=Math.abs(n)-(t.height+e.height)/2;return r<=0&&i<=0?null:r>=i?o>=0?{source:"right",target:"left"}:{source:"left",target:"right"}:n>=0?{source:"bottom",target:"top"}:{source:"top",target:"bottom"}}function ei(t,e){let o=t.edges||[];if(!o.some(i=>!i.sourceAnchor||!i.targetAnchor))return!1;let n=vo(e.direction),r=new G(t);for(let i of o){if(i.sourceAnchor&&i.targetAnchor)continue;let s=r.getById(i.source)?.bounds,a=r.getById(i.target)?.bounds,c=s&&a&&i.source!==i.target?Qr(s,a):null;i.sourceAnchor=i.sourceAnchor||c?.source||n.source,i.targetAnchor=i.targetAnchor||c?.target||n.target}return!0}function Ct(t){let e=So(t.layout);if(!e)return t;let o=oe(t),n=40,r=!1,i=(s,a)=>{for(let c of s)if(c.children?.length&&(i(c.children,{x:n,y:n}),!c.size)){let l=c.children.reduce((d,u)=>{let f=ze(u);return{width:Math.max(d.width,(Number(u.position?.x)||0)+f.width),height:Math.max(d.height,(Number(u.position?.y)||0)+f.height)}},{width:0,height:0});c.size={width:R(l.width+n,o),height:R(l.height+n,o)}}r=Jr(s,t.edges||[],e,a,o)||r};return i(t.nodes||[],{x:n,y:n}),r=ei(t,e)||r,r&&kn.add(t),t}var at={horizontalAspectRatio:4,verticalAspectRatio:5,minimumNodeCount:8,minimumDominantPath:8,minimumPathCoverage:.75,maximumBranchingRatio:.2};function Fn(t){return{width:Number(t.size?.width)||z.width,height:Number(t.size?.height)||z.height}}function ti(t){if(t.nodes.some(h=>h.children?.length))return null;let e=t.nodes.map(h=>h.id),o=new Map(e.map((h,m)=>[h,m])),n=new Set(e),r=new Map(e.map(h=>[h,[]])),i=new Map(e.map(h=>[h,[]]));for(let h of t.edges){if(!n.has(h.source)||!n.has(h.target)||h.source===h.target)return null;i.get(h.source).push(h.target),r.get(h.target).push(h.source)}let s=new Set,a=e.length?[e[0]]:[];for(;a.length;){let h=a.pop();s.has(h)||(s.add(h),a.push(...r.get(h),...i.get(h)))}if(s.size!==e.length)return null;let c=new Map(e.map(h=>[h,r.get(h).length])),l=e.filter(h=>c.get(h)===0),d=[];for(;l.length;){l.sort((m,g)=>o.get(m)-o.get(g));let h=l.shift();d.push(h);for(let m of i.get(h)){let g=c.get(m)-1;c.set(m,g),g===0&&l.push(m)}}if(d.length!==e.length)return null;let u=new Map;for(let h of d){let m=r.get(h).map(g=>u.get(g)||[g]);m.sort((g,y)=>y.length-g.length||o.get(g[0])-o.get(y[0])),u.set(h,[...m[0]||[],h])}let f=[...u.values()].sort((h,m)=>m.length-h.length||o.get(h[0])-o.get(m[0]))[0]||[],p=e.filter(h=>r.get(h).length>1||i.get(h).length>1).length;return{order:d,dominantPath:f,incoming:r,outgoing:i,branchingNodes:p}}function Nn(t){let e=new G(t).entries;if(!e.length)return null;let o=Math.min(...e.map(({bounds:s})=>s.x)),n=Math.min(...e.map(({bounds:s})=>s.y)),r=Math.max(...e.map(({bounds:s})=>s.x+s.width)),i=Math.max(...e.map(({bounds:s})=>s.y+s.height));return{width:r-o,height:i-n}}function An(t){let e=t.nodes.length;if(e<at.minimumNodeCount||t.nodes.some(d=>!d.position))return null;let o=ti(t),n=Nn(t);if(!o||!n||!n.width||!n.height)return null;let r=n.width>=n.height?"horizontal":"vertical",i=r==="horizontal"?n.width/n.height:n.height/n.width,s=r==="horizontal"?at.horizontalAspectRatio:at.verticalAspectRatio,a=o.dominantPath.length,c=a/e,l=o.branchingNodes/e;return i<s||a<at.minimumDominantPath||c<at.minimumPathCoverage||l>at.maximumBranchingRatio?null:{graph:o,analysis:{direction:r,width:Math.round(n.width),height:Math.round(n.height),aspectRatio:i,dominantPathLength:a,nodeCount:e,pathCoverage:c,branchingNodes:o.branchingNodes,reason:`the dominant path contains ${a} of ${e} nodes (${Math.round(c*100)}%) with ${o.branchingNodes} branching node${o.branchingNodes===1?"":"s"}`}}}function Mn(t){return An(t)?.analysis||null}function oi(t){let e=new Map(t.dominantPath.map((r,i)=>[r,i])),o=new Map;for(let r of t.order){let i=e.get(r),s=Math.max(-1,...t.incoming.get(r).map(a=>o.get(a)??-1));o.set(r,i??s)}let n=new Map(t.order.map((r,i)=>[r,i]));return[...t.order].sort((r,i)=>o.get(r)-o.get(i)||+!e.has(r)-+!e.has(i)||n.get(r)-n.get(i))}function ni(t,e){let o=e.x-t.x,n=e.y-t.y;return Math.abs(o)>=Math.abs(n)?o>=0?{source:"right",target:"left"}:{source:"left",target:"right"}:n>=0?{source:"bottom",target:"top"}:{source:"top",target:"bottom"}}function Lt(t){let e=An(t);if(!e)return null;let{analysis:o,graph:n}=e,r=oe(t),i=typeof t.layout=="object"?t.layout:void 0,s=Number(i?.stageGap)||120,a=Number(i?.siblingGap)||60,c=new Map(t.nodes.map(b=>[b.id,b])),l=Math.max(...t.nodes.map(b=>Fn(b).width)),d=Math.max(...t.nodes.map(b=>Fn(b).height)),u=o.direction==="horizontal",f=u?l+s:d+s,p=u?d+a:l+a,h=oi(n),m=Math.max(3,Math.min(Math.ceil(h.length/2),Math.ceil(Math.sqrt(h.length*p/f)))),g=R(40,r);h.forEach((b,v)=>{let E=Math.floor(v/m),F=v%m,$=c.get(b);$.position=u?{x:R(g+F*f,r),y:R(g+E*p,r)}:{x:R(g+E*p,r),y:R(g+F*f,r)}});let y=g+m*f-s+Math.max(s/2,40),S=new Map(h.map((b,v)=>[b,v]));for(let b of t.edges){let v=c.get(b.source),E=c.get(b.target);if(!v?.position||!E?.position)continue;let F=S.get(v.id),$=S.get(E.id),T=Math.floor(F/m),B=Math.floor($/m);if(delete b.waypoint,b.route="orthogonal",T!==B)u?(b.sourceAnchor="right",b.targetAnchor="top",b.waypoint={x:R(y,r),y:R(E.position.y-a/2,r)}):(b.sourceAnchor="bottom",b.targetAnchor="left",b.waypoint={x:R(E.position.x-a/2,r),y:R(y,r)});else{let M=ni(v.position,E.position);b.sourceAnchor=M.source,b.targetAnchor=M.target}}t.layout=u?"right":"down";let w=Nn(t);return t.canvas.auto||(t.canvas.width=Math.max(Number(t.canvas.width)||0,Math.ceil(w.width+g*2)),t.canvas.height=Math.max(Number(t.canvas.height)||0,Math.ceil(w.height+g*2))),{analysis:o,before:{width:o.width,height:o.height,aspectRatio:o.aspectRatio},after:{width:Math.round(w.width),height:Math.round(w.height),aspectRatio:Math.max(w.width/w.height,w.height/w.width)}}}var Tn=new WeakSet;function Cn(t){return Tn.has(t)}function Ln(t,e){for(let o of t)e(o),Ln(o.children||[],e)}function Pt(t,e){if(!t.layout)throw new Error("Relayout requires a layout direction on the diagram.");Ln(t.nodes,o=>{(e!=="unpinned"||!o.pinned)&&delete o.position});for(let o of t.edges)delete o.sourceAnchor,delete o.targetAnchor,delete o.route,delete o.waypoint;if(Ct(t),e==="autowrap"){let o=t.layout;Lt(t)&&typeof o=="object"&&(t.layout={...o,direction:typeof t.layout=="string"?t.layout:t.layout.direction})}return delete t.relayout,Tn.add(t),t}var ri=["nodes","edges","participants","messages","activations","notes","groups"],Rn=["version","id","caption","description","theme"],ii=[...Rn,"type","layout","relayout","styles","canvas","nodes","edges"],ai=[...Rn,"type","canvas","participants","messages","activations","notes","groups"],si=["id","label","shape","class","position","pinned","size","style","strokeType","palette","subtitle","textVAlign","textHAlign","arrow","children"],ci=["source","target","class","sourceAnchor","targetAnchor","route","strokeType","label","style","start","end","waypoint"],di=["palette","style"],li=["direction","stageGap","siblingGap"],Do=["fill","stroke","strokeWidth","text"],ui=["stroke","strokeWidth","text"],mi=["id","label","kind","palette","style","size"],gi=["from","to","label","style"],hi=["participant","from","to"],pi=["at","after","label","palette","style","size"],fi=["label","from","to"],bi=["width","height","participantSpacing","participantSize"];function D(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function qe(t){let e=t.trim();if(e.startsWith('"')&&e.endsWith('"'))try{return JSON.parse(e)}catch{throw new Error(`Invalid quoted scalar: ${e}`)}if(e.startsWith("'")&&e.endsWith("'"))return e.slice(1,-1);if(/^-?\d+(\.\d+)?$/.test(e))return Number(e);if(e==="true"||e==="false")return e==="true";if(e.startsWith("{")&&e.endsWith("}")){let o=e.slice(1,-1).trim();if(!o)return{};let n=o.split(","),r={};for(let i of n){let s=i.indexOf(":");if(s===-1)throw new Error(`Invalid inline mapping: ${e}`);let a=i.slice(0,s).trim();r[a]=qe(i.slice(s+1))}return r}return e}var yi=/^(\s*)((?:- )?)([A-Za-z_][\w-]*):\s*\|([+-])?\s*$/;function xi(t){let e=[],o=0;for(;o<t.length;){let n=t[o],r=n.match(yi);if(!r){e.push(n),o+=1;continue}let[,i,s,a,c]=r,l=o+1,d=null;for(;l<t.length;){let m=t[l];if(m.trim()===""){l+=1;continue}d=m.length-m.trimStart().length;break}if(d===null||d<=i.length){e.push(`${i}${s}${a}: ""`),o+=1;continue}let u=[],f=o+1,p=0;for(;f<t.length;){let m=t[f];if(m.trim()===""){u.push(""),p+=1,f+=1;continue}if(m.length-m.trimStart().length<d)break;u.push(m.slice(d)),p=0,f+=1}p>0&&c!=="+"&&(u.length-=p-1);let h=u.join(`
`);e.push(`${i}${s}${a}: ${JSON.stringify(h)}`),o=f}return e}function xe(t,e="classic"){let n=xi(t.replace(/\r\n/g,`
`).split(`
`)).filter(p=>p.trim()&&!p.trimStart().startsWith("#"));for(let p of n){if(p.trimStart()!==p||!p.trimEnd().endsWith(":"))continue;let h=p.trim().slice(0,-1);if(h!=="canvas"&&h!=="styles"&&h!=="layout"&&!ri.includes(h))throw new Error(`Unsupported diagram section: ${h}`)}let r=0,i=p=>p.length-p.trimStart().length,s=p=>p.trim().match(/^([^:]+):\s*(.*)$/),a=p=>p.trim().match(/^- ([^:]+):\s*(.*)$/),c=p=>r>=n.length||i(n[r])<=p?{}:n[r].trimStart().startsWith("- ")?d(i(n[r])):l(i(n[r])),l=p=>{let h={};for(;r<n.length&&i(n[r])===p;){let m=n[r],g=s(m);if(!g)throw new Error(`Cannot parse diagram line: ${m}`);r+=1,h[g[1]]=g[2]?qe(g[2]):c(p)}return h},d=p=>{let h=[];for(;r<n.length&&i(n[r])===p;){let m=n[r],g=a(m);if(!g)throw new Error(`Cannot parse diagram line: ${m}`);r+=1;let y={[g[1]]:g[2]?qe(g[2]):c(p)};for(;r<n.length&&i(n[r])>p;){let S=i(n[r]),w=s(n[r]);if(!w)throw new Error(`Cannot parse diagram line: ${n[r]}`);r+=1,y[w[1]]=w[2]?qe(w[2]):c(S)}h.push(y)}return h},u=l(0);if(!u.type)throw new Error(`Diagram type is required and must be one of: ${io.join(", ")}.`);if(typeof u.type!="string"||!io.includes(u.type))throw new Error(`Unsupported diagram type: ${String(u.type)}`);let f=u.type==="flowchart"?ii:ai;return ge(u,f,`${u.type} diagram`),wi(u),u.type==="flowchart"?Ei(u,e):Si(u,e)}function wi(t){if(t.version!==void 0&&(!Number.isInteger(t.version)||Number(t.version)<1))throw new Error("Diagram version must be a positive integer.");for(let e of["id","caption","description"])if(t[e]!==void 0&&typeof t[e]!="string")throw new Error(`Diagram ${e} must be a string.`);if(t.theme!==void 0&&(typeof t.theme!="string"||!wt.includes(t.theme)))throw new Error(`Unsupported diagram theme: ${String(t.theme)}`)}function Ei(t,e="classic"){if(t.canvas==="auto"&&(t.canvas={auto:!0}),t.canvas=t.canvas||{},typeof t.canvas!="object"||Array.isArray(t.canvas))throw new Error('Flowchart canvas must be a mapping or the value "auto".');if(t.canvas.auto!==void 0&&typeof t.canvas.auto!="boolean")throw new Error("Flowchart canvas.auto must be true or false.");return Array.isArray(t.nodes)||(t.nodes=[]),Array.isArray(t.edges)||(t.edges=[]),Di(t,e),t.relayout?Pt(t,t.relayout):Ct(t),t.canvas.auto&&uo(t),t}function Si(t,e="classic"){return $i(t,e),t}function ge(t,e,o){for(let n of Object.keys(t||{}))if(!e.includes(n))throw new Error(`Unsupported ${o} field: ${n}`)}function Rt(t,e,o){if(t){for(let n of Object.keys(t))if(!e.includes(n))throw new Error(`Unsupported ${o} style field: ${n}`)}}function ko(t,e){let o=e.charAt(0).toUpperCase()+e.slice(1);if(typeof t!="object"||t===null||Array.isArray(t))throw new Error(`${o} must be a mapping.`);let n=t;if(!Number.isFinite(n.x)||!Number.isFinite(n.y))throw new Error(`${o} requires finite x and y coordinates.`);ge(t,["x","y"],e)}function vi(t){if(t.styles===void 0)return new Set;if(typeof t.styles!="object"||Array.isArray(t.styles))throw new Error("Diagram styles must be a mapping of names to style definitions.");for(let[e,o]of Object.entries(t.styles)){if(typeof o!="object"||o===null||Array.isArray(o))throw new Error(`Style "${e}" must be a mapping.`);if(ge(o,di,`style "${e}"`),o.palette!==void 0&&(typeof o.palette!="string"||!ke.includes(o.palette)))throw new Error(`Unsupported palette in style "${e}": ${String(o.palette)}`);if(o.style?.width!==void 0)throw new Error(`Style "${e}" style.width is not supported; use style.strokeWidth.`);if(Rt(o.style,Do,`style "${e}"`),o.palette===void 0&&!Object.keys(o.style||{}).length)throw new Error(`Style "${e}" declares no palette or style values.`)}return new Set(Object.keys(t.styles))}function ki(t){if(t.layout===void 0)return;if(typeof t.layout=="object"&&!Array.isArray(t.layout)){ge(t.layout,li,"layout");for(let o of["stageGap","siblingGap"]){let n=t.layout[o];if(n!==void 0&&(typeof n!="number"||!Number.isFinite(n)||n<0))throw new Error(`Layout ${o} must be a number of zero or more.`)}}else if(typeof t.layout!="string")throw new Error("Layout must be a direction or a mapping.");let e=So(t.layout);if(!e||!ao.includes(e.direction))throw new Error(`Unsupported layout direction: ${String(e?.direction)}`)}function Di(t,e="classic"){if(ki(t),t.relayout!==void 0&&!["all","unpinned","autowrap"].includes(t.relayout))throw new Error(`Unsupported relayout mode: ${String(t.relayout)}`);if(t.relayout!==void 0&&t.layout===void 0)throw new Error("Relayout requires a layout direction on the diagram.");let o=t.layout!==void 0,n=vi(t),r=(a,c)=>{if(a!==void 0&&(typeof a!="string"||!n.has(a)))throw new Error(`Unknown style class on ${c}: ${String(a)}`)},i=new Set,s=a=>{if("type"in a)throw new Error(`Node "${a.id||"unknown"}" uses removed field "type".`);if(ge(a,si,`node "${a.id||"unknown"}"`),!a.id||typeof a.label!="string")throw new Error("Every node requires an id and a string label.");if(!a.shape)throw new Error(`Node "${a.id}" requires a shape.`);if(!tt.includes(a.shape))throw new Error(`Unsupported node shape: ${a.shape}`);if(a.position===void 0){if(!o)throw new Error(`Node "${a.id}" requires a position, or a "layout" on the diagram to place it.`)}else ko(a.position,`node "${a.id}" position`);if(a.pinned!==void 0&&typeof a.pinned!="boolean")throw new Error(`Node "${a.id}" pinned must be true or false.`);if(a.pinned&&a.position===void 0)throw new Error(`Pinned node "${a.id}" requires a position.`);if(a.textVAlign!==void 0&&!Qo.includes(a.textVAlign))throw new Error(`Unsupported node textVAlign: ${a.textVAlign}`);if(a.textHAlign!==void 0&&!en.includes(a.textHAlign))throw new Error(`Unsupported node textHAlign: ${a.textHAlign}`);if(a.palette!==void 0&&(typeof a.palette!="string"||!ke.includes(a.palette)))throw new Error(`Unsupported node palette: ${String(a.palette||"unknown")}`);if(a.strokeType!==void 0&&!Ie.includes(a.strokeType))throw new Error(`Unsupported node strokeType: ${a.strokeType}`);if(a.style?.width!==void 0)throw new Error("Node style.width is not supported; use style.strokeWidth.");if(r(a.class,`node "${a.id}"`),Rt(a.style,Do,`node "${a.id}"`),a.arrow!==void 0&&ko(a.arrow,`node "${a.id}" arrow`),i.has(a.id))throw new Error(`Duplicate flowchart node id: ${a.id}`);if(i.add(a.id),a.children!==void 0&&!Array.isArray(a.children))throw new Error(`Children for node "${a.id}" must be a list.`);for(let c of a.children||[])s(c)};for(let a of t.nodes)s(a);for(let a of t.edges){if(ge(a,ci,`edge "${a.source||"unknown"}" -> "${a.target||"unknown"}"`),!a.sourceAnchor&&!o)throw new Error(`Edge "${a.source||"unknown"}" -> "${a.target||"unknown"}" requires a sourceAnchor.`);if(!a.targetAnchor&&!o)throw new Error(`Edge "${a.source||"unknown"}" -> "${a.target||"unknown"}" requires a targetAnchor.`);if(a.sourceAnchor&&!ne.includes(a.sourceAnchor))throw new Error(`Unsupported edge sourceAnchor: ${a.sourceAnchor}`);if(a.targetAnchor&&!ne.includes(a.targetAnchor))throw new Error(`Unsupported edge targetAnchor: ${a.targetAnchor}`);if(a.route!==void 0&&!ot.includes(a.route))throw new Error(`Unsupported edge route: ${a.route}`);if(a.strokeType!==void 0&&!Ie.includes(a.strokeType))throw new Error(`Unsupported edge strokeType: ${a.strokeType}`);if(a.waypoint!==void 0&&ko(a.waypoint,`edge "${a.source}" -> "${a.target}" waypoint`),a.start!==void 0&&!Fe.includes(a.start))throw new Error(`Unsupported edge start marker: ${a.start}`);if(a.end!==void 0&&!Fe.includes(a.end))throw new Error(`Unsupported edge end marker: ${a.end}`);if(a.style?.width!==void 0)throw new Error("Edge style.width is not supported; use style.strokeWidth.");r(a.class,`edge "${a.source||"unknown"}" -> "${a.target||"unknown"}"`),Rt(a.style,ui,`edge "${a.source||"unknown"}" -> "${a.target||"unknown"}"`)}}function $i(t,e="classic"){if(!Array.isArray(t.participants)||!Array.isArray(t.messages))throw new Error("Sequence diagrams require participants and messages sections.");if(t.activations!==void 0&&!Array.isArray(t.activations))throw new Error("Sequence diagram activations must be a list.");if(t.notes!==void 0&&!Array.isArray(t.notes))throw new Error("Sequence diagram notes must be a list.");if(t.groups!==void 0&&!Array.isArray(t.groups))throw new Error("Sequence diagram groups must be a list.");if(t.canvas!==void 0&&(typeof t.canvas!="object"||Array.isArray(t.canvas)))throw new Error("Sequence canvas must be a mapping.");ge(t.canvas,bi,"sequence canvas");for(let n of["width","height","participantSpacing"]){let r=t.canvas?.[n];if(r!==void 0&&(!Number.isFinite(r)||Number(r)<=0))throw new Error(`Sequence canvas.${n} must be a positive number.`)}if(t.canvas?.participantSize!==void 0){if(typeof t.canvas.participantSize!="object"||Array.isArray(t.canvas.participantSize))throw new Error("Sequence canvas.participantSize must be a mapping.");ge(t.canvas.participantSize,["width","height"],"sequence canvas participantSize");for(let n of["width","height"]){let r=t.canvas.participantSize[n];if(r!==void 0&&(!Number.isFinite(r)||Number(r)<=0))throw new Error(`Sequence canvas.participantSize.${n} must be a positive number.`)}}let o=new Set;for(let n of t.participants){if(ge(n,mi,`participant "${n.id||"unknown"}"`),!n.id||!n.label)throw new Error("Every sequence participant requires an id and label.");if(n.kind!==void 0&&!Jo.includes(n.kind))throw new Error(`Unsupported sequence participant kind: ${n.kind}`);if(Pn(n,`participant "${n.id}"`,e),o.has(n.id))throw new Error(`Duplicate sequence participant id: ${n.id}`);o.add(n.id)}for(let[n,r]of t.messages.entries()){if(ge(r,gi,`message ${n}`),!r.from||!r.to||!r.label)throw new Error(`Sequence message ${n} requires from, to, and label.`);if(!o.has(r.from)||!o.has(r.to))throw new Error(`Sequence message ${n} references an unknown participant.`);if(r.style!==void 0&&!Et.includes(r.style))throw new Error(`Unsupported sequence message style: ${r.style}`)}for(let[n,r]of(t.activations||[]).entries()){if(ge(r,hi,`activation ${n}`),!r.participant||!Number.isInteger(r.from)||!Number.isInteger(r.to))throw new Error(`Sequence activation ${n} requires participant and integer from and to message positions.`);if(!o.has(r.participant))throw new Error(`Sequence activation ${n} references an unknown participant.`);if(r.from<1||r.to<r.from||r.to>t.messages.length)throw new Error(`Sequence activation ${n} range is out of bounds.`)}for(let[n,r]of(t.notes||[]).entries()){ge(r,pi,`note ${n}`);let i=r.after;if(!r.at||!Number.isInteger(i)||!r.label)throw new Error(`Sequence note ${n} requires at, after, and label.`);if(Pn(r,`note ${n}`,e),!o.has(r.at))throw new Error(`Sequence note ${n} references an unknown participant.`);if(i<0||i>t.messages.length)throw new Error(`Sequence note ${n} after position is out of bounds.`)}for(let[n,r]of(t.groups||[]).entries()){if(ge(r,fi,`group ${n}`),!r.label&&r.label!=="")throw new Error(`Sequence group ${n} requires a label.`);if(!Number.isInteger(r.from)||!Number.isInteger(r.to))throw new Error(`Sequence group ${n} requires integer from and to indices.`);if(r.from<1||r.to<r.from||r.to>t.messages.length)throw new Error(`Sequence group ${n} range is out of bounds.`)}}function Pn(t,e,o="classic"){if(t.palette!==void 0){let n=String(t.palette||"");if(!ke.includes(n))throw new Error(`Unsupported ${e} palette: ${n||"unknown"}`)}if(Rt(t.style,Do,e),t.size){ge(t.size,["width","height"],`size for ${e}`);for(let n of["width","height"]){let r=t.size[n];if(r!==void 0&&(!Number.isFinite(r)||Number(r)<=0))throw new Error(`${e} size.${n} must be a positive number.`)}}}function $o(t){return typeof t=="number"||typeof t=="boolean"?String(t):t&&typeof t=="object"?Object.keys(t).length?`{ ${Object.entries(t).map(([e,o])=>`${e}: ${$o(o)}`).join(", ")} }`:"{}":/^[\w./-]+(?: [\w./-]+)*$/.test(String(t))?String(t):JSON.stringify(String(t))}function Ve(t,e,o,n,r=""){if(typeof e=="string"&&e.includes(`
`)){let i=e.split(`
`).map(s=>s.length?`${" ".repeat(n)}${s}`:"");return[`${" ".repeat(o)}${r}${t}: |+`,...i]}return[`${" ".repeat(o)}${r}${t}: ${$o(e)}`]}function He(t,e=2){let o=Object.entries(t),[n,r]=o[0],i=Ve(n,r,e,e+4,"- ");for(let[s,a]of o.slice(1))if(!(s==="children"&&Array.isArray(a)&&!a.length))if(s==="children"&&Array.isArray(a)){i.push(`${" ".repeat(e+2)}children:`);for(let c of a)i.push(...He(c,e+4))}else i.push(...Ve(s,a,e+2,e+4));return i}function Pe(t){let e=[`type: ${$o(t.type)}`];for(let r of["version","id","caption","description","theme"])t[r]!==void 0&&e.push(...Ve(r,t[r],0,2));if(t.type==="flowchart"&&t.layout!==void 0&&e.push(...Ve("layout",t.layout,0,2)),t.type==="sequence"){if(t.canvas!==void 0){e.push("canvas:");for(let[r,i]of Object.entries(t.canvas))e.push(...Ve(r,i,2,4))}e.push("participants:");for(let r of t.participants||[])e.push(...He(r));e.push("messages:");for(let r of t.messages||[])e.push(...He(r));if(t.activations!==void 0){e.push("activations:");for(let r of t.activations||[])e.push(...He(r))}if(t.notes!==void 0){e.push("notes:");for(let r of t.notes||[])e.push(...He(r))}if(t.groups!==void 0){e.push("groups:");for(let r of t.groups||[])e.push(...He(r))}return e.join(`
`)}if(t.styles!==void 0){e.push("styles:");for(let[r,i]of Object.entries(t.styles)){e.push(`  ${r}:`);for(let[s,a]of Object.entries(i))e.push(...Ve(s,a,4,6))}}let o=t.canvas||{},n=Object.entries(o).filter(([r])=>!o.auto||r!=="width"&&r!=="height");if(o.auto&&n.length===1)e.push("canvas: auto");else if(n.length){e.push("canvas:");for(let[r,i]of n)e.push(...Ve(r,i,2,4))}e.push("nodes:");for(let r of t.nodes||[])e.push(...He(r));e.push("edges:");for(let r of t.edges||[])e.push(...He(r));return e.join(`
`)}var Fi=/^(?: {0,3}> ?)+/;function we(t){return t.replace(Fi,"")}function Re(t){let e=t.match(/^(`{3,})([\w-]*)\s*$/);return e?{marker:e[1],info:e[2]}:null}function Ue(t,e){let o=t.match(/^(`{3,})\s*$/);return!!(o&&o[1].length>=e.length)}function st(t,e,o,n=t.length){for(let r=e;r<n;r+=1)if(Ue(we(t[r]),o))return r;return-1}var Ni=["document","diagram"];function Bt(t){let e=t.replace(/\r\n/g,`
`).split(`
`),o=e.findIndex(i=>i.trim()!=="");if(o===-1||e[o]!=="---")return{content:t,frontmatter:{}};let n=e.indexOf("---",o+1);if(n===-1)return{content:t,frontmatter:{}};let r={};for(let i of e.slice(o+1,n)){if(!i.trim()||i.trimStart().startsWith("#"))continue;let s=i.match(/^([^:]+):\s*(.*)$/);if(!s)throw new Error(`Cannot parse document frontmatter line: ${i}`);r[s[1]]=qe(s[2])}return{content:e.slice(n+1).join(`
`),frontmatter:r}}function ft(t){let e=Bt(t),o=String(e.frontmatter.theme??"auto"),n=String(e.frontmatter.colourScheme??"classic"),r=String(e.frontmatter.doctype??"document");if(!wt.includes(o))throw new Error(`Unsupported document theme: ${o}`);let i=o,s=gt(i);if(!Object.prototype.hasOwnProperty.call(ue,n))throw new Error(`Unsupported document colour scheme: ${n}`);let a=n;if(!Ni.includes(r))throw new Error(`Unsupported document doctype: ${r}`);return{...e,theme:i,resolvedTheme:s,colourScheme:a,doctype:r}}function We(t){let e=ft(t),o=e.content.replace(/\r\n/g,`
`).split(`
`),n=0,r=new Set,i=!1,s=null;for(let a of o){let c=we(a);if(s){Ue(c,s)&&(s=null);continue}let l=Re(c);if(l){s=l.marker;continue}if(/^:::diagram\s+\{\s*id=/.test(c)){i=!0;break}}for(;n<o.length;){let a=we(o[n]),c=Re(a);if(!c){n+=1;continue}let l=st(o,n+1,c.marker);if(l===-1)throw new Error("Unclosed code block.");if(c.info==="diagram"){let d=o.slice(n+1,l).map(f=>we(f)).join(`
`);xe(d,e.colourScheme);let u=d.match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m)?.slice(1).find(Boolean);if(u){if(r.has(u))throw new Error(`Duplicate diagram id: ${u}`);r.add(u)}else if(i)throw new Error("Every diagram requires an id when using diagram references.")}n=l+1}return e}function It(t){let e=t.match(/^id:\s*(.*?)\s*$/m)?.[1];if(e===void 0)return null;try{let o=qe(e);return typeof o=="string"?o:null}catch{return null}}function Ye(t){let e=t.match(/[^\r\n]*(?:\r\n|\r|\n|$)/g)?.filter((u,f,p)=>u.length>0||f<p.length-1)||[],o=e.map(u=>u.replace(/\r\n$|[\r\n]$/,"")),n=[],r=0;for(let u of e)n.push(r),r+=u.length;let i=(u,f)=>({line:u+1,column:f+1,offset:(n[u]??t.length)+f}),s=u=>{let f=o[u]||"",p=we(f),h=f.length-p.length;return{start:i(u,h),end:i(u,f.length)}},a=0,c=o.findIndex(u=>u.trim()!=="");if(c!==-1&&o[c]==="---"){let u=o.indexOf("---",c+1);u!==-1&&(a=u+1)}let l=[],d=a;for(;d<o.length;){let u=Re(we(o[d]));if(!u){d+=1;continue}let f=st(o,d+1,u.marker);if(f===-1)break;if(u.info==="diagram"){let p=o.slice(d+1,f).map((y,S)=>s(d+1+S)),h=o.slice(d+1,f).map(y=>we(y)).join(`
`),m=s(d),g=s(f);l.push({id:It(h),source:h,index:l.length,fenceRange:{start:m.start,end:g.end},bodyRange:p.length?{start:p[0].start,end:p[p.length-1].end}:{start:m.end,end:g.start},lineRanges:p})}d=f+1}return l}function _e(t){let e=2166136261;for(let o=0;o<t.length;o+=1)e^=t.charCodeAt(o),e=Math.imul(e,16777619)>>>0;return e.toString(16).padStart(8,"0")}function qt(t){let e=t.split(`
`),o=e.map(p=>p.endsWith("\r")?p.slice(0,-1):p),r=e.filter(p=>p.endsWith("\r")).length*2>e.length-1?"\r":"",i=t.replace(/\r\n/g,`
`),{content:s,frontmatter:a}=Bt(i),c=String(a.colourScheme||"classic"),l=[],d=i.split(`
`).length-s.split(`
`).length,u=0,f=0;for(;d<e.length;){let p=Re(we(o[d]));if(!p){d+=1;continue}let h=st(o,d+1,p.marker);if(h===-1)break;if(p.info==="diagram"){let m=o.slice(d+1,h).map(y=>we(y)).join(`
`),g=xe(m,c);if(g.type==="flowchart"&&(Dn(g)||Cn(g))){let y=o[d],S=y.slice(0,y.length-we(y).length);l.push({start:d+1,end:h,lines:Pe(g).split(`
`).map(w=>`${S}${w}${r}`)}),u+=1}else f+=1}d=h+1}return{source:Fo(e,l).join(`
`),baked:u,preserved:f,fences:l}}function Fo(t,e){let o=[...t];for(let n of[...e].reverse())o.splice(n.start,n.end-n.start,...n.lines);return o}function Bn(t){let e=We(t),o=Ye(t).reverse(),n=[],r=t;for(let i of o){let s=In(r,i,e.colourScheme);s.changed&&s.layout&&(r=s.source,n.unshift(s.layout))}return{source:r,changed:n.length>0,layouts:n}}function In(t,e,o){let n=xe(e.source,o);if(n.type!=="flowchart")return{source:t,changed:!1,layout:null};let r=Lt(n);if(!r)return{source:t,changed:!1,layout:null};let i=t.split(`
`),s=e.fenceRange.start.line-1,a=e.fenceRange.end.line-1,c=i[s].endsWith("\r")?i[s].slice(0,-1):i[s],l=c.slice(0,c.length-we(c).length),u=i.filter(p=>p.endsWith("\r")).length*2>i.length-1?"\r":"",f=Pe(n).split(`
`).map(p=>`${l}${p}${u}`);return i.splice(s+1,a-s-1,...f),{source:i.join(`
`),changed:!0,layout:r}}function qn(t,e){let o=We(t),n=Ye(t).find(r=>r.index===e);if(!n)throw new Error(`Diagram ${e+1} does not exist.`);return In(t,n,o.colourScheme)}function zn(t,e,o="all"){let n=We(t),r=Ye(t).find(h=>h.index===e);if(!r)throw new Error(`Diagram ${e+1} does not exist.`);let i=xe(r.source,n.colourScheme);if(i.type!=="flowchart")return{source:t,changed:!1};Pt(i,o);let s=t.split(`
`),a=r.fenceRange.start.line-1,c=r.fenceRange.end.line-1,l=s[a].endsWith("\r")?s[a].slice(0,-1):s[a],d=l.slice(0,l.length-we(l).length),f=s.filter(h=>h.endsWith("\r")).length*2>s.length-1?"\r":"",p=Pe(i).split(`
`).map(h=>`${d}${h}${f}`);return s.splice(a+1,c-a-1,...p),{source:s.join(`
`),changed:!0}}function Hn(t,e){return It(t)===null?`id: ${e}
${t}`:t.replace(/^id:\s*(?:"[^"]+"|[^\s#]+)\s*$/m,()=>`id: ${e}`)}function No(t,e,o){let n=t.replace(/\r\n/g,`
`),r=n.split(`
`),i=r.findIndex(d=>d.trim()!==""),s=i!==-1&&r[i]==="---",a=s?r.indexOf("---",i+1):-1;if(!s||a===-1)return`---
${e}: ${o}
---
${n}`;let c=!1,l=r.slice(i+1,a).map(d=>{if(!d.trim()||d.trimStart().startsWith("#"))return d;let u=d.match(/^([^:]+):\s*(.*)$/);return u&&u[1]===e?(c=!0,`${e}: ${o}`):d});return c||l.push(`${e}: ${o}`),[...r.slice(0,i+1),...l,...r.slice(a)].join(`
`)}function jn(t,e){return No(t,"theme",e)}function On(t,e){return No(t,"colourScheme",e)}function Gn(t,e){return No(t,"doctype",e)}function Vn(t,e){let o=e.trim(),n=o?t.indexOf(o):-1;return n===-1?null:{start:n,end:n+o.length}}function Un(t,e){let o=Number.parseFloat(globalThis.getComputedStyle(t).lineHeight)||20,n=t.value.slice(0,e.start).split(`
`).length-1,r=Math.max(1,Math.floor(t.clientHeight/o));t.scrollTop=Math.max(0,(n-Math.floor(r/2))*o)}function Xe(t,e,o){let n=Math.min(t.x,e.x),r=Math.max(t.x,e.x),i=Math.min(t.y,e.y),s=Math.max(t.y,e.y);if(r<=o.x||n>=o.x+o.width||s<=o.y||i>=o.y+o.height)return!1;if(t.x===e.x||t.y===e.y)return!0;let a=l=>(e.x-t.x)*(l.y-t.y)-(e.y-t.y)*(l.x-t.x),c=[{x:o.x,y:o.y},{x:o.x+o.width,y:o.y},{x:o.x+o.width,y:o.y+o.height},{x:o.x,y:o.y+o.height}].map(a);return c.some(l=>l>0)&&c.some(l=>l<0)}function zt(t,e){return t.slice(1).some((o,n)=>e.some(r=>Xe(t[n],o,r)))}var Ai=20,Mi=220;function Wn(t){return[...new Set(t.map(e=>Math.round(e*100)/100))].sort((e,o)=>e-o)}var Ao=[{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}];function Yn(t){return t.x>0?0:t.x<0?1:t.y>0?2:3}function Mo(t,e,o,n,r,i=24,s=Ai){let a={x:t.x+o.x*i,y:t.y+o.y*i},c={x:e.x+n.x*i,y:e.y+n.y*i},l=Wn([t.x,e.x,a.x,c.x,...r.flatMap(M=>[M.x-s,M.x+M.width+s])]),d=Wn([t.y,e.y,a.y,c.y,...r.flatMap(M=>[M.y-s,M.y+M.height+s])]),u=new Map(l.map((M,P)=>[M,P])),f=new Map(d.map((M,P)=>[M,P])),p=M=>{let P=u.get(Math.round(M.x*100)/100),N=f.get(Math.round(M.y*100)/100);return P===void 0||N===void 0?null:{column:P,row:N}},h=p(a),m=p(c);if(!h||!m)return null;let g=(M,P)=>!r.some(N=>Xe(M,P,N));if(!g(t,a)||!g(e,c))return null;let y=l.length*d.length*4,S=(M,P,N)=>(P*l.length+M)*4+N,w=new Float64Array(y).fill(Number.POSITIVE_INFINITY),b=new Int32Array(y).fill(-1),v=Yn({x:-n.x,y:-n.y}),E=Yn(o),F=S(h.column,h.row,E);w[F]=0;let $=[{key:F,cost:0}],T=-1;for(;$.length;){$.sort((H,j)=>H.cost-j.cost||H.key-j.key);let M=$.shift();if(M.cost>w[M.key])continue;let P=M.key%4,N=(M.key-P)/4,I=N%l.length,A=(N-I)/l.length;if(I===m.column&&A===m.row&&P===v){T=M.key;break}let C={x:l[I],y:d[A]};for(let H=0;H<4;H=H+1){let j=Ao[H];if(j.x===-Ao[P].x&&j.y===-Ao[P].y)continue;let O=I+j.x,_=A+j.y;if(O<0||O>=l.length||_<0||_>=d.length)continue;let te={x:l[O],y:d[_]};if(!g(C,te))continue;let ve=M.cost+Math.hypot(te.x-C.x,te.y-C.y)+(H===P?0:Mi),fe=S(O,_,H);ve<w[fe]&&(w[fe]=ve,b[fe]=M.key,$.push({key:fe,cost:ve}))}}if(T===-1)return null;let B=[];for(let M=T;M!==-1;M=b[M]){let P=M%4,N=(M-P)/4,I=N%l.length,A=(N-I)/l.length;B.unshift({x:l[I],y:d[A]})}return To([t,...B,e])}function To(t){let e=t.filter((o,n)=>n===0||o.x!==t[n-1].x||o.y!==t[n-1].y);return e.filter((o,n)=>{if(n===0||n===e.length-1)return!0;let r=e[n-1],i=e[n+1];return!(r.x===o.x&&o.x===i.x||r.y===o.y&&o.y===i.y)})}function _n(t,e,o){let n=o.x-e.x,r=o.y-e.y,i=Math.hypot(n,r),s=u=>i?Math.abs(n*(u.y-e.y)-r*(u.x-e.x))/i:Math.hypot(u.x-e.x,u.y-e.y),c=[...t.slice(1,-1),...t.slice(1).map((u,f)=>({x:(t[f].x+u.x)/2,y:(t[f].y+u.y)/2}))];if(!c.length)return null;let l=Math.max(...c.map(s));if(!l)return null;let d={x:(e.x+o.x)/2,y:(e.y+o.y)/2};return c.filter(u=>s(u)===l).reduce((u,f)=>Math.hypot(f.x-d.x,f.y-d.y)<Math.hypot(u.x-d.x,u.y-d.y)?f:u)}function he(t){return String(t??"").replace(/\r\n/g,`
`).split(`
`)}var Ti="iljI|!.,;:'`()[]{}/\\",Ci="tfr",Li="mwMW";function Pi(t){return t===" "?.26:Ti.includes(t)?.28:Ci.includes(t)?.33:Li.includes(t)?.85:t>="0"&&t<="9"?.56:t>="A"&&t<="Z"?.66:.55}function dt(t,e,o=!1){let n=0;for(let r of String(t??""))n+=Pi(r);return n*e*(o?1.03:1)}function Xn(t,e,o,n=!1){return e>0?t.flatMap(r=>{if(dt(r,o,n)<=e)return[r];let i=[],s="";for(let a of r.split(/(?<=\s)/)){let c=s+a;s&&dt(c.trimEnd(),o,n)>e?(i.push(s.trimEnd()),s=a.trimStart()):s=c}return i.push(s.trimEnd()),i.filter((a,c)=>a||!c)}):t}function De(t,e,o,n,r,i,s="middle"){if(!o.length)return"";let a=o.map((c,l)=>{let d=l===0?"":` dy="${n}"`;return`<tspan x="${t}"${d}>${D(c)||" "}</tspan>`}).join("");return`<text x="${t}" y="${e}" text-anchor="${s}" class="${r}" fill="${D(i)}">${a}</text>`}function $e(t,e,o,n,r){let i=t.shape,s=e+n/2,a=o+r/2,c={x:e+12,y:o+12,width:n-24,height:r-24},l={top:{x:s,y:o},right:{x:e+n,y:a},bottom:{x:s,y:o+r},left:{x:e,y:a}},d;if(i==="circle"){let u=Math.min(n,r),f=s-u/2,p=a-u/2,h=u/2;c.x=f+h*.3,c.y=p+h*.3,c.width=h*1.4,c.height=h*1.4,l.top.y=p,l.right.x=f+u,l.bottom.y=p+u,l.left.x=f,d=`<circle class="docdiagram-node-body" cx="${s}" cy="${a}" r="${h}"/>`}else if(i==="oval")c.x+=n*.1,c.width-=n*.2,d=`<ellipse class="docdiagram-node-body" cx="${s}" cy="${a}" rx="${n/2}" ry="${r/2}"/>`;else if(i==="database"){let u=Math.min(r*.22,18);c.y+=u/2,c.height-=u,d=`<path class="docdiagram-node-body" d="M ${e} ${o+u} C ${e} ${o-u/3} ${e+n} ${o-u/3} ${e+n} ${o+u} V ${o+r-u} C ${e+n} ${o+r+u/3} ${e} ${o+r+u/3} ${e} ${o+r-u} Z"/><path class="docdiagram-node-detail" d="M ${e} ${o+u} C ${e} ${o+u*2.3} ${e+n} ${o+u*2.3} ${e+n} ${o+u}" fill="none"/>`}else if(i==="diamond")c.x+=n*.25,c.y+=r*.25,c.width-=n*.5,c.height-=r*.5,l.top={x:s,y:o},l.right={x:e+n,y:a},l.bottom={x:s,y:o+r},l.left={x:e,y:a},d=`<polygon class="docdiagram-node-body" points="${s},${o} ${e+n},${a} ${s},${o+r} ${e},${a}"/>`;else if(i==="rhombus"){let u=Math.min(n*.2,r*.6);c.x+=u,c.width-=u*2,l.left.x=e+u/2,l.right.x=e+n-u/2,d=`<polygon class="docdiagram-node-body" points="${e+u},${o} ${e+n},${o} ${e+n-u},${o+r} ${e},${o+r}"/>`}else if(i==="flattened-hexagon"){let u=Math.min(n*.18,r*.7);c.x+=u,c.width-=u*2,d=`<polygon class="docdiagram-node-body" points="${e+u},${o} ${e+n-u},${o} ${e+n},${a} ${e+n-u},${o+r} ${e+u},${o+r} ${e},${a}"/>`}else if(i==="chevron"){let u=Math.min(n*.16,r*.45);c.x+=u*1.175,c.width-=u*1.35,l.left.x=e+u,d=`<polygon class="docdiagram-node-body" points="${e},${o} ${e+n-u},${o} ${e+n},${a} ${e+n-u},${o+r} ${e},${o+r} ${e+u},${a}"/>`}else if(i==="right-chevron"){let u=Math.min(n*.16,r*.45);c.width-=u,d=`<polygon class="docdiagram-node-body" points="${e},${o} ${e+n-u},${o} ${e+n},${a} ${e+n-u},${o+r} ${e},${o+r}"/>`}else if(i==="document"){let u=Math.max(12,Math.min(26,Math.min(n,r)*.18));c.width-=u*.45,c.y+=2,c.height-=2,d=`<path class="docdiagram-node-body" d="M ${e} ${o} H ${e+n-u} L ${e+n} ${o+u} V ${o+r} H ${e} Z M ${e+n-u} ${o} V ${o+u} H ${e+n}"/>`}else i==="text"?d=`<rect class="docdiagram-node-body" x="${e}" y="${o}" width="${n}" height="${r}"/>`:d=`<rect class="docdiagram-node-body" x="${e}" y="${o}" width="${n}" height="${r}" rx="12"/>`;return{bodyMarkup:d,textBounds:c,anchors:l}}function lt(t,e,o,n,r){let i,s;typeof t=="number"?(i={x:t,y:e,width:o||0,height:n||0},s=r):(i=t,s=e);let a=20,c=15,l=Xn(he(s.label),i.width,16,!0),d=s.subtitle?Xn(he(s.subtitle),i.width,13):[],u=d.length?6:0,f=l.length*a,p=d.length*c,h=f+u+p,m=s.textHAlign||"center",g=m==="left"?i.x:m==="right"?i.x+i.width:i.x+i.width/2,y=m==="left"?"start":m==="right"?"end":"middle",S=i.y+i.height/2,w=s.textVAlign==="top"?i.y:S-h/2;return{centerX:g,textAnchor:y,labelLines:l,subtitleLines:d,labelLineHeight:a,subtitleLineHeight:c,labelStartY:w+a*.72,subtitleStartY:w+f+u+c*.72}}function Ht(t,e,o,n="solid",r="#ffffff"){let i=(a,c,l,d="",u=!1)=>t.bodyMarkup.replace('class="docdiagram-node-body"',`class="${u?"docdiagram-node-stroke-gap":"docdiagram-node-body"}"`).replace("/>",` fill="${D(a)}" stroke="${D(c)}" stroke-width="${l}"${d}/>`).replace('class="docdiagram-node-detail"',`class="docdiagram-node-detail${u?" docdiagram-node-stroke-gap":""}" stroke="${D(c)}" stroke-width="${l}"${d}`),s=n==="dotted"?' stroke-linecap="round" stroke-dasharray="1 6"':n==="dashed"?' stroke-dasharray="8 6"':"";return n==="double"?i(e.fill||"",e.stroke||"",o*3)+i("none",r,o,"",!0):i(e.fill||"",e.stroke||"",o,s)}function Kn(t){return{top:{x:0,y:-1},right:{x:1,y:0},bottom:{x:0,y:1},left:{x:-1,y:0}}[t]}function Z(t){return`${t.x} ${t.y}`}function Zn(t){let e=t.slice(1).map((r,i)=>{let s=t[i];return{start:s,end:r,length:Math.hypot(r.x-s.x,r.y-s.y)}}),n=e.reduce((r,i)=>r+i.length,0)/2;for(let r of e){if(n<=r.length||r===e[e.length-1]){let i=r.length?n/r.length:0;return{x:r.start.x+(r.end.x-r.start.x)*i,y:r.start.y+(r.end.y-r.start.y)*i}}n-=r.length}return t[0]}function Co(t,e){return Math.min(Math.max(Math.abs(e.x-t.x),Math.abs(e.y-t.y),80)/2,140)}var Ri={along:t=>t.x,cross:t=>t.y,point:(t,e)=>({x:t,y:e})},Bi={along:t=>t.y,cross:t=>t.x,point:(t,e)=>({x:e,y:t})},ct=24;function Ii(t,e,o,n,r,i){let s=r.along(t),a=r.cross(t),c=r.along(e),l=r.cross(e),d=r.along(o),u=r.cross(n);if(Math.sign(c-s)===d&&Math.sign(a-l)===u)return[t,r.point(c,a),e];let f=Math.sign(c-s)===d?(s+c)/2:s+d*i,p=Math.sign(a-l)===u?(a+l)/2:l+u*i;return[t,r.point(f,a),r.point(f,p),r.point(c,p),e]}function qi(t,e,o,n,r,i){let s=r.along(t),a=r.cross(t),c=r.along(e),l=r.cross(e),d=r.along(o),u=r.along(n),f=Math.sign(c-s)===d;if(d===-u&&f)return a===l?[t,e]:[t,r.point((s+c)/2,a),r.point((s+c)/2,l),e];if(d===u&&Math.abs(a-l)>=ct){let y=d>0?Math.max(s,c)+ct:Math.min(s,c)-ct;return[t,r.point(y,a),r.point(y,l),e]}let p=i*2,h=s+d*p,m=c+u*p;if(h===m)return[t,r.point(h,a),r.point(h,l),e];let g=Math.min(a,l)-p;return[t,r.point(h,a),r.point(h,g),r.point(m,g),r.point(m,l),e]}function zi(t,e,o,n){if(t.x===e.x&&t.y===e.y)return[t,e];let r=Math.max(Math.abs(e.x-t.x),Math.abs(e.y-t.y)),i=Math.max(r/4,ct),s=o.x!==0,a=s?Ri:Bi;return s===(n.x!==0)?qi(t,e,o,n,a,i):Ii(t,e,o,n,a,i)}function Hi(t,e,o){for(let[n,r]of[[t,e],[t,o],[o,e]]){let i=Math.hypot(r.x-n.x,r.y-n.y);if(i>0)return{x:(r.x-n.x)/i,y:(r.y-n.y)/i}}return{x:1,y:0}}function je(t,e,o,n,r="orthogonal",i,s){let a=Kn(o),c=Kn(n),l=a.x!==0,d=c.x!==0;if(!i&&s?.length&&r!=="orthogonal"&&zt([t,e],s))for(let m of[20,60,120]){let g=Mo(t,e,a,c,s,ct,m),y=g&&_n(g,t,e);if(!y)continue;let S=je(t,e,o,n,r,y);if(!zt(yt(S.path),s)){i=y;break}}let u,f,p,h;if(i&&r==="straight")u=`M ${Z(t)} L ${Z(i)} L ${Z(e)}`,f=i,p={x:i.x-t.x,y:i.y-t.y},h={x:e.x-i.x,y:e.y-i.y};else if(i&&r==="curved"){let m=Co(t,i),g=Co(i,e),y=Hi(t,e,i),S={x:t.x+a.x*m,y:t.y+a.y*m},w={x:i.x-y.x*m,y:i.y-y.y*m},b={x:i.x+y.x*g,y:i.y+y.y*g},v={x:e.x+c.x*g,y:e.y+c.y*g};u=[`M ${Z(t)}`,`C ${Z(S)} ${Z(w)} ${Z(i)}`,`C ${Z(b)} ${Z(v)} ${Z(e)}`].join(" "),f=i,p={x:S.x-t.x,y:S.y-t.y},h={x:e.x-v.x,y:e.y-v.y}}else if(i){let g=(i.x-t.x)*a.x+(i.y-t.y)*a.y<=0,y=(i.x-e.x)*c.x+(i.y-e.y)*c.y<=0,S={x:t.x+a.x*24,y:t.y+a.y*24},w={x:e.x+c.x*24,y:e.y+c.y*24},b=g?[t,S,l?{x:S.x,y:i.y}:{x:i.x,y:S.y},i]:[t,l?{x:i.x,y:t.y}:{x:t.x,y:i.y},i],v=y?[d?{x:w.x,y:i.y}:{x:i.x,y:w.y},w,e]:[d?{x:i.x,y:e.y}:{x:e.x,y:i.y},e],E=[...b,...v].filter(($,T,B)=>T===0||$.x!==B[T-1].x||$.y!==B[T-1].y);u=`M ${Z(E[0])}${E.slice(1).map($=>` L ${Z($)}`).join("")}`,f=Zn(E),p={x:E[1].x-E[0].x,y:E[1].y-E[0].y};let F=E.slice(-2);h={x:F[1].x-F[0].x,y:F[1].y-F[0].y}}else if(r==="straight")u=`M ${Z(t)} L ${Z(e)}`,f={x:(t.x+e.x)/2,y:(t.y+e.y)/2},p={x:e.x-t.x,y:e.y-t.y},h=p;else if(r==="curved"){let m=Co(t,e),g={x:t.x+a.x*m,y:t.y+a.y*m},y={x:e.x+c.x*m,y:e.y+c.y*m};u=`M ${Z(t)} C ${Z(g)} ${Z(y)} ${Z(e)}`,f={x:(t.x+3*g.x+3*y.x+e.x)/8,y:(t.y+3*g.y+3*y.y+e.y)/8},p={x:g.x-t.x,y:g.y-t.y},h={x:e.x-y.x,y:e.y-y.y}}else{let m=zi(t,e,a,c),g=m.filter((S,w)=>w===0||S.x!==m[w-1].x||S.y!==m[w-1].y);if(g.length===1&&(g=[t,e]),s?.length&&zt(g,s)){let S=Mo(t,e,a,c,s,ct);S&&(g=To(S))}u=`M ${Z(g[0])}${g.slice(1).map(S=>` L ${Z(S)}`).join("")}`,f=Zn(g),p={x:g[1].x-g[0].x,y:g[1].y-g[0].y};let y=g.slice(-2);h={x:y[1].x-y[0].x,y:y[1].y-y[0].y}}return{path:u,midpoint:f,startTangent:p,endTangent:h,hitPath:u}}function Lo(t,e){let o=e?13:15;return{x:t.x-o/2,y:t.y-o/2,size:o,radius:e?2:o/2,transform:e?`rotate(45 ${t.x} ${t.y})`:""}}function Jn(t,e,o,n){let r=Lo(o,n),i=n?"Anchored edge waypoint":"Edge waypoint";return`<rect class="docdiagram-edge-waypoint" data-diagram-index="${t}" data-edge-index="${e}" data-anchored="${n}" x="${r.x}" y="${r.y}" width="${r.size}" height="${r.size}" rx="${r.radius}"${r.transform?` transform="${r.transform}"`:""} aria-label="${i}"/>`}function ji(t){let e=Math.max(1,Number(t)||2),o=6+e*2.5,n=Math.max(o*.38,e/2+1);return{size:o,circleRadius:n}}function bt(t,e,o,n,r){let i=D(n),{size:s,circleRadius:a}=ji(r),c=s/2;return e==="arrow"?`<marker id="${t}" markerWidth="${s}" markerHeight="${s}" refX="${s}" refY="${c}" markerUnits="userSpaceOnUse" orient="${o==="start"?"auto-start-reverse":"auto"}"><path fill="${i}" stroke="${i}" d="M 0 0 L ${s} ${c} L 0 ${s} z"/></marker>`:e==="circle"?`<marker id="${t}" markerWidth="${s}" markerHeight="${s}" refX="${c}" refY="${c}" markerUnits="userSpaceOnUse"><circle cx="${c}" cy="${c}" r="${a}" fill="${i}" stroke="${i}"/></marker>`:""}function jt(t,e){let o={x:t.x+t.width/2,y:t.y+t.height/2},n=e.x-o.x,r=e.y-o.y,i=Math.hypot(n,r);if(!Number.isFinite(i)||i<1)return null;let s=Math.max(6,Math.min(Math.min(t.width,t.height)*.28,i*.6,44)),a={x:-r/i*s,y:n/i*s},c=[{x:o.x+a.x,y:o.y+a.y},{x:e.x,y:e.y},{x:o.x-a.x,y:o.y-a.y}],l=[...c.map(p=>p.x),t.x,t.x+t.width],d=[...c.map(p=>p.y),t.y,t.y+t.height],u=Math.min(...l),f=Math.min(...d);return{points:c,polygonPoints:c.map(p=>`${p.x},${p.y}`).join(" "),bounds:{x:u,y:f,width:Math.max(...l)-u,height:Math.max(...d)-f}}}function Oi(t,e,o){let n=t.indexOf('<path class="docdiagram-node-detail"');return(n===-1?t:t.slice(0,n)).replace('class="docdiagram-node-body"',`class="${o}"`).replace("/>",` fill="${e}" stroke="none"/>`)}function Po(t){return Oi(t,"#000000","docdiagram-node-callout-mask-body")}function Ro(t,e){let o=e*2+8;return{x:t.bounds.x-o,y:t.bounds.y-o,width:t.bounds.width+o*2,height:t.bounds.height+o*2}}function Qn(t,e,o,n,r){let i=!!o.fill&&o.fill!=="none",s=!!o.stroke&&o.stroke!=="none",a=i?o.fill:s?"none":o.text||"none",c=Ro(t,n),l=[`<mask id="${r}" maskUnits="userSpaceOnUse" x="${c.x}" y="${c.y}" width="${c.width}" height="${c.height}">`,`<rect class="docdiagram-node-callout-mask-region" x="${c.x}" y="${c.y}" width="${c.width}" height="${c.height}" fill="#ffffff"/>`,Po(e),"</mask>"].join(""),d=i?"":` mask="url(#${r})"`;return[l,a==="none"?"":`<polygon class="docdiagram-node-callout" points="${t.polygonPoints}" fill="${D(a||"")}" stroke="none"${d}/>`,s?`<polygon class="docdiagram-node-callout-outline" points="${t.polygonPoints}" fill="none" stroke="${D(o.stroke||"")}" stroke-width="${n}" stroke-linejoin="round" mask="url(#${r})"/>`:""].join("")}function yt(t,e=12){let o=[],n=/-?\d+(?:\.\d+)?/g,r={x:0,y:0};for(let[,i,s]of t.matchAll(/([MLC])\s*([^MLC]*)/g)){let a=(s.match(n)||[]).map(Number);if(i==="C"){let[c,l,d,u,f,p]=a;for(let h=1;h<=e;h+=1){let m=h/e,g=1-m;o.push({x:g**3*r.x+3*g**2*m*c+3*g*m**2*d+m**3*f,y:g**3*r.y+3*g**2*m*l+3*g*m**2*u+m**3*p})}r={x:f,y:p};continue}for(let c=0;c+1<a.length;c+=2)r={x:a[c],y:a[c+1]},o.push(r)}return o}var Gi=15,Ot=16,Bo=6;function Vi(t){let e=yt(t);return e.slice(1).map((o,n)=>({start:e[n],end:o,index:n,length:Math.hypot(o.x-e[n].x,o.y-e[n].y)})).filter(o=>o.length>0).sort((o,n)=>n.length-o.length||o.index-n.index)}function Ui(t,e){return{x:t.x-e,y:t.y-e,width:t.width+e*2,height:t.height+e*2}}function er(t,e){return t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}function tr(t,e){let o=Math.max(0,...t.map(i=>dt(i,Gi))),n=t.length*Ot,r={x:e.x-o/2,y:e.y-n/2,width:o,height:n};return{center:e,startY:r.y+Ot*.72,lines:t,bounds:r,clear:!0,conflicts:[]}}function Wi(t,e,o){let n={x:(t.start.x+t.end.x)/2,y:(t.start.y+t.end.y)/2},r=t.end.x-t.start.x,s={x:-(t.end.y-t.start.y)/t.length,y:r/t.length};(s.y>0||s.y===0&&s.x>0)&&(s={x:-s.x,y:-s.y});let a=Math.abs(s.x)*e/2+Math.abs(s.y)*o/2+Bo;return[{x:n.x+s.x*a,y:n.y+s.y*a},{x:n.x-s.x*a,y:n.y-s.y*a}]}function Yi(t,e,o,n,r){let i=Ui(t.bounds,Bo),s=[];(t.bounds.x<e.x||t.bounds.y<e.y||t.bounds.x+t.bounds.width>e.x+e.width||t.bounds.y+t.bounds.height>e.y+e.height)&&s.push({kind:"canvas"});for(let a of o)er(i,a.bounds)&&s.push({kind:"node",id:a.id});for(let a of n)er(i,a.bounds)&&s.push({kind:"edge-label",edgeIndex:a.edgeIndex});for(let a of r)a.segments.some(c=>Xe(c.start,c.end,i))&&s.push({kind:"edge-route",edgeIndex:a.edgeIndex});return s}function Gt(t,e=new G(t)){let o=t.edges.map(s=>{let a=e.getById(s.source),c=e.getById(s.target);if(!a||!c)return null;let l=$e(a.node,a.bounds.x,a.bounds.y,a.bounds.width,a.bounds.height).anchors[s.sourceAnchor||"right"],d=$e(c.node,c.bounds.x,c.bounds.y,c.bounds.width,c.bounds.height).anchors[s.targetAnchor||"left"],u=e.entries.filter(({node:p})=>!e.isRelated(p,a.node)&&!e.isRelated(p,c.node)),f=je(l,d,s.sourceAnchor||"right",s.targetAnchor||"left",s.route||"orthogonal",s.waypoint,s.waypoint?void 0:u.map(p=>p.bounds));return{sourceAnchor:l,targetAnchor:d,path:f,label:null}}),n=o.map((s,a)=>s?{edgeIndex:a,segments:Vi(s.path.path)}:null).filter(s=>!!s),r=[],i={x:0,y:0,width:Number(t.canvas.width)||1e3,height:Number(t.canvas.height)||560};return o.forEach((s,a)=>{let c=t.edges[a];if(!s||!c.label)return;let l=he(c.label),d=tr(l,{x:0,y:0}).bounds,u=n.find(g=>g.edgeIndex===a)?.segments||[],f=u.flatMap(g=>Wi(g,d.width,d.height).map(y=>({center:y,hostSegmentIndex:g.index})));f.length||f.push({center:{x:s.path.midpoint.x,y:s.path.midpoint.y-d.height/2-Bo},hostSegmentIndex:-1});let p=e.entries.map(({node:g,bounds:y})=>({id:g.id,bounds:y})),h=n.filter(g=>g.edgeIndex!==a),m=null;for(let{center:g,hostSegmentIndex:y}of f){let S=tr(l,g),w=(c.route||"orthogonal")==="curved"?1:0,b=u.filter(v=>y<0||Math.abs(v.index-y)>w);if(S.conflicts=Yi(S,i,p,r,[...h,{edgeIndex:a,segments:b}]),S.clear=S.conflicts.length===0,m||(m=S),S.clear){m=S;break}}s.label=m,m&&r.push({edgeIndex:a,bounds:m.bounds})}),o}function _i(t,e){return t||`diagram ${e+1}`}function Xi(t,e){let o=new Map,n=[],r="";return t.source.split(`
`).forEach((i,s)=>{let a=i.match(/^([A-Za-z_][\w-]*):/);a&&(r=a[1]);let c=i.match(/^\s*-\s+id:\s*(?:"([^"]+)"|'([^']+)'|([^\s#]+))/),l=t.lineRanges[s];c&&l&&o.set(c[1]||c[2]||c[3],l),r==="edges"&&/^\s*-\s+[^:]+:/.test(i)&&l&&n.push(l)}),e.map(i=>i.kind==="node"?{...i,sourceRange:o.get(i.id)}:{...i,sourceRange:n[i.index]})}function Ki(t,e){let o=Math.min(t.x+t.width,e.x+e.width)-Math.max(t.x,e.x),n=Math.min(t.y+t.height,e.y+e.height)-Math.max(t.y,e.y);return o>0&&n>0?{width:o,height:n}:null}function Zi(t,e){let o=t.entries;for(let n=0;n<o.length;n+=1)for(let r=n+1;r<o.length;r+=1){let i=o[n],s=o[r];if(t.isRelated(i.node,s.node))continue;let a=Ki(i.bounds,s.bounds);a&&e("node-overlap",`Nodes "${i.node.id}" and "${s.node.id}" overlap by ${Math.round(a.width)} by ${Math.round(a.height)} units.`,"warning",[{kind:"node",id:i.node.id},{kind:"node",id:s.node.id}])}}function Ji(t,e){for(let{node:o}of t.entries){let n=Number(o.size?.width)||z.width,r=Number(o.size?.height)||z.height,{textBounds:i}=$e(o,0,0,n,r),s=lt(i,o),a=24;if(o.shape==="text"){let l=he(o.label).find(d=>dt(d.replace(/^#{1,2}\s+/,""),/^#{1,2}\s/.test(d)?24:16)>i.width+a);l!==void 0&&e("label-overflow",`Node "${o.id}" has a line wider than its shape: "${l.trim()}".`,"warning",[{kind:"node",id:o.id}])}let c=s.labelLines.length*s.labelLineHeight+(s.subtitleLines.length?6+s.subtitleLines.length*s.subtitleLineHeight:0);c>i.height+a&&e("label-overflow",`Node "${o.id}" needs ${Math.ceil(c)} units of text height but its shape offers ${Math.floor(i.height+a)}.`,"warning",[{kind:"node",id:o.id}])}}function Qi(t,e,o){let n=i=>({kind:"edge",index:i,source:t.edges[i].source,target:t.edges[i].target}),r=Gt(t,e);for(let[i,s]of(t.edges||[]).entries()){let a=n(i),c=e.getById(s.source),l=e.getById(s.target);for(let[p,h,m]of[["source",s.source,c],["target",s.target,l]])m||o("unknown-edge-endpoint",`Edge "${s.source}" -> "${s.target}" names a ${p} node "${h}" that does not exist, so it is not drawn.`,"error",[a]);if(!c||!l)continue;let d=e.entries.filter(({node:p})=>!e.isRelated(p,c.node)&&!e.isRelated(p,l.node)),u=r[i],f=yt(u.path.path);for(let p of d)f.slice(1).some((m,g)=>Xe(f[g],m,p.bounds))&&o("edge-crosses-node",`Edge "${s.source}" -> "${s.target}" passes through unrelated node "${p.node.id}".`,"warning",[a,{kind:"node",id:p.node.id}]);if(u.label&&!u.label.clear){let p=[a],h=new Set([`edge:${i}`]);for(let m of u.label.conflicts){if(m.kind==="canvas")continue;let g=m.kind==="node"?`node:${m.id}`:`edge:${m.edgeIndex}`;h.has(g)||(h.add(g),p.push(m.kind==="node"?{kind:"node",id:m.id}:n(m.edgeIndex)))}o("edge-label-overlap",`Edge "${s.source}" -> "${s.target}" has no clear position for its label; the deterministic fallback remains visible.`,"warning",p)}}}function Io(t){let e=[],o=_e(t);try{We(t)}catch(r){return e.push({severity:"error",rule:"schema",message:r.message}),{sourceHash:o,messages:e,errorCount:1,warningCount:0}}let n=ft(t).colourScheme;return Ye(t).forEach(r=>{let i=xe(r.source,n);if(i.type!=="flowchart")return;let s=_i(r.id,r.index),a=(d,u,f="warning",p=[])=>{e.push({severity:f,rule:d,message:u,diagram:s,location:{diagramId:r.id,diagramIndex:r.index,fenceRange:r.fenceRange,subjects:Xi(r,p)}})},c=new G(i);Qi(i,c,a),Zi(c,a),Ji(c,a);let l=Mn(i);l&&(a("unbalanced-aspect-ratio",`Fitted content is ${l.width} by ${l.height} units (${l.aspectRatio.toFixed(1)}:1 ${l.direction}); ${l.reason}.`,"warning"),e[e.length-1].suggestedAction={id:"wrap-linear-flow",label:`Wrap this ${l.direction} flow`,diagramIndex:r.index})}),{sourceHash:o,messages:e,errorCount:e.filter(r=>r.severity==="error").length,warningCount:e.filter(r=>r.severity==="warning").length}}function or(t){return t.messages.map(e=>[e.severity,e.diagram?`[${e.diagram}]`:null,e.message,`(${e.rule})`].filter(Boolean).join(" ")).join(`
`)}var ea=[{type:"comment",pattern:"\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/"},{type:"string",pattern:"`(?:\\\\.|[^`\\\\])*`|\"(?:\\\\.|[^\"\\\\\\n])*\"|'(?:\\\\.|[^'\\\\\\n])*'"}],Oe={type:"number",pattern:"\\b(?:0[xXbBoO][\\da-fA-F_]+|\\d[\\d_]*(?:\\.[\\d_]+)?(?:[eE][+-]?\\d+)?)\\b"};function Me(...t){return`\\b(?:${t.join("|")})\\b`}var ta=Me("async","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","export","extends","finally","for","from","function","get","if","implements","import","in","instanceof","interface","let","new","of","private","protected","public","readonly","return","satisfies","set","static","super","switch","this","throw","try","type","typeof","var","void","while","yield"),rr={clike:[...ea,{type:"keyword",pattern:ta},{type:"literal",pattern:Me("true","false","null","undefined","NaN","Infinity")},{type:"type",pattern:Me("any","bigint","boolean","never","number","object","string","symbol","unknown")},Oe],python:[{type:"comment",pattern:"#[^\\n]*"},{type:"string",pattern:`(?:[rRbBfFuU]{0,2})(?:"""[\\s\\S]*?"""|'''[\\s\\S]*?'''|"(?:\\\\.|[^"\\\\\\n])*"|'(?:\\\\.|[^'\\\\\\n])*')`},{type:"keyword",pattern:Me("and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield")},{type:"literal",pattern:Me("True","False","None","self","cls")},Oe],ruby:[{type:"comment",pattern:"#[^\\n]*"},{type:"string",pattern:`"(?:\\\\.|[^"\\\\\\n])*"|'(?:\\\\.|[^'\\\\\\n])*'|:[a-zA-Z_]\\w*[?!]?`},{type:"keyword",pattern:Me("alias","begin","break","case","class","def","do","else","elsif","end","ensure","for","if","in","module","next","raise","require","rescue","return","then","unless","until","when","while","yield")},{type:"literal",pattern:Me("true","false","nil","self")},Oe],json:[{type:"attribute",pattern:'"(?:\\\\.|[^"\\\\])*"(?=\\s*:)'},{type:"string",pattern:'"(?:\\\\.|[^"\\\\])*"'},{type:"literal",pattern:Me("true","false","null")},Oe],yaml:[{type:"comment",pattern:"#[^\\n]*"},{type:"attribute",pattern:"^\\s*(?:-\\s+)?[\\w.-]+(?=\\s*:(?:\\s|$))"},{type:"string",pattern:`"(?:\\\\.|[^"\\\\\\n])*"|'(?:''|[^'\\n])*'`},{type:"meta",pattern:"^---\\s*$|^\\.\\.\\.\\s*$|(?:^|\\s)[|>][+-]?\\s*$|(?:^|\\s)[&*][\\w-]+"},{type:"literal",pattern:Me("true","false","null","yes","no","on","off","True","False","Null")},Oe],sql:[{type:"comment",pattern:"--[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/"},{type:"string",pattern:"'(?:''|[^'\\n])*'"},{type:"keyword",pattern:`\\b(?:${["ADD","ALL","ALTER","AND","AS","ASC","BEGIN","BETWEEN","BY","CASE","COMMIT","CREATE","CROSS","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","EXISTS","FROM","FULL","GROUP","HAVING","IN","INDEX","INNER","INSERT","INTO","IS","JOIN","LEFT","LIKE","LIMIT","NOT","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RETURNING","RIGHT","ROLLBACK","SELECT","SET","TABLE","THEN","TRANSACTION","UNION","UNIQUE","UPDATE","VALUES","VIEW","WHEN","WHERE","WITH"].join("|")})\\b`},{type:"literal",pattern:"\\b(?:NULL|TRUE|FALSE)\\b"},Oe],shell:[{type:"comment",pattern:"#[^\\n]*"},{type:"string",pattern:`"(?:\\\\.|[^"\\\\])*"|'[^']*'`},{type:"meta",pattern:"\\$(?:\\{[^}]*\\}|[\\w@*#?$!-]+)"},{type:"keyword",pattern:Me("case","cd","do","done","echo","elif","else","esac","exit","export","fi","for","function","if","in","local","read","return","set","shift","source","then","unset","until","while")},{type:"attribute",pattern:"(?:^|\\s)--?[\\w-]+"},Oe],markup:[{type:"comment",pattern:"<!--[\\s\\S]*?-->"},{type:"meta",pattern:"<!(?:DOCTYPE|doctype)[^>]*>|<\\?[\\s\\S]*?\\?>"},{type:"tag",pattern:"<\\/?[a-zA-Z][\\w:-]*"},{type:"string",pattern:`"[^"]*"|'[^']*'`},{type:"attribute",pattern:"\\b[a-zA-Z_:][\\w:.-]*(?==)"},{type:"tag",pattern:"\\/?>"}],css:[{type:"comment",pattern:"\\/\\*[\\s\\S]*?\\*\\/"},{type:"string",pattern:`"[^"\\n]*"|'[^'\\n]*'`},{type:"meta",pattern:"@[\\w-]+"},{type:"attribute",pattern:"[a-zA-Z-]+(?=\\s*:)"},{type:"number",pattern:"#[\\da-fA-F]{3,8}\\b|\\b\\d[\\d.]*(?:px|rem|em|%|vh|vw|s|ms|deg|fr)?\\b"}],diff:[{type:"meta",pattern:"^(?:diff|index|@@|\\+\\+\\+|---)[^\\n]*"},{type:"inserted",pattern:"^\\+[^\\n]*"},{type:"deleted",pattern:"^-[^\\n]*"}],ini:[{type:"comment",pattern:"[#;][^\\n]*"},{type:"meta",pattern:"^\\s*\\[[^\\]\\n]*\\]"},{type:"attribute",pattern:"^\\s*[\\w.-]+(?=\\s*=)"},{type:"string",pattern:`"[^"\\n]*"|'[^'\\n]*'`},{type:"literal",pattern:Me("true","false")},Oe]},oa={javascript:"clike",js:"clike",jsx:"clike",mjs:"clike",cjs:"clike",typescript:"clike",ts:"clike",tsx:"clike",java:"clike",kotlin:"clike",kt:"clike",swift:"clike",scala:"clike",go:"clike",golang:"clike",rust:"clike",rs:"clike",c:"clike",cpp:"clike","c++":"clike",cs:"clike",csharp:"clike",php:"clike",dart:"clike",python:"python",py:"python",ruby:"ruby",rb:"ruby",json:"json",jsonc:"json",yaml:"yaml",yml:"yaml",sql:"sql",postgresql:"sql",mysql:"sql",bash:"shell",sh:"shell",shell:"shell",zsh:"shell",console:"shell",terminal:"shell",html:"markup",xml:"markup",svg:"markup",vue:"markup",css:"css",scss:"css",less:"css",diff:"diff",patch:"diff",ini:"ini",toml:"ini",conf:"ini"},nr=new Map;function na(t){let e=nr.get(t);if(e)return e;let o=new RegExp(rr[t].map(n=>`(${n.pattern})`).join("|"),"gm");return nr.set(t,o),o}function ra(t){let e=String(t??"").trim().toLowerCase();return oa[e]||null}function ir(t,e){let o=ra(e);if(!o)return D(t);let n=rr[o],r=na(o);r.lastIndex=0;let i=[],s=0,a;for(;a=r.exec(t);){if(!a[0]){r.lastIndex+=1;continue}a.index>s&&i.push(D(t.slice(s,a.index)));let c=a.findIndex((f,p)=>p>0&&f!==void 0)-1,l=n[c]?.type,d=a[0].match(/^\s*/)[0],u=a[0].slice(d.length);i.push(D(d)),i.push(l&&u?`<span class="docdiagram-token-${l}">${D(u)}</span>`:D(u)),s=a.index+a[0].length}return i.push(D(t.slice(s))),i.join("")}var Vt={section:{attributes:["title","palette","fill","stroke","text"]},panel:{attributes:["title","palette","fill","stroke","text"]},callout:{attributes:["kind","title","palette","fill","stroke","text"]},grid:{attributes:["columns"]},stack:{attributes:[]},diagram:{attributes:["id"],void:!0},toc:{attributes:["depth","diagrams"],void:!0}},ia=Object.keys(Vt);function zo(t){return!!Vt[t].void}var aa=/\u0001ref:([^\u0001]*)\u0001/g,sa=/\u0001toc:([^\u0001]*)\u0001/g;function ca(t){let e=t.replace(/\\#/g,""),o=e.indexOf("#"),n=r=>r.replace(/\u0002/g,"#");return o===-1?{hasPlaceholder:!1,before:n(e),after:"",text:n(e)}:{hasPlaceholder:!0,before:n(e.slice(0,o)),after:n(e.slice(o+1)),text:n(e.slice(0,o)+e.slice(o+1))}}function da(t){return t.replace(/!\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/(\*\*|__|~~|\*|_)/g,"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/[\s-]+/g,"-")||"section"}function la(t,e){let o=da(t),n=e.headingOccurrences||(e.headingOccurrences=new Map),r=e.usedHeadingIds||(e.usedHeadingIds=new Set),i=(n.get(o)||0)+1,s=i===1?o:`${o}-${i}`;for(;r.has(s);)i+=1,s=`${o}-${i}`;return n.set(o,i),r.add(s),s}function Ho(t){let e=[],o="",n=!1,r=t.trim().replace(/^\||\|$/g,"");for(let i of r)n?(o+=i,n=!1):i==="\\"?n=!0:i==="|"?(e.push(o.trim()),o=""):o+=i;return e.push(o.trim()),e}function ar(t){let e=Ho(t);return!e.length||!e.every(o=>/^:?-{3,}:?$/.test(o))?null:e.map(o=>o.startsWith(":")&&o.endsWith(":")?"center":o.startsWith(":")?"left":o.endsWith(":")?"right":"")}function Ke(t){return t.match(/^(\s*)([-+*]|\d+[.)])\s+(.+)$/)}function xt(t){let e=t.match(new RegExp(`^:::(${ia.join("|")})(?:\\s+\\{(.*)\\})?\\s*$`));if(!e)return null;let o={},n=e[2];if(n!==void 0){let r=0,i=/\s*([a-z][\w-]*)=(?:"([^"]*)"|([^\s}]+))/gi,s;for(;s=i.exec(n);){if(s.index!==r||o[s[1]]!==void 0)return null;o[s[1]]=s[2]??s[3],r=i.lastIndex}if(n.slice(r).trim())return null}return{name:e[1],attributes:o}}function ua(t){let e=xt(t);if(!e||e.name!=="diagram")return null;let o=Object.keys(e.attributes),n=e.attributes.id;return o.length===1&&n?{id:n}:null}function qo(t){let e=t.match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m);return e?.[1]??e?.[2]??null}function ma(t){let e=t.match(/^caption:[ \t]*(\S.*?)\s*$/m),o=e?qe(e[1]):null;return typeof o=="string"&&o?o:null}function ga(t){return t.replace(/^(?: {0,3}> ?)+/,"")}function cr(t){return/^:::(?:\s+.*)?$/.test(t)}function ha(t,e,o){let n=1,r=null;for(let i=e+1;i<o;i+=1){let s=t[i];if(r){Ue(s,r)&&(r=null);continue}let a=Re(s);if(a){r=a.marker;continue}let c=xt(s);if(c)zo(c.name)||(n+=1);else if(cr(s)&&(n-=1,!n))return i}return-1}function pa(t){return/^#[\da-f]{3,8}$/i.test(t)}function fa(t,e="classic",o="light"){let n=t.palette!==void 0;if(n&&!ke.includes(t.palette))return null;for(let a of["fill","stroke","text"])if(t[a]!==void 0&&!pa(t[a]))return null;let r=n?ye(e,o,t.palette):null,i=Object.fromEntries(["fill","stroke","text"].filter(a=>t[a]!==void 0).map(a=>[a,t[a]])),s=Ne(r||{},i);return Object.entries(s).filter(([,a])=>a!==void 0).map(([a,c])=>`--docdiagram-component-${a}:${c}`).join(";")}function sr(t,e=!1){let o=String(t).trim();if(o.startsWith("//")||o.startsWith("\\"))return!1;if(!o||o.startsWith("#")||o.startsWith("/")||o.startsWith("./")||o.startsWith("../")||o.startsWith("?")||e&&/^data:image\/(?:gif|jpeg|png|webp);base64,/i.test(o))return!0;let n=o.match(/^([a-z][a-z\d+.-]*):/i);return!n||["http","https","mailto"].includes(n[1].toLowerCase())}function Ee(t){let e=[],o=String(t).replace(/`([^`]+)`/g,(n,r)=>{let i=`\0${e.length}\0`;return e.push(`<code>${D(r)}</code>`),i});return o=o.replace(/\{ref=(?:"([^"}]+)"|([^\s}]+))\}/g,(n,r,i)=>`ref:${r??i}`),o=D(o),o=o.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(n,r,i)=>{let s=i.replace(/&amp;/g,"&");return sr(s,!0)?`<img src="${D(s)}" alt="${r}">`:`![${r}](${D(i)})`}),o=o.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(n,r,i)=>{let s=i.replace(/&amp;/g,"&");return sr(s)?`<a href="${D(s)}">${r}</a>`:`[${r}](${D(i)})`}),o=o.replace(/(\*\*|__)(?=\S)([\s\S]*?\S)\1/g,"<strong>$2</strong>").replace(/~~(?=\S)([\s\S]*?\S)~~/g,"<del>$1</del>").replace(/(?<!\*)\*(?=\S)([\s\S]*?\S)\*(?!\*)/g,"<em>$1</em>").replace(/(?<!_)_(?=\S)([\s\S]*?\S)_(?!_)/g,"<em>$1</em>"),o.replace(/\u0000(\d+)\u0000/g,(n,r)=>e[Number(r)])}function jo(t,e={diagramIndex:0},o){let n=t.replace(/\r\n/g,`
`).split(`
`),r=o?.renderDiagram??((w,b)=>{throw new Error("renderDiagram callback is required for diagram blocks.")}),i=!!o?.diagramReferenceRegistry,s=o?.documentColorScheme||"classic",a=o?.documentTheme||"light",c=o?.diagramReferenceRegistry||(()=>{let w=new Map,b=new Set,v=new Map,E=new Set,F=n.map(ga);for(let T=0;T<F.length;T+=1){let B=Re(F[T]);if(!B)continue;let M=st(F,T+1,B.marker);if(M===-1)break;if(B.info==="diagram"){let P=F.slice(T+1,M).join(`
`),N=qo(P);N&&(E.add(N),w.has(N)?b.add(N):w.set(N,{id:N,source:P}))}T=M}let $=null;for(let T of F){if($){Ue(T,$)&&($=null);continue}let B=Re(T);if(B){$=B.marker;continue}let M=ua(T);M&&v.set(M.id,(v.get(M.id)||0)+1)}return{definitions:w,duplicateDefinitionIds:b,referenceCounts:v,diagramIds:E}})(),{definitions:l,duplicateDefinitionIds:d,referenceCounts:u}=c;if(e.figures||(e.figures=new Map),e.contents||(e.contents=[]),!i){let w=e.usedHeadingIds||(e.usedHeadingIds=new Set);for(let b of c.diagramIds)w.add(b)}function f(w){let b=qo(w),v=ma(w),E=v?ca(v):null,F=E?.hasPlaceholder?e.figureNumber=(e.figureNumber||0)+1:null,$=E?F===null?E.text:`${E.before}${F}${E.after}`:null;E&&b&&(e.figures.set(b,{id:b,number:F,text:$}),e.contents.push({kind:"figure",level:0,id:b,text:Ee($)}));let T=r(w,e.diagramIndex,{id:b,caption:$});return e.diagramIndex+=1,T}function p(w){let b=n[w]||"";return!b.trim()||/^```/.test(b)||/^(#{1,6})\s+/.test(b)||/^ {0,3}&gt;|^ {0,3}>/.test(b)||/^ {0,3}(?:[-*_]\s*){3,}$/.test(b)||/^:::/.test(b)||!!Ke(b)||w+1<n.length&&!!ar(n[w+1])}function h(w,b){let v=Ke(n[w]),E=/^\d/.test(v[2]),F=[],$=w,T=E?Number.parseInt(v[2],10):null;for(;$<n.length;){let N=Ke(n[$]);if(!N||N[1].length!==b||/^\d/.test(N[2])!==E)break;let I={content:[N[3]],children:[]};for($+=1;$<n.length;){let A=Ke(n[$]);if(A&&A[1].length>b){let C=h($,A[1].length);I.children.push(C.html),$=C.index;continue}if(!n[$].trim()){$+=1;let C=$<n.length?Ke(n[$]):null;if($>=n.length||!C||C[1].length<=b)break;continue}if(/^\s+/.test(n[$])&&!Ke(n[$])){I.content.push(n[$].trim()),$+=1;continue}break}F.push(I)}let B=E?"ol":"ul",M=E&&T!==1?` start="${T}"`:"",P=F.map(N=>{let I=!E&&N.content.length===1&&N.content[0].match(/^\[([ xX])\]\s+(.*)$/),A=I?`<input type="checkbox" disabled${I[1].toLowerCase()==="x"?" checked":""}> ${Ee(I[2])}`:Ee(N.content.join(" "));return`<li${I?' class="docdiagram-task-list-item"':""}>${A}${N.children.join("")}</li>`}).join("");return{html:`<${B}${M}>${P}</${B}>`,index:$}}function m(w){let{name:b,attributes:v}=w;if(Object.keys(v).some(F=>!Vt[b].attributes.includes(F)))return null;if(b==="diagram"){let F=v.id;if(!F)return null;let $=l.get(F);return $?d.has(F)?`<section class="docdiagram-error"><strong>Diagram "${D(F)}" has multiple definitions.</strong></section>`:(u.get(F)||0)>1?`<section class="docdiagram-error"><strong>Diagram "${D(F)}" is referenced more than once.</strong></section>`:f($.source):`<section class="docdiagram-error"><strong>Diagram "${D(F)}" could not be found.</strong></section>`}let E=v.depth===void 0?3:Number(v.depth);return!Number.isInteger(E)||E<1||E>6||v.diagrams!==void 0&&v.diagrams!=="true"&&v.diagrams!=="false"?null:`toc:${E}:${v.diagrams==="true"}`}function g(w,b){let v=xt(n[w]);if(!v||zo(v.name))return null;let E=ha(n,w,b);if(E===-1)return null;let{name:F,attributes:$}=v;if(Object.keys($).some(N=>!Vt[F].attributes.includes(N)))return null;if(F==="grid"){let N=nn[$.columns];if(!N)return null;let I=[],A=w+1;for(;A<E;){if(!n[A].trim()){A+=1;continue}let C=xt(n[A]);if(!C||!["panel","callout","stack"].includes(C.name))return null;let H=g(A,E);if(!H)return null;I.push(`<div class="docdiagram-grid-item">${H.html}</div>`),A=H.next}return{html:`<div class="docdiagram-grid" style="--docdiagram-grid-columns:${N}">${I.join("")}</div>`,next:E+1}}if(F==="stack")return Object.keys($).length?null:{html:`<div class="docdiagram-stack">${y(w+1,E)}</div>`,next:E+1};let T=fa($,s,a);if(T===null||F==="callout"&&$.kind!==void 0&&!on.includes($.kind))return null;let B=$.title?`<div class="docdiagram-component-title">${Ee($.title)}</div>`:"",M=y(w+1,E),P=`docdiagram-component${F==="callout"?"":` docdiagram-${F}`}${T?" docdiagram-component-styled":""}`;if(F==="callout"){let N=$.kind||"info";return{html:`<aside class="${P} docdiagram-callout docdiagram-callout-${N}"${T?` style="${T}"`:""} aria-label="${D($.title||N)} callout"><div class="docdiagram-callout-kind">${D(N)}</div>${B}${M}</aside>`,next:E+1}}return{html:`<section class="${P}"${T?` style="${T}"`:""}>${B}${M}</section>`,next:E+1}}function y(w=0,b=n.length){let v=[],E=w;for(;E<b;){let F=n[E];if(!F.trim()){E+=1;continue}if(/^:::/.test(F)){let N=xt(F);if(N&&zo(N.name)){let A=m(N);v.push(A??`<pre class="docdiagram-literal-source"><code>${D(F)}</code></pre>`),E+=1,A!==null&&E<b&&cr(n[E])&&(E+=1);continue}let I=g(E,b);I?(v.push(I.html),E=I.next):(v.push(`<pre class="docdiagram-literal-source"><code>${D(F)}</code></pre>`),E+=1);continue}let $=Re(F);if($){let N=n.slice(E+1,b).findIndex(C=>Ue(C,$.marker));if(N===-1){v.push('<section class="docdiagram-error"><strong>Unclosed code block.</strong></section>');break}let I=E+N+1,A=n.slice(E+1,I).join(`
`);if($.info==="diagram"){let C=qo(A);C&&d.has(C)?v.push(`<section class="docdiagram-error"><strong>Diagram "${D(C)}" has multiple definitions.</strong></section>`):(!C||!u.has(C))&&v.push(f(A))}else{let C=$.info?` class="language-${D($.info)}"`:"";v.push(`<pre><code${C}>${ir(A,$.info)}</code></pre>`)}E=I+1;continue}let T=F.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);if(T){let N=T[1].length,I=la(T[2],e);e.contents.push({kind:"heading",level:N,id:I,text:Ee(T[2])}),v.push(`<h${N} id="${I}">${Ee(T[2])}</h${N}>`),E+=1;continue}if(/^ {0,3}(?:[-*_]\s*){3,}$/.test(F)){v.push("<hr>"),E+=1;continue}if(/^ {0,3}>/.test(F)){let N=[];for(;E<b&&/^ {0,3}>/.test(n[E]);)N.push(n[E].replace(/^ {0,3}> ?/,"")),E+=1;v.push(`<blockquote>${jo(N.join(`
`),e,{...o,diagramReferenceRegistry:c})}</blockquote>`);continue}let B=Ke(F);if(B){let N=h(E,B[1].length);v.push(N.html),E=N.index;continue}let M=E+1<b?ar(n[E+1]):null;if(M){let N=Ho(F),I=[];for(E+=2;E<b&&n[E].includes("|")&&n[E].trim();)I.push(Ho(n[E])),E+=1;let A=(C,H)=>H.map((j,O)=>`<${C}${M[O]?` style="text-align:${M[O]}"`:""}>${Ee(j||"")}</${C}>`).join("");v.push(`<table><thead><tr>${A("th",N)}</tr></thead><tbody>${I.map(C=>`<tr>${A("td",C)}</tr>`).join("")}</tbody></table>`);continue}let P=[F.trim()];for(E+=1;E<b&&!p(E);)P.push(n[E].trim()),E+=1;v.push(`<p>${Ee(P.join(" "))}</p>`)}return v.join("")}let S=y();return i?S:ya(S,e)}function ba(t,e,o){let n=t.filter(l=>l.kind==="figure"?o:l.level<=e);if(!n.length)return"";let r=n.filter(l=>l.kind==="heading").map(l=>l.level),i=Math.min(...r.length?r:[1]),s=[],a=[];for(let l of n){let d=l.kind==="figure"?(a.length?a[a.length-1].level:0)+1:l.level-i+1;for(;a.length&&a[a.length-1].level>=d;)a.pop();let u={entry:l,level:d,children:[]};(a.length?a[a.length-1].children:s).push(u),l.kind==="heading"&&a.push(u)}let c=l=>`<ul>${l.map(d=>`<li class="docdiagram-contents-${d.entry.kind}"><a href="#${D(d.entry.id)}">${d.entry.text}</a>${d.children.length?c(d.children):""}</li>`).join("")}</ul>`;return`<nav class="docdiagram-contents" aria-label="Table of contents">${c(s)}</nav>`}function ya(t,e){let o=e.figures||new Map,n=e.contents||[];return t.replace(aa,(r,i)=>{let s=o.get(i);return s?`<a href="#${D(i)}">${s.number===null?Ee(s.text):String(s.number)}</a>`:`<strong class="docdiagram-error-inline">Unknown reference "${D(i)}"</strong>`}).replace(sa,(r,i)=>{let[s,a]=i.split(":");return ba(n,Number(s),a==="true")})}var Go={h1:{fontSize:26,lineHeight:34},h2:{fontSize:20,lineHeight:26},body:{fontSize:16,lineHeight:20}},Vo=.72,xa=/^(#{1,2})\s+(.*)$/,Oo=/(\*\*([^*]+)\*\*)|((?<!\w)_([^_\s](?:[^_]*[^_\s])?)_)(?!\w)|(`([^`]+)`)/g;function wa(t){let e=t.match(xa);return e?{kind:e[1].length===1?"h1":"h2",text:e[2]}:{kind:"body",text:t}}function Ea(t){let e=[],o=0,n;for(Oo.lastIndex=0;n=Oo.exec(t);)n.index>o&&e.push({text:t.slice(o,n.index)}),n[2]!==void 0?e.push({text:n[2],bold:!0}):n[4]!==void 0?e.push({text:n[4],italic:!0}):n[6]!==void 0&&e.push({text:n[6],code:!0}),o=Oo.lastIndex;return(o<t.length||!e.length)&&e.push({text:t.slice(o)}),e}function Sa(t,e,o,n,r,i){let s=[];o&&(s.push(`x="${n}"`),r!==null&&s.push(`dy="${r}"`));let a=[`font-size:${i}px`];(t.bold||e)&&a.push("font-weight:700"),t.italic&&a.push("font-style:italic"),t.code&&a.push("font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace"),s.push(`style="${a.join(";")}"`);let c=D(t.text)||" ";return`<tspan ${s.join(" ")}>${c}</tspan>`}function va(t,e,o,n,r){if(!n.length)return"";let i=o+Go[n[0].kind].lineHeight*Vo,s=o,a=0,c=n.map((l,d)=>{let u=Go[l.kind],f=s+u.lineHeight*Vo,p=d===0?null:f-a;s+=u.lineHeight,a=f;let h=Ea(l.text),m=l.kind!=="body";return h.map((g,y)=>Sa(g,m,y===0,t,y===0?p:null,u.fontSize)).join("")}).join("");return`<text x="${t}" y="${i}" text-anchor="${e}" class="docdiagram-node-label docdiagram-node-label-markdown" fill="${D(r)}">${c}</text>`}function dr(t,e,o){let n=he(e.label).map(wa),r=e.subtitle?he(e.subtitle):[];if(!n.length&&!r.length)return"";let i=15,s=n.reduce((S,w)=>S+Go[w.kind].lineHeight,0),a=r.length?6:0,c=r.length*i,l=s+a+c,d=e.textHAlign||"center",u=d==="left"?t.x:d==="right"?t.x+t.width:t.x+t.width/2,f=d==="left"?"start":d==="right"?"end":"middle",p=t.y+t.height/2,h=e.textVAlign==="top"?t.y:p-l/2,m=va(u,f,h,n,o),g=h+s+a+i*Vo,y=r.length?De(u,g,r,i,"docdiagram-node-subtitle",o,f):"";return m+y}function Ut(t){return[t?.caption?' class="docdiagram docdiagram-captioned"':' class="docdiagram"',t?.id?` id="${D(t.id)}"`:""].join("")}function Wt(t,e){return t?.caption?`<figcaption class="docdiagram-caption">${e(t.caption)}</figcaption>`:""}function Yt(t,e,o,n){if(t.description===void 0)return{attributes:`role="img" aria-label="${D(o)}"`,metadata:""};let r=`docdiagram-title-${e}`;if(!n?.caption)return{attributes:`role="img" aria-labelledby="${r}"`,metadata:`<title id="${r}">${D(t.description)}</title>`};let i=`docdiagram-description-${e}`;return{attributes:`role="img" aria-labelledby="${r}" aria-describedby="${i}"`,metadata:`<title id="${r}">${D(n.caption)}</title><desc id="${i}">${D(t.description)}</desc>`}}function Uo(t,e,o,n=!1){let r=e!=="none",i=e==="flowchart",s=o.expandedDiagramIndex===t;return['<div class="docdiagram-diagram-toolbar" role="toolbar" aria-label="Diagram controls">',`<button type="button" class="docdiagram-icon-button docdiagram-zoom-in" data-diagram-index="${t}" aria-label="Zoom in" title="Zoom in">+</button>`,`<button type="button" class="docdiagram-icon-button docdiagram-zoom-out" data-diagram-index="${t}" aria-label="Zoom out" title="Zoom out">\u2212</button>`,`<button type="button" class="docdiagram-icon-button docdiagram-fit" data-diagram-index="${t}" aria-label="Zoom to fit" title="Zoom to fit">\u22A1</button>`,`<button type="button" class="docdiagram-icon-button docdiagram-toggle-expand" data-diagram-index="${t}" aria-pressed="${s}" aria-label="${s?"Collapse diagram":"Expand diagram"}" title="${s?"Collapse diagram (Esc)":"Expand diagram"}">${s?"\u2921":"\u2922"}</button>`,'<div class="docdiagram-diagram-export">',`<button type="button" class="docdiagram-icon-button docdiagram-export-toggle" data-diagram-index="${t}" aria-label="Export diagram" aria-expanded="false" title="Export diagram">\u21E7</button>`,'<div class="docdiagram-diagram-export-menu" hidden>',`<button type="button" class="docdiagram-open-diagram" data-diagram-index="${t}">Open full diagram</button>`,`<button type="button" class="docdiagram-save-diagram" data-diagram-index="${t}">Save as Skryb diagram</button>`,`<button type="button" class="docdiagram-download-diagram" data-diagram-index="${t}">Save as SVG</button>`,`<button type="button" class="docdiagram-print-diagram" data-diagram-index="${t}">Print / Save as PDF</button>`,"</div>","</div>",r?o.editingDiagramIndex===t?`<button type="button" class="docdiagram-icon-button docdiagram-done-editing" aria-label="Done editing" title="Done editing">\u2713</button><button type="button" class="docdiagram-icon-button docdiagram-cancel-editing" aria-label="Cancel editing and discard changes" title="Cancel editing and discard changes">\xD7</button>${i?`<button type="button" class="docdiagram-icon-button docdiagram-create-node" data-diagram-index="${t}" aria-label="New node" title="New node">+</button>`:""}`:o.editingDiagramIndex===null?`${n?`<button type="button" class="docdiagram-icon-button docdiagram-relayout" data-diagram-index="${t}" aria-label="Relayout diagram" title="Relayout diagram">\u21BB</button>`:""}<button type="button" class="docdiagram-icon-button docdiagram-start-editing" data-diagram-index="${t}" aria-label="Edit diagram" title="Edit diagram">\u270E</button>`:"":"","</div>"].join("")}function lr(t,e,o,n,r){let{selectedNode:i,selectedEdge:s,editingNode:a,editingEdge:c,connectionDrag:l,diagramZooms:d,diagramCameraOffsets:u}=o,f=o.editingDiagramIndex===e,p=new G(t),h=p.entries,m=Gt(t,p),g=[],y=[],S=ue[o.documentColorScheme][o.documentTheme==="dark"?"dark":"light"],w=Object.entries(S).filter(([,A])=>A.gradient).map(([A,C])=>`<linearGradient id="docdiagram-${o.documentColorScheme}-${e}-${A}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${D(C.gradient||C.fill)}"/><stop offset="1" stop-color="${D(C.fill)}"/></linearGradient>`).join(""),b=t.edges.map((A,C)=>{let H=m[C];if(!H)return"";let{sourceAnchor:j,targetAnchor:O,path:_,label:te}=H,ve=te?.center.x??_.midpoint.x,fe=te?.center.y??_.midpoint.y-10,se=vt(t,A,o.documentTheme,o.documentColorScheme),ce=s?.diagramIndex===e&&s.edgeIndex===C,de=ce&&c?.diagramIndex===e&&c.edgeIndex===C,le=Number(se.strokeWidth)||2,J=le+(ce?2:0),Q=A.strokeType,Be=220,X=72,ee=lo(A,"start"),Te=lo(A,"end"),K=`docdiagram-marker-${e}-${C}-start`,Ce=`docdiagram-marker-${e}-${C}-end`;ee!=="none"&&g.push(bt(K,ee,"start",se.stroke||"",J)),Te!=="none"&&g.push(bt(Ce,Te,"end",se.stroke||"",J)),ce&&f&&y.push(`<circle class="docdiagram-edge-endpoint" data-diagram-index="${e}" data-edge-index="${C}" data-endpoint="source" cx="${j.x}" cy="${j.y}" r="7"/>`,`<circle class="docdiagram-edge-endpoint" data-diagram-index="${e}" data-edge-index="${C}" data-endpoint="target" cx="${O.x}" cy="${O.y}" r="7"/>`,Jn(e,C,A.waypoint??_.midpoint,!!A.waypoint));let et=[ee!=="none"?` marker-start="url(#${K})"`:"",Te!=="none"?` marker-end="url(#${Ce})"`:""].join(""),ut=D(se.stroke||""),ro=Q==="double"?`<path class="docdiagram-edge" d="${_.path}" stroke="${ut}" stroke-width="${J+le*2}"/><path d="${_.path}" fill="none" stroke="${D(S.background.fill)}" stroke-width="${le}"/><path d="${_.path}"${et} fill="none" stroke="none"/>`:`<path class="docdiagram-edge" d="${_.path}"${et} stroke="${ut}" stroke-width="${J}"${Q==="dotted"?' stroke-linecap="round" stroke-dasharray="1 6"':""}${Q==="dashed"?' stroke-dasharray="8 6"':""}/>`;return[`<g class="docdiagram-edge-group${ce?" docdiagram-edge-selected":""}" data-diagram-index="${e}" data-edge-index="${C}">`,`<path class="docdiagram-edge-hit" d="${_.hitPath}" fill="none" stroke="transparent" stroke-width="16"/>`,ro,de?`<foreignObject class="docdiagram-inline-editor-host" x="${ve-Be/2}" y="${fe-X/2}" width="${Be}" height="${X}"><textarea class="docdiagram-inline-editor docdiagram-inline-editor-edge" aria-label="Edit edge label. Press Enter for a new line. Press Control or Command plus Enter to save. Press Escape to cancel.">${D(A.label||"")}</textarea></foreignObject>`:te?De(ve,te.startY,te.lines,Ot,"docdiagram-edge-label",se.text||""):"","</g>"].join("")}).join(""),v=[],E=h.map(({node:A,position:C},H)=>{let j=C.x,O=C.y,_=Number(A.size?.width)||190,te=Number(A.size?.height)||80,ve=Ge(t,A,o.documentTheme,o.documentColorScheme),fe=A.palette||St(t,A.class)?.palette,se=fe?S?.[fe]:void 0,ce=A.arrow?jt({x:j,y:O,width:_,height:te},A.arrow):null,de=ce&&se?.gradient?`docdiagram-${o.documentColorScheme}-${e}-${fe}-callout-${H}`:"";de&&se&&v.push(`<linearGradient id="${de}" gradientUnits="userSpaceOnUse" x1="${j}" y1="${O}" x2="${j}" y2="${O+te}"><stop offset="0" stop-color="${D(se.gradient||se.fill)}"/><stop offset="1" stop-color="${D(se.fill)}"/></linearGradient>`);let le=se?.gradient?{...ve,fill:de?`url(#${de})`:`url(#docdiagram-${o.documentColorScheme}-${e}-${fe})`}:ve,J=i?.diagramIndex===e&&i.nodeId===A.id,Q=J&&a?.diagramIndex===e&&a.nodeId===A.id,Be=(Number(le.strokeWidth)||2)+(J?2:0),X=$e(A,j,O,_,te),ee=lt(X.textBounds,A),Te=A.shape==="text";return[`<g class="docdiagram-node${J?" docdiagram-node-selected":""}" data-diagram-index="${e}" data-node-id="${D(A.id)}">`,Ht(X,le,Be,A.strokeType,S.background.fill),ce?Qn(ce,X.bodyMarkup,le,Be,`docdiagram-callout-mask-${e}-${H}`):"",Q?`<foreignObject class="docdiagram-inline-editor-host" x="${X.textBounds.x}" y="${X.textBounds.y}" width="${X.textBounds.width}" height="${X.textBounds.height}"><textarea class="docdiagram-inline-editor docdiagram-inline-editor-node" aria-label="Edit node label. Press Enter for a new line. Press Control or Command plus Enter to save. Press Escape to cancel.">${D(A.label)}</textarea></foreignObject>`:Te?dr(X.textBounds,A,le.text||""):De(ee.centerX,ee.labelStartY,ee.labelLines,ee.labelLineHeight,"docdiagram-node-label",le.text||"",ee.textAnchor),!Q&&!Te&&ee.subtitleLines.length?De(ee.centerX,ee.subtitleStartY,ee.subtitleLines,ee.subtitleLineHeight,"docdiagram-node-subtitle",le.text||"",ee.textAnchor):"",J&&f&&!Q?[["top-left",j-7,O-7],["top-right",j+_-7,O-7],["bottom-left",j-7,O+te-7],["bottom-right",j+_-7,O+te-7]].map(([K,Ce,et])=>`<rect class="docdiagram-resize-handle" data-resize-corner="${K}" x="${Ce}" y="${et}" width="14" height="14" rx="3"/>`).join(""):"",J&&f&&!Q?ne.map(K=>{let Ce=X.anchors[K];return`<circle class="docdiagram-connection-port" data-anchor="${K}" cx="${Ce.x}" cy="${Ce.y}" r="7" aria-label="${K} connection port"/>`}).join(""):"",J&&f&&!Q&&A.arrow?`<circle class="docdiagram-callout-handle" data-diagram-index="${e}" data-node-id="${D(A.id)}" cx="${A.arrow.x}" cy="${A.arrow.y}" r="7" aria-label="Callout pointer target"/>`:"","</g>"].join("")}).join(""),F=Number(t.canvas.width)||1e3,$=Number(t.canvas.height)||560,T=o.expandedDiagramIndex===e,B=o.diagramViewportHeights.get(e),M=B&&!T?` style="box-sizing: border-box; height: ${B}px; min-height: 0"`:"",P=u.get(e)||{x:0,y:0},N=`width: ${d.get(e)||100}%; transform: translate(${P.x}px, ${P.y}px)`,I=Yt(t,e,"Architecture diagram",r);return[`<figure${Ut(r)} data-diagram-index="${e}" data-diagram-type="flowchart" data-editing="${f}" data-expanded="${T}"${M}>`,n(e,"flowchart",o,t.layout!==void 0),`<svg viewBox="0 0 ${F} ${$}" ${I.attributes} data-diagram-index="${e}" style="${N}">`,I.metadata,`<defs>${w}${v.join("")}${g.join("")}</defs>`,E,b,l?.diagramIndex===e?`<path class="docdiagram-connection-preview${l.invalid?" docdiagram-connection-invalid":""}" d="${je(l.start,l.current,l.sourceAnchor,l.targetAnchor||l.sourceAnchor,"straight").path}"/>`:"",y.join(""),"</svg>",Wt(r,Ee),"</figure>"].join("")}function ur(t,e,o,n,r){let i=ht(t,o.documentTheme),s=Number(t.canvas?.width)||1e3,a=Number(t.canvas?.height)||560,c=t.participants||[],l=t.messages||[],d=t.activations||[],u=t.notes||[],f=t.groups||[],p=90,h=90,m=28,g=Number(t.canvas?.participantSize?.width)||180,y=Number(t.canvas?.participantSize?.height)||42,S=Number(t.canvas?.participantSpacing)||220,w=16,b=74+Math.max(0,...c.filter(k=>k.kind==="actor").map(k=>he(k.label||"").length-1))*w,v=48,E=16,F=16,$=15,T=12,B=26,M=28,P=40,N=22,I=o.expandedDiagramIndex===e,A=o.diagramViewportHeights.get(e),C=A&&!I?` style="box-sizing: border-box; height: ${A}px; min-height: 0"`:"",H=`docdiagram-sequence-arrow-${e}`,j=Yt(t,e,"Sequence diagram",r),O=m+b+12,_=c[0],te=c[c.length-1],ve=Number(_?.size?.width)||g,fe=Number(te?.size?.width)||g,se=c.length>1?ve/2+S*(c.length-1)+fe/2:g+p+h,ce=Math.max(s,se,p+h),de=new Map;c.forEach((k,L)=>{de.set(k.id,c.length===1?ce/2:ve/2+S*L)});let le=O+40,J=[],Q=[],Be=[],X=[],ee=[],Te=new Map;u.forEach((k,L)=>{let q=Number(k.after);if(!Number.isFinite(q)||q<1){ee.push({note:k,sourceIndex:L});return}let U=Te.get(q)||[];U.push({note:k,sourceIndex:L}),Te.set(q,U)});let K=O+24,Ce=(k,L)=>{let q=he(k.label||""),U=Math.max(0,...q.map(Ir=>Ir.length)),re=Math.max(160,Number(k.size?.width)||0,U*7.2+32),be=Math.max(v,q.length*F+24,Number(k.size?.height)||0),ie=de.get(k.at||"")||ce/2,W=Math.min(ce-re/2-24,Math.max(re/2+24,ie)),ae=K;return K=ae+be+E,{...k,lines:q,x:W-re/2,y:ae,width:re,height:be,sourceIndex:L}};ee.forEach(k=>Q.push(Ce(k.note,k.sourceIndex))),l.forEach((k,L)=>{let q=L+1;f.filter(W=>Number(W.from)===q).forEach(W=>{let ae={label:W.label,from:Number(W.from),to:Number(W.to),startY:K,endY:K,depth:X.length};K=ae.startY+P,X.push(ae),Be.push(ae)});let U=he(k.label||""),re=K,be=Math.max(1,U.length)*$,ie=re+be+T;J.push({...k,index:L,y:ie,lines:U,labelTop:re}),K=ie+B+(k.from===k.to?M:0),(Te.get(q)||[]).forEach(W=>{Q.push(Ce(W.note,W.sourceIndex))});for(let W=X.length-1;W>=0;W-=1)X[W].to>q||(X[W].endY=K,K+=N,X.splice(W,1))}),X.forEach(k=>{k.endY=K});let et=Math.max(O+140,K+8,Q.length?Q[Q.length-1].y+Q[Q.length-1].height:0,J.length?J[J.length-1].y+44:le,...Be.map(k=>k.endY+12)),ut=Math.max(a,et+56),ro=ut-36,Ar=d.map((k,L)=>({participantId:k.participant,depth:d.slice(0,L).filter(q=>q.participant===k.participant&&q.from<=k.from&&q.to>=k.from).length,startY:(J[k.from-1]?.y||le)-10,endY:(J[k.to-1]?.y||le)+18})),Mr=c.map(k=>{let L=de.get(k.id)||0,q=he(k.label||""),U=nt(t,k,o.documentTheme,o.documentColorScheme),re=Number(k.size?.width)||g,be=Number(k.size?.height)||y;if(k.kind==="actor"){let ie=m+10,W=ie+18,ae=W+18;return[`<g class="docdiagram-sequence-participant docdiagram-sequence-actor" data-diagram-index="${e}" data-participant-id="${D(k.id)}">`,`<circle cx="${L}" cy="${ie}" r="8" fill="none" stroke="${D(U.stroke||"")}" stroke-width="${Number(U.strokeWidth)||2}"/>`,`<path d="M ${L} ${ie+8} V ${ae} M ${L-14} ${W} H ${L+14} M ${L} ${ae} L ${L-12} ${ae+18} M ${L} ${ae} L ${L+12} ${ae+18}" fill="none" stroke="${D(U.stroke||"")}" stroke-width="${Number(U.strokeWidth)||2}" stroke-linecap="round" stroke-linejoin="round"/>`,De(L,m+b-4-(q.length-1)*w,q,w,"docdiagram-node-label",U.text||""),"</g>"].join("")}return[`<g class="docdiagram-sequence-participant" data-diagram-index="${e}" data-participant-id="${D(k.id)}">`,`<rect x="${L-re/2}" y="${m}" width="${re}" height="${be}" rx="12" fill="${D(U.fill||"")}" stroke="${D(U.stroke||"")}" stroke-width="${Number(U.strokeWidth)||2}"/>`,De(L,m+be/2+6-(q.length-1)*w/2,q,w,"docdiagram-node-label",U.text||""),"</g>"].join("")}).join(""),Tr=c.map(k=>{let L=de.get(k.id)||0;return`<path class="docdiagram-sequence-lifeline" d="M ${L} ${O} L ${L} ${ro}" fill="none" stroke="${D(i.edge.stroke)}" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.35"/>`}).join(""),Zo=Be.map(k=>{let L=42+k.depth*14,q=Math.min(260,Math.max(110,String(k.label||"").length*8+28));return{group:k,inset:L,labelWidth:q}}),Cr=Zo.map(({group:k,inset:L})=>['<g class="docdiagram-sequence-group">',`<rect x="${L}" y="${k.startY}" width="${Math.max(60,ce-L*2)}" height="${Math.max(40,k.endY-k.startY)}" rx="12" fill="none" stroke="${D(i.edge.stroke)}" stroke-width="1.5" stroke-dasharray="10 6" opacity="0.45"/>`,"</g>"].join("")).join(""),Lr=Zo.map(({group:k,inset:L,labelWidth:q})=>['<g class="docdiagram-sequence-group-label">',`<rect x="${L+12}" y="${k.startY-12}" width="${q}" height="24" rx="6" fill="${D(i.node.fill)}" stroke="${D(i.edge.stroke)}" stroke-width="1.5"/>`,`<text x="${L+12+q/2}" y="${k.startY+5}" text-anchor="middle" class="docdiagram-edge-label" fill="${D(i.edge.text)}">${D(k.label||"")}</text>`,"</g>"].join("")).join(""),Pr=Q.map(k=>{let L=k.y+20,q=nt(t,k,o.documentTheme,o.documentColorScheme);return[`<g class="docdiagram-sequence-note" data-diagram-index="${e}" data-note-index="${k.sourceIndex}">`,`<rect x="${k.x}" y="${k.y}" width="${k.width}" height="${k.height}" rx="10" fill="${D(q.fill||"")}" stroke="${D(q.stroke||"")}" stroke-width="${Number(q.strokeWidth)||2}"/>`,De(k.x+k.width/2,L,k.lines,F,"docdiagram-node-subtitle",q.text||""),"</g>"].join("")}).join(""),Rr=Ar.map(k=>{let L=de.get(k.participantId)||0,q=k.depth*7,U=12,re=Math.max(20,k.endY-k.startY),be=c.find(W=>W.id===k.participantId),ie=be?nt(t,be,o.documentTheme,o.documentColorScheme):i.node;return`<rect class="docdiagram-sequence-activation" x="${L-U/2+q}" y="${k.startY}" width="${U}" height="${re}" rx="4" fill="${D(ie.fill||"")}" stroke="${D(ie.stroke||"")}" stroke-width="${Number(ie.strokeWidth)||2}"/>`}).join(""),Br=J.map(k=>{let L=de.get(k.from)||0,q=de.get(k.to)||0,U=k.style==="dashed",re=k.lines,be=k.labelTop+12,ie=` marker-end="url(#${H})"`;if(k.from===k.to){let ae=M;return[`<g class="docdiagram-sequence-message" data-diagram-index="${e}" data-message-index="${k.index}">`,`<path d="M ${L} ${k.y} L ${L+48} ${k.y} L ${L+48} ${k.y+ae} L ${L} ${k.y+ae}" fill="none" stroke="${D(i.edge.stroke)}" stroke-width="2"${ie}${U?' stroke-dasharray="8 5"':""}/>`,De(L+48/2,be,re,$,"docdiagram-edge-label",i.edge.text),"</g>"].join("")}return[`<g class="docdiagram-sequence-message" data-diagram-index="${e}" data-message-index="${k.index}">`,`<path d="M ${L} ${k.y} L ${q} ${k.y}" fill="none" stroke="${D(i.edge.stroke)}" stroke-width="2"${ie}${U?' stroke-dasharray="8 5"':""}/>`,De((L+q)/2,be,re,$,"docdiagram-edge-label",i.edge.text),"</g>"].join("")}).join("");return[`<figure${Ut(r)} data-diagram-index="${e}" data-diagram-type="sequence" data-editing="${o.editingDiagramIndex===e}" data-expanded="${I}"${C}>`,n(e,"sequence",o),`<svg viewBox="0 0 ${ce} ${ut}" ${j.attributes} data-diagram-index="${e}" style="width: ${o.diagramZooms.get(e)||100}%">`,j.metadata,`<defs>${bt(H,"arrow","end",i.edge.stroke,2)}</defs>`,Cr,Tr,Mr,Rr,Pr,Br,Lr,"</svg>",Wt(r,Ee),"</figure>"].join("")}function mr(t,e,o){try{let n=xe(t,o.colourScheme);return o.onDiagram(e,n),n.type==="sequence"?ur(n,e,o.state,Uo,o.figure):lr(n,e,o.state,Uo,o.figure)}catch(n){let r=n instanceof Error?n.message:String(n);return`<section class="docdiagram-error"><strong>Diagram could not be rendered.</strong><br>${D(r)}</section>`}}function gr(){if(document.querySelector("style[data-docdiagram-runtime-styles]"))return;let t=document.createElement("style");t.dataset.docdiagramRuntimeStyles="true",t.textContent=`
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
  `,document.head.append(t)}var _t=class{constructor(e,o){this.state=e;this.outputElement=o}closeDocumentMenu(){let e=document.querySelector(".docdiagram-menu"),o=document.querySelector(".docdiagram-menu-toggle");!e||!o||(e.hidden=!0,o.setAttribute("aria-expanded","false"))}closeDiagramExportMenus(){for(let e of document.querySelectorAll(".docdiagram-diagram-export-menu"))e.hidden=!0;for(let e of document.querySelectorAll(".docdiagram-export-toggle"))e.setAttribute("aria-expanded","false")}applyDocumentColourScheme(e){let o=ye(this.state.documentColorScheme,this.state.documentTheme,"background"),n=ye(this.state.documentColorScheme,this.state.documentTheme,"pale"),r=ye(this.state.documentColorScheme,this.state.documentTheme,"neutral"),i=ye(this.state.documentColorScheme,this.state.documentTheme,"accent");!o||!n||!r||!i||(e.style.setProperty("--docdiagram-background",o.fill||""),e.style.setProperty("--docdiagram-border",r.stroke||""),e.style.setProperty("--docdiagram-control-background",n.fill||""),e.style.setProperty("--docdiagram-control-hover",r.fill||""),e.style.setProperty("--docdiagram-code-background",n.fill||""),e.style.setProperty("--docdiagram-text",o.text||""),e.style.setProperty("--docdiagram-muted",r.text||""),e.style.setProperty("--docdiagram-accent",i.stroke||""))}applyPageTheme(e){let o=ye(this.state.documentColorScheme,e,"background");document.documentElement.dataset.docdiagramTheme=e,document.documentElement.dataset.docdiagramExpanded=String(this.state.expandedDiagramIndex!==null),document.documentElement.style.setProperty("--docdiagram-page-background",o?.fill||""),document.documentElement.style.setProperty("--docdiagram-page-text",o?.text||""),document.body&&(document.body.dataset.docdiagramTheme=e)}dockExpandedDiagramToolbar(e){if(this.state.expandedDiagramIndex===null)return;let o=this.outputElement?.querySelector(`.docdiagram[data-diagram-index="${this.state.expandedDiagramIndex}"] .docdiagram-diagram-toolbar`);o&&e.prepend(o)}removeToolbar(){if(this.outputElement)for(;this.outputElement.previousElementSibling?.classList.contains("docdiagram-toolbar");)this.outputElement.previousElementSibling.remove()}};function hr(t){return t instanceof Element&&t.matches("input, textarea, select, [contenteditable]")}var Xt=class{constructor(e){this.host=e;this.viewportRefitTimer=null}bind(){globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.addEventListener("change",()=>{this.host.isAutoTheme()&&this.host.renderDocument()}),globalThis.addEventListener("resize",()=>{this.viewportRefitTimer!==null&&clearTimeout(this.viewportRefitTimer),this.viewportRefitTimer=setTimeout(()=>{this.viewportRefitTimer=null,this.host.refitDiagramViewports()},150)}),globalThis.addEventListener("beforeunload",e=>{this.host.hasUnsavedChanges()&&(e.preventDefault(),e.returnValue="")}),document.addEventListener("keydown",e=>this.handleKeydown(e)),document.addEventListener("pointerdown",e=>this.handlePointerDown(e)),this.host.outputElement.addEventListener("dblclick",e=>{e.target instanceof Element&&e.target.closest("button, input, textarea, select, [contenteditable]")||this.host.revealSource(globalThis.getSelection?.()?.toString()||"")})}handleKeydown(e){if((e.metaKey||e.ctrlKey)&&e.shiftKey&&e.key.toLowerCase()==="e"&&(this.host.isSourceEditorOpen()||!hr(e.target))){e.preventDefault(),this.host.toggleSourceEditor();return}if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="s"){e.preventDefault(),this.host.downloadDocument();return}if(e.key==="Escape"){this.host.closeDocumentMenu();let o=this.host.getExpandedDiagramIndex();!e.defaultPrevented&&!hr(e.target)&&o!==null&&(e.preventDefault(),this.host.toggleDiagramExpansion(o))}}handlePointerDown(e){let o=document.activeElement;o instanceof HTMLTextAreaElement&&o.matches(".docdiagram-inline-editor")&&!(e.target instanceof Node&&o.contains(e.target))&&o.blur();let n=document.querySelector(".docdiagram-toolbar"),r=e.target instanceof Element&&e.target.closest(".docdiagram-diagram-toolbar")!==null;n&&e.target instanceof Node&&(!n.contains(e.target)||r)&&this.host.closeDocumentMenu(),e.target instanceof Node&&!(e.target instanceof Element&&e.target.closest(".docdiagram-diagram-export"))&&this.host.closeDiagramExportMenus(),!(!(e.target instanceof Element)||e.target.closest(".docdiagram-toolbar, .docdiagram-node, .docdiagram-edge-group, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-inline-editor, .docdiagram-sequence-participant, .docdiagram-sequence-note, .docdiagram-sequence-message")||!this.host.hasSelection())&&this.host.clearSelection()}};function pr(){return{diagramModels:[],editingDiagramIndex:null,selectedNode:null,selectedEdge:null,selectedSequenceElement:null,editingNode:null,editingEdge:null,connectionDrag:null,documentTheme:"light",documentThemeSetting:"auto",documentColorScheme:"classic",documentFormat:"centered",documentDoctype:"document",editSessionDiagram:null,expandedDiagramIndex:null,diagramZooms:new Map,diagramCameraOffsets:new Map,diagramViewportHeights:new Map}}function Ze(t){t.selectedNode=null,t.selectedEdge=null,t.selectedSequenceElement=null,t.editingNode=null,t.editingEdge=null}function Je(t,e){return t.editingDiagramIndex===e}function Se(t,e){return t.target instanceof Element?t.target.closest(e):null}function pe(t,e){let o=t.diagramModels[e];return o?.type==="flowchart"?o:null}function Y(t){return Number(t)}function ka(t,e){let o=t.getBoundingClientRect(),n=18;return e.clientX>=o.right-n&&e.clientY>=o.bottom-n}function Wo(t,e){return(Number(Ge(t,e).strokeWidth)||2)+2}var Kt=class{constructor(e){this.host=e;this.editingShortcutsBound=!1}enableCanvasPanning(){for(let e of this.host.outputElement.querySelectorAll(".docdiagram")){let o=e.querySelector("svg");o&&(e.addEventListener("pointerdown",n=>{(n.target===e||n.target===o)&&!ka(e,n)&&this.beginCanvasPan(o,n)}),e.addEventListener("wheel",n=>this.moveCanvasWithWheel(o,n),{passive:!1}))}}moveCanvasWithWheel(e,o){o.preventDefault();let n=Y(e.dataset.diagramIndex),r=this.host.state.diagramCameraOffsets.get(n)||{x:0,y:0};if(!o.ctrlKey&&!o.metaKey){let u=Tt(o.deltaY,o.deltaMode),f=Tt(o.deltaX,o.deltaMode);this.setCameraOffset(e,n,{x:r.x-(o.shiftKey&&!f?u:f),y:r.y-(o.shiftKey&&!f?0:u)});return}let i=this.host.state.diagramZooms.get(n)||100,s=vn(i,o.deltaY,o.deltaMode);if(s===i)return;let a=e.getBoundingClientRect(),c=a.width?(o.clientX-a.left)/a.width:.5,l=a.height?(o.clientY-a.top)/a.height:.5;this.host.state.diagramZooms.set(n,s),e.style.width=`${s}%`;let d=e.getBoundingClientRect();this.setCameraOffset(e,n,{x:r.x+o.clientX-(d.left+c*d.width),y:r.y+o.clientY-(d.top+l*d.height)})}setCameraOffset(e,o,n){this.host.state.diagramCameraOffsets.set(o,n),e.style.transform=`translate(${n.x}px, ${n.y}px)`}enableSequenceSelection(){for(let e of this.host.outputElement.querySelectorAll('.docdiagram[data-diagram-type="sequence"] svg'))e.addEventListener("click",o=>{if(!Je(this.host.state,Y(e.dataset.diagramIndex)))return;let n=Se(o,".docdiagram-sequence-participant"),r=Se(o,".docdiagram-sequence-note"),i=Se(o,".docdiagram-sequence-message");n?this.host.state.selectedSequenceElement={diagramIndex:Y(n.getAttribute("data-diagram-index")||void 0),kind:"participant",id:n.getAttribute("data-participant-id")||""}:r?this.host.state.selectedSequenceElement={diagramIndex:Y(r.getAttribute("data-diagram-index")||void 0),kind:"note",index:Y(r.getAttribute("data-note-index")||void 0)}:i?this.host.state.selectedSequenceElement={diagramIndex:Y(i.getAttribute("data-diagram-index")||void 0),kind:"message",index:Y(i.getAttribute("data-message-index")||void 0)}:this.host.state.selectedSequenceElement=null,this.host.state.selectedNode=null,this.host.state.selectedEdge=null,this.host.renderDocument()})}enableEditing(){for(let e of this.host.outputElement.querySelectorAll(".docdiagram svg"))Je(this.host.state,Y(e.dataset.diagramIndex))&&(e.addEventListener("click",o=>this.handleDiagramClick(e,o)),e.addEventListener("pointerdown",o=>this.handleDiagramPointerDown(e,o)));for(let e of this.host.outputElement.querySelectorAll(".docdiagram-inline-editor"))this.wireInlineEditor(e);this.editingShortcutsBound||(this.editingShortcutsBound=!0,document.addEventListener("keydown",e=>{if(this.host.state.editingDiagramIndex===null)return;let o=document.activeElement;o instanceof Element&&o.matches("input, textarea, select, [contenteditable]")||((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="d"&&this.host.state.selectedNode?(e.preventDefault(),this.duplicateSelectedNode()):(e.key==="Delete"||e.key==="Backspace")&&(this.host.state.selectedNode||this.host.state.selectedEdge)&&(e.preventDefault(),this.deleteSelected()))},!0))}selectNode(e,o){this.host.state.selectedNode={diagramIndex:e,nodeId:o},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}selectEdge(e,o){this.host.state.selectedEdge={diagramIndex:e,edgeIndex:o},this.host.state.selectedNode=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}handleDiagramClick(e,o){if(Se(o,".docdiagram-inline-editor"))return;let n=Se(o,".docdiagram-node");if(n){this.selectNode(Y(n.getAttribute("data-diagram-index")||void 0),n.getAttribute("data-node-id")||"");return}let r=Se(o,".docdiagram-edge-group");if(r){let i=Y(r.getAttribute("data-diagram-index")||void 0),s=Y(r.getAttribute("data-edge-index")||void 0),a=this.host.state.selectedEdge?.diagramIndex===i&&this.host.state.selectedEdge.edgeIndex===s,c=this.host.state.editingEdge?.diagramIndex===i&&this.host.state.editingEdge.edgeIndex===s;a&&!c?(this.host.state.editingEdge={diagramIndex:i,edgeIndex:s},this.host.renderDocument()):this.selectEdge(i,s);return}(this.host.state.selectedNode||this.host.state.selectedEdge)&&this.clearSelection()}handleDiagramPointerDown(e,o){let n=Se(o,".docdiagram-edge-waypoint");if(n){this.moveEdgeWaypoint(e,o,n);return}let r=Se(o,".docdiagram-callout-handle");if(r){this.moveNodeCalloutPointer(e,o,r);return}let i=Se(o,".docdiagram-connection-port");if(i){let E=i.closest(".docdiagram-node"),F=Y(E?.getAttribute("data-diagram-index")||e.dataset.diagramIndex),$=i.getAttribute("data-node-id")||E?.getAttribute("data-node-id")||"",T=pe(this.host.state,F),B=T?me(T,$)?.node:null,M=i.getAttribute("data-anchor")||"";if(B&&ne.includes(M)){let P=M;this.beginConnectionDrag(e,o,{diagramIndex:F,sourceNodeId:$,sourceAnchor:P,start:this.getNodePortPoint(B,P),current:this.getNodePortPoint(B,P),invalid:!1})}return}let s=Se(o,".docdiagram-edge-endpoint");if(s){let E=Y(s.getAttribute("data-diagram-index")||void 0),F=Y(s.getAttribute("data-edge-index")||void 0),$=pe(this.host.state,E),T=$?.edges[F],B=s.getAttribute("data-endpoint");if(!T||B!=="source"&&B!=="target")return;let M=B==="source"?T.source:T.target,P=B==="source"?T.sourceAnchor:T.targetAnchor,N=$?me($,M)?.node:null;if(!N||!P)return;this.beginConnectionDrag(e,o,{diagramIndex:E,edgeIndex:F,endpoint:B,reconnect:!0,sourceNodeId:M,sourceAnchor:P,start:this.getNodePortPoint(N,P),current:this.getNodePortPoint(N,P),invalid:!1});return}let a=Se(o,".docdiagram-resize-handle");if(a){let E=a.closest(".docdiagram-node"),F=a.getAttribute("data-resize-corner");E&&(F==="top-left"||F==="top-right"||F==="bottom-left"||F==="bottom-right")&&this.resizeNode(e,o,E,F);return}if(Se(o,".docdiagram-inline-editor"))return;let c=Se(o,".docdiagram-node");if(!c)return;let l=Y(c.getAttribute("data-diagram-index")||void 0),d=c.getAttribute("data-node-id")||"",u=pe(this.host.state,l);if(!u)return;let f=new G(u),p=f.getById(d),h=p?.node;if(!p||!h)return;o.preventDefault();let m=this.svgPoint(e,o),g=p.bounds,y=p.parent?f.getByNode(p.parent)?.position||{x:0,y:0}:{x:0,y:0},S=oe(u),w=!1;this.capturePointer(e,o);let b=E=>{let F=this.svgPoint(e,E),$=R(g.x+F.x-m.x,S),T=R(g.y+F.y-m.y,S);w=w||$!==g.x||T!==g.y,c.setAttribute("transform",`translate(${$-g.x} ${T-g.y})`),h.arrow&&this.updateNodeCalloutMarkup(c,g,{x:h.arrow.x-($-g.x),y:h.arrow.y-(T-g.y)},$e(h,g.x,g.y,g.width,g.height).bodyMarkup,Wo(u,h)),h.position={...h.position,x:$-y.x,y:T-y.y}},v=E=>{this.releasePointer(e,E),e.removeEventListener("pointermove",b),e.removeEventListener("pointerup",v),e.removeEventListener("pointercancel",v),w?(an(u,d),it(u,h),this.host.state.selectedNode={diagramIndex:l,nodeId:d},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.persistDiagramModels(),this.host.renderDocument()):this.host.state.selectedNode?.diagramIndex===l&&this.host.state.selectedNode.nodeId===d?(this.host.state.editingNode={diagramIndex:l,nodeId:d},this.host.renderDocument()):this.selectNode(l,d)};e.addEventListener("pointermove",b),e.addEventListener("pointerup",v),e.addEventListener("pointercancel",v)}getSelectedNode(){let e=this.host.state.selectedNode,o=e?pe(this.host.state,e.diagramIndex):null;return e&&o&&me(o,e.nodeId)?.node||null}getSelectedEdge(){let e=this.host.state.selectedEdge,o=e?pe(this.host.state,e.diagramIndex):null;return e&&o?.edges[e.edgeIndex]||null}clearSelection(){this.host.state.selectedNode=null,this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}deleteSelected(){let e=this.host.state.selectedNode,o=this.host.state.selectedEdge;if(e){let n=pe(this.host.state,e.diagramIndex);if(!n)return;let r=n.edges.filter(i=>i.source===e.nodeId||i.target===e.nodeId);if(r.length&&!globalThis.confirm(`Delete this node and its ${r.length} attached connector${r.length===1?"":"s"}?`))return;Nt(n,e.nodeId)}else if(o){let n=pe(this.host.state,o.diagramIndex);if(!n)return;Ft(n,o.edgeIndex)}else return;Ze(this.host.state),this.host.persistDiagramModels(),this.host.renderDocument()}duplicateSelectedNode(){let e=this.host.state.selectedNode;if(!e)return;let o=pe(this.host.state,e.diagramIndex);if(!o)return;let n=$t(o,e.nodeId);n&&(this.host.state.selectedNode={diagramIndex:e.diagramIndex,nodeId:n.id},this.host.state.selectedEdge=null,this.host.persistDiagramModels(),this.host.renderDocument())}wireInlineEditor(e){let o=!1,n=()=>{if(!o){if(o=!0,e.classList.contains("docdiagram-inline-editor-edge")){let i=this.getSelectedEdge();i&&(Mt(i,e.value),this.host.persistDiagramModels()),this.host.state.editingEdge=null}else{let i=this.getSelectedNode();i&&(At(i,e.value),this.host.persistDiagramModels()),this.host.state.editingNode=null}this.host.renderDocument()}},r=()=>{o||(o=!0,e.classList.contains("docdiagram-inline-editor-edge")?this.host.state.editingEdge=null:this.host.state.editingNode=null,this.host.renderDocument())};e.addEventListener("pointerdown",i=>i.stopPropagation()),e.addEventListener("click",i=>i.stopPropagation()),e.addEventListener("keydown",i=>{i.key==="Enter"&&(i.metaKey||i.ctrlKey)?(i.preventDefault(),n()):i.key==="Escape"&&(i.preventDefault(),r())}),e.addEventListener("blur",n,{once:!0}),e.focus(),e.select()}resizeNode(e,o,n,r){o.preventDefault();let i=Y(n.getAttribute("data-diagram-index")||void 0),s=n.getAttribute("data-node-id")||"",a=pe(this.host.state,i),c=a?me(a,s)?.node:null;if(!a||!c)return;let l=this.svgPoint(e,o),d=ho(c),u=!1;this.capturePointer(e,o);let f=h=>{let m=this.svgPoint(e,h);fn(a,c,r,m.x-l.x,m.y-l.y,d);let g=Number(c.size?.width)||190,y=Number(c.size?.height)||80;u=u||g!==d.size.width||y!==d.size.height,this.updateNodeSizeMarkup(n,c,g,y)},p=h=>{this.releasePointer(e,h),e.removeEventListener("pointermove",f),e.removeEventListener("pointerup",p),e.removeEventListener("pointercancel",p),u&&(it(a,c),this.host.state.selectedNode={diagramIndex:i,nodeId:s},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.persistDiagramModels(),this.host.renderDocument())};e.addEventListener("pointermove",f),e.addEventListener("pointerup",p),e.addEventListener("pointercancel",p)}updateNodeSizeMarkup(e,o,n,r){let i=pe(this.host.state,Y(e.getAttribute("data-diagram-index")||void 0));if(!i)return;let{x:s,y:a}=rt(i,o),c=e.querySelector(".docdiagram-node-body"),l=e.querySelector(".docdiagram-node-label"),d=e.querySelector(".docdiagram-node-subtitle"),u=e.querySelectorAll(".docdiagram-resize-handle");if(!c)return;let f=Ge(i,o,this.host.state.documentTheme,this.host.state.documentColorScheme),p=ue[this.host.state.documentColorScheme][this.host.state.documentTheme==="dark"?"dark":"light"],h=$e(o,s,a,n,r),m=lt(h.textBounds,o);for(let g of e.querySelectorAll(".docdiagram-node-stroke-gap"))g.remove();for(let g of e.querySelectorAll(".docdiagram-node-detail"))g.remove();c.outerHTML=Ht(h,f,Number(f.strokeWidth)||2,o.strokeType,p.background.fill);for(let g of[l,d])if(g){g.setAttribute("x",String(m.centerX)),g.setAttribute("y",String(g===l?m.labelStartY:m.subtitleStartY)),g.setAttribute("text-anchor",m.textAnchor);for(let y of g.querySelectorAll("tspan"))y.setAttribute("x",String(m.centerX))}for(let g of u){let y=g.getAttribute("data-resize-corner");g.setAttribute("x",String(y?.endsWith("left")?s-7:s+n-7)),g.setAttribute("y",String(y?.startsWith("top")?a-7:a+r-7))}this.updateNodeCalloutMarkup(e,{x:s,y:a,width:n,height:r},o.arrow,h.bodyMarkup,Wo(i,o))}getNodePortPoint(e,o,n){let r=n;if(!r){let i=this.host.state.diagramModels.find(s=>s.type==="flowchart"&&me(s,e.id)?.node===e);if(!i)return{x:0,y:0};r=rt(i,e)}return $e(e,r.x,r.y,r.width,r.height).anchors[o]}addConnectionTargetPorts(e,o){let n=pe(this.host.state,o);if(n)for(let{node:r,bounds:i}of new G(n).entries)for(let s of ne){let a=this.getNodePortPoint(r,s,i),c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("class","docdiagram-connection-port docdiagram-connection-target-port"),c.dataset.nodeId=r.id,c.dataset.anchor=s,c.setAttribute("cx",String(a.x)),c.setAttribute("cy",String(a.y)),c.setAttribute("r","7"),e.append(c)}}beginConnectionDrag(e,o,n){o.preventDefault(),o.stopPropagation(),this.host.state.connectionDrag={...n,current:this.svgPoint(e,o),invalid:!1},this.addConnectionTargetPorts(e,n.diagramIndex);let r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("class","docdiagram-connection-preview"),e.append(r),this.capturePointer(e,o);let i=c=>{let d=document.elementFromPoint(c.clientX,c.clientY)?.closest(".docdiagram-connection-port");return d||[...e.querySelectorAll(".docdiagram-connection-port")].find(u=>{let f=u.getBoundingClientRect();return c.clientX>=f.left&&c.clientX<=f.right&&c.clientY>=f.top&&c.clientY<=f.bottom})||null},s=c=>{let l=this.host.state.connectionDrag;if(!l)return;let d=this.svgPoint(e,c),u=i(c);l.current=d,l.invalid=!u;let f=u?.getAttribute("data-anchor")||l.sourceAnchor;r.setAttribute("d",je(l.start,d,l.sourceAnchor,f,"straight").path),r.classList.toggle("docdiagram-connection-invalid",l.invalid)},a=c=>{this.releasePointer(e,c),e.removeEventListener("pointermove",s),e.removeEventListener("pointerup",a),e.removeEventListener("pointercancel",a);let l=i(c),d=this.host.state.connectionDrag;if(this.host.state.connectionDrag=null,l&&d){let u=pe(this.host.state,d.diagramIndex),f=l.getAttribute("data-node-id")||l.closest(".docdiagram-node")?.getAttribute("data-node-id"),p=l.getAttribute("data-anchor")||"";if(u&&f){if(d.reconnect&&d.edgeIndex!==void 0&&d.endpoint){let h=u.edges[d.edgeIndex];h&&(un(h,d.endpoint,f,p),this.host.state.selectedEdge={diagramIndex:d.diagramIndex,edgeIndex:d.edgeIndex},this.host.state.selectedNode=null)}else{let h=ln(u,d.sourceNodeId,d.sourceAnchor,f,p);this.host.state.selectedEdge={diagramIndex:d.diagramIndex,edgeIndex:u.edges.indexOf(h)},this.host.state.selectedNode=null}this.host.persistDiagramModels()}}this.host.renderDocument()};e.addEventListener("pointermove",s),e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a)}beginCanvasPan(e,o){let n=e.closest(".docdiagram");if(!n)return;o.preventDefault();let r=Y(e.dataset.diagramIndex),i=this.host.state.diagramCameraOffsets.get(r)||{x:0,y:0},s={clientX:o.clientX,clientY:o.clientY,offset:i};n.classList.add("docdiagram-panning"),this.capturePointer(e,o);let a=l=>{let d={x:s.offset.x+l.clientX-s.clientX,y:s.offset.y+l.clientY-s.clientY};this.host.state.diagramCameraOffsets.set(r,d),e.style.transform=`translate(${d.x}px, ${d.y}px)`},c=l=>{this.releasePointer(e,l),n.classList.remove("docdiagram-panning"),e.removeEventListener("pointermove",a),e.removeEventListener("pointerup",c),e.removeEventListener("pointercancel",c)};e.addEventListener("pointermove",a),e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c)}moveEdgeWaypoint(e,o,n){let r=Y(n.getAttribute("data-diagram-index")||void 0),i=Y(n.getAttribute("data-edge-index")||void 0),s=pe(this.host.state,r),a=s?.edges[i];if(!s||!a)return;let c=new G(s),l=c.getById(a.source),d=c.getById(a.target);if(!l||!d)return;o.preventDefault(),o.stopPropagation(),this.capturePointer(e,o);let u=p=>{let h=this.svgPoint(e,p);a.waypoint={x:R(h.x,oe(s)),y:R(h.y,oe(s))};let m=a.sourceAnchor||"right",g=a.targetAnchor||"left",y=this.getNodePortPoint(l.node,m,l.bounds),S=this.getNodePortPoint(d.node,g,d.bounds),w=je(y,S,m,g,a.route||"orthogonal",a.waypoint),b=Lo(a.waypoint,!0);n.setAttribute("x",String(b.x)),n.setAttribute("y",String(b.y)),n.setAttribute("width",String(b.size)),n.setAttribute("height",String(b.size)),n.setAttribute("rx",String(b.radius)),n.setAttribute("transform",b.transform),n.setAttribute("data-anchored","true");let v=e.querySelector(`.docdiagram-edge-group[data-diagram-index="${r}"][data-edge-index="${i}"]`);v?.querySelector(".docdiagram-edge")?.setAttribute("d",w.path),v?.querySelector(".docdiagram-edge-hit")?.setAttribute("d",w.hitPath)},f=p=>{this.releasePointer(e,p),e.removeEventListener("pointermove",u),e.removeEventListener("pointerup",f),e.removeEventListener("pointercancel",f),this.host.persistDiagramModels(),this.host.renderDocument()};e.addEventListener("pointermove",u),e.addEventListener("pointerup",f),e.addEventListener("pointercancel",f)}moveNodeCalloutPointer(e,o,n){let r=Y(n.getAttribute("data-diagram-index")||void 0),i=n.getAttribute("data-node-id")||"",s=pe(this.host.state,r),a=s?me(s,i)?.node:null,c=n.closest(".docdiagram-node");if(!s||!a||!c)return;o.preventDefault(),o.stopPropagation(),this.capturePointer(e,o);let l=oe(s),d=rt(s,a),u=$e(a,d.x,d.y,d.width,d.height),f=Wo(s,a),p=m=>{let g=this.svgPoint(e,m),y={x:R(g.x,l),y:R(g.y,l)};fo(a,y),this.updateNodeCalloutMarkup(c,d,y,u.bodyMarkup,f)},h=m=>{this.releasePointer(e,m),e.removeEventListener("pointermove",p),e.removeEventListener("pointerup",h),e.removeEventListener("pointercancel",h),it(s,a),this.host.persistDiagramModels(),this.host.renderDocument()};e.addEventListener("pointermove",p),e.addEventListener("pointerup",h),e.addEventListener("pointercancel",h)}updateNodeCalloutMarkup(e,o,n,r,i){let s=n?jt(o,n):null;if(!s)return;for(let d of e.querySelectorAll(".docdiagram-node-callout, .docdiagram-node-callout-outline"))d.setAttribute("points",s.polygonPoints);let a=e.querySelector(".docdiagram-node-callout-mask-body");a&&(a.outerHTML=Po(r));let c=Ro(s,i);for(let d of[e.querySelector("mask"),e.querySelector(".docdiagram-node-callout-mask-region")])for(let[u,f]of Object.entries(c))d?.setAttribute(u,String(f));let l=e.querySelector(".docdiagram-callout-handle");l?.setAttribute("cx",String(n?.x??0)),l?.setAttribute("cy",String(n?.y??0))}svgPoint(e,o){let n=e.getBoundingClientRect(),r=e.viewBox.baseVal;return{x:(o.clientX-n.left)*r.width/n.width,y:(o.clientY-n.top)*r.height/n.height}}capturePointer(e,o){o.isTrusted&&e.setPointerCapture(o.pointerId)}releasePointer(e,o){o.isTrusted&&e.hasPointerCapture(o.pointerId)&&e.releasePointerCapture(o.pointerId)}};function Da(t){return`<select class="docdiagram-inspector-node-stroke-type" aria-label="Stroke type">${Ie.map(e=>`<option value="${e}"${e===t?" selected":""}>${e}</option>`).join("")}</select>`}function br(t,e,o,n){let r=ue[t]?.[e==="dark"?"dark":"light"];return[[...ke.slice(0,5),"none"],ke.slice(5,8),ke.slice(8,13)].map(i=>`<div class="docdiagram-palette-group">${i.map(s=>{let a=r?.[s];return`<label class="docdiagram-palette-swatch"><input type="radio" name="${n}" value="${s}"${s===o?" checked":""}><span style="--docdiagram-swatch-fill:${a?.fill};--docdiagram-swatch-stroke:${a?.stroke};--docdiagram-swatch-text:${a?.text}">${a?.label||s}</span></label>`}).join("")}</div>`).join("")}function yr(t,e,o="classic",n="light"){let r=oe(t),i=Ge(t,e,n,o),s=Number(e.size?.width)||190,a=Number(e.size?.height)||80,c=e.shape==="document"?{width:140,height:84}:{width:120,height:60},l=r?Math.ceil(c.width/r)*r:c.width,d=r?Math.ceil(c.height/r)*r:c.height,u=r||1,f=e.palette||"accent";return[`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-inspector-label docdiagram-inspector-textarea" rows="2">${D(e.label)}</textarea></label>`,`<label class="docdiagram-field docdiagram-field-wide">Subtitle<textarea class="docdiagram-inspector-subtitle docdiagram-inspector-textarea" rows="2">${D(e.subtitle||"")}</textarea></label>`,`<div class="docdiagram-field docdiagram-field-wide"><span>Palette</span><div class="docdiagram-inspector-palette">${br(o,n,f,"node-palette")}</div></div>`,`<label class="docdiagram-inspector-shape-row"><span>Shape</span><select class="docdiagram-inspector-shape">${tt.map(p=>`<option value="${p}"${p===e.shape?" selected":""}>${p}</option>`).join("")}</select></label>`,`<div class="docdiagram-inspector-row docdiagram-inspector-colour-row"><span>Fill</span><input type="color" class="docdiagram-inspector-fill" value="${D(i.fill||"")}"></div>`,`<div class="docdiagram-inspector-row docdiagram-inspector-stroke-row"><span>Stroke</span><input type="color" class="docdiagram-inspector-stroke" value="${D(i.stroke||"")}">${Da(e.strokeType||"solid")}<label class="docdiagram-visually-hidden" for="docdiagram-inspector-stroke-width">Stroke width</label><input id="docdiagram-inspector-stroke-width" type="number" aria-label="Stroke width" class="docdiagram-inspector-stroke-width" value="${Number(i.strokeWidth)||2}" min="1" step="1"></div>`,`<div class="docdiagram-inspector-row docdiagram-inspector-colour-row"><span>Text</span><input type="color" class="docdiagram-inspector-text" value="${D(i.text||"")}"></div>`,`<div class="docdiagram-inspector-paired-controls"><span>Align</span><label class="docdiagram-visually-hidden" for="docdiagram-inspector-text-v-align">Vertical alignment</label><select id="docdiagram-inspector-text-v-align" class="docdiagram-inspector-text-v-align" aria-label="Vertical alignment"><option value="top"${e.textVAlign==="top"?" selected":""}>Top</option><option value="center"${e.textVAlign!=="top"?" selected":""}>Middle</option></select><label class="docdiagram-visually-hidden" for="docdiagram-inspector-text-h-align">Horizontal alignment</label><select id="docdiagram-inspector-text-h-align" class="docdiagram-inspector-text-h-align" aria-label="Horizontal alignment"><option value="left"${e.textHAlign==="left"?" selected":""}>Left</option><option value="center"${e.textHAlign!=="left"&&e.textHAlign!=="right"?" selected":""}>Center</option><option value="right"${e.textHAlign==="right"?" selected":""}>Right</option></select><span>Size</span><label class="docdiagram-visually-hidden" for="docdiagram-inspector-width">Width</label><input id="docdiagram-inspector-width" type="number" aria-label="Width" class="docdiagram-inspector-width" value="${s}" min="${l}" step="${u}"><label class="docdiagram-visually-hidden" for="docdiagram-inspector-height">Height</label><input id="docdiagram-inspector-height" type="number" aria-label="Height" class="docdiagram-inspector-height" value="${a}" min="${d}" step="${u}"><span>Callout</span><button type="button" class="docdiagram-inspector-callout">${e.arrow?"Remove pointer":"Add pointer"}</button><span></span><button type="button" class="docdiagram-inspector-delete">Delete</button><button type="button" class="docdiagram-inspector-duplicate">Duplicate</button></div>`].join("")}function xr(t,e,o="classic",n="light"){let r=vt(t,e,n,o),i=Number(r.strokeWidth)||2,s=e.route||"orthogonal",a=e.strokeType||"solid",c=e.start||"none",l=e.end||"arrow";return[`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-inspector-label docdiagram-inspector-textarea" rows="2">${D(e.label||"")}</textarea></label>`,`<label class="docdiagram-field">Route<select class="docdiagram-inspector-route">${ot.map(d=>`<option value="${d}"${d===s?" selected":""}>${d}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Stroke type<select class="docdiagram-inspector-stroke-type">${Ie.map(d=>`<option value="${d}"${d===a?" selected":""}>${d}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Source side<select class="docdiagram-inspector-source-anchor">${ne.map(d=>`<option value="${d}"${d===e.sourceAnchor?" selected":""}>${d}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Target side<select class="docdiagram-inspector-target-anchor">${ne.map(d=>`<option value="${d}"${d===e.targetAnchor?" selected":""}>${d}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Start<select class="docdiagram-inspector-marker-start">${Fe.map(d=>`<option value="${d}"${d===c?" selected":""}>${d}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">End<select class="docdiagram-inspector-marker-end">${Fe.map(d=>`<option value="${d}"${d===l?" selected":""}>${d}</option>`).join("")}</select></label>`,`<label class="docdiagram-field">Stroke<input type="color" class="docdiagram-inspector-stroke" value="${D(r.stroke||"")}"></label>`,`<label class="docdiagram-field">Label colour<input type="color" class="docdiagram-inspector-text" value="${D(r.text||"")}"></label>`,`<label class="docdiagram-field">Stroke width<input type="number" class="docdiagram-inspector-stroke-width" value="${i}" min="1" step="1"></label>`,`<div class="docdiagram-inspector-actions">${e.waypoint?'<button type="button" class="docdiagram-inspector-clear-waypoint">Remove waypoint</button>':""}<button type="button" class="docdiagram-inspector-delete">Delete</button></div>`].join("")}function wr(t,e,o,n="classic",r="light"){let i="from"in o?null:nt(t,o,r,n),s=e.kind!=="message",a=s?o:null;return[`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-sequence-inspector-label docdiagram-inspector-textarea" rows="2">${D(o.label||"")}</textarea></label>`,e.kind==="message"?`<label class="docdiagram-field">Style<select class="docdiagram-sequence-inspector-message-style"><option value="solid"${o.style!=="dashed"?" selected":""}>Solid</option><option value="dashed"${o.style==="dashed"?" selected":""}>Dashed</option></select></label>`:"",s?`<div class="docdiagram-field docdiagram-field-wide"><span>Palette</span><div class="docdiagram-sequence-inspector-palette">${br(n,r,a?.palette||"accent","sequence-palette")}</div></div>`:"",s?`<label class="docdiagram-field">Fill<input type="color" class="docdiagram-sequence-inspector-fill" value="${D(i?.fill||"")}"></label><label class="docdiagram-field">Border<input type="color" class="docdiagram-sequence-inspector-stroke" value="${D(i?.stroke||"")}"></label><label class="docdiagram-field">Text<input type="color" class="docdiagram-sequence-inspector-text" value="${D(i?.text||"")}"></label><label class="docdiagram-field">Width<input type="number" min="1" class="docdiagram-sequence-inspector-width" value="${Number(a?.size?.width)||""}"></label><label class="docdiagram-field">Height<input type="number" min="1" class="docdiagram-sequence-inspector-height" value="${Number(a?.size?.height)||""}"></label>`:""].join("")}function $a(t,e){return t.querySelector(e)}function V(t,e,o){$a(t,e)?.addEventListener("change",n=>{o(n.currentTarget.value)})}function Qe(t,e){e(),t.persistDiagramModels(),t.renderDocument()}function Fa(t,e){e(),t.persistDiagramModels()}function fr(t,e,o,n){t&&t.addEventListener("input",()=>{o(t.value);let r=t.value,i=t.selectionStart,s=t.selectionEnd;n(t,()=>{let a=document.querySelector(e);a&&a.value!==r&&(a.value=r),a?.focus(),a?.setSelectionRange(i,s)})})}function Er(t,e,o,n){let r=null,i=(c,l)=>{globalThis.clearTimeout(r??void 0),r=globalThis.setTimeout(()=>{r=null;let d=document.activeElement===c;t.renderDocument(),d&&l()},250)},s=c=>{let l=t.state.diagramModels[o];if(!l||l.type!=="flowchart")return;let d=me(l,n)?.node;d&&Qe(t,()=>c(l,d))},a=c=>{let l=t.state.diagramModels[o];if(!l||l.type!=="flowchart")return;let d=me(l,n)?.node;d&&Fa(t,()=>c(l,d))};fr(e.querySelector(".docdiagram-inspector-label"),".docdiagram-inspector-label",c=>a((l,d)=>At(d,c)),i),fr(e.querySelector(".docdiagram-inspector-subtitle"),".docdiagram-inspector-subtitle",c=>a((l,d)=>gn(d,c)),i);for(let c of e.querySelectorAll(".docdiagram-inspector-palette input"))c.addEventListener("change",()=>s((l,d)=>go(d,c.value,t.state.documentColorScheme)));V(e,".docdiagram-inspector-shape",c=>s((l,d)=>mn(d,c))),V(e,".docdiagram-inspector-fill",c=>s((l,d)=>pt(d,"fill",c))),V(e,".docdiagram-inspector-stroke",c=>s((l,d)=>pt(d,"stroke",c))),V(e,".docdiagram-inspector-node-stroke-type",c=>s((l,d)=>hn(d,c))),V(e,".docdiagram-inspector-text",c=>s((l,d)=>pt(d,"text",c))),V(e,".docdiagram-inspector-text-v-align",c=>s((l,d)=>mo(d,"textVAlign",c))),V(e,".docdiagram-inspector-text-h-align",c=>s((l,d)=>mo(d,"textHAlign",c))),V(e,".docdiagram-inspector-stroke-width",c=>s((l,d)=>xo(d,c))),V(e,".docdiagram-inspector-width",c=>s((l,d)=>po(l,d,"width",c))),V(e,".docdiagram-inspector-height",c=>s((l,d)=>po(l,d,"height",c))),e.querySelector(".docdiagram-inspector-callout")?.addEventListener("click",()=>{s((c,l)=>wn(c,l))}),e.querySelector(".docdiagram-inspector-delete")?.addEventListener("click",()=>{s((c,l)=>{Nt(c,l.id),t.state.selectedNode=null})}),e.querySelector(".docdiagram-inspector-duplicate")?.addEventListener("click",()=>{s((c,l)=>{let d=$t(c,l.id);d&&(t.state.selectedNode={diagramIndex:o,nodeId:d.id})})})}function Sr(t,e,o,n){let r=i=>{let s=t.state.diagramModels[o];if(!s||s.type!=="flowchart")return;let a=s.edges[n];a&&Qe(t,()=>i(s,a))};V(e,".docdiagram-inspector-label",i=>r((s,a)=>Mt(a,i))),V(e,".docdiagram-inspector-route",i=>r((s,a)=>bn(a,i))),V(e,".docdiagram-inspector-stroke-type",i=>r((s,a)=>yn(a,i))),V(e,".docdiagram-inspector-source-anchor",i=>r((s,a)=>bo(a,"source",i))),V(e,".docdiagram-inspector-target-anchor",i=>r((s,a)=>bo(a,"target",i))),V(e,".docdiagram-inspector-marker-start",i=>r((s,a)=>En(a,i))),V(e,".docdiagram-inspector-marker-end",i=>r((s,a)=>Sn(a,i))),V(e,".docdiagram-inspector-stroke",i=>r((s,a)=>yo(a,"stroke",i))),V(e,".docdiagram-inspector-text",i=>r((s,a)=>yo(a,"text",i))),V(e,".docdiagram-inspector-stroke-width",i=>r((s,a)=>xo(a,i))),e.querySelector(".docdiagram-inspector-clear-waypoint")?.addEventListener("click",()=>{r((i,s)=>xn(s))}),e.querySelector(".docdiagram-inspector-delete")?.addEventListener("click",()=>{r(i=>{Ft(i,n),t.state.selectedEdge=null})})}function vr(t,e,o){let n=t.state.selectedSequenceElement;if(!n)return;if(V(e,".docdiagram-sequence-inspector-label",i=>Qe(t,()=>{o.label=i.trim()||o.label})),n.kind==="message"){V(e,".docdiagram-sequence-inspector-message-style",i=>Qe(t,()=>{Et.includes(i)&&(o.style=i)}));return}let r=o;for(let i of e.querySelectorAll(".docdiagram-sequence-inspector-palette input"))i.addEventListener("change",()=>Qe(t,()=>go(r,i.value,t.state.documentColorScheme)));for(let[i,s]of[[".docdiagram-sequence-inspector-fill","fill"],[".docdiagram-sequence-inspector-stroke","stroke"],[".docdiagram-sequence-inspector-text","text"]])V(e,i,a=>Qe(t,()=>pt(r,s,a)));for(let[i,s]of[[".docdiagram-sequence-inspector-width","width"],[".docdiagram-sequence-inspector-height","height"]])V(e,i,a=>Qe(t,()=>{let c=Number(a);Number.isFinite(c)&&c>0&&(r.size={...r.size,[s]:c})}))}var Na="https://sparkkz-nz.github.io/skryb/docs/reference.html",Yo=192,Aa=96,kr=24,Ma=8e6,Ta={flowchart:["```diagram","id: new-flowchart","type: flowchart","canvas:","  auto: true","  grid: 5","nodes:","  - id: first-node","    label: First node","    shape: rounded-rectangle","    position: { x: 80, y: 110 }","  - id: second-node","    label: Second node","    shape: rounded-rectangle","    position: { x: 330, y: 110 }","edges:","  - source: first-node","    target: second-node","    sourceAnchor: right","    targetAnchor: left","```"].join(`
`),sequence:["```diagram","id: new-sequence","type: sequence","participants:","  - id: first-participant","    label: First participant","  - id: second-participant","    label: Second participant","messages:","  - from: first-participant","    to: second-participant","    label: Request","```"].join(`
`),"diagram-reference":":::diagram { id=diagram-id }",toc:":::toc { depth=3 diagrams=true }",panel:[':::panel { title="New panel" palette=accent }',"Panel content.",":::"].join(`
`),grid:[":::grid { columns=2 }",':::panel { title="First panel" }',"First panel content.",":::","",':::panel { title="Second panel" }',"Second panel content.",":::",":::"].join(`
`)};function Zt(t,e){let o=new Set([...t.matchAll(/(?:\bid:\s*|:::diagram\s+\{\s*id=)(?:"([^"]+)"|([^\s}\n#]+))/g)].map(i=>i[1]||i[2])),n=1,r=e;for(;o.has(r);)n+=1,r=`${e}-${n}`;return r}function Ca(t,e){let o=Ta[t];if(!o)return null;if(t==="flowchart")return o.replace("id: new-flowchart",`id: ${Zt(e,"new-flowchart")}`);if(t==="sequence")return o.replace("id: new-sequence",`id: ${Zt(e,"new-sequence")}`);if(t==="diagram-reference"){let n=Zt(e,"diagram-reference");return o.replace("diagram-id",n)}return o}function La(t){if(!/<template[^>]*\bid=["']?source\b/i.test(t))return t;let o=new DOMParser().parseFromString(t,"text/html").querySelector("template#source");if(!o)throw new Error("That Skryb document has no source template to import from.");return o.content.textContent||""}function Pa(){return new Promise(t=>{let e=document.createElement("input");e.type="file",e.accept=".html,.htm,.md,.markdown,text/html,text/markdown",e.hidden=!0;let o=n=>{e.remove(),t(n)};e.addEventListener("change",()=>o(e.files?.[0]||null),{once:!0}),e.addEventListener("cancel",()=>o(null),{once:!0}),document.body.append(e),e.click()})}function Ra(t){if(t.length<=1)return t[0]||null;let e=t.map((r,i)=>`${i+1}. ${r.id||"(no id)"}`).join(`
`),o=globalThis.prompt(`That file has ${t.length} diagrams. Import which one?

${e}`,"1");if(o===null)return null;let n=Number.parseInt(o.trim(),10);if(!Number.isInteger(n)||n<1||n>t.length)throw new Error(`Enter a number between 1 and ${t.length}.`);return t[n-1]}var Jt=class{constructor(e){this.host=e;this.renderTimer=null;this.resizeObserver=null;this.openState=!1;this.draft="";this.error=""}get isOpen(){return this.openState}get hasUnsavedDraft(){return this.openState&&this.draft!==this.host.getSource()}get hasError(){return this.error.length>0}get draftSource(){return this.draft}setError(e){this.error=e,this.updateStatus()}clearError(){this.error=""}open(){globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=null,this.draft=this.host.getSource(),this.error="",this.openState=!0,this.host.stopDiagramEditing(),this.host.renderDocument();let e=()=>this.focus();globalThis.requestAnimationFrame?.(e)??e()}close(){this.flushRender(),!(this.error&&this.draft!==this.host.getSource()&&!globalThis.confirm("Discard the invalid source changes?"))&&(this.openState=!1,this.draft="",this.error="",this.renderTray(),document.querySelector(".docdiagram-menu-toggle")?.focus())}flushRender(){return this.renderTimer===null?!0:this.renderDraft()}syncSource(e){if(!this.openState)return;this.draft=e,this.error="";let o=document.querySelector(".docdiagram-source-editor");if(!o)return;let n=o.selectionStart,r=o.selectionEnd,i=o.scrollTop;o.value=e,o.setSelectionRange(Math.min(n,e.length),Math.min(r,e.length)),o.scrollTop=i,this.updateStatus()}reveal(e){let o=this.host.getSource(),n=Vn(o,e);return n?this.revealSourceRange({start:{line:1,column:1,offset:n.start},end:{line:1,column:1,offset:n.end}},_e(o)):!1}revealSourceRange(e,o){let n=this.host.getSource();if(_e(n)!==o||this.hasUnsavedDraft||e.start.offset>n.length)return!1;this.openState||this.open();let r=()=>{let i=document.querySelector(".docdiagram-source-editor");i&&(i.focus(),i.setSelectionRange(e.start.offset,Math.min(e.end.offset,n.length)),Un(i,{start:e.start.offset}))};return globalThis.requestAnimationFrame?.(r)??r(),!0}renderTray(){let e=document.querySelector(".docdiagram-source-tray");if(!this.openState){this.resizeObserver?.disconnect(),this.resizeObserver=null,e?.remove(),delete this.host.outputElement.dataset.sourceEditorOpen,this.host.outputElement.style.removeProperty("--docdiagram-source-tray-height");return}if(e){e.dataset.theme=this.host.getDocumentTheme(),this.host.outputElement.dataset.sourceEditorOpen="true",this.updateStatus();return}e=document.createElement("section"),e.className="docdiagram-source-tray",e.dataset.theme=this.host.getDocumentTheme(),e.setAttribute("aria-label","Document source editor"),e.innerHTML=['<div class="docdiagram-source-resize" role="separator" aria-orientation="horizontal" aria-label="Resize source editor" tabindex="0" title="Drag to resize"></div>','<header class="docdiagram-source-header">','<div><strong>Source</strong><span class="docdiagram-source-shortcut">Cmd/Ctrl+Shift+E to close</span></div>','<div class="docdiagram-source-actions">','<button type="button" class="docdiagram-source-menu-toggle" aria-label="Source editor menu" aria-expanded="false" title="Source editor menu">\u2630</button>','<div class="docdiagram-source-menu" hidden>','<div class="docdiagram-source-menu-heading">Insert</div>','<button type="button" data-source-template="flowchart">Flowchart</button>','<button type="button" data-source-template="sequence">Sequence</button>','<button type="button" data-source-template="diagram-reference">Diagram Reference</button>','<button type="button" data-source-template="toc">Contents</button>','<button type="button" class="docdiagram-source-import">Import diagram\u2026</button>','<button type="button" data-source-template="panel">Panel</button>','<button type="button" data-source-template="grid">Grid</button>','<button type="button" class="docdiagram-source-help">Help</button>',"</div>",'<button type="button" class="docdiagram-source-close" aria-label="Close source editor" title="Close source editor">\xD7</button>',"</div>","</header>",'<label class="docdiagram-source-label">Canonical Markdown<textarea class="docdiagram-source-editor" spellcheck="false"></textarea></label>','<p class="docdiagram-source-status" aria-live="polite"></p>','<p class="docdiagram-source-error" role="alert"></p>'].join("");let o=e.querySelector(".docdiagram-source-editor"),n=e.querySelector(".docdiagram-source-close"),r=e.querySelector(".docdiagram-source-menu-toggle"),i=e.querySelector(".docdiagram-source-menu");if(!o||!n||!r||!i)return;o.value=this.draft,o.addEventListener("input",()=>{this.draft=o.value,this.error="",this.updateStatus(),this.scheduleRender()}),n.addEventListener("click",()=>this.close()),r.addEventListener("click",()=>{let a=i.hidden;i.hidden=!a,r.setAttribute("aria-expanded",String(a))});for(let a of e.querySelectorAll("[data-source-template]"))a.addEventListener("click",()=>{let c=Ca(a.dataset.sourceTemplate||"",o.value);c&&(this.insertTemplate(o,c),i.hidden=!0,r.setAttribute("aria-expanded","false"))});e.querySelector(".docdiagram-source-import")?.addEventListener("click",async a=>{let c=a.currentTarget;i.hidden=!0,r.setAttribute("aria-expanded","false"),c.disabled=!0;try{await this.importDiagram(o)}catch(l){let d=l instanceof Error?l.message:String(l);globalThis.alert(`Import diagram failed: ${d}`)}finally{c.disabled=!1}}),e.querySelector(".docdiagram-source-help")?.addEventListener("click",()=>{globalThis.open(Na,"_blank","noopener")}),e.addEventListener("keydown",a=>{a.key==="Escape"&&!i.hidden&&(a.preventDefault(),i.hidden=!0,r.setAttribute("aria-expanded","false"),r.focus())}),this.host.outputElement.after(e),this.host.outputElement.dataset.sourceEditorOpen="true";let s=()=>{this.host.outputElement.style.setProperty("--docdiagram-source-tray-height",`${e?.offsetHeight||0}px`)};this.attachResizeHandle(e,s),this.resizeObserver?.disconnect(),globalThis.ResizeObserver&&(this.resizeObserver=new globalThis.ResizeObserver(s),this.resizeObserver.observe(e)),s(),this.updateStatus()}attachResizeHandle(e,o){let n=e.querySelector(".docdiagram-source-resize");if(!n)return;let r=s=>{let a=globalThis.innerHeight||0,c=a?Math.max(Yo,a-Aa):s;return Math.min(Math.max(s,Yo),c)},i=s=>{e.style.height=`${r(s)}px`,o()};n.addEventListener("pointerdown",s=>{if(s.button!==0)return;s.preventDefault();let a=s.clientY,c=e.offsetHeight;e.dataset.resizing="true",n.setPointerCapture?.(s.pointerId);let l=u=>{i(c-(u.clientY-a))},d=()=>{n.removeEventListener("pointermove",l),n.removeEventListener("pointerup",d),n.removeEventListener("pointercancel",d),delete e.dataset.resizing,n.releasePointerCapture?.(s.pointerId)};n.addEventListener("pointermove",l),n.addEventListener("pointerup",d),n.addEventListener("pointercancel",d)}),n.addEventListener("keydown",s=>{let a=s.shiftKey?kr*4:kr;s.key==="ArrowUp"?(s.preventDefault(),i(e.offsetHeight+a)):s.key==="ArrowDown"?(s.preventDefault(),i(e.offsetHeight-a)):s.key==="Home"?(s.preventDefault(),i(Number.MAX_SAFE_INTEGER)):s.key==="End"&&(s.preventDefault(),i(Yo))}),n.addEventListener("dblclick",()=>{e.style.removeProperty("height"),o()})}scheduleRender(){globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=globalThis.setTimeout(()=>{this.renderTimer=null,this.renderDraft()},250)}renderDraft(){return globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=null,this.host.renderDocument(this.draft,{preserveOnError:!0})}updateStatus(){let e=document.querySelector(".docdiagram-source-tray");if(!e)return;let o=e.querySelector(".docdiagram-source-status"),n=e.querySelector(".docdiagram-source-error");!o||!n||(o.textContent=this.error?"Source has errors; showing the last valid render.":"Changes render automatically.",n.hidden=!this.error,n.textContent=this.error)}insertTemplate(e,o){let n=e.selectionStart,r=e.selectionEnd,i=e.value.lastIndexOf(`
`,n-1)+1,s=e.value.indexOf(`
`,n),a=s===-1?e.value.length:s,c=e.value.slice(i,a),l=/^\s*$/.test(c)?n:a,d=/^\s*$/.test(c)?r:a,u=l===a?`
${o}`:o;e.setRangeText(u,l,d,"end"),this.draft=e.value,this.error="",this.updateStatus(),this.scheduleRender(),e.focus()}async importDiagram(e){let o=await Pa();if(!o)return;if(o.size>Ma)throw new Error("That file is too large to import.");let n=Ye(La(await o.text()));if(!n.length)throw new Error("That file has no diagrams to import.");let r=Ra(n);if(!r)return;xe(r.source,this.host.getDocumentColourScheme());let i=Zt(e.value,r.id||"imported-diagram");this.insertTemplate(e,`\`\`\`diagram
${Hn(r.source,i)}
\`\`\``)}focus(){let e=document.querySelector(".docdiagram-source-editor");e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))}};var _o="data-docdiagram-offline-runtime-placeholder",Dr='script[data-docdiagram-runtime="embedded"]',Ba="https://sparkkz-nz.github.io/skryb/latest/skryb-runtime.js";function Ia(){let t=globalThis;return typeof t.DocDiagramRuntimeSource=="string"?t.DocDiagramRuntimeSource:null}function Xo(t){return/^https?:\/\//i.test(t)?t:Ba}async function qa(t,e=globalThis.fetch.bind(globalThis)){let o=await e(t);if(!o.ok)throw new Error(`Could not fetch the Skryb runtime (${o.status||"unknown status"}).`);return o.text()}function $r(t,e,o=""){let n=new RegExp(`<script\\b[^>]*\\b${_o}\\b[^>]*>[\\s\\S]*?<\\/script>\\s*`,"i");if(!n.test(t))throw new Error("Could not find the selected Skryb runtime in this document.");let r=t.replace(n,""),i=/<\/body\s*>/i;if(!i.test(r))throw new Error("Could not find the document body for offline export.");let s=e.replace(/<\/script/gi,"<\\/script"),c=`<script data-docdiagram-runtime="embedded"${o?` data-docdiagram-runtime-url="${za(o)}"`:""}>
${s}
<\/script>
`;return r.replace(i,()=>`${c}</body>`)}async function Fr(t,e){let o=t.querySelector(Dr);if(o)return o.setAttribute(_o,""),{source:o.textContent||"",runtimeUrl:Xo(o.dataset.docdiagramRuntimeUrl||"")};let n=Array.from(t.querySelectorAll("script[src]")).find(i=>{try{let s=new URL(i.getAttribute("src")||"",t.ownerDocument.baseURI).pathname;return/\/skryb-runtime(?:-self-packaged)?\.js$/i.test(s)}catch{return!1}});if(!n)throw new Error("Could not find the selected Skryb runtime in this document.");return n.setAttribute(_o,""),{source:Ia()||await qa(n.src,e),runtimeUrl:Xo(n.getAttribute("src")||n.src)}}function Ko(t){let e=t.querySelector(Dr);if(!e)return;let o=Xo(e.dataset.docdiagramRuntimeUrl||""),n=t.ownerDocument.createElement("script");n.src=o,n.defer=!0,e.replaceWith(n)}function za(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;")}var Qt=class{constructor(e,o,n,r){this.session=e;this.state=o;this.outputElement=n;this.sourceEditor=r}downloadDocument(){if(this.sourceEditor?.flushRender(),!this.canExportLastValidSource())return;let e=this.createDocumentCopy();try{Ko(e)}catch(o){let n=o instanceof Error?o.message:String(o);console.error("Save As failed.",o),globalThis.alert(`Save As failed: ${n}`);return}this.downloadHtml(e.outerHTML,"-edited"),this.session.markSaved()}async downloadOfflineDocument(){if(this.sourceEditor?.flushRender(),!this.canExportLastValidSource())return;let e=this.createDocumentCopy(),o=await Fr(e);this.downloadHtml($r(e.outerHTML,o.source,o.runtimeUrl),"-offline"),this.session.markSaved()}createDocumentCopy(e=this.session.source){let o=document.documentElement.cloneNode(!0),n=o.querySelector("#source"),r=o.querySelector("#rendered-document");n?.content.replaceChildren(document.createTextNode(e)),o.querySelector(".docdiagram-lint-dialog")?.remove(),o.querySelector(".docdiagram-toolbar")?.remove(),o.querySelector(".docdiagram-source-tray")?.remove();for(let i of o.querySelectorAll("style"))(i.dataset.docdiagramRuntimeStyles==="true"||i.textContent?.includes(".docdiagram-inline-editor")&&i.textContent.includes(".docdiagram-toolbar"))&&i.remove();o.removeAttribute("data-docdiagram-theme"),o.removeAttribute("data-docdiagram-expanded"),o.style.removeProperty("--docdiagram-page-background"),o.style.removeProperty("--docdiagram-page-text"),o.getAttribute("style")||o.removeAttribute("style"),o.querySelector("body")?.removeAttribute("data-docdiagram-theme"),r?.replaceChildren(),r?.removeAttribute("data-editing-shortcuts-bound");for(let i of[...r?.attributes||[]])(i.name==="style"||i.name.startsWith("data-"))&&r?.removeAttribute(i.name);return o}openDiagram(e){let o=this.getDiagramExportUrl(e,"image/svg+xml;charset=utf-8");if(!o)return;if(!globalThis.open(o,"_blank")){URL.revokeObjectURL(o),globalThis.alert("Your browser blocked the new diagram tab. Allow pop-ups and try again.");return}globalThis.setTimeout(()=>URL.revokeObjectURL(o),6e4)}downloadDiagramDocument(e){let o=this.state.diagramModels[e];if(!o){globalThis.alert("The diagram is no longer available to save.");return}let n=Pe(o),r=It(n)||this.getDiagramExportName(e),i=["---",`theme: ${this.state.documentThemeSetting}`,`colourScheme: ${this.state.documentColorScheme}`,"doctype: diagram","---","","```diagram",n,"```",""].join(`
`),s=this.createDocumentCopy(i),a=s.querySelector("title");a&&(a.textContent=r);try{Ko(s)}catch(c){let l=c instanceof Error?c.message:String(c);console.error("Save as Skryb diagram failed.",c),globalThis.alert(`Save as Skryb diagram failed: ${l}`);return}this.downloadHtml(s.outerHTML,"",this.slug(r))}downloadDiagram(e){let o=this.getDiagramExportUrl(e,"image/svg+xml;charset=utf-8");if(!o)return;let n=document.createElement("a");n.href=o,n.download=`${this.getDiagramExportName(e)}.svg`,n.hidden=!0,document.body.append(n),n.click(),n.remove(),globalThis.setTimeout(()=>URL.revokeObjectURL(o),200)}printDiagram(e){let o=this.getStandaloneDiagramSvg(e);if(!o){globalThis.alert("The diagram is no longer available to print.");return}let n=['<!doctype html><html><head><meta charset="utf-8"><title>Diagram</title>',"<style>html,body{height:100%;margin:0}body{display:grid;place-items:center}svg{height:auto;max-height:100vh;max-width:100vw;width:auto}@page{margin:0}</style>","</head><body>",new XMLSerializer().serializeToString(o),"</body></html>"].join(""),r=globalThis.open("","_blank");if(!r){globalThis.alert("Your browser blocked the print window. Allow pop-ups and try again.");return}r.document.open(),r.document.write(n),r.document.close(),r.focus(),r.print()}getStandaloneDiagramSvg(e){let o=this.outputElement?.querySelector(`.docdiagram[data-diagram-index="${e}"] svg`);if(!o)return null;let n=o.closest(".docdiagram"),r=globalThis.getComputedStyle(n||o).backgroundColor,i=o.cloneNode(!0);i.setAttribute("xmlns","http://www.w3.org/2000/svg"),i.removeAttribute("style"),i.querySelectorAll(".docdiagram-inline-editor-host, .docdiagram-resize-handle, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-connection-preview").forEach(c=>c.remove()),i.querySelectorAll(".docdiagram-node-selected, .docdiagram-edge-selected").forEach(c=>{c.classList.remove("docdiagram-node-selected","docdiagram-edge-selected")});let s=document.createElementNS("http://www.w3.org/2000/svg","style");s.textContent=['svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}',".docdiagram-edge,.docdiagram-edge-hit{fill:none}",".docdiagram-edge-label{font-size:15px}",".docdiagram-node-label{font-size:16px;font-weight:650}",".docdiagram-node-subtitle{font-size:13px}"].join(""),i.insertBefore(s,i.firstChild);let a=document.createElementNS("http://www.w3.org/2000/svg","rect");return a.setAttribute("class","docdiagram-export-background"),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("fill",r),i.insertBefore(a,s.nextSibling),i}canExportLastValidSource(){return!(this.sourceEditor?.hasError&&this.sourceEditor.hasUnsavedDraft)||globalThis.confirm("Source has errors. Save the last valid version instead?")}getDiagramExportUrl(e,o){let n=this.getStandaloneDiagramSvg(e);return n?URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(n)],{type:o})):(globalThis.alert("The diagram is no longer available to export."),null)}getDiagramExportName(e){return`${this.slug(document.title)||"diagram"}-${e+1}`}downloadHtml(e,o,n=""){let r=new Blob([`<!doctype html>
${e}`],{type:"text/html;charset=utf-8"}),i=document.createElement("a"),s=n||this.slug(document.title);i.href=URL.createObjectURL(r),i.download=`${s||"document"}${o}.html`,i.click(),URL.revokeObjectURL(i.href)}slug(e){return e.toLowerCase().replace(/[^\w]+/g,"-").replace(/^-|-$/g,"")}};var eo=class{constructor(e,o){this.state=e;this.renderMarkdown=o}render(e,o=!1){let n=[...this.state.diagramModels],r=this.state.documentTheme,i=this.state.documentThemeSetting,s=this.state.documentColorScheme,a=this.state.documentDoctype;this.state.diagramModels.length=0;try{let c=o?We(e):ft(e);this.state.documentTheme=c.resolvedTheme,this.state.documentThemeSetting=c.theme,this.state.documentColorScheme=c.colourScheme,this.state.documentDoctype=c.doctype;let l=this.renderMarkdown(c.content);return this.state.expandedDiagramIndex!==null&&!this.state.diagramModels[this.state.expandedDiagramIndex]&&(this.state.expandedDiagramIndex=null,this.state.diagramModels.length=0,l=this.renderMarkdown(c.content)),{ok:!0,markup:l}}catch(c){let l=c instanceof Error?c.message:String(c);return this.state.diagramModels.length=0,this.state.diagramModels.push(...n),o&&(this.state.documentTheme=r,this.state.documentThemeSetting=i,this.state.documentColorScheme=s,this.state.documentDoctype=a),{ok:!1,message:l}}}};var to=class{constructor(e){this.sourceElement=e}read(){return this.sourceElement?.content.textContent||""}write(e){this.sourceElement?.content.replaceChildren(document.createTextNode(e))}},oo=class{constructor(e){this.sourceStore=e;this.savedSource=""}get source(){return this.sourceStore.read()}set source(e){this.sourceStore.write(e)}captureSavedSource(){this.savedSource=this.source}markSaved(){this.captureSavedSource()}hasUnsavedChanges(e=!1){return this.source!==this.savedSource||e}bake(){try{let e=qt(this.source);return e.baked&&(this.source=e.source),{baked:e.baked,failed:!1}}catch{return{baked:0,failed:!0}}}persistDiagramModels(e){let o=0,n=new Map;for(let s of e){let a=s.id;typeof a=="string"&&n.set(a,[...n.get(a)||[],s])}let r=new Map([...n].flatMap(([s,a])=>a.length===1?[[s,a[0]]]:[])),i=this.source.replace(/\r\n/g,`
`).replace(/^((?: {0,3}> ?)*)```diagram\s*\n([\s\S]*?)^((?: {0,3}> ?)*)```$/gm,(s,a,c,l)=>{let u=c.replace(/^(?: {0,3}> ?)+/gm,"").match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m)?.slice(1).find(Boolean),f=u&&r.get(u)||e[o];o+=1;let p=f?Pe(f):"",h=p?p.split(`
`).map(m=>`${a}${m}`).join(`
`):"";return`${a}\`\`\`diagram
${h?`${h}
`:""}${l}\`\`\``});return this.source=i,i}};function Ha(t){let e=t.querySelector("svg");if(!e||typeof e.getBBox!="function")return null;let o;try{o=e.getBBox()}catch{return null}let n=e.viewBox?.baseVal?.height||0,r=e.getBoundingClientRect();if(!n||!r.height||!o.height)return null;let i=r.height/n,s=getComputedStyle(t),a=r.top-t.getBoundingClientRect().top+t.scrollTop,c=(parseFloat(s.paddingBottom)||0)+(parseFloat(s.borderBottomWidth)||0),l=Math.min(Math.max(o.y,0),40)*i,d=Math.ceil(a+(o.y+o.height)*i+l+c);return Math.min(d,t.offsetHeight)}var ja="template[data-skryb-lint]",no=class{constructor(e,o){this.sourceElement=e;this.outputElement=o;this.state=pr();this.pendingViewportFits=new Set;this.autoFittedDiagrams=new Map;this.session=new oo(new to(e)),this.renderer=new eo(this.state,n=>this.renderMarkdown(n)),this.chrome=new _t(this.state,o),this.sourceEditor=o?new Jt({outputElement:o,getSource:()=>this.getSource(),getDocumentTheme:()=>this.getDocumentTheme(),getDocumentColourScheme:()=>this.state.documentColorScheme,renderDocument:(n,r)=>this.renderDocument(n,r),stopDiagramEditing:()=>this.stopDiagramEditing(),closeDocumentMenu:()=>this.closeDocumentMenu()}):null,this.diagramEditor=o?new Kt({outputElement:o,state:this.state,persistDiagramModels:()=>this.persistDiagramModels(),renderDocument:()=>this.renderDocument()}):null,this.exportService=new Qt(this.session,this.state,o,this.sourceEditor),this.lifecycle=o?new Xt({outputElement:o,isAutoTheme:()=>this.state.documentThemeSetting==="auto",renderDocument:()=>{this.renderDocument()},refitDiagramViewports:()=>this.refitDiagramViewports(),hasUnsavedChanges:()=>this.session.hasUnsavedChanges(this.sourceEditor?.hasUnsavedDraft),isSourceEditorOpen:()=>!!this.sourceEditor?.isOpen,toggleSourceEditor:()=>this.sourceEditor?.isOpen?this.sourceEditor.close():this.sourceEditor?.open(),downloadDocument:()=>this.downloadDocument(),closeDocumentMenu:()=>this.closeDocumentMenu(),closeDiagramExportMenus:()=>this.closeDiagramExportMenus(),getExpandedDiagramIndex:()=>this.state.expandedDiagramIndex,toggleDiagramExpansion:n=>this.toggleDiagramExpansion(n),hasSelection:()=>!!(this.state.selectedNode||this.state.selectedEdge||this.state.selectedSequenceElement),clearSelection:()=>{Ze(this.state),this.renderDocument()},revealSource:n=>this.sourceEditor?.reveal(n)}):null}getSource(){return this.session.source}setSource(e){this.session.source=e}getDocumentTheme(){return this.state.documentTheme}stopDiagramEditing(){this.state.editingDiagramIndex!==null&&(this.state.editingDiagramIndex=null,this.state.editSessionDiagram=null,Ze(this.state))}renderDiagram(e,o,n){return mr(e,o,{figure:n,colourScheme:this.state.documentColorScheme,state:{...this.state,documentTheme:this.state.documentTheme,documentColorScheme:this.state.documentColorScheme},onDiagram:(r,i)=>{this.state.diagramModels[r]=i}})}renderMarkdown(e,o={diagramIndex:0}){return jo(e,o,{renderDiagram:(n,r,i)=>this.renderDiagram(n,r,i),documentColorScheme:this.state.documentColorScheme,documentTheme:this.state.documentTheme})}persistDiagramModels(){let e=this.session.persistDiagramModels(this.state.diagramModels);this.sourceEditor?.syncSource(e)}renderDocument(e=this.getSource(),{preserveOnError:o=!1}={}){if(!this.outputElement)return!1;for(let a of this.outputElement.querySelectorAll(".docdiagram")){let c=Number(a.dataset.diagramIndex);if(this.pendingViewportFits.has(c)){this.state.diagramViewportHeights.delete(c);continue}c!==this.state.expandedDiagramIndex&&this.state.diagramViewportHeights.set(c,a.offsetHeight)}let n={x:globalThis.scrollX||0,y:globalThis.scrollY||0},r=this.renderer.render(e,o);if(!r.ok)return o?(this.sourceEditor?.setError(r.message),!1):(this.applyPageTheme(this.state.documentTheme),this.removeToolbarChrome(),this.outputElement.innerHTML=`<section class="docdiagram-error"><strong>Document could not be rendered.</strong><br>${D(r.message)}</section>`,this.sourceEditor?.renderTray(),!1);this.setSource(e);let i=r.markup;this.sourceEditor?.clearError(),this.outputElement.dataset.theme=this.state.documentTheme,this.outputElement.dataset.colourScheme=this.state.documentColorScheme,this.applyDocumentColourScheme(this.outputElement),this.outputElement.dataset.format=this.state.documentFormat,this.applyPageTheme(this.state.documentTheme),this.outputElement.innerHTML=i,this.removeToolbarChrome(),this.createToolbar(),this.sourceEditor?.renderTray();let s=document.querySelector(".docdiagram-source-tray");return s&&this.applyDocumentColourScheme(s),this.diagramEditor?.enableCanvasPanning(),this.diagramEditor?.enableSequenceSelection(),this.fitDiagramViewports(),this.state.editingDiagramIndex!==null&&this.diagramEditor?.enableEditing(),globalThis.scrollTo?.(n.x,n.y),!0}fitDiagramViewports(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram")){let o=Number(e.dataset.diagramIndex);if(this.state.diagramViewportHeights.has(o)||o===this.state.expandedDiagramIndex)continue;let n=Ha(e);n&&(this.state.diagramViewportHeights.set(o,n),this.autoFittedDiagrams.set(o,n),e.style.boxSizing="border-box",e.style.minHeight="0",e.style.height=`${n}px`)}this.pendingViewportFits.clear()}}refitDiagramViewports(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram")){let o=Number(e.dataset.diagramIndex),n=this.autoFittedDiagrams.get(o);if(!(n===void 0||o===this.state.expandedDiagramIndex)){if(e.offsetHeight!==n){this.autoFittedDiagrams.delete(o);continue}e.style.removeProperty("height"),e.style.removeProperty("min-height"),this.state.diagramViewportHeights.delete(o)}}this.fitDiagramViewports()}}closeDocumentMenu(){this.chrome.closeDocumentMenu()}bakeOnOpen(){let{baked:e,failed:o}=this.session.bake(),n=this.skrybActionRequestedByUrl("autowrap"),r=!1;if(!o&&n)try{let i=Bn(this.getSource());i.changed&&(this.setSource(i.source),r=!0)}catch{}(e||o||r||n||this.skrybActionRequestedByUrl("lint"))&&this.writeLintReport()}skrybActionRequestedByUrl(e){let o=globalThis.location?.search||"";return new URLSearchParams(o).getAll("skryb").includes(e)?!0:e==="lint"&&/(^|[?&])skryb-lint(=|&|$)/.test(o)}writeLintReport(){let e=this.getSource(),o;try{o=Io(e)}catch(r){o={sourceHash:_e(e),messages:[{severity:"error",rule:"schema",message:r instanceof Error?r.message:String(r)}],errorCount:1,warningCount:0}}let n=document.querySelector(ja)||document.createElement("template");return n.dataset.skrybLint="",n.content.replaceChildren(document.createTextNode(JSON.stringify({errors:o.errorCount,warnings:o.warningCount,sourceHash:o.sourceHash,messages:o.messages},null,2))),n.isConnected||document.body.append(n),o}showLintReport(){let e=this.writeLintReport();if(!e)return;let o=`${e.errorCount} error${e.errorCount===1?"":"s"}, ${e.warningCount} warning${e.warningCount===1?"":"s"}`,n=document.querySelector(".docdiagram-lint-dialog")||document.body.appendChild(document.createElement("dialog"));n.className="docdiagram-lint-dialog",n.replaceChildren();let r=document.createElement("h2");r.textContent=`Document check: ${o}`;let i=document.createElement("div");i.className="docdiagram-lint-messages",e.messages.length||(i.textContent="Nothing to report. Every check passed.");for(let a of e.messages){let c=a.location?.subjects.find(d=>d.sourceRange)?.sourceRange||a.location?.fenceRange,l=c&&this.sourceEditor?document.createElement("button"):document.createElement("pre");if(l.textContent=or({sourceHash:e.sourceHash,messages:[a],errorCount:a.severity==="error"?1:0,warningCount:a.severity==="warning"?1:0}),l instanceof HTMLButtonElement&&c&&(l.type="button",l.title=`Reveal source at line ${c.start.line}`,l.addEventListener("click",()=>{n.close(),this.sourceEditor?.revealSourceRange(c,e.sourceHash)})),i.append(l),a.suggestedAction?.id==="wrap-linear-flow"){let d=document.createElement("button");d.type="button",d.textContent=a.suggestedAction.label,d.addEventListener("click",()=>{let u=qn(this.getSource(),a.suggestedAction.diagramIndex);if(!u.changed||!u.layout)return;let{before:f,after:p}=u.layout;globalThis.confirm(`Preview: fitted content changes from ${f.width} by ${f.height} (${f.aspectRatio.toFixed(1)}:1) to ${p.width} by ${p.height} (${p.aspectRatio.toFixed(1)}:1).

This replaces node positions, connector anchors, routes, and waypoints. Apply the wrapped layout?`)&&(n.close(),this.renderDocument(u.source),this.sourceEditor?.syncSource(u.source),this.writeLintReport())}),i.append(d)}}let s=document.createElement("button");s.type="button",s.textContent="Close",s.addEventListener("click",()=>n.close()),n.append(r,i,s),n.showModal()}downloadDocument(){this.exportService.downloadDocument()}async downloadOfflineDocument(){await this.exportService.downloadOfflineDocument()}boot(){if(!(!this.sourceElement||!this.outputElement)){gr(),this.session.captureSavedSource(),this.bakeOnOpen(),this.lifecycle?.bind();try{Bt(this.getSource()).frontmatter.doctype==="diagram"&&(this.state.expandedDiagramIndex=0)}catch{this.state.expandedDiagramIndex=null}this.renderDocument()}}getCoreApi(){return{bakeDocumentSource:qt,spliceBakedFences:Fo,lintDocument:Io}}createToolbar(){if(!this.outputElement)return;let e=document.createElement("section");e.className="docdiagram-toolbar",e.dataset.editing=String(this.state.editingDiagramIndex!==null),e.dataset.theme=this.state.documentTheme,e.dataset.colourScheme=this.state.documentColorScheme,e.dataset.format=this.state.documentFormat;let o=this.getSelectedNode(),n=o?null:this.getSelectedEdge(),r=!o&&!n?this.getSelectedSequenceElement():null,i=o&&this.state.selectedNode?this.state.diagramModels[this.state.selectedNode.diagramIndex]:n&&this.state.selectedEdge?this.state.diagramModels[this.state.selectedEdge.diagramIndex]:r&&this.state.selectedSequenceElement?this.state.diagramModels[this.state.selectedSequenceElement.diagramIndex]:null;e.innerHTML=['<button type="button" class="docdiagram-menu-toggle" aria-label="Document menu" aria-expanded="false" title="Document menu">\u2630</button>','<div class="docdiagram-menu" hidden>','<label class="docdiagram-theme-control">Theme<select class="docdiagram-theme-select">',`<option value="auto"${this.state.documentThemeSetting==="auto"?" selected":""}>Auto</option>`,`<option value="light"${this.state.documentThemeSetting==="light"?" selected":""}>Light</option>`,`<option value="dark"${this.state.documentThemeSetting==="dark"?" selected":""}>Dark</option>`,"</select></label>",`<label class="docdiagram-theme-control">Colour scheme<select class="docdiagram-colour-scheme-select">${Object.entries(ue).map(([c,l])=>`<option value="${c}"${this.state.documentColorScheme===c?" selected":""}>${l.label}</option>`).join("")}</select></label>`,'<label class="docdiagram-theme-control">Format<select class="docdiagram-format-select">',`<option value="centered"${this.state.documentFormat==="centered"?" selected":""}>Centered</option>`,`<option value="full-width"${this.state.documentFormat==="full-width"?" selected":""}>Full width</option>`,"</select></label>",'<label class="docdiagram-theme-control">Opens as<select class="docdiagram-doctype-select">',`<option value="document"${this.state.documentDoctype==="document"?" selected":""}>Document</option>`,`<option value="diagram"${this.state.documentDoctype==="diagram"?" selected":""}>Diagram</option>`,"</select></label>",'<button type="button" class="docdiagram-edit-source">Edit source</button>','<button type="button" class="docdiagram-lint">Check document</button>','<button type="button" class="docdiagram-print-document">Print / Save as PDF</button>','<button type="button" class="docdiagram-save">Save As</button>','<button type="button" class="docdiagram-offline-save">Save for Offline</button>',"</div>",o&&i?.type==="flowchart"?`<div class="docdiagram-inspector" data-kind="node">${yr(i,o,this.state.documentColorScheme,this.state.documentTheme)}</div>`:n&&i?`<div class="docdiagram-inspector" data-kind="edge">${xr(i,n,this.state.documentColorScheme,this.state.documentTheme)}</div>`:r&&i?`<div class="docdiagram-inspector" data-kind="sequence">${wr(i,this.state.selectedSequenceElement,r,this.state.documentColorScheme,this.state.documentTheme)}</div>`:""].join("");let s=e.querySelector(".docdiagram-menu-toggle"),a=e.querySelector(".docdiagram-menu");s?.addEventListener("click",()=>{if(!a)return;let c=a.hidden;a.hidden=!c,s.setAttribute("aria-expanded",String(c))}),e.querySelector(".docdiagram-print-document")?.addEventListener("click",()=>this.printDocument()),e.querySelector(".docdiagram-save")?.addEventListener("click",()=>this.downloadDocument()),e.querySelector(".docdiagram-offline-save")?.addEventListener("click",async c=>{let l=c.currentTarget;l.disabled=!0;try{await this.downloadOfflineDocument()}catch(d){let u=d instanceof Error?d.message:String(d);console.error("Offline export failed.",d),globalThis.alert(`Save for Offline failed: ${u}`)}finally{l.disabled=!1}}),e.querySelector(".docdiagram-edit-source")?.addEventListener("click",()=>{this.closeDocumentMenu(),this.sourceEditor?.open()}),e.querySelector(".docdiagram-lint")?.addEventListener("click",()=>{this.closeDocumentMenu(),this.showLintReport()}),e.querySelector(".docdiagram-theme-select")?.addEventListener("change",c=>{this.setSource(jn(this.getSource(),c.currentTarget.value)),this.renderDocument()}),e.querySelector(".docdiagram-colour-scheme-select")?.addEventListener("change",c=>{this.setSource(On(this.getSource(),c.currentTarget.value)),this.renderDocument()}),e.querySelector(".docdiagram-format-select")?.addEventListener("change",c=>{this.state.documentFormat=c.currentTarget.value==="full-width"?"full-width":"centered",this.renderDocument()}),e.querySelector(".docdiagram-doctype-select")?.addEventListener("change",c=>{let l=c.currentTarget.value==="diagram"?"diagram":"document";this.setSource(Gn(this.getSource(),l)),this.setExpandedDiagram(l==="diagram"?0:null),this.renderDocument()}),this.outputElement.before(e),this.applyDocumentColourScheme(e),o&&this.state.selectedNode?Er(this,e,this.state.selectedNode.diagramIndex,this.state.selectedNode.nodeId):n&&this.state.selectedEdge?Sr(this,e,this.state.selectedEdge.diagramIndex,this.state.selectedEdge.edgeIndex):r&&this.state.selectedSequenceElement&&vr(this,e,r),this.wireChromeControls(),this.dockExpandedDiagramToolbar(e)}dockExpandedDiagramToolbar(e){this.chrome.dockExpandedDiagramToolbar(e)}getSelectedNode(){let e=this.state.selectedNode,o=e?this.state.diagramModels[e.diagramIndex]:null;return e&&o?.type==="flowchart"&&Je(this.state,e.diagramIndex)&&me(o,e.nodeId)?.node||null}getSelectedEdge(){let e=this.state.selectedEdge,o=e?this.state.diagramModels[e.diagramIndex]:null;return e&&o?.type==="flowchart"&&Je(this.state,e.diagramIndex)&&o.edges[e.edgeIndex]||null}getSelectedSequenceElement(){let e=this.state.selectedSequenceElement,o=e?this.state.diagramModels[e.diagramIndex]:null;return!e||o?.type!=="sequence"||!Je(this.state,e.diagramIndex)?null:e.kind==="participant"?o.participants?.find(n=>n.id===e.id)||null:e.kind==="message"?o.messages?.[e.index]||null:o.notes?.[e.index]||null}applyDocumentColourScheme(e){this.chrome.applyDocumentColourScheme(e)}wireChromeControls(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram-export-toggle"))e.addEventListener("click",()=>{let o=e.parentElement?.querySelector(".docdiagram-diagram-export-menu");if(!o)return;let n=o.hidden;this.closeDiagramExportMenus(),o.hidden=!n,e.setAttribute("aria-expanded",String(n))});for(let e of this.outputElement.querySelectorAll(".docdiagram-toggle-expand"))e.addEventListener("click",()=>this.toggleDiagramExpansion(Number(e.dataset.diagramIndex)));for(let e of this.outputElement.querySelectorAll(".docdiagram-open-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.openDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-save-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.downloadDiagramDocument(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-download-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.downloadDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-print-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.printDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-zoom-in, .docdiagram-zoom-out"))e.addEventListener("click",()=>{let o=Number(e.dataset.diagramIndex),n=this.state.diagramZooms.get(o)||100,r=e.classList.contains("docdiagram-zoom-in")?25:-25;this.state.diagramZooms.set(o,Dt(n+r)),this.renderDocument()});for(let e of this.outputElement.querySelectorAll(".docdiagram-fit"))e.addEventListener("click",()=>{let o=Number(e.dataset.diagramIndex);this.state.diagramZooms.set(o,100),this.state.diagramCameraOffsets.delete(o),this.pendingViewportFits.add(o),this.renderDocument()});for(let e of this.outputElement.querySelectorAll(".docdiagram-relayout"))e.addEventListener("click",()=>{let o=Number(e.dataset.diagramIndex);if(!globalThis.confirm(`Relayout this entire diagram?

All node positions and connector anchors, routes, and waypoints will be replaced. Node sizes will be preserved.`))return;let r=zn(this.getSource(),o);r.changed&&(this.renderDocument(r.source),this.sourceEditor?.syncSource(r.source))});for(let e of this.outputElement.querySelectorAll(".docdiagram-start-editing"))e.addEventListener("click",()=>{let o=Number(e.dataset.diagramIndex),n=this.state.diagramModels[o];n&&(this.state.editSessionDiagram=xe(Pe(n),this.state.documentColorScheme),this.state.editingDiagramIndex=o,Ze(this.state),this.renderDocument())});for(let e of this.outputElement.querySelectorAll(".docdiagram-done-editing"))e.addEventListener("click",()=>this.exitEditing(this.state.editingDiagramIndex,!1));for(let e of this.outputElement.querySelectorAll(".docdiagram-cancel-editing"))e.addEventListener("click",()=>this.exitEditing(this.state.editingDiagramIndex,!0));for(let e of this.outputElement.querySelectorAll(".docdiagram-create-node"))e.addEventListener("click",()=>this.createNewNode(Number(e.dataset.diagramIndex)))}}printDocument(){this.closeDocumentMenu(),this.closeDiagramExportMenus(),this.stopDiagramEditing(),this.state.expandedDiagramIndex=null,this.state.diagramViewportHeights.clear();for(let e of this.state.diagramZooms.keys())this.state.diagramZooms.set(e,100);this.state.diagramCameraOffsets.clear(),this.renderDocument(),globalThis.print()}closeDiagramExportMenus(){this.chrome.closeDiagramExportMenus()}exitEditing(e,o){e!==null&&(o&&this.state.editSessionDiagram&&(this.state.diagramModels[e]=this.state.editSessionDiagram,this.persistDiagramModels()),this.state.editingDiagramIndex=null,this.state.editSessionDiagram=null,Ze(this.state),this.renderDocument())}createNewNode(e){let o=this.state.diagramModels[e];if(!o||o.type!=="flowchart")return;let n=dn(o);this.state.selectedNode={diagramIndex:e,nodeId:n.id},this.state.selectedEdge=null,this.persistDiagramModels(),this.renderDocument()}applyPageTheme(e){this.chrome.applyPageTheme(e)}setExpandedDiagram(e){let o=this.state.expandedDiagramIndex;if(o!==e){this.state.expandedDiagramIndex=e;for(let n of[o,e])n!==null&&(this.state.diagramZooms.set(n,100),this.state.diagramCameraOffsets.delete(n),this.pendingViewportFits.add(n),this.autoFittedDiagrams.delete(n))}}toggleDiagramExpansion(e){this.setExpandedDiagram(this.state.expandedDiagramIndex===e?null:e),this.closeDiagramExportMenus(),this.renderDocument()}removeToolbarChrome(){this.chrome.removeToolbar()}};var Oa=document.querySelector("#source"),Ga=document.querySelector("#rendered-document"),Nr=new no(Oa,Ga),Va=globalThis;Va.DocDiagramCore=Nr.getCoreApi();Nr.boot();})();
globalThis.DocDiagramRuntimeSource=`/*! Skryb runtime | Copyright 2026 Stuart Parkinson | Apache-2.0 | https://github.com/sparkkz-nz/skryb */
"use strict";(()=>{var ke=["background","pale","light","neutral","dark","accent-soft","accent","accent-strong","note","success","warning","danger","highlight","none"],io=["flowchart","sequence"],wt=["auto","light","dark"],ao=["right","down","left","up"],Jo=["actor"],Et=["solid","dashed"],tt=["rounded-rectangle","circle","oval","database","diamond","rhombus","flattened-hexagon","chevron","right-chevron","document","text"],ne=["top","right","bottom","left"],ot=["orthogonal","straight","curved"],Ie=["solid","dotted","dashed","double"],Fe=["none","arrow","circle"],mt={start:"none",end:"arrow"},Qo=["top","center"],en=["left","center","right"],so={width:50,height:20},co={width:50,height:20},z={shape:"rounded-rectangle",label:"New node",width:190,height:80},Le=(t,e,o,n,r,i,s,a,c,l,d,u,f)=>({background:t,pale:e,light:o,neutral:n,dark:r,"accent-soft":i,accent:s,"accent-strong":a,note:c,success:l,warning:d,danger:u,highlight:f,none:x("None","none","none",t.text)}),x=(t,e,o,n,r,i)=>({label:t,fill:e,stroke:o,text:n,gradient:r,glow:i}),ue={classic:{label:"Classic",light:Le(x("Background","#FFFFFF","#D1D5DB","#111827"),x("Pale","#F3F4F6","#9CA3AF","#1F2937"),x("Light","#E5E7EB","#6B7280","#1F2937"),x("Neutral","#D1D5DB","#4B5563","#111827"),x("Dark","#374151","#111827","#F9FAFB"),x("Soft","#DBEAFE","#60A5FA","#1E3A8A"),x("Accent","#BFDBFE","#2563EB","#1E3A8A","#EFF6FF"),x("Strong","#2563EB","#1D4ED8","#FFFFFF","#3B82F6","#60A5FA"),x("Note","#DBEAFE","#2563EB","#1E3A8A"),x("Success","#DCFCE7","#16A34A","#14532D"),x("Warning","#FFEDD5","#EA580C","#7C2D12"),x("Danger","#FEE2E2","#DC2626","#7F1D1D"),x("Highlight","#FEF9C3","#CA8A04","#713F12")),dark:Le(x("Background","#111827","#374151","#F9FAFB"),x("Pale","#1F2937","#4B5563","#F3F4F6"),x("Light","#374151","#6B7280","#F9FAFB"),x("Neutral","#4B5563","#9CA3AF","#FFFFFF"),x("Dark","#9CA3AF","#D1D5DB","#111827"),x("Soft","#172554","#3B82F6","#DBEAFE"),x("Accent","#1E3A8A","#60A5FA","#EFF6FF","#172554"),x("Strong","#2563EB","#93C5FD","#FFFFFF","#1D4ED8","#60A5FA"),x("Note","#172554","#60A5FA","#DBEAFE"),x("Success","#052E16","#4ADE80","#DCFCE7"),x("Warning","#431407","#FB923C","#FFEDD5"),x("Danger","#450A0A","#F87171","#FEE2E2"),x("Highlight","#422006","#FACC15","#FEF9C3"))},fire:{label:"Fire",light:Le(x("Background","#FBFAF9","#D9D2CC","#1F1B19"),x("Pale","#F4F1ED","#C7BDB6","#282320"),x("Light","#E9E2DC","#A2948B","#282320"),x("Neutral","#D5CAC2","#8A6D59","#241B15"),x("Dark","#3D312A","#221913","#FFF2E4"),x("Soft","#FDECDD","#E7A672","#7A3B12"),x("Accent","#FBD8BA","#D2691E","#6A2D07","#FFF3E8"),x("Strong","#D2521C","#A6380D","#FFFFFF","#F0873C","#FFA867"),x("Note","#F7EBDD","#A9784C","#523A22"),x("Success","#E7F2D9","#5F8C2B","#2C4310"),x("Warning","#FFEACB","#E08600","#6D3C00"),x("Danger","#FFE1DB","#D93A1F","#6D1708"),x("Highlight","#FFF6CB","#D9A400","#5B4200")),dark:Le(x("Background","#171413","#3A3330","#E7E2DE"),x("Pale","#1F1B19","#4A413C","#EDE8E3"),x("Light","#2B2522","#695C54","#F5EFE9"),x("Neutral","#3E3430","#A08674","#FFF3E7"),x("Dark","#C9B29F","#E4D3C4","#191412"),x("Soft","#3A2415","#C4763A","#FFE7D2"),x("Accent","#5A2E12","#F0873C","#FFEDDD","#47240F"),x("Strong","#E2571B","#FFB27A","#FFFFFF","#B33C0E","#FF8A3D"),x("Note","#302319","#BE8C5A","#F6E4D0"),x("Success","#1F2E14","#8FBF52","#E7F4D5"),x("Warning","#4A2A05","#FFA726","#FFE9C4"),x("Danger","#4B1108","#FF6B52","#FFE0DA"),x("Highlight","#453206","#FFD54A","#FFF6D2"))},ice:{label:"Ice",light:Le(x("Background","#F8FCFF","#D8EAF4","#123040"),x("Pale","#EDF8FC","#B8DCEB","#123040"),x("Light","#D9F2FF","#88BED7","#123040"),x("Neutral","#B8DCEB","#4A8BAA","#123040"),x("Dark","#21536C","#123040","#F4FBFF"),x("Soft","#DDF5FF","#75C6E8","#0F4C67"),x("Accent","#BDEAFF","#2E91BF","#083B55","#E8F9FF"),x("Strong","#1976A3","#0E5E85","#FFFFFF","#43B3E8","#8DDBF7"),x("Note","#DCEFFF","#3182CE","#123A63"),x("Success","#DDF7EE","#1E9B68","#104B35"),x("Warning","#FFF0D8","#D97918","#6B3510"),x("Danger","#FFE4E7","#D9485F","#651C2A"),x("Highlight","#FFF8C9","#C69A13","#5E4900")),dark:Le(x("Background","#0C1D29","#26475A","#E8F7FF"),x("Pale","#112B3A","#376176","#E8F7FF"),x("Light","#173B4D","#4A7B92","#F0FAFF"),x("Neutral","#28576B","#79AFC3","#F4FBFF"),x("Dark","#A3D6E9","#D4F2FF","#0C1D29"),x("Soft","#10384E","#4AB5DF","#DDF7FF"),x("Accent","#15526D","#72CEF2","#ECFBFF","#123C52"),x("Strong","#2186B5","#94DCF5","#FFFFFF","#176A91","#64CEF2"),x("Note","#122E4B","#62A9F5","#DCEFFF"),x("Success","#103D32","#4DD69A","#DDF7EE"),x("Warning","#4B2C0D","#F3A34C","#FFF0D8"),x("Danger","#4B1923","#F07A8C","#FFE4E7"),x("Highlight","#4A3D0A","#E6C54B","#FFF8C9"))},midnight:{label:"Midnight",light:Le(x("Background","#F5F7FC","#CAD3E4","#101D38"),x("Pale","#E9EEF8","#B6C4DC","#172744"),x("Light","#D9E2F2","#91A5C5","#172744"),x("Neutral","#C1CEE1","#6F85A6","#14223C"),x("Dark","#243B63","#1B3155","#F5F8FF"),x("Soft","#DCE7FA","#93A9CE","#1A3158"),x("Accent","#C9DBFA","#5E7FB4","#152D54","#D6E3F8"),x("Strong","#345F9D","#2C548D","#FFFFFF","#416EAE","#6F91C2"),x("Note","#DBE7F8","#5277AE","#1D355D"),x("Success","#DDEFE8","#3E886A","#173F31"),x("Warning","#F8E9D1","#B9702D","#5D3513"),x("Danger","#F4E0E5","#AD5570","#591F30"),x("Highlight","#F8F0C9","#A88222","#554300")),dark:Le(x("Background","#081426","#1F3554","#E8F0FF"),x("Pale","#0D1C32","#2A4265","#E5EEFF"),x("Light","#132843","#3A557A","#EDF4FF"),x("Neutral","#1E385B","#59779E","#EEF5FF"),x("Dark","#91A9C9","#AFC2DB","#0A172A"),x("Soft","#112B4D","#527AA9","#E1EEFF"),x("Accent","#173B68","#6389BA","#ECF4FF","#1B416E"),x("Strong","#2C629F","#6D98CD","#FFFFFF","#356FAF","#6D98CD"),x("Note","#132A4A","#6D96C8","#DDEAFF"),x("Success","#123B31","#5FBA91","#DDF3E8"),x("Warning","#422C14","#D09150","#FBEAD1"),x("Danger","#431E2B","#D27691","#F8E1E8"),x("Highlight","#403710","#C5A543","#FAF2CA"))},paper:{label:"Paper",light:Le(x("Background","#FFFDF7","#E0D8C8","#332D24"),x("Pale","#F7F1E5","#D4C5AD","#40372C"),x("Light","#EEE3D0","#BBA98B","#40372C"),x("Neutral","#D8C8AF","#8C765A","#332D24"),x("Dark","#514536","#332D24","#FFFCF5"),x("Soft","#EEE8DC","#A99879","#44392B"),x("Accent","#E8DDC7","#947044","#3E2D1D","#F7F0E4"),x("Strong","#81592F","#62401F","#FFFFFF","#A77A44","#D3B37B"),x("Note","#E5EFF4","#517B98","#233E50"),x("Success","#E4F0DF","#5D8A54","#294527"),x("Warning","#F9E8CD","#B96B28","#64350D"),x("Danger","#F5E0DA","#AD5342","#5D251C"),x("Highlight","#F8F0BD","#A78216","#584600")),dark:Le(x("Background","#29251F","#554B3E","#F9F2E6"),x("Pale","#373027","#6F6250","#F9F2E6"),x("Light","#4A4033","#8B7B64","#FFF9EE"),x("Neutral","#675947","#A89880","#FFF9EE"),x("Dark","#CBBCA4","#E8DBC7","#30291F"),x("Soft","#463B2D","#B6A080","#FFF8E9"),x("Accent","#5C482F","#D1B98A","#FFF9EE","#483622"),x("Strong","#916C3C","#E0C28B","#FFFFFF","#705029","#CFAA69"),x("Note","#273A46","#7DB2D0","#E5EFF4"),x("Success","#31452B","#9BC58F","#E4F0DF"),x("Warning","#503016","#E3A060","#F9E8CD"),x("Danger","#51281F","#DA8A79","#F5E0DA"),x("Highlight","#4A3D12","#D6BC48","#F8F0BD"))}},tn={light:{edge:{stroke:"#52616B",strokeWidth:2,text:"#3E4A54"},node:{fill:"#EAF2FF",stroke:"#3574C7",strokeWidth:2,text:"#17202A"}},dark:{edge:{stroke:"#B8C7D5",strokeWidth:2,text:"#D9E4ED"},node:{fill:"#193A61",stroke:"#71AEF7",strokeWidth:2,text:"#F3F8FC"}}};var on=["note","info","warning","success"],nn={2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))","2fr 1fr":"minmax(0, 2fr) minmax(0, 1fr)","1fr 2fr":"minmax(0, 1fr) minmax(0, 2fr)"};function gt(t){if(t==="light"||t==="dark")return t;if(t==="auto")return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches?"dark":"light";throw new Error(\`Unsupported document theme: \${t}\`)}function ht(t,e="light"){let o=gt(e),n=tn[o];if(!n)throw new Error(\`Unsupported diagram theme: \${o}\`);return n}function ye(t,e,o){return(Object.prototype.hasOwnProperty.call(ue,t)?ue[t]:void 0)?.[gt(e)]?.[o]||null}function Ne(t,e){return{...t,...e||{}}}function St(t,e){return e&&t.styles?.[e]||null}function Ge(t,e,o="light",n="classic"){let i=ht(t,o).node,s=e.shape==="text"?{fill:"none",stroke:"none"}:null,a=St(t,e.class),c=a?.palette?ye(n,o,a.palette):null,l=e.palette?ye(n,o,e.palette):null;return Ne(Ne(Ne(Ne(Ne(i,s),c),a?.style),l),e.style)}function nt(t,e,o="light",n="classic"){let r=ht(t,o),i=e.palette?ye(n,o,e.palette):null;return Ne(Ne(r.node,i),e.style)}function vt(t,e,o="light",n="classic"){let r=ht(t,o),i=ue[n][gt(o)],s=St(t,e.class);return Ne(Ne({...r.edge,stroke:i.neutral.fill,text:i.background.text},s?.style),e.style)}function lo(t,e){let o=e==="start"?t.start:t.end;return typeof o=="string"&&Fe.includes(o)?o:mt[e]}function oe(t){let e=Number(t.canvas?.grid);return Number.isFinite(e)&&e>0?e:0}function R(t,e){return e?Math.round(t/e)*e:Math.round(t)}function kt(t,e,o){let n=R(t,o),r=o?Math.ceil(e/o)*o:e;return Math.max(r,n)}function rn(t){return{width:Number(t.size?.width)||z.width,height:Number(t.size?.height)||z.height}}var G=class{constructor(e){this.entriesById=new Map;this.entriesByNode=new Map;this.ranges=new Map;let o=[],n=(r,i,s,a)=>{for(let c of r){let l={x:s.x+(Number(c.position?.x)||0),y:s.y+(Number(c.position?.y)||0)},d={node:c,parent:i,siblings:r,position:l,bounds:{...l,...rn(c)},depth:a},u=o.length;o.push(d),this.entriesById.set(c.id,this.entriesById.get(c.id)||d),this.entriesByNode.set(c,d),n(c.children||[],c,l,a+1),this.ranges.set(c,{start:u,end:o.length})}};n(e.nodes,null,{x:0,y:0},0),this.entries=o}getById(e){return this.entriesById.get(e)||null}getByNode(e){return this.entriesByNode.get(e)||null}contains(e,o){let n=this.ranges.get(e),r=this.ranges.get(o);return!!(n&&r&&r.start>n.start&&r.start<n.end)}isRelated(e,o){return e===o||this.contains(e,o)||this.contains(o,e)}descendants(e){let o=this.ranges.get(e);return o?this.entries.slice(o.start+1,o.end):[]}};function me(t,e){return new G(t).getById(e)}function rt(t,e){return new G(t).getByNode(e)?.bounds||{x:0,y:0,...rn(e)}}function an(t,e){var p;let o=new G(t),n=o.getById(e);if(!n)return null;let{node:r,siblings:i,position:s}=n,{width:a,height:c}=n.bounds,l={x:s.x+a/2,y:s.y+c/2},u=o.entries.filter(h=>h.node!==r&&!o.contains(r,h.node)).filter(({bounds:h})=>l.x>=h.x&&l.x<=h.x+h.width&&l.y>=h.y&&l.y<=h.y+h.height).reduce((h,m)=>!h||m.depth>=h.depth?m:h,null),f=u?(p=u.node).children||(p.children=[]):t.nodes;return i===f||(i.splice(i.indexOf(r),1),r.position={x:s.x-(u?.position.x||0),y:s.y-(u?.position.y||0)},f.push(r)),r}function Ae(t,e){return t.includes(e)}function qr(t){return{x:Number(t.position?.x)||0,y:Number(t.position?.y)||0,width:Number(t.size?.width)||z.width,height:Number(t.size?.height)||z.height}}function it(t,e,o=40){return sn(t,e,o)}function uo(t,e=40){return sn(t,null,e,!0)}function sn(t,e,o=40,n=!1){let r=Number(t.canvas?.width)||1e3,i=Number(t.canvas?.height)||560,s=n||!!t.canvas?.auto,a=new G(t),l=[...new Set(a.entries.map(b=>b.node))];e&&!l.includes(e)&&l.push(e);let d=b=>a.getByNode(b)?.bounds||qr(b),u=()=>[...l.map(d),...l.filter(b=>b.arrow).map(b=>({x:b.arrow.x,y:b.arrow.y,width:0,height:0})),...(t.edges||[]).filter(b=>b.waypoint).map(b=>({x:b.waypoint.x,y:b.waypoint.y,width:0,height:0}))],f=u(),p=Math.min(0,...f.map(b=>b.x)),h=Math.min(0,...f.map(b=>b.y)),m=p<0?o-p:0,g=h<0?o-h:0;if(m||g){for(let b of a.entries.filter(v=>v.parent===null)){let v=b.node;v.position={...v.position,x:(Number(v.position?.x)||0)+m,y:(Number(v.position?.y)||0)+g}}for(let b of l)b.arrow&&(b.arrow={x:b.arrow.x+m,y:b.arrow.y+g});for(let b of t.edges||[])b.waypoint&&(b.waypoint={x:b.waypoint.x+m,y:b.waypoint.y+g});a=new G(t)}let y=u(),S=Math.max(2*o,...y.map(b=>b.x+b.width+o)),w=Math.max(2*o,...y.map(b=>b.y+b.height+o));return t.canvas={...t.canvas,width:s&&y.length?S:Math.max(r+m,S),height:s&&y.length?w:Math.max(i+g,w)},t}function cn(t,e){return t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}function zr(t,e="new-node"){let o=i=>i.flatMap(s=>[s.id,...o(s.children||[])]),n=new Set(o(t));if(!n.has(e))return e;let r=2;for(;n.has(\`\${e}-\${r}\`);)r+=1;return\`\${e}-\${r}\`}function Hr(t,e){let o=e.replace(/[^a-z0-9]/gi,"").toLowerCase()||"node",n=1,r="";do r=\`\${o}\${String(n).padStart(2,"0")}\`,n+=1;while(t.has(r));return t.add(r),r}function jr(t,e,o,n,r){let i=Number(t.canvas?.width)||1e3,s=Number(t.canvas?.height)||560,a=oe(t),c=a||20,l={x:R(r.x,a),y:R(r.y,a)};for(let u=c;u<=Math.max(i,s);u+=c)for(let f of[{x:l.x+u,y:l.y+u},{x:l.x+u,y:l.y-u},{x:l.x-u,y:l.y+u},{x:l.x-u,y:l.y-u}])if(!(f.x<0||f.y<0||f.x+o>i||f.y+n>s)&&!e.entries.some(({bounds:p})=>cn({...f,width:o,height:n},p)))return f;let d=Math.max(0,...e.entries.map(({bounds:u})=>u.x+u.width));return{x:R(d+c,a),y:0}}function Or(t){let e=new G(t),o=Number(t.canvas?.width)||1e3,n=Number(t.canvas?.height)||560,r=oe(t),i={x:R(Math.max(0,(o-z.width)/2),r),y:R(Math.max(0,(n-z.height)/2),r)},s=r||20;for(let a=0;a<=Math.max(o,n);a+=s)for(let c of[{x:i.x+a,y:i.y},{x:i.x-a,y:i.y},{x:i.x,y:i.y+a},{x:i.x,y:i.y-a}])if(!(c.x<0||c.y<0||c.x+z.width>o||c.y+z.height>n)&&!e.entries.some(({bounds:l})=>cn({...c,width:z.width,height:z.height},l)))return c;return i}function dn(t){let e={id:zr(t.nodes),label:z.label,shape:z.shape,position:Or(t),size:{width:z.width,height:z.height}};return t.nodes.push(e),e}function $t(t,e){let o=new G(t),n=o.getById(e);if(!n)return null;let r=new Set(o.entries.map(({node:d})=>d.id)),i=d=>({id:Hr(r,d.shape),label:d.label,shape:d.shape,...d.position?{position:{...d.position}}:{},...d.size?{size:{...d.size}}:{},...d.style?{style:{...d.style}}:{},...d.palette?{palette:d.palette}:{},...d.strokeType?{strokeType:d.strokeType}:{},...d.subtitle!==void 0?{subtitle:d.subtitle}:{},...d.textVAlign!==void 0?{textVAlign:d.textVAlign}:{},...d.textHAlign!==void 0?{textHAlign:d.textHAlign}:{},...d.children?{children:d.children.map(i)}:{}}),s=i(n.node),a=n.bounds,c=jr(t,o,Number(s.size?.width)||z.width,Number(s.size?.height)||z.height,a),l=n.parent?o.getByNode(n.parent)?.position||{x:0,y:0}:{x:0,y:0};return s.position={x:c.x-l.x,y:c.y-l.y},n.siblings.push(s),it(t,s),s}function ln(t,e,o,n,r){if(!Ae(ne,o)||!Ae(ne,r))throw new Error("Connector anchors must be supported edge anchors.");let i={source:e,target:n,sourceAnchor:o,targetAnchor:r,route:"orthogonal",end:"arrow"};return t.edges.push(i),i}function un(t,e,o,n){return Ae(ne,n)&&(e==="source"?(t.source=o,t.sourceAnchor=n):(t.target=o,t.targetAnchor=n)),t}function Ft(t,e){return e<0||e>=t.edges.length?null:t.edges.splice(e,1)[0]}function Nt(t,e){let o=me(t,e);if(!o)return{node:null,deletedEdges:[]};let n=new Set([o.node,...o.node.children||[]].flatMap(function i(s){return[s,...(s.children||[]).flatMap(i)]}).map(i=>i.id)),r=t.edges.filter(i=>n.has(i.source)||n.has(i.target));return o.siblings.splice(o.siblings.indexOf(o.node),1),t.edges=t.edges.filter(i=>!n.has(i.source)&&!n.has(i.target)),t.canvas?.auto&&uo(t),{node:e,deletedEdges:r}}function At(t,e){return t.label=String(e).trim(),t}function mn(t,e){return Ae(tt,e)&&(t.shape=e),t}function gn(t,e){return t.subtitle=String(e??"").trim(),t}function hn(t,e){return Ae(Ie,e)&&(t.strokeType=e),t}function mo(t,e,o){return e==="textVAlign"&&(o==="top"||o==="center")&&(t.textVAlign=o),e==="textHAlign"&&(o==="left"||o==="center"||o==="right")&&(t.textHAlign=o),t}function pt(t,e,o){return t.style={...t.style,[e]:o},t}function go(t,e,o="classic"){if(!Ae(ke,e)||!ye(o,"light",e))return t;let{fill:r,stroke:i,text:s,...a}=t.style||{};return Object.keys(a).length?t.style=a:delete t.style,t.palette=e,t}function pn(t){return t==="document"?co:so}function ho(t){return{position:{x:Number(t.position?.x)||0,y:Number(t.position?.y)||0},size:{width:Number(t.size?.width)||z.width,height:Number(t.size?.height)||z.height},childPositions:new Map((t.children||[]).map(e=>[e,{x:Number(e.position?.x)||0,y:Number(e.position?.y)||0}]))}}function fn(t,e,o,n,r,i=ho(e)){let s=oe(t),a=pn(e.shape),c=o.endsWith("left"),l=o.startsWith("top"),d=kt(i.size.width+(c?-n:n),a.width,s),u=kt(i.size.height+(l?-r:r),a.height,s);if(e.shape==="circle"){let m=Math.max(d,u);d=m,u=m}let f={...e.position,x:c?i.position.x+i.size.width-d:i.position.x,y:l?i.position.y+i.size.height-u:i.position.y},p=i.position.x-f.x,h=i.position.y-f.y;for(let m of e.children||[]){let g=i.childPositions.get(m)||m.position||{x:0,y:0};m.position={...m.position,x:g.x+p,y:g.y+h}}return e.position=f,e.size={...e.size,width:d,height:u},e}function po(t,e,o,n){let r=oe(t),i=pn(e.shape),s=o==="width"?i.width:i.height,a=kt(Number(n)||s,s,r);return e.size=e.shape==="circle"?{...e.size,width:a,height:a}:{...e.size,[o]:a},e}function Mt(t,e){return t.label=String(e).trim(),t}function bn(t,e){return Ae(ot,e)&&(t.route=e),t}function yn(t,e){return Ae(Ie,e)&&(t.strokeType=e),t}function xn(t){return delete t.waypoint,t}function fo(t,e){return t.arrow={x:e.x,y:e.y},t}function Gr(t){return delete t.arrow,t}function wn(t,e){if(e.arrow)return Gr(e);let o=rt(t,e),n=oe(t),r=fo(e,{x:R(o.x+o.width/2,n),y:R(o.y+o.height+Math.max(60,o.height*.75),n)});return it(t,e),r}function bo(t,e,o){return Ae(ne,o)&&(e==="source"?t.sourceAnchor=o:t.targetAnchor=o),t}function yo(t,e,o){return t.style={...t.style,[e]:o},t}function xo(t,e){let o=Math.max(1,Math.round(Number(e))||1);return t.style={...t.style,strokeWidth:o},t}function En(t,e){return t.start=Ae(Fe,e)?e:mt.start,t}function Sn(t,e){return t.end=Ae(Fe,e)?e:mt.end,t}function Dt(t){return Math.min(Math.max(25,Number(t)||100),800)}function Tt(t,e=0){return e===1?t*16:e===2?t*400:t}function vn(t,e,o=0){return Dt(Dt(t)*Math.exp(-Tt(e,o)*.0025))}var kn=new WeakSet;function Dn(t){return kn.has(t)}var wo={stageGap:120,siblingGap:60};function ze(t){return{width:Number(t.size?.width)||z.width,height:Number(t.size?.height)||z.height}}function Eo(t){return Number.isFinite(t.position?.x)&&Number.isFinite(t.position?.y)}function So(t){if(t==null)return null;if(typeof t=="string")return{direction:t,...wo};let e=t;return{direction:e.direction,stageGap:e.stageGap===void 0?wo.stageGap:Number(e.stageGap),siblingGap:e.siblingGap===void 0?wo.siblingGap:Number(e.siblingGap)}}function Vr(t){return t==="right"||t==="left"}function vo(t){return{right:{source:"right",target:"left"},left:{source:"left",target:"right"},down:{source:"bottom",target:"top"},up:{source:"top",target:"bottom"}}[t]}function Ur(t,e,o){let n=new Set(t),r=vo(o),i=e.filter(m=>n.has(m.source)&&n.has(m.target)&&m.source!==m.target),s=i.filter(m=>!(m.sourceAnchor===r.target&&m.targetAnchor===r.source)),a=s.length?s:i,c=new Map;for(let m of a)c.set(m.source,[...c.get(m.source)||[],m.target]);let l=[],d=new Map,u=m=>{d.set(m,"visiting");for(let g of c.get(m)||[])d.get(g)!=="visiting"&&(l.push({source:m,target:g}),d.has(g)||u(g));d.set(m,"done")};for(let m of t)d.has(m)||u(m);let f=new Map;for(let m of l)f.set(m.target,[...f.get(m.target)||[],m.source]);let p=new Map,h=(m,g)=>{let y=p.get(m);if(y!==void 0)return y;if(g.has(m))return 0;g.add(m);let S=Math.max(0,...(f.get(m)||[]).map(w=>h(w,g)+1));return p.set(m,S),S};for(let m of t)h(m,new Set);return p}function Wr(t,e,o=4){let n=s=>{let a=new Map;for(let c of e){let[l,d]=s?[c.target,c.source]:[c.source,c.target];a.set(l,[...a.get(l)||[],d])}return a},r=n(!0),i=n(!1);for(let s=0;s<o;s+=1){let a=s%2===0,c=a?t.map((l,d)=>d):t.map((l,d)=>t.length-1-d);for(let l of c){let d=a?l-1:l+1,u=t[d];if(!u)continue;let f=new Map(u.map((g,y)=>[g,y])),p=a?r:i,h=new Map;for(let g of t[l]){let y=(p.get(g)||[]).map(S=>f.get(S)).filter(S=>S!==void 0).sort((S,w)=>S-w);h.set(g,y.length?y[y.length-1>>1]:Number.NaN)}let m=new Map(t[l].map((g,y)=>[g,y]));t[l]=[...t[l]].sort((g,y)=>{let S=h.get(g),w=h.get(y);return Number.isNaN(S)||Number.isNaN(w)||S===w?m.get(g)-m.get(y):S-w})}}}function Yr(t,e,o,n,r,i,s,a=4){let c=m=>{let g=ze(n.get(m));return r?g.height:g.width},l=t.map(m=>m.reduce((g,y,S)=>g+c(y)+(S?i:0),0)),d=Math.max(0,...l),u=new Map;t.forEach((m,g)=>{let y=(d-l[g])/2;for(let S of m)u.set(S,y),y+=c(S)+i});let f=new Map;for(let m of o){let g=e.get(m.source),y=e.get(m.target);g===void 0||y===void 0||Math.abs(g-y)!==1||(f.set(m.source,[...f.get(m.source)||[],m.target]),f.set(m.target,[...f.get(m.target)||[],m.source]))}let p=(m,g)=>{let y=t[m],S=y.map(v=>{let E=(f.get(v)||[]).filter($=>e.get($)===g).map($=>u.get($)+c($)/2).sort(($,T)=>$-T);return(E.length?(E[E.length-1>>1]+E[E.length>>1])/2:u.get(v)+c(v)/2)-c(v)/2}),w=[...S];for(let v=1;v<w.length;v+=1)w[v]=Math.max(w[v],w[v-1]+c(y[v-1])+i);for(let v=w.length-2;v>=0;v-=1)w[v]=Math.min(w[v],w[v+1]-c(y[v])-i);let b=w.length?S.reduce((v,E,F)=>v+E-w[F],0)/w.length:0;y.forEach((v,E)=>u.set(v,w[E]+b))};for(let m=0;m<a;m+=1)if(m%2===0)for(let y=1;y<t.length;y+=1)p(y,y-1);else for(let y=t.length-2;y>=0;y-=1)p(y,y+1);let h=u.size?Math.min(...u.values()):0;if(h!==0)for(let[m,g]of u)u.set(m,g-h);for(let m of t){let g=Number.NEGATIVE_INFINITY;for(let y of m){let S=R(u.get(y),s),w=g+i;S<w&&(S=s?Math.ceil(w/s)*s:Math.ceil(w)),u.set(y,S),g=S+c(y)}}return u}function _r(t,e,o,n,r){let i=t.map(S=>S.id),s=Ur(i,e,o.direction),a=Math.max(0,...s.values())+1,c=Array.from({length:a},()=>[]);for(let S of i)c[s.get(S)||0].push(S);let l=e.filter(S=>s.has(S.source)&&s.has(S.target));Wr(c,l);let d=new Map(t.map(S=>[S.id,S])),u=Vr(o.direction),f=o.direction==="left"||o.direction==="up",p=c.map(S=>Math.max(0,...S.map(w=>{let b=ze(d.get(w));return u?b.width:b.height}))),h=Yr(c,s,l,d,u,o.siblingGap,r),m=0,g=p.map(S=>{let w=m;return m+=S+o.stageGap,w}),y=Math.max(0,m-o.stageGap);c.forEach((S,w)=>{for(let b of S){let v=d.get(b),E=ze(v),F=f?y-g[w]-(u?E.width:E.height):g[w],$=h.get(b);v.position={x:R(n.x+(u?F:$),r),y:R(n.y+(u?$:F),r)}}})}function $n(t,e,o=0){return t.x-o<e.x+e.width&&t.x+t.width+o>e.x&&t.y-o<e.y+e.height&&t.y+t.height+o>e.y}function Xr(t,e,o,n,r){let i=new Map(e.filter(Eo).map(m=>[m.id,m])),s=ze(t),a=vo(n.direction),c=[];for(let m of o){let g=m.source===t.id,y=m.target===t.id;if(g===y)continue;let S=i.get(g?m.target:m.source);if(!S)continue;let w=(g?m.sourceAnchor:m.targetAnchor)||(g?a.source:a.target),b={...S.position,...ze(S)};w==="left"?c.push({position:{x:b.x+b.width+n.stageGap,y:b.y+(b.height-s.height)/2},axis:"x",sign:1}):w==="right"?c.push({position:{x:b.x-n.stageGap-s.width,y:b.y+(b.height-s.height)/2},axis:"x",sign:-1}):w==="top"?c.push({position:{x:b.x+(b.width-s.width)/2,y:b.y+b.height+n.stageGap},axis:"y",sign:1}):w==="bottom"&&c.push({position:{x:b.x+(b.width-s.width)/2,y:b.y-n.stageGap-s.height},axis:"y",sign:-1})}if(!c.length)return null;let l=c[0].axis,d=c.filter(m=>m.axis===l),f=d[0].sign>0?Math.max(...d.map(m=>m.position[l])):Math.min(...d.map(m=>m.position[l])),p=l==="x"?"y":"x",h=c.reduce((m,g)=>m+g.position[p],0)/c.length;return{position:{x:R(l==="x"?f:h,r),y:R(l==="y"?f:h,r)},acrossAxis:p}}function Kr(t,e,o,n,r,i){let s=r||20,a=Math.min(i,20);for(let c=0;c<=200;c+=1)for(let l of c?[c*s,-c*s]:[0]){let d={...t,[n]:t[n]+l},u={...d,...e};if(!o.some(f=>$n(u,f,a)))return{x:R(d.x,r),y:R(d.y,r)}}return t}function Zr(t,e,o,n,r){let i=n||20,s=Math.min(r,20),a={x:R(o.x,n),y:R(o.y,n)},c=Math.max(o.y,...e.map(l=>l.y+l.height));for(let l=0;l<=2e3;l+=i)for(let d of l?[{x:a.x+l,y:a.y},{x:a.x,y:a.y+l}]:[a])if(!e.some(u=>$n({...d,...t},u,s)))return d;return{x:a.x,y:R(c+i,n)}}function Jr(t,e,o,n,r){let i=t.filter(s=>!Eo(s));if(!i.length)return!1;if(i.length===t.length)return _r(t,e,o,n,r),!0;for(let s of i){let a=ze(s),c=t.filter(d=>d!==s&&Eo(d)).map(d=>({...d.position,...ze(d)})),l=Xr(s,t,e,o,r);s.position=l?Kr(l.position,a,c,l.acrossAxis,r,o.siblingGap):Zr(a,c,n,r,o.siblingGap)}return!0}function Qr(t,e){let o=e.x+e.width/2-(t.x+t.width/2),n=e.y+e.height/2-(t.y+t.height/2),r=Math.abs(o)-(t.width+e.width)/2,i=Math.abs(n)-(t.height+e.height)/2;return r<=0&&i<=0?null:r>=i?o>=0?{source:"right",target:"left"}:{source:"left",target:"right"}:n>=0?{source:"bottom",target:"top"}:{source:"top",target:"bottom"}}function ei(t,e){let o=t.edges||[];if(!o.some(i=>!i.sourceAnchor||!i.targetAnchor))return!1;let n=vo(e.direction),r=new G(t);for(let i of o){if(i.sourceAnchor&&i.targetAnchor)continue;let s=r.getById(i.source)?.bounds,a=r.getById(i.target)?.bounds,c=s&&a&&i.source!==i.target?Qr(s,a):null;i.sourceAnchor=i.sourceAnchor||c?.source||n.source,i.targetAnchor=i.targetAnchor||c?.target||n.target}return!0}function Ct(t){let e=So(t.layout);if(!e)return t;let o=oe(t),n=40,r=!1,i=(s,a)=>{for(let c of s)if(c.children?.length&&(i(c.children,{x:n,y:n}),!c.size)){let l=c.children.reduce((d,u)=>{let f=ze(u);return{width:Math.max(d.width,(Number(u.position?.x)||0)+f.width),height:Math.max(d.height,(Number(u.position?.y)||0)+f.height)}},{width:0,height:0});c.size={width:R(l.width+n,o),height:R(l.height+n,o)}}r=Jr(s,t.edges||[],e,a,o)||r};return i(t.nodes||[],{x:n,y:n}),r=ei(t,e)||r,r&&kn.add(t),t}var at={horizontalAspectRatio:4,verticalAspectRatio:5,minimumNodeCount:8,minimumDominantPath:8,minimumPathCoverage:.75,maximumBranchingRatio:.2};function Fn(t){return{width:Number(t.size?.width)||z.width,height:Number(t.size?.height)||z.height}}function ti(t){if(t.nodes.some(h=>h.children?.length))return null;let e=t.nodes.map(h=>h.id),o=new Map(e.map((h,m)=>[h,m])),n=new Set(e),r=new Map(e.map(h=>[h,[]])),i=new Map(e.map(h=>[h,[]]));for(let h of t.edges){if(!n.has(h.source)||!n.has(h.target)||h.source===h.target)return null;i.get(h.source).push(h.target),r.get(h.target).push(h.source)}let s=new Set,a=e.length?[e[0]]:[];for(;a.length;){let h=a.pop();s.has(h)||(s.add(h),a.push(...r.get(h),...i.get(h)))}if(s.size!==e.length)return null;let c=new Map(e.map(h=>[h,r.get(h).length])),l=e.filter(h=>c.get(h)===0),d=[];for(;l.length;){l.sort((m,g)=>o.get(m)-o.get(g));let h=l.shift();d.push(h);for(let m of i.get(h)){let g=c.get(m)-1;c.set(m,g),g===0&&l.push(m)}}if(d.length!==e.length)return null;let u=new Map;for(let h of d){let m=r.get(h).map(g=>u.get(g)||[g]);m.sort((g,y)=>y.length-g.length||o.get(g[0])-o.get(y[0])),u.set(h,[...m[0]||[],h])}let f=[...u.values()].sort((h,m)=>m.length-h.length||o.get(h[0])-o.get(m[0]))[0]||[],p=e.filter(h=>r.get(h).length>1||i.get(h).length>1).length;return{order:d,dominantPath:f,incoming:r,outgoing:i,branchingNodes:p}}function Nn(t){let e=new G(t).entries;if(!e.length)return null;let o=Math.min(...e.map(({bounds:s})=>s.x)),n=Math.min(...e.map(({bounds:s})=>s.y)),r=Math.max(...e.map(({bounds:s})=>s.x+s.width)),i=Math.max(...e.map(({bounds:s})=>s.y+s.height));return{width:r-o,height:i-n}}function An(t){let e=t.nodes.length;if(e<at.minimumNodeCount||t.nodes.some(d=>!d.position))return null;let o=ti(t),n=Nn(t);if(!o||!n||!n.width||!n.height)return null;let r=n.width>=n.height?"horizontal":"vertical",i=r==="horizontal"?n.width/n.height:n.height/n.width,s=r==="horizontal"?at.horizontalAspectRatio:at.verticalAspectRatio,a=o.dominantPath.length,c=a/e,l=o.branchingNodes/e;return i<s||a<at.minimumDominantPath||c<at.minimumPathCoverage||l>at.maximumBranchingRatio?null:{graph:o,analysis:{direction:r,width:Math.round(n.width),height:Math.round(n.height),aspectRatio:i,dominantPathLength:a,nodeCount:e,pathCoverage:c,branchingNodes:o.branchingNodes,reason:\`the dominant path contains \${a} of \${e} nodes (\${Math.round(c*100)}%) with \${o.branchingNodes} branching node\${o.branchingNodes===1?"":"s"}\`}}}function Mn(t){return An(t)?.analysis||null}function oi(t){let e=new Map(t.dominantPath.map((r,i)=>[r,i])),o=new Map;for(let r of t.order){let i=e.get(r),s=Math.max(-1,...t.incoming.get(r).map(a=>o.get(a)??-1));o.set(r,i??s)}let n=new Map(t.order.map((r,i)=>[r,i]));return[...t.order].sort((r,i)=>o.get(r)-o.get(i)||+!e.has(r)-+!e.has(i)||n.get(r)-n.get(i))}function ni(t,e){let o=e.x-t.x,n=e.y-t.y;return Math.abs(o)>=Math.abs(n)?o>=0?{source:"right",target:"left"}:{source:"left",target:"right"}:n>=0?{source:"bottom",target:"top"}:{source:"top",target:"bottom"}}function Lt(t){let e=An(t);if(!e)return null;let{analysis:o,graph:n}=e,r=oe(t),i=typeof t.layout=="object"?t.layout:void 0,s=Number(i?.stageGap)||120,a=Number(i?.siblingGap)||60,c=new Map(t.nodes.map(b=>[b.id,b])),l=Math.max(...t.nodes.map(b=>Fn(b).width)),d=Math.max(...t.nodes.map(b=>Fn(b).height)),u=o.direction==="horizontal",f=u?l+s:d+s,p=u?d+a:l+a,h=oi(n),m=Math.max(3,Math.min(Math.ceil(h.length/2),Math.ceil(Math.sqrt(h.length*p/f)))),g=R(40,r);h.forEach((b,v)=>{let E=Math.floor(v/m),F=v%m,$=c.get(b);$.position=u?{x:R(g+F*f,r),y:R(g+E*p,r)}:{x:R(g+E*p,r),y:R(g+F*f,r)}});let y=g+m*f-s+Math.max(s/2,40),S=new Map(h.map((b,v)=>[b,v]));for(let b of t.edges){let v=c.get(b.source),E=c.get(b.target);if(!v?.position||!E?.position)continue;let F=S.get(v.id),$=S.get(E.id),T=Math.floor(F/m),B=Math.floor($/m);if(delete b.waypoint,b.route="orthogonal",T!==B)u?(b.sourceAnchor="right",b.targetAnchor="top",b.waypoint={x:R(y,r),y:R(E.position.y-a/2,r)}):(b.sourceAnchor="bottom",b.targetAnchor="left",b.waypoint={x:R(E.position.x-a/2,r),y:R(y,r)});else{let M=ni(v.position,E.position);b.sourceAnchor=M.source,b.targetAnchor=M.target}}t.layout=u?"right":"down";let w=Nn(t);return t.canvas.auto||(t.canvas.width=Math.max(Number(t.canvas.width)||0,Math.ceil(w.width+g*2)),t.canvas.height=Math.max(Number(t.canvas.height)||0,Math.ceil(w.height+g*2))),{analysis:o,before:{width:o.width,height:o.height,aspectRatio:o.aspectRatio},after:{width:Math.round(w.width),height:Math.round(w.height),aspectRatio:Math.max(w.width/w.height,w.height/w.width)}}}var Tn=new WeakSet;function Cn(t){return Tn.has(t)}function Ln(t,e){for(let o of t)e(o),Ln(o.children||[],e)}function Pt(t,e){if(!t.layout)throw new Error("Relayout requires a layout direction on the diagram.");Ln(t.nodes,o=>{(e!=="unpinned"||!o.pinned)&&delete o.position});for(let o of t.edges)delete o.sourceAnchor,delete o.targetAnchor,delete o.route,delete o.waypoint;if(Ct(t),e==="autowrap"){let o=t.layout;Lt(t)&&typeof o=="object"&&(t.layout={...o,direction:typeof t.layout=="string"?t.layout:t.layout.direction})}return delete t.relayout,Tn.add(t),t}var ri=["nodes","edges","participants","messages","activations","notes","groups"],Rn=["version","id","caption","description","theme"],ii=[...Rn,"type","layout","relayout","styles","canvas","nodes","edges"],ai=[...Rn,"type","canvas","participants","messages","activations","notes","groups"],si=["id","label","shape","class","position","pinned","size","style","strokeType","palette","subtitle","textVAlign","textHAlign","arrow","children"],ci=["source","target","class","sourceAnchor","targetAnchor","route","strokeType","label","style","start","end","waypoint"],di=["palette","style"],li=["direction","stageGap","siblingGap"],Do=["fill","stroke","strokeWidth","text"],ui=["stroke","strokeWidth","text"],mi=["id","label","kind","palette","style","size"],gi=["from","to","label","style"],hi=["participant","from","to"],pi=["at","after","label","palette","style","size"],fi=["label","from","to"],bi=["width","height","participantSpacing","participantSize"];function D(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function qe(t){let e=t.trim();if(e.startsWith('"')&&e.endsWith('"'))try{return JSON.parse(e)}catch{throw new Error(\`Invalid quoted scalar: \${e}\`)}if(e.startsWith("'")&&e.endsWith("'"))return e.slice(1,-1);if(/^-?\\d+(\\.\\d+)?$/.test(e))return Number(e);if(e==="true"||e==="false")return e==="true";if(e.startsWith("{")&&e.endsWith("}")){let o=e.slice(1,-1).trim();if(!o)return{};let n=o.split(","),r={};for(let i of n){let s=i.indexOf(":");if(s===-1)throw new Error(\`Invalid inline mapping: \${e}\`);let a=i.slice(0,s).trim();r[a]=qe(i.slice(s+1))}return r}return e}var yi=/^(\\s*)((?:- )?)([A-Za-z_][\\w-]*):\\s*\\|([+-])?\\s*$/;function xi(t){let e=[],o=0;for(;o<t.length;){let n=t[o],r=n.match(yi);if(!r){e.push(n),o+=1;continue}let[,i,s,a,c]=r,l=o+1,d=null;for(;l<t.length;){let m=t[l];if(m.trim()===""){l+=1;continue}d=m.length-m.trimStart().length;break}if(d===null||d<=i.length){e.push(\`\${i}\${s}\${a}: ""\`),o+=1;continue}let u=[],f=o+1,p=0;for(;f<t.length;){let m=t[f];if(m.trim()===""){u.push(""),p+=1,f+=1;continue}if(m.length-m.trimStart().length<d)break;u.push(m.slice(d)),p=0,f+=1}p>0&&c!=="+"&&(u.length-=p-1);let h=u.join(\`
\`);e.push(\`\${i}\${s}\${a}: \${JSON.stringify(h)}\`),o=f}return e}function xe(t,e="classic"){let n=xi(t.replace(/\\r\\n/g,\`
\`).split(\`
\`)).filter(p=>p.trim()&&!p.trimStart().startsWith("#"));for(let p of n){if(p.trimStart()!==p||!p.trimEnd().endsWith(":"))continue;let h=p.trim().slice(0,-1);if(h!=="canvas"&&h!=="styles"&&h!=="layout"&&!ri.includes(h))throw new Error(\`Unsupported diagram section: \${h}\`)}let r=0,i=p=>p.length-p.trimStart().length,s=p=>p.trim().match(/^([^:]+):\\s*(.*)$/),a=p=>p.trim().match(/^- ([^:]+):\\s*(.*)$/),c=p=>r>=n.length||i(n[r])<=p?{}:n[r].trimStart().startsWith("- ")?d(i(n[r])):l(i(n[r])),l=p=>{let h={};for(;r<n.length&&i(n[r])===p;){let m=n[r],g=s(m);if(!g)throw new Error(\`Cannot parse diagram line: \${m}\`);r+=1,h[g[1]]=g[2]?qe(g[2]):c(p)}return h},d=p=>{let h=[];for(;r<n.length&&i(n[r])===p;){let m=n[r],g=a(m);if(!g)throw new Error(\`Cannot parse diagram line: \${m}\`);r+=1;let y={[g[1]]:g[2]?qe(g[2]):c(p)};for(;r<n.length&&i(n[r])>p;){let S=i(n[r]),w=s(n[r]);if(!w)throw new Error(\`Cannot parse diagram line: \${n[r]}\`);r+=1,y[w[1]]=w[2]?qe(w[2]):c(S)}h.push(y)}return h},u=l(0);if(!u.type)throw new Error(\`Diagram type is required and must be one of: \${io.join(", ")}.\`);if(typeof u.type!="string"||!io.includes(u.type))throw new Error(\`Unsupported diagram type: \${String(u.type)}\`);let f=u.type==="flowchart"?ii:ai;return ge(u,f,\`\${u.type} diagram\`),wi(u),u.type==="flowchart"?Ei(u,e):Si(u,e)}function wi(t){if(t.version!==void 0&&(!Number.isInteger(t.version)||Number(t.version)<1))throw new Error("Diagram version must be a positive integer.");for(let e of["id","caption","description"])if(t[e]!==void 0&&typeof t[e]!="string")throw new Error(\`Diagram \${e} must be a string.\`);if(t.theme!==void 0&&(typeof t.theme!="string"||!wt.includes(t.theme)))throw new Error(\`Unsupported diagram theme: \${String(t.theme)}\`)}function Ei(t,e="classic"){if(t.canvas==="auto"&&(t.canvas={auto:!0}),t.canvas=t.canvas||{},typeof t.canvas!="object"||Array.isArray(t.canvas))throw new Error('Flowchart canvas must be a mapping or the value "auto".');if(t.canvas.auto!==void 0&&typeof t.canvas.auto!="boolean")throw new Error("Flowchart canvas.auto must be true or false.");return Array.isArray(t.nodes)||(t.nodes=[]),Array.isArray(t.edges)||(t.edges=[]),Di(t,e),t.relayout?Pt(t,t.relayout):Ct(t),t.canvas.auto&&uo(t),t}function Si(t,e="classic"){return $i(t,e),t}function ge(t,e,o){for(let n of Object.keys(t||{}))if(!e.includes(n))throw new Error(\`Unsupported \${o} field: \${n}\`)}function Rt(t,e,o){if(t){for(let n of Object.keys(t))if(!e.includes(n))throw new Error(\`Unsupported \${o} style field: \${n}\`)}}function ko(t,e){let o=e.charAt(0).toUpperCase()+e.slice(1);if(typeof t!="object"||t===null||Array.isArray(t))throw new Error(\`\${o} must be a mapping.\`);let n=t;if(!Number.isFinite(n.x)||!Number.isFinite(n.y))throw new Error(\`\${o} requires finite x and y coordinates.\`);ge(t,["x","y"],e)}function vi(t){if(t.styles===void 0)return new Set;if(typeof t.styles!="object"||Array.isArray(t.styles))throw new Error("Diagram styles must be a mapping of names to style definitions.");for(let[e,o]of Object.entries(t.styles)){if(typeof o!="object"||o===null||Array.isArray(o))throw new Error(\`Style "\${e}" must be a mapping.\`);if(ge(o,di,\`style "\${e}"\`),o.palette!==void 0&&(typeof o.palette!="string"||!ke.includes(o.palette)))throw new Error(\`Unsupported palette in style "\${e}": \${String(o.palette)}\`);if(o.style?.width!==void 0)throw new Error(\`Style "\${e}" style.width is not supported; use style.strokeWidth.\`);if(Rt(o.style,Do,\`style "\${e}"\`),o.palette===void 0&&!Object.keys(o.style||{}).length)throw new Error(\`Style "\${e}" declares no palette or style values.\`)}return new Set(Object.keys(t.styles))}function ki(t){if(t.layout===void 0)return;if(typeof t.layout=="object"&&!Array.isArray(t.layout)){ge(t.layout,li,"layout");for(let o of["stageGap","siblingGap"]){let n=t.layout[o];if(n!==void 0&&(typeof n!="number"||!Number.isFinite(n)||n<0))throw new Error(\`Layout \${o} must be a number of zero or more.\`)}}else if(typeof t.layout!="string")throw new Error("Layout must be a direction or a mapping.");let e=So(t.layout);if(!e||!ao.includes(e.direction))throw new Error(\`Unsupported layout direction: \${String(e?.direction)}\`)}function Di(t,e="classic"){if(ki(t),t.relayout!==void 0&&!["all","unpinned","autowrap"].includes(t.relayout))throw new Error(\`Unsupported relayout mode: \${String(t.relayout)}\`);if(t.relayout!==void 0&&t.layout===void 0)throw new Error("Relayout requires a layout direction on the diagram.");let o=t.layout!==void 0,n=vi(t),r=(a,c)=>{if(a!==void 0&&(typeof a!="string"||!n.has(a)))throw new Error(\`Unknown style class on \${c}: \${String(a)}\`)},i=new Set,s=a=>{if("type"in a)throw new Error(\`Node "\${a.id||"unknown"}" uses removed field "type".\`);if(ge(a,si,\`node "\${a.id||"unknown"}"\`),!a.id||typeof a.label!="string")throw new Error("Every node requires an id and a string label.");if(!a.shape)throw new Error(\`Node "\${a.id}" requires a shape.\`);if(!tt.includes(a.shape))throw new Error(\`Unsupported node shape: \${a.shape}\`);if(a.position===void 0){if(!o)throw new Error(\`Node "\${a.id}" requires a position, or a "layout" on the diagram to place it.\`)}else ko(a.position,\`node "\${a.id}" position\`);if(a.pinned!==void 0&&typeof a.pinned!="boolean")throw new Error(\`Node "\${a.id}" pinned must be true or false.\`);if(a.pinned&&a.position===void 0)throw new Error(\`Pinned node "\${a.id}" requires a position.\`);if(a.textVAlign!==void 0&&!Qo.includes(a.textVAlign))throw new Error(\`Unsupported node textVAlign: \${a.textVAlign}\`);if(a.textHAlign!==void 0&&!en.includes(a.textHAlign))throw new Error(\`Unsupported node textHAlign: \${a.textHAlign}\`);if(a.palette!==void 0&&(typeof a.palette!="string"||!ke.includes(a.palette)))throw new Error(\`Unsupported node palette: \${String(a.palette||"unknown")}\`);if(a.strokeType!==void 0&&!Ie.includes(a.strokeType))throw new Error(\`Unsupported node strokeType: \${a.strokeType}\`);if(a.style?.width!==void 0)throw new Error("Node style.width is not supported; use style.strokeWidth.");if(r(a.class,\`node "\${a.id}"\`),Rt(a.style,Do,\`node "\${a.id}"\`),a.arrow!==void 0&&ko(a.arrow,\`node "\${a.id}" arrow\`),i.has(a.id))throw new Error(\`Duplicate flowchart node id: \${a.id}\`);if(i.add(a.id),a.children!==void 0&&!Array.isArray(a.children))throw new Error(\`Children for node "\${a.id}" must be a list.\`);for(let c of a.children||[])s(c)};for(let a of t.nodes)s(a);for(let a of t.edges){if(ge(a,ci,\`edge "\${a.source||"unknown"}" -> "\${a.target||"unknown"}"\`),!a.sourceAnchor&&!o)throw new Error(\`Edge "\${a.source||"unknown"}" -> "\${a.target||"unknown"}" requires a sourceAnchor.\`);if(!a.targetAnchor&&!o)throw new Error(\`Edge "\${a.source||"unknown"}" -> "\${a.target||"unknown"}" requires a targetAnchor.\`);if(a.sourceAnchor&&!ne.includes(a.sourceAnchor))throw new Error(\`Unsupported edge sourceAnchor: \${a.sourceAnchor}\`);if(a.targetAnchor&&!ne.includes(a.targetAnchor))throw new Error(\`Unsupported edge targetAnchor: \${a.targetAnchor}\`);if(a.route!==void 0&&!ot.includes(a.route))throw new Error(\`Unsupported edge route: \${a.route}\`);if(a.strokeType!==void 0&&!Ie.includes(a.strokeType))throw new Error(\`Unsupported edge strokeType: \${a.strokeType}\`);if(a.waypoint!==void 0&&ko(a.waypoint,\`edge "\${a.source}" -> "\${a.target}" waypoint\`),a.start!==void 0&&!Fe.includes(a.start))throw new Error(\`Unsupported edge start marker: \${a.start}\`);if(a.end!==void 0&&!Fe.includes(a.end))throw new Error(\`Unsupported edge end marker: \${a.end}\`);if(a.style?.width!==void 0)throw new Error("Edge style.width is not supported; use style.strokeWidth.");r(a.class,\`edge "\${a.source||"unknown"}" -> "\${a.target||"unknown"}"\`),Rt(a.style,ui,\`edge "\${a.source||"unknown"}" -> "\${a.target||"unknown"}"\`)}}function $i(t,e="classic"){if(!Array.isArray(t.participants)||!Array.isArray(t.messages))throw new Error("Sequence diagrams require participants and messages sections.");if(t.activations!==void 0&&!Array.isArray(t.activations))throw new Error("Sequence diagram activations must be a list.");if(t.notes!==void 0&&!Array.isArray(t.notes))throw new Error("Sequence diagram notes must be a list.");if(t.groups!==void 0&&!Array.isArray(t.groups))throw new Error("Sequence diagram groups must be a list.");if(t.canvas!==void 0&&(typeof t.canvas!="object"||Array.isArray(t.canvas)))throw new Error("Sequence canvas must be a mapping.");ge(t.canvas,bi,"sequence canvas");for(let n of["width","height","participantSpacing"]){let r=t.canvas?.[n];if(r!==void 0&&(!Number.isFinite(r)||Number(r)<=0))throw new Error(\`Sequence canvas.\${n} must be a positive number.\`)}if(t.canvas?.participantSize!==void 0){if(typeof t.canvas.participantSize!="object"||Array.isArray(t.canvas.participantSize))throw new Error("Sequence canvas.participantSize must be a mapping.");ge(t.canvas.participantSize,["width","height"],"sequence canvas participantSize");for(let n of["width","height"]){let r=t.canvas.participantSize[n];if(r!==void 0&&(!Number.isFinite(r)||Number(r)<=0))throw new Error(\`Sequence canvas.participantSize.\${n} must be a positive number.\`)}}let o=new Set;for(let n of t.participants){if(ge(n,mi,\`participant "\${n.id||"unknown"}"\`),!n.id||!n.label)throw new Error("Every sequence participant requires an id and label.");if(n.kind!==void 0&&!Jo.includes(n.kind))throw new Error(\`Unsupported sequence participant kind: \${n.kind}\`);if(Pn(n,\`participant "\${n.id}"\`,e),o.has(n.id))throw new Error(\`Duplicate sequence participant id: \${n.id}\`);o.add(n.id)}for(let[n,r]of t.messages.entries()){if(ge(r,gi,\`message \${n}\`),!r.from||!r.to||!r.label)throw new Error(\`Sequence message \${n} requires from, to, and label.\`);if(!o.has(r.from)||!o.has(r.to))throw new Error(\`Sequence message \${n} references an unknown participant.\`);if(r.style!==void 0&&!Et.includes(r.style))throw new Error(\`Unsupported sequence message style: \${r.style}\`)}for(let[n,r]of(t.activations||[]).entries()){if(ge(r,hi,\`activation \${n}\`),!r.participant||!Number.isInteger(r.from)||!Number.isInteger(r.to))throw new Error(\`Sequence activation \${n} requires participant and integer from and to message positions.\`);if(!o.has(r.participant))throw new Error(\`Sequence activation \${n} references an unknown participant.\`);if(r.from<1||r.to<r.from||r.to>t.messages.length)throw new Error(\`Sequence activation \${n} range is out of bounds.\`)}for(let[n,r]of(t.notes||[]).entries()){ge(r,pi,\`note \${n}\`);let i=r.after;if(!r.at||!Number.isInteger(i)||!r.label)throw new Error(\`Sequence note \${n} requires at, after, and label.\`);if(Pn(r,\`note \${n}\`,e),!o.has(r.at))throw new Error(\`Sequence note \${n} references an unknown participant.\`);if(i<0||i>t.messages.length)throw new Error(\`Sequence note \${n} after position is out of bounds.\`)}for(let[n,r]of(t.groups||[]).entries()){if(ge(r,fi,\`group \${n}\`),!r.label&&r.label!=="")throw new Error(\`Sequence group \${n} requires a label.\`);if(!Number.isInteger(r.from)||!Number.isInteger(r.to))throw new Error(\`Sequence group \${n} requires integer from and to indices.\`);if(r.from<1||r.to<r.from||r.to>t.messages.length)throw new Error(\`Sequence group \${n} range is out of bounds.\`)}}function Pn(t,e,o="classic"){if(t.palette!==void 0){let n=String(t.palette||"");if(!ke.includes(n))throw new Error(\`Unsupported \${e} palette: \${n||"unknown"}\`)}if(Rt(t.style,Do,e),t.size){ge(t.size,["width","height"],\`size for \${e}\`);for(let n of["width","height"]){let r=t.size[n];if(r!==void 0&&(!Number.isFinite(r)||Number(r)<=0))throw new Error(\`\${e} size.\${n} must be a positive number.\`)}}}function $o(t){return typeof t=="number"||typeof t=="boolean"?String(t):t&&typeof t=="object"?Object.keys(t).length?\`{ \${Object.entries(t).map(([e,o])=>\`\${e}: \${$o(o)}\`).join(", ")} }\`:"{}":/^[\\w./-]+(?: [\\w./-]+)*$/.test(String(t))?String(t):JSON.stringify(String(t))}function Ve(t,e,o,n,r=""){if(typeof e=="string"&&e.includes(\`
\`)){let i=e.split(\`
\`).map(s=>s.length?\`\${" ".repeat(n)}\${s}\`:"");return[\`\${" ".repeat(o)}\${r}\${t}: |+\`,...i]}return[\`\${" ".repeat(o)}\${r}\${t}: \${$o(e)}\`]}function He(t,e=2){let o=Object.entries(t),[n,r]=o[0],i=Ve(n,r,e,e+4,"- ");for(let[s,a]of o.slice(1))if(!(s==="children"&&Array.isArray(a)&&!a.length))if(s==="children"&&Array.isArray(a)){i.push(\`\${" ".repeat(e+2)}children:\`);for(let c of a)i.push(...He(c,e+4))}else i.push(...Ve(s,a,e+2,e+4));return i}function Pe(t){let e=[\`type: \${$o(t.type)}\`];for(let r of["version","id","caption","description","theme"])t[r]!==void 0&&e.push(...Ve(r,t[r],0,2));if(t.type==="flowchart"&&t.layout!==void 0&&e.push(...Ve("layout",t.layout,0,2)),t.type==="sequence"){if(t.canvas!==void 0){e.push("canvas:");for(let[r,i]of Object.entries(t.canvas))e.push(...Ve(r,i,2,4))}e.push("participants:");for(let r of t.participants||[])e.push(...He(r));e.push("messages:");for(let r of t.messages||[])e.push(...He(r));if(t.activations!==void 0){e.push("activations:");for(let r of t.activations||[])e.push(...He(r))}if(t.notes!==void 0){e.push("notes:");for(let r of t.notes||[])e.push(...He(r))}if(t.groups!==void 0){e.push("groups:");for(let r of t.groups||[])e.push(...He(r))}return e.join(\`
\`)}if(t.styles!==void 0){e.push("styles:");for(let[r,i]of Object.entries(t.styles)){e.push(\`  \${r}:\`);for(let[s,a]of Object.entries(i))e.push(...Ve(s,a,4,6))}}let o=t.canvas||{},n=Object.entries(o).filter(([r])=>!o.auto||r!=="width"&&r!=="height");if(o.auto&&n.length===1)e.push("canvas: auto");else if(n.length){e.push("canvas:");for(let[r,i]of n)e.push(...Ve(r,i,2,4))}e.push("nodes:");for(let r of t.nodes||[])e.push(...He(r));e.push("edges:");for(let r of t.edges||[])e.push(...He(r));return e.join(\`
\`)}var Fi=/^(?: {0,3}> ?)+/;function we(t){return t.replace(Fi,"")}function Re(t){let e=t.match(/^(\`{3,})([\\w-]*)\\s*$/);return e?{marker:e[1],info:e[2]}:null}function Ue(t,e){let o=t.match(/^(\`{3,})\\s*$/);return!!(o&&o[1].length>=e.length)}function st(t,e,o,n=t.length){for(let r=e;r<n;r+=1)if(Ue(we(t[r]),o))return r;return-1}var Ni=["document","diagram"];function Bt(t){let e=t.replace(/\\r\\n/g,\`
\`).split(\`
\`),o=e.findIndex(i=>i.trim()!=="");if(o===-1||e[o]!=="---")return{content:t,frontmatter:{}};let n=e.indexOf("---",o+1);if(n===-1)return{content:t,frontmatter:{}};let r={};for(let i of e.slice(o+1,n)){if(!i.trim()||i.trimStart().startsWith("#"))continue;let s=i.match(/^([^:]+):\\s*(.*)$/);if(!s)throw new Error(\`Cannot parse document frontmatter line: \${i}\`);r[s[1]]=qe(s[2])}return{content:e.slice(n+1).join(\`
\`),frontmatter:r}}function ft(t){let e=Bt(t),o=String(e.frontmatter.theme??"auto"),n=String(e.frontmatter.colourScheme??"classic"),r=String(e.frontmatter.doctype??"document");if(!wt.includes(o))throw new Error(\`Unsupported document theme: \${o}\`);let i=o,s=gt(i);if(!Object.prototype.hasOwnProperty.call(ue,n))throw new Error(\`Unsupported document colour scheme: \${n}\`);let a=n;if(!Ni.includes(r))throw new Error(\`Unsupported document doctype: \${r}\`);return{...e,theme:i,resolvedTheme:s,colourScheme:a,doctype:r}}function We(t){let e=ft(t),o=e.content.replace(/\\r\\n/g,\`
\`).split(\`
\`),n=0,r=new Set,i=!1,s=null;for(let a of o){let c=we(a);if(s){Ue(c,s)&&(s=null);continue}let l=Re(c);if(l){s=l.marker;continue}if(/^:::diagram\\s+\\{\\s*id=/.test(c)){i=!0;break}}for(;n<o.length;){let a=we(o[n]),c=Re(a);if(!c){n+=1;continue}let l=st(o,n+1,c.marker);if(l===-1)throw new Error("Unclosed code block.");if(c.info==="diagram"){let d=o.slice(n+1,l).map(f=>we(f)).join(\`
\`);xe(d,e.colourScheme);let u=d.match(/^id:\\s*(?:"([^"]+)"|([^\\s#]+))\\s*$/m)?.slice(1).find(Boolean);if(u){if(r.has(u))throw new Error(\`Duplicate diagram id: \${u}\`);r.add(u)}else if(i)throw new Error("Every diagram requires an id when using diagram references.")}n=l+1}return e}function It(t){let e=t.match(/^id:\\s*(.*?)\\s*$/m)?.[1];if(e===void 0)return null;try{let o=qe(e);return typeof o=="string"?o:null}catch{return null}}function Ye(t){let e=t.match(/[^\\r\\n]*(?:\\r\\n|\\r|\\n|$)/g)?.filter((u,f,p)=>u.length>0||f<p.length-1)||[],o=e.map(u=>u.replace(/\\r\\n$|[\\r\\n]$/,"")),n=[],r=0;for(let u of e)n.push(r),r+=u.length;let i=(u,f)=>({line:u+1,column:f+1,offset:(n[u]??t.length)+f}),s=u=>{let f=o[u]||"",p=we(f),h=f.length-p.length;return{start:i(u,h),end:i(u,f.length)}},a=0,c=o.findIndex(u=>u.trim()!=="");if(c!==-1&&o[c]==="---"){let u=o.indexOf("---",c+1);u!==-1&&(a=u+1)}let l=[],d=a;for(;d<o.length;){let u=Re(we(o[d]));if(!u){d+=1;continue}let f=st(o,d+1,u.marker);if(f===-1)break;if(u.info==="diagram"){let p=o.slice(d+1,f).map((y,S)=>s(d+1+S)),h=o.slice(d+1,f).map(y=>we(y)).join(\`
\`),m=s(d),g=s(f);l.push({id:It(h),source:h,index:l.length,fenceRange:{start:m.start,end:g.end},bodyRange:p.length?{start:p[0].start,end:p[p.length-1].end}:{start:m.end,end:g.start},lineRanges:p})}d=f+1}return l}function _e(t){let e=2166136261;for(let o=0;o<t.length;o+=1)e^=t.charCodeAt(o),e=Math.imul(e,16777619)>>>0;return e.toString(16).padStart(8,"0")}function qt(t){let e=t.split(\`
\`),o=e.map(p=>p.endsWith("\\r")?p.slice(0,-1):p),r=e.filter(p=>p.endsWith("\\r")).length*2>e.length-1?"\\r":"",i=t.replace(/\\r\\n/g,\`
\`),{content:s,frontmatter:a}=Bt(i),c=String(a.colourScheme||"classic"),l=[],d=i.split(\`
\`).length-s.split(\`
\`).length,u=0,f=0;for(;d<e.length;){let p=Re(we(o[d]));if(!p){d+=1;continue}let h=st(o,d+1,p.marker);if(h===-1)break;if(p.info==="diagram"){let m=o.slice(d+1,h).map(y=>we(y)).join(\`
\`),g=xe(m,c);if(g.type==="flowchart"&&(Dn(g)||Cn(g))){let y=o[d],S=y.slice(0,y.length-we(y).length);l.push({start:d+1,end:h,lines:Pe(g).split(\`
\`).map(w=>\`\${S}\${w}\${r}\`)}),u+=1}else f+=1}d=h+1}return{source:Fo(e,l).join(\`
\`),baked:u,preserved:f,fences:l}}function Fo(t,e){let o=[...t];for(let n of[...e].reverse())o.splice(n.start,n.end-n.start,...n.lines);return o}function Bn(t){let e=We(t),o=Ye(t).reverse(),n=[],r=t;for(let i of o){let s=In(r,i,e.colourScheme);s.changed&&s.layout&&(r=s.source,n.unshift(s.layout))}return{source:r,changed:n.length>0,layouts:n}}function In(t,e,o){let n=xe(e.source,o);if(n.type!=="flowchart")return{source:t,changed:!1,layout:null};let r=Lt(n);if(!r)return{source:t,changed:!1,layout:null};let i=t.split(\`
\`),s=e.fenceRange.start.line-1,a=e.fenceRange.end.line-1,c=i[s].endsWith("\\r")?i[s].slice(0,-1):i[s],l=c.slice(0,c.length-we(c).length),u=i.filter(p=>p.endsWith("\\r")).length*2>i.length-1?"\\r":"",f=Pe(n).split(\`
\`).map(p=>\`\${l}\${p}\${u}\`);return i.splice(s+1,a-s-1,...f),{source:i.join(\`
\`),changed:!0,layout:r}}function qn(t,e){let o=We(t),n=Ye(t).find(r=>r.index===e);if(!n)throw new Error(\`Diagram \${e+1} does not exist.\`);return In(t,n,o.colourScheme)}function zn(t,e,o="all"){let n=We(t),r=Ye(t).find(h=>h.index===e);if(!r)throw new Error(\`Diagram \${e+1} does not exist.\`);let i=xe(r.source,n.colourScheme);if(i.type!=="flowchart")return{source:t,changed:!1};Pt(i,o);let s=t.split(\`
\`),a=r.fenceRange.start.line-1,c=r.fenceRange.end.line-1,l=s[a].endsWith("\\r")?s[a].slice(0,-1):s[a],d=l.slice(0,l.length-we(l).length),f=s.filter(h=>h.endsWith("\\r")).length*2>s.length-1?"\\r":"",p=Pe(i).split(\`
\`).map(h=>\`\${d}\${h}\${f}\`);return s.splice(a+1,c-a-1,...p),{source:s.join(\`
\`),changed:!0}}function Hn(t,e){return It(t)===null?\`id: \${e}
\${t}\`:t.replace(/^id:\\s*(?:"[^"]+"|[^\\s#]+)\\s*$/m,()=>\`id: \${e}\`)}function No(t,e,o){let n=t.replace(/\\r\\n/g,\`
\`),r=n.split(\`
\`),i=r.findIndex(d=>d.trim()!==""),s=i!==-1&&r[i]==="---",a=s?r.indexOf("---",i+1):-1;if(!s||a===-1)return\`---
\${e}: \${o}
---
\${n}\`;let c=!1,l=r.slice(i+1,a).map(d=>{if(!d.trim()||d.trimStart().startsWith("#"))return d;let u=d.match(/^([^:]+):\\s*(.*)$/);return u&&u[1]===e?(c=!0,\`\${e}: \${o}\`):d});return c||l.push(\`\${e}: \${o}\`),[...r.slice(0,i+1),...l,...r.slice(a)].join(\`
\`)}function jn(t,e){return No(t,"theme",e)}function On(t,e){return No(t,"colourScheme",e)}function Gn(t,e){return No(t,"doctype",e)}function Vn(t,e){let o=e.trim(),n=o?t.indexOf(o):-1;return n===-1?null:{start:n,end:n+o.length}}function Un(t,e){let o=Number.parseFloat(globalThis.getComputedStyle(t).lineHeight)||20,n=t.value.slice(0,e.start).split(\`
\`).length-1,r=Math.max(1,Math.floor(t.clientHeight/o));t.scrollTop=Math.max(0,(n-Math.floor(r/2))*o)}function Xe(t,e,o){let n=Math.min(t.x,e.x),r=Math.max(t.x,e.x),i=Math.min(t.y,e.y),s=Math.max(t.y,e.y);if(r<=o.x||n>=o.x+o.width||s<=o.y||i>=o.y+o.height)return!1;if(t.x===e.x||t.y===e.y)return!0;let a=l=>(e.x-t.x)*(l.y-t.y)-(e.y-t.y)*(l.x-t.x),c=[{x:o.x,y:o.y},{x:o.x+o.width,y:o.y},{x:o.x+o.width,y:o.y+o.height},{x:o.x,y:o.y+o.height}].map(a);return c.some(l=>l>0)&&c.some(l=>l<0)}function zt(t,e){return t.slice(1).some((o,n)=>e.some(r=>Xe(t[n],o,r)))}var Ai=20,Mi=220;function Wn(t){return[...new Set(t.map(e=>Math.round(e*100)/100))].sort((e,o)=>e-o)}var Ao=[{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}];function Yn(t){return t.x>0?0:t.x<0?1:t.y>0?2:3}function Mo(t,e,o,n,r,i=24,s=Ai){let a={x:t.x+o.x*i,y:t.y+o.y*i},c={x:e.x+n.x*i,y:e.y+n.y*i},l=Wn([t.x,e.x,a.x,c.x,...r.flatMap(M=>[M.x-s,M.x+M.width+s])]),d=Wn([t.y,e.y,a.y,c.y,...r.flatMap(M=>[M.y-s,M.y+M.height+s])]),u=new Map(l.map((M,P)=>[M,P])),f=new Map(d.map((M,P)=>[M,P])),p=M=>{let P=u.get(Math.round(M.x*100)/100),N=f.get(Math.round(M.y*100)/100);return P===void 0||N===void 0?null:{column:P,row:N}},h=p(a),m=p(c);if(!h||!m)return null;let g=(M,P)=>!r.some(N=>Xe(M,P,N));if(!g(t,a)||!g(e,c))return null;let y=l.length*d.length*4,S=(M,P,N)=>(P*l.length+M)*4+N,w=new Float64Array(y).fill(Number.POSITIVE_INFINITY),b=new Int32Array(y).fill(-1),v=Yn({x:-n.x,y:-n.y}),E=Yn(o),F=S(h.column,h.row,E);w[F]=0;let $=[{key:F,cost:0}],T=-1;for(;$.length;){$.sort((H,j)=>H.cost-j.cost||H.key-j.key);let M=$.shift();if(M.cost>w[M.key])continue;let P=M.key%4,N=(M.key-P)/4,I=N%l.length,A=(N-I)/l.length;if(I===m.column&&A===m.row&&P===v){T=M.key;break}let C={x:l[I],y:d[A]};for(let H=0;H<4;H=H+1){let j=Ao[H];if(j.x===-Ao[P].x&&j.y===-Ao[P].y)continue;let O=I+j.x,_=A+j.y;if(O<0||O>=l.length||_<0||_>=d.length)continue;let te={x:l[O],y:d[_]};if(!g(C,te))continue;let ve=M.cost+Math.hypot(te.x-C.x,te.y-C.y)+(H===P?0:Mi),fe=S(O,_,H);ve<w[fe]&&(w[fe]=ve,b[fe]=M.key,$.push({key:fe,cost:ve}))}}if(T===-1)return null;let B=[];for(let M=T;M!==-1;M=b[M]){let P=M%4,N=(M-P)/4,I=N%l.length,A=(N-I)/l.length;B.unshift({x:l[I],y:d[A]})}return To([t,...B,e])}function To(t){let e=t.filter((o,n)=>n===0||o.x!==t[n-1].x||o.y!==t[n-1].y);return e.filter((o,n)=>{if(n===0||n===e.length-1)return!0;let r=e[n-1],i=e[n+1];return!(r.x===o.x&&o.x===i.x||r.y===o.y&&o.y===i.y)})}function _n(t,e,o){let n=o.x-e.x,r=o.y-e.y,i=Math.hypot(n,r),s=u=>i?Math.abs(n*(u.y-e.y)-r*(u.x-e.x))/i:Math.hypot(u.x-e.x,u.y-e.y),c=[...t.slice(1,-1),...t.slice(1).map((u,f)=>({x:(t[f].x+u.x)/2,y:(t[f].y+u.y)/2}))];if(!c.length)return null;let l=Math.max(...c.map(s));if(!l)return null;let d={x:(e.x+o.x)/2,y:(e.y+o.y)/2};return c.filter(u=>s(u)===l).reduce((u,f)=>Math.hypot(f.x-d.x,f.y-d.y)<Math.hypot(u.x-d.x,u.y-d.y)?f:u)}function he(t){return String(t??"").replace(/\\r\\n/g,\`
\`).split(\`
\`)}var Ti="iljI|!.,;:'\`()[]{}/\\\\",Ci="tfr",Li="mwMW";function Pi(t){return t===" "?.26:Ti.includes(t)?.28:Ci.includes(t)?.33:Li.includes(t)?.85:t>="0"&&t<="9"?.56:t>="A"&&t<="Z"?.66:.55}function dt(t,e,o=!1){let n=0;for(let r of String(t??""))n+=Pi(r);return n*e*(o?1.03:1)}function Xn(t,e,o,n=!1){return e>0?t.flatMap(r=>{if(dt(r,o,n)<=e)return[r];let i=[],s="";for(let a of r.split(/(?<=\\s)/)){let c=s+a;s&&dt(c.trimEnd(),o,n)>e?(i.push(s.trimEnd()),s=a.trimStart()):s=c}return i.push(s.trimEnd()),i.filter((a,c)=>a||!c)}):t}function De(t,e,o,n,r,i,s="middle"){if(!o.length)return"";let a=o.map((c,l)=>{let d=l===0?"":\` dy="\${n}"\`;return\`<tspan x="\${t}"\${d}>\${D(c)||" "}</tspan>\`}).join("");return\`<text x="\${t}" y="\${e}" text-anchor="\${s}" class="\${r}" fill="\${D(i)}">\${a}</text>\`}function $e(t,e,o,n,r){let i=t.shape,s=e+n/2,a=o+r/2,c={x:e+12,y:o+12,width:n-24,height:r-24},l={top:{x:s,y:o},right:{x:e+n,y:a},bottom:{x:s,y:o+r},left:{x:e,y:a}},d;if(i==="circle"){let u=Math.min(n,r),f=s-u/2,p=a-u/2,h=u/2;c.x=f+h*.3,c.y=p+h*.3,c.width=h*1.4,c.height=h*1.4,l.top.y=p,l.right.x=f+u,l.bottom.y=p+u,l.left.x=f,d=\`<circle class="docdiagram-node-body" cx="\${s}" cy="\${a}" r="\${h}"/>\`}else if(i==="oval")c.x+=n*.1,c.width-=n*.2,d=\`<ellipse class="docdiagram-node-body" cx="\${s}" cy="\${a}" rx="\${n/2}" ry="\${r/2}"/>\`;else if(i==="database"){let u=Math.min(r*.22,18);c.y+=u/2,c.height-=u,d=\`<path class="docdiagram-node-body" d="M \${e} \${o+u} C \${e} \${o-u/3} \${e+n} \${o-u/3} \${e+n} \${o+u} V \${o+r-u} C \${e+n} \${o+r+u/3} \${e} \${o+r+u/3} \${e} \${o+r-u} Z"/><path class="docdiagram-node-detail" d="M \${e} \${o+u} C \${e} \${o+u*2.3} \${e+n} \${o+u*2.3} \${e+n} \${o+u}" fill="none"/>\`}else if(i==="diamond")c.x+=n*.25,c.y+=r*.25,c.width-=n*.5,c.height-=r*.5,l.top={x:s,y:o},l.right={x:e+n,y:a},l.bottom={x:s,y:o+r},l.left={x:e,y:a},d=\`<polygon class="docdiagram-node-body" points="\${s},\${o} \${e+n},\${a} \${s},\${o+r} \${e},\${a}"/>\`;else if(i==="rhombus"){let u=Math.min(n*.2,r*.6);c.x+=u,c.width-=u*2,l.left.x=e+u/2,l.right.x=e+n-u/2,d=\`<polygon class="docdiagram-node-body" points="\${e+u},\${o} \${e+n},\${o} \${e+n-u},\${o+r} \${e},\${o+r}"/>\`}else if(i==="flattened-hexagon"){let u=Math.min(n*.18,r*.7);c.x+=u,c.width-=u*2,d=\`<polygon class="docdiagram-node-body" points="\${e+u},\${o} \${e+n-u},\${o} \${e+n},\${a} \${e+n-u},\${o+r} \${e+u},\${o+r} \${e},\${a}"/>\`}else if(i==="chevron"){let u=Math.min(n*.16,r*.45);c.x+=u*1.175,c.width-=u*1.35,l.left.x=e+u,d=\`<polygon class="docdiagram-node-body" points="\${e},\${o} \${e+n-u},\${o} \${e+n},\${a} \${e+n-u},\${o+r} \${e},\${o+r} \${e+u},\${a}"/>\`}else if(i==="right-chevron"){let u=Math.min(n*.16,r*.45);c.width-=u,d=\`<polygon class="docdiagram-node-body" points="\${e},\${o} \${e+n-u},\${o} \${e+n},\${a} \${e+n-u},\${o+r} \${e},\${o+r}"/>\`}else if(i==="document"){let u=Math.max(12,Math.min(26,Math.min(n,r)*.18));c.width-=u*.45,c.y+=2,c.height-=2,d=\`<path class="docdiagram-node-body" d="M \${e} \${o} H \${e+n-u} L \${e+n} \${o+u} V \${o+r} H \${e} Z M \${e+n-u} \${o} V \${o+u} H \${e+n}"/>\`}else i==="text"?d=\`<rect class="docdiagram-node-body" x="\${e}" y="\${o}" width="\${n}" height="\${r}"/>\`:d=\`<rect class="docdiagram-node-body" x="\${e}" y="\${o}" width="\${n}" height="\${r}" rx="12"/>\`;return{bodyMarkup:d,textBounds:c,anchors:l}}function lt(t,e,o,n,r){let i,s;typeof t=="number"?(i={x:t,y:e,width:o||0,height:n||0},s=r):(i=t,s=e);let a=20,c=15,l=Xn(he(s.label),i.width,16,!0),d=s.subtitle?Xn(he(s.subtitle),i.width,13):[],u=d.length?6:0,f=l.length*a,p=d.length*c,h=f+u+p,m=s.textHAlign||"center",g=m==="left"?i.x:m==="right"?i.x+i.width:i.x+i.width/2,y=m==="left"?"start":m==="right"?"end":"middle",S=i.y+i.height/2,w=s.textVAlign==="top"?i.y:S-h/2;return{centerX:g,textAnchor:y,labelLines:l,subtitleLines:d,labelLineHeight:a,subtitleLineHeight:c,labelStartY:w+a*.72,subtitleStartY:w+f+u+c*.72}}function Ht(t,e,o,n="solid",r="#ffffff"){let i=(a,c,l,d="",u=!1)=>t.bodyMarkup.replace('class="docdiagram-node-body"',\`class="\${u?"docdiagram-node-stroke-gap":"docdiagram-node-body"}"\`).replace("/>",\` fill="\${D(a)}" stroke="\${D(c)}" stroke-width="\${l}"\${d}/>\`).replace('class="docdiagram-node-detail"',\`class="docdiagram-node-detail\${u?" docdiagram-node-stroke-gap":""}" stroke="\${D(c)}" stroke-width="\${l}"\${d}\`),s=n==="dotted"?' stroke-linecap="round" stroke-dasharray="1 6"':n==="dashed"?' stroke-dasharray="8 6"':"";return n==="double"?i(e.fill||"",e.stroke||"",o*3)+i("none",r,o,"",!0):i(e.fill||"",e.stroke||"",o,s)}function Kn(t){return{top:{x:0,y:-1},right:{x:1,y:0},bottom:{x:0,y:1},left:{x:-1,y:0}}[t]}function Z(t){return\`\${t.x} \${t.y}\`}function Zn(t){let e=t.slice(1).map((r,i)=>{let s=t[i];return{start:s,end:r,length:Math.hypot(r.x-s.x,r.y-s.y)}}),n=e.reduce((r,i)=>r+i.length,0)/2;for(let r of e){if(n<=r.length||r===e[e.length-1]){let i=r.length?n/r.length:0;return{x:r.start.x+(r.end.x-r.start.x)*i,y:r.start.y+(r.end.y-r.start.y)*i}}n-=r.length}return t[0]}function Co(t,e){return Math.min(Math.max(Math.abs(e.x-t.x),Math.abs(e.y-t.y),80)/2,140)}var Ri={along:t=>t.x,cross:t=>t.y,point:(t,e)=>({x:t,y:e})},Bi={along:t=>t.y,cross:t=>t.x,point:(t,e)=>({x:e,y:t})},ct=24;function Ii(t,e,o,n,r,i){let s=r.along(t),a=r.cross(t),c=r.along(e),l=r.cross(e),d=r.along(o),u=r.cross(n);if(Math.sign(c-s)===d&&Math.sign(a-l)===u)return[t,r.point(c,a),e];let f=Math.sign(c-s)===d?(s+c)/2:s+d*i,p=Math.sign(a-l)===u?(a+l)/2:l+u*i;return[t,r.point(f,a),r.point(f,p),r.point(c,p),e]}function qi(t,e,o,n,r,i){let s=r.along(t),a=r.cross(t),c=r.along(e),l=r.cross(e),d=r.along(o),u=r.along(n),f=Math.sign(c-s)===d;if(d===-u&&f)return a===l?[t,e]:[t,r.point((s+c)/2,a),r.point((s+c)/2,l),e];if(d===u&&Math.abs(a-l)>=ct){let y=d>0?Math.max(s,c)+ct:Math.min(s,c)-ct;return[t,r.point(y,a),r.point(y,l),e]}let p=i*2,h=s+d*p,m=c+u*p;if(h===m)return[t,r.point(h,a),r.point(h,l),e];let g=Math.min(a,l)-p;return[t,r.point(h,a),r.point(h,g),r.point(m,g),r.point(m,l),e]}function zi(t,e,o,n){if(t.x===e.x&&t.y===e.y)return[t,e];let r=Math.max(Math.abs(e.x-t.x),Math.abs(e.y-t.y)),i=Math.max(r/4,ct),s=o.x!==0,a=s?Ri:Bi;return s===(n.x!==0)?qi(t,e,o,n,a,i):Ii(t,e,o,n,a,i)}function Hi(t,e,o){for(let[n,r]of[[t,e],[t,o],[o,e]]){let i=Math.hypot(r.x-n.x,r.y-n.y);if(i>0)return{x:(r.x-n.x)/i,y:(r.y-n.y)/i}}return{x:1,y:0}}function je(t,e,o,n,r="orthogonal",i,s){let a=Kn(o),c=Kn(n),l=a.x!==0,d=c.x!==0;if(!i&&s?.length&&r!=="orthogonal"&&zt([t,e],s))for(let m of[20,60,120]){let g=Mo(t,e,a,c,s,ct,m),y=g&&_n(g,t,e);if(!y)continue;let S=je(t,e,o,n,r,y);if(!zt(yt(S.path),s)){i=y;break}}let u,f,p,h;if(i&&r==="straight")u=\`M \${Z(t)} L \${Z(i)} L \${Z(e)}\`,f=i,p={x:i.x-t.x,y:i.y-t.y},h={x:e.x-i.x,y:e.y-i.y};else if(i&&r==="curved"){let m=Co(t,i),g=Co(i,e),y=Hi(t,e,i),S={x:t.x+a.x*m,y:t.y+a.y*m},w={x:i.x-y.x*m,y:i.y-y.y*m},b={x:i.x+y.x*g,y:i.y+y.y*g},v={x:e.x+c.x*g,y:e.y+c.y*g};u=[\`M \${Z(t)}\`,\`C \${Z(S)} \${Z(w)} \${Z(i)}\`,\`C \${Z(b)} \${Z(v)} \${Z(e)}\`].join(" "),f=i,p={x:S.x-t.x,y:S.y-t.y},h={x:e.x-v.x,y:e.y-v.y}}else if(i){let g=(i.x-t.x)*a.x+(i.y-t.y)*a.y<=0,y=(i.x-e.x)*c.x+(i.y-e.y)*c.y<=0,S={x:t.x+a.x*24,y:t.y+a.y*24},w={x:e.x+c.x*24,y:e.y+c.y*24},b=g?[t,S,l?{x:S.x,y:i.y}:{x:i.x,y:S.y},i]:[t,l?{x:i.x,y:t.y}:{x:t.x,y:i.y},i],v=y?[d?{x:w.x,y:i.y}:{x:i.x,y:w.y},w,e]:[d?{x:i.x,y:e.y}:{x:e.x,y:i.y},e],E=[...b,...v].filter(($,T,B)=>T===0||$.x!==B[T-1].x||$.y!==B[T-1].y);u=\`M \${Z(E[0])}\${E.slice(1).map($=>\` L \${Z($)}\`).join("")}\`,f=Zn(E),p={x:E[1].x-E[0].x,y:E[1].y-E[0].y};let F=E.slice(-2);h={x:F[1].x-F[0].x,y:F[1].y-F[0].y}}else if(r==="straight")u=\`M \${Z(t)} L \${Z(e)}\`,f={x:(t.x+e.x)/2,y:(t.y+e.y)/2},p={x:e.x-t.x,y:e.y-t.y},h=p;else if(r==="curved"){let m=Co(t,e),g={x:t.x+a.x*m,y:t.y+a.y*m},y={x:e.x+c.x*m,y:e.y+c.y*m};u=\`M \${Z(t)} C \${Z(g)} \${Z(y)} \${Z(e)}\`,f={x:(t.x+3*g.x+3*y.x+e.x)/8,y:(t.y+3*g.y+3*y.y+e.y)/8},p={x:g.x-t.x,y:g.y-t.y},h={x:e.x-y.x,y:e.y-y.y}}else{let m=zi(t,e,a,c),g=m.filter((S,w)=>w===0||S.x!==m[w-1].x||S.y!==m[w-1].y);if(g.length===1&&(g=[t,e]),s?.length&&zt(g,s)){let S=Mo(t,e,a,c,s,ct);S&&(g=To(S))}u=\`M \${Z(g[0])}\${g.slice(1).map(S=>\` L \${Z(S)}\`).join("")}\`,f=Zn(g),p={x:g[1].x-g[0].x,y:g[1].y-g[0].y};let y=g.slice(-2);h={x:y[1].x-y[0].x,y:y[1].y-y[0].y}}return{path:u,midpoint:f,startTangent:p,endTangent:h,hitPath:u}}function Lo(t,e){let o=e?13:15;return{x:t.x-o/2,y:t.y-o/2,size:o,radius:e?2:o/2,transform:e?\`rotate(45 \${t.x} \${t.y})\`:""}}function Jn(t,e,o,n){let r=Lo(o,n),i=n?"Anchored edge waypoint":"Edge waypoint";return\`<rect class="docdiagram-edge-waypoint" data-diagram-index="\${t}" data-edge-index="\${e}" data-anchored="\${n}" x="\${r.x}" y="\${r.y}" width="\${r.size}" height="\${r.size}" rx="\${r.radius}"\${r.transform?\` transform="\${r.transform}"\`:""} aria-label="\${i}"/>\`}function ji(t){let e=Math.max(1,Number(t)||2),o=6+e*2.5,n=Math.max(o*.38,e/2+1);return{size:o,circleRadius:n}}function bt(t,e,o,n,r){let i=D(n),{size:s,circleRadius:a}=ji(r),c=s/2;return e==="arrow"?\`<marker id="\${t}" markerWidth="\${s}" markerHeight="\${s}" refX="\${s}" refY="\${c}" markerUnits="userSpaceOnUse" orient="\${o==="start"?"auto-start-reverse":"auto"}"><path fill="\${i}" stroke="\${i}" d="M 0 0 L \${s} \${c} L 0 \${s} z"/></marker>\`:e==="circle"?\`<marker id="\${t}" markerWidth="\${s}" markerHeight="\${s}" refX="\${c}" refY="\${c}" markerUnits="userSpaceOnUse"><circle cx="\${c}" cy="\${c}" r="\${a}" fill="\${i}" stroke="\${i}"/></marker>\`:""}function jt(t,e){let o={x:t.x+t.width/2,y:t.y+t.height/2},n=e.x-o.x,r=e.y-o.y,i=Math.hypot(n,r);if(!Number.isFinite(i)||i<1)return null;let s=Math.max(6,Math.min(Math.min(t.width,t.height)*.28,i*.6,44)),a={x:-r/i*s,y:n/i*s},c=[{x:o.x+a.x,y:o.y+a.y},{x:e.x,y:e.y},{x:o.x-a.x,y:o.y-a.y}],l=[...c.map(p=>p.x),t.x,t.x+t.width],d=[...c.map(p=>p.y),t.y,t.y+t.height],u=Math.min(...l),f=Math.min(...d);return{points:c,polygonPoints:c.map(p=>\`\${p.x},\${p.y}\`).join(" "),bounds:{x:u,y:f,width:Math.max(...l)-u,height:Math.max(...d)-f}}}function Oi(t,e,o){let n=t.indexOf('<path class="docdiagram-node-detail"');return(n===-1?t:t.slice(0,n)).replace('class="docdiagram-node-body"',\`class="\${o}"\`).replace("/>",\` fill="\${e}" stroke="none"/>\`)}function Po(t){return Oi(t,"#000000","docdiagram-node-callout-mask-body")}function Ro(t,e){let o=e*2+8;return{x:t.bounds.x-o,y:t.bounds.y-o,width:t.bounds.width+o*2,height:t.bounds.height+o*2}}function Qn(t,e,o,n,r){let i=!!o.fill&&o.fill!=="none",s=!!o.stroke&&o.stroke!=="none",a=i?o.fill:s?"none":o.text||"none",c=Ro(t,n),l=[\`<mask id="\${r}" maskUnits="userSpaceOnUse" x="\${c.x}" y="\${c.y}" width="\${c.width}" height="\${c.height}">\`,\`<rect class="docdiagram-node-callout-mask-region" x="\${c.x}" y="\${c.y}" width="\${c.width}" height="\${c.height}" fill="#ffffff"/>\`,Po(e),"</mask>"].join(""),d=i?"":\` mask="url(#\${r})"\`;return[l,a==="none"?"":\`<polygon class="docdiagram-node-callout" points="\${t.polygonPoints}" fill="\${D(a||"")}" stroke="none"\${d}/>\`,s?\`<polygon class="docdiagram-node-callout-outline" points="\${t.polygonPoints}" fill="none" stroke="\${D(o.stroke||"")}" stroke-width="\${n}" stroke-linejoin="round" mask="url(#\${r})"/>\`:""].join("")}function yt(t,e=12){let o=[],n=/-?\\d+(?:\\.\\d+)?/g,r={x:0,y:0};for(let[,i,s]of t.matchAll(/([MLC])\\s*([^MLC]*)/g)){let a=(s.match(n)||[]).map(Number);if(i==="C"){let[c,l,d,u,f,p]=a;for(let h=1;h<=e;h+=1){let m=h/e,g=1-m;o.push({x:g**3*r.x+3*g**2*m*c+3*g*m**2*d+m**3*f,y:g**3*r.y+3*g**2*m*l+3*g*m**2*u+m**3*p})}r={x:f,y:p};continue}for(let c=0;c+1<a.length;c+=2)r={x:a[c],y:a[c+1]},o.push(r)}return o}var Gi=15,Ot=16,Bo=6;function Vi(t){let e=yt(t);return e.slice(1).map((o,n)=>({start:e[n],end:o,index:n,length:Math.hypot(o.x-e[n].x,o.y-e[n].y)})).filter(o=>o.length>0).sort((o,n)=>n.length-o.length||o.index-n.index)}function Ui(t,e){return{x:t.x-e,y:t.y-e,width:t.width+e*2,height:t.height+e*2}}function er(t,e){return t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}function tr(t,e){let o=Math.max(0,...t.map(i=>dt(i,Gi))),n=t.length*Ot,r={x:e.x-o/2,y:e.y-n/2,width:o,height:n};return{center:e,startY:r.y+Ot*.72,lines:t,bounds:r,clear:!0,conflicts:[]}}function Wi(t,e,o){let n={x:(t.start.x+t.end.x)/2,y:(t.start.y+t.end.y)/2},r=t.end.x-t.start.x,s={x:-(t.end.y-t.start.y)/t.length,y:r/t.length};(s.y>0||s.y===0&&s.x>0)&&(s={x:-s.x,y:-s.y});let a=Math.abs(s.x)*e/2+Math.abs(s.y)*o/2+Bo;return[{x:n.x+s.x*a,y:n.y+s.y*a},{x:n.x-s.x*a,y:n.y-s.y*a}]}function Yi(t,e,o,n,r){let i=Ui(t.bounds,Bo),s=[];(t.bounds.x<e.x||t.bounds.y<e.y||t.bounds.x+t.bounds.width>e.x+e.width||t.bounds.y+t.bounds.height>e.y+e.height)&&s.push({kind:"canvas"});for(let a of o)er(i,a.bounds)&&s.push({kind:"node",id:a.id});for(let a of n)er(i,a.bounds)&&s.push({kind:"edge-label",edgeIndex:a.edgeIndex});for(let a of r)a.segments.some(c=>Xe(c.start,c.end,i))&&s.push({kind:"edge-route",edgeIndex:a.edgeIndex});return s}function Gt(t,e=new G(t)){let o=t.edges.map(s=>{let a=e.getById(s.source),c=e.getById(s.target);if(!a||!c)return null;let l=$e(a.node,a.bounds.x,a.bounds.y,a.bounds.width,a.bounds.height).anchors[s.sourceAnchor||"right"],d=$e(c.node,c.bounds.x,c.bounds.y,c.bounds.width,c.bounds.height).anchors[s.targetAnchor||"left"],u=e.entries.filter(({node:p})=>!e.isRelated(p,a.node)&&!e.isRelated(p,c.node)),f=je(l,d,s.sourceAnchor||"right",s.targetAnchor||"left",s.route||"orthogonal",s.waypoint,s.waypoint?void 0:u.map(p=>p.bounds));return{sourceAnchor:l,targetAnchor:d,path:f,label:null}}),n=o.map((s,a)=>s?{edgeIndex:a,segments:Vi(s.path.path)}:null).filter(s=>!!s),r=[],i={x:0,y:0,width:Number(t.canvas.width)||1e3,height:Number(t.canvas.height)||560};return o.forEach((s,a)=>{let c=t.edges[a];if(!s||!c.label)return;let l=he(c.label),d=tr(l,{x:0,y:0}).bounds,u=n.find(g=>g.edgeIndex===a)?.segments||[],f=u.flatMap(g=>Wi(g,d.width,d.height).map(y=>({center:y,hostSegmentIndex:g.index})));f.length||f.push({center:{x:s.path.midpoint.x,y:s.path.midpoint.y-d.height/2-Bo},hostSegmentIndex:-1});let p=e.entries.map(({node:g,bounds:y})=>({id:g.id,bounds:y})),h=n.filter(g=>g.edgeIndex!==a),m=null;for(let{center:g,hostSegmentIndex:y}of f){let S=tr(l,g),w=(c.route||"orthogonal")==="curved"?1:0,b=u.filter(v=>y<0||Math.abs(v.index-y)>w);if(S.conflicts=Yi(S,i,p,r,[...h,{edgeIndex:a,segments:b}]),S.clear=S.conflicts.length===0,m||(m=S),S.clear){m=S;break}}s.label=m,m&&r.push({edgeIndex:a,bounds:m.bounds})}),o}function _i(t,e){return t||\`diagram \${e+1}\`}function Xi(t,e){let o=new Map,n=[],r="";return t.source.split(\`
\`).forEach((i,s)=>{let a=i.match(/^([A-Za-z_][\\w-]*):/);a&&(r=a[1]);let c=i.match(/^\\s*-\\s+id:\\s*(?:"([^"]+)"|'([^']+)'|([^\\s#]+))/),l=t.lineRanges[s];c&&l&&o.set(c[1]||c[2]||c[3],l),r==="edges"&&/^\\s*-\\s+[^:]+:/.test(i)&&l&&n.push(l)}),e.map(i=>i.kind==="node"?{...i,sourceRange:o.get(i.id)}:{...i,sourceRange:n[i.index]})}function Ki(t,e){let o=Math.min(t.x+t.width,e.x+e.width)-Math.max(t.x,e.x),n=Math.min(t.y+t.height,e.y+e.height)-Math.max(t.y,e.y);return o>0&&n>0?{width:o,height:n}:null}function Zi(t,e){let o=t.entries;for(let n=0;n<o.length;n+=1)for(let r=n+1;r<o.length;r+=1){let i=o[n],s=o[r];if(t.isRelated(i.node,s.node))continue;let a=Ki(i.bounds,s.bounds);a&&e("node-overlap",\`Nodes "\${i.node.id}" and "\${s.node.id}" overlap by \${Math.round(a.width)} by \${Math.round(a.height)} units.\`,"warning",[{kind:"node",id:i.node.id},{kind:"node",id:s.node.id}])}}function Ji(t,e){for(let{node:o}of t.entries){let n=Number(o.size?.width)||z.width,r=Number(o.size?.height)||z.height,{textBounds:i}=$e(o,0,0,n,r),s=lt(i,o),a=24;if(o.shape==="text"){let l=he(o.label).find(d=>dt(d.replace(/^#{1,2}\\s+/,""),/^#{1,2}\\s/.test(d)?24:16)>i.width+a);l!==void 0&&e("label-overflow",\`Node "\${o.id}" has a line wider than its shape: "\${l.trim()}".\`,"warning",[{kind:"node",id:o.id}])}let c=s.labelLines.length*s.labelLineHeight+(s.subtitleLines.length?6+s.subtitleLines.length*s.subtitleLineHeight:0);c>i.height+a&&e("label-overflow",\`Node "\${o.id}" needs \${Math.ceil(c)} units of text height but its shape offers \${Math.floor(i.height+a)}.\`,"warning",[{kind:"node",id:o.id}])}}function Qi(t,e,o){let n=i=>({kind:"edge",index:i,source:t.edges[i].source,target:t.edges[i].target}),r=Gt(t,e);for(let[i,s]of(t.edges||[]).entries()){let a=n(i),c=e.getById(s.source),l=e.getById(s.target);for(let[p,h,m]of[["source",s.source,c],["target",s.target,l]])m||o("unknown-edge-endpoint",\`Edge "\${s.source}" -> "\${s.target}" names a \${p} node "\${h}" that does not exist, so it is not drawn.\`,"error",[a]);if(!c||!l)continue;let d=e.entries.filter(({node:p})=>!e.isRelated(p,c.node)&&!e.isRelated(p,l.node)),u=r[i],f=yt(u.path.path);for(let p of d)f.slice(1).some((m,g)=>Xe(f[g],m,p.bounds))&&o("edge-crosses-node",\`Edge "\${s.source}" -> "\${s.target}" passes through unrelated node "\${p.node.id}".\`,"warning",[a,{kind:"node",id:p.node.id}]);if(u.label&&!u.label.clear){let p=[a],h=new Set([\`edge:\${i}\`]);for(let m of u.label.conflicts){if(m.kind==="canvas")continue;let g=m.kind==="node"?\`node:\${m.id}\`:\`edge:\${m.edgeIndex}\`;h.has(g)||(h.add(g),p.push(m.kind==="node"?{kind:"node",id:m.id}:n(m.edgeIndex)))}o("edge-label-overlap",\`Edge "\${s.source}" -> "\${s.target}" has no clear position for its label; the deterministic fallback remains visible.\`,"warning",p)}}}function Io(t){let e=[],o=_e(t);try{We(t)}catch(r){return e.push({severity:"error",rule:"schema",message:r.message}),{sourceHash:o,messages:e,errorCount:1,warningCount:0}}let n=ft(t).colourScheme;return Ye(t).forEach(r=>{let i=xe(r.source,n);if(i.type!=="flowchart")return;let s=_i(r.id,r.index),a=(d,u,f="warning",p=[])=>{e.push({severity:f,rule:d,message:u,diagram:s,location:{diagramId:r.id,diagramIndex:r.index,fenceRange:r.fenceRange,subjects:Xi(r,p)}})},c=new G(i);Qi(i,c,a),Zi(c,a),Ji(c,a);let l=Mn(i);l&&(a("unbalanced-aspect-ratio",\`Fitted content is \${l.width} by \${l.height} units (\${l.aspectRatio.toFixed(1)}:1 \${l.direction}); \${l.reason}.\`,"warning"),e[e.length-1].suggestedAction={id:"wrap-linear-flow",label:\`Wrap this \${l.direction} flow\`,diagramIndex:r.index})}),{sourceHash:o,messages:e,errorCount:e.filter(r=>r.severity==="error").length,warningCount:e.filter(r=>r.severity==="warning").length}}function or(t){return t.messages.map(e=>[e.severity,e.diagram?\`[\${e.diagram}]\`:null,e.message,\`(\${e.rule})\`].filter(Boolean).join(" ")).join(\`
\`)}var ea=[{type:"comment",pattern:"\\\\/\\\\/[^\\\\n]*|\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"},{type:"string",pattern:"\`(?:\\\\\\\\.|[^\`\\\\\\\\])*\`|\\"(?:\\\\\\\\.|[^\\"\\\\\\\\\\\\n])*\\"|'(?:\\\\\\\\.|[^'\\\\\\\\\\\\n])*'"}],Oe={type:"number",pattern:"\\\\b(?:0[xXbBoO][\\\\da-fA-F_]+|\\\\d[\\\\d_]*(?:\\\\.[\\\\d_]+)?(?:[eE][+-]?\\\\d+)?)\\\\b"};function Me(...t){return\`\\\\b(?:\${t.join("|")})\\\\b\`}var ta=Me("async","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","export","extends","finally","for","from","function","get","if","implements","import","in","instanceof","interface","let","new","of","private","protected","public","readonly","return","satisfies","set","static","super","switch","this","throw","try","type","typeof","var","void","while","yield"),rr={clike:[...ea,{type:"keyword",pattern:ta},{type:"literal",pattern:Me("true","false","null","undefined","NaN","Infinity")},{type:"type",pattern:Me("any","bigint","boolean","never","number","object","string","symbol","unknown")},Oe],python:[{type:"comment",pattern:"#[^\\\\n]*"},{type:"string",pattern:\`(?:[rRbBfFuU]{0,2})(?:"""[\\\\s\\\\S]*?"""|'''[\\\\s\\\\S]*?'''|"(?:\\\\\\\\.|[^"\\\\\\\\\\\\n])*"|'(?:\\\\\\\\.|[^'\\\\\\\\\\\\n])*')\`},{type:"keyword",pattern:Me("and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield")},{type:"literal",pattern:Me("True","False","None","self","cls")},Oe],ruby:[{type:"comment",pattern:"#[^\\\\n]*"},{type:"string",pattern:\`"(?:\\\\\\\\.|[^"\\\\\\\\\\\\n])*"|'(?:\\\\\\\\.|[^'\\\\\\\\\\\\n])*'|:[a-zA-Z_]\\\\w*[?!]?\`},{type:"keyword",pattern:Me("alias","begin","break","case","class","def","do","else","elsif","end","ensure","for","if","in","module","next","raise","require","rescue","return","then","unless","until","when","while","yield")},{type:"literal",pattern:Me("true","false","nil","self")},Oe],json:[{type:"attribute",pattern:'"(?:\\\\\\\\.|[^"\\\\\\\\])*"(?=\\\\s*:)'},{type:"string",pattern:'"(?:\\\\\\\\.|[^"\\\\\\\\])*"'},{type:"literal",pattern:Me("true","false","null")},Oe],yaml:[{type:"comment",pattern:"#[^\\\\n]*"},{type:"attribute",pattern:"^\\\\s*(?:-\\\\s+)?[\\\\w.-]+(?=\\\\s*:(?:\\\\s|$))"},{type:"string",pattern:\`"(?:\\\\\\\\.|[^"\\\\\\\\\\\\n])*"|'(?:''|[^'\\\\n])*'\`},{type:"meta",pattern:"^---\\\\s*$|^\\\\.\\\\.\\\\.\\\\s*$|(?:^|\\\\s)[|>][+-]?\\\\s*$|(?:^|\\\\s)[&*][\\\\w-]+"},{type:"literal",pattern:Me("true","false","null","yes","no","on","off","True","False","Null")},Oe],sql:[{type:"comment",pattern:"--[^\\\\n]*|\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"},{type:"string",pattern:"'(?:''|[^'\\\\n])*'"},{type:"keyword",pattern:\`\\\\b(?:\${["ADD","ALL","ALTER","AND","AS","ASC","BEGIN","BETWEEN","BY","CASE","COMMIT","CREATE","CROSS","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","EXISTS","FROM","FULL","GROUP","HAVING","IN","INDEX","INNER","INSERT","INTO","IS","JOIN","LEFT","LIKE","LIMIT","NOT","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RETURNING","RIGHT","ROLLBACK","SELECT","SET","TABLE","THEN","TRANSACTION","UNION","UNIQUE","UPDATE","VALUES","VIEW","WHEN","WHERE","WITH"].join("|")})\\\\b\`},{type:"literal",pattern:"\\\\b(?:NULL|TRUE|FALSE)\\\\b"},Oe],shell:[{type:"comment",pattern:"#[^\\\\n]*"},{type:"string",pattern:\`"(?:\\\\\\\\.|[^"\\\\\\\\])*"|'[^']*'\`},{type:"meta",pattern:"\\\\$(?:\\\\{[^}]*\\\\}|[\\\\w@*#?$!-]+)"},{type:"keyword",pattern:Me("case","cd","do","done","echo","elif","else","esac","exit","export","fi","for","function","if","in","local","read","return","set","shift","source","then","unset","until","while")},{type:"attribute",pattern:"(?:^|\\\\s)--?[\\\\w-]+"},Oe],markup:[{type:"comment",pattern:"<!--[\\\\s\\\\S]*?-->"},{type:"meta",pattern:"<!(?:DOCTYPE|doctype)[^>]*>|<\\\\?[\\\\s\\\\S]*?\\\\?>"},{type:"tag",pattern:"<\\\\/?[a-zA-Z][\\\\w:-]*"},{type:"string",pattern:\`"[^"]*"|'[^']*'\`},{type:"attribute",pattern:"\\\\b[a-zA-Z_:][\\\\w:.-]*(?==)"},{type:"tag",pattern:"\\\\/?>"}],css:[{type:"comment",pattern:"\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"},{type:"string",pattern:\`"[^"\\\\n]*"|'[^'\\\\n]*'\`},{type:"meta",pattern:"@[\\\\w-]+"},{type:"attribute",pattern:"[a-zA-Z-]+(?=\\\\s*:)"},{type:"number",pattern:"#[\\\\da-fA-F]{3,8}\\\\b|\\\\b\\\\d[\\\\d.]*(?:px|rem|em|%|vh|vw|s|ms|deg|fr)?\\\\b"}],diff:[{type:"meta",pattern:"^(?:diff|index|@@|\\\\+\\\\+\\\\+|---)[^\\\\n]*"},{type:"inserted",pattern:"^\\\\+[^\\\\n]*"},{type:"deleted",pattern:"^-[^\\\\n]*"}],ini:[{type:"comment",pattern:"[#;][^\\\\n]*"},{type:"meta",pattern:"^\\\\s*\\\\[[^\\\\]\\\\n]*\\\\]"},{type:"attribute",pattern:"^\\\\s*[\\\\w.-]+(?=\\\\s*=)"},{type:"string",pattern:\`"[^"\\\\n]*"|'[^'\\\\n]*'\`},{type:"literal",pattern:Me("true","false")},Oe]},oa={javascript:"clike",js:"clike",jsx:"clike",mjs:"clike",cjs:"clike",typescript:"clike",ts:"clike",tsx:"clike",java:"clike",kotlin:"clike",kt:"clike",swift:"clike",scala:"clike",go:"clike",golang:"clike",rust:"clike",rs:"clike",c:"clike",cpp:"clike","c++":"clike",cs:"clike",csharp:"clike",php:"clike",dart:"clike",python:"python",py:"python",ruby:"ruby",rb:"ruby",json:"json",jsonc:"json",yaml:"yaml",yml:"yaml",sql:"sql",postgresql:"sql",mysql:"sql",bash:"shell",sh:"shell",shell:"shell",zsh:"shell",console:"shell",terminal:"shell",html:"markup",xml:"markup",svg:"markup",vue:"markup",css:"css",scss:"css",less:"css",diff:"diff",patch:"diff",ini:"ini",toml:"ini",conf:"ini"},nr=new Map;function na(t){let e=nr.get(t);if(e)return e;let o=new RegExp(rr[t].map(n=>\`(\${n.pattern})\`).join("|"),"gm");return nr.set(t,o),o}function ra(t){let e=String(t??"").trim().toLowerCase();return oa[e]||null}function ir(t,e){let o=ra(e);if(!o)return D(t);let n=rr[o],r=na(o);r.lastIndex=0;let i=[],s=0,a;for(;a=r.exec(t);){if(!a[0]){r.lastIndex+=1;continue}a.index>s&&i.push(D(t.slice(s,a.index)));let c=a.findIndex((f,p)=>p>0&&f!==void 0)-1,l=n[c]?.type,d=a[0].match(/^\\s*/)[0],u=a[0].slice(d.length);i.push(D(d)),i.push(l&&u?\`<span class="docdiagram-token-\${l}">\${D(u)}</span>\`:D(u)),s=a.index+a[0].length}return i.push(D(t.slice(s))),i.join("")}var Vt={section:{attributes:["title","palette","fill","stroke","text"]},panel:{attributes:["title","palette","fill","stroke","text"]},callout:{attributes:["kind","title","palette","fill","stroke","text"]},grid:{attributes:["columns"]},stack:{attributes:[]},diagram:{attributes:["id"],void:!0},toc:{attributes:["depth","diagrams"],void:!0}},ia=Object.keys(Vt);function zo(t){return!!Vt[t].void}var aa=/\\u0001ref:([^\\u0001]*)\\u0001/g,sa=/\\u0001toc:([^\\u0001]*)\\u0001/g;function ca(t){let e=t.replace(/\\\\#/g,""),o=e.indexOf("#"),n=r=>r.replace(/\\u0002/g,"#");return o===-1?{hasPlaceholder:!1,before:n(e),after:"",text:n(e)}:{hasPlaceholder:!0,before:n(e.slice(0,o)),after:n(e.slice(o+1)),text:n(e.slice(0,o)+e.slice(o+1))}}function da(t){return t.replace(/!\\[([^\\]]*)\\]\\([^)]*\\)/g,"$1").replace(/\\[([^\\]]+)\\]\\([^)]*\\)/g,"$1").replace(/\`([^\`]+)\`/g,"$1").replace(/(\\*\\*|__|~~|\\*|_)/g,"").normalize("NFKD").replace(/[\\u0300-\\u036f]/g,"").toLowerCase().replace(/[^a-z0-9\\s-]/g,"").trim().replace(/[\\s-]+/g,"-")||"section"}function la(t,e){let o=da(t),n=e.headingOccurrences||(e.headingOccurrences=new Map),r=e.usedHeadingIds||(e.usedHeadingIds=new Set),i=(n.get(o)||0)+1,s=i===1?o:\`\${o}-\${i}\`;for(;r.has(s);)i+=1,s=\`\${o}-\${i}\`;return n.set(o,i),r.add(s),s}function Ho(t){let e=[],o="",n=!1,r=t.trim().replace(/^\\||\\|$/g,"");for(let i of r)n?(o+=i,n=!1):i==="\\\\"?n=!0:i==="|"?(e.push(o.trim()),o=""):o+=i;return e.push(o.trim()),e}function ar(t){let e=Ho(t);return!e.length||!e.every(o=>/^:?-{3,}:?$/.test(o))?null:e.map(o=>o.startsWith(":")&&o.endsWith(":")?"center":o.startsWith(":")?"left":o.endsWith(":")?"right":"")}function Ke(t){return t.match(/^(\\s*)([-+*]|\\d+[.)])\\s+(.+)$/)}function xt(t){let e=t.match(new RegExp(\`^:::(\${ia.join("|")})(?:\\\\s+\\\\{(.*)\\\\})?\\\\s*$\`));if(!e)return null;let o={},n=e[2];if(n!==void 0){let r=0,i=/\\s*([a-z][\\w-]*)=(?:"([^"]*)"|([^\\s}]+))/gi,s;for(;s=i.exec(n);){if(s.index!==r||o[s[1]]!==void 0)return null;o[s[1]]=s[2]??s[3],r=i.lastIndex}if(n.slice(r).trim())return null}return{name:e[1],attributes:o}}function ua(t){let e=xt(t);if(!e||e.name!=="diagram")return null;let o=Object.keys(e.attributes),n=e.attributes.id;return o.length===1&&n?{id:n}:null}function qo(t){let e=t.match(/^id:\\s*(?:"([^"]+)"|([^\\s#]+))\\s*$/m);return e?.[1]??e?.[2]??null}function ma(t){let e=t.match(/^caption:[ \\t]*(\\S.*?)\\s*$/m),o=e?qe(e[1]):null;return typeof o=="string"&&o?o:null}function ga(t){return t.replace(/^(?: {0,3}> ?)+/,"")}function cr(t){return/^:::(?:\\s+.*)?$/.test(t)}function ha(t,e,o){let n=1,r=null;for(let i=e+1;i<o;i+=1){let s=t[i];if(r){Ue(s,r)&&(r=null);continue}let a=Re(s);if(a){r=a.marker;continue}let c=xt(s);if(c)zo(c.name)||(n+=1);else if(cr(s)&&(n-=1,!n))return i}return-1}function pa(t){return/^#[\\da-f]{3,8}$/i.test(t)}function fa(t,e="classic",o="light"){let n=t.palette!==void 0;if(n&&!ke.includes(t.palette))return null;for(let a of["fill","stroke","text"])if(t[a]!==void 0&&!pa(t[a]))return null;let r=n?ye(e,o,t.palette):null,i=Object.fromEntries(["fill","stroke","text"].filter(a=>t[a]!==void 0).map(a=>[a,t[a]])),s=Ne(r||{},i);return Object.entries(s).filter(([,a])=>a!==void 0).map(([a,c])=>\`--docdiagram-component-\${a}:\${c}\`).join(";")}function sr(t,e=!1){let o=String(t).trim();if(o.startsWith("//")||o.startsWith("\\\\"))return!1;if(!o||o.startsWith("#")||o.startsWith("/")||o.startsWith("./")||o.startsWith("../")||o.startsWith("?")||e&&/^data:image\\/(?:gif|jpeg|png|webp);base64,/i.test(o))return!0;let n=o.match(/^([a-z][a-z\\d+.-]*):/i);return!n||["http","https","mailto"].includes(n[1].toLowerCase())}function Ee(t){let e=[],o=String(t).replace(/\`([^\`]+)\`/g,(n,r)=>{let i=\`\\0\${e.length}\\0\`;return e.push(\`<code>\${D(r)}</code>\`),i});return o=o.replace(/\\{ref=(?:"([^"}]+)"|([^\\s}]+))\\}/g,(n,r,i)=>\`ref:\${r??i}\`),o=D(o),o=o.replace(/!\\[([^\\]]*)\\]\\(([^)\\s]+)(?:\\s+&quot;[^&]*&quot;)?\\)/g,(n,r,i)=>{let s=i.replace(/&amp;/g,"&");return sr(s,!0)?\`<img src="\${D(s)}" alt="\${r}">\`:\`![\${r}](\${D(i)})\`}),o=o.replace(/\\[([^\\]]+)\\]\\(([^)\\s]+)(?:\\s+&quot;[^&]*&quot;)?\\)/g,(n,r,i)=>{let s=i.replace(/&amp;/g,"&");return sr(s)?\`<a href="\${D(s)}">\${r}</a>\`:\`[\${r}](\${D(i)})\`}),o=o.replace(/(\\*\\*|__)(?=\\S)([\\s\\S]*?\\S)\\1/g,"<strong>$2</strong>").replace(/~~(?=\\S)([\\s\\S]*?\\S)~~/g,"<del>$1</del>").replace(/(?<!\\*)\\*(?=\\S)([\\s\\S]*?\\S)\\*(?!\\*)/g,"<em>$1</em>").replace(/(?<!_)_(?=\\S)([\\s\\S]*?\\S)_(?!_)/g,"<em>$1</em>"),o.replace(/\\u0000(\\d+)\\u0000/g,(n,r)=>e[Number(r)])}function jo(t,e={diagramIndex:0},o){let n=t.replace(/\\r\\n/g,\`
\`).split(\`
\`),r=o?.renderDiagram??((w,b)=>{throw new Error("renderDiagram callback is required for diagram blocks.")}),i=!!o?.diagramReferenceRegistry,s=o?.documentColorScheme||"classic",a=o?.documentTheme||"light",c=o?.diagramReferenceRegistry||(()=>{let w=new Map,b=new Set,v=new Map,E=new Set,F=n.map(ga);for(let T=0;T<F.length;T+=1){let B=Re(F[T]);if(!B)continue;let M=st(F,T+1,B.marker);if(M===-1)break;if(B.info==="diagram"){let P=F.slice(T+1,M).join(\`
\`),N=qo(P);N&&(E.add(N),w.has(N)?b.add(N):w.set(N,{id:N,source:P}))}T=M}let $=null;for(let T of F){if($){Ue(T,$)&&($=null);continue}let B=Re(T);if(B){$=B.marker;continue}let M=ua(T);M&&v.set(M.id,(v.get(M.id)||0)+1)}return{definitions:w,duplicateDefinitionIds:b,referenceCounts:v,diagramIds:E}})(),{definitions:l,duplicateDefinitionIds:d,referenceCounts:u}=c;if(e.figures||(e.figures=new Map),e.contents||(e.contents=[]),!i){let w=e.usedHeadingIds||(e.usedHeadingIds=new Set);for(let b of c.diagramIds)w.add(b)}function f(w){let b=qo(w),v=ma(w),E=v?ca(v):null,F=E?.hasPlaceholder?e.figureNumber=(e.figureNumber||0)+1:null,$=E?F===null?E.text:\`\${E.before}\${F}\${E.after}\`:null;E&&b&&(e.figures.set(b,{id:b,number:F,text:$}),e.contents.push({kind:"figure",level:0,id:b,text:Ee($)}));let T=r(w,e.diagramIndex,{id:b,caption:$});return e.diagramIndex+=1,T}function p(w){let b=n[w]||"";return!b.trim()||/^\`\`\`/.test(b)||/^(#{1,6})\\s+/.test(b)||/^ {0,3}&gt;|^ {0,3}>/.test(b)||/^ {0,3}(?:[-*_]\\s*){3,}$/.test(b)||/^:::/.test(b)||!!Ke(b)||w+1<n.length&&!!ar(n[w+1])}function h(w,b){let v=Ke(n[w]),E=/^\\d/.test(v[2]),F=[],$=w,T=E?Number.parseInt(v[2],10):null;for(;$<n.length;){let N=Ke(n[$]);if(!N||N[1].length!==b||/^\\d/.test(N[2])!==E)break;let I={content:[N[3]],children:[]};for($+=1;$<n.length;){let A=Ke(n[$]);if(A&&A[1].length>b){let C=h($,A[1].length);I.children.push(C.html),$=C.index;continue}if(!n[$].trim()){$+=1;let C=$<n.length?Ke(n[$]):null;if($>=n.length||!C||C[1].length<=b)break;continue}if(/^\\s+/.test(n[$])&&!Ke(n[$])){I.content.push(n[$].trim()),$+=1;continue}break}F.push(I)}let B=E?"ol":"ul",M=E&&T!==1?\` start="\${T}"\`:"",P=F.map(N=>{let I=!E&&N.content.length===1&&N.content[0].match(/^\\[([ xX])\\]\\s+(.*)$/),A=I?\`<input type="checkbox" disabled\${I[1].toLowerCase()==="x"?" checked":""}> \${Ee(I[2])}\`:Ee(N.content.join(" "));return\`<li\${I?' class="docdiagram-task-list-item"':""}>\${A}\${N.children.join("")}</li>\`}).join("");return{html:\`<\${B}\${M}>\${P}</\${B}>\`,index:$}}function m(w){let{name:b,attributes:v}=w;if(Object.keys(v).some(F=>!Vt[b].attributes.includes(F)))return null;if(b==="diagram"){let F=v.id;if(!F)return null;let $=l.get(F);return $?d.has(F)?\`<section class="docdiagram-error"><strong>Diagram "\${D(F)}" has multiple definitions.</strong></section>\`:(u.get(F)||0)>1?\`<section class="docdiagram-error"><strong>Diagram "\${D(F)}" is referenced more than once.</strong></section>\`:f($.source):\`<section class="docdiagram-error"><strong>Diagram "\${D(F)}" could not be found.</strong></section>\`}let E=v.depth===void 0?3:Number(v.depth);return!Number.isInteger(E)||E<1||E>6||v.diagrams!==void 0&&v.diagrams!=="true"&&v.diagrams!=="false"?null:\`toc:\${E}:\${v.diagrams==="true"}\`}function g(w,b){let v=xt(n[w]);if(!v||zo(v.name))return null;let E=ha(n,w,b);if(E===-1)return null;let{name:F,attributes:$}=v;if(Object.keys($).some(N=>!Vt[F].attributes.includes(N)))return null;if(F==="grid"){let N=nn[$.columns];if(!N)return null;let I=[],A=w+1;for(;A<E;){if(!n[A].trim()){A+=1;continue}let C=xt(n[A]);if(!C||!["panel","callout","stack"].includes(C.name))return null;let H=g(A,E);if(!H)return null;I.push(\`<div class="docdiagram-grid-item">\${H.html}</div>\`),A=H.next}return{html:\`<div class="docdiagram-grid" style="--docdiagram-grid-columns:\${N}">\${I.join("")}</div>\`,next:E+1}}if(F==="stack")return Object.keys($).length?null:{html:\`<div class="docdiagram-stack">\${y(w+1,E)}</div>\`,next:E+1};let T=fa($,s,a);if(T===null||F==="callout"&&$.kind!==void 0&&!on.includes($.kind))return null;let B=$.title?\`<div class="docdiagram-component-title">\${Ee($.title)}</div>\`:"",M=y(w+1,E),P=\`docdiagram-component\${F==="callout"?"":\` docdiagram-\${F}\`}\${T?" docdiagram-component-styled":""}\`;if(F==="callout"){let N=$.kind||"info";return{html:\`<aside class="\${P} docdiagram-callout docdiagram-callout-\${N}"\${T?\` style="\${T}"\`:""} aria-label="\${D($.title||N)} callout"><div class="docdiagram-callout-kind">\${D(N)}</div>\${B}\${M}</aside>\`,next:E+1}}return{html:\`<section class="\${P}"\${T?\` style="\${T}"\`:""}>\${B}\${M}</section>\`,next:E+1}}function y(w=0,b=n.length){let v=[],E=w;for(;E<b;){let F=n[E];if(!F.trim()){E+=1;continue}if(/^:::/.test(F)){let N=xt(F);if(N&&zo(N.name)){let A=m(N);v.push(A??\`<pre class="docdiagram-literal-source"><code>\${D(F)}</code></pre>\`),E+=1,A!==null&&E<b&&cr(n[E])&&(E+=1);continue}let I=g(E,b);I?(v.push(I.html),E=I.next):(v.push(\`<pre class="docdiagram-literal-source"><code>\${D(F)}</code></pre>\`),E+=1);continue}let $=Re(F);if($){let N=n.slice(E+1,b).findIndex(C=>Ue(C,$.marker));if(N===-1){v.push('<section class="docdiagram-error"><strong>Unclosed code block.</strong></section>');break}let I=E+N+1,A=n.slice(E+1,I).join(\`
\`);if($.info==="diagram"){let C=qo(A);C&&d.has(C)?v.push(\`<section class="docdiagram-error"><strong>Diagram "\${D(C)}" has multiple definitions.</strong></section>\`):(!C||!u.has(C))&&v.push(f(A))}else{let C=$.info?\` class="language-\${D($.info)}"\`:"";v.push(\`<pre><code\${C}>\${ir(A,$.info)}</code></pre>\`)}E=I+1;continue}let T=F.match(/^(#{1,6})\\s+(.+?)\\s*#*\\s*$/);if(T){let N=T[1].length,I=la(T[2],e);e.contents.push({kind:"heading",level:N,id:I,text:Ee(T[2])}),v.push(\`<h\${N} id="\${I}">\${Ee(T[2])}</h\${N}>\`),E+=1;continue}if(/^ {0,3}(?:[-*_]\\s*){3,}$/.test(F)){v.push("<hr>"),E+=1;continue}if(/^ {0,3}>/.test(F)){let N=[];for(;E<b&&/^ {0,3}>/.test(n[E]);)N.push(n[E].replace(/^ {0,3}> ?/,"")),E+=1;v.push(\`<blockquote>\${jo(N.join(\`
\`),e,{...o,diagramReferenceRegistry:c})}</blockquote>\`);continue}let B=Ke(F);if(B){let N=h(E,B[1].length);v.push(N.html),E=N.index;continue}let M=E+1<b?ar(n[E+1]):null;if(M){let N=Ho(F),I=[];for(E+=2;E<b&&n[E].includes("|")&&n[E].trim();)I.push(Ho(n[E])),E+=1;let A=(C,H)=>H.map((j,O)=>\`<\${C}\${M[O]?\` style="text-align:\${M[O]}"\`:""}>\${Ee(j||"")}</\${C}>\`).join("");v.push(\`<table><thead><tr>\${A("th",N)}</tr></thead><tbody>\${I.map(C=>\`<tr>\${A("td",C)}</tr>\`).join("")}</tbody></table>\`);continue}let P=[F.trim()];for(E+=1;E<b&&!p(E);)P.push(n[E].trim()),E+=1;v.push(\`<p>\${Ee(P.join(" "))}</p>\`)}return v.join("")}let S=y();return i?S:ya(S,e)}function ba(t,e,o){let n=t.filter(l=>l.kind==="figure"?o:l.level<=e);if(!n.length)return"";let r=n.filter(l=>l.kind==="heading").map(l=>l.level),i=Math.min(...r.length?r:[1]),s=[],a=[];for(let l of n){let d=l.kind==="figure"?(a.length?a[a.length-1].level:0)+1:l.level-i+1;for(;a.length&&a[a.length-1].level>=d;)a.pop();let u={entry:l,level:d,children:[]};(a.length?a[a.length-1].children:s).push(u),l.kind==="heading"&&a.push(u)}let c=l=>\`<ul>\${l.map(d=>\`<li class="docdiagram-contents-\${d.entry.kind}"><a href="#\${D(d.entry.id)}">\${d.entry.text}</a>\${d.children.length?c(d.children):""}</li>\`).join("")}</ul>\`;return\`<nav class="docdiagram-contents" aria-label="Table of contents">\${c(s)}</nav>\`}function ya(t,e){let o=e.figures||new Map,n=e.contents||[];return t.replace(aa,(r,i)=>{let s=o.get(i);return s?\`<a href="#\${D(i)}">\${s.number===null?Ee(s.text):String(s.number)}</a>\`:\`<strong class="docdiagram-error-inline">Unknown reference "\${D(i)}"</strong>\`}).replace(sa,(r,i)=>{let[s,a]=i.split(":");return ba(n,Number(s),a==="true")})}var Go={h1:{fontSize:26,lineHeight:34},h2:{fontSize:20,lineHeight:26},body:{fontSize:16,lineHeight:20}},Vo=.72,xa=/^(#{1,2})\\s+(.*)$/,Oo=/(\\*\\*([^*]+)\\*\\*)|((?<!\\w)_([^_\\s](?:[^_]*[^_\\s])?)_)(?!\\w)|(\`([^\`]+)\`)/g;function wa(t){let e=t.match(xa);return e?{kind:e[1].length===1?"h1":"h2",text:e[2]}:{kind:"body",text:t}}function Ea(t){let e=[],o=0,n;for(Oo.lastIndex=0;n=Oo.exec(t);)n.index>o&&e.push({text:t.slice(o,n.index)}),n[2]!==void 0?e.push({text:n[2],bold:!0}):n[4]!==void 0?e.push({text:n[4],italic:!0}):n[6]!==void 0&&e.push({text:n[6],code:!0}),o=Oo.lastIndex;return(o<t.length||!e.length)&&e.push({text:t.slice(o)}),e}function Sa(t,e,o,n,r,i){let s=[];o&&(s.push(\`x="\${n}"\`),r!==null&&s.push(\`dy="\${r}"\`));let a=[\`font-size:\${i}px\`];(t.bold||e)&&a.push("font-weight:700"),t.italic&&a.push("font-style:italic"),t.code&&a.push("font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace"),s.push(\`style="\${a.join(";")}"\`);let c=D(t.text)||" ";return\`<tspan \${s.join(" ")}>\${c}</tspan>\`}function va(t,e,o,n,r){if(!n.length)return"";let i=o+Go[n[0].kind].lineHeight*Vo,s=o,a=0,c=n.map((l,d)=>{let u=Go[l.kind],f=s+u.lineHeight*Vo,p=d===0?null:f-a;s+=u.lineHeight,a=f;let h=Ea(l.text),m=l.kind!=="body";return h.map((g,y)=>Sa(g,m,y===0,t,y===0?p:null,u.fontSize)).join("")}).join("");return\`<text x="\${t}" y="\${i}" text-anchor="\${e}" class="docdiagram-node-label docdiagram-node-label-markdown" fill="\${D(r)}">\${c}</text>\`}function dr(t,e,o){let n=he(e.label).map(wa),r=e.subtitle?he(e.subtitle):[];if(!n.length&&!r.length)return"";let i=15,s=n.reduce((S,w)=>S+Go[w.kind].lineHeight,0),a=r.length?6:0,c=r.length*i,l=s+a+c,d=e.textHAlign||"center",u=d==="left"?t.x:d==="right"?t.x+t.width:t.x+t.width/2,f=d==="left"?"start":d==="right"?"end":"middle",p=t.y+t.height/2,h=e.textVAlign==="top"?t.y:p-l/2,m=va(u,f,h,n,o),g=h+s+a+i*Vo,y=r.length?De(u,g,r,i,"docdiagram-node-subtitle",o,f):"";return m+y}function Ut(t){return[t?.caption?' class="docdiagram docdiagram-captioned"':' class="docdiagram"',t?.id?\` id="\${D(t.id)}"\`:""].join("")}function Wt(t,e){return t?.caption?\`<figcaption class="docdiagram-caption">\${e(t.caption)}</figcaption>\`:""}function Yt(t,e,o,n){if(t.description===void 0)return{attributes:\`role="img" aria-label="\${D(o)}"\`,metadata:""};let r=\`docdiagram-title-\${e}\`;if(!n?.caption)return{attributes:\`role="img" aria-labelledby="\${r}"\`,metadata:\`<title id="\${r}">\${D(t.description)}</title>\`};let i=\`docdiagram-description-\${e}\`;return{attributes:\`role="img" aria-labelledby="\${r}" aria-describedby="\${i}"\`,metadata:\`<title id="\${r}">\${D(n.caption)}</title><desc id="\${i}">\${D(t.description)}</desc>\`}}function Uo(t,e,o,n=!1){let r=e!=="none",i=e==="flowchart",s=o.expandedDiagramIndex===t;return['<div class="docdiagram-diagram-toolbar" role="toolbar" aria-label="Diagram controls">',\`<button type="button" class="docdiagram-icon-button docdiagram-zoom-in" data-diagram-index="\${t}" aria-label="Zoom in" title="Zoom in">+</button>\`,\`<button type="button" class="docdiagram-icon-button docdiagram-zoom-out" data-diagram-index="\${t}" aria-label="Zoom out" title="Zoom out">\\u2212</button>\`,\`<button type="button" class="docdiagram-icon-button docdiagram-fit" data-diagram-index="\${t}" aria-label="Zoom to fit" title="Zoom to fit">\\u22A1</button>\`,\`<button type="button" class="docdiagram-icon-button docdiagram-toggle-expand" data-diagram-index="\${t}" aria-pressed="\${s}" aria-label="\${s?"Collapse diagram":"Expand diagram"}" title="\${s?"Collapse diagram (Esc)":"Expand diagram"}">\${s?"\\u2921":"\\u2922"}</button>\`,'<div class="docdiagram-diagram-export">',\`<button type="button" class="docdiagram-icon-button docdiagram-export-toggle" data-diagram-index="\${t}" aria-label="Export diagram" aria-expanded="false" title="Export diagram">\\u21E7</button>\`,'<div class="docdiagram-diagram-export-menu" hidden>',\`<button type="button" class="docdiagram-open-diagram" data-diagram-index="\${t}">Open full diagram</button>\`,\`<button type="button" class="docdiagram-save-diagram" data-diagram-index="\${t}">Save as Skryb diagram</button>\`,\`<button type="button" class="docdiagram-download-diagram" data-diagram-index="\${t}">Save as SVG</button>\`,\`<button type="button" class="docdiagram-print-diagram" data-diagram-index="\${t}">Print / Save as PDF</button>\`,"</div>","</div>",r?o.editingDiagramIndex===t?\`<button type="button" class="docdiagram-icon-button docdiagram-done-editing" aria-label="Done editing" title="Done editing">\\u2713</button><button type="button" class="docdiagram-icon-button docdiagram-cancel-editing" aria-label="Cancel editing and discard changes" title="Cancel editing and discard changes">\\xD7</button>\${i?\`<button type="button" class="docdiagram-icon-button docdiagram-create-node" data-diagram-index="\${t}" aria-label="New node" title="New node">+</button>\`:""}\`:o.editingDiagramIndex===null?\`\${n?\`<button type="button" class="docdiagram-icon-button docdiagram-relayout" data-diagram-index="\${t}" aria-label="Relayout diagram" title="Relayout diagram">\\u21BB</button>\`:""}<button type="button" class="docdiagram-icon-button docdiagram-start-editing" data-diagram-index="\${t}" aria-label="Edit diagram" title="Edit diagram">\\u270E</button>\`:"":"","</div>"].join("")}function lr(t,e,o,n,r){let{selectedNode:i,selectedEdge:s,editingNode:a,editingEdge:c,connectionDrag:l,diagramZooms:d,diagramCameraOffsets:u}=o,f=o.editingDiagramIndex===e,p=new G(t),h=p.entries,m=Gt(t,p),g=[],y=[],S=ue[o.documentColorScheme][o.documentTheme==="dark"?"dark":"light"],w=Object.entries(S).filter(([,A])=>A.gradient).map(([A,C])=>\`<linearGradient id="docdiagram-\${o.documentColorScheme}-\${e}-\${A}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="\${D(C.gradient||C.fill)}"/><stop offset="1" stop-color="\${D(C.fill)}"/></linearGradient>\`).join(""),b=t.edges.map((A,C)=>{let H=m[C];if(!H)return"";let{sourceAnchor:j,targetAnchor:O,path:_,label:te}=H,ve=te?.center.x??_.midpoint.x,fe=te?.center.y??_.midpoint.y-10,se=vt(t,A,o.documentTheme,o.documentColorScheme),ce=s?.diagramIndex===e&&s.edgeIndex===C,de=ce&&c?.diagramIndex===e&&c.edgeIndex===C,le=Number(se.strokeWidth)||2,J=le+(ce?2:0),Q=A.strokeType,Be=220,X=72,ee=lo(A,"start"),Te=lo(A,"end"),K=\`docdiagram-marker-\${e}-\${C}-start\`,Ce=\`docdiagram-marker-\${e}-\${C}-end\`;ee!=="none"&&g.push(bt(K,ee,"start",se.stroke||"",J)),Te!=="none"&&g.push(bt(Ce,Te,"end",se.stroke||"",J)),ce&&f&&y.push(\`<circle class="docdiagram-edge-endpoint" data-diagram-index="\${e}" data-edge-index="\${C}" data-endpoint="source" cx="\${j.x}" cy="\${j.y}" r="7"/>\`,\`<circle class="docdiagram-edge-endpoint" data-diagram-index="\${e}" data-edge-index="\${C}" data-endpoint="target" cx="\${O.x}" cy="\${O.y}" r="7"/>\`,Jn(e,C,A.waypoint??_.midpoint,!!A.waypoint));let et=[ee!=="none"?\` marker-start="url(#\${K})"\`:"",Te!=="none"?\` marker-end="url(#\${Ce})"\`:""].join(""),ut=D(se.stroke||""),ro=Q==="double"?\`<path class="docdiagram-edge" d="\${_.path}" stroke="\${ut}" stroke-width="\${J+le*2}"/><path d="\${_.path}" fill="none" stroke="\${D(S.background.fill)}" stroke-width="\${le}"/><path d="\${_.path}"\${et} fill="none" stroke="none"/>\`:\`<path class="docdiagram-edge" d="\${_.path}"\${et} stroke="\${ut}" stroke-width="\${J}"\${Q==="dotted"?' stroke-linecap="round" stroke-dasharray="1 6"':""}\${Q==="dashed"?' stroke-dasharray="8 6"':""}/>\`;return[\`<g class="docdiagram-edge-group\${ce?" docdiagram-edge-selected":""}" data-diagram-index="\${e}" data-edge-index="\${C}">\`,\`<path class="docdiagram-edge-hit" d="\${_.hitPath}" fill="none" stroke="transparent" stroke-width="16"/>\`,ro,de?\`<foreignObject class="docdiagram-inline-editor-host" x="\${ve-Be/2}" y="\${fe-X/2}" width="\${Be}" height="\${X}"><textarea class="docdiagram-inline-editor docdiagram-inline-editor-edge" aria-label="Edit edge label. Press Enter for a new line. Press Control or Command plus Enter to save. Press Escape to cancel.">\${D(A.label||"")}</textarea></foreignObject>\`:te?De(ve,te.startY,te.lines,Ot,"docdiagram-edge-label",se.text||""):"","</g>"].join("")}).join(""),v=[],E=h.map(({node:A,position:C},H)=>{let j=C.x,O=C.y,_=Number(A.size?.width)||190,te=Number(A.size?.height)||80,ve=Ge(t,A,o.documentTheme,o.documentColorScheme),fe=A.palette||St(t,A.class)?.palette,se=fe?S?.[fe]:void 0,ce=A.arrow?jt({x:j,y:O,width:_,height:te},A.arrow):null,de=ce&&se?.gradient?\`docdiagram-\${o.documentColorScheme}-\${e}-\${fe}-callout-\${H}\`:"";de&&se&&v.push(\`<linearGradient id="\${de}" gradientUnits="userSpaceOnUse" x1="\${j}" y1="\${O}" x2="\${j}" y2="\${O+te}"><stop offset="0" stop-color="\${D(se.gradient||se.fill)}"/><stop offset="1" stop-color="\${D(se.fill)}"/></linearGradient>\`);let le=se?.gradient?{...ve,fill:de?\`url(#\${de})\`:\`url(#docdiagram-\${o.documentColorScheme}-\${e}-\${fe})\`}:ve,J=i?.diagramIndex===e&&i.nodeId===A.id,Q=J&&a?.diagramIndex===e&&a.nodeId===A.id,Be=(Number(le.strokeWidth)||2)+(J?2:0),X=$e(A,j,O,_,te),ee=lt(X.textBounds,A),Te=A.shape==="text";return[\`<g class="docdiagram-node\${J?" docdiagram-node-selected":""}" data-diagram-index="\${e}" data-node-id="\${D(A.id)}">\`,Ht(X,le,Be,A.strokeType,S.background.fill),ce?Qn(ce,X.bodyMarkup,le,Be,\`docdiagram-callout-mask-\${e}-\${H}\`):"",Q?\`<foreignObject class="docdiagram-inline-editor-host" x="\${X.textBounds.x}" y="\${X.textBounds.y}" width="\${X.textBounds.width}" height="\${X.textBounds.height}"><textarea class="docdiagram-inline-editor docdiagram-inline-editor-node" aria-label="Edit node label. Press Enter for a new line. Press Control or Command plus Enter to save. Press Escape to cancel.">\${D(A.label)}</textarea></foreignObject>\`:Te?dr(X.textBounds,A,le.text||""):De(ee.centerX,ee.labelStartY,ee.labelLines,ee.labelLineHeight,"docdiagram-node-label",le.text||"",ee.textAnchor),!Q&&!Te&&ee.subtitleLines.length?De(ee.centerX,ee.subtitleStartY,ee.subtitleLines,ee.subtitleLineHeight,"docdiagram-node-subtitle",le.text||"",ee.textAnchor):"",J&&f&&!Q?[["top-left",j-7,O-7],["top-right",j+_-7,O-7],["bottom-left",j-7,O+te-7],["bottom-right",j+_-7,O+te-7]].map(([K,Ce,et])=>\`<rect class="docdiagram-resize-handle" data-resize-corner="\${K}" x="\${Ce}" y="\${et}" width="14" height="14" rx="3"/>\`).join(""):"",J&&f&&!Q?ne.map(K=>{let Ce=X.anchors[K];return\`<circle class="docdiagram-connection-port" data-anchor="\${K}" cx="\${Ce.x}" cy="\${Ce.y}" r="7" aria-label="\${K} connection port"/>\`}).join(""):"",J&&f&&!Q&&A.arrow?\`<circle class="docdiagram-callout-handle" data-diagram-index="\${e}" data-node-id="\${D(A.id)}" cx="\${A.arrow.x}" cy="\${A.arrow.y}" r="7" aria-label="Callout pointer target"/>\`:"","</g>"].join("")}).join(""),F=Number(t.canvas.width)||1e3,$=Number(t.canvas.height)||560,T=o.expandedDiagramIndex===e,B=o.diagramViewportHeights.get(e),M=B&&!T?\` style="box-sizing: border-box; height: \${B}px; min-height: 0"\`:"",P=u.get(e)||{x:0,y:0},N=\`width: \${d.get(e)||100}%; transform: translate(\${P.x}px, \${P.y}px)\`,I=Yt(t,e,"Architecture diagram",r);return[\`<figure\${Ut(r)} data-diagram-index="\${e}" data-diagram-type="flowchart" data-editing="\${f}" data-expanded="\${T}"\${M}>\`,n(e,"flowchart",o,t.layout!==void 0),\`<svg viewBox="0 0 \${F} \${$}" \${I.attributes} data-diagram-index="\${e}" style="\${N}">\`,I.metadata,\`<defs>\${w}\${v.join("")}\${g.join("")}</defs>\`,E,b,l?.diagramIndex===e?\`<path class="docdiagram-connection-preview\${l.invalid?" docdiagram-connection-invalid":""}" d="\${je(l.start,l.current,l.sourceAnchor,l.targetAnchor||l.sourceAnchor,"straight").path}"/>\`:"",y.join(""),"</svg>",Wt(r,Ee),"</figure>"].join("")}function ur(t,e,o,n,r){let i=ht(t,o.documentTheme),s=Number(t.canvas?.width)||1e3,a=Number(t.canvas?.height)||560,c=t.participants||[],l=t.messages||[],d=t.activations||[],u=t.notes||[],f=t.groups||[],p=90,h=90,m=28,g=Number(t.canvas?.participantSize?.width)||180,y=Number(t.canvas?.participantSize?.height)||42,S=Number(t.canvas?.participantSpacing)||220,w=16,b=74+Math.max(0,...c.filter(k=>k.kind==="actor").map(k=>he(k.label||"").length-1))*w,v=48,E=16,F=16,$=15,T=12,B=26,M=28,P=40,N=22,I=o.expandedDiagramIndex===e,A=o.diagramViewportHeights.get(e),C=A&&!I?\` style="box-sizing: border-box; height: \${A}px; min-height: 0"\`:"",H=\`docdiagram-sequence-arrow-\${e}\`,j=Yt(t,e,"Sequence diagram",r),O=m+b+12,_=c[0],te=c[c.length-1],ve=Number(_?.size?.width)||g,fe=Number(te?.size?.width)||g,se=c.length>1?ve/2+S*(c.length-1)+fe/2:g+p+h,ce=Math.max(s,se,p+h),de=new Map;c.forEach((k,L)=>{de.set(k.id,c.length===1?ce/2:ve/2+S*L)});let le=O+40,J=[],Q=[],Be=[],X=[],ee=[],Te=new Map;u.forEach((k,L)=>{let q=Number(k.after);if(!Number.isFinite(q)||q<1){ee.push({note:k,sourceIndex:L});return}let U=Te.get(q)||[];U.push({note:k,sourceIndex:L}),Te.set(q,U)});let K=O+24,Ce=(k,L)=>{let q=he(k.label||""),U=Math.max(0,...q.map(Ir=>Ir.length)),re=Math.max(160,Number(k.size?.width)||0,U*7.2+32),be=Math.max(v,q.length*F+24,Number(k.size?.height)||0),ie=de.get(k.at||"")||ce/2,W=Math.min(ce-re/2-24,Math.max(re/2+24,ie)),ae=K;return K=ae+be+E,{...k,lines:q,x:W-re/2,y:ae,width:re,height:be,sourceIndex:L}};ee.forEach(k=>Q.push(Ce(k.note,k.sourceIndex))),l.forEach((k,L)=>{let q=L+1;f.filter(W=>Number(W.from)===q).forEach(W=>{let ae={label:W.label,from:Number(W.from),to:Number(W.to),startY:K,endY:K,depth:X.length};K=ae.startY+P,X.push(ae),Be.push(ae)});let U=he(k.label||""),re=K,be=Math.max(1,U.length)*$,ie=re+be+T;J.push({...k,index:L,y:ie,lines:U,labelTop:re}),K=ie+B+(k.from===k.to?M:0),(Te.get(q)||[]).forEach(W=>{Q.push(Ce(W.note,W.sourceIndex))});for(let W=X.length-1;W>=0;W-=1)X[W].to>q||(X[W].endY=K,K+=N,X.splice(W,1))}),X.forEach(k=>{k.endY=K});let et=Math.max(O+140,K+8,Q.length?Q[Q.length-1].y+Q[Q.length-1].height:0,J.length?J[J.length-1].y+44:le,...Be.map(k=>k.endY+12)),ut=Math.max(a,et+56),ro=ut-36,Ar=d.map((k,L)=>({participantId:k.participant,depth:d.slice(0,L).filter(q=>q.participant===k.participant&&q.from<=k.from&&q.to>=k.from).length,startY:(J[k.from-1]?.y||le)-10,endY:(J[k.to-1]?.y||le)+18})),Mr=c.map(k=>{let L=de.get(k.id)||0,q=he(k.label||""),U=nt(t,k,o.documentTheme,o.documentColorScheme),re=Number(k.size?.width)||g,be=Number(k.size?.height)||y;if(k.kind==="actor"){let ie=m+10,W=ie+18,ae=W+18;return[\`<g class="docdiagram-sequence-participant docdiagram-sequence-actor" data-diagram-index="\${e}" data-participant-id="\${D(k.id)}">\`,\`<circle cx="\${L}" cy="\${ie}" r="8" fill="none" stroke="\${D(U.stroke||"")}" stroke-width="\${Number(U.strokeWidth)||2}"/>\`,\`<path d="M \${L} \${ie+8} V \${ae} M \${L-14} \${W} H \${L+14} M \${L} \${ae} L \${L-12} \${ae+18} M \${L} \${ae} L \${L+12} \${ae+18}" fill="none" stroke="\${D(U.stroke||"")}" stroke-width="\${Number(U.strokeWidth)||2}" stroke-linecap="round" stroke-linejoin="round"/>\`,De(L,m+b-4-(q.length-1)*w,q,w,"docdiagram-node-label",U.text||""),"</g>"].join("")}return[\`<g class="docdiagram-sequence-participant" data-diagram-index="\${e}" data-participant-id="\${D(k.id)}">\`,\`<rect x="\${L-re/2}" y="\${m}" width="\${re}" height="\${be}" rx="12" fill="\${D(U.fill||"")}" stroke="\${D(U.stroke||"")}" stroke-width="\${Number(U.strokeWidth)||2}"/>\`,De(L,m+be/2+6-(q.length-1)*w/2,q,w,"docdiagram-node-label",U.text||""),"</g>"].join("")}).join(""),Tr=c.map(k=>{let L=de.get(k.id)||0;return\`<path class="docdiagram-sequence-lifeline" d="M \${L} \${O} L \${L} \${ro}" fill="none" stroke="\${D(i.edge.stroke)}" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.35"/>\`}).join(""),Zo=Be.map(k=>{let L=42+k.depth*14,q=Math.min(260,Math.max(110,String(k.label||"").length*8+28));return{group:k,inset:L,labelWidth:q}}),Cr=Zo.map(({group:k,inset:L})=>['<g class="docdiagram-sequence-group">',\`<rect x="\${L}" y="\${k.startY}" width="\${Math.max(60,ce-L*2)}" height="\${Math.max(40,k.endY-k.startY)}" rx="12" fill="none" stroke="\${D(i.edge.stroke)}" stroke-width="1.5" stroke-dasharray="10 6" opacity="0.45"/>\`,"</g>"].join("")).join(""),Lr=Zo.map(({group:k,inset:L,labelWidth:q})=>['<g class="docdiagram-sequence-group-label">',\`<rect x="\${L+12}" y="\${k.startY-12}" width="\${q}" height="24" rx="6" fill="\${D(i.node.fill)}" stroke="\${D(i.edge.stroke)}" stroke-width="1.5"/>\`,\`<text x="\${L+12+q/2}" y="\${k.startY+5}" text-anchor="middle" class="docdiagram-edge-label" fill="\${D(i.edge.text)}">\${D(k.label||"")}</text>\`,"</g>"].join("")).join(""),Pr=Q.map(k=>{let L=k.y+20,q=nt(t,k,o.documentTheme,o.documentColorScheme);return[\`<g class="docdiagram-sequence-note" data-diagram-index="\${e}" data-note-index="\${k.sourceIndex}">\`,\`<rect x="\${k.x}" y="\${k.y}" width="\${k.width}" height="\${k.height}" rx="10" fill="\${D(q.fill||"")}" stroke="\${D(q.stroke||"")}" stroke-width="\${Number(q.strokeWidth)||2}"/>\`,De(k.x+k.width/2,L,k.lines,F,"docdiagram-node-subtitle",q.text||""),"</g>"].join("")}).join(""),Rr=Ar.map(k=>{let L=de.get(k.participantId)||0,q=k.depth*7,U=12,re=Math.max(20,k.endY-k.startY),be=c.find(W=>W.id===k.participantId),ie=be?nt(t,be,o.documentTheme,o.documentColorScheme):i.node;return\`<rect class="docdiagram-sequence-activation" x="\${L-U/2+q}" y="\${k.startY}" width="\${U}" height="\${re}" rx="4" fill="\${D(ie.fill||"")}" stroke="\${D(ie.stroke||"")}" stroke-width="\${Number(ie.strokeWidth)||2}"/>\`}).join(""),Br=J.map(k=>{let L=de.get(k.from)||0,q=de.get(k.to)||0,U=k.style==="dashed",re=k.lines,be=k.labelTop+12,ie=\` marker-end="url(#\${H})"\`;if(k.from===k.to){let ae=M;return[\`<g class="docdiagram-sequence-message" data-diagram-index="\${e}" data-message-index="\${k.index}">\`,\`<path d="M \${L} \${k.y} L \${L+48} \${k.y} L \${L+48} \${k.y+ae} L \${L} \${k.y+ae}" fill="none" stroke="\${D(i.edge.stroke)}" stroke-width="2"\${ie}\${U?' stroke-dasharray="8 5"':""}/>\`,De(L+48/2,be,re,$,"docdiagram-edge-label",i.edge.text),"</g>"].join("")}return[\`<g class="docdiagram-sequence-message" data-diagram-index="\${e}" data-message-index="\${k.index}">\`,\`<path d="M \${L} \${k.y} L \${q} \${k.y}" fill="none" stroke="\${D(i.edge.stroke)}" stroke-width="2"\${ie}\${U?' stroke-dasharray="8 5"':""}/>\`,De((L+q)/2,be,re,$,"docdiagram-edge-label",i.edge.text),"</g>"].join("")}).join("");return[\`<figure\${Ut(r)} data-diagram-index="\${e}" data-diagram-type="sequence" data-editing="\${o.editingDiagramIndex===e}" data-expanded="\${I}"\${C}>\`,n(e,"sequence",o),\`<svg viewBox="0 0 \${ce} \${ut}" \${j.attributes} data-diagram-index="\${e}" style="width: \${o.diagramZooms.get(e)||100}%">\`,j.metadata,\`<defs>\${bt(H,"arrow","end",i.edge.stroke,2)}</defs>\`,Cr,Tr,Mr,Rr,Pr,Br,Lr,"</svg>",Wt(r,Ee),"</figure>"].join("")}function mr(t,e,o){try{let n=xe(t,o.colourScheme);return o.onDiagram(e,n),n.type==="sequence"?ur(n,e,o.state,Uo,o.figure):lr(n,e,o.state,Uo,o.figure)}catch(n){let r=n instanceof Error?n.message:String(n);return\`<section class="docdiagram-error"><strong>Diagram could not be rendered.</strong><br>\${D(r)}</section>\`}}function gr(){if(document.querySelector("style[data-docdiagram-runtime-styles]"))return;let t=document.createElement("style");t.dataset.docdiagramRuntimeStyles="true",t.textContent=\`
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
  \`,document.head.append(t)}var _t=class{constructor(e,o){this.state=e;this.outputElement=o}closeDocumentMenu(){let e=document.querySelector(".docdiagram-menu"),o=document.querySelector(".docdiagram-menu-toggle");!e||!o||(e.hidden=!0,o.setAttribute("aria-expanded","false"))}closeDiagramExportMenus(){for(let e of document.querySelectorAll(".docdiagram-diagram-export-menu"))e.hidden=!0;for(let e of document.querySelectorAll(".docdiagram-export-toggle"))e.setAttribute("aria-expanded","false")}applyDocumentColourScheme(e){let o=ye(this.state.documentColorScheme,this.state.documentTheme,"background"),n=ye(this.state.documentColorScheme,this.state.documentTheme,"pale"),r=ye(this.state.documentColorScheme,this.state.documentTheme,"neutral"),i=ye(this.state.documentColorScheme,this.state.documentTheme,"accent");!o||!n||!r||!i||(e.style.setProperty("--docdiagram-background",o.fill||""),e.style.setProperty("--docdiagram-border",r.stroke||""),e.style.setProperty("--docdiagram-control-background",n.fill||""),e.style.setProperty("--docdiagram-control-hover",r.fill||""),e.style.setProperty("--docdiagram-code-background",n.fill||""),e.style.setProperty("--docdiagram-text",o.text||""),e.style.setProperty("--docdiagram-muted",r.text||""),e.style.setProperty("--docdiagram-accent",i.stroke||""))}applyPageTheme(e){let o=ye(this.state.documentColorScheme,e,"background");document.documentElement.dataset.docdiagramTheme=e,document.documentElement.dataset.docdiagramExpanded=String(this.state.expandedDiagramIndex!==null),document.documentElement.style.setProperty("--docdiagram-page-background",o?.fill||""),document.documentElement.style.setProperty("--docdiagram-page-text",o?.text||""),document.body&&(document.body.dataset.docdiagramTheme=e)}dockExpandedDiagramToolbar(e){if(this.state.expandedDiagramIndex===null)return;let o=this.outputElement?.querySelector(\`.docdiagram[data-diagram-index="\${this.state.expandedDiagramIndex}"] .docdiagram-diagram-toolbar\`);o&&e.prepend(o)}removeToolbar(){if(this.outputElement)for(;this.outputElement.previousElementSibling?.classList.contains("docdiagram-toolbar");)this.outputElement.previousElementSibling.remove()}};function hr(t){return t instanceof Element&&t.matches("input, textarea, select, [contenteditable]")}var Xt=class{constructor(e){this.host=e;this.viewportRefitTimer=null}bind(){globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.addEventListener("change",()=>{this.host.isAutoTheme()&&this.host.renderDocument()}),globalThis.addEventListener("resize",()=>{this.viewportRefitTimer!==null&&clearTimeout(this.viewportRefitTimer),this.viewportRefitTimer=setTimeout(()=>{this.viewportRefitTimer=null,this.host.refitDiagramViewports()},150)}),globalThis.addEventListener("beforeunload",e=>{this.host.hasUnsavedChanges()&&(e.preventDefault(),e.returnValue="")}),document.addEventListener("keydown",e=>this.handleKeydown(e)),document.addEventListener("pointerdown",e=>this.handlePointerDown(e)),this.host.outputElement.addEventListener("dblclick",e=>{e.target instanceof Element&&e.target.closest("button, input, textarea, select, [contenteditable]")||this.host.revealSource(globalThis.getSelection?.()?.toString()||"")})}handleKeydown(e){if((e.metaKey||e.ctrlKey)&&e.shiftKey&&e.key.toLowerCase()==="e"&&(this.host.isSourceEditorOpen()||!hr(e.target))){e.preventDefault(),this.host.toggleSourceEditor();return}if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="s"){e.preventDefault(),this.host.downloadDocument();return}if(e.key==="Escape"){this.host.closeDocumentMenu();let o=this.host.getExpandedDiagramIndex();!e.defaultPrevented&&!hr(e.target)&&o!==null&&(e.preventDefault(),this.host.toggleDiagramExpansion(o))}}handlePointerDown(e){let o=document.activeElement;o instanceof HTMLTextAreaElement&&o.matches(".docdiagram-inline-editor")&&!(e.target instanceof Node&&o.contains(e.target))&&o.blur();let n=document.querySelector(".docdiagram-toolbar"),r=e.target instanceof Element&&e.target.closest(".docdiagram-diagram-toolbar")!==null;n&&e.target instanceof Node&&(!n.contains(e.target)||r)&&this.host.closeDocumentMenu(),e.target instanceof Node&&!(e.target instanceof Element&&e.target.closest(".docdiagram-diagram-export"))&&this.host.closeDiagramExportMenus(),!(!(e.target instanceof Element)||e.target.closest(".docdiagram-toolbar, .docdiagram-node, .docdiagram-edge-group, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-inline-editor, .docdiagram-sequence-participant, .docdiagram-sequence-note, .docdiagram-sequence-message")||!this.host.hasSelection())&&this.host.clearSelection()}};function pr(){return{diagramModels:[],editingDiagramIndex:null,selectedNode:null,selectedEdge:null,selectedSequenceElement:null,editingNode:null,editingEdge:null,connectionDrag:null,documentTheme:"light",documentThemeSetting:"auto",documentColorScheme:"classic",documentFormat:"centered",documentDoctype:"document",editSessionDiagram:null,expandedDiagramIndex:null,diagramZooms:new Map,diagramCameraOffsets:new Map,diagramViewportHeights:new Map}}function Ze(t){t.selectedNode=null,t.selectedEdge=null,t.selectedSequenceElement=null,t.editingNode=null,t.editingEdge=null}function Je(t,e){return t.editingDiagramIndex===e}function Se(t,e){return t.target instanceof Element?t.target.closest(e):null}function pe(t,e){let o=t.diagramModels[e];return o?.type==="flowchart"?o:null}function Y(t){return Number(t)}function ka(t,e){let o=t.getBoundingClientRect(),n=18;return e.clientX>=o.right-n&&e.clientY>=o.bottom-n}function Wo(t,e){return(Number(Ge(t,e).strokeWidth)||2)+2}var Kt=class{constructor(e){this.host=e;this.editingShortcutsBound=!1}enableCanvasPanning(){for(let e of this.host.outputElement.querySelectorAll(".docdiagram")){let o=e.querySelector("svg");o&&(e.addEventListener("pointerdown",n=>{(n.target===e||n.target===o)&&!ka(e,n)&&this.beginCanvasPan(o,n)}),e.addEventListener("wheel",n=>this.moveCanvasWithWheel(o,n),{passive:!1}))}}moveCanvasWithWheel(e,o){o.preventDefault();let n=Y(e.dataset.diagramIndex),r=this.host.state.diagramCameraOffsets.get(n)||{x:0,y:0};if(!o.ctrlKey&&!o.metaKey){let u=Tt(o.deltaY,o.deltaMode),f=Tt(o.deltaX,o.deltaMode);this.setCameraOffset(e,n,{x:r.x-(o.shiftKey&&!f?u:f),y:r.y-(o.shiftKey&&!f?0:u)});return}let i=this.host.state.diagramZooms.get(n)||100,s=vn(i,o.deltaY,o.deltaMode);if(s===i)return;let a=e.getBoundingClientRect(),c=a.width?(o.clientX-a.left)/a.width:.5,l=a.height?(o.clientY-a.top)/a.height:.5;this.host.state.diagramZooms.set(n,s),e.style.width=\`\${s}%\`;let d=e.getBoundingClientRect();this.setCameraOffset(e,n,{x:r.x+o.clientX-(d.left+c*d.width),y:r.y+o.clientY-(d.top+l*d.height)})}setCameraOffset(e,o,n){this.host.state.diagramCameraOffsets.set(o,n),e.style.transform=\`translate(\${n.x}px, \${n.y}px)\`}enableSequenceSelection(){for(let e of this.host.outputElement.querySelectorAll('.docdiagram[data-diagram-type="sequence"] svg'))e.addEventListener("click",o=>{if(!Je(this.host.state,Y(e.dataset.diagramIndex)))return;let n=Se(o,".docdiagram-sequence-participant"),r=Se(o,".docdiagram-sequence-note"),i=Se(o,".docdiagram-sequence-message");n?this.host.state.selectedSequenceElement={diagramIndex:Y(n.getAttribute("data-diagram-index")||void 0),kind:"participant",id:n.getAttribute("data-participant-id")||""}:r?this.host.state.selectedSequenceElement={diagramIndex:Y(r.getAttribute("data-diagram-index")||void 0),kind:"note",index:Y(r.getAttribute("data-note-index")||void 0)}:i?this.host.state.selectedSequenceElement={diagramIndex:Y(i.getAttribute("data-diagram-index")||void 0),kind:"message",index:Y(i.getAttribute("data-message-index")||void 0)}:this.host.state.selectedSequenceElement=null,this.host.state.selectedNode=null,this.host.state.selectedEdge=null,this.host.renderDocument()})}enableEditing(){for(let e of this.host.outputElement.querySelectorAll(".docdiagram svg"))Je(this.host.state,Y(e.dataset.diagramIndex))&&(e.addEventListener("click",o=>this.handleDiagramClick(e,o)),e.addEventListener("pointerdown",o=>this.handleDiagramPointerDown(e,o)));for(let e of this.host.outputElement.querySelectorAll(".docdiagram-inline-editor"))this.wireInlineEditor(e);this.editingShortcutsBound||(this.editingShortcutsBound=!0,document.addEventListener("keydown",e=>{if(this.host.state.editingDiagramIndex===null)return;let o=document.activeElement;o instanceof Element&&o.matches("input, textarea, select, [contenteditable]")||((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="d"&&this.host.state.selectedNode?(e.preventDefault(),this.duplicateSelectedNode()):(e.key==="Delete"||e.key==="Backspace")&&(this.host.state.selectedNode||this.host.state.selectedEdge)&&(e.preventDefault(),this.deleteSelected()))},!0))}selectNode(e,o){this.host.state.selectedNode={diagramIndex:e,nodeId:o},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}selectEdge(e,o){this.host.state.selectedEdge={diagramIndex:e,edgeIndex:o},this.host.state.selectedNode=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}handleDiagramClick(e,o){if(Se(o,".docdiagram-inline-editor"))return;let n=Se(o,".docdiagram-node");if(n){this.selectNode(Y(n.getAttribute("data-diagram-index")||void 0),n.getAttribute("data-node-id")||"");return}let r=Se(o,".docdiagram-edge-group");if(r){let i=Y(r.getAttribute("data-diagram-index")||void 0),s=Y(r.getAttribute("data-edge-index")||void 0),a=this.host.state.selectedEdge?.diagramIndex===i&&this.host.state.selectedEdge.edgeIndex===s,c=this.host.state.editingEdge?.diagramIndex===i&&this.host.state.editingEdge.edgeIndex===s;a&&!c?(this.host.state.editingEdge={diagramIndex:i,edgeIndex:s},this.host.renderDocument()):this.selectEdge(i,s);return}(this.host.state.selectedNode||this.host.state.selectedEdge)&&this.clearSelection()}handleDiagramPointerDown(e,o){let n=Se(o,".docdiagram-edge-waypoint");if(n){this.moveEdgeWaypoint(e,o,n);return}let r=Se(o,".docdiagram-callout-handle");if(r){this.moveNodeCalloutPointer(e,o,r);return}let i=Se(o,".docdiagram-connection-port");if(i){let E=i.closest(".docdiagram-node"),F=Y(E?.getAttribute("data-diagram-index")||e.dataset.diagramIndex),$=i.getAttribute("data-node-id")||E?.getAttribute("data-node-id")||"",T=pe(this.host.state,F),B=T?me(T,$)?.node:null,M=i.getAttribute("data-anchor")||"";if(B&&ne.includes(M)){let P=M;this.beginConnectionDrag(e,o,{diagramIndex:F,sourceNodeId:$,sourceAnchor:P,start:this.getNodePortPoint(B,P),current:this.getNodePortPoint(B,P),invalid:!1})}return}let s=Se(o,".docdiagram-edge-endpoint");if(s){let E=Y(s.getAttribute("data-diagram-index")||void 0),F=Y(s.getAttribute("data-edge-index")||void 0),$=pe(this.host.state,E),T=$?.edges[F],B=s.getAttribute("data-endpoint");if(!T||B!=="source"&&B!=="target")return;let M=B==="source"?T.source:T.target,P=B==="source"?T.sourceAnchor:T.targetAnchor,N=$?me($,M)?.node:null;if(!N||!P)return;this.beginConnectionDrag(e,o,{diagramIndex:E,edgeIndex:F,endpoint:B,reconnect:!0,sourceNodeId:M,sourceAnchor:P,start:this.getNodePortPoint(N,P),current:this.getNodePortPoint(N,P),invalid:!1});return}let a=Se(o,".docdiagram-resize-handle");if(a){let E=a.closest(".docdiagram-node"),F=a.getAttribute("data-resize-corner");E&&(F==="top-left"||F==="top-right"||F==="bottom-left"||F==="bottom-right")&&this.resizeNode(e,o,E,F);return}if(Se(o,".docdiagram-inline-editor"))return;let c=Se(o,".docdiagram-node");if(!c)return;let l=Y(c.getAttribute("data-diagram-index")||void 0),d=c.getAttribute("data-node-id")||"",u=pe(this.host.state,l);if(!u)return;let f=new G(u),p=f.getById(d),h=p?.node;if(!p||!h)return;o.preventDefault();let m=this.svgPoint(e,o),g=p.bounds,y=p.parent?f.getByNode(p.parent)?.position||{x:0,y:0}:{x:0,y:0},S=oe(u),w=!1;this.capturePointer(e,o);let b=E=>{let F=this.svgPoint(e,E),$=R(g.x+F.x-m.x,S),T=R(g.y+F.y-m.y,S);w=w||$!==g.x||T!==g.y,c.setAttribute("transform",\`translate(\${$-g.x} \${T-g.y})\`),h.arrow&&this.updateNodeCalloutMarkup(c,g,{x:h.arrow.x-($-g.x),y:h.arrow.y-(T-g.y)},$e(h,g.x,g.y,g.width,g.height).bodyMarkup,Wo(u,h)),h.position={...h.position,x:$-y.x,y:T-y.y}},v=E=>{this.releasePointer(e,E),e.removeEventListener("pointermove",b),e.removeEventListener("pointerup",v),e.removeEventListener("pointercancel",v),w?(an(u,d),it(u,h),this.host.state.selectedNode={diagramIndex:l,nodeId:d},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.persistDiagramModels(),this.host.renderDocument()):this.host.state.selectedNode?.diagramIndex===l&&this.host.state.selectedNode.nodeId===d?(this.host.state.editingNode={diagramIndex:l,nodeId:d},this.host.renderDocument()):this.selectNode(l,d)};e.addEventListener("pointermove",b),e.addEventListener("pointerup",v),e.addEventListener("pointercancel",v)}getSelectedNode(){let e=this.host.state.selectedNode,o=e?pe(this.host.state,e.diagramIndex):null;return e&&o&&me(o,e.nodeId)?.node||null}getSelectedEdge(){let e=this.host.state.selectedEdge,o=e?pe(this.host.state,e.diagramIndex):null;return e&&o?.edges[e.edgeIndex]||null}clearSelection(){this.host.state.selectedNode=null,this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.renderDocument()}deleteSelected(){let e=this.host.state.selectedNode,o=this.host.state.selectedEdge;if(e){let n=pe(this.host.state,e.diagramIndex);if(!n)return;let r=n.edges.filter(i=>i.source===e.nodeId||i.target===e.nodeId);if(r.length&&!globalThis.confirm(\`Delete this node and its \${r.length} attached connector\${r.length===1?"":"s"}?\`))return;Nt(n,e.nodeId)}else if(o){let n=pe(this.host.state,o.diagramIndex);if(!n)return;Ft(n,o.edgeIndex)}else return;Ze(this.host.state),this.host.persistDiagramModels(),this.host.renderDocument()}duplicateSelectedNode(){let e=this.host.state.selectedNode;if(!e)return;let o=pe(this.host.state,e.diagramIndex);if(!o)return;let n=$t(o,e.nodeId);n&&(this.host.state.selectedNode={diagramIndex:e.diagramIndex,nodeId:n.id},this.host.state.selectedEdge=null,this.host.persistDiagramModels(),this.host.renderDocument())}wireInlineEditor(e){let o=!1,n=()=>{if(!o){if(o=!0,e.classList.contains("docdiagram-inline-editor-edge")){let i=this.getSelectedEdge();i&&(Mt(i,e.value),this.host.persistDiagramModels()),this.host.state.editingEdge=null}else{let i=this.getSelectedNode();i&&(At(i,e.value),this.host.persistDiagramModels()),this.host.state.editingNode=null}this.host.renderDocument()}},r=()=>{o||(o=!0,e.classList.contains("docdiagram-inline-editor-edge")?this.host.state.editingEdge=null:this.host.state.editingNode=null,this.host.renderDocument())};e.addEventListener("pointerdown",i=>i.stopPropagation()),e.addEventListener("click",i=>i.stopPropagation()),e.addEventListener("keydown",i=>{i.key==="Enter"&&(i.metaKey||i.ctrlKey)?(i.preventDefault(),n()):i.key==="Escape"&&(i.preventDefault(),r())}),e.addEventListener("blur",n,{once:!0}),e.focus(),e.select()}resizeNode(e,o,n,r){o.preventDefault();let i=Y(n.getAttribute("data-diagram-index")||void 0),s=n.getAttribute("data-node-id")||"",a=pe(this.host.state,i),c=a?me(a,s)?.node:null;if(!a||!c)return;let l=this.svgPoint(e,o),d=ho(c),u=!1;this.capturePointer(e,o);let f=h=>{let m=this.svgPoint(e,h);fn(a,c,r,m.x-l.x,m.y-l.y,d);let g=Number(c.size?.width)||190,y=Number(c.size?.height)||80;u=u||g!==d.size.width||y!==d.size.height,this.updateNodeSizeMarkup(n,c,g,y)},p=h=>{this.releasePointer(e,h),e.removeEventListener("pointermove",f),e.removeEventListener("pointerup",p),e.removeEventListener("pointercancel",p),u&&(it(a,c),this.host.state.selectedNode={diagramIndex:i,nodeId:s},this.host.state.selectedEdge=null,this.host.state.editingNode=null,this.host.state.editingEdge=null,this.host.persistDiagramModels(),this.host.renderDocument())};e.addEventListener("pointermove",f),e.addEventListener("pointerup",p),e.addEventListener("pointercancel",p)}updateNodeSizeMarkup(e,o,n,r){let i=pe(this.host.state,Y(e.getAttribute("data-diagram-index")||void 0));if(!i)return;let{x:s,y:a}=rt(i,o),c=e.querySelector(".docdiagram-node-body"),l=e.querySelector(".docdiagram-node-label"),d=e.querySelector(".docdiagram-node-subtitle"),u=e.querySelectorAll(".docdiagram-resize-handle");if(!c)return;let f=Ge(i,o,this.host.state.documentTheme,this.host.state.documentColorScheme),p=ue[this.host.state.documentColorScheme][this.host.state.documentTheme==="dark"?"dark":"light"],h=$e(o,s,a,n,r),m=lt(h.textBounds,o);for(let g of e.querySelectorAll(".docdiagram-node-stroke-gap"))g.remove();for(let g of e.querySelectorAll(".docdiagram-node-detail"))g.remove();c.outerHTML=Ht(h,f,Number(f.strokeWidth)||2,o.strokeType,p.background.fill);for(let g of[l,d])if(g){g.setAttribute("x",String(m.centerX)),g.setAttribute("y",String(g===l?m.labelStartY:m.subtitleStartY)),g.setAttribute("text-anchor",m.textAnchor);for(let y of g.querySelectorAll("tspan"))y.setAttribute("x",String(m.centerX))}for(let g of u){let y=g.getAttribute("data-resize-corner");g.setAttribute("x",String(y?.endsWith("left")?s-7:s+n-7)),g.setAttribute("y",String(y?.startsWith("top")?a-7:a+r-7))}this.updateNodeCalloutMarkup(e,{x:s,y:a,width:n,height:r},o.arrow,h.bodyMarkup,Wo(i,o))}getNodePortPoint(e,o,n){let r=n;if(!r){let i=this.host.state.diagramModels.find(s=>s.type==="flowchart"&&me(s,e.id)?.node===e);if(!i)return{x:0,y:0};r=rt(i,e)}return $e(e,r.x,r.y,r.width,r.height).anchors[o]}addConnectionTargetPorts(e,o){let n=pe(this.host.state,o);if(n)for(let{node:r,bounds:i}of new G(n).entries)for(let s of ne){let a=this.getNodePortPoint(r,s,i),c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("class","docdiagram-connection-port docdiagram-connection-target-port"),c.dataset.nodeId=r.id,c.dataset.anchor=s,c.setAttribute("cx",String(a.x)),c.setAttribute("cy",String(a.y)),c.setAttribute("r","7"),e.append(c)}}beginConnectionDrag(e,o,n){o.preventDefault(),o.stopPropagation(),this.host.state.connectionDrag={...n,current:this.svgPoint(e,o),invalid:!1},this.addConnectionTargetPorts(e,n.diagramIndex);let r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("class","docdiagram-connection-preview"),e.append(r),this.capturePointer(e,o);let i=c=>{let d=document.elementFromPoint(c.clientX,c.clientY)?.closest(".docdiagram-connection-port");return d||[...e.querySelectorAll(".docdiagram-connection-port")].find(u=>{let f=u.getBoundingClientRect();return c.clientX>=f.left&&c.clientX<=f.right&&c.clientY>=f.top&&c.clientY<=f.bottom})||null},s=c=>{let l=this.host.state.connectionDrag;if(!l)return;let d=this.svgPoint(e,c),u=i(c);l.current=d,l.invalid=!u;let f=u?.getAttribute("data-anchor")||l.sourceAnchor;r.setAttribute("d",je(l.start,d,l.sourceAnchor,f,"straight").path),r.classList.toggle("docdiagram-connection-invalid",l.invalid)},a=c=>{this.releasePointer(e,c),e.removeEventListener("pointermove",s),e.removeEventListener("pointerup",a),e.removeEventListener("pointercancel",a);let l=i(c),d=this.host.state.connectionDrag;if(this.host.state.connectionDrag=null,l&&d){let u=pe(this.host.state,d.diagramIndex),f=l.getAttribute("data-node-id")||l.closest(".docdiagram-node")?.getAttribute("data-node-id"),p=l.getAttribute("data-anchor")||"";if(u&&f){if(d.reconnect&&d.edgeIndex!==void 0&&d.endpoint){let h=u.edges[d.edgeIndex];h&&(un(h,d.endpoint,f,p),this.host.state.selectedEdge={diagramIndex:d.diagramIndex,edgeIndex:d.edgeIndex},this.host.state.selectedNode=null)}else{let h=ln(u,d.sourceNodeId,d.sourceAnchor,f,p);this.host.state.selectedEdge={diagramIndex:d.diagramIndex,edgeIndex:u.edges.indexOf(h)},this.host.state.selectedNode=null}this.host.persistDiagramModels()}}this.host.renderDocument()};e.addEventListener("pointermove",s),e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a)}beginCanvasPan(e,o){let n=e.closest(".docdiagram");if(!n)return;o.preventDefault();let r=Y(e.dataset.diagramIndex),i=this.host.state.diagramCameraOffsets.get(r)||{x:0,y:0},s={clientX:o.clientX,clientY:o.clientY,offset:i};n.classList.add("docdiagram-panning"),this.capturePointer(e,o);let a=l=>{let d={x:s.offset.x+l.clientX-s.clientX,y:s.offset.y+l.clientY-s.clientY};this.host.state.diagramCameraOffsets.set(r,d),e.style.transform=\`translate(\${d.x}px, \${d.y}px)\`},c=l=>{this.releasePointer(e,l),n.classList.remove("docdiagram-panning"),e.removeEventListener("pointermove",a),e.removeEventListener("pointerup",c),e.removeEventListener("pointercancel",c)};e.addEventListener("pointermove",a),e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c)}moveEdgeWaypoint(e,o,n){let r=Y(n.getAttribute("data-diagram-index")||void 0),i=Y(n.getAttribute("data-edge-index")||void 0),s=pe(this.host.state,r),a=s?.edges[i];if(!s||!a)return;let c=new G(s),l=c.getById(a.source),d=c.getById(a.target);if(!l||!d)return;o.preventDefault(),o.stopPropagation(),this.capturePointer(e,o);let u=p=>{let h=this.svgPoint(e,p);a.waypoint={x:R(h.x,oe(s)),y:R(h.y,oe(s))};let m=a.sourceAnchor||"right",g=a.targetAnchor||"left",y=this.getNodePortPoint(l.node,m,l.bounds),S=this.getNodePortPoint(d.node,g,d.bounds),w=je(y,S,m,g,a.route||"orthogonal",a.waypoint),b=Lo(a.waypoint,!0);n.setAttribute("x",String(b.x)),n.setAttribute("y",String(b.y)),n.setAttribute("width",String(b.size)),n.setAttribute("height",String(b.size)),n.setAttribute("rx",String(b.radius)),n.setAttribute("transform",b.transform),n.setAttribute("data-anchored","true");let v=e.querySelector(\`.docdiagram-edge-group[data-diagram-index="\${r}"][data-edge-index="\${i}"]\`);v?.querySelector(".docdiagram-edge")?.setAttribute("d",w.path),v?.querySelector(".docdiagram-edge-hit")?.setAttribute("d",w.hitPath)},f=p=>{this.releasePointer(e,p),e.removeEventListener("pointermove",u),e.removeEventListener("pointerup",f),e.removeEventListener("pointercancel",f),this.host.persistDiagramModels(),this.host.renderDocument()};e.addEventListener("pointermove",u),e.addEventListener("pointerup",f),e.addEventListener("pointercancel",f)}moveNodeCalloutPointer(e,o,n){let r=Y(n.getAttribute("data-diagram-index")||void 0),i=n.getAttribute("data-node-id")||"",s=pe(this.host.state,r),a=s?me(s,i)?.node:null,c=n.closest(".docdiagram-node");if(!s||!a||!c)return;o.preventDefault(),o.stopPropagation(),this.capturePointer(e,o);let l=oe(s),d=rt(s,a),u=$e(a,d.x,d.y,d.width,d.height),f=Wo(s,a),p=m=>{let g=this.svgPoint(e,m),y={x:R(g.x,l),y:R(g.y,l)};fo(a,y),this.updateNodeCalloutMarkup(c,d,y,u.bodyMarkup,f)},h=m=>{this.releasePointer(e,m),e.removeEventListener("pointermove",p),e.removeEventListener("pointerup",h),e.removeEventListener("pointercancel",h),it(s,a),this.host.persistDiagramModels(),this.host.renderDocument()};e.addEventListener("pointermove",p),e.addEventListener("pointerup",h),e.addEventListener("pointercancel",h)}updateNodeCalloutMarkup(e,o,n,r,i){let s=n?jt(o,n):null;if(!s)return;for(let d of e.querySelectorAll(".docdiagram-node-callout, .docdiagram-node-callout-outline"))d.setAttribute("points",s.polygonPoints);let a=e.querySelector(".docdiagram-node-callout-mask-body");a&&(a.outerHTML=Po(r));let c=Ro(s,i);for(let d of[e.querySelector("mask"),e.querySelector(".docdiagram-node-callout-mask-region")])for(let[u,f]of Object.entries(c))d?.setAttribute(u,String(f));let l=e.querySelector(".docdiagram-callout-handle");l?.setAttribute("cx",String(n?.x??0)),l?.setAttribute("cy",String(n?.y??0))}svgPoint(e,o){let n=e.getBoundingClientRect(),r=e.viewBox.baseVal;return{x:(o.clientX-n.left)*r.width/n.width,y:(o.clientY-n.top)*r.height/n.height}}capturePointer(e,o){o.isTrusted&&e.setPointerCapture(o.pointerId)}releasePointer(e,o){o.isTrusted&&e.hasPointerCapture(o.pointerId)&&e.releasePointerCapture(o.pointerId)}};function Da(t){return\`<select class="docdiagram-inspector-node-stroke-type" aria-label="Stroke type">\${Ie.map(e=>\`<option value="\${e}"\${e===t?" selected":""}>\${e}</option>\`).join("")}</select>\`}function br(t,e,o,n){let r=ue[t]?.[e==="dark"?"dark":"light"];return[[...ke.slice(0,5),"none"],ke.slice(5,8),ke.slice(8,13)].map(i=>\`<div class="docdiagram-palette-group">\${i.map(s=>{let a=r?.[s];return\`<label class="docdiagram-palette-swatch"><input type="radio" name="\${n}" value="\${s}"\${s===o?" checked":""}><span style="--docdiagram-swatch-fill:\${a?.fill};--docdiagram-swatch-stroke:\${a?.stroke};--docdiagram-swatch-text:\${a?.text}">\${a?.label||s}</span></label>\`}).join("")}</div>\`).join("")}function yr(t,e,o="classic",n="light"){let r=oe(t),i=Ge(t,e,n,o),s=Number(e.size?.width)||190,a=Number(e.size?.height)||80,c=e.shape==="document"?{width:140,height:84}:{width:120,height:60},l=r?Math.ceil(c.width/r)*r:c.width,d=r?Math.ceil(c.height/r)*r:c.height,u=r||1,f=e.palette||"accent";return[\`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-inspector-label docdiagram-inspector-textarea" rows="2">\${D(e.label)}</textarea></label>\`,\`<label class="docdiagram-field docdiagram-field-wide">Subtitle<textarea class="docdiagram-inspector-subtitle docdiagram-inspector-textarea" rows="2">\${D(e.subtitle||"")}</textarea></label>\`,\`<div class="docdiagram-field docdiagram-field-wide"><span>Palette</span><div class="docdiagram-inspector-palette">\${br(o,n,f,"node-palette")}</div></div>\`,\`<label class="docdiagram-inspector-shape-row"><span>Shape</span><select class="docdiagram-inspector-shape">\${tt.map(p=>\`<option value="\${p}"\${p===e.shape?" selected":""}>\${p}</option>\`).join("")}</select></label>\`,\`<div class="docdiagram-inspector-row docdiagram-inspector-colour-row"><span>Fill</span><input type="color" class="docdiagram-inspector-fill" value="\${D(i.fill||"")}"></div>\`,\`<div class="docdiagram-inspector-row docdiagram-inspector-stroke-row"><span>Stroke</span><input type="color" class="docdiagram-inspector-stroke" value="\${D(i.stroke||"")}">\${Da(e.strokeType||"solid")}<label class="docdiagram-visually-hidden" for="docdiagram-inspector-stroke-width">Stroke width</label><input id="docdiagram-inspector-stroke-width" type="number" aria-label="Stroke width" class="docdiagram-inspector-stroke-width" value="\${Number(i.strokeWidth)||2}" min="1" step="1"></div>\`,\`<div class="docdiagram-inspector-row docdiagram-inspector-colour-row"><span>Text</span><input type="color" class="docdiagram-inspector-text" value="\${D(i.text||"")}"></div>\`,\`<div class="docdiagram-inspector-paired-controls"><span>Align</span><label class="docdiagram-visually-hidden" for="docdiagram-inspector-text-v-align">Vertical alignment</label><select id="docdiagram-inspector-text-v-align" class="docdiagram-inspector-text-v-align" aria-label="Vertical alignment"><option value="top"\${e.textVAlign==="top"?" selected":""}>Top</option><option value="center"\${e.textVAlign!=="top"?" selected":""}>Middle</option></select><label class="docdiagram-visually-hidden" for="docdiagram-inspector-text-h-align">Horizontal alignment</label><select id="docdiagram-inspector-text-h-align" class="docdiagram-inspector-text-h-align" aria-label="Horizontal alignment"><option value="left"\${e.textHAlign==="left"?" selected":""}>Left</option><option value="center"\${e.textHAlign!=="left"&&e.textHAlign!=="right"?" selected":""}>Center</option><option value="right"\${e.textHAlign==="right"?" selected":""}>Right</option></select><span>Size</span><label class="docdiagram-visually-hidden" for="docdiagram-inspector-width">Width</label><input id="docdiagram-inspector-width" type="number" aria-label="Width" class="docdiagram-inspector-width" value="\${s}" min="\${l}" step="\${u}"><label class="docdiagram-visually-hidden" for="docdiagram-inspector-height">Height</label><input id="docdiagram-inspector-height" type="number" aria-label="Height" class="docdiagram-inspector-height" value="\${a}" min="\${d}" step="\${u}"><span>Callout</span><button type="button" class="docdiagram-inspector-callout">\${e.arrow?"Remove pointer":"Add pointer"}</button><span></span><button type="button" class="docdiagram-inspector-delete">Delete</button><button type="button" class="docdiagram-inspector-duplicate">Duplicate</button></div>\`].join("")}function xr(t,e,o="classic",n="light"){let r=vt(t,e,n,o),i=Number(r.strokeWidth)||2,s=e.route||"orthogonal",a=e.strokeType||"solid",c=e.start||"none",l=e.end||"arrow";return[\`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-inspector-label docdiagram-inspector-textarea" rows="2">\${D(e.label||"")}</textarea></label>\`,\`<label class="docdiagram-field">Route<select class="docdiagram-inspector-route">\${ot.map(d=>\`<option value="\${d}"\${d===s?" selected":""}>\${d}</option>\`).join("")}</select></label>\`,\`<label class="docdiagram-field">Stroke type<select class="docdiagram-inspector-stroke-type">\${Ie.map(d=>\`<option value="\${d}"\${d===a?" selected":""}>\${d}</option>\`).join("")}</select></label>\`,\`<label class="docdiagram-field">Source side<select class="docdiagram-inspector-source-anchor">\${ne.map(d=>\`<option value="\${d}"\${d===e.sourceAnchor?" selected":""}>\${d}</option>\`).join("")}</select></label>\`,\`<label class="docdiagram-field">Target side<select class="docdiagram-inspector-target-anchor">\${ne.map(d=>\`<option value="\${d}"\${d===e.targetAnchor?" selected":""}>\${d}</option>\`).join("")}</select></label>\`,\`<label class="docdiagram-field">Start<select class="docdiagram-inspector-marker-start">\${Fe.map(d=>\`<option value="\${d}"\${d===c?" selected":""}>\${d}</option>\`).join("")}</select></label>\`,\`<label class="docdiagram-field">End<select class="docdiagram-inspector-marker-end">\${Fe.map(d=>\`<option value="\${d}"\${d===l?" selected":""}>\${d}</option>\`).join("")}</select></label>\`,\`<label class="docdiagram-field">Stroke<input type="color" class="docdiagram-inspector-stroke" value="\${D(r.stroke||"")}"></label>\`,\`<label class="docdiagram-field">Label colour<input type="color" class="docdiagram-inspector-text" value="\${D(r.text||"")}"></label>\`,\`<label class="docdiagram-field">Stroke width<input type="number" class="docdiagram-inspector-stroke-width" value="\${i}" min="1" step="1"></label>\`,\`<div class="docdiagram-inspector-actions">\${e.waypoint?'<button type="button" class="docdiagram-inspector-clear-waypoint">Remove waypoint</button>':""}<button type="button" class="docdiagram-inspector-delete">Delete</button></div>\`].join("")}function wr(t,e,o,n="classic",r="light"){let i="from"in o?null:nt(t,o,r,n),s=e.kind!=="message",a=s?o:null;return[\`<label class="docdiagram-field docdiagram-field-wide">Label<textarea class="docdiagram-sequence-inspector-label docdiagram-inspector-textarea" rows="2">\${D(o.label||"")}</textarea></label>\`,e.kind==="message"?\`<label class="docdiagram-field">Style<select class="docdiagram-sequence-inspector-message-style"><option value="solid"\${o.style!=="dashed"?" selected":""}>Solid</option><option value="dashed"\${o.style==="dashed"?" selected":""}>Dashed</option></select></label>\`:"",s?\`<div class="docdiagram-field docdiagram-field-wide"><span>Palette</span><div class="docdiagram-sequence-inspector-palette">\${br(n,r,a?.palette||"accent","sequence-palette")}</div></div>\`:"",s?\`<label class="docdiagram-field">Fill<input type="color" class="docdiagram-sequence-inspector-fill" value="\${D(i?.fill||"")}"></label><label class="docdiagram-field">Border<input type="color" class="docdiagram-sequence-inspector-stroke" value="\${D(i?.stroke||"")}"></label><label class="docdiagram-field">Text<input type="color" class="docdiagram-sequence-inspector-text" value="\${D(i?.text||"")}"></label><label class="docdiagram-field">Width<input type="number" min="1" class="docdiagram-sequence-inspector-width" value="\${Number(a?.size?.width)||""}"></label><label class="docdiagram-field">Height<input type="number" min="1" class="docdiagram-sequence-inspector-height" value="\${Number(a?.size?.height)||""}"></label>\`:""].join("")}function $a(t,e){return t.querySelector(e)}function V(t,e,o){$a(t,e)?.addEventListener("change",n=>{o(n.currentTarget.value)})}function Qe(t,e){e(),t.persistDiagramModels(),t.renderDocument()}function Fa(t,e){e(),t.persistDiagramModels()}function fr(t,e,o,n){t&&t.addEventListener("input",()=>{o(t.value);let r=t.value,i=t.selectionStart,s=t.selectionEnd;n(t,()=>{let a=document.querySelector(e);a&&a.value!==r&&(a.value=r),a?.focus(),a?.setSelectionRange(i,s)})})}function Er(t,e,o,n){let r=null,i=(c,l)=>{globalThis.clearTimeout(r??void 0),r=globalThis.setTimeout(()=>{r=null;let d=document.activeElement===c;t.renderDocument(),d&&l()},250)},s=c=>{let l=t.state.diagramModels[o];if(!l||l.type!=="flowchart")return;let d=me(l,n)?.node;d&&Qe(t,()=>c(l,d))},a=c=>{let l=t.state.diagramModels[o];if(!l||l.type!=="flowchart")return;let d=me(l,n)?.node;d&&Fa(t,()=>c(l,d))};fr(e.querySelector(".docdiagram-inspector-label"),".docdiagram-inspector-label",c=>a((l,d)=>At(d,c)),i),fr(e.querySelector(".docdiagram-inspector-subtitle"),".docdiagram-inspector-subtitle",c=>a((l,d)=>gn(d,c)),i);for(let c of e.querySelectorAll(".docdiagram-inspector-palette input"))c.addEventListener("change",()=>s((l,d)=>go(d,c.value,t.state.documentColorScheme)));V(e,".docdiagram-inspector-shape",c=>s((l,d)=>mn(d,c))),V(e,".docdiagram-inspector-fill",c=>s((l,d)=>pt(d,"fill",c))),V(e,".docdiagram-inspector-stroke",c=>s((l,d)=>pt(d,"stroke",c))),V(e,".docdiagram-inspector-node-stroke-type",c=>s((l,d)=>hn(d,c))),V(e,".docdiagram-inspector-text",c=>s((l,d)=>pt(d,"text",c))),V(e,".docdiagram-inspector-text-v-align",c=>s((l,d)=>mo(d,"textVAlign",c))),V(e,".docdiagram-inspector-text-h-align",c=>s((l,d)=>mo(d,"textHAlign",c))),V(e,".docdiagram-inspector-stroke-width",c=>s((l,d)=>xo(d,c))),V(e,".docdiagram-inspector-width",c=>s((l,d)=>po(l,d,"width",c))),V(e,".docdiagram-inspector-height",c=>s((l,d)=>po(l,d,"height",c))),e.querySelector(".docdiagram-inspector-callout")?.addEventListener("click",()=>{s((c,l)=>wn(c,l))}),e.querySelector(".docdiagram-inspector-delete")?.addEventListener("click",()=>{s((c,l)=>{Nt(c,l.id),t.state.selectedNode=null})}),e.querySelector(".docdiagram-inspector-duplicate")?.addEventListener("click",()=>{s((c,l)=>{let d=$t(c,l.id);d&&(t.state.selectedNode={diagramIndex:o,nodeId:d.id})})})}function Sr(t,e,o,n){let r=i=>{let s=t.state.diagramModels[o];if(!s||s.type!=="flowchart")return;let a=s.edges[n];a&&Qe(t,()=>i(s,a))};V(e,".docdiagram-inspector-label",i=>r((s,a)=>Mt(a,i))),V(e,".docdiagram-inspector-route",i=>r((s,a)=>bn(a,i))),V(e,".docdiagram-inspector-stroke-type",i=>r((s,a)=>yn(a,i))),V(e,".docdiagram-inspector-source-anchor",i=>r((s,a)=>bo(a,"source",i))),V(e,".docdiagram-inspector-target-anchor",i=>r((s,a)=>bo(a,"target",i))),V(e,".docdiagram-inspector-marker-start",i=>r((s,a)=>En(a,i))),V(e,".docdiagram-inspector-marker-end",i=>r((s,a)=>Sn(a,i))),V(e,".docdiagram-inspector-stroke",i=>r((s,a)=>yo(a,"stroke",i))),V(e,".docdiagram-inspector-text",i=>r((s,a)=>yo(a,"text",i))),V(e,".docdiagram-inspector-stroke-width",i=>r((s,a)=>xo(a,i))),e.querySelector(".docdiagram-inspector-clear-waypoint")?.addEventListener("click",()=>{r((i,s)=>xn(s))}),e.querySelector(".docdiagram-inspector-delete")?.addEventListener("click",()=>{r(i=>{Ft(i,n),t.state.selectedEdge=null})})}function vr(t,e,o){let n=t.state.selectedSequenceElement;if(!n)return;if(V(e,".docdiagram-sequence-inspector-label",i=>Qe(t,()=>{o.label=i.trim()||o.label})),n.kind==="message"){V(e,".docdiagram-sequence-inspector-message-style",i=>Qe(t,()=>{Et.includes(i)&&(o.style=i)}));return}let r=o;for(let i of e.querySelectorAll(".docdiagram-sequence-inspector-palette input"))i.addEventListener("change",()=>Qe(t,()=>go(r,i.value,t.state.documentColorScheme)));for(let[i,s]of[[".docdiagram-sequence-inspector-fill","fill"],[".docdiagram-sequence-inspector-stroke","stroke"],[".docdiagram-sequence-inspector-text","text"]])V(e,i,a=>Qe(t,()=>pt(r,s,a)));for(let[i,s]of[[".docdiagram-sequence-inspector-width","width"],[".docdiagram-sequence-inspector-height","height"]])V(e,i,a=>Qe(t,()=>{let c=Number(a);Number.isFinite(c)&&c>0&&(r.size={...r.size,[s]:c})}))}var Na="https://sparkkz-nz.github.io/skryb/docs/reference.html",Yo=192,Aa=96,kr=24,Ma=8e6,Ta={flowchart:["\`\`\`diagram","id: new-flowchart","type: flowchart","canvas:","  auto: true","  grid: 5","nodes:","  - id: first-node","    label: First node","    shape: rounded-rectangle","    position: { x: 80, y: 110 }","  - id: second-node","    label: Second node","    shape: rounded-rectangle","    position: { x: 330, y: 110 }","edges:","  - source: first-node","    target: second-node","    sourceAnchor: right","    targetAnchor: left","\`\`\`"].join(\`
\`),sequence:["\`\`\`diagram","id: new-sequence","type: sequence","participants:","  - id: first-participant","    label: First participant","  - id: second-participant","    label: Second participant","messages:","  - from: first-participant","    to: second-participant","    label: Request","\`\`\`"].join(\`
\`),"diagram-reference":":::diagram { id=diagram-id }",toc:":::toc { depth=3 diagrams=true }",panel:[':::panel { title="New panel" palette=accent }',"Panel content.",":::"].join(\`
\`),grid:[":::grid { columns=2 }",':::panel { title="First panel" }',"First panel content.",":::","",':::panel { title="Second panel" }',"Second panel content.",":::",":::"].join(\`
\`)};function Zt(t,e){let o=new Set([...t.matchAll(/(?:\\bid:\\s*|:::diagram\\s+\\{\\s*id=)(?:"([^"]+)"|([^\\s}\\n#]+))/g)].map(i=>i[1]||i[2])),n=1,r=e;for(;o.has(r);)n+=1,r=\`\${e}-\${n}\`;return r}function Ca(t,e){let o=Ta[t];if(!o)return null;if(t==="flowchart")return o.replace("id: new-flowchart",\`id: \${Zt(e,"new-flowchart")}\`);if(t==="sequence")return o.replace("id: new-sequence",\`id: \${Zt(e,"new-sequence")}\`);if(t==="diagram-reference"){let n=Zt(e,"diagram-reference");return o.replace("diagram-id",n)}return o}function La(t){if(!/<template[^>]*\\bid=["']?source\\b/i.test(t))return t;let o=new DOMParser().parseFromString(t,"text/html").querySelector("template#source");if(!o)throw new Error("That Skryb document has no source template to import from.");return o.content.textContent||""}function Pa(){return new Promise(t=>{let e=document.createElement("input");e.type="file",e.accept=".html,.htm,.md,.markdown,text/html,text/markdown",e.hidden=!0;let o=n=>{e.remove(),t(n)};e.addEventListener("change",()=>o(e.files?.[0]||null),{once:!0}),e.addEventListener("cancel",()=>o(null),{once:!0}),document.body.append(e),e.click()})}function Ra(t){if(t.length<=1)return t[0]||null;let e=t.map((r,i)=>\`\${i+1}. \${r.id||"(no id)"}\`).join(\`
\`),o=globalThis.prompt(\`That file has \${t.length} diagrams. Import which one?

\${e}\`,"1");if(o===null)return null;let n=Number.parseInt(o.trim(),10);if(!Number.isInteger(n)||n<1||n>t.length)throw new Error(\`Enter a number between 1 and \${t.length}.\`);return t[n-1]}var Jt=class{constructor(e){this.host=e;this.renderTimer=null;this.resizeObserver=null;this.openState=!1;this.draft="";this.error=""}get isOpen(){return this.openState}get hasUnsavedDraft(){return this.openState&&this.draft!==this.host.getSource()}get hasError(){return this.error.length>0}get draftSource(){return this.draft}setError(e){this.error=e,this.updateStatus()}clearError(){this.error=""}open(){globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=null,this.draft=this.host.getSource(),this.error="",this.openState=!0,this.host.stopDiagramEditing(),this.host.renderDocument();let e=()=>this.focus();globalThis.requestAnimationFrame?.(e)??e()}close(){this.flushRender(),!(this.error&&this.draft!==this.host.getSource()&&!globalThis.confirm("Discard the invalid source changes?"))&&(this.openState=!1,this.draft="",this.error="",this.renderTray(),document.querySelector(".docdiagram-menu-toggle")?.focus())}flushRender(){return this.renderTimer===null?!0:this.renderDraft()}syncSource(e){if(!this.openState)return;this.draft=e,this.error="";let o=document.querySelector(".docdiagram-source-editor");if(!o)return;let n=o.selectionStart,r=o.selectionEnd,i=o.scrollTop;o.value=e,o.setSelectionRange(Math.min(n,e.length),Math.min(r,e.length)),o.scrollTop=i,this.updateStatus()}reveal(e){let o=this.host.getSource(),n=Vn(o,e);return n?this.revealSourceRange({start:{line:1,column:1,offset:n.start},end:{line:1,column:1,offset:n.end}},_e(o)):!1}revealSourceRange(e,o){let n=this.host.getSource();if(_e(n)!==o||this.hasUnsavedDraft||e.start.offset>n.length)return!1;this.openState||this.open();let r=()=>{let i=document.querySelector(".docdiagram-source-editor");i&&(i.focus(),i.setSelectionRange(e.start.offset,Math.min(e.end.offset,n.length)),Un(i,{start:e.start.offset}))};return globalThis.requestAnimationFrame?.(r)??r(),!0}renderTray(){let e=document.querySelector(".docdiagram-source-tray");if(!this.openState){this.resizeObserver?.disconnect(),this.resizeObserver=null,e?.remove(),delete this.host.outputElement.dataset.sourceEditorOpen,this.host.outputElement.style.removeProperty("--docdiagram-source-tray-height");return}if(e){e.dataset.theme=this.host.getDocumentTheme(),this.host.outputElement.dataset.sourceEditorOpen="true",this.updateStatus();return}e=document.createElement("section"),e.className="docdiagram-source-tray",e.dataset.theme=this.host.getDocumentTheme(),e.setAttribute("aria-label","Document source editor"),e.innerHTML=['<div class="docdiagram-source-resize" role="separator" aria-orientation="horizontal" aria-label="Resize source editor" tabindex="0" title="Drag to resize"></div>','<header class="docdiagram-source-header">','<div><strong>Source</strong><span class="docdiagram-source-shortcut">Cmd/Ctrl+Shift+E to close</span></div>','<div class="docdiagram-source-actions">','<button type="button" class="docdiagram-source-menu-toggle" aria-label="Source editor menu" aria-expanded="false" title="Source editor menu">\\u2630</button>','<div class="docdiagram-source-menu" hidden>','<div class="docdiagram-source-menu-heading">Insert</div>','<button type="button" data-source-template="flowchart">Flowchart</button>','<button type="button" data-source-template="sequence">Sequence</button>','<button type="button" data-source-template="diagram-reference">Diagram Reference</button>','<button type="button" data-source-template="toc">Contents</button>','<button type="button" class="docdiagram-source-import">Import diagram\\u2026</button>','<button type="button" data-source-template="panel">Panel</button>','<button type="button" data-source-template="grid">Grid</button>','<button type="button" class="docdiagram-source-help">Help</button>',"</div>",'<button type="button" class="docdiagram-source-close" aria-label="Close source editor" title="Close source editor">\\xD7</button>',"</div>","</header>",'<label class="docdiagram-source-label">Canonical Markdown<textarea class="docdiagram-source-editor" spellcheck="false"></textarea></label>','<p class="docdiagram-source-status" aria-live="polite"></p>','<p class="docdiagram-source-error" role="alert"></p>'].join("");let o=e.querySelector(".docdiagram-source-editor"),n=e.querySelector(".docdiagram-source-close"),r=e.querySelector(".docdiagram-source-menu-toggle"),i=e.querySelector(".docdiagram-source-menu");if(!o||!n||!r||!i)return;o.value=this.draft,o.addEventListener("input",()=>{this.draft=o.value,this.error="",this.updateStatus(),this.scheduleRender()}),n.addEventListener("click",()=>this.close()),r.addEventListener("click",()=>{let a=i.hidden;i.hidden=!a,r.setAttribute("aria-expanded",String(a))});for(let a of e.querySelectorAll("[data-source-template]"))a.addEventListener("click",()=>{let c=Ca(a.dataset.sourceTemplate||"",o.value);c&&(this.insertTemplate(o,c),i.hidden=!0,r.setAttribute("aria-expanded","false"))});e.querySelector(".docdiagram-source-import")?.addEventListener("click",async a=>{let c=a.currentTarget;i.hidden=!0,r.setAttribute("aria-expanded","false"),c.disabled=!0;try{await this.importDiagram(o)}catch(l){let d=l instanceof Error?l.message:String(l);globalThis.alert(\`Import diagram failed: \${d}\`)}finally{c.disabled=!1}}),e.querySelector(".docdiagram-source-help")?.addEventListener("click",()=>{globalThis.open(Na,"_blank","noopener")}),e.addEventListener("keydown",a=>{a.key==="Escape"&&!i.hidden&&(a.preventDefault(),i.hidden=!0,r.setAttribute("aria-expanded","false"),r.focus())}),this.host.outputElement.after(e),this.host.outputElement.dataset.sourceEditorOpen="true";let s=()=>{this.host.outputElement.style.setProperty("--docdiagram-source-tray-height",\`\${e?.offsetHeight||0}px\`)};this.attachResizeHandle(e,s),this.resizeObserver?.disconnect(),globalThis.ResizeObserver&&(this.resizeObserver=new globalThis.ResizeObserver(s),this.resizeObserver.observe(e)),s(),this.updateStatus()}attachResizeHandle(e,o){let n=e.querySelector(".docdiagram-source-resize");if(!n)return;let r=s=>{let a=globalThis.innerHeight||0,c=a?Math.max(Yo,a-Aa):s;return Math.min(Math.max(s,Yo),c)},i=s=>{e.style.height=\`\${r(s)}px\`,o()};n.addEventListener("pointerdown",s=>{if(s.button!==0)return;s.preventDefault();let a=s.clientY,c=e.offsetHeight;e.dataset.resizing="true",n.setPointerCapture?.(s.pointerId);let l=u=>{i(c-(u.clientY-a))},d=()=>{n.removeEventListener("pointermove",l),n.removeEventListener("pointerup",d),n.removeEventListener("pointercancel",d),delete e.dataset.resizing,n.releasePointerCapture?.(s.pointerId)};n.addEventListener("pointermove",l),n.addEventListener("pointerup",d),n.addEventListener("pointercancel",d)}),n.addEventListener("keydown",s=>{let a=s.shiftKey?kr*4:kr;s.key==="ArrowUp"?(s.preventDefault(),i(e.offsetHeight+a)):s.key==="ArrowDown"?(s.preventDefault(),i(e.offsetHeight-a)):s.key==="Home"?(s.preventDefault(),i(Number.MAX_SAFE_INTEGER)):s.key==="End"&&(s.preventDefault(),i(Yo))}),n.addEventListener("dblclick",()=>{e.style.removeProperty("height"),o()})}scheduleRender(){globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=globalThis.setTimeout(()=>{this.renderTimer=null,this.renderDraft()},250)}renderDraft(){return globalThis.clearTimeout(this.renderTimer??void 0),this.renderTimer=null,this.host.renderDocument(this.draft,{preserveOnError:!0})}updateStatus(){let e=document.querySelector(".docdiagram-source-tray");if(!e)return;let o=e.querySelector(".docdiagram-source-status"),n=e.querySelector(".docdiagram-source-error");!o||!n||(o.textContent=this.error?"Source has errors; showing the last valid render.":"Changes render automatically.",n.hidden=!this.error,n.textContent=this.error)}insertTemplate(e,o){let n=e.selectionStart,r=e.selectionEnd,i=e.value.lastIndexOf(\`
\`,n-1)+1,s=e.value.indexOf(\`
\`,n),a=s===-1?e.value.length:s,c=e.value.slice(i,a),l=/^\\s*$/.test(c)?n:a,d=/^\\s*$/.test(c)?r:a,u=l===a?\`
\${o}\`:o;e.setRangeText(u,l,d,"end"),this.draft=e.value,this.error="",this.updateStatus(),this.scheduleRender(),e.focus()}async importDiagram(e){let o=await Pa();if(!o)return;if(o.size>Ma)throw new Error("That file is too large to import.");let n=Ye(La(await o.text()));if(!n.length)throw new Error("That file has no diagrams to import.");let r=Ra(n);if(!r)return;xe(r.source,this.host.getDocumentColourScheme());let i=Zt(e.value,r.id||"imported-diagram");this.insertTemplate(e,\`\\\`\\\`\\\`diagram
\${Hn(r.source,i)}
\\\`\\\`\\\`\`)}focus(){let e=document.querySelector(".docdiagram-source-editor");e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))}};var _o="data-docdiagram-offline-runtime-placeholder",Dr='script[data-docdiagram-runtime="embedded"]',Ba="https://sparkkz-nz.github.io/skryb/latest/skryb-runtime.js";function Ia(){let t=globalThis;return typeof t.DocDiagramRuntimeSource=="string"?t.DocDiagramRuntimeSource:null}function Xo(t){return/^https?:\\/\\//i.test(t)?t:Ba}async function qa(t,e=globalThis.fetch.bind(globalThis)){let o=await e(t);if(!o.ok)throw new Error(\`Could not fetch the Skryb runtime (\${o.status||"unknown status"}).\`);return o.text()}function $r(t,e,o=""){let n=new RegExp(\`<script\\\\b[^>]*\\\\b\${_o}\\\\b[^>]*>[\\\\s\\\\S]*?<\\\\/script>\\\\s*\`,"i");if(!n.test(t))throw new Error("Could not find the selected Skryb runtime in this document.");let r=t.replace(n,""),i=/<\\/body\\s*>/i;if(!i.test(r))throw new Error("Could not find the document body for offline export.");let s=e.replace(/<\\/script/gi,"<\\\\/script"),c=\`<script data-docdiagram-runtime="embedded"\${o?\` data-docdiagram-runtime-url="\${za(o)}"\`:""}>
\${s}
<\\/script>
\`;return r.replace(i,()=>\`\${c}</body>\`)}async function Fr(t,e){let o=t.querySelector(Dr);if(o)return o.setAttribute(_o,""),{source:o.textContent||"",runtimeUrl:Xo(o.dataset.docdiagramRuntimeUrl||"")};let n=Array.from(t.querySelectorAll("script[src]")).find(i=>{try{let s=new URL(i.getAttribute("src")||"",t.ownerDocument.baseURI).pathname;return/\\/skryb-runtime(?:-self-packaged)?\\.js$/i.test(s)}catch{return!1}});if(!n)throw new Error("Could not find the selected Skryb runtime in this document.");return n.setAttribute(_o,""),{source:Ia()||await qa(n.src,e),runtimeUrl:Xo(n.getAttribute("src")||n.src)}}function Ko(t){let e=t.querySelector(Dr);if(!e)return;let o=Xo(e.dataset.docdiagramRuntimeUrl||""),n=t.ownerDocument.createElement("script");n.src=o,n.defer=!0,e.replaceWith(n)}function za(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;")}var Qt=class{constructor(e,o,n,r){this.session=e;this.state=o;this.outputElement=n;this.sourceEditor=r}downloadDocument(){if(this.sourceEditor?.flushRender(),!this.canExportLastValidSource())return;let e=this.createDocumentCopy();try{Ko(e)}catch(o){let n=o instanceof Error?o.message:String(o);console.error("Save As failed.",o),globalThis.alert(\`Save As failed: \${n}\`);return}this.downloadHtml(e.outerHTML,"-edited"),this.session.markSaved()}async downloadOfflineDocument(){if(this.sourceEditor?.flushRender(),!this.canExportLastValidSource())return;let e=this.createDocumentCopy(),o=await Fr(e);this.downloadHtml($r(e.outerHTML,o.source,o.runtimeUrl),"-offline"),this.session.markSaved()}createDocumentCopy(e=this.session.source){let o=document.documentElement.cloneNode(!0),n=o.querySelector("#source"),r=o.querySelector("#rendered-document");n?.content.replaceChildren(document.createTextNode(e)),o.querySelector(".docdiagram-lint-dialog")?.remove(),o.querySelector(".docdiagram-toolbar")?.remove(),o.querySelector(".docdiagram-source-tray")?.remove();for(let i of o.querySelectorAll("style"))(i.dataset.docdiagramRuntimeStyles==="true"||i.textContent?.includes(".docdiagram-inline-editor")&&i.textContent.includes(".docdiagram-toolbar"))&&i.remove();o.removeAttribute("data-docdiagram-theme"),o.removeAttribute("data-docdiagram-expanded"),o.style.removeProperty("--docdiagram-page-background"),o.style.removeProperty("--docdiagram-page-text"),o.getAttribute("style")||o.removeAttribute("style"),o.querySelector("body")?.removeAttribute("data-docdiagram-theme"),r?.replaceChildren(),r?.removeAttribute("data-editing-shortcuts-bound");for(let i of[...r?.attributes||[]])(i.name==="style"||i.name.startsWith("data-"))&&r?.removeAttribute(i.name);return o}openDiagram(e){let o=this.getDiagramExportUrl(e,"image/svg+xml;charset=utf-8");if(!o)return;if(!globalThis.open(o,"_blank")){URL.revokeObjectURL(o),globalThis.alert("Your browser blocked the new diagram tab. Allow pop-ups and try again.");return}globalThis.setTimeout(()=>URL.revokeObjectURL(o),6e4)}downloadDiagramDocument(e){let o=this.state.diagramModels[e];if(!o){globalThis.alert("The diagram is no longer available to save.");return}let n=Pe(o),r=It(n)||this.getDiagramExportName(e),i=["---",\`theme: \${this.state.documentThemeSetting}\`,\`colourScheme: \${this.state.documentColorScheme}\`,"doctype: diagram","---","","\`\`\`diagram",n,"\`\`\`",""].join(\`
\`),s=this.createDocumentCopy(i),a=s.querySelector("title");a&&(a.textContent=r);try{Ko(s)}catch(c){let l=c instanceof Error?c.message:String(c);console.error("Save as Skryb diagram failed.",c),globalThis.alert(\`Save as Skryb diagram failed: \${l}\`);return}this.downloadHtml(s.outerHTML,"",this.slug(r))}downloadDiagram(e){let o=this.getDiagramExportUrl(e,"image/svg+xml;charset=utf-8");if(!o)return;let n=document.createElement("a");n.href=o,n.download=\`\${this.getDiagramExportName(e)}.svg\`,n.hidden=!0,document.body.append(n),n.click(),n.remove(),globalThis.setTimeout(()=>URL.revokeObjectURL(o),200)}printDiagram(e){let o=this.getStandaloneDiagramSvg(e);if(!o){globalThis.alert("The diagram is no longer available to print.");return}let n=['<!doctype html><html><head><meta charset="utf-8"><title>Diagram</title>',"<style>html,body{height:100%;margin:0}body{display:grid;place-items:center}svg{height:auto;max-height:100vh;max-width:100vw;width:auto}@page{margin:0}</style>","</head><body>",new XMLSerializer().serializeToString(o),"</body></html>"].join(""),r=globalThis.open("","_blank");if(!r){globalThis.alert("Your browser blocked the print window. Allow pop-ups and try again.");return}r.document.open(),r.document.write(n),r.document.close(),r.focus(),r.print()}getStandaloneDiagramSvg(e){let o=this.outputElement?.querySelector(\`.docdiagram[data-diagram-index="\${e}"] svg\`);if(!o)return null;let n=o.closest(".docdiagram"),r=globalThis.getComputedStyle(n||o).backgroundColor,i=o.cloneNode(!0);i.setAttribute("xmlns","http://www.w3.org/2000/svg"),i.removeAttribute("style"),i.querySelectorAll(".docdiagram-inline-editor-host, .docdiagram-resize-handle, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-connection-preview").forEach(c=>c.remove()),i.querySelectorAll(".docdiagram-node-selected, .docdiagram-edge-selected").forEach(c=>{c.classList.remove("docdiagram-node-selected","docdiagram-edge-selected")});let s=document.createElementNS("http://www.w3.org/2000/svg","style");s.textContent=['svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}',".docdiagram-edge,.docdiagram-edge-hit{fill:none}",".docdiagram-edge-label{font-size:15px}",".docdiagram-node-label{font-size:16px;font-weight:650}",".docdiagram-node-subtitle{font-size:13px}"].join(""),i.insertBefore(s,i.firstChild);let a=document.createElementNS("http://www.w3.org/2000/svg","rect");return a.setAttribute("class","docdiagram-export-background"),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("fill",r),i.insertBefore(a,s.nextSibling),i}canExportLastValidSource(){return!(this.sourceEditor?.hasError&&this.sourceEditor.hasUnsavedDraft)||globalThis.confirm("Source has errors. Save the last valid version instead?")}getDiagramExportUrl(e,o){let n=this.getStandaloneDiagramSvg(e);return n?URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(n)],{type:o})):(globalThis.alert("The diagram is no longer available to export."),null)}getDiagramExportName(e){return\`\${this.slug(document.title)||"diagram"}-\${e+1}\`}downloadHtml(e,o,n=""){let r=new Blob([\`<!doctype html>
\${e}\`],{type:"text/html;charset=utf-8"}),i=document.createElement("a"),s=n||this.slug(document.title);i.href=URL.createObjectURL(r),i.download=\`\${s||"document"}\${o}.html\`,i.click(),URL.revokeObjectURL(i.href)}slug(e){return e.toLowerCase().replace(/[^\\w]+/g,"-").replace(/^-|-$/g,"")}};var eo=class{constructor(e,o){this.state=e;this.renderMarkdown=o}render(e,o=!1){let n=[...this.state.diagramModels],r=this.state.documentTheme,i=this.state.documentThemeSetting,s=this.state.documentColorScheme,a=this.state.documentDoctype;this.state.diagramModels.length=0;try{let c=o?We(e):ft(e);this.state.documentTheme=c.resolvedTheme,this.state.documentThemeSetting=c.theme,this.state.documentColorScheme=c.colourScheme,this.state.documentDoctype=c.doctype;let l=this.renderMarkdown(c.content);return this.state.expandedDiagramIndex!==null&&!this.state.diagramModels[this.state.expandedDiagramIndex]&&(this.state.expandedDiagramIndex=null,this.state.diagramModels.length=0,l=this.renderMarkdown(c.content)),{ok:!0,markup:l}}catch(c){let l=c instanceof Error?c.message:String(c);return this.state.diagramModels.length=0,this.state.diagramModels.push(...n),o&&(this.state.documentTheme=r,this.state.documentThemeSetting=i,this.state.documentColorScheme=s,this.state.documentDoctype=a),{ok:!1,message:l}}}};var to=class{constructor(e){this.sourceElement=e}read(){return this.sourceElement?.content.textContent||""}write(e){this.sourceElement?.content.replaceChildren(document.createTextNode(e))}},oo=class{constructor(e){this.sourceStore=e;this.savedSource=""}get source(){return this.sourceStore.read()}set source(e){this.sourceStore.write(e)}captureSavedSource(){this.savedSource=this.source}markSaved(){this.captureSavedSource()}hasUnsavedChanges(e=!1){return this.source!==this.savedSource||e}bake(){try{let e=qt(this.source);return e.baked&&(this.source=e.source),{baked:e.baked,failed:!1}}catch{return{baked:0,failed:!0}}}persistDiagramModels(e){let o=0,n=new Map;for(let s of e){let a=s.id;typeof a=="string"&&n.set(a,[...n.get(a)||[],s])}let r=new Map([...n].flatMap(([s,a])=>a.length===1?[[s,a[0]]]:[])),i=this.source.replace(/\\r\\n/g,\`
\`).replace(/^((?: {0,3}> ?)*)\`\`\`diagram\\s*\\n([\\s\\S]*?)^((?: {0,3}> ?)*)\`\`\`$/gm,(s,a,c,l)=>{let u=c.replace(/^(?: {0,3}> ?)+/gm,"").match(/^id:\\s*(?:"([^"]+)"|([^\\s#]+))\\s*$/m)?.slice(1).find(Boolean),f=u&&r.get(u)||e[o];o+=1;let p=f?Pe(f):"",h=p?p.split(\`
\`).map(m=>\`\${a}\${m}\`).join(\`
\`):"";return\`\${a}\\\`\\\`\\\`diagram
\${h?\`\${h}
\`:""}\${l}\\\`\\\`\\\`\`});return this.source=i,i}};function Ha(t){let e=t.querySelector("svg");if(!e||typeof e.getBBox!="function")return null;let o;try{o=e.getBBox()}catch{return null}let n=e.viewBox?.baseVal?.height||0,r=e.getBoundingClientRect();if(!n||!r.height||!o.height)return null;let i=r.height/n,s=getComputedStyle(t),a=r.top-t.getBoundingClientRect().top+t.scrollTop,c=(parseFloat(s.paddingBottom)||0)+(parseFloat(s.borderBottomWidth)||0),l=Math.min(Math.max(o.y,0),40)*i,d=Math.ceil(a+(o.y+o.height)*i+l+c);return Math.min(d,t.offsetHeight)}var ja="template[data-skryb-lint]",no=class{constructor(e,o){this.sourceElement=e;this.outputElement=o;this.state=pr();this.pendingViewportFits=new Set;this.autoFittedDiagrams=new Map;this.session=new oo(new to(e)),this.renderer=new eo(this.state,n=>this.renderMarkdown(n)),this.chrome=new _t(this.state,o),this.sourceEditor=o?new Jt({outputElement:o,getSource:()=>this.getSource(),getDocumentTheme:()=>this.getDocumentTheme(),getDocumentColourScheme:()=>this.state.documentColorScheme,renderDocument:(n,r)=>this.renderDocument(n,r),stopDiagramEditing:()=>this.stopDiagramEditing(),closeDocumentMenu:()=>this.closeDocumentMenu()}):null,this.diagramEditor=o?new Kt({outputElement:o,state:this.state,persistDiagramModels:()=>this.persistDiagramModels(),renderDocument:()=>this.renderDocument()}):null,this.exportService=new Qt(this.session,this.state,o,this.sourceEditor),this.lifecycle=o?new Xt({outputElement:o,isAutoTheme:()=>this.state.documentThemeSetting==="auto",renderDocument:()=>{this.renderDocument()},refitDiagramViewports:()=>this.refitDiagramViewports(),hasUnsavedChanges:()=>this.session.hasUnsavedChanges(this.sourceEditor?.hasUnsavedDraft),isSourceEditorOpen:()=>!!this.sourceEditor?.isOpen,toggleSourceEditor:()=>this.sourceEditor?.isOpen?this.sourceEditor.close():this.sourceEditor?.open(),downloadDocument:()=>this.downloadDocument(),closeDocumentMenu:()=>this.closeDocumentMenu(),closeDiagramExportMenus:()=>this.closeDiagramExportMenus(),getExpandedDiagramIndex:()=>this.state.expandedDiagramIndex,toggleDiagramExpansion:n=>this.toggleDiagramExpansion(n),hasSelection:()=>!!(this.state.selectedNode||this.state.selectedEdge||this.state.selectedSequenceElement),clearSelection:()=>{Ze(this.state),this.renderDocument()},revealSource:n=>this.sourceEditor?.reveal(n)}):null}getSource(){return this.session.source}setSource(e){this.session.source=e}getDocumentTheme(){return this.state.documentTheme}stopDiagramEditing(){this.state.editingDiagramIndex!==null&&(this.state.editingDiagramIndex=null,this.state.editSessionDiagram=null,Ze(this.state))}renderDiagram(e,o,n){return mr(e,o,{figure:n,colourScheme:this.state.documentColorScheme,state:{...this.state,documentTheme:this.state.documentTheme,documentColorScheme:this.state.documentColorScheme},onDiagram:(r,i)=>{this.state.diagramModels[r]=i}})}renderMarkdown(e,o={diagramIndex:0}){return jo(e,o,{renderDiagram:(n,r,i)=>this.renderDiagram(n,r,i),documentColorScheme:this.state.documentColorScheme,documentTheme:this.state.documentTheme})}persistDiagramModels(){let e=this.session.persistDiagramModels(this.state.diagramModels);this.sourceEditor?.syncSource(e)}renderDocument(e=this.getSource(),{preserveOnError:o=!1}={}){if(!this.outputElement)return!1;for(let a of this.outputElement.querySelectorAll(".docdiagram")){let c=Number(a.dataset.diagramIndex);if(this.pendingViewportFits.has(c)){this.state.diagramViewportHeights.delete(c);continue}c!==this.state.expandedDiagramIndex&&this.state.diagramViewportHeights.set(c,a.offsetHeight)}let n={x:globalThis.scrollX||0,y:globalThis.scrollY||0},r=this.renderer.render(e,o);if(!r.ok)return o?(this.sourceEditor?.setError(r.message),!1):(this.applyPageTheme(this.state.documentTheme),this.removeToolbarChrome(),this.outputElement.innerHTML=\`<section class="docdiagram-error"><strong>Document could not be rendered.</strong><br>\${D(r.message)}</section>\`,this.sourceEditor?.renderTray(),!1);this.setSource(e);let i=r.markup;this.sourceEditor?.clearError(),this.outputElement.dataset.theme=this.state.documentTheme,this.outputElement.dataset.colourScheme=this.state.documentColorScheme,this.applyDocumentColourScheme(this.outputElement),this.outputElement.dataset.format=this.state.documentFormat,this.applyPageTheme(this.state.documentTheme),this.outputElement.innerHTML=i,this.removeToolbarChrome(),this.createToolbar(),this.sourceEditor?.renderTray();let s=document.querySelector(".docdiagram-source-tray");return s&&this.applyDocumentColourScheme(s),this.diagramEditor?.enableCanvasPanning(),this.diagramEditor?.enableSequenceSelection(),this.fitDiagramViewports(),this.state.editingDiagramIndex!==null&&this.diagramEditor?.enableEditing(),globalThis.scrollTo?.(n.x,n.y),!0}fitDiagramViewports(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram")){let o=Number(e.dataset.diagramIndex);if(this.state.diagramViewportHeights.has(o)||o===this.state.expandedDiagramIndex)continue;let n=Ha(e);n&&(this.state.diagramViewportHeights.set(o,n),this.autoFittedDiagrams.set(o,n),e.style.boxSizing="border-box",e.style.minHeight="0",e.style.height=\`\${n}px\`)}this.pendingViewportFits.clear()}}refitDiagramViewports(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram")){let o=Number(e.dataset.diagramIndex),n=this.autoFittedDiagrams.get(o);if(!(n===void 0||o===this.state.expandedDiagramIndex)){if(e.offsetHeight!==n){this.autoFittedDiagrams.delete(o);continue}e.style.removeProperty("height"),e.style.removeProperty("min-height"),this.state.diagramViewportHeights.delete(o)}}this.fitDiagramViewports()}}closeDocumentMenu(){this.chrome.closeDocumentMenu()}bakeOnOpen(){let{baked:e,failed:o}=this.session.bake(),n=this.skrybActionRequestedByUrl("autowrap"),r=!1;if(!o&&n)try{let i=Bn(this.getSource());i.changed&&(this.setSource(i.source),r=!0)}catch{}(e||o||r||n||this.skrybActionRequestedByUrl("lint"))&&this.writeLintReport()}skrybActionRequestedByUrl(e){let o=globalThis.location?.search||"";return new URLSearchParams(o).getAll("skryb").includes(e)?!0:e==="lint"&&/(^|[?&])skryb-lint(=|&|$)/.test(o)}writeLintReport(){let e=this.getSource(),o;try{o=Io(e)}catch(r){o={sourceHash:_e(e),messages:[{severity:"error",rule:"schema",message:r instanceof Error?r.message:String(r)}],errorCount:1,warningCount:0}}let n=document.querySelector(ja)||document.createElement("template");return n.dataset.skrybLint="",n.content.replaceChildren(document.createTextNode(JSON.stringify({errors:o.errorCount,warnings:o.warningCount,sourceHash:o.sourceHash,messages:o.messages},null,2))),n.isConnected||document.body.append(n),o}showLintReport(){let e=this.writeLintReport();if(!e)return;let o=\`\${e.errorCount} error\${e.errorCount===1?"":"s"}, \${e.warningCount} warning\${e.warningCount===1?"":"s"}\`,n=document.querySelector(".docdiagram-lint-dialog")||document.body.appendChild(document.createElement("dialog"));n.className="docdiagram-lint-dialog",n.replaceChildren();let r=document.createElement("h2");r.textContent=\`Document check: \${o}\`;let i=document.createElement("div");i.className="docdiagram-lint-messages",e.messages.length||(i.textContent="Nothing to report. Every check passed.");for(let a of e.messages){let c=a.location?.subjects.find(d=>d.sourceRange)?.sourceRange||a.location?.fenceRange,l=c&&this.sourceEditor?document.createElement("button"):document.createElement("pre");if(l.textContent=or({sourceHash:e.sourceHash,messages:[a],errorCount:a.severity==="error"?1:0,warningCount:a.severity==="warning"?1:0}),l instanceof HTMLButtonElement&&c&&(l.type="button",l.title=\`Reveal source at line \${c.start.line}\`,l.addEventListener("click",()=>{n.close(),this.sourceEditor?.revealSourceRange(c,e.sourceHash)})),i.append(l),a.suggestedAction?.id==="wrap-linear-flow"){let d=document.createElement("button");d.type="button",d.textContent=a.suggestedAction.label,d.addEventListener("click",()=>{let u=qn(this.getSource(),a.suggestedAction.diagramIndex);if(!u.changed||!u.layout)return;let{before:f,after:p}=u.layout;globalThis.confirm(\`Preview: fitted content changes from \${f.width} by \${f.height} (\${f.aspectRatio.toFixed(1)}:1) to \${p.width} by \${p.height} (\${p.aspectRatio.toFixed(1)}:1).

This replaces node positions, connector anchors, routes, and waypoints. Apply the wrapped layout?\`)&&(n.close(),this.renderDocument(u.source),this.sourceEditor?.syncSource(u.source),this.writeLintReport())}),i.append(d)}}let s=document.createElement("button");s.type="button",s.textContent="Close",s.addEventListener("click",()=>n.close()),n.append(r,i,s),n.showModal()}downloadDocument(){this.exportService.downloadDocument()}async downloadOfflineDocument(){await this.exportService.downloadOfflineDocument()}boot(){if(!(!this.sourceElement||!this.outputElement)){gr(),this.session.captureSavedSource(),this.bakeOnOpen(),this.lifecycle?.bind();try{Bt(this.getSource()).frontmatter.doctype==="diagram"&&(this.state.expandedDiagramIndex=0)}catch{this.state.expandedDiagramIndex=null}this.renderDocument()}}getCoreApi(){return{bakeDocumentSource:qt,spliceBakedFences:Fo,lintDocument:Io}}createToolbar(){if(!this.outputElement)return;let e=document.createElement("section");e.className="docdiagram-toolbar",e.dataset.editing=String(this.state.editingDiagramIndex!==null),e.dataset.theme=this.state.documentTheme,e.dataset.colourScheme=this.state.documentColorScheme,e.dataset.format=this.state.documentFormat;let o=this.getSelectedNode(),n=o?null:this.getSelectedEdge(),r=!o&&!n?this.getSelectedSequenceElement():null,i=o&&this.state.selectedNode?this.state.diagramModels[this.state.selectedNode.diagramIndex]:n&&this.state.selectedEdge?this.state.diagramModels[this.state.selectedEdge.diagramIndex]:r&&this.state.selectedSequenceElement?this.state.diagramModels[this.state.selectedSequenceElement.diagramIndex]:null;e.innerHTML=['<button type="button" class="docdiagram-menu-toggle" aria-label="Document menu" aria-expanded="false" title="Document menu">\\u2630</button>','<div class="docdiagram-menu" hidden>','<label class="docdiagram-theme-control">Theme<select class="docdiagram-theme-select">',\`<option value="auto"\${this.state.documentThemeSetting==="auto"?" selected":""}>Auto</option>\`,\`<option value="light"\${this.state.documentThemeSetting==="light"?" selected":""}>Light</option>\`,\`<option value="dark"\${this.state.documentThemeSetting==="dark"?" selected":""}>Dark</option>\`,"</select></label>",\`<label class="docdiagram-theme-control">Colour scheme<select class="docdiagram-colour-scheme-select">\${Object.entries(ue).map(([c,l])=>\`<option value="\${c}"\${this.state.documentColorScheme===c?" selected":""}>\${l.label}</option>\`).join("")}</select></label>\`,'<label class="docdiagram-theme-control">Format<select class="docdiagram-format-select">',\`<option value="centered"\${this.state.documentFormat==="centered"?" selected":""}>Centered</option>\`,\`<option value="full-width"\${this.state.documentFormat==="full-width"?" selected":""}>Full width</option>\`,"</select></label>",'<label class="docdiagram-theme-control">Opens as<select class="docdiagram-doctype-select">',\`<option value="document"\${this.state.documentDoctype==="document"?" selected":""}>Document</option>\`,\`<option value="diagram"\${this.state.documentDoctype==="diagram"?" selected":""}>Diagram</option>\`,"</select></label>",'<button type="button" class="docdiagram-edit-source">Edit source</button>','<button type="button" class="docdiagram-lint">Check document</button>','<button type="button" class="docdiagram-print-document">Print / Save as PDF</button>','<button type="button" class="docdiagram-save">Save As</button>','<button type="button" class="docdiagram-offline-save">Save for Offline</button>',"</div>",o&&i?.type==="flowchart"?\`<div class="docdiagram-inspector" data-kind="node">\${yr(i,o,this.state.documentColorScheme,this.state.documentTheme)}</div>\`:n&&i?\`<div class="docdiagram-inspector" data-kind="edge">\${xr(i,n,this.state.documentColorScheme,this.state.documentTheme)}</div>\`:r&&i?\`<div class="docdiagram-inspector" data-kind="sequence">\${wr(i,this.state.selectedSequenceElement,r,this.state.documentColorScheme,this.state.documentTheme)}</div>\`:""].join("");let s=e.querySelector(".docdiagram-menu-toggle"),a=e.querySelector(".docdiagram-menu");s?.addEventListener("click",()=>{if(!a)return;let c=a.hidden;a.hidden=!c,s.setAttribute("aria-expanded",String(c))}),e.querySelector(".docdiagram-print-document")?.addEventListener("click",()=>this.printDocument()),e.querySelector(".docdiagram-save")?.addEventListener("click",()=>this.downloadDocument()),e.querySelector(".docdiagram-offline-save")?.addEventListener("click",async c=>{let l=c.currentTarget;l.disabled=!0;try{await this.downloadOfflineDocument()}catch(d){let u=d instanceof Error?d.message:String(d);console.error("Offline export failed.",d),globalThis.alert(\`Save for Offline failed: \${u}\`)}finally{l.disabled=!1}}),e.querySelector(".docdiagram-edit-source")?.addEventListener("click",()=>{this.closeDocumentMenu(),this.sourceEditor?.open()}),e.querySelector(".docdiagram-lint")?.addEventListener("click",()=>{this.closeDocumentMenu(),this.showLintReport()}),e.querySelector(".docdiagram-theme-select")?.addEventListener("change",c=>{this.setSource(jn(this.getSource(),c.currentTarget.value)),this.renderDocument()}),e.querySelector(".docdiagram-colour-scheme-select")?.addEventListener("change",c=>{this.setSource(On(this.getSource(),c.currentTarget.value)),this.renderDocument()}),e.querySelector(".docdiagram-format-select")?.addEventListener("change",c=>{this.state.documentFormat=c.currentTarget.value==="full-width"?"full-width":"centered",this.renderDocument()}),e.querySelector(".docdiagram-doctype-select")?.addEventListener("change",c=>{let l=c.currentTarget.value==="diagram"?"diagram":"document";this.setSource(Gn(this.getSource(),l)),this.setExpandedDiagram(l==="diagram"?0:null),this.renderDocument()}),this.outputElement.before(e),this.applyDocumentColourScheme(e),o&&this.state.selectedNode?Er(this,e,this.state.selectedNode.diagramIndex,this.state.selectedNode.nodeId):n&&this.state.selectedEdge?Sr(this,e,this.state.selectedEdge.diagramIndex,this.state.selectedEdge.edgeIndex):r&&this.state.selectedSequenceElement&&vr(this,e,r),this.wireChromeControls(),this.dockExpandedDiagramToolbar(e)}dockExpandedDiagramToolbar(e){this.chrome.dockExpandedDiagramToolbar(e)}getSelectedNode(){let e=this.state.selectedNode,o=e?this.state.diagramModels[e.diagramIndex]:null;return e&&o?.type==="flowchart"&&Je(this.state,e.diagramIndex)&&me(o,e.nodeId)?.node||null}getSelectedEdge(){let e=this.state.selectedEdge,o=e?this.state.diagramModels[e.diagramIndex]:null;return e&&o?.type==="flowchart"&&Je(this.state,e.diagramIndex)&&o.edges[e.edgeIndex]||null}getSelectedSequenceElement(){let e=this.state.selectedSequenceElement,o=e?this.state.diagramModels[e.diagramIndex]:null;return!e||o?.type!=="sequence"||!Je(this.state,e.diagramIndex)?null:e.kind==="participant"?o.participants?.find(n=>n.id===e.id)||null:e.kind==="message"?o.messages?.[e.index]||null:o.notes?.[e.index]||null}applyDocumentColourScheme(e){this.chrome.applyDocumentColourScheme(e)}wireChromeControls(){if(this.outputElement){for(let e of this.outputElement.querySelectorAll(".docdiagram-export-toggle"))e.addEventListener("click",()=>{let o=e.parentElement?.querySelector(".docdiagram-diagram-export-menu");if(!o)return;let n=o.hidden;this.closeDiagramExportMenus(),o.hidden=!n,e.setAttribute("aria-expanded",String(n))});for(let e of this.outputElement.querySelectorAll(".docdiagram-toggle-expand"))e.addEventListener("click",()=>this.toggleDiagramExpansion(Number(e.dataset.diagramIndex)));for(let e of this.outputElement.querySelectorAll(".docdiagram-open-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.openDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-save-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.downloadDiagramDocument(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-download-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.downloadDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-print-diagram"))e.addEventListener("click",()=>{this.closeDiagramExportMenus(),this.exportService.printDiagram(Number(e.dataset.diagramIndex))});for(let e of this.outputElement.querySelectorAll(".docdiagram-zoom-in, .docdiagram-zoom-out"))e.addEventListener("click",()=>{let o=Number(e.dataset.diagramIndex),n=this.state.diagramZooms.get(o)||100,r=e.classList.contains("docdiagram-zoom-in")?25:-25;this.state.diagramZooms.set(o,Dt(n+r)),this.renderDocument()});for(let e of this.outputElement.querySelectorAll(".docdiagram-fit"))e.addEventListener("click",()=>{let o=Number(e.dataset.diagramIndex);this.state.diagramZooms.set(o,100),this.state.diagramCameraOffsets.delete(o),this.pendingViewportFits.add(o),this.renderDocument()});for(let e of this.outputElement.querySelectorAll(".docdiagram-relayout"))e.addEventListener("click",()=>{let o=Number(e.dataset.diagramIndex);if(!globalThis.confirm(\`Relayout this entire diagram?

All node positions and connector anchors, routes, and waypoints will be replaced. Node sizes will be preserved.\`))return;let r=zn(this.getSource(),o);r.changed&&(this.renderDocument(r.source),this.sourceEditor?.syncSource(r.source))});for(let e of this.outputElement.querySelectorAll(".docdiagram-start-editing"))e.addEventListener("click",()=>{let o=Number(e.dataset.diagramIndex),n=this.state.diagramModels[o];n&&(this.state.editSessionDiagram=xe(Pe(n),this.state.documentColorScheme),this.state.editingDiagramIndex=o,Ze(this.state),this.renderDocument())});for(let e of this.outputElement.querySelectorAll(".docdiagram-done-editing"))e.addEventListener("click",()=>this.exitEditing(this.state.editingDiagramIndex,!1));for(let e of this.outputElement.querySelectorAll(".docdiagram-cancel-editing"))e.addEventListener("click",()=>this.exitEditing(this.state.editingDiagramIndex,!0));for(let e of this.outputElement.querySelectorAll(".docdiagram-create-node"))e.addEventListener("click",()=>this.createNewNode(Number(e.dataset.diagramIndex)))}}printDocument(){this.closeDocumentMenu(),this.closeDiagramExportMenus(),this.stopDiagramEditing(),this.state.expandedDiagramIndex=null,this.state.diagramViewportHeights.clear();for(let e of this.state.diagramZooms.keys())this.state.diagramZooms.set(e,100);this.state.diagramCameraOffsets.clear(),this.renderDocument(),globalThis.print()}closeDiagramExportMenus(){this.chrome.closeDiagramExportMenus()}exitEditing(e,o){e!==null&&(o&&this.state.editSessionDiagram&&(this.state.diagramModels[e]=this.state.editSessionDiagram,this.persistDiagramModels()),this.state.editingDiagramIndex=null,this.state.editSessionDiagram=null,Ze(this.state),this.renderDocument())}createNewNode(e){let o=this.state.diagramModels[e];if(!o||o.type!=="flowchart")return;let n=dn(o);this.state.selectedNode={diagramIndex:e,nodeId:n.id},this.state.selectedEdge=null,this.persistDiagramModels(),this.renderDocument()}applyPageTheme(e){this.chrome.applyPageTheme(e)}setExpandedDiagram(e){let o=this.state.expandedDiagramIndex;if(o!==e){this.state.expandedDiagramIndex=e;for(let n of[o,e])n!==null&&(this.state.diagramZooms.set(n,100),this.state.diagramCameraOffsets.delete(n),this.pendingViewportFits.add(n),this.autoFittedDiagrams.delete(n))}}toggleDiagramExpansion(e){this.setExpandedDiagram(this.state.expandedDiagramIndex===e?null:e),this.closeDiagramExportMenus(),this.renderDocument()}removeToolbarChrome(){this.chrome.removeToolbar()}};var Oa=document.querySelector("#source"),Ga=document.querySelector("#rendered-document"),Nr=new no(Oa,Ga),Va=globalThis;Va.DocDiagramCore=Nr.getCoreApi();Nr.boot();})();
`;
