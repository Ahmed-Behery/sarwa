import { Fragment } from "react";
import AboutLayout from "../../components/Content/AboutLayout";
import { useRouter } from "next/router";
import Head from "next/head";

const About = () => {
  const location = useRouter();
  return (
    <Fragment>
      <Head>
        <title>Learn About Sarwa Insurance, the fastest-growing insurance company.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Sarwa Insurance is set to be the fastest-growing insurance company in Egypt. Offering a wide range of both Personal and Commercial insurance solutions." />
      </Head>
      <div
        className={
          location.pathname.includes("/sarwa-Life")
            ? "color-green mb-4"
            : "mb-4"
        }
      >
        <AboutLayout />
      </div>
    </Fragment>
  );
};

export default About;
