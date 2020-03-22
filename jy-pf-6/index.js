$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    
    if ( scrollTop >= 100 ) {
        $('html').addClass('scroll-top-over-200');
    }
    else {
        $('html').removeClass('scroll-top-over-200');
    }
});

// 모바일 사이드메뉴 펼치기 닫기

$('.mobile-header-0 .mobile-header .logo-2').click(function(){
   $('.mobile-side-menu').addClass('active');
});

$('.mobile-side-menu .side-box .close-icon').click(function(){
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

//메인슬라이더
$('.main-slider .my-carousel-1 > .owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:2000,
    loop:true,
    margin:0,
    nav:true,
    navText:['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        }
    },
    animateOut: 'fadeOut',
    autoplayHoverPause:true,
});

//모바일 슬라이더
$('.mb-slider .my-carousel-1 > .owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:2000,
    loop:true,
    margin:0,
    nav:true,
    navText:['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        }
    },
    animateOut: 'fadeOut',
    autoplayHoverPause:true,
});

//탭박스

$('.part-4>.head>ul>li').click(function(){
    var $this = $(this);
    var $part4 = $this.closest('.part-4');
    var $current = $part4.find('>.head>ul>li.active');
   
    
    $current.removeClass('active');
    $this.addClass('active');
    
    var index = $this.index();
    $part4.find('>.content>div.active').removeClass('active');
    $part4.find('>.content>div').eq(index).addClass('active');
    
});

//모바일 탭박스

$('.part-4-mb>.head>ul>li').click(function(){
    var $this = $(this);
    var $part4 = $this.closest('.part-4-mb');
    var $current = $part4.find('>.head>ul>li.active');
   
    
    $current.removeClass('active');
    $this.addClass('active');
    
    var index = $this.index();
    $part4.find('>.content>div.active').removeClass('active');
    $part4.find('>.content>div').eq(index).addClass('active');
    
});

// 이모티콘 리스트 올라오기

function ActiveOnVisible__init() {
    $(window).resize(ActiveOnVisible__initOffset);
    ActiveOnVisible__initOffset();

    $(window).scroll(ActiveOnVisible__checkAndActive);
    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
    $('.active-on-visible').each(function(index, node) {
        var $node = $(node);

        var offsetTop = $node.offset().top;
        $node.attr('data-active-on-visible-offsetTop', offsetTop);
        
        if ( !$node.attr('data-active-on-visible-diff-y') ) {
            $node.attr('data-active-on-visible-diff-y', '0');
        }
        
        if ( !$node.attr('data-active-on-visible-delay') ) {
            $node.attr('data-active-on-visible-delay', '0');
        }
    });
    
    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() { 
    $('.active-on-visible').each(function(index, node) {
        var $node = $(node);

        var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
        var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
        var nodeHeight = $node.height();
        
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        
        if ( scrollTop + windowHeight + diffY > offsetTop && scrollTop + windowHeight < offsetTop + windowHeight + nodeHeight ) {
            $node.addClass('active');
        }
        else {
            $node.removeClass('active');
        }
    });
}

ActiveOnVisible__init();









