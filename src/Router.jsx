import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage"
import ErrorPage from "./components/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:name",
      element: <Homepage />,
      errorElement: <ErrorPage />,
    },
    {
      //This is the product preview page so customer can
      //inspect the product and choose to add item to cart.
      path: "/:name/:category",
      element: <Homepage />,
      errorElement: <ErrorPage />,
    },
    {
      //This is the product preview page so customer can
      //inspect the product and choose to add item to cart.
      path: "/:name/:category/:product",
      element: <Homepage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;