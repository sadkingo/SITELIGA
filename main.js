// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})



// show/hide faq answer 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";

        }
    })
})



// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


// close nav menu 
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

function applyTranslations(language) {
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(element) {
        var key = element.getAttribute('data-i18n');
        if (translations[key] && translations[key][language]) {
            element.textContent = translations[key][language];
        }
    });
}

// Применяем переводы при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    applyTranslations('en'); // По умолчанию применяем переводы на английский язык
});

// Применяем переводы при переключении языка
document.getElementById('language-toggle').addEventListener('change', function() {
    var language = this.checked ? 'ru' : 'en'; // Проверяем состояние переключателя
    applyTranslations(language); // Применяем соответствующие переводы
});

var translations = {
    "header.title": {
        "en": "We are dedicated to your success and are always ready to help.",
        "ru": "Мы посвящаемся вашему успеху и всегда готовы помочь."
    },
    "categories.title": {
        "en": "What we're doing",
        "ru": "Что мы делаем"
    },
    "paragraph.p": {
        "en": "We don't just make websites, we bring customers into the business",
        "ru": "Мы не просто делаем сайты, мы привлекаем клиентов в бизнес."
    },
    "button_get_started": {
        "en": "DISCUSS THE PROJECT",
        "ru": "ОБСУДИТЬ ПРОЕКТ"
    },

    // Добавьте другие переводы здесь
};
