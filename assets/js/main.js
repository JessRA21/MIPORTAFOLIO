document.addEventListener('DOMContentLoaded', () => {

    // Funciones que se ejecutan cada vez que cambia el idioma
    // (la sección 4 de certificados se suscribe aquí).
    const languageHooks = [];

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
    // 2. LÓGICA DE TRADUCCIÓN COMPLETA (ES / EN)
    // ==========================================
    const langBtn = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');

    if (langBtn && langText) {
        const translations = {
            es: {
                "doc-title": "Portafolio Innovador | Full Stack Developer",
                "nav-logo": "MI PORTAFOLIO",
                "nav-about": "Sobre Mí",
                "nav-projects": "Proyectos",
                "nav-certs": "Certificaciones",
                "theme-title": "Cambiar tema",
                "lang-title": "Cambiar idioma",
                "profile-alt": "Foto de perfil",
                "hero-tagline": "Ingeniería en Desarrollo de Software",
                "hero-title": "Desarrolladora Full Stack",
                "hero-bio": "Soy <strong>Jessica Angeles Resendiz Arroyo</strong>, Ingeniera especialista en el desarrollo de soluciones web y sistemas administrativos. Combino capacidad analítica, diseño cuidado y trabajo colaborativo, con experiencia en <strong>Java, Spring Boot, PHP, JavaScript y MySQL</strong>, además de certificación en <strong>Oracle Cloud e Inteligencia Artificial</strong>. Me enfoco en crear plataformas funcionales que optimizan procesos e impulsan el crecimiento organizacional.",
                "btn-cv": "Descargar CV",
                "btn-linkedin": "LinkedIn",
                "btn-github": "GitHub",
                "skills-title": "Pila Tecnológica",
                "projects-title": "Proyectos Destacados",
                "repo-title": "Ver repositorio del proyecto",
                "demo-title": "Ver sitio demo",
                "p1-alt": "Proyecto Blog de Programación",
                "p1-cat": "PROYECTO BLOG DE PROGRAMACIÓN",
                "p1-desc": "Blog informativo sobre desarrollo de software y programación web con arquitectura responsiva de 3 columnas, catálogo de conceptos técnicos, modales interactivos y formulario de contacto con alertas dinámicas.",
                "p2-cat": "E-COMMERCE DEPORTIVO",
                "p2-desc": "Plataforma web para la gestión y comunidad de skate, con catálogo de productos, sistema de registro e inicio de sesión, y una interfaz dinámica.",
                "p3-cat": "REFACTORIZACIÓN DE BLOG",
                "p3-title": "Refactorización del Blog ArroyoCode",
                "p3-desc": "Portal educativo e informativo sobre desarrollo de software refactorizado con maquetación responsiva de tres columnas, catálogo interactivo de conceptos técnicos, integración de modales explicativos, hoja de ruta temática y formulario de contacto con validación y alertas dinámicas descartables.",
                "p4-cat": "E-COMMERCE DE COMPONENTES ELECTRÓNICOS",
                "p4-desc": "Plataforma e-commerce para la comercialización de componentes electrónicos refactorizada con maquetación responsiva de tres columnas, catálogo interactivo con filtrado dinámico por categoría, marca y rango de precios, integración de modales con especificaciones técnicas detalladas, hoja de ruta para proyectos de electrónica y formulario de contacto con validación y alertas dinámicas descartables.",
                "p5-cat": "E-COMMERCE FLORERÍA",
                "p5-desc": "Plataforma web para la comercialización y venta de arreglos florales, ramos y detalles especiales, con catálogo dinámico de productos, navegación intuitiva y una interfaz optimizada para compras y cotizaciones en línea.",

                /* Certificaciones y constancias */
                "certs-title": "Certificaciones y Constancias",
                "certs-subtitle": "Cursos y certificaciones que respaldan mi formación y mi aprendizaje continuo.",
                "cert-btn": "Ver certificado",
                "const-btn": "Ver constancia",

                /* Traducciones de la sección de contacto */
                "contact-quote-tagline": "HABLEMOS DE PROYECTOS",
                "contact-quote-title": "Transformemos ideas complejas en código eficiente y elegante.",
                "contact-quote-text": "Si buscas una desarrolladora Full Stack apasionada por la innovación, las buenas prácticas y la optimización de procesos, ¡me encantaría colaborar contigo!",
                "contact-response-time": "Te responderé a la brevedad posible.",
                "contact-title": "Contáctame",
                "contact-subtitle": "Comparte tu correo electrónico y tu mensaje aquí para empezar a colaborar.",
                "label-email": "Tu correo electrónico",
                "label-message": "Tu mensaje",
                "btn-send": "Enviar Mensaje",

                /* Pie de página */
                "footer-made": "Desarrollado con",
                "footer-by": "por",
                "footer-rights": "&copy; 2026 MI PORTAFOLIO. Todos los derechos reservados."
            },
            en: {
                "doc-title": "Innovative Portfolio | Full Stack Developer",
                "nav-logo": "MY PORTFOLIO",
                "nav-about": "About Me",
                "nav-projects": "Projects",
                "nav-certs": "Certifications",
                "theme-title": "Change theme",
                "lang-title": "Change language",
                "profile-alt": "Profile photo",
                "hero-tagline": "Software Development Engineering",
                "hero-title": "Full Stack Developer",
                "hero-bio": "I am <strong>Jessica Angeles Resendiz Arroyo</strong>, a Software Engineer specializing in web solutions and administrative systems development. I combine analytical skills, careful design, and teamwork, with experience in <strong>Java, Spring Boot, PHP, JavaScript, and MySQL</strong>, along with certifications in <strong>Oracle Cloud and Artificial Intelligence</strong>. I focus on building functional platforms that streamline processes and drive organizational growth.",
                "btn-cv": "Download CV",
                "btn-linkedin": "LinkedIn",
                "btn-github": "GitHub",
                "skills-title": "Tech Stack",
                "projects-title": "Featured Projects",
                "repo-title": "View project repository",
                "demo-title": "View live demo",
                "p1-alt": "Programming Blog Project",
                "p1-cat": "PROGRAMMING BLOG PROJECT",
                "p1-desc": "Informative blog about software development and web programming featuring a responsive 3-column architecture, technical concepts catalog, interactive modals, and contact form with dynamic alerts.",
                "p2-cat": "SPORTS E-COMMERCE",
                "p2-desc": "Web platform for skate community and management, featuring product catalog, registration and login system, and a dynamic interface.",
                "p3-cat": "BLOG REFACTORING",
                "p3-title": "ArroyoCode Blog Refactoring",
                "p3-desc": "Educational and informative portal on software development refactored with a responsive three-column layout, interactive catalog of technical concepts, integration of explanatory modals, thematic roadmap, and contact form with validation and dismissible dynamic alerts.",
                "p4-cat": "ELECTRONIC COMPONENTS E-COMMERCE",
                "p4-desc": "E-commerce platform for electronic components refactored with a responsive three-column layout, interactive catalog with dynamic filtering by category, brand, and price range, integration of modals with detailed technical specifications, a roadmap for electronics projects, and contact form with validation and dismissible dynamic alerts.",
                "p5-cat": "FLOWER SHOP E-COMMERCE",
                "p5-desc": "Web platform for selling floral arrangements, bouquets, and special gifts, with a dynamic product catalog, intuitive navigation, and an optimized interface for online shopping and quotes.",

                /* Certifications and certificates */
                "certs-title": "Certifications & Credentials",
                "certs-subtitle": "Courses and certifications that support my training and my continuous learning.",
                "cert-btn": "View certificate",
                "const-btn": "View proof of completion",

                /* Traducciones de la sección de contacto */
                "contact-quote-tagline": "LET'S TALK PROJECTS",
                "contact-quote-title": "Let's transform complex ideas into efficient and elegant code.",
                "contact-quote-text": "If you are looking for a Full Stack developer passionate about innovation, best practices, and process optimization, I would love to collaborate with you!",
                "contact-response-time": "I'll get back to you as soon as possible.",
                "contact-title": "Contact Me",
                "contact-subtitle": "Share your email address and message here to start collaborating.",
                "label-email": "Your email address",
                "label-message": "Your message",
                "btn-send": "Send Message",

                /* Footer */
                "footer-made": "Made with",
                "footer-by": "by",
                "footer-rights": "&copy; 2026 MY PORTFOLIO. All rights reserved."
            }
        };

        let currentLang = localStorage.getItem('portfolio-lang') || 'es';

        function applyLanguage(lang) {
            const dict = translations[lang] || translations.es;

            // Idioma del documento y título de la pestaña
            document.documentElement.setAttribute('lang', lang);
            if (dict['doc-title']) document.title = dict['doc-title'];

            // Textos
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (dict[key]) {
                    const icon = element.querySelector('i');
                    if (icon) {
                        element.innerHTML = `${icon.outerHTML} ${dict[key]}`;
                    } else {
                        element.innerHTML = dict[key];
                    }
                }
            });

            // Atributos: tooltips (title), accesibilidad (aria-label) y texto alternativo (alt)
            document.querySelectorAll('[data-i18n-title]').forEach(el => {
                const key = el.getAttribute('data-i18n-title');
                if (dict[key]) el.setAttribute('title', dict[key]);
            });
            document.querySelectorAll('[data-i18n-aria]').forEach(el => {
                const key = el.getAttribute('data-i18n-aria');
                if (dict[key]) el.setAttribute('aria-label', dict[key]);
            });
            document.querySelectorAll('[data-i18n-alt]').forEach(el => {
                const key = el.getAttribute('data-i18n-alt');
                if (dict[key]) el.setAttribute('alt', dict[key]);
            });

            // Cambiar placeholders del formulario
            const emailInput = document.getElementById('user-email');
            const messageInput = document.getElementById('user-message');
            if (emailInput && messageInput) {
                emailInput.placeholder = lang === 'es' ? 'ejemplo@correo.com' : 'example@mail.com';
                messageInput.placeholder = lang === 'es' ? 'Escribe aquí tu mensaje...' : 'Write your message here...';
            }

            // Indicador del botón (Muestra ES cuando está en EN y viceversa)
            langText.textContent = lang === 'es' ? 'EN' : 'ES';

            // Avisar a otras secciones (certificados: fechas, orden y botones)
            languageHooks.forEach(fn => fn(lang));
        }

        applyLanguage(currentLang);

        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            localStorage.setItem('portfolio-lang', currentLang);
            applyLanguage(currentLang);
        });
    }

    // =====================================================
    // 3. ENVÍO DEL FORMULARIO CON EMAILJS + VALIDACIONES ANTI-SPAM
    // =====================================================
    // Si el SDK de EmailJS no carga (bloqueador de anuncios, sin conexión),
    // el resto del portafolio sigue funcionando.
    if (typeof emailjs !== 'undefined') {
        emailjs.init("pmJJUcYOx2BkDzWOf");
    }

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = document.getElementById('user-email');
            const emailValue = emailInput.value.trim().toLowerCase();
            const currentLang = localStorage.getItem('portfolio-lang') || 'es';

            // 1. RegEx de sintaxis estándar
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            // 2. RegEx para detectar escritura aleatoria de consonantes (5 o más consonantes seguidas)
            const gibberishRegex = /[bcdfghjklmnpqrstvwxyz]{5,}/i;

            // 3. Lista negra de dominios temporales/desechables comunes
            const disposableDomains = [
                'yopmail.com', 'mailinator.com', '10minutemail.com', 'guerrillamail.com', 
                'tempmail.com', 'dispostable.com', 'trashmail.com', 'sharklasers.com'
            ];

            const emailUser = emailValue.split('@')[0] || '';
            const emailDomain = emailValue.split('@')[1] || '';

            // Validaciones secuenciales
            if (!emailRegex.test(emailValue)) {
                const msg = currentLang === 'es'
                    ? 'Por favor, ingresa una dirección de correo electrónico válida.'
                    : 'Please enter a valid email address.';
                alert(msg);
                emailInput.focus();
                return;
            }

            if (disposableDomains.includes(emailDomain)) {
                const msg = currentLang === 'es'
                    ? 'No se permiten direcciones de correo temporales o desechables.'
                    : 'Disposable email addresses are not allowed.';
                alert(msg);
                emailInput.focus();
                return;
            }

            if (gibberishRegex.test(emailUser) || emailUser.length < 3) {
                const msg = currentLang === 'es'
                    ? 'Por favor, ingresa una dirección de correo real.'
                    : 'Please enter a real email address.';
                alert(msg);
                emailInput.focus();
                return;
            }

            const serviceID = 'service_s5gyptr';
            const templateID = 'template_svpzk8m';

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = currentLang === 'es' 
                ? '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...'
                : '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';

            emailjs.sendForm(serviceID, templateID, contactForm)
                .then(() => {
                    const successMsg = currentLang === 'es' 
                        ? '¡Mensaje enviado con éxito!' 
                        : 'Message sent successfully!';
                    alert(successMsg);
                    contactForm.reset();
                })
                .catch((err) => {
                    const errorMsg = currentLang === 'es' 
                        ? 'Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo.' 
                        : 'An error occurred while sending the message. Please try again.';
                    alert(errorMsg);
                    console.error('EmailJS Error:', err);
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                });
        });
    }

    // =====================================================
    // 4. CERTIFICADOS: TRADUCCIÓN, ORDEN ALFABÉTICO Y "VER MÁS"
    //    Todo sale del propio HTML de cada tarjeta:
    //      - Título: texto en español + data-en="traducción"
    //      - Fecha:  se escribe una vez, ej. "05 Nov 2026"
    //    Así un certificado nuevo nunca depende de claves en este archivo.
    // =====================================================
    const CERTS_VISIBLES = 2;

    const certLabels = {
        es: { more: 'Ver más', less: 'Ver menos' },
        en: { more: 'Show more', less: 'Show less' }
    };

    const MESES = {
        es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };
    const MES_INDICE = { ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5, jul: 6, ago: 7, sep: 8, set: 8, oct: 9, nov: 10, dic: 11 };

    // "05 Nov 2026" / "5 de noviembre de 2026" -> { day: '05', month: 10, year: '2026' }
    function parseFechaEs(text) {
        const m = /(\d{1,2})\s+(?:de\s+)?([A-Za-zÁÉÍÓÚáéíóúñÑ]+)\.?,?\s+(?:de\s+)?(\d{4})/.exec(text || '');
        if (!m) return null;
        const month = MES_INDICE[m[2].slice(0, 3).toLowerCase()];
        if (month === undefined) return null;
        return { day: m[1].padStart(2, '0'), month, year: m[3] };
    }

    // Guardar el texto original (español) de títulos y fechas
    const certTitles = Array.from(document.querySelectorAll('.cert-info h3'));
    const certDates = Array.from(document.querySelectorAll('.cert-date-text'));
    [...certTitles, ...certDates].forEach((el) => { el.dataset.es = el.textContent.trim(); });

    // Si copiaste una tarjeta y olvidaste cambiar data-en, se muestra el título en español
    // en lugar de uno ajeno.
    const traduccionesVistas = new Map();
    certTitles.forEach((el) => {
        const en = (el.dataset.en || '').trim();
        if (!en) return;
        const previo = traduccionesVistas.get(en);
        if (previo !== undefined && previo !== el.dataset.es) {
            console.warn(`[certificados] "${el.dataset.es}" repite el data-en de "${previo}". Se muestra en español.`);
            delete el.dataset.en;
        } else {
            traduccionesVistas.set(en, el.dataset.es);
        }
    });

    const certSection = document.getElementById('certificates');
    const certGroups = [];

    document.querySelectorAll('.cert-group .certs-grid').forEach((grid) => {
        const total = grid.querySelectorAll('.cert-card').length;
        let btn = null;

        if (total > CERTS_VISIBLES) {
            const wrap = document.createElement('div');
            wrap.className = 'cert-more-wrap';

            btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'btn-outline-rose cert-more-btn';
            btn.setAttribute('aria-expanded', 'false');
            btn.innerHTML = '<span class="cert-more-text"></span><i class="bi bi-chevron-down"></i>';

            wrap.appendChild(btn);
            grid.insertAdjacentElement('afterend', wrap);

            btn.addEventListener('click', () => {
                const topAntes = btn.getBoundingClientRect().top;
                const open = grid.classList.toggle('is-expanded');
                btn.classList.toggle('is-open', open);
                btn.setAttribute('aria-expanded', String(open));
                renderCerts(localStorage.getItem('portfolio-lang') || 'es');
                if (!open) {
                    // Al contraer, mantener el botón en el mismo lugar de la pantalla
                    const topDespues = btn.getBoundingClientRect().top;
                    window.scrollBy({ top: topDespues - topAntes, left: 0, behavior: 'instant' });
                }
            });
        }

        certGroups.push({ grid, btn });
    });

    function renderCerts(lang) {
        const labels = certLabels[lang] || certLabels.es;
        const collator = new Intl.Collator(lang, { sensitivity: 'base', numeric: true });

        // Títulos: español (HTML) o su data-en
        certTitles.forEach((el) => {
            el.textContent = (lang === 'en' && el.dataset.en) ? el.dataset.en.trim() : el.dataset.es;
        });

        // Fechas: se reescriben en el formato del idioma activo
        certDates.forEach((el) => {
            const fecha = parseFechaEs(el.dataset.es);
            if (fecha) {
                el.textContent = lang === 'en'
                    ? `${MESES.en[fecha.month]} ${fecha.day}, ${fecha.year}`
                    : `${fecha.day} ${MESES.es[fecha.month]} ${fecha.year}`;
            } else {
                el.textContent = (lang === 'en' && el.dataset.en) ? el.dataset.en.trim() : el.dataset.es;
            }
        });

        // Instituciones en orden alfabético
        if (certSection) {
            Array.from(certSection.querySelectorAll('.cert-group'))
                .sort((a, b) => collator.compare(
                    a.querySelector('.cert-group-title').textContent.trim(),
                    b.querySelector('.cert-group-title').textContent.trim()
                ))
                .forEach((group) => certSection.appendChild(group));
        }

        certGroups.forEach(({ grid, btn }) => {
            // Certificados de cada institución en orden alfabético (según el idioma mostrado)
            const cards = Array.from(grid.querySelectorAll('.cert-card'));
            cards.sort((a, b) => collator.compare(
                a.querySelector('.cert-info h3').textContent.trim(),
                b.querySelector('.cert-info h3').textContent.trim()
            ));

            // Solo los primeros quedan visibles; el resto se muestra con "Ver más"
            cards.forEach((card, index) => {
                grid.appendChild(card);
                card.classList.toggle('cert-extra', index >= CERTS_VISIBLES);
            });

            if (btn) {
                const text = btn.querySelector('.cert-more-text');
                if (text) {
                    text.textContent = grid.classList.contains('is-expanded') ? labels.less : labels.more;
                }
            }
        });
    }

    languageHooks.push(renderCerts);
    renderCerts(localStorage.getItem('portfolio-lang') || 'es');

});