$(function(){
	$('.menu__btn').on('click', function(){
		$(this).toggleClass('active');
		$('.menu__list').toggleClass('active');
		$('.header').toggleClass('gradient');
	});
	$(window).scroll(function () {
		$('.menu__list').removeClass('active');
		$('.header').removeClass('gradient');
		$('.menu__btn').removeClass('active');

	});
	let btn = $(".menu__btn");
	let menu = $(".menu__list");

	$(document).mouseup(function (e) {
		if (!btn.is(e.target) && btn.has(e.target).length === 0 &&
			!menu.is(e.target) && menu.has(e.target).length === 0
		) {
			menu.removeClass('active');
			$('.header').removeClass('gradient');
			$('.menu__btn.active').removeClass('active');
		}
	});
	$('.shop-slider').slick({
		slidesToShow:3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		responsive: [{
			breakpoint: 1201,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 901,
			settings: {
			slidesToShow: 3,
				}
		},
		{
			breakpoint: 701,
			settings: {
			slidesToShow: 2,
				}
		},
		{
			breakpoint: 451,
			settings: {
			slidesToShow: 1,
			centerMode:true,
			centerPadding: "70px",
				}
		}
	]
	});
	
	if ($(window).width() < 1201) {
		$('.products__items-extra').slick({
		centerMode: true,
		centerPadding: '90px',
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 3,
		swipe: true,
		responsive: [{
			breakpoint: 1001,
			settings: {
				slidesToShow: 2,
				centerPadding: '150px',

			}
		},
	{
		breakpoint: 851,
		settings: {
			slidesToShow: 2,
				centerPadding: '80px',
		}
	},
{
	breakpoint: 701,
		settings: {
			slidesToShow: 2,
				centerMode: false,
		}
},
{
	breakpoint: 602,
		settings: {
			slidesToShow: 1,
				centerMode: false,
		}
},

]
		
});
		$('.products__items-extra .products__item').addClass('products__item-extra');
		};
	if ($(window).width() < 1101) {
		$('.how-to__title span').css('font-size', '70px');
		};
		if ($(window).width() < 1001) {
			$('.how-to__title span').css('font-size', '50px');
			};
			
			if ($(window).width() < 501) {
				$('.shop-slider__item').removeClass('shop-slider__item--center');
				};
	

	$('.about-slider').slick({
		
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true,
	});
	
	$('.reviews-slider').slick({
		
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		slidesToShow: 1,
	});
	let mattersImg = $('.matters__img');
	$(window).scroll(function () {
		if ($(this).scrollTop() > mattersImg.offset().top - 700) {
			mattersImg.addClass('anim');
		}
	});
	
	let mattersImg1 = $('.matters__img-pill');
	$(window).scroll(function () {
		if ($(this).scrollTop() > mattersImg1.offset().top - 120) {
			mattersImg1.addClass('anim');
		}
	});
	let howTo = $('.how-to__subtitle');
	$(window).scroll(function () {
		if ($(this).scrollTop() > howTo.offset().top - 220) {
			howTo.addClass('anim');
		}
	});
	let howToLink = $('.how-to__text-link');
	$(window).scroll(function () {
		if ($(this).scrollTop() > howToLink.offset().top - 600) {
			howToLink.addClass('anim');
		}
	});
	let subBg = $('.subscription__items-wrapper');
	$(window).scroll(function () {
		if ($(this).scrollTop() > subBg.offset().top - 800) {
			subBg.addClass('anim');
		}
	});

});
new WOW().init();