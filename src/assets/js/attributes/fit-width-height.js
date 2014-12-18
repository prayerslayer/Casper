(function($, undefined) {
    'use strict';

    function updateFullWidthElements() {
        var windowWidth = $(window).width();
        $( '[data-fit-window-width]' ).css( 'width', windowWidth );
    }

    function updateFullHeightElements() {
        var windowHeight = $(window).height();
        $( '[data-fit-window-height]' ).css( 'height', windowHeight );
    }

    $(document).ready( updateFullWidthElements );
    $(document).ready( updateFullHeightElements );
    $(window).on( 'resize', updateFullWidthElements );
    $(window).on( 'resize', updateFullHeightElements );
})( jQuery );