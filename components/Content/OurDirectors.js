import CardWithCircleImg from "../UI/CardWithCircleImg";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const OurTeam = () => {
  const { t, lang } = useTranslation("common");
  const location = useRouter();
  // Api ---------------------------------------------------------------------------
  const directorsApi = {
    sarwaLife: [
      // {
      //   name: { en: "Said Zater", ar: "سعيد على على زعتر" },
      //   position: { en: "Board Member", ar: "عضو مجلس الادارة" },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/SaidZater.png",
      // },
      // {
      //   name: { en: "Adel mounir", ar: "عادل منير عبد الحميد رابح" },
      //   position: { en: "Board Member", ar: "عضو مجلس الادارة" },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/AdelMounir.png",
      // },
      // {
      //   name: { en: "Rimah Asaad", ar: "رماح أسعد أ حمد سعيد" },
      //   position: { en: "Managing Director", ar: "العضو المنتدب" },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/RimahAsaad.png",
      // },
      // {
      //   name: { en: "Hazem Moussa", ar: "حازم عمرو محمود موسى" },
      //   position: { en: "Chairman", ar: "رئيس مجلس الادارة" },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/HazemMoussa.png",
      // },
      // {
      //   name: { en: "Ayman El-Sawy ", ar: "أيمن الصاوي محمود " },
      //   position: {
      //     en: "Group Chief Financial Officer",
      //     ar: "عضو مجلس الادارة",
      //   },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/AymanEl-Sawy.png",
      // },
      // {
      //   name: { en: "Elise Khoury", ar: "إلياس جوزف الخوري" },
      //   position: { en: "Board Member", ar: "عضو مجلس الادارة" },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/EliseKhoury.png",
      // },
      // {
      //   name: { en: "Safaya Borhan", ar: "صفية محمد علي برهان" },
      //   position: { en: "Board Member", ar: "عضو مجلس الادارة" },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/SafayaBorhan.png",
      // },
      // {
      //   name: { en: "Ismail Samir", ar: "إسماعيل سمير" },
      //   position: { en: "Board Member", ar: "عضو مجلس الادارة" },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/IsmailSamir.png",
      // },
    ],
    sarwaInsurance: [
      // {
      //   name: { en: "Hazem Moussa", ar: "حازم عمرو محمود موسى" },
      //   position: { en: "Chairman", ar: "رئيس مجلس الادارة" },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/HazemMoussa.png",
      // },
      // {
      //   name: { en: "Ahmed Khalifa", ar: "احمد خليفه" },
      //   position: { en: "Managing Director", ar: "العضو المنتدب " },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/AhmedKhalifa.png",
      // },
      // {
      //   name: { en: "Said Zater", ar: "سعيد على على زعتر" },
      //   position: { en: "Board Member", ar: "عضو مجلس الادارة" },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/SaidZater.png",
      // },
      // {
      //   name: { en: "Ayman El-Sawy", ar: "ايمن الصاوي محمود علي" },
      //   position: { en: "Board Member", ar: "عضو مجلس الادارة" },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/AymanMaamoun.png",
      // },
      // {
      //   name: { en: "Elise Khoury", ar: "إلياس جوزف الخوري" },
      //   position: { en: "Board Member", ar: "عضو مجلس الادارة" },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/EliseKhoury.png",
      // },
      // {
      //   name: { en: "Adel mounir", ar: "عادل منير عبد الحميد رابح" },
      //   position: { en: "Board Member", ar: "عضو مجلس الادارة" },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/AdelMounir.png",
      // },
      // {
      //   name: { en: "Safaya Borhan", ar: "صفية محمد علي برهان" },
      //   position: { en: "Board Member", ar: "عضو مجلس الادارة" },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/SafayaBorhan.png",
      // },
      // {
      //   name: { en: "Ismail Samir", ar: "إسماعيل سمير" },
      //   position: { en: "Board Member", ar: "عضو مجلس الادارة" },
      //   imgUrl: "https://contact-clients-dev.s3.amazonaws.com/IsmailSamir.png",
      // },
    ],
  };

  // -----------------------------------------------------------------------------------------------------------------------------
  return location.pathname.includes("sarwa-Life") ? (
    // sarwa-life ---------------------------------
    <div className="team">
      <div className="row justify-content-around my-3 pb-4">
        {directorsApi.sarwaLife.map(({ name, position, imgUrl }) => (
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
          {directorsApi.sarwaInsurance.map(({ name, position, imgUrl }) => (
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
