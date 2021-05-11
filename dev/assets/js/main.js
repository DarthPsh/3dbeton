var heroSlider = new Swiper('.hero-slider', {
    pagination: {
        el: '.hero-slider__pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass, index, total) {
            return '<span class="' + currentClass + '">' + index + '</span>' +
                '<span class="slider-control__pagination-separator"></span>' +
                '<span class="' + totalClass + '">' + total + '</span>';
        },
    },
    navigation: {
        nextEl: '.hero-slider__next',
        prevEl: '.hero-slider__prev',
    },
});

$('.hero-content__desc-btn').on('click', function () {
    $(this).prev('.hero-content__desc-block').toggleClass('is-show');
})



var pageSlider = new Swiper('.pageslider', {
    slidesPerView: 'auto',
    spaceBetween: 55,
    pagination: {
        el: '.pageslider-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass, index, total) {
            return '<span class="' + currentClass + '">' + index + '</span>' +
                '<span class="slider-control__pagination-separator"></span>' +
                '<span class="' + totalClass + '">' + total + '</span>';
        },
    },
    navigation: {
        nextEl: '.pageslider-next',
        prevEl: '.pageslider-prev',
    },
});




const $prodLink = $('.production-list__item-link');
const $prodImageContainer = $('.production-list__item-img');
const $prodImage = $('.production-list__item-img img');

$prodLink.on('mousemove', function (event) {
    let xAxis = (this.offsetWidth / 2 - event.offsetX) / 10;
    let yAxis = (this.offsetHeight / 2 - event.offsetY) / 10;
    $(this).next($prodImageContainer).find($prodImage).css("transform", `rotate(${xAxis}deg)`);
})
$prodLink.on('mouseenter', function (event) {
    $(this).next($prodImageContainer).css({ "transition": "opacity .3s ease" });
    $(this).next($prodImageContainer).find($prodImage).css({ "transition": "transform .3s ease" });
});
$prodLink.on('mouseleave', function (event) {
    $(this).next($prodImageContainer).css({ "transition": "opacity .3s ease" });
    $(this).next($prodImageContainer).find($prodImage).css({ "transition": "transform .3s ease", "transform": "rotate(0deg)" });
});


const $readymadeName = $('.readymade-list__item-name');
const $readymadeImageContainer = $('.readymade-list__item-img');
const $readymadeImage = $('.readymade-list__item-img img');

$readymadeName.on('mousemove', function (event) {
    let xAxis = (this.offsetWidth / 2 - event.offsetX) / 10;
    let yAxis = (this.offsetHeight / 2 - event.offsetY) / 10;
    $(this).next($readymadeImageContainer).find($readymadeImage).css("transform", `rotate(${xAxis}deg)`);
})
$readymadeName.on('mouseenter', function (event) {
    $(this).next($readymadeImageContainer).css({ "transition": "opacity .3s ease" });
    $(this).next($readymadeImageContainer).find($readymadeImage).css({ "transition": "transform .3s ease" });
});
$readymadeName.on('mouseleave', function (event) {
    $(this).next($readymadeImageContainer).css({ "transition": "opacity .3s ease" });
    $(this).next($readymadeImageContainer).find($readymadeImage).css({ "transition": "transform .3s ease", "transform": "rotate(0deg)" });
});



$('.product-head__filter label').on("click", function () {
    $('.filter-select__title span').text($(this).text());
});
$('.filter-select__title').on('click', function () {
    $(this).next().toggleClass('is-active');
})


// клики вне элементов
$(document).mouseup(function (e) { // событие клика по веб-документу
    if (!$('.product-head__filter-select').is(e.target) // если клик был не по нашему блоку
        && $('.product-head__filter-select').has(e.target).length === 0) { // и не по его дочерним элементам
        $('.product-head__filter-select ul').removeClass('is-active');
    }
});


$('.row-slider__wrap').each(function () {
    let rowSliderCount = $(this).find('.row-slider__item').length;
    $(this).find('.row-slider__count').text(rowSliderCount);
});

function initRowSlider() {
    var rowSlider = new Swiper('.row-slider', {
        slidesPerView: 'auto',
        spaceBetween: 40,
        navigation: {
            nextEl: '.row-slider__controls-next',
            prevEl: '.row-slider__controls-prev',
        },
        observer: true,
        observeParents: true,
        breakpoints: {
            1600: {
                spaceBetween: 64,
            },
        },
    });
}
initRowSlider();





