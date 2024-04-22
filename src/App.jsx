
import "./App.css";

import { useLocation, useRoutes } from "react-router-dom";
import routes from "./routes";
const App = () => {
  const location=useLocation()
  console.log(location);
  let router=useRoutes(routes)
  return (
    <>
      <div className="app">
        {router}
      </div>
    </>
  );
};

export default App;
