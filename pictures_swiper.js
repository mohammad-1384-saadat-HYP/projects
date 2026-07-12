const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 187.5,
        slideShadows: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        1000: {
            slidesPerView: 2.59,
        },
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});