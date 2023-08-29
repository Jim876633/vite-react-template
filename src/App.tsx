import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import routerConfig from "./router/routerConfig";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const router = createBrowserRouter(routerConfig, {
    basename: import.meta.env.BASE_URL,
  });

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
