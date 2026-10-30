(function(){
    var btn = document.getElementById('themeToggle');
    var root = document.documentElement;
    function apply(mode){
      if(mode === 'dark'){ root.setAttribute('data-theme','dark'); btn.textContent = '☀'; }
      else { root.setAttribute('data-theme','light'); btn.textContent = '☾'; }
    }
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch(e){}
    if(saved) apply(saved);
    btn.addEventListener('click', function(){
      var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem('theme', next); } catch(e){}
    });
  })();
