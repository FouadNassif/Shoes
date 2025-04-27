import type { Metadata } from "next";
import { playfair, montserrat, poppins, bangers } from './fonts'
import "./global.css"
import { NotificationProvider } from "@/context/NotificationContext";
import { CartProvider } from "@/context/CartContext";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata: Metadata = {
  title: "SHOESLB - Your Style, Your Way",
  description: "Discover the latest trends in footwear at SHOESLB. Shop our collection of stylish shoes for men and women. Find your perfect pair today!",
  keywords: "shoes, footwear, fashion, men shoes, women shoes, online shopping, SHOESLB",
  authors: [{ name: 'SHOESLB' }],
  creator: "SHOESLB",
  publisher: "SHOESLB",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shoeslb.vercel.app",
    title: "SHOESLB - Your Style, Your Way",
    description: "Discover the latest trends in footwear at SHOESLB. Shop our collection of stylish shoes for men and women.",
    siteName: "SHOESLB",
    images: [
      {
        url: "/assets/img/logo.png",
        width: 800,
        height: 600,
        alt: "SHOESLB Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHOESLB - Your Style, Your Way",
    description: "Discover the latest trends in footwear at SHOESLB. Shop our collection of stylish shoes for men and women.",
    images: ["/assets/img/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
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
