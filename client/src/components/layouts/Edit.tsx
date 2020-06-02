import React, { useState, useContext } from "react";
import MonacoEditor from 'react-monaco-editor';

import { TextContext } from "../../pages/Detail";

import "../../assets/style/edit.scss";

const Edit: React.FC = () => {
  const { state, dispatch } = useContext(TextContext);

  const [text, setText] = useState("");
  let editor_size: any = null;

  const inputText = (newValue: string, e: any) => {
    dispatch({
      type: "changeText",
      payload: {
        text: text
      }
    });
    setText(newValue);
    console.log(newValue);
  };

  const editorDidMount = (editor: any) => {
    editor_size = editor
  }

  window.onresize = () => {
    if(editor_size.layout()) {
      editor_size.layout();
    } else {
      return;
    }
  };

  return (
    <div className="edit-wrapper">
      <MonacoEditor 
        width="100%"
        height="100vh"
        language="markdown"
        theme="vs-dark"
        value={text}
        onChange={inputText}
        editorDidMount={editorDidMount}
        options={{
          minimap: {
            enabled: false
          },
          fontSize: 18
        }}
      />
    </div>
  )
};

export { Edit };