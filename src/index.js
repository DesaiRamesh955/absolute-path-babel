import React from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import App from "./App"
import "./index.css";

window.renderDOM = (htmlElement = null) => {
  const elem = htmlElement
    ? document.querySelector(htmlElement)
    : document.querySelector("#root");
  console.log(htmlElement);
  const root = createRoot(elem);
  root.render(
    <React.StrictMode>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1677ff",
          },
        }}
      >
        <App />
      </ConfigProvider>
    </React.StrictMode>
  );
};
renderDOM("#test")
