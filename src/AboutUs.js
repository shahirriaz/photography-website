import React, { useEffect } from "react";
import "./AboutUs.css";
import MainRow from "./MainRow";
import Footer from "./Footer";

const image1 =
  "https://images.unsplash.com/photo-1517488629431-6427e0ee1e5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

const image2 =
  "https://images.unsplash.com/photo-1517488629431-6427e0ee1e5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

const image3 =
  "https://images.unsplash.com/photo-1517488629431-6427e0ee1e5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutUs">
      <div className="aboutUs__container">
        <MainRow
          title="Om oss"
          subTitle="Vi er et fotografteam bestående av mann og kone som elsker å fange opp øyeblikk og forevige verdifulle minner."
          description="Fotografi er noe vi begge har stor lidenskap for og gjennom vårt kamera fåt vi virne utrolig fine øyeblikk med fantastiske mennesker. Det er drivkraften vår, og derfor vi elske det vi gjør."
          // image={image1}
          // isJustifyContentCenter
          isBackgroundWhite
          isMarginFirstRow
          isPadding
        />

        <MainRow
          subTitle="Vi er glad i naturlige bilder, med varme toner, spennende lyssetting, og følelser"
          description="Hvert øyeblikk har en back-story, og det er vår jobb å oversette det til et bilde. Vi er her for å skape vakre, tidløse minner for deg og din familie."
          image={image2}
          isFontColorWhite
          isRowFlexDirection
          isReverse
          isPadding
          isMargin
        />

        <MainRow
          subTitle="Vårt fokus er at du skal føle deg komfortabel med oss og vårt kamera, og at du skal ha det gøy"
          description="Gjennom vår fotografering har vi ikke bare fått kunder men også gode venner. La oss bli venner! Ta gjerne kontakt med oss for en hyggelig samtale"
          image={image3}
          isFontColorWhite
          isPadding
          isMargin
        />
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
