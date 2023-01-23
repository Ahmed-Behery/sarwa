import style from './PolicyCard.module.css';
import React, { useState,Fragment } from 'react';
import useTranslation from 'next-translate/useTranslation';
import  Link  from 'next/link';
import { useRouter } from 'next/router'

const PolicyCard = (props) => {
  const {t,lang} = useTranslation("common");
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const location = useRouter();
  const animationSlideDirection = props.imgRight ? 'fade-left' : 'fade-right';
  
  const imgInRight = (
    <Fragment>
    <div className="row g-1 mb-2 img-right">
      <div className={t('text-align') + ' col-md-6 ' +style.policy__body}>
        <div className={style.card_body +" "+ style.card_info}>
          <span className={style.card_title}>{props.title}</span>
          <span className={style.suptitleq}>{props.supTitle}</span>
          <p className={style.card_text}>{props.text}</p>
          {location.pathname.includes('/sarwa-Life') ? (
            <a
              href="#reqP"
              className={t('text-align') + " " + style.read_btn}
            >
              {t('read-more')}
            </a>
          ) : (
            <Link href={props.proLink} >
              <a className={t('text-align') + " " + style.read_btn}>{t('read-more')}</a>
            </Link>
          )}
        </div>
      </div>
      <div className="col-md-6 img-h">
        <picture>
            <source srcSet={props.imgUrl}/>
            <img
            src={props.imgUrl}
            className="img-fluid rounded-start pro-img"
              alt={`product ${props.title}`}
          />
        </picture>
      </div>
      </div>
  </Fragment>
  );
  
  const imgInLeft = (
    <div className="row g-0 img-left">
      <div className="col-md-6 img-h">
        <picture>
          <source srcSet={props.imgUrl} type="image/webp"/>
          <img
          src={props.imgUrl}
          className="img-fluid rounded-start pro-img"
            alt={`product ${props.title}`}
        />
        </picture>
      </div>
      <div className={t('text-align') + ' col-md-6 policy__body'}>
        <div className={style.card_body +" "+ style.card_info}>
          <span className={style.card_title}>{props.title}</span>
          <h6 className={style.suptitleq}>{props.supTitle}</h6>
          <p className={style.card_text}>{props.text}</p>
          {location.pathname.includes('/sarwa-Life') ? (
            <a
              href="#reqP"
              className={t('text-align') + " " + style.read_btn}
            >
              {t('read-more')}
            </a>
          ) : (
            <Link href={props.proLink} >
              <a className={t('text-align') + " " + style.read_btn}> {t('read-more')}</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  const card = props.imgRight ? imgInRight : imgInLeft;
  
  return (
    <div
      data-aos={animationSlideDirection}
      data-aos-delay="200"
      data-aos-once="true"
      data-aos-duration="2000"
      className="policy__card card mb-3"
    >
      {card}
    </div>
  );
};

export default PolicyCard;
