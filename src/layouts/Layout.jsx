import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Layout = () => {
  const [scroll, setScroll] = useState(true);

  return (
    <div>
      <Navbar setScroll={setScroll} />
      <div>{scroll && <Outlet />}</div>
      {scroll && <Footer />}
    </div>
  );
};

export default Layout;
