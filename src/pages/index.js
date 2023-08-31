import Head from "next/head";
import Container from "@/components/Container";
import SwiperComponent from "@/components/Swiper";
import {Roboto, Poppins, Merienda} from "next/font/google";
const poppins = Poppins({
  weight: ["400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"]
})

export default function Home() {
  return (
    <>
      <Head className={poppins.className}>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <h2>Main</h2>
          <div className="container-fluid">
            <SwiperComponent />
          </div>
        </Container>
      </main>
    </>
  );
}
