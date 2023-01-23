import { useState } from "react";
import style from "./AnimateDrop.module.css";
import UnopDropdown from "unop-react-dropdown";
import useTranslation from 'next-translate/useTranslation';
import  Link  from "next/link";
import Image from 'next/image'

const  AnimatedDropdown = () => {
  const {t,lang} = useTranslation("common");

  const [open, setOpen] = useState(false);
  const handler = () => {
    setOpen(!open);
  };
  // Change props and see effect
  return (
    <UnopDropdown
      onAppear={handler}
      onDisappearStart={handler}
      trigger={
        <button className={style.AnimatedDropdownButton}>{t("medNetwork")}</button>
      }
      delay={300}
      align="CENTER"
      hover
    >
      <div
        className={style.AnimatedDropdownStyles +" "+ style.openAnimation+`${
          !open ? " closeAnimation" : ""
        }`}
      >
        {/* <div> <img className="dr-img mb-2" width="40" src="https://www.linkpicture.com/q/metlife.png" /> MetLife </div>
        <div>  <img  className="dr-img mb-1" width="40"  src="https://www.linkpicture.com/q/globemed.png" /> EgyCare</div> */}
        <div className={style.glo__link}>
          {" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={
              lang === "ar"
                ? "https://www.globemedegypt.com/ar"
                : "https://www.globemedegypt.com"
            }
          >
            {" "}
            <picture>
              <source srcSet="https://contact-clients-dev.s3.amazonaws.com/GlobeMed.jpg" type="image/webp"/>
              <img alt="Globe Med Logo" className="dr-img mb-1" width="120" src="https://contact-clients-dev.s3.amazonaws.com/GlobeMed.jpg" />
            </picture>
            
          </a>{" "}
        </div>
      </div>
    </UnopDropdown>
  );
};

export default AnimatedDropdown;
