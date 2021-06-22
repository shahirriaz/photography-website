import React, { useEffect } from "react";
import "./ImageRow.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ImageRow({ isReverse }) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className={`imageRow ${isReverse && "imageRow--reverseDirection"}`}>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="imageRow__container"
      >
        <img
          src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1597524678053-5e6fef52d8a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=883&q=80"
          alt=""
        />
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="imageRow__container"
      >
        <img
          src="https://images.unsplash.com/photo-1557446772-0985ac892643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt=""
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        className="imageRow__container"
      >
        <img
          src="https://images.unsplash.com/photo-1542037012038-5f9fb2b3c681?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default ImageRow;
