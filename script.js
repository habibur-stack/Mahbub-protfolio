document.querySelectorAll('.hero h1 i').forEach(el=>{el.setAttribute('aria-hidden','true');el.innerHTML=[...el.textContent].map((c,k)=>'<b style="--d:'+k+'">'+c+'</b>').join('')});
document.querySelector('.hero h1').setAttribute('aria-label','Think creatively');
(function(){const faq=document.querySelector('.faq'),qs=faq.querySelectorAll('.q');
 qs[qs.length-1].insertAdjacentHTML('afterend','<div class="q"><button aria-expanded="false">Do you help with ideas, or only execution?</button><div class="a"><p>Both. I can develop the concept and storyboard, or animate from your script and brand assets.</p></div></div><div class="q"><button aria-expanded="false">Can I get the project files?</button><div class="a"><p>Yes. Final exports come in every format you need, and source files can be added to the package.</p></div></div>');
 faq.querySelectorAll('.q button').forEach((b,k)=>{b.innerHTML='<span><em>0'+(k+1)+'</em>'+b.textContent+'</span>'});
 faq.querySelector('h2').insertAdjacentHTML('afterend','<aside class="faqcard rv"><img src="'+document.querySelector('.nav img').src+'" alt=""><h3>Still not sure?<br>Book a free discovery call.</h3><p>It should make your idea clear, strong and easy to feel. If that’s what you are after, we should talk.</p><div class="fb"><a class="btn dk" href="#contact">Schedule Now</a><a href="mailto:hello@mahbub.design">Say hello →</a></div></aside>');
})();
(function(){const nav=document.querySelector('.nav'),links=[...nav.querySelectorAll('a')],ids=['work','services','about','faq','contact'];
 nav.insertAdjacentHTML('afterbegin','<i class="ind"></i>');const ind=nav.querySelector('.ind');let cur=null;
 function place(){const a=cur&&links[ids.indexOf(cur)];if(!a){ind.style.opacity=0;links.forEach(l=>l.classList.remove('act'));return}ind.style.opacity=1;ind.style.width=a.offsetWidth+'px';ind.style.transform='translateX('+a.offsetLeft+'px)';links.forEach(l=>l.classList.toggle('act',l===a))}
 function spy(){const mid=innerHeight*.45;let f=null;ids.forEach(id=>{const r=document.getElementById(id).getBoundingClientRect();if(r.top<=mid&&r.bottom>mid)f=id});
  if(!f){f=document.getElementById('work').getBoundingClientRect().top>mid?null:cur}
  if(f!==cur){cur=f;place()}}
 addEventListener('scroll',spy,{passive:true});addEventListener('resize',place);document.fonts&&document.fonts.ready.then(place);spy();
})();
document.querySelectorAll('.q,.mail,.big').forEach(el=>el.classList.add('rv'));
document.querySelectorAll('.grid,.rev,.faq,.contact .wrap,.about').forEach(g=>[...g.children].filter(c=>c.classList.contains('rv')).forEach((c,k)=>c.style.setProperty('--rd',k*.09+'s')));
addEventListener('mousemove',e=>{const r=document.documentElement.style;r.setProperty('--mx',(e.clientX/innerWidth-.5)*28);r.setProperty('--my',(e.clientY/innerHeight-.5)*20)});
document.body.insertAdjacentHTML('afterbegin','<i class="sp"></i>');const spb=document.querySelector('.sp');
addEventListener('scroll',()=>{spb.style.transform='scaleX('+scrollY/(document.documentElement.scrollHeight-innerHeight)+')'},{passive:true});
(function(){const items=['Motion Graphics','Kinetic Type','Logo Animation','UI Motion','3D Product','Explainers','After Effects','Cinema 4D','Premiere'],trk=document.querySelector('.gl-track'),gl=document.querySelector('.glass'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
 const set='<div class="gl-set">'+items.map(t=>'<span>'+t+'</span>').join('')+'</div>';trk.innerHTML=set+set;
 let x=0,v=1.2,dir=-1,boost=0,hov=false,ly=scrollY;
 addEventListener('scroll',()=>{const d=scrollY-ly;ly=scrollY;boost=Math.min(14,Math.abs(d)*.25);if(d)dir=d>0?-1:1},{passive:true});
 gl.addEventListener('mouseenter',()=>hov=true);gl.addEventListener('mouseleave',()=>hov=false);
 gl.addEventListener('mousemove',e=>{const b=gl.getBoundingClientRect();gl.style.setProperty('--gx',e.clientX-b.left+'px');gl.style.setProperty('--gy',e.clientY-b.top+'px')});
 (function mq(){boost*=.94;v+=((rm?0:hov?.25:1.2+boost)-v)*.06;x+=dir*v;const w=trk.scrollWidth/2;if(x<=-w)x+=w;if(x>0)x-=w;trk.style.transform='translate3d('+x+'px,0,0)';requestAnimationFrame(mq)})();
})();
(function(){const h1=document.querySelector('.hero h1'),av=document.querySelector('.hero .avatar'),st=document.createElement('div'),ov=document.createElement('div');st.className='stage';ov.className='ov';h1.before(st);st.append(h1,ov,av)})();
(function(){if(!matchMedia('(pointer:fine)').matches)return;const root=document.documentElement;root.classList.add('hascur');
 document.body.insertAdjacentHTML('beforeend','<div class="cur-glow"></div><div class="cur-ring"><span></span></div><div class="cur-dot"></div>');
 const g=document.querySelector('.cur-glow'),r=document.querySelector('.cur-ring'),d=document.querySelector('.cur-dot'),lb=r.firstChild;
 let tx=innerWidth/2,ty=innerHeight/2,rx=tx,ry=ty,gx=tx,gy=ty,seen=false;
 addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;if(!seen){seen=true;rx=gx=tx;ry=gy=ty;root.classList.add('cur-on')}
  const p=e.target.closest('.proj');r.classList.toggle('hov',!!e.target.closest('a,button,.q,.proj,.glass'));r.classList.toggle('lab',!!p);lb.textContent=p?'View':'';
  const b=e.target.closest('.btn');if(b){const k=b.getBoundingClientRect();b.style.setProperty('--bx',(e.clientX-k.left-k.width/2)*.28+'px');b.style.setProperty('--by',(e.clientY-k.top-k.height/2)*.28+'px')}});
 document.addEventListener('mouseout',e=>{if(!e.relatedTarget){root.classList.remove('cur-on');seen=false}const b=e.target.closest&&e.target.closest('.btn');if(b){b.style.setProperty('--bx','0px');b.style.setProperty('--by','0px')}});
 addEventListener('mousedown',()=>r.classList.add('dn'));addEventListener('mouseup',()=>r.classList.remove('dn'));
 (function f(){rx+=(tx-rx)*.16;ry+=(ty-ry)*.16;gx+=(tx-gx)*.07;gy+=(ty-gy)*.07;
  const dx=tx-rx,dy=ty-ry,sp=Math.min(.45,Math.hypot(dx,dy)/160),a=Math.atan2(dy,dx)*180/Math.PI;
  d.style.transform='translate3d('+tx+'px,'+ty+'px,0) translate(-50%,-50%)';
  r.style.transform='translate3d('+rx+'px,'+ry+'px,0) translate(-50%,-50%) rotate('+a+'deg) scale('+(1+sp)+','+(1-sp*.45)+')';
  lb.style.transform='rotate('+(-a)+'deg)';
  g.style.transform='translate3d('+gx+'px,'+gy+'px,0) translate(-50%,-50%)';requestAnimationFrame(f)})();
})();
document.querySelector('.hero p').textContent='I help brands turn ideas into moving, meaningful experiences.';
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
const pin=document.getElementById('services'),cards=[...pin.querySelectorAll('.card')],deck=pin.querySelector('.deck');
cards.forEach((c,i)=>c.insertAdjacentHTML('afterbegin','<div class="top"><span class="no">0'+(i+1)+'</span><div class="viz"><s></s><s></s><s></s></div></div>'));
pin.querySelector('.tools').insertAdjacentHTML('afterend','<div class="prog"><b class="cnt">01</b><span>/ 04</span><div class="bars"><i></i><i></i><i></i><i></i></div></div>');
const bars=[...pin.querySelectorAll('.bars i')],cnt=pin.querySelector('.cnt'),cl=v=>Math.min(1,Math.max(0,v));
function render(p){const vh=innerHeight;
 const ks=cards.map((c,i)=>{if(!i)return 1;const e=cl((p-((i-1)*.3+.03))/.28);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2});
 let cur=0;ks.forEach((k,i)=>{if(k>.5)cur=i});
 cards.forEach((c,i)=>{const k=ks[i],s=1-k,dir=i%2?1:-1;let d=0;for(let j=i+1;j<cards.length;j++)d+=ks[j];
  c.style.opacity=Math.min(1,k*4);c.style.setProperty('--r',(k*(1-(ks[i+1]||0))).toFixed(3));
  c.style.transform='translate3d('+(s*dir*60)+'px,'+(s*vh*.85-d*20)+'px,0) rotate('+(s*dir*5)+'deg) scale('+((.9+.1*k)-d*.05)+')';
  c.style.filter='brightness('+(1-Math.min(d,3)*.22)+')';c.classList.toggle('cur',i===cur);bars[i].style.setProperty('--f',k)});
 cnt.textContent='0'+(cur+1)}
