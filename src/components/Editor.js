import { Box } from "@mui/material";
import "./Editor.css";
import React from "react";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

const Editor = ({ heading }) => {
  return (
    <>
      <Box>
        <div className="header">
          <header className="heading">
            <span className="html">/</span>&nbsp;&nbsp;{heading}
          </header>
          <CloseFullscreenIcon />
        </div>
        <ControlledEditor
          className="controlled-editor"
          options={{
            theme: "material",
            lineNumbers: "true",
          }}
        />
      </Box>
    </>
  );
};

export default Editor;
