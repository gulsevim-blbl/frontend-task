import React from 'react';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const LogoutSection = () => {
  return (
    <div className="bg-custom-section text-red-400 m-4 rounded-xl">
      <p className="p-3 text-sm flex justify-between items-center">
        Çıkış Yap
        <KeyboardArrowRightIcon className="text-red-400 text-xl" />
      </p>
    </div>
  );
};

export default LogoutSection;
