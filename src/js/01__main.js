document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
    $('.owl-carousel').owlCarousel({
        items:1,
        loop:false,
        center:false,
        nav:false,
        dots:false,
        margin:0,
        loop: true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        mouseDrag: false,
        touchDrag: false
    });
    // listener hero change slide
    let heroSliderNav = document.querySelector('.hero__nav .row');
    heroSliderNav.addEventListener('click', (e) => {
        let target = e.target;
        if (target && target.classList.contains('hero__nav__item')) {
            heroSliderNav.querySelector('.active').classList.remove('active');
            target.classList.add('active');
        }
    });
    jQuery(document).ready(function(){
        jQuery('.what-we-do .accordion-body').scrollbar();
    });
});