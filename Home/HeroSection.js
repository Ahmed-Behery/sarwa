import  { useState,useEffect } from 'react';
import style from './HeroSection.module.css';
import "animate.css/animate.min.css";
import useTranslation from 'next-translate/useTranslation';
import Aos from 'aos';

function HeroSection(props) {
  
  const {t,lang} = useTranslation("common");

  useEffect(() => {
    Aos.init();
  }, []);

  return (
   <section className={style.section_header}>
     <div  className={lang === 'ar' 
          ? style.hero_containerAr + " " + style.hero_container 
          : style.hero_containerEn + " " + style.hero_container}>  
      <div className={`container ${style.contain}`}>
      <section className={style.content_contain}>
        <div dir={t("dir")} className={style.content}>
          <h1 className={t("text-align")} 
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1500">{t("title")}</h1>   
          
          <p data-aos="fade-down"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-duration="1500">{t("desc1")} <br></br> {t("desc2")} <br></br>{t("desc3")}</p>
        </div>
      </section>
    </div>
   </div>
   </section>
  );
}


export default HeroSection




