
(function () {
    var btn = document.getElementById('themeToggle');
    var root = document.documentElement;
    var logo = document.getElementById('site-logo');

    function apply(mode) {
        if (mode === 'dark') {
            root.setAttribute('data-theme', 'dark');
            if (btn) btn.textContent = '☀';

            // White logo for dark mode
            if (logo) logo.src = 'images/logo_dark.png';
        } else {
            root.setAttribute('data-theme', 'light');
            if (btn) btn.textContent = '☾';

            // Black logo for light mode
            if (logo) logo.src = 'images/logo_light.png';
        }
    }

    var saved = null;

    try {
        saved = localStorage.getItem('theme');
    } catch (e) {}

    apply(saved || root.getAttribute('data-theme') || 'light');

    if (btn) {
        btn.addEventListener('click', function () {
            var current = root.getAttribute('data-theme') === 'dark'
                ? 'dark'
                : 'light';

            var next = current === 'dark' ? 'light' : 'dark';

            apply(next);

            try {
                localStorage.setItem('theme', next);
            } catch (e) {}
        });
    }
})();


// TWINKLING STARS
const starsContainer = document.getElementById("stars");

if (starsContainer) {
    for (let i = 0; i < 50; i++) {
        const star = document.createElement("div");
        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 5 + "s";
        star.style.animationDuration = (2 + Math.random() * 4) + "s";

        starsContainer.appendChild(star);
    }
}
