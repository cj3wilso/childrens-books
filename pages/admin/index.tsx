import Head from "next/head";
import Layout from "@/components/layout/layout";

function Admin() {
  return (
    <>
      <Head>
        <title>Admin - Kids Tales</title>
        <meta name="description" content="Create books for your children!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        Hi
      </Layout>
    </>
  );
}

export default Admin;