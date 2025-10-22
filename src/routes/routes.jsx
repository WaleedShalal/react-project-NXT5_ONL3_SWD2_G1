import { lazy, Suspense } from "react";

import { createBrowserRouter } from "react-router";
// Layouts
import MainLayout from "@/Layout/MainLayout";
import AuthLayout from "@/Layout/AuthLayout";
// Pages
import Home from "@/pages/Home/Home";
import Admin from "@/pages/Admin/Admin";
import Cart from "@/pages/Cart/Cart";
import Category from "@/pages/Category/Category";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import NotFound from "@/pages/NotFound/NotFound";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import authMiddleware from "./middlewares/authMiddleware";
// import Products from "@/pages/Products/Products";
import Users from "@/pages/Users/Users";
import apis from "@/services/apis";

const Products = lazy(() => import("@/pages/Products/Products"));

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        Component: MainLayout,
        children: [
          {
            index: true,
            Component: Home,
          },
          {
            path: "admin",
            Component: Admin,
            middleware: [authMiddleware],
          },
          {
            path: "cart",
            Component: Cart,
          },
          {
            path: "category",
            Component: Category,
          },
          {
            path: "products",
            Component: () => (
              <Suspense fallback={<div>loading products page ...</div>}>
                <Products />
              </Suspense>
            ),
            // children: [
            //   {
            //     path: "product-details/:id",
            //     Component: ProductDetails,
            //   },
            // ],
          },
          {
            path: "product-details/:id",
            Component: ProductDetails,
            loader: async (parms) => {
              // for (let i = 0; i < 100000; i++) {
              //   console.log("Loeader", i);
              // }
              console.log("🚀 ~ parms:", parms);
            },
          },
          {
            path: "users",
            Component: Users,
            loader: async () => {
              const data = await apis.getAllUsers();
              return data;
            },
          },
        ],
      },
      {
        Component: AuthLayout,
        children: [
          {
            path: "login",
            Component: Login,
          },
          {
            path: "register",
            Component: Register,
            action: async ({ request }) => {
              let formData = await request.formData();
              const data = Object.fromEntries(formData.entries());

              console.log("🚀 ~ formData:", data);
              return { message: "Success add new user" };
            },
          },
        ],
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
