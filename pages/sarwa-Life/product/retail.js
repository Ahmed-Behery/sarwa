import OurProductsLayout from "../../../components/Content/OurProductsLayout";
import { useRouter } from 'next/router'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation';
const Retail = () => {
  const location = useRouter();
  const {t,lang} = useTranslation("common");
  return (
    <div>
      <Head>
          <title>Sarwa Life| Variety of Life Insurance plans.</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Sarwa Life provides a variety of life Commercial and Personal Life insurance Plans tailored to meet your personal or commercial needs and goals." />
      </Head>
      <div className={location.pathname.includes("/sarwa-Life")?"color-green" :""}>
        <OurProductsLayout />
      </div>
    </div>
  );
};

export default Retail;
