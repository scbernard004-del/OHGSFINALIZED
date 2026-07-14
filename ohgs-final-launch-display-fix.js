
(function(){
  var loaderRemoved=false;
  function isLightMode(){
    return document.body.classList.contains('light')||document.documentElement.classList.contains('light')||document.documentElement.getAttribute('data-theme')==='light';
  }
  function updateThemeButton(){
    document.querySelectorAll('.theme-toggle').forEach(function(btn){
      btn.innerHTML='<span class="ohgs-theme-icon" aria-hidden="true">'+(isLightMode()?'☀️':'🌙')+'</span>';
      btn.setAttribute('aria-label','Switch dark and light mode');
      btn.setAttribute('title','Dark / Light mode');
    });
  }
  function keepHeaderVisible(){
    var header=document.querySelector('.site-header');
    if(!header) return;
    header.classList.remove('hide','hidden','is-hidden','header-hidden','nav-hidden','scroll-hide');
    document.body.classList.remove('hide-header','header-hidden','nav-hidden');
    header.style.position='fixed';
    header.style.top='0';
    header.style.left='0';
    header.style.right='0';
    header.style.zIndex='2147483000';
    header.style.opacity='1';
    header.style.visibility='visible';
    header.style.pointerEvents='auto';
    header.style.transform='translateY(0)';
    if(window.scrollY>8){header.classList.add('ohgs-sticky-active','scrolled')}
    else{header.classList.remove('ohgs-sticky-active')}
  }
  function revealSite(){
    if(loaderRemoved) return;
    loaderRemoved=true;
    document.body.classList.add('ohgs-site-ready');
    document.querySelectorAll('.loader,#loader').forEach(function(loader){
      loader.classList.add('hide','ohgs-loader-gone');
      loader.style.opacity='0';
      loader.style.visibility='hidden';
      loader.style.pointerEvents='none';
      setTimeout(function(){loader.style.display='none'},120);
    });
    document.documentElement.style.overflow='';
    document.body.style.overflow='';
    keepHeaderVisible();
    updateThemeButton();
  }
  function boot(){
    updateThemeButton();
    keepHeaderVisible();
    setTimeout(revealSite,350);
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',boot)}else{boot()}
  window.addEventListener('load',function(){updateThemeButton();keepHeaderVisible();revealSite()});
  window.addEventListener('pageshow',function(){updateThemeButton();keepHeaderVisible();revealSite()});
  window.addEventListener('scroll',keepHeaderVisible,{passive:true});
  window.addEventListener('resize',keepHeaderVisible);
  window.addEventListener('orientationchange',keepHeaderVisible);
  document.addEventListener('click',function(e){
    if(e.target&&e.target.closest('.theme-toggle,.lang-toggle')){
      [50,180,450].forEach(function(ms){setTimeout(function(){updateThemeButton();keepHeaderVisible()},ms)});
    }
  },true);
  [700,1300,2500].forEach(function(ms){setTimeout(function(){updateThemeButton();keepHeaderVisible();revealSite()},ms)});
  var header=document.querySelector('.site-header');
  if(header&&window.MutationObserver){
    new MutationObserver(function(){keepHeaderVisible();updateThemeButton()}).observe(header,{attributes:true,attributeFilter:['class','style']});
    new MutationObserver(function(){keepHeaderVisible();updateThemeButton()}).observe(document.body,{attributes:true,attributeFilter:['class','style']});
  }
})();
