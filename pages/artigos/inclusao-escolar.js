import React from "react";
import Head from 'next/head';
import InclusaoEscolar from "../../src/components/articles/InclusaoEscolar.jsx";

export default function InclusaoEscolarPage() {
  return (
    <>
      <Head>
        <title>Inclusão Escolar - BrainWave Connect</title>
        <meta name="description" content="Inclusão Escolar - BrainWave Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <InclusaoEscolar />
    </>
  );
}