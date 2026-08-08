var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
jQuery(document).ready(function ($) {
    $('.zoom-social_icons-list__link').on({
        'mouseenter': function (e) {
            e.preventDefault();

            var $this = $(this).find('.zoom-social_icons-list-span');
            var $rule = $this.data('hover-rule');
            var $color = $this.data('hover-color');
            if ($color !== undefined) {
                $this.attr('data-old-color', $this.css($rule));
                $this.css($rule, $color);
            }
        },
        'mouseleave': function (e) {
            e.preventDefault();
            var $this = $(this).find('.zoom-social_icons-list-span');
            var $rule = $this.data('hover-rule');
            var $oldColor = $this.data('old-color');
            if ($oldColor !== undefined) {
                $this.css($rule, $oldColor);
            }
        }
    });
});
}

/*
     FILE ARCHIVED ON 01:15:14 Jul 19, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:16:07 Aug 07, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.552
  captures_list: 0.617
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.068
  esindex: 0.013
  cdx.remote: 6.839
  LoadShardBlock: 79.325 (3)
  PetaboxLoader3.datanode: 100.948 (5)
  PetaboxLoader3.resolve: 62.02 (2)
  load_resource: 90.059
  loaddict: 30.679
*/