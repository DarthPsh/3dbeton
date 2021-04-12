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
}); // const prodImageContainerWrap = document.querySelectorAll('.production-list__item-inner');
// const prodImageContainer = document.querySelectorAll('.production-list__item-img');
// const prodImage = document.querySelectorAll('.production-list__item-img img');
// for(let i = 0; prodImageContainer.length > 0; i++) {
// 	prodImageContainer[i].addEventListener('mousemove', function(event) {
// 		let xAxis = (prodImageContainer[i].offsetWidth / 2 - event.offsetX) / 10;
// 		let yAxis = (prodImageContainer[i].offsetHeight / 2 - event.offsetY) / 10;
// 		prodImage[i].style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
// 	});
// 	prodImageContainer[i].addEventListener('mouseenter', function(event) {
// 		prodImage[i].style.transition = `none`;
// 	});
// 	prodImageContainer[i].addEventListener('mouseleave', function(event) {
// 		prodImage[i].style.transition = `all .5s ease`;
// 		prodImage[i].style.transform = `rotateY(0deg) rotateX(0deg)`;
// 	});
// }

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