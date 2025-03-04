import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";
import { Radio } from "antd";
import Button from "../components/Button";
import { GiftOutlined } from "@ant-design/icons";

const Subscription = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState("");

  const handleBacktoSettings = () => {
    navigate("/settings");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#a099ff]  to-black  text-sm">
      {/* Header */}
      <header className="text-black text-center text-2xl font-semibold mt-3 flex items-center ">
        <button onClick={handleBacktoSettings} className="absolute left-4">
          <KeyboardArrowLeftIcon className="cursor-pointer" />
        </button>
        MusicAI
        <span className="ml-2 mt-1  bg-black text-xs text-white px-2 py-1 rounded-2xl">
          PRO
        </span>
      </header>
      {/* Açıklama */}
      <p className="text-black font-semibold mt-2">
        MusicAI Uygulamasının tadını çıkar!
      </p>
      {/* Abonelik Seçenekleri */}
      <div className="bg-black/40 p-2 rounded-xl mt-3 w-[90%] max-w-sm sm:max-w-sm shadow-lg border-2 border-gray-500 ">
        {/* Aylık Plan */}
        <div
          className={`flex flex-col items-start p-2 rounded-lg cursor-pointer`}
          onClick={() => setPlan("monthly")}
        >
          <div className="flex items-center space-x-3">
            <div
              className={`w-5 h-5 rounded-full border mt-auto ${
                plan === "monthly" ? "bg-white border-white text-gray-500 font-bold text-center" : "border-gray-400"
              }`}
            >{plan === "monthly" && "✓"}</div>
            <span className="text-lg sm:text-base md:text-lg">Aylık</span>
          </div>
          <span className="text-sm sm:text-xs md:text-sm text-gray-300 ml-7">
            ₺3.99 / aylık
          </span>
        </div>
        <hr className="border-gray-400/20" />
        {/* Yıllık Plan */}
        <div
          className={`flex flex-col items-start p-2  rounded-lg cursor-pointer`}
          onClick={() => setPlan("yearly")}
        >
          <div className="flex items-center space-x-3">
            <div
              className={`w-5 h-5 rounded-full border mt-auto ${
                plan === "yearly" ? "bg-white border-white text-gray-500 font-bold text-center" : "border-gray-400"
              }`}
            >{plan === "yearly" && "✓"}</div>
            <span className="text-lg sm:text-base md:text-lg">Yıllık</span>
          </div>
          <div className="flex items-center w-full max-w-sm">
            <span className="text-sm sm:text-xs md:text-sm text-gray-300 ml-7">
              ₺19.99 / yıllık
            </span>
            <span className="bg-white text-black text-xs font-semibold px-2 py-2 rounded-md ml-auto">
              AVANTAJLI
            </span>
          </div>
        </div>
      </div>
      {/* içindekiler */}
      <div className="w-full max-w-sm">
        <h1 className="text-gray-400 m-5 text-center font-semibold">İÇİNDEKİLER</h1>
        <ul className="text-gray-300 space-y-3 items-start ml-5 font-semibold">
          <li>
            <img src="share.png" alt="share" className="inline-block mr-5" />
            Lorem ipsum dolor sit amet
          </li>
          <li>
            <img src="share.png" alt="share" className="inline-block mr-5" />
            Lorem ipsum dolor sit amet
          </li>
          <li>
            <img src="share.png" alt="share" className="inline-block mr-5" />
            Lorem ipsum dolor sit amet
          </li>
          <li>
            <img src="share.png" alt="share" className="inline-block mr-5" />
            Lorem ipsum dolor sit amet
          </li>
          <li>
            <img src="share.png" alt="share" className="inline-block mr-5" />
            Lorem ipsum dolor sit amet
          </li>
          <li>
            <img src="share.png" alt="share" className="inline-block mr-5" />
            Lorem ipsum dolor sit amet
          </li>
        </ul>
      </div>
      {/* Button */}
      <Button text="Hemen Yükselt">
        <GiftOutlined />
      </Button>
      {/* Alt Bilgi */}
      <p className="text-gray-300 text-xs fixed bottom-1 font-semibold">
        3 gün ücretsiz dene, sonra ₺19.99 / yıllık. İstediğin zaman iptal et.
      </p>
    </div>
  );
};

export default Subscription;
