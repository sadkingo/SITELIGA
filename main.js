// change navbar styles on scroll

window.addEventListener('scroll', () => {
	document
		.querySelector('nav')
		.classList.toggle('window-scroll', window.scrollY > 0)
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
	applyTranslations('en') // По умолчанию применяем переводы на английский язык
})

// Применяем переводы при переключении языка
document
	.getElementById('language-toggle')
	.addEventListener('change', function () {
		var language = this.checked ? 'ru' : 'en' // Проверяем состояние переключателя
		applyTranslations(language) // Применяем соответствующие переводы
	})

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
		en: 'We are dedicated to your success and are always ready to help.',
		ru: 'Мы посвящаемся вашему успеху и всегда готовы помочь.',
	},
	'categories.title': {
		en: "What we're doing",
		ru: 'Что мы делаем',
	},
	'paragraph.p': {
		en: "We don't just make websites, we bring customers into the business",
		ru: 'Мы не просто делаем сайты, мы привлекаем клиентов в бизнес.',
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
		en: 'PORTFOLIO',
		ru: 'ПОРТФОЛИО',
	},
	check_it_out: {
		en: 'VISIT SITE',
		ru: 'ПОСЕТИТЬ САЙТ',
	},
	funpay: {
		en: 'Game store',
		ru: 'Магазин игровых товаров',
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
		ru: 'Остальное сделаем мы!',
	},

	// Добавьте другие переводы здесь
}
