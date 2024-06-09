import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Anas Khalifa | Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content="Anas Khalifa | Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Anas Khalifa | Frontend Developer" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="test.com" />
        <meta property="og:image" content="test.com/screenshot.png" />
        <meta
          property="og:description"
          content="Hi! This is Anas Khalifa Portfolio, and I'm a Frontend Developer."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@anasgets111" />
        <meta
          name="twitter:title"
          content="Anas Khalifa | Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Hi! This is Anas Khalifa Portfolio, and I'm a Frontend Developer."
        />
        <meta name="twitter:creator" content="@anasgets111" />
        <meta name="twitter:image" content="test.com/screenshot.png" />
      </Head>
      <Home />
    </>
  );
}
