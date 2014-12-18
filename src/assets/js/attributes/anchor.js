(function($, undefined) {
    'use strict';

    $(document).ready(function() {
        $( '[data-anchor]' ).on( 'click', function handleAnchorClick() {
            window.location = $( this ).attr( 'data-anchor' );
        });
    });
})( jQuery );