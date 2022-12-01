import NewsCard from "../Content/NewsCard";
import useTranslation from "next-translate/useTranslation";
import style from "./NewsCard.module.css";

const NewsMedia = () => {
  const { t, lang } = useTranslation("common");
  // Api ---------------------------------------------------------------------------------------------------------------------
  const newsMediaApi = [
    {
      pLink: "../SARWA ANNOUNCEMENT.jpg",
      title: {
        en: "Announcement for Policy Holders",
        ar: "إعلان هام لحملة الوثائق",
      },
      date: "31/03/2022",
      text:
        lang == "en"
          ? "Re-evaluate the sum insured of vehicle , Equipment and any other properties to reflect the increase"
          : "مراجعة و تعديل مبالغ تأمين السيارات ، المعدات  أى ممتلاكات أخرى مؤمن عليها وفقاً للقيم السوقية الحالية",
      imgUrl: {
        en: "https://contact-clients-dev.s3.amazonaws.com/FooterInsuranceLogoEn.png",
        ar: "https://contact-clients-dev.s3.amazonaws.com/FooterInsuranceLogoAr.png",
      },
    },
    {
      pLink: "../11.pdf",
      title: {
        en: "Market Value Increasing Letter - Partner",
        ar: "أرتفاع نسبة القيمة السوقية  - وسطاء التأمين",
      },
      date: "31/03/2022",
      text:
        lang == "en"
          ? "Re-evaluate the sum insured of vehicle , Equipment and any other properties to reflect the increase"
          : "مراجعة و تعديل مبالغ تأمين السيارات ، المعدات  أى ممتلاكات أخرى مؤمن عليها وفقاً للقيم السوقية الحالية",
      imgUrl: {
        en: "https://contact-clients-dev.s3.amazonaws.com/FooterInsuranceLogoEn.png",
        ar: "https://contact-clients-dev.s3.amazonaws.com/FooterInsuranceLogoAr.png",
      },
    },
    {
      pLink: "../22.pdf",
      title: {
        en: "Market Value Increasing Letter - Customers",
        ar: "أرتفاع نسبة القيمة السوقية  - عملاء",
      },
      date: "31/03/2022",
      text:
        lang == "en"
          ? "Re-evaluate the sum insured of vehicle , Equipment and any other properties to reflect the increase"
          : "مراجعة و تعديل مبالغ تأمين السيارات ، المعدات  أى ممتلاكات أخرى مؤمن عليها وفقاً للقيم السوقية الحالية",
      imgUrl: {
        en: "https://contact-clients-dev.s3.amazonaws.com/FooterInsuranceLogoEn.png",
        ar: "https://contact-clients-dev.s3.amazonaws.com/FooterInsuranceLogoAr.png",
      },
    },
  ];
  // -----------------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div className={"container " + style.p_new}>
      {newsMediaApi.map((item) => (
        <NewsCard
          pLink={item.pLink}
          imgUrl={lang == "en" ? item.imgUrl.en : item.imgUrl.ar}
          date={item.date}
          text={item.text}
          title={lang == "en" ? item.title.en : item.title.ar}
        />
      ))}
    </div>
  );
};

export default NewsMedia;
