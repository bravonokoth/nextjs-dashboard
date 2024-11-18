import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';


 
export const inter = Inter({ subsets: ['latin'] });


export const lusitana = Lusitana({
  subsets: ['latin'], // Add the subset you need
  weight: ['400', '700'], // Specify the font weights (400: Regular, 700: Bold)
});
