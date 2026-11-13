/**
 * Vexolune Technologies — Site interactions
 * Theme preference, responsive navigation, current year, back-to-top,
 * and reveal-on-scroll effects. No external dependencies.
 */

// Theme preference and toggle
(function(){let choice='dark';try{choice=localStorage.getItem('vexolune-theme')||'dark'}catch(e){}if(choice!=='light')choice='dark';document.documentElement.dataset.theme=choice;const button=document.getElementById('theme-toggle');function sync(){const light=document.documentElement.dataset.theme==='light';button.setAttribute('aria-pressed',String(light));button.setAttribute('aria-label',light?'Switch to dark theme':'Switch to light theme');button.querySelector('.theme-icon').textContent=light?'☾':'☀';button.querySelector('.theme-label').textContent=light?'Dark':'Light';document.querySelector('meta[name="theme-color"]').setAttribute('content',light?'#f7f8fa':'#070914')}sync();button.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=next;try{localStorage.setItem('vexolune-theme',next)}catch(e){}sync()})})();
// Mobile navigation
const menu=document.getElementById('menu'),navlinks=document.getElementById('navlinks');menu.addEventListener('click',()=>{const open=navlinks.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'});navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navlinks.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));// Footer year and back-to-top
 document.getElementById('year').textContent=new Date().getFullYear();const backtop=document.getElementById('backtop');window.addEventListener('scroll',()=>backtop.classList.toggle('show',window.scrollY>500),{passive:true});backtop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));// Scroll reveal with IntersectionObserver fallback
const items=document.querySelectorAll('.reveal');if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});items.forEach(item=>observer.observe(item))}else items.forEach(item=>item.classList.add('visible'));
