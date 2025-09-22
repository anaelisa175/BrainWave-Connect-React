import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from "../src/components/layout/Header";
import SearchSection from "../src/components/sections/SearchSection";
import ThemeList from "../src/components/sections/ThemeList";
import RedacaoFAQ from "../src/components/sections/RedacaoFAQ";
import ContactSection from "../src/components/sections/ContactSection";
import Footer from "../src/components/layout/Footer";
import BackToTop from "../src/components/ui/BackToTop";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Scroll to top on route changes
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Header title enforcement
    const enforceHeaderTitle = () => {
      const headerH1 = document.querySelector('.header .header-container .logo-titulo h1');
      if (headerH1 && headerH1.textContent !== "BrainWave Connect") {
        headerH1.textContent = "BrainWave Connect";
      }
    };

    enforceHeaderTitle();
    const interval = setInterval(enforceHeaderTitle, 100);

    const style = document.createElement('style');
    style.innerHTML = `
      .header .header-container .logo-titulo h1::before,
      .header .header-container .logo-titulo h1::after {
        content: none !important;
        display: none !important;
      }
      .header .header-container .logo-titulo h1 {
        content: "BrainWave Connect" !important;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 26px !important;
        color: #071D3B !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      clearInterval(interval);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>BrainWave Connect</title>
        <meta name="description" content="BrainWave Connect - Conectando mentes ao futuro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <SearchSection />
      <div className="background-continuity">
        <ThemeList />
        <RedacaoFAQ />
        <ContactSection />
      </div>
      <BackToTop />
      <Footer />
    </>
  );
}
