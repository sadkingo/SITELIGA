// change navbar styles on scroll

let prevScrollpos = window.pageYOffset
let isScrollingUp = false
let nav = document.querySelector('nav')

// Показываем навигационное меню при загрузке страницы
nav.classList.add('nav-show')

window.addEventListener('scroll', () => {
	let currentScrollPos = window.pageYOffset

	if (prevScrollpos > currentScrollPos) {
		isScrollingUp = true // Устанавливаем флаг прокрутки вверх
	} else {
		isScrollingUp = false // Сбрасываем флаг, если прокрутка вниз
	}

	// Добавляем класс для анимации появления при прокрутке вверх после прокрутки вниз
	if (isScrollingUp) {
		nav.classList.add('nav-show')
	} else {
		nav.classList.remove('nav-show')
	}

	prevScrollpos = currentScrollPos
})

// show/hide faq answer

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
	faq.addEventListener('click', () => {
		faq.classList.toggle('open')

		// change icon
		const icon = faq.querySelector('.faq__icon i')
		if (icon.className === 'uil uil-plus') {
			icon.className = 'uil uil-minus'
		} else {
			icon.className = 'uil uil-plus'
		}
	})
})

// Получаем ссылки на элементы
// Получаем ссылки на элементы
var modal = document.getElementById('myModal')
var openModal2 = document.getElementById('openModal2')
var btns = document.querySelectorAll('.btn')
var span = document.querySelector('.close')

// При клике на каждую кнопку открываем модальное окно
btns.forEach(function (btn) {
	btn.addEventListener('click', function (event) {
		event.preventDefault() // предотвращаем действие по умолчанию
		modal.style.display = 'block'
		openModal2.style.display = 'block'
	})
})

// При клике на закрывающий элемент закрываем модальное окно
span.addEventListener('click', function () {
	modal.style.display = 'none'
	openModal2.style.display = 'none'
})

// При клике вне модального окна закрываем его
window.addEventListener('click', function (event) {
	if (event.target == modal | openModal2) {
		modal.style.display = 'none'
		openModal2.style.display = 'none'
	}
})

// show/hide nav menu
const menu = document.querySelector('.nav__menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click', () => {
	menu.style.display = 'flex'
	closeBtn.style.display = 'inline-block'
	menuBtn.style.display = 'none'
})

// close nav menu
const closeNav = () => {
	menu.style.display = 'none'
	closeBtn.style.display = 'none'
	menuBtn.style.display = 'inline-block'
}

closeBtn.addEventListener('click', closeNav)

function applyTranslations(language) {
	var elements = document.querySelectorAll('[data-i18n]')
	elements.forEach(function (element) {
		var key = element.getAttribute('data-i18n')
		if (translations[key] && translations[key][language]) {
			element.textContent = translations[key][language]
		}
	})
}

// Применяем переводы при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
	// Проверяем, есть ли сохраненный выбранный язык в localStorage
	var selectedLanguage = localStorage.getItem('selectedLanguage');

	// Если язык был сохранен, применяем его
	if (selectedLanguage) {
			applyTranslations(selectedLanguage);
	} else {
			// В противном случае применяем переводы на английский язык по умолчанию
			applyTranslations('en');
	}
});

// Применяем переводы при переключении языка
document.getElementById('language-toggle').addEventListener('change', function () {
	var language = this.checked ? 'ru' : 'en'; // Проверяем состояние переключателя
	applyTranslations(language); // Применяем соответствующие переводы

	// Сохраняем выбранный язык в localStorage
	localStorage.setItem('selectedLanguage', language);
});


const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', e => {
	cursor.setAttribute(
		'style',
		'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;'
	)
})

document.addEventListener('click', () => {
	cursor.classList.add('expand')

	setTimeout(() => {
		cursor.classList.remove('expand')
	}, 500)
})

window.onscroll = function () {
	scrollFunction()
}

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById('scrollToTopBtn').style.display = 'block'
	} else {
		document.getElementById('scrollToTopBtn').style.display = 'none'
	}
}

