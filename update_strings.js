/* eslint-disable */
const fs = require('fs');

const updateTranslations = () => {
    const filePaths = ['messages/ru.json', 'messages/uz.json', 'messages/en.json'];

    const translations = {
        ru: {
            AdminAnalytics: {
                main: {
                    title: "Аналитика страховых компаний",
                    subtitle: "Мониторинг эффективности и ключевых показателей страховых партнеров OsonPolis.",
                    exportBtn: "Экспорт отчета"
                },
                cards: {
                    premium: "Премиум партнер",
                    active: "Активный",
                    leader: "Лидер роста",
                    sold: "Продано полисов",
                    conversion: "Конверсия",
                    payouts: "Выплаты"
                },
                chart: {
                    title: "Сравнение выручки партнеров",
                    subtitle: "Доходность по компаниям за текущий квартал",
                    revenue: "Выручка"
                },
                list: {
                    title: "Детальный список партнеров",
                    sortBy: "Сортировать по:",
                    sort1: "Лучший перформанс",
                    sort2: "Высокий уровень продления",
                    sort3: "Максимальные выплаты",
                    showAll: "Показать всех партнеров (12)"
                },
                table: {
                    partner: "Партнер",
                    type: "Тип страхования",
                    retention: "Удержание (Renewal)",
                    complaints: "Рейтинг жалоб",
                    status: "Статус",
                    action: "Действие",
                    normal: "В норме",
                    attention: "Внимание",
                    details: "Детали"
                }
            },
            AdminSMS: {
                main: {
                    title: "Центр SMS-уведомлений",
                    subtitle: "Управление автоматическими напоминаниями и ручными рассылками.",
                    exportBtn: "Экспорт логов"
                },
                tabs: {
                    create: "Создать рассылку",
                    history: "История сообщений",
                    templates: "Шаблоны",
                    automation: "Автоматизация",
                    pro: "Pro"
                },
                editor: {
                    title: "Новое сообщение",
                    templateLabel: "Шаблон сообщения",
                    template1: "Напоминание о продлении",
                    template2: "Приветственное сообщение",
                    template3: "Уведомление о выплате",
                    template4: "Специальное предложение",
                    recipientLabel: "Группа получателей",
                    recipient1: "Истекает через 7 дней (42 чел.)",
                    recipient2: "Все активные водители",
                    recipient3: "Новые регистрации (сегодня)",
                    recipient4: "Выбрать вручную...",
                    textLabel: "Текст сообщения",
                    textPlaceholder: "Введите текст сообщения...",
                    variables: "Доступные переменные: ",
                    coverage: "Охват",
                    smsCount: "Количество SMS",
                    totalCost: "Итого стоимость",
                    btnSchedule: "Запланировать",
                    btnSend: "Отправить сейчас"
                },
                history: {
                    title: "Последние отправки",
                    viewAll: "Все сообщения",
                    recipient: "Получатель",
                    date: "Дата и время",
                    status: "Статус",
                    type: "Тип",
                    delivered: "Доставлено",
                    error: "Ошибка",
                    reminder: "Напоминание",
                    broadcast: "Рассылка",
                    system: "Системное"
                },
                footer: {
                    title: "Нужна помощь с настройкой автоматизации?",
                    desc: "Наши специалисты помогут настроить сложные сценарии уведомлений для удержания клиентов и повышения конверсии.",
                    btn: "Связаться с техподдержкой"
                }
            }
        },
        uz: {
            AdminAnalytics: {
                main: {
                    title: "Sug'urta kompaniyalari tahlili",
                    subtitle: "OsonPolis sug'urta hamkorlari samaradorligi va asosiy ko'rsatkichlar monitoringi.",
                    exportBtn: "Hisobotni eksport qilish"
                },
                cards: {
                    premium: "Premium hamkor",
                    active: "Faol",
                    leader: "O'sish yetakchisi",
                    sold: "Sotilgan polislar",
                    conversion: "Konversiya",
                    payouts: "To'lovlar"
                },
                chart: {
                    title: "Hamkorlar daromadini solishtirish",
                    subtitle: "Joriy chorak uchun kompaniyalar daromadliligi",
                    revenue: "Daromad"
                },
                list: {
                    title: "Hamkorlarning batafsil ro'yxati",
                    sortBy: "Saralash:",
                    sort1: "Eng yaxshi natija",
                    sort2: "Yuqori darajadagi uzaytirish",
                    sort3: "Maksimal to'lovlar",
                    showAll: "Barcha hamkorlarni ko'rsatish (12)"
                },
                table: {
                    partner: "Hamkor",
                    type: "Sug'urta turi",
                    retention: "Ushlab qolish (Renewal)",
                    complaints: "Shikoyatlar reytingi",
                    status: "Holat",
                    action: "Amal",
                    normal: "Meyorida",
                    attention: "Diqqat",
                    details: "Batafsil"
                }
            },
            AdminSMS: {
                main: {
                    title: "SMS xabarnomalar markazi",
                    subtitle: "Avtomatik eslatmalar va qo'lda yuboriladigan xabarlarni boshqarish.",
                    exportBtn: "Loglarni eksport qilish"
                },
                tabs: {
                    create: "Xabar yaratish",
                    history: "Xabarlar tarixi",
                    templates: "Shablonlar",
                    automation: "Avtomatlashtirish",
                    pro: "Pro"
                },
                editor: {
                    title: "Yangi xabar",
                    templateLabel: "Xabar shabloni",
                    template1: "Uzaytirish eslatmasi",
                    template2: "Tabrik xabari",
                    template3: "To'lov haqida xabarnoma",
                    template4: "Maxsus taklif",
                    recipientLabel: "Qabul qiluvchilar guruhi",
                    recipient1: "7 kundan keyin tugaydi (42 ta)",
                    recipient2: "Barcha faol haydovchilar",
                    recipient3: "Yangi ro'yxatdan o'tganlar (bugun)",
                    recipient4: "Qo'lda tanlash...",
                    textLabel: "Xabar matni",
                    textPlaceholder: "Xabar matnini kiriting...",
                    variables: "Mavjud o'zgaruvchilar: ",
                    coverage: "Qamrov",
                    smsCount: "SMS soni",
                    totalCost: "Jami narx",
                    btnSchedule: "Rejalashtirish",
                    btnSend: "Hozir yuborish"
                },
                history: {
                    title: "So'nggi yuborilganlar",
                    viewAll: "Barcha xabarlar",
                    recipient: "Qabul qiluvchi",
                    date: "Sana va vaqt",
                    status: "Holat",
                    type: "Tur",
                    delivered: "Yetkazildi",
                    error: "Xatolik",
                    reminder: "Eslatma",
                    broadcast: "Tarqatish",
                    system: "Tizim"
                },
                footer: {
                    title: "Avtomatlashtirishni sozlashda yordam kerakmi?",
                    desc: "Mutaxassislarimiz mijozlarni ushlab qolish va konversiyani oshirish uchun murakkab xabar ssenariylarini sozlashda yordam berishadi.",
                    btn: "Texnik yordam bilan bog'lanish"
                }
            }
        },
        en: {
            AdminAnalytics: {
                main: {
                    title: "Insurance Companies Analytics",
                    subtitle: "Performance monitoring and key metrics of OsonPolis insurance partners.",
                    exportBtn: "Export Report"
                },
                cards: {
                    premium: "Premium Partner",
                    active: "Active",
                    leader: "Growth Leader",
                    sold: "Policies Sold",
                    conversion: "Conversion",
                    payouts: "Payouts"
                },
                chart: {
                    title: "Partner Revenue Comparison",
                    subtitle: "Profitability by companies for the current quarter",
                    revenue: "Revenue"
                },
                list: {
                    title: "Detailed Partner List",
                    sortBy: "Sort by:",
                    sort1: "Best performance",
                    sort2: "High renewal rate",
                    sort3: "Maximum payouts",
                    showAll: "Show all partners (12)"
                },
                table: {
                    partner: "Partner",
                    type: "Insurance Type",
                    retention: "Retention (Renewal)",
                    complaints: "Complaints Rating",
                    status: "Status",
                    action: "Action",
                    normal: "Normal",
                    attention: "Attention",
                    details: "Details"
                }
            },
            AdminSMS: {
                main: {
                    title: "SMS Notification Center",
                    subtitle: "Management of automatic reminders and manual broadcasts.",
                    exportBtn: "Export Logs"
                },
                tabs: {
                    create: "Create Broadcast",
                    history: "Message History",
                    templates: "Templates",
                    automation: "Automation",
                    pro: "Pro"
                },
                editor: {
                    title: "New Message",
                    templateLabel: "Message Template",
                    template1: "Renewal Reminder",
                    template2: "Welcome Message",
                    template3: "Payout Notification",
                    template4: "Special Offer",
                    recipientLabel: "Recipient Group",
                    recipient1: "Expires in 7 days (42 pax)",
                    recipient2: "All active drivers",
                    recipient3: "New registrations (today)",
                    recipient4: "Select manually...",
                    textLabel: "Message Text",
                    textPlaceholder: "Enter message text...",
                    variables: "Available variables: ",
                    coverage: "Coverage",
                    smsCount: "SMS Count",
                    totalCost: "Total Cost",
                    btnSchedule: "Schedule",
                    btnSend: "Send Now"
                },
                history: {
                    title: "Recent Sends",
                    viewAll: "All messages",
                    recipient: "Recipient",
                    date: "Date and Time",
                    status: "Status",
                    type: "Type",
                    delivered: "Delivered",
                    error: "Error",
                    reminder: "Reminder",
                    broadcast: "Broadcast",
                    system: "System"
                },
                footer: {
                    title: "Need help setting up automation?",
                    desc: "Our experts will help you set up complex notification scenarios to retain customers and increase conversion.",
                    btn: "Contact Tech Support"
                }
            }
        }
    };

    filePaths.forEach((path, i) => {
        const langCode = ['ru', 'uz', 'en'][i];
        const data = JSON.parse(fs.readFileSync(path, 'utf8'));
        data.AdminAnalytics = translations[langCode].AdminAnalytics;
        data.AdminSMS = translations[langCode].AdminSMS;
        fs.writeFileSync(path, JSON.stringify(data, null, 4));
    });
};

updateTranslations();
