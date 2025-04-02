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
import { JSX } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface Props {
  categoryData: Category[];
}
export default function Navbar({ categoryData }: Props) {
  const { setIsModal, isSearch, setIsSearch } = useHelper();
  const navigate = useRouter();
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
        <Button
          className="py-[12px]     w-[130px]  h-10 md:w-[142px] md:h-11 bg-[#4DA6FF] rounded-md text-white font-semibold hidden tablet-middle:block"
          onClick={() => navigate.push("/auth")}
        >
          {t("btn.entrance")}
        </Button>
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
            <h1
              onClick={() => navigate.push("/")}
              className="cursor-pointer text-[#4DA6FF] font-bold font-merriweather text-[18px] sm:text-[40px] italic    whitespace-nowrap"
            >
              {"// AutoShop"}
            </h1>
          </>

          <div className="items-center flex gap-4 w-full justify-end ">
            {headerComp[String(isSearch)]}
          </div>
        </div>

        <nav className="hidden tablet-max:block">
          <div className="flex items-center gap-4">
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
                    className="text-[#333333] text-[19px] font-medium cursor-pointer hover:text-[#4DA6FF]"
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
