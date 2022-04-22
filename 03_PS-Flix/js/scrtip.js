$('.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    margin: 5,
    nav: false,
    responsive:{
        0:{
            items: 1
        },
        500:{
            items: 2
        },
        800:{
            items: 3
        },
        1000:{
            items: 4
        }
    }
})