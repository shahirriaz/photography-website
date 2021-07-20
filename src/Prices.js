import React from "react";
import "./Prices.css";
import PriceComponent from "./PriceComponent";
import MainRow from "./MainRow";
import { useEffect } from "react";
import familieBilde from "./images/gallery/beata/5.jpg";

const imageArray = [
  "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=950&q=80",
  "https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
];

const priceDescription = [
  "Bildepakke 1-5 høyoppløste filer 2000 kr",

  "Bildepakke 2-10 høyoppløste filer 3500 kr",

  "Bildepakke 3-15 høyoppløste filer 4995 kr",

  " Bildepakke 4-20 høyoppløste filer 6990 kr",
];

const eventPriceDescription = [
  "2900,- Fredagsbryllup 1-2 timer",

  "3900,- Lørdagsbryllup 1-2 timer",

  "5900,- Lørdagsbryllup 3 timer",

  "7990,- Halv dag. 6 timer",

  "9000,- Hel dag . 12 timer",
];

function Prices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="prices">
      <MainRow
        title="Priser"
        subTitle="Info om pris"
        description="Fotograferingsprisen dekker forberedelser, selve fotograferingen og redigeringen."
        isColumnFlexDirection
        isMainPrice
        isBackgroundWhite
        isMarginFirstRow
        isPadding
        // hr
      >
        <PriceComponent
          title="Barn"
          pakke_subTitle_1="Portrett NyFødt"
          pakke_subTitle_2="Med Familie"
          pakke_price_1="2500kr"
          pakke_price_2="4500kr"
        />
        <PriceComponent
          title="Familie"
          pakke_subTitle_1="Liten pakke - 5 bilder"
          pakke_subTitle_2="Mellom pakke - 10 bilder"
          // pakke_subTitle_3="Stor pakke - 15 bilder"
          pakke_price_1="2500 ,-"
          pakke_price_2="3000 ,-"
          // pakke_price_3="4000 ,-"
        />

        <PriceComponent
          title="Events"
          pakke_subTitle_1="Liten pakke - Opptil 3t"
          pakke_subTitle_2="Stor pakke - Opptil 5t"
          pakke_price_1="4500,-"
          pakke_price_2="6000,-"
        />
      </MainRow>
      <MainRow
        title="Ettårsfotografering"
        subTitle="Priser for ettårsfotografering"
        description="Det sies at et bilde øker i verdi for hver dag som går, og det med god grunn. Nyfødtfotografering er noe helt spesielt. Det å få ett nytt familiemedlem kan være overveldende på mange vis, og helst skulle man kanskje ønske at man kunne fryse tiden for å nyte hvert sekund med dette nydelige lille nurket mens det er så lite, enda lengre."
        priceDescription={priceDescription}
        image="https://images.unsplash.com/photo-1608561435915-874b68cfc209?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        isReverse
        isMargin
        isPadding
        hr
        isFontColorWhite
        Icon
      />
      <MainRow
        title="Bryllup"
        subTitle="Priser for bryllup"
        description="Jeg elsker brudepar! Dere skal senke skuldrene og stole på at det blir bra bilder. Jeg er med dere så lenge dere vil, og fanger store og små øyeblikk.  Alle våre brudepar har en planleggingstime i god tid før bryllupsdagen. Da blir vi litt kjent med hverandre og snakker om ønsker og muligheter. I etterkant av fotograferingen har vi visningstime. Der ser vi bildene stort på skjerm, og jeg hjelper med valg av takkekort, forstørrelser, rammer og selvfølgelig album."
        priceDescription={eventPriceDescription}
        image="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
        hr
        isBackgroundWhite
        isMargin
        isPadding
        Icon
      />

      <MainRow
        title="Familie"
        subTitle="Priser for familiebilder"
        description="Ta vare på minnene med gode familiebilder. Når dere kommer blir vi enige om hvilket uttrykk dere ønsker, og planlegger fotograferingen ut fra det."
        // imageArray={imageArray}
        isReverse
        image={familieBilde}
        hr
        isFontColorWhite
        isPadding
        isMargin
        priceDescription={priceDescription}
        Icon
      />
    </div>
  );
}

export default Prices;

//TODO: We need a component that only renders a row, that row can take image, title, subtitle, etc.
