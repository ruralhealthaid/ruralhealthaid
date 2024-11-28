import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutUsPage from "./components/about/AboutUsPage";
import ContactUsPage from "./components/contact-us/ContactUsPage";
import DonatePage from "./components/partner/PartnerPage";
import NotFoundPage from "./components/not-found/NotFoundPage";
import ProgramsPage from "./components/programs/ProgramsPage";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/http/http";

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
      path: "/partnership",
      element: <DonatePage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
