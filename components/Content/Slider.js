import React from "react";
import { useRouter } from "next/router";

import useTranslation from "next-translate/useTranslation";
import style from "./Slider.module.css";

import Carousel from "react-bootstrap/Carousel";

const sliderImg =
  "https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/en.png";
const sliderImgAr =
  "https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/ar.jpg";
const sliderImg2 =
  "https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/car.png";

const Slider = () => {
  // const [t, i18n] = useTranslation();
  const location = useRouter();
  const { t, lang } = useTranslation("common");

  React.useEffect(() => {
    if (location.pathname.includes("sarwa-Life")) {
      setClassIMG("image-1");
    } else {
    }
  }, [location]);

  return (
    <Carousel
      className={`${style.slider__layout} ${style.slider__layout__insurance}`}
    >
      <Carousel.Item>
        <picture>
          <img
            className="d-block w-100"
            src={lang == "en" ? sliderImg : sliderImgAr}
            alt="Fastest Growing"
          />
        </picture>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.shapes}>
          <picture>
            <img className="d-block w-100" src={sliderImg2} alt="" />
          </picture>

          <div className={style.circle}>
            <div className={style.texts}>
              <h1 className={t("text-align")}>
                {t("sliderText1")} <span>{t("sliderText2")} </span>
              </h1>
              <p className={t("text-align")}>{t("sliderDesc")}</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
