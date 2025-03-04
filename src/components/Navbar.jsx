import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("home");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Box
      sx={{
        width: "90%",
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#29292C",
        boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
        borderRadius: "16px",
      }}
    >
      <BottomNavigation
        sx={{ backgroundColor: "#29292C", borderRadius: "16px" }}
        value={value}
        onChange={handleChange}
        showLabels={false}
      >
        <BottomNavigationAction
          // label="Home"
          value="/"
          icon={<HomeIcon />}
          sx={{ color: value === "/" ? "#a099ff" : "white" }}
        />
        <BottomNavigationAction
          // label="Graphic"
          value="/graphic"
          icon={<GraphicEqIcon />}
          sx={{ color: value === "/" ? "#a099ff" : "white" }}
        />
        <BottomNavigationAction
          // label="Setting"
          value="/settings"
          icon={<SettingsIcon />}
          sx={{ color: value === "/" ? "#a099ff" : "white" }}
        />
      </BottomNavigation>
    </Box>
  );
}
