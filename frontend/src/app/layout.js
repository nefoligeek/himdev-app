import { Poppins } from "next/font/google";
// app/layout.tsx
import ogImage from "@/assests/images/college-image.png"

import "./globals.css";

// Configure the Poppins font
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    default: 'Himdev Educational Foundation',
    template: '%s | Empowering Education'
  },
  description: 'Non-profit organization dedicated to educational empowerment in India',
  keywords: ['education NGO', 'India education', 'scholarship programs', 'himdev', 'himdev educational foundation'],
  openGraph: {
    images: {ogImage},
    url: 'https://www.himdeveducationalfoundation.in',
    type: 'website'
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
