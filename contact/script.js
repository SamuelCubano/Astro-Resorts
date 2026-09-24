// Form handling and interactivity for Astro Resort Contact Page

document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                showResponse('Por favor, completa todos los campos obligatorios.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showResponse('Por favor, ingresa un correo electrónico válido.', 'error');
                return;
            }
            
            // Simulate form submission (in a real app, this would send to a server)
            simulateFormSubmission({ name, email, phone, subject, message });
        });
    }
    
    function showResponse(message, type) {
        formResponse.textContent = message;
        formResponse.className = `form-response ${type}`;
        formResponse.style.display = 'block';
        
        // Hide response after 5 seconds
        setTimeout(() => {
            formResponse.style.display = 'none';
        }, 5000);
    }
    
    function simulateFormSubmission(formData) {
        // Show loading state
        const originalBtnText = contactForm.querySelector('.btn-primary').textContent;
        const submitBtn = contactForm.querySelector('.btn-primary');
        submitText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Enviando...</span>';
        
        // Simulate API call delay
        setTimeout(() => {
            // Randomly simulate success or failure for demo
            const isSuccess = Math.random() > 0.2; // 80% success rate
            
            if (isSuccess) {
                showResponse('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.', 'success');
                contactForm.reset();
            } else {
                showResponse('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.', 'error');
            }
            
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.textContent = submitText;
        }, 1500);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .form-group, .map-container');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add animation class to CSS (this would normally be in CSS, but adding via JS for demo)
    const style = document.createElement('style');
    style.textContent = `
        .card, .form-group, .map-container {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .card.animate-in, .form-group.animate-in, .map-container.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Staggered animations */
        .card:nth-child(1) { transition-delay: 0.1s; }
        .card:nth-child(2) { transition-delay: 0.2s; }
        .card:nth-child(3) { transition-delay: 0.3s; }
        .form-group:nth-child(1) { transition-delay: 0.1s; }
        .form-group:nth-child(2) { transition-delay: 0.2s; }
        .form-group:nth-child(3) { transition-delay: 0.3s; }
        .form-group:nth-child(4) { transition-delay: 0.4s; }
        .form-group:nth-child(5) { transition-delay: 0.5s; }
    `;
    document.head.appendChild(style);
    
    // Phone input formatting (optional enhancement)
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                value = value.substring(0, 10); // Max 10 digits for US format
                if (value.length > 3) {
                    value = `(${value.substring(0, 3)}) ${value.substring(3, 6)}`;
                    if (value.length > 9) {
                        value += `-${value.substring(6, 10)}`;
                    }
                } else if (value.length > 0) {
                    value = `(${value}`;
                }
                e.target.value = value;
            }
        });
    }
    
    // Add focus effects for better UX
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.borderColor = '#e74c3c';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.borderColor = '';
        });
    });
});