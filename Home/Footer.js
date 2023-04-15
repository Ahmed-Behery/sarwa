import React from "react";
import style from "./Footer.module.css";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
// import pdf from "../assets/privacy policy.pdf";

function Footer() {
  const { t } = useTranslation("common");

  return (
    <div dir={t("dir")} className={style.footer_dark}>
      <footer>
        <div className="container">
          <div className="row">
            <div className={`col-sm-6 col-md-3 col-lg-2  ${style.item}`}>
              <h3>{t("about-us")}</h3>
              <ul>
                <li>
                  <Link href="/sarwa-Life">
                    <a>{t("sarwa-life")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sarwa-insurance">
                    <a>{t("sarwa-insurance")}</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={`col-sm-6 col-md-3 col-lg-5 ${style.item} text-center`}
            >
              <h3>
                <a
                  className={style.priv_title}
                  target="_blank"
                  href="./privacy policy.pdf"
                >
                  {t("privacy-policy")}
                </a>
              </h3>
              <ul>{/* <li><a href="#">{t("FRA")}  </a></li> */}</ul>
            </div>
            <div className={`col-md-6 col-lg-5  ${style.item} ${style.text}`}>
              <h3 className={style.fra}>
                <a
                  className="footer_link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://fra.gov.eg/wp-content/uploads/2021/06/flyer-insurance.pdf "
                >
                  {t("fr")}{" "}
                </a>
              </h3>
              {/* <ul>
                        <li><a href="#">{t("guide1")}</a></li>
                        <li><a href="#">{t("guide2")}</a></li>
                        <li><a href="#">{t("guide2")}</a></li>
                    </ul> */}
            </div>
          </div>
          <p className={style.copyright1}>{t("copyRight")}</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
