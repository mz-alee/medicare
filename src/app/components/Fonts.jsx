import { Poppins, Overpass, Ubuntu, Montserrat } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'], // ✅ this is required
  variable: '--font-poppins',
  display: 'swap',
});

export const overpass = Overpass({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'], // ✅
  variable: '--font-overpass',
  display: 'swap',
});

export const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'], // ✅
  variable: '--font-ubuntu',
  display: 'swap',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'], // ✅
  variable: '--font-montserrat',
  display: 'swap',
});
