// init function
var isMobile, isTablet, isDesktop;

$(function() {
    /*check device width*/
    bsContainerWidth = $("body").find('.container').outerWidth();
    if (bsContainerWidth < 720) {
        console.log("mobile");
        isMobile = true;
    } else if (bsContainerWidth < 960) {
        console.log("tablet");
        isTablet = true;
    } else {
        console.log("desktop");
        isDesktop = true;
    }

    // make parent class for vidoe & image story
    $('.story__thumb img[src$=".gif"]').parents('.story').addClass('story--gif');
    $('.story__thumb video').parents('.story').addClass('story--video');

    /*pin header */
    window.onscroll = function() { windowScroll() };

    // fix URL click on bxslider
    if (window.navigator.userAgent.toLowerCase().indexOf("chrome") > 0) {
        $("body").on("mousedown", ".bx-viewport a", function() {
            if ($(this).attr("href") && $(this).attr("href") != "#") {
                window.location = $(this).attr("href");
            }
        });
    }

    /*slider*/
    // index slider
    var serviceSlider = $('#slider-service')
    if (serviceSlider.length > 0 && isDesktop) {
        serviceSlider.bxSlider({
            auto: 1,
            minSlides: 4,
            maxSlides: 5,
            slideMargin: 16,
            slideWidth: 300,
            pager: 0,
            nextText: '',
            prevText: '',
            nextSelector: "#service-next",
            prevSelector: "#service-prev"
        });
    } else if (serviceSlider.length > 0 && isMobile) {
        serviceSlider.bxSlider({
            auto: 1,
            minSlides: 1,
            maxSlides: 2,
            slideMargin: 16,
            slideWidth: 200,
            pager: 0,
            nextText: '',
            prevText: '',
            nextSelector: "#service-next",
            prevSelector: "#service-prev"
        });
    } else if (serviceSlider.length > 0 && isTablet) {
        serviceSlider.bxSlider({
            auto: 1,
            minSlides: 3,
            maxSlides: 4,
            pager: 0,
            slideMargin: 16,
            slideWidth: 320,
            nextText: '',
            prevText: '',
            nextSelector: "#service-next",
            prevSelector: "#service-prev"
        });
    }
    var arrivalSlider = $('#slider-arrival')
    if (arrivalSlider.length > 0) {
        arrivalSlider.bxSlider({
            auto: 1,
            minSlides: 1,
            maxSlides: 1,
            pause: 6000,
            pagerSelector: '#arrival-pager',
            nextText: '',
            prevText: '',
            nextSelector: "#arrival-next",
            prevSelector: "#arrival-prev"
        });
    }
    var clientSlider = $('#slider-client')
    if (clientSlider.length > 0) {
        clientSlider.bxSlider({
            auto: 1,
            minSlides: 1,
            maxSlides: 1,
            pause: 7000,
            pagerSelector: '#client-pager',
            nextText: '',
            prevText: ''
        });
    }

    // button click
    $('#site-header .btn-expand').on('click', btnExpandClick);
});

/*customise function*/
// scoll down & pin site header
function windowScroll() {
    var headerHeight = $("#site-header").outerHeight();
    if (document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) {
        $("#site-header").addClass('is-pinned');
    } else {
        $("#site-header").removeClass('is-pinned');
    }
}

function btnExpandClick(e) {
    e.preventDefault();
    e.stopPropagation();
    expandNav();
}

function expandNav() {
    $('#site-header .nav').toggle();
    $('.btn-expand .fa-bars').toggle();
    $('.btn-expand .fa-times').toggle();
}

// light gallery
if ($(".lightgallery").length > 0) {
    var $lg = $('.lightgallery');
    $lg.lightGallery();
}

// masonry
var $grid = $('.grid-wrap');
if ($(".grid-wrap").length > 0) {

    // make parent class for vidoe & image story
    $('.story__thumb img[src$=".gif"]').parents('.story').addClass('story--gif');
    $('.story__thumb video').parents('.story').addClass('story--video');

    $grid.masonry({
        // options
        columnWidth: '.item-sizer',
        gutter: '.gutter-sizer',
        itemSelector: '.grid-item',
        percentPosition: true,
        transitionDuration: '0.2s'
    });
    $('#viewmore').on('click', viewmoreClick);
}

function viewmoreClick(e) {
    e.preventDefault();
    e.stopPropagation();
    // create new item elements
    var $items = $('<article class="story grid-item story--video"> <figure class="story__thumb"><a href="03.1-service-detail.html"> <video muted playsinline autoplay loop> <source src="images/video.mp4" type="video/mp4"> Your browser does not support the video tag. </video></a> </figure> <div class="story__header"> <h3 class="story__title"><a href="#">Muốn thuê được chiếc váy </a></h3> </div> </article> <article class="story grid-item story--gif"> <figure class="story__thumb"><a href="#"><img src="images/gif.gif" alt="" class="img-fluid"></a></figure> <div class="story__header"> <h3 class="story__title"><a href="#">Muốn thuê được chiếc váy </a></h3> </div> </article> <article class="story grid-item"> <figure class="story__thumb"><a href="#"><img src="images/640x360-1.jpg" alt="" class="img-fluid"></a></figure> <div class="story__header"> <h3 class="story__title"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque vel, cum. Nam facilis hic asperiores nemo, aliquid obcaecati, alias similique?</a></h3> </div> </article><article class="story grid-item story--video"> <figure class="story__thumb"><a href="03.1-service-detail.html"> <video muted playsinline autoplay loop> <source src="images/video43.mp4" type="video/mp4"> Your browser does not support the video tag. </video></a> </figure> <div class="story__header"> <h3 class="story__title"><a href="#">Muốn thuê được chiếc váy </a></h3> </div> </article>');
    // append items to grid
    $grid.append($items)
        // add and lay out newly appended items
        .masonry('appended', $items);
}