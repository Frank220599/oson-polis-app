/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const dirPath = '/Users/farrukhzokirov/Desktop/oson_polis/oson-polis-app/src/app/[locale]/(main)';
const pages = ['partners', 'terms', 'privacy', 'legal', 'support', 'career', 'team', 'kasko', 'travel', 'claims', 'news'];

pages.forEach(page => {
    const file = path.join(dirPath, page, 'page.tsx');
    if (!fs.existsSync(file)) return;

    let content = fs.readFileSync(file, 'utf8');

    // Replace useTranslations with getTranslations
    content = content.replace(
        `import { useTranslations } from "next-intl";`,
        `import { getTranslations } from "next-intl/server";`
    );

    content = content.replace(
        /const t = useTranslations\((.*?)\);/,
        `const t = await getTranslations($1);`
    );

    fs.writeFileSync(file, content);
    console.log(`Fixed translations in ${page}`);
});
