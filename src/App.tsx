import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import routerConfig from "./router/routerConfig";

function App() {
  const router = createBrowserRouter(routerConfig, {
    basename: import.meta.env.BASE_URL,
  });

  return <RouterProvider router={router} />;
}

export default App;
