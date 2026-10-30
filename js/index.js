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

const starsContainer = document.getElementById("stars");

if (starsContainer) {
  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";

    starsContainer.appendChild(star);
  }
}