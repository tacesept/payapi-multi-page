import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
