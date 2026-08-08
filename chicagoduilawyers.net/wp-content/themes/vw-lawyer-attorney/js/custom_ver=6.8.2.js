var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
(function( $ ) {
	// NAVIGATION CALLBACK
	var ww = jQuery(window).width();
	jQuery(document).ready(function() { 
		jQuery(".nav li a").each(function() {
			if (jQuery(this).next().length > 0) {
				jQuery(this).addClass("parent");
			};
		})
		jQuery(".toggleMenu").click(function(e) { 
			e.preventDefault();
			jQuery(this).toggleClass("active");
			jQuery(".nav").slideToggle('fast');
		});
		adjustMenu();
	})

	// navigation orientation resize callbak
	jQuery(window).bind('resize orientationchange', function() {
		ww = jQuery(window).width();
		adjustMenu();
	});

	var adjustMenu = function() {
		if (ww < 720) {
			jQuery(".toggleMenu").css("display", "block");
			if (!jQuery(".toggleMenu").hasClass("active")) {
				jQuery(".nav").hide();
			} else {
				jQuery(".nav").show();
			}
			jQuery(".nav li").unbind('mouseenter mouseleave');
		} else {
			jQuery(".toggleMenu").css("display", "none");
			jQuery(".nav").show();
			jQuery(".nav li").removeClass("hover");
			jQuery(".nav li a").unbind('click');
			jQuery(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
				jQuery(this).toggleClass('hover');
			});
		}
	}

	/* Nivo slider */
	jQuery(document).ready(function() {
		if( jQuery( '#slider' ).length > 0 ){
	        jQuery('.nivoSlider').nivoSlider({
	            effect:'fade',
	            animSpeed: 500,
	            pauseTime: 3000,
	            startSlide: 0,
				directionNav: true,
				controlNav: true,
				pauseOnHover:false,
			});
		}
	});
})( jQuery );
}

/*
     FILE ARCHIVED ON 01:14:42 Jul 19, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:16:05 Aug 07, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.409
  captures_list: 0.53
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.059
  esindex: 0.009
  cdx.remote: 5.639
  LoadShardBlock: 53.208 (3)
  PetaboxLoader3.datanode: 98.122 (5)
  PetaboxLoader3.resolve: 70.303 (2)
  load_resource: 509.778
  loaddict: 426.044
*/