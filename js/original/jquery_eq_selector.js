$( 'td:eq( 2 )' ).css('color', '#ff0000');
$( 'ul.nav li:eq(1)' ).css( 'backgroundColor', '#ffff00' );
$( 'ul.nav' ).each(function(index) {
  $( this ).find( 'li:eq(1)' ).css( 'fontStyle', 'italic' );
});
$( 'ul.nav li:nth-child(2)' ).css( 'color', '#ff0000' );
$( 'li:eq(-1)' ).addClass( 'foo' );