import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutUsPage from "./components/about/AboutUsPage";
import ContactUsPage from "./components/contact-us/ContactUsPage";
import DonatePage from "./components/donate/DonatePage";
import NotFoundPage from "./components/not-found/NotFoundPage";
import ProgramsPage from "./components/programs/ProgramsPage";

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
      path: "/programs",
      element: <ProgramsPage />,
    },
    {
      path: "/contact-us",
      element: <ContactUsPage />,
    },
    {
      path: "/donate",
      element: <DonatePage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
