import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/home/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
