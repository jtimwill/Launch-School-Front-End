$(function() {
  var $slideshow = $("#slideshow"),
      $nav = $slideshow.find("ul");

  $nav.on("click", "a", function(element) {
    element.preventDefault();
    //currentTarget finds the current DOM element being acted
    //upon among all of the elements within the $nav variable
    var $li = $(element.currentTarget).closest("li"),
        idx = $li.index(); //get current index

    //It is good practice to use stop() to stop any currently
    //running animations. That way, if someone clicks repeatedly,
    //you won't try to animate multiple times.
    $slideshow.find("figure").stop().filter(":visible").fadeOut(300);
    $slideshow.find("figure").eq(idx).delay(300).fadeIn(300);
    $nav.find(".active").removeClass("active");
    $li.addClass("active");
  });
});


//$slideshow.find("figure").filter(":visible").hide();
//$slideshow.find("figure").eq(idx).show();

//Equivalent

//$slideshow.find("figure").filter(":visible").hide().end().eq(idx).show();

//end() ends the most recent filtering operation
//it also returns the set of matched elements to
//their previous state
