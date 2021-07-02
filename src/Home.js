import React from "react";
import "./Home.css";
import Banner from "./Banner";
import ServiceGallery from "./ServiceGallery";
import Info from "./Info";
import Footer from "./Footer";
import MainRow from "./MainRow";
import ImageRow from "./ImageRow";
import { galleryAnetteCollection } from "./collection";

// bug -- using isMainPrice to show the mainRow__image--container in MainRow.js

function Home() {
  return (
    <>
      <Banner />
      <div className="home">
        <MainRow
          title="Kolleksjon"
          isJustifyContentCenter
          isColumnFlexDirection
          // isContentWidth
          isMainPrice
          isFontColorWhite
        >
          <ImageRow isReverse images={galleryAnetteCollection} />
        </MainRow>
        <MainRow isMainPrice isAlignItemsCenter isJustifyContentCenter>
          <ImageRow images={galleryAnetteCollection} />
        </MainRow>
        <Info />
        <ServiceGallery />
        <Footer />
      </div>
    </>
  );
}

export default Home;
