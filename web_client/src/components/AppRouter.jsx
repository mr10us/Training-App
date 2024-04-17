import { createBrowserRouter } from "react-router-dom";
import { StartupMenu } from "@pages/StartupMenu";
import { Home } from "@pages/Home";
import { routes } from "@consts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StartupMenu />,
  },
  {
    path: routes.HOME,
    element: <Home />,
  },
]);
