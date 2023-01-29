import Head from "next/head";
import HomeLayout from "../Home/HomeLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sarwa Insurance &  Sarwa Life Insurance</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="" />

        <link rel="icon" href="/Sarwa-Insurance-Bilingual-logo (1).png" />
      </Head>

      <HomeLayout />
    </div>
  );
}
