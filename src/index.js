import React from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import "./index.css";
import {Router} from "./Route"

import {RouterProvider} from "react-router-dom";


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
        <RouterProvider router={Router} />
      </ConfigProvider>
    </React.StrictMode>
  );
};
renderDOM("#test")
