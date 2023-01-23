import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import style from "./Cards.module.css";
import { useSelector, useDispatch } from "react-redux";
import { tabActions } from "../components/store/store";

function CardItem(props) {
  const dispatch = useDispatch();
  // const tab = useSelector((state) => state.tab.tab);

  return (
    <Fragment>
      <li className={style.cards__item}>
        <Link href={props.path}>
          <a
            onClick={() => {
              dispatch(tabActions.update(props.tag));
              // console.log(tab);
            }}
            className={style.cards__item__link + " " + props.borderTop}
          >
            <picture className={style.cards__item__pic_wrap}>
              <img
                className={style.cards__item__img}
                alt="Travel Image"
                src={props.src}
              />
            </picture>
          </a>
        </Link>
      </li>
    </Fragment>
  );
}

export default CardItem;
