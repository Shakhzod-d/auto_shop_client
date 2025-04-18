import { Metadata } from "next";
import dynamic from "next/dynamic";
export const metadata: Metadata = {
  title: "Autoshop - Bosh sahifa",
  description: "Avtomobil texnologiyalari, elektifikatsiya va innovatsiyala",
  keywords:
    "autoshop uzum market online shop kun.uz qalampir.uz daryo.uz elektromobillar sukuter mers texnalogiya online shop autoshop.uz",
  openGraph: {
    title:
      "Autoshop uz Avtomobil texnologiyalari, elektifikatsiya va innovatsiyala",
    description:
      "Autoshop.uz - Avtomobil texnologiyalari, EV, elektifikatsiya va innovatsiyalar haqida eng so'nggi yangiliklar va trendlar. Elektr avtomobillari, sun'iy intellekt, va ilg'or texnologiyalar bizning ",
    images: "/logo.png",
  },
};

export default function Home() {
  const HomePageClient = dynamic(() => import("./home-client"), { ssr:true });
  return (
    <>
      <HomePageClient />
    </>
  );
}
