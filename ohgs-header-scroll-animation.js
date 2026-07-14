(function(){
  var lastY = window.scrollY || 0;
  var ticking = false;
  var lastDirection = "";

  function animateHeader(){
    var header = document.querySelector('.site-header');
    if(!header) return;

    var y = window.scrollY || document.documentElement.scrollTop || 0;
    var isScrolled = y > 18;
    var direction = y < lastY ? 'up' : 'down';

    header.classList.toggle('ohgs-animate-scrolled', isScrolled);

    if(direction === 'up' && isScrolled && lastDirection !== 'up'){
      header.classList.remove('ohgs-scroll-up');
      void header.offsetWidth;
      header.classList.add('ohgs-scroll-up');
      setTimeout(function(){ header.classList.remove('ohgs-scroll-up'); }, 320);
    }

    header.classList.remove('hide','hidden','is-hidden','header-hidden','nav-hidden','scroll-hide');
    header.style.transform = 'translateY(0)';
    header.style.opacity = '1';
    header.style.visibility = 'visible';

    lastDirection = direction;
    lastY = y;
    ticking = false;
  }

  function onScroll(){
    if(!ticking){
      window.requestAnimationFrame(animateHeader);
      ticking = true;
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', animateHeader);
  }else{
    animateHeader();
  }

  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', animateHeader);
  window.addEventListener('orientationchange', animateHeader);
  window.addEventListener('pageshow', animateHeader);
  window.addEventListener('load', animateHeader);

  [100, 400, 1000, 2400].forEach(function(ms){
    setTimeout(animateHeader, ms);
  });
})();
