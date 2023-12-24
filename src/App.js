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
import IndustrialCleaning from "./pages/Cleaning/industrial-cleaning";
import GardeningAndLandscaping from "./pages/Cleaning/gardening-and-landscaping";
import PestControl from "./pages/Cleaning/pest-control";

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
      {
        path: "industrial-cleaning",
        element: <IndustrialCleaning />,
      },
      {
        path: "gardening-and-landscaping",
        element: <GardeningAndLandscaping />,
      },
      {
        path: "pest-control",
        element: <PestControl />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
