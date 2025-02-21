import type { Metadata } from "next";
import {Montserrat, Oxanium} from 'next/font/google'
import "./globals.css";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})


export const metadata: Metadata = {
  title: "MPB Web - Management Plan Mobile",
  description: "Management Plan Bobile",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
