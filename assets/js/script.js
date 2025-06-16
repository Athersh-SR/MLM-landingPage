   window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.top_nav_wrap');
        if (window.scrollY > 50) {
            navbar.classList.add('compressed');
        } else {
            navbar.classList.remove('compressed');
        }
    });