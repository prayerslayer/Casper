(function($, undefined) {
    'use strict';

    function offsetHeightElements() {
        var windowHeight = $(window).height();
        $( '[data-offset-window-height]' ).each( function() {
            var $this = $( this );
            $this.css( 'top', parseInt( $this.attr('data-offset-window-height'), 10 ) + windowHeight );
        });
    }

    $(document).ready( offsetHeightElements );
    $(window).on( 'resize', offsetHeightElements );
})( jQuery );