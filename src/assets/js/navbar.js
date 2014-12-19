(function( $, undefined ) {
    'use strict';

    /**
     * Navbar
     *
     * Hides as you scroll down.
     * Shows as you scroll up.
     */
    
     var last = 0,
         didScroll = false,
         $document = $(document),
         $navbar = $( '.navbar' ).first(),
         SCROLL_THRESHOLD = 50;

    function handleScroll() {
        var top = $document.scrollTop(),
            current = top < 0 ? 0 : top,    // negative top possible on mac
            delta = Math.abs( current - last );

        if ( delta < SCROLL_THRESHOLD ) {
            return;
        }

        if ( current > last ) {
            // scrolled down
            $navbar.addClass( 'is-up' );
        } else {
            $navbar.removeClass( 'is-up' );
        }

        last = current;
    }
    
    function checkScrolled() {
        if ( didScroll ) {
            handleScroll();
            didScroll = false;
        }
    }

    setInterval( checkScrolled, 200 );
    
    $document.on( 'scroll', function() {
        didScroll = true;
    });

    // we might start already scrolled
    $document.ready( function() {
        last = $document.scrollTop();
    });
})( jQuery );