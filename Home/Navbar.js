import style from './Navbar.module.css';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage'

function Navbar(props) {
  const {t,lang} = useTranslation("common");

  return (
    <div className={style.home__navbar}>
    <div className= "container">
      <nav className={`${t('justify-content')} ${style.navbar}`}>
          {lang === "ar" &&  
            <button className={style.en__btn } onClick={async () => await setLanguage('en')}>EN </button>}

          {lang ==="en" &&
            <button  className={style.ar__btn} onClick={async () => await setLanguage('ar')}>عربى</button>}
      </nav>
      </div>
    </div>
  );
}

export default Navbar

