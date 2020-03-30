$('.portfolio .left-box .left-content > a').click(function(){
    $('.part-5>.head>ul>li').eq($(this).index()).click();
});

$('.part-5>.head>ul>li').click(function(){
    var $this = $(this);
    var $part5 = $this.closest('.part-5');
    var $current = $part5.find('>.head>ul>li.active');
    
    $current.removeClass('active');
    $this.addClass('active');
    
    var index = $this.index();
    $part5.find('>.content>div.active').removeClass('active');
    $part5.find('>.content>div').eq(index).addClass('active');
    
    $('.portfolio .left-box .left-content > a.active').removeClass('active');
    $('.portfolio .left-box .left-content > a').eq(index).addClass('active');
});


$('.part-5 .my-2 > .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:false,
    autoplayHoverPause:false,
    animateOut: 'fadeOut',
    nav:true,
    responsive:{
        0:{
            items:1
        },   
    },
    navText:['<img src="https://i.ibb.co/PQH1XMV/reco-arr-prev.png" alt="">','<img src="https://i.ibb.co/P54zKb2/reco-arr-next.png" alt="">'],
});

// 웹디자인

$('.part-4 > .head-1 > ul > li').click(function(){
    var $this = $(this);
    var $part4 = $this.closest('.part-4');
    var $current = $part4.find('>.head-1>ul>li.active');
   
    
    $current.removeClass('active');
    $this.addClass('active');
    
    var index = $this.index();
    $part4.find('> .content > div.active').removeClass('active');
    $part4.find('> .content > div').eq(index).addClass('active');
    
});



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

//팝업창1

$('.list-box-1 .cell .url .btn2-1').click(function(){
    $('.popup-1,.popup-bg').css('display','block');
    $('html').addClass('no-scroll');
});

$('.popup-1 > .head > .btn-close').click(function(){
    $('.popup-1,.popup-bg').css('display','none');
    $('html').removeClass('no-scroll');
});

//팝업창2
$('.list-box-1 .cell .url .btn2-2').click(function(){
    $('.popup-2,.popup-bg').css('display','block');
    $('html').addClass('no-scroll');
});

$('.popup-2 > .head > .btn-close').click(function(){
    $('.popup-2,.popup-bg').css('display','none');
    $('html').removeClass('no-scroll');
});

//팝업창3
$('.list-box-1 .cell .url .btn2-3').click(function(){
    $('.popup-3,.popup-bg').css('display','block');
    $('html').addClass('no-scroll');
});

$('.popup-3 > .head > .btn-close').click(function(){
    $('.popup-3,.popup-bg').css('display','none');
    $('html').removeClass('no-scroll');
});


//팝업창4
$('.list-box-1 .cell .url .btn2-4').click(function(){
    $('.popup-4,.popup-bg').css('display','block');
    $('html').addClass('no-scroll');
});

$('.popup-4 > .head > .btn-close').click(function(){
    $('.popup-4,.popup-bg').css('display','none');
    $('html').removeClass('no-scroll');
});


//팝업창5
$('.list-box-1 .cell .url .btn2-5').click(function(){
    $('.popup-5,.popup-bg').css('display','block');
    $('html').addClass('no-scroll');
});

$('.popup-5 > .head > .btn-close').click(function(){
    $('.popup-5,.popup-bg').css('display','none');
    $('html').removeClass('no-scroll');
});


//팝업창6
$('.list-box-1 .cell .url .btn2-6').click(function(){
    $('.popup-6,.popup-bg').css('display','block');
    $('html').addClass('no-scroll');
});

$('.popup-6 > .head > .btn-close').click(function(){
    $('.popup-6,.popup-bg').css('display','none');
    $('html').removeClass('no-scroll');
});


