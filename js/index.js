
(function () {
    const btn = document.getElementById('themeToggle');
    const root = document.documentElement;
    const logo = document.getElementById('site-logo');
    const stars = document.getElementById('stars');
    const flashbang = document.getElementById('flashbang');

    let initialLoad = true;
    let flashTimer = null;

    function apply(mode) {
        const isDark = mode === 'dark';

        // Change theme
        root.setAttribute('data-theme', isDark ? 'dark' : 'light');

        // Change theme button
        if (btn) {
            btn.textContent = isDark ? '☀' : '☾';
        }

        // Switch logo
        if (logo) {
            logo.src = isDark
                ? '/images/logo_dark.png'
                : '/images/logo_light.png';
        }

        // Hide stars in light mode
        if (stars) {
            stars.style.display = isDark ? 'block' : 'none';
        }

        // Stop any previous flashbang
        if (flashTimer !== null) {
            clearTimeout(flashTimer);
            flashTimer = null;
        }

        if (flashbang) {
            flashbang.classList.remove('playing');

            // Play only when switching to light mode
            if (!isDark && !initialLoad) {
                // Restart GIF from the beginning
                flashbang.src =
                    '/images/flashbang.gif?t=' + Date.now();

                flashbang.classList.add('playing');

                // Hide after 2 seconds
                flashTimer = setTimeout(function () {
                    flashbang.classList.remove('playing');
                    flashTimer = null;
                }, 2000);
            }
        }
    }

    // Load saved theme
    let saved = null;

    try {
        saved = localStorage.getItem('theme');
    } catch (e) {}

    const initialTheme =
        saved ||
        root.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light');

    apply(initialTheme);

    // Initial setup is finished
    initialLoad = false;

    // Theme toggle
    if (btn) {
        btn.addEventListener('click', function () {
            const current = root.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';

            apply(next);

            try {
                localStorage.setItem('theme', next);
            } catch (e) {}
        });
    }

    // Twinkling stars
    if (stars) {
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');

            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 5 + 's';
            star.style.animationDuration =
                (2 + Math.random() * 4) + 's';

            stars.appendChild(star);
        }
    }
})();
