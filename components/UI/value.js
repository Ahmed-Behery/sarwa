import style from "./ArticleCard.module.css";
import React, { useState } from "react";
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router'

const Value = (props) => {
  const {t,lang} = useTranslation("common");
  const location = useRouter();
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <article
      className={style.article__card + " " + style.about__card}
      data-aos="fade-up"
      data-aos-delay={props.delay}
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <picture>
        <source srcSet={props.imgUrl} type="image/webp"/>
        <img className="rounded-2 " src={props.imgUrl} width="140" height="140" alt={props.title} />
      </picture>
      <span className="text-center d-block pb-2 pt-2">{props.title}</span>
      <h5 className="font-bold">{t("value_title1")}</h5>
      <p className={t("text-align") + " pt-2 "}>
        {location.pathname.includes("sarwa-insurance")
          ? t("value_desc1")
          : t("value_desc1L")}
      </p>
      <h5 className="font-bold"> {t("value_title2")}</h5>
      <p className={t("text-align") + " pt-2"}>{t("value_desc2")}</p>
      <h5 className="font-bold"> {t("value_title3")}</h5>
      <p className={t("text-align") + " pt-2"}>{t("value_desc3")}</p>
      <h5 className="font-bold"> {t("value_title4")}</h5>
      <p className={t("text-align") + " pt-2"}>{t("value_desc4")}</p>
    </article>
  );
};

export default Value;
