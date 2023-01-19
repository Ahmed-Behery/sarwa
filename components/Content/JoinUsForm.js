import style from "./JoinUsForm.module.css";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import useFileUpload from "react-use-file-upload";
import { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";

const JoinUsForm = () => {
  let fileName = "";
  let fileType = "";
  let fileLink = "";
  let fileData = "";
  let cvS3Link = "";

  let handelFile = (e) => {
    fileName = e.target.files[0].name;
    fileType = e.target.files[0].type;
    fileData = e.target.files[0];
    setplace(fileName);
  };

  const location = useRouter();
  const { t, lang } = useTranslation("common");
  const [file, selectFile] = [];
  const [btn, setplace] = useState(t("cv"));
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cv: "",

    source: location.pathname.includes("sarwa-Life") ? "Life" : "Insurance",
  });

  const url = "https://website-api.sarwa.insurance/career";

  const [verify, setVerify] = useState(true);
  function onChange() {
    setVerify(true);
  }
  const handleSubmit = async (event) => {
    alert(t("messageF"));
    await pushProfilePhotoToS3(data.url, fileLink);

    axios
      .post(url, {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        cv: data.cv,
        source: data.source,
      })
      .then((res) => {
        setData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          cv: "",
        });
      });
  };

  function handl(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
  function rest(e) {
    const newdata = { ...data };
    newdata[e.target.id] = "";
    setData(newdata);
  }

  async function pushProfilePhotoToS3(presignedUrl, uploadPhoto) {
    const getS3SignUrl = async (fileName) => {
      let cvS3Link = await fetch(
        "https://website-api.sarwa.insurance/s3/generate-url",
        {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({ fileName: fileName }),
        }
      );

      cvS3Link = cvS3Link.json();

      return cvS3Link;
    };

    const cvS3Link = await getS3SignUrl(fileName);

    const myHeaders = new Headers({ "Content-Type": "image/*" });
    const response = await fetch(presignedUrl, {
      method: "PUT",
      headers: myHeaders,
      body: uploadPhoto,
    });
  }

  return (
    <div>
      <div className={style.why__join + " container " + style.color_green}>
        <div className={style.join__content + " text-center"}>
          <h1 className={style.join__t}>{t("joinTitle")}</h1>
          <p>{t("joinDesc")}</p>
          <p>{t("joinDesc1")}</p>
          <p>{t("joinDesc2")}</p>
          <p>{t("joinDesc3")}</p>
          <p>{t("joinDesc4")}</p>
        </div>
        <picture>
          <source srcSet="/updated-pics/JoinUsWhy.png" type="image/webp" />
          <img alt="" src="/updated-pics/JoinUsWhy.png" />
        </picture>
      </div>

      <h2 className={"text-center " + style.text_yellow}>
        {t("appFormTitle")}
      </h2>
      <div
        dir={t("dir")}
        className={
          location.pathname.includes("/sarwa-Life")
            ? style.join__form + " my-5 " + style.join__formL
            : style.join__form + "  my-5"
        }
      >
        <form onSubmit={(e) => handleSubmit(e)} className="mt-4">
          <div className="row g-2 mb-4">
            <div className="col-md-6">
              <input
                type="text"
                value={data.firstName}
                onChange={(e) => handl(e)}
                id="firstName"
                name="name"
                className="form-control"
                placeholder={t("namePlace")}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={(e) => handl(e)}
                type="text"
                value={data.lastName}
                id="lastName"
                name="lname"
                placeholder={t("lNamePlace")}
                className="form-control"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={(e) => handl(e)}
                type="email"
                value={data.email}
                id="email"
                name="email"
                placeholder={t("mailPlace")}
                className="form-control"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={(e) => handl(e)}
                name="phone"
                id="phone"
                value={data.phone}
                placeholder={t("phonePlace")}
                type="text"
                className="form-control"
                required
              />
            </div>

            <div className="col-md-12">
              <div className={style.upload_btn_wrapper}>
                <div className={"w-100 " + style.input_contain}>
                  <input
                    type="file"
                    value={data.cv}
                    onChange={(e) => handelFile(e)}
                    placeholder={t("cv")}
                    className={t("text-align") + " " + style.btn_u}
                    // onClick={() => {
                    //   // Single File Upload
                    //   selectFile();
                    //   // setplace("");
                    // }}
                  />
                  {btn}
                  {file ? (
                    <div className="file_up">
                      <span> {file.name} </span>
                    </div>
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>
            </div>
            <div>
              <ReCAPTCHA
                sitekey="6LcjLWkhAAAAAKq-5QRzOZDvO6aTZCHm9NWipA7P
                "
                onChange={onChange}
              />
            </div>
          </div>

          <div className={style.btn_glob_contain}>
            <button
              disabled={!verify}
              onClick={rest}
              className={style.apply_btn}
              type="submit"
            >
              {t("applyBtn")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinUsForm;
