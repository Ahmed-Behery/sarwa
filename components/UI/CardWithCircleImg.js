import style from "./CardWithCircleImg.module.css";
const CardWithCircleImg = (props) => {
  return (
    <div className={style.card__circleImg}>
      <picture>
        <source srcSet={props.imgUrl} type="image/webp"/>
        <img src={props.imgUrl} className={style.rounded_circle + " rounded-circle " + style.img_t} alt="" />
      </picture>
      <h6 className={style.name +" mt-1"}>{props.name}</h6>
      <h6 className={style.position}>{props.position}</h6>
    </div>
  );
};

export default CardWithCircleImg;
