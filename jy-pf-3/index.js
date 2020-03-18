console.clear();
$(function() {
    setTimeout(function() {
        $.scrollify({
            section:".section",
            scrollbars:false,
            setHeights:false,
            before:function(i,panels) {
                console.log("i : " + i);
                $('html').attr('data-scrollify-index', i);
                $('.section.active').eq(i).removeClass('active');
                $('.section').eq(i).addClass('active');
                $('.section').eq(i).addClass('visited');
                var ref = panels[i].attr("data-section-name");
                $(".pagination .active").removeClass("active");
                $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active"); 
            },
            afterRender:function() {
                var pagination = "<ul class=\"pagination\">";
                var activeClass = "";
                $(".section").each(function(i) {
                    activeClass = "";
                    if ( i === 0 ) {
                        activeClass = "active";
                    }
                    pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
                });

                pagination += "</ul>";

                $(".home").append(pagination);

                $(".pagination a").on("click", $.scrollify.move);
            },
            interstitialSection:".section6"
        });        
    }, 500);
});

//상단메뉴

$('.header .header-box .menu-2 > ul > li > ul').mouseenter(function(){
    var HaveActive = $('.header .header-box .menu-2 > ul > li > ul').hasClass('active');
    
    if(HaveActive){
        $(this).removeClass('active');
    }
    else{
        $(this).addClass('active');
    }
});

$('.header .header-box .menu-2 > ul > li > ul').mouseleave(function(){
    $('.header .header-box .menu-2 > ul > li > ul.active').removeClass('active');
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


//홈화면 글씨효과

$('.text-obj').mouseenter(function() {
    $(this).attr('data-mouseenter', 'Y');
});


$('.text-obj').mouseleave(function() {
    $(this).attr('data-mouseenter', 'N');
    $('.text-obj').attr('data-auto-animation-index', 0);
});

setInterval(function() {
    var index = parseInt($('.text-obj').attr('data-auto-animation-index'));

    index++;

    if ( index >= 4 ) {
        index = 0;
    }

    $('.text-obj').attr('data-auto-animation-index', index);
}, 2000);

//이미지와 호버연결
$('.main-visual .video-area .text-obj ul > li').mouseover(function(){
    var index = $(this).index();
    var $mainVisual = $(this).closest('.main-visual');

    $mainVisual.find('>.video-area .only-pc .pc-image.active').removeClass('active');
    $mainVisual.find('>.video-area .only-pc .pc-image').eq(index).addClass('active');

});

//호버안했을때 동영상으로 다시 돌아오기

$('.main-visual .video-area .text-obj a').mouseleave(function(){
    $('.main-visual .video-area .only-pc .pc-image.active').removeClass('active');
});


//두번째페이지

var visionSwipe = new Swiper('.visionArea .swiper-container', {
    slidesPerView : "auto",
    spaceBetween : 30,
    navigation: {
        nextEl: '.visionArea .swiper-button-next',
        prevEl: '.visionArea .swiper-button-prev',
    },
    on : {
        slideChange : function () {
            $('.section-vision').attr('data-vision-swipe-index', visionSwipe.activeIndex);
        }
    },
    pagination: {
        el: '.swiper-pagination',
        type : 'progressbar',
    },
    breakpoints: {
        1280: {

        },
        768: {

        },
        500: {
            spaceBetween : 15,
        }
    },
});

//세번째페이지

$('.section3 > .cultureArea .quarter .list:nth-child(1) > a').mouseenter(function(){

    var $hoverImg = $(this).closest('.section3');

    $hoverImg.find('> .cultureArea .hover-img > div.active').removeClass('active');

    $hoverImg.find('> .cultureArea .hover-img > div:nth-child(1)').addClass('active');
});

$('.section3 > .cultureArea .quarter .list:nth-child(2) > a').mouseenter(function(){

    var $hoverImg = $(this).closest('.section3');

    $hoverImg.find('> .cultureArea .hover-img > div.active').removeClass('active');

    $hoverImg.find('> .cultureArea .hover-img > div:nth-child(2)').addClass('active');
});

$('.section3 > .cultureArea .quarter .list:nth-child(3) > a').mouseenter(function(){

    var $hoverImg = $(this).closest('.section3');

    $hoverImg.find('> .cultureArea .hover-img > div.active').removeClass('active');

    $hoverImg.find('> .cultureArea .hover-img > div:nth-child(3)').addClass('active');
});

$('.section3 > .cultureArea .quarter .list:nth-child(4) > a').mouseenter(function(){

    var $hoverImg = $(this).closest('.section3');

    $hoverImg.find('> .cultureArea .hover-img > div.active').removeClass('active');

    $hoverImg.find('> .cultureArea .hover-img > div:nth-child(4)').addClass('active');
});


//호버떼면 다시 동영상으로 
$('.section3 > .cultureArea .quarter .list > a').mouseleave(function(){
    $('.section3 > .cultureArea .hover-img > div.active').removeClass('active');
});

//세번째 모바일버전
$('.section3 > .cultureArea-mb .quarter .list:nth-child(1) > a').mouseenter(function(){

    var $hoverImg = $(this).closest('.section3');

    $hoverImg.find('> .cultureArea-mb .hover-img > div.active').removeClass('active');

    $hoverImg.find('> .cultureArea-mb .hover-img > div:nth-child(1)').addClass('active');
});

$('.section3 > .cultureArea-mb .quarter .list:nth-child(2) > a').mouseenter(function(){

    var $hoverImg = $(this).closest('.section3');

    $hoverImg.find('> .cultureArea-mb .hover-img > div.active').removeClass('active');

    $hoverImg.find('> .cultureArea-mb .hover-img > div:nth-child(2)').addClass('active');
});

$('.section3 > .cultureArea-mb .quarter .list:nth-child(3) > a').mouseenter(function(){

    var $hoverImg = $(this).closest('.section3');

    $hoverImg.find('> .cultureArea-mb .hover-img > div.active').removeClass('active');

    $hoverImg.find('> .cultureArea-mb .hover-img > div:nth-child(3)').addClass('active');
});

$('.section3 > .cultureArea-mb .quarter .list:nth-child(4) > a').mouseenter(function(){

    var $hoverImg = $(this).closest('.section3');

    $hoverImg.find('> .cultureArea-mb .hover-img > div.active').removeClass('active');

    $hoverImg.find('> .cultureArea-mb .hover-img > div:nth-child(4)').addClass('active');
});



//4번째페이지

$('.section4 .newArea .news a').mouseenter(function(){
    $(this).addClass('active');  $(this).siblings('.active').removeClass('active');
});


//5번째페이지

var IrSlider__$slider = $('.section5 .row .cell .part-3 .side-btns > div');

function IrSlider__onClickPostBtn() {
    var $this = $(this);
    var index = $this.index();

    // 내가 왼쪽으로 이동해야 되나?
    var isLeft = index == 0;

    var $slider = $this.closest('.section5 .row .cell .part-3 .slider');

    var $current = $slider.find(' > .slides > div.active');
    var $post;

    if ( isLeft ) {
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    }

    if ( $post.length == 0 ) {
        if ( isLeft ) {
            $post = $slider.find(' > .slides > div:last-child');
        }
        else {
            $post = $slider.find(' > .slides > div:first-child');
        }
    }

    $current.removeClass('active');
    $post.addClass('active');
}

IrSlider__$slider.click(IrSlider__onClickPostBtn);

