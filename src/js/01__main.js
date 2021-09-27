document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
    document.querySelectorAll('[href="#"]').forEach(item => item.addEventListener('click', (e) => e.preventDefault()));
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        center: false,
        nav: false,
        dots: false,
        margin: 0,
        loop: true,
        URLhashListener: true,
        autoplayHoverPause: true,
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
    document.querySelector('.nav-close').addEventListener('click', (e) => {
        e.target.parentNode.classList.remove('active');
    })
    document.querySelector('.nav-open').addEventListener('click', (e) => {
        console.log(e.target);
        e.target.previousElementSibling.classList.add('active');
    })
    jQuery(document).ready(function () {
        jQuery('.what-we-do .accordion-body').scrollbar();
    });
});