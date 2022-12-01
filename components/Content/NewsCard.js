import style from "./NewsCard.module.css";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const NewsCard = (props) => {
  const { t, lang } = useTranslation("common");
  return (
    <div className="card m-4 ">
      <div className="row g-0">
        <div style={{ backgroundColor: "#01528a" }} className="col-md-3">
          <picture>
            <source srcSet={props.imgUrl} type="image/webp" />
            <img
              src={props.imgUrl}
              className="img-fluid img-h rounded-start"
              alt=""
            />
          </picture>
        </div>
        <div className="col-md-9">
          <div className={t("text-align") + " card-body"}>
            <h2 className={style.news_title}>{props.title}</h2>
            <h5 className={style.card_title + " " + style.card - t}>
              {props.date}
            </h5>
            <p className="card-text">{props.text}</p>
            <a
              target="_blank"
              rel="noreferrer"
              href={props.pLink}
              className={t("float") + " " + style.new_bt + " mb-3"}
            >
              {t("read-more")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
