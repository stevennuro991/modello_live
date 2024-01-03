// import { RouterProvider, createBrowserRouter,HashRouter ,BrowserRouter} from "react-router-dom";
// import Home from "../src/pages/Home/Home";
// import About from "../src/pages/AboutUs/About";
// import Contact from "../src/pages/ContactUs/ContactUs";
// import Layout from "./layouts/Layout";
// import Service from "./pages/Services/Service";
// import Pricing from "./pages/Pricing/pricing";
// import Cleaning from "./pages/Cleaning/cleaning";
// import ApartmentCleaning from "./pages/Cleaning/apartment-cleaning";
// import MattressCleaning from "./pages/Cleaning/mattress-cleaning";
// import SofaCleaning from "./pages/Cleaning/sofa-cleaning";
// import CarCleaning from "./pages/Cleaning/car-cleaning";
// import IndustrialCleaning from "./pages/Cleaning/industrial-cleaning";
// import GardeningAndLandscaping from "./pages/Cleaning/gardening-and-landscaping";
// import PestControl from "./pages/Cleaning/pest-control";

// const routes = [
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "pricing",
//         element: <Pricing />,
//       },
//       {
//         path: "service",
//         element: <Service />,
//       },
//       {
//         path: "cleaning-services",
//         element: <Cleaning />,
//       },
//       {
//         path: "apartment-cleaning",
//         element: <ApartmentCleaning />,
//       },
//       {
//         path: "sofa-cleaning",
//         element: <SofaCleaning />,
//       },
//       {
//         path: "mattress-cleaning",
//         element: <MattressCleaning />,
//       },
//       {
//         path: "car-cleaning",
//         element: <CarCleaning />,
//       },
//       {
//         path: "industrial-cleaning",
//         element: <IndustrialCleaning />,
//       },
//       {
//         path: "gardening-and-landscaping",
//         element: <GardeningAndLandscaping />,
//       },
//       {
//         path: "pest-control",
//         element: <PestControl />,
//       },
//     ],
//   },
// ];

// const appRouter = createBrowserRouter(routes);
// function App() {
//   return <RouterProvider router={appRouter} />;
// }

// export default App;

import { HashRouter, Routes, Route } from "react-router-dom";
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
import CarCleaning from "./pages/Cleaning/domestic-cleaning";
import IndustrialCleaning from "./pages/Cleaning/industrial-cleaning";
import GardeningAndLandscaping from "./pages/Cleaning/gardening-and-landscaping";
import PestControl from "./pages/Cleaning/pest-control";
import { Toaster } from "react-hot-toast";
import DomesticCleaning from "./pages/Cleaning/domestic-cleaning";
import Careers from "./pages/ careers/careers";
import CarpetCleaning from "./pages/Cleaning/carpet_cleaning";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="service" element={<Service />} />
          <Route path="cleaning-services" element={<Cleaning />} />
          <Route path="apartment-cleaning" element={<ApartmentCleaning />} />
          <Route path="sofa-cleaning" element={<SofaCleaning />} />
          <Route path="mattress-cleaning" element={<MattressCleaning />} />
          <Route path="car-cleaning" element={<CarCleaning />} />
          <Route path="industrial-cleaning" element={<IndustrialCleaning />} />
          <Route path="carpet-cleaning" element={<CarpetCleaning />} />
          <Route
            path="gardening-and-landscaping"
            element={<GardeningAndLandscaping />}
          />
          <Route path="pest-control" element={<PestControl />} />
          <Route
            path="domestic-and-commercial-cleaning"
            element={<DomesticCleaning />}
          />
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
      <Toaster />
    </HashRouter>
  );
}

export default App;
