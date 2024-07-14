import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://localhost:3000',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://localhost:3000/en',
          ru: 'https://localhost:3000/ru',
        },
      },
    },
  ]
}