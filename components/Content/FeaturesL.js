import Aos from "aos";
import { useEffect } from "react";
import Card from "../UI/Card";
import style from  "./Features.module.css";
// import { useLocation } from "react-router-dom";
import useTranslation from 'next-translate/useTranslation';

const FeaturesL = () => {
  const {t,lang} = useTranslation("common");

  useEffect(() => {
    Aos.init();
  }, []);
  let content =
    "c a is Muriya between partnership Developments Orascom Group OMRAN and Holding creating of vision a with destinations.";
  return (
    <section className={style.feature + " "+ style.featureL + " d-flex flex-wrap justify-content-around align-aitems-center  my-5"}>
      <span className={style.service_title}>{t("servicesTitle")}</span>
      <Card content={t("medInsurance")} icon={"https://contact-clients-dev.s3.amazonaws.com/LiveMedicalIcon.png"} delay="500" />
      <Card content={t("investment")} icon={"https://contact-clients-dev.s3.amazonaws.com/LiveInvestmentIcon.png"} delay="1000" />
      <Card content={t("retire")} icon={"https://contact-clients-dev.s3.amazonaws.com/LiveRetirementIcon.png"} delay="1500" />
      <Card content={t("protection")} icon={"https://contact-clients-dev.s3.amazonaws.com/LiveProtectionIcon.png"} delay="2000" />
    </section>
  );
};

export default FeaturesL;
