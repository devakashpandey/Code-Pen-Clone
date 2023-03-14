import { Box } from "@mui/material";
import "./Editor.css";
import React from "react";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2"; // editor package
// editor css
import "codemirror/lib/codemirror.css"; 
import "codemirror/theme/material.css";
// importing editor supportive languages
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
          className="controlled-editor"  // default class for extra classname
          options={{
            theme: "material",
            lineNumbers: "true",  // for showing the numbers
          }}
        />

      </Box>
    </>
  );
};

export default Editor;
