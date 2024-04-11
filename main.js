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
	var ideaImage = document.querySelector('.idea_image');
	var deadImage = document.querySelector('.deadline_image');
	var launchImage = document.querySelector('.launch_image');
	var piggyImage = document.querySelector('.piggy_image');

	var budgetArticle = document.querySelector('.budget_article');
	var deadArticle = document.querySelector('.deadline_article');
	var launchArticle = document.querySelector('.launch_article');
	var piggyArticle = document.querySelector('.piggy_article');

	function fadeInOnScrollImage(element) {
			var scrollPosition = window.scrollY || window.pageYOffset;
			var windowHeight = window.innerHeight;
			var imagePosition = element.getBoundingClientRect().top;

			if (imagePosition < windowHeight / 2) {
					element.style.opacity = 1;
			}
	}

	function fadeInOnScrollArticle(element) {
			var scrollPosition = window.scrollY || window.pageYOffset;
			var windowHeight = window.innerHeight;
			var articlePosition = element.getBoundingClientRect().top;

			if (articlePosition < windowHeight / 2) {
					element.style.opacity = 1;
			}
	}

	function fadeInElementsOnScroll() {
			fadeInOnScrollImage(ideaImage);
			fadeInOnScrollArticle(budgetArticle);

			setTimeout(function () {
					fadeInOnScrollImage(deadImage);
					fadeInOnScrollArticle(deadArticle);
			}, 300);

			setTimeout(function () {
					fadeInOnScrollImage(launchImage);
					fadeInOnScrollArticle(launchArticle);
			}, 600);

			setTimeout(function () {
					fadeInOnScrollImage(piggyImage);
					fadeInOnScrollArticle(piggyArticle);
			}, 900);
	}

	window.addEventListener('scroll', fadeInElementsOnScroll);
});



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
		en: 'SITELIGA: Website development in the Czech Republic - WEB-Development',
		ru: 'SITELIGA: Создание сайтов в Чехии - WEB-Разработка',
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
	first_heading: {
		en: 'Do you want your site to be on this list as well??',
		ru: 'Хочешь, чтобы твой сайт также был в этом списке?'
	},
	second_word: {
		en: 'Click!',
		ru: 'Нажимай!'
	},
	portfolio2_desc: {
		en: 'We have created over 20 projects of high quality within 6 months. We have avoided showing you the entire portfolio by selecting only the most interesting projects on various topics.',
		ru: 'За 6 месяцев мы создали более 20 качественных проектов. Мы не стали показывать вам все портфолио, выбрав только самые интересные проекты по различным тематикам.'
	},
	contacts_heading: {
		en: 'Contacts',
		ru: 'Контакты'
	},
	contact_us: {
		en: 'Contact us',
		ru: 'Свяжитесь с нами'
	},
	vacancies: {
		en: 'Vacancies',
		ru: 'Вакансии'
	},
	site_creation: {
		en: 'Creating sites in the Czech Republic',
		ru: 'Создание сайтов в Чехии'
	},
	paragraph_n1: {
    en: "Website creation is a complex process that involves the participation of various IT specialists. Today, there is hardly any company that has not brought its business online. The development and launch of a website are carried out in several stages. Only thorough preparation allows implementing a project that will bring results to the business. Therefore, choosing a contractor should be approached responsibly.",
    ru: "Создание сайтов — это сложный процесс, включающий участие различных IT-специалистов. Сегодня практически невозможно найти компанию, которая бы не перенесла свой бизнес в онлайн. Разработка и запуск сайта проводятся в несколько этапов. Только тщательная подготовка позволяет реализовать проект, который принесет бизнесу результат. Поэтому выбор подрядчика следует подходить ответственно."
},
paragraph_n2: {
	en: "Our web studio in Prague, SITELIGA, develops landing pages, e-commerce platforms, turnkey corporate resources for various business niches, and of any level of complexity.",
	ru: "Наша веб-студия в Праге SITELIGA разрабатывает лендинги, площадки электронной коммерции, корпоративные ресурсы под ключ для различных ниш бизнеса и любого уровня сложности."
},
heading_n2: {
	en: "Types of Websites",
	ru: "Виды сайтов"
},
li_n1: {
	en: "Business card - a website suitable for small business representatives who want to introduce potential clients to their company. Typically, such a resource contains 3-5 pages and provides a general overview of services and products.",
	ru: "Визитка — сайт подходит для представителей малого бизнеса, которые хотят познакомить потенциальных клиентов со своей компанией. Как правило, такой ресурс содержит 3-5 страниц и дает общее представление об услугах и товарах."
},
li_n2: {
	en: "Corporate - a multi-page website that provides detailed information about the business's products/services, while also having advanced functionality and capabilities. It can also be intended for internal use by employees.",
	ru: "Корпоративный — многостраничный сайт, который детально рассказывает о товарах/услугах бизнеса, при этом имеет расширенный функционал и возможности. Также может предназначаться для внутреннего использования сотрудниками."
},
li_n3: {
	en: "Online store - a trading platform that allows offering goods or services to a larger number of customers. Payment instruments can be connected, and the possibility of creating personal accounts and other useful functions is provided.",
	ru: "Интернет-магазин — торговая площадка, позволяющая предлагать товар или услугу большему числу заказчиков. Могут подключаться платежные инструменты, предусматривается возможность создания личных кабинетов и другие полезные функции."
},
li_n4: {
	en: "Landing page - a single-page website created for advertising purposes. It allows increasing conversion through a call to action to perform a specific action necessary for the business.",
	ru: "Лендинг — одностраничный сайт, созданный в рекламных целях. Он позволяет увеличить конверсию через призыв сделать какое-то конкретное действие, необходимое бизнесу."
},
li_n5: {
	en: "Online services - platforms that provide services (registration, ticket purchase, online booking, and so on).",
	ru: "Онлайн-сервисы — площадки, предоставляющие услуги (регистрация, покупка билетов, онлайн запись и так далее)."
},
paragraph_n3: {
	en: "If you are interested in website development in the Czech Republic, contact our IT company. We will help solve IT tasks of any complexity.",
	ru: "Если вас интересует разработка сайтов в Чехии, обратитесь в нашу IT-компанию. Мы поможем решить IT-задачи любой сложности."
},
heading_n3: {
	en: "Turnkey Website Development",
	ru: "Создание сайта под ключ"
},
paragraph_n4: {
	en: "Turnkey website development is a service covering the entire cycle of website development, starting from market research and resource design to project launch and subsequent management, advertising setup, SEO, etc. Promotion is not always included in the price of the order.",
	ru: "Создание сайтов под ключ — это услуга по полному циклу разработки сайта, начиная от исследования рынка и проектирования ресурса до запуска проекта и его последующего ведения, настройки рекламы, SEO и т.д. При этом продвижение не всегда входит в цену заказа."
},
paragraph_n5: {
	en: "Website development includes the following actions:",
	ru: "Разработка веб-сайта включает в себя выполнение следующих действий:"
},
li_n6: {
	en: "Market analysis and competitor solutions, studying the client's business and researching the target audience that will use the resource;",
	ru: "Анализ рынка и решений конкурентов, изучение бизнеса клиента и исследование целевой аудитории, которая будет пользоваться ресурсом;"
},
li_n7: {
	en: "Planning and detailed elaboration of the project structure based on the received data;",
	ru: "Планирование и детальная проработка структуры проекта на основе полученных данных;"
},
li_n8: {
	en: "Creating a project prototype, discussing and approving it;",
	ru: "Создание прототипа проекта, его обсуждение и утверждение;"
},
li_n9: {
	en: "Design drawing;",
	ru: "Отрисовка дизайна;"
},
li_n10: {
	en: "Layout and programming;",
	ru: "Верстка и программирование;"
},
li_n11: {
	en: "Testing;",
	ru: "Тестирование;"
},
li_n12: {
	en: "Optimization and content filling;",
	ru: "Оптимизация и наполнение контентом;"
},
li_n13: {
	en: "Final settings and delivery.",
	ru: "Финишные настройки и сдача."
},
paragraph_n6: {
	en: "These are the main stages that our company carries out when creating a website. However, if desired, the client can order advertising setup, promotion, and so on. Also, upon project completion, we train the client's employees to use the interface and administer the website.",
	ru: "Это основные этапы, которые выполняет наша компания при создании сайта. Но при желании клиент может заказать настройку рекламы, продвижение и так далее. Также при сдаче проекта мы обучаем сотрудников клиента пользоваться интерфейсом и выполнять администрирование сайта."
},
heading_n4: {
	en: "Factors Influencing Website Creation Cost",
	ru: "Что влияет на стоимость создания сайта"
},
paragraph_n7: {
	en: "Most often, before ordering a website, clients are interested in how much this service will cost. You can find out the price after talking to a manager. The project budget can change due to a variety of factors:",
	ru: "Чаще всего перед заказом создания сайта клиентов интересует, сколько будет стоить эта услуга. Узнать цену можно после беседы с менеджером. Бюджет проекта способен изменяться из-за множества факторов:"
},
li_n14: {
	en: "The type of website that interests the client;",
	ru: "Тип сайта, который интересует заказчика;"
},
li_n15: {
	en: "The estimated number of pages;",
	ru: "Предположительное количество страниц;"
},
li_n16: {
	en: "Desired set of features;",
	ru: "Желаемый набор функций;"
},
li_n17: {
	en: "Time for project development;",
	ru: "Время для проработки проекта;"
},
li_n18: {
	en: "Number and qualification of specialists involved in development;",
	ru: "Количество и квалификация специалистов, задействованных при разработке."
},
paragraph_n8: {
	en: "On average, website development takes 1-4 months. Depending on the project goals, we apply both template and custom solutions. For example, the design may be standard, while the functionality is specially developed for this website.",
	ru: "В среднем создание сайта требует 1—4 месяца. В зависимости от целей проекта, мы применяем как шаблонные, так и кастомные решения. Например, дизайн может быть стандартным, а функционал разрабатывается специально для этого веб-ресурса."
},
heading_n5: {
	en: "Why Entrust Website Development to SITELIGA Team",
	ru: "Почему создание сайта лучше доверить команде SITELIGA"
},
paragraph_n9: {
	en: "Our IT company has extensive experience in creating and promoting web resources of various complexities. We take into account the client's requirements and offer optimal solutions. Our projects are effective and enable businesses to achieve their goals. We have experienced specialists who can handle even the most complex projects. Your web resource will become a powerful foundation for the promotion and development of your company.",
	ru: "Наша ИТ-компания имеет обширный опыт в создании и продвижении веб-ресурсов различной сложности. Мы учитываем требования клиента и предлагаем оптимальные решения. Наши проекты эффективны и позволяют бизнесу достигать поставленных целей. У нас работают опытные специалисты, которые могут справиться даже с самыми сложными проектами. Ваш веб-ресурс станет мощным фундаментом для продвижения и развития вашей компании."
},

























	// Добавьте другие переводы здесь
}

