import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Switch } from "antd";
import LanguageSelector from "./LanguageSelector";

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const SettingsSection = ({ title, title2 }) => {
  return (
    <div className="bg-custom-section text-white m-4 rounded-xl">
      <section className="p-3 text-sm flex justify-between items-center">
        {title}
        {title === "Bildirimler" ? (
          <Switch defaultChecked onChange={onChange}
           />
        ) : (
          <KeyboardArrowRightIcon className="text-gray-500 text-xl" />
        )}
      </section>
      {title2 && (
        <section className="p-3 text-sm flex justify-between items-center">
          {title2}
          {title2 === "Dil" ? (
            <LanguageSelector />
          ) : (
            <KeyboardArrowRightIcon className="text-gray-500 text-xl" />
          )}
        </section>
      )}
    </div>
  );
};

export default SettingsSection;
