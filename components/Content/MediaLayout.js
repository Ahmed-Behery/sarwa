import Banner from '../UI/Banner';
import Tabs from '../UI/Tabs';
import EventsMedia from './EventsMedia';
import style from './MediaLayout.module.css';
import NewsMedia from './NewsMedia';
import useTranslation from 'next-translate/useTranslation';
const MediaLayout = ({tabType}) => {
  const {t,lang} = useTranslation("common");


  const imgUrl = 'https://contact-clients-dev.s3.amazonaws.com/MediaInsBannar.jpg';
  return (
    <div className={style.media__layout}>
      <a href="#">
        <Banner imgUrl={imgUrl} height={'250px'} />
      </a>
      <Tabs
        tabType={tabType}
        tabOneTitle={t('news')}
        tabOneContent={<NewsMedia />}
        tabTwoTitle={t('events')}
        tabTwoContent={<EventsMedia />}
      />
    </div>
  );
};

export default MediaLayout;
