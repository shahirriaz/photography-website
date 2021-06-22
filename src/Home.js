import React from "react";
import "./Home.css";
import Banner from "./Banner";
import ServiceGallery from "./ServiceGallery";
import Info from "./Info";
import Footer from "./Footer";
import MainRow from "./MainRow";
import ImageRow from "./ImageRow";

function Home() {
  return (
    <div className="home">
      <Banner />
      <MainRow
        subTitle="Kolleksjon"
        isJustifyContentCenter
        isColumnFlexDirection
        isContentWidth
        Icon
      >
        <ImageRow isReverse />
      </MainRow>
      <MainRow isAlignItemsCenter isJustifyContentCenter>
        <ImageRow />
      </MainRow>
      <Info />
      <ServiceGallery />
      <Footer />
    </div>
  );
}

export default Home;
