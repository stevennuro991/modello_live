import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import About from "../src/pages/AboutUs/About";
import Contact from "../src/pages/ContactUs/ContactUs";
import Layout from "./layouts/Layout";
import Service from "./pages/Services/Service";
import Pricing from "./pages/Pricing/pricing";
import Cleaning from "./pages/Cleaning/cleaning";
import ApartmentCleaning from "./pages/Cleaning/apartment-cleaning";
import MattressCleaning from "./pages/Cleaning/mattress-cleaning";
import SofaCleaning from "./pages/Cleaning/sofa-cleaning";
import CarCleaning from "./pages/Cleaning/car-cleaning";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "cleaning-services",
        element: <Cleaning />,
      },
      {
        path: "apartment-cleaning",
        element: <ApartmentCleaning />,
      },
      {
        path: "sofa-cleaning",
        element: <SofaCleaning />,
      },
      {
        path: "mattress-cleaning",
        element: <MattressCleaning />,
      },
      {
        path: "car-cleaning",
        element: <CarCleaning />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
