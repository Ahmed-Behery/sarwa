import style from "./Slider.module.css";
import useTranslation from "next-translate/useTranslation";

const SliderLife = () => {
  const { t, lang } = useTranslation("common");

  return (
    <section className={style.slider__layout + " " + style.slider__life}>
      {/*<div className={style.image + " " + style.image_1}></div>*/}
      <div className={style.shapes + " w-100"}>
        <picture>
          <img
            className="d-block w-100"
            src="/updated-pics/SarwaLifeSlider.jpg"
            alt="Sarwa Life Slider"
          />
        </picture>
        <div className={style.circle}>
          <div
            className={style.texts}
            style={
              lang === "ar" ? { textAlign: "right" } : { textAlign: "left" }
            }
          >
            <h1>
              {t("sliderLife1")} <span>{t("sliderLife2")}</span>
            </h1>
            <p className={t("text-align")}>{t("sliderLifeDesc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderLife;
