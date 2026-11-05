function init(c,ex){const T=THREE,hero=c.parentElement;
const R=new T.WebGLRenderer({canvas:c,antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio,2));
const S=new T.Scene(),cam=new T.PerspectiveCamera(40,1,.1,100);cam.position.set(0,1,13);
S.add(new T.AmbientLight(0x5c8cff,.7));[[-4,5,6,0x3da5ff,2.5],[6,-2,8,0xffffff,1.4]].forEach(a=>{const l=new T.PointLight(a[3],a[4],40);l.position.set(a[0],a[1],a[2]);S.add(l)});
const G=new T.Group();S.add(G);const X=[-5.4,-1.8,1.8,5.4],col=[0x9a7440,0x1b2433,0x2f8cff,0x9fe3ff];
const cores=[],rings=[];let last=-1;const pipe=new T.Mesh(new T.CylinderGeometry(.09,.09,19,16),new T.MeshBasicMaterial({color:0x2f8cff,transparent:true,opacity:.5}));pipe.rotation.z=Math.PI/2;G.add(pipe);
X.forEach((x,i)=>{const add=(g,m,y=0)=>{const o=new T.Mesh(g,m);o.position.set(x,y,0);G.add(o);return o};
add(new T.CylinderGeometry(.95,.95,3.2,48,1,true),new T.MeshStandardMaterial({color:0x7fb8ff,transparent:true,opacity:.18,metalness:.9,roughness:.1,side:T.DoubleSide}));
cores[i]=add(new T.CylinderGeometry(.66,.66,2.9,32),new T.MeshStandardMaterial({color:col[i],emissive:col[i],emissiveIntensity:.4,roughness:.4,transparent:true,opacity:.4}));
[1.65,-1.65].forEach(y=>add(new T.CylinderGeometry(1,1,.3,48),new T.MeshStandardMaterial({color:0xcfd6e0,metalness:1,roughness:.25}),y));
const r=add(new T.TorusGeometry(1.02,.03,12,64),new T.MeshBasicMaterial({color:0x4cc3ff}));rings[i]=r;r.rotation.x=Math.PI/2});
const tx=(()=>{const k=document.createElement('canvas');k.width=k.height=64;const g=k.getContext('2d'),gr=g.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,'#fff');gr.addColorStop(.35,'rgba(255,255,255,.5)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(0,0,64,64);return new T.CanvasTexture(k)})();
const mk=(n,size,blend)=>{const g=new T.BufferGeometry(),p=new Float32Array(n*3),cl=new Float32Array(n*3);g.setAttribute('position',new T.BufferAttribute(p,3));g.setAttribute('color',new T.BufferAttribute(cl,3));
const pts=new T.Points(g,new T.PointsMaterial({size,map:tx,vertexColors:true,transparent:true,depthWrite:false,blending:blend}));G.add(pts);return{g,p,cl,n,v:new Float32Array(n),d:new Float32Array(n)}};
const clean=mk(1500,.2,T.AdditiveBlending),dirt=mk(380,.17,T.NormalBlending);
const rs=(s,i,x)=>{const a=Math.random()*6.28,r=Math.sqrt(Math.random())*.55;s.p[i*3]=x;s.p[i*3+1]=Math.cos(a)*r;s.p[i*3+2]=Math.sin(a)*r;s.v[i]=.025+Math.random()*.03};
for(let i=0;i<clean.n;i++)rs(clean,i,-9.5+Math.random()*19);
for(let i=0;i<dirt.n;i++){rs(dirt,i,-9.5+Math.random()*7);dirt.d[i]=[-4.4,-.8,2.8][i%3]}
const dc=new T.Color(0x9a7440),a=new T.Color(0x2f8cff),b=new T.Color(0xbff0ff),tmp=new T.Color();
function size(){const w=hero.clientWidth,h=hero.clientHeight,as=w/h;R.setSize(w,h,false);cam.aspect=as;cam.updateProjectionMatrix();
if(ex){G.scale.setScalar(Math.min(.95,9.46*as*.95/19));G.position.set(0,0,0)}else{const hw=4.73*as;if(as>1.1){G.scale.setScalar(Math.min(.6,.475*hw/9.5));G.position.set(.495*hw,0,0)}else{G.scale.setScalar(9.46*as*.92/19);G.position.set(0,2.5,0)}}}
size();addEventListener('resize',size);let mx=0,my=0;addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
const still=matchMedia('(prefers-reduced-motion: reduce)').matches;let vis=true;new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(hero);
function tick(t){if(vis){const s=t*.001;
for(let i=0;i<clean.n;i++){clean.p[i*3]+=clean.v[i];if(clean.p[i*3]>9.5)rs(clean,i,-9.5);const x=clean.p[i*3],k=Math.min(1,Math.max(0,(x+9)/18));
tmp.copy(dc).lerp(a,Math.min(1,k*2.2)).lerp(b,Math.max(0,k*1.6-.6));clean.cl.set([tmp.r,tmp.g,tmp.b],i*3)}
for(let i=0;i<dirt.n;i++){const j=i*3;dirt.p[j]+=dirt.v[i];if(dirt.p[j]>dirt.d[i]){dirt.p[j+1]-=.06;if(dirt.p[j+1]<-1.8)rs(dirt,i,-9.5)}dirt.cl.set([.45,.32,.16],j)}
[clean,dirt].forEach(o=>{o.g.attributes.position.needsUpdate=o.g.attributes.color.needsUpdate=true});
if(!still){G.rotation.y=Math.sin(s*.35)*.3+mx*.3;G.rotation.x=.12+my*.15}
if(ex){const k=Math.floor(s/2.6)%4;cores.forEach((m,i)=>{m.material.emissiveIntensity=i==k?1.6:.25;m.material.opacity=i==k?.75:.35;rings[i].scale.setScalar(i==k?1.12:1)});if(k!=last){last=k;document.querySelectorAll('.explain-steps li').forEach((li,i)=>li.classList.toggle('on',i==k))}}
R.render(S,cam)}
if(!still)requestAnimationFrame(tick)}
tick(0)}
addEventListener('load',()=>{if(!window.THREE)return;[['hero3d',0],['explain3d',1]].forEach(([i,e])=>{const c=document.getElementById(i);c&&init(c,e)})});
