import { Provider } from "react-redux";

import appStore from "./utils/appStore";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}
