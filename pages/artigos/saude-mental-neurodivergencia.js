import React from "react";
import Head from 'next/head';
import SaudeMentalNeurodivergencia from "../../src/components/articles/SaudeMentalNeurodivergencia.jsx";

export default function SaudeMentalNeurodivergenciaPage() {
  return (
    <>
      <Head>
        <title>Saúde Mental e Neurodivergência - BrainWave Connect</title>
        <meta name="description" content="Saúde Mental e Neurodivergência - BrainWave Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <SaudeMentalNeurodivergencia />
    </>
  );
}