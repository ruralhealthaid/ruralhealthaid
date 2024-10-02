import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutUs from "./components/about/AboutUs";

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
    {
      path: "/about-us",
      element: <AboutUs />,
    },
  ]);
  // return <RouterProvider router={router}></RouterProvider>;
  return <h3>I am working</h3>;
}

export default App;
