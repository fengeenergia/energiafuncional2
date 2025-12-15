// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('button[class="md:hidden"]');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'hidden md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8';
    mobileMenu.innerHTML = `
        <button class="absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <a href="#identificacao" class="text-xl font-medium">Identificação</a>
        <a href="#diagnostico" class="text-xl font-medium">Diagnóstico</a>
        <a href="#funciona" class="text-xl font-medium">Como Funciona</a>
        <a href="#cta" class="bg-primary text-white px-6 py-3 rounded-lg text-xl font-medium">Diagnóstico Grátis</a>
    `;
    document.body.appendChild(mobileMenu);

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    mobileMenu.querySelector('button').addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
    });

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
