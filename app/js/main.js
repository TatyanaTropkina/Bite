$(function(){
	let menu = $('.menu__list');
	let menuBtn = $('.menu__btn');
	let menuLink = $('.menu__list-link');
	let header = $('.header');
	$(menuBtn).on('click', function () {
		$(menu).toggleClass('open');
		$(this).toggleClass('open');
		$(header).toggleClass('gradient');
	});
	$(menuLink).on('click', function(){
		$(menu).removeClass('open');
		$(header).removeClass('gradient');
		$(menuBtn).toggleClass('open');

	})
	$(document).mouseup(function (e) {
		if (!menuBtn.is(e.target) && menuBtn.has(e.target).length === 0 &&
			!menu.is(e.target) && menu.has(e.target).length === 0
		) {
			menu.removeClass('open');
			$(header).removeClass('gradient');
			$(menuBtn).removeClass('open');
		}
	});
	$(window).scroll(function () {
		let scrollTop = $(window).scrollTop();
		if (scrollTop > 500) {

			$(menuBtn).removeClass('open');
            $(menu).removeClass('open');
			$(header).removeClass('gradient');        }
    });
	

	$(window).ready(function () {
		if ($(window).width() < 769) {
			$(".closed").toggleClass("show").children(".footer__list-title");

	$(".footer__list-title").click(function(){
	if ($(this).parent().hasClass("show")) {
		$(".footer__list-item").addClass("show").children(".footer__dropdown-list").hide("medium");
		$(this).parent().toggleClass("show").children(".footer__dropdown-list").slideToggle("medium");
		}
	
	else {
		$(this).parent().toggleClass("show").children(".footer__dropdown-list").slideToggle("medium");
		}
	});

		}
	});
	
	$('.shop-slider').slick(
		{
		slidesToShow:3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		responsive: [{
			breakpoint: 551,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 401,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
				}
		},
	]
	}
	);

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

	if ($(window).width() < 769) {
		
		$(".matters__bottle--2").html('<img src="images/bottle-1.png" alt="#">')
	} else {
		$(window).scroll(function(){
		if($(this).scrollTop()> $('.matters').offset().top - 200) {
			$('.matters__bg').addClass('anim');	
		}
	});

	}
	
	$(document).ready(function() {
		$(".products__colors-item").on('click', function() {
		  $(".products__colors-item").each(function() {
			$(this).removeClass('active');
		  });
		  $(this).addClass('active');
		});
	  });

});

$(function(){

	let video =('#about-video');
	let videoBtn = ('#about-video-btn');
	let videoContent = $('.about__content');
	let videoBtnIcon = $('.about-video__icon');
	$( video).on('click', function(){
		if (video.paused) {
			video.play();
			videoBtnIcon.hide();
			videoBtn.innerHTML = '';
			videoContent.slideToggle('slow');
		  } else {
			video.pause();
			videoBtn.innerHTML = '<img class="about__video-icon" src="images/icons/about-btn.png" alt="play">';
			videoContent.slideToggle('slow');
		  } 
	});
	$( videoBtn).on('click', function(){
		if (video.paused) {
			video.play();
			videoBtnIcon.hide();
			videoBtn.innerHTML = '';
			videoContent.slideToggle('slow');
		  } else {
			video.pause();
			videoBtn.innerHTML = '<img class="about__video-icon" src="images/icons/about-btn.png" alt="play">';
			videoContent.slideToggle('slow');
		  } 
	});
});

window.onload = function () {
	document.addEventListener('click', documentActions);
	
	
	function documentActions(e) {
		const targetElement = e.target;
		if (targetElement.classList.contains('products__more')) {
			getProducts(targetElement);
			e.preventDefault();
		}		
	}
		async function getProducts(button) {
	
			if (!button.classList.contains('_hold')) {
				button.classList.add('_hold');

				const file = "json/products.json";
				let response = await fetch(file, {
					method: 'GET'
				});
				if(response.ok) {
					let result = await response.json();
					loadProducts(result);
					button.classList.remove('_hold');
					button.remove();
				} 
				
				else {
					alert('Oшибка');
				}
			};
			function loadProducts(data){
				
				const productsItems = document.querySelector('.products__items');
				
				data.products.forEach(item => {
					const productId = item.id;
					const productUrl = item.url;
					const productImage = item.image;
					const productLabel = item.label;
					const productTitle = item.title;
					const productSubtitle = item.subtitle;
					const productPriceCurrent = item.priceCurrent;
					const productPriceOld = item.priceOld;
					const productRating = item.rating;
					const productReviews = item.reviews;
					const productColor1 = item.color1;
					const productColor2 = item.color2;
					const productColor3 = item.color3;
					
						
let productTemplateStart = `<div data-pid="${productId}" class="products__item">`;
let productTemplateEnd = `</div>`;
let productTemplateImage = `
<a class="products__img-link" href="${productUrl}">
<img class="products__img" src="images/content/products-${productImage}" alt="${productTitle}">
<div class="products__label">
<p class="products__label-text">${productLabel}</p>
</div>
</a>
`;

let productTemplateBodyStart = `<div class="products__body">`;
let productTemplateBodyEnd = `</div>`;
let productTemplateContent = `

		<h6 class="products__title">${productTitle}</h6>
		<p class="products__subtitle">${productSubtitle}</p>
		<div class="products__info">
			<a class="products__info-rating" href="#">Rated ${productRating} out of 5</a>
			<a class="products__info-reviews" href="#">${productReviews} Reviews</a>
		</div>
		<ul class="products__colors">
			<li ${productColor1}></li>
			<li ${productColor2}></li>
			<li ${productColor3}></li>
		</ul>
		<div class="products__rating">
			<span class="products__rating-item" style="width: ${productRating / 100 * 20 * 100}%"></span>
		</div>	
		<div class="products__price">
			<div class="products__price-current">&#36;${productPriceCurrent}</div>
			<div class="products__price-old">&#36;${productPriceOld}</div>
		</div>

`;

let productTemplateBody = '';
productTemplateBody += productTemplateBodyStart;
productTemplateBody += productTemplateContent;
productTemplateBody += productTemplateBodyEnd;

let productTemplate = '';
productTemplate += productTemplateStart;
productTemplate += productTemplateImage;
productTemplate += productTemplateBody;
productTemplate += productTemplateEnd;
			productsItems.insertAdjacentHTML('beforeend', productTemplate);
			})
	
			} 
		}

			} 
