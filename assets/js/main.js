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
    // 2. LÓGICA DE TRADUCCIÓN COMPLETA (ES / EN)
    // ==========================================
    const langBtn = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');

    if (langBtn && langText) {
        const translations = {
            es: {
                "nav-logo": "MI PORTAFOLIO",
                "nav-about": "Sobre Mí",
                "nav-projects": "Proyectos",
                "hero-tagline": "Ingeniería en Desarrollo de Software",
                "hero-title": "Desarrolladora Full Stack",
                "hero-bio": "Soy <strong>Jessica Angeles Resendiz Arroyo</strong>, Ingeniera especialista en el desarrollo de soluciones web y sistemas administrativos. Combino capacidad analítica, diseño cuidado y trabajo colaborativo, con experiencia en <strong>Java, Spring Boot, PHP, JavaScript y MySQL</strong>, además de certificación en <strong>Oracle Cloud e Inteligencia Artificial</strong>. Me enfoco en crear plataformas funcionales que optimizan procesos e impulsan el crecimiento organizacional.",
                "btn-cv": "Descargar CV",
                "btn-linkedin": "LinkedIn",
                "btn-github": "GitHub",
                "skills-title": "Pila Tecnológica",
                "projects-title": "Proyectos Destacados",
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
                
                /* Traducciones de la sección de contacto */
                "contact-quote-tagline": "HABLEMOS DE PROYECTOS",
                "contact-quote-title": "Transformemos ideas complejas en código eficiente y elegante.",
                "contact-quote-text": "Si buscas una desarrolladora Full Stack apasionada por la innovación, las buenas prácticas y la optimización de procesos, ¡me encantaría colaborar contigo!",
                "contact-response-time": "Te responderé a la brevedad posible",
                "contact-title": "Contáctame",
                "contact-subtitle": "Comparte tu correo electrónico y tu mensaje aquí para empezar a colaborar.",
                "label-email": "Tu correo electrónico",
                "label-message": "Tu mensaje",
                "btn-send": "Enviar Mensaje",
                "footer": "&copy; 2026 Desarrollado con elegancia & tecnología. Todos los derechos reservados."
            },
            en: {
                "nav-logo": "MY PORTFOLIO",
                "nav-about": "About Me",
                "nav-projects": "Projects",
                "hero-tagline": "Software Engineering",
                "hero-title": "Full Stack Developer",
                "hero-bio": "I am <strong>Jessica Angeles Resendiz Arroyo</strong>, a Software Engineer specializing in web solutions and administrative systems development. I combine analytical skills, careful design, and teamwork, with experience in <strong>Java, Spring Boot, PHP, JavaScript, and MySQL</strong>, along with certifications in <strong>Oracle Cloud and Artificial Intelligence</strong>. I focus on building functional platforms that streamline processes and drive organizational growth.",
                "btn-cv": "Download CV",
                "btn-linkedin": "LinkedIn",
                "btn-github": "GitHub",
                "skills-title": "Tech Stack",
                "projects-title": "Featured Projects",
                "p1-cat": "PROGRAMMING BLOG PROJECT",
                "p1-desc": "Informative blog about software development and web programming featuring a responsive 3-column architecture, technical concepts catalog, interactive modals, and contact form with dynamic alerts.",
                "p2-cat": "SPORTS E-COMMERCE",
                "p2-desc": "Web platform for skate community and management, featuring product catalog, registration and login system, and a dynamic interface.",
                "p3-cat": "BLOG REFACTORING",
                "p3-title": "ArroyoCode Blog Refactoring",
                "p3-desc": "Educational and informative portal on software development refactored with a responsive three-column layout, interactive catalog of technical concepts, integration of explanatory modals, roadmap, and contact form with validation.",
                "p4-cat": "ELECTRONIC COMPONENTS E-COMMERCE",
                "p4-desc": "E-commerce platform for electronic components refactored with responsive three-column layout, interactive catalog with dynamic filtering by category, brand, and price range, technical specs modals, and validation contact form.",
                "p5-cat": "FLOWER SHOP E-COMMERCE",
                "p5-desc": "Web platform for selling floral arrangements, bouquets, and special gifts, with a dynamic product catalog, intuitive navigation, and an optimized interface for online shopping.",
                
                /* Traducciones de la sección de contacto */
                "contact-quote-tagline": "LET'S TALK PROJECTS",
                "contact-quote-title": "Let's transform complex ideas into efficient and elegant code.",
                "contact-quote-text": "If you are looking for a Full Stack developer passionate about innovation, best practices, and process optimization, I would love to collaborate with you!",
                "contact-response-time": "I'll get back to you as soon as possible",
                "contact-title": "Contact Me",
                "contact-subtitle": "Share your email address and message here to start collaborating.",
                "label-email": "Your email address",
                "label-message": "Your message",
                "btn-send": "Send Message",
                "footer": "&copy; 2026 Developed with elegance & technology. All rights reserved."
            }
        };

        let currentLang = localStorage.getItem('portfolio-lang') || 'es';

        function applyLanguage(lang) {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    const icon = element.querySelector('i');
                    if (icon) {
                        element.innerHTML = `${icon.outerHTML} ${translations[lang][key]}`;
                    } else {
                        element.innerHTML = translations[lang][key];
                    }
                }
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
        }

        applyLanguage(currentLang);

        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            localStorage.setItem('portfolio-lang', currentLang);
            applyLanguage(currentLang);
        });
    }

    // ==========================================
    // 3. ENVÍO DEL FORMULARIO CON EMAILJS
    // ==========================================
    emailjs.init("pmJJUcYOx2BkDzWOf");

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const serviceID = 'service_3c8uemv';
            const templateID = 'template_svpzk8m';

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';

            emailjs.sendForm(serviceID, templateID, contactForm)
                .then(() => {
                    alert('¡Mensaje enviado con éxito!');
                    contactForm.reset();
                })
                .catch((err) => {
                    alert('Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo.');
                    console.error('EmailJS Error:', err);
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                });
        });
    }
});