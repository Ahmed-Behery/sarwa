import { Link, NavLink } from "next/link";
import React from "react";
import ToArabicIcon from "../UI/ToArabicIcon";
// import "./Navbar.css";
import { createPopper } from "@popperjs/core";
import { Dropdown } from "react-bootstrap";
import UnopDropdown from "unop-react-dropdown";
import AnimatedDropdown from "./AnimatedDropdown";
// import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const NavbarL = () => {
  const [t, i18n] = useTranslation();
  const [navBg, setNavBg] = React.useState("red");
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/sarwa-Life") {
      setNavBg("yellow");
    } else {
      setNavBg("red");
    }
  }, [location]);
  return (
    <nav
      style={{ backgroundColor: navBg }}
      className="nav_ navbar fixed-c navbar-expand-lg navbar-dark"
    >
      <div className="logo">
        <NavLink to={"knkl"}>
          <picture>
            <source srcSet="./images/SarwaLifeNavLogo.webp" type="image/webp" />
            <img
              alt="Sarwa Life Logo" 
              src="./images/SarwaLifeNavLogo.webp"
              width="280"
              height="auto"
            />
          </picture>
        </NavLink>
      </div>
      <div>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <NavLink
                to="/sarwa-Life"
                className=""
                href="#"
                activeClassName="active-c"
              >
                {t("home1")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                activeClassName="active-c"
                to="/sarwa-Life/about"
                active
                ClassName="active-c"
              >
                ABOUT US
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink active ClassName="active-c" to="/sarwa-Life/products">
                OUR PRODUCTS
              </NavLink>
            </li>
            <li>
              <AnimatedDropdown />
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active-c" to="/sarwa-Life/media">
                MEDIA
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink activeClassName="active-c" to="/sarwa-Life/join-us">
                JOIN US
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink activeClassName="active-c" to="/sarwa-Life/contact">
                CONTACT US
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="main-bt" to="/">
                Main Page
              </NavLink>
            </li>

            <li className="nav-item">
              <a className="nav-link">
                <ToArabicIcon />
              </a>
            </li>
            <form className="d-flex align-self-stretch pform">
              <input
                className="form-control search shadow-none"
                type="search"
                placeholder="Search"
              />
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarL;
