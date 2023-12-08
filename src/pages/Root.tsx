import { Outlet } from "react-router-dom";
import Footer from "../assets/components/Footer/Footer";
import Navigation from "../assets/components/Navigation/Navigation";

export default function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
