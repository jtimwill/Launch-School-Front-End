$(function() {
  $("#team li a").on("click", function(element) {
    element.preventDefault();
    var $element = $(this);

    $element.siblings(".modal").css({
      top: $(window).scrollTop() + 30
    });
    $element.nextAll("div").fadeIn(400);
  });

  $(".modal_layer, a.close").on("click", function(element) {
    element.preventDefault();

    $(".modal_layer, .modal").filter(":visible").fadeOut(400);
  });
});
