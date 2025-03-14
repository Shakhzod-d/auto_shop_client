import type { Metadata } from "next";
import { Montserrat, Lora, Merriweather } from "next/font/google";
import "./index.css";
import AppLayout from "./app-layout";
import QueryProvider from "../providers/query-provider";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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

const merriweather = Merriweather({
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
