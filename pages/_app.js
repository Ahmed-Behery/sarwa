import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.js";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import "react-multi-carousel/lib/styles.css";
import "../styles/globals.css";
import { Fragment, useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import Layout1 from "../components/Layout/Layout1";
import Layout2 from "../components/Layout/Layout2";
import ScrollToTop from "../components/Layout/ScrollToTop";
import Head from "next/head";
import { useRouter } from "next/router";
import store from "../components/store/store";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    require("bootstrap/dist/css/bootstrap.min.css");
  }, []);
  const location = useRouter();

  return (
    <Provider store={store}>
      <Fragment>
        <Head>
          <link
            rel="icon"
            href={
              location.pathname.includes("/sarwa-Life")
                ? "Sarwa-life-01.png"
                : location.pathname.includes("/sarwa-insurance")
                ? "/Sarwa-Insurance-Bilingual-logo.png"
                : "/Sarwa-Insurance-Bilingual-logo (1).png"
            }
          />
        </Head>
        <ScrollToTop>
          {!location.pathname.includes("sarwa-insurance") &&
          !location.pathname.includes("sarwa-Life") ? (
            <Layout2>
              <Component {...pageProps} />
            </Layout2>
          ) : (
            <Layout1>
              <Component {...pageProps} />
            </Layout1>
          )}
        </ScrollToTop>
      </Fragment>
    </Provider>
  );
};

export default appWithTranslation(MyApp);
