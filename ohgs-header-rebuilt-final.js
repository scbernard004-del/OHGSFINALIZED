
(function(){
  function isLight(){
    return document.body.classList.contains('light') ||
      document.documentElement.classList.contains('light') ||
      document.documentElement.getAttribute('data-theme') === 'light';
  }
  function cleanHeader(){
    var header = document.querySelector('.site-header');
    if(!header) return;
    header.classList.add('ohgs-pro-visible-header');
    header.classList.remove('hide','hidden','is-hidden','header-hidden','nav-hidden','scroll-hide');
    document.body.classList.remove('hide-header','header-hidden','nav-hidden');
    header.style.display = 'flex';
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.left = '0';
    header.style.right = '0';
    header.style.zIndex = '2147483000';
    header.style.opacity = '1';
    header.style.visibility = 'visible';
    header.style.transform = 'translateY(0)';
    document.querySelectorAll('.theme-toggle').forEach(function(btn){
      btn.innerHTML = '<span class="ohgs-theme-icon" aria-hidden="true">' + (isLight() ? '☀️' : '🌙') + '</span>';
      btn.setAttribute('aria-label','Switch dark and light mode');
    });
  }
  function bindMenu(){
    var header = document.querySelector('.site-header');
    var btn = document.getElementById('menuBtn') || document.querySelector('.menu-toggle');
    var menu = document.getElementById('mainMenu') || document.querySelector('.nav-links');
    if(!btn || !menu || btn.dataset.ohgsBound) return;
    btn.dataset.ohgsBound = 'true';
    btn.addEventListener('click', function(){
      var open = menu.classList.toggle('open');
      if(header) header.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        menu.classList.remove('open');
        if(header) header.classList.remove('menu-open');
        btn.setAttribute('aria-expanded','false');
      });
    });
  }
  function run(){ cleanHeader(); bindMenu(); }
  if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', run); } else { run(); }
  window.addEventListener('load', run);
  window.addEventListener('pageshow', run);
  window.addEventListener('scroll', cleanHeader, {passive:true});
  window.addEventListener('resize', run);
  [100,400,1000,2500].forEach(function(ms){ setTimeout(run, ms); });
  var header = document.querySelector('.site-header');
  if(header && window.MutationObserver){
    new MutationObserver(run).observe(header,{attributes:true,attributeFilter:['class','style']});
    new MutationObserver(run).observe(document.body,{attributes:true,attributeFilter:['class','style']});
  }
})();
