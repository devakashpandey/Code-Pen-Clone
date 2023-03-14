import React from "react";
import { Box } from "@mui/material";
import { UseDataValue } from "../context/DataProvider";

const Result = () => {
  const { html, css, js } = UseDataValue();

  const srcCode = `
       <html>
         <body> ${html}</body>
         <style>${css} </style>
         <script>${js} </script>
       </html>
    `;

  return (
    <Box className="result">
      <iframe
        srcDoc={srcCode}
        title="output"
        sandbox="allow-scripts"
        height="240vh"
        width="99%"
        frameBorder={0}
      />
    </Box>
  );
};

export default Result;
