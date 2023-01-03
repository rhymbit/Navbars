import React from "react";
import ReactDOMServer from "react-dom/server";
import Navbar from "./App";

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Navbar />
    </React.StrictMode>
  );
  return { html };
}
