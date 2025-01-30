document.addEventListener('DOMContentLoaded', () => {
    const headerNav = document.querySelector('header ul');
    const footer = document.querySelector('footer');
    const mainContent = document.querySelector('main');

    // Event delegation for hover effect
    headerNav.addEventListener('mouseenter', (event) => {
        if (event.target.tagName === 'A') {
            event.target.style.color = '#0056b3';
        }
    }, true);

    headerNav.addEventListener('mouseleave', (event) => {
        if (event.target.tagName === 'A') {
            event.target.style.color = '#007bff';
        }
    }, true);

    // Footer links scroll to section
    footer.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const target = document.querySelector(event.target.getAttribute('href'));
            if (target) {
                target.scrollIntoView();
            }
        }
    });

    // Fade-in effect for main content
    if (mainContent) {
        mainContent.classList.add('fade-in');
    }

    console.log('SkillHive script loaded successfully!');
});
