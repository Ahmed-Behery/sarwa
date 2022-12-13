import { Fragment } from "react";
import AboutLayout from "../../components/Content/AboutLayout";
import { useRouter } from "next/router";
import Head from "next/head";

const About = () => {
  const location = useRouter();
  return (
    <Fragment>
      <Head>
        <title>Sarwa Insurance | About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
