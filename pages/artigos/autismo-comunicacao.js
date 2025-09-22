import React from "react";
import Head from 'next/head';
import AutismoComunicacao from "../../src/components/articles/AutismoComunicacao.jsx";

export default function AutismoComunicacaoPage() {
  return (
    <>
      <Head>
        <title>Autismo e Comunicação - BrainWave Connect</title>
        <meta name="description" content="Autismo e Comunicação - BrainWave Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <AutismoComunicacao />
    </>
  );
}


