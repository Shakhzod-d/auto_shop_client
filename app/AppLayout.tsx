"use client";

import { Footer } from "../components/shared/footer";
import AutoShopModal from "../components/shared/modal";
import { Navbar } from "../components/shared/navbar";

import { usePathname } from "next/navigation";
import { useHelper } from "../store/helper.store";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const isAuth = pathname.startsWith("/auth");
  const { isModal } = useHelper();
  return (
    <>
      {isModal && <AutoShopModal />}
      {!isAuth && <Navbar />}
      {children}
      {!isAuth && <Footer />}
    </>
  );
};

export default AppLayout;
