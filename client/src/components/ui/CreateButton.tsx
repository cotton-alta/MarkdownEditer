import React from "react";

import "../../assets/style/button.scss";

const CreateButton: React.FC = () => {
  const createPage = () => {
    // reducerでページ全体に対してのabsoluteをかけたポップアップメニューを出す
    console.log("click!");
  };
  
  return (
    <div 
      className="c-button-wrapper"
      onClick={createPage}
    >
    </div>
  )
};

export default CreateButton;