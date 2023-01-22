import OurProductsLayout from "../../../components/Content/OurProductsLayout";
import { useRouter } from 'next/router'
import Head from 'next/head'

const Retail = () => {
  const location = useRouter();
  return (
    <div>
      <Head>
          <title>Sarwa Insurance products &  plans</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="At Sarwa insurance, we provide comprehensive commercial and personal insurance solutions designed to safeguard your valuable assets.
" />
      </Head>
      <div className={location.pathname.includes("/sarwa-Life")?"color-green" :""}>
        <OurProductsLayout />
      </div>
    </div>
  );
};

export default Retail;
