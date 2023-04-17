import Aos from "aos";
import { useEffect } from "react";
import BranchesDropdown from "./BranchesDropdown";
import ContactForm from "./ContactForm";
import style from "./ContactLayout.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import FilterFieldDropdown from "./FilterFieldDropdown";
import BranchesMap from "./mapBranches";

import React from "react";
import useTranslation from "next-translate/useTranslation";

const ContactLayout = (props) => {
  let hotAr = "https://www.linkpicture.com/q/اتصل-بنا_2.png";

  const { t, lang } = useTranslation("common");
  const location = useRouter();
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <div dir={t("dir")} className={"container " + style.contact__layout}>
        <div className="row m-0">
          <div className="col-lg-12">
            <p
              className={"text-center " + style.branchTit}
              data-aos-once="true"
              data-aos-duration="1000"
            >
              {t("branches")}
            </p>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-12">
            <BranchesDropdown />
          </div>
        </div>
        <div>
          <BranchesMap />
        </div>

        <h2 className="text-center mt-4">{t("contact")}</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactLayout;
