(function(){
  function fastMedia(){
    var imgs = Array.prototype.slice.call(document.querySelectorAll('img'));
    imgs.forEach(function(img, index){
      if(!img.hasAttribute('decoding')) img.setAttribute('decoding','async');

      var inHeader = img.closest('.site-header');
      var inHero = img.closest('.hero') || img.closest('.hero-media');

      if(inHeader || (inHero && index < 6)){
        img.setAttribute('loading','eager');
        img.setAttribute('fetchpriority','high');
      }else{
        img.setAttribute('loading','lazy');
        img.setAttribute('fetchpriority','low');
      }

      if(!img.getAttribute('alt')) img.setAttribute('alt','OHGS Hardware image');
    });

    document.querySelectorAll('video').forEach(function(video){
      video.setAttribute('preload','metadata');
      video.setAttribute('playsinline','');
      if(!video.hasAttribute('controls')) video.setAttribute('controls','');
    });

    // Make videos load only when close to view.
    if('IntersectionObserver' in window){
      var videos = Array.prototype.slice.call(document.querySelectorAll('video'));
      var observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          var v = entry.target;
          if(entry.isIntersecting){
            v.setAttribute('preload','metadata');
            observer.unobserve(v);
          }
        });
      }, {rootMargin:'500px'});
      videos.forEach(function(v){ observer.observe(v); });
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', fastMedia);
  }else{
    fastMedia();
  }
  window.addEventListener('load', fastMedia);
  setTimeout(fastMedia, 900);
})();
