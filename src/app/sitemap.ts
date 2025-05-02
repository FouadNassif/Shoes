import { MetadataRoute } from 'next'
import { staticShoes } from '@/data/staticShoes'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shoeslb.vercel.app' // Replace with your actual domain

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Dynamic product routes
  const productRoutes = staticShoes.map((shoe) => ({
    url: `${baseUrl}/products/${shoe.brand.toLowerCase().replace(/\s+/g, '-')}/${shoe.name.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...productRoutes]
} 