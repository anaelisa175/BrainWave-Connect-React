import React from "react";
import Head from 'next/head';
import ArtigoPremium from "../../src/components/articles/ArtigoPremium.jsx";

export default function ArtigoPremiumPage() {
  return (
    <>
      <Head>
        <title>Artigo Premium - BrainWave Connect</title>
        <meta name="description" content="Artigo Premium - BrainWave Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ArtigoPremium />
    </>
  );
}



