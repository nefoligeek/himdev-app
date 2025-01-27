import { Poppins } from "next/font/google";
import "./globals.css";

// Configure the Poppins font
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Himdev Educational Foundation Trust",
  description:
    "To provide world-class education that nurtures critical thinking, innovation, and personal growth. Our goal is to create an inclusive learning environment that prepares students to excel in a rapidly changing global landscape.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
