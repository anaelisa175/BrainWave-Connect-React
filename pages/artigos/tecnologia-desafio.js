import React from "react";
import Head from 'next/head';
import TecnologiaNeurodivergentes from "../../src/components/articles/TecnologiaNeurodivergentes.jsx";

export default function TecnologiaNeurodivergentesPage() {
  return (
    <>
      <Head>
        <title>Tecnologia e Desafio - BrainWave Connect</title>
        <meta name="description" content="Tecnologia e Desafio - BrainWave Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <TecnologiaNeurodivergentes />
    </>
  );
}
