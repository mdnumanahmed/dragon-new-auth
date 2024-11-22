import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage/Home/Home";
import DetailsNewsLayout from "../layouts/DetailsNewsLayout";
import DetailsNews from "../pages/DetailsNews/DetailsNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news/category/:category_id",
        element: <Home />,
      },
    ],
  },
  {
    path: "news",
    element: <DetailsNewsLayout />,
    children: [
      {
        path: "/news/:newsId",
        element: <DetailsNews />,
      },
    ],
  },
  {
    path: "login",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
]);

export default router;
