import Head from "next/head";
import styles from "../styles/Home.module.css";
import { BackTop, Button } from "antd";
import Footer from "../Modules/Footer";
import Header from "../Modules/Header";
import HeaderMobile from "../Modules/HeaderMobile";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | LiLia Sekai E-Commerce</title>
        <meta name="description" content="LiLia Sekai Shopping Platform" />
        <link rel="icon" href="/lilia_logo2.png" />
      </Head>
      <Header />
      <HeaderMobile />
      <main className={styles.main}>
        <Button>TEST</Button>
      </main>
      <BackTop />
      <Footer />
    </div>
  );
}
