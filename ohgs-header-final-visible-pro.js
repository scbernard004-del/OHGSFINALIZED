
/* OHGS HEADER FINAL VISIBLE PRO JS */
(function(){
  function finalHeaderFix(){
    document.querySelectorAll('.site-header a.brand, .site-header a.ohgs-final-brand').forEach(function(brand){
      brand.classList.add('brand', 'ohgs-final-brand');
      brand.setAttribute('href', './');
      brand.setAttribute('aria-label', 'OHGS Hardware home');
      brand.innerHTML = '<img class="ohgs-final-brand-icon" src="assets/ohgs-header-final-visible-icon.png" alt="OHGS Hardware logo"><span class="ohgs-final-brand-copy"><span class="ohgs-final-brand-title">OHGS</span><span class="ohgs-final-brand-subtitle">HARDWARE</span></span>';
    });

    document.querySelectorAll('.site-header .theme-toggle').forEach(function(el){
      el.textContent = '';
      el.setAttribute('aria-label', 'Toggle light and dark mode');
    });

    document.querySelectorAll('.site-header .lang-toggle').forEach(function(el){
      var lang = document.body && document.body.dataset ? document.body.dataset.lang : 'en';
      el.textContent = lang === 'sw' ? 'SW/EN' : 'EN/SW';
      el.dataset.en = 'EN/SW';
      el.dataset.sw = 'SW/EN';
    });

    document.querySelectorAll('.site-header .whatsapp').forEach(function(el){
      el.textContent = 'WhatsApp';
      el.dataset.en = 'WhatsApp';
      el.dataset.sw = 'WhatsApp';
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', finalHeaderFix);
  } else {
    finalHeaderFix();
  }

  ['load','pageshow','resize','orientationchange'].forEach(function(ev){
    window.addEventListener(ev, finalHeaderFix);
  });

  [80, 250, 700, 1500, 3000].forEach(function(ms){
    setTimeout(finalHeaderFix, ms);
  });

  document.addEventListener('click', function(e){
    if(e.target && e.target.closest('.theme-toggle,.lang-toggle,.menu-toggle,[data-theme-toggle],[data-lang-toggle]')){
      [50,180,450].forEach(function(ms){ setTimeout(finalHeaderFix, ms); });
    }
  }, true);
})();