// Прокручиваем страницу к началу плавно
function scrollToTop() {
	const scrollToTopBtn = document.getElementById('scrollToTopBtn')
	const scrollToTopBtn2 = document.getElementById('scrollToTopBtn2')
	const scrollStep = -window.scrollY / (500 / 15)
	const scrollInterval = setInterval(function () {
		if (window.scrollY !== 0) {
			window.scrollBy(0, scrollStep)
		} else {
			clearInterval(scrollInterval)
		}
	}, 15)
}
document.addEventListener('DOMContentLoaded', function () {
	var ideaImage = document.querySelector('.idea_image')
	var deadImage = document.querySelector('.deadline_image')
	var launchImage = document.querySelector('.launch_image')
	var piggyImage = document.querySelector('.piggy_image')

	function fadeInOnScroll() {
		var scrollPosition = window.scrollY || window.pageYOffset
		var windowHeight = window.innerHeight
		var imagePosition = ideaImage.getBoundingClientRect().top
		var imagePosition = deadImage.getBoundingClientRect().top
		var imagePosition = launchImage.getBoundingClientRect().top
		var imagePosition = piggyImage.getBoundingClientRect().top

		if (imagePosition < windowHeight / 2) {
			ideaImage.style.opacity = 1
			deadImage.style.opacity = 1
			launchImage.style.opacity = 1
			piggyImage.style.opacity = 1
		}
	}

	window.addEventListener('scroll', fadeInOnScroll)
})
document.addEventListener('DOMContentLoaded', function () {
	var budgetArticle = document.querySelector('.budget_article')
	var deadArticle = document.querySelector('.deadline_article')
	var launchArticle = document.querySelector('.launch_article')
	var piggyArticle = document.querySelector('.piggy_article')

	function fadeInOnScroll() {
		var scrollPosition = window.scrollY || window.pageYOffset
		var windowHeight = window.innerHeight
		var articlePosition = budgetArticle.getBoundingClientRect().top
		var articlePosition = deadArticle.getBoundingClientRect().top
		var articlePosition = launchArticle.getBoundingClientRect().top
		var articlePosition = piggyArticle.getBoundingClientRect().top

		if (articlePosition < windowHeight / 2) {
			budgetArticle.style.opacity = 1
			deadArticle.style.opacity = 1
			launchArticle.style.opacity = 1
			piggyArticle.style.opacity = 1
		}
	}

	window.addEventListener('scroll', fadeInOnScroll)
})



