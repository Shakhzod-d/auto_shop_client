import type { Metadata } from "next";
import { Montserrat, Lora,  Poppins } from "next/font/google";
import "./index.css";
import AppLayout from "./app-layout";
import QueryProvider from "../providers/query-provider";

export const metadata: Metadata = {
  title: "Avtomobil texnologiyalari, elektifikatsiya va innovatsiyalar",
  description:
    "Autoshop.uz - Avtomobil texnologiyalari, EV, elektifikatsiya va innovatsiyalar haqida eng so'nggi yangiliklar va trendlar. Elektr avtomobillari, sun'iy intellekt, va ilg'or texnologiyalar bizning ",
};

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
});

const merriweather = Poppins({
  weight: ["300", "400", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lora.variable} ${merriweather.variable} antialiased`}
      >
        <QueryProvider>
          <AppLayout>{children}</AppLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
