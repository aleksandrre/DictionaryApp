import React, { useContext, useState } from "react";
import logoBook from "../../assets/logo.svg";
import "./header.css";
import { Switch } from "antd";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";
import { appContext } from "../../App";
const Header = () => {
  const { moon, setMoon } = useContext(appContext);
  const onchange = () => setMoon(!moon);

  return (
    <div className="mainDiv">
      <img src={logoBook} alt="" />
      <div className="logoDiv">
        <Switch onChange={onchange} />

        {moon ? <NightlightRoundIcon /> : <LightModeIcon />}
      </div>
    </div>
  );
};

export default Header;
