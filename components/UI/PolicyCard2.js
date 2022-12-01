import style from './PolicyCard.module.css';
import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import  Link  from 'next/link';
import { useRouter } from 'next/router'

const PolicyCard2 = (props) => {
  const {t,lang} = useTranslation("common");
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const location = useRouter();
  const animationSlideDirection = props.imgRight ? 'fade-left' : 'fade-right';
  const imgInRight = (
    <div className="row g-0 img-right ">
      <div className={t('text-align') + ' col-md-6 policy__body'}>
        <div className={style.card_body +" "+  style.card_info}>
          <span className={style.card_title}>{props.title}</span>
          <p className={style.suptitleq}>{props.supTitle}</p>
          <p className={style.card_text}>{props.text}</p>

          {location.pathname.includes('/sarwa-Life') ? (
            <a
              href="#reqP"
              className={t('text-align') + ' '+style.read_btn}
            >
              {t('read-more')}
            </a>
          ) : (
            <Link href={props.proLink} >
              <a className={t('text-align') +" "+style.read_btn}>{t('read-more')}</a>
            </Link>
          )}

        </div>
      </div>
      <div className="col-md-6 img-h">
        <picture>
            <source srcSet={props.imgUrl}/>
            <img src={props.imgUrl} className="img-fluid rounded-start" alt="" />
        </picture>
      </div>
    </div>
  );

  const imgInLeft = (
    <div className="row g-0 img-left">
      <div className="col-md-6 img-h">
        <picture>
          <source srcSet={props.imgUrl}/>
          <img src={props.imgUrl} className="img-fluid rounded-start" alt="" />
        </picture>
      </div>
      <div className={t('text-align') + ' col-md-6 policy__body'}>
        <div className={style.card_body +" "+  style.card_info}>
          <span className={style.card_title}>{props.title}</span>
          <p className={style.suptitleq}>{props.supTitle}</p>
          <p className={style.card_text}>{props.text}</p>
          {location.pathname.includes('/sarwa-Life') ? (
            <a
              href="#reqP"
              className={t('text-align') + ' '+ style.read_btn}
            >
              {t('read-more')}
            </a>
          ) : (
            <Link href={props.proLink} >
              <a className={t('text-align') + " " + style.read_btn}>{t('read-more')}</a>
            </Link>
          )}{' '}
          
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
      className="policy__card card "
    >
      {card}
    </div>
  );
};

export default PolicyCard2;
