import { lazy } from "react";
import Head from "next/head";

const PageLayout = lazy(() => import("@/components/layout/page/page"));
const Book = lazy(() => import("@/components/layout/book/book"));

function Admin() {
  return (
    <>
      <Head>
        <title>Admin - Kids Tales</title>
        <meta name="description" content="Create books for your children!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout type="informational">
        <Book />
      </PageLayout>
    </>
  );
}

export default Admin;
