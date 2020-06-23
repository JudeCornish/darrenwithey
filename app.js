const selectElement = (element) => document.querySelector(element);

selectElement(".menu-icons").addEventListener("click", () => {
	selectElement("nav").classList.toggle("active");
});

window.onscroll = function () {
	myFunction();
};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("scroll-progress").style.width = scrolled + "%";
}

$(".wall").jaliswall({
	item: ".wall-item",
	columnClass: ".wall-column",
});

$(function () {
	$(".responsive").slick({
		infinite: true,
		speed: 1000,
		autoplay: true,
		adaptiveHeight: true,
		autoplayspeed: 15000,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					arrows: false,
					dots: true,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
});
