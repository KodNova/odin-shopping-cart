import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Home.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import ShopPage from "./pages/Shop.tsx";
import CartPage from "./pages/Cart.tsx";
import CartContextProvider from "./contexts/CartContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "shop",
    element: <ShopPage />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </StrictMode>,
);
