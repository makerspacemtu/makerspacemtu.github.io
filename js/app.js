$(function() {
  // scroll to a specific element ID
  $(".scrollto").click(function(e) {
    e.preventDefault();
    var id = $(this).data("element");
    $("html, body").animate({
      scrollTop: $("#" + id).offset().top
    }, 400);
  });

  // menu on smaller devices
  $(".nav__menu-toggle").click(function(e) {
    e.preventDefault();
    $(".nav__link-list").slideToggle();
  })
});
