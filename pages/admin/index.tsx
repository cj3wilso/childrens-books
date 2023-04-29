import Head from "next/head";
import PageLayout from "@/components/layout/page/page";
import Book from "@/components/layout/book/book";

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
        <Book></Book>
      </PageLayout>
    </>
  );
}

export default Admin;