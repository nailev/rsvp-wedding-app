import React, { createContext, useContext, useState } from "react";
import { translations } from "./translations.js";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const onLanguageChange = (newLang) => setLang(newLang);

  const value = {
    lang,
    onLanguageChange,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
