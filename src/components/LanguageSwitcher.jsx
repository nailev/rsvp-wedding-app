import React from "react";
import { Button } from "../components/ui/button.jsx";
import { Globe } from "lucide-react";
import { useTranslation } from "../lib/LanguageContext.jsx";

export default function LanguageSwitcher() {
  const { lang, onLanguageChange } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-500" />
      <div className="flex rounded-sm overflow-hidden border border-gray-200">
        <Button
          variant="ghost"
          size="sm"
          className={`px-3 py-1 rounded-none transition-colors ${
            lang === "en" ? "bg-rose-50 text-rose-600" : "hover:bg-gray-50"
          }`}
          onClick={() => onLanguageChange("en")}
        >
          EN
        </Button>
        <div className="w-px bg-gray-200" />
        <Button
          variant="ghost"
          size="sm"
          className={`px-3 py-1 rounded-none transition-colors ${
            lang === "he" ? "bg-rose-50 text-rose-600" : "hover:bg-gray-50"
          }`}
          onClick={() => onLanguageChange("he")}
        >
          עב
        </Button>
      </div>
    </div>
  );
}
