import { Playfair_Display, Montserrat, Poppins, Bangers } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const bangers = Bangers({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bangers',
}); 