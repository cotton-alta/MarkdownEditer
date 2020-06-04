import React, { useState, useContext, useEffect } from "react";
// import MonacoEditor from 'react-monaco-editor';
import brace from 'brace';
import Editor from "react-ace";

import "brace/mode/markdown";
import "brace/theme/terminal";

import { TextContext } from "../../pages/Detail";

import "../../assets/style/edit.scss";

const Edit: React.FC = () => {
  const { state, dispatch } = useContext(TextContext);

  const [text, setText] = useState("");

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
  }, [text]);

  return (
    <div className="edit-wrapper">
      <Editor 
        className="edit-main"
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
    </div>
  )
};

export { Edit };