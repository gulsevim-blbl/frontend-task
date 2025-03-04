import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = ["English", "Turkish", "French", "Deutsch"];

  return (
    <div className="relative inline-block">
      <button
        className="bg-custom-section text-white   py-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLanguage} <KeyboardArrowRightIcon className="text-gray-500 text-xl" />
      </button>
      {isOpen && (
        <ul className="absolute bg-white text-black mt-2 rounded shadow-lg">
          {languages.map((lang) => (
            <li
              key={lang}
              className="px-4 py-2 hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setSelectedLanguage(lang);
                setIsOpen(false);
              }}
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;