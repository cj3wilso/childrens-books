import { lazy } from "react";
import Head from "next/head";

const PageLayout = lazy(() => import("@/components/layout/page/page"));
const Clouds = lazy(() => import("@/components/drawings/clouds"));
const Grass = lazy(() => import("@/components/drawings/Grass"));

import { Grid, Card, Center } from "@/styles/home.styles";

function Home() {
  return (
    <>
      <Head>
        <title>Kids Tales Home</title>
        <meta name="description" content="Create books for your children!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Clouds />
      <PageLayout type="marketing">
        <Center>
          <h1>DOWNLOAD MY FREE BOOK</h1>
        </Center>

        <Grid>
          <Card>
            <h2>Environments</h2>
            <p>Choose from desserts, mountains, rivers and more.</p>
          </Card>

          <Card>
            <h2>Characters</h2>
            <p>Name your chameleon and update the animals he meets.</p>
          </Card>

          <Card>
            <h2>Bilingual</h2>
            <p>Create the book in any two languages you wish.</p>
          </Card>

          <Card>
            <h2>Age Range</h2>
            <p>From one simple word per page to a structured story.</p>
          </Card>
        </Grid>
      </PageLayout>
      <Grass />
    </>
  );
}

export default Home;
