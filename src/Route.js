import { createBrowserRouter } from "react-router-dom";

import Signin from "@Authentication/Signin";
import  App  from "./App";
import Dashboard from "@Dashboard";
import TableData from "@Dashboard/Table";
import Userdata from "./components/UserData/Userdata";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />, // it should be public route in authentication layout
  },
  {
    path: "/dashboard", // it should be private route in common layout
    element: <App />,
    children: [
      {
        path: "/dashboard", // it should be private route in common layout
        element: <TableData />,
      },
      {
        path: "/dashboard/adduser", // it should be private route in common layout
        element: <Userdata />,
      },
    ],
  },
]);
