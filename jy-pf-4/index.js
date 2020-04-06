$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    
    $('.main-box .logo-image').css('top', scrollTop + 150);
    $('.main-box .main-pocari').css('top', scrollTop + 150);
});

//포카리걸

$('.pocari-girl .my-carousel-1 > .owl-carousel').owlCarousel({
    autoplay:false,
    autoplayTimeout:2000,
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        }
    },
    animateOut: 'fadeOut',
    autoplayHoverPause:true
});

// 인스타그램

function ProdBox1__updateMenuBox1LiActive() {
    var currentItemNo = $('.insta-box-1 > .my-carousel-box-1 > .owl-carousel > .owl-stage-outer > .owl-stage > .owl-item.active > .item').attr('data-no');
    
    $('.insta-box-1 > .menu-box-1 > ul > li.active').removeClass('active');
    
    if ( currentItemNo < 9 ) {
        $('.instad-box-1 > .menu-box-1 > ul > li:nth-child(1)').addClass('active');
    }
    else if ( currentItemNo >= 9 && currentItemNo < 17 ) {
        $('.insta-box-1 > .menu-box-1 > ul > li:nth-child(2)').addClass('active');
    }
    else {
        $('.insta-box-1 > .menu-box-1 > ul > li:nth-child(3)').addClass('active');
    }
}

$('.insta-box-1 > .menu-box-1 > ul > li').click(function() {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    
    var index = $(this).index();
    var no = index * 2;
    
    $('.insta-box-1 > .my-carousel-box-1 > .owl-carousel').trigger('to.owl.carousel', [no, 100]);
});

$('.insta-box-1 > .my-carousel-box-1 > .owl-carousel').owlCarousel({
    smartSpeed:100,
    slideBy:4,
    loop:true,
    margin: 15,
    nav:true,
    dots:false,
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:4
        }
    },
    onInitialized: ProdBox1__updateMenuBox1LiActive,
    onTranslated: ProdBox1__updateMenuBox1LiActive,
});

