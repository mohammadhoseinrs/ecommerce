import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/notfound/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:'/*' , element:<NotFound />
  }
];

export default routes;