import style from "./ToArabicIcon.module.css";
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage'

const ToArabicIcon = () => {
  const {t,lang} = useTranslation("common");
  
  return <div className="">
        {lang === "ar" &&  
          <button className={style.lang_btn +" "+ style.btn_en} onClick={async () => await setLanguage('en')}>EN </button>}

        {lang ==="en" &&
          <button  className={style.lang_btn +" "+ style.btn_ar} onClick={async () => await setLanguage('ar')}>عربى</button>}
  </div>;
};

export default ToArabicIcon;
