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
      {/* <div className="home__progressBarContainer">
        <div
          className="home__progressBarStyle"
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div> */}
      <Banner />
      <div className="home">
        <MainRow
          title="Velkommen"
          description="Vi er et fotografteam som består av mann og kone som elsker å fange opp øyeblikk og forevige verdifulle minner.
          Fotografi er noe vi begge har stor lidenskap for og gjennom vårt kamera får vi vitne utrolig fine øyeblikk med fantastiske mennesker. Det er drivkraften vår, og derfor vi elsker det vi gjør."
          isJustifyContentCenter
          isColumnFlexDirection
          // isContentWidth
          isMainPrice
          isFontColorWhite
        >
          <ImageRow
            // isReverse
            images={galleryAnetteCollection}
          />
        </MainRow>
        <MainRow
          isMainPrice
          isAlignItemsCenter
          isJustifyContentCenter
          isColumnFlexDirection
        >
          <ImageRow images={galleryBeateCollection} />
        </MainRow>

        <Info />
        <ServiceGallery />
        <Footer />
      </div>
    </>
  );
}

export default Home;
