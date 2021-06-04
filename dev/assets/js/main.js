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
    spaceBetween: 8,
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
    breakpoints: {
        1600: {
            spaceBetween: 64,
        },
        1000: {
            spaceBetween: 40,
        },
    },
});

var testS = new Swiper('.test-slider', {
    slidesPerView: 1,
    spaceBetween: 8,
    breakpoints: {
        1600: {
            spaceBetween: 64,
        },
        1000: {
            spaceBetween: 40,
        },
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

    if (!$('.popup').is(e.target) // если клик был не по нашему блоку
        && $('.popup').has(e.target).length === 0) { // и не по его дочерним элементам
        console.log('123');
        $('.popup-close').click();
    }
});


$('.row-slider__wrap').each(function () {
    let rowSliderCount = $(this).find('.row-slider__item').length;
    $(this).find('.row-slider__count').text(rowSliderCount);
});

function initRowSlider() {
    var rowSlider = new Swiper('.row-slider', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        observer: true,
        observeParents: true,
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
            768: {
                spaceBetween: 40,
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
    pagination: {
        el: '.process-img__pagination',
        type: 'fraction',
    },
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
    spaceBetween: 8,
    navigation: {
        nextEl: '.simple-slider__control_next',
        prevEl: '.simple-slider__control_prev',
    },
    breakpoints: {
        1600: {
            spaceBetween: 64,
        },
        1000: {
            spaceBetween: 40,
        }
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



$('.team-hero__desc-more').on('click', function() {
    $('.team-hero__desc_invisible').toggleClass('is-visible');
})



var technoSliderThumbs = new Swiper('.techno-slider__thumbs', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        768: {
            spaceBetween: 10,
        },
    },
});
var technoSliderMain = new Swiper('.techno-slider__main', {
    spaceBetween: 19,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
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



$('.features-content__block-title').on('click', function() {
    $(this).closest('.features-content__block').find('.features-content__block-desc').toggleClass('features-content__block-desc_active');
})



$('.pageslider-item__what').on('click', function() {
    let $pageSliderText = $(this).closest('.pageslider-item').find('.pageslider-item__second .pageslider-item__content .pageslider-item__desc').text();
    let $pageSliderPopup = '<div class="popup-pageslider popup-wrap"><div class="popup-overlay"><div class="popup"><div class="popup-close"></div>' + $pageSliderText + '</div></div></div>';    
    $('body').append($pageSliderPopup);    
    $('.popup-pageslider .popup-close').on('click', function() {
        $('.popup-pageslider').remove();
    })
})


var heroMobileSlider = new Swiper('.hero-mobslider', {
    slidesPerView: 'auto',
    spaceBetween: 8,
    observer: true,
    observeParents: true,
});


$('.burger').on('click', function() {
    $(this).toggleClass('burger_active');
    $('.mob-menu').toggleClass('mob-menu_active');
    $('body').toggleClass('body-block');
    $('.mob-submenu').removeClass('mob-submenu_active');
})


const $mobMenuListItem = $('.mob-menu__list li');
$mobMenuListItem.on('click', function() {
    if ($(this).find('.mob-submenu').length) {
        $(this).find('.mob-submenu').addClass('mob-submenu_active');
    } 
})
$('.mob-submenu__title').on('click', function(event) {
    event.stopPropagation();
    $(this).closest('.mob-submenu').removeClass('mob-submenu_active');
})


$('.complet-content__desc-more').on('click', function() {
    $(this).closest('.complet-content__info').find('.complet-content__desc').toggleClass('complet-content__desc_active');
})



var ourprodGridSlider = new Swiper('.ourprod-grid__slider', {
    slidesPerView: 'auto',
    spaceBetween: 8,
    observer: true,
    observeParents: true,
    allowTouchMove: true,
    breakpoints: {
        768: {
            allowTouchMove: false,
        },
    },
});


$('.links-select').on('click', function() {
    $(this).next('.links-list__drop').toggleClass('links-list__drop_active')
})



var teamSlider = new Swiper('.team-slider', {
    autoHeight: true,
    spaceBetween: 40,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.team-popup__slider-next',
        prevEl: '.team-popup__slider-prev',
    },
});

// $('.team-popup__slider .popup-close').on('click', function() {
//     $('.team-popup__slider').css('display', 'none');
// })
function popupClose () {
    $('.popup-close').on('click', function() {
        $('.popup-wrap').css('display', 'none');
        $('.form-more__content').css('display', 'none');
        $('.form-more__info-btn').css('display', 'block');
    })
}
popupClose();


let staff = document.querySelectorAll('.team-grid__staff');
for (let i = 0; i < staff.length; i++) {
    staff[i].addEventListener('click', function() {
        $('.team-popup__slider').css('display', 'block');
        teamSlider.slideTo(i);
    })
}







document.querySelector('body>.wrapper').addEventListener('scroll', function() {
    $("#counter-age").viewportChecker({
        callbackFunction: function () {
            let counterAge = $('#counter-age').text();
            $({ ageNumberValue: counterAge }).animate({ ageNumberValue: 13 }, {
                duration: 3000,
                easing: 'linear',
                step: function () {
                    $('#counter-age').text(Math.ceil(this.ageNumberValue));
                }
            });
        }
    });
    
    $("#counter-company").viewportChecker({
        callbackFunction: function () {
            let counterCompany = $('#counter-company').text();
            $({ companyNumberValue: counterCompany }).animate({ companyNumberValue: 4 }, {
                duration: 3000,
                easing: 'linear',
                step: function () {
                    $('#counter-company').text(Math.ceil(this.companyNumberValue));
                }
            });
        }
    });
    
    $("#counter-staff").viewportChecker({
        callbackFunction: function () {
            let counterStaff = $('#counter-staff').text();
            $({ staffNumberValue: counterStaff }).animate({ staffNumberValue: 40 }, {
                duration: 3000,
                easing: 'linear',
                step: function () {
                    $('#counter-staff').text(Math.ceil(this.staffNumberValue));
                }
            });
        }
    });
    
    $("#counter-project").viewportChecker({
        callbackFunction: function () {
            let counterProject = $('#counter-project').text();
            $({ projectNumberValue: counterProject }).animate({ projectNumberValue: 150 }, {
                duration: 3000,
                easing: 'linear',
                step: function () {
                    $('#counter-project').text(Math.ceil(this.projectNumberValue));
                }
            });
        }
    });
});




let fileSelector = document.querySelectorAll('.download-file input');
let fileSelectorNames = document.querySelector('.download-file__names');
let fileSelectorReset = document.querySelector('.download-file__del');
let fileSelectorHint = document.querySelector('.download-file__names small');
let fileList;

fileSelector.forEach(item => {
    item.addEventListener('change', (event) => {
        fileList = event.target.files;
        fileSelectorReset.style.display = 'block';
        for (let file of fileList) {
            fileSelectorHint.style.display = 'none';
            let fileName = document.createElement('span');
            fileName.innerText = file.name;
            fileSelectorNames.append(fileName);
        }
    });
});
fileSelectorReset.addEventListener('click', function() {
    if (fileList) {
        let fileName = document.querySelectorAll('.download-file__names span');
        fileName.forEach(element => {
            element.remove();
        });
        fileSelectorReset.style.display = 'none';
        fileSelector[0].value = "";
        fileSelectorHint.style.display = 'block';
    }
})



let ctaFileSelector = document.querySelectorAll('.popup-cta-download-file input');
let ctaFileSelectorNames = document.querySelector('.popup-cta-download-file__names');
let ctaFileSelectorReset = document.querySelector('.popup-cta-download-file__del');
let ctaFileSelectorHint = document.querySelector('.popup-cta-download-file__names small');
let ctaFileList;

ctaFileSelector.forEach(item => {
    item.addEventListener('change', (event) => {
        ctaFileList = event.target.files;
        ctaFileSelectorReset.style.display = 'block';
        for (let file of ctaFileList) {
            ctaFileSelectorHint.style.display = 'none';
            let ctaFileName = document.createElement('span');
            ctaFileName.innerText = file.name;
            ctaFileSelectorNames.append(ctaFileName);
        }
    });
});
ctaFileSelectorReset.addEventListener('click', function() {
    if (ctaFileList) {
        let ctaFileName = document.querySelectorAll('.popup-cta-download-file__names span');
        ctaFileName.forEach(element => {
            element.remove();
        });
        ctaFileSelectorReset.style.display = 'none';
        ctaFileSelector[0].value = "";
        ctaFileSelectorHint.style.display = 'block';
    }
})

$('.form-more__info-btn').on('click', function() {
    $(this).closest('.popup-cta__form-more').find('.form-more__content').css('display','block');
    $(this).closest('.popup-cta__form-more').find('.form-more__info-btn').css('display','none');
})



$('.call').on('click', function() {
    $('.popup-cta_call').css('display','block');
})


$('.order').on('click', function() {
    $('.popup-cta_order').css('display','block');
})


$('.prepared-content__card-btn').on('click', function() {
    $('.popup-cta_prepared .popup-cta__title').text($(this).closest('.prepared-content__item').find('.prepared-content__card-title').text());
    $('.popup-cta_prepared .popup-cta_prepared-desc').html($(this).closest('.prepared-content__item').find('.prepared-content__card-desc').html());
    $('.popup-cta_prepared .popup-cta_prepared-price-num').text($(this).closest('.prepared-content__item').find('.prepared-content__card-price').text());

    let $imagesLinks = $(this).closest('.prepared-content__item').find('.prepared-content__card-links a');

    for (let i = 0; i < $imagesLinks.length; i++) {
        console.log($imagesLinks[i].href);
        
        let $preparedSlide = '<div class="popup-slider__item swiper-slide"><div class="popup-slider__item-img"><img src='+ $imagesLinks[i].href +', alt="img"></div></div>';
        $('.popup-slider .swiper-wrapper').append($preparedSlide);
    }

    $('.popup-cta_prepared .popup-close').on('click', function() {
        $('.popup-slider__item').remove();
    })
    
    $('.popup-cta_prepared').css('display','block');
})


var popupSlider = new Swiper('.popup-slider', {
    slidesPerView: 'auto',
    spaceBetween: 8,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.popup-slider__controls-next',
        prevEl: '.popup-slider__controls-prev',
    },
    observer: true,
    observeParents: true,
    breakpoints: {
        1600: {
            spaceBetween: 64,
        },
        768: {
            spaceBetween: 40,
        },
    },
});





$('form').submit(function(e) {
    var $form = $(this);
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize()
    }).done(function() {
        console.log('success');
        if ($form.closest('.popup-cta').css('display') == "block") {
            $('.popup-cta').css('display','none');
            $('.popup-ok').css('display','block');
            $('.popup-ok__btn').on('click', function() {
                $('.popup-ok').css('display','none');
            })
        } else {
            $('.popup-ok').css('display','block');
            $('.popup-ok__btn').on('click', function() {
                $('.popup-ok').css('display','none');
            })
        }
    }).fail(function() {
        console.log('fail');
    });
    //отмена действия по умолчанию для кнопки submit
    e.preventDefault(); 
});





