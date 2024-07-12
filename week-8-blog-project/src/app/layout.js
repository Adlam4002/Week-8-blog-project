import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { League_Spartan } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const spartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Week 8 blog",
  description: "A travel blog by Alex Adlam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spartan.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
