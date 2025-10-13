"use client";

import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import ThemeList from "./components/ThemeList";
import RedacaoFAQ from "./components/RedacaoFAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <>
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
