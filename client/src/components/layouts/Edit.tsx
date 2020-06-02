import React, { useRef, useState, useLayoutEffect } from "react";
import * as Monaco from "monaco-editor/esm/vs/editor/editor.api";

import "../../assets/style/edit.scss";

const Edit: React.FC = () => {
  const editorDiv = useRef<HTMLDivElement>(null);
  
  // 後でuseReducerに変える
  const [editor, setEditor] = useState<Monaco.editor.IStandaloneCodeEditor | null>(null);
  
  useLayoutEffect(() => {
    const editorInit = Monaco.editor.create(editorDiv.current!, {
      value: "",
      language: "markdown",
      automaticLayout: true
    });
    editorInit.focus();
    setEditor(editorInit);
    return () => {
      editorInit.dispose();
    };
  }, []);

  return (
    <div className="edit-wrapper">
      <div ref={editorDiv} className="edit-main" />
    </div>
  )
};

export default Edit;