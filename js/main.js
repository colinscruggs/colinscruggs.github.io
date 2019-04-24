document.addEventListener('DOMContentLoaded', () => {

    // Hamburger menu code used from Bulma documentation:
    // https://bulma.io/documentation/components/navbar/#fixed-navbar

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

    // jQuery:
    // Navbar menu anchor scroll functions

    $("#aboutButton").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1200);
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    $("#skillsButton").click(function () {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1200);
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    $("#projectsButton").click(function () {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1200);
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    $("#musicButton").click(function () {
        $('html, body').animate({
            scrollTop: $("#music").offset().top
        }, 1200);
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
    
    // Navbar transparency on scroll
    var lastY = $(document).scrollTop();

    $(document).scroll(function() {
        var pastTop = false;
        var windowHeight = $(window).height();
        var currY = $(document).scrollTop();
        if(currY > windowHeight) {
            pastTop = true;
        } else {
            pastTop = false;
        }

        if(pastTop) {
            $('.navbar').removeClass("navTop");
            $('.navbar').addClass("navScroll");
            $('#page-title').removeClass("hide-scroll")
            if(currY > lastY) {
                $('.navbar').removeClass("hidden");
                $('.navbar').addClass("slideDown");   
            } else {
                $('.navbar').removeClass("slideDown");
                $('.navbar').addClass("hidden"); 
            }
        } else if(currY === 0) {
            $('.navbar').addClass("hidden");
            $('.navbar').removeClass("slideDown"); 
            $('#page-title').addClass("hide-scroll")
        } else {
            $('.navbar').removeClass("navScroll");
            $('.navbar').addClass("navTop");  

        }

        lastY = currY;
    });

    /* TODO: Fade in elements on scroll
    $(document).scroll(function () {
        var pageTop = $(document).scrollTop()
        var pageBottom = pageTop + $(window).height()
        var tags = $("hideme")
      
        for (var i = 0; i < tags.length; i++) {
          var tag = tags[i]
      
          if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible")
          }
        }
    }); */

});