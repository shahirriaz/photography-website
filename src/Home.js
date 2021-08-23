import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import Banner from "./Banner";
import Footer from "./Footer";
import MainRow from "./MainRow";
import KundeOmtale from "./KundeOmtale";
import HomeMenu from "./HomeMenu";
import QuestionBanner from "./QuestionBanner";
import KeyPointsSection from "./KeyPointsSection";
import barn2 from "./images/gallery/barn/barn_3.jpg";
import { useStateValue } from "./StateProvider";
import Grid from "./Grid";
import NewMenu from "./NewMenu";

function Home() {
  const [state, dispatch] = useStateValue();
  const elementRef = useRef();

  useEffect(() => {
    dispatch({
      type: "SEND_REF",
      ref: elementRef,
    });
  }, []);

  return (
    <>
      <Banner
        img="https://free4kwallpapers.com/uploads/originals/2019/03/04/neon-japan-wallpaper.jpg"
        title="Fotograf"
        subTitle="Memory Lane"
        isBtn
      />
      <div className="home">
        <div className="scrollElement" ref={elementRef}>
          <MainRow
            title="Fotografering i Stavanger og Sandnes"
            subTitle="Hei og velkommen til Memory Lane fotografering"
            description="Gjerne leave en like på bildet nedenfor :)"
            isFontColorWhite
            isMargin
            isPadding
          />
        </div>

        <Grid />
        {/* <KeyPointsSection /> */}
        {/* <MainRow
          title="Se vår galleri"
          subTitle="Her kan du se våres nyligste tatt bilder. Bare klikk på et av bildene du ønsker å se mer av."
          isFontColorWhite
          isMargin
          isPadding
        /> */}
        {/* <NewMenu /> */}
        {/* <Hero /> */}
        {/* <div className="scrollElement" ref={elementRef}> */}
        {/* <HomeMenu /> */}
        {/* </div> */}

        {/* <Grid /> */}
        {/* <MainRow
          title="Kundeomtale"
          subTitle="Her er litt omtale fra kunder vi har jobbet med tidligere. Se instagrammen våres for å ikke gå glipp av gratis fotografering"
          isFontColorWhite
          isMargin
          isPadding
        /> */}

        {/* <KundeOmtale /> */}
        {/* <QuestionBanner /> */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
