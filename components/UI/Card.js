import  Link  from 'next/link'
import style from '../Content/Features.module.css'; 
const Card = (props) => {
  return (
    <div
      className={style.pro__link__contain}
      data-aos="fade-up"
      data-aos-delay={props.delay}
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <picture>
        <source srcSet={props.icon} type="image/webp"/>
        <img className="w-100" src={props.icon} alt={` ${props.content} Card`}/>
      </picture>
      {props.content}
    </div>
  );
};

export default Card;
