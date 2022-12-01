import { Fragment } from "react";
import Footer from "../Parts/Footer";
import Menue from "../Parts/Navbar";

const Layout1 = (props) => {
  return (
    <div>
      <Menue />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout1;
