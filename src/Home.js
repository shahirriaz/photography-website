import React, { useState, useEffect } from "react";
import "./Home.css";
import Banner from "./Banner";
import ServiceGallery from "./ServiceGallery";
import "./ScrollIndicator.css";
import Info from "./Info";
import Footer from "./Footer";
import MainRow from "./MainRow";
import ImageRow from "./ImageRow";
import { galleryAnetteCollection } from "./collection";
import { homeGrid1 } from "./collection";
import KundeOmtale from "./KundeOmtale";
import HomeMenu from "./HomeMenu";
import QuestionBanner from "./QuestionBanner";
import Grid from "./Grid";
import KeyPointsSection from "./KeyPointsSection";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <Banner />
      <div className="home">
        <Hero />
        <HomeMenu />
        {/* <Grid /> */}
        <MainRow
          title="Kundeomtale"
          subTitle="Her er litt omtale fra kunder vi har jobbet med tidligere. Se instagrammen våres for å ikke gå glipp av gratis fotografering"
          isFontColorWhite
        />
        {/* <KundeOmtale /> */}
        <QuestionBanner />
        {/* <Footer />   */}
      </div>
    </>
  );
}

export default Home;
