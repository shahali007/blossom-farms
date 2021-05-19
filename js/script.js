// owlcarousel homepage

jQuery(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 0,
    dots: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    navText: [
      "<i class='owl-arrow-left'></i>",
      "<i class='owl-arrow-right'></i>",
    ],
  });
});

$(".btn-scroll-down > button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#home-start").offset().top,
    },
    1000
  );
});

// menu dropdown
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

//dropdown fix only for mobile
const $dropdown0 = $(".dropdown");
const $dropdown1 = $(".dropdown.only-mobile-common .fa-caret-down");
const $dropdownToggle1 = $(".dropdown-toggle");
const $dropdownMenu1 = $(".dropdown-menu");
const showClass1 = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(max-width: 992px)").matches) {
    $($dropdown1).click(function () {
      const $this = $(this).parent();
      $this.find($dropdownToggle1).attr("aria-expanded", "true");
      $this.find($dropdownMenu1).toggleClass(showClass1);
    });
  }
});
