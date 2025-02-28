"use client";

import { Footer } from "../components/shared/footer";
import { Navbar } from "../components/shared/navbar";

import { usePathname } from "next/navigation";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const isAuth = pathname.startsWith("/auth");
  return (
    <>
      {!isAuth && <Navbar />}
      {children}
      {!isAuth && <Footer />}
    </>
  );
};

export default AppLayout;
