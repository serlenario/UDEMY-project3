$(document).ready(function () {
	$('.carousel__slider').slick({
		speed: 1200,
		adaptiveHeight: true,
		prevArrow:
			'<button type="button" class="slick-prev"><img src="icons/left.png" alt="" /></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="icons/right.png" alt="" /></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: true,
				},
			},
		],
	});

	$('ul.catalog__tabs').on(
		'click',
		'li:not(.catalog__tab_active)',
		function () {
			$(this)
				.addClass('catalog__tab_active')
				.siblings()
				.removeClass('catalog__tab_active')
				.closest('div.container')
				.find('div.catalog__content')
				.removeClass('catalog__content_active')
				.eq($(this).index())
				.addClass('catalog__content_active');
		}
	);

	$('ul.slick-dots').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active')
			.siblings()
			.removeClass('active')
			.closest('div.tabs')
			.find('div.tabs__content')
			.removeClass('active')
			.eq($(this).index())
			.addClass('active');
	});

	// function toggleSlide(item) {
	// 	$(item).each(function (i) {
	// 		$(this).on('click', function (e) {
	// 			e.preventDefault();
	// 			$('.catalog-item__content')
	// 				.eq(i)
	// 				.toggleClass('catalog-item__content_active');
	// 			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 		});
	// 	});
	// }

	// toggleSlide('.catalog-item__link');
	// toggleSlide('.catalog-item__back');
});

const links = document.querySelectorAll('.catalog-item__link');
const content = document.querySelectorAll('.catalog-item__content');
const list = document.querySelectorAll('.catalog-item__list');
const back = document.querySelectorAll('.catalog-item__back');

links.forEach((link, index) => {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		content[index].classList.toggle('catalog-item__content_active');
		list[index].classList.toggle('catalog-item__list_active');
	});
});

back.forEach((back, index) => {
	back.addEventListener('click', function (e) {
		e.preventDefault();
		content[index].classList.toggle('catalog-item__content_active');
		list[index].classList.toggle('catalog-item__list_active');
	});
});

const consultationBtn = document.querySelectorAll(
	'[data-modal="consultation"]'
);
const overlay = document.querySelector('.overlay');
const modalConsultation = document.querySelector('#consultation');
const modalOrder = document.querySelector('#order');
const close = document.querySelectorAll('.modal__close');
const miniBtn = document.querySelectorAll('.catalog .button_mini');
const catalogName = document.querySelectorAll('.catalog-item__subtitle');
const modalDescr = document.querySelector('#order .modal__descr');
const inputs = document.querySelectorAll('input');

const cleanInputs = function () {
	inputs.forEach(item => {
		item.value = '';
	});
};

const modalClose = function () {
	overlay.style.display = 'none';
	modalConsultation.style.display = 'none';
	modalOrder.style.display = 'none';
};

consultationBtn.forEach(item => {
	item.addEventListener('click', function () {
		overlay.style.display = 'block';
		modalConsultation.style.display = 'block';
	});
});

close.forEach(item => {
	item.addEventListener('click', function () {
		modalClose();
		cleanInputs();
	});
});

overlay.addEventListener('click', function (e) {
	if (e.target == overlay) {
		modalClose();
		cleanInputs();
	}
});

miniBtn.forEach((item, index) => {
	item.addEventListener('click', function () {
		overlay.style.display = 'block';
		modalOrder.style.display = 'block';
		modalDescr.textContent = `${catalogName[index].textContent}`;
	});
});

console.log(inputs[0]);
