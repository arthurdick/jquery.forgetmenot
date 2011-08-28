/*
 * jQuery ForgetMeNot
 * - Remember form input plugin for jQuery
 *
 * Copyright (c) 2011 Arthur Dick
 * Licensed under the MIT license (MIT-LICENSE.txt)
 */

(function( $ ){
    $.fn.forgetMeNot = function() {
        if(localStorage.getItem(this.attr("name"))) {
            this.val(localStorage.getItem(this.attr("name")));
	}
        var me = this;
        this.change(function() {
            localStorage.setItem(me.attr("name"), me.val());
        });
    };
})( jQuery );

