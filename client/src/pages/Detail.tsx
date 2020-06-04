import React, { useReducer, useEffect } from "react";

import Header from "../components/layouts/Header";
import Side from "../components/layouts/Side";
import { Edit } from "../components/layouts/Edit";
import View from "../components/layouts/View";

import { detailReducer } from "../actions/detailReducer";

import "../assets/style/detail.scss";

const TextContext = React.createContext<any>(null);
const initText = {
  text: ""
}

const Detail: React.FC = () => {
  const [ state, dispatch ] = useReducer(detailReducer, initText);
  const value = { state, dispatch };

  useEffect(() => {
    console.log(state);
  }, [ state ]);

  return (
    <div className="detail-container">
      <TextContext.Provider value={value}>
        <Header />
        {/* <Side /> */}
        <View />
        <Edit />
      </TextContext.Provider>
    </div>
  )
};

export {
  TextContext,
  initText,
  Detail
} 