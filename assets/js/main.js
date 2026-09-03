document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. LÓGICA DE CAMBIO DE TEMA (LUNA / SOL)
    // ==========================================
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    if (themeBtn && themeIcon) {
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('portfolio-theme', newTheme);
            updateThemeIcon(newTheme);
        });

        function updateThemeIcon(theme) {
            if (theme === 'light') {
                themeIcon.className = 'bi bi-sun-fill';
            } else {
                themeIcon.className = 'bi bi-moon-stars-fill';
            }
        }
    }

    // ==========================================
    // 2. LÓGICA DE CAMBIO DE IDIOMA (ES / EN)
    // ==========================================
    const langBtn = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');

    if (langBtn && langText) {
        const translations = {
            es: {
                "nav-about": "Sobre Mí",
                "nav-projects": "Proyectos",
                "hero-title": "Desarrolladora Full Stack",
                "skills-title": "Pila Tecnológica",
                "projects-title": "Proyectos Destacados",
                "contact-title": "Contáctame"
            },
            en: {
                "nav-about": "About Me",
                "nav-projects": "Projects",
                "hero-title": "Full Stack Developer",
                "skills-title": "Tech Stack",
                "projects-title": "Featured Projects",
                "contact-title": "Contact Me"
            }
        };

        let currentLang = localStorage.getItem('portfolio-lang') || 'es';

        function applyLanguage(lang) {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });

            // Muestra EN si el idioma actual es Español (para indicar el cambio) y viceversa
            langText.textContent = lang === 'es' ? 'EN' : 'ES';
        }

        applyLanguage(currentLang);

        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            localStorage.setItem('portfolio-lang', currentLang);
            applyLanguage(currentLang);
        });
    }
});