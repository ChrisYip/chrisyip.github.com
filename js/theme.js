(function(o){o&&o(document).on("click",".toggle-menu",function(n){n.stopPropagation(),o(this).closest(".header-menu").toggleClass("on")}).on("click",".search",function(n){n.stopPropagation(),o(this).toggleClass("on").find(".search-field").focus()}).on("click",".search-field",function(o){o.stopPropagation()}).on("click",function(){o("#header .on").removeClass("on")})})(window.jQuery||window.Zepto);