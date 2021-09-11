import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HMSRoomProvider } from "@100mslive/hms-video-react";
import { Global, css } from "@emotion/react";
import "./index.css";
import "focus-visible/dist/focus-visible";
import App from "./App";

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <HMSRoomProvider>
      <ChakraProvider>
        <Global styles={GlobalStyles} />
        <App />
      </ChakraProvider>
    </HMSRoomProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
