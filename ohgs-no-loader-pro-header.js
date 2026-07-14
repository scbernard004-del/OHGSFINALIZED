
(function(){
  function isLightMode(){
    return document.body.classList.contains('light')||document.documentElement.classList.contains('light')||document.documentElement.getAttribute('data-theme')==='light';
  }
  function cleanThemeButton(){
    document.querySelectorAll('.theme-toggle').forEach(function(btn){
      btn.innerHTML='<span class="ohgs-theme-icon" aria-hidden="true">'+(isLightMode()?'☀️':'🌙')+'</span>';
      btn.setAttribute('aria-label','Switch dark and light mode');
      btn.setAttribute('title','Dark / Light mode');
    });
  }
  function forceReady(){
    document.body.classList.add('ohgs-site-ready');
    document.querySelectorAll('.loader,#loader,.ohgs-loader-screen').forEach(function(el){
      el.classList.add('hide','ohgs-loader-gone');
      el.style.display='none';
      el.style.opacity='0';
      el.style.visibility='hidden';
      el.style.pointerEvents='none';
    });
    document.documentElement.style.overflow='';
    document.body.style.overflow='';
  }
  function header(){
    var h=document.querySelector('.site-header');
    if(!h) return;
    h.classList.remove('hide','hidden','is-hidden','header-hidden','nav-hidden','scroll-hide');
    document.body.classList.remove('hide-header','header-hidden','nav-hidden');
    h.style.position='fixed';h.style.top='0';h.style.left='0';h.style.right='0';
    h.style.zIndex='2147483000';h.style.opacity='1';h.style.visibility='visible';h.style.transform='translateY(0)';
    if(window.scrollY>8){h.classList.add('scrolled','ohgs-sticky-active')}
  }
  function setProLogo(){
    document.querySelectorAll('.site-header .brand img,.site-header .ohgs-final-brand-icon').forEach(function(img){
      img.src='assets/ohgs-header-pro-badge.svg';
      img.alt='OHGS Hardware';
    });
  }
  function run(){forceReady();setProLogo();cleanThemeButton();header()}
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run)}else{run()}
  window.addEventListener('load',run);
  window.addEventListener('pageshow',run);
  window.addEventListener('scroll',header,{passive:true});
  window.addEventListener('resize',run);
  document.addEventListener('click',function(e){
    if(e.target&&e.target.closest('.theme-toggle,.lang-toggle')){[40,150,400].forEach(function(ms){setTimeout(run,ms)})}
  },true);
  [50,250,700,1500,3000].forEach(function(ms){setTimeout(run,ms)});
  var h=document.querySelector('.site-header');
  if(h&&window.MutationObserver){
    new MutationObserver(run).observe(h,{attributes:true,attributeFilter:['class','style']});
    new MutationObserver(run).observe(document.body,{attributes:true,attributeFilter:['class','style']});
  }
})();
