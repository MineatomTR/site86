

window.onload = function() {
    
    const navLinks = document.querySelectorAll('nav ul li a');
    
    const sections = document.querySelectorAll('section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            sections.forEach(section => {
                section.classList.remove('active-section');
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            this.classList.add('active');
            
            const activeSectionId = this.getAttribute('href').substring(1);
            const activeSection = document.getElementById(activeSectionId);
            activeSection.classList.add('active-section');
        });
    });
    }