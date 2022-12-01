import style from "./Slider.module.css";
import useTranslation from 'next-translate/useTranslation';

const SliderLife = () => {
  const {t,lang} = useTranslation("common");

  return (
    <section className={style.slider__layout + " " +  style.slider__life}>
      <div className={style.image + " " + style.image_1}></div>
      <div className={style.shapes}>
        <div className={style.circle}>
          <div className={style.texts} style={lang==="ar" ?
          {"textAlign":"right"} : {"textAlign":"left"}}>
            <h4>
              {t("sliderLife1")} <span>{t("sliderLife2")}</span>
            </h4>
            <p className={t("text-align")}>
            {t("sliderLifeDesc")}
            </p>
          </div>
        </div>
        <div className={style.circle_2}></div>
      </div>
    </section>
  );
};

export default SliderLife;
