import MediaLayout from "../../components/Content/MediaLayout";
import { useRouter } from "next/router";
import Head from "next/head";

const MediaPage = () => {
  const location = useRouter();
  const { data } = location.query;

  return (
    <div>
      <Head>
        <title> Insurance Industry News and Updates by Sarwa Insurance</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Sarwa Insurance | Know the latest insurance industry news and updates about property, engineering, medical, marine insurance, and so much more."
        />
      </Head>
      <div
        className={
          location.pathname.includes("/sarwa-Life") ? "color-green " : ""
        }
      >
        <MediaLayout tabType={data} />
      </div>
    </div>
  );
};

export default MediaPage;
