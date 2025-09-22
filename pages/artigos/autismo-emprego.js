import React from "react";
import Head from 'next/head';
import AutismoEmprego from "../../src/components/articles/AutismoEmprego.jsx";

export default function AutismoEmpregoPage() {
  return (
    <>
      <Head>
        <title>Autismo e Emprego - BrainWave Connect</title>
        <meta name="description" content="Autismo e Emprego - BrainWave Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <AutismoEmprego />
    </>
  );
}
