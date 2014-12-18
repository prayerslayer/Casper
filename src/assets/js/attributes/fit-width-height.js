(function($, undefined) {
    'use strict';

    function updateFullWidthElements() {
        var windowWidth = $(window).width();
        $( '[data-fit-window-width]' ).each( function() {
            var $this = $( this );
            $this.css( 'width', parseInt( $this.attr('data-fit-window-width'), 10 ) + windowWidth );
        });
    }

    function updateFullHeightElements() {
        var windowHeight = $(window).height();
        $( '[data-fit-window-height]' ).each( function() {
            var $this = $( this );
            $this.css( 'height', parseInt( $this.attr('data-fit-window-height'), 10 ) + windowHeight );
        });
    }

    $(document).ready( updateFullWidthElements );
    $(document).ready( updateFullHeightElements );
    $(window).on( 'resize', updateFullWidthElements );
    $(window).on( 'resize', updateFullHeightElements );
})( jQuery );