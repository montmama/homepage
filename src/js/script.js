// Reveal on scroll
const els = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
},{threshold:.14});
els.forEach(el=>io.observe(el));

// Nav background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll',()=>{
  if(window.scrollY > 60){
    nav.style.background = 'rgba(245,246,244,.92)';
  }else{
    nav.style.background = 'rgba(245,246,244,.78)';
  }
});
