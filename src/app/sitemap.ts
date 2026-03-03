import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://osonpolis.uz',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://osonpolis.uz/register',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
    ];
}
