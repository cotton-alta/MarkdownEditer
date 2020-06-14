import React from "react";

import SideCategory from "../ui/SideCategory";

import "../../assets/style/side.scss";

const Side: React.FC = () => {
  return (
    <div className="side-wrapper">
      <SideCategory />
    </div>
  )
};

export default Side;