$('.gallery-more__count').html('&nbsp;' + $('.hero-content__gallery-more').length);



var processSliderText = new Swiper('.process-info', {
    spaceBetween: 10,
    slidesPerView: 1,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    allowTouchMove: false,
});
var processSliderImg = new Swiper('.process-img', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.process-nav__arrow_next',
        prevEl: '.process-nav__arrow_prev',
    },
    thumbs: {
        swiper: processSliderText
    },
    pagination: {
        el: '.process-nav__pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    }
});



var simpleSlider = new Swiper('.simple-slider', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    navigation: {
        nextEl: '.simple-slider__control_next',
        prevEl: '.simple-slider__control_prev',
    },
    breakpoints: {
        1600: {
            spaceBetween: 64,
        },
    },
});


if (document.querySelectorAll('.montage-grid__item-info').length) {
    let montageGridItemInfo = document.querySelectorAll('.montage-grid__item-info');
    montageGridItemInfo[3].style.minHeight = montageGridItemInfo[2].clientHeight + 'px';
}


if (document.querySelectorAll('.tabs-btn').length) {
    const tabBtn = document.querySelectorAll('.tabs-btn');
    const tabBtnCount = document.querySelectorAll('.tabs-btn__count');
    const tabBlock = document.querySelectorAll('.tabs-block');
    let tabBlockItemCount
    tabBtn.forEach(function (item, index) {
        item.addEventListener('click', () => {
            tabBtn.forEach(el => {
                el.classList.remove('tabs-btn_active');
            });
            tabBlock.forEach(el => {
                el.classList.remove('tabs-block_active');
            });
            item.classList.add('tabs-btn_active');
            tabBlock[index].classList.add('tabs-block_active');
            initRowSlider();
        });
    })
    tabBlock.forEach(function (item, index) {
        tabBlockItemCount = item.querySelectorAll('.row-slider__item');
        tabBtnCount[index].innerText = tabBlockItemCount.length;
    });
}





if (document.querySelectorAll(".counter-list").length) {
    var show = true;
    var countbox = ".counter-list";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            //
            // скрипт который должен выполниться
            $('.counter').css('opacity', '1');
            var counterAge = $('#counter-age').text();
            $({ ageNumberValue: counterAge }).animate({ ageNumberValue: 13 }, {
                duration: 3000,
                easing: 'linear',
                step: function () {
                    $('#counter-age').text(Math.ceil(this.ageNumberValue));
                }
            });
            var counterCompany = $('#counter-company').text();
            $({ companyNumberValue: counterCompany }).animate({ companyNumberValue: 4 }, {
                duration: 3000,
                easing: 'linear',
                step: function () {
                    $('#counter-company').text(Math.ceil(this.companyNumberValue));
                }
            });
            var counterStaff = $('#counter-staff').text();
            $({ staffNumberValue: counterStaff }).animate({ staffNumberValue: 40 }, {
                duration: 3000,
                easing: 'linear',
                step: function () {
                    $('#counter-staff').text(Math.ceil(this.staffNumberValue));
                }
            });
            var counterProject = $('#counter-project').text();
            $({ projectNumberValue: counterProject }).animate({ projectNumberValue: 150 }, {
                duration: 3000,
                easing: 'linear',
                step: function () {
                    $('#counter-project').text(Math.ceil(this.projectNumberValue));
                }
            });
    
            show = false;
        }
    });
}

$('.team-hero__desc-more').on('click', function() {
    $('.team-hero__desc_invisible').toggleClass('is-visible');
})



var technoSliderThumbs = new Swiper('.techno-slider__thumbs', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var technoSliderMain = new Swiper('.techno-slider__main', {
    spaceBetween: 19,
    slidesPerView: 1,
    thumbs: {
        swiper: technoSliderThumbs,
        autoScrollOffset: 1,
    },
    navigation: {
        nextEl: '.hero-slider__next',
        prevEl: '.hero-slider__prev',
    },
    pagination: {
        el: '.hero-slider__pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass, index, total) {
            return '<span class="' + currentClass + '">' + index + '</span>' +
                '<span class="slider-control__pagination-separator"></span>' +
                '<span class="' + totalClass + '">' + total + '</span>';
        },
    }
    
});
