
/* OHGS logo all pages final helper */
(function(){
  function fixHeaderLogo(){
    document.querySelectorAll('header.site-header a.brand img, .site-header a.brand img').forEach(function(img){
      img.src = 'assets/ohgs-header-logo-final.png';
      img.alt = 'OHGS Hardware logo';
      img.style.objectFit = 'contain';
      img.style.objectPosition = 'center';
      img.style.backgroundColor = '#ffffff';
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', fixHeaderLogo);
  }else{
    fixHeaderLogo();
  }
  window.addEventListener('pageshow', fixHeaderLogo);
})();
