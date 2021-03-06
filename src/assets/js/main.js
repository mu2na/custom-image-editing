"user strict";

// Preloader
$(window).on("load", function () {
	$(".preloader").fadeOut(1000);
});

//Menu Dropdown
$("ul>li>.sub-menu").parent("li").addClass("has-sub-menu");

$(".menu li a").on("click", function () {
	var element = $(this).parent("li");
	if (element.hasClass("open")) {
		element.removeClass("open");
		element.find("li").removeClass("open");
		element.find("ul").slideUp(300, "swing");
	} else {
		element.addClass("open");
		element.children("ul").slideDown(300, "swing");
		element.siblings("li").children("ul").slideUp(300, "swing");
		element.siblings("li").removeClass("open");
		element.siblings("li").find("li").removeClass("open");
		element.siblings("li").find("ul").slideUp(300, "swing");
	}
});

// Responsive Menu
var headerTrigger = $(".header-trigger");
headerTrigger.on("click", function () {
	$(".menu").toggleClass("active");
	$(".overlay").toggleClass("active");
});

// Overlay Event
var over = $(".overlay");
over.on("click", function () {
	$(".overlay").removeClass("overlay-dark");
	$(".overlay").removeClass("active");
	$(".menu, .header-trigger").removeClass("active");
	$(".subscription-wrapper").removeClass("active");
});

// Sticky Menu
window.addEventListener("scroll", function () {
	var header = document.querySelector(".header");
	if ($(".header")) {
		header.classList.toggle("sticky", window.scrollY > 0);
	}
});

// Scroll To Top
var scrollTop = $(".scrollToTop");
$(window).on("scroll", function () {
	if ($(this).scrollTop() < 300) {
		scrollTop.removeClass("active");
	} else {
		scrollTop.addClass("active");
	}
});

//Click event to scroll to top
$(".scrollToTop").on("click", function () {
	$("html, body").animate(
		{
			scrollTop: 0,
		},
		300
	);
	return false;
});

$(".testimonial-slider").slick({
	fade: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	infinite: true,
	autoplay: true,
	pauseOnHover: true,
	centerMode: false,
	dots: false,
	arrows: false,
	nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
	prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
	responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});

// Odometer Counter
$(".counter-item").each(function () {
	$(this).isInViewport(function (status) {
		if (status === "entered") {
			for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
				var el = document.querySelectorAll(".odometer")[i];
				el.innerHTML = el.getAttribute("data-odometer-final");
			}
		}
	});
});

//Faq
$(".faq__header").on("click", function (e) {
	var element = $(this).parent(".faq__item");
	if (element.hasClass("open")) {
		element.removeClass("open");
		element.find(".faq__content").removeClass("open");
		element.find(".faq__content").slideUp(300, "swing");
	} else {
		element.addClass("open");
		element.children(".faq__content").slideDown(300, "swing");
		element.siblings(".faq__item").children(".faq__content").slideUp(300, "swing");
		element.siblings(".faq__item").removeClass("open");
		element.siblings(".faq__item").find(".faq__content").slideUp(300, "swing");
	}
});

$(".btn-close, .overlay").on("click", function () {
	$(".overlay").removeClass("active");
	$(".menu").removeClass("active");
});

$(".video-button").magnificPopup({
	type: "iframe",
	// other options
});

$(".subs-btn").on("click", function () {
	$(".subscription-wrapper").toggleClass("active");
	$(".overlay").addClass("overlay-dark");
});

$(".subs-close, .overlay").on("click", function () {
	$(".overlay").removeClass("overlay-dark");
	$(".subscription-wrapper").removeClass("active");
});
