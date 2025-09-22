import React from "react";
import Head from 'next/head';
import TDAHVidaAdulta from "../../src/components/articles/TDAHVidaAdulta.jsx";

export default function TDAHVidaAdultaPage() {
  return (
    <>
      <Head>
        <title>TDAH na Vida Adulta - BrainWave Connect</title>
        <meta name="description" content="TDAH na Vida Adulta - BrainWave Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <TDAHVidaAdulta />
    </>
  );
}
