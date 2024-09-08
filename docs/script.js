document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Expandable perk cards
    document.querySelectorAll('.perk-card').forEach(card => {
        const toggle = card.querySelector('.perk-toggle');
        const content = card.querySelector('.perk-content');

        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            
            document.querySelectorAll('.perk-card').forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('expanded')) {
                    otherCard.classList.remove('expanded');
                    otherCard.querySelector('.perk-content').style.maxHeight = null;
                }
            });

            card.classList.toggle('expanded');
            
            if (card.classList.contains('expanded')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });

        card.addEventListener('click', (e) => {
            if (e.target === card || e.target.parentNode === card) {
                toggle.click();
            }
        });
    });

    // Scroll-based animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
