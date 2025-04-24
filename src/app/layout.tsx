import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Bebas_Neue } from "next/font/google";
import "./global.css"
import { NotificationProvider } from "@/context/NotificationContext";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ['latin'] })
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHOESLB",
  description: "The best place to buy shoes online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bebas.className}`}>
        <NotificationProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </NotificationProvider>
      </body>
    </html>
  );
}
