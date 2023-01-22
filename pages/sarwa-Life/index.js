import { Fragment } from "react";

import SliderLife from "../../components/Content/SliderLife";
import FeaturesL from "../../components/Content/FeaturesL";
import Head from "next/head";
const Lifeweb = () => {
  return (
    <Fragment>
      <Head>
        <title>Sarwa Life Insurance - Life insurance for you and your family.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="At Sarwa Life Insurance, we provide you with a wide range of Life Assurance plans to ensure that you and your family are protected." />
      </Head>
      <SliderLife />
      <FeaturesL />
    </Fragment>
  );
};

export default Lifeweb;
