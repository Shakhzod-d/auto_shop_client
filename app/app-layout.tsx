"use client";

import { Footer } from "../components/shared/footer";
import AutoShopModal from "../components/shared/modal";
import Navbar from "../components/shared/navbar";

import { usePathname } from "next/navigation";
import { useHelper } from "../store/helper-store";
import { fetchItemsServ } from "../services/items-serv";
import { useQuery } from "@tanstack/react-query";
import { CategoryReqTypes } from "../types";
import { ToastContainer } from "react-toastify";
import "../lib/i18n";
const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const { lang } = useHelper();
  const isAuth = pathname.startsWith("/auth");
  const { isModal } = useHelper();
  const API = process.env.NEXT_PUBLIC_API_URL;
  const { data: categoryData } = useQuery<CategoryReqTypes>({
    queryFn: () => fetchItemsServ(`${API}/category`),
    queryKey: ["fetchCategoryServ", lang],
    staleTime: 0,
  });

  return (
    <>
      {isModal && <AutoShopModal />}
      {!isAuth && (
        <Navbar categoryData={categoryData ? categoryData.data : []} />
      )}
      {children}
      {!isAuth && <Footer />}
      <ToastContainer />
    </>
  );
};

export default AppLayout;
