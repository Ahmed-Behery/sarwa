import MediaLayout from "../../components/Content/MediaLayout";
import { useRouter } from 'next/router'
import Head from 'next/head'
const MediaPage = () => {
  const location = useRouter();

  return (
    <div>
      <Head>
          <title>Sarwa Insurance | Our News</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={location.pathname.includes("/sarwa-Life")?"color-green " :""}>
        <MediaLayout />
      </div>
    </div>
  );
};

export default MediaPage;
