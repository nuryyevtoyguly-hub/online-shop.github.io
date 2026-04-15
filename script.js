// ==== Инициализация корзины ====
let cart = [];

// ==== Товары для магазина ==== 
const products = [
    {
        id: 1,
        category: 'kids',
        name: 'Резинка для волос',
        description: 'Мягкая и удобная резинка для волос вашего малыша',
        price: 1.8,
        image: 'img/caga haryt/1 (3).png',
        alt: 'Резинка для волос'
    },
    {
        id: 2,
        category: 'kids',
        name: 'Заколка для волос',
        description: 'Мягкая и удобная заколка для волос вашего малыша',
        price: 1.8,
        image: 'img/caga haryt/1 (4).png',
        alt: 'Заколка для волос'
    },
    {
        id: 3,
        category: 'kids',
        name: 'Детский товар 3',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt/1 (1).png',
        alt: 'Детский товар 3'
    },
    {
        id: 4,
        category: 'kids',
        name: 'Детский товар 4',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt/1 (2).png',
        alt: 'Детский товар 4'
    },
    {
        id: 5,
        category: 'kids',
        name: 'Детский товар 5',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt/1 (5).png',
        alt: 'Детский товар 5'
    },
    {
        id: 6,
        category: 'kids',
        name: 'Детский товар 6',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt/1 (6).png',
        alt: 'Детский товар 6'
    },
    {
        id: 7,
        category: 'kids',
        name: 'Детский товар 7',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt/1 (7).png',
        alt: 'Детский товар 7'
    },
    {
        id: 8,
        category: 'kids',
        name: 'Детский товар 8',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt/1 (8).png',
        alt: 'Детский товар 8'
    },
    {
        id: 9,
        category: 'kids',
        name: 'Детский товар 9',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt/1 (9).png',
        alt: 'Детский товар 9'
    },
    {
        id: 10,
        category: 'kids',
        name: 'Детский товар 10',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt/1 (10).png',
        alt: 'Детский товар 10'
    },
    {
        id: 11,
        category: 'kids',
        name: 'Детский товар 11',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt/1 (11).png',
        alt: 'Детский товар 11'
    },
    {
        id: 12,
        category: 'kids',
        name: 'Детский товар 12',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt/1 (12).png',
        alt: 'Детский товар 12'
    },
    {
        id: 13,
        category: 'kids',
        name: 'Детский товар 13',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt/1 (13).png',
        alt: 'Детский товар 13'
    },
    {
        id: 14,
        category: 'kids',
        name: 'Детский товар 14',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt/1 (14).png',
        alt: 'Детский товар 14'
    },
    {
        id: 15,
        category: 'kids',
        name: 'Детский товар 15',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt/1 (15).png',
        alt: 'Детский товар 15'
    },
    {
        id: 16,
        category: 'kids',
        name: 'Детский товар 16',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt/1 (16).png',
        alt: 'Детский товар 16'
    },
    {
        id: 17,
        category: 'kids',
        name: 'Детский товар 17',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt/1 (17).png',
        alt: 'Детский товар 17'
    },
    {
        id: 18,
        category: 'kids',
        name: 'Детский товар 18',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt/1 (18).png',
        alt: 'Детский товар 18'
    },
    {
        id: 19,
        category: 'home',
        name: 'Товар для дома 1',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (1).png',
        alt: 'Товар для дома 1'
    },
    {
        id: 20,
        category: 'home',
        name: 'Товар для дома 2',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (2).png',
        alt: 'Товар для дома 2'
    },
    {
        id: 21,
        category: 'home',
        name: 'Товар для дома 3',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (3).png',
        alt: 'Товар для дома 3'
    },
    {
        id: 22,
        category: 'home',
        name: 'Товар для дома 4',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (4).png',
        alt: 'Товар для дома 4'
    },
    {
        id: 23,
        category: 'home',
        name: 'Товар для дома 5',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (5).png',
        alt: 'Товар для дома 5'
    },
    {
        id: 24,
        category: 'home',
        name: 'Товар для дома 6',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (6).png',
        alt: 'Товар для дома 6'
    },
    {
        id: 25,
        category: 'home',
        name: 'Товар для дома 7',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (7).png',
        alt: 'Товар для дома 7'
    },
    {
        id: 26,
        category: 'home',
        name: 'Товар для дома 8',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (8).png',
        alt: 'Товар для дома 8'
    },
    {
        id: 27,
        category: 'home',
        name: 'Товар для дома 9',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (9).png',
        alt: 'Товар для дома 9'
    },
    {
        id: 28,
        category: 'home',
        name: 'Товар для дома 10',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (10).png',
        alt: 'Товар для дома 10'
    },
    {
        id: 29,
        category: 'home',
        name: 'Товар для дома 11',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (11).png',
        alt: 'Товар для дома 11'
    },
    {
        id: 30,
        category: 'home',
        name: 'Товар для дома 12',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (12).png',
        alt: 'Товар для дома 12'
    },
    {
        id: 31,
        category: 'home',
        name: 'Товар для дома 13',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (13).png',
        alt: 'Товар для дома 13'
    },
    {
        id: 32,
        category: 'home',
        name: 'Товар для дома 14',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (14).png',
        alt: 'Товар для дома 14'
    },
    {
        id: 33,
        category: 'home',
        name: 'Товар для дома 15',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (15).png',
        alt: 'Товар для дома 15'
    },
    {
        id: 34,
        category: 'home',
        name: 'Товар для дома 16',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (16).png',
        alt: 'Товар для дома 16'
    },
    {
        id: 35,
        category: 'home',
        name: 'Товар для дома 17',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (17).png',
        alt: 'Товар для дома 17'
    },
    {
        id: 36,
        category: 'home',
        name: 'Товар для дома 18',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (18).png',
        alt: 'Товар для дома 18'
    },
    {
        id: 37,
        category: 'home',
        name: 'Товар для дома 19',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (19).png',
        alt: 'Товар для дома 19'
    },
    {
        id: 38,
        category: 'home',
        name: 'Товар для дома 20',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (20).png',
        alt: 'Товар для дома 20'
    },
    {
        id: 39,
        category: 'home',
        name: 'Товар для дома 21',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (21).png',
        alt: 'Товар для дома 21'
    },
    {
        id: 40,
        category: 'home',
        name: 'Товар для дома 22',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (22).png',
        alt: 'Товар для дома 22'
    },
    {
        id: 41,
        category: 'home',
        name: 'Товар для дома 23',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (23).png',
        alt: 'Товар для дома 23'
    },
    {
        id: 42,
        category: 'home',
        name: 'Товар для дома 24',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (24).png',
        alt: 'Товар для дома 24'
    },
    {
        id: 43,
        category: 'home',
        name: 'Товар для дома 25',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (25).png',
        alt: 'Товар для дома 25'
    },
    {
        id: 44,
        category: 'home',
        name: 'Товар для дома 26',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (26).png',
        alt: 'Товар для дома 26'
    },
    {
        id: 45,
        category: 'home',
        name: 'Товар для дома 27',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (27).png',
        alt: 'Товар для дома 27'
    },
    {
        id: 46,
        category: 'home',
        name: 'Товар для дома 28',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary/2 (28).png',
        alt: 'Товар для дома 28'
    },
    {
        id: 47,
        category: 'stationery',
        name: 'Ручка шариковая',
        description: 'Качественная шариковая ручка для письма',
        price: 1.0,
        image: 'img/kanselyar_harytlar/3 (1).png',
        alt: 'Ручка шариковая'
    },
    {
        id: 48,
        category: 'stationery',
        name: 'Ручка гелевая',
        description: 'Удобная гелевая ручка для письма',
        price: 1.2,
        image: 'img/kanselyar_harytlar/3 (2).png',
        alt: 'Ручка гелевая'
    },
    {
        id: 49,
        category: 'stationery',
        name: 'Точилка для карандашей',
        description: 'Компактная точилка для школьных карандашей',
        price: 0.8,
        image: 'img/kanselyar_harytlar/3 (3).png',
        alt: 'Точилка для карандашей'
    },
    {
        id: 50,
        category: 'stationery',
        name: 'Ластик',
        description: 'Мягкий ластик для аккуратного удаления карандашных линий',
        price: 0.5,
        image: 'img/kanselyar_harytlar/3 (4).png',
        alt: 'Ластик'
    },
    {
        id: 51,
        category: 'stationery',
        name: 'Карандаши цветные',
        description: 'Набор цветных карандашей для рисования и учебы',
        price: 3.5,
        image: 'img/kanselyar_harytlar/3 (5).png',
        alt: 'Карандаши цветные'
    },
    {
        id: 52,
        category: 'stationery',
        name: 'Маркер',
        description: 'Яркий маркер для заметок и выделения текста',
        price: 1.5,
        image: 'img/kanselyar_harytlar/3 (6).png',
        alt: 'Маркер'
    },
    {
        id: 53,
        category: 'stationery',
        name: 'Блокнот',
        description: 'Удобный блокнот для записей и идей',
        price: 2.0,
        image: 'img/kanselyar_harytlar/3 (7).png',
        alt: 'Блокнот'
    },
    {
        id: 54,
        category: 'stationery',
        name: 'Клей-карандаш',
        description: 'Чистый клей-карандаш для школьных поделок',
        price: 1.3,
        image: 'img/kanselyar_harytlar/3 (8).png',
        alt: 'Клей-карандаш'
    },
    {
        id: 55,
        category: 'stationery',
        name: 'Набор линейок',
        description: 'Прочный набор линейок для черчения и измерения',
        price: 1.7,
        image: 'img/kanselyar_harytlar/3 (9).png',
        alt: 'Набор линейок'
    },
    {
        id: 56,
        category: 'stationery',
        name: 'Папка для бумаг',
        description: 'Папка для хранения школьных документов и тетрадей',
        price: 2.8,
        image: 'img/kanselyar_harytlar/3 (10).png',
        alt: 'Папка для бумаг'
    },
    {
        id: 57,
        category: 'stationery',
        name: 'Клей ПВА',
        description: 'Универсальный клей для бумаги и творчества',
        price: 1.4,
        image: 'img/kanselyar_harytlar/3 (11).png',
        alt: 'Клей ПВА'
    },
    {
        id: 58,
        category: 'accessories',
        name: 'Кошелек',
        description: 'Стильный кошелек для хранения ваших денег и карт',
        price: 15.0,
        image: 'img/ulylaryn_aksessuarlary/4 (1).png',
        alt: 'Кошелек'
    },
    {
        id: 59,
        category: 'accessories',
        name: 'Ремень',
        description: 'Качественный ремень для поддержания вашего стиля',
        price: 20.0,
        image: 'img/ulylaryn_aksessuarlary/4 (2).png',
        alt: 'Ремень'
    },
    {
        id: 60,
        category: 'accessories',
        name: 'Очки солнцезащитные',
        description: 'Модные солнцезащитные очки для повседневного образа',
        price: 18.0,
        image: 'img/ulylaryn_aksessuarlary/4 (3).png',
        alt: 'Очки солнцезащитные'
    },
    {
        id: 61,
        category: 'accessories',
        name: 'Кошелек-мини',
        description: 'Удобный мини-кошелек для карточек',
        price: 12.0,
        image: 'img/ulylaryn_aksessuarlary/4 (4).png',
        alt: 'Кошелек-мини'
    },
    {
        id: 62,
        category: 'accessories',
        name: 'Флешка',
        description: 'Стильная флешка для данных и документов',
        price: 8.0,
        image: 'img/ulylaryn_aksessuarlary/4 (5).png',
        alt: 'Флешка'
    },
    {
        id: 63,
        category: 'accessories',
        name: 'Портмоне',
        description: 'Удобное портмоне для карточек и купюр',
        price: 25.0,
        image: 'img/ulylaryn_aksessuarlary/4 (6).png',
        alt: 'Портмоне'
    },
    {
        id: 64,
        category: 'accessories',
        name: 'Часы наручные',
        description: 'Классические наручные часы для взрослых',
        price: 30.0,
        image: 'img/ulylaryn_aksessuarlary/4 (7).png',
        alt: 'Часы наручные'
    },
    {
        id: 65,
        category: 'accessories',
        name: 'Браслет',
        description: 'Стильный браслет для повседневной носки',
        price: 13.0,
        image: 'img/ulylaryn_aksessuarlary/4 (8).png',
        alt: 'Браслет'
    },
    {
        id: 66,
        category: 'accessories',
        name: 'Ключница',
        description: 'Компактная ключница для удобного хранения ключей',
        price: 10.0,
        image: 'img/ulylaryn_aksessuarlary/4 (9).png',
        alt: 'Ключница'
    },
    {
        id: 67,
        category: 'accessories',
        name: 'Брелок',
        description: 'Яркий брелок для ключей или сумки',
        price: 5.0,
        image: 'img/ulylaryn_aksessuarlary/4 (10).png',
        alt: 'Брелок'
    },
    {
        id: 68,
        category: 'accessories',
        name: 'Чернильная ручка',
        description: 'Элегантная ручка для подписей и заметок',
        price: 14.0,
        image: 'img/ulylaryn_aksessuarlary/4 (11).png',
        alt: 'Чернильная ручка'
    },
    {
        id: 69,
        category: 'accessories',
        name: 'Зонт складной',
        description: 'Компактный зонт, легко помещается в сумку',
        price: 22.0,
        image: 'img/ulylaryn_aksessuarlary/4 (12).png',
        alt: 'Зонт складной'
    },
    {
        id: 70,
        category: 'accessories',
        name: 'Наушники',
        description: 'Удобные наушники для музыки и звонков',
        price: 27.0,
        image: 'img/ulylaryn_aksessuarlary/4 (13).png',
        alt: 'Наушники'
    },
    {
        id: 71,
        category: 'accessories',
        name: 'Сумка для документов',
        description: 'Стильная сумка для документов и гаджетов',
        price: 35.0,
        image: 'img/ulylaryn_aksessuarlary/4 (14).png',
        alt: 'Сумка для документов'
    },
    {
        id: 72,
        category: 'accessories',
        name: 'Тревел-кейс',
        description: 'Органайзер для поездок и путешествий',
        price: 29.0,
        image: 'img/ulylaryn_aksessuarlary/4 (15).png',
        alt: 'Тревел-кейс'
    },
    {
        id: 73,
        category: 'accessories',
        name: 'Зажим для денег',
        description: 'Металлический зажим для купюр и карточек',
        price: 12.0,
        image: 'img/ulylaryn_aksessuarlary/4 (16).png',
        alt: 'Зажим для денег'
    },
    {
        id: 74,
        category: 'accessories',
        name: 'Кожаный браслет',
        description: 'Модный кожаный браслет для взрослых',
        price: 16.0,
        image: 'img/ulylaryn_aksessuarlary/4 (17).png',
        alt: 'Кожаный браслет'
    },
    {
        id: 75,
        category: 'accessories',
        name: 'Запонки',
        description: 'Элегантные запонки для вечернего образа',
        price: 18.0,
        image: 'img/ulylaryn_aksessuarlary/4 (18).png',
        alt: 'Запонки'
    },
    {
        id: 76,
        category: 'accessories',
        name: 'Кошелек-кардхолдер',
        description: 'Удобный кардхолдер для пластиковых карт',
        price: 14.0,
        image: 'img/ulylaryn_aksessuarlary/4 (19).png',
        alt: 'Кошелек-кардхолдер'
    },
    {
        id: 77,
        category: 'accessories',
        name: 'Кожаный ремень',
        description: 'Надежный ремень из натуральной кожи',
        price: 22.0,
        image: 'img/ulylaryn_aksessuarlary/4 (20).png',
        alt: 'Кожаный ремень'
    },
    {
        id: 78,
        category: 'accessories',
        name: 'Шарф',
        description: 'Мягкий шарф для холодного времени года',
        price: 18.0,
        image: 'img/ulylaryn_aksessuarlary/4 (21).png',
        alt: 'Шарф'
    },
    {
        id: 79,
        category: 'accessories',
        name: 'Перчатки',
        description: 'Теплые перчатки для улицы и работы',
        price: 17.0,
        image: 'img/ulylaryn_aksessuarlary/4 (22).png',
        alt: 'Перчатки'
    },
    {
        id: 80,
        category: 'accessories',
        name: 'Портфель',
        description: 'Классический портфель для офиса и встреч',
        price: 40.0,
        image: 'img/ulylaryn_aksessuarlary/4 (23).png',
        alt: 'Портфель'
    },
    {
        id: 81,
        category: 'accessories',
        name: 'Кошелек с отделениями',
        description: 'Кошелек с множеством отделений для карт',
        price: 19.0,
        image: 'img/ulylaryn_aksessuarlary/4 (24).png',
        alt: 'Кошелек с отделениями'
    },
    {
        id: 82,
        category: 'accessories',
        name: 'Мультифункциональный кейс',
        description: 'Кейс для телефона, карт и наличных',
        price: 21.0,
        image: 'img/ulylaryn_aksessuarlary/4 (25).png',
        alt: 'Мультифункциональный кейс'
    },
    {
        id: 83,
        category: 'accessories',
        name: 'Мужской браслет',
        description: 'Модный аксессуар для стильного образа',
        price: 14.0,
        image: 'img/ulylaryn_aksessuarlary/4 (26).png',
        alt: 'Мужской браслет'
    },
    {
        id: 84,
        category: 'accessories',
        name: 'Женский аксессуар',
        description: 'Изысканный аксессуар для женского стиля',
        price: 16.0,
        image: 'img/ulylaryn_aksessuarlary/4 (27).png',
        alt: 'Женский аксессуар'
    },
    {
        id: 85,
        category: 'accessories',
        name: 'Подарочная коробка аксессуаров',
        description: 'Подарочный набор стильных аксессуаров',
        price: 38.0,
        image: 'img/ulylaryn_aksessuarlary/4 (28).png',
        alt: 'Подарочная коробка аксессуаров'
    },
    {
        id: 86,
        category: 'hygiene',
        name: 'Мыло',
        description: 'Натуральное мыло для ухода за кожей',
        price: 3.0,
        image: 'img/gigiyena we byt/5 (1).png',
        alt: 'Мыло'
    },
    {
        id: 87,
        category: 'hygiene',
        name: 'Шампунь',
        description: 'Увлажняющий шампунь для всех типов волос',
        price: 5.0,
        image: 'img/gigiyena we byt/5 (2).png',
        alt: 'Шампунь'
    },
    {
        id: 88,
        category: 'hygiene',
        name: 'Дезодорант',
        description: 'Свежий дезодорант для защиты в течение дня',
        price: 4.5,
        image: 'img/gigiyena we byt/5 (3).png',
        alt: 'Дезодорант'
    },
    {
        id: 89,
        category: 'hygiene',
        name: 'Крем для рук',
        description: 'Увлажняющий крем для мягкой и гладкой кожи рук',
        price: 6.0,
        image: 'img/gigiyena we byt/5 (4).png',
        alt: 'Крем для рук'
    },
    {
        id: 90,
        category: 'hygiene',
        name: 'Зубная паста',
        description: 'Освежающая зубная паста для чистоты и свежести дыхания',
        price: 2.8,
        image: 'img/gigiyena we byt/5 (5).png',
        alt: 'Зубная паста'
    },
    {
        id: 91,
        category: 'hygiene',
        name: 'Зубная щетка',
        description: 'Мягкая зубная щетка для ежедневного ухода за зубами',
        price: 2.2,
        image: 'img/gigiyena we byt/5 (6).png',
        alt: 'Зубная щетка'
    },
    {
        id: 92,
        category: 'hygiene',
        name: 'Средство для мытья посуды',
        description: 'Эффективное средство для мытья посуды и уборки кухни',
        price: 3.5,
        image: 'img/gigiyena we byt/5 (7).png',
        alt: 'Средство для мытья посуды'
    },
    {
        id: 93,
        category: 'hygiene',
        name: 'Чистящее средство',
        description: 'Универсальное чистящее средство для бытовых нужд',
        price: 4.0,
        image: 'img/gigiyena we byt/5 (8).png',
        alt: 'Чистящее средство'
    },
    {
        id: 94,
        category: 'kids',
        name: 'Детский товар 19',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt1/Weixin Image_2026-04-06_144654_218.png',
        alt: 'Детский товар 19'
    },
    {
        id: 95,
        category: 'kids',
        name: 'Детский товар 20',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt1/Weixin Image_2026-04-06_144726_891.png',
        alt: 'Детский товар 20'
    },
    {
        id: 96,
        category: 'kids',
        name: 'Детский товар 21',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt1/Weixin Image_2026-04-06_144732_671.png',
        alt: 'Детский товар 21'
    },
    {
        id: 97,
        category: 'kids',
        name: 'Детский товар 22',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt1/Weixin Image_2026-04-06_144742_986.png',
        alt: 'Детский товар 22'
    },
    {
        id: 98,
        category: 'kids',
        name: 'Детский товар 23',
        description: 'Яркий детский товар',
        price: 1.8,
        image: 'img/caga haryt1/Weixin Image_2026-04-06_144747_745.png',
        alt: 'Детский товар 23'
    },
    {
        id: 99,
        category: 'home',
        name: 'Товар для дома 29',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145026_209.png',
        alt: 'Товар для дома 29'
    },
    {
        id: 100,
        category: 'home',
        name: 'Товар для дома 30',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145035_397.png',
        alt: 'Товар для дома 30'
    },
    {
        id: 101,
        category: 'home',
        name: 'Товар для дома 31',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145041_658.png',
        alt: 'Товар для дома 31'
    },
    {
        id: 102,
        category: 'home',
        name: 'Товар для дома 32',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145046_871.png',
        alt: 'Товар для дома 32'
    },
    {
        id: 103,
        category: 'home',
        name: 'Товар для дома 33',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145054_660.png',
        alt: 'Товар для дома 33'
    },
    {
        id: 104,
        category: 'home',
        name: 'Товар для дома 34',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145100_184.png',
        alt: 'Товар для дома 34'
    },
    {
        id: 105,
        category: 'home',
        name: 'Товар для дома 35',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145104_879.png',
        alt: 'Товар для дома 35'
    },
    {
        id: 106,
        category: 'home',
        name: 'Товар для дома 36',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145110_356.png',
        alt: 'Товар для дома 36'
    },
    {
        id: 107,
        category: 'home',
        name: 'Товар для дома 37',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145116_538.png',
        alt: 'Товар для дома 37'
    },
    {
        id: 108,
        category: 'home',
        name: 'Товар для дома 38',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145121_441.png',
        alt: 'Товар для дома 38'
    },
    {
        id: 109,
        category: 'home',
        name: 'Товар для дома 39',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145128_390.png',
        alt: 'Товар для дома 39'
    },
    {
        id: 110,
        category: 'home',
        name: 'Товар для дома 40',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145133_233.png',
        alt: 'Товар для дома 40'
    },
    {
        id: 111,
        category: 'home',
        name: 'Товар для дома 41',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145139_040.png',
        alt: 'Товар для дома 41'
    },
    {
        id: 112,
        category: 'home',
        name: 'Товар для дома 42',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145144_183.png',
        alt: 'Товар для дома 42'
    },
    {
        id: 113,
        category: 'home',
        name: 'Товар для дома 43',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145149_115.png',
        alt: 'Товар для дома 43'
    },
    {
        id: 114,
        category: 'home',
        name: 'Товар для дома 44',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145153_777.png',
        alt: 'Товар для дома 44'
    },
    {
        id: 115,
        category: 'home',
        name: 'Товар для дома 45',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145159_599.png',
        alt: 'Товар для дома 45'
    },
    {
        id: 116,
        category: 'home',
        name: 'Товар для дома 46',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145258_956.png',
        alt: 'Товар для дома 46'
    },
    {
        id: 117,
        category: 'home',
        name: 'Товар для дома 47',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145303_553.png',
        alt: 'Товар для дома 47'
    },
    {
        id: 118,
        category: 'home',
        name: 'Товар для дома 48',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145308_384.png',
        alt: 'Товар для дома 48'
    },
    {
        id: 119,
        category: 'home',
        name: 'Товар для дома 49',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145313_062.png',
        alt: 'Товар для дома 49'
    },
    {
        id: 120,
        category: 'home',
        name: 'Товар для дома 50',
        description: 'Полезный товар для дома',
        price: 2.5,
        image: 'img/oy_kuhnya_harytlary1/Weixin Image_2026-04-06_145318_107.png',
        alt: 'Товар для дома 50'
    },
    {
        id: 121,
        category: 'accessories',
        name: 'Аксессуар для взрослых 29',
        description: 'Стильный аксессуар для взрослых',
        price: 15.0,
        image: 'img/ulylaryn_aksessuarlary1/Weixin Image_2026-04-06_144836_434.png',
        alt: 'Аксессуар для взрослых 29'
    },
    {
        id: 122,
        category: 'accessories',
        name: 'Аксессуар для взрослых 30',
        description: 'Стильный аксессуар для взрослых',
        price: 15.0,
        image: 'img/ulylaryn_aksessuarlary1/Weixin Image_2026-04-06_144908_220.png',
        alt: 'Аксессуар для взрослых 30'
    },
    {
        id: 123,
        category: 'accessories',
        name: 'Аксессуар для взрослых 31',
        description: 'Стильный аксессуар для взрослых',
        price: 15.0,
        image: 'img/ulylaryn_aksessuarlary1/Weixin Image_2026-04-06_144916_225.png',
        alt: 'Аксессуар для взрослых 31'
    },
    {
        id: 124,
        category: 'accessories',
        name: 'Аксессуар для взрослых 32',
        description: 'Стильный аксессуар для взрослых',
        price: 15.0,
        image: 'img/ulylaryn_aksessuarlary1/Weixin Image_2026-04-06_144921_167.png',
        alt: 'Аксессуар для взрослых 32'
    },
    {
        id: 125,
        category: 'accessories',
        name: 'Аксессуар для взрослых 33',
        description: 'Стильный аксессуар для взрослых',
        price: 15.0,
        image: 'img/ulylaryn_aksessuarlary1/Weixin Image_2026-04-06_144926_813.png',
        alt: 'Аксессуар для взрослых 33'
    },
    {
        id: 126,
        category: 'accessories',
        name: 'Аксессуар для взрослых 34',
        description: 'Стильный аксессуар для взрослых',
        price: 15.0,
        image: 'img/ulylaryn_aksessuarlary1/Weixin Image_2026-04-06_144931_593.png',
        alt: 'Аксессуар для взрослых 34'
    },
    {
        id: 127,
        category: 'accessories',
        name: 'Аксессуар для взрослых 35',
        description: 'Стильный аксессуар для взрослых',
        price: 15.0,
        image: 'img/ulylaryn_aksessuarlary1/Weixin Image_2026-04-06_144936_751.png',
        alt: 'Аксессуар для взрослых 35'
    },
    {
        id: 128,
        category: 'accessories',
        name: 'Аксессуар для взрослых 36',
        description: 'Стильный аксессуар для взрослых',
        price: 15.0,
        image: 'img/ulylaryn_aksessuarlary1/Weixin Image_2026-04-06_144944_043.png',
        alt: 'Аксессуар для взрослых 36'
    },
    {
        id: 129,
        category: 'accessories',
        name: 'Аксессуар для взрослых 37',
        description: 'Стильный аксессуар для взрослых',
        price: 15.0,
        image: 'img/ulylaryn_aksessuarlary1/Weixin Image_2026-04-06_144949_002.png',
        alt: 'Аксессуар для взрослых 37'
    }
];

