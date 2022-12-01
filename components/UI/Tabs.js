import Aos from "aos";
import { Animated } from "react-animated-css";
import { useEffect, useState } from "react";
import style from "./Tabs.module.css";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const Tabs = (props) => {
  const { t, lang } = useTranslation("common");
  const location = useRouter();
  const [toggleState, setToggleState] = useState(2);
  useEffect(() => {
    Aos.init();
  }, []);

  const toggleTabHandler = (index) => {
    setToggleState(index);
  };

  return (
    <div
      dir={t("dir")}
      className={
        style.nav__tabs +
        " " +
        (location.pathname.includes("/sarwa-Life") ? style.color_green : "")
      }
    >
      <ul className={style.nav + " nav-justified mb-3 " + style.tabs_p}>
        <li id="retail" className={style.nav_item + " nav-item"}>
          <a
            onClick={() => toggleTabHandler(2)}
            className={
              toggleState === 2
                ? style.nav_link +
                  " nav-link " +
                  style.tab_link +
                  " " +
                  style.active
                : style.nav_link + " nav-link " + style.tab_link
            }
          >
            <h6>{props.tabTwoTitle}</h6>
          </a>
        </li>
        <li id="commercial" className={style.nav_item + " nav-item"}>
          <a
            onClick={() => toggleTabHandler(1)}
            className={
              toggleState === 1
                ? style.nav_link +
                  " nav-link " +
                  style.tab_link +
                  " " +
                  style.active
                : style.nav_link + " nav-link " + style.tab_link
            }
          >
            <h6>{props.tabOneTitle}</h6>
          </a>
        </li>
      </ul>

      <div
        className="tab-content"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <div
          className={
            toggleState === 1 ? "tab-pane fade show active" : "tab-pane"
          }
          id={toggleState === 1 ? "n1" : "n2"}
        >
          <Animated
            animationInDuration="2000"
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={true}
          >
            {props.tabOneContent}
          </Animated>
        </div>
        <div
          className={
            toggleState === 2 ? "tab-pane fade show active" : "tab-pane"
          }
        >
          <Animated
            animationInDuration="2000"
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={true}
          >
            {props.tabTwoContent}
          </Animated>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
