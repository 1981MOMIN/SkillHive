// old javascript unrefined
const searchInput = document.getElementById('keywords');
searchInput.addEventListener('focus', function() {
    this.placeholder = ''; // Clear placeholder when focused
});
searchInput.addEventListener('blur', function() {
    this.placeholder = 'Search'; // Restore placeholder when blurred
});

// Search form submission event
function onSearchClick(event, form) {
    event.preventDefault();
    let query = form.search.value.trim();

    if (query.length > 0) {
        window.location.href = `/search.php?search=${query}`;
    } else {
        alert("Please enter a search term.");
    }
}

// Fade in animation for the main content
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('main');
    mainContent.classList.add('fade-in');
});
// JavaScript for SkillHive

document.addEventListener('DOMContentLoaded', () => {
    // Handle search input placeholder focus/blur styling
    const searchInput = document.querySelector('main input');

    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            searchInput.placeholder = '';
        });

        searchInput.addEventListener('blur', () => {
            searchInput.placeholder = 'Search for subject';
        });
    }

    // Add hover effect for navigation links
    const navLinks = document.querySelectorAll('header ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#0056b3';
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = '#007bff';
        });
    });

    // Add smooth scrolling for footer links
    const footerLinks = document.querySelectorAll('footer a');

    footerLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));

            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    console.log('SkillHive script loaded successfully!');
});











// Second refined javascript removed duplication is efficient
document.addEventListener('DOMContentLoaded', () => {
    // Handle search input placeholder focus/blur styling
    const searchInput = document.getElementById('keywords');

    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            searchInput.placeholder = '';
        });

        searchInput.addEventListener('blur', () => {
            searchInput.placeholder = 'Search for subject';
        });
    }

    // Add hover effect for navigation links
    const navLinks = document.querySelectorAll('header ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#0056b3';
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = '#007bff';
        });
    });

    // Add smooth scrolling for footer links
    const footerLinks = document.querySelectorAll('footer a');

    footerLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));

            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Fade-in animation for the main content
    const mainContent = document.querySelector('main');

    if (mainContent) {
        mainContent.classList.add('fade-in');
    }

    console.log('SkillHive script loaded successfully!');
});

// Search form submission event
function onSearchClick(event, form) {
    event.preventDefault();
    const query = form.search.value.trim();

    if (query.length > 0) {
        window.location.href = `/search.php?search=${query}`;
    } else {
        alert("Please enter a search term.");
    }
}














document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('keywords');
    const navLinks = document.querySelectorAll('header ul li a');
    const footerLinks = document.querySelectorAll('footer a');
    const mainContent = document.querySelector('main');

    // Handle search input focus/blur
    if (searchInput) {
        searchInput.addEventListener('focus', () => (searchInput.placeholder = ''));
        searchInput.addEventListener('blur', () => (searchInput.placeholder = 'Search for subject'));
    }

    // Navigation link hover effect
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => link.classList.add('hover-color'));
        link.addEventListener('mouseleave', () => link.classList.remove('hover-color'));
    });

    // Smooth scrolling for footer links
    footerLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Fade-in animation for main content
    mainContent?.classList.add('fade-in');

    console.log('SkillHive script loaded successfully!');
});

// Search form submission
function onSearchClick(event, form) {}
    event.preventDefault();
    const query = form.search.value.trim();
    query
        ? (window.location.href = `/search.php?search=${encodeURIComponent(query)}`)
        : alert('Please enter a search term.');