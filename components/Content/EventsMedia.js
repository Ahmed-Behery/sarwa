import GalleryImg from "../UI/GalleryImg";
import style from "./NewsCard.module.css";
import DB from "../../DB-Backup.json";
import { useRouter } from "next/router";
import NewsCard from "../Content/NewsCard";

const sarwaInsurance = DB[0].data.sarwa_insurance.media_page.media_events;
const sarwaLife = DB[0].data.sarwa_life.media_page.media_events;
const EventsMedia = () => {
  const location = useRouter();

  return location.pathname.includes("sarwa-Life") ? (
    // sarwa-life ---------------------------------
    <div className={"container " + style.p_new}>
      {sarwaLife &&
        sarwaLife.map((item,index) => (
          <NewsCard
            pLink={item.pLink}
            imgUrl={lang == "en" ? item.imgUrl.en : item.imgUrl.ar}
            date={item.date}
            text={item.text}
            title={lang == "en" ? item.title.en : item.title.ar}
            key={index}
          />
        ))}
      {sarwaLife.length == 0 && (
        <div style={{ textAlign: "center" }}>No news yet ...</div>
      )}
    </div>
  ) : (
    // sarwa-insurance ---------------------------------
    <div className={"container " + style.p_new}>
      {sarwaInsurance &&
        sarwaInsurance.map((item,index) => (
          <NewsCard
            pLink={item.pLink}
            imgUrl={lang == "en" ? item.imgUrl.en : item.imgUrl.ar}
            date={item.date}
            text={lang == "en" ? item.text.en : item.text.ar}
            title={lang == "en" ? item.title.en : item.title.ar}
            key={index}
          />
        ))}
      {sarwaInsurance.length == 0 && (
        <div style={{ textAlign: "center" }}>No news yet ...</div>
      )}
    </div>
  );
};

export default EventsMedia;
