(function(){
  const d = document;
  const html = d.documentElement;
  const body = d.body;

  function $$(s, c){ return Array.from((c || d).querySelectorAll(s)); }
  function $(s, c){ return (c || d).querySelector(s); }

  let lang = localStorage.getItem('ohgsLang') || 'en';

  function applyLang(v){
    lang = v === 'sw' ? 'sw' : 'en';
    html.lang = lang;
    $$('[data-en]').forEach(function(el){
      el.textContent = lang === 'sw' ? (el.dataset.sw || el.dataset.en) : el.dataset.en;
    });
    localStorage.setItem('ohgsLang', lang);
  }

  function applyTheme(t){
    const light = t === 'light';
    body.classList.toggle('light', light);
    html.classList.toggle('light', light);
    html.setAttribute('data-theme', light ? 'light' : 'dark');
    localStorage.setItem('ohgsTheme', light ? 'light' : 'dark');
    updateThemeIcon();
  }

  function updateThemeIcon(){
    const light = body.classList.contains('light') || html.getAttribute('data-theme') === 'light';
    $$('.theme-toggle').forEach(function(btn){
      btn.innerHTML = '<span class="ohgs-theme-icon" aria-hidden="true">' + (light ? '☀️' : '🌙') + '</span>';
      btn.setAttribute('aria-label', 'Switch dark and light mode');
      btn.setAttribute('title', 'Dark / Light mode');
    });
  }

  window.toggleLang = function(){ applyLang(lang === 'en' ? 'sw' : 'en'); };
  window.toggleTheme = function(){ applyTheme(body.classList.contains('light') ? 'dark' : 'light'); };

  function hideLoaders(){
    body.classList.add('ohgs-site-ready', 'ohgs-loaded');
    $$('.loader,#loader,.ohgs-loader-screen,.loading,.loading-screen').forEach(function(el){
      el.classList.add('hide','hidden','ohgs-loader-gone');
      el.style.display = 'none';
      el.style.opacity = '0';
      el.style.visibility = 'hidden';
      el.style.pointerEvents = 'none';
    });
    // Remove orphan loading text if it survived from old loader markup
    $$('p,span,div').forEach(function(el){
      const text = (el.textContent || '').trim().toLowerCase();
      if(text === 'loading ohgs hardware...' || text === 'tunafungua ohgs hardware...'){
        el.remove();
      }
    });
    html.style.overflow = '';
    body.style.overflow = '';
  }

  let lastY = window.scrollY || 0;
  let ticking = false;

  function animateHeader(){
    const header = $('.site-header');
    if(!header) return;

    const y = window.scrollY || html.scrollTop || 0;
    const scrolled = y > 12;
    const direction = y < lastY ? 'up' : 'down';

    header.classList.add('ohgs-pro-visible-header');
    header.classList.remove('hide','hidden','is-hidden','header-hidden','nav-hidden','scroll-hide');
    body.classList.remove('hide-header','header-hidden','nav-hidden');

    header.style.display = 'flex';
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.left = '0';
    header.style.right = '0';
    header.style.opacity = '1';
    header.style.visibility = 'visible';
    header.style.pointerEvents = 'auto';
    header.style.transform = 'translateY(0)';
    header.style.zIndex = '2147483000';

    header.classList.toggle('ohgs-ultimate-scrolled', scrolled);
    header.classList.toggle('ohgs-scroll-down', scrolled && direction === 'down');
    header.classList.toggle('ohgs-scroll-up', scrolled && direction === 'up');

    lastY = y;
    ticking = false;
  }

  function onScroll(){
    if(!ticking){
      requestAnimationFrame(animateHeader);
      ticking = true;
    }
  }

  function bindMenu(){
    const header = $('.site-header');
    const btn = $('#menuBtn') || $('.menu-toggle');
    const menu = $('#mainMenu') || $('.nav-links');
    if(!btn || !menu || btn.dataset.ohgsBound === 'true') return;

    btn.dataset.ohgsBound = 'true';
    btn.addEventListener('click', function(e){
      e.preventDefault();
      const open = !menu.classList.contains('open');
      menu.classList.toggle('open', open);
      if(header) header.classList.toggle('menu-open', open);
      btn.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    $$('.nav-links a').forEach(function(a){
      a.addEventListener('click', function(){
        menu.classList.remove('open');
        if(header) header.classList.remove('menu-open');
        btn.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    d.addEventListener('click', function(e){
      if(window.innerWidth <= 980 && header && !header.contains(e.target)){
        menu.classList.remove('open');
        header.classList.remove('menu-open');
        btn.classList.remove('is-open');
        btn.setAttribute('aria-expanded','false');
      }
    });
  }

  function fastMedia(){
    $$('img').forEach(function(img, i){
      img.setAttribute('decoding','async');
      if(img.closest('.site-header') || img.closest('.hero')){
        img.setAttribute('loading','eager');
        img.setAttribute('fetchpriority','high');
      }else{
        img.setAttribute('loading','lazy');
      }
      if(!img.getAttribute('alt')) img.setAttribute('alt','OHGS Hardware image');
    });
    $$('video').forEach(function(v){
      v.setAttribute('preload','metadata');
      v.setAttribute('playsinline','');
      if(!v.hasAttribute('controls')) v.setAttribute('controls','');
    });
  }

  function boot(){
    hideLoaders();
    applyTheme(localStorage.getItem('ohgsTheme') || 'dark');
    applyLang(lang);
    updateThemeIcon();
    bindMenu();
    fastMedia();
    animateHeader();
  }

  if(d.readyState === 'loading'){
    d.addEventListener('DOMContentLoaded', boot);
  }else{
    boot();
  }

  window.addEventListener('load', boot);
  window.addEventListener('pageshow', boot);
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', function(){ bindMenu(); animateHeader(); });
  window.addEventListener('orientationchange', function(){ bindMenu(); animateHeader(); });

  [80, 250, 700, 1500, 3000].forEach(function(ms){ setTimeout(boot, ms); });
})();
