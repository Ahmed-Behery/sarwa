import { Fragment } from "react";
import Features from "../../components/Content/Features";
import Slider from "../../components/Content/Slider";
import Head from "next/head";
const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Sarwa Insurance</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/Sarwa-Insurance-Bilingual-logo.png" />
      </Head>
      <div className="page_content">
        <Slider />
        <Features />
      </div>
    </Fragment>
  );
};

export default HomePage;
