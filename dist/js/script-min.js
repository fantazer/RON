$(document).ready(function(){function e(){var e=navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1&&parseInt(e.split("msie")[1])}$(".select-beauty").niceSelect(),$(".order-form__tab-el").click(function(){var e=$(this).data("tab");"self"==e?$(".order-form__border-el").addClass("order-form__border-el--right"):$(".order-form__border-el").removeClass("order-form__border-el--right"),$(".order-form__tab-el").removeClass("order-form__tab-el--active"),$(this).addClass("order-form__tab-el--active"),$(".order-form__tab-container").each(function(){$(this).data("tab")==e?$(this).addClass("order-form__tab-container-active"):$(this).removeClass("order-form__tab-container-active")})});var t=function(){$(".basket-container").not(".slick-initialized").slick({slidesToShow:2,autoplay:!1,speed:500,vertical:!0,arrows:!0,prevArrow:$(".header__sub-arrow-up"),nextArrow:$(".header__sub-arrow-down"),verticalSwiping:!0,infinite:!1,responsive:[{breakpoint:768,settings:"unslick"}]})};t();var o=function(){$(".foundation__el").each(function(){$(this).hasClass("pillow-left")&&($(this).removeClass("pillow-left"),$(this).removeClass("foundation__el--active")),$(this).hasClass("pillow-right")&&($(this).removeClass("pillow-right"),$(this).removeClass("foundation__el--active"))})};$(".part-editor-img__left").click(function(){$(this).css({backgroundImage:"none"}),$(".foundation__el").each(function(){$(this).hasClass("pillow-left")&&($(this).removeClass("pillow-left"),$(this).removeClass("foundation__el--active"))})}),$(".part-editor-img__right").click(function(){$(this).css({backgroundImage:"none"}),$(".foundation__el").each(function(){$(this).hasClass("pillow-right")&&($(this).removeClass("pillow-right"),$(this).removeClass("foundation__el--active"))})}),$(".foundation__el").click(function(){$(this).hasClass("foundation__el--default")||$(this).toggleClass("foundation__el--active");var e=$(".foundation__el--active").length;console.log(e);var t=$(this).data("foundation");if(0==e&&($(".part-editor-img__right").css({backgroundImage:"none"}),$(".part-editor-img__left").css({backgroundImage:"none"}),$(".part-img__message--need").show(),$(".part-img__message--need-one").hide(),o()),1==e){$(".part-img__message--need").hide(),$(".part-img__message--need-one").show();var i="url(img/"+t+")";$(this).hasClass("pillow-left")?($(".part-editor-img__left").css({backgroundImage:"none"}),$(this).removeClass("pillow-left"),console.log("hasClass")):($(".part-editor-img__left").css({backgroundImage:i}),$(".part-editor-img__right").css({backgroundImage:"none"}),$(this).addClass("pillow-left"))}if(2==e){$(".part-img__message--need-one").hide();var i="url(img/"+t+")";$(".part-editor-img__right").css({backgroundImage:i}),$(this).addClass("pillow-right")}if(3==e){var i="url(img/"+t+")";$(".foundation__el").each(function(){$(this).hasClass("pillow-left")&&($(this).removeClass("pillow-left"),$(this).removeClass("foundation__el--active"))}),$(".part-editor-img__left").css({backgroundImage:i}),$(this).addClass("pillow-left"),console.log("tree item")}}),$(".card .card-tag__el-add").click(function(){$(this).remove()});var i=function(){$(window).width()>1025&&$(".part-img__wrap").add(".order-info").stick_in_parent({offset_top:100}),$(window).width()<1025&&$(".part-img__wrap").trigger("sticky_kit:detach"),$(window).width()>769&&$(".basket-container").not(".slick-initialized").slick("reinit"),$(window).width()<769&&$(".order-info").trigger("sticky_kit:detach")};$(window).resize(function(){i()}),i();var a=$("#mobile-menu").mmenu({navbar:{title:"Главное меню",content:["searchfield"]},extensions:["effect-listitems-slide","fullscreen"],offCanvas:{position:"left",zposition:"front"}});if(a.data("mmenu")){var s=a.data("mmenu");s.bind("opening",function(){$(".header-mobile-togle").toggleClass("header-mobile-togle--open")}),s.bind("closing",function(){$(".header-mobile-togle").toggleClass("header-mobile-togle--open")}),$(".modal-get").click(function(){s.close()})}$(".filter-ingr__el").click(function(){$(this).toggleClass("filter-ingr__el--active")}),$(".filter-footer__reset").click(function(){$(".filter-ingr__el").removeClass("filter-ingr__el--active"),$(".check-el .sytle-input").prop("checked",!1)}),$(".filter-title__setting").click(function(){$(this).toggleClass("filter-title__setting--active"),$(".filter").slideToggle()}),$(".block-sale__slider").owlCarousel({items:1,autoHeight:!0,dots:!0,autoplay:!0,singleItem:!0,nav:!1,loop:!0}),$(".incr__minus").click(function(){var e=$(this).parent().find(".incr__val span"),t=parseInt(e.html())-1;t=t<1?0:t,e.html(t)}),$(".incr--one .incr__minus").click(function(){var e=$(this).parent().find(".incr__val span"),t=parseInt(e.html())-1;t=t<1?1:t,e.html(t)}),$(".incr__plus").click(function(){var e=$(this).parent().find(".incr__val span"),t=parseInt(e.html())+1;t=t>100?100:t,e.html(t)}),$(".header-menu").click(function(e){$(".basket-wrap").removeClass("bounce-show"),$(".header-cart").removeClass("header-cart--open"),$(".header-menu-sub-wrap").toggleClass("bounce-show"),$(".header-menu").toggleClass("header-menu--open"),e.stopPropagation()}),$(".header-menu-sub-wrap").on("click",function(e){e.stopPropagation()}),$(document).on("click",function(){$(".header-menu").removeClass("header-menu--open"),$(".header-menu-sub-wrap").removeClass("bounce-show")}),$(".header-cart").click(function(e){$(".header-menu-sub-wrap").removeClass("bounce-show"),$(".header-menu").removeClass("header-menu--open"),$(window).width()<769&&$("body").toggleClass("modal-open"),$(".basket-wrap").toggleClass("bounce-show"),$(".header-cart").toggleClass("header-cart--open"),e.stopPropagation()}),$(".basket-wrap").on("click",function(e){e.stopPropagation()}),$(document).on("click",function(){$(".header-cart").removeClass("header-cart--open"),$(".basket-wrap").removeClass("bounce-show"),$("body").removeClass("modal-open")});var r=function(){$(".basket-container").slick("reinit"),$(".basket__el").length||$(".header-cart").click(),$(".basket__el").length<3?$(".slick-arrow").hide():$(".slick-arrow").show()};$(".basket__delete").click(function(){$(this).closest(".basket__el").remove(),r()});var l;$(".basket__el .incr__nav").click(function(){l=1*$(this).closest(".incr").find(".incr__val span").html(),0==l&&($(this).closest(".basket__el").remove(),r())});var n=250;$(window).scroll(function(){var e=$(this).scrollTop();e>=n?$(".header-main-wrap").addClass("shrink"):$(".header-main-wrap").removeClass("shrink")}),$(".product-get").click(function(){$(this).closest(".product-footer").find(".product-get").hide(),$(this).closest(".product-footer").find(".product-add").show(),$(this).closest(".product-el").find(".product-front").hide(),$(this).closest(".product-el").find(".product-back").show()}),$(".product-add").click(function(){$(this).closest(".product-footer").find(".product-add").hide(),$(this).closest(".product-footer").toggleClass("product-footer-numb")}),$(".product-size__el").click(function(){$(this).closest(".product-size").find(".product-size__el").removeClass("product-size__el--active"),$(this).addClass("product-size__el--active")}),$(".product-type__el").click(function(){var e=$(this).data("size");$(this).closest(".product-info").find(".product-size-wrap").each(function(){$(this).hide(),$(this).data("size")==e&&$(this).show()}),$(this).closest(".product-info").find(".product-type__el").removeClass("product-type--active"),$(this).addClass("product-type--active"),$(this).hasClass("product-fat")?$(this).closest(".product-info").find(".product-type-condition-el").css("left","50%"):$(this).closest(".product-info").find(".product-type-condition-el").css("left","0%")});var c;$(".product-incr .incr__nav").click(function(){c=1*$(this).closest(".incr").find(".incr__val span").html(),0==c&&($(this).closest(".product-footer").find(".product-get").show(),$(this).closest(".product-el").find(".product-back").hide(),$(this).closest(".product-el").find(".product-front").show(),$(this).closest(".product-footer").toggleClass("product-footer-numb"),$(this).closest(".incr").find(".incr__val span").html(1))}),$(".card-size__el").click(function(){$(this).closest(".card-size").find(".card-size__el").removeClass("card-size__el--active"),$(this).addClass("card-size__el--active")}),$(".card-type__el").click(function(){var e=$(this).data("size");$(this).closest(".card-type").find(".product-size-wrap").each(function(){$(this).hide(),$(this).data("size")==e&&$(this).show()}),$(".card-type__el").removeClass("card-type__el--active"),$(this).addClass("card-type__el--active")}),$(".part-weight-el").click(function(){var e=$(this).data("size");$(".product-size-wrap").each(function(){$(this).hide(),$(this).data("size")==e&&$(this).show()}),$(".part-weight-el").removeClass("part-weight-el--active"),$(this).addClass("part-weight-el--active")}),$(".souse__el").click(function(){$(".souse__el").removeClass("souse__el--active"),$(this).addClass("souse__el--active")});var d=function(){$(".part-editor__slider").not(".slick-initialized").slick({slidesToShow:4,autoplay:!1,speed:500,vertical:!0,arrows:!0,prevArrow:'<svg class="slider-control"><use xlink:href="#arrow-up"></use></svg>',nextArrow:'<svg class="slider-control"><use xlink:href="#arrow-down"></use></svg>',verticalSwiping:!0,infinite:!1})};d();var h=0,u=function(){$(".modal-layer").removeClass("modal-layer-show"),$("body").removeClass("modal-fix"),$("body").css({overflow:"",position:"",top:""}).scrollTop(h)};$(".modal-close , .modal-filter").click(function(){u()}),$(".modal-get").add(".show-modal").click(function(){$(".modal-layer").hasClass("modal-layer-show")||$(".modal-layer").addClass("modal-layer-show"),$("body").hasClass("modal-fix")||($("body").addClass("modal-fix"),h=$("body").scrollTop(),$("body").css({overflow:"hidden",position:"fixed",overflowY:"scroll",top:-h,width:"100%"}));var e=$(this).data("modal");$(".modal").each(function(){$(this).data("modal")===e?$(this).addClass("modal__show"):$(this).removeClass("modal__show")})}),$(".toggle-close-modal").click(function(){u()}),$(".input-animate").each(function(){var e=$(this),t="<span class='input-placeholder-val'>"+e.data("input")+"</span>";e.parent().append(t)}),$(".input-animate").on("input",function(e){$(e.currentTarget).attr("data-empty",!e.currentTarget.value)}),$(".input-placeholder-val").click(function(){$(this).parent().find(".input-animate").focus()}),$(".toggle-cart-animate").add(".incr__nav").click(function(){$(".header-cart").addClass("animate-basket"),setTimeout(function(){$(".header-cart").removeClass("animate-basket")},400)}),$(".title-row-back").click(function(e){e.preventDefault(),history.back(1)}),e()<10&&e()&&($("body").empty(),$("body").prepend('<div class="old-browser"><div class="old-browser-text"> Браузер не поддерживается =(</div></div>')),svg4everybody(),localStorage.clear(),sessionStorage.clear(),$(window).unload(function(){localStorage.clear()})}),function(e,t){"use strict";var o="img/pack.html",i=1;if(!t.createElementNS||!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var a,s,r="localStorage"in e&&null!==e.localStorage,l=function(){t.body.insertAdjacentHTML("afterbegin",s)},n=function(){t.body?l():t.addEventListener("DOMContentLoaded",l)};if(r&&localStorage.getItem("inlineSVGrev")==i&&(s=localStorage.getItem("inlineSVGdata")))return n(),!0;try{a=new XMLHttpRequest,a.open("GET",o,!0),a.onload=function(){a.status>=200&&a.status<400&&(s=a.responseText,n(),r&&(localStorage.setItem("inlineSVGdata",s),localStorage.setItem("inlineSVGrev",i)))},a.send()}catch(c){}}(window,document);