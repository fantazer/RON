$(document).ready(function(){

	/* ###### For SlideToggle Elements  ######*/
	$('.header-menu').click(function(event){
			event.stopPropagation();
			$('.header-menu-sub-wrap').slideToggle("fast");
			$('.header-menu').toggleClass('header-menu--open');
	});
	$('.header-menu-sub-wrap').on("click", function (event) {
		event.stopPropagation();
	});
	$(document).on("click", function () {
			$('.header-menu-sub-wrap').hide();
	});

	//animate header
	//animate header
	var shrinkHeader = 300;
	var needScroll  = false;
	$(window).scroll(function() {
	    var scroll = $(this).scrollTop();
	    if (scroll  > shrinkHeader ) {
	    	needScroll = true;
	    }
      if ( scroll >= shrinkHeader ) {
           var heightHeader=$('.header-main-wrap').height();
           $('.header-main-wrap').addClass('shrink');
            $('.header-main-wrap').removeClass('shrinkUp');
        }
        else {
            $('.header-main-wrap').removeClass('shrink');
        }
        if ( scroll <= shrinkHeader &&  scroll >= 100 && needScroll) {
        	$('.header-main-wrap').addClass('shrinkUp');
        	needScroll = false;
        }
        if ( scroll <=  100 ) {
        	$('.header-main-wrap').removeClass('shrinkUp');
        }
	});

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