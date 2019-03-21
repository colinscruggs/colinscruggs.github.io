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
  });

  $("#skillsButton").click(function () {
    $('html, body').animate({
      scrollTop: $("#skills").offset().top
    }, 1200);
  });

  $("#projectsButton").click(function () {
    $('html, body').animate({
      scrollTop: $("#projects").offset().top
    }, 1200);
  });

  $("#musicButton").click(function () {
    $('html, body').animate({
      scrollTop: $("#music").offset().top
    }, 1200);
  });

});