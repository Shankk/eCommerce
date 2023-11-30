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
  ]);

  return <RouterProvider router={router} />;
};

export default Router;