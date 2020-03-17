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

//메인박스 글씨효과
//한번만재생

setInterval(function() {
    $('.sm-link8').toggleClass('hover');
}, 3000);



//사진메뉴

function ProdBox1__updateMenuBox1LiActive() {
    var currentItemNo = $('.prod-box-1 > .my-carousel-box-1 > .owl-carousel > .owl-stage-outer > .owl-stage > .owl-item.active > .item').attr('data-no');
    
    $('.prod-box-1 > .menu-box-1 > ul > li.active').removeClass('active');
    
    if ( currentItemNo < 9 ) {
        $('.prod-box-1 > .menu-box-1 > ul > li:nth-child(1)').addClass('active');
    }
    else if ( currentItemNo >= 9 && currentItemNo < 21 ) {
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
    
    $('.prod-box-1 > .my-carousel-box-1 > .owl-carousel').trigger('to.owl.carousel', [no, 100]);
});

$('.prod-box-1 > .my-carousel-box-1 > .owl-carousel').owlCarousel({
    smartSpeed:100,
    slideBy:4,
    loop:true,
    margin: 0,
    nav:true,
    navText:['<img src="./img/reco-arr-prev.png" alt="">', '<img src="./img/reco-arr-next.png" alt="">'],
    responsive:{
        0:{
            items:4
        }
    },
    onInitialized: ProdBox1__updateMenuBox1LiActive,
    onTranslated: ProdBox1__updateMenuBox1LiActive,
});

//인스타그램

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
    slideBy:1,
    loop:true,
    margin: 0,
    nav:true,
    dots:false,
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:5
        }
    },
    onInitialized: ProdBox1__updateMenuBox1LiActive,
    onTranslated: ProdBox1__updateMenuBox1LiActive,
});

// 모바일 사이드메뉴 펼치기 닫기

$('.mobile-wrap .mobile-header .logo-2').click(function(){
   $('.mobile-side-menu').addClass('active');
});

$('.mobile-wrap .mobile-side-menu .side-box .close-icon').click(function(){
   $('.mobile-side-menu').removeClass('active');
});

// 모바일 사이드메뉴리스트 펼치기

$('.mobile-side-menu .side-box .main-menu > li').click(function(){
    var b = $(this).hasClass('active');
    if(b){
        $(this).removeClass('active');
        //console.log('active클래스를 가진 클릭된 메뉴아이템은 active클래스를 제거한다.');
    }
    else{
        $(this).addClass('active');
        $(this).siblings('.active').removeClass('active');
    }
});

//새상품 반응형

function ProdBox1__updateMenuBox1LiActive() {
    var currentItemNo = $('.prod-box-1-mb > .my-carousel-box-1 > .owl-carousel > .owl-stage-outer > .owl-stage > .owl-item.active > .item').attr('data-no');
    
    $('.prod-box-1-mb > .menu-box-1 > ul > li.active').removeClass('active');
    
    if ( currentItemNo < 9 ) {
        $('.prod-box-1-mb > .menu-box-1 > ul > li:nth-child(1)').addClass('active');
    }
    else if ( currentItemNo >= 9 && currentItemNo < 21 ) {
        $('.prod-box-1-mb > .menu-box-1 > ul > li:nth-child(2)').addClass('active');
    }
    else {
        $('.prod-box-1-mb > .menu-box-1 > ul > li:nth-child(3)').addClass('active');
    }
}

$('.prod-box-1-mb > .menu-box-1 > ul > li').click(function() {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    
    var index = $(this).index();
    var no = index * 4;
    
    $('.prod-box-1-mb > .my-carousel-box-1 > .owl-carousel').trigger('to.owl.carousel', [no, 100]);
});

$('.prod-box-1-mb > .my-carousel-box-1 > .owl-carousel').owlCarousel({
    smartSpeed:100,
    slideBy:2,
    loop:true,
    margin: 0,
    nav:true,
    navText:['<img src="./img/reco-arr-prev.png" alt="">', '<img src="./img/reco-arr-next.png" alt="">'],
    responsive:{
        0:{
            items:2
        }
    },
    onInitialized: ProdBox1__updateMenuBox1LiActive,
    onTranslated: ProdBox1__updateMenuBox1LiActive,
});

//인스타그램 반응형



//인스타그램

function ProdBox2__updateMenuBox1LiActive() {
    var currentItemNo = $('.insta-box-1-mb > .my-carousel-box-1 > .owl-carousel > .owl-stage-outer > .owl-stage > .owl-item.active > .item').attr('data-no');
    
    $('.insta-box-1-mb > .menu-box-1 > ul > li.active').removeClass('active');
    
    if ( currentItemNo < 9 ) {
        $('.instad-box-1-mb > .menu-box-1 > ul > li:nth-child(1)').addClass('active');
    }
    else if ( currentItemNo >= 9 && currentItemNo < 17 ) {
        $('.insta-box-1-mb > .menu-box-1 > ul > li:nth-child(2)').addClass('active');
    }
    else {
        $('.insta-box-1-mb > .menu-box-1 > ul > li:nth-child(3)').addClass('active');
    }
}

$('.insta-box-1-mb > .menu-box-1 > ul > li').click(function() {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    
    var index = $(this).index();
    var no = index * 2;
    
    $('.insta-box-1-mb > .my-carousel-box-1 > .owl-carousel').trigger('to.owl.carousel', [no, 100]);
});

$('.insta-box-1-mb > .my-carousel-box-1 > .owl-carousel').owlCarousel({
    smartSpeed:100,
    slideBy:1,
    loop:true,
    margin: 0,
    nav:true,
    dots:false,
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:3
        }
    },
    onInitialized: ProdBox2__updateMenuBox1LiActive,
    onTranslated: ProdBox2__updateMenuBox1LiActive,
});



