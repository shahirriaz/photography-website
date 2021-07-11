import React from "react";
import "./Prices.css";
import PriceComponent from "./PriceComponent";
import MainRow from "./MainRow";
import { useEffect } from "react";

const imageArray = [
  "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=950&q=80",
  "https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
];

const priceDescription = [
  "Bildepakke 1 -5 høyoppløste filer 5995 kr",

  "Bildepakke 2 -10 høyoppløste filer 6995 kr",

  "Bildepakke 3 -15 høyoppløste filer 7995 kr",

  " Bildepakke 4 -20 høyoppløste filer 8995 kr",
];

const eventPriceDescription = [
  "4000,- Fredagsbryllup 1-2 time i studio og eller ute",

  "6800,- Lørdagsbryllup 1-2 time i studio og eller ute",

  "9000,- Lørdagsbryllup 3 timer i studio og eller ute + vielse",

  "13000,- Halv dag. 6 timer",

  "22000,- Hel dag . 12 timer",
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
        description="Fotograferingsprisen dekker forberedelser, selve fotograferingen, arkivering, plukking og klargjøring av bilder til presentasjon. Bildene presenteres i både farge og sorthvitt via egen innlogging på vår hjemmeside. Visningstime er inkludert i prisen. Den har vi vanligvis en måneds tid etter fotograferingen. Da går vi sammen gjennom bildene og lager det dere måtte ønske."
        isColumnFlexDirection
        isMainPrice
        isBackgroundWhite
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
          pakke_subTitle_3="Stor pakke - 15 bilder"
          pakke_price_1="2500 ,-"
          pakke_price_2="3000 ,-"
          pakke_price_3="4000 ,-"
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
        title="Nyfødt"
        subTitle="Priser for nyfødt"
        description="Det sies at et bilde øker i verdi for hver dag som går, og det med god grunn. Nyfødtfotografering er noe helt spesielt. Det å få ett nytt familiemedlem kan være overveldende på mange vis, og helst skulle man kanskje ønske at man kunne fryse tiden for å nyte hvert sekund med dette nydelige lille nurket mens det er så lite, enda lengre."
        priceDescription={priceDescription}
        image="https://images.unsplash.com/photo-1522771930-78848d9293e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
        isAlignItemsCenter
        isReverse
        hr
        isFontColorWhite
        Icon
      />
      <MainRow
        title="Bryllup"
        subTitle="Priser for bryllup"
        description="Jeg elsker brudepar! Dere skal senke skuldrene og stole på at det blir bra bilder. Jeg er med dere så lenge dere vil, og fanger store og små øyeblikk.  Alle våre brudepar har en planleggingstime i god tid før bryllupsdagen. Da blir vi litt kjent med hverandre og snakker om ønsker og muligheter. I etterkant av fotograferingen har vi visningstime. Der ser vi bildene stort på skjerm, og jeg hjelper med valg av takkekort, forstørrelser, rammer og selvfølgelig album."
        priceDescription={eventPriceDescription}
        image="https://images.unsplash.com/photo-1603043647336-e71a50a294c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80"
        isAlignItemsCenter
        hr
        isBackgroundWhite
        Icon
      />

      <MainRow
        title="Familie Fotografering"
        subTitle="Priser for familiebilder"
        description="Ta vare på minnene med gode familiebilder. Når dere kommer blir vi enige om hvilket uttrykk dere ønsker, og planlegger fotograferingen ut fra det."
        imageArray={imageArray}
        isReverse
        hr
        isFontColorWhite
        priceDescription={priceDescription}
        Icon
      />
    </div>
  );
}

export default Prices;

//TODO: We need a component that only renders a row, that row can take image, title, subtitle, etc.
