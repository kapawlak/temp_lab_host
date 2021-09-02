
  //Make Sidebar Functional
  (function () {
    'use strict'
    document.querySelector('#sidebar-button').addEventListener('click', function () {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
      console.log("pressed")
    })
  })()
document.getElementById('copyright').innerHTML=`©(2020-${new Date().getFullYear()}) UCSB ILG`

  //Function that determines the page to display based on URL Variable.
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var linkfile = urlParams.get('linkfile')
  if (linkfile == null) {
    linkfile = 'home'
  }

  function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
  function appresize(){
    document.getElementById('chatframe').height=(window.innerHeight-document.getElementById('chatframe').getBoundingClientRect().y) -10 +'px'
  }
  appresize()

  window.onresize=appresize

  init_nav(linkfile)

  
  window.onload = function (){
    
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        if (window.location.hash && isChrome) {
            setTimeout(function () {
                var hash = window.location.hash;
                window.location.hash = "";
                window.location.hash = hash;
                document.getElementById(hash).focus()
            }, 300);
          }
        }
