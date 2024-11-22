import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import DataProvider from "./Provider/DataProvider.jsx";
import router from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>
);
