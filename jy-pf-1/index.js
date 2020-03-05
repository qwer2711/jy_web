$('.main-grid .row .cell .grid-item1 .grid-item-base .slider-1 .pages li').click(function() {
    var $slider = $(this).closest('.slider-1');
    var $current = $slider.find('>.pages > li.active');
    
    $current.removeClass('active');
    $(this).addClass('active');
    
    var index = $(this).index();
   
    $slider.find('>.slides>div.active').removeClass('active');
    $slider.find('>.slides>div').eq(index).addClass('active');
   
});

function Slider1__moveNext() {
    var $slider = $('.main-grid .row .cell .grid-item1 .slider-1');
    var $current = $slider.find(' > .pages > li.active');
    
    var $next = $current.next();
    
    if ( $next.length == 0 ) {
        $next = $slider.find('> .pages > li:first-child');
    }

    $next.click();
}

setInterval(Slider1__moveNext, 2000);

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    
    
    var duration = 1000;
    
    var top = scrollTop;
    
    if ( top < 100 ) {
        top = 100;
    }
    
    var maxTop = 1200;
    
    if ( top > maxTop ) { 
        top = maxTop;
    }
    
    $('.side-menu-box').stop().animate({top:top}, duration);
    
    console.log(scrollTop);
});
