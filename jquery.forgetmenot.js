/*
 * jQuery ForgetMeNot
 * - Remember form input plugin for jQuery
 *
 * Copyright (c) 2011 Arthur Dick
 * Licensed under the MIT license (MIT-LICENSE.txt)
 */

(function( $ ){
    $.fn.forgetMeNot = function(storageName) {
        if(localStorage.getItem(storageName)) {
            this.val(localStorage.getItem(storageName));
	}
        var theElement = this;
        this.bind('keyup', function() {
            localStorage.setItem(storageName, theElement.val());
        });
    };
})( jQuery );

