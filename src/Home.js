import React,{useRef, useEffect} from "react";
import "./Home.css";
import Banner from "./Banner";
import Footer from "./Footer";
import { useStateValue } from "./StateProvider";
import Grid from "./Grid";
import barn_8Banner from "./images/gallery/barn/compressed/barn_8Banner.jpg";


function Home() {
  const [state, dispatch] = useStateValue();
  const elementRef = useRef();

  useEffect(() => {
    dispatch({
      type: "SEND_REF",
      ref: elementRef,
    });
  }, []);

  return (
    <>
      <Banner
        positionX="51%"
        positionY="39%"
        img={barn_8Banner}
        title="Fotograf"
        subTitle="Memory Lane"
        isBtn
        home
      />
      <div className="home">
        <div className="scrollElement" ref={elementRef}></div>
        <Grid />
      </div>
    </>
  );
}

export default Home;
