import "./App.css";

import { useLocation, useRoutes } from "react-router-dom";
import routes from "./routes";
import { useEffect } from "react";
const App = () => {
  let router = useRoutes(routes);
  return (
    <>
      <div className="app">{router}</div>
    </>
  );
};

export default App;
