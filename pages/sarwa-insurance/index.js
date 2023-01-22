import { Fragment } from "react";
import Features from "../../components/Content/Features";
import Slider from "../../components/Content/Slider";
import Head from "next/head";
const HomePage = () => {
  return (
    <Fragment>
      <Head>
      <link rel="icon" href="/Sarwa-Insurance-Bilingual-logo.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Sarwa Insurance is one of the leading comprehensive insurance companies in Egypt. We will provide you with an insurance plan for your particular needs"/>
      <title>Sarwa Insurance Company. Insurance That Protects Your Assets.</title>
      </Head>
      <div className="page_content">
        <Slider />
        <Features />
      </div>
    </Fragment>
  );
};

export default HomePage;
