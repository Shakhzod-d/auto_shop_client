"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import Image from "next/image";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  {
    code: "uz",
    name: "O'z",
    flag: "/uz.svg",
  },
  {
    code: "ru",
    name: "Ru",
    flag: "/ru.svg",
  },
  {
    code: "en",
    name: "En",
    flag: "/en.svg",
  },
];

interface LanguageSelectorProps {
  onChange?: (language: string) => void;
}

export default function LanguageSelector({ onChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    if (onChange) {
      onChange(language.code);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-[#666666] text-[18px]">
          {selectedLanguage.name}
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
                  selectedLanguage.code === language.code && "bg-gray-50"
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
