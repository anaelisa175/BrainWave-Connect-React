import React from "react";
import Head from 'next/head';
import ArtigoPremium2 from "../../src/components/articles/ArtigoPremium2.jsx";

export default function TDAHEstereotiposPage() {
  return (
    <>
      <Head>
        <title>TDAH: Além dos Estereótipos - BrainWave Connect</title>
        <meta name="description" content="TDAH: Além dos Estereótipos - A Verdade Sobre o Transtorno - BrainWave Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ArtigoPremium2 />
    </>
  );
}