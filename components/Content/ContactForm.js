import style from "./ContactForm.module.css";
import React, { Fragment } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import axios from "axios";
import { useState } from "react";
const ContactForm = () => {
  const url = "https://website-api.sarwa.insurance/feedbacks";
  const { t, lang } = useTranslation("common");
  const location = useRouter();
  const insuranceCommercial = [
    t("property"),
    t("eng"),
    t("motor"),
    t("marine"),
    t("liability"),
    t("medical"),
  ];
  const insuranceRetail = [t("proTitle1"), t("proTitle2"), t("proTitle3")];
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

  const [selected, setSelected] = React.useState(t("complaint"));
  const [customer, setCustomer] = React.useState(t("no"));
  const [status, setStatus] = React.useState(t(""));

  const customerHandeler = (event) => {
    setCustomer(event.target.value);
    const newdata = { ...data };
    newdata[event.target.id] = event.target.value;
    setData(newdata);
  };
  const invidHandeler = (event) => {
    setStatus(event.target.value);
    const newdata = { ...data };
    newdata[event.target.id] = event.target.value;
    setData(newdata);
  };
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    const newdata = { ...data };
    newdata[event.target.id] = event.target.value;
    setData(newdata);
  };
  const changeSelectOptionHandler2 = (event) => {
    setSelected(event.target.value);
    const newdata = { ...data };
    newdata[event.target.id] = event.target.value;
    setData(newdata);
  };
  let input = null;
  let input2 = null;
  let input3 = null;
  let input4 = null;

  let handelInp = () => (input2 = "sdhcbsdhjbcsdh");

  if (selected === t("Enquiry")) {
    input = (
      <div className="">
        <label className={style.form_label}>{t("Enquiry")}</label>
        <textarea
          onChange={(e) => handl(e)}
          id="description"
          name="Enquiry"
          className={style.text_area}
        ></textarea>
      </div>
    );
  } else if (selected == t("claim")) {
    input = (
      <div className="">
        <div className="">
          <label className={style.form_label + " d-block w-100"}>
            {t("aCustomer")}
            &nbsp;
          </label>

          <select onChange={customerHandeler} className="form-style w-100 my-2">
            <option></option>
            <option>{t("yes")}</option>
            <option>{t("no")}</option>
          </select>
          <div>
            {customer == t("yes")
              ? (input3 = (
                  <select onChange={invidHandeler} className="my-4 w-100">
                    <option>{t("typeCust")}</option>
                    <option>{t("individual")}</option>
                    <option>{t("commercial")}</option>
                  </select>
                ))
              : customer == t("yes")
              ? (input3 = (
                  <div>
                    <label className="d-block">{t("cardNumber")}</label>
                    <input className="d-block" type="text" />
                  </div>
                ))
              : ""}
          </div>
          <div>
            {status == t("commercial")
              ? (input4 = (
                  <div>
                    <select className="my-2 w-100">
                      <option>{t("life")}</option>
                      <option>{t("investment")}</option>
                      <option>{t("medical")}</option>
                      <option>{t("insurance")}</option>
                    </select>
                  </div>
                ))
              : status == t("individual")
              ? (input4 = (
                  <div className="">
                    <label className="d-block ">{t("cardNumber")}</label>
                    <input className="d-block w-100 my-2" type="text" />
                  </div>
                ))
              : ""}
          </div>
          <label className={style.form_label}>{t("claim")}</label>

          <textarea
            onChange={(e) => handl(e)}
            id="description"
            name="cla"
            className={style.text_area}
          ></textarea>
        </div>
      </div>
    );
  } else if (selected == t("policy")) {
    input = (
      <div className="">
        <label name="policy" className={style.form_label}>
          {" "}
          {t("policy")}{" "}
        </label>

        <select
          className={style.form_select}
          name="Policy1"
          id="description"
          onChange={(e) => handl(e)}
          required
        >
          <option className={style.opt_title} disabled>
            {t("retailT")}
          </option>
          {location.pathname.includes("sarwa-Life")
            ? lifeRetail.map(function (policy, index) {
                return <option key={index}>{policy}</option>;
              })
            : insuranceRetail.map(function (policy, index) {
                return <option key={index}>{policy}</option>;
              })}
          <option className={style.opt_title} disabled>
            {t("comercial")}
          </option>
          {location.pathname.includes("sarwa-Life")
            ? lifeCommerial.map(function (policy, index) {
                return <option key={index}>{policy}</option>;
              })
            : insuranceCommercial.map(function (policy, index) {
                return <option key={index}>{policy}</option>;
              })}
        </select>
      </div>
    );
  } else if (selected == t("complaint")) {
    input = (
      <div className="">
        <label className={style.form_label + " d-block w-100"}>
          {t("aCustomer")} &nbsp;
        </label>

        <select onChange={customerHandeler} className=" form-style w-100 my-2">
          <option></option>
          <option>{t("yes")}</option>
          <option>{t("no")}</option>
        </select>
        <div>
          {customer == t("yes")
            ? (input3 = (
                <select onChange={invidHandeler} className="my-4 w-100">
                  <option>{t("typeCust")}</option>
                  <option>{t("individual")}</option>
                  <option>{t("commercial")}</option>
                </select>
              ))
            : customer == t("yes")
            ? (input3 = (
                <div>
                  <label className="d-block">{t("cardNumber")}</label>
                  <input className="d-block" type="text" />
                </div>
              ))
            : ""}
        </div>
        <div>
          {status == t("commercial")
            ? (input4 = (
                <div>
                  <select className="my-2 w-100">
                    <option>{t("life")}</option>
                    <option>{t("investment")}</option>
                    <option>{t("medical")}</option>
                    <option>{t("insurance")}</option>
                  </select>
                </div>
              ))
            : status == t("individual")
            ? (input4 = (
                <div className="mb-2">
                  <label className="d-block ">{t("cardNumber")}</label>
                  <input className="d-block w-100 my-2" type="text" />
                </div>
              ))
            : ""}
        </div>

        <label className={style.form_label + " d-block pt-3"}>
          {t("complaint")}
        </label>

        <textarea
          onChange={(e) => handl(e)}
          id="description"
          name="comp"
          className={style.text_area + " my-2"}
        ></textarea>
      </div>
    );
  } else {
    input = (
      <div className="">
        <label className={style.form_label}> {t("policy")} </label>

        <select
          name="policy"
          className={style.form - select}
          onChange={changeSelectOptionHandler2}
          required
          id="description"
        >
          <option className={style.opt_title} disabled>
            {t("retailT")}
          </option>
          {location.pathname.includes("sarwa-Life")
            ? lifeRetail.map(function (policy, index) {
                <option>{policy}</option>;
              })
            : insuranceRetail.map(function (policy, index) {
                return <option key={index}>{policy}</option>;
              })}
          <option className="opt_title" disabled>
            {t("comercial")}
          </option>
          {location.pathname.includes("sarwa-Life")
            ? lifeCommerial.map(function (policy, index) {
                return <option key={index}>{policy}</option>;
              })
            : insuranceCommercial.map(function (policy, index) {
                return <option key={index}>{policy}</option>;
              })}
        </select>
      </div>
    );
  }

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    phone: "",
    description: "",

    source: location.pathname.includes("sarwa-Life") ? "Life" : "Insurance",
  });
  const handleSubmit = (event) => {
    // event.preventDefault();

    alert(t("messageF"));
    axios
      .post(url, {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        city: data.city,
        service: data.service,
        description: data.description,
        source: data.source,
      })
      .then((res) => {});
  };
  function handl(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  return (
    <div
      id="contactf"
      className={
        location.pathname.includes("sarwa-Life")
          ? style.contact__formL + " " + style.contact__form
          : style.contact__form
      }
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <a name="contactf"></a>
      <form id="myForm" onSubmit={handleSubmit}>
        <div className="row g-3 mb-2">
          <div className="col-md-4">
            <label className={style.form_label}>{t("namePlace")}</label>
            <input
              name="name"
              onChange={(e) => handl(e)}
              type="text"
              className="form-control"
              id="firstName"
              required
            />
          </div>
          <div className="col-md-4">
            <label className={style.form_label}>{t("lNamePlace")}</label>
            <input
              name="lname"
              onChange={(e) => handl(e)}
              type="text"
              className="form-control"
              id="lastName"
              required
            />
          </div>
          <div className="col-md-4">
            <label className={style.form_label}>{t("mailPlace")}</label>
            <div className="input-group">
              <input
                onChange={(e) => handl(e)}
                name="email"
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
          </div>
        </div>
        <div className="row g-3 mb-2">
          <div className="col-md-4">
            <label className={style.form_label}>{t("phonePlace")}</label>
            <input
              name="phone"
              onChange={(e) => handl(e)}
              type="text"
              className="form-control"
              id="phone"
              required
            />
          </div>
          <div className="col-md-4">
            <label className={style.form_label}>{t("governate")}</label>
            <select
              onChange={(e) => handl(e)}
              name="city"
              type="text"
              className="form-select"
              id="city"
              required
            >
              {citys.map((city) => {
                return <option key={city.index}>{city}</option>;
              })}
            </select>
          </div>
          <div className="col-md-4">
            <label className={style.form_label}>{t("service")}</label>
            <select
              className="form-select"
              onChange={changeSelectOptionHandler}
              id="service"
              required
            >
              <option>{t("complaint")}</option>
              <option>{t("policy")}</option>
              <option> {t("Enquiry")}</option>
              <option value={t("claim")}> {t("claim")}</option>
            </select>
          </div>
          {input}
        </div>
        {/* <div className="row g-3 mb-2">
          <div class="col-md-4">
            <label class="form-label">Enquiry</label>
            <input type="text" class="form-control" required />
          </div>
          <div class="col-md-4">
            <label class="form-label">Claim</label>
            <input type="text" class="form-control" required />
          </div>
          <div class="col-md-4">
            <label class="form-label">Complaint</label>
            <input type="text" class="form-control" required />
          </div>
        </div> */}
        <div className={style.btn_glob_contain}>
          <button
            onClick={handelInp}
            className={"btn btn-primary mt-3 " + style.contact_apply}
            type="submit"
          >
            {t("applyBtn")}
          </button>
        </div>
      </form>
      {input2}
    </div>
  );
};

export default ContactForm;
