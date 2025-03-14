"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import Image from "next/image";
import { Language } from "../../types";
import { languages } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { getLocaleStorage, setLocaleStorage } from "../../utils/locale-storage";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language|null>(null);

  const { i18n } = useTranslation();

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setLocaleStorage("lang", language.code);
    setIsOpen(false);
    i18n.changeLanguage(language.code);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLang = getLocaleStorage("lang") || "uz";
      const langueData = languages.find((item) => item.code === storedLang);
      if (langueData) {
        setSelectedLanguage(langueData);
        i18n.changeLanguage(langueData.code);
      }
    }
  }, [i18n]);

  return (
    <div className="relative inline-block text-left">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-[#666666] text-[18px]">
          {selectedLanguage?.name}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            isOpen ? "rotate-180" : ""
          )}
        />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((language) => (
              <button
                key={language.code}
                className={cn(
                  "flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100",
                  selectedLanguage?.code === language.code && "bg-gray-50"
                )}
                role="menuitem"
                onClick={() => handleLanguageChange(language)}
              >
                <Image src={language.flag} width={20} height={20} alt="flag" />
                <span className="font-medium">{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
