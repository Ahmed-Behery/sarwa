import style from "./NewsCard.module.css";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const NewsCard = (props) => {
  const location = useRouter();
  const { t, lang } = useTranslation("common");
  return (
    <div className="card m-4 ">
      <div className="row g-0">
        <div
          style={{
            backgroundColor: location.pathname.includes("/sarwa-Life")
              ? "#016a59"
              : "#01528a",
            aspectRatio: "1/1",
          }}
          className="col-md-3"
        >
          <picture>
            <source srcSet={props.imgUrl} type="image/webp" />
            <img
              style={{ height: "100%" }}
              src={props.imgUrl}
              className="img-fluid img-h rounded-start"
              alt={props.title}
            />
          </picture>
        </div>
        <div className="col-md-9">
          <div
            className={t("text-align") + " card-body"}
            style={{
              position: "relative",
              height: "100%",
            }}
          >
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
              style={{ position: "absolute", bottom: "0px", right: "10px" }}
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
