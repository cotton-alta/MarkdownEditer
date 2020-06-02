import React from "react";

import Header from "../components/layouts/Header";
import Side from "../components/layouts/Side";
import Edit from "../components/layouts/Edit";
import View from "../components/layouts/View";

import "../assets/style/detail.scss";

const Detail: React.FC = () => {
  return (
    <div className="detail-container">
      <Header />
      <Side />
      <Edit />
      <View />
    </div>
  )
};

export default Detail;