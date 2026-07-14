
/* OHGS MOBILE HEADER BRAND PROPORTION JS */
(function(){
  function forceMobileBrand(){
    document.querySelectorAll('header.site-header a.brand, .site-header a.brand, header.site-header a.ohgs-mobile-pro-brand, .site-header a.ohgs-mobile-pro-brand').forEach(function(brand){
      brand.classList.add('brand', 'ohgs-mobile-pro-brand');
      if(!brand.querySelector('.ohgs-mobile-pro-icon')){
        brand.innerHTML = '<img class="ohgs-mobile-pro-icon" src="assets/ohgs-header-mobile-strong-icon.png" alt="OHGS Hardware logo"><span class="ohgs-mobile-pro-copy"><span class="ohgs-mobile-pro-title">OHGS</span><span class="ohgs-mobile-pro-subtitle">HARDWARE</span></span>';
      }
    });

    document.querySelectorAll('.ohgs-mobile-pro-icon').forEach(function(img){
      img.src = 'assets/ohgs-header-mobile-strong-icon.png';
      img.alt = 'OHGS Hardware logo';
    });

    document.querySelectorAll('.ohgs-mobile-pro-title').forEach(function(el){
      el.textContent = 'OHGS';
    });

    document.querySelectorAll('.ohgs-mobile-pro-subtitle').forEach(function(el){
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
    document.addEventListener('DOMContentLoaded', forceMobileBrand);
  } else {
    forceMobileBrand();
  }

  ['load','pageshow','resize','orientationchange'].forEach(function(ev){
    window.addEventListener(ev, forceMobileBrand);
  });

  [60,180,500,1200,2500].forEach(function(ms){
    setTimeout(forceMobileBrand, ms);
  });

  document.addEventListener('click', function(e){
    if(e.target && e.target.closest('.theme-toggle,.lang-toggle,.menu-toggle,[data-theme-toggle],[data-lang-toggle]')){
      [40,160,420].forEach(function(ms){ setTimeout(forceMobileBrand, ms); });
    }
  }, true);
})();
