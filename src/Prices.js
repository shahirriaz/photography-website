import React from "react";
import "./Prices.css";
import PriceComponent from "./PriceComponent";
import MainRow from "./MainRow";
import { useEffect } from "react";
import familieBilde from "./images/gallery/beata/5.jpg";
import Footer from "./Footer";

const imageArray = [
  "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=950&q=80",
  "https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
];

const priceDescription = [
  "Bildepakke 1-5 filer 2000 kr",

  "Bildepakke 2-10 filer 3500 kr",

  "Bildepakke 3-15 filer 4995 kr",

  " Bildepakke 4-20 filer 6990 kr",
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
        {/* <PriceComponent
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
        /> */}
      </MainRow>
      <MainRow
        title="Ettårsfotografering"
        subTitle="Priser for ettårsfotografering"
        description="Sed pretium dictum venenatis. Duis auctor a nisl non vehicula. Vestibulum at diam at tortor iaculis porta. Ut iaculis volutpat efficitur. Nulla facilisi. Proin nibh dui, dictum quis justo ac, congue molestie elit."
        priceDescription={priceDescription}
        // image="https://images.unsplash.com/photo-1608561435915-874b68cfc209?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        imageArray={imageArray}
        isReverse
        isMargin
        isPadding
        // hr
        isFontColorWhite
        Icon
        // serMerBilderBtn
        isCenterButton
      />
      <MainRow
        title="Bryllup"
        subTitle="Priser for bryllup"
        description="Aliquam auctor, diam ac placerat accumsan, magna elit aliquam risus, eu aliquet lorem quam et orci. Praesent sem arcu, eleifend vel augue eget, auctor pellentesque massa. Nullam sagittis elit nec eleifend congue. "
        priceDescription={eventPriceDescription}
        // image="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
        imageArray={imageArray}
        // hr
        isBackgroundWhite
        isMargin
        isPadding
        Icon
        isCenterButton
      />

      <MainRow
        title="Familie"
        subTitle="Priser for familiebilder"
        description="Curabitur rhoncus, urna vitae rutrum malesuada, eros tortor fermentum dolor, non dignissim mauris ipsum eget lectus. Donec pulvinar urna eu dolor pharetra, eu egestas metus laoreet. "
        // imageArray={imageArray}
        isReverse
        image={familieBilde}
        // hr
        isFontColorWhite
        isPadding
        isMargin
        priceDescription={priceDescription}
        Icon
        serMerBilderBtn
      />
      <Footer />
    </div>
  );
}

export default Prices;

//TODO: We need a component that only renders a row, that row can take image, title, subtitle, etc.
