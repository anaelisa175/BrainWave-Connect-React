import React from "react";
import Head from 'next/head';
import TDAHMitosVerdades from "../../src/components/articles/TDAHMitosVerdades.jsx";

export default function TDAHMitosVerdadesPage() {
  return (
    <>
      <Head>
        <title>TDAH: Mitos e Verdades - BrainWave Connect</title>
        <meta name="description" content="TDAH: Mitos e Verdades - BrainWave Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <TDAHMitosVerdades />
    </>
  );
}
