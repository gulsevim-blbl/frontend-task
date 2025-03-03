import React, { useState } from "react";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = ["English", "Turkish", "French", "Deutsch"];

  return (
    <div className="relative inline-block">
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLanguage} ▼
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