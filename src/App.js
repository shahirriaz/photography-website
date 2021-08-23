import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Prices from "./Prices";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Bestill from "./Bestill";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <React.Suspense fallback={<p>Loading..</p>}>
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
            <Route path="/bestill">
              <Header isSticky />
              <Bestill />
            </Route>
            <Route path="/galleri/:name">
              <Header isAnimated isAbsoluteFixed />
              <Gallery />
            </Route>
            <Route path="/">
              <Header isAnimated isAbsoluteFixed />
              <Home />
            </Route>
          </React.Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
