import { useRoutes } from "react-router-dom";
import Home from "./View/Home/Home.jsx";
import Achievements from "./View/Achievements/Achievements.jsx";
import Solutions from "./View/Solutions/Solutions.jsx";
export const Main = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/achievements", element: <Achievements /> },
    {
      path: "/solutions",
      element: <Solutions />,
    },
  ]);

  return routes;
};
