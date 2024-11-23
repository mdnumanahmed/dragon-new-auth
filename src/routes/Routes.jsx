import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage/Home/Home";
import DetailsNewsLayout from "../layouts/DetailsNewsLayout";
import DetailsNews from "../pages/DetailsNews/DetailsNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news/category/:category_id",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
  {
    path: "news",
    element: <DetailsNewsLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/news/:newsId",
        element: (
          <PrivateRoute>
            <DetailsNews />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "user",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