var translations = {
	home: {
		en: 'Home',
		ru: 'Главная',
	},
	about: {
		en: 'About',
		ru: 'О Нас',
	},
	contact: {
		en: 'Contact',
		ru: 'Связь',
	},
	'header.title': {
		en: "We're here to help you succeed.",
		ru: 'Мы здесь, чтобы помочь вам добиться успеха',
	},
	'categories.title1': {
		en: 'Our approach',
		ru: 'Наш подход',
	},
	'paragraph.p': {
		en: 'Professional web development and design studio',
		ru: 'Профессиональная студия веб разработки и дизайна',
	},
	button_get_started: {
		en: 'DISCUSS THE PROJECT',
		ru: 'ОБСУДИТЬ ПРОЕКТ',
	},
	achievements: {
		en: 'Website development in the Czech Republic',
		ru: 'Создание сайтов в Чехии',
	},
	paragraph_desc: {
		en: 'Website creation is a complex process, which involves a lot of IT-specialists of different profiles. Today there is practically no company that has not "brought" its business online. The development and launch of a web resource is carried out in several stages. Only thorough preparation allows you to realize a project that will bring business results. Therefore, the choice of contractor should be treated responsibly. Our web studio in Prague SITELIGA develops turnkey websites, e-commerce sites, corporate resources for different business niches and any level of complexity.',
		ru: "Создание веб-сайтов - это комплексный процесс, в который вовлечено множество IT-специалистов различных профилей. Сегодня практически нет компании, которая бы не 'вывела' свой бизнес в онлайн. Разработка и запуск веб-ресурса осуществляются на нескольких этапах. Только тщательная подготовка позволяет реализовать проект, который принесет реальные бизнес-результаты.\n\nПоэтому выбор подрядчика должен быть осознанным. Наша веб-студия в Праге, SITELIGA, разрабатывает под ключ лендинги, платформы электронной коммерции, корпоративные ресурсы для различных бизнес-ниш и любого уровня сложности.",
	},
	services: {
		en: 'Services',
		ru: 'Услуг',
	},
	customers: {
		en: 'Customers',
		ru: 'Клиентов',
	},
	awards: {
		en: 'Awards',
		ru: 'Наград',
	},
	article_desc: {
		en: 'We are a software development company. We develop adaptive front-end applications and web pages. Also, what sets us apart from our competitors is that we bring clients into business and tell them about the latest trends. Here are our values.',
		ru: 'Мы — компания по разработке программного обеспечения. Мы разрабатываем адаптивные интерфейсные приложения и веб-страницы. Кроме того, что отличает нас от наших конкурентов, так это то, что мы привлекаем клиентов в бизнес и рассказываем им о последних тенденциях. Вот наши ценности.',
	},
	contact_us: {
		en: 'CONTACT US',
		ru: 'НАПИСАТЬ НАМ',
	},
	portfolio: {
		en: 'Portfolio',
		ru: 'Портфолио',
	},
	check_it_out: {
		en: 'VISIT SITE',
		ru: 'ПОСЕТИТЬ САЙТ',
	},
	mebelvdom: {
		en: 'Furniture store',
		ru: 'Магазин мебели',
	},
	sevencars: {
		en: 'Luxury car rental service',
		ru: 'Прокат автомобилей класса люкс',
	},
	liquorshop: {
		en: 'Liquor Shop',
		ru: 'Магазин алкогольной продукции',
	},
	leavecontacts: {
		en: 'Drop us a request',
		ru: 'Оставьте заявку,',
	},
	rest: {
		en: "And we'll do the rest!",
		ru: 'остальное сделаем мы!',
	},
	budget_article: {
		en: 'We find the best solution based on business objectives and within budget',
		ru: 'Мы находим оптимальное решение, исходя из целей бизнеса и в рамках бюджета',
	},
	deadline_article: {
		en: 'We respect the deadlines, budget and level of quality of the project',
		ru: 'Соблюдаем сроки, бюджет и уровень качества проекта',
	},
	placeholder_title: {
		en: 'Discuss the project',
		ru: 'Обсудить проект',
	},
	file_instruction: {
		en: 'Do you have terms reference?',
		ru: 'Есть техническое задание?',
	},
	file_upload: {
		en: 'Attach file',
		ru: 'Прикрепить файл',
	},
	send_button: {
		en: 'SEND',
		ru: 'Отправить',
	},
	go_top: {
		en: 'Go top',
		ru: 'Вверх',
	},
	button_get_started2: {
		en: 'SUBMIT YOUR APPLICATION',
		ru: 'ОСТАВИТЬ ЗАЯВКУ',
	},
	title_browser: {
		en: 'ATLANTSITE: Website development in the Czech Republic - WEB-Development',
		ru: 'ATLANTSITE: Создание сайтов в Чехии - WEB-Разработка',
	},
	location: {
		en: 'Prague',
		ru: 'Прага',
	},
	launch_article: {
		en: 'We take responsibility and give results',
		ru: 'Берем ответственность и даём результат'
	},
	piggy_article: {
		en: 'We dont just "make sites", we bring customers into the business.',
		ru: 'Мы не просто «делаем сайты», а приводим клиентов в бизнес'
	},
	send_button: {
		en: 'SEND',
		ru: 'ОТПРАВИТЬ'
	},
	// Добавьте другие переводы здесь
}

