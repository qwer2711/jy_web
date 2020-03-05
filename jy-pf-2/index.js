

//메인슬라이더

$('.my-carousel-1 > .owl-carousel').owlCarousel({
    autoplay:false,
    autoplayTimeout:2000,
    loop:true,
    margin:10,
    nav:true,
    navText:['<img src="https://i.ibb.co/FKf75Gc/main-kv-arr-l.png" alt="">', '<img src="https://i.ibb.co/bBmskLV/main-kv-arr-r.png" alt="">'],
    responsive:{
        0:{
            items:1
        }
    },
    animateOut: 'fadeOut',
    autoplayHoverPause:true,
});

// 두번째 제품 메뉴 슬라이더

function ProdBox1__updateMenuBox1LiActive() {
    var currentItemNo = $('.prod-box-1 > .my-carousel-box-1 > .owl-carousel > .owl-stage-outer > .owl-stage > .owl-item.active > .item').attr('data-no');
    
    $('.prod-box-1 > .menu-box-1 > ul > li.active').removeClass('active');
    
    if ( currentItemNo < 9 ) {
        $('.prod-box-1 > .menu-box-1 > ul > li:nth-child(1)').addClass('active');
    }
    else if ( currentItemNo >= 9 && currentItemNo < 17 ) {
        $('.prod-box-1 > .menu-box-1 > ul > li:nth-child(2)').addClass('active');
    }
    else {
        $('.prod-box-1 > .menu-box-1 > ul > li:nth-child(3)').addClass('active');
    }
}

$('.prod-box-1 > .menu-box-1 > ul > li').click(function() {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    
    var index = $(this).index();
    var no = index * 2;
    
    $('.prod-box-1 > .my-carousel-box-1 > .owl-carousel').trigger('to.owl.carousel', [no, 0]);
});

$('.prod-box-1 > .my-carousel-box-1 > .owl-carousel').owlCarousel({
    smartSpeed:100,
    slideBy:4,
    loop:true,
    margin: 0,
    nav:true,
    navText:['<img src="https://i.ibb.co/PQH1XMV/reco-arr-prev.png" alt="">','<img src="https://i.ibb.co/P54zKb2/reco-arr-next.png" alt="">'],
    responsive:{
        0:{
            items:4
        }
    },
    onInitialized: ProdBox1__updateMenuBox1LiActive,
    onTranslated: ProdBox1__updateMenuBox1LiActive,
});

//인스타 슬라이더 메뉴

function InstaBox1__updateMenuBox1LiActive() {
    var currentItemNo = $('.insta-box-1 > .my-carousel-box-1 > .owl-carousel > .owl-stage-outer > .owl-stage > .owl-item.active > .item').attr('data-no');
    
    $('.insta-box-1 > .menu-box-1 > ul > li.active').removeClass('active');
    
    if ( currentItemNo < 9 ) {
        $('.insta-box-1 > .menu-box-1 > ul > li:nth-child(1)').addClass('active');
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
    navText:['<img src="https://i.ibb.co/PQH1XMV/reco-arr-prev.png" alt="">','<img src="https://i.ibb.co/P54zKb2/reco-arr-next.png" alt="">'],
    responsive:{
        0:{
            items:4
        }
    },
    onInitialized: InstaBox1__updateMenuBox1LiActive,
    onTranslated: InstaBox1__updateMenuBox1LiActive,
});


//스토어슬라이더

function StoreBox1__updateMenuBox1LiActive() {
    var currentItemNo = $('.store-box-1 > .my-carousel-box-1 > .owl-carousel > .owl-stage-outer > .owl-stage > .owl-item.active > .item').attr('data-no');
    
    $('.store-box-1 > .menu-box-1 > ul > li.active').removeClass('active');
    
    if ( currentItemNo < 9 ) {
        $('.store-box-1 > .menu-box-1 > ul > li:nth-child(1)').addClass('active');
    }
    else if ( currentItemNo >= 9 && currentItemNo < 17 ) {
        $('.store-box-1 > .menu-box-1 > ul > li:nth-child(2)').addClass('active');
    }
    else {
        $('.store-box-1 > .menu-box-1 > ul > li:nth-child(3)').addClass('active');
    }
}

$('.store-box-1 > .menu-box-1 > ul > li').click(function() {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    
    var index = $(this).index();
    var no = index * 2;
    
    $('.store-box-1 > .my-carousel-box-1 > .owl-carousel').trigger('to.owl.carousel', [no, 100]);
});

$('.store-box-1 > .my-carousel-box-1 > .owl-carousel').owlCarousel({
    smartSpeed:100,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    animateOut: 'fadeOut',
    margin: 15,
    nav:true,
    navText:['<img src="https://i.ibb.co/PQH1XMV/reco-arr-prev.png" alt="">','<img src="https://i.ibb.co/P54zKb2/reco-arr-next.png" alt="">'],
    responsive:{
        0:{
            items:1
        }
    },
    onInitialized: StoreBox1__updateMenuBox1LiActive,
    onTranslated: StoreBox1__updateMenuBox1LiActive,
});

// 컬쳐 슬라이드 시작

$('.culture-box-1 > .my-carousel-box-1 > .owl-carousel').owlCarousel({
    smartSpeed:100,
    slideBy:5,
    loop:true,
    margin: 0,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    animateOut: 'fadeOut',
    navText:['<img src="https://i.ibb.co/PQH1XMV/reco-arr-prev.png" alt="">','<img src="https://i.ibb.co/P54zKb2/reco-arr-next.png" alt="">'],
    responsive:{
        0:{
            items:5.5
        }
    },
});

// 상단 외국어 고르기

$('.header .header-menu-text > ul>li').click(function(){
      var sideBarHasClassActive = $('.header .header-menu-text > ul>li').hasClass('active');
    
    if ( sideBarHasClassActive ) {
        //console.log("active 클래스를 가지고 있습니다.");
        $('.header .header-menu-text > ul>li').removeClass('active');
    }
    else {
        //console.log("active 클래스를 가지고 있지 않습니다.");
        $('.header .header-menu-text > ul>li').addClass('active');
    }
});

