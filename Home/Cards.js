import { useEffect } from "react";
import style from "./Cards.module.css";
import CardItem from "./CardItem";
import useTranslation from "next-translate/useTranslation";
import Aos from "aos";

function Cards() {
  const { t } = useTranslation("common");

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className={style.allcards}>
      <h1
        className="text-center"
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-once="true"
        data-aos-duration="1500"
      >
        {t("cards-title")}
      </h1>
      <p
        className="text-center text-muted"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-once="true"
        data-aos-duration="1500"
      >
        {t("cards-t-desc1c")}
        <br />
        {t("cards-t-desc2c")}
      </p>
      <div className={style.cards__container}>
        <div className={style.cards__wrapper}>
          <ul className={style.cards__items}>
            <CardItem
              tag="sarwa-insurance"
              src={
                t("lang") === "ar"
                  ? "https://contact-clients-dev.s3.amazonaws.com/HomeSarwaInsLogoAr.png"
                  : "https://contact-clients-dev.s3.amazonaws.com/HomeSarwaInsLogoEn.png"
              }
              borderTop={style.border_top1}
              path="/sarwa-insurance"
            />
            <CardItem
              tag="sarwa-life"
              src={
                t("lang") === "ar"
                  ? "https://contact-clients-dev.s3.amazonaws.com/HomeSarwaLifeLogoAr.png"
                  : "https://contact-clients-dev.s3.amazonaws.com/HomeSarwaLifeLogoEn.png"
              }
              borderTop={style.border_top2}
              path="/sarwa-Life"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
