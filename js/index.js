
(function () {
    const btn = document.getElementById('themeToggle');
    const root = document.documentElement;
    const logo = document.getElementById('site-logo');
    const stars = document.getElementById('stars');
    const flashbang = document.getElementById('flashbang');

    let flashTimer = null;

    // Change theme
    function apply(mode, showFlash = false) {
        const isDark = mode === 'dark';

        root.setAttribute('data-theme', mode);

        if (btn) {
            btn.textContent = isDark ? '☀' : '☾';
            btn.setAttribute(
                'aria-label',
                isDark ? 'Switch to light mode' : 'Switch to dark mode'
            );
        }

        // Switch logo
        if (logo) {
            logo.src = isDark
                ? '/images/logo_dark.png'
                : '/images/logo_white.png';
        }

        // Stars
        if (stars) {
            stars.style.display = isDark ? 'block' : 'none';
        }

        // Flashbang
        clearTimeout(flashTimer);

        if (flashbang) {
            flashbang.classList.remove('playing');

            if (!isDark && showFlash) {
                flashbang.src = '/images/flashbang.gif?t=' + Date.now();
                flashbang.classList.add('playing');

                flashTimer = setTimeout(() => {
                    flashbang.classList.remove('playing');
                    flashTimer = null;
                }, 2000);
            }
        }
    }

    // Start in dark mode
    apply('dark');

    // Theme button
    if (btn) {
        btn.addEventListener('click', () => {
            const current = root.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';

            apply(next, true);
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
            star.style.animationDuration = (2 + Math.random() * 4) + 's';

            stars.appendChild(star);
        }
    }
})();
