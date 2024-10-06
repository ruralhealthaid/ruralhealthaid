import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutUsPage from "./components/about/AboutUsPage";
import ContactUsPage from "./components/contact-us/ContactUsPage";
import DonatePage from "./components/donate/DonatePage";

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
      element: <AboutUsPage />,
    },
    {
      path: "/contact-us",
      element: <ContactUsPage />,
    },
    {
      path: "/donate",
      element: <DonatePage />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
