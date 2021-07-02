import React, { useEffect } from "react";
import "./AboutUs.css";
import natur2 from "./images/natur2.jpg";
import natur3 from "./images/natur3.jpg";
import natur4 from "./images/natur4.jpg";
import artist from "./images/artist.jpg";
import par from "./images/par.jpg";
import natur from "./images/natur.jpg";
import MainRow from "./MainRow";

const image1 =
  "https://scontent.fsvg2-1.fna.fbcdn.net/v/t1.6435-9/70286183_10157368012485149_1983841786249871360_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=zuSKgH-WgUYAX_pFldZ&_nc_ht=scontent.fsvg2-1.fna&oh=3c16a5977e53241af44e03685e50e720&oe=60D52C46";

const image2 =
  "https://scontent.fsvg2-1.fna.fbcdn.net/v/t1.18169-9/21617618_10155521999305149_130155191225791537_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=6bXURUH0jrgAX-Z3stC&_nc_ht=scontent.fsvg2-1.fna&oh=fcf9fbe33afb978225a9fee5876f2437&oe=60D45AE9";

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
          image={image1}
          isJustifyContentCenter
          isBackgroundWhite
        />

        <MainRow
          subTitle="Vi er glad i naturlige bilder, med varme toner, spennende lyssetting, og følelser"
          description="Hvert øyeblikk har en back-story, og det er vår jobb å oversette det til et bilde. Vi er her for å skape vakre, tidløse minner for deg og din familie."
          image={image2}
          // isBackgroundWhite
          isFontColorWhite
        />

        <MainRow
          subTitle="Vårt fokus er at du skal føle deg komfortabel med oss og vårt kamera, og at du skal ha det gøy"
          description="Gjennom vår fotografering har vi ikke bare fått kunder men også gode venner. La oss bli venner! Ta gjerne kontakt med oss for en hyggelig samtale"
          image={image3}
          isReverse
          isAlignItemsCenter
          isMarginLeftImage
          isMarginRightContent
          // isBackgroundWhite
          isFontColorWhite
        />
      </div>
    </div>
  );
}

export default AboutUs;
