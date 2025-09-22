import React from "react";
import Head from 'next/head';
import SensorialidadeAutismo from "../../src/components/articles/SensorialidadeAutismo.jsx";

export default function SensorialidadeAutismoPage() {
  return (
    <>
      <Head>
        <title>Sensorialidade e Autismo - BrainWave Connect</title>
        <meta name="description" content="Sensorialidade e Autismo - BrainWave Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <SensorialidadeAutismo />
    </>
  );
}
