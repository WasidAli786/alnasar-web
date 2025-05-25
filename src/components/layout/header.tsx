"use client";

import { useState } from "react";

const Header = () => {
  const [selectedLang, setSelectedLang] = useState("en");

  const handleLanguage = (lang: string) => {
    setSelectedLang(lang);
  };
  return (
    <>
      <div className="relative w-fit bg-black/30 backdrop-blur-md overflow-hidden z-50">
        <div className="flex">
          {["en", "ar"].map((lang) => (
            <button
              key={lang}
              className={`px-2 sm:px-4 text-xs sm:text-base py-1 font-bold bg-black relative ${selectedLang === lang ? "text-white" : "text-gray-600"}`}
              onClick={() => handleLanguage(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-transparent z-20">
          <div className="w-[2px] h-full bg-white rotate-12 transform origin-top-left"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
