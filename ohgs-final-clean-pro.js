
(function(){
  function all(sel){return Array.prototype.slice.call(document.querySelectorAll(sel))}
  function isLight(){return document.body.classList.contains('light')||document.documentElement.classList.contains('light')||document.documentElement.getAttribute('data-theme')==='light'}
  function polish(){
    document.body.classList.add('ohgs-clean-ready');
    all('.loader,#loader,.ohgs-loader-screen').forEach(function(el){el.style.display='none';el.style.opacity='0';el.style.visibility='hidden';el.style.pointerEvents='none'});
    var header=document.querySelector('.site-header');
    if(header){
      header.classList.add('ohgs-pro-visible-header');
      header.classList.remove('hide','hidden','is-hidden','header-hidden','nav-hidden','scroll-hide');
      header.style.display='flex';header.style.position='fixed';header.style.top='0';header.style.left='0';header.style.right='0';header.style.opacity='1';header.style.visibility='visible';header.style.transform='translateY(0)';header.style.zIndex='2147483000';
    }
    all('.theme-toggle').forEach(function(btn){
      btn.innerHTML='<span class="ohgs-theme-icon" aria-hidden="true">'+(isLight()?'☀️':'🌙')+'</span>';
      btn.setAttribute('aria-label','Switch dark and light mode');btn.setAttribute('title','Dark / Light mode');
    });
    all('img').forEach(function(img){
      if(!img.hasAttribute('loading')&&!img.closest('.site-header')) img.setAttribute('loading','lazy');
      img.addEventListener('error',function(){img.style.background='linear-gradient(135deg,#0b1f36,#102a44)';img.style.minHeight='160px'},{once:true});
    });
    all('video').forEach(function(v){v.setAttribute('preload','metadata');v.setAttribute('playsinline','')});
  }
  function bindMenu(){
    var header=document.querySelector('.site-header');
    var btn=document.querySelector('#menuBtn')||document.querySelector('.menu-toggle');
    var menu=document.querySelector('#mainMenu')||document.querySelector('.nav-links');
    if(!btn||!menu||btn.dataset.ohgsCleanBound) return;
    btn.dataset.ohgsCleanBound='true';
    btn.addEventListener('click',function(){
      var open=menu.classList.toggle('open');
      if(header) header.classList.toggle('menu-open',open);
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
    all('.nav-links a').forEach(function(a){a.addEventListener('click',function(){menu.classList.remove('open');if(header) header.classList.remove('menu-open');btn.setAttribute('aria-expanded','false')})});
  }
  function run(){polish();bindMenu()}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run); else run();
  window.addEventListener('load',run);window.addEventListener('pageshow',run);window.addEventListener('resize',run);window.addEventListener('scroll',polish,{passive:true});
  [200,700,1600,3200].forEach(function(ms){setTimeout(run,ms)});
})();
