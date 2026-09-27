document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the 'is-active' class on both the 'navbar-burger' and the 'navbar-menu'
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

                if ($target.classList.contains('is-active')) {
                    $('#page-title').removeClass('hide-scroll')
                    $('.navbar').removeClass('navTop');
                    $('.navbar').addClass('navScroll');                
                } else {
                    $('.navbar').addClass('navTop');
                    $('.navbar').removeClass('navScroll');                
                    $('#page-title').addClass('hide-scroll')
                }
            });
        });
    }

    // Navbar menu anchor scroll functions
    $('#aboutButton').click(function () {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 1200);
        $('.navbar').addClass('navTop');
        $('.navbar').removeClass('navScroll');                
        $('#page-title').addClass('hide-scroll');
        $('.navbar-burger').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');
    });

    $('#skillsButton').click(function () {
        $('html, body').animate({
            scrollTop: $('#skills').offset().top
        }, 1200);
        $('.navbar-burger').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');
    });

    $('#projectsButton').click(function () {
        $('html, body').animate({
            scrollTop: $('#projects').offset().top
        }, 1200);
        $('.navbar-burger').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');
    });

    $('#musicButton').click(function () {
        $('html, body').animate({
            scrollTop: $('#music').offset().top
        }, 1200);
        $('.navbar-burger').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');
    });
    
    // Navbar transparency on scroll
    let lastY = $(document).scrollTop();

    $(document).scroll(function() {
        let pastTop = false;
        let windowHeight = $(window).height();
        let currY = $(document).scrollTop();
        if(currY > windowHeight - 100) {
            pastTop = true;
        } else {
            pastTop = false;
        }

        if (pastTop) {
            $('.navbar').removeClass('navTop');
            $('.navbar').addClass('navScroll');
            $('#page-title').removeClass('hide-scroll')
            if(currY > lastY) {
                $('.navbar').removeClass('hidden');
                $('.navbar').addClass('slideDown');   
            } else {
                $('.navbar').removeClass('slideDown');
                $('.navbar').addClass('hidden'); 
            }
        } else if (currY === 0) {
            if (!$('.navbar-burger').hasClass('is-active')) {
                $('.navbar').addClass('hidden');
                $('.navbar').removeClass('slideDown');
                $('.navbar').removeClass('navScroll');
                $('#page-title').addClass('hide-scroll')
            } else if ($('.navbar-menu').hasClass('is-active')) {
                $('#page-title').addClass('hide-scroll');
                $('.navbar').toggleClass('navScroll');
            } else {
                $('.navbar').addClass('hidden');
            }
        } else {
            $('.navbar').addClass('navTop');  
        }

        lastY = currY;
    });

});