import React, { useContext } from "react";
import marked from "marked";

import "../../assets/style/view.scss";
import "../../assets/style/markdown.scss";

import { TextContext } from "../../pages/Detail";

const View: React.FC = () => {
  const { state, dispatch } = useContext(TextContext);

  return (
    <div className="view-wrapper">
      <div
        dangerouslySetInnerHTML={{__html: marked(state.text)}}
      />
    </div>
  )
};

export default View;