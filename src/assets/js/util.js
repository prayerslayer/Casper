(function($, undefined) {
    'use strict';

    function updateFullWidthElements() {
        var windowWidth = $(window).width();
        $( '[data-fit-window-width]' ).css( 'width', windowWidth );
    }

    $(document).ready( updateFullWidthElements );
    $(window).on( 'resize', updateFullWidthElements );

})( jQuery );