let cur=0,tgt=0,run=false;
function prog(){const r=pin.getBoundingClientRect();return cl(-r.top/(r.height-innerHeight))}
function tick(){cur+=(tgt-cur)*.2;render(cur);if(Math.abs(tgt-cur)>.0003)requestAnimationFrame(tick);else{cur=tgt;render(cur);run=false}}
function go(){tgt=prog();if(!run){run=true;requestAnimationFrame(tick)}}
addEventListener('scroll',go,{passive:true});addEventListener('resize',go);tgt=cur=prog();render(cur);
deck.addEventListener('mousemove',e=>{const b=deck.getBoundingClientRect();deck.style.setProperty('--ry',((e.clientX-b.left)/b.width-.5)*10+'deg');deck.style.setProperty('--rx',-((e.clientY-b.top)/b.height-.5)*10+'deg')});
deck.addEventListener('mouseleave',()=>{deck.style.setProperty('--ry','0deg');deck.style.setProperty('--rx','0deg')});
document.querySelectorAll('.q button').forEach(b=>b.addEventListener('click',()=>{const q=b.parentElement,was=q.classList.contains('open');document.querySelectorAll('.q').forEach(x=>{x.classList.remove('open');x.firstElementChild.setAttribute('aria-expanded',false)});if(!was){q.classList.add('open');b.setAttribute('aria-expanded',true)}}));
