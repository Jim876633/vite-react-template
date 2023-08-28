import Home from "../pages/Home";
import Test from "../pages/Test";

const routerConfig = [
  { path: "/", element: <Home /> },
  {
    path: "/test",
    element: <Test />,
  },
];

export default routerConfig;
