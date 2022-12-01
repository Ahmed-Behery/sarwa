import style from "./Slider.module.css";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';


const Slider = () => {
  const {t,lang} = useTranslation("common");
  
  return (
    <section className={style.slider__layout}>
      <div className={style.image}></div>
        <div className={style.shapes}>
          <div className={style.circle}>
            <div className={style.texts} style={lang==="ar" ?
            {"textAlign":"right"} : {"textAlign":"left"}}>
              <h4>
                {t("sliderText1")}  
                <span>{t("sliderText2")}</span> 
              </h4>
              <p className={t("text-align")}>
                {t("sliderDesc")}  
              </p>
            </div>
            </div>
          <div className={style.circle_2}>
        </div>
      </div>
    </section>
  );
};

export default Slider;
