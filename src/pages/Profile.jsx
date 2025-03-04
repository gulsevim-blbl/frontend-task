import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { GoPerson } from "react-icons/go";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import usersData from "../data";

const Profile = () => {
  const navigate = useNavigate();

  const handlerBacktoPage = () => {
    navigate("/settings");
  };

  const user = usersData[0];
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = () => {
    user.name = name;
    user.phone = phone;
    user.email = email;
  };

  return (
    <div className="min-h-screen flex flex-col items-center text-sm p-4">
      <header className="text-white text-center  flex items-center ">
        <button className="absolute left-4 p-1 bg-gray-600/20 rounded-lg flex items-center justify-center">
          <KeyboardArrowLeftIcon
            className="cursor-pointer"
            onClick={handlerBacktoPage}
          />
        </button>
        <p className="text-lg">Profil</p>
      </header>

      <p className="flex text-xl font-semibold mt-6 mb-2 gap-2">
        Profilini Düzenle
        <img src="/Profil.png" alt="profile iconu"/>
      </p>
      <Stack position="relative">
        <Avatar
          alt={user.name}
          src={user.img}
          sx={{ width: 96, height: 96, marginTop: 2 }}
        />
        <img
          src="/Button.png"
          alt="button"
          className="absolute bottom-0 right-0 w-7 h-7 cursor-pointer"
        />
      </Stack>
      <div className="w-full max-w-md space-y-4  mt-10">
        <div className="flex items-center bg-custom-section rounded-xl p-4 w-full">
          <span className="text-white font-bold text-xl mr-5 ">
            <GoPerson />
          </span>
          <input
            type="text"
            placeholder="Ad Soyad"
            className="w-full bg-transparent text-white text-lg outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center bg-custom-section rounded-xl p-4">
          <span className="text-white font-bold text-xl mr-5">
            <LuPhone />
          </span>
          <input
            type="tel"
            placeholder="Telefon Numarası"
            className="w-full bg-transparent text-white text-lg outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex items-center bg-custom-section rounded-xl p-4">
          <span className="text-white font-bold text-xl mr-5">
            <MdOutlineEmail />
          </span>
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent text-white text-lg outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <Button text="Güncelle" onClick={handleUpdate} />
    </div>
  );
};

export default Profile;
