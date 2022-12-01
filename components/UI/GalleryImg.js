import style from "./GalleryImg.module.css";
const GalleryImg = (props) => {
  return (
    <picture>
      <source srcSet={props.imgUrl} type="image/webp"/>
      <img  className={style.gallery__img} src={props.imgUrl} alt={props.title} />
    </picture>
  );
};

export default GalleryImg;
