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

  "Bildepakke 5 -25 høyuppløste filer 9995 kr",

  "Bildepakke 6 -30 høyuppløste filer 10.995 kr",

  "Bildepakke 7 -35 høyuppløste filer 11.995 kr",

  "Bildepakke 8 -40 høyuppløste filer 12.995 kr,",
];

function Prices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="prices">
      <MainRow
        title="Priser"
        subTitle="Her er en oversikt over mine priser og produkter. Et fint utvalg av ulike produkter som passer inn i dagens moderne hjem. Ikke glem å få bildene dine opp på vegg eller i et album slik at de kan nytes til sin fulle rett."
        // description="Nedenfor ser du et veldig bra pris. Det er den beste prisen i hele verden"
        isColumnFlexDirection
        // contentImage="https://images.unsplash.com/photo-1591681354784-c684e483dae0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=646&q=80"
        isMainPrice
        hr
      >
        <PriceComponent
          title="Nyfødt"
          pakke_subTitle_1="Portrett NyFødt"
          pakke_subTitle_2="Pakke 2 NyFødt med Familie"
          pakke_price_1="2500kr"
          pakke_price_2="4500kr"
        />
        <PriceComponent
          title="Familie Fotografering"
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
        title="Events"
        subTitle="Priser for fotografering"
        priceDescription={priceDescription}
        image="https://images.unsplash.com/photo-1603043647336-e71a50a294c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80"
        isMarginRightImage
        isAlignItemsCenter
        isSubPrice
        hr
      ></MainRow>
      <MainRow
        title="Nyfødt"
        subTitle="Nulla facilisi. Sed sit amet molestie nulla. Curabitur volutpat varius nulla"
        description="tate ipsum a convalctetur. Etiam vel nunc lacus. Cras ultricies porttitor risus ac dapibus. Vivamus eu risus hendrerit, bibendum neque a, euismod eros."
        image="https://images.unsplash.com/photo-1522771930-78848d9293e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
        isMarginLeftImage
        isAlignItemsCenter
        isMarginRightContent
        isReverse
        isSubPrice
        hr
      >
        <PriceComponent
          title="Brffyllup"
          pakke_subTitle_1="vielse og ute med alle Digital filler"
          pakke_subTitle_2="All day med Alle digital filler"
          pakke_price_1="10000kr"
          pakke_price_2="18000kr"
        />
        <PriceComponent
          title="loool"
          pakke_subTitle_1="vielse og ute med alle Digital filler"
          pakke_subTitle_2="All day med Alle digital filler"
          pakke_price_1="10000kr"
          pakke_price_2="18000kr"
        />
      </MainRow>
      <MainRow
        title="Familie Fotografering"
        subTitle=""
        description="tate ipsum a convallis. Ut hendrerit magna sed hendrerit molestie. Pellentesque ullamcorper auctor felis. Nullam placerat lacinia ipsum id rutrum. Vivamus aliquet quis metus commodo moll ultricies porttitor risus ac dapibus. Vivamus eu risus hendrerit, bibendum neque a, euismod eros."
        // image="https://images.unsplash.com/photo-1590171980804-fa50d5ca4524?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
        isMarginRightImage
        isAlignItemsCenter
        isMarginRightContent
        imageArray={imageArray}
        isSubPrice
        hr
      >
        <PriceComponent
          title="Brffyllup"
          pakke_subTitle_1="vielse og ute med alle Digital filler"
          pakke_subTitle_2="All day med Alle digital filler"
          pakke_price_1="10000kr"
          pakke_price_2="18000kr"
        />
        <PriceComponent
          title="loool"
          pakke_subTitle_1="vielse og ute med alle Digital filler"
          pakke_subTitle_2="All day med Alle digital filler"
          pakke_price_1="10000kr"
          pakke_price_2="18000kr"
        />
      </MainRow>
    </div>
  );
}

export default Prices;

//TODO: We need a component that only renders a row, that row can take image, title, subtitle, etc.
