let intro = $('#intro');
let header = $('#header');
let introHeight = intro.innerHeight();
let headerHeight = header.innerHeight();
$(window).on('scroll', function() {

    let scrollTop = $(this).scrollTop();

    if( scrollTop >= (introHeight - headerHeight) ) {
        header.addClass('header--dark');
     } else {
        header.removeClass('header--dark');
     }

});

// console.log();