
/* OHGS mobile header final polish JS */
(function(){
  function polishHeader(){
    document.querySelectorAll('header.site-header a.brand img, .site-header a.brand img').forEach(function(img){
      img.src = 'assets/ohgs-header-mobile-perfect.png';
      img.alt = 'OHGS Hardware logo';
      img.style.objectFit = 'contain';
      img.style.objectPosition = 'center';
      img.style.opacity = '1';
      img.style.visibility = 'visible';
      img.style.backgroundColor = '#ffffff';
    });

    document.querySelectorAll('header.site-header .brand-title, .site-header .brand-title').forEach(function(el){
      el.textContent = 'OHGS';
    });

    document.querySelectorAll('header.site-header .brand-subtitle, .site-header .brand-subtitle').forEach(function(el){
      el.textContent = 'HARDWARE';
    });

    document.querySelectorAll('header.site-header .theme-toggle, .site-header .theme-toggle').forEach(function(el){
      el.textContent = '';
      el.setAttribute('aria-label','Toggle light and dark mode');
    });

    document.querySelectorAll('header.site-header .whatsapp, .site-header .whatsapp').forEach(function(el){
      el.textContent = 'WhatsApp';
      el.dataset.en = 'WhatsApp';
      el.dataset.sw = 'WhatsApp';
    });

    document.querySelectorAll('header.site-header .lang-toggle, .site-header .lang-toggle').forEach(function(el){
      var lang = document.body && document.body.dataset ? document.body.dataset.lang : 'en';
      el.textContent = lang === 'sw' ? 'SW/EN' : 'EN/SW';
      el.dataset.en = 'EN/SW';
      el.dataset.sw = 'SW/EN';
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', polishHeader);
  }else{
    polishHeader();
  }

  window.addEventListener('pageshow', polishHeader);
  window.addEventListener('resize', polishHeader);

  setTimeout(polishHeader, 80);
  setTimeout(polishHeader, 400);
  setTimeout(polishHeader, 1200);

  document.addEventListener('click', function(e){
    if(e.target && (e.target.closest('.theme-toggle') || e.target.closest('.lang-toggle') || e.target.closest('[data-theme-toggle]') || e.target.closest('[data-lang-toggle]'))){
      setTimeout(polishHeader, 30);
      setTimeout(polishHeader, 160);
      setTimeout(polishHeader, 400);
    }
  }, true);
})();
