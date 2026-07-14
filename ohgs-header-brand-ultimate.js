
(function(){
  function normalizeBrand(){
    document.querySelectorAll('.site-header').forEach(function(header){
      var brand = header.querySelector('a.brand, a.ohgs-mobile-pro-brand');
      if(!brand) return;
      brand.classList.add('brand','ohgs-mobile-pro-brand');
      brand.innerHTML = '<img class="ohgs-mobile-pro-icon" src="assets/ohgs-header-brand-ultimate-icon.png" alt="OHGS Hardware logo"><span class="ohgs-mobile-pro-copy"><span class="ohgs-mobile-pro-title">OHGS</span><span class="ohgs-mobile-pro-subtitle">HARDWARE</span></span>';
      brand.setAttribute('href', './');
      brand.setAttribute('aria-label', 'OHGS Hardware home');
      var wt = header.querySelector('.whatsapp');
      if(wt){ wt.textContent = 'WhatsApp'; }
      var lt = header.querySelector('.lang-toggle');
      if(lt){
        var sw = (document.body.getAttribute('data-lang') === 'sw');
        lt.textContent = sw ? 'SW/EN' : 'EN/SW';
      }
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', normalizeBrand); else normalizeBrand();
  window.addEventListener('load', normalizeBrand);
  window.addEventListener('pageshow', normalizeBrand);
  window.addEventListener('resize', normalizeBrand);
  window.addEventListener('orientationchange', normalizeBrand);
  [60,200,600,1500].forEach(function(ms){ setTimeout(normalizeBrand, ms); });
  document.addEventListener('click', function(e){
    if(e.target.closest('.theme-toggle,.lang-toggle,.menu-toggle')) setTimeout(normalizeBrand, 120);
  }, true);
  var mo = new MutationObserver(function(){ normalizeBrand(); });
  mo.observe(document.documentElement, {subtree:true, childList:true, attributes:true, attributeFilter:['class','data-lang','data-theme']});
})();
