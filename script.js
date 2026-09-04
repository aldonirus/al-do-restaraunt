// Переключение меню-бургера
function toggleNav() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Открытие / закрытие окна языков
function toggleModal() {
    const modal = document.getElementById('langModal');
    modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
}

// База переводов на 8 языков
const translations = {
    ru: {
        nav_menu: "Еда и Напитки", nav_booking: "Забронировать", nav_contacts: "Контакты", nav_lang: "Язык / Language",
        hero_subtitle: "Атмосфера средиземноморской террасы", hero_btn: "Забронировать столик",
        title_booking: "Бронирование", lbl_name: "Ваше Имя", lbl_date: "Дата и время", lbl_guests: "Гостей", lbl_city: "Город",
        opt_astana: "г. Астана", opt_almaty: "г. Алматы", btn_wa_submit: "Забронировать в WhatsApp",
        title_menu: "Еда и Напитки", cat_starters: "Закуски & Салаты", cat_mains: "Горячее",
        dish1_title: "Греческий Салат", dish1_desc: "Сыр Фета, томаты, оливки Каламата, базилик.",
        dish2_title: "Карпаччо Осьминог", dish2_desc: "Тонкие ломтики осьминога с каперсами и лимоном.",
        dish3_title: "Паэлья с морепродуктами", dish3_desc: "Рис с шафраном, гигантские креветки и мидии.",
        title_contacts: "Контакты", city_astana: "г. Астана", addr_astana: "ул. Достык, 16", city_almaty: "г. Алматы", addr_almaty: "пр. Достык, 118",
        bnav_home: "Главная", bnav_menu: "Меню", bnav_book: "Бронь", bnav_loc: "Локации"
    },
    kk: {
        nav_menu: "Тағамдар мен Сусындар", nav_booking: "Үстел брондау", nav_contacts: "Байланыс", nav_lang: "Тіл / Language",
        hero_subtitle: "Жерорта теңізі террасасының атмосферасы", hero_btn: "Үстел брондау",
        title_booking: "Брондау", lbl_name: "Сіздің атыңыз", lbl_date: "Күн мен уақыт", lbl_guests: "Қонақтар саны", lbl_city: "Қала",
        opt_astana: "Астана қ.", opt_almaty: "Алматы қ.", btn_wa_submit: "WhatsApp арқылы брондау",
        title_menu: "Тағамдар мен Сусындар", cat_starters: "Жаңағандар мен Салаттар", cat_mains: "Ыстық тағамдар",
        dish1_title: "Грек салаты", dish1_desc: "Фета ірімшігі, қызанақ, Каламата зәйтүндері, базилик.",
        dish2_title: "Сегізаяқ Карпаччосы", dish2_desc: "Каперс пен лимон қосылған сегізаяқтың жұқа тілімдері.",
        dish3_title: "Теңіз өнімдері қосылған паэлья", dish3_desc: "Шафран қосылған күріш, алып шаяндар мен мидиялар.",
        title_contacts: "Байланыс", city_astana: "Астана қ.", addr_astana: "Достық к-сі, 16", city_almaty: "Алматы қ.", addr_almaty: "Достық даңғылы, 118",
        bnav_home: "Басты", bnav_menu: "Мәзір", bnav_book: "Бронь", bnav_loc: "Орындар"
    },
    en: {
        nav_menu: "Food & Drinks", nav_booking: "Book a Table", nav_contacts: "Contacts", nav_lang: "Language",
        hero_subtitle: "Mediterranean Terrace Atmosphere", hero_btn: "Book a Table",
        title_booking: "Reservation", lbl_name: "Your Name", lbl_date: "Date & Time", lbl_guests: "Guests", lbl_city: "City",
        opt_astana: "Astana", opt_almaty: "Almaty", btn_wa_submit: "Book via WhatsApp",
        title_menu: "Food & Drinks", cat_starters: "Starters & Salads", cat_mains: "Main Dishes",
        dish1_title: "Greek Salad", dish1_desc: "Feta cheese, tomatoes, Kalamata olives, basil.",
        dish2_title: "Octopus Carpaccio", dish2_desc: "Thinly sliced octopus with capers and lemon.",
        dish3_title: "Seafood Paella", dish3_desc: "Saffron rice, jumbo prawns, and mussels.",
        title_contacts: "Contacts", city_astana: "Astana", addr_astana: "Dostyk ave, 16", city_almaty: "Almaty", addr_almaty: "Dostyk ave, 118",
        bnav_home: "Home", bnav_menu: "Menu", bnav_book: "Book", bnav_loc: "Locations"
    },
    es: {
        nav_menu: "Comida y Bebidas", nav_booking: "Reservar", nav_contacts: "Contactos", nav_lang: "Idioma",
        hero_subtitle: "Atmósfera de terraza mediterránea", hero_btn: "Reservar mesa",
        title_booking: "Reserva", lbl_name: "Tu Nombre", lbl_date: "Fecha y hora", lbl_guests: "Invitados", lbl_city: "Ciudad",
        opt_astana: "Astana", opt_almaty: "Almaty", btn_wa_submit: "Reservar por WhatsApp",
        title_menu: "Menú", cat_starters: "Entrantes y Ensaladas", cat_mains: "Platos Principales",
        dish1_title: "Ensalada Griega", dish1_desc: "Queso feta, tomates, aceitunas Kalamata, albahaca.",
        dish2_title: "Carpaccio de Pulpo", dish2_desc: "Láminas finas de pulpo con alcaparras y limón.",
        dish3_title: "Paella de Mariscos", dish3_desc: "Arroz con azafrán, langostinos y mejillones.",
        title_contacts: "Contactos", city_astana: "Astana", addr_astana: "Av. Dostyk, 16", city_almaty: "Almaty", addr_almaty: "Av. Dostyk, 118",
        bnav_home: "Inicio", bnav_menu: "Menú", bnav_book: "Reserva", bnav_loc: "Ubicación"
    },
    fr: {
        nav_menu: "Nourriture & Boissons", nav_booking: "Réserver", nav_contacts: "Contacts", nav_lang: "Langue",
        hero_subtitle: "Ambiance terrasse méditerranéenne", hero_btn: "Réserver une table",
        title_booking: "Réservation", lbl_name: "Votre Nom", lbl_date: "Date & Heure", lbl_guests: "Invités", lbl_city: "Ville",
        opt_astana: "Astana", opt_almaty: "Almaty", btn_wa_submit: "Réserver via WhatsApp",
        title_menu: "Menu", cat_starters: "Entrées & Salades", cat_mains: "Plats Principaux",
        dish1_title: "Salade Grecque", dish1_desc: "Féta, tomates, olives Kalamata, basilic.",
        dish2_title: "Carpaccio de Poulpe", dish2_desc: "Tranches fines de poulpe aux câpres et citron.",
        dish3_title: "Paëlla aux Fruits de Mer", dish3_desc: "Riz au safran, crevettes géantes et moules.",
        title_contacts: "Contacts", city_astana: "Astana", addr_astana: "Avenue Dostyk, 16", city_almaty: "Almaty", addr_almaty: "Avenue Dostyk, 118",
        bnav_home: "Accueil", bnav_menu: "Menu", bnav_book: "Réserve", bnav_loc: "Lieux"
    },
    de: {
        nav_menu: "Essen & Getränke", nav_booking: "Reservieren", nav_contacts: "Kontakte", nav_lang: "Sprache",
        hero_subtitle: "Atmosphäre einer mediterranen Terrasse", hero_btn: "Tisch reservieren",
        title_booking: "Reservierung", lbl_name: "Ihr Name", lbl_date: "Datum & Uhrzeit", lbl_guests: "Gäste", lbl_city: "Stadt",
        opt_astana: "Astana", opt_almaty: "Almaty", btn_wa_submit: "Über WhatsApp buchen",
        title_menu: "Speisekarte", cat_starters: "Vorspeisen & Salate", cat_mains: "Hauptgerichte",
        dish1_title: "Griechischer Salat", dish1_desc: "Feta-Käse, Tomaten, Kalamata-Oliven, Basilikum.",
        dish2_title: "Oktopus-Carpaccio", dish2_desc: "Hauchdünner Oktopus mit Kapern und Zitrone.",
        dish3_title: "Meeresfrüchte-Paella", dish3_desc: "Safranreis, Riesengarnelen und Miesmuscheln.",
        title_contacts: "Kontakte", city_astana: "Astana", addr_astana: "Dostyk Str. 16", city_almaty: "Almaty", addr_almaty: "Dostyk Str. 118",
        bnav_home: "Home", bnav_menu: "Karte", bnav_book: "Buchen", bnav_loc: "Orte"
    },
    it: {
        nav_menu: "Cibo e Bevande", nav_booking: "Prenota", nav_contacts: "Contatti", nav_lang: "Lingua",
        hero_subtitle: "Atmosfera da terrazza mediterranea", hero_btn: "Prenota un tavolo",
        title_booking: "Prenotazione", lbl_name: "Il tuo Nome", lbl_date: "Data e Ora", lbl_guests: "Ospiti", lbl_city: "Città",
        opt_astana: "Astana", opt_almaty: "Almaty", btn_wa_submit: "Prenota su WhatsApp",
        title_menu: "Menu", cat_starters: "Antipasti e Insalate", cat_mains: "Piatti Principali",
        dish1_title: "Insalata Greca", dish1_desc: "Feta, pomodori, olive Kalamata, basilico.",
        dish2_title: "Carpaccio di Polpo", dish2_desc: "Sottili fette di polpo con capperi e limone.",
        dish3_title: "Paella di Mare", dish3_desc: "Riso allo zafferano, gamberoni e cozze.",
        title_contacts: "Contatti", city_astana: "Astana", addr_astana: "Via Dostyk, 16", city_almaty: "Via Dostyk, 118",
        bnav_home: "Home", bnav_menu: "Menu", bnav_book: "Prenota", bnav_loc: "Sedi"
    },
    tr: {
        nav_menu: "Yemek & İçecek", nav_booking: "Rezervasyon", nav_contacts: "İletişim", nav_lang: "Dil",
        hero_subtitle: "Akdeniz terası atmosferi", hero_btn: "Masa Rezerve Et",
        title_booking: "Rezervasyon", lbl_name: "Adınız", lbl_date: "Tarih ve Saat", lbl_guests: "Misafir", lbl_city: "Şehir",
        opt_astana: "Astana", opt_almaty: "Almatı", btn_wa_submit: "WhatsApp ile Rezerve Et",
        title_menu: "Menü", cat_starters: "Atıştırmalıklar & Salatalar", cat_mains: "Ana Yemekler",
        dish1_title: "Yunan Salatası", dish1_desc: "Beyaz peynir, domates, Kalamata zeytini, fesleğen.",
        dish2_title: "Ahtapot Karpaccio", dish2_desc: "Kapari ve limonlu ince dilimlenmiş ahtapot.",
        dish3_title: "Deniz Ürünlü Paella", dish3_desc: "Safranlı pirinç, karides ve midye.",
        title_contacts: "İletişim", city_astana: "Astana", addr_astana: "Dostyk caddesi, 16", city_almaty: "Dostyk caddesi, 118",
        bnav_home: "Anasayfa", bnav_menu: "Menü", bnav_book: "Rezerve", bnav_loc: "Konumlar"
    }
};

// Функция переключения языков
function setLanguage(lang) {
    const dictionary = translations[lang] || translations.ru;
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (dictionary[key]) {
            if (el.tagName === 'INPUT' && el.type === 'placeholder') {
                el.placeholder = dictionary[key];
            } else {
                el.textContent = dictionary[key];
            }
        }
    });
    toggleModal();
}

// Отправка данных формы в WhatsApp
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('wName').value;
    const date = document.getElementById('wDate').value;
    const guests = document.getElementById('wGuests').value;
    const city = document.getElementById('wCity').value;

    const message = `Здравствуйте! Хочу забронировать столик в Al'dO Restaurant.\n\nИмя: ${name}\nГород: ${city}\nДата и время: ${date}\nГостей: ${guests}`;
    window.open(`https://wa.me/77714814209?text=${encodeURIComponent(message)}`, '_blank');
});
