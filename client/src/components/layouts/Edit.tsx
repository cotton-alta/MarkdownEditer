import React, { useState } from "react";
import MonacoEditor from 'react-monaco-editor';

import "../../assets/style/edit.scss";

const Edit: React.FC = () => {

  const [text, setText] = useState("");
  let editor_size: any = null;

  const inputText = (newValue: string, e: any) => {
    setText(newValue);
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

export default Edit;