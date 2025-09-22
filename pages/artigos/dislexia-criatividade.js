import React from "react";
import Head from 'next/head';
import DislexiaCriatividade from "../../src/components/articles/DislexiaCriatividade.jsx";

export default function DislexiaCriatividadePage() {
  return (
    <>
      <Head>
        <title>Dislexia e Criatividade - BrainWave Connect</title>
        <meta name="description" content="Dislexia e Criatividade - BrainWave Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <DislexiaCriatividade />
    </>
  );
}
