(function($, undefined) {
    'use strict';

    function handleAnchorClick() {
        var $this = $( this );

        window.location = $this.attr( 'data-anchor' );
    }

    $(document).ready(function() {
        $( '[data-anchor]' ).on( 'click', handleAnchorClick );
    });
})( jQuery );