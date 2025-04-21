"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../ui/button";
import { NavSelect } from "../ui/nav-select";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useHelper } from "../../store/helper-store";
import LanguageSelector from "../ui/langue-select";
import { Category } from "../../types";
import { NavbarSelectData } from "../../utils/map-data";
import { useTranslation } from "react-i18next";
import { SearchInput } from "./search-input";
import { JSX, useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import { getLocaleStorage } from "@/utils/locale-storage";
import { LogOut, UserCircle } from "lucide-react";

interface Props {
  categoryData: Category[];
}
export default function Navbar({ categoryData }: Props) {
  const { setIsModal, isSearch, setIsSearch } = useHelper();
  const navigate = useRouter();
  const [isProfile, setIsProfile] = useState(false);
  const token = getLocaleStorage("UserToken");

  const selectRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const logout = () => {
    localStorage.removeItem("UserToken");
    setIsProfile(false);
  };

  const pathname = usePathname();
  const data = NavbarSelectData(categoryData ? categoryData : []);
  const { t } = useTranslation();
  const headerComp: Record<string, JSX.Element> = {
    true: <SearchInput />,
    false: (
      <>
        <IoSearchOutline
          size={20}
          color={"#666666"}
          onClick={setIsSearch}
          className="cursor-pointer"
        />
        <LanguageSelector />
        {!token ? (
          <Button
            className="py-[12px]     w-[130px]  h-10 md:w-[142px] md:h-11 bg-[#4DA6FF] rounded-md text-white font-semibold hidden tablet-middle:block"
            onClick={() => navigate.push("/auth")}
          >
            {t("btn.entrance")}
          </Button>
        ) : (
          <div className="relative hidden tablet-middle:block" ref={selectRef}>
            <UserCircle
              color={"#666666"}
              size={25}
              className="cursor-pointer"
              onClick={() => setIsProfile((c) => !c)}
            />
            {isProfile && (
              <div className="flex flex-col gap-2 absolute top-10 right-0 bg-white shadow-md rounded-md p-3 w-[150px] border">
                <span
                  className="flex gap-2 items-center text-sm text-red-500 cursor-pointer "
                  onClick={logout}
                >
                  <LogOut size={18} />

                  {t("btn.logout")}
                </span>
              </div>
            )}
          </div>
        )}

        <RxHamburgerMenu
          size={34}
          color="#666666"
          onClick={setIsModal}
          className="tablet-max:hidden size-[30px] sm:size-[36px] "
        />
      </>
    ),
  };

  return (
    <header className="mb-0 tablet-max:mb-10 font-montserrat">
      <div className="container">
        <div className=" flex justify-between items-center py-5  tablet-max:border-b border-[#888888]  tablet-max:mb-10  ">
          <>
            <Image
              src="/imgs/logo.png"
              alt="autoshop.uz logo"
              width={60}
              height={60}
              className="object-contain cursor-pointer"
              onClick={() => navigate.push("/")}
            />
          </>

          <div className="items-center flex gap-4 w-full justify-end ">
            {headerComp[String(isSearch)]}
          </div>
        </div>

        <nav className="hidden tablet-max:block">
          <div className="flex items-center gap-6">
            {data?.map((item, i) => {
              if (item.isSubCategory) {
                return (
                  <NavSelect
                    data={item.subcategory}
                    initialTitle={item.label}
                    key={i}
                  />
                );
              } else {
                return (
                  <div
                    key={item.subcategory[0]?.id}
                    className="text-[#333333] text-[18px] font-medium cursor-pointer hover:text-[#4DA6FF]"
                    style={{
                      color:
                        pathname == `/news/${item?.subcategory[0]?.path}`
                          ? "#4DA6FF"
                          : "",
                    }}
                  >
                    <Link href={`/news/${item?.subcategory[0]?.path}`}>
                      {item.label}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
