$(document).ready(function(){

	//stick block
		$(".order-info").sticky({topSpacing:140});
	//stick block end

	//detect mobile
	var isMobile = function(){
		if($(window).width() > 768 ){
				$('.basket-container').slick('reinit');
			}
			if($(window).width() < 768 ){
				$(".order-info").unstick();
			}
	};
	$(window).resize(function(){
		isMobile();
	})
	isMobile();
	//detect mobile end
	//===== Mobile slide-left menu =====
	 var $menu = $("#mobile-menu").mmenu({
			navbar: {
				title: "Главное меню",
				"content": [
				"searchfield"
				]
			},
			/*"searchfield": {
			add: true,
			search: true
			},*/
			extensions: [
				//"effect-menu-slide",
				"effect-listitems-slide",
				"fullscreen"
			],
			offCanvas : {
				position : "left", // changing this alters the position of the menu
				zposition : "front"
			},
		});

	//Toggle header icon
	if ($menu.data( "mmenu" )) {
		var API = $menu.data( "mmenu" );
		API.bind( "opening", function() {
		  $('.header-mobile-togle').toggleClass('header-mobile-togle--open');
		});
		API.bind( "closing", function() {
		  $('.header-mobile-togle').toggleClass('header-mobile-togle--open');
		});
		$('.modal-get').click(function() {
         API.close();
      });
	}
	//===== Mobile slide-left menu =====

	//toggle filter ingr
	$('.filter-ingr__el').click(function () {
		$(this).toggleClass('filter-ingr__el--active')
	})
	//toggle filter ingr end

	//reset filter
	$('.filter-footer__reset').click(function () {
		$('.filter-ingr__el').removeClass('filter-ingr__el--active')
		$( ".check-el .sytle-input" ).prop( "checked", false );
	});
	//reset filter-end

	//show filter
	$('.filter-title__setting').click(function () {
		$(this).toggleClass('filter-title__setting--active')
		$('.filter').slideToggle();
	});

	//show filter-end

	//sale slider
	$(".block-sale__slider").owlCarousel({
		 items : 1,
		 autoHeight : true,
		 dots: true,
		 autoplay : true,
		 singleItem:true,
		 nav:false,
		 loop:true
		 }
	);
	//sale slider-end

	//increment field
	$('.incr__minus').click(function () {
        var $input = $(this).parent().find('.incr__val span');
        var count = parseInt($input.html()) - 1;
        count = count < 1 ? 0 : count;
        $input.html(count);
    });

	$('.incr__plus').click(function () {
	    var $input = $(this).parent().find('.incr__val span');
	    var count = parseInt($input.html()) + 1;
	    count = count > 100 ? 100 : count;
	    $input.html(count);
	});

	//increment field end

	//toggle menu
	$('.header-menu').click(function(event){
			$('.basket-wrap').removeClass('bounce-show');
			$('.header-cart').removeClass('header-cart--open');
			$('.header-menu-sub-wrap').toggleClass('bounce-show');
			$('.header-menu').toggleClass('header-menu--open');

			event.stopPropagation();
	});
	$('.header-menu-sub-wrap').on("click", function (event) {
		event.stopPropagation();
	});
	$(document).on("click", function () {
			$('.header-menu').removeClass('header-menu--open');
			$('.header-menu-sub-wrap').removeClass('bounce-show');

	});
	//toggle menu end

	//toggle basket
	$('.header-cart').click(function(event){
			$('.header-menu-sub-wrap').removeClass('bounce-show');
			$('.header-menu').removeClass('header-menu--open');
			if($(window).width() < 769){
				$('body').toggleClass('modal-open');
			}
			$('.basket-wrap').toggleClass('bounce-show');
			$('.header-cart').toggleClass('header-cart--open');
			event.stopPropagation();
	});
	$('.basket-wrap').on("click", function (event) {
		event.stopPropagation();
	});
	$(document).on("click", function () {
			$('.header-cart').removeClass('header-cart--open');
			$('.basket-wrap').removeClass('bounce-show');
			$('body').removeClass('modal-open');
	});
	//toggle basket end

	//remove item in basket

	// function for valide number item in cart
	var cartSliderItem = function () {
		$('.basket-container').slick('reinit');
			if(!$('.basket__el').length){
				$('.header-cart').click();
			}
			if($('.basket__el').length < 3){
				$('.slick-arrow').hide()
			} else {
				$('.slick-arrow').show()
			}
	}

	$('.basket__delete').click(function () {

			$(this).closest('.basket__el').remove();
			cartSliderItem();
	});
	//remove item in basket end


	//remove item in basket by decrement
	var Incr;

	$('.basket__el .incr__nav').click(function () {
		Incr = $(this).closest('.incr').find('.incr__val span').html()*1;
		if(Incr == 0){
			$(this).closest('.basket__el').remove();
			cartSliderItem();
		}
	});
	//remove item in basket by decrement end

	//animate header
	var shrinkHeader = 250;
	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if ( scroll >= shrinkHeader ) {
				//var heightHeader=$('.header-main-wrap').height();
				$('.header-main-wrap').addClass('shrink');
			}
			else {
					$('.header-main-wrap').removeClass('shrink');
			}
	});
	//animate header end

	//product animation

		//toggle main blocks
		$('.product-get').click(function () {
			$(this).closest('.product-footer').find('.product-get').hide();
			$(this).closest('.product-footer').find('.product-add').show();
			$(this).closest('.product-el').find('.product-front').hide();
			$(this).closest('.product-el').find('.product-back').show();
		});

		//toggle buton
		$('.product-add').click(function () {
			$(this).closest('.product-footer').find('.product-add').hide();
			$(this).closest('.product-footer').toggleClass('product-footer-numb');
		})

		//change size
		$('.product-size__el').click(function () {
			$(this).closest('.product-size').find('.product-size__el').removeClass('product-size__el--active');
			$(this).addClass('product-size__el--active');
		});

		//Type thin fat


		$('.product-type__el').click(function () {

			//Tab thin fat sizes
			var currentSize = $(this).data('size');
			$(this).closest('.product-info').find('.product-size-wrap').each(function () {
				$(this).hide();
				if ($(this).data('size')==currentSize){
					$(this).show()
				}
			});
			//Tab thin fat sizes end

			$(this).closest('.product-info').find('.product-type__el').removeClass('product-type--active');
			$(this).addClass('product-type--active');
			if($(this).hasClass('product-fat')){
				$(this).closest('.product-info').find('.product-type-condition-el').css('left','50%')
			} else{
				$(this).closest('.product-info').find('.product-type-condition-el').css('left','0%')
			}
		});

	//check val < 0
	var currentIncr;

	$('.product-incr .incr__nav').click(function () {
		currentIncr = $(this).closest('.incr').find('.incr__val span').html()*1;
		if(currentIncr == 0){
			$(this).closest('.product-footer').find('.product-get').show();
			$(this).closest('.product-el').find('.product-back').hide();
			$(this).closest('.product-el').find('.product-front').show();
			$(this).closest('.product-footer').toggleClass('product-footer-numb');
			$(this).closest('.incr').find('.incr__val span').html(1)
		}

	});
	//check val < 0 end

	//product animation-end

	//card type
	$('.card-size__el').click(function () {
			$(this).closest('.card-size').find('.card-size__el').removeClass('card-size__el--active');
			$(this).addClass('card-size__el--active');
		});
	//card type-end

	//card thin or fat
	$('.card-type__el').click(function () {
			//Tab thin fat sizes
			var currentSize = $(this).data('size');
			$(this).closest('.card-type').find('.product-size-wrap').each(function () {
				$(this).hide();
				if ($(this).data('size')==currentSize){
					$(this).show()
				}
			});
			//Tab thin fat sizes end

			$('.card-type__el').removeClass('card-type__el--active');
			$(this).addClass('card-type__el--active');

		});
	//card thin or fat-end

	//foundation toggle
		$('.foundation__el').click(function () {
			if(!$(this).hasClass('foundation__el--default')){
				$(this).toggleClass('foundation__el--active');
			}
		});
	//foundation toggle-end

	//choose part for ingr
	$('.part-ingr-el').click(function () {
			$('.part-ingr-el').removeClass('part-ingr-el--active');
			$(this).addClass('part-ingr-el--active');
		});
	//choose part for ingr end

	//part choose fat or thin
	$('.part-weight-el').click(function () {
			//Tab thin fat sizes
			var currentSize = $(this).data('size');
			$('.product-size-wrap').each(function () {
				$(this).hide();
				if ($(this).data('size')==currentSize){
					$(this).show()
				}
			});
			//Tab thin fat sizes end

			$('.part-weight-el').removeClass('part-weight-el--active');
			$(this).addClass('part-weight-el--active');
		});
	//part choose fat or thin end


	//part choose souse
	$('.souse__el').click(function () {
			$('.souse__el').removeClass('souse__el--active');
			$(this).addClass('souse__el--active');
		});
	//part choose souse end


	//cart vertical slider
	var initSlider = function(){
		$('.basket-container').not('.slick-initialized').slick({
		  slidesToShow: 2,
		  autoplay: false,
		  speed: 500,
		  vertical:true,
		  arrows: true,
		  prevArrow: $('.header__sub-arrow-up'),
		  nextArrow: $('.header__sub-arrow-down'),
		  verticalSwiping:true,
		  infinite:false,
		  responsive: [
                {
                    breakpoint: 768,
                    settings: "unslick"
                }
            ]
		});
	};
	initSlider();
	//cart vertical slider edn



	//init modal
	var closeModal = function () {
  	$('.modal-layer').removeClass('modal-layer-show');
  	$("body").removeClass("modal-fix")
	};

	$('.modal-close , .modal-filter').click(function (){
		closeModal();
	});

	$('.modal-get').add('.show-modal').click(function (){
		if(!$('.modal-layer').hasClass('modal-layer-show')){
			$('.modal-layer').addClass('modal-layer-show');
		}
		if(!$("body").hasClass("modal-fix")){
			$("body").addClass("modal-fix");
		}
		var currentModal = $(this).data("modal");
		$('.modal').each(function () {
			if ($(this).data('modal')===currentModal){
				$(this).addClass('modal__show')
			} else {
				$(this).removeClass('modal__show')
			}
		});

	});

	$('.toggle-close-modal').click(function (){
		closeModal();
	});
	//init modal-end

	//init animate placeholder
	$('.input-animate').each(function(){
		var current = $(this);
		var dataString = "<span class='input-placeholder-val'>"+current.data('input')+"</span>";
		current.parent().append(dataString);
	});

	$('.input-animate').on('input', function (e) {
		$(e.currentTarget).attr('data-empty', !e.currentTarget.value);
	});

	$('.input-placeholder-val').click(function(){
		$(this).parent().find('.input-animate').focus(); //найти Input и повесить focus
	});
	//init animate placeholder end


	//animate cart on add

	$('.toggle-cart-animate').add('.incr__nav').click(function () {
		$('.header-cart').addClass('animate-basket');
		setTimeout(function(){
				$('.header-cart').removeClass('animate-basket');
			}, 400);
	});
	//animate cart on add end

	//history back
	$(".title-row-back").click(function(event) {
    event.preventDefault();
    history.back(1);
	});
	//history back end

	//Stick panel
	// ===== for template header =====
	//See mixin header
	/*
	var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.menu-toggle','.header-nav');

	$(window).resize(function(){
		if ($(document).width() < 1025) {
			$('.header-nav__sub').hide();
			$('.header-nav__el-icon').click(function () {
				var current = $(this).closest('.header-nav__el').find('.header-nav__sub');
				$('.header-nav__sub').slideUp();
					if(current.is(':visible')){
						current.slideUp();
					} else {
						current.slideToggle(400,"linear");
					}
			})
		}
	});*/
	//===== for template header-end =====

	/* ###### For only ies  ######*/
	//if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
	//	//code
	//}

	//message for old IE
	function isIE () {
	  var myNav = navigator.userAgent.toLowerCase();
	  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}

	if (isIE() < 10 &&  isIE()) {
		$('body').empty();
		$('body').prepend('<div class="old-browser"><div class="old-browser-text"> Браузер не поддерживается =(</div></div>');
	}

	//for init SVG 
	svg4everybody();
	// ==== clear storage =====
	 localStorage.clear();
	 sessionStorage.clear();

	 $(window).unload(function(){
	   localStorage.clear();
	 });
	// ==== clear storage end =====

	
	/* ###### For SlideToggle Elements  ######*/
	/*var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.icon-bars','.top-menu_link');*/


	/* ###### init RangeSLider  ######*/
	/* ###### bower i --save-dev nouislider  ######*/
	/* ###### https://gist.github.com/fantazer/2bdc4e6a63708e143718ffa7c32eae17  ######*/

	/*var slider = document.getElementById('rangeSlider'); //Элемент

	noUiSlider.create(slider, {
		start: [0, 100],
		connect: true,
		step: 10,
		range: {
			'min': 0,
			'max': 100,
		},
		pips: { // Show a scale with the slider
			mode: 'steps',
			density: 4
		}
	});*/

	
})

//cash SVG

;( function( window, document )
{
	'use strict';

	var file  = 'img/pack.html',
		revision = 1;

	if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
		return true;

	var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
		request,
		data,
		insertIT = function()
		{
			document.body.insertAdjacentHTML( 'afterbegin', data );
		},
		insert = function()
		{
			if( document.body ) insertIT();
			else document.addEventListener( 'DOMContentLoaded', insertIT );
		};

	if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
	{
		data = localStorage.getItem( 'inlineSVGdata' );
		if( data )
		{
			insert();
			return true;
		}
	}

	try
	{
		request = new XMLHttpRequest();
		request.open( 'GET', file, true );
		request.onload = function()
		{
			if( request.status >= 200 && request.status < 400 )
			{
				data = request.responseText;
				insert();
				if( isLocalStorage )
				{
					localStorage.setItem( 'inlineSVGdata',  data );
					localStorage.setItem( 'inlineSVGrev',   revision );
				}
			}
		}
		request.send();
	}
	catch( e ){}

}( window, document ) );


