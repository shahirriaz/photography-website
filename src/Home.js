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
import { galleryBeateCollection } from "./collection";

// bug -- using isMainPrice to show the mainRow__image--container in MainRow.js

function Home() {
  // const [scrollTop, setScrollTop] = useState(0);

  // const onScroll = () => {
  //   const winScroll = document.documentElement.scrollTop;
  //   const height =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;

  //   const scrolled = (winScroll / height) * 100;

  //   setScrollTop(scrolled);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <>
      <Banner />
      <div className="home">
        <MainRow
          title="Fotografering i Stavangerområdet"
          description="Velkommen til to profesjonelle fotograf fra Stavanger. Vi er et ektepar som tilbyr alt av fotografering. Siden 2016 har vi fanget forevige øyeblikk for familier og brudepar. Vi jobber for å gi lykkelige faimlieminner som vil minne deg om de fantastiske dagene. Nedenfor kan du se tjenester vi tilbyr."
          isFontColorWhite
          isMargin
          isPadding
          // contentImage="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          // isColumnFlexDirection
          // hr
        />

        <MainRow
          // title="Kolleksjon"
          // subTitle="Kolleksjon"
          // description="Vi er et fotografteam som består av mann og kone som elsker å fange opp øyeblikk og forevige verdifulle minner.
          // Fotografi er noe vi begge har stor lidenskap for og gjennom vårt kamera får vi vitne utrolig fine øyeblikk med fantastiske mennesker. Det er drivkraften vår, og derfor vi elsker det vi gjør."
          isJustifyContentCenter
          isAlignItemsCenter
          isColumnFlexDirection
          isMainPrice
          isFontColorWhite
        >
          <ImageRow
            // isReverse
            images={galleryAnetteCollection}
          />
        </MainRow>
        <ServiceGallery />

        <MainRow
          // subTitle="Natur"
          isFontColorWhite
          isMainPrice
          // isAlignItemsCenter
          isJustifyContentCenter
          isColumnFlexDirection
        >
          {/* <ImageRow images={galleryBeateCollection} /> */}
        </MainRow>

        <Info />

        <Footer />
      </div>
    </>
  );
}

export default Home;
