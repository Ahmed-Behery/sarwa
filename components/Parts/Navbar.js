import ToArabicIcon from "../UI/ToArabicIcon";
import style from "./Navbar.module.css";
import AnimatedDropdown from "./AnimatedDropdown";
import { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image";

const Menue = () => {
  const [url, seturl] = useState("/sarwa-insurance");
  const { t, lang } = useTranslation("common");
  const location = useRouter();
  const [active, setActive] = useState(false);

  let setBN = () => {
    setActive(true);
  };

  useEffect(() => {
    if (location.pathname.includes("/sarwa-Life")) {
      seturl("/sarwa-Life");
    }
  }, [location]);

  var backgroundColor = "";
  location.pathname.includes("/sarwa-Life")
    ? (backgroundColor = "#006958")
    : (backgroundColor = "#01528a");

  return (
    <div className={style.menue}>
      <Navbar
        dir={t("dir")}
        style={{ backgroundColor: backgroundColor }}
        className={
          t("padding-ar") +
          " " +
          style.nav_ +
          " " +
          style.navbar +
          " " +
          style.fixed_c +
          " navbar-expand-lg navbar-dark " +
          style.navbar_dark
        }
        id="nav"
        expand="lg"
      >
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
          }}
          className={style.navContent}
        >
          <Navbar.Brand className={style.logo}>
            <Link href={url}>
              <a>
                <Image
                  width={280}
                  height={110}
                  className="banner-img"
                  alt="Sarwa Insurance Logo"
                  src={
                    location.pathname.includes("sarwa-Life")
                      ? "https://contact-clients-dev.s3.amazonaws.com/NavbarSarwaLifeLogo.webp"
                      : "https://contact-clients-dev.s3.amazonaws.com/NavbarSarwaInsLogo.webp"
                  }
                />
              </a>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle
            className={t("toggel") + " " + t("text-align1") + "  shadow-none border-0"}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id={style.basic_navbar_nav}>
            <Nav className="nav-contain overflow-hidden" id="navbar">
              <ul
                className={
                  lang === "en"
                    ? style.lang +
                      " " +
                      style.navbar_nav +
                      " align-items-center d-flex"
                    : style.navbar_nav + " align-items-center navbar-nav d-flex"
                }
              >
                <li className={style.nav_item}>
                  <Nav.Link id="nab" className={style.nav_link}>
                    <Link href="/">{t("mainPage")}</Link>
                  </Nav.Link>
                </li>

                <li className={style.nav_item}>
                  <Link
                    href={
                      location.pathname.includes("/sarwa-Life")
                        ? "/sarwa-Life"
                        : "/sarwa-insurance"
                    }
                  >
                    <a
                      className={
                        location.pathname == "/sarwa-Life" ||
                        location.pathname == "/sarwa-insurance"
                          ? style.acc
                          : ""
                      }
                    >
                      {location.pathname.includes("/sarwa-Life")
                        ? t("homeLife")
                        : t("home")}
                    </a>
                  </Link>
                </li>

                <li className={style.nav_item}>
                  <Link
                    href={
                      location.pathname.includes("/sarwa-Life")
                        ? "/sarwa-Life/about"
                        : "/sarwa-insurance/about"
                    }
                  >
                    <a
                      className={
                        location.pathname.includes("about") ? style.acc : ""
                      }
                    >
                      {t("aboutUs")}
                    </a>
                  </Link>
                </li>

                <li className={style.nav_item}>
                  <Link
                    href={
                      location.pathname.includes("/sarwa-Life")
                        ? "/sarwa-Life/product/retail"
                        : "/sarwa-insurance/product/retail"
                    }
                  >
                    <a
                      className={
                        location.pathname.includes("produ") ? style.acc : ""
                      }
                    >
                      {t("ourProduct")}
                    </a>
                  </Link>
                </li>

                {location.pathname.includes("sarwa-Life") ? (
                  <AnimatedDropdown />
                ) : (
                  ""
                )}

                {location.pathname.includes("sarwa-Life") ? (
                  <li className={style.nav_item}>
                    <Link href="/sarwa-Life/media">
                      <a
                        className={
                          location.pathname.includes("media") ? style.acc : ""
                        }
                      >
                        {t("media")}
                      </a>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav_item}>
                    <Link href="/sarwa-insurance/media">
                      <a
                        className={
                          location.pathname.includes("media") ? style.acc : ""
                        }
                      >
                        {t("media")}
                      </a>
                    </Link>
                  </li>
                )}

                <li className={style.nav_item}>
                  <Link
                    href={
                      location.pathname.includes("/sarwa-Life")
                        ? "/sarwa-Life/JoinUs"
                        : "/sarwa-insurance/JoinUs"
                    }
                  >
                    <a
                      className={
                        location.pathname.includes("JoinUs") ? style.acc : ""
                      }
                    >
                      {t("career")}
                    </a>
                  </Link>
                </li>

                <li className={style.nav_item}>
                  <Link
                    href={
                      location.pathname.includes("/sarwa-Life")
                        ? "/sarwa-Life/ContactUs"
                        : "/sarwa-insurance/ContactUs"
                    }
                  >
                    <a
                      className={
                        location.pathname.includes("Contact") ? style.acc : ""
                      }
                    >
                      {t("contactUs")}
                    </a>
                  </Link>
                </li>

                <li className={style.nav_item}>
                  <a className={style.nav_link}>
                    <ToArabicIcon />
                  </a>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Menue;
