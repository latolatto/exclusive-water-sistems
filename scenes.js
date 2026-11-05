(()=>{const tex=T=>{const k=document.createElement('canvas');k.width=k.height=64;const g=k.getContext('2d'),r=g.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,'#fff');r.addColorStop(.4,'rgba(255,255,255,.5)');r.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=r;g.fillRect(0,0,64,64);return new T.CanvasTexture(k)};
function stage(id,fit){const c=document.getElementById(id);if(!c||!window.THREE)return;const T=THREE,R=new T.WebGLRenderer({canvas:c,antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio,matchMedia('(max-width:760px)').matches?1:1.5));
const S=new T.Scene(),cam=new T.PerspectiveCamera(40,1,.1,100),G=new T.Group(),box=c.parentElement,tx=tex(T);cam.position.set(0,.6,13);S.add(G,new T.AmbientLight(0x5c8cff,.8));
[[-4,5,6,0x3da5ff,2.5],[6,-2,8,0xffffff,1.4]].forEach(a=>{const l=new T.PointLight(a[3],a[4],40);l.position.set(a[0],a[1],a[2]);S.add(l)});
const size=()=>{const w=box.clientWidth,h=box.clientHeight;R.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();G.scale.setScalar(Math.min(1,9.46*(w/h)*.92/fit))};size();addEventListener('resize',size);
const still=matchMedia('(prefers-reduced-motion: reduce)').matches;let vis=true,raf=0,loop;new IntersectionObserver(([entry])=>{vis=entry.isIntersecting;if(vis&&!still&&!raf&&loop)raf=requestAnimationFrame(loop)}).observe(box);
const pts=(n,size,color,add)=>{const g=new T.BufferGeometry(),p=new Float32Array(n*3);g.setAttribute('position',new T.BufferAttribute(p,3));G.add(new T.Points(g,new T.PointsMaterial({size,color,map:tx,transparent:true,depthWrite:false,blending:add?T.AdditiveBlending:T.NormalBlending})));return{p,up:()=>g.attributes.position.needsUpdate=true}};
const run=f=>{loop=t=>{raf=0;if(vis){f(t/1000);R.render(S,cam)}if(!still&&vis)raf=requestAnimationFrame(loop)};if(still){f(3);R.render(S,cam)}else if(vis)raf=requestAnimationFrame(loop)};
const M=o=>new T.MeshStandardMaterial(o);return{T,G,pts,run,M}}
addEventListener('load',()=>{
let s=stage('soft3d',17);if(s){const{T,G,pts,run,M}=s;
const tube=(x,r,col,op)=>{const m=new T.Mesh(new T.CylinderGeometry(r,r,6.4,24,1,true),M({color:col,transparent:true,opacity:op,side:T.DoubleSide,metalness:.6,roughness:.2}));m.rotation.z=Math.PI/2;m.position.x=x;G.add(m)};
tube(-4.9,.36,0xcfd6e0,.3);tube(-4.9,.27,0xe8e0c8,.8);tube(4.9,.36,0x4cc3ff,.3);
const tank=new T.Mesh(new T.CylinderGeometry(1.5,1.5,4.2,48,1,true),M({color:0x7fb8ff,transparent:true,opacity:.2,side:T.DoubleSide,metalness:.8,roughness:.1}));G.add(tank);
const head=new T.Mesh(new T.CylinderGeometry(1.55,1.55,.45,48),M({color:0x0b2a78,metalness:.9,roughness:.25}));head.position.y=2.3;G.add(head);
const ring=new T.Mesh(new T.TorusGeometry(1.52,.04,12,64),new T.MeshBasicMaterial({color:0x4cc3ff}));ring.rotation.x=Math.PI/2;ring.position.y=1.9;G.add(ring);
const B=[];for(let i=0;i<280;i++){const a=Math.random()*6.28,r=Math.sqrt(Math.random())*1.3;B.push([Math.cos(a)*r,-1.9+Math.random()*2.9,Math.sin(a)*r])}
const beads=pts(280,.16,0x2f8cff),sc=pts(150,.26,0xf4ecd4),cl=pts(170,.2,0x9fe3ff,true),Q=[],C=[];
const rq=q=>{q.x=-8+Math.random()*.5;q.t=null;q.a=Math.random()*6.28;q.r=Math.random()*.2;q.y=Math.cos(q.a)*q.r;q.z=Math.sin(q.a)*q.r};
for(let i=0;i<150;i++){const q={v:.03+Math.random()*.02};rq(q);q.x=-8+Math.random()*6.4;Q.push(q)}
for(let i=0;i<170;i++)C.push({x:1.6+Math.random()*6.4,v:.03+Math.random()*.02,a:Math.random()*6.28,r:Math.random()*.2});
run(t=>{B.forEach((b,i)=>{const j=i*3;beads.p[j]=b[0]+Math.sin(t*2+i)*.04;beads.p[j+1]=b[1]+Math.cos(t*1.7+i)*.04;beads.p[j+2]=b[2]});
Q.forEach((q,i)=>{if(!q.t){q.x+=q.v;if(q.x>-1.6)q.t=B[(Math.random()*280)|0]}else{const dx=q.t[0]-q.x,dy=q.t[1]-q.y,dz=q.t[2]-q.z;q.x+=dx*.06;q.y+=dy*.06;q.z+=dz*.06;if(Math.abs(dx)+Math.abs(dy)<.25)rq(q)}const j=i*3;sc.p[j]=q.x;sc.p[j+1]=q.y;sc.p[j+2]=q.z});
C.forEach((c,i)=>{c.x+=c.v;if(c.x>8)c.x=1.6;const j=i*3;cl.p[j]=c.x;cl.p[j+1]=Math.cos(c.a)*c.r;cl.p[j+2]=Math.sin(c.a)*c.r});[beads,sc,cl].forEach(o=>o.up());G.rotation.y=Math.sin(t*.3)*.25})}
s=stage('compare3d',15);if(s){const{T,G,pts,run,M}=s;
const bm=M({color:0x7fc8ff,transparent:true,opacity:.5,metalness:.2,roughness:.1}),cm=M({color:0x1e6bff}),bs=[],rest=[];
for(let r=0;r<4;r++)for(let c=0;c<4-r;c++)rest.push([-5.6+(c+r*.5)*1.15,-2.1+r*1.75]);
rest.forEach(p=>{const g=new T.Group(),a=new T.Mesh(new T.CylinderGeometry(.5,.5,1.2,24),bm),n=new T.Mesh(new T.CylinderGeometry(.2,.5,.4,24),bm),k=new T.Mesh(new T.CylinderGeometry(.21,.21,.2,16),cm);n.position.y=.8;k.position.y=1.1;g.add(a,n,k);g.rotation.z=(Math.random()-.5)*.3;g.position.set(p[0],20,0);G.add(g);bs.push(g)});
const mp=pts(260,.1,0xffffff,true),mx=[];for(let i=0;i<260;i++)mx.push([-6+Math.random()*5,-2.5+Math.random()*6,Math.random()*6.28]);
const mesh=(g,m,x,y,z=0)=>{const o=new T.Mesh(g,m);o.position.set(x,y,z);G.add(o);return o};
mesh(new T.CylinderGeometry(1.1,1.1,2.8,48),M({color:0x07163a,metalness:.9,roughness:.2,emissive:0x0b2a78,emissiveIntensity:.6}),5.4,-.8);
const rg=mesh(new T.TorusGeometry(1.12,.05,12,64),new T.MeshBasicMaterial({color:0x4cc3ff}),5.4,.2);rg.rotation.x=Math.PI/2;
const sil=M({color:0xcfd6e0,metalness:1,roughness:.25});mesh(new T.CylinderGeometry(.07,.07,2.4,12),sil,3.6,.2);
const arm=mesh(new T.CylinderGeometry(.07,.07,1.2,12),sil,3,1.4);arm.rotation.z=Math.PI/2;mesh(new T.CylinderGeometry(.07,.07,.9,12),sil,4,-.9).rotation.z=Math.PI/2;
mesh(new T.CylinderGeometry(.62,.55,1.8,32,1,true),M({color:0xbfe6ff,transparent:true,opacity:.25,side:T.DoubleSide,metalness:.5,roughness:.1}),2.4,-1.5);
const wg=new T.CylinderGeometry(.55,.5,1.7,32);wg.translate(0,.85,0);const w=mesh(wg,M({color:0x4cc3ff,emissive:0x1e6bff,emissiveIntensity:.6,transparent:true,opacity:.8}),2.4,-2.4);
const st=pts(90,.12,0x9fe3ff,true),sp=[];for(let i=0;i<90;i++)sp.push(Math.random());
run(t=>{const tt=t%10.5;bs.forEach((g,i)=>{const d=tt-i*.55,f=Math.max(0,1-d/.8);g.position.y=d<0?20:rest[i][1]+7*f*f;g.rotation.y=t*.2});
mx.forEach((m,i)=>{const j=i*3;mp.p[j]=m[0]+Math.sin(t+m[2])*.25;mp.p[j+1]=m[1]+Math.cos(t*.8+m[2])*.25;mp.p[j+2]=Math.sin(t*.5+m[2])*.5});
const lv=Math.min(1,(t%6)/6*1.2);w.scale.y=.05+.95*lv;const top=-2.4+1.7*w.scale.y;
sp.forEach((v,i)=>{sp[i]=(v+.012)%1;const j=i*3;st.p[j]=2.4+Math.sin(i)*.05;st.p[j+1]=1.3-(1.3-top)*sp[i];st.p[j+2]=Math.cos(i)*.05});mp.up();st.up()})}
})})();
