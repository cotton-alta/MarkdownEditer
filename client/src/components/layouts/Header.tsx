import React from "react";

import ModeButton from "../ui/ModeButton";

import "../../assets/style/header.scss";

const Header: React.FC = () => {
  return (
    <div className="header-wrapper">
      <div className="header-button">
        <ModeButton />
      </div>
    </div>
  )
};

export default Header;