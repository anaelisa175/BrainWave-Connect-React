import Head from 'next/head';
import TecnologiaNeurodivergentes from '../src/components/TecnologiaNeurodivergentes';

export default function TecnologiaDesafio() {
  return (
    <>
      <Head>
        <title>Tecnologia: Aliada ou Desafio para Neurodivergentes? | BrainWave Connect</title>
        <meta name="description" content="Explorando como a tecnologia pode ser tanto uma ferramenta de empoderamento quanto uma barreira para pessoas neurodivergentes." />
        <meta name="keywords" content="tecnologia assistiva, neurodivergência, inclusão digital, acessibilidade" />
        <meta property="og:title" content="Tecnologia: Aliada ou Desafio para Neurodivergentes?" />
        <meta property="og:description" content="Explorando como a tecnologia pode ser tanto uma ferramenta de empoderamento quanto uma barreira para pessoas neurodivergentes." />
        <meta property="og:type" content="article" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TecnologiaNeurodivergentes />
    </>
  );
}