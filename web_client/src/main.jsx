import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "@components/AppRouter.jsx";
import { App, ConfigProvider } from "antd";

// main: "#f50057", // другой цвет

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: "#ffb800",
      },
    }}
  >
    <App>
      <RouterProvider router={router} />
    </App>
  </ConfigProvider>
);
