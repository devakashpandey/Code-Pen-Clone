import { Box } from "@mui/material";
import "./Editor.css";
import React from "react";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

const Editor = () => {
  return (
    <>
      <Box>
        <Box className="heading">
          <header className="heading">
            <span className="html">/</span>HTML
          </header>
          <CloseFullscreenIcon />
        </Box>
        <Box></Box>
      </Box>
    </>
  );
};

export default Editor;
