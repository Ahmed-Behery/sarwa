import Menue from "./Navbar";
import HeroSectio from "./HeroSection";
import Cards from "./Cards";
import React , {Fragment} from "react";
// import News from "./News";
import Footer from "./Footer";
import About from "./About";
import { Animated } from "react-animated-css";
// import SocialMedia from "../Components/Parts/SocialMedia";

const HomeLayout = () => {
 
  return (
    <Fragment>
      <Animated
      animationIn="bounceInLeft"
      animationOut="fadeOut"
      isVisible={true}
      ></Animated>
      <Menue />
      <HeroSectio />
      <About />
      <Cards />
      {/*<News />*/}
      <Footer />
    </Fragment>
  );
  
};

export default HomeLayout;
