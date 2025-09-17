import Head from 'next/head';
import InclusaoEscolar from '../src/components/InclusaoEscolar';

export default function InclusaoEscolarPage() {
  return (
    <>
      <Head>
        <title>Inclusão Escolar para Neurodivergentes | BrainWave Connect</title>
        <meta name="description" content="Transformando ambientes educacionais para acolher e potencializar estudantes neurodivergentes através de práticas inclusivas efetivas." />
        <meta name="keywords" content="inclusão escolar, neurodivergência, educação inclusiva, design universal, acessibilidade educacional" />
        <meta property="og:title" content="Inclusão Escolar para Neurodivergentes" />
        <meta property="og:description" content="Transformando ambientes educacionais para acolher e potencializar estudantes neurodivergentes através de práticas inclusivas efetivas." />
        <meta property="og:type" content="article" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <InclusaoEscolar />
    </>
  );
}