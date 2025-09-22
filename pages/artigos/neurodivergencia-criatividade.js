import React from "react";
import Head from 'next/head';
import NeurodivergenciaCriatividade from "../../src/components/articles/NeurodivergenciaCriatividade.jsx";

export default function NeurodivergenciaCriatividadePage() {
  return (
    <>
      <Head>
        <title>Neurodivergência e Criatividade - BrainWave Connect</title>
        <meta name="description" content="Neurodivergência e Criatividade - BrainWave Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NeurodivergenciaCriatividade />
    </>
  );
}