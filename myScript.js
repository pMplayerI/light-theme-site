// JavaScript source code
$(document).ready(function () {
	// Tạo hiệu ứng cho trang Review
	$(".review-link").mouseover(function () {
		$(this).css("text-decoration", "none");
		$(".review-link-title", this).css("color", "#e0a80d");
		$(".review-link-img", this).css("transform", "scale(1.1)");
	});
	$(".review-link").mouseleave(function () {
		$(".review-link-title", this).css("color", "#979899");
		$(".review-link-img", this).css("transform", "scale(1)");
	});

	// Tạo hiệu ứng cho những link ở phần header và footer
	$(".link-yellow").mouseover(function () {
		$(this).css("text-decoration", "none");
		$(".link-yellow-text", this).css("color", "#e0a80d");
	});
	$(".link-yellow").mouseleave(function () {
		$(".link-yellow-text", this).css("color", "#979899");
	});

	// Tạo hiệu ứng cho phần Portfolio
	$(".portfolio-link").mouseover(function () {
		$(".portfolio-link-img", this).css({ "opacity": "0.5", "transform": "scale(1.1)" });
		$(".portfolio-link-content", this).fadeIn();
		$(".portfolio-link-decoline", this).css({ "width": "50px", "transition": "width .65s ease-out" });
	});
	$(".portfolio-link").mouseleave(function () {
		$(".portfolio-link-img", this).css({ "opacity": "1", "transform": "scale(1)" });
		$(".portfolio-link-content", this).fadeOut("fast");
		$(".portfolio-link-decoline", this).css({ "width": "0", "transition": "width .65s ease-out" });
	});

	// Tạo hiệu ứng cho phần Clients
	$(".clients-logo").mouseover(function () {
		$(this).css("opacity", "1");
	});
	$(".clients-logo").mouseleave(function () {
		$(this).css("opacity", "0.6");
	});

	// Tạo hiệu ứng cho những nút liên kết mạng xã hội
	$(".social-button").mouseover(function () {
		$(this).css({ "color": "#e0a80d", "background": "#fff", "border": "2px solid #ededed" });
	});
	$(".social-button").mouseleave(function () {
		$(this).css({ "color": "#c6c6c6", "background": "#ededed", "border": "none" });
	});

	// Tạo hiệu ứng cho link ở phần Intro
	$(".link-white").mouseover(function () {
		$(this).css({ "text-decoration": "none", "color": "#F8BB10" });
	});
	$(".link-white").mouseleave(function () {
		$(this).css("color", "#e0a80d");
	});

	// Tạo hiệu ứng cho phần Profiles
	$(".profiles-link").mouseover(function () {
		$(this).css("text-decoration", "none");
		$(".profiles-link-heading", this).css("color", "#F8BB10");
		$(".profiles-link-text", this).css("color", "#979899");
	});
	$(".profiles-link").mouseleave(function () {
		$(".profiles-link-heading", this).css("color", "#e0a80d");
	});

	//Khi reload trang này sẽ trở lại trang index
	window.onbeforeunload = function () {
		window.setTimeout(function () {
			window.location = "https://pmplayeri.github.io/index-site/";
		}, 0);
		window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser
	}
});
