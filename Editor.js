import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "./index.css";

function Editor(props) {
  const { language, displayName, value, onChange } = props;
  const [open, setOpen] = useState("");

  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className={`editorContainer ${open ? "" : "collapsed"}`}>
      <div className="editorTitle">
        {displayName}
        <button onClick={() => setOpen((prevOpen) => !prevOpen)}>O/C</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
}

export default Editor;





