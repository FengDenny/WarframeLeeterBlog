import { useRoutes } from "react-router-dom";
import Home from "./View/Home/Home.jsx";

export const Main = () => {
  let routes = useRoutes([{ path: "/", element: <Home /> }]);

  return routes;
};
