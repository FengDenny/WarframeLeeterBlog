import { useRoutes } from "react-router-dom";
import Home from "./View/Home/Home.jsx";
import Achievements from "./View/Achievements/Achievements.jsx";
export const Main = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/achievements", element: <Achievements /> },
  ]);

  return routes;
};
