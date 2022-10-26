import CardProfile from "@components/CardProfile";
import CardRepo from "@components/CardRepo";
import InputSearch from "@components/InputSearch";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GitHub User Search</title>
        <meta name="description" content="GitHub User Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-5 py-10 md:py-14 md:px-12">
        <p className="mb-6 text-xl font-bold">GitHub User Search</p>
        <InputSearch />

        <div className="divider"></div>

        <div className="flex justify-center">
          <div className="w-full md:w-8/12">
            <CardProfile />
            <CardRepo />
          </div>
        </div>
      </div>
    </>
  );
}
