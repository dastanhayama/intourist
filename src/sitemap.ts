import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.intourist.pro',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://www.intourist.pro/en',
          ru: 'https://www.intourist.pro/ru',
        },
      },
    },
  ]
}


