// event    
$('.page-scroll').on('click', function (e) {
    // ambil isi href
    let tujuan = $(this).attr('href');
    //tangkap elemen
    let elemenTujuan = $(tujuan);
    // debug 
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'swing');
    e.preventDefault();
});

// parallax jumbotron
$(window).scroll(function () {
    var windowScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px,' + windowScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + windowScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px,' + windowScroll / 1.2 + '%)'
    });
    // About
    $(window).on('load', function () {
        $('.pKiri').addClass('pMuncul');
        $('.pKanan').addClass('pMuncul');
    });



    //  portfolio
    if (windowScroll > $('.portfolio').offset().top - 280) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('tes');
            }, 300 * (i + 1));
        });
    }

});