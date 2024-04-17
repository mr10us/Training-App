import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { StartupMenu } from "./StartupMenu";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<StartupMenu />} />)
);
