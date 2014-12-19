(function ($, undefined) {
    'use strict';

    /**
     * Toggling of header menu.
     */
    var dataId = 'headerMenuToggled',   // the id under which the toggle state is saved
        menuAttr = 'data-header-menu',  // the attribute name for menu items
        contentAttr= 'data-header-menu-content';    // the attribute name for menu content

    /**
     * Applies selected attr on menu item and shows it if `on` is true,
     * otherwise it is hidden. All other menu items are hidden as well.
     * 
     * @param  {jQuery} $el The menu item to toggle
     * @param  {boolean} on True if it is desired to toggle menu item on
     */
    function toggle( $el, on ) {
        var id = $el.attr( menuAttr );
        $el.attr( 'selected', on );
        $( '[' + contentAttr + ']' ).each( function() {
            var $this = $(this);
            if ( $this.attr( contentAttr ) === id && on ) {
                $this.removeClass( 'is-hidden' );
            }
        });
        $el.data( dataId, on );
    }

    /**
     * Click handler for menu items. Unselects all menu items, hides
     * all menu contents, then toggles the clicked one. Applies context
     * classes is-open, is-selected on parents too.
     */
    $( '[' + menuAttr + ']' ).click( function() {
        var $this = $( this ),
            state = !!$this.data( dataId );

        // reset all
        $( '[' + menuAttr + ']' )
            .attr( 'selected', false )
            .data( dataId, false );
        $( '[' + contentAttr + ']' ).addClass('is-hidden');

        // toggle this
        toggle( $this, !state );
        $( '.menu-content' ).toggleClass( 'is-open', !state );
        $( '.menu' ).toggleClass( 'has-selection', !state );
    });
})(jQuery);
