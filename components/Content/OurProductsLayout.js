import Aos from "aos";
import { useEffect, useState } from "react";
import Banner from "../UI/Banner";
import PolicyCard from "../UI/PolicyCard";
import PolicyCard2 from "../UI/PolicyCard2";
import Tabs from "../UI/Tabs";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import style from "../Content/JoinUsForm.module.css";

const OurProductsLayout = () => {
  const [sarwaInsuranceData, setSarwaInsuranceData] = useState();
  const [sarwaLifeData, setSarwaLifeData] = useState();
  const { t, lang } = useTranslation("common");
  const location = useRouter();
  const lifeRetail = [
    t("proTitle1L"),
    t("proTitle2L"),
    t("proTitle3L"),
    t("he"),
    t("she"),
    t("smoke"),
  ];
  const lifeCommerial = [
    t("pro"),
    t("ins"),
    t("co"),
    t("acc"),
    t("med"),
    t("sem"),
    t("accp"),
  ];
  const citys = [
    t("city"),
    t("alex"),
    t("Cairo"),
    t("Giza"),
    t("Qalyubia"),
    t("Port"),
    t("Suez"),
    t("Gharbia"),
    t("Dakahlia"),
    t("Asyut"),
    t("Fayoum"),
    t("Aswan"),
    t("El-Minya"),
    t("Luxor"),
    t("Sohag"),
    t("Kafr"),
  ];

  useEffect(() => {
    Aos.init();
    fetch("http://localhost:3001/api")
      .then((apiData) => apiData.json())
      .then((apiData) => {
        setSarwaInsuranceData(
          apiData.result[0].data.sarwa_insurance.products_page
        );
        setSarwaLifeData(apiData.result[0].data.sarwa_life.products_page);
      });
  }, []);

  // useEffect(() => {
  //   data && console.log(data.result[0].data.sarwa_insurance.products_page);
  // }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(t("messageF"));
  };

  if (!sarwaInsuranceData && !sarwaLifeData) {
    return <p>Loading ...</p>;
  }
  return (
    <>
      <Banner
        imgUrl={
          location.pathname.includes("/sarwa-insurance")
            ? sarwaInsuranceData.banner
            : sarwaLifeData.banner
        }
        height={"250px"}
      />

      <div className="container mt-4 pg">
        <Tabs
          className="product-d"
          tabOneTitle={t("retail")}
          tabOneContent={
            <>
              {location.pathname.includes("/sarwa-insurance")
                ? sarwaInsuranceData.cards.retail.map((item, index) => (
                    <PolicyCard2
                      imgUrl={item.imgUrl}
                      title={lang == "en" ? item.title.en : item.title.ar}
                      supTitle={
                        lang == "en" ? item.subtitle.en : item.subtitle.ar
                      }
                      text={lang == "en" ? item.text.en : item.text.ar}
                      imgRight={item.imgRight}
                      proLink={item.proLink}
                    />
                  ))
                : sarwaLifeData.cards.retail.map((item, index) => (
                    <PolicyCard2
                      imgUrl={item.imgUrl}
                      title={lang == "en" ? item.title.en : item.title.ar}
                      supTitle={
                        lang == "en" ? item.subtitle.en : item.subtitle.ar
                      }
                      text={lang == "en" ? item.text.en : item.text.ar}
                      imgRight={item.imgRight}
                      proLink={item.proLink}
                    />
                  ))}
            </>
          }
          tabTwoTitle={t("comercial")}
          tabTwoContent={
            <>
              {location.pathname.includes("/sarwa-insurance")
                ? sarwaInsuranceData.cards.commercial.map((item, index) => (
                    <PolicyCard2
                      imgUrl={item.imgUrl}
                      title={lang == "en" ? item.title.en : item.title.ar}
                      supTitle={
                        lang == "en" ? item.subtitle.en : item.subtitle.ar
                      }
                      text={lang == "en" ? item.text.en : item.text.ar}
                      imgRight={item.imgRight}
                      proLink={item.proLink}
                    />
                  ))
                : sarwaLifeData.cards.commercial.map((item, index) => (
                    <PolicyCard2
                      imgUrl={item.imgUrl}
                      title={lang == "en" ? item.title.en : item.title.ar}
                      supTitle={
                        lang == "en" ? item.subtitle.en : item.subtitle.ar
                      }
                      text={lang == "en" ? item.text.en : item.text.ar}
                      imgRight={item.imgRight}
                      proLink={item.proLink}
                    />
                  ))}
            </>
          }
        />

        {location.pathname.includes("sarwa-Life") ? (
          <div id="reqP">
            <div
              dir={t("dir")}
              className={
                style.join__form + " " + style.contact__formL + " my-5"
              }
              id="join"
            >
              <h3 className="text-center text-white"> {t("Reqp")}</h3>

              <form onSubmit={handleSubmit} className="mt-4">
                <div className="col-md-12 mb-3">
                  <input
                    type="text"
                    className={t("text-align") + " " + style.form_control}
                    placeholder={t("namePlace1")}
                    required
                  />
                </div>

                <div className="col-md-12 mb-3">
                  <input
                    type="email"
                    placeholder={t("mailPlace")}
                    className={t("text-align") + " " + style.form_control}
                    required
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <input
                    placeholder={t("phonePlace")}
                    type="text"
                    className={t("text-align") + " " + style.form_control}
                    required
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <select
                    type="text"
                    className={style.form_select + " " + style.form_control}
                    required
                  >
                    {citys.map((city) => {
                      return <option key={city.index}>{city}</option>;
                    })}
                  </select>
                </div>

                <div className="col-lg-12">
                  <select
                    className={
                      style.form_select + " mb-3 " + style.form_control
                    }
                    required
                  >
                    <option className={style.opt_title} disabled>
                      {t("retailT")}
                    </option>
                    {lifeRetail.map(function (policy, index) {
                      return <option key={index}>{policy}</option>;
                    })}

                    <option className={style.opt_title} disabled>
                      {t("comercial")}
                    </option>
                    {lifeCommerial.map(function (policy, index) {
                      return <option key={index}>{policy}</option>;
                    })}
                  </select>

                  <div className={style.btn_glob_contain}>
                    <button className="btn btn-primary w-100 " type="submit">
                      {t("applyBtn")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default OurProductsLayout;
