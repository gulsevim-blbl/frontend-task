import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import usersData from "../data"

const ProfileSection = () => {
  const navigate = useNavigate();

  const user = usersData[0];


  const handleChangeProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="bg-custom-section text-white m-4 rounded-xl  cursor-pointer" onClick={handleChangeProfile}>
      <NavLink onClick={handleChangeProfile}>
         <div className="p-3 flex items-center gap-3">
        <img
          src={user.img}
          alt="Avatar"
          className="w-12 h-12 rounded-full"
        />
        <p className="text-sm font-semibold flex-1">{user.name}</p>
        <KeyboardArrowRightIcon className="text-gray-500 text-xl" />
      </div>
      </NavLink>
     
    </div>
  );
};

export default ProfileSection;
