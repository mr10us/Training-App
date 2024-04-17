import { createBrowserRouter } from "react-router-dom";
import { routes } from "@consts";
import { StartupMenu } from "@pages/StartupMenu";
import { Home } from "@pages/Home";
import { ChooseTrainingType } from "@pages/ChooseTrainingType";
import { BMI } from "@pages/BMI";
import { Settings } from "@pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StartupMenu />,
  },
  {
    path: routes.HOME,
    element: <Home />,
  },
  {
    path: routes.CHOOSE,
    element: <ChooseTrainingType />,
  },
  {
    path: routes.BMI,
    element: <BMI />,
  },
  {
    path: routes.SETTINGS,
    element: <Settings />,
  },
]);
