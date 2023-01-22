import style from "../UI/ArticleCard.module.css";
import style1 from "./JoinUsForm.module.css";
import Banner from "../UI/Banner";
import style3 from "../Content/policyPage.module.css";
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation';
import { useState } from "react";
import axios from "axios";
const PolicyPage3 = (props) => {
  const {t,lang} = useTranslation("common");
  const location = useRouter();

  const imgUrl = "https://contact-clients-dev.s3.amazonaws.com/ProdPersonalBannar.png";
  const backgroundUrl = "https://contact-clients-dev.s3.amazonaws.com/ProdPersonalBackground.png";
  const url = "https://website-api.sarwa.insurance/service-requests";
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    description: t("pe_title"),
    source: location.pathname.includes("sarwa-Life")
      ? "Life"
      : "Insurance",
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(t("messageF"));
    axios
      .post(url, {
        name: data.firstName,
        email: data.email,
        phone: data.phone,
        city: data.city,
        description: data.description,
        source: data.source,
      })
      .then((res) => {
        
      });
  };
  function handl(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    
  }
  return (
    <div>
      <div>
        <Banner imgUrl={imgUrl} />
      </div>
      <div>
        <div dir={t("dir")} className="container">
          <div className="row ">
            <div className={style.article__card +" col-lg-12 " +style3.policy_title_i}>
              <h1> {t("pe_title")}</h1>
              <p className={t("text-align") + " py-4  "}> {t("pe_content")} </p>
              <p className=""> {t("pe_content1")} </p>
              <p className={style3.sec_title+" py-4 "+ style3.font_blue}> {t("pe_content2")} </p>
              <ul className={t("text-align")}>
                <li>{t("pe_content3")} </li>
                <li>{t("pe_content4")} </li>
                <li>{t("pe_content5")}</li>
                <li> {t("pe_content6")}</li>
                <li>{t("pe_content7")}.</li>
                <li className={lang === "en" ? "dnone" : "dblock"}>
                  {" "}
                  {t("pe_content8")}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row bg">
          <Banner imgUrl={backgroundUrl} />
          <div className={"col-lg-6 "+style3.policyForm}>
            <div className={style1.join__form +" my-5"} id={style1.join}>
              <h3 className="text-center text-white"> {t("pe_request")}</h3>
              <form onSubmit={(e) => handleSubmit(e)} className="mt-4">
                <div className="col-md-12 mb-3">
                  <input
                    type="text"
                    className={t("text-align") + " form-control "}
                    placeholder={t("namePlace1")}
                    required=""
                    id="firstName"
                    onChange={(e) => handl(e)}
                  />
                </div>

                <div className="col-md-12 mb-3">
                  <input
                    type="email"
                    placeholder={t("mailPlace")}
                    className={t("text-align") + " form-control "}
                    required=""
                    id="email"
                    onChange={(e) => handl(e)}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <input
                    placeholder={t("phonePlace")}
                    type="text"
                    className={t("text-align") + " form-control "}
                    required=""
                    id="phone"
                    onChange={(e) => handl(e)}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <input
                    type="text"
                    placeholder={t("city")}
                    className={t("text-align") + " form-control "}
                    required=""
                    id="city"
                    onChange={(e) => handl(e)}
                  />
                </div>

                <div className="btn-glob-contain ">
                  <button className="btn btn-primary w-100 " type="submit">
                    {t("applyBtn")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage3;
