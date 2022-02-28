import Head from "next/head";
import React from "react";
import requests from "../lib/requests";
import Banner from "./Banner";
import Header from "./Header";
import Row from "./Row";

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Head>
        <title>Netflix - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <Row
        title="FILMS ORIGINALS NETFLIX"
        fetchUrl={requests.fetchNetflixOrignals}
        isLargeRow
      />

      <Row title="Tendances 2022" fetchUrl={requests.fetchTrending} />

      <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />

      <Row title="Films d'actions" fetchUrl={requests.fetchActionMovies} />

      <Row title="Films comiques" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Films d'Horreur" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Films Romantiques" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default Home;
