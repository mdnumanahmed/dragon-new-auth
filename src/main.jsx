import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/HomePage/Home/Home.jsx";
import DataProvider from "./Provider/DataProvider.jsx";
import DetailsNewsLayout from "./layouts/DetailsNewsLayout.jsx";
import DetailsNews from "./pages/DetailsNews/DetailsNews.jsx";

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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>
);
