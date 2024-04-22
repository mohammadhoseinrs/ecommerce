import Home from "./pages/Home/Home";
import ForgetPassword from "./pages/forgetPassword/ForgetPassword";
import Login from "./pages/login/Login";
import NotFound from "./pages/notfound/NotFound";
import SignUp from "./pages/signup/SignUp";

const routes = [
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgetpassword",
    element: <ForgetPassword />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];

export default routes;
