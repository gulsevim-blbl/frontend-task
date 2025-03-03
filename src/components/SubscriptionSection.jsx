import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

const SubscriptionSection = ({ title, title2 }) => {

  const navigate = useNavigate();

  const handleChangeSubcription = () => {
    navigate('/subscription');
  }

  return (
    <div className="bg-custom-section text-white m-4 rounded-xl">
      <section className="p-3 text-sm flex justify-between items-center  cursor-pointer" onClick={handleChangeSubcription}>
        {title}
        <KeyboardArrowRightIcon className="text-gray-500 text-xl" />
      </section>
      <section className="p-3 text-sm flex justify-between items-center">
        {title2}
        <KeyboardArrowRightIcon className="text-gray-500 text-xl" />
      </section>
    </div>
  );
};

export default SubscriptionSection;
