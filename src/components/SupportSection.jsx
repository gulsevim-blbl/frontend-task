import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SupportSection = () => {
  return (
    <div className="bg-custom-section text-white m-4 rounded-xl">
      <section className="p-3 text-sm flex justify-between items-center">
        Destek
        <KeyboardArrowRightIcon className="text-gray-500 text-xl" />
      </section>

      <section className="p-3 text-sm flex justify-between items-center">
        Gizlilik Politikası
        <KeyboardArrowRightIcon className="text-gray-500 text-xl" />
      </section>

      <section className="p-3 text-sm flex justify-between items-center">
        Bizi Değerlendirin
        <KeyboardArrowRightIcon className="text-gray-500 text-xl" />
      </section>
    </div>
  );
};

export default SupportSection;
