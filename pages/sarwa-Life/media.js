import MediaLayout from "../../components/Content/MediaLayout";
import { useRouter } from "next/router";
import Head from "next/head";

const MediaPage = () => {
  const location = useRouter();
  const {data} = location.query;


  return (
    <div>
      <Head>
        <title>Sarwa Life’s latest Insurance News and events in Egypt </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Sarwa Life Insurance | Learn about the latest Life insurance news and events in Egypt | Learn about life insurance plans and policies." />
      </Head>
      <div
        className={
          location.pathname.includes("/sarwa-Life") ? "color-green " : ""
        }
      >
        <MediaLayout  tabType={data} />
      </div>
    </div>
  );
};

export default MediaPage;
