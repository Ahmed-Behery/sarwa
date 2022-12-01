import { Fragment } from "react";

import SliderLife from "../../components/Content/SliderLife";
import FeaturesL from "../../components/Content/FeaturesL";
import Head from "next/head";
const Lifeweb = () => {
  return (
    <Fragment>
      <Head>
        <title>Sarwa Life</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SliderLife />
      <FeaturesL />
    </Fragment>
  );
};

export default Lifeweb;
