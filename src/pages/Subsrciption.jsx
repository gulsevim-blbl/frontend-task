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
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-purple-400 via-purple-500 to-black text-sm">
      {/* Header */}
      <header className="text-black text-center text-xl font-bold mt-3 flex items-center ">
        <button onClick={handleBacktoSettings} className="absolute left-4">
          <KeyboardArrowLeftIcon className="cursor-pointer" />
        </button>
        MusicAI
        <span className="ml-2 bg-black text-white px-2 py-1 rounded-2xl">
          PRO
        </span>
      </header>
      {/* Açıklama */}
      <p className="text-black font-medium mt-2">
        MusicAI Uygulamasının tadını çıkar!
      </p>
      {/* Abonelik Seçenekleri */}
      <div className="bg-black/50 p-2 rounded-xl mt-3 w-full max-w-sm shadow-lg border-2 border-gray-400 ">
        {/* Aylık Plan */}
        <div
          className={`flex flex-col items-start p-2 rounded-lg cursor-pointer`}
          onClick={() => setPlan("monthly")}
        >
          <div className="flex items-center space-x-3">
            <div
              className={`w-5 h-5 rounded-full border mt-auto ${
                plan === "monthly" ? "bg-white border-white" : "border-gray-400"
              }`}
            ></div>
            <span className="text-lg">Aylık</span>
          </div>
          <span className="text-base text-gray-300 ml-7">₺3.99 / aylık</span>
        </div>
        <hr className="border-gray-400" />
        {/* Yıllık Plan */}
        <div
          className={`flex flex-col items-start p-2  rounded-lg cursor-pointer`}
          onClick={() => setPlan("yearly")}
        >
          <div className="flex items-center space-x-3">
            <div
              className={`w-5 h-5 rounded-full border mt-auto ${
                plan === "yearly" ? "bg-white border-white " : "border-gray-400"
              }`}
            ></div>
            <span className="text-lg">Yıllık</span>
          </div>
          <div className="flex items-center space-x-35">
            <span className="text-base text-gray-300 ml-7">
              ₺19.99 / yıllık
            </span>
            <span className="bg-white text-black text-xs font-bold px-2 py-2 rounded-md">
              AVANTAJLI
            </span>
          </div>
        </div>
      </div>
      {/* içindekiler */}
      <div className="w-full max-w-sm">
        <h1 className="text-gray-400 m-4 text-center">İÇİNDEKİLER</h1>
        <ul className="text-gray-300 space-y-3 items-start ">
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
       <Button text="Hemen Yükselt" >
        <GiftOutlined />
       </Button>
      {/* Alt Bilgi */}
      <p className="text-gray-300 text-xs fixed bottom-1">3 gün ücretsiz dene, sonra ₺19.99 / yıllık. İstediğin zaman iptal et.</p>
    </div>
  );
};

export default Subscription;
