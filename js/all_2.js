// Main Slider Animation

$(".slider-wrapper").on("translate.owl.carousel", function () {
    $(".slide-text  h1, .slide-text ul")
      .removeClass("fadeInDown animated")
      .css("opacity", "0");
    $(".slide-text  h2").removeClass("fadeInUp animated").css("opacity", "0");
    $(".slider-content-btn").removeClass("fadeInUp animated").css("opacity", "0");
  });
  
  $(".slider-wrapper").on("translated.owl.carousel", function () {
    $(".slide-text  h1, .slide-text ul")
      .addClass("fadeInDown animated")
      .css("opacity", "1");
    $(".slide-text  h2").addClass("fadeInUp animated").css("opacity", "1");
    $(".slider-content-btn").addClass("fadeInUp animated").css("opacity", "1");
  });