import { Fragment } from "react";
import ContactLayout from "../../components/Content/ContactLayout";
import Banner from "../../components/UI/Banner";
import { useRouter } from "next/router";
import Head from "next/head";
const ContactUsPage = () => {
  const location = useRouter();
  return (
    <Fragment>
      <Head>
        <title>Sarwa Insurance | Branches | Contact Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="If you have any questions concerning Sarwa Insurance plans, we are here to help. Check here to find our branches and get in touch with us.
"
        />
      </Head>
      <div
        className={
          location.pathname.includes("/sarwa-Life") ? "color-green " : ""
        }
      >
        <Banner
          imgUrl="https://contact-clients-dev.s3.amazonaws.com/ContacUsIncBannar.jpg"
          height={"250px"}
        />
        <ContactLayout />
      </div>
    </Fragment>
  );
};

export default ContactUsPage;
