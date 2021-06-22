import React, { useEffect } from "react";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Banner() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <header
      data-aos="fade-in"
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url( "https://images.unsplash.com/photo-1598125443421-779f98323fe4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        )`,

        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Welcome to Memorylane</h1>
        <h1 className="banner__description">where we create memories</h1>
      </div>
    </header>
  );
}

export default Banner;
