import type { Metadata } from "next";
import { playfair, montserrat, poppins, bangers } from './fonts'
import "./global.css"
import { NotificationProvider } from "@/context/NotificationContext";
import { CartProvider } from "@/context/CartContext";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: {
    default: 'SHOESLB - Your Style, Your Way',
    template: '%s | SHOESLB'
  },
  description: 'Discover the latest trends in footwear at SHOESLB. Shop premium shoes from top brands including Nike, Adidas, Puma, and more. Free shipping on orders over $100.',
  keywords: ['shoes', 'footwear', 'sneakers', 'Nike', 'Adidas', 'Puma', 'online shopping', 'fashion', 'Lebanon', 'SHOESLB'],
  authors: [{ name: 'SHOESLB' }],
  creator: 'SHOESLB',
  publisher: 'SHOESLB',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shoeslb.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SHOESLB - Your Style, Your Way',
    description: 'Discover the latest trends in footwear at SHOESLB. Shop premium shoes from top brands including Nike, Adidas, Puma, and more.',
    url: 'https://shoeslb.vercel.app',
    siteName: 'SHOESLB',
    images: [
      {
        url: '/og-image.jpg', // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'SHOESLB - Your Style, Your Way',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHOESLB - Your Style, Your Way',
    description: 'Discover the latest trends in footwear at SHOESLB. Shop premium shoes from top brands including Nike, Adidas, Puma, and more.',
    images: ['/og-image.jpg'], // Make sure to add this image to your public folder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=lVMjh3w_PWE-OaQJJFG-7rLTg6JvpoP7bX39bKHafhw', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${poppins.variable} ${bangers.variable}`}>
      <body className={poppins.className}>
        <NotificationProvider>
          <CartProvider>
            {children}
            <Analytics/>
            <SpeedInsights/>
          </CartProvider>
        </NotificationProvider>
      </body>
    </html>
  );
}
