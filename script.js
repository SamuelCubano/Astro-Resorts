/* ===== Mobile Navigation Toggle ===== */
const navToggle = document.getElementById('navToggle');
const navList = document.querySelector('.nav__list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('nav__list--open');
});

/* Close mobile menu on nav link click */
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('nav__list--open');
    });
});

/* ===== Hero Starfield ===== */
function createStars() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const starCount = 120;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('hero__star');

        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.6 + 0.2;
        const animDelay = Math.random() * 4;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        star.style.opacity = `${opacity}`;
        star.style.animationDelay = `${animDelay}s`;

        hero.appendChild(star);
    }
}

createStars();

/* ===== Hero Scroll Down Button ===== */
const scrollDownBtn = document.querySelector('.hero__scroll-down');

if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', () => {
        const target = document.querySelector('.section--light');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

/* ===== Testimonial Slider ===== */
const testimonials = [
    {
        text: '"Una experiencia que trasciende la tierra. Dormir bajo el cosmos fue mágico, y el servicio impecable superó todas mis expectativas."',
        name: 'María Elena R.',
        role: 'Viajera Frecuente',
        avatar: 'M'
    },
    {
        text: '"Las suites con techos de cristal abiertos al cosmos fueron simplemente espectaculares. Nunca había visto tanto asombro en una sola noche."',
        name: 'Carlos D.',
        role: 'Astrónomo Profesional',
        avatar: 'C'
    },
    {
        text: '"El wellness cósmico mejoró mi bienestar más de lo que imaginaba. Cualquier viaje futuro debe incluir Astro Resorts."',
        name: 'Sofía M.',
        role: 'Influencer de Viajes',
        avatar: 'S'
    }
];

let currentTestimonial = 0;
const slider = document.getElementById('testimoniosSlider');
const dotsContainer = document.getElementById('testimoniosDots');

function renderTestimonial(index) {
    if (!slider) return;

    const t = testimonials[index];
    slider.innerHTML = `
        <div class="testimonio active">
            <div class="testimonio__content">
                <p class="testimonio__text">${t.text}</p>
            </div>
            <div class="testimonio__author">
                <div class="testimonio__avatar">${t.avatar}</div>
                <div class="testimonio__info">
                    <span class="testimonio__name">${t.name}</span>
                    <span class="testimonio__role">${t.role}</span>
                </div>
            </div>
        </div>
    `;
}

function renderDots() {
    if (!dotsContainer) return;

    let dotsHTML = '';
    testimonials.forEach((_, i) => {
        dotsHTML += `<button class="dot ${i === 0 ? 'dot--active' : ''}" data-dot="${i}"></button>`;
    });
    dotsContainer.innerHTML = dotsHTML;

    document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', () => {
            currentTestimonial = parseInt(dot.dataset.dot);
            updateSlider();
        });
    });
}

function updateSlider() {
    renderTestimonial(currentTestimonial);
    const dots = document.querySelectorAll('.dot');
    if (dots.length) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('dot--active', i === currentTestimonial);
        });
    }
}

if (slider && dotsContainer) {
    renderTestimonial(0);
    renderDots();

    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateSlider();
    }, 5000);
}

/* ===== Newsletter Form ===== */
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;

        if (email) {
            alert(`¡Gracias por suscribirte, ${email}! Pronto recibirás nuestras ofertas cósmicas.`);
            newsletterForm.reset();
        }
    });
}
