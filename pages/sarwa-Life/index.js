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
        <meta name="description" content="Sarwa makes insurance easy and efficient. We’ve spent the time to know you and what you need to protect. We’ve built our business around your needs. At Sarwa, we’ve got you covered." />
      </Head>
      <SliderLife />
      <FeaturesL />
    </Fragment>
  );
};

export default Lifeweb;
