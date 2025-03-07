import type { Metadata } from "next";
import { Montserrat, Lora } from "next/font/google";
import "./index.css";
import AppLayout from "./AppLayout";

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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${lora.variable} antialiased`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
