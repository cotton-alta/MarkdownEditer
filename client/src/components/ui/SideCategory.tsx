import React from "react";

import CreateButton from "../ui/CreateButton";

import "../../assets/style/category.scss";

const SideCategory: React.FC = () => {
  return (
    <div className="category-wrapper">
      <div className="category-name">
        <a href="localhost:3000/edit/5edf9fcf8883a08621f5228d">sampleページ</a>
      </div>
      <CreateButton />
    </div>
  )
};

export default SideCategory;