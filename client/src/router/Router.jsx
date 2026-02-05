import { createBrowserRouter } from "react-router"; 
import Layout from "../component/layout";
import Page from "../Pages/page";
import MyCart from "../Pages/MyCart";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // ใช้ index: true แทน path: "/" ซ้ำ
        element: <Page />,
      },
      {
        path: "cart", 
        element: <MyCart />,
      },
    ],
  },
]);

export default Router;