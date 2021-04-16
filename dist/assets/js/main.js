"use strict";

var swiper = new Swiper('.hero-slider', {
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
var swiper = new Swiper('.pageslider', {
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
$('.product-head__filter label').on("click", function () {
  $('.filter-select__title span').text($(this).text());
});
$('.filter-select__title').on('click', function () {
  $(this).next().toggleClass('is-active');
});
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
var swiper = new Swiper('.row-slider', {
  slidesPerView: 'auto',
  spaceBetween: 64,
  navigation: {
    nextEl: '.row-slider__controls-next',
    prevEl: '.row-slider__controls-prev'
  }
});
$('.gallery-more__count').html('&nbsp;' + $('.hero-content__gallery-more').length);