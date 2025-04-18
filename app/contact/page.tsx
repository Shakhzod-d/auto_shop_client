

import dynamic from "next/dynamic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autoshop - Bog'lanish",
  description: "Avtomobil texnologiyalari, elektifikatsiya va innovatsiyala",
  keywords:
    "autoshop uzum market online shop kun.uz qalampir.uz daryo.uz elektromobillar sukuter mers texnalogiya online shop autoshop.uz instagram.com linkedin",
  openGraph: {
    title:
      "Autoshop uz Avtomobil texnologiyalari, elektifikatsiya va innovatsiyala",
    description:
      "Autoshop.uz - Avtomobil texnologiyalari, EV, elektifikatsiya va innovatsiyalar haqida eng so'nggi yangiliklar va trendlar. Elektr avtomobillari, sun'iy intellekt, va ilg'or texnologiyalar bizning ",
    images: "/logo.png",
  },
};

export default function Contact() {
  const ContactClientPage = dynamic(() => import("./contact-client"), {
    ssr: true,
  });
  return <ContactClientPage />;
}
