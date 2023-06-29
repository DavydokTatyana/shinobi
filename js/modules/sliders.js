$(function () {
  $("#sliderBanner").slick({
    centerMode: true,
    infinite: true,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".banner__arr-prev"),
    nextArrow: $(".banner__arr-next"),
  });
});

$(function () {
  $("#navSlider").slick({
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".nav__arr-prev"),
    nextArrow: $(".nav__arr-next"),
  });
});

$(function () {
  $("#sliderColor").slick({
    dots: true,
    arrows: false,
    fade: true,
    cssEase: "linear",
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (slider, i) {
      return '<div class="dots-custom"></div>';
    },
  });
});

