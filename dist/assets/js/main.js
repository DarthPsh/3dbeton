"use strict";

var heroSlider = new Swiper('.hero-slider', {
  pagination: {
    el: '.hero-slider__pagination',
    type: 'fraction',
    renderFraction: function renderFraction(currentClass, totalClass, index, total) {
      return '<span class="' + currentClass + '">' + index + '</span>' + '<span class="slider-control__pagination-separator"></span>' + '<span class="' + totalClass + '">' + total + '</span>';
    }
  },
  navigation: {
    nextEl: '.hero-slider__next',
    prevEl: '.hero-slider__prev'
  }
});
$('.hero-content__desc-btn').on('click', function () {
  $(this).prev('.hero-content__desc-block').toggleClass('is-show');
});
var pageSlider = new Swiper('.pageslider', {
  slidesPerView: 'auto',
  spaceBetween: 55,
  pagination: {
    el: '.pageslider-pagination',
    type: 'fraction',
    renderFraction: function renderFraction(currentClass, totalClass, index, total) {
      return '<span class="' + currentClass + '">' + index + '</span>' + '<span class="slider-control__pagination-separator"></span>' + '<span class="' + totalClass + '">' + total + '</span>';
    }
  },
  navigation: {
    nextEl: '.pageslider-next',
    prevEl: '.pageslider-prev'
  }
});
var $prodLink = $('.production-list__item-link');
var $prodImageContainer = $('.production-list__item-img');
var $prodImage = $('.production-list__item-img img');
$prodLink.on('mousemove', function (event) {
  var xAxis = (this.offsetWidth / 2 - event.offsetX) / 10;
  var yAxis = (this.offsetHeight / 2 - event.offsetY) / 10;
  $(this).next($prodImageContainer).find($prodImage).css("transform", "rotate(".concat(xAxis, "deg)"));
});
$prodLink.on('mouseenter', function (event) {
  $(this).next($prodImageContainer).css({
    "transition": "opacity .3s ease"
  });
  $(this).next($prodImageContainer).find($prodImage).css({
    "transition": "transform .3s ease"
  });
});
$prodLink.on('mouseleave', function (event) {
  $(this).next($prodImageContainer).css({
    "transition": "opacity .3s ease"
  });
  $(this).next($prodImageContainer).find($prodImage).css({
    "transition": "transform .3s ease",
    "transform": "rotate(0deg)"
  });
});
var $readymadeName = $('.readymade-list__item-name');
var $readymadeImageContainer = $('.readymade-list__item-img');
var $readymadeImage = $('.readymade-list__item-img img');
$readymadeName.on('mousemove', function (event) {
  var xAxis = (this.offsetWidth / 2 - event.offsetX) / 10;
  var yAxis = (this.offsetHeight / 2 - event.offsetY) / 10;
  $(this).next($readymadeImageContainer).find($readymadeImage).css("transform", "rotate(".concat(xAxis, "deg)"));
});
$readymadeName.on('mouseenter', function (event) {
  $(this).next($readymadeImageContainer).css({
    "transition": "opacity .3s ease"
  });
  $(this).next($readymadeImageContainer).find($readymadeImage).css({
    "transition": "transform .3s ease"
  });
});
$readymadeName.on('mouseleave', function (event) {
  $(this).next($readymadeImageContainer).css({
    "transition": "opacity .3s ease"
  });
  $(this).next($readymadeImageContainer).find($readymadeImage).css({
    "transition": "transform .3s ease",
    "transform": "rotate(0deg)"
  });
});
$('.product-head__filter label').on("click", function () {
  $('.filter-select__title span').text($(this).text());
});
$('.filter-select__title').on('click', function () {
  $(this).next().toggleClass('is-active');
}); // клики вне элементов

$(document).mouseup(function (e) {
  // событие клика по веб-документу
  if (!$('.product-head__filter-select').is(e.target) // если клик был не по нашему блоку
  && $('.product-head__filter-select').has(e.target).length === 0) {
    // и не по его дочерним элементам
    $('.product-head__filter-select ul').removeClass('is-active');
  }
});
$('.row-slider__wrap').each(function () {
  var rowSliderCount = $(this).find('.row-slider__item').length;
  $(this).find('.row-slider__count').text(rowSliderCount);
});
var rowSlider = new Swiper('.row-slider', {
  slidesPerView: 'auto',
  spaceBetween: 64,
  navigation: {
    nextEl: '.row-slider__controls-next',
    prevEl: '.row-slider__controls-prev'
  }
});
$('.gallery-more__count').html('&nbsp;' + $('.hero-content__gallery-more').length);
var processSliderText = new Swiper('.process-info', {
  spaceBetween: 10,
  slidesPerView: 1,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  allowTouchMove: false
});
var processSliderImg = new Swiper('.process-img', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.process-nav__arrow_next',
    prevEl: '.process-nav__arrow_prev'
  },
  thumbs: {
    swiper: processSliderText
  },
  pagination: {
    el: '.process-nav__pagination',
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  }
});
var simpleSlider = new Swiper('.simple-slider', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  navigation: {
    nextEl: '.simple-slider__control_next',
    prevEl: '.simple-slider__control_prev'
  },
  breakpoints: {
    1600: {
      spaceBetween: 64
    }
  }
}); // $('#menu_bottom').height();

var montageGridItemInfo = document.querySelectorAll('.montage-grid__item-info');
montageGridItemInfo[3].style.minHeight = montageGridItemInfo[2].clientHeight + 'px';