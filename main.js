document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-box a');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-btn');
    const sections = document.querySelectorAll('section');

    // Göm alla sektioner förutom home vid start
    sections.forEach(section => {
        if (section.id !== 'home') {
            section.style.display = 'none';
        }
    });

    // Funktion för att visa rätt sektion
    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }

    // Visa modal när man klickar på "anslut"
    document.querySelector('.nav-box li:nth-child(2)').addEventListener('click', function() {
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    });

    closeBtn.addEventListener('click', function() {
        modal.classList.remove('show');
        modal.addEventListener('transitionend', function() {
            modal.style.display = 'none';
        }, { once: true });
    });

    // Lägg klickhändelse på alla länkar
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSectionId = this.getAttribute('href').substring(1);
            showSection(targetSectionId);
        });
    });

    // Anslut-knapp
    document.getElementById('connect-btn').addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('show');
        modal.addEventListener('transitionend', function() {
            modal.style.display = 'none';
            const serverURL = 'fivem://connect/81.16.177.72:30195';
            window.open(serverURL, '_self', 'noopener');
        }, { once: true });
    });

    // Visa home som standard
    showSection('home');
});