// ==== Ждём загрузки DOM ==== 
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    initCartButtons();
    const firstSidebarLink = document.querySelector('.sidebar a');
    if (firstSidebarLink) {
        firstSidebarLink.classList.add('active-link');
    }

    document.getElementById('toggle-cart-btn').addEventListener('click', function() {
        const cartModal = document.getElementById('cart-modal');
        const isHidden = window.getComputedStyle(cartModal).display === 'none';
        cartModal.style.display = isHidden ? 'block' : 'none';
    });

    document.getElementById('close-cart-btn').addEventListener('click', function() {
        document.getElementById('cart-modal').style.display = 'none';
    });
});

function showCategory(event, id) {
    event.preventDefault();
    let categories = document.querySelectorAll('.category');
    let links = document.querySelectorAll('.sidebar a');

    categories.forEach(category => {
        category.classList.remove('active');
    });
    links.forEach(link => {
        link.classList.remove('active-link');
    });

    document.getElementById(id).classList.add('active');
    const clickedLink = event.currentTarget || event.target;
    if (clickedLink) {
        clickedLink.classList.add('active-link');
    }
}

function renderProducts() {
    const categories = document.querySelectorAll('.category');

    categories.forEach(section => {
        const titleHTML = section.querySelector('h2')?.outerHTML || '';
        section.innerHTML = titleHTML;

        const categoryProducts = products.filter(product => product.category === section.id);
        categoryProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product';
            card.dataset.id = product.id;
            card.dataset.name = product.name;
            card.dataset.price = product.price;
            card.innerHTML = `
                <img src="${product.image}" alt="${product.alt}">
                <div>
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="price">Цена: ${product.price}юаня</p>
                    <button class="add-to-cart-btn">Добавить в корзину</button>
                </div>
            `;
            section.appendChild(card);
        });
    });
}

// ==== Инициализация обработчиков кнопок ====
function initCartButtons() {
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const product = this.closest('.product');
            const id = parseInt(product.dataset.id);
            const name = product.dataset.name;
            const price = parseFloat(product.dataset.price);

            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }

            updateCartDisplay();
        });
    });
}

// ==== Обновление отображения корзины ====
function updateCartDisplay() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('cart-total').textContent = total.toFixed(2);

    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    if (cart.length === 0) {
        cartList.innerHTML = '<p style="text-align: center; color: #999;">Корзина пуста</p>';
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <strong>${item.name}</strong>
                <p>Цена: ${item.price} юаней</p>
                <p>Кол-во: ${item.quantity}</p>
                <p>Сумма: ${(item.price * item.quantity).toFixed(2)} юаней</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Удалить</button>
        `;
        cartList.appendChild(cartItem);
    });
}

// ==== Удаление товара из корзины ====
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

// ==== Очистка корзины ====
function clearCart() {
    cart = [];
    updateCartDisplay();
}