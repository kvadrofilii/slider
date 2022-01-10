'use strict'

// Получаем объекты 
const slider = document.querySelector('.slider'),
	sliderWrapper = slider.querySelector('.slider__wrapper'),
	sliderList = slider.querySelector('.slider__list'),
	sliderItems = slider.querySelectorAll('.slider__item'),
	sliderPrev = slider.querySelector('.slider__prev'),
	sliderNext = slider.querySelector('.slider__next'),
	// Получаем ширину слайдера
	slideWidth = sliderItems[0].offsetWidth;

// Номер активного слайда
let slideIndex = 0;

// Ловим нажатие на кнопку назад
sliderPrev.addEventListener('click', () => {
	slideIndex--;
});

// Ловим нажатие на кнопку вперёд
sliderNext.addEventListener('click', () => {
	slideIndex++;
});

//console.log(slideIndex);

