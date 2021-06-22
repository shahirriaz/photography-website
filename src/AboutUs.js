import React, { useEffect } from "react";
import "./AboutUs.css";
import natur2 from "./images/natur2.jpg";
import natur3 from "./images/natur3.jpg";
import natur4 from "./images/natur4.jpg";
import artist from "./images/artist.jpg";
import par from "./images/par.jpg";
import natur from "./images/natur.jpg";
import MainRow from "./MainRow";

const imageArray = [natur2, natur3, natur4];
const imageArray2 = [par, natur, artist];

const image1 =
  "https://scontent.fsvg2-1.fna.fbcdn.net/v/t1.6435-9/70286183_10157368012485149_1983841786249871360_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=zuSKgH-WgUYAX_pFldZ&_nc_ht=scontent.fsvg2-1.fna&oh=3c16a5977e53241af44e03685e50e720&oe=60D52C46";

const image2 =
  "https://scontent.fsvg2-1.fna.fbcdn.net/v/t1.18169-9/21617618_10155521999305149_130155191225791537_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=6bXURUH0jrgAX-Z3stC&_nc_ht=scontent.fsvg2-1.fna&oh=fcf9fbe33afb978225a9fee5876f2437&oe=60D45AE9";

const image3 =
  "https://scontent.fsvg2-1.fna.fbcdn.net/v/t1.6435-9/43596025_10156565480825149_8772047476002652160_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=flinRcV9SlUAX_WFIu6&_nc_ht=scontent.fsvg2-1.fna&oh=8af98873b13365b95977b9caf5c1af5c&oe=60D433B2";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutUs">
      <div className="aboutUs__container">
        <MainRow
          title="Om oss"
          subTitle="Vi er et par og vi driver med familie fotografering fra Stavanger"
          description="Vi åpnet studio på Madla i 1999. Rikard skulle hjelpe meg i gang et par måneder og nå har det altså gått over 20 år. Jeg liker mennesker, stemninger, årstider, gjensyn, samtaler, latter og melankoli. Rikard er daglig leder og redigerer alle bildene våre. Vi får begge god kontakt med kundene og har mange som kommer tilbake gang på gang. Det er det aller beste vi vet, og en bekreftelse på kvaliteten vi leverer. Mange planlegger og tenker på fotografering i årevis før de gjør noe med det. Det er ikke noe å vente på. Du blir ikke yngre. Jeg har lang erfaring i å få deg til å slappe av foran kamera. Det er ikke så farlig som du tror, og sannsynligvis blir du glad i bildene."
          image={image1}
          isRowFlexDirection
          isAlignItemsCenterImage
          isMarginRightImage
        />

        <MainRow
          subTitle="Vi er mye i naturen og fotograferer masse"
          description="Vi åpnet studio på Madla i 1999. Rikard skulle hjelpe meg i gang et par måneder og nå har det altså gått over 20 år. Jeg liker mennesker, stemninger, årstider, gjensyn, samtaler, latter og melankoli."
          image={image2}
          isAlignItemsCenter
          isMarginRightImage
        />

        <MainRow
          subTitle="Jeg giftet meg i 2018"
          description="Morbi varius fermentum egestas. Etiam id sem in nisi porttitor vulputate eget ut ligula. Suspendisse justo lorem, tempus eget sodales a, dictum sed felis. Suspendisse dictum leo vitae lorem vulputate, non semper lacus sollicitudin. Donec vitae magna ac nisl viverra vulputate viverra ut ipsum. Phasellus malesuada arcu arcu. Cras consequat mattis libero vitae ultricies. Duis rutrum scelerisque risus eget maximus. Nam convallis sodales consequat. Quisque ullamcorper condimentum massa a aliquam. Maecenas a rhoncus elit. Phasellus porta justo magna, sed venenatis ipsum efficitur vitae. Sed leo dolor, commodo nec nibh at, facilisis vestibulum elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          
                    Cras enim sapien, sollicitudin at ligula in, auctor pulvinar lorem. In gravida libero eget orci aliquet, sed venenatis leo sagittis. Duis rutrum, mauris non volutpat ullamcorper, dolor turpis auctor elit, et euismod libero nisi eget leo. Vivamus non ex rhoncus, aliquam augue vel, porttitor orci. Fusce molestie facilisis elit blandit eleifend. "
          image={image3}
          isReverse
          isAlignItemsCenter
          isMarginLeftImage
          isMarginRightContent
        />

        <MainRow
          isColumnFlexDirection
          subTitle="Noe av mitt verk"
          imageArray={imageArray}
          isContentWidth
        />

        <MainRow
          isColumnFlexDirection
          subTitle="Kjærlighet er for alle lol"
          // isAlignItemsCenter
          imageArray={imageArray2}
          isContentWidth
          // isJustifyContentCenter
        />
      </div>
    </div>
  );
}

export default AboutUs;
