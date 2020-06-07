import React, { useState, useContext, useEffect } from "react";
// import MonacoEditor from 'react-monaco-editor';
import brace from 'brace';
import Editor from "react-ace";
import io from "socket.io-client";

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

const Edit: React.FC = () => {
  const { state, dispatch } = useContext(TextContext);

  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const inputText = (newValue: string) => {
    setText(newValue);
  };

  useEffect(() => {
    dispatch({
      type: "changeText",
      payload: {
        text: text
      }
    });
    setCount(count + 1);
    if(count === 5) {
      socket.emit("change text", text);
      setCount(0);
    }
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