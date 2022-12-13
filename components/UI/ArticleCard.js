import style from "./ArticleCard.module.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import Image from 'next/image'
// <Image
// src={profilePic}
// alt='user profile picture'
// />
const ArticleCard = (props) => {
  const [t, i18n] = useTranslation();

  return (
    <article
      className={style.article__card + " " + style.about__card}
      data-aos="fade-up"
      data-aos-delay={props.delay}
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <picture>
        <source srcSet={props.imgUrl} type="image/webp" />
        <img
          className="rounded-2 "
          src={props.imgUrl}
          width="140"
          height="140"
          alt=""
        />
      </picture>
      <h2 className="text-center pt-2">{props.title}</h2>
      <p className={t("text-align") + " pt-2"}>{props.text}</p>
    </article>
  );
};

export default ArticleCard;
