const nav=document.querySelector('.nav');const menu=document.querySelector('.menu-toggle');if(menu){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')})}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
const hero=document.querySelector('.hero');
const heroBg=document.querySelector('.hero-bg');
const heroDots=[...document.querySelectorAll('.hero-dots button')];
const heroImages=[
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  'https://tse1.mm.bing.net/th/id/OIP.tUaPkDdsCvLJwGwXoYmQSQHaEr?r=0&pid=ImgDet&w=184&h=116&c=7&dpr=1.3&o=7&rm=3',
  'https://tse2.mm.bing.net/th/id/OIP.tBdOk3IOVjC6IvKFjMHXvwHaE7?r=0&pid=ImgDet&w=184&h=122&c=7&dpr=1.3&o=7&rm=3',
];
let slide=0;
function setSlide(i){
  slide=(i+heroImages.length)%heroImages.length;
  heroBg.style.backgroundImage=`url("${heroImages[slide]}")`;
  heroDots.forEach((d,k)=>d.classList.toggle('active',k===slide));
}
document.querySelectorAll('[data-slide]').forEach(btn=>btn.addEventListener('click',()=>setSlide(slide+(btn.dataset.slide==='next'?1:-1))));
heroDots.forEach(d=>d.addEventListener('click',()=>setSlide(Number(d.dataset.dot))));
setInterval(()=>setSlide(slide+1),7000);
