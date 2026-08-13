const slides=[...document.querySelectorAll('.slide')];
const current=document.getElementById('currentNum');
const total=document.getElementById('totalNum');
const progress=document.getElementById('progressBar');
const overviewBtn=document.getElementById('overviewBtn');
const dialog=document.getElementById('overviewDialog');
const grid=document.getElementById('overviewGrid');
let index=0;

total.textContent=String(slides.length).padStart(2,'0');
function go(next){
  next=Math.max(0,Math.min(slides.length-1,next));
  if(next===index)return;
  const dir=next>index?1:-1;
  slides[index].classList.remove('active');
  slides[index].classList.toggle('leave-left',dir>0);
  slides[next].classList.remove('leave-left');
  slides[next].style.transform=`translateX(${dir>0?5:-5}%)`;
  requestAnimationFrame(()=>{slides[next].classList.add('active');slides[next].style.transform='';});
  index=next; update();
}
function update(){
  current.textContent=String(index+1).padStart(2,'0');
  progress.style.width=`${((index+1)/slides.length)*100}%`;
  history.replaceState(null,'',`#${index+1}`);
}
document.getElementById('prevBtn').addEventListener('click',()=>go(index-1));
document.getElementById('nextBtn').addEventListener('click',()=>go(index+1));
document.addEventListener('keydown',e=>{
  if(dialog.open && e.key!=='Escape') return;
  if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();go(index+1)}
  if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();go(index-1)}
  if(e.key==='Home')go(0); if(e.key==='End')go(slides.length-1);
});
let sx=0,sy=0;
document.addEventListener('touchstart',e=>{sx=e.changedTouches[0].clientX;sy=e.changedTouches[0].clientY},{passive:true});
document.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.4)go(index+(dx<0?1:-1))},{passive:true});
slides.forEach((s,i)=>{const b=document.createElement('button');b.className='overview-item';b.innerHTML=`<span>${String(i+1).padStart(2,'0')}</span>${s.dataset.title||'Slide'}`;b.onclick=()=>{go(i);dialog.close()};grid.appendChild(b)});
overviewBtn.onclick=()=>dialog.showModal();document.getElementById('closeOverview').onclick=()=>dialog.close();
const hash=parseInt(location.hash.replace('#',''),10);if(hash>=1&&hash<=slides.length){slides[0].classList.remove('active');index=hash-1;slides[index].classList.add('active')}update();
