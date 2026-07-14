
(function(){
  function isLightMode(){
    return document.body.classList.contains('light') || document.documentElement.classList.contains('light') || document.documentElement.getAttribute('data-theme') === 'light';
  }
  function brandSrc(){
    var light = isLightMode();
    var mobile = window.innerWidth <= 980;
    if(mobile && light) return 'assets/ohgs-header-wordmark-light-mobile.png';
    if(mobile && !light) return 'assets/ohgs-header-wordmark-dark-mobile.png';
    if(!mobile && light) return 'assets/ohgs-header-wordmark-light.png';
    return 'assets/ohgs-header-wordmark-dark.png';
  }
  function setHeaderWordmark(){
    var src = brandSrc();
    document.querySelectorAll('header.site-header a.brand, .site-header a.brand, header.site-header .brand, .site-header .brand').forEach(function(brand){
      if(!brand.querySelector('img.ohgs-brand-wordmark')){
        brand.innerHTML = '<img class="ohgs-brand-wordmark" src="' + src + '" alt="OHGS Hardware">';
      }
      brand.querySelectorAll('img.ohgs-brand-wordmark').forEach(function(img){
        img.src = src;
        img.alt = 'OHGS Hardware';
      });
      brand.querySelectorAll('.brand-copy,.brand-title,.brand-subtitle,span').forEach(function(el){
        el.style.display = 'none';
      });
    });
    document.querySelectorAll('header.site-header .theme-toggle, .site-header .theme-toggle').forEach(function(el){
      el.textContent='';
      el.setAttribute('aria-label','Toggle light and dark mode');
    });
    document.querySelectorAll('header.site-header .whatsapp, .site-header .whatsapp').forEach(function(el){ el.textContent='WhatsApp'; });
    document.querySelectorAll('header.site-header .lang-toggle, .site-header .lang-toggle').forEach(function(el){
      var lang=(document.body.dataset && document.body.dataset.lang)||'en';
      el.textContent=lang==='sw'?'SW/EN':'EN/SW';
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', setHeaderWordmark); else setHeaderWordmark();
  ['pageshow','resize','orientationchange','load'].forEach(function(ev){ window.addEventListener(ev,setHeaderWordmark); });
  [50,180,500,1200].forEach(function(ms){ setTimeout(setHeaderWordmark,ms); });
  document.addEventListener('click', function(e){ if(e.target.closest('.theme-toggle,.lang-toggle,.menu-toggle')) [60,180,420].forEach(function(ms){ setTimeout(setHeaderWordmark,ms); }); }, true);
})();
