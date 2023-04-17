import { useEffect } from "react";
import style from "./about.module.css";
import useTranslation from "next-translate/useTranslation";
import Aos from "aos";

function About() {
  const { t, lang } = useTranslation("common");

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div dir={t("dir")} className={style.about_section}>
      <div className="container overflow-hidden">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className={style.site_title}
              data-aos={lang === "en" ? "fade-right" : "fade-left"}
              data-aos-once="true"
              data-aos-duration="1500"
            >
              <span
                className={t("text-align") + " " + style.about_title}
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-once="true"
                data-aos-duration="1500"
              >
                {t("about-title")}
                <br />
                {t("about-title1")}
              </span>
              <p
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-once="true"
                data-aos-duration="1500"
              >
                {t("about-desc")}
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={style.img_contain}>
              <picture>
                <source
                  srcSet="https://contact-clients-dev.s3.amazonaws.com/HomeAboutUs.jpg"
                  type="image/webp"
                />
                <img
                  className={
                    lang === "ar" ? style.float_left : style.float_right
                  }
                  src={
                    "https://contact-clients-dev.s3.amazonaws.com/HomeAboutUs.jpg"
                  }
                  alt="About Sarwa"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
