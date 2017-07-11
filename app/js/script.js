$(document).ready(function(){



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
	    count = count > 10 ? 10 : count;
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
	});
	//toggle basket end

	//animate header
	var shrinkHeader = 400;
	var needScroll  = false;
	$(window).scroll(function() {
			var heightHeader=$('.header-main-wrap').height();
	    var scroll = $(this).scrollTop();
	    if (scroll  > shrinkHeader ) {
	    	needScroll = true;
	    }
      if ( scroll >= shrinkHeader ) {
					var heightHeader=$('.header-main-wrap').height();
					$('.header-main-wrap').addClass('shrink');
					$('.header-main-wrap').removeClass('shrinkUp');
					$('body').css({
						paddingTop:heightHeader
					});
        }
        else {
            $('.header-main-wrap').removeClass('shrink');
            $('body').css({
            	paddingTop:"0px"
            });
        }
        if ( scroll <= shrinkHeader &&  scroll >= 100 && needScroll) {
        	$('.header-main-wrap').addClass('shrinkUp');
        	needScroll = false;
        }
        if ( scroll <=  100 ) {
        	$('.header-main-wrap').removeClass('shrinkUp');
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
			$('.card-type__el').removeClass('card-type__el--active');
			$(this).addClass('card-type__el--active');
		});
	//card thin or fat-end

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