/* eslint-disable */
const fs = require('fs');
const path = require('path');

const titles = {
    career: { key: "career", ru: "Карьера в OsonPolis", uz: "OsonPolisda Karyera", en: "Careers at OsonPolis", file: "career" },
    claims: { key: "claims", ru: "Страховые случаи", uz: "Sug'urta holatlari", en: "Insurance Claims", file: "claims" },
    kasko: { key: "kasko", ru: "КАСКО Страхование", uz: "KASKO Sug'urtasi", en: "KASKO Insurance", file: "kasko" },
    legal: { key: "legal", ru: "Правовая информация", uz: "Huquqiy ma'lumotlar", en: "Legal Information", file: "legal" },
    news: { key: "news", ru: "Новости и Блог", uz: "Yangiliklar va Blog", en: "News and Blog", file: "news" },
    partners: { key: "partners", ru: "Партнерам", uz: "Hamkorlarga", en: "For Partners", file: "partners" },
    privacy: { key: "privacy", ru: "Политика конфиденциальности", uz: "Maxfiylik siyosati", en: "Privacy Policy", file: "privacy" },
    resetPassword: { key: "resetPassword", ru: "Восстановление пароля", uz: "Parolni tiklash", en: "Password Recovery", file: "reset-password" },
    support: { key: "support", ru: "Центр помощи", uz: "Yordam markazi", en: "Support Center", file: "support" },
    team: { key: "team", ru: "Наша команда", uz: "Bizning jamoa", en: "Our Team", file: "team" },
    terms: { key: "terms", ru: "Условия использования", uz: "Foydalanish shartlari", en: "Terms of Use", file: "terms" },
};

// 1. Update translations
const langs = ['ru', 'uz', 'en'];
langs.forEach(lang => {
    const filePath = `messages/${lang}.json`;
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    data.DemoTitles = {};
    Object.values(titles).forEach(item => {
        data.DemoTitles[item.key] = item[lang];
    });

    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
});

// 2. Update page.tsx files
Object.values(titles).forEach(item => {
    const filePath = `src/app/[locale]/${item.file}/page.tsx`;
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Add import if not exists
        if (!content.includes('next-intl')) {
            content = 'import { useTranslations } from "next-intl";\n' + content;
        }

        // Convert to use t()
        // Find default export function
        content = content.replace(/export default function \w+\(\) {/g, (match) => {
            return `${match}\n    const t = useTranslations("DemoTitles");`;
        });

        // Replace string prop with t() calls
        const rx = /title="([^"]+)"/g;
        content = content.replace(rx, `title={t("${item.key}")}`);

        fs.writeFileSync(filePath, content);
    }
});
