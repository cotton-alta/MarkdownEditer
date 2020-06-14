import React, { useState, useContext, useEffect } from "react";
import brace from 'brace';
import Editor from "react-ace";
import io from "socket.io-client";
import { useParams } from "react-router-dom";

import "brace/mode/markdown";
import "brace/theme/terminal";

import { TextContext } from "../../pages/Detail";

import "../../assets/style/edit.scss";

const socket = io.connect("http://localhost:4000", {
  transports: [ 'websocket' ]
});

socket.on("connect", () => {
  socket.emit("create connection");
});

// 同期用コード
// let serverFlag = false;

// socket.on("server change", (text: string) => {
//   console.log("data catch!")
//   serverFlag = true;
// });

const Edit: React.FC = () => {
  const { state, dispatch } = useContext(TextContext);
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const { edit } = useParams();
  
  const inputText = (newValue: string) => {
    setText(newValue);
  };

  
  useEffect(() => {
    // let path = "5edf9fcf8883a08621f5228d";
    let initData: string = "";
    socket.emit("path connection", edit);
    socket.on("init data", (data: string) => {
      initData = data;
      setText(initData);
    });
  }, []);
  
  useEffect(() => {
    // if(serverFlag === false) {
      dispatch({
        type: "changeText",
        payload: {
          text: text
        }
      });
      socket.emit("change text", { text: text, path: edit });
    // }
    // serverFlag = false;
  }, [text]);

  return (
    <Editor
      className="edit-wrapper"
      mode="markdown"
      theme="terminal"
      height="null"
      width="null"
      fontSize={18}
      value={text}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{$blockScrolling: true}}
      onChange={inputText}
    />
  )
};

export { Edit };