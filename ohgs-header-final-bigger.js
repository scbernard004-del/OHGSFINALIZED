
/* OHGS FINAL BIGGER HEADER BRAND JS */
(function(){
  function applyHeaderBrand(){
    document.querySelectorAll('header.site-header a.brand, .site-header a.brand').forEach(function(brand){
      if(!brand.classList.contains('ohgs-pro-brand') || !brand.querySelector('.ohgs-pro-brand-icon')){
        brand.classList.add('ohgs-pro-brand');
        brand.innerHTML = '<img class="ohgs-pro-brand-icon" src="assets/ohgs-header-final-big-icon.png" alt="OHGS Hardware logo"><span class="ohgs-pro-brand-copy"><span class="ohgs-pro-brand-title">OHGS</span><span class="ohgs-pro-brand-subtitle">HARDWARE</span></span>';
      }
    });

    document.querySelectorAll('.ohgs-pro-brand-icon').forEach(function(img){
      img.src = 'assets/ohgs-header-final-big-icon.png';
      img.alt = 'OHGS Hardware logo';
    });

    document.querySelectorAll('.ohgs-pro-brand-title').forEach(function(el){
      el.textContent = 'OHGS';
    });

    document.querySelectorAll('.ohgs-pro-brand-subtitle').forEach(function(el){
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
    document.addEventListener('DOMContentLoaded', applyHeaderBrand);
  } else {
    applyHeaderBrand();
  }

  ['load','pageshow','resize','orientationchange'].forEach(function(ev){
    window.addEventListener(ev, applyHeaderBrand);
  });

  [60,180,500,1200,2500].forEach(function(ms){
    setTimeout(applyHeaderBrand, ms);
  });

  document.addEventListener('click', function(e){
    if(e.target && e.target.closest('.theme-toggle,.lang-toggle,.menu-toggle,[data-theme-toggle],[data-lang-toggle]')){
      [40,160,420].forEach(function(ms){ setTimeout(applyHeaderBrand, ms); });
    }
  }, true);
})();
