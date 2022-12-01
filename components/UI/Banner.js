const Banner = (props) => {
  return (
    <picture>
    <source srcSet={props.imgUrl} type="image/webp"/>
    <img className="banner-img" src={props.imgUrl} width="100%" height="" alt=""/>
  </picture>
  )
  
};

export default Banner;
