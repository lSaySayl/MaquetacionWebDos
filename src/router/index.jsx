import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Messages from "../pages/Messages";
import Group from "../pages/Group";
import NotFound from "../pages/NotFound";

import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFound/>
      },
      {
        path: "/messages",
        element: <Messages/>
      },
      {
        path: "/group",
        element: <Group/>
      }
    ]

    
  }
  
  

]);


