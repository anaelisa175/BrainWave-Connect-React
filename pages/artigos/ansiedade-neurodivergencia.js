import React from "react";
import Head from 'next/head';
import AnsiedadeNeurodivergencia from "../../src/components/articles/AnsiedadeNeurodivergencia.jsx";

export default function AnsiedadeNeurodivergenciaPage() {
  return (
    <>
      <Head>
        <title>Ansiedade e Neurodivergência - BrainWave Connect</title>
        <meta name="description" content="Ansiedade e Neurodivergência - BrainWave Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <AnsiedadeNeurodivergencia />
    </>
  );
}


