import React ,{Fragment,useEffect}from 'react';
import Link  from 'next/link';
import style from "./Cards.module.css"; 

function CardItem(props) {


  return (
    <Fragment>
      <li className={style.cards__item}>
      <Link href={props.path}>
        <a className={style.cards__item__link +" "+ props.borderTop} >
            <figure className={style.cards__item__pic_wrap}>
              <img
                className={style.cards__item__img}
                alt='Travel Image'
                src={props.src}
              />
            </figure>
        </a>
      </Link>
      </li>
    </Fragment>
  );
}

export default CardItem;