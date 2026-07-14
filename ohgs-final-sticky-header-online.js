(function(){
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
  var ticking=false;
  function onScroll(){
    if(!ticking){
      window.requestAnimationFrame(function(){keepHeaderVisible();ticking=false});
      ticking=true;
    }
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',keepHeaderVisible)}
  else{keepHeaderVisible()}
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',keepHeaderVisible);
  window.addEventListener('orientationchange',keepHeaderVisible);
  window.addEventListener('pageshow',keepHeaderVisible);
  window.addEventListener('load',keepHeaderVisible);
  [60,250,800,1600,3000].forEach(function(ms){setTimeout(keepHeaderVisible,ms)});
  var header=document.querySelector('.site-header');
  if(header&&window.MutationObserver){
    new MutationObserver(keepHeaderVisible).observe(header,{attributes:true,attributeFilter:['class','style']});
    new MutationObserver(keepHeaderVisible).observe(document.body,{attributes:true,attributeFilter:['class','style']});
  }
})();
