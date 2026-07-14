
(function(){
 function forceHeader(){
  document.querySelectorAll('header.site-header a.brand img,.site-header a.brand img').forEach(function(img){img.src='assets/ohgs-header-logo-visible.png';img.alt='OHGS Hardware logo';img.style.objectFit='contain';img.style.objectPosition='center';img.style.opacity='1';img.style.visibility='visible';img.style.backgroundColor='#ffffff';});
  document.querySelectorAll('header.site-header .brand-title,.site-header .brand-title').forEach(function(el){el.textContent='OHGS';});
  document.querySelectorAll('header.site-header .brand-subtitle,.site-header .brand-subtitle').forEach(function(el){el.textContent='HARDWARE';});
  document.querySelectorAll('header.site-header .whatsapp,.site-header .whatsapp').forEach(function(el){el.textContent='WhatsApp';el.dataset.en='WhatsApp';el.dataset.sw='WhatsApp';});
  document.querySelectorAll('header.site-header .lang-toggle,.site-header .lang-toggle').forEach(function(el){var lang=document.body&&document.body.dataset?document.body.dataset.lang:'en';el.textContent=lang==='sw'?'SW/EN':'EN/SW';el.dataset.en='EN/SW';el.dataset.sw='SW/EN';});
 }
 if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',forceHeader);}else{forceHeader();}
 window.addEventListener('pageshow',forceHeader);window.addEventListener('resize',forceHeader);setTimeout(forceHeader,100);setTimeout(forceHeader,500);
 document.addEventListener('click',function(e){if(e.target&&(e.target.closest('.lang-toggle')||e.target.closest('[data-lang-toggle]')||e.target.closest('.theme-toggle'))){setTimeout(forceHeader,40);setTimeout(forceHeader,180);}},true);
})();
