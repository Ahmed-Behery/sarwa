import style from "../UI/ArticleCard.module.css";
import useTranslation from 'next-translate/useTranslation';

const About = (props) => {
  const {t,lang} = useTranslation("common");
   
  return (
    <div className={style.article__card}>
      <span className="d-block">{t("footerAbout")}</span>
      <p className="text-center">{props.children}</p>
    </div>
  );
};

export default About;
