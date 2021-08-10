import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Prices from "./Prices";
import AboutUs from "./AboutUs";
import Home from "./Home";
import HashLoader from "react-spinners/HashLoader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/kontakt">
            <Header isSticky />
            <Contact />
          </Route>
          <Route path="/omoss">
            <Header isSticky />
            <AboutUs />
          </Route>
          <Route path="/priser">
            <Header isSticky />
            <Prices />
          </Route>
          <Route path="/galleri/:name">
            <Header isAnimated isAbsoluteFixed />
            <Gallery />
          </Route>
          <Route path="/:name">
            <Header isAnimated isAbsoluteFixed />
            <Home />
          </Route>
          <Route path="/">
            <Header isAnimated isAbsoluteFixed />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
