import CardWithCircleImg from "../UI/CardWithCircleImg";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const BoardOfDirectors = () => {
  const { t, lang } = useTranslation("common");
  const location = useRouter();

  // Api ---------------------------------------------------------------------------
  const teamApi = {
    sarwaLife: [],
    sarwaInsurance: [
      // {
      //   name: { en: "Ahmed Khalifa", ar: "احمد خليفه" },
      //   position: { en: "Managing Director", ar: "العضو المنتدب" },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/AhmedKhalifa.png",
      // },
      // {
      //   name: { en: "Mohamed Hassan", ar: "محمد حسن" },
      //   position: {
      //     en: "Business Development & Distribution Director",
      //     ar: "رئيس قطاع التوزيع والمبيعات",
      //   },
      //   imgUrl:
      //     "https://contact-clients-dev.s3.amazonaws.com/MohamedHassan.png",
      // },
      // {
      //   name: { en: "Ayman maamoun", ar: "أيمن مأمون" },
      //   position: {
      //     en: "Claims Director",
      //     ar: "رئيس قطاع التعويضات",
      //   },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/AymanMaamoun.png",
      // },
      // {
      //   name: { en: "Wael Amin", ar: "وائل أمين" },
      //   position: {
      //     en: "Financial Director",
      //     ar: "رئيس قطاع الشئون المالية",
      //   },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/WaelAmin.png",
      // },
      // {
      //   name: { en: "Sameh El Shorbagy", ar: "سامح الشوربجي" },
      //   position: {
      //     en: "Technical Director ",
      //     ar: "رئيس قطاع الشئون الفنيه",
      //   },
      //   imgUrl:
      //     "https://contact-clients-dev.s3.amazonaws.com/SamehElShorbagy.jpg",
      // },
    ],
  };

  // -----------------------------------------------------------------------------------------------------------------------------

  return location.pathname.includes("sarwa-Life") ? (
    <></>
  ) : (
    <div className="team">
      <div className="row justify-content-center my-3 pb-4">
        {teamApi.sarwaInsurance.map(({ name, position, imgUrl }, index) => {
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
