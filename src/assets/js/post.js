(function ($, undefined) {
    'use strict';

    $(document).ready(function () {
        // responsive videos
        $('.post-content').fitVids();

        var teamTags = [
            'atlanta-hawks',
            'boston-celtics',
            'brooklyn-nets',
            'charlotte-hornets',
            'chicago-bulls',
            'cleveland-cavaliers',
            'dallas-mavericks',
            'denver-nuggets',
            'detroit-pistons',
            'golden-state-warriors',
            'houston-rockets',
            'indiana-pacers',
            'la-clippers',
            'la-lakers',
            'memphis-grizzlies',
            'miami-heat',
            'milwaukee-bucks',
            'minnesota-timberwolves',
            'new-orleans-pelicans',
            'new-york-knicks',
            'okc-thunder',
            'orlando-magic',
            'philadelphia-76ers',
            'phoenix-suns',
            'portland-trailblazers',
            'sacramento-kings',
            'san-antonio-spurs',
            'toronto-raptors',
            'utah-jazz',
            'washington-wizards'
        ];

        var $post = $( '.post' ),
            $body = $( 'body' ),
            matches = 0;
        for (var i = teamTags.length - 1; i >= 0; i--) {
            if ( $post.hasClass( 'tag-' + teamTags[ i ] ) ) {
                matches++;
            }
        }
        
        if ( matches === 0 ) {
            $body.addClass( 'covers-no-team' );
        }
        if ( matches === 1 ) {
            $body.addClass( 'covers-single-team' );
        }
        if ( matches > 1 ) {
            $body.addClass( 'covers-multiple-teams' );
        }
    });
})(jQuery);
