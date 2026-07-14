
(function(){
  const d=document, html=d.documentElement;
  const $=(s,c=d)=>c.querySelector(s);
  const $$=(s,c=d)=>Array.from(c.querySelectorAll(s));

  function body(){return d.body;}
  function header(){return $('.site-header');}
  function menu(){return $('#mainMenu') || $('#ohgsMainMenu') || $('.nav-links');}
  function btn(){return $('#menuBtn') || $('#ohgsMenuButton') || $('.menu-toggle');}

  function closeMenu(){
    const m=menu(), b=btn();
    body().classList.remove('menu-open');
    if(m){m.classList.remove('open');m.setAttribute('aria-hidden','true');}
    if(b){b.classList.remove('is-open');b.setAttribute('aria-expanded','false');}
  }
  function openMenu(){
    const m=menu(), b=btn();
    body().classList.add('menu-open');
    if(m){m.classList.add('open');m.setAttribute('aria-hidden','false');}
    if(b){b.classList.add('is-open');b.setAttribute('aria-expanded','true');}
  }

  function bindMenu(){
    const m=menu(), b=btn();
    if(!m || !b) return;
    b.setAttribute('type','button');
    b.setAttribute('aria-expanded','false');
    b.setAttribute('aria-controls', m.id || 'mainMenu');
    if(!m.id) m.id='mainMenu';
    if(!b.querySelector('span')) b.innerHTML='<span></span><span></span><span></span>';
    if(!b.dataset.finalBound){
      b.dataset.finalBound='1';
      b.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        body().classList.contains('menu-open') ? closeMenu() : openMenu();
      }, true);
    }
    $$('a',m).forEach(a=>{
      if(!a.dataset.finalBound){
        a.dataset.finalBound='1';
        a.addEventListener('click',()=>{ if(innerWidth<=980) closeMenu(); });
      }
    });
  }

  function scrollHeader(){
    const h=header();
    const on=scrollY>8;
    body().classList.toggle('ohgs-scrolled',on);
    if(h) h.classList.toggle('scrolled',on);
  }

  function applyTheme(mode){
    const light=mode==='light';
    [html,body()].forEach(el=>{
      if(!el) return;
      el.classList.toggle('light',light);
      el.classList.toggle('dark',!light);
      el.setAttribute('data-theme', light?'light':'dark');
    });
    try{localStorage.setItem('ohgsTheme', light?'light':'dark');}catch(e){}
  }
  window.toggleTheme=function(){
    const isLight=body().classList.contains('light') || html.classList.contains('light');
    applyTheme(isLight?'dark':'light');
  };

  function applyLang(lang){
    lang = lang==='sw' ? 'sw' : 'en';
    html.lang=lang;
    body().dataset.lang=lang;
    $$('[data-en]').forEach(el=>{
      el.textContent = lang==='sw' ? (el.dataset.sw || el.dataset.en) : el.dataset.en;
    });
    try{localStorage.setItem('ohgsLang',lang);}catch(e){}
  }
  window.toggleLang=function(){
    applyLang((body().dataset.lang||'en')==='en'?'sw':'en');
  };

  function bindControls(){
    $$('.theme-toggle,[data-theme-toggle],#themeToggle,.theme-btn').forEach(x=>{
      if(!x.dataset.finalTheme){
        x.dataset.finalTheme='1';
        x.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();window.toggleTheme();},true);
      }
    });
    $$('.lang-toggle,[data-lang-toggle],#langToggle,.lang-btn').forEach(x=>{
      if(!x.dataset.finalLang){
        x.dataset.finalLang='1';
        x.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();window.toggleLang();},true);
      }
    });
  }

  function prepImages(){
    $$('img').forEach(img=>{
      img.loading='lazy';
      img.decoding='async';
      if(!img.alt) img.alt='OHGS Hardware image';
    });
  }

  function hideLoaders(){
    $$('.ohgs-loader-screen,#ohgsLoader,.loader').forEach(l=>{
      l.classList.add('hide');
      l.setAttribute('aria-hidden','true');
      setTimeout(()=>{ if(l) l.style.display='none'; },500);
    });
  }

  function boot(){
    bindMenu();
    bindControls();
    prepImages();
    scrollHeader();
    let theme='dark', lang='en';
    try{
      theme=localStorage.getItem('ohgsTheme')||localStorage.getItem('theme')||theme;
      lang=localStorage.getItem('ohgsLang')||localStorage.getItem('lang')||lang;
    }catch(e){}
    applyTheme(theme==='light'?'light':'dark');
    applyLang(lang==='sw'?'sw':'en');
    setTimeout(hideLoaders,650);
  }

  d.addEventListener('click',e=>{
    const h=header();
    if(innerWidth<=980 && h && !h.contains(e.target)) closeMenu();
  },true);
  addEventListener('scroll',scrollHeader,{passive:true});
  addEventListener('resize',()=>{ if(innerWidth>980) closeMenu(); },{passive:true});
  addEventListener('load',()=>setTimeout(hideLoaders,400),{once:true});
  if(d.readyState==='loading') d.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();


/* Safe Monday final text + loader alignment helper */
(function(){
  function centerLoader(){
    document.querySelectorAll('.ohgs-loader-screen,#ohgsLoader').forEach(function(loader){
      loader.style.display = 'flex';
      loader.style.flexDirection = 'column';
      loader.style.alignItems = 'center';
      loader.style.justifyContent = 'center';
      loader.style.textAlign = 'center';
    });
  }
  function bindSafeMondayLinks(){
    document.querySelectorAll('.whatsapp-action').forEach(function(a){
      var product = a.getAttribute('data-product') || 'OHGS products';
      var msg = encodeURIComponent('Hello OHGS, I want to ask about ' + product + '. Please send price and availability.');
      a.href = 'https://wa.me/255689528193?text=' + msg;
      a.target = '_blank';
      a.rel = 'noopener';
    });
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){centerLoader(); bindSafeMondayLinks();});
  }else{
    centerLoader(); bindSafeMondayLinks();
  }
})();


/* Header language button stability patch */
(function(){
  function shortHeaderLabels(){
    document.querySelectorAll('.site-header .whatsapp, header.site-header .whatsapp').forEach(function(el){
      el.dataset.en = 'WhatsApp';
      el.dataset.sw = 'WhatsApp';
      el.textContent = 'WhatsApp';
    });
    document.querySelectorAll('.site-header .lang-toggle, header.site-header .lang-toggle').forEach(function(el){
      el.dataset.en = 'EN/SW';
      el.dataset.sw = 'SW/EN';
      var lang = document.body && document.body.dataset ? document.body.dataset.lang : 'en';
      el.textContent = lang === 'sw' ? 'SW/EN' : 'EN/SW';
    });
  }

  document.addEventListener('DOMContentLoaded', shortHeaderLabels);
  window.addEventListener('pageshow', shortHeaderLabels);
  document.addEventListener('click', function(e){
    if(e.target && (e.target.closest('.lang-toggle') || e.target.closest('[data-lang-toggle]'))){
      setTimeout(shortHeaderLabels, 40);
      setTimeout(shortHeaderLabels, 160);
    }
  }, true);
})();
