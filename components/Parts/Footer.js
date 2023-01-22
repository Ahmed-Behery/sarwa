import style from "./Footer.module.css";
import React from "react";
import SocialMedia from "./SocialMedia";
import  Link  from 'next/link'
import { useRouter } from 'next/router'
import { Navbar, NavbarBrand, NavDropdown, Nav } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image'
import { height } from "@mui/system";

const Footer = () => {
  const {t,lang} = useTranslation("common");
  const location = useRouter();
  const ourProductLife = ["Retail", "SMEs", "Corporate "];
  const ourProduct = ["Retail", "Commercial"];
  const ourProductA = ["	تأمينات الأفراد", "	تأمينات الشركات"];

  const [ourPro, setOurProduct] = React.useState(ourProduct);
  const [navBg, setNavBg] = React.useState("#01528a");
  const [footerLogo, setfooterLogo] = React.useState(
    "https://contact-clients-dev.s3.amazonaws.com/sarwaA.png"
  );
 

  React.useEffect(() => {
    if (location.pathname.includes("/sarwa-Life")) {
      setNavBg("#006958");
    } else {
      setNavBg("#01528a");
    }
  }, [location]);

  return (
    <div className="main_footer">
      <SocialMedia />
      <footer
        dir={t("dir")}
        style={{ backgroundColor: navBg }}
        className={
          location.pathname === "/sarwa-Life" ||
          location.pathname === "/sarwa-insurance"
            ? style.footer + " d-flex justify-content-around flex-wrap " 
            : style.footer + " d-flex justify-content-around flex-wrap "
        }
      >
        <div className={style.links +" d-flex justify-content-around mt-4 pt-0 container"}>
          <ul className="nav flex-column">
            <li className={style.nav_item +" nav-item"} >
              <h5>{t("footerAbout")}</h5>
              <Link
                href={
                  location.pathname.includes("/sarwa-Life")
                    ? "/sarwa-Life/about"
                    : "/sarwa-insurance/about"
                }
              >
                <a>{t("ourVisionF")}</a>
              </Link>
            </li>

            <li className={style.nav_item +" nav-item"}>
              <Link
                href={
                  location.pathname.includes("/sarwa-Life")
                    ? "/sarwa-Life/about"
                    : "/sarwa-insurance/about"
                }
              >
                <a>{t("ourMissionF")}</a>
              </Link>
            </li>
            <li className={style.nav_item +" nav-item"}>
             
              <Link
                href={
                  location.pathname.includes("/sarwa-Life")
                    ? "/sarwa-Life/about"
                    : "/sarwa-insurance/about"
                }
              >
                <a>{t("ourValueF")}</a>
              </Link>
            </li>

          </ul>

          <ul className="nav flex-column">
            <h5>{t("productF")}</h5>

            <li className={style.nav_item +" nav-item"}>
              <Link
                href={
                 location.pathname.includes("/sarwa-Life")
                    ? "/sarwa-Life/product/retail#retail"
                    : "/sarwa-insurance/product/retail#retail"
                }
              >
                <a>{t("retailT")}</a>
              </Link>
            </li>
            <li className={style.nav_item +" nav-item"}>
              <Link
                href={
                  location.pathname.includes("/sarwa-Life")
                    ? "/sarwa-Life/product/retail#commercial"
                    : "/sarwa-insurance/product/retail#commercial"
                }
              >
                <a>{t("campanyL")}</a>
              </Link>
            </li>
          </ul>
          
          {location.pathname.includes("/sarwa-Life") ? (
            <ul className="nav flex-column">
              <li className={style.nav_item +" nav-item"}>
                <h5> {t("medicalNetworkF")} </h5>
                
                <a
                  className="nav-link"
                  rel="noreferrer"
                  target="_blank"
                  href={
                    lang == "ar"
                      ? "https://www.globemedegypt.com/ar "
                      : "https://www.globemedegypt.com/"
                  }
                >
                  {t("globeMed")}
                </a>
              </li>
            </ul>
          ) : (
            <ul className="d-none"></ul>
          )}
          
          <ul className="nav flex-column">
            <li className={style.nav_item +" nav-item"}>
              <h5> {t("mediaF")} </h5>
              <Link
                href={
                  location.pathname.includes("/sarwa-Life") ? "#" : "/sarwa-insurance/media"
                }
              >
                <a>{t("newsF")}</a>
              </Link>
            </li>
            <li className={style.nav_item +" nav-item"}>
              <Link
                href={
                  location.pathname.includes("/sarwa-Life") ? "#" : "#"
                }
              >
                <a>{t("eventsF")}</a>
              </Link>
            </li>

            
          </ul>

          
          <ul className="nav flex-column">
            <li className={style.nav_item +" nav-item"}>
              <h5> {t("contactUsF ")} </h5>
              
              <Link
                target="_blank"
                href={
                  location.pathname.includes("/sarwa-Life")
                    ? "/sarwa-Life/ContactUs#contactf"
                    : "/sarwa-insurance/ContactUs#contactf"
                }
              >
                <a>{t("comp")}</a>
              </Link>
            </li>
            <li className={style.nav_item +" nav-item"}>
              <Link
                href={
                  location.pathname.includes("/sarwa-Life")
                    ? "/sarwa-Life/ContactUs"
                    : "/sarwa-insurance/ContactUs"
                }
              >
                <a>{t("ourBranchesF")}</a>
              </Link>
            </li>
            <li className={style.nav_item +" nav-item"}>
              
              <Link
                href={
                  location.pathname.includes("/sarwa-Life")
                    ? "/sarwa-Life/product/retail"
                    : "/sarwa-insurance/product/retail"
                }
              >
                <a>{t("applyProductF")}</a>
              </Link>
            </li>
            
          </ul>
        </div>

        <div className={style.logo +" "+ style.footer__te}>
          <picture>
            <source srcSet={
              t("lang") == "ar" 
              ? 
                location.pathname.includes("/sarwa-Life")
                ? "https://contact-clients-dev.s3.amazonaws.com/FooterLifeLogoAr.png" 
                : "https://contact-clients-dev.s3.amazonaws.com/FooterInsuranceLogoAr.png"
              :
                location.pathname.includes("/sarwa-Life")
                ? "https://contact-clients-dev.s3.amazonaws.com/FooterLifeLogoEn.png"
                : "https://contact-clients-dev.s3.amazonaws.com/FooterInsuranceLogoEn.png"

            } type="image/webp"/>
            <img alt=""
            src={
              t("lang") == "ar" 
              ? 
                location.pathname.includes("/sarwa-Life")
                ? "https://contact-clients-dev.s3.amazonaws.com/FooterLifeLogoAr.png" 
                : "https://contact-clients-dev.s3.amazonaws.com/FooterInsuranceLogoAr.png"
              :
                location.pathname.includes("/sarwa-Life")
                ? "https://contact-clients-dev.s3.amazonaws.com/FooterLifeLogoEn.png"
                : "https://contact-clients-dev.s3.amazonaws.com/FooterInsuranceLogoEn.png"

            }
            width="200" height="200"
          />
          </picture>
        </div>
        {location.pathname.includes("/sarwa-Life") ? "" :
          <div className={style.award}>
            <picture>
              <img
                src="https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/Sarwa%20Insurance%20GOLD%20BADGE.png"
                alt="Award" />
            </picture>
          </div>}
        <a
          className={"FRA pl-0 p-relative container w-100 text-center pt-4"}
          target="_blank"
          rel="noreferrer"
          href="https://fra.gov.eg/wp-content/uploads/2021/06/flyer-insurance.pdf"
        >
          {t("fr")}{" "}
        </a>
        
        <p className={ "pt-2 w-100 text-center text-muted " + style.copyright}>
          {location.pathname.includes("/sarwa-Life")
            ? t("copyRightL")
            : t("copyRightI")}
        </p>
      
        </footer>
    </div>
  );
};

export default Footer;
