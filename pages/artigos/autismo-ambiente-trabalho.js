import React from "react";
import Head from 'next/head';
import AutismoAmbienteTrabalho from "../../src/components/articles/AutismoAmbienteTrabalho.jsx";

export default function AutismoAmbienteTrabalhoPage() {
  return (
    <>
      <Head>
        <title>Autismo e Ambiente de Trabalho - BrainWave Connect</title>
        <meta name="description" content="Autismo e Ambiente de Trabalho - BrainWave Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <AutismoAmbienteTrabalho />
    </>
  );
}
