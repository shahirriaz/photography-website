import React from "react";
import "./Prices.css";
import PriceComponent from "./PriceComponent";
import MainRow from "./MainRow";
import { useEffect } from "react";

const imageArray = [
  "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=950&q=80",
  "https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
];

function Prices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="prices">
      <MainRow
        title="Priser"
        subTitle="Et komplett prisliste"
        description="Nedenfor ser du et veldig bra pris. Det er den beste prisen i hele verden , lorem ipsum Nulla facilisi. Sed sit amet molestie nulla. Curabitur volutpat varius nulla et aliquet. Suspendisse et odio quis tus. Sed sit amet molestie nulla. Curabitur volutpat varius nulla et aliquet. Suspendisse et odio quis tus. Sed sit amet molestie nulla. Curabitur volutpat varius nulla et aliquet. Suspendisse et odio quis tus."
        isColumnFlexDirection
        contentImage="https://images.unsplash.com/photo-1591681354784-c684e483dae0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=646&q=80"
      >
        <PriceComponent
          title="Nyfødt"
          pakke_subTitle_1="Pakke 1 NyFødt"
          pakke_subTitle_2="Pakke 2 NyFødt med Familie"
          pakke_price_1="3500kr"
          pakke_price_2="4500kr"
        />
        <PriceComponent
          title="Familie Fotografering"
          pakke_subTitle_1="Studio"
          pakke_subTitle_2="Outside"
          pakke_price_1="3000kr"
          pakke_price_2="3500kr"
        />

        <PriceComponent
          title="Bryllup"
          pakke_subTitle_1="vielse og ute med alle Digital filler"
          pakke_subTitle_2="All day med Alle digital filler"
          pakke_price_1="10000kr"
          pakke_price_2="18000kr"
        />
      </MainRow>
      <MainRow
        title="Bryllup"
        subTitle="Nulla facilisi. Sed sit amet molestie nulla. Curabitur volutpat varius nulla"
        description="tate ipsum a convallis. Ut hendrerit magna sed hendrerit molestie. Pellentesque ullamcorper auctor felis. Nullam placerat lacinia ipsum id rutrum. Vivamus aliquet quis metus commodo mollis. Cras commodo tortor a mi placerat mollis. Nam ut ipsum ullamcorper, sollicitudin urna pellentesque, condimentum mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae ante eget libero mattis molestie ut quis quam. Phasellus porttitor risus at erat commodo, et viverra turpis commodo. Quisque mollis libero vitae quam mollis consectetur. Etiam vel nunc lacus. Cras ultricies porttitor risus ac dapibus. Vivamus eu risus hendrerit, bibendum neque a, euismod eros."
        image="https://images.unsplash.com/photo-1603043647336-e71a50a294c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80"
        isMarginRightImage
        isAlignItemsCenter
      />
      <MainRow
        title="Nyfødt"
        subTitle="Nulla facilisi. Sed sit amet molestie nulla. Curabitur volutpat varius nulla"
        description="tate ipsum a convallis. Ut hendrerit magna sed hendrerit molestie. Pellentesque ullamcorper auctor felis. Nullam placerat lacinia ipsum id rutrum. Vivamus aliquet quis metus commodo mollis. Cras commodo tortor a mi placerat mollis. Nam ut ipsum ullamcorper, sollicitudin urna pellentesque, condimentum mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae ante eget libero mattis molestie ut quis quam. Phasellus porttitor risus at erat commodo, et viverra turpis commodo. Quisque mollis libero vitae quam mollis consectetur. Etiam vel nunc lacus. Cras ultricies porttitor risus ac dapibus. Vivamus eu risus hendrerit, bibendum neque a, euismod eros."
        image="https://images.unsplash.com/photo-1522771930-78848d9293e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
        isMarginLeftImage
        isAlignItemsCenter
        isMarginRightContent
        isReverse
      />
      <MainRow
        title="Familie Fotografering"
        subTitle="Nulla facilisi. Sed sit amet molestie nulla. Curabitur volutpat varius nulla"
        description="tate ipsum a convallis. Ut hendrerit magna sed hendrerit molestie. Pellentesque ullamcorper auctor felis. Nullam placerat lacinia ipsum id rutrum. Vivamus aliquet quis metus commodo moll ultricies porttitor risus ac dapibus. Vivamus eu risus hendrerit, bibendum neque a, euismod eros."
        image="https://images.unsplash.com/photo-1590171980804-fa50d5ca4524?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
        isMarginRightImage
        isAlignItemsCenter
        isMarginRightContent
        imageArray={imageArray}
      />
    </div>
  );
}

export default Prices;

//TODO: We need a component that only renders a row, that row can take image, title, subtitle, etc.
