import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from ".././asset/codepen.png";

const Header = () => {
  return (
    <>
      <AppBar style={{ backgroundColor: "black" }} position="static">
        <Toolbar>
          <img
            src={logo}
            alt=""
            width="35px"
            style={{ color: "white", cursor: "pointer", marginLeft: -10 }}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
