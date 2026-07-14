
(function(){
  function setPremiumHeader(){
    var header = document.querySelector('.site-header');
    if(!header) return;
    header.classList.add('ohgs-pro-visible-header');

    document.querySelectorAll('.ohgs-final-brand-icon, .site-header .brand img').forEach(function(img){
      if(!img.src || !img.src.includes('ohgs-header-logo-premium.svg')){
        img.src = './assets/ohgs-header-logo-premium.svg';
      }
      img.alt = 'OHGS Hardware';
      img.setAttribute('loading','eager');
      img.setAttribute('decoding','async');
      img.setAttribute('fetchpriority','high');
    });

    var btn = document.getElementById('menuBtn') || document.querySelector('.menu-toggle');
    var menu = document.getElementById('mainMenu') || document.querySelector('.nav-links');
    if(btn && menu && btn.dataset.ohgsPremiumBound !== 'true'){
      btn.dataset.ohgsPremiumBound = 'true';
      btn.setAttribute('type','button');
      btn.setAttribute('aria-label','Open menu');
      btn.innerHTML = '<span></span><span></span><span></span>';

      btn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        var open = !menu.classList.contains('open');
        menu.classList.toggle('open', open);
        header.classList.toggle('menu-open', open);
        btn.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      }, true);

      menu.querySelectorAll('a').forEach(function(a){
        a.addEventListener('click', function(){
          menu.classList.remove('open');
          header.classList.remove('menu-open');
          btn.classList.remove('is-open');
          btn.setAttribute('aria-expanded','false');
        });
      });

      document.addEventListener('click', function(e){
        if(window.innerWidth <= 980 && !header.contains(e.target)){
          menu.classList.remove('open');
          header.classList.remove('menu-open');
          btn.classList.remove('is-open');
          btn.setAttribute('aria-expanded','false');
        }
      });
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', setPremiumHeader);
  }else{
    setPremiumHeader();
  }
  window.addEventListener('load', setPremiumHeader);
  window.addEventListener('pageshow', setPremiumHeader);
  window.addEventListener('resize', setPremiumHeader);
  [80, 300, 900, 1800].forEach(function(ms){ setTimeout(setPremiumHeader, ms); });
})();
