import CardWithCircleImg from "../UI/CardWithCircleImg";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import DB from "../../DB-Backup.json";

const OurTeam = () => {
  const { t, lang } = useTranslation("common");
  const location = useRouter();
  // Api ---------------------------------------------------------------------------
  const sarwaInsurance = DB[0].data.sarwa_insurance.about_page.our_directors;
  const sarwaLife = DB[0].data.sarwa_life.about_page.our_directors;

  // -----------------------------------------------------------------------------------------------------------------------------
  return location.pathname.includes("sarwa-Life") ? (
    // sarwa-life ---------------------------------
    <div className="team">
      <div className="row justify-content-around my-3 pb-4">
        {sarwaLife.map(({ name, position, imgUrl }) => (
          <div className="col-lg-3 col-md-6">
            <CardWithCircleImg
              imgUrl={imgUrl}
              name={lang == "en" ? name.en : name.ar}
              position={lang == "en" ? position.en : position.ar}
            />
          </div>
        ))}
      </div>
    </div>
  ) : (
    // sarwa-insurance ---------------------------------
    <>
      <div className="team">
        <div className="row justify-content-center my-3 pb-4">
          {sarwaInsurance.map(({ name, position, imgUrl }) => (
            <div className="col-lg-4 col-md-6">
              <CardWithCircleImg
                imgUrl={imgUrl}
                name={lang == "en" ? name.en : name.ar}
                position={lang == "en" ? position.en : position.ar}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTeam;
