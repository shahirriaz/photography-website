import React from "react";
import "./PriceComponent.css";

function PriceComponent({
  title,
  pakke_subTitle_1,
  pakke_subTitle_2,
  pakke_subTitle_3,
  pakke_price_1,
  pakke_price_2,
  pakke_price_3,
}) {
  return (
    <div className="priceComponent">
      <div className="priceComponent__card">
        <div className="priceComponent__card--title">
          <h1>{title}</h1>
        </div>

        <div className="priceComponent__card--container">
          <div className="priceComponent__card--content">
            <div className="priceComponent__card--content--left">
              <p>{pakke_subTitle_1}</p>
            </div>
            <div className="priceComponent__card--content--right">
              <p>{pakke_price_1}</p>
            </div>
          </div>

          <div className="priceComponent__card--content">
            <div className="priceComponent__card--content--left">
              <p>{pakke_subTitle_2}</p>
            </div>
            <div className="priceComponent__card--content--right">
              <p>{pakke_price_2}</p>
            </div>
          </div>

          {pakke_subTitle_3 && (
            <div className="priceComponent__card--content">
              <div className="priceComponent__card--content--left">
                <h1>I am left</h1>
              </div>
              <div className="priceComponent__card--content--right">
                <h1>I am right</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PriceComponent;
