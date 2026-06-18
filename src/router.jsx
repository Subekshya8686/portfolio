import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

import WebProjects from "./pages/categories/WebProjects";
import MobileProjects from "./pages/categories/MobileProjects";
import OtherProjects from "./pages/categories/OtherProjects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects/web",
        element: <WebProjects />,
      },
      {
        path: "projects/mobile",
        element: <MobileProjects />,
      },
      {
        path: "projects/other",
        element: <OtherProjects />,
      },
    ],
  },
]);