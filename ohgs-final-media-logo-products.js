
(function(){
  function ohgsFinalPolish(){
    document.querySelectorAll('header.site-header img, .footer img, .brand-panel img, .load-core img').forEach(function(img){
      img.style.objectFit='contain'; img.style.objectPosition='center';
    });
    document.querySelectorAll('.theme-toggle').forEach(function(btn){
      btn.setAttribute('aria-label','Switch dark and light mode');
      btn.setAttribute('title','Dark / Light mode');
    });
    document.querySelectorAll('img').forEach(function(img){
      if(!img.hasAttribute('loading') && !img.closest('.hero') && !img.closest('.loader') && !img.closest('#loader')){
        img.setAttribute('loading','lazy');
      }
    });
    document.querySelectorAll('video').forEach(function(v){
      v.setAttribute('preload','metadata');
      v.setAttribute('playsinline','');
    });
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',ohgsFinalPolish)}else{ohgsFinalPolish()}
  window.addEventListener('load',ohgsFinalPolish);
  setTimeout(ohgsFinalPolish,400);
  setTimeout(ohgsFinalPolish,1200);
})();
