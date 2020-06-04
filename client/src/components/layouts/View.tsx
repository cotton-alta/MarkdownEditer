import React, { useContext, useEffect, useState } from "react";
import marked from "marked";

import "../../assets/style/view.scss";

import { TextContext } from "../../pages/Detail";

const View: React.FC = () => {
  const { state, dispatch } = useContext(TextContext);
  
  return (
    <div className="view-wrapper">
      <div
        className="view-main"
        dangerouslySetInnerHTML={{__html: marked(state.text)}}
        >
      </div>
    </div>
  )
};

export default View;