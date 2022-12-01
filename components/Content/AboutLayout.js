import About from "./About";
import ArticleCard from "../UI/ArticleCard";
import style from "./AboutLayout.module.css";
import Aos from "aos";
import { useEffect } from "react";
import Banner from "../UI/Banner";
import Tabs from "../UI/Tabs";
import OurDirectors from "./OurDirectors";
import OurTeam from "./OurTeam";
import React, { useState } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Value from "../UI/value";

const AboutLayout = () => {
  const { t, lang } = useTranslation("common");
  const location = useRouter();

  const vision_Text = t(
    location.pathname.includes("/sarwa-Life") ? "visionTextL" : "visionText"
  );
  const mission_text = t(
    location.pathname.includes("/sarwa-Life") ? "missionTextL" : "missionText"
  );
  const imgUrl =
    "https://contact-clients-dev.s3.amazonaws.com/AboutUsInsBannar.jpg";
  const imgUrlL =
    "https://contact-clients-dev.s3.amazonaws.com/AboutUsLifeBannar.jpg";

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div dir={t("dir")} className={style.about__layout}>
      <Banner
        imgUrl={location.pathname.includes("/sarwa-Life") ? imgUrlL : imgUrl}
        height={"250px"}
      />
      <div className="container">
        <About>
          {t(
            location.pathname.includes("sarwa-Life")
              ? "aboutDescL1"
              : "aboutDesc1"
          )}{" "}
          <br />
        </About>
      </div>
      <div className={style.article}>
        <div className="container">
          <div className="row gx-4 my-5 py-5">
            <div className="col-md-4">
              <ArticleCard
                title={t("visionTitle")}
                text={vision_Text}
                imgUrl={
                  location.pathname.includes("/sarwa-Life")
                    ? "https://contact-clients-dev.s3.amazonaws.com/LiveVissionIcon.png"
                    : "https://contact-clients-dev.s3.amazonaws.com/InsuranceVissionIcon.png"
                }
                delay="220"
              />
            </div>

            <div className="col-md-4">
              <ArticleCard
                title={t("missionTitle")}
                text={mission_text}
                imgUrl={
                  location.pathname.includes("/sarwa-Life")
                    ? "https://contact-clients-dev.s3.amazonaws.com/LiveMissionIcon.png"
                    : "https://contact-clients-dev.s3.amazonaws.com/InsuranceMissionIcon.png"
                }
                delay="210"
              />
            </div>

            <div className="col-md-4">
              <Value
                title={t("valueTitle")}
                imgUrl={
                  location.pathname.includes("/sarwa-Life")
                    ? "https://contact-clients-dev.s3.amazonaws.com/LiveValueIcon.png"
                    : "https://contact-clients-dev.s3.amazonaws.com/InsuranceValueIcon.png"
                }
                delay="200"
              />
            </div>
          </div>
        </div>
      </div>
      <Tabs
        className={style.team}
        tabOneTitle={
          t("ourTeam")
          // location.pathname.includes("/sarwa-insurance")
          //   ? t("ourTeam")
          //   : t("ourDirectors")
        }
        tabOneContent={<OurTeam />}
        tabTwoTitle={
          t("ourDirectors")
          // location.pathname.includes("/sarwa-insurance")
          //   ? t("ourDirectors")
          //   : t("ourTeam")
        }
        tabTwoContent={<OurDirectors />}
      />
    </div>
  );
};

export default AboutLayout;
