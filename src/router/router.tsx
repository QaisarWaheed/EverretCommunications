import { createBrowserRouter } from "react-router";

import DashboardLayout from "../Layout/Navbar";
import Contact from "../pages/Contact";
import About from "../pages/About";
import BookTalent from "../pages/BookTalent";
import OurTalent from "../pages/OurTalent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/book-talent",
        element: <BookTalent />,
      },
      {
        path: "/our-talent",
        element: <OurTalent />,
      },
    ],
  },
]);
