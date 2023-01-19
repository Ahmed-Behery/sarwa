import CardWithCircleImg from "../UI/CardWithCircleImg";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import DB from "../../DB-Backup.json";
const BoardOfDirectors = () => {
  const { t, lang } = useTranslation("common");
  const location = useRouter();

  // Api ---------------------------------------------------------------------------

  const sarwaInsurance = DB[0].data.sarwa_insurance.about_page.our_team;
  const sarwaLife = DB[0].data.sarwa_life.about_page.our_team;

  // -----------------------------------------------------------------------------------------------------------------------------

  return location.pathname.includes("sarwa-Life") ? (
    <div className="team">
      <div className="row justify-content-center my-3 pb-4">
        {sarwaLife.map(({ name, position, imgUrl }, index) => {
          return (
            <div className="col-lg-12 col-md-6">
              <CardWithCircleImg
                imgUrl={imgUrl}
                name={lang == "en" ? name.en : name.ar}
                position={lang == "en" ? position.en : position.ar}
              />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="team">
      <div className="row justify-content-center my-3 pb-4">
        {sarwaInsurance.map(({ name, position, imgUrl }, index) => {
          if (!index) {
            return (
              <div className="col-lg-12 col-md-6">
                <CardWithCircleImg
                  imgUrl={imgUrl}
                  name={lang == "en" ? name.en : name.ar}
                  position={lang == "en" ? position.en : position.ar}
                />
              </div>
            );
          } else
            return (
              <div className="col-lg-3 col-md-6">
                <CardWithCircleImg
                  imgUrl={imgUrl}
                  name={lang == "en" ? name.en : name.ar}
                  position={lang == "en" ? position.en : position.ar}
                />
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default BoardOfDirectors;
